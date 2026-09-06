WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/shCore.js' */
/**
 * 20/11/15 jmcarthur: This is the main file which contains the SyntaxHighlighter code. For some long forgotten reason,
 * this minified file is referred to by atlassian-plugin.xml, rather than the unminified version in src/shCore.js. Even better,
 * this file is different to what you get if you minify src/shCore.js. So, any changes to SyntaxHighlighter functionality
 * require you to work with this file. I've run it through a de-minifier, but that's like putting makeup on a troll. Enjoy!
 */

var XRegExp = XRegExp || undefined;
if (XRegExp) throw Error("can't load XRegExp twice in the same frame");
(function(e) {
    function c(e, t) {
        if (!XRegExp.isRegExp(e)) throw TypeError("type RegExp expected");
        var n = e._xregexp;
        return e = XRegExp(e.source, h(e) + (t || "")), n && (e._xregexp = {
            source: n.source,
            captureNames: n.captureNames ? n.captureNames.slice(0) : null
        }), e
    }

    function h(e) {
        return (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : "")
    }

    function p(e, t, n, r) {
        var o = s.length,
            u, a, f;
        i = !0;
        try {
            while (o--) {
                f = s[o];
                if (n & f.scope && (!f.trigger || f.trigger.call(r))) {
                    f.pattern.lastIndex = t, a = f.pattern.exec(e);
                    if (a && a.index === t) {
                        u = {
                            output: f.handler.call(r, a, n),
                            match: a
                        };
                        break
                    }
                }
            }
        } catch (l) {
            throw l
        } finally {
            i = !1
        }
        return u
    }

    function d(e, t, n) {
        if (Array.prototype.indexOf) return e.indexOf(t, n);
        for (var r = n || 0; r < e.length; r++)
            if (e[r] === t) return r;
        return -1
    }
    XRegExp = function(t, r) {
        var s = [],
            u = XRegExp.OUTSIDE_CLASS,
            a = 0,
            f, h, d, v, m;
        if (XRegExp.isRegExp(t)) {
            if (r !== e) throw TypeError("can't supply flags when constructing one RegExp from another");
            return c(t)
        }
        if (i) throw Error("can't call the XRegExp constructor within token definition functions");
        r = r || "", f = {
            hasNamedCapture: !1,
            captureNames: [],
            hasFlag: function(e) {
                return r.indexOf(e) > -1
            },
            setFlag: function(e) {
                r += e
            }
        };
        while (a < t.length) h = p(t, a, u, f), h ? (s.push(h.output), a += h.match[0].length || 1) : (d = o.exec.call(l[u], t.slice(a))) ? (s.push(d[0]), a += d[0].length) : (v = t.charAt(a), v === "[" ? u = XRegExp.INSIDE_CLASS : v === "]" && (u = XRegExp.OUTSIDE_CLASS), s.push(v), a++);
        return m = RegExp(s.join(""), o.replace.call(r, n, "")), m._xregexp = {
            source: t,
            captureNames: f.hasNamedCapture ? f.captureNames : null
        }, m
    }, XRegExp.version = "1.5.1", XRegExp.INSIDE_CLASS = 1, XRegExp.OUTSIDE_CLASS = 2;
    var t = /\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,
        n = /[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,
        r = /^(?:[?*+]|{\d+(?:,\d*)?})\??/,
        i = !1,
        s = [],
        o = {
            exec: RegExp.prototype.exec,
            test: RegExp.prototype.test,
            match: String.prototype.match,
            replace: String.prototype.replace,
            split: String.prototype.split
        },
        u = o.exec.call(/()??/, "")[1] === e,
        a = function() {
            var e = /^/g;
            return o.test.call(e, ""), !e.lastIndex
        }(),
        f = RegExp.prototype.sticky !== e,
        l = {};
    l[XRegExp.INSIDE_CLASS] = /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/, l[XRegExp.OUTSIDE_CLASS] = /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/, XRegExp.addToken = function(e, t, n, r) {
        s.push({
            pattern: c(e, "g" + (f ? "y" : "")),
            handler: t,
            scope: n || XRegExp.OUTSIDE_CLASS,
            trigger: r || null
        })
    }, XRegExp.cache = function(e, t) {
        var n = e + "/" + (t || "");
        return XRegExp.cache[n] || (XRegExp.cache[n] = XRegExp(e, t))
    }, XRegExp.copyAsGlobal = function(e) {
        return c(e, "g")
    }, XRegExp.escape = function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, XRegExp.execAt = function(e, t, n, r) {
        var i = c(t, "g" + (r && f ? "y" : "")),
            s;
        return i.lastIndex = n = n || 0, s = i.exec(e), r && s && s.index !== n && (s = null), t.global && (t.lastIndex = s ? i.lastIndex : 0), s
    }, XRegExp.freezeTokens = function() {
        XRegExp.addToken = function() {
            throw Error("can't run addToken after freezeTokens")
        }
    }, XRegExp.isRegExp = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    }, XRegExp.iterate = function(e, t, n, r) {
        var i = c(t, "g"),
            s = -1,
            o;
        while (o = i.exec(e)) t.global && (t.lastIndex = i.lastIndex), n.call(r, o, ++s, e, t), i.lastIndex === o.index && i.lastIndex++;
        t.global && (t.lastIndex = 0)
    }, XRegExp.matchChain = function(e, t) {
        return function n(e, r) {
            var i = t[r].regex ? t[r] : {
                    regex: t[r]
                },
                s = c(i.regex, "g"),
                o = [],
                u;
            for (u = 0; u < e.length; u++) XRegExp.iterate(e[u], s, function(e) {
                o.push(i.backref ? e[i.backref] || "" : e[0])
            });
            return r === t.length - 1 || !o.length ? o : n(o, r + 1)
        }([e], 0)
    }, RegExp.prototype.apply = function(e, t) {
        return this.exec(t[0])
    }, RegExp.prototype.call = function(e, t) {
        return this.exec(t)
    }, RegExp.prototype.exec = function(t) {
        var n, r, i, s;
        this.global || (s = this.lastIndex), n = o.exec.apply(this, arguments);
        if (n) {
            !u && n.length > 1 && d(n, "") > -1 && (i = RegExp(this.source, o.replace.call(h(this), "g", "")), o.replace.call((t + "").slice(n.index), i, function() {
                for (var t = 1; t < arguments.length - 2; t++) arguments[t] === e && (n[t] = e)
            }));
            if (this._xregexp && this._xregexp.captureNames)
                for (var f = 1; f < n.length; f++) r = this._xregexp.captureNames[f - 1], r && (n[r] = n[f]);
            !a && this.global && !n[0].length && this.lastIndex > n.index && this.lastIndex--
        }
        return this.global || (this.lastIndex = s), n
    }, RegExp.prototype.test = function(e) {
        var t, n;
        return this.global || (n = this.lastIndex), t = o.exec.call(this, e), t && !a && this.global && !t[0].length && this.lastIndex > t.index && this.lastIndex--, this.global || (this.lastIndex = n), !!t
    }, String.prototype.match = function(e) {
        XRegExp.isRegExp(e) || (e = RegExp(e));
        if (e.global) {
            var t = o.match.apply(this, arguments);
            return e.lastIndex = 0, t
        }
        return e.exec(this)
    }, String.prototype.replace = function(e, n) {
        var r = XRegExp.isRegExp(e),
            i, s, u, a;
        return r ? (e._xregexp && (i = e._xregexp.captureNames), e.global || (a = e.lastIndex)) : e += "", Object.prototype.toString.call(n) === "[object Function]" ? s = o.replace.call(this + "", e, function() {
            if (i) {
                arguments[0] = new String(arguments[0]);
                for (var t = 0; t < i.length; t++) i[t] && (arguments[0][i[t]] = arguments[t + 1])
            }
            return r && e.global && (e.lastIndex = arguments[arguments.length - 2] + arguments[0].length), n.apply(null, arguments)
        }) : (u = this + "", s = o.replace.call(u, e, function() {
            var e = arguments;
            return o.replace.call(n + "", t, function(t, n, r) {
                if (!n) {
                    var o = +r;
                    return o <= e.length - 3 ? e[o] : (o = i ? d(i, r) : -1, o > -1 ? e[o + 1] : t)
                }
                switch (n) {
                    case "$":
                        return "$";
                    case "&":
                        return e[0];
                    case "`":
                        return e[e.length - 1].slice(0, e[e.length - 2]);
                    case "'":
                        return e[e.length - 1].slice(e[e.length - 2] + e[0].length);
                    default:
                        var s = "";
                        n = +n;
                        if (!n) return t;
                        while (n > e.length - 3) s = String.prototype.slice.call(n, -1) + s, n = Math.floor(n / 10);
                        return (n ? e[n] || "" : "$") + s
                }
            })
        })), r && (e.global ? e.lastIndex = 0 : e.lastIndex = a), s
    }, String.prototype.split = function(t, n) {
        if (!XRegExp.isRegExp(t)) return o.split.apply(this, arguments);
        var r = this + "",
            i = [],
            s = 0,
            u, a;
        if (n === e || +n < 0) n = Infinity;
        else {
            n = Math.floor(+n);
            if (!n) return []
        }
        t = XRegExp.copyAsGlobal(t);
        while (u = t.exec(r)) {
            if (t.lastIndex > s) {
                i.push(r.slice(s, u.index)), u.length > 1 && u.index < r.length && Array.prototype.push.apply(i, u.slice(1)), a = u[0].length, s = t.lastIndex;
                if (i.length >= n) break
            }
            t.lastIndex === u.index && t.lastIndex++
        }
        return s === r.length ? (!o.test.call(t, "") || a) && i.push("") : i.push(r.slice(s)), i.length > n ? i.slice(0, n) : i
    }, XRegExp.addToken(/\(\?#[^)]*\)/, function(e) {
        return o.test.call(r, e.input.slice(e.index + e[0].length)) ? "" : "(?:)"
    }), XRegExp.addToken(/\((?!\?)/, function() {
        return this.captureNames.push(null), "("
    }), XRegExp.addToken(/\(\?<([$\w]+)>/, function(e) {
        return this.captureNames.push(e[1]), this.hasNamedCapture = !0, "("
    }), XRegExp.addToken(/\\k<([\w$]+)>/, function(e) {
        var t = d(this.captureNames, e[1]);
        return t > -1 ? "\\" + (t + 1) + (isNaN(e.input.charAt(e.index + e[0].length)) ? "" : "(?:)") : e[0]
    }), XRegExp.addToken(/\[\^?]/, function(e) {
        return e[0] === "[]" ? "\\b\\B" : "[\\s\\S]"
    }), XRegExp.addToken(/^\(\?([imsx]+)\)/, function(e) {
        return this.setFlag(e[1]), ""
    }), XRegExp.addToken(/(?:\s+|#.*)+/, function(e) {
        return o.test.call(r, e.input.slice(e.index + e[0].length)) ? "" : "(?:)"
    }, XRegExp.OUTSIDE_CLASS, function() {
        return this.hasFlag("x")
    }), XRegExp.addToken(/\./, function() {
        return "[\\s\\S]"
    }, XRegExp.OUTSIDE_CLASS, function() {
        return this.hasFlag("s")
    })
})();
var SyntaxHighlighter = function() {
    function t(e, t) {
        return e.className.indexOf(t) != -1
    }

    function n(e, n) {
        t(e, n) || (e.className += " " + n)
    }

    function r(e, t) {
        e.className = e.className.replace(t, "")
    }

    function i(e) {
        var t = [];
        for (var n = 0; n < e.length; n++) t.push(e[n]);
        return t
    }

    function s(e) {
        return e.split("\n")
    }

    function o(e) {
        var t = "highlighter_";
        return e.indexOf(t) == 0 ? e : t + e
    }

    function u(t) {
        return e.vars.highlighters[o(t)]
    }

    function a(e) {
        return document.getElementById(o(e))
    }

    function f(t) {
        e.vars.highlighters[o(t.id)] = t
    }

    function l(e, t, n) {
        if (e == null) return null;
        var r = n != 1 ? e.childNodes : [e.parentNode],
            i = {
                    "#": "id",
                    ".": "className"
                }[t.substr(0, 1)] || "nodeName",
            s, o;
        s = i != "nodeName" ? t.substr(1) : t.toUpperCase();
        if ((e[i] || "").indexOf(s) != -1) return e;
        for (var u = 0; r && u < r.length && o == null; u++) o = l(r[u], t, n);
        return o
    }

    function c(e, t) {
        return l(e, t, !0)
    }

    function h(e, t, n) {
        n = Math.max(n || 0, 0);
        for (var r = n; r < e.length; r++)
            if (e[r] == t) return r;
        return -1
    }

    function p(e) {
        return (e || "") + Math.round(Math.random() * 1e6).toString()
    }

    function d(e, t) {
        var n = {},
            r;
        for (r in e) n[r] = e[r];
        for (r in t) n[r] = t[r];
        return n
    }

    function v(e) {
        var t = {
            "true": !0,
            "false": !1
        }[e];
        return t == null ? e : t
    }

    function m(e, t, n, r, i) {
        var s = (screen.width - n) / 2,
            o = (screen.height - r) / 2;
        i += ", left=" + s + ", top=" + o + ", width=" + n + ", height=" + r, i = i.replace(/^,/, "");
        var u = window.open(e, t, i);
        return u.focus(), u.opener = null, u
    }

    function g(e, t, n, r) {
        function i(e) {
            e = e || window.event, e.target || (e.target = e.srcElement, e.preventDefault = function() {
                this.returnValue = !1
            }), n.call(r || window, e)
        }
        e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i, !1)
    }

    function y(t) {
        window.alert(e.config.strings.alert + t)
    }

    function b(t, n) {
        var r = e.vars.discoveredBrushes,
            i = null;
        if (r == null) {
            r = {};
            for (var s in e.brushes) {
                var o = e.brushes[s],
                    u = o.aliases;
                if (u == null) continue;
                o.brushName = s.toLowerCase();
                for (var a = 0; a < u.length; a++) r[u[a]] = s
            }
            e.vars.discoveredBrushes = r
        }
        return i = e.brushes[r[t]], i == null && n != 0 && y(e.config.strings.noBrush + t), i
    }

    function w(e, t) {
        var n = s(e);
        for (var r = 0; r < n.length; r++) n[r] = t(n[r], r);
        return n.join("\n")
    }

    function E(e) {
        return e.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, "")
    }

    function S(e) {
        var t, n = {},
            r = new XRegExp("^\\[(?<values>(.*?))\\]$"),
            i = new XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?", "g");
        while ((t = i.exec(e)) != null) {
            var s = t.value.replace(/^['"]|['"]$/g, "");
            if (s != null && r.test(s)) {
                var o = r.exec(s);
                s = o.values.length > 0 ? o.values.split(/\s*,\s*/) : []
            }
            n[t.name] = s
        }
        return n
    }

    function x(t, n) {
        return t == null || t.length == 0 || t == "\n" ? t : (t = t.replace(/</g, "&lt;"), t = t.replace(/ {2,}/g, function(t) {
            var n = "";
            for (var r = 0; r < t.length - 1; r++) n += e.config.space;
            return n + " "
        }), n != null && (t = w(t, function(e) {
            if (e.length == 0) return "";
            var t = "";
            return e = e.replace(/^(&nbsp;| )+/, function(e) {
                return t = e, ""
            }), e.length == 0 ? t : t + '<code class="' + n + '">' + e + "</code>"
        })), t)
    }

    function T(e, t) {
        var n = e.toString();
        while (n.length < t) n = "0" + n;
        return n
    }

    function N(e, t) {
        var n = "";
        for (var r = 0; r < t; r++) n += " ";
        return e.replace(/\t/g, n)
    }

    function C(e, t) {
        function u(e, t, n) {
            return e.substr(0, t) + i.substr(0, n) + e.substr(t + 1, e.length)
        }
        var n = s(e),
            r = "	",
            i = "";
        for (var o = 0; o < 50; o++) i += "                    ";
        return e = w(e, function(e) {
            if (e.indexOf(r) == -1) return e;
            var n = 0;
            while ((n = e.indexOf(r)) != -1) {
                var i = t - n % t;
                e = u(e, n, i)
            }
            return e
        }), e
    }

    function k(t) {
        var n = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi,
            r = /&#39;/g,
            i = /&quot;/g;
        return e.config.bloggerMode == 1 && (t = t.replace(n, "\n")), e.config.stripBrs == 1 && (t = t.replace(n, "")), t = t.replace(r, "'"), t = t.replace(i, '"'), t
    }

    function L(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function A(e) {
        var t = s(k(e)),
            n = new Array,
            r = /^\s*/,
            i = 1e3;
        for (var o = 0; o < t.length && i > 0; o++) {
            var u = t[o];
            if (L(u).length == 0) continue;
            var a = r.exec(u);
            if (a == null) return e;
            i = Math.min(a[0].length, i)
        }
        if (i > 0)
            for (var o = 0; o < t.length; o++) t[o] = t[o].substr(i);
        return t.join("\n")
    }

    function O(e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : e.length < t.length ? -1 : e.length > t.length ? 1 : 0
    }

    function M(t, n) {
        function r(e, t) {
            return e[0]
        }
        var i = 0,
            s = null,
            o = [],
            u = n.func ? n.func : r;
        while ((s = n.regex.exec(t)) != null) {
            var a = u(s, n);
            typeof a == "string" && (a = [new e.Match(a, s.index, n.css)]), o = o.concat(a)
        }
        return o
    }

    function _(t) {
        var n = /(.*)((&gt;|&lt;).*)/;
        return t.replace(e.regexLib.url, function(e) {
            var t = "",
                r = null;
            if (r = n.exec(e)) e = r[1], t = r[2];
            if (e.indexOf("<") != -1) {
                var i = e.substring(0, e.indexOf("<")),
                    s = e.substring(e.indexOf("<"), e.length);
                return t += s, '<a href="' + i + '">' + i + "</a>" + t
            }
            return '<a href="' + e + '">' + e + "</a>" + t
        })
    }

    function D() {
        var e = document.getElementsByTagName("script"),
            t = [];
        for (var n = 0; n < e.length; n++) e[n].type == "syntaxhighlighter" && t.push(e[n]);
        return t
    }

    function P(e) {
        var t = "<![CDATA[",
            n = "]]>",
            r = L(e),
            i = !1,
            s = t.length,
            o = n.length;
        r.indexOf(t) == 0 && (r = r.substring(s), i = !0);
        var u = r.length;
        return r.indexOf(n) == u - o && (r = r.substring(0, u - o), i = !0), i ? r : e
    }

    /**
     * Quick code mouse double click handler.
     */
    function H(e)
    {
        var target = e.target,
            highlighterDiv = c(target, '.syntaxhighlighter'),
            container = c(target, '.container');

        if (!container || !highlighterDiv)
            return;

        selectText(container);

    };

    function selectText(element) {
        var range, selection;

        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    typeof require != "undefined" && typeof XRegExp == "undefined" && (XRegExp = require("XRegExp").XRegExp);
    var e = {
        defaults: {
            "class-name": "",
            "first-line": 1,
            "pad-line-numbers": !1,
            highlight: null,
            title: null,
            "smart-tabs": !0,
            "tab-size": 4,
            gutter: !0,
            toolbar: !0,
            "quick-code": !0,
            collapse: !1,
            "auto-links": !0,
            light: !1,
            "html-script": !1
        },
        config: {
            space: "&nbsp;",
            useScriptTags: !0,
            bloggerMode: !1,
            stripBrs: !1,
            tagName: "pre",
            strings: {
                expandSource: "expand source",
                help: "?",
                alert: "SyntaxHighlighter\n\n",
                noBrush: "Can't find brush for: ",
                brushNotHtmlScript: "Brush wasn't configured for html-script option: ",
                aboutDialog: '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>'
            }
        },
        vars: {
            discoveredBrushes: null,
            highlighters: {}
        },
        brushes: {},
        regexLib: {
            multiLineCComments: /\/\*[\s\S]*?\*\//gm,
            singleLineCComments: /\/\/.*$/gm,
            singleLinePerlComments: /#.*$/gm,
            doubleQuotedString: /"([^\\"\n]|\\.)*"/g,
            singleQuotedString: /'([^\\'\n]|\\.)*'/g,
            multiLineDoubleQuotedString: new XRegExp('"([^\\\\"]|\\\\.)*"', "gs"),
            multiLineSingleQuotedString: new XRegExp("'([^\\\\']|\\\\.)*'", "gs"),
            xmlComments: /(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,
            /** This is to fix XSS(CONFSERVER-56096), not support username:password inside userinfo component
             * as the usage is deprecated, see doc https://tools.ietf.org/html/rfc3986#section-3.2.1
             */
            url: /(ftp|http|https):\/\/([\w.-]*@)?[\w.-]+(:[0-9]+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=]+|\/)?/g,
            phpScriptTags: {
                left: /(&lt;|<)\?=?/g,
                right: /\?(&gt;|>)/g
            },
            aspScriptTags: {
                left: /(&lt;|<)%=?/g,
                right: /%(&gt;|>)/g
            },
            scriptScriptTags: {
                left: /(&lt;|<)\s*script.*?(&gt;|>)/gi,
                right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi
            }
        },
        toolbar: {
            getHtml: function(t) {
                function s(t, n) {
                    return e.toolbar.getButtonHtml(t, n, e.config.strings[n])
                }
                var n = '<div class="toolbar">',
                    r = e.toolbar.items,
                    i = r.list;
                for (var o = 0; o < i.length; o++) n += (r[i[o]].getHtml || s)(t, i[o]);
                return n += "</div>", n
            },
            getButtonHtml: function(e, t, n) {
                return '<span><a href="#" class="toolbar_item command_' + t + " " + t + '">' + n + "</a></span>"
            },
            handler: function(t) {
                function i(e) {
                    var t = new RegExp(e + "_(\\w+)"),
                        n = t.exec(r);
                    return n ? n[1] : null
                }
                var n = t.target,
                    r = n.className || "",
                    s = u(c(n, ".syntaxhighlighter").id),
                    o = i("command");
                s && o && e.toolbar.items[o].execute(s), t.preventDefault()
            },
            items: {
                list: ["expandSource", "help"],
                expandSource: {
                    getHtml: function(t) {
                        if (t.getParam("collapse") != 1) return "";
                        var n = t.getParam("title");
                        return e.toolbar.getButtonHtml(t, "expandSource", n ? n : e.config.strings.expandSource)
                    },
                    execute: function(e) {
                        var t = a(e.id);
                        r(t, "collapsed")
                    }
                },
                help: {
                    execute: function(t) {
                        var n = m("", "_blank", 500, 250, "scrollbars=0"),
                            r = n.document;
                        r.write(e.config.strings.aboutDialog), r.close(), n.focus()
                    }
                }
            }
        },
        findElements: function(t, n) {
            var r = n ? [n] : i(document.getElementsByTagName(e.config.tagName)),
                s = e.config,
                o = [];
            s.useScriptTags && (r = r.concat(D()));
            if (r.length === 0) return o;
            for (var u = 0; u < r.length; u++) {
                var a = {
                    target: r[u],
                    params: d(t, S(r[u].getAttribute('data-syntaxhighlighter-params')))
                };
                if (a.params["brush"] == null) continue;
                o.push(a)
            }
            return o
        },
        highlight: function(t, n) {
            var r = this.findElements(t, n),
                i = "innerHTML",
                s = null,
                o = e.config;
            if (r.length === 0) return;
            for (var u = 0; u < r.length; u++) {
                var n = r[u],
                    a = n.target,
                    f = n.params,
                    l = f.brush,
                    c;
                if (l == null) continue;
                if (f["html-script"] == "true" || e.defaults["html-script"] == 1) s = new e.HtmlScript(l), l = "htmlscript";
                else {
                    var h = b(l);
                    if (!h) continue;
                    s = new h
                }
                c = a[i], o.useScriptTags && (c = P(c)), (a.title || "") != "" && (f.title = a.title), f.brush = l, s.init(f), n = s.getDiv(c), (a.id || "") != "" && (n.id = a.id), a.parentNode.replaceChild(n, a)
            }
        },
        all: function(t) {
            g(window, "load", function() {
                e.highlight(t)
            })
        }
    };
    return e.all = e.all, e.highlight = e.highlight, e.Match = function(e, t, n) {
        this.value = e, this.index = t, this.length = e.length, this.css = n, this.brushName = null
    }, e.Match.prototype.toString = function() {
        return this.value
    }, e.HtmlScript = function(t) {
        function f(e, t) {
            for (var n = 0; n < e.length; n++) e[n].index += t
        }

        function l(e, t) {
            var i = e.code,
                s = [],
                o = r.regexList,
                u = e.index + e.left.length,
                a = r.htmlScript,
                l;
            for (var c = 0; c < o.length; c++) l = M(i, o[c]), f(l, u), s = s.concat(l);
            a.left != null && e.left != null && (l = M(e.left, a.left), f(l, e.index), s = s.concat(l)), a.right != null && e.right != null && (l = M(e.right, a.right), f(l, e.index + e[0].lastIndexOf(e.right)), s = s.concat(l));
            for (var h = 0; h < s.length; h++) s[h].brushName = n.brushName;
            return s
        }
        var n = b(t),
            r, i = new e.brushes.Xml,
            s = null,
            o = this,
            u = "getDiv getHtml init".split(" ");
        if (n == null) return;
        r = new n;
        for (var a = 0; a < u.length; a++)(function() {
            var e = u[a];
            o[e] = function() {
                return i[e].apply(i, arguments)
            }
        })();
        if (r.htmlScript == null) {
            y(e.config.strings.brushNotHtmlScript + t);
            return
        }
        i.regexList.push({
            regex: r.htmlScript.code,
            func: l
        })
    }, e.Highlighter = function() {}, e.Highlighter.prototype = {
        getParam: function(e, t) {
            var n = this.params[e];
            return v(n == null ? t : n)
        },
        create: function(e) {
            return document.createElement(e)
        },
        findMatches: function(e, t) {
            var n = [];
            if (e != null)
                for (var r = 0; r < e.length; r++) typeof e[r] == "object" && (n = n.concat(M(t, e[r])));
            return this.removeNestedMatches(n.sort(O))
        },
        removeNestedMatches: function(e) {
            for (var t = 0; t < e.length; t++) {
                if (e[t] === null) continue;
                var n = e[t],
                    r = n.index + n.length;
                for (var i = t + 1; i < e.length && e[t] !== null; i++) {
                    var s = e[i];
                    if (s === null) continue;
                    if (s.index > r) break;
                    s.index == n.index && s.length > n.length ? e[t] = null : s.index >= n.index && s.index < r && (e[i] = null)
                }
            }
            return e
        },
        figureOutLineNumbers: function(e) {
            var t = [],
                n = parseInt(this.getParam("first-line"));
            return w(e, function(e, r) {
                t.push(r + n)
            }), t
        },
        isLineHighlighted: function(e) {
            var t = this.getParam("highlight", []);
            return typeof t != "object" && t.push == null && (t = [t]), h(t, e.toString()) != -1
        },
        getLineHtml: function(e, t, n) {
            var r = ["line", "number" + t, "index" + e, "alt" + (t % 2 == 0 ? 1 : 2).toString()];
            return this.isLineHighlighted(t) && r.push("highlighted"), t == 0 && r.push("break"), '<div class="' + r.join(" ") + '">' + n + "</div>"
        },
        getLineNumbersHtml: function(t, n) {
            var r = "",
                i = s(t).length,
                o = parseInt(this.getParam("first-line")),
                u = this.getParam("pad-line-numbers");
            u == 1 ? u = (o + i - 1).toString().length : isNaN(u) == 1 && (u = 0);
            for (var a = 0; a < i; a++) {
                var f = n ? n[a] : o + a,
                    t = f == 0 ? e.config.space : T(f, u);
                r += this.getLineHtml(a, f, t)
            }
            return r
        },
        getCodeLinesHtml: function(t, n) {
            t = L(t);
            var r = s(t),
                i = this.getParam("pad-line-numbers"),
                o = parseInt(this.getParam("first-line")),
                t = "",
                u = this.getParam("brush");
            for (var a = 0; a < r.length; a++) {
                var f = r[a],
                    l = /^(&nbsp;|\s)+/.exec(f),
                    c = null,
                    h = n ? n[a] : o + a;
                l != null && (c = l[0].toString(), f = f.substr(c.length), c = c.replace(" ", e.config.space)), f = L(f), f.length == 0 && (f = e.config.space), t += this.getLineHtml(a, h, (c != null ? '<code class="' + u + ' spaces">' + c + "</code>" : "") + f)
            }
            return t
        },
        getTitleHtml: function(e) {
            return e ? "<caption>" + e + "</caption>" : ""
        },
        getMatchesHtml: function(e, t) {
            function s(e) {
                var t = e ? e.brushName || i : i;
                return t ? t + " " : ""
            }
            var n = 0,
                r = "",
                i = this.getParam("brush", "");
            for (var o = 0; o < t.length; o++) {
                var u = t[o],
                    a;
                if (u === null || u.length === 0) continue;
                a = s(u), r += x(e.substr(n, u.index - n), a + "plain") + x(u.value, a + u.css), n = u.index + u.length + (u.offset || 0)
            }
            return r += x(e.substr(n), s() + "plain"), r
        },
        getHtml: function(t) {
            var n = "",
                r = ["syntaxhighlighter"],
                i, s, u;
            return this.getParam("light") == 1 && (this.params.toolbar = this.params.gutter = !1), className = "syntaxhighlighter", this.getParam("collapse") == 1 && r.push("collapsed"), r.push("sh-" + this.getParam("theme").toLowerCase()), (gutter = this.getParam("gutter")) == 0 && r.push("nogutter"), r.push(this.getParam("class-name")), r.push(this.getParam("brush")), t = E(t).replace(/\r/g, " "), i = this.getParam("tab-size"), t = this.getParam("smart-tabs") == 1 ? C(t, i) : N(t, i), t = A(t), gutter && (u = this.figureOutLineNumbers(t)), s = this.findMatches(this.regexList, t), n = this.getMatchesHtml(t, s), n = this.getCodeLinesHtml(n, u), this.getParam("auto-links") && (n = _(n)), typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.match(/MSIE/) && r.push("ie"), n = '<div id="' + o(this.id) + '" class="' + r.join(" ") + '">' + (this.getParam("toolbar") ? e.toolbar.getHtml(this) : "") + '<table border="0" cellpadding="0" cellspacing="0">' + this.getTitleHtml(this.getParam("title")) + "<tbody>" + "<tr>" + (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(t) + "</td>" : "") + '<td class="code">' + '<div class="container" title="Hint: double-click to select code">' + n + "</div>" + "</td>" + "</tr>" + "</tbody>" + "</table>" + "</div>", n
        },
        getDiv: function(t) {
            t === null && (t = ""), this.code = t;
            var n = this.create("div");
            return n.innerHTML = this.getHtml(t), this.getParam("toolbar") && g(l(n, ".toolbar"), "click", e.toolbar.handler), this.getParam("quick-code") && g(l(n, ".code"), "dblclick", H), n
        },
        init: function(t) {
            this.id = p(), f(this), this.params = d(e.defaults, t || {}), this.getParam("light") == 1 && (this.params.toolbar = this.params.gutter = !1)
        },
        getKeywords: function(e) {
            return e = e.replace(/^\s+|\s+$/g, "").replace(/\s+/g, "|"), "\\b(?:" + e + ")\\b"
        },
        forHtmlScript: function(e) {
            this.htmlScript = {
                left: {
                    regex: e.left,
                    css: "script"
                },
                right: {
                    regex: e.right,
                    css: "script"
                },
                code: new XRegExp("(?<left>" + e.left.source + ")" + "(?<code>.*?)" + "(?<right>" + e.right.source + ")", "sgi")
            }
        },
        processUrls: function(t) {
            return _(t)
        }
    }, e
}();
typeof exports != "undefined" ? exports.SyntaxHighlighter = SyntaxHighlighter : null

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/shLegacy.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
var dp = {
	SyntaxHighlighter : {}
};

dp.SyntaxHighlighter = {
	parseParams: function(
						input,
						showGutter, 
						showControls, 
						collapseAll, 
						firstLine, 
						showColumns
						)
	{
		function getValue(list, name)
		{
			var regex = new XRegExp('^' + name + '\\[(?<value>\\w+)\\]$', 'gi'),
				match = null
				;
			
			for (var i = 0; i < list.length; i++) 
				if ((match = regex.exec(list[i])) != null)
					return match.value;
			
			return null;
		};
		
		function defaultValue(value, def)
		{
			return value != null ? value : def;
		};
		
		function asString(value)
		{
			return value != null ? value.toString() : null;
		};

		var parts = input.split(':'),
			brushName = parts[0],
			options = {},
			straight = { 'true' : true }
			reverse = { 'true' : false },
			result = null,
			defaults = SyntaxHighlighter.defaults
			;
		
		for (var i in parts)
			options[parts[i]] = 'true';

		showGutter = asString(defaultValue(showGutter, defaults.gutter));
		showControls = asString(defaultValue(showControls, defaults.toolbar));
		collapseAll = asString(defaultValue(collapseAll, defaults.collapse)); 
		showColumns = asString(defaultValue(showColumns, defaults.ruler));
		firstLine = asString(defaultValue(firstLine, defaults['first-line'])); 

		return {
			brush			: brushName,
			gutter			: defaultValue(reverse[options.nogutter], showGutter),
			toolbar			: defaultValue(reverse[options.nocontrols], showControls),
			collapse		: defaultValue(straight[options.collapse], collapseAll),
			// ruler			: defaultValue(straight[options.showcolumns], showColumns),
			'first-line'	: defaultValue(getValue(parts, 'firstline'), firstLine)
		};
	},
	
	HighlightAll: function(
						name, 
						showGutter /* optional */, 
						showControls /* optional */, 
						collapseAll /* optional */, 
						firstLine /* optional */, 
						showColumns /* optional */
						)
	{
		function findValue()
		{
			var a = arguments;
			
			for (var i = 0; i < a.length; i++) 
			{
				if (a[i] === null) 
					continue;
				
				if (typeof(a[i]) == 'string' && a[i] != '') 
					return a[i] + '';
				
				if (typeof(a[i]) == 'object' && a[i].value != '') 
					return a[i].value + '';
			}
			
			return null;
		};

		function findTagsByName(list, name, tagName)
		{
			var tags = document.getElementsByTagName(tagName);
			
			for (var i = 0; i < tags.length; i++) 
				if (tags[i].getAttribute('name') == name) 
					list.push(tags[i]);
		}
		
		var elements = [],
			highlighter = null,
			registered = {},
			propertyName = 'innerHTML'
			;
		
		// for some reason IE doesn't find <pre/> by name, however it does see them just fine by tag name... 
		findTagsByName(elements, name, 'pre');
		findTagsByName(elements, name, 'textarea');

		if (elements.length === 0)
			return;
		
		for (var i = 0; i < elements.length; i++)
		{
			var element = elements[i],
				params = findValue(
					element.attributes['class'], element.className, 
					element.attributes['language'], element.language
					),
				language = ''
				;
			
			if (params === null) 
				continue;

			params = dp.SyntaxHighlighter.parseParams(
				params,
				showGutter, 
				showControls, 
				collapseAll, 
				firstLine, 
				showColumns
				);

			SyntaxHighlighter.highlight(params, element);
		}
	}
};

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter', location = 'sh/scripts/collapseSource.js' */
AJS.toInit(function($) {

    function getHighlighterId(id) {
        var prefix = 'highlighter_';
        return id.indexOf(prefix) == 0 ? id : prefix + id;
    };

    $(".codeHeader .collapse-source").click(function() {
        var $codeHeaderCollapse = $(this);
        var $codeContent = $codeHeaderCollapse.parent().parent().children('.codeContent');
        var $highlighter = $codeContent.children().children('.syntaxhighlighter').attr('id');
        var $expandControlIcon = $codeHeaderCollapse.children('.expand-control-icon');
        var $div = $(document.getElementById(getHighlighterId($highlighter)));

        if($div.hasClass('collapsed')) {
            $div.removeClass('collapsed');
            $div.addClass('expanded');
            $codeContent.addClass('show-border-top');
            $(".expand-control-text", $codeHeaderCollapse).text("Collapse source");
            $expandControlIcon.addClass('expanded');
        }
        else if ($div.hasClass('expanded')) {
            $div.removeClass('expanded');
            $div.addClass('collapsed');
            $codeContent.removeClass('show-border-top');
            $(".expand-control-text", $codeHeaderCollapse).text("Expand source");
            $expandControlIcon.removeClass('expanded');
        }
    });

});


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:code-macro-bidi', location = 'scripts/code-macro-bidi-markers.js' */
/**
 * Bidirection character markers for:
 * - View page / blog post
 * - Comments (view only)
 * - Inline comments (view only), both server and browser rendered
 * - Preview
 * - Template preview (global and space)
 * - Confluence Questions:
 *   - questions
 *   - answers
 *   - comments
 *
 * Supported blocks:
 * - Code macro
 * - Noformat macro
 * - Preformatted text (including default pasted `<pre>`)
 */
define('confluence/code-macro/bidi-markers', function () {
    const blocksToFormat = [
        {
            // Code macro panel, after it was decorated by SyntaxHighlighter
            selector: '.code.panel[data-macro-name="code"] .codeContent .syntaxhighlighter .code .line',
            decorate: decorateElement
        },
        {
            // Noformat macro is `.preformatted.panel[data-macro-name="noformat"] pre`
            // Preformatted text is `pre` with no wrapper
            selector: 'pre',
            exclude: function (block) {
                // Must not use `[data-macro-name="code"]` because Preview does NOT render that attribute
                // msMatchesSelector is for IE11 compatibility only
                return (typeof block.matches === 'function' ? block.matches : block.msMatchesSelector).call(block, 'pre.syntaxhighlighter-pre');
            },
            decorate: decorateElement
        }
    ];
    const blocksToObserve = [
        {
            // Server-rendered Code macro panel is watched for when the SyntaxHighlighter replaces it with the decorated version.
            // While it would be syntactically valid to place `<span>` inside a `<pre>` before syntax highlighting, the SyntaxHighlighter library would turn the markers into a visible plain text.
            // Must not use `[data-macro-name="code"]` selector because Preview does NOT render that attribute
            // @see com.atlassian.confluence.ext.code.NewCodeMacro.getPanelCSSClass
            // @see com.atlassian.confluence.ext.code.NewCodeMacro.getPanelContentCSSClass
            selector: '.code.panel .codeContent',
            exclude: function (block) {
                // Selector for the server-rendered content of the code macro.
                // @see com.atlassian.confluence.ext.code.render.ContentFormatter.createRenderContent
                return block.querySelectorAll('pre.syntaxhighlighter-pre').length === 0;
            },
            moOptions: { childList: true },
            decorate: function (element) {
                // Selector for the content of the code macro after it was run through a frontend-side syntax highlighter.
                // @see shCore.js:getHtml()
                // @see shCore.js:getLineHtml()
                const codeLines = element.querySelectorAll('.syntaxhighlighter .code .line, .preformattedContent pre');
                Array.prototype.forEach.call(codeLines, decorateElement);
            },
            removeAfter: true
        },
        {
            selector: [
                '#content', // Inline comments and dynamically rendered page comments (e.g. noformat macro)
                '.cq-viewquestion' // Confluence questions - dynamically rendered comments for questions/answers
            ].join(','),
            moOptions: { childList: true, subtree: true },
            decorate: function (block) {
                if (!isElementNode(block)) {
                    return;
                }
                const contentRules = blocksToFormat.concat([
                    {
                        // Server-rendered inline comments because they're not handled by SyntaxHighlighter
                        selector: '.ic-content .code.panel[data-macro-name="code"] pre',
                        decorate: decorateElement
                    }
                ]);
                decorateElements(block, contentRules);
            }
        }
    ];

    const bidiRegex = /([\u202A-\u202E\u2066-\u2069])/g;

    const bidiTooltip = "Bidirectional characters change the order that text is rendered. This could be used to obscure malicious code.";

    /**
     * Tokenises HTML string by BiDi characters.
     * @param {string} input HTML string
     * @returns {Array}
     */
    function tokeniseByBidiCharacters(input) {
        return input.split(bidiRegex);
    }

    /**
     * @param {string} input HTML string
     * @returns {string} HTML string
     */
    function wrapCharacterInMarker(input) {
        if (!containsBidi(input)) {
            return input;
        }
        const hexCode = input.charCodeAt(0).toString(16).toUpperCase();
        const attrs = [];
        attrs.push('class="bidi-marker"');
        attrs.push('data-charcode="<U+' + hexCode + '>"');
        attrs.push('title="' + bidiTooltip + '"');
        attrs.push('aria-label="' + bidiTooltip + '"');
        return '<span ' + attrs.join(' ') + '>' + input + '</span>';
    }

    /**
     * @param {string} input
     * @returns {string}
     */
    function addMarkers(input) {
        return tokeniseByBidiCharacters(input).map(wrapCharacterInMarker).join('');
    }

    /**
     * Replace potentially malicious content to make it HTML safe.
     * Follows https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
     * @param {string} input
     * @returns {string}
     */
    function sanitizeHtml(input) {
        const entities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };
        const re = new RegExp('[' + Object.keys(entities).join('') + ']', 'g');
        return input.replace(re, function (match) {
            return entities[match];
        });
    }

    /**
     * @param {Node} element
     */
    function decorateTextNodes(element) {
        // Only decorate textNodes to prevent replacing Elements. Inline-comments would lose reference.
        const textNodes = Array.prototype.slice.call(element.childNodes);
        textNodes
            .filter(isTextNode)
            .filter(function (textNode) {
                return containsBidi(textNode.textContent);
            })
            .forEach(function (textNode) {
                const htmlNode = document.createElement('span');
                htmlNode.dataset.bidiMarker = true;
                htmlNode.innerHTML = addMarkers(sanitizeHtml(textNode.textContent));
                element.replaceChild(htmlNode, textNode);
            });
    }

    /**
     * @param {HTMLElement} element
     */
    function decorateElement(element) {
        // Prevent double decoration
        if (element.dataset.bidiMarker) {
            return;
        }
        element.dataset.bidiMarker = true;
        try {
            // Get children recursively to only iterate over them once, make a copy of the live collection
            const tags = Array.prototype.slice.call(element.getElementsByTagName('*'));
            tags.forEach(decorateTextNodes);
            // Process direct childNodes of the element
            decorateTextNodes(element);
        } catch (e) {
            console.error('Failed to highlight birectional control characters in ', element);
        }
    }

    /**
     *
     * @param {Node} node
     * @returns {boolean}
     */
    function isElementNode(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    }

    /**
     *
     * @param {Node} node
     * @returns {boolean}
     */
    function isTextNode(node) {
        return node.nodeType === Node.TEXT_NODE;
    }

    /**
     *
     * @param {string} input
     * @returns {boolean}
     */
    function containsBidi(input) {
        return bidiRegex.test(input);
    }

    /**
     *
     * @param {Node} parentElement
     * @param {Array} rules
     */
    function decorateElements(parentElement, rules) {
        Array.prototype.forEach.call(rules, function (rule) {
            const blocks = parentElement.querySelectorAll(rule.selector);
            Array.prototype.forEach.call(blocks, function (block) {
                if (rule.exclude && rule.exclude(block)) {
                    return;
                }
                rule.decorate(block);
            });
        });
    }

    /**
     *
     * @param {Node} parentElement
     * @param {Array} rules
     */
    function observeElements(parentElement, rules) {
        Array.prototype.forEach.call(rules, function (rule) {
            const blocks = parentElement.querySelectorAll(rule.selector);
            Array.prototype.forEach.call(blocks, function (block) {
                if (rule.exclude && rule.exclude(block)) {
                    return;
                }

                const observer = new MutationObserver(function (mutationsList) {
                    mutationsList.forEach(function (mutation) {
                        Array.prototype.forEach.call(mutation.addedNodes, rule.decorate);
                    });
                    if (rule.removeAfter) {
                        observer.disconnect();
                    }
                });
                observer.observe(block, rule.moOptions);
            });
        });
    }

    return function init() {
        decorateElements(document, blocksToFormat);
        observeElements(document, blocksToObserve);
    };
});

require('confluence/module-exporter').safeRequire('confluence/code-macro/bidi-markers', function (BidiMarkers) {
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', BidiMarkers);
    } else {
        BidiMarkers();
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushAppleScript.js' */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// AppleScript brush by David Chambers
		// http://davidchambersdesign.com/
		var keywords   = 'after before beginning continue copy each end every from return get global in local named of set some that the then times to where whose with without';
		var ordinals   = 'first second third fourth fifth sixth seventh eighth ninth tenth last front back middle';
		var specials   = 'activate add alias AppleScript ask attachment boolean class constant delete duplicate empty exists false id integer list make message modal modified new no paragraph pi properties quit real record remove rest result reveal reverse run running save string true word yes';

		this.regexList = [

			{ regex: /(--|#).*$/gm,
			    css: 'comments' },

			{ regex: /\(\*(?:[\s\S]*?\(\*[\s\S]*?\*\))*[\s\S]*?\*\)/gm, // support nested comments
			    css: 'comments' },

			{ regex: /"[\s\S]*?"/gm,
			    css: 'string' },
			    
			{ regex: /(?:,|:|\u00AC\u00A8|'s\b|\(|\)|\{|\}|\u00AC\u00B4|\b\w*\u00AC\u00AA)/g,
				css: 'color1' },
			    
			{ regex: /(-)?(\d)+(\.(\d)?)?(E\+(\d)+)?/g, // numbers
			    css: 'color1' },

			{ regex: /(?:&(amp;|gt;|lt;)?|=|\u00D4\u00F8\u2126 |>|<|\u201A\u00E2\u2022|>=|\u201A\u00E2\u00A7|<=|\*|\+|-|\/|\u221A\u2211|\^)/g,
				css: 'color2' },
			 
			{ regex: /\b(?:and|as|div|mod|not|or|return(?!\s&)(ing)?|equals|(is(n't| not)? )?equal( to)?|does(n't| not) equal|(is(n't| not)? )?(greater|less) than( or equal( to)?)?|(comes|does(n't| not) come) (after|before)|is(n't| not)?( in)? (back|front) of|is(n't| not)? behind|is(n't| not)?( (in|contained by))?|does(n't| not) contain|contain(s)?|(start|begin|end)(s)? with|((but|end) )?(consider|ignor)ing|prop(erty)?|(a )?ref(erence)?( to)?|repeat (until|while|with)|((end|exit) )?repeat|((else|end) )?if|else|(end )?(script|tell|try)|(on )?error|(put )?into|(of )?(it|me)|its|my|with (timeout( of)?|transaction)|end (timeout|transaction))\b/g,
			    css: 'keyword' },

			{ regex: /\b\d+(st|nd|rd|th)\b/g, // ordinals
			    css: 'keyword' },

			{ regex: /\b(?:about|above|against|around|at|below|beneath|beside|between|by|(apart|aside) from|(instead|out) of|into|on(to)?|over|since|thr(ough|u)|under)\b/g,
			    css: 'color3' },

			{ regex: /\b(?:adding folder items to|after receiving|choose( ((remote )?application|color|folder|from list|URL))?|clipboard info|set the clipboard to|(the )?clipboard|entire contents|display(ing| (alert|dialog|mode))?|document( (edited|file|nib name))?|file( (name|type))?|(info )?for|giving up after|(name )?extension|quoted form|return(ed)?|second(?! item)(s)?|list (disks|folder)|text item(s| delimiters)?|(Unicode )?text|(disk )?item(s)?|((current|list) )?view|((container|key) )?window|with (data|icon( (caution|note|stop))?|parameter(s)?|prompt|properties|seed|title)|case|diacriticals|hyphens|numeric strings|punctuation|white space|folder creation|application(s( folder)?| (processes|scripts position|support))?|((desktop )?(pictures )?|(documents|downloads|favorites|home|keychain|library|movies|music|public|scripts|sites|system|users|utilities|workflows) )folder|desktop|Folder Action scripts|font(s| panel)?|help|internet plugins|modem scripts|(system )?preferences|printer descriptions|scripting (additions|components)|shared (documents|libraries)|startup (disk|items)|temporary items|trash|on server|in AppleTalk zone|((as|long|short) )?user name|user (ID|locale)|(with )?password|in (bundle( with identifier)?|directory)|(close|open for) access|read|write( permission)?|(g|s)et eof|using( delimiters)?|starting at|default (answer|button|color|country code|entr(y|ies)|identifiers|items|name|location|script editor)|hidden( answer)?|open(ed| (location|untitled))?|error (handling|reporting)|(do( shell)?|load|run|store) script|administrator privileges|altering line endings|get volume settings|(alert|boot|input|mount|output|set) volume|output muted|(fax|random )?number|round(ing)?|up|down|toward zero|to nearest|as taught in school|system (attribute|info)|((AppleScript( Studio)?|system) )?version|(home )?directory|(IPv4|primary Ethernet) address|CPU (type|speed)|physical memory|time (stamp|to GMT)|replacing|ASCII (character|number)|localized string|from table|offset|summarize|beep|delay|say|(empty|multiple) selections allowed|(of|preferred) type|invisibles|showing( package contents)?|editable URL|(File|FTP|News|Media|Web) [Ss]ervers|Telnet hosts|Directory services|Remote applications|waiting until completion|saving( (in|to))?|path (for|to( (((current|frontmost) )?application|resource))?)|POSIX (file|path)|(background|RGB) color|(OK|cancel) button name|cancel button|button(s)?|cubic ((centi)?met(re|er)s|yards|feet|inches)|square ((kilo)?met(re|er)s|miles|yards|feet)|(centi|kilo)?met(re|er)s|miles|yards|feet|inches|lit(re|er)s|gallons|quarts|(kilo)?grams|ounces|pounds|degrees (Celsius|Fahrenheit|Kelvin)|print( (dialog|settings))?|clos(e(able)?|ing)|(de)?miniaturized|miniaturizable|zoom(ed|able)|attribute run|action (method|property|title)|phone|email|((start|end)ing|home) page|((birth|creation|current|custom|modification) )?date|((((phonetic )?(first|last|middle))|computer|host|maiden|related) |nick)?name|aim|icq|jabber|msn|yahoo|address(es)?|save addressbook|should enable action|city|country( code)?|formatte(r|d address)|(palette )?label|state|street|zip|AIM [Hh]andle(s)?|my card|select(ion| all)?|unsaved|(alpha )?value|entr(y|ies)|group|(ICQ|Jabber|MSN) handle|person|people|company|department|icon image|job title|note|organization|suffix|vcard|url|copies|collating|pages (across|down)|request print time|target( printer)?|((GUI Scripting|Script menu) )?enabled|show Computer scripts|(de)?activated|awake from nib|became (key|main)|call method|of (class|object)|center|clicked toolbar item|closed|for document|exposed|(can )?hide|idle|keyboard (down|up)|event( (number|type))?|launch(ed)?|load (image|movie|nib|sound)|owner|log|mouse (down|dragged|entered|exited|moved|up)|move|column|localization|resource|script|register|drag (info|types)|resigned (active|key|main)|resiz(e(d)?|able)|right mouse (down|dragged|up)|scroll wheel|(at )?index|should (close|open( untitled)?|quit( after last window closed)?|zoom)|((proposed|screen) )?bounds|show(n)?|behind|in front of|size (mode|to fit)|update(d| toolbar item)?|was (hidden|miniaturized)|will (become active|close|finish launching|hide|miniaturize|move|open|quit|(resign )?active|((maximum|minimum|proposed) )?size|show|zoom)|bundle|data source|movie|pasteboard|sound|tool(bar| tip)|(color|open|save) panel|coordinate system|frontmost|main( (bundle|menu|window))?|((services|(excluded from )?windows) )?menu|((executable|frameworks|resource|scripts|shared (frameworks|support)) )?path|(selected item )?identifier|data|content(s| view)?|character(s)?|click count|(command|control|option|shift) key down|context|delta (x|y|z)|key( code)?|location|pressure|unmodified characters|types|(first )?responder|playing|(allowed|selectable) identifiers|allows customization|(auto saves )?configuration|visible|image( name)?|menu form representation|tag|user(-| )defaults|associated file name|(auto|needs) display|current field editor|floating|has (resize indicator|shadow)|hides when deactivated|level|minimized (image|title)|opaque|position|release when closed|sheet|title(d)?)\b/g,
			    css: 'color3' },

			{ regex: new RegExp(this.getKeywords(specials), 'gm'), css: 'color3' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
			{ regex: new RegExp(this.getKeywords(ordinals), 'gm'), css: 'keyword' }
		];
	};

	Brush.prototype = new SyntaxHighlighter.Highlighter();
	Brush.aliases = ['applescript'];

	SyntaxHighlighter.brushes.AppleScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushAS3.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Created by Peter Atoria @ http://iAtoria.com
	
		var inits 	 =  'class interface function package';
	
		var keywords =	'-Infinity ...rest Array as AS3 Boolean break case catch const continue Date decodeURI ' + 
						'decodeURIComponent default delete do dynamic each else encodeURI encodeURIComponent escape ' + 
						'extends false final finally flash_proxy for get if implements import in include Infinity ' + 
						'instanceof int internal is isFinite isNaN isXMLName label namespace NaN native new null ' + 
						'Null Number Object object_proxy override parseFloat parseInt private protected public ' + 
						'return set static String super switch this throw true try typeof uint undefined unescape ' + 
						'use void while with'
						;
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(inits), 'gm'),			css: 'color3' },		// initializations
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp('var', 'gm'),							css: 'variable' },		// variable
			{ regex: new RegExp('trace', 'gm'),							css: 'color1' }			// trace
			];
	
		this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['actionscript3', 'as3','actionscript'];

	SyntaxHighlighter.brushes.AS3 = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushBash.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'if fi then elif else for do done until while break continue case function return in eq ne ge le';
		var commands =  'alias apropos awk basename bash bc bg builtin bzip2 cal cat cd cfdisk chgrp chmod chown chroot' +
						'cksum clear cmp comm command cp cron crontab csplit cut date dc dd ddrescue declare df ' +
						'diff diff3 dig dir dircolors dirname dirs du echo egrep eject enable env ethtool eval ' +
						'exec exit expand export expr false fdformat fdisk fg fgrep file find fmt fold format ' +
						'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs yes'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' }		// commands
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushColdFusion.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Jen
		// http://www.jensbits.com/2009/05/14/coldfusion-brush-for-syntaxhighlighter-plus
	
		var funcs	=	'Abs ACos AddSOAPRequestHeader AddSOAPResponseHeader AjaxLink AjaxOnLoad ArrayAppend ArrayAvg ArrayClear ArrayDeleteAt ' + 
						'ArrayInsertAt ArrayIsDefined ArrayIsEmpty ArrayLen ArrayMax ArrayMin ArraySet ArraySort ArraySum ArraySwap ArrayToList ' + 
						'Asc ASin Atn BinaryDecode BinaryEncode BitAnd BitMaskClear BitMaskRead BitMaskSet BitNot BitOr BitSHLN BitSHRN BitXor ' + 
						'Ceiling CharsetDecode CharsetEncode Chr CJustify Compare CompareNoCase Cos CreateDate CreateDateTime CreateObject ' + 
						'CreateODBCDate CreateODBCDateTime CreateODBCTime CreateTime CreateTimeSpan CreateUUID DateAdd DateCompare DateConvert ' + 
						'DateDiff DateFormat DatePart Day DayOfWeek DayOfWeekAsString DayOfYear DaysInMonth DaysInYear DE DecimalFormat DecrementValue ' + 
						'Decrypt DecryptBinary DeleteClientVariable DeserializeJSON DirectoryExists DollarFormat DotNetToCFType Duplicate Encrypt ' + 
						'EncryptBinary Evaluate Exp ExpandPath FileClose FileCopy FileDelete FileExists FileIsEOF FileMove FileOpen FileRead ' + 
						'FileReadBinary FileReadLine FileSetAccessMode FileSetAttribute FileSetLastModified FileWrite Find FindNoCase FindOneOf ' + 
						'FirstDayOfMonth Fix FormatBaseN GenerateSecretKey GetAuthUser GetBaseTagData GetBaseTagList GetBaseTemplatePath ' + 
						'GetClientVariablesList GetComponentMetaData GetContextRoot GetCurrentTemplatePath GetDirectoryFromPath GetEncoding ' + 
						'GetException GetFileFromPath GetFileInfo GetFunctionList GetGatewayHelper GetHttpRequestData GetHttpTimeString ' + 
						'GetK2ServerDocCount GetK2ServerDocCountLimit GetLocale GetLocaleDisplayName GetLocalHostIP GetMetaData GetMetricData ' + 
						'GetPageContext GetPrinterInfo GetProfileSections GetProfileString GetReadableImageFormats GetSOAPRequest GetSOAPRequestHeader ' + 
						'GetSOAPResponse GetSOAPResponseHeader GetTempDirectory GetTempFile GetTemplatePath GetTickCount GetTimeZoneInfo GetToken ' + 
						'GetUserRoles GetWriteableImageFormats Hash Hour HTMLCodeFormat HTMLEditFormat IIf ImageAddBorder ImageBlur ImageClearRect ' + 
						'ImageCopy ImageCrop ImageDrawArc ImageDrawBeveledRect ImageDrawCubicCurve ImageDrawLine ImageDrawLines ImageDrawOval ' + 
						'ImageDrawPoint ImageDrawQuadraticCurve ImageDrawRect ImageDrawRoundRect ImageDrawText ImageFlip ImageGetBlob ImageGetBufferedImage ' + 
						'ImageGetEXIFTag ImageGetHeight ImageGetIPTCTag ImageGetWidth ImageGrayscale ImageInfo ImageNegative ImageNew ImageOverlay ImagePaste ' + 
						'ImageRead ImageReadBase64 ImageResize ImageRotate ImageRotateDrawingAxis ImageScaleToFit ImageSetAntialiasing ImageSetBackgroundColor ' + 
						'ImageSetDrawingColor ImageSetDrawingStroke ImageSetDrawingTransparency ImageSharpen ImageShear ImageShearDrawingAxis ImageTranslate ' + 
						'ImageTranslateDrawingAxis ImageWrite ImageWriteBase64 ImageXORDrawingMode IncrementValue InputBaseN Insert Int IsArray IsBinary ' + 
						'IsBoolean IsCustomFunction IsDate IsDDX IsDebugMode IsDefined IsImage IsImageFile IsInstanceOf IsJSON IsLeapYear IsLocalHost ' + 
						'IsNumeric IsNumericDate IsObject IsPDFFile IsPDFObject IsQuery IsSimpleValue IsSOAPRequest IsStruct IsUserInAnyRole IsUserInRole ' + 
						'IsUserLoggedIn IsValid IsWDDX IsXML IsXmlAttribute IsXmlDoc IsXmlElem IsXmlNode IsXmlRoot JavaCast JSStringFormat LCase Left Len ' + 
						'ListAppend ListChangeDelims ListContains ListContainsNoCase ListDeleteAt ListFind ListFindNoCase ListFirst ListGetAt ListInsertAt ' + 
						'ListLast ListLen ListPrepend ListQualify ListRest ListSetAt ListSort ListToArray ListValueCount ListValueCountNoCase LJustify Log ' + 
						'Log10 LSCurrencyFormat LSDateFormat LSEuroCurrencyFormat LSIsCurrency LSIsDate LSIsNumeric LSNumberFormat LSParseCurrency LSParseDateTime ' + 
						'LSParseEuroCurrency LSParseNumber LSTimeFormat LTrim Max Mid Min Minute Month MonthAsString Now NumberFormat ParagraphFormat ParseDateTime ' + 
						'Pi PrecisionEvaluate PreserveSingleQuotes Quarter QueryAddColumn QueryAddRow QueryConvertForGrid QueryNew QuerySetCell QuotedValueList Rand ' + 
						'Randomize RandRange REFind REFindNoCase ReleaseComObject REMatch REMatchNoCase RemoveChars RepeatString Replace ReplaceList ReplaceNoCase ' + 
						'REReplace REReplaceNoCase Reverse Right RJustify Round RTrim Second SendGatewayMessage SerializeJSON SetEncoding SetLocale SetProfileString ' + 
						'SetVariable Sgn Sin Sleep SpanExcluding SpanIncluding Sqr StripCR StructAppend StructClear StructCopy StructCount StructDelete StructFind ' + 
						'StructFindKey StructFindValue StructGet StructInsert StructIsEmpty StructKeyArray StructKeyExists StructKeyList StructKeyList StructNew ' + 
						'StructSort StructUpdate Tan TimeFormat ToBase64 ToBinary ToScript ToString Trim UCase URLDecode URLEncodedFormat URLSessionFormat Val ' + 
						'ValueList VerifyClient Week Wrap Wrap WriteOutput XmlChildPos XmlElemNew XmlFormat XmlGetNodeType XmlNew XmlParse XmlSearch XmlTransform ' + 
						'XmlValidate Year YesNoFormat';

		var keywords =	'cfabort cfajaximport cfajaxproxy cfapplet cfapplication cfargument cfassociate cfbreak cfcache cfcalendar ' + 
						'cfcase cfcatch cfchart cfchartdata cfchartseries cfcol cfcollection cfcomponent cfcontent cfcookie cfdbinfo ' + 
						'cfdefaultcase cfdirectory cfdiv cfdocument cfdocumentitem cfdocumentsection cfdump cfelse cfelseif cferror ' + 
						'cfexchangecalendar cfexchangeconnection cfexchangecontact cfexchangefilter cfexchangemail cfexchangetask ' + 
						'cfexecute cfexit cffeed cffile cfflush cfform cfformgroup cfformitem cfftp cffunction cfgrid cfgridcolumn ' + 
						'cfgridrow cfgridupdate cfheader cfhtmlhead cfhttp cfhttpparam cfif cfimage cfimport cfinclude cfindex ' + 
						'cfinput cfinsert cfinterface cfinvoke cfinvokeargument cflayout cflayoutarea cfldap cflocation cflock cflog ' + 
						'cflogin cfloginuser cflogout cfloop cfmail cfmailparam cfmailpart cfmenu cfmenuitem cfmodule cfNTauthenticate ' + 
						'cfobject cfobjectcache cfoutput cfparam cfpdf cfpdfform cfpdfformparam cfpdfparam cfpdfsubform cfpod cfpop ' + 
						'cfpresentation cfpresentationslide cfpresenter cfprint cfprocessingdirective cfprocparam cfprocresult ' + 
						'cfproperty cfquery cfqueryparam cfregistry cfreport cfreportparam cfrethrow cfreturn cfsavecontent cfschedule ' + 
						'cfscript cfsearch cfselect cfset cfsetting cfsilent cfslider cfsprydataset cfstoredproc cfswitch cftable ' + 
						'cftextarea cfthread cfthrow cftimer cftooltip cftrace cftransaction cftree cftreeitem cftry cfupdate cfwddx ' + 
						'cfwindow cfxml cfzip cfzipparam';

		var operators =	'all and any between cross in join like not null or outer some';

		this.regexList = [
			{ regex: new RegExp('--(.*)$', 'gm'),						css: 'comments' },  // one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.xmlComments,			css: 'comments' },    // single quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },    // double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },    // single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' }, // functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),	css: 'color1' },    // operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }    // keyword
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['coldfusion','cf'];
	
	SyntaxHighlighter.brushes.ColdFusion = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCpp.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Copyright 2006 Shin, YoungJin
	
		var datatypes =	'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
						'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
						'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
						'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
						'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
						'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
						'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
						'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
						'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
						'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
						'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
						'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
						'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
						'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
						'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
						'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
						'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
						'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
						'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
						'__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
						'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
						'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
						'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
						'va_list wchar_t wctrans_t wctype_t wint_t signed';

		var keywords =	'break case catch class const __finally __exception __try ' +
						'const_cast continue private public protected __declspec ' +
						'default delete deprecated dllexport dllimport do dynamic_cast ' +
						'else enum explicit extern if for friend goto inline ' +
						'mutable naked namespace new noinline noreturn nothrow ' +
						'register reinterpret_cast return selectany ' +
						'sizeof static static_cast struct switch template this ' +
						'thread throw true false try typedef typeid typename union ' +
						'using uuid virtual void volatile whcar_t while';
					
		var functions =	'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
						'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
						'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
						'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
						'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
						'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
						'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
						'fwrite getc getchar gets perror printf putc putchar puts remove ' +
						'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
						'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
						'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
						'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
						'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
						'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
						'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
						'clock ctime difftime gmtime localtime mktime strftime time';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^ *#.*/gm,										css: 'preprocessor' },
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cpp', 'c'];

	SyntaxHighlighter.brushes.Cpp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCSharp.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abstract as base bool break byte case catch char checked class const ' +
						'continue decimal default delegate do double else enum event explicit ' +
						'extern false finally fixed float for foreach get goto if implicit in int ' +
						'interface internal is lock long namespace new null object operator out ' +
						'override params private protected public readonly ref return sbyte sealed set ' +
						'short sizeof stackalloc static string struct switch this throw true try ' +
						'typeof uint ulong unchecked unsafe ushort using virtual void while';

		function fixComments(match, regexInfo)
		{
			var css = (match[0].indexOf("///") == 0)
				? 'color1'
				: 'comments'
				;
			
			return [new SyntaxHighlighter.Match(match[0], match.index, css)];
		}

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	func : fixComments },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: /@"(?:[^"]|"")*"/g,								css: 'string' },			// @-quoted strings
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^\s*#.*/gm,										css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },			// c# keyword
			{ regex: /\bpartial(?=\s+(?:class|interface|struct)\b)/g,	css: 'keyword' },			// contextual keyword: 'partial'
			{ regex: /\byield(?=\s+(?:return|break)\b)/g,				css: 'keyword' }			// contextual keyword: 'yield'
			];
		
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['c#', 'c-sharp', 'csharp'];

	SyntaxHighlighter.brushes.CSharp = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushCss.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';

		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';

		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },	// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },		// html colors
			{ regex: /(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,				css: 'value' },		// sizes
			{ regex: /!important/g,										css: 'color3' },	// !important
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },	// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },		// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }		// fonts
			];

		this.forHtmlScript({ 
			left: /(&lt;|<)\s*style.*?(&gt;|>)/gi, 
			right: /(&lt;|<)\/\s*style\s*(&gt;|>)/gi 
			});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['css'];

	SyntaxHighlighter.brushes.CSS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushDelphi.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abs addr and ansichar ansistring array as asm begin boolean byte cardinal ' +
						'case char class comp const constructor currency destructor div do double ' +
						'downto else end except exports extended false file finalization finally ' +
						'for function goto if implementation in inherited int64 initialization ' +
						'integer interface is label library longint longword mod nil not object ' +
						'of on or packed pansichar pansistring pchar pcurrency pdatetime pextended ' +
						'pint64 pointer private procedure program property pshortstring pstring ' +
						'pvariant pwidechar pwidestring protected public published raise real real48 ' +
						'record repeat set shl shortint shortstring shr single smallint string then ' +
						'threadvar to true try type unit until uses val var varirnt while widechar ' +
						'widestring with word write writeln xor';

		this.regexList = [
			{ regex: /\(\*[\s\S]*?\*\)/gm,								css: 'comments' },  	// multiline comments (* *)
			{ regex: /{(?!\$)[\s\S]*?}/gm,								css: 'comments' },  	// multiline comments { }
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },  	// one line
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\{\$[a-zA-Z]+ .+\}/g,								css: 'color1' },		// compiler Directives and Region tags
			{ regex: /\b[\d\.]+\b/g,									css: 'value' },			// numbers 12345
			{ regex: /\$[a-zA-Z0-9]+\b/g,								css: 'value' },			// numbers $F5D3
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'keyword' }		// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['delphi', 'pascal', 'pas'];

	SyntaxHighlighter.brushes.Delphi = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushDiff.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		this.regexList = [
			{ regex: /^\+\+\+.*$/gm,		css: 'color2' },
			{ regex: /^\-\-\-.*$/gm,		css: 'color2' },
			{ regex: /^\s.*$/gm,			css: 'color1' },
			{ regex: /^@@.*@@$/gm,			css: 'variable' },
			{ regex: /^\+[^\+]{1}.*$/gm,	css: 'string' },
			{ regex: /^\-[^\-]{1}.*$/gm,	css: 'comments' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes.Diff = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushErlang.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Jean-Lou Dupont
		// http://jldupont.blogspot.com/2009/06/erlang-syntax-highlighter.html  

		// According to: http://erlang.org/doc/reference_manual/introduction.html#1.5
		var keywords = 'after and andalso band begin bnot bor bsl bsr bxor '+
			'case catch cond div end fun if let not of or orelse '+
			'query receive rem try when xor'+
			// additional
			' module export import define';

		this.regexList = [
			{ regex: new RegExp("[A-Z][A-Za-z0-9_]+", 'g'), 			css: 'constants' },
			{ regex: new RegExp("\\%.+", 'gm'), 						css: 'comments' },
			{ regex: new RegExp("\\?[A-Za-z0-9_]+", 'g'), 				css: 'preprocessor' },
			{ regex: new RegExp("[a-z0-9_]+:[a-z0-9_]+", 'g'), 			css: 'functions' },
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
			{ regex: new RegExp(this.getKeywords(keywords),	'gm'),		css: 'keyword' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['erl', 'erlang'];

	SyntaxHighlighter.brushes.Erland = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushGroovy.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Andres Almiray
		// http://jroller.com/aalmiray/entry/nice_source_code_syntax_highlighter

		var keywords =	'as assert break case catch class continue def default do else extends finally ' +
						'if in implements import instanceof interface new package property return switch ' +
						'throw throws try while public protected private static';
		var types    =  'void boolean byte char short int long float double';
		var constants = 'null';
		var methods   = 'allProperties count get size '+
						'collect each eachProperty eachPropertyName eachWithIndex find findAll ' +
						'findIndexOf grep inject max min reverseEach sort ' +
						'asImmutable asSynchronized flatten intersect join pop reverse subMap toList ' +
						'padRight padLeft contains eachMatch toCharacter toLong toUrl tokenize ' +
						'eachFile eachFileRecurse eachB yte eachLine readBytes readLine getText ' +
						'splitEachLine withReader append encodeBase64 decodeBase64 filterLine ' +
						'transformChar transformLine withOutputStream withPrintWriter withStream ' +
						'withStreams withWriter withWriterAppend write writeLine '+
						'dump inspect invokeMethod print println step times upto use waitForOrKill '+
						'getText';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,				css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,					css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,					css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,					css: 'string' },		// strings
			{ regex: /""".*"""/g,													css: 'string' },		// GStrings
			{ regex: new RegExp('\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b', 'gi'),	css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),					css: 'keyword' },		// goovy keyword
			{ regex: new RegExp(this.getKeywords(types), 'gm'),						css: 'color1' },		// goovy/java type
			{ regex: new RegExp(this.getKeywords(constants), 'gm'),					css: 'constants' },		// constants
			{ regex: new RegExp(this.getKeywords(methods), 'gm'),					css: 'functions' }		// methods
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['groovy'];

	SyntaxHighlighter.brushes.Groovy = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJava.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'abstract assert boolean break byte case catch char class const ' +
						'continue default do double else enum extends ' +
						'false final finally float for goto if implements import ' +
						'instanceof int interface long native new null ' +
						'package private protected public return ' +
						'short static strictfp super switch synchronized this throw throws true ' +
						'transient try void volatile while';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: /\/\*([^\*][\s\S]*?)?\*\//gm,						css: 'comments' },	 	// multiline comments
			{ regex: /\/\*(?!\*\/)\*[\s\S]*?\*\//gm,					css: 'preprocessor' },	// documentation comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: /(?!\@interface\b)\@[\$\w]+\b/g,					css: 'color1' },		// annotation @anno
			{ regex: /\@interface\b/g,									css: 'color2' },		// @interface keyword
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }		// java keyword
			];

		this.forHtmlScript({
			left	: /(&lt;|<)%[@!=]?/g, 
			right	: /%(&gt;|>)/g 
		});
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['java'];

	SyntaxHighlighter.brushes.Java = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJavaFX.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Patrick Webster
		// http://patrickwebster.blogspot.com/2009/04/javafx-brush-for-syntaxhighlighter.html
		var datatypes =	'Boolean Byte Character Double Duration '
						+ 'Float Integer Long Number Short String Void'
						;

		var keywords = 'abstract after and as assert at before bind bound break catch class '
						+ 'continue def delete else exclusive extends false finally first for from '
						+ 'function if import in indexof init insert instanceof into inverse last '
						+ 'lazy mixin mod nativearray new not null on or override package postinit '
						+ 'protected public public-init public-read replace return reverse sizeof '
						+ 'step super then this throw true try tween typeof var where while with '
						+ 'attribute let private readonly static trigger'
						;

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
			{ regex: /(-?\.?)(\b(\d*\.?\d+|\d+\.?\d*)(e[+-]?\d+)?|0x[a-f\d]+)\b\.?/gi, css: 'color2' },	// numbers
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'variable' },	// datatypes
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }
		];
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['jfx', 'javafx'];

	SyntaxHighlighter.brushes.JavaFX = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushJScript.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'break case catch continue ' +
						'default delete do else false  ' +
						'for function if in instanceof ' +
						'new null return super switch ' +
						'this throw true try typeof var while with'
						;

		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineDoubleQuotedString,					css: 'string' },			// double quoted strings
			{ regex: r.multiLineSingleQuotedString,					css: 'string' },			// single quoted strings
			{ regex: r.singleLineCComments,							css: 'comments' },			// one line comments
			{ regex: r.multiLineCComments,							css: 'comments' },			// multiline comments
			{ regex: /\s*#.*/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// keywords
			];
	
		this.forHtmlScript(r.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['js', 'jscript', 'javascript'];

	SyntaxHighlighter.brushes.JScript = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPerl.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by David Simmons-Duffin and Marty Kube
	
		var funcs = 
			'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 
			'chroot close closedir connect cos crypt defined delete each endgrent ' + 
			'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 
			'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 
			'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 
			'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 
			'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 
			'getservbyname getservbyport getservent getsockname getsockopt glob ' + 
			'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 
			'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 
			'oct open opendir ord pack pipe pop pos print printf prototype push ' + 
			'quotemeta rand read readdir readline readlink readpipe recv rename ' + 
			'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 
			'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 
			'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 
			'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 
			'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 
			'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 
			'undef unlink unpack unshift utime values vec wait waitpid warn write';
    
		var keywords =  
			'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' +
			'for foreach goto if import last local my next no our package redo ref ' + 
			'require return sub tie tied unless untie until use wantarray while';
    
		this.regexList = [
			{ regex: new RegExp('#[^!].*$', 'gm'),					css: 'comments' },
			{ regex: new RegExp('^\\s*#!.*$', 'gm'),				css: 'preprocessor' }, // shebang
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			{ regex: new RegExp('(\\$|@|%)\\w+', 'g'),				css: 'variable' },
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),	css: 'functions' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }
		    ];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perl', 'Perl', 'pl'];

	SyntaxHighlighter.brushes.Perl = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPhp.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var funcs	=	'abs acos acosh addcslashes addslashes ' +
						'array_change_key_case array_chunk array_combine array_count_values array_diff '+
						'array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill '+
						'array_filter array_flip array_intersect array_intersect_assoc array_intersect_key '+
						'array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map '+
						'array_merge array_merge_recursive array_multisort array_pad array_pop array_product '+
						'array_push array_rand array_reduce array_reverse array_search array_shift '+
						'array_slice array_splice array_sum array_udiff array_udiff_assoc '+
						'array_udiff_uassoc array_uintersect array_uintersect_assoc '+
						'array_uintersect_uassoc array_unique array_unshift array_values array_walk '+
						'array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert '+
						'basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress '+
						'bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir '+
						'checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists '+
						'closedir closelog copy cos cosh count count_chars date decbin dechex decoct '+
						'deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log '+
						'error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded '+
						'feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents '+
						'fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype '+
						'floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf '+
						'fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname '+
						'gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt '+
						'getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext '+
						'gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set '+
						'interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double '+
						'is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long '+
						'is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault '+
						'is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br '+
						'parse_ini_file parse_str parse_url passthru pathinfo print readlink realpath rewind rewinddir rmdir '+
						'round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split '+
						'str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes '+
						'stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk '+
						'strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime '+
						'strtoupper strtr strval substr substr_compare';

		var keywords =	'abstract and array as break case catch cfunction class clone const continue declare default die do ' +
						'else elseif enddeclare endfor endforeach endif endswitch endwhile extends final for foreach ' +
						'function include include_once global goto if implements interface instanceof namespace new ' +
						'old_function or private protected public return require require_once static switch ' +
						'throw try use var while xor ';
		
		var constants	= '__FILE__ __LINE__ __METHOD__ __FUNCTION__ __CLASS__';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// single quoted strings
			{ regex: /\$\w+/g,											css: 'variable' },			// variables
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },			// common functions
			{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'constants' },			// constants
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' }			// keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['php'];

	SyntaxHighlighter.brushes.Php = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPlain.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes.Plain = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPowerShell.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributes by B.v.Zanten, Getronics
		// http://confluence.atlassian.com/display/CONFEXT/New+Code+Macro

		var keywords = 'Add-Content Add-History Add-Member Add-PSSnapin Clear(-Content)? Clear-Item ' +
					'Clear-ItemProperty Clear-Variable Compare-Object ConvertFrom-SecureString Convert-Path ' +
					'ConvertTo-Html ConvertTo-SecureString Copy(-Item)? Copy-ItemProperty Export-Alias ' +
					'Export-Clixml Export-Console Export-Csv ForEach(-Object)? Format-Custom Format-List ' +
					'Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command ' +
					'Get-Content Get-Credential Get-Culture Get-Date Get-EventLog Get-ExecutionPolicy ' +
					'Get-Help Get-History Get-Host Get-Item Get-ItemProperty Get-Location Get-Member ' +
					'Get-PfxCertificate Get-Process Get-PSDrive Get-PSProvider Get-PSSnapin Get-Service ' +
					'Get-TraceSource Get-UICulture Get-Unique Get-Variable Get-WmiObject Group-Object ' +
					'Import-Alias Import-Clixml Import-Csv Invoke-Expression Invoke-History Invoke-Item ' +
					'Join-Path Measure-Command Measure-Object Move(-Item)? Move-ItemProperty New-Alias ' +
					'New-Item New-ItemProperty New-Object New-PSDrive New-Service New-TimeSpan ' +
					'New-Variable Out-Default Out-File Out-Host Out-Null Out-Printer Out-String Pop-Location ' +
					'Push-Location Read-Host Remove-Item Remove-ItemProperty Remove-PSDrive Remove-PSSnapin ' +
					'Remove-Variable Rename-Item Rename-ItemProperty Resolve-Path Restart-Service Resume-Service ' +
					'Select-Object Select-String Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content ' +
					'Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-Location Set-PSDebug ' +
					'Set-Service Set-TraceSource Set(-Variable)? Sort-Object Split-Path Start-Service ' +
					'Start-Sleep Start-Transcript Stop-Process Stop-Service Stop-Transcript Suspend-Service ' +
					'Tee-Object Test-Path Trace-Command Update-FormatData Update-TypeData Where(-Object)? ' +
					'Write-Debug Write-Error Write(-Host)? Write-Output Write-Progress Write-Verbose Write-Warning';
		var alias = 'ac asnp clc cli clp clv cpi cpp cvpa diff epal epcsv fc fl ' +
					'ft fw gal gc gci gcm gdr ghy gi gl gm gp gps group gsv ' +
					'gsnp gu gv gwmi iex ihy ii ipal ipcsv mi mp nal ndr ni nv oh rdr ' +
					'ri rni rnp rp rsnp rv rvpa sal sasv sc select si sl sleep sort sp ' +
					'spps spsv sv tee cat cd cp h history kill lp ls ' +
					'mount mv popd ps pushd pwd r rm rmdir echo cls chdir del dir ' +
					'erase rd ren type % \\?';

		this.regexList = [
			{ regex: /#.*$/gm,										css: 'comments' },  // one line comments
			{ regex: /\$[a-zA-Z0-9]+\b/g,							css: 'value'   },   // variables $Computer1
			{ regex: /\-[a-zA-Z]+\b/g,								css: 'keyword' },   // Operators    -not  -and  -eq
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },    // strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },    // strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),	css: 'keyword' },
			{ regex: new RegExp(this.getKeywords(alias), 'gmi'),	css: 'keyword' }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['powershell', 'ps'];

	SyntaxHighlighter.brushes.PowerShell = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushPython.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Gheorghe Milas and Ahmad Sherif
	
		var keywords =  'and assert break class continue def del elif else ' +
						'except exec finally for from global if import in is ' +
						'lambda not or pass print raise return try yield while';

		var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
					'chr classmethod cmp coerce compile complex delattr dict dir ' +
					'divmod enumerate eval execfile file filter float format frozenset ' +
					'getattr globals hasattr hash help hex id input int intern ' +
					'isinstance issubclass iter len list locals long map max min next ' +
					'object oct open ord pow print property range raw_input reduce ' +
					'reload repr reversed round set setattr slice sorted staticmethod ' +
					'str sum super tuple type type unichr unicode vars xrange zip';

		var special =  'None True False self cls class_';

		this.regexList = [
				{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },
				{ regex: /^\s*@\w+/gm, 										css: 'decorator' },
				{ regex: /(['\"]{3})([^\1])*?\1/gm, 						css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm, 					css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm, 				css: 'string' },
				{ regex: /\+|\-|\*|\/|\%|=|==/gm, 							css: 'keyword' },
				{ regex: /\b\d+\.?\w*/g, 									css: 'value' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'functions' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gm'), 		css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gm'), 		css: 'color1' }
				];
			
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['py', 'python'];

	SyntaxHighlighter.brushes.Python = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushRuby.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Erik Peterson.
	
		var keywords =	'alias and BEGIN begin break case class def define_method defined do each else elsif ' +
						'END end ensure false for if in module new next nil not or raise redo rescue retry return ' +
						'self super then throw true undef unless until when while yield';

		var builtins =	'Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload ' +
						'Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ' +
						'ThreadGroup Thread Time TrueClass';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b[A-Z0-9_]+\b/g,									css: 'constants' },		// constants
			{ regex: /:[a-z][A-Za-z0-9_]*/g,							css: 'color2' },		// symbols
			{ regex: /(\$|@@|@)\w+/g,									css: 'variable bold' },	// $global, @instance, and @@class variables
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(builtins), 'gm'),		css: 'color1' }			// builtins
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['ruby', 'rails', 'ror', 'rb'];

	SyntaxHighlighter.brushes.Ruby = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushSass.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function getKeywordsCSS(str)
		{
			return '\\b([a-z_]|)' + str.replace(/ /g, '(?=:)\\b|\\b([a-z_\\*]|\\*|)') + '(?=:)\\b';
		};
	
		function getValuesCSS(str)
		{
			return '\\b' + str.replace(/ /g, '(?!-)(?!:)\\b|\\b()') + '\:\\b';
		};

		var keywords =	'ascent azimuth background-attachment background-color background-image background-position ' +
						'background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top ' +
						'border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color ' +
						'border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width ' +
						'border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color ' +
						'content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display ' +
						'elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font ' +
						'height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top ' +
						'margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans ' +
						'outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page ' +
						'page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position ' +
						'quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress ' +
						'table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em ' +
						'vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index';
		
		var values =	'above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder '+
						'both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed '+
						'continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero digits disc dotted double '+
						'embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia '+
						'gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic '+
						'justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha '+
						'lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower '+
						'navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset '+
						'outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side '+
						'rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow '+
						'small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize '+
						'table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal '+
						'text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin '+
						'upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow';
		
		var fonts =		'[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif';
		
		var statements		= '!important !default';
		var preprocessor	= '@import @extend @debug @warn @if @for @while @mixin @include';
		
		var r = SyntaxHighlighter.regexLib;
		
		this.regexList = [
			{ regex: r.multiLineCComments,								css: 'comments' },		// multiline comments
			{ regex: r.singleLineCComments,								css: 'comments' },		// singleline comments
			{ regex: r.doubleQuotedString,								css: 'string' },		// double quoted strings
			{ regex: r.singleQuotedString,								css: 'string' },		// single quoted strings
			{ regex: /\#[a-fA-F0-9]{3,6}/g,								css: 'value' },			// html colors
			{ regex: /\b(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)\b/g,			css: 'value' },			// sizes
			{ regex: /\$\w+/g,											css: 'variable' },		// variables
			{ regex: new RegExp(this.getKeywords(statements), 'g'),		css: 'color3' },		// statements
			{ regex: new RegExp(this.getKeywords(preprocessor), 'g'),	css: 'preprocessor' },	// preprocessor
			{ regex: new RegExp(getKeywordsCSS(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(getValuesCSS(values), 'g'),				css: 'value' },			// values
			{ regex: new RegExp(this.getKeywords(fonts), 'g'),			css: 'color1' }			// fonts
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sass', 'scss'];

	SyntaxHighlighter.brushes.Sass = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushScala.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Yegor Jbanov and David Bernard.
	
		var keywords =	'val sealed case def true trait implicit forSome import match object null finally super ' +
						'override try lazy for var catch throw type extends class while with new final yield abstract ' +
						'else do if return protected private this package false';

		var keyops =	'[_:=><%#@]+';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,			css: 'comments' },	// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,				css: 'comments' },	// multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },	// multi-line strings
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,    css: 'string' },	// double-quoted string
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,				css: 'string' },	// strings
			{ regex: /0x[a-f0-9]+|\d+(\.\d+)?/gi,								css: 'value' },		// numbers
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),				css: 'keyword' },	// keywords
			{ regex: new RegExp(keyops, 'gm'),									css: 'keyword' }	// scala keyword
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['scala'];

	SyntaxHighlighter.brushes.Scala = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushSql.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var funcs	=	'abs avg case cast coalesce convert count current_timestamp ' +
						'current_user day isnull left lower month nullif replace right ' +
						'session_user space substring sum system_user upper user year';

		var keywords =	'absolute action add after alter as asc at authorization begin bigint ' +
						'binary bit by cascade char character check checkpoint close collate ' +
						'column commit committed connect connection constraint contains continue ' +
						'create cube current current_date current_time cursor database date ' +
						'deallocate dec decimal declare default delete desc distinct double drop ' +
						'dynamic else end end-exec escape except exec execute false fetch first ' +
						'float for force foreign forward free from full function global goto grant ' +
						'group grouping having hour ignore index inner insensitive insert instead ' +
						'int integer intersect into is isolation key last level load local max min ' +
						'minute modify move name national nchar next no numeric of off on only ' +
						'open option order out output partial password precision prepare primary ' +
						'prior privileges procedure public read real references relative repeatable ' +
						'restrict return returns revoke rollback rollup rows rule schema scroll ' +
						'second section select sequence serializable set size smallint static ' +
						'statistics table temp temporary then time timestamp to top transaction ' +
						'translation trigger true truncate uncommitted union unique update values ' +
						'varchar varying view when where with work';

		var operators =	'all and any between cross in join like not null or outer some';

		this.regexList = [
			{ regex: /--(.*)$/gm,												css: 'comments' },			// one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },			// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },			// single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),				css: 'color2' },			// functions
			{ regex: new RegExp(this.getKeywords(operators), 'gmi'),			css: 'color1' },			// operators and such
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),				css: 'keyword' }			// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sql'];

	SyntaxHighlighter.brushes.Sql = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushVb.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto ' +
						'Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate ' +
						'CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType ' +
						'Date Decimal Declare Default Delegate Dim DirectCast Do Double Each ' +
						'Else ElseIf End Enum Erase Error Event Exit False Finally For Friend ' +
						'Function Get GetType GoSub GoTo Handles If Implements Imports In ' +
						'Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module ' +
						'MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing ' +
						'NotInheritable NotOverridable Object On Option Optional Or OrElse ' +
						'Overloads Overridable Overrides ParamArray Preserve Private Property ' +
						'Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume ' +
						'Return Select Set Shadows Shared Short Single Static Step Stop String ' +
						'Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until ' +
						'Variant When While With WithEvents WriteOnly Xor';

		this.regexList = [
			{ regex: /'.*$/gm,										css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },			// strings
			{ regex: /^\s*#.*$/gm,									css: 'preprocessor' },		// preprocessor tags like #region and #endregion
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' }			// vb keyword
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['vb', 'vbnet'];

	SyntaxHighlighter.brushes.Vb = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushXml.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		function process(match, regexInfo)
		{
			var constructor = SyntaxHighlighter.Match,
				code = match[0],
				tag = new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)', 'xg').exec(code),
				result = []
				;
		
			if (match.attributes != null) 
			{
				var attributes,
					regex = new XRegExp('(?<name> [\\w:\\-\\.]+)' +
										'\\s*=\\s*' +
										'(?<value> ".*?"|\'.*?\'|\\w+)',
										'xg');

				while ((attributes = regex.exec(code)) != null) 
				{
					result.push(new constructor(attributes.name, match.index + attributes.index, 'color1'));
					result.push(new constructor(attributes.value, match.index + attributes.index + attributes[0].indexOf(attributes.value), 'string'));
				}
			}

			if (tag != null)
				result.push(
					new constructor(tag.name, match.index + tag[0].indexOf(tag.name), 'keyword')
				);

			return result;
		}
	
		this.regexList = [
			{ regex: new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)', 'gm'),			css: 'color2' },	// <![ ... [ ... ]]>
			{ regex: SyntaxHighlighter.regexLib.xmlComments,												css: 'comments' },	// <!-- ... -->
			{ regex: new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)', 'sg'), func: process }
		];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['xml', 'xhtml', 'xslt', 'html','html/xml'];

	SyntaxHighlighter.brushes.Xml = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-brushes', location = 'sh/scripts/shBrushYaml.js' */
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
    // CommonJS
    SyntaxHighlighter = SyntaxHighlighter || (typeof(require) !== 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null);

    function Brush()
    {
        var constants	= '~ true false on off';

        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments' },      // comment
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,     css: 'string' },        // double quoted string
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,     css: 'string' },        // single quoted string
            { regex: /^\s*([a-z0-9\._-])+\s*:/gmi,                      css: 'variable' },      // key
            { regex: /\s?(\.)([a-z0-9\._-])+\s?:/gmi,                   css: 'comments' },      // section
            { regex: /\s(@|:)([a-z0-9\._-])+\s*$/gmi,                   css: 'variable bold' }, // variable, reference
            { regex: /\s+\d+\s?$/gm,                                    css: 'color2 bold' },   // integers
            { regex: /(\{|\}|\[|\]|,|~|:)/gm,                           css: 'constants' },     // inline hash and array, comma, null
            { regex: /^\s+(-)+/gm,                                      css: 'string bold' },   // array list entry
            { regex: /^---/gm,                                          css: 'string bold' },   // category
            { regex: new RegExp(this.getKeywords(constants), 'gmi'),    css: 'constants' }      // constants
        ];
    }

    Brush.prototype	= new SyntaxHighlighter.Highlighter();
    Brush.aliases	= ['yml', 'yaml'];

    SyntaxHighlighter.brushes.Yaml = Brush;

    // CommonJS
    typeof(exports) !== 'undefined' ? exports.Brush = Brush : null;
})();

}catch(e){WRMCB(e)};