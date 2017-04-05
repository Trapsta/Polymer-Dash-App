var gulp	= require('gulp');
var insert	= require('gulp-insert');
var sass	= require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('app/css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest("app/css"))
	})