var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET arrow function
router.get("/", (req, res, next) => {
  res.render('index', {title: "Node Express MongoDB ES6"})
})

module.exports = router;
