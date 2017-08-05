const express = require('express')
const bodyParser = require('body-parser')
const Post = require('./models/post')
var app = express()

app.use(bodyParser.json())

// app.use(express.static(__dirname + '/app'))
app.get('/', function(req, res) {
    res.sendfile('./layouts/index.html')
})

app.get('/api/posts', function(req, res) {
    Post.find(function (err, posts) {
        if(err) {
            console.log("Error: ", err)
        }
        res.json(posts)
    })

})

app.post('/api/posts', function (req, res) {
    var post = new Post ({
        username : req.body.username,
        body: req.body.body
    })

    post.save(function (err, post) {
        if (err) {
            console.log(err)
        }
        console.log("data was saved in database")
        res.json(201, post)
    })
})

app.listen(3000, function () {
	console.log("listening on port 3000")
})