const http = require('http');

// function rqListener(req, res) {

// }

const server = http.createServer(function(req, res) {
    console.log(req);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();

    //process.exit();// this will end processes in the server exits the event loop
});

server.listen(3000)

// const port = process.env.PORT || 8000;

// server.listen(port, () => console.log(`=============Server on ${port}=============`));