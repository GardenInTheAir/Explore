var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
var fs = require('fs');
app.use(express.urlencoded({ extended: true })); // to parse form data
//app.use(express.static(path.join(__dirname, 'public')));
var formHandler = require('../public/javascripts/handle-ral');

/* GET home page. */
router.post('/submit-ral-fr12', function(req, res, next) {
    const formData = req.body;
    let isOnline = true;
    if (res.statusCode === 200) {
        isOnline = true;
    } else {
        isOnline = false;
    }
    let data = formHandler.handleFormRalFr12(formData, isOnline)
    .then(() => {
        res.render('confirmation', { title: "Confirmation | Explore", file: data});
    })
});

module.exports = router;