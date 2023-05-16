var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/plan-campus', function(req, res, next) {
  res.render('plan-campus', { title: 'Plan du campus | Explore' });
});

module.exports = router;
