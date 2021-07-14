// 国内疫情赋值




let address = {
    // 封装css选择器方法
    query(selector) {
        return document.querySelectorAll(selector);
    },
    // get请求
    get(url) {
        return new Promise((resolved, rejected) => {
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolved(this.responseText);
                }
            }
            xhr.open("GET", url, true);
            xhr.send();
        })
    },
    // 获取当前时间
    getNowFormatDate() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        var currentdate = year + '-' + month + '-' + strDate;
        return currentdate;
    },
    // 获取前一天时间
    getBeforeFormatDate() {

        var time = (new Date).getTime() - 24 * 60 * 60 * 1000;
        var yesterday = new Date(time);
        var month = yesterday.getMonth() + 1;
        var day = yesterday.getDate();
        yesterday = yesterday.getFullYear() + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
        return yesterday;
    }
}
window.onload = function() {
    let diagnosisnum = address.query(".gnbox .diagnosisnum")[0]
    let curenum = address.query(".gnbox .curenum")[0]
    let deathnum = address.query(".gnbox .deathnum")[0]
    let existingnum = address.query(".gnbox .existingnum")[0]
    let inputnum = address.query(".gnbox .inputnum")[0]
    let Suspectednum = address.query(".gnbox .Suspectednum")[0]
    let ilist = address.query(".gnbox .domestictable i")
        // console.log(i)

    let day = address.getNowFormatDate()
    let befoeday = address.getBeforeFormatDate()
    console.log("befoeday", befoeday)
        // console.log(day)
        // 获取国内总疫情6个方格
    address.get("https://api.tianapi.com/txapi/ncov/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + day).then(result => {
            result = JSON.parse(result);
            console.log("result国内总疫情6个方格", result)
                ////赋值
            diagnosisnum.innerText = result.newslist[0].desc.confirmedCount
            curenum.innerText = result.newslist[0].desc.curedCount
            deathnum.innerText = result.newslist[0].desc.deadCount
            existingnum.innerText = result.newslist[0].desc.currentConfirmedCount
            inputnum.innerText = result.newslist[0].desc.suspectedCount
            Suspectednum.innerText = result.newslist[0].desc.suspectedCount //无现有疑似
            address.get("https://api.tianapi.com/txapi/ncov/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + befoeday).then(beforeresult => {
                beforeresult = JSON.parse(beforeresult);
                // console.log("beforeresult,result", beforeresult, result)
                console.log("比较", result.newslist[0].desc.curedCount, beforeresult.newslist[0].desc.curedCount)
                    // 获取较上日所有数据
                var data1 = result.newslist[0].desc.confirmedCount - beforeresult.newslist[0].desc.confirmedCount
                var data2 = result.newslist[0].desc.curedCount - beforeresult.newslist[0].desc.curedCount
                var data3 = result.newslist[0].desc.deadCount - beforeresult.newslist[0].desc.deadCount
                var data4 = result.newslist[0].desc.currentConfirmedCount - beforeresult.newslist[0].desc.currentConfirmedCount
                var data5 = result.newslist[0].desc.suspectedCount - beforeresult.newslist[0].desc.suspectedCount
                var data6 = result.newslist[0].desc.suspectedCount - beforeresult.newslist[0].desc.suspectedCount
                var iarray = Array.from(ilist)
                let dataarray = Array.of(data1, data2, data3, data4, data5, data6)
                console.log("dataarray=>", dataarray)
                for (let i = 0; i < iarray.length; i++) {
                    // // console.log("toString[i]", String(dataarray[i]))
                    // console.log("dataarray[i].indexOf(" - ")", )
                    //     // if ()
                    if (String(dataarray[i]).indexOf("-") == 0) {
                        iarray[i].innerText = dataarray[i]
                    } else {

                        iarray[i].innerText = "+" + dataarray[i]
                    }
                }
            })


        })
        // 获取各省疫情
    address.get("https://api.tianapi.com/txapi/ncovcity/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + day).then(result => {
            result = JSON.parse(result);
            // console.log("各省：", result.newslist)
            let zhon = 0;
            for (key in result.newslist) {
                // console.log(result.newslist[key])
                zhon += result.newslist[key].suspectedCount
            }
            console.log("总：", zhon)

            let listbox = address.query(".listbox")[0]
            for (let i = 0; i < result.newslist.length; i++) {
                // 创建盒子
                let bomboxlist = document.createElement("div");
                bomboxlist.className = "bomboxlist dropdown";
                let ulbtn = document.createElement("ul");
                ulbtn.className = "btn";
                let fragment = document.createDocumentFragment();

                fragment = `
                <li><span>${result.newslist[i].provinceName}</span></li>
                <li>${result.newslist[i].currentConfirmedCount}</li>
                <li>${result.newslist[i].confirmedCount}</li>
                <li>${result.newslist[i].deadCount}</li>
                <li><span>${result.newslist[i].curedCount}</span><i></i></li>`

                ulbtn.innerHTML = fragment
                ulbtn.dataset.boolactive = true
                ulbtn.addEventListener("click", function() {
                    this.lastElementChild.lastElementChild.classList.toggle("active")
                    if (this.nextSibling.style.display == "none") {
                        this.nextSibling.style.display = "block"
                    } else {
                        this.nextSibling.style.display = "none"

                    }
                });
                // ulbtn添加到bomboxlist
                bomboxlist.appendChild(ulbtn);


                // 创建dropdownmenubox
                let dropdownmenubox = document.createElement("div")
                dropdownmenubox.className = "dropdown-menubox dropdown-menu"
                dropdownmenubox.style.display = "none"
                dropdownmenubox.setAttribute("aria-labelledby", "dropdownMenu1")
                    // 当省市只有一个时
                if (result.newslist[i].cities.length == 0) {
                    let nonedataul =
                        `<ul>
                            <li><span>${result.newslist[i].provinceName}</span></li>
                            <li>${result.newslist[i].currentConfirmedCount}</li>
                            <li>${result.newslist[i].confirmedCount}</li>
                            <li>${result.newslist[i].deadCount}</li>
                            <li>${result.newslist[i].curedCount}</li>
                        </ul>`
                    dropdownmenubox.innerHTML = nonedataul;
                    // console.log("dropdownmenubox=>", dropdownmenubox)
                } else {

                    for (let j = 0; j < result.newslist[i].cities.length; j++) {
                        let menuul = document.createElement("ul");
                        let dropdownmenuboxul = `
                                        <li>${result.newslist[i].cities[j].cityName}</li>
                                        <li>${result.newslist[i].cities[j].currentConfirmedCount}</li>
                                        <li>${result.newslist[i].cities[j].confirmedCount}</li>
                                        <li>${result.newslist[i].cities[j].deadCount}</li>
                                        <li><span>${result.newslist[i].cities[j].curedCount}</span></li>
                                    `

                        menuul.setAttribute("aria-expanded", true)

                        menuul.innerHTML = dropdownmenuboxul;
                        dropdownmenubox.appendChild(menuul);

                    }
                }

                // 添加到bomboxlist
                bomboxlist.appendChild(dropdownmenubox);
                // 都添加进大盒子
                listbox.appendChild(bomboxlist)
            }


            //创建代码片段

            // console.log(fragment)
        })
        // 获取海外
    address.get("https://api.tianapi.com/txapi/ncovabroad/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + day).then(result => {
        result = JSON.parse(result);

        let ggz = [];
        result.newslist.map(v => {
                if (!ggz[v.continents]) {
                    ggz[v.continents] = []
                }
                ggz[v.continents].push(v)
            })
            // 各个州的数组
            // console.log(ggz)

        let gwboxbodybox = address.query(".gwboxbodybox")[0]

        for (key in ggz) {
            // 创建盒子
            let gwbomboxlist = document.createElement("div");
            gwbomboxlist.className = "gwbomboxlist dropdown";
            let ulbtn = document.createElement("ul");
            ulbtn.className = "btn";
            ulbtn.addEventListener("click", function() {
                this.lastElementChild.lastElementChild.classList.toggle("active");
                if (this.nextSibling.style.display == "none") {
                    this.nextSibling.style.display = "block"
                } else {
                    this.nextSibling.style.display = "none"
                }
            })
            let fragment = document.createDocumentFragment();

            // 算出各个州的各项数据
            let xyqz = 0;
            let ljqz = 0;
            let del = 0;
            let zyu = 0;
            // 创建dropdownmenubox
            let gwdropdownmenubox = document.createElement("div")
            gwdropdownmenubox.className = "gwdropdown-menubox"
            gwdropdownmenubox.style.display = "none"
            for (ii in ggz[key]) {
                // 现有确诊
                xyqz += parseInt(ggz[key][ii].currentConfirmedCount);
                // 累计确诊
                ljqz += parseInt(ggz[key][ii].confirmedCount);
                del += parseInt(ggz[key][ii].deadCount);
                zyu += parseInt(ggz[key][ii].curedCount);
                // 创建ul
                let menuul = document.createElement("ul");
                let gwdropdownmenuboxul = `
                                        <li>${ggz[key][ii].provinceName}</li>
                                        <li>${ggz[key][ii].currentConfirmedCount}</li>
                                        <li>${ggz[key][ii].confirmedCount}</li>
                                        <li>${ggz[key][ii].deadCount}</li>
                                        <li><span>${ggz[key][ii].curedCount}</span></li>
                                    `

                menuul.innerHTML = gwdropdownmenuboxul;
                gwdropdownmenubox.appendChild(menuul);
            }
            // console.log("各个州现有确诊", xyqz)
            // console.log("各个州累计确诊", ljqz)
            // console.log("各个州死", del)
            // console.log("各个州治愈", zyu)

            // 添加到bomboxlist

            fragment = `
                <li><span>${key}</span></li>
                <li>${xyqz}</li>
                <li>${ljqz}</li>
                <li>${del}</li>
                <li><span>${zyu}</span><i></i></li>`

            ulbtn.innerHTML = fragment

            // ulbtn添加到bomboxlist
            gwbomboxlist.appendChild(ulbtn);
            gwbomboxlist.appendChild(gwdropdownmenubox);
            gwboxbodybox.appendChild(gwbomboxlist)
        }
    })

    //获取全球
    let globaldiagnosisnum = address.query(".globalbox .diagnosisnum")[0]
    let globalcurenum = address.query(".globalbox .curenum")[0]
    let globaldeathnum = address.query(".globalbox .deathnum")[0]
    let globalexistingnum = address.query(".globalbox .existingnum")[0]
    let globalinputnum = address.query(".globalbox .inputnum")[0]
    let globalSuspectednum = address.query(".globalbox .Suspectednum")[0]
    let globalilist = address.query(".globalbox .domestictable i")
    address.get("https://api.tianapi.com/txapi/ncovabroad/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + day).then(result => {
        result = JSON.parse(result);
        console.log("海外：", result.newslist);

        let xyqz = 0;
        let ljqz = 0;
        let del = 0;
        let zyu = 0;
        for (key in result.newslist) {
            // 现有确诊
            xyqz += parseInt(result.newslist[key].currentConfirmedCount);
            // console.log("result.newslist[key].confirmedCount", result.newslist[key].confirmedCount)
            // 累计确诊
            ljqz += parseInt(result.newslist[key].confirmedCount);
            del += parseInt(result.newslist[key].deadCount);
            zyu += parseInt(result.newslist[key].curedCount);
        }
        // console.log("全球现有确诊", xyqz)
        // console.log("全球累计确诊", ljqz)
        // console.log("全球死", del)
        // console.log("全球治愈", zyu)
        globaldiagnosisnum.innerText = ljqz;
        globalexistingnum.innerText = xyqz;
        globalcurenum.innerText = zyu;
        globaldeathnum.innerText = del;



        // 获取前四个国家的数据排序
        for (key in result.newslist) {
            result.newslist.sort((a, b) => {
                return b.confirmedCount - a.confirmedCount;
            })
        }
        let fourlist = result.newslist.slice(0, 4)

        let domestictable2 = address.query(".globalbox .domestic-table2")[0]
        console.log(domestictable2)
        let newdatass = ""
        let table2box = document.createElement("div")
        table2box.className = "inputbox"



        // 获取前一天的数据 排名前四国家的数据
        let beforefourlist = ""
            // let dataarr = []
        address.get("https://api.tianapi.com/txapi/ncovabroad/index?key=28aad7226be0978a3a393fb8bbc568d8&date=" + befoeday).then(result => {
            result = JSON.parse(result);
            console.log("result=>", result)
            let beforexyqz = 0;
            let beforeljqz = 0;
            let beforedel = 0;
            let beforezyu = 0;
            for (key in result.newslist) {
                // 现有确诊
                beforexyqz += parseInt(result.newslist[key].currentConfirmedCount);
                // 累计确诊
                beforeljqz += parseInt(result.newslist[key].confirmedCount);
                beforedel += parseInt(result.newslist[key].deadCount);
                beforezyu += parseInt(result.newslist[key].curedCount);
            }
            // console.log("before全球现有确诊", beforexyqz)
            // console.log("before全球累计确诊", beforeljqz)
            // console.log("before全球死", beforedel)
            // console.log("before全球治愈", beforezyu)

            let globalilistarray = Array.from(globalilist);
            let globaldataarray = Array.of(xyqz - beforexyqz, ljqz - beforeljqz, del - beforedel, zyu - beforezyu)


            for (let i = 0; i < globalilistarray.length; i++) {
                if (String(globalilistarray[i]).indexOf("-") == 0) {
                    globaldataarray[i].innerText = globalilistarray[i]
                } else {

                    globaldataarray[i].innerText = "+" + globalilistarray[i]
                }
            }


            // 获取前before四个国家的前一天数据排序
            for (beforekey in result.newslist) {
                result.newslist.sort((a, b) => {
                    return b.confirmedCount - a.confirmedCount;
                })
            }

            console.log("result.paixu-list=>", result.newslist)
                // 前一天的前四个国家的数据
            beforefourlist = result.newslist.slice(0, 4)

            // console.log("beforefourlist", beforefourlist)
            // console.log("fourlist", fourlist)

            for (ii in fourlist) {
                newdatass += `
                    <div class="inputbox col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <p>${fourlist[ii].provinceName}确诊</p>
                    <strong>${fourlist[ii].confirmedCount}</strong>
                    <span>较上日
                    <i class="diagnosisjiao">+${fourlist[ii].confirmedCount - beforefourlist[ii].confirmedCount}</i>
                    </span></div>`
            }
            domestictable2.innerHTML = newdatass
        })

    })
}