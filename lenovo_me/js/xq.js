

// 放大镜板块
$(".photos ul li").eq(0).find("a").addClass("acon")
$(".photos ul li").mousemove(function(){
	$(this).find("a").addClass("acon").parent().siblings().find("a").removeClass("acon");
	$(".detailphoto").find("img").attr("src",function(){
		$(this).find("img").attr("src").
	})
})