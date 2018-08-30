const express = require('express')
const app = express()
const path = require('path')
const parser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router')

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json())


MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('ww2')
  const timeline = db.collection('timeline')
  const timelineRouter = createRouter(timeline)
  app.use('/api/timeline', timelineRouter)

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
