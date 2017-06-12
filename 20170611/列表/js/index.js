var n = 1,//->存储的是当前的页码
    total = 0;//->存储的是当前总页数

//->获取页面中需要的HTML元素
var box = document.getElementById("box"),
    list = document.getElementById("list"),
    page = document.getElementById("page"),
    pageNum = document.getElementById("pageNum"),
    pageInp = document.getElementById("pageInp");

//->pageModule:单例模式实现我们分页数据的请求和绑定
var pageModule = (function () {
    //->bind html:jsonData就是我们AJAX请求回来的数据
    function bindHTML(jsonData) {
        total = jsonData["total"];

        //1)绑定分页页码区域的内容
        var str = '';
        for (var i = 1; i <= total; i++) {
            str += '<li>' + i + '</li>';
        }
        pageNum.innerHTML = str;

        //2)绑定列表区域的内容
        var data = jsonData["data"];
        str = '';
        for (i = 0; i < data.length; i++) {
            var curData = data[i];
            str += '<li studentId="' + curData["id"] + '">';
            str += '<span>' + curData["id"] + '</span>';
            str += '<span>' + curData["name"] + '</span>';
            str += '<span>' + (curData["sex"] == 1 ? "女" : "男") + '</span>';
            str += '<span>' + curData["score"] + '</span>';
            str += '</li>';
        }
        list.innerHTML = str;

        //3)改变页码区域的选中
        changeBg();

        //4)让文本框中的数字跟着改变
        pageInp.value = n;
    }

    //->changeBg:改变页码区域的选中状态
    function changeBg() {
        var pageList = pageNum.getElementsByTagName("li");
        for (var i = 0; i < pageList.length; i++) {
            pageList[i].className = i + 1 == n ? "bg" : null;
        }
    }

    //->send ajax
    function init() {
        ajax({
            url: "/getList?n=" + n,
            success: bindHTML
        });
    }

    return {
        init: init
    }
})();
pageModule.init();

//->使用事件委托处理我们的按钮点击事件,实现分页的逻辑处理
box.onclick = function (e) {
    e = e || window.event;
    var tar = e.target || e.srcElement,
        tarTag = tar.tagName.toUpperCase(),
        tarP = tar.parentNode,
        tarInn = tar.innerHTML;

    //->点击的是首页、尾页、下一页、上一页
    if (tarTag === "SPAN" && tarP.id === "page") {
        if (tarInn === "FIRST") {
            if (n === 1) {//->如果当前已经是第一页,点击首页是不需要进行任何处理的
                return;
            }
            n = 1;
        }
        if (tarInn === "LAST") {
            if (n === total) {//->如果当前已经是最后一页,点击尾页是不需要进行任何处理的
                return;
            }
            n = total;
        }
        if (tarInn === "PREV") {
            if (n === 1) {//->如果当前已经是第一页,点击上一页是不需要在减减的
                return;
            }
            n--;
        }
        if (tarInn === "NEXT") {
            if (n === total) {//->如果当前已经是最后一页,点击下一页是不需要在加加的
                return;
            }
            n++;
        }
        pageModule.init();
        return;
    }

    //->点击的是页码
    if (tarTag === "LI" && tarP.id === "pageNum") {
        if (parseInt(tarInn) === n) {//->点击的页码和当前页相同,这样的话我们不需要进行重新的操作
            return;
        }
        n = parseInt(tarInn);
        pageModule.init();
        return;
    }

    //->点击的是列表
    if (tarTag === "LI" && tarP.id === "list") {
        //window.location.href = "detail.html"; //->从当前窗口打开
        window.open("detail.html?id=" + tar.getAttribute("studentId"));
    }
    if (tarTag === "SPAN" && tarP.parentNode.id === "list") {
        window.open("detail.html?id=" + tar.parentNode.getAttribute("studentId"));
    }
};

//->文本框按下触发
pageInp.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {//->按下的键是ENTER回车键
        var val = Number(this.value);

        //->输入的并非有效数字:我们让文本框显示当前页,不进行任何的处理
        if (isNaN(val)) {
            this.value = n;
            return;
        }

        //->超过最大页码和最小页码我们都是需要做边界判断的
        if (val > total) {
            n = total;
        } else if (val < 1) {
            n = 1;
        } else {
            n = val;
        }
        pageModule.init();
    }
};

