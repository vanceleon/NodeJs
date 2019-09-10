const router = require('express').Router();
const bodyParser = require('body-parser');
const rootDir = require('../util/path');
const path = require('path');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', (req, res, next) => {
  // console.log("another middleware product")
  res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
}); //add new middleware function

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/')
});

module.exports = router;
