var app = angular.module("app",["ngRoute"]);
app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider.when('/home',{
        template:'<div>首页 {{title}} <a ng-href="#/user">首页</a></div>',
        controller: function ($scope) {
            $scope.title = 'hello '
        }
    }).when('/user',{
        template:'<div>用户{{title}}</div>',
        controller: function ($scope) {
            $scope.title = 'hello '
        }
    }).when('/contact',{
        template:'<div>zfpx</div>',
        controller: function ($scope) {
            $scope.title = 'hello '
        }
    }).when('/settings/:id/:name',{
        templateUrl:"temple1.html",
        controller:"settingCtrl"
    }).otherwise('404.html');
})