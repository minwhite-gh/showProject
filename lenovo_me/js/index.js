//倒计时
var Spikeleftsp3 = document.getElementsByClassName("Spikeleftsp3")[0]
var Spikeleftsp4 = document.getElementsByClassName("Spikeleftsp4")[0]
var Spikeleftsp5 = document.getElementsByClassName("Spikeleftsp5")[0]

setInterval(countdown, 1000);

function countdown() {
	var begintime = new Date();
	var endtime = new Date("2019/08/23 16:00:00")
	var totime = parseInt(endtime.getTime() - begintime.getTime());

	var day = parseInt(totime / 1000 / 60 / 60 / 24);
	var h = parseInt(totime / 1000 / 60 / 60 % 24);
	var m = parseInt(totime / 1000 / 60 % 60);
	var s = parseInt(totime / 1000 % 60);

	var days = (day > 10 ? day : "0" + day);
	var hs = (h > 10 ? h : "0" + h);
	var ms = (m > 10 ? m : "0" + m);
	var ss = (s > 10 ? s : "0" + s);

	Spikeleftsp3.innerText = hs;
	Spikeleftsp4.innerText = ms;
	Spikeleftsp5.innerText = ss;

}
//左侧导航条
var head = $(".head")[0];
var PlantingMap = $(".PlantingMap")[0];
var sidebarrleft = $(".sidebarrleft")[0];
var bodybg = $(".bodybg")[0];
var body1 = $(".body1");
var sidebarrleft1 = $(".sidebarrleft1");
var spantext1 = $(".spantext1")
window.onscroll = function() {
	if ((scroll().top >= parseInt(head.offsetHeight + PlantingMap.offsetHeight)) && (scroll().top <= parseInt(head.offsetHeight +
			PlantingMap.offsetHeight + bodybg.offsetHeight))) {
		sidebarrleft.style.display = "block";
	} else {
		sidebarrleft.style.display = "none";

	}


	if (scroll().top > body1[0].offsetTop && scroll().top < body1[0].offsetTop + body1[0].offsetHeight) {
		spantext1[0].innerText = "lenovo"
		spantext1[0].style.color = "#4ac0e0"
	} else {
		spantext1[0].innerText = "1F"
		spantext1[0].style.color = "#666"
	}

	if (scroll().top > body1[1].offsetTop && scroll().top < body1[1].offsetTop + body1[1].offsetHeight) {
		spantext1[1].innerText = "台式"
		spantext1[1].style.color = "#4ac0e0"
	} else {
		spantext1[1].innerText = "2F"
		spantext1[1].style.color = "#666"
	}

	if (scroll().top > body1[2].offsetTop && scroll().top < body1[2].offsetTop + body1[2].offsetHeight) {
		spantext1[2].innerText = "手机"
		spantext1[2].style.color = "#4ac0e0"
	} else {
		spantext1[2].innerText = "3F"
		spantext1[2].style.color = "#666"
	}
}

