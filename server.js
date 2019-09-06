const http = require('http');

const routes = require('./routes');
// function rqListener(req, res) {

// }
// this is the vanilla node js code and hard way to do it
//this is event driven arc
const server = http.createServer(routes);

server.listen(3000);

// const port = process.env.PORT || 8000;

// server.listen(port, () => console.log(`=============Server on ${port}=============`));
