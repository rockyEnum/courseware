var gulp = require("gulp");
var	concat = require('gulp-concat');
var	rename = require('gulp-rename');

//合并控制器任务
gulp.task('controller',function () {
    return gulp.src("src/js/controller/**/*.js")
        .pipe(concat("controller.min.js"))
        .pipe(gulp.dest("dist/js"))
})
gulp.task('router',function () {
    return gulp.src("src/js/router.js")
        //.pipe(concat("controller.min.js"))
        .pipe(rename("router.min.js"))
        .pipe(gulp.dest("dist/js"))
})
gulp.task('img',function () {
    return gulp.src("src/images/*")
    .pipe(gulp.dest("dist/images"))
})
gulp.task('view',function () {
    return gulp.src("src/view/**/*.html")
        .pipe(gulp.dest("dist/view"))
})
gulp.task('index',function () {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
})
gulp.task('css',function () {
    return gulp.src("src/css/index.css")
        .pipe(rename("index.min.css"))
        .pipe(gulp.dest("dist/css"))
})
gulp.task("default",["controller","img","view","router","index","css"])