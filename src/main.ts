import { readInputBuffer } from './api.js'
const reader = new window.FileReader()
function init (): void {
  const input = document.createElement('input')
  input.type = 'file'
  document.body.appendChild(input)
  input.onchange = async () => {
    const files = input.files
    if (files === null) throw Error('Error reading files!')
    const file = files.item(0)
    if (file === null) throw Error('Error reading files!')
    reader.readAsArrayBuffer(file)
    reader.onload = (event) => {
      if (event.target === null) throw Error('Error reading files!')
      const content = event.target.result
      if (content === null || typeof content === 'string') throw Error('Error reading files!')
      readInputBuffer(content, file.name)
    }
  }
}

console.log()
init()
