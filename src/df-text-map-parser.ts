function parseBufferAsTextMap (buffer: ArrayBuffer): { valid: boolean, result: any } {
  console.log('go')
  console.log(buffer)
  console.log(window.moo)
  return { valid: false, result: null }
}

export { parseBufferAsTextMap }
