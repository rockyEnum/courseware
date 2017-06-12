var http = require('http');
var querystring = require('querystring');
var url = require('url');
//a=1&b=2{ a: '1', b: '2' }a=1&b=2&b=3{ a: '1', b: [ '2', '3' ] }
var server = http.createServer(function (req,res) {
    // 获取url上的参数
   // var url = url.parse(req.url,false);//url.query是一个字符串'a=1&b=2&b=3'
    var myurl = url.parse(req.url,true);//url.query是一个字符串{ a: '1', b: [ '2', '3' ] }
    console.log(myurl)

    // myurl.pathname //就是访问的接口地址/getlist
    //console.log(querystring.parse(url))
  // console.log(req.url)
  //   var index = req.url.indexOf("?");
  //   var sub = req.url.split('?')[1]
  //   console.log(querystring.parse(sub).a)
  //   console.log(querystring.parse(sub).b)
})
server.listen('150',function () {
    console.log('端口开启成功')
})