//社区活动主页面
course.controller("activityCtrl", ["$scope", "$rootScope", "$http", "$state", function ($scope, $rootScope, $http, $state) {
    $rootScope.baseImgUrl = 'http://lfbank.strongunion.com.cn/file-store-server-2.0.1/api/';
    $scope.title = '亲子活动'
    var typeStr = ["亲子活动", "女性活动", "户外活动"]
    var param = {url: 'http://lfbank.strongunion.com.cn/microbank/rest/solr/newlyActivity'}
    param.data = {
        pageNo: 1,
        pageSize: 15,
        officeId: '37484b5b83e7479eaa0ea08c7b196f12',
        classify:0
    }
    getData();
    $scope.data = [];
    $scope.goDetail = function (id) {
        $state.go("activity_detail", {id: id});
    }
    function getData() {
        var url = addQueryString(param.url, param.data)
        $http({
            method: "get",
            url: url
        }).then(function (result) {
            $scope.data = result.data.body.data;
        })
    }

    $scope.changeActivity = function ($event) {
        var target = $event.target;
        var typeName = target.tagName;
        var parent;
        if (typeName == "IMG" || typeName == "P") {
            parent = target.parentNode;
        } else {
            parent = target;
        }
        var _tp = parent.getAttribute("_type");
        $scope.title = typeStr[_tp]
        param.data.classify = _tp;
        getData();
    }
    //拼接url的queryString部分
    function addQueryString(url, data) {
        var str = ''; //'str1=1&'
        for (var k in data) {
            if (data.hasOwnProperty(k)) {
                str += k + '=' + data[k] + '&';
            }
        }
        if (str) {
            url += url.indexOf('?') === -1 ? '?' : '&';
        }
        str = url + str.substr(0, str.length - 1)
        return str;
    }
}])