import { TextParser, DFTextLexer } from './df-text-map.js'
function parseBufferAsTextMap (buffer: ArrayBuffer): { valid: boolean, result: any } {
  const decoder = new TextDecoder('utf-8')
  const view = decoder.decode(buffer)
  try {
    const lexResult = DFTextLexer.tokenize(view)
    TextParser.input = lexResult.tokens
    const map = TextParser.DFMap()
    return { valid: true, result: map }
  } catch (error) {
    return { valid: false, result: null }
  }
}

export { parseBufferAsTextMap }
