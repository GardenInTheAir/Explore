var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rallye/ral-fr12', function(req, res, next) {
  res.render('ral-fr12', { title: 'Rallye UQAM | Explore' });
});

module.exports = router;