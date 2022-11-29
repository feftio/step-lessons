const fs = require('fs')

async function main() {
  setTimeout(() => console.log('SetTimeout'), 0)
  // process.nextTick(() => {})
  setImmediate(() => console.log('SetImmediate'))
}

main()