var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');


/* GET home page. */
router.get('/reponses-soumises', function(req, res, next) {
  const directoryPath = path.join(__dirname,'./../public/docs/reponses/');
  const files = fs.readdirSync(directoryPath);
  res.render('vos-reponses', { 
    title: 'Vos réponses | Explore',
    files: files
  });
});

module.exports = router;