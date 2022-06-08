import { parseBufferAsTextMap } from './df-text-map-parser.js'
export { parseBufferAsMap }

function parseBufferAsMap (buffer: ArrayBuffer, _fileName: string): { valid: boolean, result: any } {
  parseBufferAsTextMap(buffer)
  return { valid: false, result: null }
}
