//->ajax:实现AJAX数据请求
function ajax(options) {
    //->init parameter
    var _default = {
        url: null,
        type: "get",
        async: true,
        data: null,
        success: null
    };
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            _default[key] = options[key];
        }
    }

    //->get method clear cache
    if (_default.type === "get") {
        _default.url += _default.url.indexOf("?") > -1 ? "&_=" : "?_=";
        _default.url += Math.random();
    }

    //->send ajax
    var xhr = createXHR();
    xhr.open(_default.type, _default.url, _default.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            var data = xhr.responseText;
            data = "JSON" in window ? JSON.parse(data) : eval("(" + data + ")");
            _default.success && _default.success.call(xhr, data);
        }
    };
    xhr.send(_default.data);
}

//->createXHR:创建一个AJAX对象,兼容所有的浏览器
function createXHR() {
    var xhr = null;
    var ary = [
        function () {
            return new XMLHttpRequest;
        },
        function () {
            return new ActiveXObject("Microsoft.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml2.XMLHTTP");
        },
        function () {
            return new ActiveXObject("Msxml3.XMLHTTP");
        }
    ];
    for (var i = 0; i < ary.length; i++) {
        var tempFn = ary[i];
        try {
            xhr = tempFn();
            createXHR = tempFn;
            break;
        } catch (e) {

        }
    }
    return xhr;
}