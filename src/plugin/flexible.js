//author:caibaojian
//website:http://caibaojian.com
//weibo:http:weibo.com/kujian
//兼容UC竖屏转横屏出现的BUG
//自定义设计稿的宽度：designWidth
//最大宽度:maxWidth
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
(function (designWidth, maxWidth) {
    var doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;
    var opt = {
        selectors: '.page',     //模块选择器，使用querySelectorAll的方法
        mode: 'contain',     // auto || contain || cover
        width: '375',      //输入页面的宽度，只支持输入数值，默认宽度为320px
        height: '667'      //输入页面的高度，只支持输入数值，默认高度为504px
    };

    function pageResponse() {
        console.log("pageResponse");
        var // 设备宽高初始比例
            dw = document.documentElement.clientWidth,
            dh = document.documentElement.clientHeight,
            ds = dw / dh,
            // 页面宽高初始比例
            pw = opt.width || 320,
            ph = opt.height || 504,
            ps = pw / ph,
            // 调用的选择器
            pd = document.querySelectorAll(opt.selectors),
            i = pd.length,
            // 核心代码：页面缩放比例
            sm = opt.mode || "auto",
            or = opt.origin || "left top 0",
            sn = (sm === "contain") ? (ds > ps ? dh / ph : dw / pw) : (sm === "cover") ? (ds < ps ? dh / ph : dw / pw) : dw / pw;

        //样式模板 auto || contain || cover
        function template(mode, obj, num) {
            var _o = obj.style;
            _o.width = pw + "px";
            _o.height = ph + "px";
            _o.webkitTransformOrigin = or;
            _o.transformOrigin = or;
            _o.webkitTransform = "scale(" + num + ")";
            _o.transform = "scale(" + num + ")";
            if (mode === "auto") {
                document.body.style.height = ph * num + "px";
            } else if (mode === "contain" || mode === "cover") {
                _o.position = "absolute";
                _o.left = (dw - pw) / 2 + "px";
                _o.top = (dh - ph) / 2 + "px";
                _o.webkitTransformOrigin = "center center 0";
                _o.transformOrigin = "center center 0";
                document.ontouchmove = function (e) {
                    e.preventDefault()
                }
            }
        }

        //运行
        while (--i >= 0) {
            template(sm, pd[i], sn);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;
        maxWidth = maxWidth || 540;
        width > maxWidth && (width = maxWidth);
        var rem = width * 100 / designWidth;
        remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
    }

    if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(remStyle);
    } else {
        var wrap = doc.createElement("div");
        wrap.appendChild(remStyle);
        doc.write(wrap.innerHTML);
        wrap = null;
    }
    //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
    refreshRem();
    pageResponse();
    win.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(() => {
            refreshRem();
            pageResponse();
        }, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(() => {
                refreshRem();
                pageResponse();
            }, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
        pageResponse()
    } else {
        doc.addEventListener("DOMContentLoaded", function () {
            doc.body.style.fontSize = "16px";
            pageResponse()
        }, false);
    }
})(375, 375);
