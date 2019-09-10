const http = require('http');
const express = require('express');


const app = express();



const server = http.createServer(app);

// server.listen(3000);

const port = process.env.PORT || 8000;

server.listen(port, () => console.log(`=============Server on ${port}=============`));
