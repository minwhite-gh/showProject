// 视频专区js begin
var videoul = document.getElementsByClassName("videoul");
var videoli = videoul[0].getElementsByTagName("li");


for(var i = 0 ; i<videoli.length ; i++){
		videoli[i].onmouseover = function(){
			this.className = "videolicon";
		}
		videoli[i].onmouseout = function(){
			this.className = "";
		}
}

// 视频专区js end