var gulp = require('gulp');
var	sequence = require('gulp-sequence');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var less = require("gulp-less");
{
// gulp.task("default",function () {
//     console.log("12")
// })
// gulp.task("default2",function () {
//     console.log("23")
// })
// gulp.task("hello",function () {
    //指定源原件路径
    // * 是匹配0到多个字符 不会匹配文件路径分隔符src/**/*.js
    // ** 就是匹配0到多个目录**/
    // ？是匹配一个字符src/**/?.js
    //[index] 匹配[]里任意一个字符
    // !(index) 匹配 文件名不是index的文件
    //!(index|home)  匹配文件名不是index和home的文件
//     gulp.src("src/**/(index|home).js")
//         //监听数据的变化事件
//         .on("data",function (file) {
//             console.log(file.history[0])
//         })
//         .pipe(gulp.dest("dist/js"));//复制到指定的路径下面
// })
// gulp.task("index",function () {
//     console.log(1)
//     setTimeout(function () {
//         console.log(11)
//     },3)
//     // gulp.src("src/js/*.js",{base:'src/js'}) ///js/*.js
//     //     .pipe(gulp.dest("dist")) //dist 和 /js/*.js
// })
// gulp.task("js",function () {
//     // gulp.src("src/js/*.js",{base:'src/js'}) ///js/*.js
//     //     .pipe(gulp.dest("dist")) //dist 和 /js/*.js
//     setTimeout(function () {
//         console.log(22)
//     },0)
// })
// var src={
//     index:"src/index.js",
//     js:"src/**/*.js",
//     css:"src/css/*.css"
// }
// var dist={
//     js:"dist"
// }
// gulp.task("js",function () {
//     gulp.src(src.js)
//         .pipe(gulp.dest(dist.js))
// })
// gulp.task('watch',function () {
//     gulp.watch("src/index.js",["index"]);
//     gulp.watch("src/js/*.js",["others"]);
// });
// //{jpg,gif,png} 匹配符合jpg gif png的文件
// gulp.task('img',function () {
//     gulp.watch("src/images/*.{jpg,gif,png}",["index"]);
//     gulp.watch("src/js/*.js",["others"]);
// });
}

gulp.task("index",function () {
    gulp.src("src/index.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
})

//合并js
gulp.task("concat",function () {
    gulp.src("src/?(index|home).js")
        .pipe(concat("concat.js"))
        .pipe(gulp.dest("dist"))
})
gulp.task("less",function () {
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist"))
})

// $ npm install gulp-imagemin --save-dev
//图片压缩
// var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');

gulp.task('copy-images',function(){
    return gulp.src('app/imgs/**/*.{jpg,png}')//指定要压缩的图片
        .pipe(imagemin()) //进行图片压缩
        .pipe(gulp.dest('dist'));//输出目的地
});


gulp.task("default",["index"])
