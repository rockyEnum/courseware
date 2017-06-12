var http = require('http');

var MyAgent = new http.Agent({
    keepAlive:true,
    keepAliveMsecs:2000, //条件 keepAlive是true的情况下
    maxSockets:2000 ,//最大 socket 数量
    maxFreeSockets:100 //条件keepAlive 为 true
})

var options = {
    host: '3g.163.com',
    // hostname:'a3g.163.com',
    path: '/touch/news',
    port:80,
    timeout:2000
}
options.agent = MyAgent;
 http.get(options, function (res) {
     // console.log(res);
     console.log(res.statusCode);
     console.log(res.headers);
    var i = 0;
    var data = '';
    res.on('data', function (thunk) {
        data += thunk;
    })
    res.on('end', function () {
        // console.log('80端口')
        // console.log(data)
    });

})
