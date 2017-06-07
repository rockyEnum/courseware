var fs = require('fs');
//type 是操作类型，name：是文件名
// var watch1 = fs.watch("./data.txt",function(type,name){
//    console.log(type,name)
//     watch1.close();//关闭监听文件
// })
//
// watch1.on('error',function (err) {
//     console.log(err)
// })
// var data = '';
// var r1 = new fs.ReadStream ('./data.txt');
// //文件被打开的时候触发
// r1.on('open',function (fd) {
//
// })
// //监听文件流
// r1.on('data',function (thrunk) {
//     data+=thrunk;
// })
//
// //当读完之后触发
// r1.on('end',function () {
//     console.log(data)
// })

//创建可读流
/*
* flags:r 可读操作
* endcoding 编码格式
* start 开始读取位置
* end 读取结束位置；
* */
// var read = fs.createReadStream("./data.txt",{flags:'r',encoding :'utf-8',start: 3, end: 30});
// var readData= '';
// read.on('open',function () {
//
// })
// read.on('data',function (thrunk) {
//     readData+=thrunk;
//     console.log(thrunk)
//
// })
// read.on('end',function () {
//     console.log(readData)
//
// })

//创建一个可写流
// var write = fs.createWriteStream('./data.txt',{flags:'w'},function () {
//
// })
// write.write('含安安安','utf8',function (err, written, string) {
//    console.log(err,written,string)
// })
var content = '写入的内容121212';
// writeFile是一个异步的操作 文件不存在的情况自动创建
// fs.writeFile('./data.txt',content,function (err) {
//     console.log(err)
// })
// console.log('start')
//writeFileSync  同步操作，文件不存在的情况自动创建
//  try {
//      fs.writeFileSync('./data.txt',content)
//  }catch (e){
//     console.log(e.expression);//操作描述
//  }finally {
//
//  }
//
// console.log('start')
//appendFile一部操作 ，appendFileSync 同步操作
var fs1 = fs.appendFile('./data.txt','撒旦撒旦撒旦',function (err) {
    console.log(err)
})
console.log(fs1)
console.log('start')

fs.stat('./data.txt',function (err, stats) {
    console.log('是否是文件'+stats.isFile())
    console.log('是否是文件夾'+stats.isDirectory())
})

//创建文件夹
fs.mkdir('./src',function (err) {

})