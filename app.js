const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World, this is the root route')
})

app.get('/uno', function (req, res) {
    res.send('Hello World, from the route one')
})

app.get('/prueba', function (req, res) {
  res.send('Hello World, from the prueba')
})

app.listen(3000)