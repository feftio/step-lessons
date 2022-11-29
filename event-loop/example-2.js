const fs = require('fs')

async function main() {
  console.log('start')

  setTimeout(() => console.log('SetTimeout'), 0)
  setImmediate(() => console.log('SetImmediate'))

  Promise.resolve().then(() => {
    console.log('Promise')
    process.nextTick(() => console.log('Promise next tick'))
  })

  fs.readFile('example-2.js', () => {
    console.log('Read file')
    setTimeout(() => console.log('Read file SetTimeout'), 0)
    setImmediate(() => console.log('Read file SetImmediate'))
    process.nextTick(() => console.log('Read file next tick'))
  })

  const response = await Promise.resolve('Async/await')
  console.log(response)

  process.nextTick(() => console.log('Next tick'))
  setTimeout(() => console.log('SetTimeout'), 0)

  console.log('END')
}

main()