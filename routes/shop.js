const router = require('express').Router();
const path = require('path');

router.get('/', (req, res, next) => {
    // console.log("another middleware")
    // res.send('<h1>Hello from express</h1>');
    
  res.sendFile(path.join(__dirname,'../','views', 'shop.html'));
}); //add new middleware function

module.exports = router;