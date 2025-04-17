//@charset "gbk";
function init(){
    var bannerTimer;
    var triangle = triangleTab({
        container:$("#tab_switch"),
        method:"click",
        items:$("#tab_switch").find("li"),
        style:"selected",
        callback:function(item){
            var idx = item.index();
            item.addClass(this.style).siblings().removeClass(this.style);
            var areas = $(".loc-search").find(".input-area");
            areas.eq(idx).css("display","block").siblings().css("display","none");
        }
    });

    var c = [],
        d;
    $(".search-tip-box li").each(function (a, b) {
        0 < a && c.push($(b).find("a").text())
    });
    if (d = c.length) {
        var e =
            document.getElementById("xuanguInput");
        e.defaultValue = e.value = c[(new Date).getTime() % d]
    }


    /****************************************************/
    //设置初始值
    var xxTabValContainer = $('.search-tip-box-xx li');
    var xxTabVal = xxTabValContainer.eq(0).find("a").text();
    if (xxTabVal) {
        $("#bondsInput").val(xxTabVal);
    }
    $("#bondsInput").focus(function () {
        $(this).val("");
        $(".search-tip-box").hide();
        $(".search-tip-box-xx").show()
    }).focusout(function(){
        if ($(this).val() == '') {
            if (xxTabVal) {
                $("#bondsInput").val(xxTabVal);
            }
        }
    }).click(function () {
        $(".search-tip-box").hide();
        $(".search-tip-box-xx").show()
    }).keyup(function (a) {
        var b =
                a.keyCode,
            c = $(".search-tip-box-xx li"),
            d = $(".search-tip-box-xx .selected").index(),
            e = c.size();
        if (40 < b || 8 == b || 32 == b)
            c.removeClass("selected").eq(0).addClass("selected");
        38 == b && (d--, 0 > d && (d = 0), c.removeClass("selected").eq(d).addClass("selected"), a.preventDefault());
        40 == b && (d++, d >= e && (d = e - 1), c.removeClass("selected").eq(d).addClass("selected"), a.preventDefault())
    }).keypress(function (a) {
        var b = a.keyCode,
            c = $(".search-tip-box-xx .selected").index();
        13 == b && (a.preventDefault(),
            0 >= c ? (a = $(this).val()) ? window.open("http://www.iwencai.com/search?tid=info&ts=1&qs=sl_box_main_ths&w=" + encodeURIComponent(a)) : window.open("http://www.iwencai.com/?tid=info&ts=1&qs=1") : (a = $(".search-tip-box li").eq(c).find("a").text(), window.open("http://www.iwencai.com/search?tid=info&ts=1&qs=box_main_ths&w=" + encodeURIComponent(a))))
    });
    $(".search-tip-box-xx").mouseenter(function () {
        $(this).show();
    }).mouseleave(function () {
        $(this).hide()
    });
    $(".search-tip-box-xx li").mouseover(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected")
    });
    $(".search-tip-box-xx li a").click(function (a) {
        a.preventDefault();
        var a = $(this).attr("title"),
            b = $("#bondsInput").val();
        a ? window.open("http://www.iwencai.com/search?tid=info&ts=1&qs=box_main_ths&w=" + encodeURIComponent($(this).text())) : b ? window.open("http://www.iwencai.com/search?tid=info&ts=1&qs=box_main_ths&w=" + encodeURIComponent(b)) : window.open("http://www.iwencai.com/?tid=info&ts=1&qs=box_main_ths")
    });

    /****************************************************/


    $("#xuanguInput").focus(function () {
        $(this).val("");
        var newValue = $(this).val();
        newValue = newValue.replace(/</g, '&lt').replace(/>/g, '&gt');
        $(".search-tip-box").show();
        $(".search-tip-box-xx").hide();
    }).click(function () {
        $(".search-tip-box").show();
        $(".search-tip-box-xx").hide();
    }).keyup(function (a) {
        var b = a.keyCode,
            c = $(".search-tip-box li"),
            d = $(".search-tip-box .selected").index(),
            e = c.size();
        if (40 < b || 8 == b || 32 == b)
            c.eq(0).find("a").html('搜“' + newValue + '”相关选股'), c.removeClass("selected").eq(0).addClass("selected");
        38 == b && (d--, 0 > d && (d = 0), c.removeClass("selected").eq(d).addClass("selected"), a.preventDefault());
        40 == b && (d++, d >= e && (d = e - 1), c.removeClass("selected").eq(d).addClass("selected"), a.preventDefault())
    }).keypress(function (a) {
        var b = a.keyCode,
            c = $(".search-tip-box .selected").index();
        13 == b && (a.preventDefault(),
            0 >= c ? (a = newValue) && "搜“”相关选股" != a ? window.open("http://www.iwencai.com/stockpick/search?tid=stockpick&qs=sl_box_main_ths&w=" + encodeURIComponent(a)) : window.open("http://www.iwencai.com/stockpick?tid=stockpick&ts=1&qs=1") : (a = $(".search-tip-box li").eq(c).find("a").text(), window.open("http://www.iwencai.com/stockpick/search?tid=stockpick&qs=box_main_ths&w=" + encodeURIComponent(a))), TA.log({
            id : "web_xuangu",
            nj : 1,
            _sid : "web_xuangu"
        }))
    });
    $(".search-tip-box").mouseenter(function () {
        $(this).show();
    }).mouseleave(function () {
        $(this).hide()
    });
    $(".search-tip-box li").mouseover(function () {
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected")
    });
    $(".search-tip-box li a").click(function (a) {
        a.preventDefault();
        var a = $(this).attr("title"),
            b = $("#xuanguInput").val();
        a ? window.open("http://www.iwencai.com/stockpick/search?tid=stockpick&qs=sl_box_main_ths&w=" + encodeURIComponent($(this).text())) : b ? window.open("http://www.iwencai.com/stockpick/search?tid=stockpick&qs=sl_box_main_ths&w=" + encodeURIComponent(b)) : window.open("http://www.iwencai.com/stockpick?tid=stockpick&ts=1&qs=1")
    });


    var items = $(".stock-analys ul.col");
    $.each(items,function(i,v){
        var _this = $(v);
        var contents =  _this.siblings(".ans");
        var lis = _this.find("li");
        $.each(lis,function(index,value){
            var _fths = $(value);
            _fths.on("mouseenter",function(){
                if(!_fths.hasClass("active")){
                    _fths.addClass("active").siblings().removeClass("active");
                    contents.addClass("hide");
                    contents.eq(index).removeClass("hide");
                }
            });
        });
    });


    $("#search_input_stock").focus(function() {
        if (this.value == this.defaultValue) this.value = ""
    }).blur(function() {
        if (!this.value) this.value = this.defaultValue
    });
    $.fn.autocomplete && $("#search_input_stock").autocomplete({
        stock: !0,
        hk: !0,
        fund: !1,
        extra: !1,
        func: [new searchStock($("#stock-smartbox-submit"),
            $("#search_input_stock")), new searchStockFlow($("#stockflow-smartbox-submit"), $("#search_input_stock")), new searchStockForcast($("#forcast-smartbox-submit"), $("#search_input_stock"))],
        width: 157
    });

    $("#doctorInput").autocomplete({
        extra: !1,
        fund: !1,
        urlPattern: {
            stock: "http://doctor.10jqka.com.cn/{0}/"
        },
        statid: "web_zhengu",
        func: [new navInputClick($("#doctorBtn"), "http://doctor.10jqka.com.cn/", "web_zhengu")]
    });
    function navInputClick(a, b, c) {
        this.bindFunc = function(d, e) {
            a.bind("click", function() {
                var a = "",
                    h = d.find("dd.selected").eq(0).attr("data-code"),
                    k = d.find("dd.selected").eq(0).parent().attr("data-type");
                "undefined" != typeof h && e.value != e.defaultValue ? ("stock" == k && (a = "http://doctor.10jqka.com.cn/" + h + "/"), "fund" == k && (a = "http://fund.10jqka.com.cn/" + h + "/")) : a = b;
                a && (window.open(a), TA.log({
                    id: c,
                    nj: 1,
                    _sid: c
                }))
            })
        }
    }
    $("#search_input").focus(function() {
        if (this.value ==
            this.defaultValue) this.value = ""
    }).blur(function() {
        if (!this.value) this.value = this.defaultValue
    });
    $.fn.autocomplete && $("#search_input").autocomplete({
        stock: !0,
        hk: !0,
        fund: !0,
        extra: !0,
        func: [new searchAll($("#gp-search"))]
    });

    $("#search_input_fund").focus(function() {
        if (this.value == this.defaultValue) this.value = ""
    }).blur(function() {
        if (!this.value) this.value = this.defaultValue
    });
    $.fn.autocomplete && $("#search_input_fund").autocomplete({
        stock: !1,
        hk: !1,
        fund: !0,
        extra: !1,
        func: [new searchFund($("#fund-smartbox-submit"), $("#search_input_fund"))],
        width: 180
    });
    $("#fund_data_input").focus(function() {
        if (this.value == this.defaultValue) this.value =
            ""
    }).blur(function() {
        if (!this.value) this.value = this.defaultValue
    });
    $.fn.autocomplete && $("#fund_data_input").autocomplete({
        stock: !1,
        func: [new searchFund($("#search_fund_gz"), $("#fund_data_input")), new searchFund($("#search_fund_jz"), $("#fund_data_input"))],
        width: 212,
        extra: !1
    });

    function searchStock(a, b) {
        this.bindFunc = function() {
            a.unbind("click").bind("click", function() {
                var a = "";
                (a = (a = b.val()) ? "http://stockpage.10jqka.com.cn/" + a + "/" : "http://stockpage.10jqka.com.cn/") && window.open(a)
            })
        }
    }
    function searchStockFlow(a, b) {
        this.bindFunc = function() {
            a.unbind("click").bind("click", function() {
                var a = "",
                    a = (a = b.val()) ? "http://stockpage.10jqka.com.cn/" + a + "/Funds/" : "http://data.10jqka.com.cn/funds/ggzjl/";
                TA.log({
                    id: "zx_syzjcx",
                    nj: 1,
                    _sid: "zx_syzjcx"
                });
                a && window.open(a)
            })
        }
    }

    function searchStockForcast(a, b) {
        this.bindFunc = function() {
            a.unbind("click").bind("click", function() {
                var a = "";
                (a = (a = b.val()) ? "http://activity.10jqka.com.cn/smallpay/forecast/index/stockcode/" + a + "/#test-begin" : "http://activity.10jqka.com.cn/smallpay/forecast/index/stockcode/#test-begin") && window.open(a)
            })
        }
    }

    function searchAll(a) {
        this.bindFunc = function(b, c) {
            a.unbind("click").bind("click", function() {
                var a = "",
                    e = b.find("dd.selected").eq(0).attr("data-code"),
                    f = b.find("dd.selected").eq(0).parent().attr("data-type");
                "undefined" != typeof e ? ("stock" == f && (a = "http://stockpage.10jqka.com.cn/" + e + "/"), "fund" == f && (a = "http://fund.10jqka.com.cn/" + e + "/")) : a = c.value != c.defaultValue ? "http://www.iwencai.com/search?tid=info&qs=box_ths&w=" + encodeURIComponent(c.value) : "http://www.iwencai.com/?tid=info&qs=box_ths";
                if (c.value != c.defaultValue) {
                    $('.iwencai-query li').each(function(){
                        if ($(this).find('a').text() == c.value) {
                            a = $(this).find('a').attr('href');
                        }
                    });
                }
                a && window.open(a)
            })
        }
    }

    function searchFund(a, b) {
        this.bindFunc = function() {
            a.unbind("click").bind("click", function() {
                var c = "",
                    c = (c = b.val()) ? "http://fund.10jqka.com.cn/" + c + "/" : "http://fund.10jqka.com.cn/";
                ("search_fund_gz" == a.attr("id") || "search_fund_jz" == a.attr("id")) && TA.log({
                    id: "web_fundcx",
                    nj: 1,
                    _sid: "web_fundcx"
                });
                c && window.open(c)
            })
        }
    }

    loginPanel();
    $(".bottom .back").click(function(){
        $("html,body").animate({scrollTop:'0'},800);
    });
    var _height = window.document.body.scrollHeight-700;
    $("#toguide").on("mouseenter",function(){
        var _ths = $(this);
        _ths.addClass("showTxt");
    }).on("mouseleave",function(){
        var _ths = $(this);
        _ths.removeClass("showTxt");
    });
    $("#toguide").click(function(){
        $("html,body").animate({scrollTop:_height},800);
    });

    getSize();
    $(window).resize(function(){
        getSize();
    });

    var _list = $(".gzqh .options a");
    _list.each(function(i,v){
        var _ths = $(v);
        _ths.on("mouseenter",function(){
            if(!_ths.hasClass("active")){
                _list.removeClass("active");
                _ths.addClass("active");
            }
        });
    });

    var titleTimer;
    triangleTab({
        container:$(".guideban"),
        items:$(".guideban").find(".chanel li").not(".last"),
        method:"mouseenter",
        callback:function(item){
            var idx = item.index();
            if(idx >0){
                idx-=1;
                clearTimeout(bannerTimer);
                titleTimer = setTimeout(function(){
                    $(".chanel-detail").slideDown();
                },150);
                var uls = $(".chanel-detail").find("ul");
                uls.eq(idx).addClass("selected").css({

                }).siblings().removeClass("selected");
            }else{
                foralState();
            }

        }
    });
    $(".dimonsion .close").click(function(){
        $(".dimonsion").addClass("hide");
    });

    $(".chanel-detail ul").each(function(index,value){
        var _this = $(value);
        _this.on("mouseenter",function(){
            clearTimeout(bannerTimer);
            _this.addClass("selected").siblings().removeClass("selected");
            var title = $("ul.chanel li").eq(index+1);
            title.addClass("selected").siblings().removeClass("selected");
            var triangle = $(".guideban .triangle");
            var pos = title.position().left+title.width()/2-parseInt(triangle.attr("data-width"));
            triangle.css("left",pos);
        });
    });

    scrollMarq("scrollWrap");


    $(".chanel li").on("mouseleave",function(){
        clearTimeout(titleTimer);
    });

    $(".guideban").on("mouseleave",function(){
        bannerTimer = setTimeout(function(){
            foralState();
        },600);
    });

    var links = $("#J_sidemap").find(".sitemap_trigger");
    var uls = $("#J_sidemap").find("ul");
    hoverLink(links,uls);
//scrollTopMarqmj("dpUls");

}

function scrollTopMarqmj(id) {
    var speed = 1500;
    var tab = $("." + id);
    var _per = $(".dpUls li");
    var _perheight = _per.height() + 0;
    var _height = _perheight * _per.length;
    tab.css("height", _height);
    $.each($(".dpUls"), function (index, value) {
        var top = -1;
        var _cur = $(value);
        function Marquee() {
            if (top <= -_perheight) {
                var _first = _cur.children().first();
                _cur.css("top", -1);
                _cur.append(_first);
                top = -1;
            } else {
                top -= 77;
                _cur.animate({top: top}, 400);
            }
        }
        var MyMar = setInterval(Marquee, speed);
        tab.onmouseover = function () {
            clearInterval(MyMar)
        };
        tab.onmouseout = function () {
            MyMar = setInterval(Marquee, speed)
        };
    });
}

function getSize(){
    var ie6=!-[1,]&&!window.XMLHttpRequest;
    if(!ie6){
        var l = $(".guideban").offset().left;
        var _downad = $(".dimonsion");
        var posr = l + 1200+20;
        var _line = $(".linead");
        var _screenWidth = $(window).width();
        if(_screenWidth<1248){
            _line.addClass("hide");
            _line.addClass("hide");
        }else{
            $(".rightCol").removeClass("hide").css("left",posr);
            if(_screenWidth >=1400){
                _downad.removeClass("hide");
            }else{
                _downad.addClass("hide");
            }
        }
    }
}

function loginPanel(){
    $(".login-form").find("input").on("click",function(){
        $(this).css("border-color","#579feb");
    })
    $(".login-form").find("input").on("blur",function(){
        $(this).css("border-color","#b7b7b7");
    });

    $("#header_login").hover(function(){
        $(".login-top").toggle();
    });
    //点击X关掉登录面板
    $(".login-top > .close").click(function(){
        $("#header_login").unbind("hover");
        $(".login-top").addClass("hide").css("display","none");
        setTimeout(function(){
            $("#header_login").hover(function(){
                $(".login-top").toggle();
            });
        },100);
    });
}


function scrollMarq(id){
    var speed=40; //数字越大速度越慢
    var tab=document.getElementById(id);
    var tab1=$(tab).find(".scroll1")[0];
    var tab2=$(tab).find(".scroll2")[0];
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0)
            tab.scrollLeft-=tab1.offsetWidth
        else{
            tab.scrollLeft++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
}

function foralState(){
    $(".chanel-detail").slideUp(function(){
        //$(".banner-content").removeClass("hide");
        $(".guideban .triangle").css("left","30px");
    });
}

//头部鼠标移到链接显示下拉内容
function hoverLink(links,uls){
    links.each(function(){
        var _this = $(this);
        var idx = _this.index(),
            wdt = _this.outerWidth()-2,
            left = _this.position().left;
        _this.on("mouseenter",function(){
            uls.eq(idx).css({
                left:left,
                width:wdt
            }).show();
            _this.addClass("selected").siblings().removeClass("selected");
        });
        _this.on("mouseleave",function(){
            _this.removeClass("selected");
            uls.eq(idx).on("mouseenter",function(){
                _this.addClass("selected");
                uls.eq(idx).show();
            }).on("mouseleave",function(){
                _this.removeClass("selected");
                uls.eq(idx).hide();
            });
            uls.eq(idx).hide();
        });
    });
}

//爱问财搜索部分点击搜索TAB进行切换
function triangleTab(item){
    var cls = item.style,
        box = item.container;
    var lis = item.items,
        triangle = box.find(".triangle");
    $.each(lis,function(index,value){
        var _this = $(value);
        _this.on(item.method,function(){
            var pos = _this.position().left+_this.width()/2-parseInt(triangle.attr("data-width"));
            triangle.css("left",pos);
            item.callback(_this);
        });
    });
}
function closeBrand(){
    $(".closebrand").on("click",function(){
        $(".brandInfo").remove();
    });
}
$(function(){
    closeBrand();
});