$(document).ready(resizeBannerImage);
window.onresize = resizeBannerImage; //当窗口改变宽度时执行此函数
function resizeBannerImage() {
    var winW = $(window).width();
    if ($(window).width() <= 1240 && $(window).width() > 640) {
        $(".header-ri").hide()
        $(".header-ri-xs").show().removeClass("tosm")
        $(".header-le").show()
        $(".header-le-xs").hide()


    } else if ($(window).width() > 1240 && $(window).width() < 1350) {
        $(".header-ri").show()
        $(".header-ri-xs").hide()
        $(".header-le").show()
        $(".header-le-xs").hide()

        $(".header-ri ul li").css("marginLeft", "10px").first().css("marginLeft", "0px").end().last().css("marginLeft", "0px")

    } else if ($(window).width() <= 640) {
        $(".header-ri").hide()
        $(".header-ri-xs").show()
        $(".header-le").hide()
        $(".header-le-xs").show()
        $(".header-ri-xs").addClass("tosm")

    } else if ($(window).width() >= 1350) {
        $(".header-ri").show()
        $(".header-ri-xs").hide()
        $(".header-le").show()
        $(".header-le-xs").hide()
        $(".header-ri ul li").css("marginLeft", "20px").first().css("marginLeft", "0px")
    }
}
$(".header-ri ul li").hover(function () {
    $(this).addClass("curactive").siblings().removeClass("curactive")
}, function () {
    $(this).removeClass("curactive")
})
//more触摸效果
$(".more a").mouseenter(function (event) {
    console.log(event.offsetX,event.offsetY)
    $(this).children("i").css({
        left:event.offsetX-1+"px",
        top:event.offsetY-1+"px"
    })
});

// 轮播图调用函数
$("#lbt-carousel-example-generic carousel").carousel()

var num = true;
$(".header-ri .search span").click(function () {
    if (num) {
        $(".header-ri ul").slideUp(0.3, function () {
            $(".search input").slideDown()
        })
        num = false;
    } else {
        $(".search input").slideUp(0.3, function () {
            $(".header-ri ul").slideDown()
        })
        num = true
    }

})
// 产品轮播图
$(".cplbtimgrow-box").hover(function () {
    $(this).parents(".cplbtimgrowmaxbox").css({
        transform: "translateZ(20px)",
        transform: "translatey(10px)",
        boxShadow: "0 3px 21px -7px #000"
    })
    $(this).children().addClass("cplbtimgrow-imgbox-active")
    $(this).next().find("p").css("color", "#ef8200")
}, function () {
    $(this).children().removeClass("cplbtimgrow-imgbox-active")
    $(this).parents(".cplbtimgrowmaxbox").css({
        transform: "translateZ(0px)",
        transform: "translatey(0px)",
        boxShadow: ""
    })
    $(this).next().find("p").css("color", "#000")
})
// 轮播关联

// 用触发函数trigger关联
$("#lnlbtright-carousel-example-generic").find("li").hover(function () {
    $(this).trigger("click")
    var index = $(this).index()
    $("#lnlbt-carousel-example-generic").find("li").eq(index).trigger("click")
})

$("#lnlbt-carousel-example-generic").find("li").click(function () {
    var index = $(this).index()
    $("#lnlbtright-carousel-example-generic").find("li").eq(index).trigger("click")
})

// 使用bootstrap的函数关联
// $("#lnlbt-carousel-example-generic").find("li").click(function () {
//     var index = $(this).index()
//     $('#lnlbtright-carousel-example-generic.carousel').carousel(index)
// })
// $("#lnlbtright-carousel-example-generic").find("li").click(function () {
//     var index = $(this).index()
//     $('#lnlbt-carousel-example-generic.carousel').carousel(index)
// })