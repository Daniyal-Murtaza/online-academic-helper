!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = []
      , r = e.document
      , i = Object.getPrototypeOf
      , o = n.slice
      , a = n.concat
      , s = n.push
      , u = n.indexOf
      , l = {}
      , c = l.toString
      , f = l.hasOwnProperty
      , p = f.toString
      , d = p.call(Object)
      , h = {};
    function g(e, t) {
        var n = (t = t || r).createElement("script");
        n.text = e,
        t.head.appendChild(n).parentNode.removeChild(n)
    }
    var v = "3.2.1"
      , m = function(e, t) {
        return new m.fn.init(e,t)
    }
      , y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , x = /^-ms-/
      , b = /-([a-z])/g
      , w = function(e, t) {
        return t.toUpperCase()
    };
    function T(e) {
        var t = !!e && "length"in e && e.length
          , n = m.type(e);
        return "function" !== n && !m.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    m.fn = m.prototype = {
        jquery: v,
        constructor: m,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = m.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return m.each(this, e)
        },
        map: function(e) {
            return this.pushStack(m.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    },
    m.extend = m.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (m.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1,
                    o = n && Array.isArray(n) ? n : []) : o = n && m.isPlainObject(n) ? n : {},
                    a[t] = m.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    m.extend({
        expando: "jQuery" + (v + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === m.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = m.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e) || (t = i(e)) && (n = f.call(t, "constructor") && t.constructor,
            "function" != typeof n || p.call(n) !== d))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            g(e)
        },
        camelCase: function(e) {
            return e.replace(x, "ms-").replace(b, w)
        },
        each: function(e, t) {
            var n, r = 0;
            if (T(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(y, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (T(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (T(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m.isFunction(e))
                return r = o.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, r.concat(o.call(arguments)))
                }
                ).guid = e.guid = e.guid || m.guid++,
                i
        },
        now: Date.now,
        support: h
    }),
    "function" == typeof Symbol && (m.fn[Symbol.iterator] = n[Symbol.iterator]),
    m.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var C = function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, m, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, E = ae(), k = ae(), S = ae(), N = function(e, t) {
            return e === t && (f = !0),
            0
        }, D = {}.hasOwnProperty, j = [], A = j.pop, q = j.push, L = j.push, H = j.slice, F = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + P + "*(" + R + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + P + "*\\]", I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", W = new RegExp(P + "+","g"), $ = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), B = new RegExp("^" + P + "*," + P + "*"), _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), z = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]","g"), X = new RegExp(I), U = new RegExp("^" + R + "$"), V = {
            ID: new RegExp("^#(" + R + ")"),
            CLASS: new RegExp("^\\.(" + R + ")"),
            TAG: new RegExp("^(" + R + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
            bool: new RegExp("^(?:" + O + ")$","i"),
            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
        }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            p()
        }, ie = ye(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(j = H.call(w.childNodes), w.childNodes),
            j[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: j.length ? function(e, t) {
                    q.apply(e, H.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, r, i) {
            var o, s, l, c, f, h, m, y = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (r = r || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t),
            t = t || d,
            g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o)))
                                return r;
                            if (l.id === o)
                                return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o)
                            return r.push(l),
                            r
                    } else {
                        if (f[2])
                            return L.apply(r, t.getElementsByTagName(e)),
                            r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(r, t.getElementsByClassName(o)),
                            r
                    }
                if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
                    if (1 !== T)
                        y = t,
                        m = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b),
                        s = (h = a(e)).length; s--; )
                            h[s] = "#" + c + " " + me(h[s]);
                        m = h.join(","),
                        y = K.test(e) && ge(t.parentNode) || t
                    }
                    if (m)
                        try {
                            return L.apply(r, y.querySelectorAll(m)),
                            r
                        } catch (e) {} finally {
                            c === b && t.removeAttribute("id")
                        }
                }
            }
            return u(e.replace($, "$1"), t, r, i)
        }
        function ae() {
            var e = [];
            return function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }
        }
        function se(e) {
            return e[b] = !0,
            e
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function le(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                r.attrHandle[n[i]] = t
        }
        function ce(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function de(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function he(e) {
            return se(function(t) {
                return t = +t,
                se(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = oe.support = {},
        o = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        p = oe.setDocument = function(e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement,
            g = !o(d),
            w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
            n.attributes = ue(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            n.getElementsByTagName = ue(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = Q.test(d.getElementsByClassName),
            n.getById = ue(function(e) {
                return h.appendChild(e).id = b,
                !d.getElementsByName || !d.getElementsByName(b).length
            }),
            n.getById ? (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (r.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            r.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && g)
                    return t.getElementsByClassName(e)
            }
            ,
            m = [],
            v = [],
            (n.qsa = Q.test(d.querySelectorAll)) && (ue(function(e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + O + ")"),
                e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]")
            }),
            ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                h.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (n.matchesSelector = Q.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function(e) {
                n.disconnectedMatch = y.call(e, "*"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            v = v.length && new RegExp(v.join("|")),
            m = m.length && new RegExp(m.join("|")),
            t = Q.test(h.compareDocumentPosition),
            x = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            N = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? F(c, e) - F(c, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? F(c, e) - F(c, t) : 0;
                if (i === o)
                    return ce(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && p(e),
            t = t.replace(z, "='$1']"),
            n.matchesSelector && g && !S[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t)))
                try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && p(e),
            x(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()]
              , o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, r = [], i = 0, o = 0;
            if (f = !n.detectDuplicates,
            c = !n.sortStable && e.slice(0),
            e.sort(N),
            f) {
                for (; t = e[o++]; )
                    t === e[o] && (i = r.push(o));
                for (; i--; )
                    e.splice(r[i], 1)
            }
            return c = null,
            e
        }
        ,
        i = oe.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += i(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += i(t);
            return n
        }
        ,
        (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && E(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (v) {
                            if (o) {
                                for (; g; ) {
                                    for (p = t; p = p[g]; )
                                        if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild],
                            a && y) {
                                for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (y && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]),
                            !1 === x)
                                for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t)); )
                                    ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                    r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                        for (var r, o = i(e, t), a = o.length; a--; )
                            e[r = F(e, o[a])] = !(n[r] = o[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , n = []
                      , r = s(e.replace($, "$1"));
                    return r[b] ? se(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(Z, ee),
                    function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e),
                    e = e.replace(Z, ee).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return Y.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            r.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            r.pseudos[t] = pe(t);
        function ve() {}
        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ye(e, t, n) {
            var r = t.dir
              , i = t.next
              , o = i || r
              , a = n && "parentNode" === o
              , s = C++;
            return t.first ? function(t, n, i) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || a)
                        return e(t, n, i);
                return !1
            }
            : function(t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || a) && e(t, n, u))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || a)
                            if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}),
                            i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                    return p[2] = l[2];
                                if (c[o] = p,
                                p[2] = e(t, n, u))
                                    return !0
                            }
                return !1
            }
        }
        function xe(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function we(e, t, n, r, i, o) {
            return r && !r[b] && (r = we(r)),
            i && !i[b] && (i = we(i, o)),
            se(function(o, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, g = o || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        oe(e, t[r], n);
                    return n
                }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : be(g, p, e, s, u), m = n ? i || (o ? e : h || r) ? [] : a : v;
                if (n && n(v, m, s, u),
                r)
                    for (l = be(m, d),
                    r(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                    if (i || e) {
                        if (i) {
                            for (l = [],
                            c = m.length; c--; )
                                (f = m[c]) && l.push(v[c] = f);
                            i(null, m = [], l, u)
                        }
                        for (c = m.length; c--; )
                            (f = m[c]) && (l = i ? F(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else
                    m = be(m === a ? m.splice(h, m.length) : m),
                    i ? i(null, a, m, u) : L.apply(a, m)
            })
        }
        function Te(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = ye(function(e) {
                return e === t
            }, s, !0), f = ye(function(e) {
                return F(t, e) > -1
            }, s, !0), p = [function(e, n, r) {
                var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return t = null,
                i
            }
            ]; u < o; u++)
                if (n = r.relative[e[u].type])
                    p = [ye(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o && !r.relative[e[i].type]; i++)
                            ;
                        return we(u > 1 && xe(p), u > 1 && me(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace($, "$1"), n, u < i && Te(e.slice(u, i)), i < o && Te(e = e.slice(i)), i < o && me(e))
                    }
                    p.push(n)
                }
            return xe(p)
        }
        function Ce(e, t) {
            var n = t.length > 0
              , i = e.length > 0
              , o = function(o, a, s, u, c) {
                var f, h, v, m = 0, y = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c), E = T += null == w ? 1 : Math.random() || .1, k = C.length;
                for (c && (l = a === d || a || c); y !== k && null != (f = C[y]); y++) {
                    if (i && f) {
                        for (h = 0,
                        a || f.ownerDocument === d || (p(f),
                        s = !g); v = e[h++]; )
                            if (v(f, a || d, s)) {
                                u.push(f);
                                break
                            }
                        c && (T = E)
                    }
                    n && ((f = !v && f) && m--,
                    o && x.push(f))
                }
                if (m += y,
                n && y !== m) {
                    for (h = 0; v = t[h++]; )
                        v(x, b, a, s);
                    if (o) {
                        if (m > 0)
                            for (; y--; )
                                x[y] || b[y] || (b[y] = A.call(u));
                        b = be(b)
                    }
                    L.apply(u, b),
                    c && !o && b.length > 0 && m + t.length > 1 && oe.uniqueSort(u)
                }
                return c && (T = E,
                l = w),
                x
            };
            return n ? se(o) : o
        }
        return ve.prototype = r.filters = r.pseudos,
        r.setFilters = new ve,
        a = oe.tokenize = function(e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = r.preFilter; s; ) {
                for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                n = !1,
                (i = _.exec(s)) && (n = i.shift(),
                o.push({
                    value: n,
                    type: i[0].replace($, " ")
                }),
                s = s.slice(n.length)),
                r.filter)
                    !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        }
        ,
        s = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                for (t || (t = a(e)),
                n = t.length; n--; )
                    (o = Te(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ce(i, r))).selector = e
            }
            return o
        }
        ,
        u = oe.select = function(e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
            if (n = n || [],
            1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0]))
                        return n;
                    p && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (o = V.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o],
                !r.relative[c = l.type]); )
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1),
                        !(e = i.length && me(u)))
                            return L.apply(n, i),
                            n;
                        break
                    }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        n.sortStable = b.split("").sort(N).join("") === b,
        n.detectDuplicates = !!f,
        p(),
        n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }),
        ue(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(O, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(e);
    m.find = C,
    m.expr = C.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.uniqueSort = m.unique = C.uniqueSort,
    m.text = C.getText,
    m.isXMLDoc = C.isXML,
    m.contains = C.contains,
    m.escapeSelector = C.escape;
    var E = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && m(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , k = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , S = m.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , j = /^.[^:#\[\.,]*$/;
    function A(e, t, n) {
        return m.isFunction(t) ? m.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? m.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? m.grep(e, function(e) {
            return u.call(t, e) > -1 !== n
        }) : j.test(t) ? m.filter(t, e, n) : (t = m.filter(t, e),
        m.grep(e, function(e) {
            return u.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }
    m.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(m(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (m.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                m.find(e, i[t], n);
            return r > 1 ? m.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(A(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(A(this, e || [], !0))
        },
        is: function(e) {
            return !!A(this, "string" == typeof e && S.test(e) ? m(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (m.fn.init = function(e, t, n) {
        var i, o;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof m ? t[0] : t,
                m.merge(this, m.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
                D.test(i[1]) && m.isPlainObject(t))
                    for (i in t)
                        m.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(m) : m.makeArray(e, this)
    }
    ).prototype = m.fn,
    q = m(r);
    var H = /^(?:parents|prev(?:Until|All))/
      , F = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    m.fn.extend({
        has: function(e) {
            var t = m(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (m.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && m(e);
            if (!S.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? m.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? u.call(m(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(m.uniqueSort(m.merge(this.get(), m(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    m.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return E(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return E(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return E(e, "nextSibling")
        },
        prevAll: function(e) {
            return E(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return E(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return E(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k(e.firstChild)
        },
        contents: function(e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e),
            m.merge([], e.childNodes))
        }
    }, function(e, t) {
        m.fn[e] = function(n, r) {
            var i = m.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = m.filter(r, i)),
            this.length > 1 && (F[e] || m.uniqueSort(i),
            H.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && m.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    m.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return m.each(e.match(P) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : m.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = i || e.once,
            r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                    !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1,
                a.push(n)),
                function t(n) {
                    m.each(n, function(n, r) {
                        m.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== m.type(r) && t(r)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return m.each(arguments, function(e, t) {
                    for (var n; (n = m.inArray(t, o, n)) > -1; )
                        o.splice(n, 1),
                        n <= s && s--
                }),
                this
            },
            has: function(e) {
                return e ? m.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = a = [],
                o = n = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return l
    }
    ,
    m.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", m.Callbacks("memory"), m.Callbacks("memory"), 2], ["resolve", "done", m.Callbacks("once memory"), m.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", m.Callbacks("once memory"), m.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , i = {
                state: function() {
                    return r
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return i.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return m.Deferred(function(t) {
                        m.each(n, function(n, r) {
                            var i = m.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && m.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, i) {
                    var o = 0;
                    function a(t, n, r, i) {
                        return function() {
                            var s = this
                              , u = arguments
                              , l = function() {
                                var e, l;
                                if (!(t < o)) {
                                    if ((e = r.apply(s, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    l = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m.isFunction(l) ? i ? l.call(e, a(o, n, R, i), a(o, n, M, i)) : (o++,
                                    l.call(e, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0,
                                    u = [e]),
                                    (i || n.resolveWith)(s, u))
                                }
                            }
                              , c = i ? l : function() {
                                try {
                                    l()
                                } catch (e) {
                                    m.Deferred.exceptionHook && m.Deferred.exceptionHook(e, c.stackTrace),
                                    t + 1 >= o && (r !== M && (s = void 0,
                                    u = [e]),
                                    n.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? c() : (m.Deferred.getStackHook && (c.stackTrace = m.Deferred.getStackHook()),
                            e.setTimeout(c))
                        }
                    }
                    return m.Deferred(function(e) {
                        n[0][3].add(a(0, e, m.isFunction(i) ? i : R, e.notifyWith)),
                        n[1][3].add(a(0, e, m.isFunction(t) ? t : R)),
                        n[2][3].add(a(0, e, m.isFunction(r) ? r : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? m.extend(e, i) : i
                }
            }
              , o = {};
            return m.each(n, function(e, t) {
                var a = t[2]
                  , s = t[5];
                i[t[1]] = a.add,
                s && a.add(function() {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock),
                a.add(t[3].fire),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , i = o.call(arguments)
              , a = m.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    i[e] = arguments.length > 1 ? o.call(arguments) : n,
                    --t || a.resolveWith(r, i)
                }
            };
            if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t),
            "pending" === a.state() || m.isFunction(i[n] && i[n].then)))
                return a.then();
            for (; n--; )
                I(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    m.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && W.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    m.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var $ = m.Deferred();
    function B() {
        r.removeEventListener("DOMContentLoaded", B),
        e.removeEventListener("load", B),
        m.ready()
    }
    m.fn.ready = function(e) {
        return $.then(e).catch(function(e) {
            m.readyException(e)
        }),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0,
            !0 !== e && --m.readyWait > 0 || $.resolveWith(r, [m]))
        }
    }),
    m.ready.then = $.then,
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(m.ready) : (r.addEventListener("DOMContentLoaded", B),
    e.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === m.type(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m.isFunction(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(m(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function X() {
        this.expando = m.expando + X.uid++
    }
    X.uid = 1,
    X.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[m.camelCase(t)] = n;
            else
                for (r in t)
                    i[m.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][m.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(m.camelCase) : t = (t = m.camelCase(t))in r ? [t] : t.match(P) || [],
                    n = t.length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || m.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !m.isEmptyObject(t)
        }
    };
    var U = new X
      , V = new X
      , G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Y = /[A-Z]/g;
    function Q(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Y, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                V.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    m.extend({
        hasData: function(e) {
            return V.hasData(e) || U.hasData(e)
        },
        data: function(e, t, n) {
            return V.access(e, t, n)
        },
        removeData: function(e, t) {
            V.remove(e, t)
        },
        _data: function(e, t, n) {
            return U.access(e, t, n)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }),
    m.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = V.get(o),
                1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (0 === (r = a[n].name).indexOf("data-") && (r = m.camelCase(r.slice(5)),
                        Q(o, r, i[r])));
                    U.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                V.set(this, e)
            }) : _(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = V.get(o, e)))
                        return n;
                    if (void 0 !== (n = Q(o, e)))
                        return n
                } else
                    this.each(function() {
                        V.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                V.remove(this, e)
            })
        }
    }),
    m.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = U.get(e, t),
                n && (!r || Array.isArray(n) ? r = U.access(e, t, m.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = m.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = m._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                m.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: m.Callbacks("once memory").add(function() {
                    U.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = m.queue(this, e, t);
                m._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                m.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = m.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = U.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , K = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$","i")
      , Z = ["Top", "Right", "Bottom", "Left"]
      , ee = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && m.contains(e.ownerDocument, e) && "none" === m.css(e, "display")
    }
      , te = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function ne(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return m.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (m.cssNumber[t] ? "" : "px"), c = (m.cssNumber[t] || "px" !== l && +u) && K.exec(m.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do {
                c /= o = o || ".5",
                m.style(e, t, c + l)
            } while (o !== (o = s() / u) && 1 !== o && --a)
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var re = {};
    function ie(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = re[r];
        return i || (t = n.body.appendChild(n.createElement(r)),
        i = m.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === i && (i = "block"),
        re[r] = i,
        i)
    }
    function oe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = U.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && ee(r) && (i[o] = ie(r))) : "none" !== n && (i[o] = "none",
            U.set(r, "display", n)));
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    m.fn.extend({
        show: function() {
            return oe(this, !0)
        },
        hide: function() {
            return oe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ee(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    var ae = /^(?:checkbox|radio)$/i
      , se = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , ue = /^$|\/(?:java|ecma)script/i
      , le = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ce(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && N(e, t) ? m.merge([e], n) : n
    }
    function fe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }
    le.optgroup = le.option,
    le.tbody = le.tfoot = le.colgroup = le.caption = le.thead,
    le.th = le.td;
    var pe = /<|&#?\w+;/;
    function de(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === m.type(o))
                    m.merge(p, o.nodeType ? [o] : o);
                else if (pe.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    s = (se.exec(o) || ["", ""])[1].toLowerCase(),
                    u = le[s] || le._default,
                    a.innerHTML = u[1] + m.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        a = a.lastChild;
                    m.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = p[d++]; )
            if (r && m.inArray(o, r) > -1)
                i && i.push(o);
            else if (l = m.contains(o.ownerDocument, o),
            a = ce(f.appendChild(o), "script"),
            l && fe(a),
            n)
                for (c = 0; o = a[c++]; )
                    ue.test(o.type || "") && n.push(o);
        return f
    }
    !function() {
        var e = r.createDocumentFragment().appendChild(r.createElement("div"))
          , t = r.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var he = r.documentElement
      , ge = /^key/
      , ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , me = /^([^.]*)(?:\.(.+)|)/;
    function ye() {
        return !0
    }
    function xe() {
        return !1
    }
    function be() {
        try {
            return r.activeElement
        } catch (e) {}
    }
    function we(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                we(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = xe;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return m().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = m.guid++)),
        e.each(function() {
            m.event.add(this, t, i, r, n)
        })
    }
    m.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = U.get(e);
            if (v)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && m.find.matchesSelector(he, i),
                n.guid || (n.guid = m.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(t) {
                    return void 0 !== m && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(P) || [""]).length; l--; )
                    d = g = (s = me.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = m.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = m.event.special[d] || {},
                    c = m.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && m.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    m.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = U.hasData(e) && U.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                    if (d = g = (s = me.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = m.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || m.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            m.event.remove(e, d + t[l], n, r, !0);
                m.isEmptyObject(u) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = m.event.fix(e), u = new Array(arguments.length), l = (U.get(this, "events") || {})[s.type] || [], c = m.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = m.event.handlers.call(this, s, l),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? m(i, this).index(l) > -1 : m.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(m.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[m.expando] ? e : new m.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== be() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === be() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && N(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    m.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    m.Event = function(e, t) {
        return this instanceof m.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ye : xe,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && m.extend(this, t),
        this.timeStamp = e && e.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(e,t)
    }
    ,
    m.Event.prototype = {
        constructor: m.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ye,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ye,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ye,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, m.event.addProp),
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        m.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || m.contains(this, r)) || (e.type = i.origType,
                n = i.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    m.fn.extend({
        on: function(e, t, n, r) {
            return we(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return we(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = xe),
            this.each(function() {
                m.event.remove(this, e, n, t)
            })
        }
    });
    var Te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ce = /<script|<style|<link/i
      , Ee = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ke = /^true\/(.*)/
      , Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ne(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && m(">tbody", e)[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        var t = ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function Ae(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (o = U.access(e),
            a = U.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        m.event.add(t, i, l[i][n]);
            V.hasData(e) && (s = V.access(e),
            u = m.extend({}, s),
            V.set(t, u))
        }
    }
    function qe(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function Le(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, v = t[0], y = m.isFunction(v);
        if (y || p > 1 && "string" == typeof v && !h.checkClone && Ee.test(v))
            return e.each(function(i) {
                var o = e.eq(i);
                y && (t[0] = v.call(this, i, o.html())),
                Le(o, t, n, r)
            });
        if (p && (o = (i = de(t, e[0].ownerDocument, !1, e, r)).firstChild,
        1 === i.childNodes.length && (i = o),
        o || r)) {
            for (u = (s = m.map(ce(i, "script"), De)).length; f < p; f++)
                l = i,
                f !== d && (l = m.clone(l, !0, !0),
                u && m.merge(s, ce(l, "script"))),
                n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument,
                m.map(s, je),
                f = 0; f < u; f++)
                    l = s[f],
                    ue.test(l.type || "") && !U.access(l, "globalEval") && m.contains(c, l) && (l.src ? m._evalUrl && m._evalUrl(l.src) : g(l.textContent.replace(Se, ""), c))
        }
        return e
    }
    function He(e, t, n) {
        for (var r, i = t ? m.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || m.cleanData(ce(r)),
            r.parentNode && (n && m.contains(r.ownerDocument, r) && fe(ce(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    m.extend({
        htmlPrefilter: function(e) {
            return e.replace(Te, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = m.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e)))
                for (a = ce(s),
                r = 0,
                i = (o = ce(e)).length; r < i; r++)
                    qe(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ce(e),
                    a = a || ce(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        Ae(o[r], a[r]);
                else
                    Ae(e, s);
            return (a = ce(s, "script")).length > 0 && fe(a, !u && ce(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = m.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (z(n)) {
                    if (t = n[U.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
                        n[U.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }),
    m.fn.extend({
        detach: function(e) {
            return He(this, e, !0)
        },
        remove: function(e) {
            return He(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? m.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Le(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Le(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ne(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Le(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (m.cleanData(ce(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return m.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ce.test(e) && !le[(se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = m.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (m.cleanData(ce(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return Le(this, arguments, function(t) {
                var n = this.parentNode;
                m.inArray(this, e) < 0 && (m.cleanData(ce(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        m.fn[e] = function(e) {
            for (var n, r = [], i = m(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                m(i[a])[t](n),
                s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Fe = /^margin/
      , Oe = new RegExp("^(" + J + ")(?!px)[a-z%]+$","i")
      , Pe = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    };
    function Re(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Pe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || m.contains(e.ownerDocument, e) || (a = m.style(e, t)),
        !h.pixelMarginRight() && Oe.test(a) && Fe.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Me(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    !function() {
        function t() {
            if (u) {
                u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                u.innerHTML = "",
                he.appendChild(s);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top,
                a = "2px" === t.marginLeft,
                i = "4px" === t.width,
                u.style.marginRight = "50%",
                o = "4px" === t.marginRight,
                he.removeChild(s),
                u = null
            }
        }
        var n, i, o, a, s = r.createElement("div"), u = r.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        h.clearCloneStyle = "content-box" === u.style.backgroundClip,
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        s.appendChild(u),
        m.extend(h, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return t(),
                i
            },
            pixelMarginRight: function() {
                return t(),
                o
            },
            reliableMarginLeft: function() {
                return t(),
                a
            }
        }))
    }();
    var Ie = /^(none|table(?!-c[ea]).+)/
      , We = /^--/
      , $e = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Be = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _e = ["Webkit", "Moz", "ms"]
      , ze = r.createElement("div").style;
    function Xe(e) {
        var t = m.cssProps[e];
        return t || (t = m.cssProps[e] = function(e) {
            if (e in ze)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; )
                if ((e = _e[n] + t)in ze)
                    return e
        }(e) || e),
        t
    }
    function Ue(e, t, n) {
        var r = K.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ve(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)
            "margin" === n && (a += m.css(e, n + Z[o], !0, i)),
            r ? ("content" === n && (a -= m.css(e, "padding" + Z[o], !0, i)),
            "margin" !== n && (a -= m.css(e, "border" + Z[o] + "Width", !0, i))) : (a += m.css(e, "padding" + Z[o], !0, i),
            "padding" !== n && (a += m.css(e, "border" + Z[o] + "Width", !0, i)));
        return a
    }
    function Ge(e, t, n) {
        var r, i = Pe(e), o = Re(e, t, i), a = "border-box" === m.css(e, "boxSizing", !1, i);
        return Oe.test(o) ? o : (r = a && (h.boxSizingReliable() || o === e.style[t]),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) + Ve(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }
    function Ye(e, t, n, r, i) {
        return new Ye.prototype.init(e,t,n,r,i)
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = m.camelCase(t), u = We.test(t), l = e.style;
                return u || (t = Xe(s)),
                a = m.cssHooks[t] || m.cssHooks[s],
                void 0 === n ? a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : ("string" === (o = typeof n) && (i = K.exec(n)) && i[1] && (n = ne(e, t, i),
                o = "number"),
                void (null != n && n == n && ("number" === o && (n += i && i[3] || (m.cssNumber[s] ? "" : "px")),
                h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = m.camelCase(t);
            return We.test(t) || (t = Xe(s)),
            (a = m.cssHooks[t] || m.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Re(e, t, r)),
            "normal" === i && t in Be && (i = Be[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    m.each(["height", "width"], function(e, t) {
        m.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !Ie.test(m.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, r) : te(e, $e, function() {
                        return Ge(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var i, o = r && Pe(e), a = r && Ve(e, t, r, "border-box" === m.css(e, "boxSizing", !1, o), o);
                return a && (i = K.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                n = m.css(e, t)),
                Ue(0, n, a)
            }
        }
    }),
    m.cssHooks.marginLeft = Me(h.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - te(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        m.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + Z[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Fe.test(e) || (m.cssHooks[e + t].set = Ue)
    }),
    m.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Pe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = m.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? m.style(e, t, n) : m.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    m.Tween = Ye,
    Ye.prototype = {
        constructor: Ye,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || m.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (m.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ye.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ye.propHooks[this.prop];
            return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
            this
        }
    },
    Ye.prototype.init.prototype = Ye.prototype,
    Ye.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                m.fx.step[e.prop] ? m.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[m.cssProps[e.prop]] && !m.cssHooks[e.prop] ? e.elem[e.prop] = e.now : m.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Ye.propHooks.scrollTop = Ye.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    m.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    m.fx = Ye.prototype.init,
    m.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = /queueHooks$/;
    function et() {
        Je && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(et) : e.setTimeout(et, m.fx.interval),
        m.fx.tick())
    }
    function tt() {
        return e.setTimeout(function() {
            Qe = void 0
        }),
        Qe = m.now()
    }
    function nt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = Z[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function rt(e, t, n) {
        for (var r, i = (it.tweeners[t] || []).concat(it.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function it(e, t, n) {
        var r, i, o = 0, a = it.prefilters.length, s = m.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Qe || tt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]),
            s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: m.extend({}, t),
            opts: m.extend(!0, {
                specialEasing: {},
                easing: m.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || tt(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = m.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = m.camelCase(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = m.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); o < a; o++)
            if (r = it.prefilters[o].call(l, e, c, l.opts))
                return m.isFunction(r.stop) && (m._queueHooks(l.elem, l.opts.queue).stop = m.proxy(r.stop, r)),
                r;
        return m.map(c, rt, l),
        m.isFunction(l.opts.start) && l.opts.start.call(e, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        m.fx.timer(m.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    m.Animation = m.extend(it, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ne(n.elem, e, K.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                it.tweeners[n] = it.tweeners[n] || [],
                it.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ee(e), v = U.get(e, "fxshow");
            for (r in n.queue || (null == (a = m._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    m.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                Ke.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || m.style(e, r)
                }
            if ((u = !m.isEmptyObject(t)) || !m.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = U.get(e, "display")),
                "none" === (c = m.css(e, "display")) && (l ? c = l : (oe([e], !0),
                l = e.style.display || l,
                c = m.css(e, "display"),
                oe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === m.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = U.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && oe([e], !0),
                    p.done(function() {
                        for (r in g || oe([e]),
                        U.remove(e, "fxshow"),
                        d)
                            m.style(e, r, d[r])
                    })),
                    u = rt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? it.prefilters.unshift(e) : it.prefilters.push(e)
        }
    }),
    m.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? m.extend({}, e) : {
            complete: n || !n && t || m.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !m.isFunction(t) && t
        };
        return m.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in m.fx.speeds ? r.duration = m.fx.speeds[r.duration] : r.duration = m.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m.isFunction(r.old) && r.old.call(this),
            r.queue && m.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    m.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ee).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = m.isEmptyObject(e)
              , o = m.speed(t, n, r)
              , a = function() {
                var t = it(this, m.extend({}, e), o);
                (i || U.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = m.timers
                  , a = U.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && Ze.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || m.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = U.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = m.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                m.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(e, t) {
        var n = m.fn[t];
        m.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(nt(t, !0), e, r, i)
        }
    }),
    m.each({
        slideDown: nt("show"),
        slideUp: nt("hide"),
        slideToggle: nt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        m.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var e, t = 0, n = m.timers;
        for (Qe = m.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || m.fx.stop(),
        Qe = void 0
    }
    ,
    m.fx.timer = function(e) {
        m.timers.push(e),
        m.fx.start()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        Je || (Je = !0,
        et())
    }
    ,
    m.fx.stop = function() {
        Je = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(t, n) {
        return t = m.fx && m.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = r.createElement("input")
          , t = r.createElement("select").appendChild(r.createElement("option"));
        e.type = "checkbox",
        h.checkOn = "" !== e.value,
        h.optSelected = t.selected,
        (e = r.createElement("input")).value = "t",
        e.type = "radio",
        h.radioValue = "t" === e.value
    }();
    var ot, at = m.expr.attrHandle;
    m.fn.extend({
        attr: function(e, t) {
            return _(this, m.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                m.removeAttr(this, e)
            })
        }
    }),
    m.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (i = m.attrHooks[t.toLowerCase()] || (m.expr.match.bool.test(t) ? ot : void 0)),
                void 0 !== n ? null === n ? void m.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = m.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ot = {
        set: function(e, t, n) {
            return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = at[t] || m.find.attr;
        at[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = at[a],
            at[a] = i,
            i = null != n(e, t, r) ? a : null,
            at[a] = o),
            i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i
      , ut = /^(?:a|area)$/i;
    function lt(e) {
        return (e.match(P) || []).join(" ")
    }
    function ct(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    m.fn.extend({
        prop: function(e, t) {
            return _(this, m.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[m.propFix[e] || e]
            })
        }
    }),
    m.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && m.isXMLDoc(e) || (t = m.propFix[t] || t,
                i = m.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = m.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : st.test(e.nodeName) || ut.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    h.optSelected || (m.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    m.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (m.isFunction(e))
                return this.each(function(t) {
                    m(this).addClass(e.call(this, t, ct(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; n = this[u++]; )
                    if (i = ct(n),
                    r = 1 === n.nodeType && " " + lt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = lt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (m.isFunction(e))
                return this.each(function(t) {
                    m(this).removeClass(e.call(this, t, ct(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(P) || []; n = this[u++]; )
                    if (i = ct(n),
                    r = 1 === n.nodeType && " " + lt(i) + " ") {
                        for (a = 0; o = t[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = lt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function(n) {
                m(this).toggleClass(e.call(this, n, ct(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = m(this),
                    o = e.match(P) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = ct(this)) && U.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + lt(ct(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ft = /\r/g;
    m.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = m.isFunction(e),
            this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = m.map(i, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ft, "") : null == n ? "" : n : void 0
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = m.find.attr(e, "value");
                    return null != t ? t : lt(m.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = m(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = m.inArray(m.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = m.inArray(m(e).val(), t) > -1
            }
        },
        h.checkOn || (m.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var pt = /^(?:focusinfocus|focusoutblur)$/;
    m.extend(m.event, {
        trigger: function(t, n, i, o) {
            var a, s, u, l, c, p, d, h = [i || r], g = f.call(t, "type") ? t.type : t, v = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = i = i || r,
            3 !== i.nodeType && 8 !== i.nodeType && !pt.test(g + m.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
            g = v.shift(),
            v.sort()),
            c = g.indexOf(":") < 0 && "on" + g,
            (t = t[m.expando] ? t : new m.Event(g,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = v.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : m.makeArray(n, [t]),
            d = m.event.special[g] || {},
            o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !m.isWindow(i)) {
                    for (l = d.delegateType || g,
                    pt.test(l + g) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                        u = s;
                    u === (i.ownerDocument || r) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = h[a++]) && !t.isPropagationStopped(); )
                    t.type = a > 1 ? l : d.bindType || g,
                    (p = (U.get(s, "events") || {})[t.type] && U.get(s, "handle")) && p.apply(s, n),
                    (p = c && s[c]) && p.apply && z(s) && (t.result = p.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = g,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), n) || !z(i) || c && m.isFunction(i[g]) && !m.isWindow(i) && ((u = i[c]) && (i[c] = null),
                m.event.triggered = g,
                i[g](),
                m.event.triggered = void 0,
                u && (i[c] = u)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = m.extend(new m.Event, n, {
                type: e,
                isSimulated: !0
            });
            m.event.trigger(r, null, t)
        }
    }),
    m.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                m.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return m.event.trigger(e, t, n, !0)
        }
    }),
    m.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        m.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    m.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    h.focusin = "onfocusin"in e,
    h.focusin || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            m.event.simulate(t, e.target, m.event.fix(e))
        };
        m.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = U.access(r, t);
                i || r.addEventListener(e, n, !0),
                U.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = U.access(r, t) - 1;
                i ? U.access(r, t, i) : (r.removeEventListener(e, n, !0),
                U.remove(r, t))
            }
        }
    });
    var dt = e.location
      , ht = m.now()
      , gt = /\?/;
    m.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + t),
        n
    }
    ;
    var vt = /\[\]$/
      , mt = /\r?\n/g
      , yt = /^(?:submit|button|image|reset|file)$/i
      , xt = /^(?:input|select|textarea|keygen)/i;
    function bt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            m.each(t, function(t, i) {
                n || vt.test(e) ? r(e, i) : bt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== m.type(t))
            r(e, t);
        else
            for (i in t)
                bt(e + "[" + i + "]", t[i], n, r)
    }
    m.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !m.isPlainObject(e))
            m.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                bt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = m.prop(this, "elements");
                return e ? m.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !m(this).is(":disabled") && xt.test(this.nodeName) && !yt.test(e) && (this.checked || !ae.test(e))
            }).map(function(e, t) {
                var n = m(this).val();
                return null == n ? null : Array.isArray(n) ? m.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(mt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(mt, "\r\n")
                }
            }).get()
        }
    });
    var wt = /%20/g
      , Tt = /#.*$/
      , Ct = /([?&])_=[^&]*/
      , Et = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , kt = /^(?:GET|HEAD)$/
      , St = /^\/\//
      , Nt = {}
      , Dt = {}
      , jt = "*/".concat("*")
      , At = r.createElement("a");
    function qt(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(P) || [];
            if (m.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function Lt(e, t, n, r) {
        var i = {}
          , o = e === Dt;
        function a(s) {
            var u;
            return i[s] = !0,
            m.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                a(l),
                !1)
            }),
            u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }
    function Ht(e, t) {
        var n, r, i = m.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && m.extend(!0, e, r),
        e
    }
    At.href = dt.href,
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ht(Ht(e, m.ajaxSettings), t) : Ht(m.ajaxSettings, e)
        },
        ajaxPrefilter: qt(Nt),
        ajaxTransport: qt(Dt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = m.ajaxSetup({}, n), g = h.context || h, v = h.context && (g.nodeType || g.jquery) ? m(g) : m.event, y = m.Deferred(), x = m.Callbacks("once memory"), b = h.statusCode || {}, w = {}, T = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s)
                            for (s = {}; t = Et.exec(a); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return c ? a : null
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e,
                    w[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (c)
                            E.always(e[E.status]);
                        else
                            for (t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return i && i.abort(t),
                    k(0, t),
                    this
                }
            };
            if (y.promise(E),
            h.url = ((t || h.url || dt.href) + "").replace(St, dt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url,
                    l.href = l.href,
                    h.crossDomain = At.protocol + "//" + At.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = m.param(h.data, h.traditional)),
            Lt(Nt, h, n, E),
            c)
                return E;
            for (p in (f = m.event && h.global) && 0 == m.active++ && m.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !kt.test(h.type),
            o = h.url.replace(Tt, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(wt, "+")) : (d = h.url.slice(o.length),
            h.data && (o += (gt.test(o) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (o = o.replace(Ct, "$1"),
            d = (gt.test(o) ? "&" : "?") + "_=" + ht++ + d),
            h.url = o + d),
            h.ifModified && (m.lastModified[o] && E.setRequestHeader("If-Modified-Since", m.lastModified[o]),
            m.etag[o] && E.setRequestHeader("If-None-Match", m.etag[o])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c))
                return E.abort();
            if (C = "abort",
            x.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            i = Lt(Dt, h, n, E)) {
                if (E.readyState = 1,
                f && v.trigger("ajaxSend", [E, h]),
                c)
                    return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1,
                    i.send(w, k)
                } catch (e) {
                    if (c)
                        throw e;
                    k(-1, e)
                }
            } else
                k(-1, "No Transport");
            function k(t, n, r, s) {
                var l, p, d, w, T, C = n;
                c || (c = !0,
                u && e.clearTimeout(u),
                i = void 0,
                a = s || "",
                E.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && t < 300 || 304 === t,
                r && (w = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(h, E, r)),
                w = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, E, l),
                l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (m.lastModified[o] = T),
                (T = E.getResponseHeader("etag")) && (m.etag[o] = T)),
                204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state,
                p = w.data,
                l = !(d = w.error))) : (d = C,
                !t && C || (C = "error",
                t < 0 && (t = 0))),
                E.status = t,
                E.statusText = (n || C) + "",
                l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]),
                E.statusCode(b),
                b = void 0,
                f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                x.fireWith(g, [E, C]),
                f && (v.trigger("ajaxComplete", [E, h]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(e, t, n) {
            return m.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return m.get(e, void 0, t, "script")
        }
    }),
    m.each(["get", "post"], function(e, t) {
        m[t] = function(e, n, r, i) {
            return m.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            m.ajax(m.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, m.isPlainObject(e) && e))
        }
    }),
    m._evalUrl = function(e) {
        return m.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m.isFunction(e) && (e = e.call(this[0])),
            t = m(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return m.isFunction(e) ? this.each(function(t) {
                m(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = m(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = m.isFunction(e);
            return this.each(function(n) {
                m(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                m(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    m.expr.pseudos.hidden = function(e) {
        return !m.expr.pseudos.visible(e)
    }
    ,
    m.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    m.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ft = {
        0: 200,
        1223: 204
    }
      , Ot = m.ajaxSettings.xhr();
    h.cors = !!Ot && "withCredentials"in Ot,
    h.ajax = Ot = !!Ot,
    m.ajaxTransport(function(t) {
        var n, r;
        if (h.cors || Ot && !t.crossDomain)
            return {
                send: function(i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (a in t.xhrFields)
                            s[a] = t.xhrFields[a];
                    for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                    i)
                        s.setRequestHeader(a, i[a]);
                    n = function(e) {
                        return function() {
                            n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = n(),
                    r = s.onerror = n("error"),
                    void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    m.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return m.globalEval(e),
                e
            }
        }
    }),
    m.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    m.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(i, o) {
                    t = m("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    r.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Pt = []
      , Rt = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pt.pop() || m.expando + "_" + ht++;
            return this[e] = !0,
            e
        }
    }),
    m.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = m.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(Rt, "$1" + i) : !1 !== t.jsonp && (t.url += (gt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || m.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always(function() {
                void 0 === o ? m(e).removeProp(i) : e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                Pt.push(i)),
                a && m.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    h.createHTMLDocument = function() {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    m.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href,
        t.head.appendChild(i)) : t = r),
        a = !n && [],
        (o = D.exec(e)) ? [t.createElement(o[1])] : (o = de([e], t, a),
        a && a.length && m(a).remove(),
        m.merge([], o.childNodes)));
        var i, o, a
    }
    ,
    m.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = lt(e.slice(s)),
        e = e.slice(0, s)),
        m.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && m.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        m.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    m.expr.pseudos.animated = function(e) {
        return m.grep(m.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    m.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = m.css(e, "position"), c = m(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = m.css(e, "top"),
            u = m.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m.isFunction(t) && (t = t.call(e, n, m.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    m.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    m.offset.setOffset(this, e, t)
                });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(),
            n = (t = o.ownerDocument).documentElement,
            i = t.defaultView,
            {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                N(e[0], "html") || (r = e.offset()),
                r = {
                    top: r.top + m.css(e[0], "borderTopWidth", !0),
                    left: r.left + m.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - r.top - m.css(n, "marginTop", !0),
                    left: t.left - r.left - m.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === m.css(e, "position"); )
                    e = e.offsetParent;
                return e || he
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        m.fn[e] = function(r) {
            return _(this, function(e, r, i) {
                var o;
                return m.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),
    m.each(["top", "left"], function(e, t) {
        m.cssHooks[t] = Me(h.pixelPosition, function(e, n) {
            if (n)
                return n = Re(e, t),
                Oe.test(n) ? m(e).position()[t] + "px" : n
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        m.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            m.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i)
                  , s = n || (!0 === i || !0 === o ? "margin" : "border");
                return _(this, function(t, n, i) {
                    var o;
                    return m.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? m.css(t, n, s) : m.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }),
    m.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    m.holdReady = function(e) {
        e ? m.readyWait++ : m.ready(!0)
    }
    ,
    m.isArray = Array.isArray,
    m.parseJSON = JSON.parse,
    m.nodeName = N,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var Mt = e.jQuery
      , It = e.$;
    return m.noConflict = function(t) {
        return e.$ === m && (e.$ = It),
        t && e.jQuery === m && (e.jQuery = Mt),
        m
    }
    ,
    t || (e.jQuery = e.$ = m),
    m
});
