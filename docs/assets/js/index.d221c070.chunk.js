(window.webpackJsonp = window.webpackJsonp || []).push([[1], [,,, function (e) {
  e.exports = JSON.parse('{"javascript":"clike","actionscript":"javascript","arduino":"cpp","aspnet":["markup","csharp"],"bison":"c","c":"clike","csharp":"clike","cpp":"c","coffeescript":"javascript","crystal":"ruby","css-extras":"css","d":"clike","dart":"clike","django":"markup","erb":["ruby","markup-templating"],"fsharp":"clike","flow":"javascript","glsl":"clike","go":"clike","groovy":"clike","haml":"ruby","handlebars":"markup-templating","haxe":"clike","java":"clike","jolie":"clike","kotlin":"clike","less":"css","markdown":"markup","markup-templating":"markup","n4js":"javascript","nginx":"clike","objectivec":"c","opencl":"cpp","parser":"markup","php":["clike","markup-templating"],"php-extras":"php","plsql":"sql","processing":"clike","protobuf":"clike","pug":"javascript","qore":"clike","jsx":["markup","javascript"],"tsx":["jsx","typescript"],"reason":"clike","ruby":"clike","sass":"css","scss":"css","scala":"java","smarty":"markup-templating","soy":"markup-templating","swift":"clike","tap":"yaml","textile":"markup","tt2":["clike","markup-templating"],"twig":"markup","typescript":"javascript","vbnet":"basic","velocity":"markup","wiki":"markup","xeora":"markup","xquery":"markup","builtin":["markup","xml","html","mathml","svg","css","clike","javascript","js"]}')
},,,,,,, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {},,,,,,,, function (e, t, n) {
    e.exports = n(74)
  },,,,,, function (e, t, n) {
    "use strict"; n(10)
  }, function (e, t, n) {
    "use strict"; n(11)
  }, function (e, t, n) {
    "use strict"; n(12)
  }, function (e, t, n) {
    "use strict"; n(13)
  }, function (e, t, n) {
    "use strict"; n(14)
  }, function (e, t, n) {
    "use strict"; n(15)
  }, function (e, t, n) {
    "use strict"; n(16)
  }, function (e, t, n) {
    "use strict"; n(17)
  }, function (e, t, n) {
    "use strict"; n(18)
  }, function (e, t, n) {
    "use strict"; n(19)
  }, function (e, t, n) {
    "use strict"; n(20)
  }, function (e, t, n) {
    "use strict"; n(21)
  }, function (e, t, n) {
    "use strict"; n(22)
  }, function (e, t, n) {
    "use strict"; n(23)
  },, function (e, t, n) {
    "use strict"; n(24)
  }, function (e, t, n) {
    "use strict"; n(25)
  }, function (e, t, n) {
    "use strict"; n(26)
  }, function (e, t, n) {
    "use strict"; n(27)
  }, function (e, t, n) {
    "use strict"; n(28)
  }, function (e, t, n) {
    "use strict"; n(29)
  }, function (e, t, n) {
    "use strict"; n(30)
  }, function (e, t, n) {
    "use strict"; n(31)
  }, function (e, t, n) {
    "use strict"; n(32)
  }, function (e, t, n) {
    "use strict"; n(33)
  }, function (e, t, n) {
    "use strict"; n(34)
  }, function (e, t, n) {
    "use strict"; n.r(t); let r = n(35); let i = n.n(r); let s = n(36); let o = n.n(s); let a = n(1); let l = n(37); let c = { name: "InjectedComponents", functional: !0, props: { position: { type: String, required: !0 } }, render: function (e, t) {
var n = t.props; var r = t.parent.$pluginApi.getComponents(n.position); if (r.length!==0) return e('div', { class: "InjectedComponents", attrs: { "data-position": n.position } }, r.map(((t)=> {
var n = t.component; var r = t.props; return e(n, { props: r })
})))
} }; let u = n(2); let h = n.n(u); function p(e, t, n, r, i, s, o) {
      try {
        var a = e[s](o); var l = a.value
      } catch (error) {
return void n(error)
      }

a.done ? t(l) : Promise.resolve(l).then(r, i)
    }

 function d(e, t) {
      for (const r of t) {
 r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

 let f = new ((function () {
function e() {
!(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this, e), this.hooks = {}
} var t; var n; var r; return t = e, (n = [{ key: "add", value: function (e, t) {
return this.hooks[e] = this.hooks[e] || [], this.hooks[e].push(t), this
} }, { key: "invoke", value: function (e) {
for (var t = this.hooks[e] || [], n = arguments.length, r = new Array(n > 1 ? n - 1:0), i = 1; i < n; i++)r[i - 1] = arguments[i]; var s = !0; var o=!1; var a = void 0; try {
for (var l, c = t[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) {
var u = l.value; u.apply(void 0, r)
}
} catch (error){o=!0,a=error} finally {
try {
s || null == c.return || c.return()
} finally {
if (o) throw a
}
} return this
} }, { key: "process", value: function (e, t) {
var n = this.hooks[e] || []; var r=!0; var i=!1; var s = void 0; try {
for (var o, a = n[Symbol.iterator](); !(r = (o = a.next()).done); r = !0)t = (0, o.value)(t) || t
} catch (error){i=!0,s=error} finally {
try {
r || null == a.return || a.return()
} finally {
if (i) throw s
}
} return t
} }, { key: "processPromise", value: function () {
var e = function (e) {
return function () {
var t = this; var n = arguments; return new Promise(((r,i)=> {
var s = e.apply(t, n); function o(e) {
p(s, r, i, o, a, "next", e)
} function a(e) {
p(s, r, i, o, a, "throw", e)
}o(void 0)
}))
}
}(h.a.mark((function e(t, n) {
var r; var i; var s; var o; var a; var l; var c; return h.a.wrap((function (e) {
for (;;) switch (e.prev = e.next) {
case 0: r = this.hooks[t] || [], i = !0, s = !1, o = void 0, e.prev = 4, a = r[Symbol.iterator](); case 6: if (i = (l = a.next()).done) {
e.next = 17; break
} return c = l.value, e.next = 10, c(n); case 10: if (e.t0 = e.sent, e.t0) {
e.next = 13; break
}e.t0 = n; case 13: n = e.t0; case 14: i = !0, e.next = 6; break; case 17: e.next = 23; break; case 19: e.prev = 19, e.t1 = e.catch(4), s = !0, o = e.t1; case 23: e.prev = 23, e.prev = 24, i || null == a.return || a.return(); case 26: if (e.prev = 26, !s) {
e.next = 29; break
} throw o; case 29: return e.finish(26); case 30: return e.finish(23); case 31: return e.abrupt('return', n); case 32: case "end": return e.stop()
}
}), e, this, [[4, 19, 23, 31], [24,, 26, 30]])
}))); return function (t, n) {
return Reflect.apply(e, this, arguments)}
}() }]) && d(t.prototype, n), r && d(t, r), e
})())(); function g(e, t) {
      for (const r of t) {
 r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

 let m = (function () {
function e(t) {
var n = t.plugins; var r=t.store; var i = t.router; !(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this, e), this.plugins = n, this.store = r, this.router = i, this.components = {}, this.hooks = f, this.search = {}, a.a.component(c.name, c)
} var t; var n; var r; return t = e, (n = [{ key: "hasPlugin", value: function (e) {
return this.plugins.filter(((t)=> {
return t.name === e
})).length > 0
} }, { key: "registerComponent", value: function (e, t, n) {
return this.components[e] = this.components[e] || [], this.components[e].push({ component: t, props: n }), this
} }, { key: "getComponents", value: function (e) {
return this.components[e] || []
} }, { key: "processMarkdown", value: function (e) {
return this.hooks.add('processMarkdown', e), this
} }, { key: "processHTML", value: function (e) {
return this.hooks.add('processHTML', e), this
} }, { key: "extendMarkedRenderer", value: function (e) {
return this.hooks.add('extendMarkedRenderer', e), this
} }, { key: "onContentUpdated", value: function (e) {
return this.hooks.add('onContentUpdated', e), this
} }, { key: "extendMarkdownComponent", value: function (e) {
return this.hooks.add('extendMarkdownComponent', e), this
} }, { key: "enableSearch", value: function () {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0]:{}; return this.search = e, this.search.enabled = !0, this
} }]) && g(t.prototype, n), r && g(t, r), e
})(); let k = { name: "DocuteRoot", render: function (e) {
return e('div', { attrs: { id: this.$store.getters.target, class: "Root" } }, [e('router-view')])
}, created: function () {
this.insertStyle()
}, computed: { css: function () {
var e = this.$store.getters.cssVariables; var t = Object.keys(e).reduce(((t,n)=> {
return t += "--".concat(n.replace(/[A-Z]/g, ((e)=> {
return "-".concat(e.toLowerCase())
})), ":").concat(e[n], ";")
}), ""); return ":root{".concat(t, "}")
} }, watch: { css: function () {
this.insertStyle()
} }, methods: { insertStyle: function () {
if (this.$ssrContext) this.$ssrContext.insertedStyle = this.css; else {
var e = "docute-inserted-style"; var t = document.getElementById(e); t ? t.innerHTML = this.css:((t = document.createElement('style')).id = e, t.innerHTML = this.css, document.head.insertBefore(t, document.head.firstChild))
}
} } }; let b = (n(48), n(0)); let v = new Object(b.a)(k, void 0, void 0, !1, null, null, null); v.options.__file = 'src/components/Root.vue'; let y = v.exports; let _ = n(5); let x = function (e) {
      if (e) {try {
e = new Function('return '.concat(e))()
} catch (error){console.error("You're using invalid options for code fences, it must be JSON or JS object!\n".concat(error.message))
}} return e || {}
    };

 function w(e, t) {
      return (function (e) {
if (Array.isArray(e)) return e
})(e) || (function (e, t) {
if (!(Symbol.iterator in new Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return; var n = []; var r=!0; var i=!1; var s = void 0; try {
for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
} catch (error){i=!0,s=error} finally {
try {
r || null == a.return || a.return()
} finally {
if (i) throw s
}
} return n
})(e, t) || (function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
})()
    }

 let C = /\.md$/; let j = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: G, hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/, nptable: G, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))', def: /^ {0,3}\[(label)]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/, table: G, lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/, paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?tag(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/, text: /^[^\n]+/ }; function S(e) {
      this.tokens = [], this.tokens.links = Object.create(null), this.options = e || N.defaults, this.rules = j.normal, this.options.pedantic ? this.rules = j.pedantic : this.options.gfm && (this.options.tables ? this.rules = j.tables : this.rules = j.gfm)
    }

j._label = /(?!\s*])(?:\\[[\]]|[^[\]])+/, j._title = /"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\)/, j.def = R(j.def).replace('label', j._label).replace('title', j._title).getRegex(), j.bullet = /[*+-]|\d+\./, j.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, j.item = R(j.item, 'gm').replace(/bull/g, j.bullet).getRegex(), j.list = R(j.list).replace(/bull/g, j.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + j.def.source + ')').getRegex(), j._tag = 'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul', j._comment = /<!--(?!-?>)[\s\S]*?-->/, j.html = R(j.html, 'i').replace('comment', j._comment).replace('tag', j._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), j.paragraph = R(j.paragraph).replace('hr', j.hr).replace('heading', j.heading).replace('lheading', j.lheading).replace('tag', j._tag).getRegex(), j.blockquote = R(j.blockquote).replace('paragraph', j.paragraph).getRegex(), j.normal = D({}, j), j.gfm = D({}, j.normal, { fences: /^ *(`{3,}|~{3,})[ .]*(\S+)? *({.+})?\n([\s\S]*?)\n? *\1 *(?:\n+|$)/, paragraph: /^/, heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/ }), j.gfm.paragraph = R(j.paragraph).replace('(?!', '(?!' + j.gfm.fences.source.replace('\\1', '\\2') + '|' + j.list.source.replace('\\1', '\\3') + '|').getRegex(), j.tables = D({}, j.gfm, { nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/, table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/ }), j.pedantic = D({}, j.normal, { html: R('^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', j._comment).replace(/tag/g, '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(), def: /^ *\[([^\]]+)]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/ }), S.rules = j, S.lex = function (e, t) {
      return new S(t).lex(e)
    }, S.prototype.lex = function (e) {
      return e = e.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00A0/g, ' ').replace(/\u2424/g, '\n'), this.token(e, !0)
    }, S.prototype.token = function (e, t) {
      var n; let r; let i; let s; let o; let a; let l; let c; let u; let h; let p; let d; let f; let g; let m; let k; for (e = e.replace(/^ +$/gm, ''); e;) {if ((i = this.rules.newline.exec(e)) && (e = e.substring(i[0].length), i[0].length > 1 && this.tokens.push({ type: "space" })), i = this.rules.code.exec(e))e = e.substring(i[0].length), i = i[0].replace(/^ {4}/gm, ""), this.tokens.push({ type: "code", text: this.options.pedantic ? i:H(i, "\n") }); else if (i = this.rules.fences.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "code", lang: i[2], text: i[4] || "", opts: x(i[3]) }); else if (i = this.rules.heading.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "heading", depth: i[1].length, text: i[2] }); else if (t && (i = this.rules.nptable.exec(e)) && (a = { type: "table", header: Z(i[1].replace(/^ *| *\| *$/g, "")), align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: i[3] ? i[3].replace(/\n$/, "").split('\n'):[] }).header.length === a.align.length) {
for (e = e.substring(i[0].length), p = 0; p < a.align.length; p++)/^ *-+: *$/.test(a.align[p]) ? a.align[p] = "right":(/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null); for (p = 0; p < a.cells.length; p++)a.cells[p] = Z(a.cells[p], a.header.length); this.tokens.push(a)
} else if (i = this.rules.hr.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "hr" }); else if (i = this.rules.blockquote.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "blockquote_start" }), i = i[0].replace(/^ *> ?/gm, ""), this.token(i, t), this.tokens.push({ type: "blockquote_end" }); else if (i = this.rules.list.exec(e)) {
for (e = e.substring(i[0].length), l = { type: "list_start", ordered: g = (s = i[2]).length > 1, start: g ? +s:'', loose: !1 }, this.tokens.push(l), c = [], n = !1, f = (i = i[0].match(this.rules.item)).length, p = 0; p < f; p++)h = (a = i[p]).length, ~(a = a.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf('\n ') && (h -= a.length, a = this.options.pedantic ? a.replace(/^ {1,4}/gm, ""):a.replace(new RegExp('^ {1,'+h + "}", "gm"), "")), this.options.smartLists && p !== f - 1 && (s === (o = j.bullet.exec(i[p + 1])[0]) || s.length > 1 && o.length > 1 || (e = i.slice(p + 1).join('\n') + e, p = f - 1)), r = n || /\n\n(?!\s*$)/.test(a), p !== f - 1 && (n = "\n" === a.charAt(a.length - 1), r || (r = n)), r && (l.loose = !0), k = void 0, (m = /^\[[ xX]\] /.test(a)) && (k = " " !== a[1], a = a.replace(/^\[[ xX]] +/, "")), u = { type: "list_item_start", task: m, checked: k, loose: r }, c.push(u), this.tokens.push(u), this.token(a, !1), this.tokens.push({ type: "list_item_end" }); if (l.loose) for (f = c.length, p = 0; p < f; p++)c[p].loose = !0; this.tokens.push({ type: "list_end" })
} else if (i = this.rules.html.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: this.options.sanitize ? "paragraph":'html', pre: !this.options.sanitizer && ('pre'===i[1] || "script" === i[1] || "style" === i[1]), text: i[0] }); else if (t && (i = this.rules.def.exec(e)))e = e.substring(i[0].length), i[3] && (i[3] = i[3].substring(1, i[3].length - 1)), d = i[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[d] || (this.tokens.links[d] = { href: i[2], title: i[3] }); else if (t && (i = this.rules.table.exec(e)) && (a = { type: "table", header: Z(i[1].replace(/^ *| *\| *$/g, "")), align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: i[3] ? i[3].replace(/(?: *\| *)?\n$/, "").split('\n'):[] }).header.length === a.align.length) {
for (e = e.substring(i[0].length), p = 0; p < a.align.length; p++)/^ *-+: *$/.test(a.align[p]) ? a.align[p] = "right":(/^ *:-+: *$/.test(a.align[p])?a.align[p]="center":/^ *:-+ *$/.test(a.align[p])?a.align[p]="left":a.align[p]=null); for (p = 0; p < a.cells.length; p++)a.cells[p] = Z(a.cells[p].replace(/^ *\| *| *\| *$/g, ""), a.header.length); this.tokens.push(a)
} else if (i = this.rules.lheading.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "heading", depth: "=" === i[2] ? 1:2, text: i[1] }); else if (t && (i = this.rules.paragraph.exec(e)))e = e.substring(i[0].length), this.tokens.push({ type: "paragraph", text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1):i[1] }); else if (i = this.rules.text.exec(e))e = e.substring(i[0].length), this.tokens.push({ type: "text", text: i[0] }); else if (e) throw new Error('Infinite loop on byte: '+e.charCodeAt(0));} return this.tokens
    };

 let A = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\u0000-\u001f<>]*|email)>/, url: G, tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', link: /^!?\[(label)]\(href(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)]\[(?!\s*])((?:\\[[\]]?|[^[\]\\])+)]/, nolink: /^!?\[(?!\s*])((?:\[[^[\]]*]|\\[[\]]|[^[\]])*)](?:\[])?/, strong: /^__(\S)__(?!_)|^\*\*(\S)\*\*(?!\*)|^__(\S[\s\S]*?\S)__(?!_)|^\*\*(\S[\s\S]*?\S)\*\*(?!\*)/, em: /^_([^\s_])_(?!_)|^\*([^\s*"<[])\*(?!\*)|^_(\S[\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?\S)_(?!_)|^\*([^\s"<[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<[][\s\S]*?\S)\*(?!\*)/, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: G, text: /^(`+|[^`])[\s\S]*?(?=[\\<![`*]|\b_| {2,}\n|$)/ }; function O(e, t) {
      if (this.options = t || N.defaults, this.links = e, this.rules = A.normal, this.renderer = this.options.renderer || new I(), this.renderer.options = this.options, !this.links) throw new Error('Tokens array requires a `links` property.'); this.options.pedantic ? this.rules = A.pedantic : this.options.gfm && (this.options.breaks ? this.rules = A.breaks : this.rules = A.gfm)
    }

 function I(e) {
      this.options = e || N.defaults
    }

 function L() {} function T(e) {
      this.tokens = [], this.token = null, this.options = e || N.defaults, this.options.renderer = this.options.renderer || new I(), this.renderer = this.options.renderer, this.renderer.options = this.options
    }

 function P(e, t) {
      if (t) {
        if (P.escapeTest.test(e)) {return e.replace(P.escapeReplace, ((e)=> {
return P.replacements[e]
}))}
      } else if (P.escapeTestNoEncode.test(e)) {return e.replace(P.escapeReplaceNoEncode, ((e)=> {
return P.replacements[e]
}));} return e
    }

 function E(e) {
      return e.replace(/&(#\d+|(?:#x[\da-f]+)|\w+);?/gi, ((e, t) => {
        return 'colon' === (t = t.toLowerCase()) ? ':':t.charAt(0)==='#' ? 'x' === t.charAt(1) ? String.fromCharCode(Number.parseInt(t.slice(2), 16)) : String.fromCharCode(Number(t.slice(1))) : ''
}))
    }

 function R(e, t) {
      return e = e.source || e, t = t || '', { replace (t, n) {
return n = (n = n.source || n).replace(/(^|[^[])\^/g, "$1"), e = e.replace(t, n), this
}, getRegex () {
return new RegExp(e, t)
} }
    }

 function $(e, t) {
      return M[' ' + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? M[' ' + e] = e + '/':M[' ' + e] = H(e, '/', !0)), e = M[' ' + e], '//' === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ':') + t : '/' === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + t : e + t
    }

A._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~])/g, A._scheme = /[a-zA-Z][a-zA-Z\d+.-]{1,31}/, A._email = /[\w.!#$%&'*+/=?^`{|}~-]+(@)[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?(?:\.[a-zA-Z\d](?:[a-zA-Z\d-]{0,61}[a-zA-Z\d])?)+(?![-_])/, A.autolink = R(A.autolink).replace('scheme', A._scheme).replace('email', A._email).getRegex(), A._attribute = /\s+[a-zA-Z@:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, A.tag = R(A.tag).replace('comment', j._comment).replace('attribute', A._attribute).getRegex(), A._label = /(?:\[[^[\]]*]|\\[[\]]?|`[^`]*`|[^[\]\\])*?/, A._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\u0000-\u001f\\]*\)|[^\s\u0000-\u001f()\\])*?)/, A._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, A.link = R(A.link).replace('label', A._label).replace('href', A._href).replace('title', A._title).getRegex(), A.reflink = R(A.reflink).replace('label', A._label).getRegex(), A.normal = D({}, A), A.pedantic = D({}, A.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/, link: R(/^!?\[(label)]\((.*?)\)/).replace('label', A._label).getRegex(), reflink: R(/^!?\[(label)]\s*\[([^\]]*)]/).replace('label', A._label).getRegex() }), A.gfm = D({}, A.normal, { escape: R(A.escape).replace('])', '~|])').getRegex(), _extended_email: /[\w.+-]+(@)[\w-]+(?:\.[\w-]*[a-zA-Z\d])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z\d\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z\d]+;$)|[?!.,:;*_~)]+(?!$))+/, del: /^~+(?=\S)([\s\S]*?\S)~+/, text: R(A.text).replace(']|', '~]|').replace('|$', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|$').getRegex() }), A.gfm.url = R(A.gfm.url).replace('email', A.gfm._extended_email).getRegex(), A.breaks = D({}, A.gfm, { br: R(A.br).replace('{2,}', '*').getRegex(), text: R(A.gfm.text).replace('{2,}', '*').getRegex() }), O.rules = A, O.output = function (e, t, n) {
      return new O(t, n).output(e)
    }, O.prototype.output = function (e) {
      for (var t, n, r, i, s, o, a = ''; e;) {if (s = this.rules.escape.exec(e))e = e.substring(s[0].length), a += s[1]; else if (s = this.rules.autolink.exec(e))e = e.substring(s[0].length), r = "@" === s[2] ? "mailto:" + (n = P(this.mangle(s[1]))):n = P(s[1]), a += this.renderer.link(r, null, n); else if (this.inLink || !(s = this.rules.url.exec(e))) {
if (s = this.rules.tag.exec(e))!this.inLink && /^<a /i.test(s[0]) ? this.inLink = !0:this.inLink && /^<\/a>/i.test(s[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(s[0]) ? this.inRawBlock = !0:this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0]) && (this.inRawBlock = !1), e = e.substring(s[0].length), a += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(s[0]):P(s[0]):s[0]; else if (s = this.rules.link.exec(e))e = e.substring(s[0].length), this.inLink = !0, r = s[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = t[1], i = t[3]):i = "":i = s[3] ? s[3].slice(1, -1):'', r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), a += this.outputLink(s, { href: O.escapes(r), title: O.escapes(i) }), this.inLink = !1; else if ((s = this.rules.reflink.exec(e)) || (s = this.rules.nolink.exec(e))) {
if (e = e.substring(s[0].length), t = (s[2] || s[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
a += s[0].charAt(0), e = s[0].substring(1) + e; continue
} this.inLink = !0, a += this.outputLink(s, t), this.inLink = !1
} else if (s = this.rules.strong.exec(e))e = e.substring(s[0].length), a += this.renderer.strong(this.output(s[4] || s[3] || s[2] || s[1])); else if (s = this.rules.em.exec(e))e = e.substring(s[0].length), a += this.renderer.em(this.output(s[6] || s[5] || s[4] || s[3] || s[2] || s[1])); else if (s = this.rules.code.exec(e))e = e.substring(s[0].length), a += this.renderer.codespan(P(s[2].trim(), !0)); else if (s = this.rules.br.exec(e))e = e.substring(s[0].length), a += this.renderer.br(); else if (s = this.rules.del.exec(e))e = e.substring(s[0].length), a += this.renderer.del(this.output(s[1])); else if (s = this.rules.text.exec(e))e = e.substring(s[0].length), this.inRawBlock ? a += this.renderer.text(s[0]):a += this.renderer.text(P(this.smartypants(s[0]))); else if (e) throw new Error('Infinite loop on byte: '+e.charCodeAt(0))
} else {
if ('@'===s[2])r = "mailto:" + (n = P(s[0])); else {
do {
o = s[0], s[0] = this.rules._backpedal.exec(s[0])[0]
} while (o !== s[0]); n = P(s[0]), r = "www." === s[1] ? "http://" + n:n
}e = e.substring(s[0].length), a += this.renderer.link(r, null, n)
}} return a
    }, O.escapes = function (e) {
      return e ? e.replace(O.rules._escapes, '$1') : e
    }, O.prototype.outputLink = function (e, t) {
      var n = t.href; let r = t.title ? P(t.title) : null; return '!' !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, P(e[1]))
    }, O.prototype.smartypants = function (e) {
      return this.options.smartypants ? e.replace(/---/g, '\u2014').replace(/--/g, '\u2013').replace(/(^|[-\u2014/([{"\s])'/g, '$1\u2018').replace(/'/g, '\u2019').replace(/(^|[-\u2014/([{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, '\u2026') : e
    }, O.prototype.mangle = function (e) {
      if (!this.options.mangle) return e; for (var t, n = '', r = e.length, i = 0; i < r; i++)t = e.charCodeAt(i), Math.random() > 0.5 && (t = 'x' + t.toString(16)), n += '&#' + t + ';'; return n
    }, I.prototype.code = function (e, t, n) {
      if (this.options.highlight) {
        var r = this.options.highlight(e, t); r != null && r !== e && (n = !0, e = r)
      }

 return t ? '<pre><code class="' + this.options.langPrefix + P(t, !0) + '">' + (n ? e : P(e, !0)) + '</code></pre>\n':'<pre><code>' + (n ? e : P(e, !0)) + '</code></pre>'
    }, I.prototype.blockquote = function (e) {
      return '<blockquote>\n' + e + '</blockquote>\n'
    }, I.prototype.html = function (e) {
      return e
    }, I.prototype.heading = function (e, t, n) {
      return this.options.headerIds ? '<h' + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/\W+/g, '-') + '">' + e + '</h' + t + '>\n':'<h' + t + '>' + e + '</h' + t + '>\n'
    }, I.prototype.hr = function () {
      return this.options.xhtml ? '<hr/>\n':'<hr>\n'
}, I.prototype.list = function (e, t, n, r) {
      var i = t ? 'ol':'ul'; return '<' + i + (t && n !== 1 ? ' start="' + n + '"' : '') + (r ? ' class="contains-task-list"' : '') + '>\n' + e + '</' + i + '>\n'
    }, I.prototype.listitem = function (e, t) {
      return '<li'.concat(t ? ' class="task-list-item"' : '', '>') + e + '</li>\n'
    }, I.prototype.checkbox = function (e) {
      return '<input ' + (e ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /':'') + '> '
    }, I.prototype.paragraph = function (e) {
      return '<p>' + e + '</p>\n'
    }, I.prototype.table = function (e, t) {
      return t && (t = '<tbody>' + t + '</tbody>'), '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
    }, I.prototype.tablerow = function (e) {
      return '<tr>\n' + e + '</tr>\n'
    }, I.prototype.tablecell = function (e, t) {
      var n = t.header ? 'th':'td'; return (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') + e + '</' + n + '>\n'
    }, I.prototype.strong = function (e) {
      return '<strong>' + e + '</strong>'
    }, I.prototype.em = function (e) {
      return '<em>' + e + '</em>'
    }, I.prototype.codespan = function (e) {
      return '<code>' + e + '</code>'
    }, I.prototype.br = function () {
      return this.options.xhtml ? '<br/>':'<br>'
}, I.prototype.del = function (e) {
      return '<del>' + e + '</del>'
    }, I.prototype.link = function (e, t, n) {
      if (this.options.sanitize) {
        try {
          var r = decodeURIComponent(E(e)).replace(/[^\w:]/g, '').toLowerCase()
        } catch  {
          return n
        }

 if (r.indexOf('javascript:') === 0 || r.indexOf('vbscript:') === 0 || r.indexOf('data:') === 0) return n
      }

 this.options.baseUrl && !B.test(e) && (e = $(this.options.baseUrl, e)); try {
        e = encodeURI(e).replace(/%25/g, '%')
      } catch  {
        return n
      }

 let i = /^https?:\/\//.test(e); let s = /^mailto:/.test(e); let o = i || s ? "a":'router-link'; let a = "a" === o ? "href":'to'; let l = '<'.concat(o, ' ').concat(a, '="') + P(i ? e : (function (e) {
var t = w(e.split('#'), 2); var n=t[0]; var r = t[1]; return C.test(n) && (n = n.replace(C, "")), "".concat(n).concat(r ? "#".concat(r):'')
})(E(e))) + '"'; return t && (l += ' title="' + t + '"'), i && (l += ' target="_blank" rel="noopener noreferrer"', n += '\n<external-link-icon />'), l += '>' + n + '</'.concat(o, '>')
    }, I.prototype.image = function (e, t, n) {
      this.options.baseUrl && !B.test(e) && (e = $(this.options.baseUrl, e)); let r = this.options.env.config.imageZoom; let i = '<'.concat(r ? 'image-zoom':'img', ' src="') + e + '" alt="' + n + '"'; return t && (i += ' title="' + t + '"'), r && (i += ' v-bind:border="false"'), i += this.options.xhtml ? '/>':'>'
}, I.prototype.text = function (e) {
      return e
    }, L.prototype.strong = L.prototype.em = L.prototype.codespan = L.prototype.del = L.prototype.text = function (e) {
      return e
    }, L.prototype.link = L.prototype.image = function (e, t, n) {
      return '' + n
    }, L.prototype.br = function () {
      return ''
    }, T.parse = function (e, t) {
      return new T(t).parse(e)
    }, T.prototype.parse = function (e) {
      this.inline = new O(e.links, this.options), this.inlineText = new O(e.links, D({}, this.options, { renderer: new L() })), this.tokens = e.reverse(); for (var t = ''; this.next();)t += this.tok(); return t
    }, T.prototype.next = function () {
      return this.token = this.tokens.pop()
    }, T.prototype.peek = function () {
      return this.tokens[this.tokens.length - 1] || 0
    }, T.prototype.parseText = function () {
      for (var e = this.token.text; 'text' === this.peek().type;)e += '\n' + this.next().text; return this.inline.output(e)
    }, T.prototype.tok = function () {
      switch (this.token.type) {
        case 'space': return ''; case 'hr': return this.renderer.hr(); case 'heading': return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, E(this.inlineText.output(this.token.text))); case 'code': return this.renderer.code(this.token.text, this.token.lang, this.token.escaped, this.token.opts); case 'table': var e; var t; var n; var r; var i = ""; var s = ''; for (n = '', e = 0; e < this.token.header.length; e++)n += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] }); for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
          for (t = this.token.cells[e], n = '', r = 0; r < t.length; r++)n += this.renderer.tablecell(this.inline.output(t[r]), { header: !1, align: this.token.align[r] }); s += this.renderer.tablerow(n)
        }

 return this.renderer.table(i, s); case 'blockquote_start': for (s = ''; 'blockquote_end' !== this.next().type;)s += this.tok(); return this.renderer.blockquote(s); case 'list_start': s = ''; for (var o = this.token.ordered, a = this.token.start, l = !1; 'list_end' !== this.next().type;) this.token.task && (l = !0), s += this.tok(); return this.renderer.list(s, o, a, l); case 'list_item_start': s = ''; var c = this.token.loose; var u = this.token.task; for (u && (s += this.renderer.checkbox(this.token.checked)); 'list_item_end' !== this.next().type;)s += c || 'text' !== this.token.type ? this.tok() : this.parseText(); return this.renderer.listitem(s, u); case 'html': return this.renderer.html(this.token.text); case 'paragraph': return this.renderer.paragraph(this.inline.output(this.token.text)); case 'text': return this.renderer.paragraph(this.parseText())
      }
    }, P.escapeTest = /[&<>"']/, P.escapeReplace = /[&<>"']/g, P.replacements = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }, P.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, P.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g; var M = {}; var B = /^$|^[a-z][a-z\d+.-]*:|^[?#]/i; function G() {} function D(e) {
      for (var t, n, r = 1; r < arguments.length; r++) for (n in t = arguments[r])Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]); return e
    }

 function Z(e, t) {
      var n = e.replace(/\|/g, ((e, t, n) => {
        for (var r = !1, i = t; --i >= 0 && '\\' === n[i];)r = !r; return r ? '|':' |'
})).split(/ \|/); let r = 0; if (n.length > t)n.splice(t); else for (;n.length < t;)n.push(''); for (;r < n.length; r++)n[r] = n[r].trim().replace(/\\\|/g, '|'); return n
    }

 function H(e, t, n) {
      if (e.length === 0) return ''; for (var r = 0; r < e.length;) {
        var i = e.charAt(e.length - r - 1); if (i !== t || n) {
          if (i === t || !n) break; r++
        } else r++
      }

 return e.slice(0, Math.max(0, e.length - r))
}

 function N(e, t, n) {
      if (typeof e==='undefined' || e === null) throw new Error('marked(): input parameter is undefined or null'); if (typeof e!=='string') throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(e) + ', string expected'); if (n || 'function' === typeof t) {
        n || (n = t, t = null); let r; let i; let s = (t = D({}, N.defaults, t || {})).highlight; let o = 0; try {
          r = S.lex(e, t)
        } catch (error) {
return n(error)
        }

i = r.length; let a = function (e) {
          if (e) return t.highlight = s, n(e); let i; try {
            i = T.parse(r, t)
          } catch (error) {
e = error
}

 return t.highlight = s, e ? n(e) : n(null, i)
        };

 if (!s || s.length < 3) return a(); if (delete t.highlight, !i) return a(); for (;o < r.length; o++)!(function (e) {
"code" !== e.type ? --i || a():s(e.text, e.lang, ((t,n)=> {
return t ? a(t):n==null||n === e.text ? --i || a():(e.text = n, e.escaped = !0, void (--i || a()))
}))
})(r[o])
      } else {try {
return t && (t = D({}, N.defaults, t)), T.parse(S.lex(e, t), t)
} catch (error){if(error.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||N.defaults).silent)return"<p>An error occurred:</p><pre>"+P(error.message+"",!0)+"</pre>";throw error}}
    }

G.exec = G, N.options = N.setOptions = function (e) {
      return D(N.defaults, e), N
    }, N.getDefaults = function () {
      return { baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: '', highlight: null, langPrefix: 'language-', mangle: !0, pedantic: !1, renderer: new I(), sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tables: !0, xhtml: !1 }
    }, N.defaults = N.getDefaults(), N.Parser = T, N.parser = T.parse, N.Renderer = I, N.TextRenderer = L, N.Lexer = S, N.lexer = S.lex, N.InlineLexer = O, N.inlineLexer = O.output, N.parse = N, N.escape = P, N.unescape = E; let F = N; let z = n(6); let W = n.n(z); function q(e, t) {
      if (!t) return e; let n = t && W.a.languages[t]; return n || (t = 'markup', n = W.a.languages.markup), W.a.highlight(e, n, t)
    }

 let V = function (e) {
      return /^https?:\/\//.test(e)
    };

 let J = function (e, t) {
return ((e = (e = e || ".").replace(/\/$/, "")) + t).replace(/^\.\//, "")
}; let Y = function (e) {
return e = e.replace(/^\/?/, "/"), /\.md$/.test(e) || (e = /\/$/.test(e) ? "".concat(e, "README.md"):''.concat(e, ".md")), e
}; let U = 'undefined' !== typeof window; function K(e, t) {
      return (function (e) {
if (Array.isArray(e)) return e
})(e) || (function (e, t) {
if (!(Symbol.iterator in new Object(e)) && "[object Arguments]" !== Object.prototype.toString.call(e)) return; var n = []; var r=!0; var i=!1; var s = void 0; try {
for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
} catch (error){i=!0,s=error} finally {
try {
r || null == a.return || a.return()
} finally {
if (i) throw s
}
} return n
})(e, t) || (function () {
throw new TypeError('Invalid attempt to destructure non-iterable instance')
})()
    }

 let Q = function (e) {
      var t = new F.Renderer(); var 
n = []; t.heading = function (e, t, r) {
        var i = this.options.env; let s = r.trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-').toLowerCase(); n.push(s); let o = n.filter((e=> {
          return e === s
        })).length; if (o > 1 && (s += '-'.concat(o)), t === 1) return i.title = e, ''; t === 2 && i.headings.push({ level: t, raw: r, text: r.replace(/<.*>\s*$/g, ''), slug: s }); let a = 'h'.concat(t); return '<'.concat(a, ' class="markdown-header" id="').concat(s, '">\n    <router-link class="header-anchor" :to="{hash:\'').concat(s, '\'}">\n      <svg class="anchor-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>\n    </router-link>\n    ').concat(e, '</').concat(a, '>')
      }, t.codespan = function (e) {
        return '<code v-pre>'.concat(e, '</code>')
      };

 let r = t.code; return t.code = function (e, t, n, i) {
        i = i || {}; let s = this.options.env; if (i.mixin) return s.mixins.push(e), ''; let o = r.call(this, e, t, n); if (i.interpolate || (o = o.replace(/^<pre>/, '<pre v-pre>')), i.highlight) {
          var a = e.split('\n').map(((e, t) => {
            t += 1; let n = i.highlight.some((e=> {
              if (typeof e==='number') return e === t; if (typeof e==='string') {
                var n = K(e.split('-').map(Number), 2); let r = n[0]; let i = n[1]; return t >= r && (!i || t <= i)
              }

 return !1
            })); let r = e ? F.escape(e) : '&#8203;'; return n ? '<span class="code-line highlighted">'.concat(r, '</span>') : '<span class="code-line">'.concat(r, '</span>')
          })).join(''); o += '<div'.concat(i.interpolate ? '':' v-pre', ' class="code-mask">').concat(a, '</div>')
        }

 return '<div data-lang="'.concat(t || '', '" class="pre-wrapper">').concat(o, '</div>')
      }, e.process('extendMarkedRenderer', t)
    };

 let X = n(7); let ee = n.n(X); let te = n(3); function ne(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function re(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

 let ie = { accentColor: '#009688', pageBackground: '#fff', headerBackground: '#fff', headerTextColor: 'var(--text-color)', textColor: '#000', linkColor: 'var(--accent-color)', sidebarWidth: '280px', sidebarBackground: 'var(--page-background)', sidebarLinkColor: '#444', sidebarLinkActiveColor: '#000', sidebarLinkArrowColor: '#999', mainBackground: 'var(--page-background)', borderColor: '#eaeaea', headerHeight: '55px', codeFont: 'SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace', tipColor: 'rgb(6, 125, 247)', successColor: '#42b983', warningColor: '#ff9800', dangerColor: 'rgb(255, 0, 31)', navLinkColor: '#2c3e50', navLinkBorderColor: 'var(--accent-color)', codeBlockBackground: '#011627', codeBlockTextColor: 'white', codeBlockShadowColor: '#333', codeBlockShadowWidth: '0px', highlightedLineBackground: '#022a4b', highlightedLineBorderColor: '#ffa7c4', inlineCodeColor: 'rgb(116, 66, 16)', inlineCodeBackground: 'rgb(254, 252, 191)', loaderPrimaryColor: '#f3f3f3', loaderSecondaryColor: '#ecebeb', tableHeaderBackground: '#fafafa', tableHeaderColor: '#666', docuteSelectHeight: '38px', searchIconColor: '#999', searchFocusBorderColor: '#ccc', searchFocusIconColor: '#333', searchResultHoverBackground: '#f9f9f9' }; let se = (function (e) {
for (let t = 1; t < arguments.length; t++) {
var n = null != arguments[t] ? arguments[t]:{}; t % 2 ? ne(n, !0).forEach(((t)=> {
re(e, t, n[t])
})):(Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})))} return e
})({}, ie, { headerBackground: 'var(--page-background)', sidebarLinkColor: 'var(--text-color)', sidebarLinkActiveColor: 'var(--text-color)', textColor: 'hsla(0,0%,100%,0.88)', pageBackground: '#2f3136', navLinkColor: 'var(--text-color)', borderColor: '#3e4147', highlightedLineBackground: '#022a4b', highlightedLineBorderColor: '#ffa7c4', inlineCodeColor: '#e6e6e6', inlineCodeBackground: '#373c49', loaderPrimaryColor: 'hsla(0, 0%, 100%, 0.08)', loaderSecondaryColor: 'hsla(0, 0%, 100%, 0.18)', contentLinkBorder: '2px solid hsla(0, 0%, 100%, 0.28)', contentLinkHoverBorderColor: 'currentColor', tableHeaderBackground: 'var(--border-color)', tableHeaderColor: '#868686', searchIconColor: '#999', searchFocusBorderColor: '#999', searchFocusIconColor: '#ccc', searchResultBackground: '#27292f', searchResultHoverBackground: '#1e2025' }); function oe(e) {
      return (function (e) {
if (Array.isArray(e)) {
for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n
}
})(e) || (function (e) {
if (Symbol.iterator in new Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
})(e) || (function () {
throw new TypeError('Invalid attempt to spread non-iterable instance')
})()
    }

 function ae(e, t, n, r, i, s, o) {
      try {
        var a = e[s](o); var l = a.value
      } catch (error) {
return void n(error)
      }

a.done ? t(l) : Promise.resolve(l).then(r, i)
    }

 function le(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function ce(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? le(n, !0).forEach((t=> {
          ue(e, t, n[t])
        })) : (Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):le(n).forEach(((t)=> {
Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
})))
}

 return e
    }

 function ue(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

a.a.use(_.a); let he = U && window.__DOCUTE_INITIAL_STATE__; let pe = function (e, t) {
var n = t.theme; var r = t.detectSystemDarkTheme; if (!U || !r) return n || "default"; var i = window.matchMedia('(prefers-color-scheme: dark)'); return i.addListener((()=> {
e.commit('SET_THEME', i.matches ? "dark":'default')
})), n || (i.matches ? "dark":'default')
}; var de = new _.a.Store({ state: ce({ originalConfig: {}, page: { title: null, headings: null, html: '' }, env: {}, showSidebar: !1, fetchingFile: !0 }, he), mutations: { SET_CONFIG (e) {
var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1]:{}; t.layout = t.layout || "narrow", t.centerContent && (t.layout = "narrow"), t.theme = pe(de, t), e.originalConfig = t
}, SET_PAGE (e, t) {
e.page = t
}, TOGGLE_SIDEBAR (e, t) {
e.showSidebar = "boolean" === typeof t ? t:!e.showSidebar
}, SET_FETCHING (e, t) {
e.fetchingFile = t
}, SET_ENV (e, t) {
e.env = t
}, SET_THEME (e, t) {
e.originalConfig.theme = t
} }, actions: { fetchFile: (function () {
var e; var t = (e = h.a.mark((function e(t, n) {
var r; var i; var s; var o; var a; var l; return h.a.wrap(((e)=> {
for (;;) switch (e.prev = e.next) {
case 0: return r = t.commit, i = t.getters, s = t.dispatch, r('TOGGLE_SIDEBAR', !1), r('SET_FETCHING', !0), (o = ce({ markdown: !0 }, i.config.routes && i.config.routes[n])).content || o.file || (a = Y(n), o.file = J(i.config.sourcePath, a), o.editLink = i.config.editLinkBase && J(i.config.editLinkBase, a)), e.next = 7, Promise.all([!o.content && fetch(o.file, i.config.fetchOptions).then(((e)=> {
return e.text()
})).then(((e)=> {
o.content = e
})), s('fetchPrismLanguages')]); case 7: return e.next = 9, f.processPromise('processMarkdown', o.content); case 9: return o.content = e.sent, e.next = 12, f.processPromise('processPage', o); case 12: return o = e.sent, l = { headings: [], mixins: [], config: i.config }, o.markdown && (o.content = F(o.content, { renderer: Q(f), highlight: q, env: l })), e.next = 17, f.processPromise('processHTML', o.content); case 17: o.content = e.sent, o.headings = l.headings, o.title || (o.title = l.title), r('SET_PAGE', o), r('SET_ENV', l), r('SET_FETCHING', !1); case 23: case "end": return e.stop()
}
}), e)
})), function () {
var t = this; var n = arguments; return new Promise(((r,i)=> {
var s = e.apply(t, n); function o(e) {
ae(s, r, i, o, a, "next", e)
} function a(e) {
ae(s, r, i, o, a, "throw", e)
}o(void 0)
}))
}); return function (e, n) {
return Reflect.apply(t, this, arguments)}
})(), fetchPrismLanguages (e) {
var t; var n; var r = e.getters.config.highlight; return r && 0 !== r.length ? (t = r.reduce(((e,t)=> {
return te[t] && (e = e.concat(te[t])), e.push(t), e
}), []).filter(((e,t,n)=> {
return n.indexOf(e) === t && -1 === te.builtin.indexOf(e)
})).map(((e)=> {
return "https://unpkg.com/prismjs@".concat('1.23.0', "/components/prism-").concat(e, ".js")
})), n = "prism-languages", new Promise(((e)=> {
if (ee.a.isDefined(n)) return e(); ee()(t, n, { success: e, error: function (t) {
console.error('Deps not found:', t), e()
} })
}))):Promise.resolve()
} }, getters: { target (e) {
var t = e.originalConfig.target; return t ? "#" === t[0] ? t.slice(1):t:'docute'}, languageOverrides (e) {
var t = e.originalConfig; var n = t.overrides || t.locales; return n && Object.keys(n).reduce(((e,t)=> {
return n[t].language && (e[t] = n[t]), e
}), {})
}, currentLocalePath (e, t) {
var n = e.route; var r = t.languageOverrides; if (r) for (let i = 0, s = Object.keys(r); i < s.length; i++) {
var o = s[i]; if ('/'!==o) if (new RegExp('^'.concat(o)).test(n.path)) return o
} return "/"
}, config (e, t) {
var n = e.originalConfig; var r=t.currentLocalePath; var i = t.languageOverrides; return i ? ce({}, n, {}, i[r]):n
}, homePaths (e, t) {
var n = t.languageOverrides; var r = n ? Object.keys(n):[]; return [].concat(oe(r), ['/'])
}, sidebarLinks (e, t) {
var n = t.sidebar; return n ? n.reduce(((e,t)=> {
var n = t.children || t.links || []; return [].concat(oe(e), oe(n))
}), []).filter(((e)=> {
return !V(e.link)
})):[]
}, sidebar (e, t) {
var n = t.config.sidebar || []; return "function" === typeof n ? n(de):n
}, cssVariables (e, t) {
var n = t.config; return ce({}, "dark" === n.theme ? se:ie, {}, "function" === typeof n.cssVariables ? n.cssVariables(n.theme):n.cssVariables)
} } }); let fe = de; let ge = n(9); let me = n(38); let ke = function () {
      var e; let t = this; let n = t.$createElement; let r = t._self._c || n; return r('div', { staticClass: 'Page', class: (e = {}, e['layout-' + t.$store.getters.config.layout] = !0, e) }, [r('SiteHeader'), t._v(' '), r('div', { staticClass: 'Wrap' }, [r('Sidebar'), t._v(' '), r('SidebarMask'), t._v(' '), r('div', { staticClass: 'Main' }, [t.$store.state.fetchingFile ? r('div', { staticClass: 'Content' }, [r('content-loader', { attrs: { height: 160, width: 400, speed: 2, primaryColor: t.$store.getters.cssVariables.loaderPrimaryColor, secondaryColor: t.$store.getters.cssVariables.loaderSecondaryColor } }, [r('rect', { attrs: { x: '0', y: '5', rx: '4', ry: '4', width: '117', height: '6.4' } }), t._v(' '), r('rect', { attrs: { x: '0', y: '25', rx: '3', ry: '3', width: '85', height: '6.4' } }), t._v(' '), r('rect', { attrs: { x: '0', y: '60', rx: '3', ry: '3', width: '350', height: '6.4' } }), t._v(' '), r('rect', { attrs: { x: '0', y: '80', rx: '3', ry: '3', width: '380', height: '6.4' } }), t._v(' '), r('rect', { attrs: { x: '0', y: '100', rx: '3', ry: '3', width: '201', height: '6.4' } })])], 1) : r('div', { staticClass: 'Content' }, [r('InjectedComponents', { attrs: { position: 'content:start' } }), t._v(' '), t.pageTitle ? r(t.MarkdownTitle, { tag: 'component', staticClass: 'page-title' }) : t._e(), t._v(' '), r(t.PageContent, { tag: 'component', class: { 'has-page-title': t.pageTitle } }), t._v(' '), r('EditLink'), t._v(' '), r('PrevNextLinks'), t._v(' '), r('InjectedComponents', { attrs: { position: 'content:end' } })], 1)])], 1)], 1)
    };

 ke._withStripped = !0; let be = n(39); let ve = n(40); let ye = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('div', { staticClass: 'Sidebar', class: { isShown: e.$store.state.showSidebar } }, [n('InjectedComponents', { attrs: { position: 'sidebar:start' } }), e._v(' '), n('InjectedComponents', { attrs: { position: 'mobile-sidebar:start' } }), e._v(' '), e.$store.getters.config.nav ? n('HeaderNav', { staticClass: 'mobile-header-nav', attrs: { nav: e.$store.getters.config.nav } }) : e._e(), e._v(' '), n('div', { staticClass: 'SidebarItems' }, e._l(e.$store.getters.sidebar, ((t, r) => {
        return n('sidebar-item', { key: r, attrs: { item: t, open: e.closedItems.indexOf(r) === -1 }, on: { toggle (t) {
return e.toggleItem(r)
} } })
      })), 1), e._v(' '), n('InjectedComponents', { attrs: { position: 'sidebar:end' } }), e._v(' '), n('InjectedComponents', { attrs: { position: 'sidebar:post-end' } })], 1)
    };

 ye._withStripped = !0; let _e = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('div', { staticClass: 'header-nav' }, e._l(e.nav, ((t, r) => {
        return n('div', { key: r, staticClass: 'header-nav-item' }, [t.children ? n('div', { staticClass: 'dropdown-wrapper' }, [n('span', { staticClass: 'dropdown-trigger' }, [e._v('\n        ' + e._s(t.title) + '\n        '), n('span', { staticClass: 'arrow' })]), e._v(' '), t.children ? n('ul', { staticClass: 'dropdown-list' }, e._l(t.children, ((t, r) => {
          return n('li', { key: r, staticClass: 'dropdown-item' }, [n('uni-link', { attrs: { to: t.link, openInNewTab: t.openInNewTab, externalLinkIcon: !1 } }, [e._v(e._s(t.title))])], 1)
        })), 0) : e._e()]) : e._e(), e._v(' '), t.children ? e._e() : n('uni-link', { attrs: { to: t.link, openInNewTab: t.openInNewTab, externalLinkIcon: !1 } }, [e._v(e._s(t.title))])], 1)
      })), 0)
    };

 function xe(e) {
      return (function (e) {
if (Array.isArray(e)) {
for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n
}
})(e) || (function (e) {
if (Symbol.iterator in new Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
})(e) || (function () {
throw new TypeError('Invalid attempt to spread non-iterable instance')
})()
    }

 function we(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function Ce(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? we(n, !0).forEach((t=> {
          je(e, t, n[t])
        })) : (Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):we(n).forEach(((t)=> {
Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
})))
}

 return e
    }

 function je(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

_e._withStripped = !0; let Se = { functional: !0, props: ['openInNewTab', 'externalLinkIcon'], render (e, t) {
var n = t.data; var r=t.children; var i=t.props; var s=i.openInNewTab; var o=i.externalLinkIcon; var a=Ce({},n.attrs); var l = a.to; return V(l) ? (delete a.to, delete a.prefetchFiles, e('a', Ce({}, n, { class: [n.class, "is-external-link"], attrs: Ce({}, a, { href: l, target: !1 === s ? "_self":'_blank'}) }), [].concat(xe(r), [!1 === s || !1 === o ? null:e('external-link-icon', { class: "external-link-icon" })]))):e('router-link', n, r)
} }; let Ae = (n(49), new Object(b.a)(Se, void 0, void 0, !1, null, null, null)); Ae.options.__file = 'src/components/UniLink.vue'; let Oe = Ae.exports; let Ie = { components: { UniLink: Oe }, props: { nav: { type: Array, required: !0 } }, methods: { isExternalLink: V } }; let Le = (n(50), new Object(b.a)(Ie, _e, [], !1, null, '257c8456', null)); Le.options.__file = 'src/components/HeaderNav.vue'; let Te = Le.exports; let Pe = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('div', { class: ['SidebarItem', e.item.title && 'hasTitle'] }, [e.item.title && e.children ? n('div', { staticClass: 'ItemTitle', class: { collapsable: !1 !== e.item.collapsable }, on: { click (t) {
return e.$emit('toggle')
} } }, [!1 !== e.item.collapsable ? n('span', { staticClass: 'arrow', class: { open: e.open } }, [n('svg', { attrs: { width: '6', height: '10', viewBox: '0 0 6 10', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' } }, [n('path', { attrs: { d: 'M1.4 8.56L4.67 5M1.4 1.23L4.66 4.7', stroke: 'currentColor', 'stroke-linecap': 'square' } })])]) : e._e(), e._v(' '), n('span', [e._v(e._s(e.item.title))])]) : e._e(), e._v(' '), e.item.title && e.item.link ? n('uni-link', { staticClass: 'ItemLink', class: { active: e.$route.path === e.item.link }, attrs: { to: e.item.link } }, [e._v(e._s(e.item.title))]) : e._e(), e._v(' '), e.item.title && e.item.link ? n('div', { staticClass: 'ItemLinkToc' }, [n('PageToc', { attrs: { link: e.item } })], 1) : e._e(), e._v(' '), e.children && (e.open || !1 === e.item.collapsable) ? n('div', { staticClass: 'ItemChildren' }, e._l(e.children, ((t, r) => {
        return n('div', { key: r, staticClass: 'ItemChild' }, [n('uni-link', { staticClass: 'ItemChildLink', class: { active: e.$route.path === t.link }, attrs: { to: t.link, openInNewTab: t.openInNewTab, prefetchFiles: e.getPrefetchFiles(t.link) } }, [e._v(e._s(t.title))]), e._v(' '), n('PageToc', { attrs: { link: t } }), e._v(' '), t.children ? n('sidebar-item', { attrs: { item: t, open: e.closedItems.indexOf(r) === -1 }, on: { toggle (t) {
return e.toggleItem(r)
} } }) : e._e()], 1)
      })), 0) : e._e()], 1)
    };

 Pe._withStripped = !0; let Ee = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return !e.$store.state.fetchingFile && !1 !== e.link.toc && e.link.link === e.$route.path && e.$store.state.page.headings && e.$store.state.page.headings.length > 0 ? n('div', { staticClass: 'PageToc' }, e._l(e.$store.state.page.headings, (t=> {
        return n('router-link', { key: t.slug, staticClass: 'PageTocHeading', attrs: { to: { hash: t.slug }, 'data-level': t.level }, domProps: { innerHTML: e._s(t.text) } })
      })), 1) : e._e()
    };

 Ee._withStripped = !0; let Re = { props: { link: { type: Object, required: !0 } } }; let $e = (n(51), new Object(b.a)(Re, Ee, [], !1, null, '0baf15b9', null)); $e.options.__file = 'src/components/PageToc.vue'; let Me = { components: { UniLink: Oe, PageToc: $e.exports }, props: { item: { type: Object, required: !0, default () {
return {}
} }, open: { type: Boolean, required: !1, default () {
return !0
} } }, computed: { children () {
return this.item.children || this.item.links
} }, methods: { isExternalLink: V, getPrefetchFiles (e) {
var t = this.$store.getters.config; var n=t.sourcePath; var r = t.routes; if (r && r[e]) {
var i = r[e].file; return i ? [i]:[]
} var s = Y(e); var o = J(n, s); return o ? [o]:[]
}, getLinkTarget (e) {
return V(e) && !1 !== e.openInNewTab ? "_blank":'_self'} } }; let Be = (n(52), new Object(b.a)(Me, Pe, [], !1, null, '07f04b0f', null)); Be.options.__file = 'src/components/SidebarItem.vue'; let Ge = { components: { HeaderNav: Te, SidebarItem: Be.exports }, data () {
return { closedItems: [] }
}, watch: { '$route.path': { handler () {
var e = this.getCurrentIndex(this.$route.path, this.$store.getters.sidebar); this.openItem(e)
}, immediate: !0 } }, methods: { openItem (e) {
this.closedItems.indexOf(e) > -1 && (this.closedItems = this.closedItems.filter(((t)=> {
return t !== e
})))
}, toggleItem (e) {
-1 === this.closedItems.indexOf(e) ? this.closedItems.push(e):this.closedItems = this.closedItems.filter(((t)=> {
return t !== e
}))
}, getCurrentIndex (e, t) {
for (let n = 0; n < t.length; n++) if (this.getChildren(t[n]).some(((t)=> {
return t.link === e
}))) return n; return 0
}, getChildren (e) {
return e.children || e.links || []
} } }; let De = (n(53), new Object(b.a)(Ge, ye, [], !1, null, '7d622f5c', null)); De.options.__file = 'src/components/Sidebar.vue'; let Ze = De.exports; let He = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return e.$store.state.showSidebar ? n('div', { staticClass: 'SidebarMask', on: { click (t) {
return e.$store.commit('TOGGLE_SIDEBAR', !1)
} } }) : e._e()
    };

 He._withStripped = !0; n(54); let Ne = new Object(b.a)({}, He, [], !1, null, '5bb37b30', null); Ne.options.__file = 'src/components/SidebarMask.vue'; let Fe = Ne.exports; let ze = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('header', { staticClass: 'Header' }, [n('div', { staticClass: 'Wrap' }, [n('div', { staticClass: 'header-inner' }, [n('div', { staticClass: 'header-left' }, [n('h1', { staticClass: 'site-title' }, [n('SidebarToggle'), e._v(' '), n('router-link', { attrs: { to: '/' } }, [n(e.Logo, { tag: 'component' })], 1)], 1), e._v(' '), e.leftNav ? n('HeaderNav', { attrs: { nav: e.leftNav } }) : e._e()], 1), e._v(' '), n('div', { staticClass: 'header-right' }, [n('InjectedComponents', { attrs: { position: 'header-right:start' } }), e._v(' '), e.rightNav ? n('HeaderNav', { attrs: { nav: e.rightNav } }) : e._e(), e._v(' '), n('InjectedComponents', { attrs: { position: 'header-right:end' } })], 1)])])])
    };

 ze._withStripped = !0; let We = function () {
      var e = this.$createElement; let t = this._self._c || e; return t('span', { staticClass: 'sidebar-toggle', on: { click: this.toggleSidebar } }, [t('svg', { attrs: { 'aria-hidden': 'true', role: 'img', viewBox: '0 0 448 512' } }, [t('path', { attrs: { fill: 'currentColor', d: 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z' } })])])
    };

 We._withStripped = !0; let qe = { methods: { toggleSidebar () {
this.$store.commit('TOGGLE_SIDEBAR')
} }, watch: { '$store.state.showSidebar': function (e) {
      document.body.style.overflow = e ? 'hidden':'initial'
} } }; let Ve = (n(55), new Object(b.a)(qe, We, [], !1, null, '61f559d0', null)); function Je(e) {
      return (Je = 'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol':typeof e
      })(e)
    }

Ve.options.__file = 'src/components/SidebarToggle.vue'; let Ye = { components: { HeaderNav: Te, SidebarToggle: Ve.exports }, computed: { leftNav () {
var e = this.$store.getters.config.nav; return e && e.filter(((e)=> {
return "left" === e.position
}))
}, rightNav () {
var e = this.$store.getters.config.nav; return e && e.filter(((e)=> {
return "right" === e.position || !e.position
}))
}, Logo () {
var e = this.$store.getters.config; var t=e.title; var n = e.logo; return "string" === typeof n ? { template: n }:'object'===Je(n) ? n:{ render: function (e) {
return e('span', null, [t])
} }
} } }; let Ue = (n(56), new Object(b.a)(Ye, ze, [], !1, null, '61dd7a3d', null)); Ue.options.__file = 'src/components/Header.vue'; let Ke = Ue.exports; let Qe = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return e.prevLinkItem || e.nextLinkItem ? n('div', { staticClass: 'prev-next-links' }, [e.prevLinkItem ? n('div', { staticClass: 'prev-link' }, [n('router-link', { attrs: { to: e.prevLinkItem.link } }, [e._v('\n      \u2190 ' + e._s(e.prevLinkItem.title) + '\n    ')])], 1) : e._e(), e._v(' '), e.nextLinkItem ? n('div', { staticClass: 'next-link' }, [n('router-link', { attrs: { to: e.nextLinkItem.link } }, [e._v('\n      ' + e._s(e.nextLinkItem.title) + ' \u2192\n    ')])], 1) : e._e()]) : e._e()
    };

 function Xe(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function et(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

Qe._withStripped = !0; let tt = { computed: (function (e) {
for (let t = 1; t < arguments.length; t++) {
var n = null != arguments[t] ? arguments[t]:{}; t % 2 ? Xe(n, !0).forEach(((t)=> {
et(e, t, n[t])
})):(Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})))} return e
})({}, new Object(_.b)(['sidebarLinks']), { currentLink () {
return this.$route.path
}, currentLinkIndex () {
for (let e = this.sidebarLinks, t = 0; t < e.length; t++) {
if (e[t].link === this.currentLink) return t
} return !1
}, prevLinkItem () {
return "number" === typeof this.currentLinkIndex ? this.sidebarLinks[this.currentLinkIndex - 1]:null
}, nextLinkItem () {
return "number" === typeof this.currentLinkIndex ? this.sidebarLinks[this.currentLinkIndex + 1]:null
} }) }; let nt = (n(57), new Object(b.a)(tt, Qe, [], !1, null, '3685fe13', null)); nt.options.__file = 'src/components/PrevNextLinks.vue'; let rt = nt.exports; let it = function () {
      var e = this.$createElement; let t = this._self._c || e; return this.editLink ? t('div', { staticClass: 'EditLink' }, [t('a', { attrs: { target: '_blank', href: '' + this.editLink } }, [t('svg', { staticClass: 'icon', attrs: { id: 'i-compose', viewBox: '0 0 32 32', width: '32', height: '32', fill: 'none', stroke: 'currentcolor', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2' } }, [t('path', { attrs: { d: 'M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z' } })]), this._v('\n    ' + this._s(this.editLinkText) + '\n  ')])]) : this._e()
    };

 it._withStripped = !0; let st = { computed: { editLink () {
return this.$store.state.page.editLink
}, editLinkText () {
return this.$store.getters.config.editLinkText || "Edit this page"
} } }; let ot = (n(58), new Object(b.a)(st, it, [], !1, null, '06666b54', null)); ot.options.__file = 'src/components/EditLink.vue'; let at = ot.exports; function lt(e) {
      return (function (e) {
if (Array.isArray(e)) {
for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n
}
})(e) || (function (e) {
if (Symbol.iterator in new Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
})(e) || (function () {
throw new TypeError('Invalid attempt to spread non-iterable instance')
})()
    }

 function ct(e, t, n, r, i, s, o) {
      try {
        var a = e[s](o); var l = a.value
      } catch (error) {
return void n(error)
      }

a.done ? t(l) : Promise.resolve(l).then(r, i)
    }

 function ut(e) {
      return function () {
        var t = this; let n = arguments; return new Promise(((r, i) => {
          var s = e.apply(t, n); function o(e) {
            ct(s, r, i, o, a, 'next', e)
          }

 function a(e) {
            ct(s, r, i, o, a, 'throw', e)
          }

o(void 0)
        }))
      }
    }

 let ht = { name: 'PageHome', components: { ContentLoader: ve.a, Sidebar: Ze, SidebarMask: Fe, SiteHeader: Ke, PrevNextLinks: rt, EditLink: at }, serverPrefetch: (function () {
var e = ut(h.a.mark((function e() {
return h.a.wrap((function (e) {
for (;;) switch (e.prev = e.next) {
case 0: return e.next = 2, this.fetchFile(this.$route.path); case 2: this.setTitle(); case 3: case "end": return e.stop()
}
}), e, this)
}))); return function () {
return Reflect.apply(e, this, arguments)}
})(), mounted () {
window.__DOCUTE_INITIAL_STATE__ || this.fetchFile(this.$route.path).then(this.setInitialState)
}, beforeRouteUpdate (e, t, n) {
n(), e.path !== t.path && this.fetchFile(e.path)
}, watch: { '$route.hash': function () {
      var e = this; this.$nextTick((() => {
        e.jumpToHash()
      }))
    }, pageTitle () {
this.setTitle()
} }, computed: { pageTitle () {
return this.$store.state.page.title
}, MarkdownTitle () {
return { name: "MarkdownTitle", template: "<h1>".concat(this.pageTitle, "</h1>") }
}, PageContent () {
var e = this.$store.state.env; var t=this.$store.getters.config.componentMixins; var n = { mixins: [].concat(lt(void 0 === t ? []:t), lt(e.mixins.map(((e)=> {
return new Function('Vue', "return ".concat(e.trim()))(a.a)
})))), name: "PageContent", template: '<div class="page-content">'.concat(this.$store.state.page.content, "</div>") }; return f.process('extendMarkdownComponent', n), n
} }, methods: { fetchFile: (function () {
var e = ut(h.a.mark((function e(t) {
return h.a.wrap((function (e) {
for (;;) switch (e.prev = e.next) {
case 0: return e.next = 2, this.$store.dispatch('fetchFile', t); case 2: return f.invoke('onContentWillUpdate', this), e.next = 5, this.$nextTick(); case 5: f.invoke('onContentUpdated', this), this.jumpToHash(); case 7: case "end": return e.stop()
}
}), e, this)
}))); return function (t) {
return Reflect.apply(e, this, arguments)}
})(), jumpToHash () {
var e = decodeURI(this.$route.hash); if (e) {
var t = document.querySelector(e); if (t) {
var n = document.querySelector('.Header'); Object(be.a)(t, { a11y: !0, duration: 0, offset: -(n.clientHeight + 30) })
}
}
}, setInitialState () {
if (/(prerender|jsdom|phantomjs)/i.test(navigator.userAgent)) {
var e = document.createElement('script'); e.textContent = "window.".concat('__DOCUTE_INITIAL_STATE__', " = ").concat(JSON.stringify({ page: this.$store.state.page, env: this.$store.state.env, fetchingFile: !1 })), document.head.appendChild(e)
}
}, setTitle () {
var e = this.$route.path; var t=this.$store.getters; var n=t.config; var r = t.homePaths.indexOf(e) > -1 ? n.title:''.concat(this.pageTitle, " - ").concat(n.title); r = r.replace(/<[.\n]*?>/gm, ""), this.$ssrContext ? this.$ssrContext.title = r:document.title = r
} } }; let pt = (n(59), n(60), n(61), new Object(b.a)(ht, ke, [], !1, null, 'fae5bece', null)); pt.options.__file = 'src/views/Home.vue'; let dt = pt.exports; function ft(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function gt(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

a.a.use(ge.a), a.a.use(me.a); let mt = function (e) {
      return new ge.a((function (e) {
for (let t = 1; t < arguments.length; t++) {
var n = null != arguments[t] ? arguments[t]:{}; t % 2 ? ft(n, !0).forEach(((t)=> {
gt(e, t, n[t])
})):(Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ft(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})))} return e
})({ scrollBehavior (e, t, n) {
return n || { x: 0, y: 0 }
} }, e, { routes: [{ path: '*', component: dt }] }))
    };

 let kt = function (e) {
return { functional: !0, render: function (t, n) {
return t(e, n.data, n.children)
} }
}; let bt = function () {
      var e = this.$createElement; let t = this._self._c || e; return t('div', { staticClass: 'ImageZoom', class: { 'with-border': this.border } }, [t('img', { ref: 'img', attrs: { src: this.imageURL, alt: this.alt, width: this.width, title: this.title } })])
    };

 bt._withStripped = !0; let vt = { name: 'ImageZoom', props: { url: { type: String }, src: { type: String }, alt: { type: String }, border: { type: Boolean, default: !0 }, width: { type: [String, Number] }, title: { type: String } }, computed: { imageURL () {
return this.src || this.url
} }, mounted () {
(0, n(62).default)(this.$refs.img, {})
} }; let yt = (n(63), new Object(b.a)(vt, bt, [], !1, null, '5a5f7cce', null)); yt.options.__file = 'src/components/ImageZoom.vue'; let _t = yt.exports; let xt = function (e, t) {
      return (0, t._c)('span', { class: ['badge', 'is-' + t.props.type], style: { backgroundColor: t.props.color } }, [t._t('default')], 2)
    };

 xt._withStripped = !0; let wt = { name: 'Badge', props: { type: { type: String }, color: { type: String } } }; let Ct = (n(64), new Object(b.a)(wt, xt, [], !0, null, null, null)); Ct.options.__file = 'src/components/Badge.vue'; let jt = Ct.exports; let St = function () {
      var e = this.$createElement; let t = this._self._c || e; return t('div', { staticClass: 'DocuteSelect' }, [t('select', { staticClass: 'select', domProps: { value: this.value }, on: { change: this.handleChange } }, [this._t('default', null, null, { value: this.value })], 2), this._v(' '), t('div', { staticClass: 'arrow' }, [t('svg', { attrs: { width: '13', height: '6', xmlns: 'http://www.w3.org/2000/svg', fill: 'none', stroke: '#979797', 'fill-rule': 'evenodd', 'stroke-linecap': 'square' } }, [t('path', { attrs: { d: 'M1.367.375l5.185 5.303M11.685.375L6.5 5.678' } })])])])
    };

 St._withStripped = !0; let At = { name: 'DocuteSelect', model: { event: 'change' }, props: ['value'], methods: { handleChange (e) {
this.$emit('change', e.target.value)
} } }; let Ot = (n(65), new Object(b.a)(At, St, [], !1, null, '144beb3a', null)); Ot.options.__file = 'src/components/DocuteSelect.vue'; let It = Ot.exports; let Lt = function (e, t) {
      var n = t._c; return n('div', { class: ['note', 'is-' + t.props.type] }, [t.props.label ? n('span', { staticClass: 'note-label' }, [t._v(t._s(!0 === t.props.label ? t.props.type : t.props.label) + ':')]) : t._e(), t._v(' '), t._t('default')], 2)
    };

 Lt._withStripped = !0; let Tt = { name: 'Note', props: { type: { type: String, default: 'note' }, label: { type: [String, Boolean], default: !0 } } }; let Pt = (n(66), new Object(b.a)(Tt, Lt, [], !0, null, null, null)); Pt.options.__file = 'src/components/Note.vue'; let Et = Pt.exports; let Rt = function () {
      var e = this.$createElement; let t = this._self._c || e; return this.html ? t('div', { domProps: { innerHTML: this._s(this.html) } }) : t('Loading')
    };

 Rt._withStripped = !0; let $t = { name: 'Gist', props: { id: { type: String, required: !0 } }, data () {
return { html: "" }
}, mounted () {
var e = this; window['gist_callback_'.concat(this.id)] = function (t) {
var n = document.createElement('link'); n.href = t.stylesheet, n.rel = "stylesheet", document.head.appendChild(n), e.html = t.div
}; var t = document.createElement('script'); t.src = "https://gist.github.com/egoist/".concat(this.id, ".json?callback=gist_callback_").concat(this.id), document.head.appendChild(t)
} }; let Mt = (n(67), new Object(b.a)($t, Rt, [], !1, null, null, null)); Mt.options.__file = 'src/components/Gist.vue'; let Bt = Mt.exports; let Gt = function (e, t) {
      t._c; return t._m(0)
    };

 Gt._withStripped = !0; let Dt = { name: 'Loading' }; let Zt = (n(68), new Object(b.a)(Dt, Gt, [function (e, t) {
      var n = t._c; return n('div', { staticClass: 'loading' }, [n('div', { staticClass: 'dots' }, [n('span'), t._v(' '), n('span'), t._v(' '), n('span')]), t._v(' '), n('span', { staticClass: 'loading-text' }, [t._v('Loading Gist')])])
    }], !0, null, 'efe9d588', null)); Zt.options.__file = 'src/components/Loading.vue'; let Ht = Zt.exports; let Nt = function (e, t) {
      var n = t._c; return n('svg', t._g(t._b({ class: [t.data.staticClass, t.data.class], attrs: { xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': 'true', viewBox: '0 0 100 100', width: '15', height: '15' } }, 'svg', t.data.attrs, !1), t.data.on), [n('path', { attrs: { fill: 'currentColor', d: 'M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z' } }), t._v(' '), n('polygon', { attrs: { fill: 'currentColor', points: '45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9' } })])
    };

 Nt._withStripped = !0; let Ft = { name: 'ExternalLinkIcon' }; let zt = new Object(b.a)(Ft, Nt, [], !0, null, null, null); zt.options.__file = 'src/components/icons/ExternalLinkIcon.vue'; let Wt = zt.exports; let qt = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('div', { staticClass: 'LanguageSelector' }, [n('DocuteSelect', { attrs: { value: e.$store.getters.currentLocalePath }, on: { change: e.handleChange }, scopedSlots: e._u([{ key: 'default', fn (t) {
var r = t.value; return e._l(e.languages, ((t)=> {
return n('option', { key: t.path, domProps: { value: t.path, selected: r === t.path } }, [e._v(e._s(t.language))])
}))
} }]) })], 1)
    };

 qt._withStripped = !0; let Vt = { computed: { languages () {
var e = this.$store.getters.languageOverrides; return Object.keys(e).map(((t)=> {
return { path: t, language: e[t].language }
}))
} }, methods: { handleChange (e) {
var t = this.$route.path.replace(new RegExp('^'.concat(this.$store.getters.currentLocalePath)), e); this.$router.push(t)
} } }; let Jt = (n(69), new Object(b.a)(Vt, qt, [], !1, null, '83d686e0', null)); Jt.options.__file = 'src/plugins/i18n/LanguageSelector.vue'; let Yt = Jt.exports; let Ut = { name: "i18n", extend: function (e) {
e.store.getters.languageOverrides && e.registerComponent('sidebar:start', Yt)
} }; let Kt = { name: "hoistTags", extend: function (e) {
e.extendMarkedRenderer(((e)=> {
var t = /^<(script|style)(?=(\s|>|$))/i; e.html = function (e) {
return e = e.trim(), t.test(e) ? e.replace(/^<(script|style)/, "<v-$1").replace(/<\/(script|style)>$/, "</v-$1>"):e
}
}))
} }; let Qt = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return n('div', { staticClass: 'VersionsSelector' }, [n('DocuteSelect', { attrs: { value: e.currentVersionLink }, on: { change: e.handleChange }, scopedSlots: e._u([{ key: 'default', fn (t) {
var r = t.value; return e._l(e.$store.getters.config.versions, ((t,i)=> {
return n('option', { key: i, domProps: { value: t.link, selected: r === t.link } }, [e._v('\n      '+e._s(i) + "\n    ")])
}))
} }]) })], 1)
    };

 Qt._withStripped = !0; let Xt = { methods: { handleChange (e) {
V(e) ? location.href = e:this.$router.push(e)
} }, computed: { currentVersionLink () {
for (let e = this.$store.getters.config.versions, t = 0, n = Object.keys(e); t < n.length; t++) {
var r = e[n[t]].link; if ('/'!==r && this.$route.path.startsWith(r)) return r
} return "/"
} } }; let en = (n(70), new Object(b.a)(Xt, Qt, [], !1, null, '38649ef6', null)); en.options.__file = 'src/plugins/versions/VersionsSelector.vue'; let tn = en.exports; let nn = { name: "versions", extend: function (e) {
e.store.getters.config.versions && e.registerComponent('sidebar:start', tn)
} }; let rn = function (e, t) {
return "string" === typeof e ? { template: '<div class="'.concat(t, '">').concat(e, "</div>") }:e
}; let sn = { name: "banner-footer", extend: function (e) {
var t = e.store.getters.config; var n=t.banner; var r = t.footer; n && e.registerComponent('content:start', rn(n, "docute-banner")), r && e.registerComponent('content:end', rn(r, "docute-footer"))
} }; let on = function () {
      var e = this.$createElement; let t = this._self._c || e; return t('div', { staticClass: 'dark-theme-toggler' }, [t('div', { staticClass: 'toggle', class: { checked: this.dark }, on: { click: this.handleChange } }, [this._m(0), this._v(' '), t('div', { staticClass: 'toggle-thumb' })]), this._v(' '), t('input', { staticClass: 'toggler-screen-reader-only', attrs: { type: 'checkbox', 'aria-label': 'Switch between Dark and Default theme' }, domProps: { checked: this.dark } })])
    };

 on._withStripped = !0; let an = { data () {
var e = localStorage.getItem('docute:theme'); return { dark: "dark" in this.$route.query || ('dark'===e || "default" !== e && "dark" === this.$store.getters.config.theme) }
}, created () {
this.$store.commit('SET_THEME', this.dark ? "dark":'default')
}, methods: { handleChange () {
var e = this.$store.getters.config.theme; this.dark = !this.dark, this.$store.commit('SET_THEME', this.dark ? "dark":'dark'===e ? "default":e), localStorage.setItem('docute:theme', this.dark ? "dark":'default')
} } }; let ln = (n(71), new Object(b.a)(an, on, [function () {
      var e = this.$createElement; let t = this._self._c || e; return t('div', { staticClass: 'toggle-track' }, [t('div', { staticClass: 'toggle-track-check' }, [t('img', { staticStyle: { 'pointer-events': 'none' }, attrs: { src: 'data:image/png;base64,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', width: '16', height: '16', role: 'presentation' } })]), this._v(' '), t('div', { staticClass: 'toggle-track-x' }, [t('img', { staticStyle: { 'pointer-events': 'none' }, attrs: { src: 'data:image/png;base64,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', width: '16', height: '16', role: 'presentation' } })])])
    }], !1, null, '52e50d1f', null)); ln.options.__file = 'src/plugins/dark-theme-toggler/DarkThemeToggler.vue'; let cn = ln.exports; let un = { name: "dark-theme-toggler", extend: function (e) {
var t = e.store.getters.config.darkThemeToggler; !0 === t ? e.registerComponent('sidebar:post-end', cn):'sidebar'===t && (e.registerComponent('header-right:start', cn), e.registerComponent('mobile-sidebar:start', cn))
} }; let hn = function () {
      var e = this; let t = e.$createElement; let n = e._self._c || t; return e.enabled ? n('div', { staticClass: 'search', class: { 'is-focused': e.focused } }, [n('div', { staticClass: 'search-input-wrapper' }, [n('span', { staticClass: 'search-icon' }, [n('svg', { attrs: { width: '13', height: '13', viewBox: '0 0 13 13', xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor' } }, [n('path', { attrs: { d: 'M8.87 8.16l3.25 3.25-.7.71-3.26-3.25a5 5 0 1 1 .7-.7zM5 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' } })])]), e._v(' '), n('input', { staticClass: 'search-input', attrs: { type: 'text' }, on: { input: e.handleSearch, focus (t) {
return e.toggleFocus(!0)
} } }), e._v(' '), n('div', { directives: [{ name: 'show', rawName: 'v-show', value: e.result.length > 0, expression: 'result.length > 0' }], ref: 'result', staticClass: 'search-result' }, e._l(e.result, ((t, r) => {
        return n('router-link', { key: r, staticClass: 'search-result-item', attrs: { to: t.link } }, [n('div', { staticClass: 'item-header' }, [n('div', { staticClass: 'item-title', domProps: { innerHTML: e._s(t.title) } }), e._v(' '), t.label ? n('span', { staticClass: 'item-label' }, [e._v(e._s(t.label))]) : e._e()]), e._v(' '), n('div', { staticClass: 'item-desc', domProps: { innerHTML: e._s(t.description) } })])
      })), 1)])]) : e._e()
    };

 hn._withStripped = !0; let pn = n(41); function dn(e, t, n, r, i, s, o) {
      try {
        var a = e[s](o); var l = a.value
      } catch (error) {
return void n(error)
      }

a.done ? t(l) : Promise.resolve(l).then(r, i)
    }

 let fn = { data () {
return { result: [], focused: !1 }
}, watch: { '$route.fullPath': function () {
      this.focused = !1
    } }, mounted () {
document.addEventListener('click', this.handleClick)
}, beforeDestroy () {
document.removeEventListener('click', this.handleClick)
}, computed: { enabled () {
return this.$pluginApi.search.enabled
} }, methods: { handleClick (e) {
this.$el.contains(e.target) && !this.$refs.result.contains(e.target) || (this.focused = !1)
}, handleSearch: new Object(pn.a)(300, (function () {
var e; var t = (e = h.a.mark((function e(t) {
var n; return h.a.wrap((function (e) {
for (;;) switch (e.prev = e.next) {
case 0: return n = this.$pluginApi.search.handler, e.next = 3, n(t.target.value); case 3: this.result = e.sent; case 4: case "end": return e.stop()
}
}), e, this)
})), function () {
var t = this; var n = arguments; return new Promise(((r,i)=> {
var s = e.apply(t, n); function o(e) {
dn(s, r, i, o, a, "next", e)
} function a(e) {
dn(s, r, i, o, a, "throw", e)
}o(void 0)
}))
}); return function (e) {
return Reflect.apply(t, this, arguments)}
})()), toggleFocus (e) {
this.focused = e
} } }; let gn = (n(72), new Object(b.a)(fn, hn, [], !1, null, '62e6ed28', null)); gn.options.__file = 'src/plugins/search/SearchBar.vue'; let mn = gn.exports; let kn = { name: 'search', extend (e) {
e.registerComponent('header-right:start', mn)
} }; function bn(e) {
      return (function (e) {
if (Array.isArray(e)) {
for (var t = 0, n = new Array(e.length); t < e.length; t++)n[t] = e[t]; return n
}
})(e) || (function (e) {
if (Symbol.iterator in new Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
})(e) || (function () {
throw new TypeError('Invalid attempt to spread non-iterable instance')
})()
    }

 function vn(e, t) {
      var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e); t && (r = r.filter((t=> {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }

 return n
    }

 function yn(e) {
      for (let t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {}; t % 2 ? vn(n, !0).forEach((t=> {
          _n(e, t, n[t])
        })) : (Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):vn(n).forEach(((t)=> {
Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
})))
}

 return e
    }

 function _n(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e
    }

 function xn(e, t) {
      if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    }

 function wn(e, t) {
      for (const r of t) {
 r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
      }
    }

a.a.component(_t.name, _t), a.a.component(jt.name, jt), a.a.component(It.name, It), a.a.component(Et.name, Et), a.a.component(Wt.name, Wt), a.a.component(Bt.name, Bt), a.a.component(Ht.name, Ht), a.a.use((e=> {
      e.component('v-style', kt('style')), e.component('v-script', kt('script'))
    })), a.a.mixin({ created () {
var e = this.$options.pluginApi || this.$root.$pluginApi; e && (this.$pluginApi = e)
} }); let Cn = (function () {
function e() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0]:{}; xn(this, e); var n = mt(t.router); Object(l.sync)(fe, n), this.router = n, this.store = fe, fe.commit('SET_CONFIG', yn({ title: U && document.title }, t)); var r = [Ut, Kt, nn, sn, un, kn].concat(bn(fe.state.originalConfig.plugins || [])); this.pluginApi = new m({ plugins: r, store: fe, router: n }), this.applyPlugins(), this.app = new a.a({ router: n, store: fe, pluginApi: this.pluginApi, render: function (e) {
return e(y)
} }), !1 !== t.mount && this.mount()
} var t; var n; var r; return t = e, (n = [{ key: "mount", value: function () {
var e = fe.getters.target; return window.__DOCUTE_INITIAL_STATE__ ? this.app.$mount('#'.concat(e), !0):this.app.$mount('#'.concat(e)), this
} }, { key: "applyPlugins", value: function () {
var e = !0; var t=!1; var n = void 0; try {
for (var r, i = this.pluginApi.plugins[Symbol.iterator](); !(e = (r = i.next()).done); e = !0)r.value.extend(this.pluginApi)
} catch (error){t=!0,n=error} finally {
try {
e || null == i.return || i.return()
} finally {
if (t) throw n
}
}
} }]) && wn(t.prototype, n), r && wn(t, r), e
})(); Cn.version = '4.11.0'; let jn = Cn; 'undefined' !== typeof window && (window.Vue = a.a, window.__DOCUTE_VERSION__ = '4.11.0'); let Sn = function () {
      var e = this.$createElement; return (this._self._c || e)('span', { staticClass: 'color-box', style: { background: this.color } })
    };

 Sn._withStripped = !0; let An = { props: ['color'] }; let On = (n(73), new Object(b.a)(An, Sn, [], !1, null, '6decc762', null)); On.options.__file = 'website/components/ColorBox.vue'; let In = On.exports; function Ln() {
      var e = (function (e, t) {
t || (t = e.slice(0)); return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
})(['\n    <div class="reverse-text">\n      {{ reversedText }}\n      <v-style>\n      .reverse-text {\n        border: 1px solid var(--border-color);\n        padding: 20px;\n        font-weight: bold;\n        border-radius: 4px;\n      }\n      </v-style>\n    </div>\n  ']); return Ln = function () {
        return e
      }, e
    }

 new jn({ target: 'app', title: 'GO BASE', highlight: ['typescript', 'bash', 'json', 'markdown', 'javascript', 'go', 'python'], plugins: [o()('UA-165946232-1')].filter(Boolean), router: { mode: 'hash' }, detectSystemDarkTheme: !0, darkThemeToggler: !0, sourcePath: '/', componentMixins: [{ data () {
return { builtinLanguages: te.builtin, deps: ['dot-prop', "jump.js", "loadjs", "marked", "medium-zoom", "prismjs", "throttle-debounce", "vue", "vue-content-loader", "vue-router", "vue-router-prefetch", "vue-template-compiler", "vuex", "vuex-router-sync"] }
}, methods: { insertCustomFontsCSS () {
var e = "custom-fonts-css"; var t = document.getElementById(e); if (t)t.remove(); else {
var n = document.createElement('style'); n.id = e, n.textContent = "\n            /* Import desired font from Google fonts */\n            @import url('https://fonts.googleapis.com/css?family=Lato');\n\n            /* Apply the font to body (to override the default one) */\n            body {\n              font-family: Lato, sans-serif;\n            }\n            ", document.head.appendChild(n)
}
} }, components: { ColorBox: In } }], versions: { v1: { link: '/' } }, nav: [{ title: 'Home', link: '/' }, { title: 'Developer', link: 'https://developer.gobase.io' }], sidebar: [{ title: 'Go! Wallet Integration', children: [{ title: 'Signature', link: '/en/wallet/signature' }, { title: 'Send transaction', link: '/en/wallet/transaction' }, { title: 'DApps example', link: '/en/wallet/example' }] }, { title: 'API', children: [{ title: 'HTTP API', link: '/en/api/http' }, { title: 'Authentication', link: '/en/api/authentication' }, { title: 'Granting GP', link: '/en/api/point' }, { title: 'Push notification', link: '/en/api/push' }, { title: 'Fiat', link: '/en/api/fiat' }, { title: 'Status Code', link: '/en/api/code' }] }, { title: 'NFT(OffChain)', children: [{ title: 'Create NFT', link: '/en/offchain/publisher/create' }, { title: 'List of created tokens', link: '/en/offchain/publisher/tokens' }, { title: 'Details of created tokens', link: '/en/offchain/publisher/tokens_show' }, { title: 'List of created bundles', link: '/en/offchain/publisher/bundles' }, { title: 'Details of created bundles', link: '/en/offchain/publisher/bundles_show' }, { title: 'Webhook', link: '/en/offchain/publisher/webhook' }, { title: 'List of token status', link: '/en/offchain/market/status' }] }, { title: 'Market-Token(OffChain)', children: [{ title: 'List of tokens', link: '/en/offchain/assets/tokens.md' }, { title: 'Details of tokens', link: '/en/offchain/assets/tokens_show.md' }, { title: 'Sell token', link: '/en/offchain/market/tokens/publisher_sell_post' }, { title: 'Change amount', link: '/en/offchain/market/tokens/publisher_sell_put' }, { title: 'Transfer token', link: '/en/offchain/market/tokens/publisher_transfer' }, { title: 'Get signature at the time of purchase', link: '/en/offchain/market/tokens/buy_signature' }, { title: 'Send TxHash at the time of purchase', link: '/en/offchain/market/tokens/buy_transaction' }, { title: 'Get Stripe information', link: '/en/offchain/market/tokens/buy_stripe' }, { title: 'Returns and Refunds', link: '/en/offchain/market/tokens/publisher_refund' }] }, { title: 'Market-Bundle(OffChain)', children: [{ title: 'List of bundles', link: '/en/offchain/assets/bundles.md' }, { title: 'Details of bundles', link: '/en/offchain/assets/bundles_show.md' }, { title: 'Sell bundle', link: '/en/offchain/market/bundles/publisher_sell_post' }, { title: 'Change amount', link: '/en/offchain/market/bundles/publisher_sell_put' }, { title: 'Transfer bundle', link: '/en/offchain/market/bundles/publisher_transfer' }, { title: 'Get signature at the time of purchase', link: '/en/offchain/market/bundles/buy_signature' }, { title: 'Send TxHash at the time of purchase', link: '/en/offchain/market/bundles/buy_transaction' }, { title: 'Get Stripe information', link: '/en/offchain/market/bundles/buy_stripe' }, { title: 'Returns and Refunds', link: '/en/offchain/market/bundles/publisher_refund' }] }, { title: 'NFT(OnChain)', children: [{ title: 'Create NFT', link: '/en/onchain/publisher/create' }, { title: 'List of created tokens', link: '/en/onchain/publisher/tokens' }, { title: 'Details of created tokens', link: '/en/onchain/publisher/tokens_show' }, { title: 'List of created bundles', link: '/en/onchain/publisher/bundles' }, { title: 'Details of created bundles', link: '/en/onchain/publisher/bundles_show' }, { title: 'Webhook', link: '/en/onchain/publisher/webhook' }, { title: 'List of token status', link: '/en/onchain/market/status' }] }, { title: 'Market-Token(OnChain)', children: [{ title: 'List of tokens', link: '/en/onchain/assets/tokens.md' }, { title: 'Details of tokens', link: '/en/onchain/assets/tokens_show.md' }, { title: 'Sell token', link: '/en/onchain/market/tokens/publisher_sell_post' }, { title: 'Change amount', link: '/en/onchain/market/tokens/publisher_sell_put' }, { title: 'Transfer token', link: '/en/onchain/market/tokens/publisher_transfer' }, { title: 'Get signature at the time of purchase', link: '/en/onchain/market/tokens/buy_signature' }, { title: 'Send TxHash at the time of purchase', link: '/en/onchain/market/tokens/buy_transaction' }, { title: 'Get Stripe information', link: '/en/onchain/market/tokens/buy_stripe' }, { title: 'Returns and Refunds', link: '/en/onchain/market/tokens/publisher_refund' }] }, { title: 'Market-Bundle(OnChain)', children: [{ title: 'List of bundles', link: '/en/onchain/assets/bundles.md' }, { title: 'Details of bundles', link: '/en/onchain/assets/bundles_show.md' }, { title: 'Sell bundle', link: '/en/onchain/market/bundles/publisher_sell_post' }, { title: 'Change amount', link: '/en/onchain/market/bundles/publisher_sell_put' }, { title: 'Transfer bundle', link: '/en/onchain/market/bundles/publisher_transfer' }, { title: 'Get signature at the time of purchase', link: '/en/onchain/market/bundles/buy_signature' }, { title: 'Send TxHash at the time of purchase', link: '/en/onchain/market/bundles/buy_transaction' }, { title: 'Get Stripe information', link: '/en/onchain/market/bundles/buy_stripe' }, { title: 'Returns and Refunds', link: '/en/onchain/market/bundles/publisher_refund' }] }], overrides: { '/': { language: 'English' }, '/ja/': { language: "\u65E5\u672C\u8A9E", nav: [{ title: "\u30DB\u30FC\u30E0", link: '/ja/' }, { title: "\u958B\u767A\u8005\u30DA\u30FC\u30B8", link: 'https://developer.gobase.io' }], sidebar: [{ title: "GO! Wallet \u9023\u643A", children: [{ title: "\u7F72\u540D", link: '/ja/wallet/signature' }, { title: "\u9001\u91D1", link: '/ja/wallet/transaction' }, { title: "DApps\u30B5\u30F3\u30D7\u30EB", link: '/ja/wallet/example' }] }, { title: 'API', children: [{ title: 'HTTP API', link: '/ja/api/http' }, { title: "API\u8A8D\u8A3C", link: '/ja/api/authentication' }, { title: "GP\u4ED8\u4E0E", link: '/ja/api/point' }, { title: "\u30D7\u30C3\u30B7\u30E5\u901A\u77E5", link: '/ja/api/push' }, { title: 'Fiat', link: '/ja/api/fiat' }, { title: "\u30B9\u30C6\u30FC\u30BF\u30B9\u30B3\u30FC\u30C9", link: '/ja/api/code' }] }, { title: 'NFT(OffChain)', children: [{ title: "\u30C8\u30FC\u30AF\u30F3\u4F5C\u6210", link: '/ja/offchain/publisher/create' }, { title: "\u4F5C\u6210\u6E08\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7", link: '/ja/offchain/publisher/tokens' }, { title: "\u4F5C\u6210\u6E08\u30C8\u30FC\u30AF\u30F3\u8A73\u7D30", link: '/ja/offchain/publisher/tokens_show' }, { title: "\u4F5C\u6210\u6E08\u30D0\u30F3\u30C9\u30EB\u4E00\u89A7", link: '/ja/offchain/publisher/bundles' }, { title: "\u4F5C\u6210\u6E08\u30D0\u30F3\u30C9\u30EB\u8A73\u7D30", link: '/ja/offchain/publisher/bundles_show' }, { title: 'Webhook', link: '/ja/offchain/publisher/webhook' }, { title: "\u30C8\u30FC\u30AF\u30F3\u30B9\u30C6\u30FC\u30BF\u30B9\u4E00\u89A7", link: '/ja/offchain/market/status' }] }, { title: 'Market-Token(OffChain)', children: [{ title: "\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7", link: '/ja/offchain/assets/tokens.md' }, { title: "\u30C8\u30FC\u30AF\u30F3\u8A73\u7D30", link: '/ja/offchain/assets/tokens_show.md' }, { title: "\u30C8\u30FC\u30AF\u30F3\u51FA\u54C1", link: '/ja/offchain/market/tokens/publisher_sell_post' }, { title: "\u51FA\u54C1\u91D1\u984D\u306E\u5909\u66F4", link: '/ja/offchain/market/tokens/publisher_sell_put' }, { title: "\u30C8\u30FC\u30AF\u30F3\u914D\u5E03\u3001\u6240\u6709\u8005\u5909\u66F4", link: '/ja/offchain/market/tokens/publisher_transfer' }, { title: "\u8CFC\u5165\u6642\u7F72\u540D\u53D6\u5F97", link: '/ja/offchain/market/tokens/buy_signature' }, { title: "\u8CFC\u5165\u6642TxHash\u9001\u4FE1", link: '/ja/offchain/market/tokens/buy_transaction' }, { title: "Stripe\u60C5\u5831\u53D6\u5F97", link: '/ja/offchain/market/tokens/buy_stripe' }, { title: "\u8FD4\u54C1\u3001\u8FD4\u91D1", link: '/ja/offchain/market/tokens/publisher_refund' }] }, { title: 'Market-Bundle(OffChain)', children: [{ title: "\u30D0\u30F3\u30C9\u30EB\u4E00\u89A7", link: '/ja/offchain/assets/bundles.md' }, { title: "\u30D0\u30F3\u30C9\u30EB\u8A73\u7D30", link: '/ja/offchain/assets/bundles_show.md' }, { title: "\u30D0\u30F3\u30C9\u30EB\u51FA\u54C1", link: '/ja/offchain/market/bundles/publisher_sell_post' }, { title: "\u51FA\u54C1\u91D1\u984D\u306E\u5909\u66F4", link: '/ja/offchain/market/bundles/publisher_sell_put' }, { title: "\u30C8\u30FC\u30AF\u30F3\u914D\u5E03\u3001\u6240\u6709\u8005\u5909\u66F4", link: '/ja/offchain/market/bundles/publisher_transfer' }, { title: "\u8CFC\u5165\u6642\u7F72\u540D\u53D6\u5F97", link: '/ja/offchain/market/bundles/buy_signature' }, { title: "\u8CFC\u5165\u6642TxHash\u9001\u4FE1", link: '/ja/offchain/market/bundles/buy_transaction' }, { title: "Stripe\u60C5\u5831\u53D6\u5F97", link: '/ja/offchain/market/bundles/buy_stripe' }, { title: "\u8FD4\u54C1\u3001\u8FD4\u91D1", link: '/ja/offchain/market/bundles/publisher_refund' }] }, { title: 'NFT(OnChain)', children: [{ title: "\u30C8\u30FC\u30AF\u30F3\u4F5C\u6210", link: '/ja/onchain/publisher/create' }, { title: "\u4F5C\u6210\u6E08\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7", link: '/ja/onchain/publisher/tokens' }, { title: "\u4F5C\u6210\u6E08\u30C8\u30FC\u30AF\u30F3\u8A73\u7D30", link: '/ja/onchain/publisher/tokens_show' }, { title: "\u4F5C\u6210\u6E08\u30D0\u30F3\u30C9\u30EB\u4E00\u89A7", link: '/ja/onchain/publisher/bundles' }, { title: "\u4F5C\u6210\u6E08\u30D0\u30F3\u30C9\u30EB\u8A73\u7D30", link: '/ja/onchain/publisher/bundles_show' }, { title: 'Webhook', link: '/ja/onchain/publisher/webhook' }, { title: "\u30C8\u30FC\u30AF\u30F3\u30B9\u30C6\u30FC\u30BF\u30B9\u4E00\u89A7", link: '/ja/onchain/market/status' }] }, { title: 'Market-Token(OnChain)', children: [{ title: "\u30C8\u30FC\u30AF\u30F3\u4E00\u89A7", link: '/ja/onchain/assets/tokens.md' }, { title: "\u30C8\u30FC\u30AF\u30F3\u8A73\u7D30", link: '/ja/onchain/assets/tokens_show.md' }, { title: "\u30C8\u30FC\u30AF\u30F3\u51FA\u54C1", link: '/ja/onchain/market/tokens/publisher_sell_post' }, { title: "\u51FA\u54C1\u91D1\u984D\u306E\u5909\u66F4", link: '/ja/onchain/market/tokens/publisher_sell_put' }, { title: "\u30C8\u30FC\u30AF\u30F3\u914D\u5E03\u3001\u6240\u6709\u8005\u5909\u66F4", link: '/ja/onchain/market/tokens/publisher_transfer' }, { title: "\u8CFC\u5165\u6642\u7F72\u540D\u53D6\u5F97", link: '/ja/onchain/market/tokens/buy_signature' }, { title: "\u8CFC\u5165\u6642TxHash\u9001\u4FE1", link: '/ja/onchain/market/tokens/buy_transaction' }, { title: "Stripe\u60C5\u5831\u53D6\u5F97", link: '/ja/onchain/market/tokens/buy_stripe' }, { title: "\u8FD4\u54C1\u3001\u8FD4\u91D1", link: '/ja/onchain/market/tokens/publisher_refund' }] }, { title: 'Market-Bundle(OnChain)', children: [{ title: "\u30D0\u30F3\u30C9\u30EB\u4E00\u89A7", link: '/ja/onchain/assets/bundles.md' }, { title: "\u30D0\u30F3\u30C9\u30EB\u8A73\u7D30", link: '/ja/onchain/assets/bundles_show.md' }, { title: "\u30D0\u30F3\u30C9\u30EB\u51FA\u54C1", link: '/ja/onchain/market/bundles/publisher_sell_post' }, { title: "\u51FA\u54C1\u91D1\u984D\u306E\u5909\u66F4", link: '/ja/onchain/market/bundles/publisher_sell_put' }, { title: "\u30C8\u30FC\u30AF\u30F3\u914D\u5E03\u3001\u6240\u6709\u8005\u5909\u66F4", link: '/ja/onchain/market/bundles/publisher_transfer' }, { title: "\u8CFC\u5165\u6642\u7F72\u540D\u53D6\u5F97", link: '/ja/onchain/market/bundles/buy_signature' }, { title: "\u8CFC\u5165\u6642TxHash\u9001\u4FE1", link: '/ja/onchain/market/bundles/buy_transaction' }, { title: "Stripe\u60C5\u5831\u53D6\u5F97", link: '/ja/onchain/market/bundles/buy_stripe' }, { title: "\u8FD4\u54C1\u3001\u8FD4\u91D1", link: '/ja/onchain/market/bundles/publisher_refund' }] }] }, '/zh/': { language: "\u7B80\u4F53\u4E2D\u6587", nav: [{ title: '\u9996\u9875', link: '/zh/' }, { title: "\u5F00\u53D1\u8005", link: 'https://developer.gobase.io' }], sidebar: [{ title: 'GO! Wallet \u6574\u5408', children: [{ title: "\u7F72\u540D", link: '/zh/wallet/signature' }, { title: "\u53D1\u9001\u4EA4\u6613", link: '/zh/wallet/transaction' }, { title: "DApps\u4F8B\u5B50", link: '/zh/wallet/example' }] }, { title: 'API', children: [{ title: 'HTTP API', link: '/zh/api/http' }, { title: "API\u8BA4\u8BC1", link: '/zh/api/authentication' }, { title: "\u6388\u4E88GP", link: '/zh/api/point' }, { title: "APP\u63A8\u9001", link: '/zh/api/push' }, { title: "\u72B6\u6001\u7801", link: '/zh/api/code' }] }] }, '/ko/': { language: "\uD55C\uAD6D\uC5B4", nav: [{ title: "\uD648", link: '/ko/' }, { title: "\uAC1C\uBC1C\uC790", link: 'https://developer.gobase.io' }], sidebar: [{ title: "GO! Wallet \uD1B5\uD569", children: [{ title: "\uC11C\uBA85", link: '/ko/wallet/signature' }, { title: "\uAC70\uB840", link: '/ko/wallet/transaction' }, { title: "DApps\uC608", link: '/ko/wallet/example' }] }, { title: 'API', children: [{ title: 'HTTP API', link: '/ko/api/http' }, { title: "API\uC778\uC99D", link: '/ko/api/authentication' }, { title: "GP\uAE09\uC5EC", link: '/ko/api/point' }, { title: "Push\uC54C\uB9BC", link: '/ko/api/push' }, { title: "\uC0C1\uD0DC \uCF54\uB4DC", link: '/ko/api/code' }] }] } }, footer: '\n  <div style="border-top:1px solid var(--border-color);padding-top:30px;margin: 40px 0;color:#999999;font-size: .9rem;">\n  &copy; '.concat((new Date()).getFullYear(), ' GO BASE by <a href="https://smartapp.co.jp" target="_blank">SmartApp</a>.\n  </div>\n  '), banner: {} }), Vue.component('ReverseText', { props: { text: { type: String, required: !0 } }, template: i()(Ln()), computed: { reversedText () {
return this.text.split('').reverse().join('')
} } }), 'serviceWorker' in navigator && navigator.serviceWorker.register('/sw.js')
  }], [[42, 2, 0]]])
