var http =require('http');
/*
* req 请求头
* res 响应头
* */
//  image/png
var server = http.createServer(function (req,res) {
     console.log(req.url)
    //通过浏览器访问的话，会根据咱们设置的setHeader里的content-type值来进行解析响应的数据(write),text/plain:响应的是文本内容
    // text/html 就代表是响应的是html结构，页面就会解析成html
    //图片 比如png的格式  image/png
    res.setHeader('content-type',"text/plain;charset=utf8")
    //自定义响应的属性
    res.setHeader('servertTime',new Date().toDateString())
    res.write('<h4>asdasdsad</h4>');
    res.end();
})
// server.listen(140,function () {
//     console.log('port 140 opening')
// })
server.listen(140,'localhost',function () {
    console.log('port 140 opening')
})