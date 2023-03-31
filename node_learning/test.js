const express = require('express')
const mongodb = require('mongodb')
const app = express()
const mongoclient = mongodb.MongoClient
const url="mongodb://127.0.0.1:27017"
const database = "task-api"
mongoclient.connect(url, { useNewUrlParser: true }, (error, client) =>{
    if(error){
        console.log("Error in connecting database")
    }
    const datadb=client.db(database)
})
app.get('', (req, res) => {
    res.send('Hello express!')
   })
   app.get('/weather', (req, res) => {
    res.send('Your weather')
   })
   app.listen(3000, () => {
    console.log('Server is up on port 3000.')
   }) 
   