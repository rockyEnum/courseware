var app = angular.module("app",[]);
app.controller("indexCtrl",["$scope","$filter","$http","httpService",function ($scope,$filter,$http,httpService) {
    // httpService.http({url:"../20170412/bootstrap.txt",success:successBack})
    // function successBack(result) {
    //     console.log(result)
    // }
    //defer用法
    httpService.http({url:"/bootstrap.txt"}).then(function (result) {
        console.log(result)
    })
    alert(12)
    $scope.name ="abc";
    $scope.result = '';
    //通过控制器来操作过滤器
    //注入 $filter
    //第二步:$filter('过滤器的api')(放要处理的数据)
    $scope.niceName = $filter("uppercase")($scope.name);
    // $http(  {
    //     method:"get",
    //     url: '../20170412/bootstrap.txt'
    // }).then(function (result) {
    //       $scope.result = result;
    // },function (err) {
    //     console.log(err)
    // })
}])
app.filter("myStr",function () {
    return function (pm1,pm2,pm3) {
        //写自己的过滤器
        var len = pm1.length;
        var str ;
        if(len>pm2){
            str =pm1.substring(0,pm2)
        }
        return str;
    }
})