const http = require('http')

const server = http.createServer((req, res) => {
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