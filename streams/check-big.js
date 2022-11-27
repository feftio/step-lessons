const fs = require('fs')

const stream = fs.createReadStream('big.txt', { encoding: 'utf8', highWaterMark: 6_488_600 })

let i = 0

stream.on('data', (chunk) => {
  i++
  if (i === 2) {
    console.dir(chunk)
  }
})