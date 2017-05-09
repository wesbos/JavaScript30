var express = require('express')
var app = express()
var serveIndex = require('serve-index');

app.use(express.static('.'))
app.use(serveIndex('.'))

app.listen(3000, function () {
  console.log('Listening on port 3000')
})
