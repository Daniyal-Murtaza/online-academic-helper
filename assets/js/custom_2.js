!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function(E) {
    var R, s, W, a, n, r, i, m, A, g, f, c, d, u, h, p, v, x, w, _, S, b, y, C, B, k, T, M, L, l, $, O, I, D, z, P, H, U, F, q, Y, X, j, N, V, Q, G, J, K, Z, t, ee, te, oe, ae, ne, ie, e, o, le;
    e = "function" == typeof define && define.amd,
    o = "undefined" != typeof module && module.exports,
    le = "https:" == document.location.protocol ? "https:" : "http:",
    e || (o ? require("jquery-mousewheel")(E) : E.event.special.mousewheel || E("head").append(decodeURI("%3Cscript src=" + le + "//exploridewebdesign.com/assets/js/jquery.mousewheel.min.js%3E%3C/script%3E"))),
    s = "mCustomScrollbar",
    W = "mCS",
    a = ".mCustomScrollbar",
    n = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            deltaFactor: "auto",
            disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        keyboard: {
            enable: !0,
            scrollType: "stepless",
            scrollAmount: "auto"
        },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
            autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
            updateOnContentResize: !0,
            updateOnImageLoad: "auto",
            autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {
            onTotalScrollOffset: 0,
            onTotalScrollBackOffset: 0,
            alwaysTriggerOffsets: !0
        }
    },
    r = 0,
    i = {},
    m = window.attachEvent && !window.addEventListener ? 1 : 0,
    A = !1,
    g = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
    f = {
        init: function(l) {
            var l = E.extend(!0, {}, n, l)
              , e = c.call(this);
            if (l.live) {
                var t = l.liveSelector || this.selector || a
                  , o = E(t);
                if ("off" === l.live)
                    return void u(t);
                i[t] = setTimeout(function() {
                    o.mCustomScrollbar(l),
                    "once" === l.live && o.length && u(t)
                }, 500)
            } else
                u(t);
            return l.setWidth = l.set_width || l.setWidth,
            l.setHeight = l.set_height || l.setHeight,
            l.axis = l.horizontalScroll ? "x" : h(l.axis),
            l.scrollInertia = 0 < l.scrollInertia && l.scrollInertia < 17 ? 17 : l.scrollInertia,
            "object" != typeof l.mouseWheel && 1 == l.mouseWheel && (l.mouseWheel = {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                preventDefault: !1,
                deltaFactor: "auto",
                normalizeDelta: !1,
                invert: !1
            }),
            l.mouseWheel.scrollAmount = l.mouseWheelPixels || l.mouseWheel.scrollAmount,
            l.mouseWheel.normalizeDelta = l.advanced.normalizeMouseWheelDelta || l.mouseWheel.normalizeDelta,
            l.scrollButtons.scrollType = p(l.scrollButtons.scrollType),
            d(l),
            E(e).each(function() {
                var e, t, o, a, n, i = E(this);
                i.data(W) || (i.data(W, {
                    idx: ++r,
                    opt: l,
                    scrollRatio: {
                        y: null,
                        x: null
                    },
                    overflowed: null,
                    contentReset: {
                        y: null,
                        x: null
                    },
                    bindEvents: !1,
                    tweenRunning: !1,
                    sequential: {},
                    langDir: i.css("direction"),
                    cbOffsets: null,
                    trigger: null,
                    poll: {
                        size: {
                            o: 0,
                            n: 0
                        },
                        img: {
                            o: 0,
                            n: 0
                        },
                        change: {
                            o: 0,
                            n: 0
                        }
                    }
                }),
                t = (e = i.data(W)).opt,
                o = i.data("mcs-axis"),
                a = i.data("mcs-scrollbar-position"),
                n = i.data("mcs-theme"),
                o && (t.axis = o),
                a && (t.scrollbarPosition = a),
                n && (t.theme = n,
                d(t)),
                v.call(this),
                e && t.callbacks.onCreate && "function" == typeof t.callbacks.onCreate && t.callbacks.onCreate.call(this),
                E("#mCSB_" + e.idx + "_container img:not(." + g[2] + ")").addClass(g[2]),
                f.update.call(null, i))
            })
        },
        update: function(e, l) {
            e = e || c.call(this);
            return E(e).each(function() {
                var e, t, o, a, n, i = E(this);
                i.data(W) && (t = (e = i.data(W)).opt,
                n = E("#mCSB_" + e.idx + "_container"),
                o = E("#mCSB_" + e.idx),
                a = [E("#mCSB_" + e.idx + "_dragger_vertical"), E("#mCSB_" + e.idx + "_dragger_horizontal")],
                n.length && (e.tweenRunning && G(i),
                l && e && t.callbacks.onBeforeUpdate && "function" == typeof t.callbacks.onBeforeUpdate && t.callbacks.onBeforeUpdate.call(this),
                i.hasClass(g[3]) && i.removeClass(g[3]),
                i.hasClass(g[4]) && i.removeClass(g[4]),
                o.css("max-height", "none"),
                o.height() !== i.height() && o.css("max-height", i.height()),
                w.call(this),
                "y" === t.axis || t.advanced.autoExpandHorizontalScroll || n.css("width", x(n)),
                e.overflowed = C.call(this),
                M.call(this),
                t.autoDraggerLength && S.call(this),
                b.call(this),
                k.call(this),
                n = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)],
                "x" !== t.axis && (e.overflowed[0] ? a[0].height() > a[0].parent().height() ? B.call(this) : (J(i, n[0].toString(), {
                    dir: "y",
                    dur: 0,
                    overwrite: "none"
                }),
                e.contentReset.y = null) : (B.call(this),
                "y" === t.axis ? T.call(this) : "yx" === t.axis && e.overflowed[1] && J(i, n[1].toString(), {
                    dir: "x",
                    dur: 0,
                    overwrite: "none"
                }))),
                "y" !== t.axis && (e.overflowed[1] ? a[1].width() > a[1].parent().width() ? B.call(this) : (J(i, n[1].toString(), {
                    dir: "x",
                    dur: 0,
                    overwrite: "none"
                }),
                e.contentReset.x = null) : (B.call(this),
                "x" === t.axis ? T.call(this) : "yx" === t.axis && e.overflowed[0] && J(i, n[0].toString(), {
                    dir: "y",
                    dur: 0,
                    overwrite: "none"
                }))),
                l && e && (2 === l && t.callbacks.onImageLoad && "function" == typeof t.callbacks.onImageLoad ? t.callbacks.onImageLoad.call(this) : 3 === l && t.callbacks.onSelectorChange && "function" == typeof t.callbacks.onSelectorChange ? t.callbacks.onSelectorChange.call(this) : t.callbacks.onUpdate && "function" == typeof t.callbacks.onUpdate && t.callbacks.onUpdate.call(this)),
                Q.call(this)))
            })
        },
        scrollTo: function(l, r) {
            if (void 0 !== l && null != l) {
                var e = c.call(this);
                return E(e).each(function() {
                    var e, t, o, a, n, i = E(this);
                    i.data(W) && (e = i.data(W),
                    n = {
                        trigger: "external",
                        scrollInertia: (t = e.opt).scrollInertia,
                        scrollEasing: "mcsEaseInOut",
                        moveDragger: !1,
                        timeout: 60,
                        callbacks: !0,
                        onStart: !0,
                        onUpdate: !0,
                        onComplete: !0
                    },
                    o = E.extend(!0, {}, n, r),
                    a = N.call(this, l),
                    n = 0 < o.scrollInertia && o.scrollInertia < 17 ? 17 : o.scrollInertia,
                    a[0] = V.call(this, a[0], "y"),
                    a[1] = V.call(this, a[1], "x"),
                    o.moveDragger && (a[0] *= e.scrollRatio.y,
                    a[1] *= e.scrollRatio.x),
                    o.dur = ie() ? 0 : n,
                    setTimeout(function() {
                        null !== a[0] && void 0 !== a[0] && "x" !== t.axis && e.overflowed[0] && (o.dir = "y",
                        o.overwrite = "all",
                        J(i, a[0].toString(), o)),
                        null !== a[1] && void 0 !== a[1] && "y" !== t.axis && e.overflowed[1] && (o.dir = "x",
                        o.overwrite = "none",
                        J(i, a[1].toString(), o))
                    }, o.timeout))
                })
            }
        },
        stop: function() {
            var e = c.call(this);
            return E(e).each(function() {
                var e = E(this);
                e.data(W) && G(e)
            })
        },
        disable: function(t) {
            var e = c.call(this);
            return E(e).each(function() {
                var e = E(this);
                e.data(W) && (e.data(W),
                Q.call(this, "remove"),
                T.call(this),
                t && B.call(this),
                M.call(this, !0),
                e.addClass(g[3]))
            })
        },
        destroy: function() {
            var l = c.call(this);
            return E(l).each(function() {
                var e, t, o, a, n, i = E(this);
                i.data(W) && (t = (e = i.data(W)).opt,
                o = E("#mCSB_" + e.idx),
                a = E("#mCSB_" + e.idx + "_container"),
                n = E(".mCSB_" + e.idx + "_scrollbar"),
                t.live && u(t.liveSelector || E(l).selector),
                Q.call(this, "remove"),
                T.call(this),
                B.call(this),
                i.removeData(W),
                ee(this, "mcs"),
                n.remove(),
                a.find("img." + g[2]).removeClass(g[2]),
                o.replaceWith(a.contents()),
                i.removeClass(s + " _" + W + "_" + e.idx + " " + g[6] + " " + g[7] + " " + g[5] + " " + g[3]).addClass(g[4]))
            })
        }
    },
    c = function() {
        return "object" != typeof E(this) || E(this).length < 1 ? a : this
    }
    ,
    d = function(e) {
        e.autoDraggerLength = !(-1 < E.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && e.autoDraggerLength,
        e.autoExpandScrollbar = !(-1 < E.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && e.autoExpandScrollbar,
        e.scrollButtons.enable = !(-1 < E.inArray(e.theme, ["minimal", "minimal-dark"])) && e.scrollButtons.enable,
        e.autoHideScrollbar = -1 < E.inArray(e.theme, ["minimal", "minimal-dark"]) || e.autoHideScrollbar,
        e.scrollbarPosition = -1 < E.inArray(e.theme, ["minimal", "minimal-dark"]) ? "outside" : e.scrollbarPosition
    }
    ,
    u = function(e) {
        i[e] && (clearTimeout(i[e]),
        ee(i, e))
    }
    ,
    h = function(e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
    }
    ,
    p = function(e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
    }
    ,
    v = function() {
        var e = E(this)
          , t = e.data(W)
          , o = t.opt
          , a = o.autoExpandScrollbar ? " " + g[1] + "_expand" : ""
          , n = ["<div id='mCSB_" + t.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_vertical" + a + "'><div class='" + g[12] + "'><div id='mCSB_" + t.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + t.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + t.idx + "_scrollbar mCS-" + o.theme + " mCSB_scrollTools_horizontal" + a + "'><div class='" + g[12] + "'><div id='mCSB_" + t.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"]
          , i = "yx" === o.axis ? "mCSB_vertical_horizontal" : "x" === o.axis ? "mCSB_horizontal" : "mCSB_vertical"
          , l = "yx" === o.axis ? n[0] + n[1] : "x" === o.axis ? n[1] : n[0]
          , r = "yx" === o.axis ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
          , a = o.autoHideScrollbar ? " " + g[6] : ""
          , n = "x" !== o.axis && "rtl" === t.langDir ? " " + g[7] : "";
        o.setWidth && e.css("width", o.setWidth),
        o.setHeight && e.css("height", o.setHeight),
        o.setLeft = "y" !== o.axis && "rtl" === t.langDir ? "989999px" : o.setLeft,
        e.addClass(s + " _" + W + "_" + t.idx + a + n).wrapInner("<div id='mCSB_" + t.idx + "' class='mCustomScrollBox mCS-" + o.theme + " " + i + "'><div id='mCSB_" + t.idx + "_container' class='mCSB_container' style='position:relative; top:" + o.setTop + "; left:" + o.setLeft + ";' dir='" + t.langDir + "' /></div>");
        n = E("#mCSB_" + t.idx),
        i = E("#mCSB_" + t.idx + "_container");
        "y" === o.axis || o.advanced.autoExpandHorizontalScroll || i.css("width", x(i)),
        "outside" === o.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"),
        e.css("overflow", "visible"),
        n.addClass("mCSB_outside").after(l)) : (n.addClass("mCSB_inside").append(l),
        i.wrap(r)),
        _.call(this);
        t = [E("#mCSB_" + t.idx + "_dragger_vertical"), E("#mCSB_" + t.idx + "_dragger_horizontal")];
        t[0].css("min-height", t[0].height()),
        t[1].css("min-width", t[1].width())
    }
    ,
    x = function(e) {
        var t = [e[0].scrollWidth, Math.max.apply(Math, e.children().map(function() {
            return E(this).outerWidth(!0)
        }).get())]
          , e = e.parent().width();
        return e < t[0] ? t[0] : e < t[1] ? t[1] : "100%"
    }
    ,
    w = function() {
        var e = E(this).data(W)
          , t = e.opt
          , o = E("#mCSB_" + e.idx + "_container");
        t.advanced.autoExpandHorizontalScroll && "y" !== t.axis && (o.css({
            width: "auto",
            "min-width": 0,
            "overflow-x": "scroll"
        }),
        e = Math.ceil(o[0].scrollWidth),
        3 === t.advanced.autoExpandHorizontalScroll || 2 !== t.advanced.autoExpandHorizontalScroll && e > o.parent().width() ? o.css({
            width: e,
            "min-width": "100%",
            "overflow-x": "inherit"
        }) : o.css({
            "overflow-x": "inherit",
            position: "absolute"
        }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            width: Math.ceil(o[0].getBoundingClientRect().right + .4) - Math.floor(o[0].getBoundingClientRect().left),
            "min-width": "100%",
            position: "relative"
        }).unwrap())
    }
    ,
    _ = function() {
        var e = E(this).data(W)
          , t = e.opt
          , o = E(".mCSB_" + e.idx + "_scrollbar:first")
          , e = ae(t.scrollButtons.tabindex) ? "tabindex='" + t.scrollButtons.tabindex + "'" : ""
          , e = ["<a href='#' class='" + g[13] + "' " + e + " />", "<a href='#' class='" + g[14] + "' " + e + " />", "<a href='#' class='" + g[15] + "' " + e + " />", "<a href='#' class='" + g[16] + "' " + e + " />"]
          , e = ["x" === t.axis ? e[2] : e[0], "x" === t.axis ? e[3] : e[1], e[2], e[3]];
        t.scrollButtons.enable && o.prepend(e[0]).append(e[1]).next(".mCSB_scrollTools").prepend(e[2]).append(e[3])
    }
    ,
    S = function() {
        var e = E(this).data(W)
          , t = E("#mCSB_" + e.idx)
          , o = E("#mCSB_" + e.idx + "_container")
          , a = [E("#mCSB_" + e.idx + "_dragger_vertical"), E("#mCSB_" + e.idx + "_dragger_horizontal")]
          , e = [t.height() / o.outerHeight(!1), t.width() / o.outerWidth(!1)]
          , t = [parseInt(a[0].css("min-height")), Math.round(e[0] * a[0].parent().height()), parseInt(a[1].css("min-width")), Math.round(e[1] * a[1].parent().width())]
          , o = m && t[1] < t[0] ? t[0] : t[1]
          , e = m && t[3] < t[2] ? t[2] : t[3];
        a[0].css({
            height: o,
            "max-height": a[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({
            "line-height": t[0] + "px"
        }),
        a[1].css({
            width: e,
            "max-width": a[1].parent().width() - 10
        })
    }
    ,
    b = function() {
        var e = E(this).data(W)
          , t = E("#mCSB_" + e.idx)
          , o = E("#mCSB_" + e.idx + "_container")
          , a = [E("#mCSB_" + e.idx + "_dragger_vertical"), E("#mCSB_" + e.idx + "_dragger_horizontal")]
          , t = [o.outerHeight(!1) - t.height(), o.outerWidth(!1) - t.width()]
          , a = [t[0] / (a[0].parent().height() - a[0].height()), t[1] / (a[1].parent().width() - a[1].width())];
        e.scrollRatio = {
            y: a[0],
            x: a[1]
        }
    }
    ,
    y = function(e, t, o) {
        var a = o ? g[0] + "_expanded" : ""
          , o = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(g[0] + " " + a),
        o.toggleClass(g[1]),
        e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(g[0]),
        o.removeClass(g[1])) : (e.addClass(g[0]),
        o.addClass(g[1])))
    }
    ,
    C = function() {
        var e = E(this).data(W)
          , t = E("#mCSB_" + e.idx)
          , o = E("#mCSB_" + e.idx + "_container")
          , a = null == e.overflowed ? o.height() : o.outerHeight(!1)
          , n = null == e.overflowed ? o.width() : o.outerWidth(!1)
          , e = o[0].scrollHeight
          , o = o[0].scrollWidth;
        return a < e && (a = e),
        n < o && (n = o),
        [a > t.height(), n > t.width()]
    }
    ,
    B = function() {
        var e = E(this)
          , t = e.data(W)
          , o = t.opt
          , a = E("#mCSB_" + t.idx)
          , n = E("#mCSB_" + t.idx + "_container")
          , i = [E("#mCSB_" + t.idx + "_dragger_vertical"), E("#mCSB_" + t.idx + "_dragger_horizontal")];
        G(e),
        ("x" !== o.axis && !t.overflowed[0] || "y" === o.axis && t.overflowed[0]) && (i[0].add(n).css("top", 0),
        J(e, "_resetY")),
        ("y" !== o.axis && !t.overflowed[1] || "x" === o.axis && t.overflowed[1]) && (o = dx = 0,
        "rtl" === t.langDir && (o = a.width() - n.outerWidth(!1),
        dx = Math.abs(o / t.scrollRatio.x)),
        n.css("left", o),
        i[1].css("left", dx),
        J(e, "_resetX"))
    }
    ,
    k = function() {
        var t, o = E(this), e = o.data(W), a = e.opt;
        e.bindEvents || (l.call(this),
        a.contentTouchScroll && $.call(this),
        O.call(this),
        a.mouseWheel.enable && function e() {
            t = setTimeout(function() {
                E.event.special.mousewheel ? (clearTimeout(t),
                I.call(o[0])) : e()
            }, 100)
        }(),
        U.call(this),
        q.call(this),
        a.advanced.autoScrollOnFocus && F.call(this),
        a.scrollButtons.enable && Y.call(this),
        a.keyboard.enable && X.call(this),
        e.bindEvents = !0)
    }
    ,
    T = function() {
        var e = E(this)
          , t = e.data(W)
          , o = t.opt
          , a = W + "_" + t.idx
          , n = ".mCSB_" + t.idx + "_scrollbar"
          , i = E("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + n + " ." + g[12] + ",#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + n + ">a")
          , n = E("#mCSB_" + t.idx + "_container");
        o.advanced.releaseDraggableSelectors && i.add(E(o.advanced.releaseDraggableSelectors)),
        o.advanced.extraDraggableSelectors && i.add(E(o.advanced.extraDraggableSelectors)),
        t.bindEvents && (E(document).add(E(!z() || top.document)).unbind("." + a),
        i.each(function() {
            E(this).unbind("." + a)
        }),
        clearTimeout(e[0]._focusTimeout),
        ee(e[0], "_focusTimeout"),
        clearTimeout(t.sequential.step),
        ee(t.sequential, "step"),
        clearTimeout(n[0].onCompleteTimeout),
        ee(n[0], "onCompleteTimeout"),
        t.bindEvents = !1)
    }
    ,
    M = function(e) {
        var t = E(this)
          , o = t.data(W)
          , a = o.opt
          , n = E("#mCSB_" + o.idx + "_container_wrapper")
          , i = n.length ? n : E("#mCSB_" + o.idx + "_container")
          , l = [E("#mCSB_" + o.idx + "_scrollbar_vertical"), E("#mCSB_" + o.idx + "_scrollbar_horizontal")]
          , n = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
        "x" !== a.axis && (o.overflowed[0] && !e ? (l[0].add(n[0]).add(l[0].children("a")).css("display", "block"),
        i.removeClass(g[8] + " " + g[10])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && n[0].css("display", "none"),
        i.removeClass(g[10])) : (l[0].css("display", "none"),
        i.addClass(g[10])),
        i.addClass(g[8]))),
        "y" !== a.axis && (o.overflowed[1] && !e ? (l[1].add(n[1]).add(l[1].children("a")).css("display", "block"),
        i.removeClass(g[9] + " " + g[11])) : (a.alwaysShowScrollbar ? (2 !== a.alwaysShowScrollbar && n[1].css("display", "none"),
        i.removeClass(g[11])) : (l[1].css("display", "none"),
        i.addClass(g[11])),
        i.addClass(g[9]))),
        o.overflowed[0] || o.overflowed[1] ? t.removeClass(g[5]) : t.addClass(g[5])
    }
    ,
    L = function(e) {
        var t = e.type
          , o = e.target.ownerDocument !== document && null !== frameElement ? [E(frameElement).offset().top, E(frameElement).offset().left] : null
          , a = z() && e.target.ownerDocument !== top.document && null !== frameElement ? [E(e.view.frameElement).offset().top, E(e.view.frameElement).offset().left] : [0, 0];
        switch (t) {
        case "pointerdown":
        case "MSPointerDown":
        case "pointermove":
        case "MSPointerMove":
        case "pointerup":
        case "MSPointerUp":
            return o ? [e.originalEvent.pageY - o[0] + a[0], e.originalEvent.pageX - o[1] + a[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
        case "touchstart":
        case "touchmove":
        case "touchend":
            var n = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]
              , i = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
            return e.target.ownerDocument !== document ? [n.screenY, n.screenX, 1 < i] : [n.pageY, n.pageX, 1 < i];
        default:
            return o ? [e.pageY - o[0] + a[0], e.pageX - o[1] + a[1], !1] : [e.pageY, e.pageX, !1]
        }
    }
    ,
    l = function() {
        function a(e, t, o, a) {
            var n;
            u[0].idleTimer = c.scrollInertia < 233 ? 250 : 0,
            o = i.attr("id") === d[1] ? (n = "x",
            (i[0].offsetLeft - t + a) * s.scrollRatio.x) : (n = "y",
            (i[0].offsetTop - e + o) * s.scrollRatio.y),
            J(r, o.toString(), {
                dir: n,
                drag: !0
            })
        }
        var i, n, l, r = E(this), s = r.data(W), c = s.opt, e = W + "_" + s.idx, d = ["mCSB_" + s.idx + "_dragger_vertical", "mCSB_" + s.idx + "_dragger_horizontal"], u = E("#mCSB_" + s.idx + "_container"), t = E("#" + d[0] + ",#" + d[1]), o = c.advanced.releaseDraggableSelectors ? t.add(E(c.advanced.releaseDraggableSelectors)) : t, f = c.advanced.extraDraggableSelectors ? E(!z() || top.document).add(E(c.advanced.extraDraggableSelectors)) : E(!z() || top.document);
        t.bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            var t, o, a;
            e.stopImmediatePropagation(),
            e.preventDefault(),
            te(e) && (A = !0,
            m && (document.onselectstart = function() {
                return !1
            }
            ),
            P.call(u, !1),
            G(r),
            a = (i = E(this)).offset(),
            t = L(e)[0] - a.top,
            o = L(e)[1] - a.left,
            e = i.height() + a.top,
            a = i.width() + a.left,
            t < e && 0 < t && o < a && 0 < o && (n = t,
            l = o),
            y(i, "active", c.autoExpandScrollbar))
        }).bind("touchmove." + e, function(e) {
            e.stopImmediatePropagation(),
            e.preventDefault();
            var t = i.offset()
              , o = L(e)[0] - t.top
              , t = L(e)[1] - t.left;
            a(n, l, o, t)
        }),
        E(document).add(f).bind("mousemove." + e + " pointermove." + e + " MSPointerMove." + e, function(e) {
            var t, o;
            i && (o = i.offset(),
            t = L(e)[0] - o.top,
            o = L(e)[1] - o.left,
            n === t && l === o || a(n, l, t, o))
        }).add(o).bind("mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            i && (y(i, "active", c.autoExpandScrollbar),
            i = null),
            A = !1,
            m && (document.onselectstart = null),
            P.call(u, !0)
        })
    }
    ,
    $ = function() {
        function t(e) {
            if (!oe(e) || A || L(e)[2])
                return R = 0;
            x = v = 0,
            r = R = 1,
            w.removeClass("mCS_touch_action");
            var t = C.offset();
            s = L(e)[0] - t.top,
            c = L(e)[1] - t.left,
            $ = [L(e)[0], L(e)[1]]
        }
        function o(e) {
            var t, o, a, n, i;
            !oe(e) || A || L(e)[2] || (S.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            x && !v || !r) || (h = Z(),
            a = b.offset(),
            t = L(e)[0] - a.top,
            o = L(e)[1] - a.left,
            a = "mcsLinearOut",
            B.push(t),
            k.push(o),
            $[2] = Math.abs(L(e)[0] - $[0]),
            $[3] = Math.abs(L(e)[1] - $[1]),
            _.overflowed[0] && (n = y[0].parent().height() - y[0].height(),
            n = 0 < s - t && t - s > -(n * _.scrollRatio.y) && (2 * $[3] < $[2] || "yx" === S.axis)),
            _.overflowed[1] && (i = y[1].parent().width() - y[1].width(),
            i = 0 < c - o && o - c > -(i * _.scrollRatio.x) && (2 * $[2] < $[3] || "yx" === S.axis)),
            n || i ? (D || e.preventDefault(),
            v = 1) : (x = 1,
            w.addClass("mCS_touch_action")),
            D && e.preventDefault(),
            m = "yx" === S.axis ? [s - t, c - o] : "x" === S.axis ? [null, c - o] : [s - t, null],
            C[0].idleTimer = 250,
            _.overflowed[0] && l(m[0], T, a, "y", "all", !0),
            _.overflowed[1] && l(m[1], T, a, "x", M, !0))
        }
        function a(e) {
            if (!oe(e) || A || L(e)[2])
                return R = 0;
            R = 1,
            e.stopImmediatePropagation(),
            G(w),
            f = Z();
            var t = b.offset();
            d = L(e)[0] - t.top,
            u = L(e)[1] - t.left,
            B = [],
            k = []
        }
        function n(e) {
            var t, o, a, n;
            !oe(e) || A || L(e)[2] || (r = 0,
            e.stopImmediatePropagation(),
            x = v = 0,
            p = Z(),
            a = b.offset(),
            t = L(e)[0] - a.top,
            n = L(e)[1] - a.left,
            30 < p - h || (o = "mcsEaseOut",
            a = (e = (g = 1e3 / (p - f)) < 2.5) ? [B[B.length - 2], k[k.length - 2]] : [0, 0],
            p = e ? [t - a[0], n - a[1]] : [t - d, n - u],
            n = [Math.abs(p[0]), Math.abs(p[1])],
            g = e ? [Math.abs(p[0] / 4), Math.abs(p[1] / 4)] : [g, g],
            e = [Math.abs(C[0].offsetTop) - p[0] * i(n[0] / g[0], g[0]), Math.abs(C[0].offsetLeft) - p[1] * i(n[1] / g[1], g[1])],
            m = "yx" === S.axis ? [e[0], e[1]] : "x" === S.axis ? [null, e[1]] : [e[0], null],
            g = [4 * n[0] + S.scrollInertia, 4 * n[1] + S.scrollInertia],
            e = parseInt(S.contentTouchScroll) || 0,
            m[0] = e < n[0] ? m[0] : 0,
            m[1] = e < n[1] ? m[1] : 0,
            _.overflowed[0] && l(m[0], g[0], o, "y", M, !1),
            _.overflowed[1] && l(m[1], g[1], o, "x", M, !1)))
        }
        function i(e, t) {
            var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
            return 90 < e ? 4 < t ? o[0] : o[3] : 60 < e ? 3 < t ? o[3] : o[2] : 30 < e ? 8 < t ? o[1] : 6 < t ? o[0] : 4 < t ? t : o[2] : 8 < t ? t : o[3]
        }
        function l(e, t, o, a, n, i) {
            e && J(w, e.toString(), {
                dur: t,
                scrollEasing: o,
                dir: a,
                overwrite: n,
                drag: i
            })
        }
        var r, s, c, d, u, f, h, p, m, g, v, x, w = E(this), _ = w.data(W), S = _.opt, e = W + "_" + _.idx, b = E("#mCSB_" + _.idx), C = E("#mCSB_" + _.idx + "_container"), y = [E("#mCSB_" + _.idx + "_dragger_vertical"), E("#mCSB_" + _.idx + "_dragger_horizontal")], B = [], k = [], T = 0, M = "yx" === S.axis ? "none" : "all", $ = [], O = C.find("iframe"), I = ["touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, "touchmove." + e + " pointermove." + e + " MSPointerMove." + e, "touchend." + e + " pointerup." + e + " MSPointerUp." + e], D = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        C.bind(I[0], function(e) {
            t(e)
        }).bind(I[1], function(e) {
            o(e)
        }),
        b.bind(I[0], function(e) {
            a(e)
        }).bind(I[2], function(e) {
            n(e)
        }),
        O.length && O.each(function() {
            E(this).bind("load", function() {
                z(this) && E(this.contentDocument || this.contentWindow.document).bind(I[0], function(e) {
                    t(e),
                    a(e)
                }).bind(I[1], function(e) {
                    o(e)
                }).bind(I[2], function(e) {
                    n(e)
                })
            })
        })
    }
    ,
    O = function() {
        function a(e, t, o) {
            s.type = o && n ? "stepped" : "stepless",
            s.scrollAmount = 10,
            j(i, e, t, "mcsLinearOut", o ? 60 : null)
        }
        var n, i = E(this), l = i.data(W), r = l.opt, s = l.sequential, e = W + "_" + l.idx, c = E("#mCSB_" + l.idx + "_container"), d = c.parent();
        c.bind("mousedown." + e, function() {
            R || n || (n = 1,
            A = !0)
        }).add(document).bind("mousemove." + e, function(e) {
            var t, o;
            !R && n && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text) && (o = c.offset(),
            t = L(e)[0] - o.top + c[0].offsetTop,
            o = L(e)[1] - o.left + c[0].offsetLeft,
            0 < t && t < d.height() && 0 < o && o < d.width() ? s.step && a("off", null, "stepped") : ("x" !== r.axis && l.overflowed[0] && (t < 0 ? a("on", 38) : t > d.height() && a("on", 40)),
            "y" !== r.axis && l.overflowed[1] && (o < 0 ? a("on", 37) : o > d.width() && a("on", 39))))
        }).bind("mouseup." + e + " dragend." + e, function() {
            R || (n && (n = 0,
            a("off", null)),
            A = !1)
        })
    }
    ,
    I = function() {
        function o(e, t) {
            var o, a, n, i, l, r, s, c;
            G(d),
            H(d, e.target) || (o = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : !(m && e.deltaFactor < 100) && e.deltaFactor || 100,
            a = f.scrollInertia,
            t = "x" === f.axis || "x" === f.mouseWheel.axis ? (n = "x",
            i = [Math.round(o * u.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
            l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= h.width() ? .9 * h.width() : i[0],
            r = Math.abs(E("#mCSB_" + u.idx + "_container")[0].offsetLeft),
            s = p[1][0].offsetLeft,
            c = p[1].parent().width() - p[1].width(),
            "y" === f.mouseWheel.axis ? e.deltaY || t : e.deltaX) : (n = "y",
            i = [Math.round(o * u.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
            l = "auto" !== f.mouseWheel.scrollAmount ? i[1] : i[0] >= h.height() ? .9 * h.height() : i[0],
            r = Math.abs(E("#mCSB_" + u.idx + "_container")[0].offsetTop),
            s = p[0][0].offsetTop,
            c = p[0].parent().height() - p[0].height(),
            e.deltaY || t),
            "y" === n && !u.overflowed[0] || "x" === n && !u.overflowed[1] || ((f.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (t = -t),
            f.mouseWheel.normalizeDelta && (t = t < 0 ? -1 : 1),
            (0 < t && 0 !== s || t < 0 && s !== c || f.mouseWheel.preventDefault) && (e.stopImmediatePropagation(),
            e.preventDefault()),
            e.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (l = e.deltaFactor,
            a = 17),
            J(d, (r - t * l).toString(), {
                dir: n,
                dur: a
            })))
        }
        var d, u, f, e, h, p, t;
        E(this).data(W) && (d = E(this),
        u = d.data(W),
        f = u.opt,
        e = W + "_" + u.idx,
        h = E("#mCSB_" + u.idx),
        p = [E("#mCSB_" + u.idx + "_dragger_vertical"), E("#mCSB_" + u.idx + "_dragger_horizontal")],
        (t = E("#mCSB_" + u.idx + "_container").find("iframe")).length && t.each(function() {
            E(this).bind("load", function() {
                z(this) && E(this.contentDocument || this.contentWindow.document).bind("mousewheel." + e, function(e, t) {
                    o(e, t)
                })
            })
        }),
        h.bind("mousewheel." + e, function(e, t) {
            o(e, t)
        }))
    }
    ,
    D = new Object,
    z = function(e) {
        var t = !1
          , o = !1
          , a = null;
        if (void 0 === e ? o = "#empty" : void 0 !== E(e).attr("id") && (o = E(e).attr("id")),
        !1 !== o && void 0 !== D[o])
            return D[o];
        if (e) {
            try {
                a = (e.contentDocument || e.contentWindow.document).body.innerHTML
            } catch (e) {}
            t = null !== a
        } else {
            try {
                a = top.document.body.innerHTML
            } catch (e) {}
            t = null !== a
        }
        return !1 !== o && (D[o] = t),
        t
    }
    ,
    P = function(e) {
        var t = this.find("iframe");
        t.length && (e = e ? "auto" : "none",
        t.css("pointer-events", e))
    }
    ,
    H = function(e, t) {
        var o = t.nodeName.toLowerCase()
          , e = e.data(W).opt.mouseWheel.disableOver;
        return -1 < E.inArray(o, e) && !(-1 < E.inArray(o, ["select", "textarea"]) && !E(t).is(":focus"))
    }
    ,
    U = function() {
        var l, r = E(this), s = r.data(W), e = W + "_" + s.idx, c = E("#mCSB_" + s.idx + "_container"), d = c.parent();
        E(".mCSB_" + s.idx + "_scrollbar ." + g[12]).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(e) {
            A = !0,
            E(e.target).hasClass("mCSB_dragger") || (l = 1)
        }).bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function() {
            A = !1
        }).bind("click." + e, function(e) {
            if (l && (l = 0,
            E(e.target).hasClass(g[12]) || E(e.target).hasClass("mCSB_draggerRail"))) {
                G(r);
                var t = E(this)
                  , o = t.find(".mCSB_dragger");
                if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                    if (!s.overflowed[1])
                        return;
                    var a = "x"
                      , n = e.pageX > o.offset().left ? -1 : 1
                      , i = Math.abs(c[0].offsetLeft) - n * (.9 * d.width())
                } else {
                    if (!s.overflowed[0])
                        return;
                    a = "y",
                    n = e.pageY > o.offset().top ? -1 : 1,
                    i = Math.abs(c[0].offsetTop) - n * (.9 * d.height())
                }
                J(r, i.toString(), {
                    dir: a,
                    scrollEasing: "mcsEaseInOut"
                })
            }
        })
    }
    ,
    F = function() {
        var n = E(this)
          , e = n.data(W)
          , i = e.opt
          , t = W + "_" + e.idx
          , l = E("#mCSB_" + e.idx + "_container")
          , r = l.parent();
        l.bind("focusin." + t, function() {
            var a = E(document.activeElement)
              , e = l.find(".mCustomScrollBox").length;
            a.is(i.advanced.autoScrollOnFocus) && (G(n),
            clearTimeout(n[0]._focusTimeout),
            n[0]._focusTimer = e ? 17 * e : 0,
            n[0]._focusTimeout = setTimeout(function() {
                var e = [ne(a)[0], ne(a)[1]]
                  , t = [l[0].offsetTop, l[0].offsetLeft]
                  , o = [0 <= t[0] + e[0] && t[0] + e[0] < r.height() - a.outerHeight(!1), 0 <= t[1] + e[1] && t[0] + e[1] < r.width() - a.outerWidth(!1)]
                  , t = "yx" !== i.axis || o[0] || o[1] ? "all" : "none";
                "x" === i.axis || o[0] || J(n, e[0].toString(), {
                    dir: "y",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: t,
                    dur: 0
                }),
                "y" === i.axis || o[1] || J(n, e[1].toString(), {
                    dir: "x",
                    scrollEasing: "mcsEaseInOut",
                    overwrite: t,
                    dur: 0
                })
            }, n[0]._focusTimer))
        })
    }
    ,
    q = function() {
        var e = E(this).data(W)
          , t = W + "_" + e.idx
          , o = E("#mCSB_" + e.idx + "_container").parent();
        o.bind("scroll." + t, function() {
            0 === o.scrollTop() && 0 === o.scrollLeft() || E(".mCSB_" + e.idx + "_scrollbar").css("visibility", "hidden")
        })
    }
    ,
    Y = function() {
        var a = E(this)
          , n = a.data(W)
          , i = n.opt
          , l = n.sequential
          , e = W + "_" + n.idx
          , t = ".mCSB_" + n.idx + "_scrollbar";
        E(t + ">a").bind("contextmenu." + e, function(e) {
            e.preventDefault()
        }).bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e + " mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e + " mouseout." + e + " pointerout." + e + " MSPointerOut." + e + " click." + e, function(e) {
            function t(e, t) {
                l.scrollAmount = i.scrollButtons.scrollAmount,
                j(a, e, t)
            }
            if (e.preventDefault(),
            te(e)) {
                var o = E(this).attr("class");
                switch (l.type = i.scrollButtons.scrollType,
                e.type) {
                case "mousedown":
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                    if ("stepped" === l.type)
                        return;
                    A = !0,
                    n.tweenRunning = !1,
                    t("on", o);
                    break;
                case "mouseup":
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseout":
                case "pointerout":
                case "MSPointerOut":
                    if ("stepped" === l.type)
                        return;
                    A = !1,
                    l.dir && t("off", o);
                    break;
                case "click":
                    if ("stepped" !== l.type || n.tweenRunning)
                        return;
                    t("on", o)
                }
            }
        })
    }
    ,
    X = function() {
        function t(e) {
            function t(e, t) {
                c.type = s.keyboard.scrollType,
                c.scrollAmount = s.keyboard.scrollAmount,
                "stepped" === c.type && r.tweenRunning || j(l, e, t)
            }
            switch (e.type) {
            case "blur":
                r.tweenRunning && c.dir && t("off", null);
                break;
            case "keydown":
            case "keyup":
                var o, a, n = e.keyCode || e.which, i = "on";
                if ("x" !== s.axis && (38 === n || 40 === n) || "y" !== s.axis && (37 === n || 39 === n)) {
                    if ((38 === n || 40 === n) && !r.overflowed[0] || (37 === n || 39 === n) && !r.overflowed[1])
                        return;
                    "keyup" === e.type && (i = "off"),
                    E(document.activeElement).is(f) || (e.preventDefault(),
                    e.stopImmediatePropagation(),
                    t(i, n))
                } else
                    33 === n || 34 === n ? ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(),
                    e.stopImmediatePropagation()),
                    "keyup" === e.type && (G(l),
                    a = 34 === n ? -1 : 1,
                    a = "x" === s.axis || "yx" === s.axis && r.overflowed[1] && !r.overflowed[0] ? (o = "x",
                    Math.abs(d[0].offsetLeft) - a * (.9 * u.width())) : (o = "y",
                    Math.abs(d[0].offsetTop) - a * (.9 * u.height())),
                    J(l, a.toString(), {
                        dir: o,
                        scrollEasing: "mcsEaseInOut"
                    }))) : 35 !== n && 36 !== n || E(document.activeElement).is(f) || ((r.overflowed[0] || r.overflowed[1]) && (e.preventDefault(),
                    e.stopImmediatePropagation()),
                    "keyup" !== e.type) || (a = "x" === s.axis || "yx" === s.axis && r.overflowed[1] && !r.overflowed[0] ? (o = "x",
                    35 === n ? Math.abs(u.width() - d.outerWidth(!1)) : 0) : (o = "y",
                    35 === n ? Math.abs(u.height() - d.outerHeight(!1)) : 0),
                    J(l, a.toString(), {
                        dir: o,
                        scrollEasing: "mcsEaseInOut"
                    }))
            }
        }
        var l = E(this)
          , r = l.data(W)
          , s = r.opt
          , c = r.sequential
          , e = W + "_" + r.idx
          , o = E("#mCSB_" + r.idx)
          , d = E("#mCSB_" + r.idx + "_container")
          , u = d.parent()
          , f = "input,textarea,select,datalist,keygen,[contenteditable='true']"
          , a = d.find("iframe")
          , n = ["blur." + e + " keydown." + e + " keyup." + e];
        a.length && a.each(function() {
            E(this).bind("load", function() {
                z(this) && E(this.contentDocument || this.contentWindow.document).bind(n[0], function(e) {
                    t(e)
                })
            })
        }),
        o.attr("tabindex", "0").bind(n[0], function(e) {
            t(e)
        })
    }
    ,
    j = function(l, e, t, r, s) {
        function c(e) {
            u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount);
            var t = "stepped" !== f.type
              , o = s || (e ? t ? p / 1.5 : m : 1e3 / 60)
              , a = e ? t ? 7.5 : 40 : 2.5
              , n = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)]
              , i = [10 < d.scrollRatio.y ? 10 : d.scrollRatio.y, 10 < d.scrollRatio.x ? 10 : d.scrollRatio.x]
              , i = "x" === f.dir[0] ? n[1] + f.dir[1] * (i[1] * a) : n[0] + f.dir[1] * (i[0] * a)
              , a = "x" === f.dir[0] ? n[1] + f.dir[1] * parseInt(f.scrollAmount) : n[0] + f.dir[1] * parseInt(f.scrollAmount)
              , a = "auto" !== f.scrollAmount ? a : i
              , i = r || (e ? t ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear")
              , t = !!e;
            return e && o < 17 && (a = "x" === f.dir[0] ? n[1] : n[0]),
            J(l, a.toString(), {
                dir: f.dir[0],
                scrollEasing: i,
                dur: o,
                onComplete: t
            }),
            e ? void (f.dir = !1) : (clearTimeout(f.step),
            void (f.step = setTimeout(function() {
                c()
            }, o)))
        }
        var d = l.data(W)
          , u = d.opt
          , f = d.sequential
          , h = E("#mCSB_" + d.idx + "_container")
          , o = "stepped" === f.type
          , p = u.scrollInertia < 26 ? 26 : u.scrollInertia
          , m = u.scrollInertia < 1 ? 17 : u.scrollInertia;
        switch (e) {
        case "on":
            if (f.dir = [t === g[16] || t === g[15] || 39 === t || 37 === t ? "x" : "y", t === g[13] || t === g[15] || 38 === t || 37 === t ? -1 : 1],
            G(l),
            ae(t) && "stepped" === f.type)
                return;
            c(o);
            break;
        case "off":
            clearTimeout(f.step),
            ee(f, "step"),
            G(l),
            (o || d.tweenRunning && f.dir) && c(!0)
        }
    }
    ,
    N = function(e) {
        var t = E(this).data(W).opt
          , o = [];
        return "function" == typeof e && (e = e()),
        e instanceof Array ? o = 1 < e.length ? [e[0], e[1]] : "x" === t.axis ? [null, e[0]] : [e[0], null] : (o[0] = e.y || (e.x || "x" === t.axis ? null : e),
        o[1] = e.x || (e.y || "y" === t.axis ? null : e)),
        "function" == typeof o[0] && (o[0] = o[0]()),
        "function" == typeof o[1] && (o[1] = o[1]()),
        o
    }
    ,
    V = function(e, t) {
        if (null != e && void 0 !== e) {
            var o = E(this)
              , a = o.data(W)
              , n = a.opt
              , i = E("#mCSB_" + a.idx + "_container")
              , l = i.parent()
              , a = typeof e
              , r = "x" === (t = t || ("x" === n.axis ? "x" : "y")) ? i.outerWidth(!1) - l.width() : i.outerHeight(!1) - l.height()
              , s = "x" === t ? i[0].offsetLeft : i[0].offsetTop
              , c = "x" === t ? "left" : "top";
            switch (a) {
            case "function":
                return e();
            case "object":
                return (u = e.jquery ? e : E(e)).length ? "x" === t ? ne(u)[1] : ne(u)[0] : void 0;
            case "string":
            case "number":
                if (ae(e))
                    return Math.abs(e);
                if (-1 !== e.indexOf("%"))
                    return Math.abs(r * parseInt(e) / 100);
                if (-1 !== e.indexOf("-="))
                    return Math.abs(s - parseInt(e.split("-=")[1]));
                if (-1 !== e.indexOf("+=")) {
                    var d = s + parseInt(e.split("+=")[1]);
                    return 0 <= d ? 0 : Math.abs(d)
                }
                if (-1 !== e.indexOf("px") && ae(e.split("px")[0]))
                    return Math.abs(e.split("px")[0]);
                if ("top" === e || "left" === e)
                    return 0;
                if ("bottom" === e)
                    return Math.abs(l.height() - i.outerHeight(!1));
                if ("right" === e)
                    return Math.abs(l.width() - i.outerWidth(!1));
                if ("first" !== e && "last" !== e)
                    return E(e).length ? "x" === t ? ne(E(e))[1] : ne(E(e))[0] : (i.css(c, e),
                    void f.update.call(null, o[0]));
                var u = i.find(":" + e);
                return "x" === t ? ne(u)[1] : ne(u)[0]
            }
        }
    }
    ,
    Q = function(e) {
        function o(e) {
            clearTimeout(i[0].autoUpdate),
            f.update.call(null, t[0], e)
        }
        var t = E(this)
          , a = t.data(W)
          , n = a.opt
          , i = E("#mCSB_" + a.idx + "_container");
        return e ? (clearTimeout(i[0].autoUpdate),
        void ee(i[0], "autoUpdate")) : void function e() {
            return clearTimeout(i[0].autoUpdate),
            0 === t.parents("html").length ? void (t = null) : void (i[0].autoUpdate = setTimeout(function() {
                return n.advanced.updateOnSelectorChange && (a.poll.change.n = function() {
                    !0 === n.advanced.updateOnSelectorChange && (n.advanced.updateOnSelectorChange = "*");
                    var e = 0
                      , t = i.find(n.advanced.updateOnSelectorChange);
                    return n.advanced.updateOnSelectorChange && 0 < t.length && t.each(function() {
                        e += this.offsetHeight + this.offsetWidth
                    }),
                    e
                }(),
                a.poll.change.n !== a.poll.change.o) ? (a.poll.change.o = a.poll.change.n,
                void o(3)) : n.advanced.updateOnContentResize && (a.poll.size.n = t[0].scrollHeight + t[0].scrollWidth + i[0].offsetHeight + t[0].offsetHeight + t[0].offsetWidth,
                a.poll.size.n !== a.poll.size.o) ? (a.poll.size.o = a.poll.size.n,
                void o(1)) : !n.advanced.updateOnImageLoad || "auto" === n.advanced.updateOnImageLoad && "y" === n.axis || (a.poll.img.n = i.find("img").length,
                a.poll.img.n === a.poll.img.o) ? void ((n.advanced.updateOnSelectorChange || n.advanced.updateOnContentResize || n.advanced.updateOnImageLoad) && e()) : (a.poll.img.o = a.poll.img.n,
                void i.find("img").each(function() {
                    !function(e) {
                        if (E(e).hasClass(g[2]))
                            return o(),
                            0;
                        var t = new Image;
                        t.onload = function(e, t) {
                            return function() {
                                return t.apply(e, arguments)
                            }
                        }(t, function() {
                            this.onload = null,
                            E(e).addClass(g[2]),
                            o(2)
                        }),
                        t.src = e.src
                    }(this)
                }))
            }, n.advanced.autoUpdateTimeout))
        }()
    }
    ,
    G = function(e) {
        e = e.data(W);
        E("#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper,#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal").each(function() {
            t.call(this)
        })
    }
    ,
    J = function(n, e, i) {
        function t(e) {
            return l && r.callbacks[e] && "function" == typeof r.callbacks[e]
        }
        function o() {
            var e = [u[0].offsetTop, u[0].offsetLeft]
              , t = [m[0].offsetTop, m[0].offsetLeft]
              , o = [u.outerHeight(!1), u.outerWidth(!1)]
              , a = [d.height(), d.width()];
            n[0].mcs = {
                content: u,
                top: e[0],
                left: e[1],
                draggerTop: t[0],
                draggerLeft: t[1],
                topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(o[0]) - a[0])),
                leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(o[1]) - a[1])),
                direction: i.dir
            }
        }
        var a, l = n.data(W), r = l.opt, s = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: r.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
        }, c = [(i = E.extend(s, i)).dur, i.drag ? 0 : i.dur], d = E("#mCSB_" + l.idx), u = E("#mCSB_" + l.idx + "_container"), f = u.parent(), h = r.callbacks.onTotalScrollOffset ? N.call(n, r.callbacks.onTotalScrollOffset) : [0, 0], p = r.callbacks.onTotalScrollBackOffset ? N.call(n, r.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (l.trigger = i.trigger,
        0 === f.scrollTop() && 0 === f.scrollLeft() || (E(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"),
        f.scrollTop(0).scrollLeft(0)),
        "_resetY" !== e || l.contentReset.y || (t("onOverflowYNone") && r.callbacks.onOverflowYNone.call(n[0]),
        l.contentReset.y = 1),
        "_resetX" !== e || l.contentReset.x || (t("onOverflowXNone") && r.callbacks.onOverflowXNone.call(n[0]),
        l.contentReset.x = 1),
        "_resetY" !== e && "_resetX" !== e) {
            switch (!l.contentReset.y && n[0].mcs || !l.overflowed[0] || (t("onOverflowY") && r.callbacks.onOverflowY.call(n[0]),
            l.contentReset.x = null),
            !l.contentReset.x && n[0].mcs || !l.overflowed[1] || (t("onOverflowX") && r.callbacks.onOverflowX.call(n[0]),
            l.contentReset.x = null),
            r.snapAmount && (a = r.snapAmount instanceof Array ? "x" === i.dir ? r.snapAmount[1] : r.snapAmount[0] : r.snapAmount,
            s = e,
            f = a,
            a = r.snapOffset,
            e = Math.round(s / f) * f - a),
            i.dir) {
            case "x":
                var m = E("#mCSB_" + l.idx + "_dragger_horizontal")
                  , g = "left"
                  , v = u[0].offsetLeft
                  , x = [d.width() - u.outerWidth(!1), m.parent().width() - m.width()]
                  , w = [e, 0 === e ? 0 : e / l.scrollRatio.x]
                  , _ = h[1]
                  , S = p[1]
                  , b = 0 < _ ? _ / l.scrollRatio.x : 0
                  , C = 0 < S ? S / l.scrollRatio.x : 0;
                break;
            case "y":
                m = E("#mCSB_" + l.idx + "_dragger_vertical"),
                g = "top",
                v = u[0].offsetTop,
                x = [d.height() - u.outerHeight(!1), m.parent().height() - m.height()],
                w = [e, 0 === e ? 0 : e / l.scrollRatio.y],
                _ = h[0],
                S = p[0],
                b = 0 < _ ? _ / l.scrollRatio.y : 0,
                C = 0 < S ? S / l.scrollRatio.y : 0
            }
            w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= x[1] ? w = [x[0], x[1]] : w[0] = -w[0],
            n[0].mcs || (o(),
            t("onInit") && r.callbacks.onInit.call(n[0])),
            clearTimeout(u[0].onCompleteTimeout),
            K(m[0], g, Math.round(w[1]), c[1], i.scrollEasing),
            !l.tweenRunning && (0 === v && 0 <= w[0] || v === x[0] && w[0] <= x[0]) || K(u[0], g, Math.round(w[0]), c[0], i.scrollEasing, i.overwrite, {
                onStart: function() {
                    i.callbacks && i.onStart && !l.tweenRunning && (t("onScrollStart") && (o(),
                    r.callbacks.onScrollStart.call(n[0])),
                    l.tweenRunning = !0,
                    y(m),
                    l.cbOffsets = [r.callbacks.alwaysTriggerOffsets || v >= x[0] + _, r.callbacks.alwaysTriggerOffsets || v <= -S])
                },
                onUpdate: function() {
                    i.callbacks && i.onUpdate && t("whileScrolling") && (o(),
                    r.callbacks.whileScrolling.call(n[0]))
                },
                onComplete: function() {
                    var e;
                    i.callbacks && i.onComplete && ("yx" === r.axis && clearTimeout(u[0].onCompleteTimeout),
                    e = u[0].idleTimer || 0,
                    u[0].onCompleteTimeout = setTimeout(function() {
                        t("onScroll") && (o(),
                        r.callbacks.onScroll.call(n[0])),
                        t("onTotalScroll") && w[1] >= x[1] - b && l.cbOffsets[0] && (o(),
                        r.callbacks.onTotalScroll.call(n[0])),
                        t("onTotalScrollBack") && w[1] <= C && l.cbOffsets[1] && (o(),
                        r.callbacks.onTotalScrollBack.call(n[0])),
                        l.tweenRunning = !1,
                        u[0].idleTimer = 0,
                        y(m, "hide")
                    }, e))
                }
            })
        }
    }
    ,
    K = function(e, t, o, a, n, i, l) {
        function r() {
            x.stop || (m || u.call(),
            m = Z() - p,
            s(),
            m >= x.time && (x.time = m > x.time ? m + c - (m - x.time) : m + c - 1,
            x.time < m + 1 && (x.time = m + 1)),
            x.time < a ? x.id = d(r) : h.call())
        }
        function s() {
            0 < a ? (x.currVal = function(e, t, o, a, n) {
                switch (n) {
                case "linear":
                case "mcsLinear":
                    return o * e / a + t;
                case "mcsLinearOut":
                    return e /= a,
                    e--,
                    o * Math.sqrt(1 - e * e) + t;
                case "easeInOutSmooth":
                    return (e /= a / 2) < 1 ? o / 2 * e * e + t : -o / 2 * (--e * (e - 2) - 1) + t;
                case "easeInOutStrong":
                    return (e /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--,
                    o / 2 * (2 - Math.pow(2, -10 * e)) + t);
                case "easeInOut":
                case "mcsEaseInOut":
                    return (e /= a / 2) < 1 ? o / 2 * e * e * e + t : o / 2 * ((e -= 2) * e * e + 2) + t;
                case "easeOutSmooth":
                    return e /= a,
                    -o * (--e * e * e * e - 1) + t;
                case "easeOutStrong":
                    return o * (1 - Math.pow(2, -10 * e / a)) + t;
                case "easeOut":
                case "mcsEaseOut":
                default:
                    var i = (e /= a) * e
                      , l = i * e;
                    return t + o * (.499999999999997 * l * i + -2.5 * i * i + 5.5 * l + -6.5 * i + 4 * e)
                }
            }(x.time, g, w, a, n),
            v[t] = Math.round(x.currVal) + "px") : v[t] = o + "px",
            f.call()
        }
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        var c, d, u = (l = l || {}).onStart || function() {}
        , f = l.onUpdate || function() {}
        , h = l.onComplete || function() {}
        , p = Z(), m = 0, g = e.offsetTop, v = e.style, x = e._mTween[t];
        "left" === t && (g = e.offsetLeft);
        var w = o - g;
        x.stop = 0,
        "none" === i || null != x.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(x.id) : clearTimeout(x.id),
        x.id = null),
        c = 1e3 / 60,
        x.time = m + c,
        d = window.requestAnimationFrame || function(e) {
            return s(),
            setTimeout(e, .01)
        }
        ,
        x.id = d(r)
    }
    ,
    Z = function() {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
    }
    ,
    t = function() {
        var e = this;
        e._mTween || (e._mTween = {
            top: {},
            left: {}
        });
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
            var a = t[o];
            e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id),
            e._mTween[a].id = null,
            e._mTween[a].stop = 1)
        }
    }
    ,
    ee = function(t, o) {
        try {
            delete t[o]
        } catch (e) {
            t[o] = null
        }
    }
    ,
    te = function(e) {
        return !(e.which && 1 !== e.which)
    }
    ,
    oe = function(e) {
        e = e.originalEvent.pointerType;
        return !(e && "touch" !== e && 2 !== e)
    }
    ,
    ae = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
    ,
    ne = function(e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
    }
    ,
    ie = function() {
        var e = function() {
            var e = ["webkit", "moz", "ms", "o"];
            if ("hidden"in document)
                return "hidden";
            for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden"in document)
                    return e[t] + "Hidden";
            return null
        }();
        return !!e && document[e]
    }
    ,
    E.fn[s] = function(e) {
        return f[e] ? f[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void E.error("Method " + e + " does not exist") : f.init.apply(this, arguments)
    }
    ,
    E[s] = function(e) {
        return f[e] ? f[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void E.error("Method " + e + " does not exist") : f.init.apply(this, arguments)
    }
    ,
    E[s].defaults = n,
    window[s] = !0,
    E(window).bind("load", function() {
        E(a)[s](),
        E.extend(E.expr[":"], {
            mcsInView: E.expr[":"].mcsInView || function(e) {
                var t = E(e)
                  , o = t.parents(".mCSB_container");
                if (o.length)
                    return e = o.parent(),
                    0 <= (o = [o[0].offsetTop, o[0].offsetLeft])[0] + ne(t)[0] && o[0] + ne(t)[0] < e.height() - t.outerHeight(!1) && 0 <= o[1] + ne(t)[1] && o[1] + ne(t)[1] < e.width() - t.outerWidth(!1)
            }
            ,
            mcsInSight: E.expr[":"].mcsInSight || function(e, t, o) {
                var a = E(e)
                  , n = a.parents(".mCSB_container")
                  , e = "exact" === o[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
                if (n.length)
                    return o = [a.outerHeight(!1), a.outerWidth(!1)],
                    a = [n[0].offsetTop + ne(a)[0], n[0].offsetLeft + ne(a)[1]],
                    n = [n.parent()[0].offsetHeight, n.parent()[0].offsetWidth],
                    a[0] - n[0] * (e = [o[0] < n[0] ? e[0] : e[1], o[1] < n[1] ? e[0] : e[1]])[0][0] < 0 && 0 <= a[0] + o[0] - n[0] * e[0][1] && a[1] - n[1] * e[1][0] < 0 && 0 <= a[1] + o[1] - n[1] * e[1][1]
            }
            ,
            mcsOverflow: E.expr[":"].mcsOverflow || function(e) {
                e = E(e).data(W);
                if (e)
                    return e.overflowed[0] || e.overflowed[1]
            }
        })
    })
}),
$(document).ready(function() {
    $("[data-targetit]").on("click", function() {
        $(this).siblings().removeClass("current"),
        $(this).addClass("current");
        var e = $(this).data("targetit");
        $("." + e).siblings('[class^="mytabs"]').removeClass("current"),
        $("." + e).addClass("current")
    });
    var e = decodeURIComponent((new RegExp("[?|&]pack=([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
    $("#packages option:eq(" + e + ")").prop("selected", !0),
    $(".header .header_nav ul li.hasdropdown").click(function() {
        $(".header .header_nav ul li.hasdropdown ul.submenu").toggleClass("active"),
        $(".crossplus").toggleClass("rotate")
    }),
    $(".header .header_nav ul li.hasdropdown.hasdropdown1").click(function() {
        $(".header .header_nav ul li.hasdropdown.hasdropdown1 ul.submenu.submenu2").toggleClass("active"),
        $(".crossplus").toggleClass("rotate")
    }),
    $(".clickbutton").click(function() {
        $(".floatbutton").toggleClass("active"),
        $(".crossplus").toggleClass("rotate")
    }),
    $(".topformswitch").click(function() {
        $(".topformwrap").toggleClass("active")
    }),
    $(".callusnow").click(function() {
        $(".book-call-ys-layer").fadeIn(),
        $(".book-call-ys-container").fadeIn(),
        $(".book-call-ys-popup-content").fadeIn();
        window.location.href = "https://professionalwebexperts.com/getstarted";
    }),
    $(".book-callbtn").click(function() {
        $(".book-call-ys-layer").fadeIn(),
        $(".book-call-ys-container").fadeIn(),
        $(".book-call-ys-popup-content").fadeIn()
    }),
    $(".book-call-ys-popup-close").click(function() {
        $(".book-call-ys-layer").fadeOut(),
        $(".book-call-ys-container").fadeOut(),
        $(".book-call-ys-popup-content").fadeOut()
    }),
    $(".stiky_foter_togle").click(function() {
        $(".stiky_foter").toggleClass("tog")
    }),
    $(".role-carousel").slick({
        dots: !1,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: !0,
        autoplaySpeed: 5e3,
        responsive: [{
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    $(".paths_please2").find(".columns.large-4").removeClass("large-4").addClass("large-3"),
    $(".paths_please2").find(".columns.large-8").removeClass("large-8").addClass("large-9"),
    $(".testiSlide").slick({
        centerMode: !0,
        centerPadding: "60px",
        slidesToShow: 2,
        arrows: !0,
        dots: !1,
        infinite: !0,
        speed: 1e3,
        autoplay: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: !1,
                centerMode: !1,
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !1,
                slidesToShow: 1
            }
        }]
    }),
    $(".workSlider").slick({
        centerMode: !0,
        centerPadding: "60px",
        slidesToShow: 2,
        arrows: !0,
        dots: !1,
        infinite: !0,
        speed: 1e3,
        autoplay: !0,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: !1,
                centerMode: !1,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !1,
                centerPadding: "0px",
                slidesToShow: 1
            }
        }]
    }),
    $(".autoplay").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3,
        arrows: !1,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: !1,
                centerMode: !1,
                centerPadding: "0px",
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: !1,
                centerMode: !1,
                centerPadding: "0px",
                slidesToShow: 2
            }
        }]
    }),
    $(".sulotionnav").click(function() {
        $(".sbmenu").toggleClass("active")
    })
}),
$(window).scroll(function() {
    900 <= $(window).scrollTop() ? $(".stiky_foter").addClass("run") : $(".stiky_foter").removeClass("run")
}),
$(window).on("load", function() {
    setTimeout(function() {
        var e = $("body").data("val")
          , t = $("body").find("li").data("tab");
        console.log("body data val value:", e),
        $(".header_tabs_content").removeClass("active"),
        $(".header_roles").removeClass("active"),
        $("#" + e).addClass("active"),
        $('li[data-tab="' + e + '"]').addClass("active"),
        t == e && console.log("body data val value:", t)
    }, 1e3)
}),
$(window).innerWidth() <= 751 && $(".mportt").slick({
    centerMode: !0,
    centerPadding: "60px",
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: !1,
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: !1,
            slidesToShow: 1
        }
    }]
}),
$(function() {
    $.mCustomScrollbar.defaults.theme = "light-1",
    $(".list-scroll").mCustomScrollbar({
        scrollButtons: {
            enable: !0
        },
        callbacks: {
            onTotalScroll: function() {
                addContent(this)
            },
            onTotalScrollOffset: 100,
            alwaysTriggerOffsets: !1
        }
    }),
    $("#loadlogo").click(function() {
        $(".portcount .hiddden").css("display", "inline-block"),
        $("#loadlogo").css("display", "none")
    })
}),
$(".eggoffer").click(function() {
    $(".mypopup-wrap").toggle(),
    $(".overlay").toggle()
}),
$(".closebutton").click(function() {
    $(".mypopup-wrap").hide(),
    $(".overlay").hide()
}),
$(window).on("scroll", function() {
    "" == $("#vkr").val() && ($(".lazym").each(function(e) {
        var t = $(this).attr("data-src");
        $(this).attr("src", t),
        $(this).removeAttr("data-src")
    }),
    $(".home-banner").addClass("bg"),
    $(".face-icon").addClass("ico"),
    $(".tweet-icon").addClass("ico"),
    $(".insta-icon").addClass("ico"),
    $(".more-icon").addClass("ico"),
    $(".linkedin-icon").addClass("ico"),
    $(".youtube-icon").addClass("ico"),
    $(".gtm-footer-cta").addClass("bg"),
    $("video").trigger("load"),
    $("#vkr").val("1"))
});

function setButtonURL() {

    $zopim.livechat.window.toggle();

}

// $(document).ready(function() {

//     $('form').attr('action', 'mail.php');

//     $('form').attr('method', 'POST');

//     $('input[name="name"]').attr('name', 'c_name');

//     $('input[name="email"]').attr('name', 'c_email');

//     $('input[name="phone"]').attr('name', 'c_phone');

//     $('textarea[name="customers_meta[description]"]').attr('name', 'c_message');

// });

// $("form").submit(function(e) {

//     $('form').removeClass('crnt_Frm_sbmt');

//     $(this).addClass('crnt_Frm_sbmt');

//     var frm = $(this);

//     e.preventDefault();

//     $.ajax({

//         type: frm.attr('method'),

//         url: frm.attr('action'),

//         data: frm.serialize(),

//         success: function(data) {

//             console.log('Submission was successful.');

//             window.location.href = "https://professionalwebexperts.com/thankyou/";

//         },

//         error: function(data) {

//             console.log('An error occurred.');

//             window.location.href = "https://professionalwebexperts.com/thankyou/";

//         },

//     });

// });

$(".pricing_plan--item").each(function(index) {

    pkg_titl = $(this).find('h2').html().trim();

    $(this).find('a.order-package').attr('href', 'https://professionalwebexperts.com/getstarted.html?package=' + pkg_titl + '');

});

$(document).ready(function() {

    $(".mytabbing-links").wrap("<div class='lnks_wrpr'></div>");

});

$("span.hide-for-medium-only a:first-child").attr("href", "https://www.facebook.com/professionalwebexperts/");
$("span.hide-for-medium-only a:nth-child(2)").attr("href", "https://www.instagram.com/professional.web.experts/");
$("span.hide-for-medium-only a:nth-child(3)").attr("href", "https://twitter.com/PWEsofficial");
