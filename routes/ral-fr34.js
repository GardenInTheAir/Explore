var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rallye/ral-fr34', function(req, res, next) {
  res.render('ral-fr34', { title: 'Rallye UQAM | Explore' });
});

/*
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, loginPagePath)); 
}); 
// donot forget to define us path 
router.get('/rallye/ral-fr34', (req, res) => { 
  res.clearCookie('session_cookie_name'); 
  res.redirect('/'); 
});
*/

module.exports = router;