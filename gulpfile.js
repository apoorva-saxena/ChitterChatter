const gulp = require('gulp')
gulp.task ("hello", ['welcome'],function () {
	console.log("hello world")
})

gulp.task('welcome', function () {
	console.log("Welcome to gulp!")
})