﻿var CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
    $BODY = $("body"),
    $MENU_TOGGLE = $("#menu_toggle"),
    $SIDEBAR_MENU = $("#sidebar-menu"),
    $LEFT_COL = $(".left_col"),
    $RIGHT_COL = $(".right_col"),
    $NAV_MENU = $(".nav_menu");

$(document).ready(function () {
    var a = function () {
        $RIGHT_COL.css("min-height", $(window).height());
        var a = $BODY.outerHeight(),
            b = $BODY.hasClass("footer_fixed"),
            c = $LEFT_COL.eq(1).height(),
            d = a < c ? c : a;
        d -= $NAV_MENU.height() + b, $RIGHT_COL.css("min-height", d)
    };
    $SIDEBAR_MENU.find("a").on("click", function (b) {
        var c = $(this).parent();
        c.is(".active") ? (c.removeClass("active active-sm"), $("ul:first", c).slideUp(function () { a() })) : (c.parent().is(".child_menu") ? $BODY.is(".nav-sm") && ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()) : ($SIDEBAR_MENU.find("li").removeClass("active active-sm"), $SIDEBAR_MENU.find("li ul").slideUp()), c.addClass("active"), $("ul:first", c).slideDown(function () { a() }))
    }), $MENU_TOGGLE.on("click", function () { $BODY.hasClass("nav-md") ? ($SIDEBAR_MENU.find("li.active ul").hide(), $SIDEBAR_MENU.find("li.active").addClass("active-sm").removeClass("active")) : ($SIDEBAR_MENU.find("li.active-sm ul").show(), $SIDEBAR_MENU.find("li.active-sm").addClass("active").removeClass("active-sm")), $BODY.toggleClass("nav-md nav-sm"), a() }), $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent("li").addClass("current-page"), $SIDEBAR_MENU.find("a").filter(function () { return this.href == CURRENT_URL }).parent("li").addClass("current-page").parents("ul").slideDown(function () { a() }).parent().addClass("active"), $(window).smartresize(function () { a() }), a(), $.fn.mCustomScrollbar && $(".menu_fixed").mCustomScrollbar({ autoHideScrollbar: !0, theme: "minimal", mouseWheel: { preventDefault: !0 } })
});

$(document).ready(function () {
    $(".collapse-link").on("click", function () {
        var a = $(this).closest(".backstage-panel"),
            b = $(this).find("i"),
            c = a.find(".backstage-content");
        a.attr("style") ? c.slideToggle(200, function () { a.removeAttr("style") }) : (c.slideToggle(200), a.css("height", "auto")), b.toggleClass("fa-chevron-up fa-chevron-down")
    }), $(".close-link").click(function () {
        var a = $(this).closest(".backstage-panel");
        a.remove()
    })
})

$(document).ready(function () {
    CKEDITOR.replace('CkEditor');
})

function toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 5000);
}