const http = require('http');

// HTTP server
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
})
 

// Creating https server
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
};


const server = https.createServer(options, (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Secure World!\n');
});

server.listen(3001, () => {
    console.log('HTTPS Server running at https://localhost:3001/');
 });