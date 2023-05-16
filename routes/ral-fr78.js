var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rallye/ral-fr78', function(req, res, next) {
  res.render('ral-fr78', { title: 'Rallye UQAM | Explore' });
});

module.exports = router;