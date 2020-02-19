const http = require('http');

const hostname="10.199.14.46";
const port = 8019;

//Create HTTP server and listen on port 8012 for requests
http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
  }).listen(port);
  
console.log(`Server running at http://${hostname}:${port}/`);