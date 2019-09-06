const http = require('http');
const fs = require('fs');
// function rqListener(req, res) {

// }

const server = http.createServer(function(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Messenge</title></head>');
    res.write(
      '<body><form action="/message" method="POST"/><input type="text" name="message"/><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Enter Messenge</title></head>');
  res.write('<body><h1>Testing the input page</h1></body>');
  res.write('</html>');
  res.end();
  // console.log(req);

  //process.exit();// this will end processes in the server exits the event loop
});

server.listen(3000);

// const port = process.env.PORT || 8000;

// server.listen(port, () => console.log(`=============Server on ${port}=============`));
