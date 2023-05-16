var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rallye/ral-fr56', function(req, res, next) {
  res.render('ral-fr56', { title: 'Rallye UQAM | Explore' });
});

module.exports = router;