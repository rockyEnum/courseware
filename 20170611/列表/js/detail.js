function queryURLParameter(url) {
    url = url || window.location.href;
    var reg = /([^?&=#]+)=([^?&=#]+)/g,
        obj = {};
    url.replace(reg, function () {
        obj[arguments[1]] = arguments[2];
    });
    return obj;
}
var detailBox = document.getElementById("detailBox"),
    studentId = queryURLParameter()["id"];

//->并没有在URL上传递ID值
if (typeof studentId === "undefined") {
    detailBox.style.display = "none";
}

ajax({
    url: "/getInfo?id=" + studentId,
    success: function (jsonData) {
        //->当前学员的信息不存在
        if (jsonData["code"] == 1) {
            detailBox.style.display = "none";
            return;
        }

        //->当前学员的信息获取到了
        var data = jsonData["data"];
        var str = '';
        str += '<div>';
        str += '<span class="one">编号:</span>';
        str += '<span class="two">' + data["id"] + '</span>';
        str += '</div>';
        str += '<div>';
        str += '<span class="one">姓名:</span>';
        str += '<span class="two">' + data["name"] + '</span>';
        str += '</div>';
        str += '<div>';
        str += '<span class="one">性别:</span>';
        str += '<span class="two">' + (data["sex"] == 1 ? "女" : "男") + '</span>';
        str += '</div>';
        str += '<div>';
        str += '<span class="one">分数:</span>';
        str += '<span class="two">' + data["score"] + '</span>';
        str += '</div>';
        detailBox.innerHTML = str;
    }
});




