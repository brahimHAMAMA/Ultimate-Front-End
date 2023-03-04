var gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify"),
  notify = require("gulp-notify"),
  uglify = require("gulp-uglify"),
  zip = require("gulp-zip");

// html Task
gulp.task("html", function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest("dist"))
    .pipe(notify("Task html is completed!..."))
    .pipe(livereload());
});

// css Task
gulp.task("css", function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError)) //{ outputStyle: "compressed" }
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(notify("Task css is completed!..."))
    .pipe(livereload());
});

// js Task
gulp.task("js", function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("allscript.js"))
    .pipe(minify())
//    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(notify("Task JS is completed!..."))
    .pipe(livereload());
});

// Copressed Task
gulp.task("zip", function () {
  return gulp
    .src("dist/**/*.*")
    .pipe(zip("archive.zip"))
    .pipe(gulp.dest("."))
    .pipe(notify("Files Is Compressed!..."));
});

// watch Task
gulp.task("watch", function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/html/**/*.pug", ["html"]);
  gulp.watch(["stage/css/**/*.css", "stage/css/**/*.scss"], ["css"]);
  gulp.watch("stage/js/*.js", ["js"]);
  //  gulp.watch("dist/**/*.*", ["zip"]);
});

// Default Task
gulp.task("default", ["watch"]);
