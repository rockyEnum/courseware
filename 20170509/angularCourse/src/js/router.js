var course = angular.module('course',["ui.router"]);
course.config(["$stateProvider","$locationProvider",function ($stateProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $stateProvider.state("home",{
        url:"/home",
        template:'<div><div ui-view></div></div>'
    }).state('home.home',{
        url:'/home',
        templateUrl:"view/home/home.html",
        controller:"homeCtrl"//indexCtrl
    }).state('activity',{
        url:'/activity',
        templateUrl:"view/activity/activity.html",
        controller:"activityCtrl"
    }).state('activity_detail',{
        url:"/activity_detail/:id",
        templateUrl:"view/activity/activity_detail.html",
        controller:"activityDetailCtrl",
    })
}])
//加载比较快 
course.run(["$rootScope",function ($rootScope) {
    $rootScope.$on("$stateChangeStart",function (event, toState, toParams) {
         console.log(toState);
        if(toState.controller ==="homeCtrl"){
            $rootScope.isHome = true ;//!isHome 隐藏
        }else{
            $rootScope.isHome = false ;//!isHome 隐藏
        }
    })
}])
course.controller("mainCtrl",["$scope","$state",function ($scope,$state) {
    //$rootScope.isHome = true ;//!isHome 隐藏
    $scope.goHome = function () {
        $state.go("home.home")
    }
}]);