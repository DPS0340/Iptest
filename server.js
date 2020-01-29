const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const stream = require('stream')
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  console.log(ip)
  next()
})

const port = 4500
 
app.use('/img', express.static(__dirname + '/img'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html')
})
 
app.listen(port)
console.log(`listening at ${port}!`)