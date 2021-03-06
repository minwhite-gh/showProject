var musicjson = [{
    id: 169185,
    name: "认真的雪",
    artists: "薛之谦",
    picUrl: "https://p2.music.126.net/yWtj0UXRJBCT9YI7csmAcw==/109951164190741294.jpg",
    playSrc: "https://music.163.com/song/media/outer/url?id=169185.mp3",

}, {
    id: 5253734,
    name: "恋爱达人",
    artists: "罗志祥",
    picUrl: "https://p1.music.126.net/n4YTVSO7QK1VRQMCEeOPqA==/80264348845281.jpg",
    playSrc: "https://music.163.com/song/media/outer/url?id=5253734.mp3",

}, {
    id: 277302,
    name: "爱",
    artists: "莫文蔚",
    picUrl: "https://p1.music.126.net/hcY73QYZt36DeGf91euboQ==/18921495602636668.jpg",
    playSrc: "https://music.163.com/song/media/outer/url?id=277302.mp3",

}];


var bottomboxlist = document.querySelector(".bottombox .list");
var imgbox = document.querySelector(".imgbox");
var img = document.querySelector(".imgbox img")
var mask = document.querySelector(".mask")
var texth3 = document.querySelector(".textbox h3")
var textp = document.querySelector(".textbox p")
var vlistli = document.querySelectorAll(".bottombox .list li")

var stopbtn = document.querySelector(".stop")

// 初始化创建
createfun(musicjson);

function createfun(musicjson) {
    bottomboxlist.innerHTML = ""
    musicjson.forEach(function(element, index) {
            var node = document.createElement("li");
            var icon = document.createElement("i");
            node.innerText = element.name;
            node.dataset.id = element.id;
            node.dataset.liid = index;
            node.appendChild(icon)
            console.log(node)
            bottomboxlist.appendChild(node);

            node.addEventListener("click", function() {
                // 设置音乐
                var songId = this.dataset.id;
                audio.src = "https://music.163.com/song/media/outer/url?id=" + songId + ".mp3"
                    // 设置图片
                var songliid = this.dataset.liid;
                img.setAttribute("src", musicjson[songliid].picUrl)
                mask.style.backgroundImage = "url('" + musicjson[songliid].picUrl + "')"
                    //设置歌曲名字与作者
                texth3.innerText = musicjson[songliid].name
                textp.innerText = musicjson[songliid].artists
                playbox.classList.add("active")
                stopbtn.classList.add("activestop")
                audio.play()
            })

        })
        // 初始化li的activ
    listli = document.querySelectorAll(".bottombox .list li")
    liclick(listli);

}



var icon = document.querySelectorAll(".bottombox .list li i")
var audio = document.querySelector("audio");
var progress = document.querySelector(".progress input");
var nowTime = document.querySelector(".nowTime");
var totalTime = document.querySelector(".totalTime");
var slider = document.querySelector(".slider");

//封装时间转换函数
function time(item) {
    var m = Math.floor(item / 60)
    var s = Math.floor(item % 60)
    if (m >= 10) {
        m = m
    } else {
        m = "0" + m
    }
    if (s >= 10) {
        s = s
    } else {
        s = "0" + s
    }
    return m + ":" + s
}



// li的点击事件active
function liclick(listli) {
    for (var i = 0; i < listli.length; i++) {
        console.log(listli)
        listli[0].classList.add("active")
        listli[i].onclick = function() {
            var activeid = this.dataset.liid
            console.log("id", this.dataset.id)
            for (var i = 0; i < listli.length; i++) {
                listli[i].classList.remove("active")
            }
            listli[activeid].classList.add("active");
        }
    }
}


// 获取音频总时长
audio.addEventListener("durationchange", function() {
    // console.log(audio.duration)
    progress.max = audio.duration;
    // 设置总时长
    vartotalTime = time(audio.duration)
    totalTime.innerHTML = vartotalTime;

})



// 改变原进度条现进度条改变
var inp = document.querySelector("input");
audio.addEventListener("timeupdate", function() {
        progress.value = audio.currentTime;
        slider.style.width = audio.currentTime / audio.duration * 100 + "%";

        // 设置现时长
        nowTime.innerHTML = time(audio.currentTime);

        // 列表循环
        var lbnum = 0;
        listli = document.querySelectorAll(".bottombox .list li")
        if (playlist.className == "playlist playlb") {
            listli.forEach(function(index) {
                if (index.className == "active") {
                    lbnum = index.dataset.liid
                }
            })
            lbnum = lbnum >= musicjson.length - 1 ? 0 : ++lbnum;
            if (audio.ended) {
                cutsong(lbnum)
            }
        }
        // 随机播放
        var indexs = 0;
        if (playlist.className == "playlist playsj") {
            if (audio.ended) {
                indexs = Math.floor(Math.random() * musicjson.length);
                cutsong(indexs)
            }
        }
    })
    // 改变input
progress.addEventListener("input", function() {
    audio.currentTime = progress.value;
    slider.style.width = audio.currentTime / audio.duration * 100 + "%";
    nowTime.innerHTML = time(audio.currentTime);
})

// 改变播放歌曲的进度条
progress.addEventListener("change", function() {
    audio.currentTime = this.value;
    // 设置现时长
    nowTime.innerHTML = time(audio.currentTime);
})



var playbox = document.querySelector(".playbox");
var stopbtn = document.querySelector(".stop");
var prevbtn = document.querySelector(".prev");
var nextbtn = document.querySelector(".next");
var playlist = document.querySelector(".playlist");

// 设置暂停按钮
var bool = true;
stopbtn.onclick = function() {
        slider.style.width = (this.value / this.max) * 100 + "%";
        if (bool) {
            this.classList.add("activestop")
            audio.play();
            playbox.classList.add("active")
            imgbox.classList.add("active")
            bool = false;
        } else {
            this.classList.remove("activestop")
            audio.pause();
            playbox.classList.remove("active")
            imgbox.classList.remove("active")

            bool = true;

        }
    }
    //封装切换歌曲函数
function cutsong(num) {
    listli = document.querySelectorAll(".bottombox .list li")
    audio.src = "https://music.163.com/song/media/outer/url?id=" + musicjson[num].id + ".mp3"
    img.setAttribute("src", musicjson[num].picUrl)
    mask.style.backgroundImage = "url('" + musicjson[num].picUrl + "')"

    for (var i = 0; i < listli.length; i++) {
        listli[i].classList.remove("active")
    }
    listli[num].classList.add("active");

    texth3.innerText = musicjson[num].name
    textp.innerText = musicjson[num].artists
    audio.autoplay = true;
    if (audio.play) {
        stopbtn.classList.add("activestop")
    } else {
        stopbtn.classList.remove("activestop")
    }
    playbox.classList.add("active")
}
// 设置上一曲
var runningnum = 0;
prevbtn.onclick = function() {
        listli = document.querySelectorAll(".bottombox .list li")
        if (playlist.className == "playlist playsj") {
            index = Math.floor(Math.random() * musicjson.length);
            cutsong(index)
        } else if (playlist.className == "playlist playlb") {
            listli.forEach(function(index) {
                if (index.className == "active") {
                    runningnum = index.dataset.liid
                }
            })
            runningnum = runningnum > 0 ? --runningnum : listli.length - 1;
            // 调用切歌函数
            cutsong(runningnum)
        } else if (playlist.className == "playlist playone") {
            console.log(runningnum)
            listli.forEach(function(index) {
                if (index.className == "active") {
                    runningnum = index.dataset.liid
                }
            })
            cutsong(runningnum)
        }
    }
    // 设置下一曲
nextbtn.onclick = function() {
    listli = document.querySelectorAll(".bottombox .list li")
    if (playlist.className == "playlist playsj") {
        index = Math.floor(Math.random() * musicjson.length);
        console.log("aa", index)
        cutsong(index)
    } else if (playlist.className == "playlist playlb") {
        listli.forEach(function(index) {
            if (index.className == "active") {
                runningnum = index.dataset.liid
            }
        })
        runningnum = runningnum >= listli.length - 1 ? 0 : ++runningnum;
        // 调用切歌函数
        cutsong(runningnum)
    } else if (playlist.className == "playlist playone") {
        console.log(runningnum)
        listli.forEach(function(index) {
            if (index.className == "active") {
                runningnum = index.dataset.liid
            }
        })
        cutsong(runningnum)
    }
}


// 点击修改音乐播放形式
var xslist = {
    0: "playlb",
    1: "playsj",
    2: "playone"
}
var playnum = 0;
playlist.onclick = function() {
    playnum = playnum >= 2 ? 0 : ++playnum;
    this.setAttribute("class", "playlist " + xslist[playnum] + "")
    console.log(playnum)
        // 单曲循环
    if (playnum == 2) {
        audio.loop = true;
    } else {
        audio.loop = false;
    }

}

//点击静音,设置音乐声音大小
var sound = document.querySelector(".sound");
var voicebtnsliderbox = document.querySelector(".voicebtnsliderbox");
var voicebtnslider = document.querySelector(".voicebtnslider");
var voicebtnslideri = document.querySelector(".voicebtnslider i");
var voicebtn = document.querySelector(".voicebtn");
var voicebtninput = document.querySelector(".voicebtnbox input");
var soundnum = true;
sound.onclick = function() {
        if (soundnum) {
            this.classList.add("active")
            audio.muted = true;
            soundnum = false;
        } else {
            this.classList.remove("active")
            audio.muted = false;
            soundnum = true;
        }
    }
    // 声音样式
var sliderboxwidth = voicebtnsliderbox.offsetWidth;
voicebtn.addEventListener("input", function() {
    audio.volume = this.value / 100;
    voicebtnslider.style.width = audio.volume * sliderboxwidth + "px"

    if (voicebtnslider.offsetWidth == 0) {
        voicebtnslideri.style.width = 0 + "px";
    } else {
        voicebtnslideri.style.width = 6 + "px";
    }
})
voicebtninput.onmouseenter = function() {
    voicebtnslideri.style.backgroundColor = "#fff"
}
voicebtninput.onmouseleave = function() {
    voicebtnslideri.style.backgroundColor = "#0cb6d4"
}


// 搜索
var btn = document.querySelector(".search button")
var searchlist = document.querySelector(".search .list");
var inp = document.querySelector(".search input");
console.log(btn, searchlist)
btn.onclick = function(e) {
    searchlist.innerHTML = "";
    $.ajax({
        url: "https://music.kele8.cn/search",
        data: {
            keywords: inp.value,
        },
        method: "GET",

        success: function(data) {

            var arr = [];
            arr.push(data.result.songs.splice(10, 10));
            arr[0].forEach(function(element, index) {

                var node2 = document.createElement("li");
                node2.dataset.songid = element.id
                node2.dataset.ids = index;

                $.ajax({
                    url: "https://v1.alapi.cn/api/music/detail",
                    data: {
                        id: node2.dataset.songid,
                    },
                    method: "GET",
                    success: function(data) {
                        node2.innerHTML = "<div class='bkimg'><div class='imgbox'><img src=" +
                            data.data.songs[0].al.picUrl + "></div><p class='name'>" + element.name + "</p><p class='singer'>" + element.artists[0].name + "</p></div>"
                    }
                });

                searchlist.appendChild(node2);

                var create = {
                    id: "",
                    name: "",
                    artists: "",
                    picUrl: "",
                    playSrc: "",
                };

                node2.addEventListener("click", function() {
                    // var lilili = document.querySelectorAll(".bottombox .list li")
                    // console.log("lilili",lilili)
                    // liclick();
                    $.ajax({
                        url: "https://v1.alapi.cn/api/music/detail",
                        data: {
                            id: this.dataset.songid,
                        },
                        method: "GET",
                        success: function(data) {
                            console.log(data)
                            create.picUrl = data.data.songs[0].al.picUrl
                        }
                    });

                    // console.log("id", arr[0][this.dataset.ids].id)
                    create.id = arr[0][this.dataset.ids].id,
                        create.name = arr[0][this.dataset.ids].name,
                        create.artists = arr[0][this.dataset.ids].artists[0].name,
                        create.playSrc = "https://music.163.com/song/media/outer/url?id=" + arr[0][this.dataset.ids].id + ".mp3"

                    musicjson.push(create)
                    createfun(musicjson)
                })
            })

        },
        error: function(e) {
            console.error(e)
        },
        complete: function() {}

    });
}