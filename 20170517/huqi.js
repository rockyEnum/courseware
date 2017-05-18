//打开/下载app
//需求是：比如在浏览器里面打开项目里面列表页面，想看对应的详情，必须安装app才能看
//首先呢，打开app 如果没打开成功 跳到下载页面
//需要端上提供地址url scheme (每个应用app都是唯一的)
// 格式: 第一种 协议://地址
//       第二种 地址://协议


//安卓手机
// if(ua.indexOf("Android")){
//
// }else if(ua.indexOf("iPhone")){ //苹果手机
//
// }
//打开/下载app
function openApp(){
    // var urlSchnmeUrl = 'icbc://elife.dccne';//url scheme地址
    // var downLoad = '应用宝地址'
    // var ua = navigator.userAgent;
    // location.href = urlSchnmeUrl;//如果能打开
    // setTimeout(function () {
    //     location.href = downLoad;
    // },2000)
    // setInterval(function(){
    //     if(!document.hidden){
    //         location.href = downLoad;
    //     }
    // },2000)

    //页面是否可见的事件
    document.addEventListener('visibilitychange', function(e) {
         console.log('页面可见状态'+!document.hidden)
    });
    document.addEventListener('webkitvisibilitychange', function(e) {
        console.log('页面可见状态'+!document.hidden)
    });
}
openApp();
//不要在全局里面写一些逻辑
// if()else{
//
// }