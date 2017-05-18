//首页
course.controller("homeCtrl",["$scope","$state","httpService",function ($scope,$state,httpService1) {
    $scope.data = [];
    $scope.goState = function (state) {
      $state.go(state)
    }
}])