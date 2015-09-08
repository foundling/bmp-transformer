'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
gulp.task('jshint', function() {
	return gulp.src('lib/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});
gulp.task('test', function() {
	return gulp.src('test/**/*test.js')
	.pipe(mocha());
});
gulp.task('default', ['jshint', 'test']);
