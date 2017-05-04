app.controller("settingCtrl",["$scope","$routeParams","myProvider",function ($scope,$routeParams,myProvider) {
    //获取路由上传过来的参数 需要引入服务 $routeParams  通过$routeParams.id //id需要在配置路由的地方进行配置
    $scope.name = $routeParams.name;
    myProvider.currency = 121221;
}]).controller("")

