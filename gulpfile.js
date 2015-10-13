var gulp = require('gulp');
var sleep = require('sleep');
gulp.task('default',['mytask1','mytask2'], function(){
	console.log('Help, Gulp!');
});

gulp.task('mytask1', function(cb){
	console.log('mytask1 !');
	sleep.sleep(3);
	console.log('mytask1 wait 3 seconds!');
	cb();
});

gulp.task('mytask2', function(cb){
	//console.log('Help, mytask2\'s Gulp!');
	//setTimeout(function() {
	//	console.log('mytask2 wait 3 seconds!');
	//}, 10000);
	
	console.log('mytask2 !');
	cb();
});
