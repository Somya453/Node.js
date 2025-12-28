const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
        <form>
            <input type="text" name="username" placeholder="Enter your name" />
            <input type="email" name="email" placeholder="Enter your email" />
            <input type="password" name="password" placeholder="Enter your password" />

            <button type="submit">Submit</button>`)
    
    res.end('</form>');
}).listen(3000);
