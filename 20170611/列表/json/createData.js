//->制造假数据的
function random(n, m) {
    return Math.round(Math.random() * (m - n) + n);
}
var area1 = "赵钱孙李周吴郑王冯陈楚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏桃江";//0-31
var area2 = "一二三四五六七八九";//->0-8

var ary = [];
for (var i = 1; i <= 99; i++) {
    var obj = {};
    obj["id"] = i;
    obj["name"] = area1[random(0, 31)] + area2[random(0, 8)];
    obj["sex"] = random(0, 1);//0->男 1->女
    obj["score"] = random(59, 99);
    ary.push(obj);
}
console.log(JSON.stringify(ary));



