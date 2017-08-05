const Post = require('../../models/post')
const router = require('express').Router()


router.get('/', function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            console.log("Error: ", err)
        }
        res.json(posts)
    })

})

router.post('/', function(req, res) {
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })

    post.save(function(err, post) {
        if (err) {
            console.log(err)
        }
        console.log("data was saved in database")
        res.json(201, post)
    })
})


module.exports = router;