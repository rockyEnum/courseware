{
    // console.log(global.global)
// console.log(__dirname);//当前文件所在的文件夹的磁盘路径(绝对路径)
// console.log(__filename);//当前文件对应的磁盘路径(绝对路径)
// setImmediate(function(){
//     console.log('setimmediate')
// })
// setTimeout(function () {
//    console.log('set')
// },9)
// global.console.log('asasd')
// var gulp = require('gulp')//直接写模块名:不是内部的模块，就是第三方的模块
//node js语法， 支持js语法的文件 支持json语法的文件 .json
}
// var module1 = require('./module1');//require 引入模块
// console.log(module1);
// console.log(global);
// var cache = require('./cache.js')
// var cache = require('./cache.js')
// var cache = require('./cache.js');
//console.log(require.cache); //会把当前的文件和require引入的文件缓存起来
//console.log(require.resolve('./cache.js'))// 输出文件的绝对路径
//清除node自带的缓存  require.cache是一个缓存的对象 通过 delete 删除属性来达到清楚缓存的效果
// delete require.cache[require.resolve('./cache.js')]
 var cache = require('./cache.js')
  // delete require.cache ; //删除这个对象，不能达到请缓存的效果，所以只能指定删除
// console.log(require.cache)
var cache = require('./cache.js')
console.log(require.resolve('./cache.js'))
console.log(require.resolve('./module1.js'))
console.log(__filename)