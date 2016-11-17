// initialises gulp and all required plugins
var gulp = require('gulp');
var less = require('gulp-less'); // compile less
var minifyCSS = require('gulp-cssnano'); // minify css
var postcss = require('gulp-postcss'); // required for autoprefixer
var prefix = require('gulp-autoprefixer'); // prefix css
var concat = require('gulp-concat'); // concatenates css and js
var minifyJS = require('gulp-uglify'); // minify js
var jade = require('gulp-jade'); // compile jade to html
var connect = require('gulp-connect'); // creates a local server

// ------------- html stuff -------------
gulp.task('html', function() {
  return gulp.src(['src/views/index.jade', 'src/views/impressum.jade', 'src/views/datenschutz.jade'])
    .pipe(jade({
        basedir: 'src/views/',
        pretty: true  // uncompressed
    }))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload()); // reloads the server
});

// ------------- css stuff -------------
// compiles, prefixes, minifies and concatenates the custom less files
gulp.task('css', function() {
  return gulp.src('src/css/less/*.less') // src: less files
      .pipe(less()) // compiles all less files
      .pipe(prefix())
      .pipe(minifyCSS()) // minifies all css files
      .pipe(concat('main.css')) // concatenates all css files
      .pipe(gulp.dest('build/css/'))
      .pipe(connect.reload()); // reloads the server
});

// minifies the css frameworks
gulp.task('css-frameworks', function() {
  return gulp.src('src/css/*.css') // src: css frameworks
      // .pipe(minifyCSS()) // minifies all frameworks
      .pipe(gulp.dest('build/css/'))
      .pipe(connect.reload()); // reloads the server
});

// ------------- js stuff -------------
gulp.task('js', function() {
  gulp.src('src/js/*.js') // src: js files
      // .pipe(minifyJS()) // minifies all js files
      // .pipe(concat('main.js')) // concatenates all js files
      .pipe(gulp.dest('build/js/'))
      .pipe(connect.reload()); // reloads the server
});

// ------------- img pipe -------------
gulp.task('img', function() {
  return gulp.src('src/img/**') // src: img
      .pipe(gulp.dest('build/img/'))
      .pipe(connect.reload()); // reloads the server
});

// ------------- global stuff -------------
// watches for changes in the 'src' folders
gulp.task('watch', function() {
  gulp.watch('src/views/**/*.jade', ['html']); // changes in jade files?
  gulp.watch('src/css/less/*.less', ['css']); // changes in less folder?
  gulp.watch('src/css/*.css', ['css-frameworks']); // changes in frameworks?
  gulp.watch('src/js/*.js', ['js']); // changes in js folder?
  gulp.watch('src/img/*', ['img']); // changes in svg files?
});

// creates a local server in 'build' and lets it live-reload
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload:true
  });
});

// concatenates the tasks 'connect' and 'watch' and executes both
gulp.task('serve', ['connect', 'watch']);

// init && serve
gulp.task('init', ['html', 'css', 'css-frameworks', 'js', 'img', 'serve'])
