var j = 0;
var arr = []
onmessage = function (e) {
    var data = e.data;
    for(var i =0;i<10000000;i++){

            arr.push(i+j)

    }
    var date2 = new Date();
   postMessage("执行完毕")
}

