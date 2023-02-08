const http = require('http')

const server = http.createServer((req, res) => {
    console.log('run request....')
    res.end()
})

server.listen(3000 , 'localhost', () => {
    console.log('123123123')
})