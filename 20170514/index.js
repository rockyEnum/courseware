var md1 = require('./module1.js')  //./是根目录 当前文件的同级目录
// var a = require('../a.js') //../找上一级
var a = require('../a')  //首先是找这个(../)目录下 首先匹配js文件是否有a的(a.js)，如果没找到，再找后缀名是.json (a.json)
//如果是第三方模块或者是内置模块的话，就不需要加路径符 ，也就是说直接写模块名require("http")
//模块分三种 :第一种是内置模块  ，第二种是自己写的模块,第三种是引用第三方的模块
console.log(a)
// console.log(md1);
return;
// console.log(md1.name)
// module.filename 当前文件的文件路径(磁盘路径)
console.log(module.filename)
console.log(module.loaded)
console.log(module.parent)