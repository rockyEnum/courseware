//简单 把 ajax 封装成一个httpService服务
app.service("httpService",["$http","$q",function ($http,$q) {
    this.http = function (param) {
        var def = $q.defer();//第二步
        $http(  {
                   method:param.method || "get",
                   url:param.url
                }).then(function (result) {
                //param.success(result);

            def.resolve(result)//成功之后执行的操作  //第三步
           // def.reject(result);//失败的
 ///数据不应该是栈内存的，应该是堆内存的
        },function (err) {
             console.log(err)
        })
        return def.promise; //第四步
    }
}])