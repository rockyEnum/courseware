var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var server =http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true) // true和false的区别：是否把请求参数部分 ?a=1 转化成一个对象
    //->静态资源文件(HTML/CSS/JS...)的处理
    var reg = /\.(HTML|JS|CSS|TXT|JSON|PNG|JPG|BMP|GIF)/i;
    var pathname =urlObj.pathname;

    var type='';
    if(reg.test(pathname)){ //如果符合这个条件，就代表请求的是文件
       var read = fs.readFileSync('.'+urlObj.pathname,"utf-8");//readFileSync 同步读取内容
       var ext =path.extname(pathname);//取后缀名  toUpperCase 转大写
        switch(ext){
            case "html":
                type = 'text/html';
                break;
            case "js":
                type = 'text/javascript';
                break;
            case "css":
                type = 'text/css';
                break;
            case "JSON":
                type = 'application/json';
                break;
        }
        res.setHeader('content-type',type+';charset=utf8;')
        res.end(read)
    }
    else if(pathname=='/favicon.ico'){
        res.end("");
    }
    else if(pathname =='/getList'){
        console.log(urlObj.query.n);
         //一般工作中，分页参数不会是一个页码 ，一般有开始条数和结束条数参数组成
        const n = urlObj.query.n;//页码
        var infoUrl = './json/studentInfo.json'
        var data = fs.readFileSync(infoUrl,"utf-8");
        var dataJson = JSON.parse(data);
        var dataLen = dataJson.length;
        var resData= '';//1:0 -9  2:10 - 19  3:20 - 29
        var arr = [];
        console.log(dataLen)
        var total =Math.ceil(dataLen/10);
        for (var i=(n-1)*10;i<=(n*10-1);i++){
            //最后一页的数据比一定是10条数据 有可能是1-9条数据 ，当i的长度大于dataJson的长度的时候，解决for循环
            if(i>dataLen){
                break;
            }
            arr.push(dataJson[i]);
        }
        res.writeHead(200,{'content-type':'application/json;charset=utf-8'});

        res.end(JSON.stringify({res:0,data:arr,total:total}));

    }
});
server.listen(190,function () {
    console.log('开启成功')
})