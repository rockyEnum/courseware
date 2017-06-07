var Emitter = require('events');
var myEmitter = new Emitter();
//注册事件
// myEmitter.on('click',function (a,b) {
//     console.log(this)
//     console.log('触发click,参数是',a)
// })
//
// myEmitter.on('click',function (a,b) {
//     console.log('第二个click',a,b)
// })
// myEmitter.on('click',function (a,b) {
//     console.log('第二个click',a,b)
// })
// myEmitter.on('mouseover',function (a,b) {
//     console.log('mouseover',a,b)
// })
// console.log('click绑定的事件数量是',myEmitter.listenerCount("click"))
// console.log('click绑定的事件集合',myEmitter.listeners("click"))
// //发射事件，执行
// myEmitter.emit("click",'参数1',12);

// var obj= {}
// obj['click']=[];
// obj['click'].push(fun1)
// obj['click'].push(fun2)
//
// for(var i =0;i<obj['click'].length;i++){
//     obj["click"][i]();
// }
//() => {} 等价于  function(){}


var myEvent = new Emitter();
//只执行一次，执行完毕之后删掉这个项(事件函数)
myEvent.on('open',function () {
    console.log(this)
    console.log(12)
})
//用es6写法 this指向{} 等价于全局里的this对象
myEvent.on('open',() => {
    console.log(this)
    console.log(13)
})
myEvent.emit("open");
// myEvent.emit("open");
myEvent.removeAllListeners(["open"]);
console.log(this);
function myclick1(){
    console.log("myclick1")
}
//设置监听器数量，超出会警告提醒
myEvent.setMaxListeners(2)
myEvent.on('click',myclick1)
myEvent.on('click',function () {
    console.log(12)
})
myEvent.on('click',function () {
    console.log(12)
})

myEvent.emit('click');
//移除click下对应的事件函数
// emitter.removeListener("click",myclick1 )