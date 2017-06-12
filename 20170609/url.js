var http = require('http');
var url = require('url');
// console.log(url);
console.log(url.parse("http://nodejs.cn/api/url.html#url_the_whatwg_url_api"))
//把url解析成 对象 {
// protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'nodejs.cn',
//     port: null,
//     hostname: 'nodejs.cn',
//     hash: '#url_the_whatwg_url_api',
//     search: null,
//     query: null,
//     pathname: '/api/url.html',
//     path: '/api/url.html',
//     href: 'http://nodejs.cn/api/url.html#url_the_whatwg_url_api' }
// var server = http.createServer(function (req, res) {
//     console.log(req.host)
// })
// server.listen(150,function () {
//     console.log('server opening')
// })

var urlObj =  {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'nodejs.cn',
    port: null,
    hostname: 'nodejs.cn',
    hash: '#url_the_whatwg_url_api',
    search: null,
    query: null,
    pathname: '/api/url.html',
    path: '/api/url.html'
     }
     console.log(url.format(urlObj))


console.log(url.resolve('http://www.baidu.com/',"user"))
console.log(url.resolve('http://www.baidu.com/help',"user"))