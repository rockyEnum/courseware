var app = angular.module("app",["ngRoute"]);
app.provider('myProvider', function () {
    this.currency = '￥';
    this.$get = function () {
        return {
            name:12
        }
    }

});
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
        controller: function ($scope,myProvider) {
            $scope.title = 'hello '
            console.log(myProvider)
        }
    }).when('/settings/:id/:name',{
        templateUrl:"temple1.html",
        controller:"settingCtrl"
    }).otherwise('404.html');
})