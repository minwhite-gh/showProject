(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfc6101a"],{"0fa5":function(t,s,i){},"2f14":function(t,s,i){"use strict";i.d(s,"a",(function(){return o}));i("99af"),i("fb6a"),i("a9e3");var e=i("d4ec"),a=i("bee2"),n=function(){function t(){Object(e["a"])(this,t)}return Object(a["a"])(t,[{key:"queryString",value:function(t){var s="";for(var i in t)s+="".concat(i,"=").concat(t[i],"&");return s.slice(0,-1)}},{key:"setGoS",value:function(t){var s=Number(t.slice(0,2)),i=Number(t.slice(3));return 60*s+i}}]),t}(),o=new n},5899:function(t,s){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,s,i){var e=i("1d80"),a=i("5899"),n="["+a+"]",o=RegExp("^"+n+n+"*"),r=RegExp(n+n+"*$"),l=function(t){return function(s){var i=String(e(s));return 1&t&&(i=i.replace(o,"")),2&t&&(i=i.replace(r,"")),i}};t.exports={start:l(1),end:l(2),trim:l(3)}},"699c":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"lyrics"},[e("div",{staticClass:"bgImgBox",style:{backgroundImage:"url("+t.songData.al.picUrl+")"}}),e("div",{staticClass:"lyricsTop flexbetween"},[e("div",{staticClass:"top-left"},[e("div",{staticClass:"iconbox",on:{click:t.toBack}},[e("van-icon",{attrs:{name:"arrow-left",size:"24"}})],1),e("div",{staticClass:"namebox"},[e("span",{staticClass:"one-ellipsis"},[t._v(t._s(t.songData.name))])])]),t._m(0)]),e("div",{staticClass:"lyricsBody"},[e("div",{staticClass:"songWordBox"},[e("ul",{staticClass:"songWordList"},[e("li",{staticClass:"firstSongWordItem"}),t._l(t.songWordData,(function(s,i){return e("li",{key:i,ref:"songWordItem",refInFor:!0,class:s.isActive?"songWordItem active":"songWordItem",attrs:{"data-radius":s.time}},[e("span",[t._v(t._s(s.title))])])}))],2)])]),e("div",{staticClass:"lyricsFoot"},[e("div",{staticClass:"sliderBox"},[e("div",{staticClass:"showBox"}),e("div",{staticClass:"startNum"},[t._v(t._s(t.thisSongData.newDate))]),e("div",{staticClass:"sliderBtn",on:{touchstart:t.touchSSliderBtn,touchmove:t.touchMsliderBtn,touchend:t.touchEsliderBtn}}),e("div",{staticClass:"endNum"},[t._v(t._s(t.songData.totalTime))])]),e("div",{staticClass:"operationBox flexbetween"},[e("div",{staticClass:"leftBtn",on:{click:t.switchBtn}},[e("img",{attrs:{src:t.newShowBtn,alt:""}})]),e("div",{staticClass:"centerBtn flexbetween"},[e("div",{staticClass:"centerBtn_left clearfix",on:{click:t.setPrevSong}},[e("div",{staticClass:"sjx_left fl"}),e("div",{staticClass:"sjx_left fl"})]),e("div",{staticClass:"centerBtn_center",on:{click:t.clickPlay}},[e("img",{attrs:{src:t.btnUrl,alt:""}})]),e("div",{staticClass:"centerBtn_right clearfix",on:{click:t.setNextSong}},[e("div",{staticClass:"sjx_right fr"}),e("div",{staticClass:"sjx_right fr"})])]),e("div",{staticClass:"rightBtn",attrs:{"is-link":""},on:{click:t.showPopup}},[e("img",{attrs:{src:i("9833"),alt:""}})]),e("van-popup",{style:{height:"64%"},attrs:{round:"",position:"bottom"},on:{opened:t.popupOpened,close:t.popupClose},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"title flexbetween"},[e("div",{staticClass:"titleLeft"},[e("span",[t._v("当前播放")]),e("span",{staticClass:"num"},[t._v("("+t._s(t.listLength)+")")])]),e("div",{staticClass:"titleRgiht",on:{click:t.switchBtn}},[e("span",[t._v(t._s(t.playStyleText))]),e("img",{attrs:{src:t.propNewShowBtn,alt:""}})])]),e("div",{staticClass:"listBody"},t._l(t.songListData,(function(s,a){return e("div",{key:a,staticClass:"listBodyItem flexbetween",class:s.isActive?"active":""},[e("div",{staticClass:"listBodyItem_left one-ellipsis",on:{click:function(i){return t.clickSongListItem(s,a)}}},[e("div",{staticClass:"text"},[e("span",{staticClass:"songName"},[t._v(t._s(s.name))]),e("span",{staticClass:"songHen"},[t._v("-")]),e("span",{staticClass:"songAuther"},[t._v(t._s(s.ar[0].name))])])]),e("div",{staticClass:"listBodyItem_right",on:{click:function(s){return t.delSong(a)}}},[e("img",{attrs:{src:i("1d1b"),alt:""}})])])})),0)])],1)])])},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top-right"},[e("img",{attrs:{src:i("8096"),alt:""}})])}],n=(i("d81d"),i("a434"),i("b0c0"),i("5530")),o=(i("0fa5"),i("2f14")),r=i("2f62"),l=Object(r["a"])("MusicAudioStore"),c=l.mapState,h=l.mapActions,u={data:function(){return{thisSongData:{bgImg:"",songName:"",songImg:"",timeDate:"",newDate:""},touchBool:!1,timeer:null,sliderBoxWidth:0,sliderBtnMovepagex:0,btnData:["whiteplay","whitesuspend"],btnUrl:i("0e2e"),listLength:0,playStyleText:"列表循环",playStyleTextData:["列表循环","单曲循环","随机播放"],styleBtnData:["whitexh","whiteonexh","whitesj"],newShowBtn:i("f213"),show:!1,propStyleBtnData:["xh","onexh","sj"],propNewShowBtn:i("3fa0")}},computed:Object(n["a"])({},c(["songData","audio","iconNum","audioData","songWordData","songListData","playStyleNum"])),created:function(){this.bgImg=this.audioData.picUrl,this.setaudioxy(2),this.setData(),this.btnUrl=i("0591")("./"+this.btnData[this.iconNum]+".svg")},mounted:function(){this.setsliderBox()},beforeDestroy:function(){clearInterval(this.timeer),this.timeer=null},watch:{iconNum:function(t){this.btnUrl=i("0591")("./"+this.btnData[t]+".svg")}},methods:Object(n["a"])(Object(n["a"])({},h(["setaudioxy","seticonNum","setsongData","setPlayStyleNum"])),{},{toBack:function(){this.$router.go(-1)},setData:function(){this.thisSongData.songImg=this.songData.al.picUrl,this.thisSongData.songName=this.songData.name},clickPlay:function(){0==this.iconNum?(this.seticonNum(1),this.audio.play(),this.setsliderBox()):(this.seticonNum(0),clearInterval(this.timeer),this.timeer=null)},setSongWordRun:function(t){if(!this.songWordData[0].nolyric&&this.songWordData&&!this.songWordData[0].nolyric){var s=document.querySelector(".songWordList"),i=o["a"].setGoS(t),e=o["a"].setGoS(this.songWordData[this.songWordData.length-1].time);if(i>e){for(var a=0;a<this.songWordData.length;a++)if(this.songWordData[a].isActive){this.songWordData[a].isActive=!1;break}return this.songWordData[this.songWordData.length-1].isActive=!0,void(s.style.top=-36*this.songWordData.length-1+"px")}for(var n=0;n<this.songWordData.length;n++)if(o["a"].setGoS(this.songWordData[n].time)==i||i<o["a"].setGoS(this.songWordData[n+1].time)){s.style.top=-36*n+"px";for(var r=0;r<this.songWordData.length;r++)if(this.songWordData[r].isActive){this.songWordData[r].isActive=!1;break}this.songWordData[n].isActive=!0;break}}},setNowSlider:function(){var t=Math.floor(this.audio.currentTime)%60,s=Math.floor(this.audio.currentTime/60%60);this.thisSongData.newDate=s+"."+t,s=s<=9?"0"+s:s,t=t<=9?"0"+t:t,this.setSongWordRun(s+":"+t);var i=this.songData.dt/1e3/this.audio.currentTime;document.querySelector(".showBox").style.width=100/i+"%",document.querySelector(".sliderBtn").style.left=this.sliderBoxWidth/i+"px"},setsliderBox:function(){var t=this;clearInterval(this.timeer),this.timeer=null,this.sliderBoxWidth=document.getElementsByClassName("sliderBox")[0].offsetWidth,this.setNowSlider(),1==this.iconNum?this.timeer=setInterval((function(){t.setNowSlider()}),1e3):(clearInterval(this.timeer),this.timeer=null)},touchSSliderBtn:function(t){this.touchBool=!0,clearInterval(this.timeer),this.timeer=null},touchMsliderBtn:function(t){if(this.touchBool){this.sliderBtnMovepagex=t.changedTouches[0].pageX;var s=document.querySelector(".sliderBox").offsetLeft,i=0;i=this.sliderBtnMovepagex-s<=0?0:this.sliderBtnMovepagex-s>=this.sliderBoxWidth?this.sliderBoxWidth:this.sliderBtnMovepagex-s,document.querySelector(".sliderBtn").style.left=i+"px",document.querySelector(".showBox").style.width=i+"px",this.setStartData()}},touchEsliderBtn:function(){this.setsliderBox(),document.querySelector(".showBox").offsetWidth!=this.sliderBoxWidth&&(this.audio.play(),this.seticonNum(1))},setStartData:function(){var t=document.querySelector(".showBox").offsetWidth,s=this.sliderBoxWidth/t;this.thisSongData.newDate=Math.floor(this.songData.dt/1e3/s/60%60)+"."+Math.floor(this.songData.dt/1e3/s%60),this.audio.currentTime=Math.floor(this.songData.dt/1e3/s)},setNextSong:function(){clearInterval(this.timeer),this.timeer=null,this.setsliderBox(),this.seticonNum(1);var t=this.audio.getAttribute("data-id");if(0==this.playStyleNum)for(var s=0;s<this.songListData.length;s++)if(t==this.songListData[s].id){var i=0;i=s+1==this.songListData.length?0:s+1,this.setsongData(this.songListData[i]).then((function(t){t.play()})),this.songListData[i].isActive=!0}else this.songListData[s].isActive=!1;else if(2==this.playStyleNum)for(var e=0;e<this.songListData.length;e++)if(t==this.songListData[e].id){var a=Math.ceil(Math.random()*this.songListData.length-1);this.setsongData(this.songListData[a]).then((function(t){t.play()})),this.songListData[a].isActive=!0}else this.songListData[e].isActive=!1},setPrevSong:function(){clearInterval(this.timeer),this.timeer=null,this.setsliderBox(),this.seticonNum(1);var t=this.audio.getAttribute("data-id");if(0==this.playStyleNum)for(var s=0;s<this.songListData.length;s++)if(t==this.songListData[s].id){var i=0;i=s-1<0?this.songListData.length-1:s-1,this.setsongData(this.songListData[i]).then((function(t){t.play()})),this.songListData[i].isActive=!0}else this.songListData[s].isActive=!1;else if(2==this.playStyleNum)for(var e=0;e<this.songListData.length;e++)if(t==this.songListData[e].id){var a=Math.ceil(Math.random()*this.songListData.length-1);this.setsongData(this.songListData[a]).then((function(t){t.play()})),this.songListData[a].isActive=!0}else this.songListData[e].isActive=!1},switchBtn:function(){var t=this.playStyleNum+1;t>=this.styleBtnData.length&&(t=0,this.setPlayStyleNum(0)),this.playStyleText=this.playStyleTextData[t],this.propNewShowBtn=i("0591")("./"+this.propStyleBtnData[t]+".svg"),this.newShowBtn=i("0591")("./"+this.styleBtnData[t]+".svg"),this.setPlayStyleNum(t)},popupOpened:function(){document.querySelector(".title").style.position="fixed"},popupClose:function(){document.querySelector(".title").style.position="static"},delSong:function(t){if(2==this.playStyleNum)for(var s=Math.ceil(Math.random()*this.listLength-1),i=0;i<this.songListData.length;i++)this.songListData[i].isActive&&i==t&&(this.setsongData(this.songListData[s]).then((function(t){t.play()})),this.songListData[s].isActive=!0);else for(var e=0;e<this.songListData.length;e++)this.songListData[e].isActive&&e==t&&(this.setsongData(this.songListData[e+1]).then((function(t){t.play()})),this.songListData[e+1].isActive=!0);this.songListData.splice(t,1),this.listLength=this.songListData.length},showPopup:function(){this.show=!0,this.listLength=this.songListData.length;var t=this.audio.getAttribute("data-id");this.songListData.map((function(s){s.id==t?s.isActive=!0:s.isActive=!1}))},clickSongListItem:function(t,s){if(!t.isActive){for(var i=0;i<this.songListData.length;i++)if(this.songListData[i].isActive){this.songListData[i].isActive=!1;break}t.isActive=!0,this.setsongData(t).then((function(t){t.play()})),this.seticonNum(1)}}})},d=u,g=i("2877"),f=Object(g["a"])(d,e,a,!1,null,null,null);s["default"]=f.exports},"99af":function(t,s,i){"use strict";var e=i("23e7"),a=i("d039"),n=i("e8b5"),o=i("861d"),r=i("7b0b"),l=i("50c4"),c=i("8418"),h=i("65f0"),u=i("1dde"),d=i("b622"),g=i("2d00"),f=d("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",m=g>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),D=u("concat"),y=function(t){if(!o(t))return!1;var s=t[f];return void 0!==s?!!s:n(t)},S=!m||!D;e({target:"Array",proto:!0,forced:S},{concat:function(t){var s,i,e,a,n,o=r(this),u=h(o,0),d=0;for(s=-1,e=arguments.length;s<e;s++)if(n=-1===s?o:arguments[s],y(n)){if(a=l(n.length),d+a>v)throw TypeError(p);for(i=0;i<a;i++,d++)i in n&&c(u,d,n[i])}else{if(d>=v)throw TypeError(p);c(u,d++,n)}return u.length=d,u}})},a9e3:function(t,s,i){"use strict";var e=i("83ab"),a=i("da84"),n=i("94ca"),o=i("6eeb"),r=i("5135"),l=i("c6b6"),c=i("7156"),h=i("c04e"),u=i("d039"),d=i("7c73"),g=i("241c").f,f=i("06cf").f,v=i("9bf2").f,p=i("58a8").trim,m="Number",D=a[m],y=D.prototype,S=l(d(y))==m,x=function(t){var s,i,e,a,n,o,r,l,c=h(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),s=c.charCodeAt(0),43===s||45===s){if(i=c.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(c.charCodeAt(1)){case 66:case 98:e=2,a=49;break;case 79:case 111:e=8,a=55;break;default:return+c}for(n=c.slice(2),o=n.length,r=0;r<o;r++)if(l=n.charCodeAt(r),l<48||l>a)return NaN;return parseInt(n,e)}return+c};if(n(m,!D(" 0o1")||!D("0b1")||D("+0x1"))){for(var B,w=function(t){var s=arguments.length<1?0:t,i=this;return i instanceof w&&(S?u((function(){y.valueOf.call(i)})):l(i)!=m)?c(new D(x(s)),i,w):x(s)},N=e?g(D):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),b=0;N.length>b;b++)r(D,B=N[b])&&!r(w,B)&&v(w,B,f(D,B));w.prototype=y,y.constructor=w,o(a,m,w)}}}]);
//# sourceMappingURL=chunk-dfc6101a.9112a961.js.map