var obj = {name:1}
var obj2 = {name:2}
exports =obj;
module.exports = obj2;
// console.log(module.exports ==exports);//相等的 引用地址是一样的情况下
//两个都写的话以module.exports为主
// console.log(module.paths)

