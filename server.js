const express = require('express')
const bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.json())

// app.use(express.static(__dirname + '/app'))
app.get('/', function(req, res) {
    res.sendfile('./layouts/index.html')
})

app.use("/api/posts", require('./controllers/api/posts'))

app.listen(3000, function () {
	console.log("listening on port 3000")
})