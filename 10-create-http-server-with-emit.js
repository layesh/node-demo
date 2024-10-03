const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Hello world!')
//     }
//     else if (req.url === '/about') {
//         res.end('Welcome to about page')
//     }
//     else {
//         res.end('<h1>Error!</h1>')
//     }
// })

const server = http.createServer()


// The event name must be 'request' to handle the http request
// https://nodejs.org/docs/latest/api/net.html#class-netserver
// net.Server extends EventEmitter
server.on('request', (req, res) => {
    if (req.url === '/') {
        res.end('Hello world!')
    }
    else if (req.url === '/about') {
        res.end('Welcome to about page')
    }
    else {
        res.end('<h1>Error!</h1>')
    }
})

server.listen(5000)