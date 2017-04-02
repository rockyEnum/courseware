function GetQueryString(e) {
    if (null == e || void 0 == e)return null;
    var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = window.location.search.substr(1).match(n);
    return null != i ? unescape(i[2]) : null
}
function isWeiXin() {
    var e = window.navigator.userAgent.toLowerCase();
    return "micromessenger" == e.match(/MicroMessenger/i)
}
function isQQ() {
    var e = window.navigator.userAgent.toLowerCase();
    return "qq" == e.match(/QQ/i)
}
function GetCarousel(e, n, i) {
    $.ajax({
        url: "/api/v4/product/common/banners",
        type: "get",
        async: !1,
        data: {categoryName: e, channelName: n},
        success: function (e) {
            var n = "";
            $.each(e.data, function (e, i) {
                n += '<div class="swiper-slide"><a href="' + i.url + '"><img width="100%" height="100%" src="' + i.content + '"></a></div>'
            }), console.log(n), $(".carousel .swiper-container-b").find(".swiper-wrapper").html(n);
            new Swiper(".swiper-container-b", i)
        }
    })
}
$(function () {
    var e = new Swiper(".swiper-container-a", {direction: "vertical", loop: !1, speed: 600});
    $(".nextpage").click(function () {
        e.slideNext("", 600)
    });
    var n = GetQueryString("jumpTo"), i = GetQueryString("td");
    if ("gomefinance" == i && $(".dLink a").attr("should-captured", ""), isWeiXin()) {
        n && $(".maskDown").show();
        var o = navigator.userAgent.toLowerCase();
        /iphone|ipad|ipod/.test(o) ? ($(".dLink .andriod, .qr_code_and").hide(), $(".dLink .ios, .qr_code_ios").show(), $(".dLink a").on("click", function () {
            $(".maskDown").show(), $(".maskDown").on("touchmove", function (e) {
                e.preventDefault()
            }, !1), e.lockSwipes()
        })) : /android/.test(o) && ($(".dLink .andriod, .qr_code_and").show(), $(".dLink .ios, .qr_code_ios").hide())
    } else {
        $(".maskDown").hide(), isQQ() && n && $(".maskDown").show();
        var o = navigator.userAgent.toLowerCase();
        /iphone|ipad|ipod/.test(o) ? ($(".dLink .andriod, .qr_code_and").hide(), $(".dLink .ios", ".qr_code_ios").show()) : /android/.test(o) && ($(".dLink .andriod, .qr_code_and").show(), $(".dLink .ios, .qr_code_ios").hide())
    }
    $(".maskDown").on("click", function () {
        $(this).hide(), e.unlockSwipes()
    }), n && (window.location.href = "mylc:/" + GetQueryString("jumpTo"));
    var a = {
        loop: !0,
        pagination: ".swiper-pagination-b",
        paginationClickable: !0,
        autoplay: 3e3,
        speed: 300,
        autoplayDisableOnInteraction: !1,
        grabCursor: !0
    };
    this.GetCarousel("GYHD", "H5MidBanners", a)
});