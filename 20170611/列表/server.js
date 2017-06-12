var http = require("http"),
    url = require("url"),
    fs = require("fs");
var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true),
        pathname = urlObj.pathname,
        query = urlObj.query;

    //->静态资源文件(HTML/CSS/JS...)的处理
    var reg = /\.(HTML|JS|CSS|TXT|JSON|PNG|JPG|BMP|GIF|ICO)/i;
    if (reg.test(pathname)) {
        var suffix = reg.exec(pathname)[1].toUpperCase();
        var suffixMIME = "text/plain";
        switch (suffix) {
            case "HTML":
                suffixMIME = "text/html";
                break;
            case "CSS":
                suffixMIME = "text/css";
                break;
            case "JS":
                suffixMIME = "text/javascript";
                break;
            case "JSON":
                suffixMIME = "application/json";
                break;
        }
        try {
            var conFile = fs.readFileSync("." + pathname, "utf-8");
            res.writeHead(200, {'content-type': suffixMIME + ';charset=utf-8;'});
            res.end(conFile);
        } catch (e) {
            res.writeHead(404);
            res.end();
        }
        return;
    }

    //->数据请求接口的处理
    var rootPath = "./json/studentInfo.json",
        temp = null;

    if (pathname === "/getList") {
        //->获取客户端传递给我们的当前页码:没有传递的话默认是第一页
        var n = query["n"] || 1;

        //->获取文件中存储的所有数据
        temp = JSON.parse(fs.readFileSync(rootPath, "utf-8"));

        //->根据规律(起始索引~结束索引)把我们需要的那十条数据获取到
        var total = Math.ceil(temp.length / 10),//->根据总内容计算总页数
            ary = [];
        for (var i = (n - 1) * 10; i <= (n * 10) - 1; i++) {
            if (i > temp.length - 1) {
                //->最后一页不一定10条数据,如果我们根据规律获取的索引已经比总数据的最大索引还要大了,我们直接结束循环,不需要在往后查找获取了
                break;
            }
            ary.push(temp[i]);
        }

        //->按照API规范返回数据
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify({
            total: total,
            data: ary
        }));
        return;
    }

    if (pathname === "/getInfo") {
        var id = query["id"] || 0,
            curData = null;
        temp = JSON.parse(fs.readFileSync(rootPath, "utf-8"));
        for (i = 0; i < temp.length; i++) {
            if (temp[i]["id"] == id) {
                curData = temp[i];
                break;
            }
        }
        res.writeHead(200, {'content-type': 'application/json;charset=utf-8;'});
        res.end(JSON.stringify({
            code: curData ? 0 : 1,
            data: curData
        }));
    }
});
server.listen(1800, function () {
    console.log("server is success,listening on 180 port!");
});