const express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.json())

app.get('/api/posts', function(req, res) {
    res.json([
    	{
    		username : "Apoorva",
    		body : "Node Rocks!"

        }

    ])

})

app.post('/api/posts', function (req, res) {
	console.log('post recievd=====')
    // console.log(req.body.username)
	console.log(req.query.username)
    // console.log(req.body.body)
    console.log(req.query.body)
	res.send(201)
})

app.listen(3000, function () {
	console.log("listening on port 3000")
})