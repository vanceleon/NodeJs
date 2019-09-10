const express = require('express');
const adminRoutes = require('./routes/admin');

const app = express();



app.use('/', (req, res, next) => {
    // console.log('always runs');
    next();
})



app.use('/', (req, res, next) => {
    // console.log("another middleware")
    res.send('<h1>Hello from express</h1>');
}); //add new middleware function

// const server = http.createServer(app);

// server.listen(3000);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`=============Server on ${port}=============`));
