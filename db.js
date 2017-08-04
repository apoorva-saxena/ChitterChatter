// mongod --dbpath ~/mongo_data/
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', {useMongoClient: true}).then(function () {
	console.log("Mongodb connected")
}). catch(function (err) {
	console.log("I am the error in database")
	console.log(err)
})

module.exports = mongoose