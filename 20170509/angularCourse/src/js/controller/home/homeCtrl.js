//首页
course.controller("homeCtrl",["$scope","$state",function ($scope,$state) {
    $scope.data = [];
    $scope.goState = function (state) {
      $state.go(state)
    }
}])