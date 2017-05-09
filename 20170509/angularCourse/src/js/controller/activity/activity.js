//社区活动主页面
course.controller("activityCtrl",["$scope",function ($scope) {

    $scope.title = '亲子活动'
    {
        var result = {
            "success": true,
            "errorCode": "-1",
            "msg": "操作成功",
            "body": {
                "data": [{
                    "id": "3381aaed7bdb43a7985afab3d27fadb4",
                    "activityName": "岁月无情",
                    "activityType": "1",
                    "classify": "1",
                    "beginTime": "2017-01-07",
                    "endTime": "2017-01-12",
                    "address": "俄方温热 日4",
                    "sponsor": "廊坊银行",
                    "distance": null,
                    "imageUrl": "5870fd9ae4b0d40268dc218a",
                    "remainingPlaces": 15,
                    "joinTag": null,
                    "beginTag": "2"
                }, {
                    "id": "011cd6159a574ea5b1f85c5447984a69",
                    "activityName": "新增的社区活动1124",
                    "activityType": "1",
                    "classify": "1",
                    "beginTime": "2016-11-25",
                    "endTime": "2016-11-29",
                    "address": "廊坊市新开路1号",
                    "sponsor": "动1124",
                    "distance": null,
                    "imageUrl": "58368449e4b0a7c3ab6c55ac",
                    "remainingPlaces": 3,
                    "joinTag": null,
                    "beginTag": "2"
                }, {
                    "id": "844821bd37fe427eaa921277fe291c15",
                    "activityName": "20161125的活动",
                    "activityType": "1",
                    "classify": "1",
                    "beginTime": "2016-11-24",
                    "endTime": "2016-11-30",
                    "address": "20161125的活动",
                    "sponsor": "20161125的活动",
                    "distance": null,
                    "imageUrl": "5837eaf9e4b0f8a26e96fdc6",
                    "remainingPlaces": 3,
                    "joinTag": null,
                    "beginTag": "2"
                }, {
                    "id": "ad49157bea33449ba5cb0775ced89710",
                    "activityName": "超过报名截止日期",
                    "activityType": "1",
                    "classify": "1",
                    "beginTime": "2016-10-01",
                    "endTime": "2016-10-31",
                    "address": "上地嘉华大厦",
                    "sponsor": "仍然",
                    "distance": null,
                    "imageUrl": "580da170a59ef32e7fdf0cb2",
                    "remainingPlaces": 10,
                    "joinTag": null,
                    "beginTag": "2"
                }]
            }
        }
    }

    $scope.data = result.body.data;
}])