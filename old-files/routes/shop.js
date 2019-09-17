const router = require('express').Router();
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products)
    // res.send('<h1>Hello from express</h1>');
    
  res.sendFile(path.join(rootDir,'views', 'shop.html'));
}); //add new middleware function

module.exports = router;