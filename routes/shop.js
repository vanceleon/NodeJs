const router = require('express').Router();


router.get('/', (req, res, next) => {
    // console.log("another middleware")
    res.send('<h1>Hello from express</h1>');
}); //add new middleware function

module.exports = router;