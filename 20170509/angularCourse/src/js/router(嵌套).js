var course = angular.module('course',["ui.router"]);
course.config(["$stateProvider","$locationProvider",function ($stateProvider,$locationProvider) {
    //angular-router 和 ui-router （嵌套路由）
    $locationProvider.hashPrefix("");  //解决#!不能跳转问题
    //嵌套路由 状态接口 主.子状态  路由地址 /home(主的)/home(子的)
    $stateProvider.state("home",{
        url:"/home",
        template:'<div>asdsadsadasd<div ui-view></div></div>'//尤其用在后台管理这种项目 左边菜单(用home充当模块里公共的一块html)都是一样的，只是右边的view变
    }).state('home.home',{ //在页面上输入 /home/home
        url:'/home',
        templateUrl:"view/home/home.html"
    }).state('activity',{
        url:'/activity',
        template:"<div>我是activity页面</div>"
    })
}])