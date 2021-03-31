const express = require('express')
const app = express()
const cors = require('cors')
const AWS = require('aws-sdk')
// const mongoClient = require('mongodb').MongoClient
const dbClient = require('./testdbClient')
const gF = require('./generalFunctions')
const stream = require('stream')

// const count = dbClient.count()
// const ramdomNums = gF.getRamdomNums(count, 5)
// const ramdomDatas = dbClient.getRamdomData(ramdomNums)

app.use(cors({ origin: true, credentials: false }))

const s3Client = new AWS.S3({
    accessKeyId: 'AKIA6NWWQML4XZINH6IL',
    secretAccessKey: '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',
    region: 'ap-northeast-1'
})

app.post('/menu', (req, res) => {
    // console.log(testData)
    const params = {
        'Bucket': 'mytrainer-imgs',
        'Key': 'LatPulldown-min.jpg'
    }
    s3Client.getObject(params, (err, datas) => {
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(datas)
            stream.Readable.pipe(process.stdout)
            // res.send(data.Body.toString('base64'))
        }
    })
    // res.send(testData)
})
app.listen(8080, ()=> {
    console.log("Listening: 8080");
  });