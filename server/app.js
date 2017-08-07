const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/adninBlog')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var articles = require('./routers/articles')

app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.use('/articles',articles)





app.listen(3000, function () {
  console.log('listening on port 3000!')
})
