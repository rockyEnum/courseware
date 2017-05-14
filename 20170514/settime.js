//定时器 setimeout
//清除 clearTimeout() clearInterval()

console.log('kais ');
setTimeout(function () {
    console.log('settime')
},0)
setTimeout(function () {
    console.log('1')
},0)
setTimeout(function () {
    console.log('2')
},10)
var time =setInterval(function () {
    console.log(1)
},1000)
clearInterval(time)