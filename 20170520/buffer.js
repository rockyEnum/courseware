var buf = new Buffer('韩'); //默认是base64 16进制 废弃
console.log(buf)
console.log(buf.toString())
var buf1= new Buffer([1,1]);
console.log(buf1)
console.log(buf1.length)
//compare 比较大小
var c1 = Buffer.from('21');
console.log(c1)
var c2 = Buffer.from('2');
console.log(c2)
console.log(c1.compare(c2))
//
const arr = [c1,c2]
arr.sort(Buffer.compare)
console.log(arr)// 2  21 排序 按升序排列

var c3 = Buffer.from('2');

console.log(c3)
var c4 = Buffer.from('0x2'); //0x 0x2代表是16进制的2
var c5 = Buffer.from('2'); //0x 0x2代表是16进制的2
console.log(c4)
console.log(c5)
// img
// Node.js 目前支持的字符编码包括：
//
// 'ascii' - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
//
// 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
//
// 'utf16le' - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
//
// 'ucs2' - 'utf16le' 的别名。
//
// 'base64' - Base64 编码。当从字符串创建 Buffer 时，按照 RFC4648 第 5 章的规定，这种编码也将正确地接受“URL 与文件名安全字母表”。
//
// 'latin1' - 一种把 Buffer 编码成一字节编码的字符串的方式（由 IANA 定义在 RFC1345 第 63 页，用作 Latin-1 补充块与 C0/C1 控制码）。
//
// 'binary' - 'latin1' 的别名。
//
// 'hex' - 将每个字节编码为两个十六进制字符。

//一个汉字占 9个buf字节  字母或数字占3个buf字节
var buf5 = Buffer.from('123456');
console.log(buf5.write('韩',0,3))
console.log(buf5.toString())
var buf6 = Buffer.from('韩');
var buf7 = Buffer.from('信');
console.log(buf6)
console.log(buf7)
console.log(Buffer.concat([buf6,buf7]).toString())