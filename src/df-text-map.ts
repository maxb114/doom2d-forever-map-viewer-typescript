import { chevrotain } from './module-wrapper.js'
const createToken = chevrotain.createToken
const Lexer = chevrotain.Lexer

const True = createToken({ name: 'True', pattern: /\btrue\b/i })
const False = createToken({ name: 'False', pattern: /\bfalse\b/i })
const Null = createToken({ name: 'Null', pattern: /\bnull\b/i })
const Map = createToken({ name: 'Map signature', pattern: /\bmap\b/i })
const LCurly = createToken({ name: 'LCurly', pattern: /{/ })
const RCurly = createToken({ name: 'RCurly', pattern: /}/ })
const RParen = createToken({ name: 'RParen', pattern: /\)/ })
const LParen = createToken({ name: 'LParen', pattern: /\(/ })
const bitor = createToken({ name: '|', pattern: '|' })
const plus = createToken({ name: '+', pattern: '+' })
const StringLiteral = createToken({
  name: '"string"', pattern: /"(?:["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*?"/
})
const StringLiteralOrdinary = createToken({ name: "'string'", pattern: /'(?:["bfnrt/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*?'/ })
const NumberLiteral = createToken({
  name: 'NumberLiteral', pattern: /-?(0|[1-9]\d*)(\.\d+)?([eE][+-]?\d+)?/
})
const semicolon = createToken({ name: ';', pattern: /;/ })
const IdentifierLiteral = createToken({ name: 'ID', pattern: /[a-zA-Z][a-zA-Z0-9_]*/ })
const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: Lexer.SKIPPED
})
const Comment = createToken({
  name: 'Comment',
  pattern: /\/\/.*/,
  group: Lexer.SKIPPED
})
const MultilineComment = createToken({
  name: 'Comment',
  pattern: /\/\*[\s\S]*?\*\//,
  group: Lexer.SKIPPED
})

const DFTextTokens = [WhiteSpace, Comment, MultilineComment, plus, bitor, semicolon, NumberLiteral, StringLiteral, StringLiteralOrdinary, Map, Null, True, False, RParen, LParen, RCurly, LCurly, IdentifierLiteral]
const DFTextLexer = new Lexer(DFTextTokens)

// const EmbeddedActionsParser = chevrotain.EmbeddedActionsParser

// ---- parser
class DFTextParser extends chevrotain.EmbeddedActionsParser {
  constructor () {
    // @ts-expect-error
    super(DFTextTokens, { recoveryEnabled: true, outputCst: false })
    this.performSelfAnalysis()
  }

  public DFMap = this.RULE('DFMap', () => {
    const map = this.SUBRULE(this.Object)
    return map
  })

  private readonly Object = this.RULE('Object', () => {
    const obj: any = {}
    this.CONSUME(LCurly)
    this.MANY(() => {
      const item: any = this.SUBRULE(this.ObjectItem)
      obj[item[0]] = item[1]
    })
    this.CONSUME(RCurly)
    return obj
  })

  private readonly ObjectItem = this.RULE('ObjectItem', () => {
    const id1 = this.CONSUME(IdentifierLiteral)
    let val: any = []
    this.OR([
      { ALT: () => { const d = this.SUBRULE(this.TypedObject); val = structuredClone(d); val._type = id1.image } },
      { ALT: () => { const d = this.SUBRULE(this.Object); val = d } },
      { ALT: () => { const d = this.SUBRULE(this.value); val = d } }
    ])
    return [(val?._id) ?? id1.image, val] // if val is an object and has id property, use it
  })

  private readonly TypedObject = this.RULE('TypedObject', () => {
    const id = this.CONSUME(IdentifierLiteral)
    const obj = this.SUBRULE(this.Object)
    const newObj: any = structuredClone(obj)
    newObj._id = id.image
    return newObj
  })

  private readonly value = this.RULE('value', () => {
    const val = this.OR([
      {
        ALT: () => {
          const stringLiteral = this.CONSUME(StringLiteral).image
          return stringLiteral.substr(1, stringLiteral.length - 2)
        }
      },
      {
        ALT: () => {
          const stringLiteralOrdinary = this.CONSUME(StringLiteralOrdinary).image
          return stringLiteralOrdinary.substr(1, stringLiteralOrdinary.length - 2)
        }
      },
      { ALT: () => Number(this.CONSUME(NumberLiteral).image) },
      { ALT: () => this.SUBRULE(this.DoubleNumber) },
      { ALT: () => this.SUBRULE(this.BitMask) },
      {
        ALT: () => {
          this.CONSUME(True)
          return true
        }
      },
      {
        ALT: () => {
          this.CONSUME(False)
          return false
        }
      },
      {
        ALT: () => {
          this.CONSUME(Null)
          return null
        }
      },
      {
        ALT: () => {
          const d = this.CONSUME(IdentifierLiteral).image
          return d
        }
      }
    ]); this.CONSUME(semicolon)
    return val
  })

  private readonly BitMask = this.RULE('BitMask', () => {
    const arr = []
    const id1 = this.CONSUME(IdentifierLiteral)
    this.OR([
      { ALT: () => this.CONSUME2(bitor) },
      { ALT: () => this.CONSUME2(plus) }
    ])
    const id2 = this.CONSUME3(IdentifierLiteral)
    arr.push(id1.image, id2.image)
    this.MANY(() => {
      this.OR1([
        { ALT: () => this.CONSUME4(bitor) },
        { ALT: () => this.CONSUME4(plus) }
      ])
      const id3 = this.CONSUME5(IdentifierLiteral)
      arr.push(id3.image)
    })
    return arr
  })

  private readonly DoubleNumber = this.RULE('DoubleNumber', () => {
    this.CONSUME(LParen)
    const number1 = this.CONSUME(NumberLiteral)
    const number2 = this.CONSUME2(NumberLiteral)
    this.CONSUME(RParen)
    return [number1.image, number2.image]
  })
}
// ----

const TextParser = new DFTextParser()

export { TextParser, DFTextLexer }
