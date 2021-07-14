// a标签跳转
var url = window.location.href;
var urlname = url.split("/");
var righttextli = $(".righttext")[0].children[0].children;

for(var i = 0 ; i<=urlname.length ; i++){
		if(i==urlname.length){
			var zuihname = (urlname[i-1]).split(".").shift();
		}
	}
switch (zuihname){
	case "index":
	righttextli[0].children[0].className = "headacon"
		break;
	case "AfterUs":
	righttextli[1].children[0].className = "headacon"
		break;
	case "Introduction":
	righttextli[2].children[0].className = "headacon"
		break;
	case "ZXInformation":
	righttextli[3].children[0].className = "headacon"
		break;
	case "ContactUs":
	righttextli[4].children[0].className = "headacon"
		break;
	default:
		break;
}

	

