
//社区活动主页面
course.controller("activityDetailCtrl",["$scope","$rootScope","$http","$stateParams",function ($scope,$rootScope,$http,$stateParams) {
   //获取路由上参数$stateParams
    $scope.id = $stateParams.id;
    //获取到id之后，首先 根据id查询对应的数据，调后台接口
}]);