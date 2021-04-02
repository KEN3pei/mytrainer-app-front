const express = require('express')
const app = express()
const cors = require('cors')
const dbClient = require('./testdbClient')
const S3 = require('./s3')
const gF = require('./generalFunctions')

const count = dbClient.count()
const ramdomNums = gF.getRamdomNums(count, 5)
const ramdomDatas = dbClient.getRamdomData(ramdomNums)

app.use(cors({ origin: true, credentials: false }))

app.post('/menu', async(req, res) => {
    const array64 = await S3.getBase64Array(ramdomDatas)
    console.log(array64)
    res.send(array64)
})

app.listen(8080, ()=> {
    console.log("Listening: 8080");
});