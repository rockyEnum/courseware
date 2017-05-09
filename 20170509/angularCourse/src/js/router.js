var course = angular.module('course',["ui.router"]);
course.config(["$stateProvider","$locationProvider",function ($stateProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $stateProvider.state("home",{
        url:"/home",
        template:'<div><div ui-view></div></div>'
    }).state('home.home',{
        url:'/home',
        templateUrl:"view/home/home.html",
        controller:"homeCtrl1"//indexCtrl
    }).state('activity',{
        url:'/activity',
        templateUrl:"view/activity/activity.html",
        controller:"activityCtrl"
    })
}])