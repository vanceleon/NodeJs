const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));

router.get('/add-product', (req, res, next) => {
  // console.log("another middleware product")
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></button></form>'
  );
}); //add new middleware function

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
