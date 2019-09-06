const fs = require('fs');


const requestHandler = (req, res) => {
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
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          const message = parsedBody.split('=')[0];
          //writeFile will need a callback for functions that should run after the file is created
          fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          }); //writeFileSync large files this would not be optimal
        });
      }
      if (url === '/users' && method === 'GET') {
        const body = [];
        req.on('data', chunk => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          console.log(parsedBody);
          const message = parsedBody.split('=')[1];
          //writeFile will need a callback for functions that should run after the file is created
          fs.writeFile('message.txt', message, err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          }); //writeFileSync large files this would not be optimal
        });
      }
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Enter Messenge</title></head>');
      res.write('<body><h1>Testing the input page</h1></body>');
      res.write('</html>');
      res.end();
      // console.log(req);
    
      //process.exit();// this will end processes in the server exits the event loop

};


module.exports = {
    handler: requestHandler,
    someText: 'tas;lkdfj',
};