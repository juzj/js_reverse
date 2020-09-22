var W = []
    , X = W.slice
    , Y = W.concat
    , Z = W.push
    , $ = W.indexOf
    , _ = {}
    , ab = _.toString
    , bb = _.hasOwnProperty
    , cb = {}
    , db = "1.11.1"
    , eb = function(a, b) {
    return new eb.fn.init(a,b)
}
    , fb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
    , gb = /^-ms-/
    , hb = /-([\da-z])/gi
    , ib = function(a, b) {
    return b.toUpperCase()
};

eb.fn = eb.prototype = {
    jquery: db,
    constructor: eb,
    selector: "",
    length: 0,
    toArray: function() {
        return X.call(this)
    },
    get: function(a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
    },
    pushStack: function(a) {
        var b = eb.merge(this.constructor(), a);
        return b.prevObject = this,
            b.context = this.context,
            b
    },
    each: function(a, b) {
        return eb.each(this, a, b)
    },
    map: function(a) {
        return this.pushStack(eb.map(this, function(b, c) {
            return a.call(b, c, b)
        }))
    },
    slice: function() {
        return this.pushStack(X.apply(this, arguments))
    },
    first: function() {
        return this.eq(0)
    },
    last: function() {
        return this.eq(-1)
    },
    eq: function(a) {
        var b = this.length
            , c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
        return this.prevObject || this.constructor(null)
    },
    push: Z,
    sort: W.sort,
    splice: W.splice
},
    eb.extend = eb.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
            g = arguments[h] || {},
            h++),
             "object" == typeof g || eb.isFunction(g) || (g = {}),
             h === i && (g = this,
                 h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                        c = e[d],
                    g !== c && (j && c && (eb.isPlainObject(c) || (b = eb.isArray(c))) ? (b ? (b = !1,
                        f = a && eb.isArray(a) ? a : []) : f = a && eb.isPlainObject(a) ? a : {},
                        g[d] = eb.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    eb.extend({
        expando: "jQuery" + (db + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === eb.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === eb.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !eb.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== eb.type(a) || a.nodeType || eb.isWindow(a))
                return !1;
            try {
                if (a.constructor && !bb.call(a, "constructor") && !bb.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (cb.ownLast)
                for (b in a)
                    return bb.call(a, b);
            for (b in a)
                ;
            return void 0 === b || bb.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[ab.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && eb.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(gb, "ms-").replace(hb, ib)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d),
                    e !== !1); f++)
                        ;
                else
                    for (f in a)
                        if (e = b.apply(a[f], d),
                        e === !1)
                            break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]),
                e !== !1); f++)
                    ;
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]),
                    e === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(fb, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? eb.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)),
                d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if ($)
                    return $.call(b, a, c);
                for (d = b.length,
                         c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; )
                a[e++] = b[d++];
            if (c !== c)
                for (; void 0 !== b[d]; )
                    a[e++] = b[d++];
            return a.length = e,
                a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h)
                for (; g > f; f++)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            else
                for (f in a)
                    e = b(a[f], f, d),
                    null != e && i.push(e);
            return Y.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b],
                b = a,
                a = e),
                eb.isFunction(a) ? (c = X.call(arguments, 2),
                    d = function() {
                        return a.apply(b || this, c.concat(X.call(arguments)))
                    }
                    ,
                    d.guid = a.guid = a.guid || eb.guid++,
                    d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: cb
    }),
    eb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });

function c(a) {
    var b = a.length
        , c = eb.type(a);
    return "function" === c || eb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
}
var a={}
var nb, ob = a.document, pb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qb = eb.fn.init = function(a, b) {
    var c, d;
    if (!a)
        return this;
    if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pb.exec(a),
        !c || !c[1] && b)
            return !b || b.jquery ? (b || nb).find(a) : this.constructor(b).find(a);
        if (c[1]) {
            if (b = b instanceof eb ? b[0] : b,
                eb.merge(this, eb.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : ob, !0)),
            lb.test(c[1]) && eb.isPlainObject(b))
                for (c in b)
                    eb.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
            return this
        }
        if (d = ob.getElementById(c[2]),
        d && d.parentNode) {
            if (d.id !== c[2])
                return nb.find(a);
            this.length = 1,
                this[0] = d
        }
        return this.context = ob,
            this.selector = a,
            this
    }
    return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : eb.isFunction(a) ? "undefined" != typeof nb.ready ? nb.ready(a) : a(eb) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        eb.makeArray(a, this))
}
function ab() {}
var pb, qb, rb, sb = 256;
function db() {
    this.n = null,
        this.e = 0,
        this.d = null,
        this.p = null,
        this.q = null,
        this.dmp1 = null,
        this.dmq1 = null,
        this.coeff = null
}
function eb(a, b) {
    null != a && null != b && a.length > 0 && b.length > 0 ? (this.n = bb(a, 16),
        this.e = parseInt(b, 16)) : alert("网络异常，请点击登录重试")
}
function fb(a) {
    return a.modPowInt(this.e, this.n)
}
function cb(a, b) {
    if (b < a.length + 11)
        return alert("Message too long for RSA"),
            null;
    for (var c = new Array, e = a.length - 1; e >= 0 && b > 0; ) {
        var f = a.charCodeAt(e--);
        128 > f ? c[--b] = f : f > 127 && 2048 > f ? (c[--b] = 63 & f | 128,
            c[--b] = f >> 6 | 192) : (c[--b] = 63 & f | 128,
            c[--b] = f >> 6 & 63 | 128,
            c[--b] = f >> 12 | 224)
    }
    c[--b] = 0;
    for (var g = new ab, h = new Array; b > 2; ) {
        for (h[0] = 0; 0 == h[0]; )
            g.nextBytes(h);
        c[--b] = h[0]
    }
    return c[--b] = 2,
        c[--b] = 0,
        new d(c)
}
function gb(a) {
    var b = cb(a, this.n.bitLength() + 7 >> 3);
    if (null == b)
        return null;
    var c = this.doPublic(b);
    if (null == c)
        return null;
    var d = c.toString(16);
    return 0 == (1 & d.length) ? d : "0" + d
}
function bb(a, b) {
    return new d(a,b)
}
function d(a, b, c) {
    null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
}
function n(a, b) {
    var c;
    if (16 == b)
        c = 4;
    else if (8 == b)
        c = 3;
    else if (256 == b)
        c = 8;
    else if (2 == b)
        c = 1;
    else if (32 == b)
        c = 5;
    else {
        if (4 != b)
            return void this.fromRadix(a, b);
        c = 2
    }
    this.t = 0,
        this.s = 0;
    for (var e = a.length, f = !1, g = 0; --e >= 0; ) {
        var h = 8 == c ? 255 & a[e] : j(a, e);
        0 > h ? "-" == a.charAt(e) && (f = !0) : (f = !1,
            0 == g ? this[this.t++] = h : g + c > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - g) - 1) << g,
                this[this.t++] = h >> this.DB - g) : this[this.t - 1] |= h << g,
            g += c,
        g >= this.DB && (g -= this.DB))
    }
    8 == c && 0 != (128 & a[0]) && (this.s = -1,
    g > 0 && (this[this.t - 1] |= (1 << this.DB - g) - 1 << g)),
        this.clamp(),
    f && d.ZERO.subTo(this, this)
}
function j(a, b) {
    var c = ob[a.charCodeAt(b)];
    return null == c ? -1 : c
}
eb.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? eb.find.matchesSelector(d, a) ? [d] : [] : eb.find.matches(a, eb.grep(b, function(a) {
            return 1 === a.nodeType
        }))
}
eb.fn.extend({
    val: function(a) {
        var b, c, d, e = this[0];
        return arguments.length ? (d = eb.isFunction(a),
            this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, eb(this).val()) : a,
                    null == e ? e = "" : "number" == typeof e ? e += "" : eb.isArray(e) && (e = eb.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })),
                    b = eb.valHooks[this.type] || eb.valHooks[this.nodeName.toLowerCase()],
                b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = eb.valHooks[e.type] || eb.valHooks[e.nodeName.toLowerCase()],
            b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                "string" == typeof c ? c.replace(uc, "") : null == c ? "" : c)) : void 0
    }
})
function t(a) {
    var b, c = 1;
    return 0 != (b = a >>> 16) && (a = b,
        c += 16),
    0 != (b = a >> 8) && (a = b,
        c += 8),
    0 != (b = a >> 4) && (a = b,
        c += 4),
    0 != (b = a >> 2) && (a = b,
        c += 2),
    0 != (b = a >> 1) && (a = b,
        c += 1),
        c
}
function u() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + t(this[this.t - 1] ^ this.s & this.DM)
}
function _(a) {
    var b;
    for (b = 0; b < a.length; ++b)
        a[b] = $()
}
function $() {
    if (null == pb) {
        for (Z(),
                 pb = X(),
                 pb.init(qb),
                 rb = 0; rb < qb.length; ++rb)
            qb[rb] = 0;
        rb = 0
    }
    return pb.next()
}
function W() {
    var a;
    return this.i = this.i + 1 & 255,
        this.j = this.j + this.S[this.i] & 255,
        a = this.S[this.i],
        this.S[this.i] = this.S[this.j],
        this.S[this.j] = a,
        this.S[a + this.S[this.i] & 255]
}
function X() {
    return new U
}
function Y(a) {
    qb[rb++] ^= 255 & a,
        qb[rb++] ^= a >> 8 & 255,
        qb[rb++] ^= a >> 16 & 255,
        qb[rb++] ^= a >> 24 & 255,
    rb >= sb && (rb -= sb)
}
function Z() {
    Y((new Date).getTime())
}
function T(a, b) {
    var c;
    return c = 256 > a || b.isEven() ? new E(b) : new L(b),
        this.exp(a, c)
}
function U() {
    this.i = 0,
        this.j = 0,
        this.S = new Array
}
function V(a) {
    var b, c, d;
    for (b = 0; 256 > b; ++b)
        this.S[b] = b;
    for (c = 0,
             b = 0; 256 > b; ++b)
        c = c + this.S[b] + a[b % a.length] & 255,
            d = this.S[b],
            this.S[b] = this.S[c],
            this.S[c] = d;
    this.i = 0,
        this.j = 0
}
function P(a, b) {
    a.squareTo(b),
        this.reduce(b)
}
function Q(a, b, c) {
    a.multiplyTo(b, c),
        this.reduce(c)
}
function R() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}
function S(a, b) {
    if (a > 4294967295 || 1 > a)
        return d.ONE;
    var c = e()
        , f = e()
        , g = b.convert(this)
        , h = t(a) - 1;
    for (g.copyTo(c); --h >= 0; )
        if (b.sqrTo(c, f),
        (a & 1 << h) > 0)
            b.mulTo(f, g, c);
        else {
            var i = c;
            c = f,
                f = i
        }
    return b.revert(c)
}

eb.each({
    parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
        return eb.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
        return eb.dir(a, "parentNode", c)
    },
    next: function(a) {
        return e(a, "nextSibling")
    },
    prev: function(a) {
        return e(a, "previousSibling")
    },
    nextAll: function(a) {
        return eb.dir(a, "nextSibling")
    },
    prevAll: function(a) {
        return eb.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
        return eb.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
        return eb.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
        return eb.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
        return eb.sibling(a.firstChild)
    },
    contents: function(a) {
        return eb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : eb.merge([], a.childNodes)
    }
}, function(a, b) {
    eb.fn[a] = function(c, d) {
        var e = eb.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c),
        d && "string" == typeof d && (e = eb.filter(d, e)),
        this.length > 1 && (sb[a] || (e = eb.unique(e)),
        rb.test(a) && (e = e.reverse())),
            this.pushStack(e)
    }
});
var i = {}
i.page = {
    loadList: function(a) {
        var b = $(a.wrapExpr)
            , c = b.length;
        if (0 >= c)
            return null;
        if (1 == c)
            return a.wrap = b,
                new g(a);
        var d = [];
        return b.each(function() {
            var b = $.extend(!0, {}, a, {
                wrap: $(this)
            });
            d.push(new g(b))
        }),
            b = null,
            d
    },
    scrollToMobile: function(a) {
        1 != $("#J_IsPc").val() && $(window).scrollTop($(a).offset().top)
    },
    newtvTip: function(a) {
        $("#J_NewTVTip")[0] || ($("body").append('<div class="newtv-tip" id="J_NewTVTip">' + a + '</div><div class="newtv-mask" id="J_NewTVMask"></div>'),
            setTimeout(function() {
                $("#J_NewTVTip,#J_NewTVMask").remove()
            }, 2e3))
    },
    saveFingerprint: function() {
        var a, b = "{", c = new Fingerprint2({
            excludeCanvas: !0,
            excludeWebGL: !0
        });
        c.get(function(c, d) {
            if ("undefined" != typeof window.console) {
                for (var e in d) {
                    var f = d[e]
                        , g = f.value;
                    b += '"' + f.key + '":"' + g.toString().substr(0, 100) + '",'
                }
                b = b.substring(0, b.length - 1),
                    b += "}"
            }
            a = c,
                $.fingerprint = {
                    details: b,
                    result: a
                }
        })
    },
    rsaFingerprint: function(a, b) {
        if (!$.fingerprint)
            return {
                details: "",
                result: ""
            };
        var c = $.fingerprint.details
            , d = $.fingerprint.result
            , e = c.length
            , f = ""
            , g = new m.RSAKey;
        g.setPublic(a, b);
        for (var h = g.encrypt(d), i = 0; e > i; i += 117)
            f += g.encrypt(c.substr(i, 117));
        return {
            details: f,
            result: h
        }
    },
    getFingerRsaParams: function(a) {
        var b = {};
        return i.common.ajax({
            url: a,
            async: !1,
            success: function(a) {
                (a.status = j.ajax.SUCCESS) && (b = i.page.rsaFingerprint(a.result.modulus, a.result.publicExponent))
            }
        }),
            b
    },
    saveFingerResult: function(a, b) {
        var c = new Fingerprint2({
            excludeCanvas: !0,
            excludeWebGL: !0
        });
        c.get(function(c) {
            i.common.ajax({
                url: a,
                async: !1,
                success: function(a) {
                    if (a.status = j.ajax.SUCCESS) {
                        var d = new m.RSAKey;
                        d.setPublic(a.result.modulus, a.result.publicExponent);
                        var e = d.encrypt(c);
                        b(e)
                    }
                }
            })
        })
    },
    rsaLongStr: function(a, b) {
        var c = [];
        return i.common.ajax({
            url: a,
            async: !1,
            success: function(a) {
                if (a.status = j.ajax.SUCCESS) {
                    var d = new m.RSAKey;
                    d.setPublic(a.result.modulus, a.result.publicExponent);
                    for (var e = 0, f = b.length; f > e; e += 117)
                        c.push(d.encrypt(b.substr(e, 117)))
                }
            }
        }),
            c.join(",")
    },
    imgCodeHandler: $.noop,
    setImgType: function(a, b, c) {
        $(".j_imgtype:first").val(a).data("isRisk", b).data("isPreventImgSlide", c)
    },
    getImgType: function() {
        var a = $(".j_imgtype:first");
        return {
            val: a.val(),
            isRisk: !!a.data("isRisk"),
            isPreventImgSlide: !!a.data("isPreventImgSlide")
        }
    },
    getImgSlideStatus: $.noop,
    dynamicHandler: $.noop,
    staticSubmitHandler: $.noop,
    successSubmit: function(a) {
        var b = a
            , c = b.position()
            , d = c.left
            , e = c.top
            , f = parseInt(b.css("marginTop").replace("px", ""), 10);
        width = b.outerWidth(),
            height = b.outerHeight() - 16,
            d = d + width / 2 + 35,
            e = e + f + height / 2;
        var g = '<div style="left:' + d + "px; position: absolute; top: " + e + 'px;"><img src="/images/success.gif?r=' + Math.random() + '"></div>';
        b.parent().append(g)
    }
}

var modulus =  ""
var publicExponent= "010001"

// c.setPublic(modulus, publicExponent);
// var d = c.encrypt('123333');
// // b.siblings(".J_RsaPsd").val(d)
// console.log(d);

function bodyRSA()
{
    var key = RSAUtils.getKeyPair("010001","","00833c4af965ff7a8409f8b5d5a83d87f2f19d7c1eb40dc59a98d2346cbb145046b2c6facc25b5cc363443f0f7ebd9524b7c1e1917bf7d849212339f6c1d3711b115ecb20f0c89fc2182a985ea28cbb4adf6a321ff7e715ba9b8d7261d1c140485df3b705247a70c28c9068caabbedbf9510dada6d13d99e57642b853a73406817");
    return key
}
function get_encrypt(password) {
    key = bodyRSA();
    var a = RSAUtils.encryptedString(key,password)

    //var b = RSAUtils.encryptedString(key,username)
    console.log(a)
    console.log('----------------------------------')
    //console.log(b)
    return a
}
get_encrypt('11111111111')

