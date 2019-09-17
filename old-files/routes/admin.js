const router = require('express').Router();
const bodyParser = require('body-parser');
const rootDir = require('../util/path');
const path = require('path');

const products = [];

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
  // console.log("another middleware product")
  res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
}); //add new middleware function

router.post('/add-product', (req, res, next) => {
 //   console.log(req.body);
  products.push({ title: req.body.title }); //this method is shared across the server, and never really done this way
//   console.log(products)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
