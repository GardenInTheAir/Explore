var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
const { response } = require('../../app');
//app.use(express.urlencoded({ extended: true })); // to parse form data
//app.use(express.static(path.join(__dirname, 'public')));

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
let bucketName = "cyclic-talented-pullover-crow-ca-central-1";
const configuration = {
    Rules: [
      {
        Status: 'Enabled',
        Prefix: '',
        Expiration: {
          Days: 2
        }
      }
    ]
  };

/* GET home page. */
function handleFormRalFr12(formData, isOnline) {
    if (isOnline) {
        // online : submit form
        let data = JSON.stringify(formData);
        //var logPath = path.join(__dirname, './../docs/reponses/logRal12.json');
        //console.log(__dirname);
        //fs.writeFileSync(logPath, data, "utf-8");
        return data;
    } else {
        // offline : save formData to local storage
        let serializedData = JSON.stringify(formData);
        localStorage.setItem('ral-fr12',serializedData);
        //putObject(bucketName,"ral-fr12",serializedData);
        //putBucketLifecycle(bucketName,configuration);
        //let data = getObject(bucketName,"ral-fr12");
        let data = localStorage.getItem('ral-fr12');
        return data;
    }
    //return Promise.resolve();
}
async function getObject (bucketName, key) {
        const params = {
            Bucket: bucketName,
            Key: key
        };
        try {
            const myFile = await s3.getObject(params).promise(); 
        } catch (err) {
            console.error('no such data', err);
            throw err;
        }
    }

async function putObject (bucketName, key, body) {
        const params = {
            Bucket: bucketName,
            Key: key,
            Body: body
        };
        try {
            await s3.putObject(params).promise();
        } catch (err) {
            console.error('error uploading object', err);
            throw err;
        }
    }

async function putBucketLifecycle (bucketName, configuration) {
        const params = {
            Bucket: bucketName,
            LifecycleConfiguration: configuration
        };
        try {
            await s3.putBucketLifecycleConfiguration(params).promise();
        } catch (err) {
            console.error('error updating lifecycle config ', err);
            throw err;
        }
    }   
module.exports = {
    handleFormRalFr12
};