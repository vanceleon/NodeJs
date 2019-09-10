const express = require('express');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const port = process.env.PORT || 8000;

const app = express();

app.use(adminRoutes);
app.use(shopRoutes);



app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(port, () =>
  console.log(`=============Server on ${port}=============`)
);

// app.use('/', (req, res, next) => {
//     // console.log('always runs');
//     next();
// })
