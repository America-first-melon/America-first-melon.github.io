var alading = {
    params:{
        iosUrl:'https://itunes.apple.com/us/app/id1196142859?l=zh',
        androidUrl:'http://m.maopp.cn/down/maopp.apk'
    },
    //获取url参数函数
    getRequest: function () {
        var url = location.search;
        var theRequest = new Object({});
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    //Android为0, IOS为1
    mobileType:function(){
        var ua = navigator.userAgent;
        var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
        var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var type = 0;
        if (isAndroid) {
            type = 0;
        } else if (isiOS) {
            type = 1;
        }
        return type;
    }, 
    //判断是否为移动端  0为pc   1为移动端
    isWap: function () {
        //0:pc 1:移动
        var motionType = 0;
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            motionType = 1;
        }
        return motionType;
    },
    //是否为微信
    isWechat:function() {
        var _ua = navigator.userAgent.toLowerCase();
        if (_ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    //是否为微博
    isWeibo:function() {
        var _ua = navigator.userAgent;
        if (_ua.indexOf('Weibo') > -1) {
            return true;
        } else {
            return false;
        }
    },
    //当前时间
    getNowFormatDate:function() {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();

        return currentdate;
    },
    //最大最小值
    getMaximin:function(arr,maximin){ 
        if(maximin=="max"){ 
            return Math.max.apply(Math,arr); 
        }else if(maximin=="min"){ 
            return Math.min.apply(Math, arr); 
        } 
    }
};

!function (a, b) {
    function c() {
        var b = f.getBoundingClientRect().width,
            c = b / 10;
        f.style.fontSize = c + "px", k.rem = a.rem = c
    }

    var d, e = a.document,
        f = e.documentElement,
        g = e.querySelector('meta[name="viewport"]'),
        h = e.querySelector('meta[name="flexible"]'),
        i = 0,
        j = 0,
        k = b.flexible || (b.flexible = {});
    if (g) {
        var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
        l && (j = parseFloat(l[1]), i = parseInt(1 / j))
    } else if (h) {
        var m = h.getAttribute("content");
        if (m) {
            var l = m.match(/initial\-dpr=([\d\.]+)/),
                n = m.match(/maximum\-dpr=([\d\.]+)/);
            l && (i = parseFloat(l[1]), j = parseFloat((1 / i).toFixed(2))), n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2)))
        }
    }
    if (!i && !j) {
        var o = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
            p = a.devicePixelRatio;
        i = o ? p >= 3 && (!i || i >= 3) ? 3 : p >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
    }
    if (f.setAttribute("data-dpr", i), !g)
        if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g);
        else {
            var q = e.createElement("div");
            q.appendChild(g), e.write(q.innerHTML)
        }
    a.addEventListener("resize", function () {
        clearTimeout(d), d = setTimeout(c, 300)
    }, !1), a.addEventListener("orientationchange", function () {
        clearTimeout(d), d = setTimeout(c, 300)
    }, !1), a.addEventListener("pageshow", function (a) {
        a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
    }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
        e.body.style.fontSize = 12 * i + "px"
    }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
        var b = parseFloat(a) * this.rem;
        return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
    }, k.px2rem = function (a) {
        var b = parseFloat(a) / this.rem;
        return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
    }
}(window, window.lib || (window.lib = {}));
