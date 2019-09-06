const http = require('http');

// function rqListener(req, res) {

// }

const server = http.createServer(function(req, res) {
    console.log(req);
});

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`=============Server on ${port}=============`));