jQuery(".aem-GridColumn").addClass("section");
/*!
* jQuery Cookie Plugin v1.4.1
* https://github.com/carhartl/jquery-cookie
*
* Copyright 2013 Klaus Hartl
* Released under the MIT license
*/
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        if (typeof exports === "object") {
            a(require("jquery"))
        } else {
            a(jQuery)
        }
    }
}(function(f) {
    var a = /\+/g;
    function d(j) {
        return b.raw ? j : encodeURIComponent(j)
    }
    function g(j) {
        return b.raw ? j : decodeURIComponent(j)
    }
    function h(j) {
        return d(b.json ? JSON.stringify(j) : String(j))
    }
    function c(j) {
        if (j.indexOf('"') === 0) {
            j = j.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            j = decodeURIComponent(j.replace(a, " "));
            return b.json ? JSON.parse(j) : j
        } catch (k) {}
    }
    function e(k, j) {
        var l = b.raw ? k : c(k);
        return f.isFunction(j) ? j(l) : l
    }
    var b = f.cookie = function(q, p, v) {
        if (p !== undefined && !f.isFunction(p)) {
            v = f.extend({}, b.defaults, v);
            if (typeof v.expires === "number") {
                var r = v.expires
                  , u = v.expires = new Date();
                u.setTime(+u + r * 86400000)
            }
            return (document.cookie = [d(q), "=", h(p), v.expires ? "; expires=" + v.expires.toUTCString() : "", v.path ? "; path=" + v.path : "", v.domain ? "; domain=" + v.domain : "", v.secure ? "; secure" : ""].join(""))
        }
        var w = q ? undefined : {};
        var s = document.cookie ? document.cookie.split("; ") : [];
        for (var o = 0, m = s.length; o < m; o++) {
            var n = s[o].split("=");
            var j = g(n.shift());
            var k = n.join("=");
            if (q && q === j) {
                w = e(k, p);
                break
            }
            if (!q && (k = e(k)) !== undefined) {
                w[j] = k
            }
        }
        return w
    }
    ;
    b.defaults = {};
    f.removeCookie = function(k, j) {
        if (f.cookie(k) === undefined) {
            return false
        }
        f.cookie(k, "", f.extend({}, j, {
            expires: -1
        }));
        return !f.cookie(k)
    }
}));
new function(e) {
    var d = e.separator || "&";
    var c = e.spaces === false ? false : true;
    var a = e.suffix === false ? "" : "[]";
    var g = e.prefix === false ? false : true;
    var b = g ? e.hash === true ? "#" : "?" : "";
    var f = e.numbers === false ? false : true;
    jQuery.query = new function() {
        var h = function(n, m) {
            return n != undefined && n !== null && (!!m ? n.constructor == m : true)
        };
        var j = function(s) {
            var n, r = /\[([^[]*)\]/g, o = /^([^[]+)(\[.*\])?$/.exec(s), p = o[1], q = [];
            while (n = r.exec(o[2])) {
                q.push(n[1])
            }
            return [p, q]
        };
        var l = function(t, s, r) {
            var u, q = s.shift();
            if (typeof t != "object") {
                t = null
            }
            if (q === "") {
                if (!t) {
                    t = []
                }
                if (h(t, Array)) {
                    t.push(s.length == 0 ? r : l(null, s.slice(0), r))
                } else {
                    if (h(t, Object)) {
                        var p = 0;
                        while (t[p++] != null) {}
                        t[--p] = s.length == 0 ? r : l(t[p], s.slice(0), r)
                    } else {
                        t = [];
                        t.push(s.length == 0 ? r : l(null, s.slice(0), r))
                    }
                }
            } else {
                if (q && q.match(/^\s*[0-9]+\s*$/)) {
                    var n = parseInt(q, 10);
                    if (!t) {
                        t = []
                    }
                    t[n] = s.length == 0 ? r : l(t[n], s.slice(0), r)
                } else {
                    if (q) {
                        var n = q.replace(/^\s*|\s*$/g, "");
                        if (!t) {
                            t = {}
                        }
                        if (h(t, Array)) {
                            var m = {};
                            for (var p = 0; p < t.length; ++p) {
                                m[p] = t[p]
                            }
                            t = m
                        }
                        t[n] = s.length == 0 ? r : l(t[n], s.slice(0), r)
                    } else {
                        return r
                    }
                }
            }
            return t
        };
        var k = function(m) {
            var n = this;
            n.keys = {};
            if (m.queryObject) {
                jQuery.each(m.get(), function(o, p) {
                    n.SET(o, p)
                })
            } else {
                n.parseNew.apply(n, arguments)
            }
            return n
        };
        k.prototype = {
            queryObject: true,
            parseNew: function() {
                var m = this;
                m.keys = {};
                jQuery.each(arguments, function() {
                    var n = "" + this;
                    n = n.replace(/^[?#]/, "");
                    n = n.replace(/[;&]$/, "");
                    if (c) {
                        n = n.replace(/[+]/g, " ")
                    }
                    jQuery.each(n.split(/[&;]/), function() {
                        var o = decodeURIComponent(this.split("=")[0] || "");
                        var p = decodeURIComponent(this.split("=")[1] || "");
                        if (!o) {
                            return
                        }
                        if (f) {
                            if (/^[+-]?[0-9]+\.[0-9]*$/.test(p)) {
                                p = parseFloat(p)
                            } else {
                                if (/^[+-]?[1-9][0-9]*$/.test(p)) {
                                    p = parseInt(p, 10)
                                }
                            }
                        }
                        p = (!p && p !== 0) ? true : p;
                        m.SET(o, p)
                    })
                });
                return m
            },
            has: function(m, n) {
                var o = this.get(m);
                return h(o, n)
            },
            GET: function(n) {
                if (!h(n)) {
                    return this.keys
                }
                var m = j(n)
                  , o = m[0]
                  , q = m[1];
                var p = this.keys[o];
                while (p != null && q.length != 0) {
                    p = p[q.shift()]
                }
                return typeof p == "number" ? p : p || ""
            },
            get: function(m) {
                var n = this.GET(m);
                if (h(n, Object)) {
                    return jQuery.extend(true, {}, n)
                } else {
                    if (h(n, Array)) {
                        return n.slice(0)
                    }
                }
                return n
            },
            SET: function(n, s) {
                var p = !h(s) ? null : s;
                var m = j(n)
                  , o = m[0]
                  , r = m[1];
                var q = this.keys[o];
                this.keys[o] = l(q, r.slice(0), p);
                return this
            },
            set: function(m, n) {
                return this.copy().SET(m, n)
            },
            REMOVE: function(n, p) {
                if (p) {
                    var o = this.GET(n);
                    if (h(o, Array)) {
                        for (tval in o) {
                            o[tval] = o[tval].toString()
                        }
                        var m = $.inArray(p, o);
                        if (m >= 0) {
                            n = o.splice(m, 1);
                            n = n[m]
                        } else {
                            return
                        }
                    } else {
                        if (p != o) {
                            return
                        }
                    }
                }
                return this.SET(n, null).COMPACT()
            },
            remove: function(m, n) {
                return this.copy().REMOVE(m, n)
            },
            EMPTY: function() {
                var m = this;
                jQuery.each(m.keys, function(n, o) {
                    delete m.keys[n]
                });
                return m
            },
            load: function(m) {
                var o = m.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1");
                var n = m.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new k(m.length == n.length ? "" : n,m.length == o.length ? "" : o)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new k(this)
            },
            COMPACT: function() {
                function m(p) {
                    var o = typeof p == "object" ? h(p, Array) ? [] : {} : p;
                    if (typeof p == "object") {
                        function n(s, q, r) {
                            if (h(s, Array)) {
                                s.push(r)
                            } else {
                                s[q] = r
                            }
                        }
                        jQuery.each(p, function(q, r) {
                            if (!h(r)) {
                                return true
                            }
                            n(o, q, m(r))
                        })
                    }
                    return o
                }
                this.keys = m(this.keys);
                return this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var o = 0
                  , s = []
                  , r = []
                  , n = this;
                var p = function(t) {
                    t = t + "";
                    t = encodeURIComponent(t);
                    if (c) {
                        t = t.replace(/%20/g, "+")
                    }
                    return t
                };
                var m = function(t, u, v) {
                    if (!h(v) || v === false) {
                        return
                    }
                    var w = [p(u)];
                    if (v !== true) {
                        w.push("=");
                        w.push(p(v))
                    }
                    t.push(w.join(""))
                };
                var q = function(u, t) {
                    var v = function(w) {
                        return !t || t == "" ? [w].join("") : [t, "[", w, "]"].join("")
                    };
                    jQuery.each(u, function(w, x) {
                        if (typeof x == "object") {
                            q(x, v(w))
                        } else {
                            m(r, v(w), x)
                        }
                    })
                };
                q(this.keys);
                if (r.length > 0) {
                    s.push(b)
                }
                s.push(r.join(d));
                return s.join("")
            }
        };
        return new k(location.search,location.hash)
    }
}
(jQuery.query || {});
!function(t, e, n, o) {
    "use strict";
    function i(t) {
        var e = t.currentTarget
          , o = t.data ? t.data.options : {}
          , i = o.selector ? n(o.selector) : t.data ? t.data.items : []
          , a = n(e).attr("data-fancybox") || ""
          , s = 0
          , r = n.fancybox.getInstance();
        t.preventDefault(),
        t.stopPropagation(),
        r && r.current.opts.$orig.is(e) || (a ? (i = i.length ? i.filter('[data-fancybox="' + a + '"]') : n('[data-fancybox="' + a + '"]'),
        s = i.index(e),
        s < 0 && (s = 0)) : i = [e],
        n.fancybox.open(i, o, s))
    }
    if (n) {
        if (n.fn.fancybox)
            return void n.error("fancyBox already initialized");
        var a = {
            loop: !1,
            margin: [44, 0],
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !1,
            toolbar: !0,
            buttons: ["slideShow", "fullScreen", "thumbs", "close"],
            idleTime: 4,
            smallBtn: "auto",
            protect: !1,
            modal: !1,
            image: {
                preload: "auto"
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
            },
            parentEl: "body",
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0
            },
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls"
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "ZurÃ¼ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es spÃ¤ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder"
                }
            }
        }
          , s = n(t)
          , r = n(e)
          , c = 0
          , l = function(t) {
            return t && t.hasOwnProperty && t instanceof n
        }
          , u = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                return t.setTimeout(e, 1e3 / 60)
            }
        }()
          , d = function() {
            var t, n = e.createElement("fakeelement"), i = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in i)
                if (n.style[t] !== o)
                    return i[t]
        }()
          , f = function(t) {
            return t && t.length && t[0].offsetHeight
        }
          , h = function(t, o, i) {
            var s = this;
            s.opts = n.extend(!0, {
                index: i
            }, a, o || {}),
            o && n.isArray(o.buttons) && (s.opts.buttons = o.buttons),
            s.id = s.opts.id || ++c,
            s.group = [],
            s.currIndex = parseInt(s.opts.index, 10) || 0,
            s.prevIndex = null,
            s.prevPos = null,
            s.currPos = 0,
            s.firstRun = null,
            s.createGroup(t),
            s.group.length && (s.$lastFocus = n(e.activeElement).blur(),
            s.slides = {},
            s.init(t))
        };
        n.extend(h.prototype, {
            init: function() {
                var t, e, o, i = this, a = i.group[i.currIndex].opts;
                i.scrollTop = r.scrollTop(),
                i.scrollLeft = r.scrollLeft(),
                n.fancybox.getInstance() || n.fancybox.isMobile || "hidden" === n("body").css("overflow") || (t = n("body").width(),
                n("html").addClass("fancybox-enabled"),
                t = n("body").width() - t,
                t > 1 && n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")),
                o = "",
                n.each(a.buttons, function(t, e) {
                    o += a.btnTpl[e] || ""
                }),
                e = n(i.translate(i, a.baseTpl.replace("{{BUTTONS}}", o))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(a.baseClass).data("FancyBox", i).prependTo(a.parentEl),
                i.$refs = {
                    container: e
                },
                ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
                    i.$refs[t] = e.find(".fancybox-" + t)
                }),
                (!a.arrows || i.group.length < 2) && e.find(".fancybox-navigation").remove(),
                a.infobar || i.$refs.infobar.remove(),
                a.toolbar || i.$refs.toolbar.remove(),
                i.trigger("onInit"),
                i.activate(),
                i.jumpTo(i.currIndex)
            },
            translate: function(t, e) {
                var n = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var i = n[e];
                    return i === o ? t : i
                })
            },
            createGroup: function(t) {
                var e = this
                  , i = n.makeArray(t);
                n.each(i, function(t, i) {
                    var a, s, r, c, l = {}, u = {}, d = [];
                    n.isPlainObject(i) ? (l = i,
                    u = i.opts || i) : "object" === n.type(i) && n(i).length ? (a = n(i),
                    d = a.data(),
                    u = "options"in d ? d.options : {},
                    u = "object" === n.type(u) ? u : {},
                    l.src = "src"in d ? d.src : u.src || a.attr("href"),
                    ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
                        t in d && (u[t] = d[t])
                    }),
                    "srcset"in d && (u.image = {
                        srcset: d.srcset
                    }),
                    u.$orig = a,
                    l.type || l.src || (l.type = "inline",
                    l.src = i)) : l = {
                        type: "html",
                        src: i + ""
                    },
                    l.opts = n.extend(!0, {}, e.opts, u),
                    n.fancybox.isMobile && (l.opts = n.extend(!0, {}, l.opts, l.opts.mobile)),
                    s = l.type || l.opts.type,
                    r = l.src || "",
                    !s && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? s = "pdf" : "#" === r.charAt(0) && (s = "inline")),
                    l.type = s,
                    l.index = e.group.length,
                    l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig,
                    !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")),
                    l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb,
                    "function" === n.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(i, [e, l]) : "caption"in d && (l.opts.caption = d.caption),
                    l.opts.caption = l.opts.caption === o ? "" : l.opts.caption + "",
                    "ajax" === s && (c = r.split(/\s+/, 2),
                    c.length > 1 && (l.src = c.shift(),
                    l.opts.filter = c.shift())),
                    "auto" == l.opts.smallBtn && (n.inArray(s, ["html", "inline", "ajax"]) > -1 ? (l.opts.toolbar = !1,
                    l.opts.smallBtn = !0) : l.opts.smallBtn = !1),
                    "pdf" === s && (l.type = "iframe",
                    l.opts.iframe.preload = !1),
                    l.opts.modal && (l.opts = n.extend(!0, l.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })),
                    e.group.push(l)
                })
            },
            addEvents: function() {
                var o = this;
                o.removeEvents(),
                o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.close(t)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    o.next()
                }),
                s.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? u(function() {
                        o.update()
                    }) : (o.$refs.stage.hide(),
                    setTimeout(function() {
                        o.$refs.stage.show(),
                        o.update()
                    }, 500))
                }),
                r.on("focusin.fb", function(t) {
                    var i = n.fancybox ? n.fancybox.getInstance() : null;
                    i.isClosing || !i.current || !i.current.opts.trapFocus || n(t.target).hasClass("fancybox-container") || n(t.target).is(e) || i && "fixed" !== n(t.target).css("position") && !i.$refs.container.has(t.target).length && (t.stopPropagation(),
                    i.focus(),
                    s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))
                }),
                r.on("keydown.fb", function(t) {
                    var e = o.current
                      , i = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !n(t.target).is("input") && !n(t.target).is("textarea"))
                        return 8 === i || 27 === i ? (t.preventDefault(),
                        void o.close(t)) : 37 === i || 38 === i ? (t.preventDefault(),
                        void o.previous()) : 39 === i || 40 === i ? (t.preventDefault(),
                        void o.next()) : void o.trigger("afterKeydown", t, i)
                }),
                o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0,
                r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    o.idleSecondsCounter = 0,
                    o.isIdle && o.showControls(),
                    o.isIdle = !1
                }),
                o.idleInterval = t.setInterval(function() {
                    o.idleSecondsCounter++,
                    o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && (o.isIdle = !0,
                    o.idleSecondsCounter = 0,
                    o.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                var e = this;
                s.off("orientationchange.fb resize.fb"),
                r.off("focusin.fb keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                e.idleInterval && (t.clearInterval(e.idleInterval),
                e.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, e, i) {
                var a, s, r, c, l, u, d, h = this, p = h.group.length;
                if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {
                    if (t = parseInt(t, 10),
                    s = h.current ? h.current.opts.loop : h.opts.loop,
                    !s && (t < 0 || t >= p))
                        return !1;
                    if (a = h.firstRun = null === h.firstRun,
                    !(p < 2 && !a && h.isSliding)) {
                        if (c = h.current,
                        h.prevIndex = h.currIndex,
                        h.prevPos = h.currPos,
                        r = h.createSlide(t),
                        p > 1 && ((s || r.index > 0) && h.createSlide(t - 1),
                        (s || r.index < p - 1) && h.createSlide(t + 1)),
                        h.current = r,
                        h.currIndex = r.index,
                        h.currPos = r.pos,
                        h.trigger("beforeShow", a),
                        h.updateControls(),
                        u = n.fancybox.getTranslate(r.$slide),
                        r.isMoved = (0 !== u.left || 0 !== u.top) && !r.$slide.hasClass("fancybox-animated"),
                        r.forcedDuration = o,
                        n.isNumeric(e) ? r.forcedDuration = e : e = r.opts[a ? "animationDuration" : "transitionDuration"],
                        e = parseInt(e, 10),
                        a)
                            return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"),
                            h.$refs.container.removeClass("fancybox-is-hidden"),
                            f(h.$refs.container),
                            h.$refs.container.addClass("fancybox-is-open"),
                            r.$slide.addClass("fancybox-slide--current"),
                            h.loadSlide(r),
                            void h.preload();
                        n.each(h.slides, function(t, e) {
                            n.fancybox.stop(e.$slide)
                        }),
                        r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),
                        r.isMoved ? (l = Math.round(r.$slide.width()),
                        n.each(h.slides, function(t, o) {
                            var i = o.pos - r.pos;
                            n.fancybox.animate(o.$slide, {
                                top: 0,
                                left: i * l + i * o.opts.gutter
                            }, e, function() {
                                o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),
                                o.pos === h.currPos && (r.isMoved = !1,
                                h.complete())
                            })
                        })) : h.$refs.stage.children().removeAttr("style"),
                        r.isLoaded ? h.revealContent(r) : h.loadSlide(r),
                        h.preload(),
                        c.pos !== r.pos && (d = "fancybox-slide--" + (c.pos > r.pos ? "next" : "previous"),
                        c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),
                        c.isComplete = !1,
                        e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? c.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect,
                        n.fancybox.animate(c.$slide, d, e, function() {
                            c.$slide.removeClass(d).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, o, i = this;
                return o = t % i.group.length,
                o = o < 0 ? i.group.length + o : o,
                !i.slides[t] && i.group[o] && (e = n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),
                i.slides[t] = n.extend(!0, {}, i.group[o], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }),
                i.updateSlide(i.slides[t])),
                i.slides[t]
            },
            scaleToActual: function(t, e, i) {
                var a, s, r, c, l, u = this, d = u.current, f = d.$content, h = parseInt(d.$slide.width(), 10), p = parseInt(d.$slide.height(), 10), g = d.width, b = d.height;
                "image" != d.type || d.hasError || !f || u.isAnimating || (n.fancybox.stop(f),
                u.isAnimating = !0,
                t = t === o ? .5 * h : t,
                e = e === o ? .5 * p : e,
                a = n.fancybox.getTranslate(f),
                c = g / a.width,
                l = b / a.height,
                s = .5 * h - .5 * g,
                r = .5 * p - .5 * b,
                g > h && (s = a.left * c - (t * c - t),
                s > 0 && (s = 0),
                s < h - g && (s = h - g)),
                b > p && (r = a.top * l - (e * l - e),
                r > 0 && (r = 0),
                r < p - b && (r = p - b)),
                u.updateCursor(g, b),
                n.fancybox.animate(f, {
                    top: r,
                    left: s,
                    scaleX: c,
                    scaleY: l
                }, i || 330, function() {
                    u.isAnimating = !1
                }),
                u.SlideShow && u.SlideShow.isActive && u.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, o = this, i = o.current, a = i.$content;
                "image" != i.type || i.hasError || !a || o.isAnimating || (n.fancybox.stop(a),
                o.isAnimating = !0,
                e = o.getFitPos(i),
                o.updateCursor(e.width, e.height),
                n.fancybox.animate(a, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / a.width(),
                    scaleY: e.height / a.height()
                }, t || 330, function() {
                    o.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, o, i, a, r, c = this, l = t.$content, u = t.width, d = t.height, f = t.opts.margin;
                return !(!l || !l.length || !u && !d) && ("number" === n.type(f) && (f = [f, f]),
                2 == f.length && (f = [f[0], f[1], f[0], f[1]]),
                s.width() < 800 && (f = [0, 0, 0, 0]),
                e = parseInt(c.$refs.stage.width(), 10) - (f[1] + f[3]),
                o = parseInt(c.$refs.stage.height(), 10) - (f[0] + f[2]),
                i = Math.min(1, e / u, o / d),
                a = Math.floor(i * u),
                r = Math.floor(i * d),
                {
                    top: Math.floor(.5 * (o - r)) + f[0],
                    left: Math.floor(.5 * (e - a)) + f[3],
                    width: a,
                    height: r
                })
            },
            update: function() {
                var t = this;
                n.each(t.slides, function(e, n) {
                    t.updateSlide(n)
                })
            },
            updateSlide: function(t) {
                var e = this
                  , o = t.$content;
                o && (t.width || t.height) && (n.fancybox.stop(o),
                n.fancybox.setTranslate(o, e.getFitPos(t)),
                t.pos === e.currPos && e.updateCursor()),
                t.$slide.trigger("refresh"),
                e.trigger("onUpdate", t)
            },
            updateCursor: function(t, e) {
                var n, i = this, a = i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                i.current && !i.isClosing && (i.isZoomable() ? (a.addClass("fancybox-is-zoomable"),
                n = t !== o && e !== o ? t < i.current.width && e < i.current.height : i.isScaledDown(),
                n ? a.addClass("fancybox-can-zoomIn") : i.current.opts.touch ? a.addClass("fancybox-can-drag") : a.addClass("fancybox-can-zoomOut")) : i.current.opts.touch && a.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this, o = e.current;
                if (o && !e.isClosing)
                    return !!("image" === o.type && o.isLoaded && !o.hasError && ("zoom" === o.opts.clickContent || n.isFunction(o.opts.clickContent) && "zoom" === o.opts.clickContent(o)) && (t = e.getFitPos(o),
                    o.width > t.width || o.height > t.height))
            },
            isScaledDown: function() {
                var t = this
                  , e = t.current
                  , o = e.$content
                  , i = !1;
                return o && (i = n.fancybox.getTranslate(o),
                i = i.width < e.width || i.height < e.height),
                i
            },
            canPan: function() {
                var t = this
                  , e = t.current
                  , n = e.$content
                  , o = !1;
                return n && (o = t.getFitPos(e),
                o = Math.abs(n.width() - o.width) > 1 || Math.abs(n.height() - o.height) > 1),
                o
            },
            loadSlide: function(t) {
                var e, o, i, a = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0,
                    a.trigger("beforeLoad", t),
                    e = t.type,
                    o = t.$slide,
                    o.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass),
                    e) {
                    case "image":
                        a.setImage(t);
                        break;
                    case "iframe":
                        a.setIframe(t);
                        break;
                    case "html":
                        a.setContent(t, t.src || t.content);
                        break;
                    case "inline":
                        n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
                        break;
                    case "ajax":
                        a.showLoading(t),
                        i = n.ajax(n.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, n) {
                                "success" === n && a.setContent(t, e)
                            },
                            error: function(e, n) {
                                e && "abort" !== n && a.setError(t)
                            }
                        })),
                        o.one("onReset", function() {
                            i.abort()
                        });
                        break;
                    default:
                        a.setError(t)
                    }
                    return !0
                }
            },
            setImage: function(e) {
                var o, i, a, s, r = this, c = e.opts.image.srcset;
                if (c) {
                    a = t.devicePixelRatio || 1,
                    s = t.innerWidth * a,
                    i = c.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, n) {
                            var o = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === n ? e.url = t : void (o && (e.value = o,
                            e.postfix = t[t.length - 1]))
                        }),
                        e
                    }),
                    i.sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var l = 0; l < i.length; l++) {
                        var u = i[l];
                        if ("w" === u.postfix && u.value >= s || "x" === u.postfix && u.value >= a) {
                            o = u;
                            break
                        }
                    }
                    !o && i.length && (o = i[i.length - 1]),
                    o && (e.src = o.url,
                    e.width && e.height && "w" == o.postfix && (e.height = e.width / e.height * o.value,
                    e.width = o.value))
                }
                e.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),
                e.opts.preload !== !1 && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width,
                e.height = e.opts.height,
                e.$ghost = n("<img />").one("error", function() {
                    n(this).remove(),
                    e.$ghost = null,
                    r.setBigImage(e)
                }).one("load", function() {
                    r.afterLoad(e),
                    r.setBigImage(e)
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : r.setBigImage(e)
            },
            setBigImage: function(t) {
                var e = this
                  , o = n("<img />");
                t.$image = o.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    clearTimeout(t.timouts),
                    t.timouts = null,
                    e.isClosing || (t.width = this.naturalWidth,
                    t.height = this.naturalHeight,
                    t.opts.image.srcset && o.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset),
                    e.hideLoading(t),
                    t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null,
                        t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content),
                o[0].complete ? o.trigger("load") : o[0].error ? o.trigger("error") : t.timouts = setTimeout(function() {
                    o[0].complete || t.hasError || e.showLoading(t)
                }, 100)
            },
            setIframe: function(t) {
                var e, i = this, a = t.opts.iframe, s = t.$slide;
                t.$content = n('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(s),
                e = n(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(t.$content),
                a.preload ? (i.showLoading(t),
                e.on("load.fb error.fb", function(e) {
                    this.isReady = 1,
                    t.$slide.trigger("refresh"),
                    i.afterLoad(t)
                }),
                s.on("refresh.fb", function() {
                    var n, i, s, r, c, l = t.$content;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents(),
                            i = n.find("body")
                        } catch (t) {}
                        i && i.length && (a.css.width === o || a.css.height === o) && (s = e[0].contentWindow.document.documentElement.scrollWidth,
                        r = Math.ceil(i.outerWidth(!0) + (l.width() - s)),
                        c = Math.ceil(i.outerHeight(!0)),
                        l.css({
                            width: a.css.width === o ? r + (l.outerWidth() - l.innerWidth()) : a.css.width,
                            height: a.css.height === o ? c + (l.outerHeight() - l.innerHeight()) : a.css.height
                        })),
                        l.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(t),
                e.attr("src", t.src),
                t.opts.smallBtn === !0 && t.$content.prepend(i.translate(t, t.opts.btnTpl.smallBtn)),
                s.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    n(this).empty(),
                    t.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                var o = this;
                o.isClosing || (o.hideLoading(t),
                t.$slide.empty(),
                l(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"),
                t.$placeholder = n("<div></div>").hide().insertAfter(e),
                e.css("display", "inline-block")) : t.hasError || ("string" === n.type(e) && (e = n("<div>").append(n.trim(e)).contents(),
                3 === e[0].nodeType && (e = n("<div>").html(e))),
                t.opts.filter && (e = n("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function() {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(),
                    t.$placeholder = null),
                    t.$smallBtn && (t.$smallBtn.remove(),
                    t.$smallBtn = null),
                    t.hasError || (n(this).empty(),
                    t.isLoaded = !1)
                }),
                t.$content = n(e).appendTo(t.$slide),
                t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = n(o.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)),
                this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0,
                t.$slide.removeClass("fancybox-slide--" + t.type),
                this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && !t.$spinner && (t.$spinner = n(e.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                var e = this;
                t = t || e.current,
                t && t.$spinner && (t.$spinner.remove(),
                delete t.$spinner)
            },
            afterLoad: function(t) {
                var e = this;
                e.isClosing || (t.isLoading = !1,
                t.isLoaded = !0,
                e.trigger("afterLoad", t),
                e.hideLoading(t),
                t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(),
                    !0
                }),
                "image" === t.type && n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
                e.revealContent(t))
            },
            revealContent: function(t) {
                var e, i, a, s, r, c = this, l = t.$slide, u = !1;
                return e = t.opts[c.firstRun ? "animationEffect" : "transitionEffect"],
                a = t.opts[c.firstRun ? "animationDuration" : "transitionDuration"],
                a = parseInt(t.forcedDuration === o ? a : t.forcedDuration, 10),
                !t.isMoved && t.pos === c.currPos && a || (e = !1),
                "zoom" !== e || t.pos === c.currPos && a && "image" === t.type && !t.hasError && (u = c.getThumbPos(t)) || (e = "fade"),
                "zoom" === e ? (r = c.getFitPos(t),
                r.scaleX = r.width / u.width,
                r.scaleY = r.height / u.height,
                delete r.width,
                delete r.height,
                s = t.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(t.width / t.height - u.width / u.height) > .1),
                s && (u.opacity = .1,
                r.opacity = 1),
                n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), u),
                f(t.$content),
                void n.fancybox.animate(t.$content, r, a, function() {
                    c.complete()
                })) : (c.updateSlide(t),
                e ? (n.fancybox.stop(l),
                i = "fancybox-animated fancybox-slide--" + (t.pos > c.prevPos ? "next" : "previous") + " fancybox-fx-" + e,
                l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),
                t.$content.removeClass("fancybox-is-hidden"),
                f(l),
                void n.fancybox.animate(l, "fancybox-slide--current", a, function(e) {
                    l.removeClass(i).removeAttr("style"),
                    t.pos === c.currPos && c.complete()
                }, !0)) : (f(l),
                t.$content.removeClass("fancybox-is-hidden"),
                void (t.pos === c.currPos && c.complete())))
            },
            getThumbPos: function(o) {
                var i, a = this, s = !1, r = function(e) {
                    for (var o, i = e[0], a = i.getBoundingClientRect(), s = []; null !== i.parentElement; )
                        "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()),
                        i = i.parentElement;
                    return o = s.every(function(t) {
                        var e = Math.min(a.right, t.right) - Math.max(a.left, t.left)
                          , n = Math.min(a.bottom, t.bottom) - Math.max(a.top, t.top);
                        return e > 0 && n > 0
                    }),
                    o && a.bottom > 0 && a.right > 0 && a.left < n(t).width() && a.top < n(t).height()
                }, c = o.opts.$thumb, l = c ? c.offset() : 0;
                return l && c[0].ownerDocument === e && r(c) && (i = a.$refs.stage.offset(),
                s = {
                    top: l.top - i.top + parseFloat(c.css("border-top-width") || 0),
                    left: l.left - i.left + parseFloat(c.css("border-left-width") || 0),
                    width: c.width(),
                    height: c.height(),
                    scaleX: 1,
                    scaleY: 1
                }),
                s
            },
            complete: function() {
                var t = this
                  , o = t.current
                  , i = {};
                o.isMoved || !o.isLoaded || o.isComplete || (o.isComplete = !0,
                o.$slide.siblings().trigger("onReset"),
                f(o.$slide),
                o.$slide.addClass("fancybox-slide--complete"),
                n.each(t.slides, function(e, o) {
                    o.pos >= t.currPos - 1 && o.pos <= t.currPos + 1 ? i[o.pos] = o : o && (n.fancybox.stop(o.$slide),
                    o.$slide.unbind().remove())
                }),
                t.slides = i,
                t.updateCursor(),
                t.trigger("afterShow"),
                (n(e.activeElement).is("[disabled]") || o.opts.autoFocus && "image" != o.type && "iframe" !== o.type) && t.focus())
            },
            preload: function() {
                var t, e, n = this;
                n.group.length < 2 || (t = n.slides[n.currPos + 1],
                e = n.slides[n.currPos - 1],
                t && "image" === t.type && n.loadSlide(t),
                e && "image" === e.type && n.loadSlide(e))
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null,
                t = t && t.length ? t : this.$refs.container,
                t.focus())
            },
            activate: function() {
                var t = this;
                n(".fancybox-container").each(function() {
                    var e = n(this).data("FancyBox");
                    e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate")
                }),
                t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body),
                t.updateControls()),
                t.trigger("onActivate"),
                t.addEvents()
            },
            close: function(t, e) {
                var o, i, a, s, r, c, l = this, f = l.current, h = function() {
                    l.cleanUp(t)
                };
                return !l.isClosing && (l.isClosing = !0,
                l.trigger("beforeClose", t) === !1 ? (l.isClosing = !1,
                u(function() {
                    l.update()
                }),
                !1) : (l.removeEvents(),
                f.timouts && clearTimeout(f.timouts),
                a = f.$content,
                o = f.opts.animationEffect,
                i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0,
                f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),
                f.$slide.siblings().trigger("onReset").remove(),
                i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),
                l.hideLoading(f),
                l.hideControls(),
                l.updateCursor(),
                "zoom" !== o || t !== !0 && a && i && "image" === f.type && !f.hasError && (c = l.getThumbPos(f)) || (o = "fade"),
                "zoom" === o ? (n.fancybox.stop(a),
                r = n.fancybox.getTranslate(a),
                r.width = r.width * r.scaleX,
                r.height = r.height * r.scaleY,
                s = f.opts.zoomOpacity,
                "auto" == s && (s = Math.abs(f.width / f.height - c.width / c.height) > .1),
                s && (c.opacity = 0),
                r.scaleX = r.width / c.width,
                r.scaleY = r.height / c.height,
                r.width = c.width,
                r.height = c.height,
                n.fancybox.setTranslate(f.$content, r),
                n.fancybox.animate(f.$content, c, i, h),
                !0) : (o && i ? t === !0 ? setTimeout(h, i) : n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + o, i, h) : h(),
                !0)))
            },
            cleanUp: function(t) {
                var e, o = this;
                o.current.$slide.trigger("onReset"),
                o.$refs.container.empty().remove(),
                o.trigger("afterClose", t),
                o.$lastFocus && o.current.opts.backFocus && o.$lastFocus.focus(),
                o.current = null,
                e = n.fancybox.getInstance(),
                e ? e.activate() : (s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),
                n("html").removeClass("fancybox-enabled"),
                n("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var o, i = Array.prototype.slice.call(arguments, 1), a = this, s = e && e.opts ? e : a.current;
                return s ? i.unshift(s) : s = a,
                i.unshift(a),
                n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
                o === !1 ? o : void ("afterClose" === t ? r.trigger(t + ".fb", i) : a.$refs.container.trigger(t + ".fb", i))
            },
            updateControls: function(t) {
                var e = this
                  , o = e.current
                  , i = o.index
                  , a = o.opts
                  , s = a.caption
                  , r = e.$refs.caption;
                o.$slide.trigger("refresh"),
                e.$caption = s && s.length ? r.html(s) : null,
                e.isHiddenControls || e.showControls(),
                n("[data-fancybox-count]").html(e.group.length),
                n("[data-fancybox-index]").html(i + 1),
                n("[data-fancybox-prev]").prop("disabled", !a.loop && i <= 0),
                n("[data-fancybox-next]").prop("disabled", !a.loop && i >= e.group.length - 1)
            },
            hideControls: function() {
                this.isHiddenControls = !0,
                this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this
                  , e = t.current ? t.current.opts : t.opts
                  , n = t.$refs.container;
                t.isHiddenControls = !1,
                t.idleSecondsCounter = 0,
                n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal),
                t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }),
        n.fancybox = {
            version: "3.1.24",
            defaults: a,
            getInstance: function(t) {
                var e = n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox")
                  , o = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === n.type(t) ? e[t].apply(e, o) : "function" === n.type(t) && t.apply(e, o),
                e)
            },
            open: function(t, e, n) {
                return new h(t,e,n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(),
                t === !0 && this.close())
            },
            destroy: function() {
                this.close(!0),
                r.off("click.fb-start")
            },
            isMobile: e.createTouch !== o && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: function() {
                var n = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(n).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length)
                    return !1;
                if (e = t.eq(0).css("transform"),
                e && e.indexOf("matrix") !== -1 ? (e = e.split("(")[1],
                e = e.split(")")[0],
                e = e.split(",")) : e = [],
                e.length)
                    e = e.length > 10 ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]],
                    e = e.map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i
                      , o = n.exec(t.eq(0).attr("style"));
                    o && (e[0] = parseFloat(o[2]),
                    e[1] = parseFloat(o[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function(t, e) {
                var n = ""
                  , i = {};
                if (t && e)
                    return e.left === o && e.top === o || (n = (e.left === o ? t.position().left : e.left) + "px, " + (e.top === o ? t.position().top : e.top) + "px",
                    n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"),
                    e.scaleX !== o && e.scaleY !== o && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"),
                    n.length && (i.transform = n),
                    e.opacity !== o && (i.opacity = e.opacity),
                    e.width !== o && (i.width = e.width),
                    e.height !== o && (i.height = e.height),
                    t.css(i)
            },
            animate: function(t, e, i, a, s) {
                var r = d || "transitionend";
                n.isFunction(i) && (a = i,
                i = null),
                n.isPlainObject(e) || t.removeAttr("style"),
                t.on(r, function(i) {
                    (!i || !i.originalEvent || t.is(i.originalEvent.target) && "z-index" != i.originalEvent.propertyName) && (t.off(r),
                    n.isPlainObject(e) ? e.scaleX !== o && e.scaleY !== o && (t.css("transition-duration", "0ms"),
                    e.width = Math.round(t.width() * e.scaleX),
                    e.height = Math.round(t.height() * e.scaleY),
                    e.scaleX = 1,
                    e.scaleY = 1,
                    n.fancybox.setTranslate(t, e)) : s !== !0 && t.removeClass(e),
                    n.isFunction(a) && a(i))
                }),
                n.isNumeric(i) && t.css("transition-duration", i + "ms"),
                n.isPlainObject(e) ? n.fancybox.setTranslate(t, e) : t.addClass(e),
                t.data("timer", setTimeout(function() {
                    t.trigger("transitionend")
                }, i + 16))
            },
            stop: function(t) {
                clearTimeout(t.data("timer")),
                t.off(d)
            }
        },
        n.fn.fancybox = function(t) {
            var e;
            return t = t || {},
            e = t.selector || !1,
            e ? n("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, i) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, i),
            this
        }
        ,
        r.on("click.fb-start", "[data-fancybox]", i)
    }
}(window, document, window.jQuery),
function(t) {
    "use strict";
    var e = function(e, n, o) {
        if (e)
            return o = o || "",
            "object" === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function(t, n) {
                e = e.replace("$" + t, n || "")
            }),
            o.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + o),
            e
    }
      , n = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    t(document).on("onInit.fb", function(o, i) {
        t.each(i.group, function(o, i) {
            var a, s, r, c, l, u, d, f = i.src || "", h = !1;
            i.type || (a = t.extend(!0, {}, n, i.opts.media),
            t.each(a, function(n, o) {
                if (r = f.match(o.matcher),
                u = {},
                d = n,
                r) {
                    if (h = o.type,
                    o.paramPlace && r[o.paramPlace]) {
                        l = r[o.paramPlace],
                        "?" == l[0] && (l = l.substring(1)),
                        l = l.split("&");
                        for (var a = 0; a < l.length; ++a) {
                            var p = l[a].split("=", 2);
                            2 == p.length && (u[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")))
                        }
                    }
                    return c = t.extend(!0, {}, o.params, i.opts[n], u),
                    f = "function" === t.type(o.url) ? o.url.call(this, r, c, i) : e(o.url, r, c),
                    s = "function" === t.type(o.thumb) ? o.thumb.call(this, r, c, i) : e(o.thumb, r),
                    "vimeo" === d && (f = f.replace("&%23", "#")),
                    !1
                }
            }),
            h ? (i.src = f,
            i.type = h,
            i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = s),
            "iframe" === h && (t.extend(!0, i.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }),
            i.contentProvider = d,
            i.opts.slideClass += " fancybox-slide--" + ("gmap_place" == d || "gmap_search" == d ? "map" : "video"))) : i.type = "image")
        })
    })
}(window.jQuery),
function(t, e, n) {
    "use strict";
    var o = function() {
        return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60)
        }
    }()
      , i = function() {
        return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
            t.clearTimeout(e)
        }
    }()
      , a = function(e) {
        var n = [];
        e = e.originalEvent || e || t.e,
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
        for (var o in e)
            e[o].pageX ? n.push({
                x: e[o].pageX,
                y: e[o].pageY
            }) : e[o].clientX && n.push({
                x: e[o].clientX,
                y: e[o].clientY
            });
        return n
    }
      , s = function(t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }
      , r = function(t) {
        if (t.is("a,button,input,select,textarea") || n.isFunction(t.get(0).onclick))
            return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
            if ("data-fancybox-" === o[e].nodeName.substr(0, 14))
                return !0;
        return !1
    }
      , c = function(e) {
        var n = t.getComputedStyle(e)["overflow-y"]
          , o = t.getComputedStyle(e)["overflow-x"]
          , i = ("scroll" === n || "auto" === n) && e.scrollHeight > e.clientHeight
          , a = ("scroll" === o || "auto" === o) && e.scrollWidth > e.clientWidth;
        return i || a
    }
      , l = function(t) {
        for (var e = !1; ; ) {
            if (e = c(t.get(0)))
                break;
            if (t = t.parent(),
            !t.length || t.hasClass("fancybox-stage") || t.is("body"))
                break
        }
        return e
    }
      , u = function(t) {
        var e = this;
        e.instance = t,
        e.$bg = t.$refs.bg,
        e.$stage = t.$refs.stage,
        e.$container = t.$refs.container,
        e.destroy(),
        e.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(e, "ontouchstart"))
    };
    u.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }
    ,
    u.prototype.ontouchstart = function(o) {
        var i = this
          , c = n(o.target)
          , u = i.instance
          , d = u.current
          , f = d.$content
          , h = "touchstart" == o.type;
        if (h && i.$container.off("mousedown.fb.touch"),
        !d || i.instance.isAnimating || i.instance.isClosing)
            return o.stopPropagation(),
            void o.preventDefault();
        if ((!o.originalEvent || 2 != o.originalEvent.button) && c.length && !r(c) && !r(c.parent()) && !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left) && (i.startPoints = a(o),
        i.startPoints && !(i.startPoints.length > 1 && u.isSliding))) {
            if (i.$target = c,
            i.$content = f,
            i.canTap = !0,
            n(e).off(".fb.touch"),
            n(e).on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(i, "ontouchend")),
            n(e).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(i, "ontouchmove")),
            o.stopPropagation(),
            !u.current.opts.touch && !u.canPan() || !c.is(i.$stage) && !i.$stage.find(c).length)
                return void (c.is("img") && o.preventDefault());
            n.fancybox.isMobile && (l(i.$target) || l(i.$target.parent())) || o.preventDefault(),
            i.canvasWidth = Math.round(d.$slide[0].clientWidth),
            i.canvasHeight = Math.round(d.$slide[0].clientHeight),
            i.startTime = (new Date).getTime(),
            i.distanceX = i.distanceY = i.distance = 0,
            i.isPanning = !1,
            i.isSwiping = !1,
            i.isZooming = !1,
            i.sliderStartPos = i.sliderLastPos || {
                top: 0,
                left: 0
            },
            i.contentStartPos = n.fancybox.getTranslate(i.$content),
            i.contentLastPos = null,
            1 !== i.startPoints.length || i.isZooming || (i.canTap = !u.isSliding,
            "image" === d.type && (i.contentStartPos.width > i.canvasWidth + 1 || i.contentStartPos.height > i.canvasHeight + 1) ? (n.fancybox.stop(i.$content),
            i.$content.css("transition-duration", "0ms"),
            i.isPanning = !0) : i.isSwiping = !0,
            i.$container.addClass("fancybox-controls--isGrabbing")),
            2 !== i.startPoints.length || u.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (i.isZooming = !0,
            i.isSwiping = !1,
            i.isPanning = !1,
            n.fancybox.stop(i.$content),
            i.$content.css("transition-duration", "0ms"),
            i.centerPointStartX = .5 * (i.startPoints[0].x + i.startPoints[1].x) - n(t).scrollLeft(),
            i.centerPointStartY = .5 * (i.startPoints[0].y + i.startPoints[1].y) - n(t).scrollTop(),
            i.percentageOfImageAtPinchPointX = (i.centerPointStartX - i.contentStartPos.left) / i.contentStartPos.width,
            i.percentageOfImageAtPinchPointY = (i.centerPointStartY - i.contentStartPos.top) / i.contentStartPos.height,
            i.startDistanceBetweenFingers = s(i.startPoints[0], i.startPoints[1]))
        }
    }
    ,
    u.prototype.ontouchmove = function(t) {
        var e = this;
        if (e.newPoints = a(t),
        n.fancybox.isMobile && (l(e.$target) || l(e.$target.parent())))
            return t.stopPropagation(),
            void (e.canTap = !1);
        if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = s(e.newPoints[0], e.startPoints[0], "x"),
        e.distanceY = s(e.newPoints[0], e.startPoints[0], "y"),
        e.distance = s(e.newPoints[0], e.startPoints[0]),
        e.distance > 0)) {
            if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length)
                return;
            t.stopPropagation(),
            t.preventDefault(),
            e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
        }
    }
    ,
    u.prototype.onSwipe = function() {
        var e, a = this, s = a.isSwiping, r = a.sliderStartPos.left || 0;
        s === !0 ? Math.abs(a.distance) > 10 && (a.canTap = !1,
        a.instance.group.length < 2 && a.instance.opts.touch.vertical ? a.isSwiping = "y" : a.instance.isSliding || a.instance.opts.touch.vertical === !1 || "auto" === a.instance.opts.touch.vertical && n(t).width() > 800 ? a.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI),
        a.isSwiping = e > 45 && e < 135 ? "y" : "x"),
        a.instance.isSliding = a.isSwiping,
        a.startPoints = a.newPoints,
        n.each(a.instance.slides, function(t, e) {
            n.fancybox.stop(e.$slide),
            e.$slide.css("transition-duration", "0ms"),
            e.inTransition = !1,
            e.pos === a.instance.current.pos && (a.sliderStartPos.left = n.fancybox.getTranslate(e.$slide).left)
        }),
        a.instance.SlideShow && a.instance.SlideShow.isActive && a.instance.SlideShow.stop()) : ("x" == s && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? r += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? r -= Math.pow(-a.distanceX, .8) : r += a.distanceX),
        a.sliderLastPos = {
            top: "x" == s ? 0 : a.sliderStartPos.top + a.distanceY,
            left: r
        },
        a.requestId && (i(a.requestId),
        a.requestId = null),
        a.requestId = o(function() {
            a.sliderLastPos && (n.each(a.instance.slides, function(t, e) {
                var o = e.pos - a.instance.currPos;
                n.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left: a.sliderLastPos.left + o * a.canvasWidth + o * e.opts.gutter
                })
            }),
            a.$container.addClass("fancybox-is-sliding"))
        }))
    }
    ,
    u.prototype.onPan = function() {
        var t, e, a, s = this;
        s.canTap = !1,
        t = s.contentStartPos.width > s.canvasWidth ? s.contentStartPos.left + s.distanceX : s.contentStartPos.left,
        e = s.contentStartPos.top + s.distanceY,
        a = s.limitMovement(t, e, s.contentStartPos.width, s.contentStartPos.height),
        a.scaleX = s.contentStartPos.scaleX,
        a.scaleY = s.contentStartPos.scaleY,
        s.contentLastPos = a,
        s.requestId && (i(s.requestId),
        s.requestId = null),
        s.requestId = o(function() {
            n.fancybox.setTranslate(s.$content, s.contentLastPos)
        })
    }
    ,
    u.prototype.limitMovement = function(t, e, n, o) {
        var i, a, s, r, c = this, l = c.canvasWidth, u = c.canvasHeight, d = c.contentStartPos.left, f = c.contentStartPos.top, h = c.distanceX, p = c.distanceY;
        return i = Math.max(0, .5 * l - .5 * n),
        a = Math.max(0, .5 * u - .5 * o),
        s = Math.min(l - n, .5 * l - .5 * n),
        r = Math.min(u - o, .5 * u - .5 * o),
        n > l && (h > 0 && t > i && (t = i - 1 + Math.pow(-i + d + h, .8) || 0),
        h < 0 && t < s && (t = s + 1 - Math.pow(s - d - h, .8) || 0)),
        o > u && (p > 0 && e > a && (e = a - 1 + Math.pow(-a + f + p, .8) || 0),
        p < 0 && e < r && (e = r + 1 - Math.pow(r - f - p, .8) || 0)),
        {
            top: e,
            left: t
        }
    }
    ,
    u.prototype.limitPosition = function(t, e, n, o) {
        var i = this
          , a = i.canvasWidth
          , s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t,
        t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2),
        o > s ? (e = e > 0 ? 0 : e,
        e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2),
        {
            top: e,
            left: t
        }
    }
    ,
    u.prototype.onZoom = function() {
        var e = this
          , a = e.contentStartPos.width
          , r = e.contentStartPos.height
          , c = e.contentStartPos.left
          , l = e.contentStartPos.top
          , u = s(e.newPoints[0], e.newPoints[1])
          , d = u / e.startDistanceBetweenFingers
          , f = Math.floor(a * d)
          , h = Math.floor(r * d)
          , p = (a - f) * e.percentageOfImageAtPinchPointX
          , g = (r - h) * e.percentageOfImageAtPinchPointY
          , b = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft()
          , m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop()
          , y = b - e.centerPointStartX
          , v = m - e.centerPointStartY
          , x = c + (p + y)
          , w = l + (g + v)
          , $ = {
            top: w,
            left: x,
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d
        };
        e.canTap = !1,
        e.newWidth = f,
        e.newHeight = h,
        e.contentLastPos = $,
        e.requestId && (i(e.requestId),
        e.requestId = null),
        e.requestId = o(function() {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }
    ,
    u.prototype.ontouchend = function(t) {
        var o = this
          , s = Math.max((new Date).getTime() - o.startTime, 1)
          , r = o.isSwiping
          , c = o.isPanning
          , l = o.isZooming;
        return o.endPoints = a(t),
        o.$container.removeClass("fancybox-controls--isGrabbing"),
        n(e).off(".fb.touch"),
        o.requestId && (i(o.requestId),
        o.requestId = null),
        o.isSwiping = !1,
        o.isPanning = !1,
        o.isZooming = !1,
        o.canTap ? o.onTap(t) : (o.speed = 366,
        o.velocityX = o.distanceX / s * .5,
        o.velocityY = o.distanceY / s * .5,
        o.speedX = Math.max(.5 * o.speed, Math.min(1.5 * o.speed, 1 / Math.abs(o.velocityX) * o.speed)),
        void (c ? o.endPanning() : l ? o.endZooming() : o.endSwiping(r)))
    }
    ,
    u.prototype.endSwiping = function(t) {
        var e = this
          , o = !1;
        e.instance.isSliding = !1,
        e.sliderLastPos = null,
        "y" == t && Math.abs(e.distanceY) > 50 ? (n.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 150),
        o = e.instance.close(!0, 300)) : "x" == t && e.distanceX > 50 && e.instance.group.length > 1 ? o = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && e.instance.group.length > 1 && (o = e.instance.next(e.speedX)),
        o !== !1 || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150),
        e.$container.removeClass("fancybox-is-sliding")
    }
    ,
    u.prototype.endPanning = function() {
        var t, e, o, i = this;
        i.contentLastPos && (i.instance.current.opts.touch.momentum === !1 ? (t = i.contentLastPos.left,
        e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed,
        e = i.contentLastPos.top + i.velocityY * i.speed),
        o = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height),
        o.width = i.contentStartPos.width,
        o.height = i.contentStartPos.height,
        n.fancybox.animate(i.$content, o, 330))
    }
    ,
    u.prototype.endZooming = function() {
        var t, e, o, i, a = this, s = a.instance.current, r = a.newWidth, c = a.newHeight;
        a.contentLastPos && (t = a.contentLastPos.left,
        e = a.contentLastPos.top,
        i = {
            top: e,
            left: t,
            width: r,
            height: c,
            scaleX: 1,
            scaleY: 1
        },
        n.fancybox.setTranslate(a.$content, i),
        r < a.canvasWidth && c < a.canvasHeight ? a.instance.scaleToFit(150) : r > s.width || c > s.height ? a.instance.scaleToActual(a.centerPointStartX, a.centerPointStartY, 150) : (o = a.limitPosition(t, e, r, c),
        n.fancybox.setTranslate(a.content, n.fancybox.getTranslate(a.$content)),
        n.fancybox.animate(a.$content, o, 150)))
    }
    ,
    u.prototype.onTap = function(t) {
        var e, o = this, i = n(t.target), s = o.instance, r = s.current, c = t && a(t) || o.startPoints, l = c[0] ? c[0].x - o.$stage.offset().left : 0, u = c[0] ? c[0].y - o.$stage.offset().top : 0, d = function(e) {
            var i = r.opts[e];
            if (n.isFunction(i) && (i = i.apply(s, [r, t])),
            i)
                switch (i) {
                case "close":
                    s.close(o.startEvent);
                    break;
                case "toggleControls":
                    s.toggleControls(!0);
                    break;
                case "next":
                    s.next();
                    break;
                case "nextOrClose":
                    s.group.length > 1 ? s.next() : s.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == r.type && (r.isLoaded || r.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, u) : s.group.length < 2 && s.close(o.startEvent))
                }
        };
        if (!(t.originalEvent && 2 == t.originalEvent.button || s.isSliding || l > i[0].clientWidth + i.offset().left)) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))
                e = "Outside";
            else if (i.is(".fancybox-slide"))
                e = "Slide";
            else {
                if (!s.current.$content || !s.current.$content.has(t.target).length)
                    return;
                e = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped),
                o.tapped = null,
                Math.abs(l - o.tapX) > 50 || Math.abs(u - o.tapY) > 50 || s.isSliding)
                    return this;
                d("dblclick" + e)
            } else
                o.tapX = l,
                o.tapY = u,
                r.opts["dblclick" + e] && r.opts["dblclick" + e] !== r.opts["click" + e] ? o.tapped = setTimeout(function() {
                    o.tapped = null,
                    d("click" + e)
                }, 300) : d("click" + e);
            return this
        }
    }
    ,
    n(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new u(e))
    }),
    n(e).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }),
            (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function() {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.instance.next()
            }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(),
            t.instance.idleSecondsCounter = 0,
            t.instance.showControls())
        },
        clear: function() {
            var t = this;
            clearTimeout(t.timer),
            t.timer = null
        },
        start: function() {
            var t = this
              , e = t.instance.current;
            t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0,
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),
            e.isComplete && t.set())
        },
        stop: function() {
            var t = this
              , e = t.instance.current;
            t.clear(),
            t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),
            t.isActive = !1
        },
        toggle: function() {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        },
        "afterKeydown.fb": function(n, o, i, a, s) {
            var r = o && o.SlideShow;
            !r || !i.opts.slideShow || 80 !== s && 32 !== s || e(t.activeElement).is("button,a,input") || (a.preventDefault(),
            r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }),
    e(t).on("visibilitychange", function() {
        var n = e.fancybox.getInstance()
          , o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set())
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function() {
        var e, n, o, i = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], a = {};
        for (n = 0; n < i.length; n++)
            if (e = i[n],
            e && e[1]in t) {
                for (o = 0; o < e.length; o++)
                    a[i[0][o]] = e[o];
                return a
            }
        return !1
    }();
    if (!n)
        return void (e.fancybox.defaults.btnTpl.fullScreen = !1);
    var o = {
        request: function(e) {
            e = e || t.documentElement,
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            t[n.exitFullscreen]()
        },
        toggle: function(e) {
            e = e || t.documentElement,
            this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function() {
            return Boolean(t[n.fullscreenElement])
        },
        enabled: function() {
            return Boolean(t[n.fullscreenEnabled])
        }
    };
    e(t).on({
        "onInit.fb": function(t, e) {
            var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
            e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container,
            n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                t.stopPropagation(),
                t.preventDefault(),
                o.toggle(n[0])
            }),
            e.opts.fullScreen && e.opts.fullScreen.autoStart === !0 && o.request(n[0]),
            e.FullScreen = o) : i.hide()
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(),
            e.FullScreen.toggle(e.$refs.container[0]))
        },
        "beforeClose.fb": function(t) {
            t && t.FullScreen && o.exit()
        }
    }),
    e(t).on(n.fullscreenchange, function() {
        var t = e.fancybox.getInstance();
        t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"),
        t.isAnimating = !1,
        t.update(!0, !0, 0))
    })
}(document, window.jQuery),
function(t, e) {
    "use strict";
    var n = function(t) {
        this.instance = t,
        this.init()
    };
    e.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this
              , e = t.instance.group[0]
              , n = t.instance.group[1];
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),
            t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function() {
                t.toggle()
            }),
            t.isActive = !0) : (t.$button.hide(),
            t.isActive = !1)
        },
        create: function() {
            var t, n, o = this.instance;
            this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),
            t = "<ul>",
            e.each(o.group, function(e, o) {
                n = o.opts.thumb || (o.opts.$thumb ? o.opts.$thumb.attr("src") : null),
                n || "image" !== o.type || (n = o.src),
                n && n.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>')
            }),
            t += "</ul>",
            this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
                o.jumpTo(e(this).data("index"))
            }),
            this.$list.find("img").hide().one("load", function() {
                var t, n, o, i, a = e(this).parent().removeClass("fancybox-thumbs-loading"), s = a.outerWidth(), r = a.outerHeight();
                t = this.naturalWidth || this.width,
                n = this.naturalHeight || this.height,
                o = t / s,
                i = n / r,
                o >= 1 && i >= 1 && (o > i ? (t /= i,
                n = r) : (t = s,
                n /= o)),
                e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(.3 * r - .3 * n)),
                    "margin-left": Math.min(0, Math.floor(.5 * s - .5 * t))
                }).show()
            }).each(function() {
                this.src = e(this).data("src")
            })
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        },
        close: function() {
            this.$grid.hide()
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible),
            this.isVisible ? (this.$grid || this.create(),
            this.instance.trigger("onThumbsShow"),
            this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"),
            this.instance.update()
        },
        hide: function() {
            this.isVisible = !1,
            this.update()
        },
        show: function() {
            this.isVisible = !0,
            this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible,
            this.update()
        }
    }),
    e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.Thumbs && (e.Thumbs = new n(e))
        },
        "beforeShow.fb": function(t, e, n, o) {
            var i = e && e.Thumbs;
            if (i && i.isActive) {
                if (n.modal)
                    return i.$button.hide(),
                    void i.hide();
                o && e.opts.thumbs.autoStart === !0 && i.show(),
                i.isVisible && i.focus()
            }
        },
        "afterKeydown.fb": function(t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(),
            a.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && e.opts.thumbs.hideOnClose !== !1 && n.close()
        }
    })
}(document, window.jQuery),
function(t, e, n) {
    "use strict";
    function o() {
        var t = e.location.hash.substr(1)
          , n = t.split("-")
          , o = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1
          , i = n.join("-");
        return o < 1 && (o = 1),
        {
            hash: t,
            index: o,
            gallery: i
        }
    }
    function i(t) {
        var e;
        "" !== t.gallery && (e = n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']").eq(t.index - 1),
        e.length || (e = n("#" + n.escapeSelector(t.gallery))),
        e.length && (s = !1,
        e.trigger("click")))
    }
    function a(t) {
        var e;
        return !!t && (e = t.current ? t.current.opts : t.opts,
        e.$orig ? e.$orig.data("fancybox") : e.hash || "")
    }
    n.escapeSelector || (n.escapeSelector = function(t) {
        var e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
          , n = function(t, e) {
            return e ? "\0" === t ? "ï¿½" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        };
        return (t + "").replace(e, n)
    }
    );
    var s = !0
      , r = null
      , c = null;
    n(function() {
        setTimeout(function() {
            n.fancybox.defaults.hash !== !1 && (n(t).on({
                "onInit.fb": function(t, e) {
                    var n, i;
                    e.group[e.currIndex].opts.hash !== !1 && (n = o(),
                    i = a(e),
                    i && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
                },
                "beforeShow.fb": function(n, o, i) {
                    var l;
                    i.opts.hash !== !1 && (l = a(o),
                    l && "" !== l && (e.location.hash.indexOf(l) < 0 && (o.opts.origHash = e.location.hash),
                    r = l + (o.group.length > 1 ? "-" + (i.index + 1) : ""),
                    "replaceState"in e.history ? (c && clearTimeout(c),
                    c = setTimeout(function() {
                        e.history[s ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + r),
                        c = null,
                        s = !1
                    }, 300)) : e.location.hash = r))
                },
                "beforeClose.fb": function(o, i, s) {
                    var l, u;
                    c && clearTimeout(c),
                    s.opts.hash !== !1 && (l = a(i),
                    u = i && i.opts.origHash ? i.opts.origHash : "",
                    l && "" !== l && ("replaceState"in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + u) : (e.location.hash = u,
                    n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),
                    r = null)
                }
            }),
            n(e).on("hashchange.fb", function() {
                var t = o();
                n.fancybox.getInstance() ? !r || r === t.gallery + "-" + t.index || 1 === t.index && r == t.gallery || (r = null,
                n.fancybox.close(),
                s = !0) : "" !== t.gallery && i(t)
            }),
            i(o()))
        }, 50)
    })
}(document, window, window.jQuery);
function loadSearchTemplate(e, b, f, a, g) {
    if (undefined === a) {
        a = false
    }
    var d = f.html();
    var c = Handlebars.compile(d);
    if (a) {
        e.append(c(b))
    } else {
        e.html(c(b))
    }
    if (g) {
        g()
    }
}
function minimizeHeaderAndFooter() {
    jQuery(document).ready(function() {
        jQuery(".nav-context header").replaceWith('<div class="header-container" style="height:64px"><div class="checkout-header--wrapper clearfix light">\r\n<span class="global-header__logo">\r\n<div class="logo">\r\n<a href="https://www.exploridewebdesign.com/" title="exploridewebdesign">\r\n<img src="/content/dam/exploridewebdesign/images/logo/ps_logo_f-03.png" alt="exploridewebdesign">\r\n</a>\r\n</div>\r\n</span>\r\n<span class="global-header__mobilelogo">\r\n<div class="logo">\r\n<a href="https://www.exploridewebdesign.com/" title="exploridewebdesign">\r\n<img src="/content/dam/exploridewebdesign/images/logo/ps_logo_f-03.png" alt="exploridewebdesign">\r\n</a>\r\n</div>\r\n</span>\r\n</div></div>');
        jQuery(".nav-context .checkout-header--wrapper .header_utilities").remove();
        jQuery(".nav-context .header_padding").remove();
        jQuery("footer#ftr").replaceWith('<div class="checkout-footer-component">\r\n<div class="footer-component">\r\n<div class="container">\r\n<div class="row">\r\n<div class="twelve columns">\r\n<div class="footer__container">\r\n<div class="footer__copyright">\r\n<p>Copyright \u00A9 2004 - 2019 exploridewebdesign LLC. All rights reserved. <span class="copyright-divider">|</span> <a href="/content/exploridewebdesign/en/terms.html" class="plain" target="_self">Terms of Use</a> <span class="copyright-divider">|</span> <a href="/content/exploridewebdesign/en/privacy.html" class="plain" target="_self">Privacy Policy</a></p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>')
    })
}
if (getParameterByName("minimal") == "true") {
    minimizeHeaderAndFooter();
    jQuery(document).ready(function() {
        jQuery(".ps_blog--ad").remove();
        jQuery(".course-bottom-free-trial-banner").remove()
    })
}
var partner = getParameterByName("partner");
if (typeof partner != "undefined" && partner != "") {
    var addPartner = function() {
        jQuery("a").each(function(b, d) {
            var a = jQuery(d).attr("href");
            if (a && a.indexOf("#") != 0 && a.indexOf("partner") == -1) {
                var c = (a.indexOf("?") == -1 ? "?" : "&");
                jQuery(d).attr("href", a + c + "partner=" + partner)
            }
        });
        jQuery(".main-course-signup a, a.main-paths-signup, a.main-roleiq-signup").removeClass("fancybox").attr("href", "http://www.exploridewebdesign.com/business/pilot-request").text("Request a pilot").attr("data-aa-title", "partner-pilot")
    };
    jQuery(".path-template #ps_skill").hide();
    addPartner();
    window.setTimeout(function() {
        addPartner()
    }, 1000)
}
var companyParam = getParameterByName("company");
var b2bParam = getParameterByName("b2b");
var directParam = getParameterByName("direct");
if (directParam != "" || b2bParam != "" || companyParam != "") {
    var buttonLink = "";
    var buttonText = "";
    if (directParam == "si" || companyParam.length > 0) {
        buttonLink = "https://app.exploridewebdesign.com/id";
        buttonText = "Sign in";
        buttonName = "direct-si-button"
    } else {
        if (directParam == "cs" || b2bParam == "true") {
            buttonLink = "https://www.exploridewebdesign.com/business/contact-sales";
            buttonText = "Contact sales";
            buttonName = "direct-cs-button"
        } else {
            if (directParam == "sap") {
                buttonLink = "https://www.exploridewebdesign.com/business/pilot-request";
                buttonText = "Start a pilot";
                buttonName = "direct-sap-button"
            } else {
                if (directParam == "satt") {
                    buttonLink = "https://www.exploridewebdesign.com/buy?sku=PROFESSIONAL-SG-PILOT";
                    buttonText = "Start a team trial";
                    buttonName = "direct-satt-button"
                }
            }
        }
    }
    if (buttonLink != "" && buttonText != "") {
        var btn = jQuery("a.button");
        btn.attr("href", buttonLink);
        btn.attr("data-aa-title", buttonName);
        btn.text(buttonText);
        btn.on("click", function() {
            setTimeout(function() {
                window.location = buttonLink
            }, 1000)
        })
    }
}
if (document.URL.indexOf("pbb2c=1") > -1) {
    jQuery(document).ready(function() {
        jQuery("#b2c-top-promo").slideDown()
    })
}
function SimpleDTO(h) {
    var k = Function.prototype.call.bind(Array.prototype.slice);
    try {
        h.debug && console.log("SimpleDTO: Unifying domains " + [document.domain, h.domain].join(", ")),
        document.domain = h.domain
    } catch (g) {
        throw "SimpleDTO: Domain unification error, domain: " + h.domain
    }
    if ("receive" == h.mode) {
        var m = document.createElement("iframe");
        this.setSource = function(a) {
            m.src = a
        }
        ;
        this.getSource = function() {
            return l
        }
        ;
        m.addEventListener("load", function() {
            this.data || this.src ? (h.debug && console.log("SimpleDTO: running callback"),
            h.cb && h.cb.call(this, j)) : console.warn("SimpleDTO: skipping load event due to empty data src or callback")
        });
        m.setAttribute("data-transfer-object", "true");
        [["visibility", "hidden"], ["position", "absolute"]].forEach(function(a) {
            m.style.setProperty.apply(m.style, a)
        });
        var l = document.createElement("a");
        l.href = h.dataSrc || "";
        h.noReplaceQuery || (l.search = document.location.search);
        h.noInit || this.setSource(l.href);
        document.body.appendChild(m)
    }
    var j = this;
    return {
        getGlobal: function() {
            return m.contentWindow
        },
        cleanup: function() {
            var a = m.contentWindow.frameElement;
            a.parentNode.removeChild(a)
        },
        parse: function(d) {
            d = document.querySelector('.dto-xml[data-field-collection="' + d + '"]').text;
            d = (new DOMParser).parseFromString(d, "application/xml");
            var e = d.querySelector("mktoPreFillFields");
            e = e.getAttribute("varName") || e.tagName;
            var f = {};
            k(d.querySelectorAll("mktoPreFillFields mktoField")).forEach(function(b) {
                f[b.getAttribute("inputName")] = b.textContent
            });
            return self[e] = f
        }
    }
}
window.SimpleDTO = SimpleDTO;
if (document.cookie.indexOf("imgTst=1") > -1 || document.URL.indexOf("aem.exploridewebdesign.com") > -1 || document.URL.indexOf("www-stage.exploridewebdesign.com") > -1) {
    window.messageDisplayed = false;
    function removePagespeedCompression(e) {
        var a = e.split("/");
        var c = a[a.length - 1];
        var b = c;
        if (c.indexOf(".pagespeed") > -1) {
            b = c.substring(1, c.length).split(".pagespeed")[0]
        }
        var d = e.replace(c, b).replace(",", "%");
        if (d.indexOf("exploridewebdesign.com") > -1) {
            d = d.replace(/^(?:\/\/|[^\/]+)*\//, "/")
        }
        return d
    }
    function isAnimatedGif(c, a) {
        var b = new XMLHttpRequest();
        b.open("GET", c, true);
        b.responseType = "arraybuffer";
        b.addEventListener("load", function() {
            var e = new Uint8Array(b.response), f, d, g = e.length, h = 0;
            if (e[0] !== 71 || e[1] !== 73 || e[2] !== 70 || e[3] !== 56) {
                a(false);
                return
            }
            for (f = 0,
            d = g - 9; f < d,
            h < 2; ++f) {
                if (e[f] === 0 && e[f + 1] === 33 && e[f + 2] === 249 && e[f + 3] === 4 && e[f + 8] === 0 && (e[f + 9] === 44 || e[f + 9] === 33)) {
                    h++
                }
            }
            a(h > 1)
        });
        b.send()
    }
    function testAndMark(b, g) {
        if (g && g.indexOf("/content/") > -1) {
            var c = b.width();
            var a = b.height();
            var e = a * c * 1.5;
            var d = removePagespeedCompression(g);
            if (b.hasClass("ps_card--image")) {
                e = e * 1.5
            }
            var f = new XMLHttpRequest();
            f.open("GET", d, true);
            f.onreadystatechange = function() {
                if (f.readyState == 4) {
                    if (f.status == 200) {
                        var h = f.getResponseHeader("Content-Length");
                        if (h > e && h > 50000 && e > 1000) {
                            b.css("border", "20px solid red");
                            console.log("large image: " + parseInt(h / 1024) + "KB, should be under " + parseInt(e / 1024) + "KB at its current display size. https://www.exploridewebdesign.com" + d);
                            if (!window.messageDisplayed) {
                                window.messageDisplayed = true;
                                jQuery("#content").before("<h5 id='ps-admin-warning' style='text-align:center; color:black; background-color:white; display:none;'>Overly large or uncompressed image(s) are being used on this page. Please find highlighted in red below.</h3>");
                                jQuery("#ps-admin-warning").slideDown();
                                setTimeout(function() {
                                    jQuery("#ps-admin-warning").slideUp()
                                }, 3000)
                            }
                        }
                    }
                }
            }
            ;
            f.send(null)
        }
    }
    jQuery(document).ready(function() {
        setTimeout(function() {
            if (jQuery(window).width() > 1023) {
                jQuery("img").each(function(a, b) {
                    var c = jQuery(b).attr("src");
                    testAndMark(jQuery(b), c)
                });
                jQuery("div").filter(function() {
                    return jQuery(this).css("background-image")
                }).each(function(a, b) {
                    var c = jQuery(b).css("background-image").replace('url("', "").replace('")', "");
                    testAndMark(jQuery(b), c)
                })
            }
        }, 1000)
    })
}
!function(b, a) {
    "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports.AOS = a() : b.AOS = a()
}(this, function() {
    return function(b) {
        function a(e) {
            if (c[e]) {
                return c[e].exports
            }
            var d = c[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return b[e].call(d.exports, d, d.exports, a),
            d.loaded = !0,
            d.exports
        }
        var c = {};
        return a.m = b,
        a.c = c,
        a.p = "dist/",
        a(0)
    }([function(Z, J, P) {
        function Q(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        var V = Object.assign || function(b) {
            for (var a = 1; a < arguments.length; a++) {
                var c = arguments[a];
                for (var d in c) {
                    Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d])
                }
            }
            return b
        }
          , ad = P(1)
          , L = (Q(ad),
        P(5))
          , ab = Q(L)
          , H = P(6)
          , K = Q(H)
          , aa = P(7)
          , Y = Q(aa)
          , S = P(8)
          , R = Q(S)
          , N = P(9)
          , ac = Q(N)
          , G = P(10)
          , X = Q(G)
          , C = P(13)
          , F = Q(C)
          , W = []
          , T = !1
          , D = document.all && !window.atob
          , U = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded"
        }
          , q = function() {
            var a = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
            return a && (T = !0),
            T ? (W = (0,
            X["default"])(W, U),
            (0,
            ac["default"])(W, U.once),
            W) : void 0
        }
          , ae = function() {
            W = (0,
            F["default"])(),
            q()
        }
          , B = function() {
            W.forEach(function(b, a) {
                b.node.removeAttribute("data-aos"),
                b.node.removeAttribute("data-aos-easing"),
                b.node.removeAttribute("data-aos-duration"),
                b.node.removeAttribute("data-aos-delay")
            })
        }
          , M = function(a) {
            return a === !0 || "mobile" === a && R["default"].mobile() || "phone" === a && R["default"].phone() || "tablet" === a && R["default"].tablet() || "function" == typeof a && a() === !0
        }
          , I = function(a) {
            return U = V(U, a),
            W = (0,
            F["default"])(),
            M(U.disable) || D ? B() : (document.querySelector("body").setAttribute("data-aos-easing", U.easing),
            document.querySelector("body").setAttribute("data-aos-duration", U.duration),
            document.querySelector("body").setAttribute("data-aos-delay", U.delay),
            "DOMContentLoaded" === U.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? q(!0) : "load" === U.startEvent ? window.addEventListener(U.startEvent, function() {
                q(!0)
            }) : document.addEventListener(U.startEvent, function() {
                q(!0)
            }),
            window.addEventListener("resize", (0,
            K["default"])(q, 50, !0)),
            window.addEventListener("orientationchange", (0,
            K["default"])(q, 50, !0)),
            window.addEventListener("scroll", (0,
            ab["default"])(function() {
                (0,
                ac["default"])(W, U.once)
            }, 99)),
            document.addEventListener("DOMNodeRemoved", function(c) {
                var b = c.target;
                b && 1 === b.nodeType && b.hasAttribute && b.hasAttribute("data-aos") && (0,
                K["default"])(ae, 50, !0)
            }),
            (0,
            Y["default"])("[data-aos]", ae),
            W)
        };
        Z.exports = {
            init: I,
            refresh: q,
            refreshHard: ae
        }
    }
    , function(b, a) {}
    , , , , function(h, f, j) {
        function l(p, m, q) {
            var r = !0
              , c = !0;
            if ("function" != typeof p) {
                throw new TypeError(k)
            }
            return d(q) && (r = "leading"in q ? !!q.leading : r,
            c = "trailing"in q ? !!q.trailing : c),
            g(p, m, {
                leading: r,
                maxWait: m,
                trailing: c
            })
        }
        function d(c) {
            var a = "undefined" == typeof c ? "undefined" : b(c);
            return !!c && ("object" == a || "function" == a)
        }
        var b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }
          , g = j(6)
          , k = "Expected a function";
        h.exports = l
    }
    , function(R, D) {
        function H(ai, X, ab) {
            function ac(a) {
                var b = ak
                  , d = x;
                return ak = x = void 0,
                c = a,
                k = ai.apply(d, b)
            }
            function al(a) {
                return c = a,
                s = setTimeout(aj, X),
                am ? ac(a) : k
            }
            function Y(b) {
                var d = b - af
                  , f = b - c
                  , a = X - d;
                return j ? z(a, ag - f) : a
            }
            function W(a) {
                var b = a - af
                  , d = a - c;
                return !af || b >= X || 0 > b || j && d >= ag
            }
            function aj() {
                var a = M();
                return W(a) ? ah(a) : void (s = setTimeout(aj, Y(a)))
            }
            function ah(a) {
                return clearTimeout(s),
                s = void 0,
                Z && ak ? ac(a) : (ak = x = void 0,
                k)
            }
            function ae() {
                void 0 !== s && clearTimeout(s),
                af = c = 0,
                ak = x = s = void 0
            }
            function ad() {
                return void 0 === s ? k : ah(M())
            }
            function aa() {
                var a = M()
                  , b = W(a);
                if (ak = arguments,
                x = this,
                af = a,
                b) {
                    if (void 0 === s) {
                        return al(af)
                    }
                    if (j) {
                        return clearTimeout(s),
                        s = setTimeout(aj, X),
                        ac(af)
                    }
                }
                return void 0 === s && (s = setTimeout(aj, X)),
                k
            }
            var ak, x, ag, k, s, af = 0, c = 0, am = !1, j = !1, Z = !0;
            if ("function" != typeof ai) {
                throw new TypeError(E)
            }
            return X = T(X) || 0,
            N(ab) && (am = !!ab.leading,
            j = "maxWait"in ab,
            ag = j ? L(T(ab.maxWait) || 0, X) : ag,
            Z = "trailing"in ab ? !!ab.trailing : Z),
            aa.cancel = ae,
            aa.flush = ad,
            aa
        }
        function I(b) {
            var a = N(b) ? O.call(b) : "";
            return a == Q || a == K
        }
        function N(b) {
            var a = "undefined" == typeof b ? "undefined" : C(b);
            return !!b && ("object" == a || "function" == a)
        }
        function V(a) {
            return !!a && "object" == ("undefined" == typeof a ? "undefined" : C(a))
        }
        function F(a) {
            return "symbol" == ("undefined" == typeof a ? "undefined" : C(a)) || V(a) && O.call(a) == J
        }
        function T(b) {
            if ("number" == typeof b) {
                return b
            }
            if (F(b)) {
                return S
            }
            if (N(b)) {
                var a = I(b.valueOf) ? b.valueOf() : b;
                b = N(a) ? a + "" : a
            }
            if ("string" != typeof b) {
                return 0 === b ? b : +b
            }
            b = b.replace(G, "");
            var c = B.test(b);
            return c || P.test(b) ? q(b.slice(2), c ? 2 : 8) : U.test(b) ? S : +b
        }
        var C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        }
        : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
        }
          , E = "Expected a function"
          , S = NaN
          , Q = "[object Function]"
          , K = "[object GeneratorFunction]"
          , J = "[object Symbol]"
          , G = /^\s+|\s+$/g
          , U = /^[-+]0x[0-9a-f]+$/i
          , B = /^0b[01]+$/i
          , P = /^0o[0-7]+$/i
          , q = parseInt
          , A = Object.prototype
          , O = A.toString
          , L = Math.max
          , z = Math.min
          , M = Date.now;
        R.exports = H
    }
    , function(h, f) {
        function j(c, a) {
            g.push({
                selector: c,
                fn: a
            }),
            !k && b && (k = new b(l),
            k.observe(d.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })),
            l()
        }
        function l() {
            for (var r, q, s = 0, w = g.length; w > s; s++) {
                r = g[s],
                q = d.querySelectorAll(r.selector);
                for (var m, v = 0, p = q.length; p > v; v++) {
                    m = q[v],
                    m.ready || (m.ready = !0,
                    r.fn.call(m, m))
                }
            }
        }
        Object.defineProperty(f, "__esModule", {
            value: !0
        });
        var d = window.document
          , b = window.MutationObserver || window.WebKitMutationObserver
          , g = []
          , k = void 0;
        f["default"] = j
    }
    , function(c, b) {
        function d(h, g) {
            if (!(h instanceof g)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        Object.defineProperty(b, "__esModule", {
            value: !0
        });
        var f = function() {
            function g(j, h) {
                for (var k = 0; k < h.length; k++) {
                    var l = h[k];
                    l.enumerable = l.enumerable || !1,
                    l.configurable = !0,
                    "value"in l && (l.writable = !0),
                    Object.defineProperty(j, l.key, l)
                }
            }
            return function(e, h, j) {
                return h && g(e.prototype, h),
                j && g(e, j),
                e
            }
        }()
          , a = function() {
            function g() {
                d(this, g)
            }
            return f(g, [{
                key: "phone",
                value: function() {
                    var h = !1;
                    return function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (h = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera),
                    h
                }
            }, {
                key: "mobile",
                value: function() {
                    var h = !1;
                    return function(e) {
                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (h = !0)
                    }(navigator.userAgent || navigator.vendor || window.opera),
                    h
                }
            }, {
                key: "tablet",
                value: function() {
                    return this.mobile() && !this.phone()
                }
            }]),
            g
        }();
        b["default"] = new a
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(g, f, h) {
            var j = g.node.getAttribute("data-aos-once");
            f > g.position ? g.node.classList.add("aos-animate") : "undefined" != typeof j && ("false" === j || !h && "true" !== j) && g.node.classList.remove("aos-animate")
        }
          , d = function(h, g) {
            var j = window.pageYOffset
              , f = window.innerHeight;
            h.forEach(function(l, k) {
                c(l, f + j, g)
            })
        };
        a["default"] = d
    }
    , function(g, d, h) {
        function j(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var c = h(11)
          , b = j(c)
          , f = function(k, a) {
            return k.forEach(function(l, m) {
                l.node.classList.add("aos-init"),
                l.position = (0,
                b["default"])(l.node, a.offset)
            }),
            k
        };
        d["default"] = f
    }
    , function(g, d, h) {
        function j(a) {
            return a && a.__esModule ? a : {
                "default": a
            }
        }
        Object.defineProperty(d, "__esModule", {
            value: !0
        });
        var c = h(12)
          , b = j(c)
          , f = function(m, k) {
            var p = 0
              , q = 0
              , a = window.innerHeight
              , l = {
                offset: m.getAttribute("data-aos-offset"),
                anchor: m.getAttribute("data-aos-anchor"),
                anchorPlacement: m.getAttribute("data-aos-anchor-placement")
            };
            switch (l.offset && !isNaN(l.offset) && (q = parseInt(l.offset)),
            l.anchor && document.querySelectorAll(l.anchor) && (m = document.querySelectorAll(l.anchor)[0]),
            p = (0,
            b["default"])(m).top,
            l.anchorPlacement) {
            case "top-bottom":
                break;
            case "center-bottom":
                p += m.offsetHeight / 2;
                break;
            case "bottom-bottom":
                p += m.offsetHeight;
                break;
            case "top-center":
                p += a / 2;
                break;
            case "bottom-center":
                p += a / 2 + m.offsetHeight;
                break;
            case "center-center":
                p += a / 2 + m.offsetHeight / 2;
                break;
            case "top-top":
                p += a;
                break;
            case "bottom-top":
                p += m.offsetHeight + a;
                break;
            case "center-top":
                p += m.offsetHeight / 2 + a
            }
            return l.anchorPlacement || l.offset || isNaN(k) || (q = k),
            p + q
        };
        d["default"] = f
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(f) {
            for (var d = 0, g = 0; f && !isNaN(f.offsetLeft) && !isNaN(f.offsetTop); ) {
                d += f.offsetLeft - ("BODY" != f.tagName ? f.scrollLeft : 0),
                g += f.offsetTop - ("BODY" != f.tagName ? f.scrollTop : 0),
                f = f.offsetParent
            }
            return {
                top: g,
                left: d
            }
        };
        a["default"] = c
    }
    , function(b, a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var c = function(f) {
            f = f || document.querySelectorAll("[data-aos]");
            var d = [];
            return [].forEach.call(f, function(g, h) {
                d.push({
                    node: g
                })
            }),
            d
        };
        a["default"] = c
    }
    ])
});
(function(b, a) {
    "function" === typeof define && define.amd ? define([], a) : "object" === typeof module && module.exports ? module.exports = a() : b.Rellax = a()
}
)("undefined" !== typeof window ? window : global, function() {
    var a = function(K, G) {
        var M = Object.create(a.prototype)
          , I = 0
          , s = 0
          , J = 0
          , j = 0
          , L = []
          , g = !0
          , v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(c) {
            return setTimeout(c, 1000 / 60)
        }
          , E = null
          , o = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout
          , n = window.transformProp || function() {
            var h = document.createElement("div");
            if (null === h.style.transform) {
                var c = ["Webkit", "Moz", "ms"], k;
                for (k in c) {
                    if (void 0 !== h.style[c[k] + "Transform"]) {
                        return c[k] + "Transform"
                    }
                }
            }
            return "transform"
        }();
        M.options = {
            speed: -2,
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            callback: function() {}
        };
        G && Object.keys(G).forEach(function(c) {
            M.options[c] = G[c]
        });
        K || (K = ".rellax");
        var H = "string" === typeof K ? document.querySelectorAll(K) : [K];
        if (0 < H.length) {
            M.elems = H;
            if (M.options.wrapper && !M.options.wrapper.nodeType) {
                if (H = document.querySelector(M.options.wrapper)) {
                    M.options.wrapper = H
                } else {
                    console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                    return
                }
            }
            var f = function() {
                for (var C = 0; C < L.length; C++) {
                    M.elems[C].style.cssText = L[C].style
                }
                L = [];
                s = window.innerHeight;
                j = window.innerWidth;
                e();
                for (C = 0; C < M.elems.length; C++) {
                    var D = M.elems[C]
                      , B = D.getAttribute("data-rellax-percentage")
                      , z = D.getAttribute("data-rellax-speed")
                      , y = D.getAttribute("data-rellax-zindex") || 0
                      , w = D.getAttribute("data-rellax-min")
                      , t = D.getAttribute("data-rellax-max")
                      , N = M.options.wrapper ? M.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    M.options.relativeToWrapper && (N = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - M.options.wrapper.offsetTop);
                    var A = M.options.vertical ? B || M.options.center ? N : 0 : 0
                      , x = M.options.horizontal ? B || M.options.center ? M.options.wrapper ? M.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0;
                    N = A + D.getBoundingClientRect().top;
                    var u = D.clientHeight || D.offsetHeight || D.scrollHeight
                      , r = x + D.getBoundingClientRect().left
                      , c = D.clientWidth || D.offsetWidth || D.scrollWidth;
                    A = B ? B : (A - N + s) / (u + s);
                    B = B ? B : (x - r + j) / (c + j);
                    M.options.center && (A = B = 0.5);
                    z = z ? z : M.options.speed;
                    B = d(B, A, z);
                    D = D.style.cssText;
                    A = "";
                    0 <= D.indexOf("transform") && (A = D.indexOf("transform"),
                    A = D.slice(A),
                    A = (x = A.indexOf(";")) ? " " + A.slice(11, x).replace(/\s/g, "") : " " + A.slice(11).replace(/\s/g, ""));
                    L.push({
                        baseX: B.x,
                        baseY: B.y,
                        top: N,
                        left: r,
                        height: u,
                        width: c,
                        speed: z,
                        style: D,
                        transform: A,
                        zindex: y,
                        min: w,
                        max: t
                    })
                }
                g && (window.addEventListener("resize", f),
                g = !1);
                b()
            }
              , e = function() {
                var h = I
                  , c = J;
                I = M.options.wrapper ? M.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                J = M.options.wrapper ? M.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
                M.options.relativeToWrapper && (I = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - M.options.wrapper.offsetTop);
                return h != I && M.options.vertical || c != J && M.options.horizontal ? !0 : !1
            }
              , d = function(l, h, k) {
                var m = {};
                l = 100 * k * (1 - l);
                h = 100 * k * (1 - h);
                m.x = M.options.round ? Math.round(l) : Math.round(100 * l) / 100;
                m.y = M.options.round ? Math.round(h) : Math.round(100 * h) / 100;
                return m
            }
              , F = function() {
                e() && !1 === g && b();
                E = v(F)
            }
              , b = function() {
                for (var l, c = 0; c < M.elems.length; c++) {
                    l = d((J - L[c].left + j) / (L[c].width + j), (I - L[c].top + s) / (L[c].height + s), L[c].speed);
                    var k = l.y - L[c].baseY
                      , h = l.x - L[c].baseX;
                    null !== L[c].min && (M.options.vertical && !M.options.horizontal && (k = k <= L[c].min ? L[c].min : k),
                    M.options.horizontal && !M.options.vertical && (h = h <= L[c].min ? L[c].min : h));
                    null !== L[c].max && (M.options.vertical && !M.options.horizontal && (k = k >= L[c].max ? L[c].max : k),
                    M.options.horizontal && !M.options.vertical && (h = h >= L[c].max ? L[c].max : h));
                    M.elems[c].style[n] = "translate3d(" + (M.options.horizontal ? h : "0") + "px," + (M.options.vertical ? k : "0") + "px," + L[c].zindex + "px) " + L[c].transform
                }
                M.options.callback(l)
            };
            M.destroy = function() {
                for (var c = 0; c < M.elems.length; c++) {
                    M.elems[c].style.cssText = L[c].style
                }
                g || (window.removeEventListener("resize", f),
                g = !0);
                o(E);
                E = null
            }
            ;
            f();
            F();
            M.refresh = f;
            return M
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    };
    return a
});
if (jQuery(".fancybox").not(".executive-member .fancybox").length) {
    var $triggers = jQuery(".fancybox").not(".executive-member .fancybox");
    var fancyConfig = {
        maxWidth: 1200,
        closeBtn: false,
        margin: [80, 10, 10, 10],
        helpers: {
            overlay: {
                css: {
                    background: "rgba(0,0,0,0.5)"
                }
            }
        },
        beforeShow: function() {
            if (typeof this.content != "undefined" && typeof this.content.find != "undefined") {
                this.content.find(".close-fancybox").on("click", function(a) {
                    a.preventDefault();
                    jQuery.fancybox.close()
                })
            }
        }
    };
    $triggers.filter(".fancybox-wide").fancybox(fancyConfig);
    fancyConfig.maxWidth = 800;
    $triggers.not(".fancybox-wide").fancybox(fancyConfig)
}
if (jQuery(".executive-member .fancybox").length) {
    jQuery(".executive-member .fancybox").fancybox({
        padding: 0,
        margin: 25,
        height: 400,
        maxWidth: 800,
        tpl: {
            closeBtn: '<a title="Close" class="fancybox-item fancybox-close myClose exec-close"></a>'
        }
    })
}
jQuery("body").on("click", "a", function(f) {
    var b = jQuery(this).attr("href");
    var g = jQuery(this).hasClass("fancybox");
    if (g) {
        f.preventDefault()
    } else {
        if (b && b.startsWith("#") && b !== "#") {
            f.preventDefault();
            var e = 0;
            var c = false;
            if (jQuery(b + "_").length) {
                e = jQuery(b + "_").offset().top;
                c = true
            } else {
                if (jQuery(b).length) {
                    e = jQuery(b).offset().top;
                    c = true
                } else {
                    if (jQuery("a[name=" + b.replace("#", "") + "]").length) {
                        e = jQuery("a[name=" + b.replace("#", "") + "]").offset().top;
                        c = true
                    }
                }
            }
            var a = 0;
            if (jQuery("header").length > 0) {
                a = jQuery("header").outerHeight()
            } else {
                if (jQuery(".checkout-header--wrapper").length > 0) {
                    a = jQuery(".checkout-header--wrapper").outerHeight()
                } else {
                    if (jQuery("body.tech-blog-post-template").length > 0) {
                        a = jQuery(".ps--blog_nav").outerHeight()
                    }
                }
            }
            var d = jQuery(".generic-block-wrapper.block--sticky");
            if (d.length > 0 && c) {
                jQuery("html, body").animate({
                    scrollTop: e - a - d.outerHeight()
                }, 200)
            } else {
                if (c) {
                    jQuery("html, body").animate({
                        scrollTop: e - a
                    }, 200)
                }
            }
        }
    }
});
if (jQuery(".role-iq-content .role-skills").length) {
    var $component = jQuery(".role-iq-content .role-skills");
    var $tabs = $component.find(".roleiq-tab");
    jQuery(".roleiq-item").each(function(a, b) {
        var c = jQuery(this).find(".roleiq-tab").clone().contents();
        if (jQuery(this).find($tabs).hasClass("active")) {
            jQuery(this).find(".roleiq-course--overlay").hide().fadeIn("fast")
        }
        jQuery(this).find(".roleiq-course--header").html(c)
    });
    $tabs.click(function(a) {
        a.preventDefault();
        $tabs.not(jQuery(this)).removeClass("active");
        jQuery(this).addClass("active");
        jQuery(this).siblings(".roleiq-course").find(".roleiq-course--overlay").hide().delay(500).fadeIn("fast")
    })
}
(function(a) {
    if (jQuery("body.path-template").length > 0) {
        if (jQuery(".path-description #readmore").length) {
            jQuery(".path-description #readmore").click(function(c) {
                c.preventDefault();
                jQuery(".path-description .path-description-end").fadeIn();
                jQuery(".path-description #readmore").hide();
                jQuery(".path-description #readless").show()
            });
            jQuery(".path-description #readless").click(function(c) {
                c.preventDefault();
                jQuery(".path-description .path-description-end").fadeOut();
                jQuery(".path-description #readmore").show();
                jQuery(".path-description #readless").hide()
            })
        }
        jQuery(".difficulty-header").on("click", function() {
            var c = jQuery(this).parent(".difficulty-container");
            if (c.hasClass("active")) {
                c.find(".difficulty-content").slideUp(300);
                c.removeClass("active")
            } else {
                c.find(".difficulty-content").slideDown(300);
                c.addClass("active")
            }
        });
        jQuery(".course-box").on("click", function() {
            var d = jQuery(this).parent(".path-course-block")
              , c = d.find(".course-content");
            if (jQuery(window).width() > 640) {
                if (d.hasClass("active")) {
                    d.removeClass("active");
                    c.fadeOut(300)
                } else {
                    jQuery(".path-course-block").removeClass("active");
                    jQuery(".course-content").fadeOut(300);
                    d.addClass("active");
                    c.fadeIn(300)
                }
            } else {
                if (d.hasClass("active")) {
                    d.removeClass("active");
                    c.slideUp(300)
                } else {
                    jQuery(".path-course-block").removeClass("active");
                    jQuery(".course-content").slideUp(300);
                    d.addClass("active");
                    c.slideDown(300)
                }
            }
        });
        var b = function() {
            var c = 0;
            var d = 2;
            window.setTimeout(function() {
                var f = window.setInterval(function() {
                    if (c <= 261) {
                        document.getElementById("ps_rating_num").innerHTML = c;
                        c += 3
                    } else {
                        window.clearInterval(f)
                    }
                }, 5);
                var e = window.setInterval(function() {
                    if (d <= 76) {
                        document.getElementById("ps_graph--percentile").innerHTML = d + "th";
                        d += 2
                    } else {
                        window.clearInterval(e)
                    }
                }, 10)
            }, 550);
            window.setTimeout(function() {
                jQuery(".ps_skill--overlay").animate({
                    opacity: 1
                }, 1000)
            }, 2000)
        };
        jQuery(document).ready(function() {
            var c = document.getElementById("ps_graph");
            if (c) {
                if (window.skillGraphLoaded) {
                    b()
                } else {
                    c.addEventListener("load", function() {
                        b()
                    })
                }
            }
        })
    }
}
)(this.jQuery);
if (jQuery("#hub_video_hero").length) {
    window.psYtVideos = window.psYtVideos || {};
    psYtVideos.vidConfigs = psYtVideos.vidConfigs || [];
    var clipId = jQuery("#hub_video_hero").data("vid-clip-id");
    if (clipId.length) {
        psYtVideos.vidConfigs.push({
            videoElId: "hub_video_hero",
            videoSettings: {
                videoId: clipId,
                events: {
                    onReady: function(b) {
                        var a = b.target;
                        jQuery(".hub-video-hero-image-wrap").click(function(c) {
                            c.stopPropagation();
                            a.playVideo();
                            jQuery(this).hide();
                            jQuery(".hub-video-hero-container").css("padding-bottom", "56.25%")
                        })
                    },
                    onStateChange: function(a) {
                        if (a.data === 0) {
                            jQuery(".hub-video-hero-container").css("padding-bottom", "0");
                            jQuery(".hub-video-hero-image-wrap").show()
                        }
                    }
                },
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                    cc_load_policy: 0,
                    enablejsapi: 1,
                    iv_load_policy: 3,
                    loop: 0,
                    modestbranding: 1,
                    origin: document.domain,
                    rel: 0,
                    html5: 1
                }
            }
        })
    }
}
if (jQuery(".author-text .expand-link").length) {
    jQuery(".author-text .expand-link").click(function(a) {
        a.preventDefault();
        jQuery(".author-text .expanded-content").fadeIn();
        jQuery(".author-text .expand-text").hide();
        jQuery(".author-text .shrink-text").show()
    });
    jQuery(".author-text .shrink-link").click(function(a) {
        a.preventDefault();
        jQuery(".author-text .expanded-content").fadeOut();
        jQuery(".author-text .expand-text").show();
        jQuery(".author-text .shrink-text").hide()
    })
}
jQuery(document).ready(function() {
    if (jQuery("#course_modules__accordion .accordion-title").length > 0) {
        jQuery("#course_modules__accordion .accordion-title")[0].click()
    }
    if (jQuery("#course_modules__accordion .accordion-title").length > 1) {
        jQuery("#course_modules__accordion .accordion-title")[1].click()
    }
});
(function() {
    var a = document.querySelectorAll(".mobile-closed");
    [].forEach.call(a, function(b) {
        b.classList.add("mobile-hide")
    })
}
)();
jQuery(".course_mobile_accordion").on("click", function(b) {
    var a = jQuery(this);
    a.next("div").slideToggle().toggleClass("mobile-closed");
    a.toggleClass("accordion_open")
});
if (jQuery("#course-page-hero-ytwrapper").length > 0) {
    function onCoursePlayerStateChange(a) {
        if (a.data === 0) {
            jQuery("#course-page-hero").show();
            jQuery("#course-page-hero-ytwrapper").hide()
        }
    }
    window.psYtVideos = window.psYtVideos || {};
    psYtVideos.vidConfigs = psYtVideos.vidConfigs || [];
    var ytId = jQuery("#course-page-hero-ytwrapper").data("youtubeId");
    psYtVideos.vidConfigs.push({
        videoElId: "course-page-hero-ytplayer",
        videoSettings: {
            height: "100%",
            width: "100%",
            videoId: ytId,
            playerVars: {
                hd: "1",
                rel: "0",
                autohide: "1",
                modestbranding: "1",
                controls: "0",
                fs: "0",
                cc_load_policy: "0",
                iv_load_policy: "3",
                autohide: "1"
            },
            events: {
                onStateChange: onCoursePlayerStateChange
            }
        }
    });
    jQuery("#play-overview-button").click(function() {
        if (window.ytPlayers && window.ytPlayers[0] && window.ytPlayers[0].playVideo) {
            jQuery("#course-page-hero").hide();
            jQuery("#course-page-hero-ytwrapper").show();
            ytPlayers[0].playVideo()
        }
    });
    jQuery("#course-overview-player-close").click(function() {
        ytPlayers[0].stopVideo();
        jQuery("#course-page-hero").show();
        jQuery("#course-page-hero-ytwrapper").hide()
    })
}
var noMarginBanner = '<a href="https://www.exploridewebdesign.com/pricing" class="ps_blog--ad" data-aa-title="blog-trial-promo">\r\n\t<style type="text/css">\r\n\t.ps_blog--ad{background:#0e0c0d url(https://www.exploridewebdesign.com/content/dam/exploridewebdesign2/target/blog_ads@2x.jpg) no-repeat center center;background-size:1500px 151px;box-sizing:border-box;color:#fff;display:block;font-size:18px;font-weight:700;hyphens:none;margin:0px;min-height:120px;padding:20px;text-align:center;text-decoration:none;}\r\n\t.ps_blog--ad:hover{color:#fff;text-decoration:none;}\r\n\t@media only screen and (min-width:800px){.ps_blog--ad{margin:0px auto;background-size:1000px 121px;} }\r\n\t.ps_blog--btn{background:#e80a89;background:-moz-linear-gradient(left,#F05A28 0%,#E80A89 100%);background:-webkit-linear-gradient(left,#F05A28 0%,#E80A89 100%);background:linear-gradient(to right #F05A28 0%,#E80A89 100%);border-radius:2px;display:inline-block;font-size:14px;font-weight:500;line-height:40px;margin:15px 0 0 0;padding:0 30px;}\r\n\t</style>\r\n\t<div class="ps_blog--title">Learn something new. Take control of your career. </div>\r\n\t<div class="ps_blog--btn">Sign up</div>\r\n</a>';
if (jQuery("body.blog-template").length > 0) {
    if (jQuery(".ps_cigar_banner").length > 0) {
        jQuery(".ps_cigar_banner").replaceWith(noMarginBanner)
    } else {
        jQuery(".hero-blog-block").after(noMarginBanner)
    }
    jQuery(".medium-12 .reference").replaceWith(noMarginBanner);
    jQuery(".marketo-form").closest(".generic-block").replaceWith(noMarginBanner)
}
if (jQuery("#search-field form").length) {
    var QUERY_PARAM_NAME = "q"
      , CATEGORIES_PARAM_NAME = "categories"
      , DEFAULT_QUERY = "*"
      , DEFAULT_CATEGORIES = "all"
      , $form = jQuery("#search-field form")
      , $searchInput = $form.find("input")
      , $results = jQuery("#search-results")
      , $resultsTarget = jQuery("#search-results-target")
      , $resultsTemplate = jQuery("#search-results-handlebars-template")
      , $resultsCategoryTarget = jQuery("#search-results-category-target")
      , $resultsCategoryTemplate = jQuery("#search-results-category-handlebars-template")
      , $searchFilterBlock = jQuery("#search-filter-left")
      , $searchFilterBar = jQuery("#search-filter-bar")
      , $searchLoadingOverlay = jQuery(".search-loading-overlay")
      , queryData = {}
      , alternateCountList = {
        name: "count",
        label: "View",
        type: "count",
        items: [{
            selected: false,
            value: "24",
            label: "24"
        }, {
            selected: false,
            value: "48",
            label: "48"
        }, {
            selected: false,
            value: "96",
            label: "96"
        }, {
            selected: false,
            value: "248",
            label: "248"
        }]
    };
    jQuery(document).on("keypress", function(a) {
        if (a.ctrlKey && (a.key === "`")) {
            jQuery(".advancedsearch").show()
        }
    });
    $form.on("submit", function(c) {
        c.preventDefault();
        var a = $searchInput.val();
        if (a == "") {
            a = "*"
        }
        var b = window.location.protocol + "//" + window.location.host + window.location.pathname + "?q=" + encodeURIComponent(a) + "&categories=all";
        window.history.pushState({
            path: b
        }, "", b);
        searchFromURL()
    });
    $resultsCategoryTarget.on("click", "#search-results-section-load-more", function(a) {
        a.preventDefault();
        jQuery(this).parents(".search-results-section__load-button").remove();
        searchFromURL(jQuery(this).attr("data-page"))
    });
    function processSPData(b, d, c) {
        var a = {
            resultsData: c
        };
        function f(g) {
            switch (g) {
            case "course":
                return "courses";
            case "blog":
                return "blogs";
            case "resource":
                return "resources";
            case "aem-author":
                return "authors";
            default:
                return g
            }
        }
        if (b !== "all") {
            a.resultsData.resultsets[0].name = f(b);
            a.resultsData.resultsets[0].total = a.resultsData.resultcount.total;
            a.resultsData.resultsets[0].categoryResults = true;
            a.pagination = {
                next: ""
            };
            var e = c.pagination[0].next;
            if (e !== "") {
                a.pagination.next = new RegExp("page=([0-9]+)").exec(e)[1]
            }
            if ((b === "resources" || b === "authors") && d == 1) {
                alternateCountList.items.each(function(h, g) {
                    alternateCountList.items[g].selected = (h.value == a.resultsData.general.pageUpper || (h.value == 24 && a.resultsData.general.pageUpper < 24) || (h.value == 48 && a.resultsData.general.pageUpper > 24 && a.resultsData.general.pageUpper < 48) || (h.value == 96 && a.resultsData.general.pageUpper > 48 && a.resultsData.general.pageUpper < 96) || (h.value == 248 && a.resultsData.general.pageUpper > 96 && a.resultsData.general.pageUpper < 248))
                });
                a.resultsData.menus[1] = alternateCountList
            }
        }
        return a
    }
    function updateUIOnSearchComplete(c, a, f, g, d, k) {
        $searchInput.val((c === "*" ? "" : c));
        var h = 0;
        for (var e = 0; e < k.resultsData.resultsets.length; e++) {
            if (k.resultsData.resultsets[e].total) {
                h += parseInt(k.resultsData.resultsets[e].total)
            }
        }
        $results.find("#search-results-total-count").text(h + " Results");
        var l = "";
        var j = "";
        if (a === "all") {
            l = $resultsTarget;
            j = $resultsTemplate;
            jQuery("#content").removeClass("tab-selected")
        } else {
            l = $resultsCategoryTarget;
            j = $resultsCategoryTemplate;
            jQuery("#content").addClass("tab-selected")
        }
        var b = f > 1;
        $searchFilterBar.trigger("search:complete", [k, a, g, d, b]);
        $searchFilterBlock.trigger("search:complete", [k, g]);
        loadSearchTemplate(l, k, j, b, false);
        if (a === "all") {
            jQuery(".search-results-section .view-all-link").on("click", function(n) {
                n.preventDefault();
                var m = jQuery(this).attr("data-tab-param");
                changeHistoryQueryParam(CATEGORIES_PARAM_NAME, m, false, false, false);
                searchFromURL()
            })
        }
        dtmEventTrigger("PS.ranSearch", {})
    }
    function buildQueryData(d, c, f, g, e) {
        var j = {
            page: g || 1,
            m_Sort: e || ""
        };
        j[QUERY_PARAM_NAME] = d || DEFAULT_QUERY;
        var b = 10;
        var a = (c === "all");
        j["x" + b] = (c !== "page" && !a) ? CATEGORIES_PARAM_NAME : "";
        j["q" + b++] = (c !== "page" && !a) ? c : "";
        var h = Object.keys(f);
        jQuery.each(h, function() {
            var k = "";
            jQuery.each(f[this], function() {
                k += (k.length == 0 ? "" : "|") + this
            });
            if (k.length > 0) {
                j["x" + b] = this;
                j["q" + b++] = k
            }
        });
        if (a) {
            j["do"] = "landing2"
        } else {
            j.m_Count = (c === "resource" || c === "aem-author") ? 24 : 25
        }
        return j
    }
    function search(a, c, f, e, b) {
        queryData = buildQueryData(a, c, f, e, b);
        var d = "//sp10050dad.guided.ss-omtrdc.net";
        if (document.URL.indexOf("stage.exploridewebdesign.com") > -1 || document.URL.indexOf("aem-local-author") > -1) {
            d = "//stage-sp10050dad.guided.ss-omtrdc.net/"
        }
        $searchLoadingOverlay.show();
        jQuery.ajax({
            url: d,
            dataType: "jsonp",
            data: queryData,
            jsonp: "callback",
            contentType: "application/json",
            success: function(h) {
                var g = processSPData(c, e, h);
                updateUIOnSearchComplete(a, c, e, f, b, g)
            },
            error: function(j, g, h) {
                console.log(g + " -- S&P request failed")
            },
            complete: function(g, h) {
                $searchLoadingOverlay.hide()
            }
        })
    }
    function getSearchParamsFromURL() {
        var e = {};
        e.facets = {};
        e.query = DEFAULT_QUERY;
        e.categories = DEFAULT_CATEGORIES;
        e.sort = "";
        function f(h) {
            var g = ["skillLevels", "tools", "subjects", "authors", "roles", "contentType", "post-tags"];
            return jQuery.inArray(h, g)
        }
        var a = jQuery.query.parseNew(location.search).keys;
        var d = Object.keys(a);
        for (var c = 0; c < d.length; c++) {
            var b = d[c];
            switch (b) {
            case QUERY_PARAM_NAME:
                e.query = a[b];
                break;
            case CATEGORIES_PARAM_NAME:
                e.categories = a[b];
                break;
            case "sort":
                e.sort = a[b];
                break;
            default:
                if (f(b) > -1) {
                    if (typeof a[b] == "string") {
                        e.facets[b] = a[b].split("|")
                    }
                }
            }
        }
        return e
    }
    window.searchFromURL = function(a) {
        if (a === undefined) {
            a = 1
        }
        var b = getSearchParamsFromURL();
        search(b.query, b.categories, b.facets, a, b.sort)
    }
    ;
    jQuery(window).ready(function(a) {
        window.searchFromURL()
    })
}
if (jQuery("#search-filter-left").length) {
    var $filterLeftComp = jQuery("#search-filter-left")
      , $filtersTarget = $filterLeftComp.find("#search-filter-left-target")
      , $filtersTemplate = $filterLeftComp.find("#search-filter-sections__handlebars-template");
    $filterLeftComp.on("click", ".search-filter-header a", function(b) {
        b.preventDefault();
        var a = jQuery(this);
        if (a.hasClass("open")) {
            a.parent().siblings(".search-filter-options").slideUp(400, function() {
                a.removeClass("open")
            })
        } else {
            a.parent().siblings(".search-filter-options").slideDown(400, function() {
                a.addClass("open")
            })
        }
    });
    $filterLeftComp.on("click", ".search-filter-selected-option-remove", function(h) {
        h.preventDefault();
        var g = jQuery(this).parent();
        var c = g.attr("data-label");
        var b = g.attr("data-value");
        var d = getParameterByName(c);
        var f = a(b, d);
        changeHistoryQueryParam(c, f, (f === ""), false, false);
        window.searchFromURL();
        function a(e, j) {
            if (j.indexOf(e) == 0) {
                return j.replace(new RegExp(e.replace("+", "\\+") + "\\|?"), "")
            }
            return j.replace(new RegExp("\\|?" + e.replace("+", "\\+")), "")
        }
    });
    $filterLeftComp.on("click", ".search-filter-options a", function(d) {
        d.preventDefault();
        var a = jQuery(this).attr("data-label");
        var f = jQuery(this).attr("data-value");
        var b = getParameterByName(a);
        var c = (b === "" ? "" : b + "|") + f;
        changeHistoryQueryParam(a, c, false, false, false);
        window.searchFromURL()
    });
    $filterLeftComp.on("search:complete", function(b, a) {
        loadSearchTemplate($filtersTarget, a.resultsData, $filtersTemplate, false, undefined);
        $filterLeftComp.find(".search-filter-options a.selected").each(function(c, d) {
            setFacetActive(jQuery(d))
        });
        if (document.URL.indexOf("categories=blog") > -1) {
            jQuery("#search-filter-left .search-filter-options li a[data-label='contentType']").closest(".search-filter-section").hide()
        }
    });
    function setFacetActive(b) {
        var a = b.parents(".search-filter-section").find(".search-filter-selected-option").eq(0);
        if (a.find(".search-filter-selected-text").text() !== "") {
            var d = a.parent();
            a = a.clone();
            d.append(a)
        }
        var c = b.find(".search-filter-option-text").text();
        a.find(".search-filter-selected-text").text(c);
        if (!a.hasClass("active")) {
            a.addClass("active")
        }
        a.attr("data-label", b.data("label"));
        a.attr("data-value", b.data("value"))
    }
}
if (jQuery("#search-filter-bar").length) {
    var $filterBar = jQuery("#search-filter-bar")
      , $searchSortTarget = $filterBar.find("#search-sort")
      , $searchSortTemplate = $filterBar.find("#search-sort__handlebars-template")
      , $searchPageStart = $filterBar.find("#search-page-start")
      , $searchPageEnd = $filterBar.find("#search-page-end")
      , $searchResultsTotal = $filterBar.find(".search-results-total")
      , $searchResultsSectionTitle = jQuery(".search-results-section h4")
      , $mobileSearchTabsDropdown = jQuery("#search-filter-tabs-select");
    $filterBar.on("search:complete", function(g, d, c, f, b, a) {
        updateFilterBarUI(d, c, f, b, a)
    });
    $searchSortTarget.on("change", function() {
        changeHistoryQueryParam("sort", jQuery(this).val(), false, false);
        window.searchFromURL()
    });
    $filterBar.on("click", "#search-filter-tabs a", function(b, a) {
        b.preventDefault();
        changeHistoryQueryParam("categories", jQuery(this).attr("data-categories"), false, false);
        window.searchFromURL()
    });
    $mobileSearchTabsDropdown.on("change", function() {
        changeHistoryQueryParam("categories", jQuery(this).val(), false, false);
        window.searchFromURL()
    });
    jQuery(window).on("popstate", function() {
        window.searchFromURL()
    });
    function updateFilterBarUI(f, e, h, c, b) {
        var a = jQuery("#content #search-filter-tabs .tab-title [data-categories='" + e + "']");
        var d = a.parent();
        if (!d.hasClass("ui-tabs-active")) {
            d.siblings().removeClass("ui-tabs-active");
            d.addClass("ui-tabs-active")
        }
        if ($mobileSearchTabsDropdown.length) {
            $mobileSearchTabsDropdown.val(e)
        }
        if (e !== "all") {
            var g = f.resultsData;
            if (undefined === b) {
                b = false
            }
            loadSearchTemplate($searchSortTarget, g.menus[0], $searchSortTemplate, false, function() {
                if (e !== "course") {
                    jQuery("#search-filter-bar #search-sort option[value='average_rating']").hide()
                }
            });
            $searchPageStart.text(g.general.pageLower > 1 ? "1" : g.general.pageLower);
            $searchPageEnd.text(g.general.pageUpper);
            $searchResultsTotal.text(g.general.total);
            $searchResultsSectionTitle.text(mapTabNameToResultSetName(e))
        }
    }
    function mapTabNameToResultSetName(a) {
        switch (a) {
        case "course":
            return "courses";
        case "blog":
            return "blogs";
        case "resource":
            return "resources";
        case "aem-author":
            return "authors";
        default:
            return a
        }
    }
}
if (jQuery(".news-table-container").length) {
    var $component = jQuery(".news-table-container");
    $component.on("click", "a.news-table-see-more", function(c) {
        c.preventDefault();
        var b = 9
          , a = jQuery(".news-table-container").find(".news-card.hide:lt(" + b + ")");
        a.slideDown(400, function() {
            if (a.length < b) {
                jQuery(this).hide()
            }
        }).removeClass("hide")
    });
    $component.on("click", "a.news-table-back-to-top", function(a) {
        a.preventDefault();
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700)
    })
}
if (jQuery(".news-archive-container").length) {
    var $component = jQuery(".news-archive-container");
    var $newsCards = jQuery("[data-newsroom-date]");
    var $yearLinksContainer = $component.find(".news-archive-links");
    var cardYearArr = [];
    jQuery.each($newsCards, function(a, c) {
        var b = jQuery(c).data("newsroom-date");
        if (b != undefined && jQuery.inArray(b, cardYearArr) === -1) {
            cardYearArr.push(b)
        }
    });
    cardYearArr = cardYearArr.sort(function(d, c) {
        return d - c
    });
    jQuery.each(cardYearArr, function(a, d) {
        var c = d
          , b = '<li><a href="#" data-show-newsroom-date="' + c + '">' + c + "</a></li>";
        $yearLinksContainer.prepend(b)
    });
    $component.on("click", "[data-show-newsroom-date]", function(b) {
        b.preventDefault();
        var a = jQuery(this).data("show-newsroom-date");
        if (a === "all") {
            $newsCards.show().removeClass("hide")
        } else {
            $newsCards.hide();
            jQuery("[data-newsroom-date=" + a + "]").show().removeClass("hide")
        }
        jQuery(".news-archive-hide-button").hide()
    });
    $component.on("click", ".news-archive-title, .news-archive-dd", function(c) {
        c.preventDefault();
        var b = $component.find(".news-archive-links")
          , f = $component.find(".news-archive-dd")
          , a = "&#9650;"
          , d = "&#9660;";
        b.slideToggle(400);
        if ($component.hasClass("news-archive-dd-expanded")) {
            $component.toggleClass("news-archive-dd-expanded");
            f.html(d)
        } else {
            $component.toggleClass("news-archive-dd-expanded");
            f.html(a)
        }
    })
}
if (jQuery(".awards-table-component").length) {
    var $component = jQuery(".awards-table-component");
    $component.on("click", "a.awards-table-see-more", function(c) {
        c.preventDefault();
        var b = 6
          , a = $component.find(".awards-row.hide:lt(" + b + ")");
        a.slideDown(400, function() {
            if (a.length < b) {
                jQuery(this).hide()
            }
        }).removeClass("hide")
    });
    $component.on("click", "a.awards-table-back-to-top", function(a) {
        a.preventDefault();
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700)
    })
}
if (jQuery(".video-component").length) {
    var $components = jQuery(".video-component");
    $components.on("click", ".video-new-window > div", function(a) {
        a.preventDefault();
        window.open(jQuery(this).parent().children("iframe").attr("src"), "_blank")
    });
    $components.on("click", ".video-modal", function(a) {
        a.preventDefault()
    });
    window.psYtVideos = window.psYtVideos || {};
    psYtVideos.vidConfigs = psYtVideos.vidConfigs || [];
    var $ytApiVids = $components.find(".video-comp-yt-api-vid");
    if ($ytApiVids.length) {
        $ytApiVids.each(function(c, d) {
            var a = jQuery(d);
            var e = "video_comp_vid" + c;
            a.attr("id", e);
            var b = a.data("vid-comp-id");
            if (typeof b !== "undefined" && b.length) {
                psYtVideos.vidConfigs.push({
                    videoElId: e,
                    videoSettings: {
                        height: "100%",
                        width: "100%",
                        videoId: b,
                        events: {
                            onStateChange: function(f) {
                                if (f.data === 1) {
                                    jQuery(f.target.a).closest(".video-component").removeClass("video-show-button")
                                }
                            }
                        },
                        playerVars: {
                            autoplay: 0,
                            controls: 1,
                            cc_load_policy: 0,
                            enablejsapi: 1,
                            iv_load_policy: 3,
                            loop: 0,
                            modestbranding: 1,
                            origin: document.domain,
                            rel: 0
                        }
                    }
                })
            }
        })
    }
}
(function() {
    var w = false
      , r = false
      , t = jQuery("#header_searchForm")
      , e = t.parents(".header_browse")
      , o = e.find(".header_nav_search")
      , v = e.find(".header_nav_search .header_dropdown")
      , c = v.find(".closebutton")
      , b = t.find(".header_search--input")
      , s = ""
      , k = t.find(".search-menu__search-term--shadow")
      , u = t.parents(".search-button__component").find("#header_dropdown--resultList")
      , f = t.parents(".search-button__component").find("#header_dropdown--resultListCourses")
      , q = t.parents(".search-button__component").find("#header_dropdown--resultListPaths")
      , n = 3;
    b.on("keyup", function(x) {
        g(x)
    });
    b.on("keydown", function(x) {
        p(x)
    });
    c.on("click", function() {
        h()
    });
    o.on("click", function(x) {
        if (jQuery(x.target).parents("#header_tabs--search").length == 0 && jQuery(x.target).parents("#header_searchForm").length == 0) {
            h()
        }
    });
    c.on("keypress", function(x) {
        if (x.which == 13) {
            h()
        }
    });
    if (document.URL.indexOf("www.exploridewebdesign.com") > -1 || document.URL.indexOf("www-stage.exploridewebdesign.com") > -1) {
        jQuery("header a.header_search--url").attr("href", "/search")
    }
    function g(D) {
        if (D.which == "27") {
            D.preventDefault();
            h()
        } else {
            if (D.which == "40") {
                D.preventDefault();
                y()
            } else {
                if (D.which == "38") {
                    D.preventDefault();
                    y(true)
                } else {
                    if (D.which == "39") {
                        D.preventDefault();
                        var x = k.val();
                        var C = b.val().trim();
                        if (x !== C && C.length >= n) {
                            b.val(x);
                            b.trigger("keyup")
                        }
                    } else {
                        if (D.which == "13") {
                            var B = u.find(".header_dropdown--resultInfo.selected a");
                            if (B.length) {
                                B[0].click()
                            } else {
                                s = b.val().trim();
                                var z = encodeURIComponent(s);
                                if (s == "") {
                                    z = "*"
                                }
                                window.location.href = e.find(".header_search--url").attr("href") + "?q=" + z
                            }
                        } else {
                            var E;
                            if (E) {
                                clearTimeout(E)
                            }
                            if (b) {
                                s = b.val().trim();
                                var A = k.val();
                                var x = s + A.substr(s.length);
                                k.val(x)
                            }
                            E = setTimeout(function() {
                                if (s !== undefined) {
                                    var F = jQuery.trim(s);
                                    if (F.length >= n) {
                                        m()
                                    } else {
                                        if (F.length < n) {
                                            l()
                                        }
                                    }
                                }
                            }, 350)
                        }
                    }
                }
            }
        }
        function y(H) {
            var G = u.find(".header_dropdown--resultInfo.selected");
            if (G.length) {
                var F = (H ? G.prev() : G.next());
                if (F.length) {
                    G.removeClass("selected");
                    F.addClass("selected")
                }
            } else {
                if (H) {
                    u.find(".header_dropdown--resultInfo").last().addClass("selected")
                } else {
                    u.find(".header_dropdown--resultInfo").first().addClass("selected")
                }
            }
        }
    }
    function p(x) {
        if (x.which == "40") {
            x.preventDefault()
        } else {
            if (x.which == "38") {
                x.preventDefault()
            }
        }
    }
    function l() {
        u.html("");
        f.html("");
        q.html("");
        k.val("")
    }
    jQuery(".search-button__component .header_search--form").on("focus input", function(y) {
        y.preventDefault();
        var x = jQuery(".header_search--input").val().trim();
        if (x.length >= 3) {
            a()
        } else {
            if (x.length == 0) {
                h()
            }
        }
    });
    function a() {
        if (!r) {
            d();
            jQuery(".header_nav_courses .header_dropdown").hide();
            jQuery(".header_nav_courses .header_nav_primary").removeClass("open");
            jQuery(".indbiz-dropdown").removeClass("active");
            jQuery(".indbiz-dropdown--content").hide();
            jQuery("body").removeClass("header-menu-open");
            v.fadeIn(300);
            b.focus();
            r = true;
            window.scrollTo(0, 0)
        }
    }
    function h() {
        if (r) {
            j();
            v.fadeOut(300);
            l();
            b.val("");
            r = false
        }
    }
    function d() {
        if (!w) {
            window.scrollPosition = window.pageYOffset;
            jQuery("#content").css("margin-top", -scrollPosition + "px");
            jQuery("body").addClass("header-popup-open");
            w = true
        }
    }
    function j() {
        if (w) {
            jQuery("body").removeClass("header-popup-open");
            jQuery("#content").css("margin-top", 0);
            window.scrollTo(0, scrollPosition);
            w = false
        }
    }
    function m() {
        var x = new RegExp(" ","g");
        var C = "//content.atomz.com/autocomplete/sp10/05/0d/ad/?query=" + s.replace(x, "-");
        jQuery.ajax({
            url: C,
            dataType: "jsonp",
            jsonp: "callback",
            contentType: "application/json",
            success: function(D) {
                if (D.length > 0) {
                    y(D);
                    A(u, D)
                } else {
                    l()
                }
            },
            error: function(F, D, E) {}
        });
        jQuery.ajax({
            type: "GET",
            dataType: "jsonp",
            url: "https://sp10050dad.guided.ss-omtrdc.net/?callback=searchAutoComp&page=1&q=" + s + "&do=landing2",
            contentType: "application/json",
            success: function(E) {
                for (var D = 0; E.resultsets[D]; D++) {
                    if (E.resultsets[D].name == "courses") {
                        z(f, E.resultsets[D])
                    } else {
                        if (E.resultsets[D].name == "paths") {
                            B(q, E.resultsets[D])
                        }
                    }
                }
            }
        });
        function A(E, I) {
            var G = '<ul class="header_dropdown--lists">';
            var H = e.find(".header_search--url").attr("href");
            var D = new RegExp("-","g");
            for (var F = 0; F < I.length && F < 5; F++) {
                G += '<li class="header_dropdown--resultInfo">';
                G += '<a class="header_dropdown--resultInfoTitle" href="' + H + "?q=" + I[F].replace(D, "%20") + '">' + I[F].replace(D, " ") + "</a>";
                G += "</li>"
            }
            G += "</ul>";
            E.html(G)
        }
        function z(D, G) {
            var F = '<ul class="header_dropdown--lists">';
            F += '<li class="first">Courses</li>';
            for (var E = 0; E < G.results.length; E++) {
                F += "<li>";
                F += '<a href="https://www.exploridewebdesign.com/courses/' + G.results[E].courseName + '">' + G.results[E].title + "</a>";
                F += "</li>"
            }
            F += '<li class="last"><a href="https://www.exploridewebdesign.com/search?categories=course&q=' + encodeURI(s) + '">See more results &gt;</a></li>';
            F += "</ul>";
            D.html(F)
        }
        function B(D, G) {
            var F = '<ul class="header_dropdown--lists">';
            F += '<li class="first">Paths</li>';
            for (var E = 0; E < G.results.length; E++) {
                F += '<li><div class="item">';
                F += '<a href="https://www.exploridewebdesign.com/paths/' + G.results[E].urlSlug + '">';
                F += '<div class="item-each">';
                F += '<div class="item-image"><img src="' + G.results[E].thumbnailUrl + '" alt="' + G.results[E].title + '" /></div>';
                F += '<div class="item-text">' + G.results[E].title;
                F += "<ul>";
                F += "<li><span>" + G.results[E].numberOfCourses + "</span> Courses</li>";
                F += "<li><span>" + G.results[E].numberOfHours + "</span> Hours</li>";
                F += "</ul>";
                F += "</div>";
                F += "</div>";
                F += "</a>";
                F += "</div></li>"
            }
            F += '<li class="last"><a href="https://www.exploridewebdesign.com/product/paths">View all paths &gt;</a></li>';
            F += "</ul>";
            D.html(F)
        }
        function y(I) {
            var E = new RegExp("-","g");
            var F = I[0].replace(E, " ");
            var H = F.toLowerCase();
            var G = s.toLowerCase();
            var D = s + F.substr(H.indexOf(G) + s.length);
            k.val(D)
        }
    }
    jQuery(document).on({
        click: function(x) {
            x.preventDefault();
            if (!jQuery("body").hasClass("header-menu-open")) {
                d();
                jQuery(".header_nav_courses .header_dropdown").hide();
                jQuery(".header_nav_courses .header_nav_primary").removeClass("open");
                h();
                jQuery("body").addClass("header-menu-open")
            } else {
                j();
                jQuery("body").removeClass("header-menu-open")
            }
        }
    }, ".header_menu");
    jQuery(".header_nav_courses .header_nav_primary").click(function(x) {
        x.preventDefault();
        if (jQuery(this).hasClass("open")) {
            j();
            jQuery(".header_nav_courses .header_dropdown").fadeOut(300);
            jQuery(this).removeClass("open")
        } else {
            h();
            jQuery(".indbiz-dropdown").removeClass("active");
            jQuery(".indbiz-dropdown--content").hide();
            jQuery("body").removeClass("header-menu-open");
            jQuery(".header_nav_courses .header_dropdown").fadeIn(300);
            jQuery(this).addClass("open");
            d()
        }
    });
    jQuery(document).on({
        click: function(x) {
            if (jQuery(x.target).parents("#header_tabs").length == 0 && jQuery(x.target).attr("class") && jQuery(x.target).attr("class").indexOf("header_nav_primary") == -1 && jQuery(x.target).parents(".header_nav_primary").length == 0 && jQuery(x.target).parents(".indbiz-dropdown--column").length == 0 && jQuery(x.target).attr("class") && jQuery(x.target).attr("class").indexOf("header_nav_secondary") == -1 && jQuery(x.target).parents(".header_nav_secondary").length == 0) {
                j();
                jQuery(".header_nav_courses .header_dropdown").fadeOut(300);
                jQuery(".header_nav_courses .header_nav_primary").removeClass("open");
                jQuery(".indbiz-dropdown--content").fadeOut(300);
                jQuery(".indbiz-dropdown").removeClass("active")
            }
        },
        touchstart: function(x) {
            if (jQuery(x.target).parents("#header_tabs").length == 0 && jQuery(x.target).attr("class") && jQuery(x.target).attr("class").indexOf("header_nav_primary") == -1 && jQuery(x.target).parents(".header_nav_primary").length == 0 && jQuery(x.target).parents(".indbiz-dropdown--column").length == 0 && jQuery(x.target).attr("class") && jQuery(x.target).attr("class").indexOf("header_nav_secondary") == -1 && jQuery(x.target).parents(".header_nav_secondary").length == 0) {
                j();
                jQuery(".header_nav_courses .header_dropdown").fadeOut(300);
                jQuery(".header_nav_courses .header_nav_primary").removeClass("open");
                jQuery(".indbiz-dropdown--content").fadeOut(300);
                jQuery(".indbiz-dropdown").removeClass("active")
            }
        }
    }, ".header_browse");
    jQuery("#header_tabs .closebutton").click(function() {
        j();
        jQuery(".header_nav_courses .header_dropdown").fadeOut(300);
        jQuery(".header_nav_courses .header_nav_primary").removeClass("open")
    });
    jQuery("#header_tabs .closebutton").keypress(function(x) {
        if (x.which = 13) {
            j();
            jQuery(".header_nav_courses .header_dropdown").fadeOut(300);
            jQuery(".header_nav_courses .header_nav_primary").removeClass("open")
        }
    });
    jQuery(document).on({
        mouseenter: function() {
            var x = jQuery(this).attr("data-tab");
            jQuery("#header_tabs li.header_tabs_link").removeClass("active");
            jQuery(".header_tabs_content").removeClass("active");
            jQuery(this).addClass("active");
            jQuery("#" + x).addClass("active")
        }
    }, "#header_tabs li.header_tabs_link");
    jQuery(".biz-dropdown .header_nav_secondary").click(function(y) {
        y.preventDefault();
        var x = jQuery(".biz-dropdown");
        if (x.hasClass("active")) {
            j();
            jQuery(".biz-dropdown .indbiz-dropdown--content").fadeOut(300);
            x.removeClass("active")
        } else {
            h();
            jQuery(".header_nav_courses .header_dropdown").hide();
            jQuery(".header_nav_courses .header_nav_primary").removeClass("open");
            jQuery(".biz-dropdown .indbiz-dropdown--content").fadeIn(300);
            x.addClass("active");
            d()
        }
    });
    jQuery(".indbiz-dropdown .closebutton").click(function() {
        j();
        jQuery(".indbiz-dropdown--content").fadeOut(300);
        jQuery(".indbiz-dropdown").removeClass("active")
    });
    jQuery(".indbiz-dropdown .closebutton").keypress(function(x) {
        if (x.which = 13) {
            j();
            jQuery(".indbiz-dropdown--content").fadeOut(300);
            jQuery(".indbiz-dropdown").removeClass("active")
        }
    })
}
)();
if (jQuery("#ftr").length) {
    var $dd = jQuery("#ftr .ftr-cat-links-col");
    $dd.on("click", function() {
        if (jQuery(window).width() <= 768) {
            var a = jQuery(this).find(".ftr-dd");
            if (a.text() === "â•²â•±") {
                a.text("â•±â•²")
            } else {
                a.text("â•²â•±")
            }
            a.parent().find(".ftr-cat-links").slideToggle("slow")
        }
    })
}
jQuery(".copyright-year").text(new Date().getFullYear());
function setTextHighlights() {
    function a(b) {
        var c = jQuery(b).text().replace(/ /g, "\u00a0");
        jQuery(b).text(c);
        jQuery(b).addClass("stamped")
    }
    jQuery(".text-highlight-gradient:not(.stamped)").each(function(b, c) {
        a(c);
        jQuery(c).append("<span class='text-highlight-gradient-block'></span>");
        jQuery(c).css("background", "none")
    });
    jQuery(".scribble-under:not(.stamped)").each(function(c, d) {
        a(d);
        var b = jQuery(d).attr("class").replace("scribble-under", "").replace("stamped", "").trim();
        var e = jQuery(d).text().length;
        if (e < 8) {
            jQuery(d).append('<span class="scribble-under-block"><img src="/etc/clientlibs/exploridewebdesign/main/images/scribbles/line-' + b + '.png" alt="Underline" /></span>')
        } else {
            jQuery(d).append('<span class="scribble-under-block scribble-long"><img src="/etc/clientlibs/exploridewebdesign/main/images/scribbles/line-long-' + b + '.png" alt="Underline" /></span>')
        }
    });
    jQuery(".scribble-circle:not(.stamped)").each(function(c, d) {
        a(d);
        var b = jQuery(d).attr("class").replace("scribble-circle", "").replace("stamped", "").trim();
        jQuery(d).append('<span class="scribble-circle-block"><img src="/etc/clientlibs/exploridewebdesign/main/images/scribbles/circle-' + b + '.png" alt="Circle" /></span>')
    })
}
setTextHighlights();
jQuery(window).on("resize", function() {
    setTextHighlights()
});
jQuery(".text-4 span.remove-bottom-margin").closest("p").addClass("remove-bottom-margin");
jQuery(".text-4 p:last-of-type span.remove-bottom-margin").closest(".text-4").addClass("remove-bottom-margin");
var colorClassNames = ["tc-black", "tc-white", "tc-gray"];
[].forEach.call(colorClassNames, function(a) {
    jQuery(".text-4 li span." + a).each(function(d, e) {
        var f = jQuery(e);
        var b = false;
        var c = 0;
        while (!b && c < 10) {
            f = f.parent();
            if (f.contents().length == 1) {
                if (f.prop("tagName") == "LI") {
                    f.addClass(a);
                    b = true
                }
            } else {
                b = true
            }
            c++
        }
    })
});
jQuery(".text-3 span.remove-bottom-margin").closest("p").addClass("remove-bottom-margin");
function displayTargetedSections() {
    if (typeof wcmmodedisabled != "undefined" && wcmmodedisabled) {
        if (typeof selectedInterest != "undefined") {
            jQuery('.targeted-audience[data-targeted-profile="' + selectedInterest + '"]').siblings(".targeted-audience").hide();
            jQuery('.targeted-audience[data-targeted-profile="' + selectedInterest + '"]').show()
        } else {
            if (typeof profiledInterest != "undefined") {
                jQuery('.targeted-audience[data-targeted-profile="' + profiledInterest + '"]').siblings(".targeted-audience").hide();
                jQuery('.targeted-audience[data-targeted-profile="' + profiledInterest + '"]').show()
            }
        }
        if (typeof selectedConsumerType != "undefined" && selectedConsumerType == "business") {
            jQuery('.targeted-audience[data-targeted-profile="business"]').siblings(".targeted-audience").hide();
            jQuery('.targeted-audience[data-targeted-profile="business"]').show()
        }
        if (window.visitorCountry) {
            jQuery('.targeted-audience[data-targeted-countries*="' + visitorCountry + '"]').siblings(".targeted-audience").hide();
            jQuery('.targeted-audience[data-targeted-countries*="' + visitorCountry + '"]').show()
        } else {
            window.setTimeout(function() {
                if (window.visitorCountry) {
                    jQuery('.targeted-audience[data-targeted-countries*="' + visitorCountry + '"]').siblings(".targeted-audience").hide();
                    jQuery('.targeted-audience[data-targeted-countries*="' + visitorCountry + '"]').show()
                }
            }, 1000)
        }
        if (jQuery(".targeted-language").length > 0) {
            jQuery.ajax({
                url: "https://ajaxhttpheaders.appspot.com",
                dataType: "jsonp",
                success: function(d) {
                    var c = d["Accept-Language"];
                    if (c.indexOf(";" > 0)) {
                        var a = c.split(";")[0].split(",");
                        for (i = 0; i < a.length; i++) {
                            if (a[i].trim().length == 2) {
                                var b = a[i].trim();
                                jQuery('.targeted-audience[data-targeted-languages*="' + b + '"]').siblings(".targeted-audience").hide();
                                jQuery('.targeted-audience[data-targeted-languages*="' + b + '"]').show();
                                break
                            }
                        }
                    }
                }
            })
        }
    }
}
jQuery(document).ready(function() {
    if (jQuery(".targeted-audience").length > 0) {
        displayTargetedSections()
    }
});
if (jQuery(".linklist-subnav").length) {
    jQuery(document).on({
        click: function(b) {
            var a = jQuery(b.target).closest(".linklist-subnav");
            a.find("ul").slideToggle("slow");
            a.toggleClass("open")
        }
    }, ".linklist-subnav--mobile")
}
if (jQuery(".link a[data-anchor]").length) {
    jQuery(document).ready(function() {
        jQuery(".link a[data-anchor]").each(function(c, d) {
            jQuery(d).click(function(f) {
                if (typeof jQuery(d).data("anchor") != "undefined") {
                    location.hash = "#" + jQuery(d).data("anchor");
                    window.anchorSetByModal = true
                }
            })
        });
        if (location.hash != "") {
            var b = location.hash.slice(1, location.hash.length);
            var a = jQuery("[data-anchor='" + b + "']");
            if (a.length) {
                a.click()
            }
        }
        document.addEventListener("afterClose.fb", function() {
            if (window.anchorSetByModal) {
                history.pushState("", document.title, window.location.pathname + window.location.search);
                window.anchorSetByModal = false
            }
        })
    })
}
if (document.querySelectorAll("img[data-img-width]").length) {
    function resizeImage(e) {
        var a = parseInt(e.dataset.imgWidth);
        if (a !== 100) {
            var d = e.width;
            var b = 0;
            if (typeof d === "undefined" || d == 0 || d == 1) {
                setTimeout(function() {
                    resizeImage(e)
                }, 250)
            } else {
                d = e.width;
                var c = Math.round(d * (a / 100));
                e.style.width = c + "px";
                delete e.dataset.imgWidth
            }
        }
    }
    var resizedImages = document.querySelectorAll("img[data-img-width]");
    for (var i = 0; i < resizedImages.length; ++i) {
        resizeImage(resizedImages[i])
    }
}
if (jQuery("img.overflow").length > 0) {
    function resizeAllOverflows() {
        jQuery("img.overflow").each(function(a, b) {
            var c = jQuery(b).outerHeight();
            jQuery(b).parent().css("height", c + "px")
        })
    }
    jQuery(window).resize(function() {
        resizeAllOverflows()
    });
    resizeAllOverflows();
    jQuery("img.overflow").show();
    var prev_handler = window.onload;
    window.onload = function() {
        if (prev_handler) {
            prev_handler()
        }
        resizeAllOverflows()
    }
}
jQuery(".modal-wrapper").each(function(d, c) {
    var a = jQuery(c);
    var b = a.find(".modal-override-width").val();
    if (b == "") {
        jQuery(this).css("width", "800px")
    }
    jQuery(".fancybox").fancybox({
        helpers: {
            overlay: {
                css: {
                    background: "rgba(0,0,0,0.5)"
                }
            }
        }
    })
});
jQuery(".column-control-container>.row.add-flex>.columns").each(function(a, b) {
    if (jQuery(b).children().length == 1) {
        jQuery(b).children(".generic-block").css("height", "100%");
        jQuery(b).children(".generic-block").children(".generic-block-wrapper").css("height", "100%")
    }
});
if (jQuery(".section.tabs").length) {
    var hash = location.hash;
    jQuery(".tabs--list").each(function() {
        var a = jQuery(this);
        a.find("ul li.tab--item").on("click", function(d) {
            d.preventDefault();
            var c = jQuery(this);
            var b = jQuery(this).attr("data-tab");
            c.closest("ul").find("li.tab--item").removeClass("active");
            c.addClass("active");
            a.find(".tabs--content .generic-block-wrapper:not(:hidden)").removeClass("active").hide();
            a.find(".generic-block-wrapper." + b).addClass("active").fadeIn();
            return false
        });
        a.find("ul li.tab--item:first").click();
        if (hash) {
            a.find('ul li.tab--item[data-tab="' + hash.slice(1) + '"]').click()
        }
    })
}
(function(a) {
    jQuery(document).ready(function() {
        window.$speakers = jQuery(".live_speakers");
        jQuery.each($speakers, function(c, d) {
            var e = jQuery(d)[0].outerHTML;
            var b = jQuery(this).parent().find(".speakers_modal .speakers_modal--content");
            b.html(e);
            b.find(".live_speakers.live_cards").addClass("active")
        });
        $speakers.click(function() {
            var b = jQuery(this).parent().find(".speakers_modal");
            b.fadeToggle()
        });
        jQuery(".speakers_modal--close").click(function() {
            var b = jQuery(this).closest(".speakers_modal");
            b.fadeToggle()
        })
    })
}
)(jQuery);
(function() {
    var a = false;
    if (!window.wcmmodedisabled && jQuery(".pricing-plans.section").closest(".columns").length > 0) {
        jQuery(".pricing-plans.section").prepend("<h1>WARNING: Pricing component must control its own columns. Remove this pricing component from column controller (but still inside a black generic block) to ensure it renders properly.</h1>")
    }
    jQuery("#individual").prop("checked", "true");
    jQuery('.pricing_plan--switcher input[type="radio"]').click(function() {
        var b = jQuery(this).attr("value");
        var d = jQuery("." + b);
        var c = jQuery(this).attr("id");
        jQuery(".pricing_plan--switcher label").each(function() {
            if (jQuery(this).attr("for") == c) {
                jQuery(this).css("color", "black")
            } else {
                jQuery(this).css("color", "white")
            }
        });
        jQuery(".pricing_plan--box, .pricing_wrapper").not(d).fadeOut(300, function() {
            jQuery(d).fadeIn(300, function() {
                if (a === false && jQuery(".pricing_wrapper.plans_business").length > 0 && jQuery(".pricing_wrapper.plans_business .pricing_features").length > 0 && jQuery(window).width() > 1024) {
                    var e = 0;
                    if (jQuery("header").length > 0) {
                        e = jQuery("header").outerHeight()
                    }
                    var f = jQuery(".plans_business .pricing_display");
                    var h = f.offset().top;
                    var j = f.outerHeight();
                    var g = h + j + f.parent()[0].querySelectorAll(".pricing_features")[0].offsetHeight;
                    jQuery(window).scroll(function(k) {
                        var l = window.pageYOffset - h + e;
                        if (jQuery(this).scrollTop() < (h - e)) {
                            f.css({
                                position: "relative",
                                top: "0px",
                                "z-index": "1"
                            })
                        }
                        if (jQuery(this).scrollTop() > (h - e) && jQuery(this).scrollTop() < (g - j - e)) {
                            f.css({
                                position: "relative",
                                top: l + "px",
                                "z-index": "1"
                            })
                        }
                        if (jQuery(this).scrollTop() > (g - j - e)) {
                            f.css({
                                position: "relative",
                                top: (g - h - j) + "px",
                                "z-index": "1"
                            })
                        }
                    });
                    a = true
                }
            })
        });
        if (b == "plans_business") {
            setSelectedConsumerType("business")
        } else {
            setSelectedConsumerType("individual")
        }
    });
    if (document.URL.indexOf("type=individual") > -1) {
        jQuery(".pricing_plan--switcher input[value='plans_individual']").click()
    } else {
        if (document.URL.indexOf("type=business") > -1 || (typeof selectedConsumerType != "undefined" && selectedConsumerType == "business")) {
            jQuery(".pricing_plan--switcher input[value='plans_business']").click()
        }
    }
    jQuery("a.tooltip_wrapper").click(function(b) {
        b.preventDefault()
    })
}
)();
document.addEventListener("DOMContentLoaded", function(b) {
    var k = 'a[href*="exploridewebdesign.com/individual/checkout/account-details"], a[href*="exploridewebdesign.com/checkout"], a[href*="exploridewebdesign.com/offer-landing"], a[href*="exploridewebdesign.com/gift-of-exploridewebdesign"][href*="billing"], a[href*="exploridewebdesign.com/buy"]';
    var o = function() {
        var p = document.querySelectorAll("[data-product-price], [data-product-annual-savings-percent]");
        [].forEach.call(p, function(q) {
            q.style.visibility = "visible"
        })
    };
    var f = function() {
        var p = document.querySelectorAll("[data-product-price]");
        [].forEach.call(p, function(q) {
            q.style.visibility = "hidden"
        })
    };
    var j = function() {
        var q = (window.navigator.userAgent.indexOf("MSIE") > -1 || window.navigator.userAgent.indexOf("Trident") > -1);
        var p = document.querySelectorAll(k);
        [].forEach.call(p, function(r) {
            r.dataset.legacyLink = r.href;
            r.href = "#";
            if (!q) {
                r.setAttribute("onclick", "alert('Still loading checkout service - please click again in a few seconds, or refresh the page.\\n\\nIf this message remains even after refreshing the page, something is wrong! Please let us know on Twitter at @exploridewebdesign!')")
            }
        })
    };
    var h = function() {
        var p = document.querySelectorAll("a[data-legacy-link]");
        [].forEach.call(p, function(q) {
            if (q.getAttribute("href") == "#") {
                q.href = q.dataset.legacyLink
            }
            q.removeAttribute("onclick");
            q.removeAttribute("data-legacy-link")
        })
    };
    var g = function(p, r) {
        var q = new XMLHttpRequest();
        q.open("GET", p, true);
        q.responseType = "json";
        q.onload = function() {
            var s = q.status;
            if (s === 200) {
                r(null, q.response)
            } else {
                r(s, q.response)
            }
        }
        ;
        q.send()
    };
    var c = function(q) {
        var p = document.querySelectorAll("[data-product-price]");
        [].forEach.call(p, function(s) {
            var r = s.dataset.productPrice;
            [].forEach.call(q.products, function(t) {
                [].forEach.call(t.options, function(v) {
                    if (v.marketingId === r) {
                        var x = function(E) {
                            var D = E.display.htmlTemplate;
                            s.innerHTML = D;
                            if (window.globalPromos && !s.hasAttribute("data-block-promos")) {
                                [].forEach.call(globalPromos, function(H) {
                                    if (H.validMarketingIds.indexOf(r) > -1) {
                                        if (H.discount.type == "percent") {
                                            if (s.className.indexOf("promo-original-price") > -1) {
                                                s.style.display = "inline-block"
                                            } else {
                                                if (s.className.indexOf("promo-off-price") > -1) {
                                                    s.parentElement.style.display = "block";
                                                    var F = s.parentElement.parentElement.getElementsByClassName("default");
                                                    if (F && F[0]) {
                                                        F[0].style.display = "none"
                                                    }
                                                    var G = H.discount.percent / 100;
                                                    s.setAttribute("data-show-percent", G)
                                                } else {
                                                    var G = H.discount.percent / 100;
                                                    var J = 1 - G;
                                                    if (s.hasAttribute("data-show-percent")) {
                                                        var I = parseFloat(s.getAttribute("data-show-percent"));
                                                        J = I * J
                                                    }
                                                    s.setAttribute("data-show-percent", J);
                                                    s.setAttribute("data-block-promos", "true")
                                                }
                                            }
                                        }
                                    }
                                })
                            }
                            if (s.hasAttribute("data-show-percent")) {
                                var B = E.price;
                                var y = parseFloat(s.getAttribute("data-show-percent"));
                                var A = (B * y).toFixed(2);
                                var z = A.toString().split(".")[0];
                                var C = A.toString().split(".")[1];
                                s.querySelector(".curr-major").innerText = z;
                                s.querySelector(".curr-minor").innerText = C
                            }
                        };
                        var u = null
                          , w = null;
                        [].forEach.call(v.pricing, function(y) {
                            if (typeof window.productTestId != "undefined" && y.testId === window.productTestId) {
                                w = y
                            } else {
                                if (y.testId === null) {
                                    u = y
                                }
                            }
                        });
                        if (w != null) {
                            x(w)
                        } else {
                            x(u)
                        }
                    }
                })
            })
        })
    };
    var a = function(r) {
        var p = document.querySelectorAll(k);
        var s = "https://www.exploridewebdesign.com/buy";
        var t = "https://billing.exploridewebdesign.com/gift-of-exploridewebdesign";
        var q = "https://www.exploridewebdesign.com/pricing/free-trial";
        if (document.URL.indexOf("-stage.exploridewebdesign") > -1 || document.URL.indexOf("aem-local-author.exploridewebdesign") > -1) {
            s = "https://www-stage.exploridewebdesign.com/buy";
            t = "https://billing-stage.exploridewebdesign.com/gift-of-exploridewebdesign";
            q = "https://www-stage.exploridewebdesign.com/pricing/free-trial"
        }
        [].forEach.call(p, function(w) {
            var x = w.href
              , u = null;
            if (typeof w.dataset.productSku === "undefined" || typeof w.dataset.productSku === "null") {
                u = getParameterByName("sku", x);
                w.dataset.productSku = u
            } else {
                u = w.dataset.productSku
            }
            if (u !== null && u !== "") {
                var v = x.substring(x.indexOf("?") + 1).split("&");
                [].forEach.call(r.products, function(y) {
                    [].forEach.call(y.options, function(A) {
                        if (A.marketingId === u) {
                            var B = function(H) {
                                var E = s;
                                if (x.indexOf("exploridewebdesign.com/checkout") > -1 || (x.indexOf("exploridewebdesign.com/buy") > -1 && x.indexOf("PROFESSIONAL-SG") > -1)) {
                                    if (!w.classList.contains("biz_qty_checkout")) {
                                        w.href = "#ps_pro_qty_modal";
                                        return
                                    }
                                }
                                if (x.indexOf("PLUS-FT") > -1 || x.indexOf("PREM-FT") > -1) {
                                    if (!w.classList.contains("free_trial_checkout")) {
                                        w.href = q;
                                        return
                                    }
                                }
                                if (x.indexOf("exploridewebdesign.com/gift-of-exploridewebdesign") > -1) {
                                    E = t
                                }
                                var G = (new Date()).valueOf();
                                var F = E + "?requestId=" + r.requestId + "&priceOptionId=" + H.id + "&legacyTrackingId=" + u + "&time=" + G;
                                if (v.length > 0) {
                                    for (var D = 0; D < v.length; D++) {
                                        if (v[D].indexOf("sku=") == -1 && v[D].indexOf("requestId=") == -1 && v[D].indexOf("priceOptionId=") == -1 && v[D].indexOf("legacyTrackingId=") == -1 && v[D].indexOf("time=") == -1) {
                                            F += "&" + v[D]
                                        }
                                    }
                                }
                                if (window.globalPromos) {
                                    [].forEach.call(globalPromos, function(I) {
                                        if (I.validMarketingIds.indexOf(u) > -1 && F.indexOf("promo=") == -1) {
                                            F = F + "&promo=" + I.code;
                                            w.text = "Save now"
                                        }
                                    })
                                }
                                w.href = F
                            };
                            var z = null
                              , C = null;
                            [].forEach.call(A.pricing, function(D) {
                                if (typeof window.productTestId != "undefined" && D.testId === window.productTestId) {
                                    C = D
                                } else {
                                    if (D.testId === null) {
                                        z = D
                                    }
                                }
                            });
                            if (C != null) {
                                B(C)
                            } else {
                                B(z)
                            }
                        }
                    })
                })
            }
        })
    };
    var m = function(u) {
        var w = document.querySelectorAll("[data-product-annual-savings-percent]")
          , q = ""
          , v = ""
          , p = "IND-Y-PLUS"
          , r = "IND-M-PLUS"
          , s = "{{annual-percent-savings}}";
        if (w.length) {
            [].forEach.call(u.products, function(x) {
                [].forEach.call(x.options, function(z) {
                    if (z.marketingId === p) {
                        var y = null
                          , A = null;
                        [].forEach.call(z.pricing, function(B) {
                            if (typeof window.productTestId != "undefined" && B.testId === window.productTestId) {
                                A = B
                            } else {
                                if (B.testId === null) {
                                    y = B
                                }
                            }
                        });
                        if (A != null) {
                            q = A.price
                        } else {
                            q = y.price
                        }
                    }
                    if (z.marketingId === r) {
                        var y = null
                          , A = null;
                        [].forEach.call(z.pricing, function(B) {
                            if (typeof window.productTestId != "undefined" && B.testId === window.productTestId) {
                                A = B
                            } else {
                                if (B.testId === null) {
                                    y = B
                                }
                            }
                        });
                        if (A != null) {
                            v = A.price
                        } else {
                            v = y.price
                        }
                    }
                })
            });
            if (q != "" && v != "") {
                var t = Math.floor(((v - q / 12) / v) * 100);
                [].forEach.call(w, function(x) {
                    x.innerHTML = x.innerHTML.replace(s, t)
                })
            }
        }
    };
    var d = function(p) {
        h();
        window.visitorLocale = p.data.locale;
        window.visitorCountry = p.data.country;
        c(p.data);
        a(p.data);
        m(p.data)
    };
    try {
        var l = false;
        setTimeout(function() {
            if (!l) {
                dtmEventTrigger("ps.pricingServiceTimeout", {})
            }
        }, 6000);
        if (document.querySelectorAll("[data-product-price]").length || document.querySelectorAll(k).length || document.querySelectorAll(".targeted-location").length) {
            var n = "https://www.exploridewebdesign.com/assets/images/logo-white.png";
            if (document.URL.indexOf("-stage.exploridewebdesign") > -1 || document.URL.indexOf("aem-local-author.exploridewebdesign") > -1) {
                n = "https://app-stage.exploridewebdesign.com/catalog/api/v1/localized-products"
            }
            if (typeof window.productParamOverride != "undefined") {
                n = n + window.productParamOverride
            }
            try {
                j();
                g(n, function(p, q) {
                    if (p !== null) {
                        console.log("Pricing catalog JSON failed: " + p);
                        dtmEventTrigger("ps.pricingServiceError", {})
                    } else {
                        var s = q;
                        if (typeof q == "string") {
                            s = JSON.parse(q)
                        }
                        window.pricingServiceChecks = 0;
                        var r = function() {
                            window.pricingServiceWaiting = true;
                            if ((window.promoCheckCompleted && window.targetFinished) || window.pricingServiceChecks > 30) {
                                if (typeof window.productParamOverride != "undefined") {
                                    if (n.indexOf(productParamOverride) == -1) {
                                        n = n + window.productParamOverride
                                    }
                                    g(n, function(t, u) {
                                        d(u);
                                        o();
                                        window.pricingServiceWaiting = false
                                    })
                                } else {
                                    d(s);
                                    o();
                                    window.pricingServiceWaiting = false
                                }
                            } else {
                                window.pricingServiceChecks++;
                                window.setTimeout(function() {
                                    r()
                                }, 100)
                            }
                        };
                        d(s);
                        l = true;
                        dtmEventTrigger("ps.pricingServiceSuccess", {});
                        if (window.promoCheckCompleted && window.targetFinished) {
                            o()
                        } else {
                            r()
                        }
                        document.addEventListener("at-content-rendering-succeeded", function() {
                            if (!window.pricingServiceWaiting) {
                                r()
                            }
                        }, false);
                        document.addEventListener("ps.promoTriggered", function() {
                            if (!window.pricingServiceWaiting) {
                                window.setTimeout(function() {
                                    r()
                                }, 100)
                            }
                        }, false)
                    }
                })
            } catch (e) {
                console.log("Placing price data from catalog failed: " + e);
                dtmEventTrigger("ps.pricingServiceError", {})
            }
        } else {
            l = true
        }
    } catch (e) {
        console.log("Pricing catalog parent function failed: " + e);
        dtmEventTrigger("ps.pricingServiceError", {})
    }
});
(function() {
    var b = false;
    var c = 10;
    function a() {
        if (!b) {
            window.scrollPosition = window.pageYOffset;
            jQuery("#content").css("margin-top", -scrollPosition + "px");
            jQuery("body").addClass("header-popup-open");
            b = true
        }
    }
    function e() {
        if (b) {
            jQuery("body").removeClass("header-popup-open");
            jQuery("#content").css("margin-top", 0);
            window.scrollTo(0, scrollPosition);
            b = false
        }
    }
    function d() {
        jQuery(".qty-display-number").text(c);
        jQuery(".biz_qty_checkout").each(function(h, j) {
            var g = j.href.split("&quantity=")[0];
            j.href = g + "&quantity=" + c
        });
        var f = jQuery("#ps_pro_qty_modal.display_pilot").length > 0;
        if (c <= 2) {
            jQuery(".qty-selector .qty-down").addClass("disabled")
        } else {
            if (c >= 50 || (f && c >= 10)) {
                jQuery(".qty-selector .qty-up").addClass("disabled");
                jQuery(".qty-sales-message.hidden").removeClass("hidden")
            } else {
                jQuery(".qty-selector .qty-down.disabled, .qty-selector .qty-up.disabled").removeClass("disabled");
                jQuery(".qty-sales-message:not(.hidden)").addClass("hidden")
            }
        }
    }
    jQuery(document).on({
        click: function(f) {
            f.preventDefault();
            a();
            if (jQuery(this).data("product-sku") == "PROFESSIONAL-SG-PILOT") {
                jQuery("#ps_pro_qty_modal").addClass("display_pilot");
                c = 10
            }
            jQuery("#ps_pro_qty_modal").show();
            d();
            window.setTimeout(function() {
                jQuery("#ps_pro_qty_modal").addClass("active")
            }, 50)
        }
    }, 'a[href="#ps_pro_qty_modal"]');
    jQuery(document).on({
        click: function(f) {
            if (jQuery(this).hasClass("ps_pro_qty_modal-cancel") || jQuery(f.target).closest("#ps_pro_qty_modal .container").length == 0) {
                f.preventDefault();
                e();
                jQuery("#ps_pro_qty_modal").removeClass("active");
                window.setTimeout(function() {
                    jQuery("#ps_pro_qty_modal").hide().removeClass("display_pilot")
                }, 700)
            }
        }
    }, "#ps_pro_qty_modal, .ps_pro_qty_modal-cancel");
    jQuery(document).on({
        click: function(g) {
            var f = jQuery(this).closest(".display_pilot").length > 0;
            if (jQuery(this).hasClass("qty-down")) {
                if (c > 2) {
                    c = c - 1
                }
            } else {
                if ((!f && c < 50) || c < 10) {
                    c = c + 1
                }
            }
            d()
        },
        mousedown: function(f) {
            f.preventDefault()
        }
    }, ".qty-selector .qty-down, .qty-selector .qty-up")
}
)();
if (jQuery(".press-release-table-component").length) {
    var $component = jQuery(".press-release-table-component");
    $component.on("click", "a.press-release-table-show-more", function(c) {
        c.preventDefault();
        var b = 25
          , a = $component.find(".press-release-row:hidden:lt(" + b + ")");
        if (a.length < b) {
            jQuery(this).hide()
        }
        var d = a.wrapAll('<div class="press-release-table-page"></div>').parent().slideDown()
    });
    $component.on("click", "a.press-release-table-back-to-top", function(a) {
        a.preventDefault();
        jQuery("html,body").animate({
            scrollTop: 0
        }, 700)
    })
}
jQuery(document).ready(function() {
    jQuery("#filterOptions li a").click(function() {
        var a = jQuery(this).attr("class");
        jQuery(this).closest("#filterOptions").find("li").removeClass("active");
        jQuery(this).parent().addClass("active");
        if (a == "all") {
            jQuery(this).closest(".paths.section").find("#pathContent").children("div.item").show()
        } else {
            jQuery(this).closest(".paths.section").find("#pathContent").children("div:not(." + a + ")").hide();
            jQuery(this).closest(".paths.section").find("#pathContent").children("div." + a).show()
        }
        return false
    })
});
if (jQuery(".marketo-form-component").length > 0 && document.cookie.indexOf("ps_trk=1") > -1) {
    var prev_handler = window.onload;
    window.onload = function() {
        if (prev_handler) {
            prev_handler()
        }
        var a = "//app-sj11.marketo.com";
        var b = "306-DUP-745";
        if (document.URL.indexOf("marketotest") > -1) {
            a = "//app-sj14.marketo.com";
            b = "031-SJO-371"
        }
        loadRemoteScript("munchkin.marketo.net/munchkin.js", "text/javascript", 1, "marketo_munchkin_lib", function() {
            Munchkin.init(b)
        });
        loadRemoteScript("app-sjqe.marketo.com/js/forms2/js/forms2.min.js", "text/javascript", 1, "marketo_forms_lib", function() {
            jQuery(".marketo-form-component").each(function(f, d) {
                var e = {};
                e.$form = jQuery(d).find("form");
                e.$marketoFormData = jQuery(d).find(".marketo-form-data");
                e.formPreset = e.$marketoFormData.find(".form-preset").html().trim();
                e.authoredFormID = e.$marketoFormData.find(".form-id").html().trim();
                e.redirectPath = e.$marketoFormData.find(".redirect-path").attr("href");
                e.downloadPath = e.$marketoFormData.find(".download-path").html().trim();
                e.successMessage = e.$marketoFormData.find(".success-message").html().trim();
                e.formID = e.formPreset || e.authoredFormID;
                marketoBizEmail = false;
                if (e.$marketoFormData.find(".marketo-biz-email").length) {
                    marketoBizEmail = e.$marketoFormData.find(".marketo-biz-email").html().trim() === "true" ? true : false
                }
                if (e.formID) {
                    window.formId = e.formID;
                    if (typeof MktoForms2 !== "undefined") {
                        c(e)
                    }
                }
                function c(j) {
                    MktoForms2.loadForm(a, b, j.formID, function(l) {
                        if (l) {
                            l.render(j.$form);
                            j.$form.find(".loading-message").hide();
                            var m = jQuery.cookie("AMCV_70D658CC558978FF7F000101@AdobeOrg");
                            var o = m.substring(m.indexOf("MCMID|") + 6);
                            var n = o.substring(0, o.indexOf("|"));
                            jQuery("input[name=mcvisid__c]").val(n);
                            if (window.wcmmodedisabled && document.URL.indexOf("exploridewebdesign.com") > -1) {
                                var k = new SimpleDTO({
                                    domain: "exploridewebdesign.com",
                                    dataSrc: "https://get.exploridewebdesign.com/aem.html",
                                    debug: false,
                                    mode: "receive",
                                    cb: function(p) {
                                        var q = k.getGlobal()["mktoPreFillFields"];
                                        k.cleanup();
                                        MktoForms2.whenReady(function(r) {
                                            r.setValuesCoerced(q)
                                        })
                                    }
                                })
                            }
                            if (typeof window.dbRequested == "undefined") {
                                window.dbRequested = true;
                                loadRemoteScript("scripts.demandbase.com/LrYAV7hU.min.js", "text/javascript", 1, "demandbase_js_secondary_libs", function() {
                                    window.dbReady = true;
                                    var s = new CustomEvent("PS.dbReady",{
                                        bubbles: true,
                                        cancelable: false
                                    });
                                    document.querySelector("body").dispatchEvent(s);
                                    var r = 0;
                                    var q = 0;
                                    function t(v) {
                                        var u = jQuery(v);
                                        u.find("input#Email").attr("id", "Email" + q);
                                        u.find("input#Company").attr("id", "Company" + q);
                                        Demandbase.CompanyAutocomplete.initialized = false;
                                        Demandbase.Config.forms.companyID = "Company" + q;
                                        Demandbase.Config.forms.emailID = "Email" + q;
                                        Demandbase.Connectors.WebForm.connect(Demandbase.Config.forms);
                                        q++
                                    }
                                    function p() {
                                        var v = jQuery("input#Company").not(".ui-autocomplete-input");
                                        if (typeof Demandbase == "undefined" && r < 10) {
                                            r++;
                                            window.setTimeout(p, 1000)
                                        } else {
                                            if (typeof Demandbase.CompanyAutocomplete == "undefined" && r < 10) {
                                                r++;
                                                Demandbase.utils.loadScript("//scripts.demandbase.com/forms.min.js");
                                                window.setTimeout(p, 1000)
                                            } else {
                                                if (v.length > 0) {
                                                    var u = v.get(0).closest("form");
                                                    t(u);
                                                    if (jQuery("input#Company").not(".ui-autocomplete-input").length > 0) {
                                                        window.setTimeout(p, 500)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    window.setTimeout(p, 500)
                                })
                            }
                            dtmEventTrigger("ps.mktoFormRendered", {
                                formID: e.formID
                            });
                            l.onSubmit(function(r) {
                                if (j.$form.find("#Single_Opt_In__c").is(":checked")) {
                                    r.vals({
                                        Opt_In_Source__c: (window.location.hostname + window.location.pathname)
                                    })
                                }
                                if (window.mktoDoNotTrack) {
                                    r.vals({
                                        _mkt_trk: ""
                                    })
                                }
                                if (window.clm_service_vars && window.clm_service_vars.clm_id) {
                                    r.vals({
                                        clm_id: window.clm_service_vars.clm_id
                                    });
                                    r.vals({
                                        CLM_Id__c: window.clm_service_vars.clm_id
                                    })
                                }
                                var q = "oid=" + jQuery("meta#view-oid").data("view-oid");
                                var p = "wid=" + jQuery(".marketo-wid").text();
                                if (typeof window.jQuery.fireClmService != "undefined") {
                                    window.jQuery.fireClmService("responded", [p, q], [])
                                }
                            });
                            l.onSuccess(function(q, r) {
                                j.redirectPath = j.$marketoFormData.find(".redirect-path").attr("href");
                                j.downloadPath = j.$marketoFormData.find(".download-path").html().trim();
                                j.successMessage = j.$marketoFormData.find(".success-message").html().trim();
                                var t = j.$form.find('input[name="Sales_Contact_Me_For_A_PS_Business_Plan__c"], select[name="Sales_Contact_Me_For_A_PS_Business_Plan__c"]').val() == "Yes";
                                var p = j.$form.find('input[name="Contact_Sales__c"]').val() == "TRUE";
                                dtmEventTrigger("ps.mktoFormSuccess", {
                                    formID: j.formID,
                                    isPilot: t,
                                    isSales: p
                                });
                                var s = new Date();
                                s.setTime(s.getTime() + (7 * 24 * 60 * 60 * 1000));
                                document.cookie = "marketoFilled=1; expires=" + s.toUTCString() + "; path=/";
                                if (j.downloadPath) {
                                    setTimeout(function() {
                                        var u = jQuery("<a>").attr("href", j.downloadPath).attr("download", j.downloadPath.substring((j.downloadPath.lastIndexOf("/") + 1), j.downloadPath.length)).appendTo("body");
                                        u[0].click();
                                        u[0].hide()
                                    }, 500);
                                    return false
                                }
                                if (j.redirectPath) {
                                    setTimeout(function() {
                                        location.href = j.redirectPath
                                    }, 1000);
                                    return false
                                }
                                if (j.successMessage) {
                                    j.$form.replaceWith("<div class='marketo-form__success-message form-" + j.formID + "'>" + j.successMessage + "</div>");
                                    return false
                                }
                            });
                            l.onValidate(function(p) {
                                if (p) {
                                    dtmEventTrigger("ps.mktoFormValid", {
                                        formID: j.formID
                                    })
                                } else {
                                    dtmEventTrigger("ps.mktoFormInvalid", {
                                        formID: j.formID
                                    })
                                }
                            })
                        }
                    });
                    if (marketoBizEmail) {
                        var h = ["@gmail.", "@yahoo.", "@hotmail.", "@live.", "@aol.", "@outlook."];
                        MktoForms2.whenReady(function(k) {
                            if (window.mktoDoNotTrack) {
                                k.addHiddenFields({
                                    _mkt_trk: ""
                                })
                            }
                            k.onValidate(function() {
                                var l = k.vals().Email;
                                if (l) {
                                    if (!g(l)) {
                                        k.submitable(false);
                                        var m = k.getFormElem().find("#Email");
                                        m.parent().prepend('<div class="mktoError" style="right: 70px; bottom: -34px;"><div class="mktoErrorArrowWrap"><div class="mktoErrorArrow"></div></div><div class="mktoErrorMsg">Must be Business email.</div></div>').fadeIn("slow")
                                    } else {
                                        k.submitable(true)
                                    }
                                }
                            })
                        });
                        function g(k) {
                            for (var l = 0; l < h.length; l++) {
                                var m = h[l];
                                if (k.indexOf(m) != -1) {
                                    return false
                                }
                            }
                            return true
                        }
                    }
                }
            })
        })
    }
}
if (jQuery(".live-speaker.section").length > 0) {
    jQuery("body").append('<div class="ps_live_modal"><div class="ps_live_modal--overlay"></div><div class="ps_live_modal--window"><div class="ps_live_modal--close"></div><div class="ps_live_modal--content"></div></div></div>');
    jQuery(".live-speaker.section").parent().addClass("live-speaker-wrapper clearfix");
    jQuery(".pslive-speaker-highlights").each(function(b) {
        var e = jQuery(this).find(".box-highlight").find(".box-highlight--name").html();
        e = e.replace(/ +/g, "-").toLowerCase();
        jQuery(this).attr("data-anchor", e);
        var d = "-bio";
        var c = "-session";
        jQuery(this).find(".pslive-speakers--tabs .tabs li").eq(0).attr("data-tab", e + d);
        jQuery(this).find(".pslive-speakers--tabs .tabs li").eq(1).attr("data-tab", e + c);
        jQuery(this).find(".pslive-speakers--tabs .tab-content").eq(0).attr("data-content", e + d);
        jQuery(this).find(".pslive-speakers--tabs .tab-content").eq(1).attr("data-content", e + c);
        var a = jQuery(this).attr("data-ls-type");
        if (a == "Author") {
            jQuery(this).find(".pslive-speaker-highlights--image").addClass("ps-author-badge")
        }
        if (jQuery(this).hasClass("mainstage")) {
            jQuery(this).parent(".live-speaker.section").addClass("live-speaker--mainstage")
        }
    });
    jQuery(".box-highlight--name").each(function() {
        jQuery(this).html(jQuery(this).html().replace(/^([^ ]*)/, '<div class="speaker_firstName">$1</div>'))
    });
    jQuery(document).on({
        click: function(a) {
            a.preventDefault();
            jQuery(this).addClass("active").siblings("[data-tab]").removeClass("active");
            jQuery(this).parent().siblings("[data-content=" + jQuery(this).data("tab") + "]").addClass("active").siblings("[data-content]").removeClass("active")
        }
    }, "[data-tab]");
    jQuery(document).on({
        click: function(a) {
            a.stopPropagation()
        }
    }, ".pslive-speakers--tabs");
    jQuery(document).on({
        click: function(b) {
            b.preventDefault();
            location.hash = jQuery(this).attr("data-anchor");
            var a = jQuery(".pslive-speaker-highlights.selected");
            a.removeClass("selected");
            var c = jQuery(this).clone(true, true).addClass("active");
            jQuery("body").css("overflow", "hidden");
            jQuery(".ps_live_modal").show("fast", function() {
                jQuery(".ps_live_modal").addClass("active")
            });
            jQuery(".ps_live_modal--content").html(c);
            jQuery(this).addClass("selected")
        }
    }, ".pslive-speaker-highlights");
    if (location.hash != "") {
        var anchor = location.hash.slice(1, location.hash.length);
        var item = jQuery("[data-anchor='" + anchor + "']");
        var clone = item.clone().addClass("active");
        jQuery("body").css("overflow", "hidden");
        jQuery(".ps_live_modal").show("fast", function() {
            jQuery(".ps_live_modal").addClass("active")
        });
        jQuery(".ps_live_modal--content").html(clone);
        item.addClass("selected")
    }
    jQuery(document).on({
        click: function(a) {
            a.preventDefault();
            jQuery(".ps_live_modal").removeClass("active");
            window.setTimeout(function() {
                jQuery("body").css("overflow", "auto");
                jQuery(".ps_live_modal").hide()
            }, 600)
        }
    }, ".ps_live_modal--overlay, .ps_live_modal--close")
}
if (jQuery(".lc_card").length) {
    jQuery(document).on({
        click: function(b) {
            if (!b.currentTarget.className.indexOf("active") > -1) {
                b.preventDefault()
            }
            var a = jQuery(".lc_cards.selected");
            a.removeClass("selected");
            var c = jQuery(this).clone().addClass("active");
            jQuery("body").css("overflow", "hidden");
            jQuery(".lc_modal").show("fast", function() {
                jQuery(".lc_modal").addClass("active")
            });
            jQuery(".lc_modal--content").html(c);
            jQuery(this).addClass("selected")
        }
    }, ".lc_cards");
    jQuery(document).on({
        click: function(a) {
            a.preventDefault();
            jQuery(".lc_modal").removeClass("active");
            window.setTimeout(function() {
                jQuery("body").css("overflow", "auto");
                jQuery(".lc_modal").hide()
            }, 600)
        }
    }, ".lc_modal--overlay, .lc_modal--close")
}
if (jQuery(".lc_agenda").length > 0) {
    jQuery(document).on({
        click: function(a) {
            a.preventDefault();
            jQuery(this).toggleClass("open");
            jQuery(this).next().slideToggle();
            jQuery("body").css("overflow", "auto")
        }
    }, ".lc_agenda--timeline.timeline--full");
    jQuery(".lc_agenda").each(function() {
        if (jQuery(this).hasClass("lc_agenda_simple")) {
            jQuery(this).parent(".live-agenda.section").addClass("single-use")
        }
    })
}
if (jQuery(".hub-feed.section").length > 0) {
    jQuery(".hub-see-more").click(function() {
        var b = jQuery(this).closest(".hub-feed.section");
        var a = b.find(".hub-tile");
        a.show();
        jQuery(this).hide()
    })
}
if (jQuery(".block-chart.section").length) {
    jQuery(".block-chart .cubes ul[class^='cubes--'], .block-chart .cubes ul[class*=' cubes--']").each(function(b, a) {
        jQuery(this).css("z-index", b);
        jQuery(this).find("ul").each(function(e, c) {
            var d = jQuery(this).find("li").length;
            jQuery(this).find("li").each(function(g, f) {
                jQuery(this).css("z-index", (d - g))
            })
        })
    })
}
(function() {
    var a = document.querySelectorAll(".accordion-content");
    [].forEach.call(a, function(b) {
        b.style.display = "none"
    })
}
)();
jQuery(".accordion-title").on("click", function(a) {
    a.preventDefault();
    jQuery(this).next(".accordion-content").slideToggle().toggleClass("open");
    jQuery(this).toggleClass("open")
});
if (jQuery(".blog-hero-wrapper").length) {
    var $component = jQuery(".blog-hero-wrapper");
    var title = $component.data("title");
    $component.find("h5").text(title)
}
if (jQuery(".generic-block").length) {
    if (jQuery(".generic-block .parallax").length) {
        if (navigator.userAgent.match(/Trident\/7\./)) {
            jQuery("body").on("mousewheel", function() {
                event.preventDefault();
                var b = event.wheelDelta;
                var a = window.pageYOffset;
                window.scrollTo(0, a - b)
            });
            jQuery("body").keydown(function(b) {
                var a = window.pageYOffset;
                switch (b.which) {
                case 38:
                    b.preventDefault();
                    window.scrollTo(0, a - 120);
                    break;
                case 40:
                    b.preventDefault();
                    window.scrollTo(0, a + 120);
                    break;
                default:
                    return
                }
            })
        }
    }
    if (jQuery(".generic-block .block--sticky").length) {
        window.setStickies = function() {
            var a = 0;
            if (jQuery(".header").length) {
                a = jQuery(".header").height() + jQuery(".header").position().top
            }
            jQuery.each(jQuery(".generic-block-wrapper.block--sticky"), function(b, d) {
                var c = jQuery(d);
                if (jQuery(window).scrollTop() + a >= c.offset().top && !window.navCloned) {
                    c.clone(true).addClass("cloned-nav-block").addClass("fixed").css("top", a + "px").removeClass("block--sticky").insertAfter(c);
                    window.navCloned = true
                } else {
                    if (window.navCloned && (jQuery(window).scrollTop() + a < c.offset().top || jQuery(".cloned-nav-block").offset().top < a)) {
                        jQuery(".cloned-nav-block").remove();
                        window.navCloned = false
                    }
                }
            })
        }
        ;
        if (typeof window.contentShown == "undefined" || window.contentShown) {
            setStickies()
        }
        jQuery(window).scroll(function() {
            setStickies()
        })
    }
    if (jQuery(".generic-block-video")) {
        var mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
          , isMobile = mobileRegex.test(navigator.userAgent);
        if (!isMobile) {
            window.psYtVideos = window.psYtVideos || {};
            psYtVideos.vidConfigs = psYtVideos.vidConfigs || [];
            var $bgVideos = jQuery("[data-youtube-video-id]");
            jQuery.each($bgVideos, function(d, e) {
                var a = jQuery(e)
                  , c = a.data("youtube-video-id")
                  , b = "bgPlayer" + d;
                a.attr("id", b);
                psYtVideos.vidConfigs.push({
                    videoElId: b,
                    videoSettings: {
                        videoId: c,
                        playerVars: {
                            autoplay: 1,
                            controls: 0,
                            loop: 1,
                            playlist: c,
                            fs: 0,
                            cc_load_policy: 0,
                            iv_load_policy: 3,
                            autohide: 1,
                            rel: 0
                        },
                        events: {
                            onReady: function(j) {
                                var h = j.target;
                                h.mute();
                                var g = h.getDuration() * 1000 - 1000;
                                setInterval(function() {
                                    h.seekTo(0)
                                }, g);
                                vidRescale(b)
                            }
                        }
                    }
                });
                var f = jQuery("#" + b).parent().attr("class");
                if (f.indexOf("youtube-video-expanded") === -1) {
                    jQuery(window).on("resize", function() {
                        vidRescale(b)
                    })
                }
            });
            function vidRescale(f) {
                var a = jQuery("#" + f)
                  , g = a.closest(".generic-block").find(".generic-block-wrapper:eq(0)");
                g.css("background-color", "rgba(0, 0, 0, 0.3)").css("background-image", "initial");
                var m = g.outerWidth(), c = g.outerHeight(), l = a.outerWidth(), j = a.outerHeight(), h = 1.03, e = l / j, n, k;
                if (m / c > e) {
                    var n = m * h
                      , k = m / e * h
                } else {
                    var n = c * e * h
                      , k = c * h
                }
                var d = (m - n) / 2
                  , b = (c - k) / 2;
                a.css({
                    height: k + "px"
                });
                a.css({
                    width: n + "px"
                });
                a.css({
                    top: b + "px"
                });
                a.css({
                    left: d + "px"
                })
            }
        }
    }
}
if (jQuery(".flex-block-container").length && window.wcmmodedisabled) {
    jQuery(".flex-block-container").each(function(h, g) {
        var c = {
            six: 6,
            five: 5,
            four: 4,
            three: 3,
            two: 2,
            one: 1
        };
        var a = g.className.split("desktop-")[1].split(" ")[0];
        var j = g.className.split("tablet-")[1].split(" ")[0];
        var f = g.className.split("mobile-")[1].split(" ")[0];
        var k = "unslick";
        var e = "unslick";
        var b = "unslick";
        if (g.children.length > c[a]) {
            k = {
                slidesToShow: c[a]
            }
        }
        if (g.children.length > c[j]) {
            e = {
                slidesToShow: c[j]
            }
        }
        if (g.children.length > c[f]) {
            b = {
                slidesToShow: c[f]
            }
        }
        if (g.className.indexOf("carousel") > -1) {
            jQuery(g).slick({
                slidesToShow: c[a],
                sidesToScroll: 1,
                infinite: false,
                responsive: [{
                    breakpoint: 9999,
                    settings: k
                }, {
                    breakpoint: 1024,
                    settings: e
                }, {
                    breakpoint: 640,
                    settings: b
                }]
            })
        }
        if (g.className.indexOf("slick-initialized") == -1 && g.className.indexOf("override-to-center") == -1) {
            jQuery(g).removeClass("carousel");
            for (var d = 0; d < 6; d++) {
                jQuery(g).append('<div class="flex-card section hidden"></div>')
            }
        }
    })
}
jQuery(".ps-carousel-wrapper").each(function(c, b) {
    var a = jQuery(b);
    var e = a.find(".ps-carousel-speed").val();
    var f = e ? e * 1000 : 3000;
    var d = a.find(".ps-carousel");
    d.slick({
        nextArrow: a.find(".ps-carousel-next"),
        prevArrow: a.find(".ps-carousel-prev"),
        dots: true,
        autoplay: true,
        autoplaySpeed: f,
        pauseOnHover: true
    })
});
if (jQuery(".animation-wrapper-container").length) {
    jQuery(".aos-noscript-override").each(function(a, b) {
        jQuery(b).removeClass("aos-noscript-override")
    });
    AOS.init({
        duration: 1000,
        once: true,
        startEvent: "load"
    });
    var debounce_timer;
    jQuery(window).on("scroll", function() {
        if (debounce_timer) {
            window.clearTimeout(debounce_timer)
        }
        debounce_timer = window.setTimeout(function() {
            AOS.refresh()
        }, 100)
    });
    var rellax = new Rellax(".rellax")
}
(function() {
    var a = window.onload;
    window.onload = function() {
        if (a) {
            a()
        }
        if (typeof psYtVideos != "undefined" && typeof psYtVideos.vidConfigs != "undefined" && psYtVideos.vidConfigs.length > 0) {
            window.ytPlayers = [];
            window.onYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady || function() {
                var d;
                for (d = 0; d < psYtVideos.vidConfigs.length; d++) {
                    var e = new YT.Player(psYtVideos.vidConfigs[d].videoElId,psYtVideos.vidConfigs[d].videoSettings);
                    ytPlayers.push(e)
                }
            }
            ;
            var c = document.createElement("script");
            c.src = "https://www.youtube.com/iframe_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(c, b)
        }
    }
}
)();
