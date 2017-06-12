var path = require('path');
// console.log(path) //会把实例对象上所有的api都输出
// return;
var basename = path.basename('c://utils/tools.js');
console.log(basename);//window下 是文件名+文件类型
var basename1 = path.win32.basename('F:\\我赢职场\\work\\courseware\\20170322\\git.txt');
console.log(basename1) //git.txt
//只返回文件名
console.log(path.basename('c://utils/tools.txt','.js'))

//抛出 TypeError。 数据类型有问题，不符合规范
console.log(path.delimiter);//系统配置的环境变量分隔符 window下是;
console.log(path.dirname('c://utils/tools.js'));//返回文件对应的路径
console.log(path.dirname('/foo/bar/baz/asdf/quu'));///foo/bar/baz/asdf/
console.log(path.extname('c://utils/tools.js')); //返回后缀名
var reg = /[\S]+(.js)$/; ///([\S]*.js)$/以任何字符开始 以.js结束
console.log(reg.exec('c://utils/tools.js')[1])
path.extname('index.html');
// 返回: '.html'

path.extname('index.coffee.md');
// 返回: '.md'

path.extname('index.');
// 返回: '.'

path.extname('index'); //文件路径  = >基本路径+文件名+后缀
// 返回: ''

path.extname('.index');
// 返回: ''

console.log(path.format({
    root:'c://woying/',
    base:'lear.txt',
    name:'aa',
    ext:'.js'
}))
//把多个参数拼成一个路径
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
//规范路径
console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar'))

//把路径字符串转成一个路径对象
console.log(path.parse('c://woying/lear.txt'))

//返回相对路径  常用来判断是否是在同一个目录
console.log(path.relative("c:/src/js/index.js",'c:/src/css/index.css'))
console.log(path.relative("c:/src/js/index.js",'c:/src/js/index2.js'))

//路径分隔符
console.log(path.sep)