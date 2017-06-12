var http = require('http');
var  server = http.createServer(function (request,response) {
    console.log(request)
    // request.setEncoding('utf8');
    response.setHeader('content-type','text/html;charset=utf8');
    response.write("相应内容");
    response.end();
})
server.listen(120,function () {
    console.log('port open success')
})