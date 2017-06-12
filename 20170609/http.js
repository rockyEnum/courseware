//主要作用是请求，和代理(比如ajax直接请求java接口 有跨域问题，可以通过node http来代理实现跨域)，充当后台接口(写服务，监听接口)
// http/https url path  querystring
var http = require('http');
//代理 用node访问别人网站上的接口()
//get(string|options)
//   http.get('http://3g.163.com/touch/news',function(res){
//   //  console.log(res);
//       var i = 0;
//       var data=  '';
//     res.on('data',function (thunk) {
//        data+= thunk;
//     })
//       res.on('end',function () {
//          console.log(data)
//       })
// }).on('socket',function (socket) {
//    // console.log(socket)
// })
//hostname host都有的话使用hostname
var options = {
    host: '3g.163.com',
    // hostname:'a3g.163.com',
    path: '/touch/news',
    port:80
}
http.get(options, function (res) {
    //  console.log(res);
    var i = 0;
    var data = '';
    res.on('data', function (thunk) {
        data += thunk;
    })
    res.on('end', function () {
        console.log('80端口')
        console.log(data)
    })
})