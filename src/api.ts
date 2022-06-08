import * as Application from './application.js'
import { parseBufferAsMap } from './df-map-parser.js'
export { readInputBuffer }

function readInputBuffer (buffer: ArrayBuffer, name: string): void {
  parseBufferAsMap(buffer, name)
}
console.log(Application)
