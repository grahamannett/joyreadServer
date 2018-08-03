const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('src/scss/**/**/*.scss',['styles']);
});