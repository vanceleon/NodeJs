const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use('/admin',adminRoutes);
app.use('/shop/', shopRoutes);



app.use((req, res, next) => { // catch all route to return page not found to user
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'pageNotFound.html'));
})

app.listen(port, () =>
  console.log(`=============Server on ${port}=============`)
);

// app.use('/', (req, res, next) => {
//     // console.log('always runs');
//     next();
// })
