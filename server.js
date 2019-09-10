const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');
const path = require('path');

const port = process.env.PORT || 8000;

const server = express();

server.use('/admin', adminData.routes);
server.use('/', shopRoutes);
server.use(express.static(path.join(rootDir, 'public')))


server.use((req, res, next) => { // catch all route to return page not found to user
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'pageNotFound.html'));
})

server.listen(port, () =>
  console.log(`=============Server on ${port}=============`)
);

// app.use('/', (req, res, next) => {
//     // console.log('always runs');
//     next();
// })
