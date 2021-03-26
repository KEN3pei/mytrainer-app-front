const express = require('express')
const app = express();
const cors = require('cors')
const AWS = require('aws-sdk')
// const mongoClient = require('mongodb').MongoClient
const testData = require('../database/test-data.json')

app.use(cors({ origin: true, credentials: true }))

const s3Client = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: '',
    region: ''
})

app.post('/menu', (req, res) => {
    console.log(testData)
    res.send(testData)
})
app.listen(8080, ()=> {
    console.log("Listening: 8080");
  });