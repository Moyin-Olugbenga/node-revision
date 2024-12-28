const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to our home page")
    }
    if(req.url === '/about') {        
        res.end("This is our short history")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to fing the page you're looking for</p>`)
})

server.listen(5000)