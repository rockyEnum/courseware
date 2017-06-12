var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    //代表请求是页面 首页
    if(pathname == '/'){
        console.log(12)
        fs.createReadStream('./index.html').pipe(res);
       // res.end() 如果是相应的文件的话，就不用加了;
    }else if(pathname == '/getlist'){
        console.log('getlist')
        res.write('getlist')
        res.end();
    }else if(pathname =='/clock'){ //要相应时间
        var date = new Date();
        date = date.toLocaleString();
        var obj = {res:0,date};
        obj = JSON.stringify(obj)
        res.end(obj)
    }

}).listen(160)

