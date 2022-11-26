const Emitter = require('events')
const http = require('http')
const url = require('url')

const summarize = require('./operations/summarize')
const multiply = require('./operations/multiply')

const emitter = new Emitter()

emitter.on('operation', (operation, result) => {
  console.log(`Our server call "${operation}" with result: ${result}`)
  console.log(`Date: ${Date.now()}\n`)
})

const server = http.createServer(async (req, res) => {
  const query = url.parse(req.url, true).query

  if (query !== null && 'summarize' in query) {
    const result = summarize(query.summarize.split(','))
    emitter.emit('operation', 'summarize', result)
    return res.end(result.toString())
  }

  if (query !== null && 'multiply' in query) {
    const result = multiply(query.multiply.split(','))
    emitter.emit('operation', 'multiply', result)
    return res.end(result.toString())
  }

  res.end('No operations')
})

server.listen(8000, () => {
  console.log('Server has been started')
})