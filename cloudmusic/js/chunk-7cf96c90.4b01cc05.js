(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cf96c90"],{2942:function(t,e,i){},"466d":function(t,e,i){"use strict";var s=i("d784"),a=i("825a"),n=i("50c4"),o=i("1d80"),r=i("8aa5"),c=i("14c3");s("match",1,(function(t,e,i){return[function(e){var i=o(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i):new RegExp(e)[t](String(i))},function(t){var s=i(e,t,this);if(s.done)return s.value;var o=a(t),l=String(this);if(!o.global)return c(o,l);var d=o.unicode;o.lastIndex=0;var u,h=[],f=0;while(null!==(u=c(o,l))){var g=String(u[0]);h[f]=g,""===g&&(o.lastIndex=r(l,n(o.lastIndex),d)),f++}return 0===f?null:h}]}))},"93cf":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"find"},[s("div",{staticClass:"findTop"},[s("van-search",{attrs:{"show-action":"",shape:"round",placeholder:"请输入搜索关键词","input-align":"center","left-icon":""},scopedSlots:t._u([{key:"action",fn:function(){return[t.personalimg?s("div",{staticClass:"personal"},[s("img",{attrs:{src:t.personalimg,alt:""}})]):s("div",{staticClass:"nologin",on:{click:t.goLogin}},[s("img",{attrs:{src:i("823b"),alt:""}})])]},proxy:!0},{key:"left",fn:function(){return[s("div",{staticClass:"geren"})]},proxy:!0}]),model:{value:t.searchvalue,callback:function(e){t.searchvalue=e},expression:"searchvalue"}})],1),s("div",{staticClass:"findBody"},[s("div",{staticClass:"oneGet"},[s("div",{staticClass:"oneGetTitle"},[t._v("新歌推荐")]),s("div",{staticClass:"oneGetListBox"},[s("div",{staticClass:"oneGetList",style:{width:t.oneGetListWidth+"px"}},t._l(t.oneGetListData,(function(e,a){return s("div",{key:a,staticClass:"oneGetListItem",style:{width:t.itemWidth+"px"},on:{touchstart:function(e){return t.touchShotwordBody(e,a)},touchmove:function(e){return t.touchMhotwordBody(e,a)},touchend:function(e){return t.touchEhotwordBody(e,a)}}},t._l(t.oneGetListData[a],(function(e,a){return s("div",{key:a,staticClass:"oneGetListItem_item flexbetween"},[s("div",{staticClass:"oneGetListItem_item_left"},[s("div",{staticClass:"imgBox"},[s("img",{attrs:{src:e.picUrl,alt:""}})]),s("div",{staticClass:"title"},[s("div",{staticClass:"songName one-ellipsis"},[t._v(t._s(e.name))]),s("div",{staticClass:"singerName one-ellipsis"},[t._v(t._s(e.songAr))])])]),s("div",{staticClass:"oneGetListItem_item_right",on:{click:function(i){return t.clicksetUrl(e)}}},[s("img",{attrs:{src:i("cc2e"),alt:""}})])])})),0)})),0)])])]),s("div",{staticClass:"findFoot"})])},a=[],n=(i("c975"),i("d81d"),i("fb6a"),i("b0c0"),i("b64b"),i("ac1f"),i("466d"),i("1276"),i("5530")),o=(i("2942"),i("2f62")),r=i("7c91"),c=Object(o["a"])("MusicAudioStore"),l=c.mapState,d=c.mapActions,u={data:function(){return{active:0,personalimg:"",userName:"",searchvalue:"",itemWidth:0,oneGetListWidth:"",oneGetListData:[],startPagex:"",endPagex:"",touchBool:!1,month:"",today:""}},computed:Object(n["a"])({},l(["detailbool","clickSong"])),created:function(){this.getuserStatus(),this.getNewSong(),this.setItemWidth(),this.getDate(),this.clickSong&&this.setaudioxy(0)},methods:Object(n["a"])(Object(n["a"])({},d(["setsongData","seticonNum","setaudioxy","setClickSong"])),{},{goLogin:function(){this.$router.push({name:"Login"})},getuserStatus:function(){var t=this,e=r["b"].getCookies();"null"!=e.split(";")[0]?this.axios({method:"GET",url:"/login/status",params:{cookie:e}}).then((function(e){t.personalimg=e.data.profile.avatarUrl,t.userName=e.data.profile.nickname})).catch((function(t){})):this.personalimg=null},getNewSong:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"get",url:"/personalized/newsong",params:{}}).then((function(e){var i=e.data.result.slice(0,9);i.map((function(e,i){var s="";e.song.artists.map((function(t){s+=t.name+"/"})),e.songAr=s.slice(0,-1),e.ar=[],e.ar.push({name:e.song.artists[0].name}),e.palyurl="https://music.163.com/song/media/outer/url?id="+e.id+".mp3",e.isActive=!1,t.getSingerAlbum(e,e.song.artists[0].id);var a=e.picUrl;e.al={},e.al.picUrl=a;var n=Math.floor(e.song.duration/1e3/60%60),o=Math.floor(e.song.duration/1e3%60);e.totalTime=n+"."+o;var r=e.song.duration;e.dt=r,t.getSingerData(e,e.id)}));for(var s=[],a=0;a<3;a++)s.push(i.slice(3*a,3*a+3));t.oneGetListData=s})).catch((function(e){t.$toast.clear()}))},getSingerData:function(t,e){var i=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"get",url:"/lyric",params:{id:e}}).then((function(e){if(Object.keys(e.data).indexOf("lrc")<0)if(Object.keys(e.data).indexOf("nolyric")>=0){var s=[{nolyric:!0,title:"纯音乐，请欣赏",isActive:!1}];t.songWordData=s}else{var a=[{nolyric:!0,title:"暂无歌词",isActive:!1}];t.songWordData=a}else if(""==e.data.lrc.lyric){var n=[{nolyric:!0,title:"纯音乐，请欣赏",isActive:!1}];t.songWordData=n}else for(var o="\\[.*\\]",r=e.data.lrc.lyric.split("\n"),c=[],l=0;l<r.length;l++){var d="",u="";r[l].indexOf(0)>-1?(u=r[l].match(o)[0],d=r[l].match(/[0-9]\d:[0-9]\d/)[0]):d="";var h=u.split("").length,f=r[l].slice(h);""!=f&&(c.push({time:d,title:f,isActive:!1}),t.songWordData=c)}i.$toast.clear()})).catch((function(t){i.$toast.clear()}))},getSingerAlbum:function(t,e){var i=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.axios({method:"get",url:"/artist/album",params:{id:e}}).then((function(e){i.$toast.clear(),t.singerImg=e.data.artist.picUrl})).catch((function(t){i.$toast.clear()}))},clicksetUrl:function(t){this.setClickSong(!0),this.setaudioxy(0),this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"spinner"}),this.setsongData(t),this.seticonNum(1)},goHotWord:function(){this.$router.push({name:"Hotword"})},setItemWidth:function(){this.itemWidth=document.body.clientWidth-30},touchShotwordBody:function(t,e){this.startPagex="",this.startPagex=t.changedTouches[0].pageX,this.touchBool=!0;var i=document.querySelector(".oneGetList");i.style.transitionDuration="0s",this.oneGetListLeftNum=i.offsetLeft},touchMhotwordBody:function(t,e){var i=t.changedTouches[0].pageX,s=document.querySelector(".oneGetList"),a="";if(i-this.startPagex>=0){if("0"==this.oneGetListLeftNum)return;a=this.oneGetListLeftNum+i-this.startPagex}else{if(e==this.oneGetListData.length-1)return;a=this.oneGetListLeftNum+i-this.startPagex}s.style.left=a+"px"},touchEhotwordBody:function(t,e){this.endPagex="",this.endPagex=t.changedTouches[0].pageX,this.touchBool=!1;var i=this.endPagex-this.startPagex,s=document.querySelector(".oneGetList");if(s.style.transitionDuration="0.3s",Math.abs(i)<this.itemWidth/2)s.style.left=this.oneGetListLeftNum+"px";else if(i<=-this.itemWidth/2){if(e==this.oneGetListData.length-1)return;s.style.left=this.oneGetListLeftNum-this.itemWidth+"px"}else if(i>=this.itemWidth/2){if("0"==this.oneGetListLeftNum)return;s.style.left=this.oneGetListLeftNum+this.itemWidth+"px"}},getDate:function(){var t=new Date;this.month=t.getMonth()+1,this.month=this.month>9?this.month:"0"+this.month,this.today=t.getDate()}})},h=u,f=i("2877"),g=Object(f["a"])(h,s,a,!1,null,"14ede77f",null);e["default"]=g.exports},c975:function(t,e,i){"use strict";var s=i("23e7"),a=i("4d64").indexOf,n=i("a640"),o=i("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),d=o("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:c||!l||!d},{indexOf:function(t){return c?r.apply(this,arguments)||0:a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-7cf96c90.4b01cc05.js.map