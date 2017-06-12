var querystring = require('querystring');
//针对url里参数部分的处理
console.log(querystring)
//{ 'http://nodejs.cn/api/querystring.html': '' }
console.log(querystring.parse("http://nodejs.cn/api/querystring.html"))
console.log(querystring.parse("a=1&b=2")); //{a:1,b:2}
console.log(querystring.parse("a:1;b:2",';',":")); //{a:1,b:2}
//js里 encodeURIComponent(转码) decodeURIComponent(反转码)
//转码
console.log(querystring.escape('https://www.baidu.com/'))
//反转码
console.log(querystring.unescape('https%3A%2F%2Fwww.baidu.com%2F'))