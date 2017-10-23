var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
	return gulp.src('css/**.css')
		.pipe(concatCss("style.css"))
		.pipe(cleanCSS(''))
		.pipe(gulp.dest('output/'));
});
