var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rallye', function(req, res, next) {
  res.render('rallye', { title: 'Rallye UQAM | Explore' });
});

module.exports = router;