var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
const { response } = require('../../app');
//app.use(express.urlencoded({ extended: true })); // to parse form data
//app.use(express.static(path.join(__dirname, 'public')));


/* GET home page. */
function handleFormRalFr12(formData, isOnline) {
    //let data = { 
    //    nomPavillon: formData.nomPavillon,
    //    genreBatimentFenetre: formData.genreBatimentFenetre, 
    //    siteHistoriqueStJacques: formData.siteHistoriqueStJacques,
    //    quelEtage: formData.quelEtage
    //};
    if (isOnline) {
        // online : submit form
        let data = JSON.stringify(formData);
        var logPath = path.join(__dirname, './../docs/reponses/logRal12.json');
        //console.log(__dirname);
        fs.writeFileSync(logPath, data, "utf-8");
    } else {
        // offline : save formData to local storage
        let serializedData = JSON.stringify(formData);
        localStorage.setItem('ral-fr12',serializedData);
    }
    return Promise.resolve();
}

module.exports = {handleFormRalFr12};