var gulp = require('gulp');
var sleep = require('sleep');
gulp.task('default',['mytask1','mytask2'], function(){
	console.log('Help, Gulp!');
});

gulp.task('mytask1', function(){
	console.log('mytask1 !');
	sleep.sleep(3);
	console.log('mytask1 wait 3 seconds!');
	
});

gulp.task('mytask2', function(){
	//console.log('Help, mytask2\'s Gulp!');
	//setTimeout(function() {
	//	console.log('mytask2 wait 3 seconds!');
	//}, 10000);
	
	console.log('mytask2 !');
	
});


gulp.task('output1', function(){
	gulp.src('assets/vendor/bootstrap/**/*.js') //第一個*號是base dir, 也就是bootstrap下的檔案結構會複製
	.pipe(gulp.dest('output1'));
});

gulp.task('output2', function(){
	console.log('exec output2');//復制內容與output1相同, 只不過來源的base folder設在assets/vnedor 所以output2 folder中會建立bootstrap這層資料夾
	gulp.src('assets/vendor/bootstrap/**/*.js'
	,{
		base: 'assets/vendor'
	}) 
	.pipe(gulp.dest('output2'));
});
