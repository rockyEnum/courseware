var http = require('http');
var options = {
    protocol:'http:',
    host:'3g.163.com',
    prot:80,
    method:'get',
    path:'/touch/news',
    timeout:5000
}
//使用request代理请求远程接口数据 一般都是用request 配置方便，
const req = http.request(options,function (res) {
    res.setEncoding('utf8');
    console.log(res.statusCode);
    var data = '';
    res.on('data',function (chunk) {
        data += chunk;
    });
    res.on('end',function () {
        console.log(data)
    })
})
req.write('');
req.end();