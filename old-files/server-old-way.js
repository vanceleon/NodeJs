const http = require('http');
const express = require('express');


const app = express();



// const routes = require('./routes');
// function rqListener(req, res) {

// }
// this is the vanilla node js code and hard way to do it
//this is event driven arc

// console.log(routes.someText);
const server = http.createServer(routes.handler);

// server.listen(3000);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`=============Server on ${port}=============`));
