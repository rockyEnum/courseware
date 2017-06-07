var http = require('http');
var  server = http.createServer(function (request,response) {
    console.log(request)
    request.setEncoding('utf8');
    response.write("相应内容",{'Content-Type': 'text/plain'});
    response.end();
})
server.listen(120,function () {
    console.log('port open success')
})