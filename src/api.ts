import * as Application from './application.js'
export { readInputBuffer }

function readInputBuffer (buffer: ArrayBuffer, name: string): void {
  const view = new Uint8Array(buffer)
  console.log(view, name)
}
console.log(Application)
