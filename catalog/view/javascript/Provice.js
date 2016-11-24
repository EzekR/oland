(function(e, t) {
	var n, r, i = typeof t,
		o = e.document,
		a = e.location,
		s = e.jQuery,
		u = e.$,
		l = {},
		c = [],
		p = "1.9.1",
		f = c.concat,
		d = c.push,
		h = c.slice,
		g = c.indexOf,
		m = l.toString,
		y = l.hasOwnProperty,
		v = p.trim,
		b = function(e, t) {
			return new b.fn.init(e, t, r)
		},
		x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		w = /\S+/g,
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		k = /^[\],:{}\s]*$/,
		E = /(?:^|:|,)(?:\s*\[)+/g,
		S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		j = /^-ms-/,
		D = /-([\da-z])/gi,
		L = function(e, t) {
			return t.toUpperCase()
		},
		H = function(e) {
			(o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
		},
		q = function() {
			o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
		};
	b.fn = b.prototype = {
		jquery: p,
		constructor: b,
		init: function(e, n, r) {
			var i, a;
			if (!e) return this;
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
				if (i[1]) {
					if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) for (i in n) b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
					return this
				}
				if (a = o.getElementById(i[2]), a && a.parentNode) {
					if (a.id !== i[2]) return r.find(e);
					this.length = 1, this[0] = a
				}
				return this.context = o, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return h.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = b.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return b.each(this, e, t)
		},
		ready: function(e) {
			return b.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(h.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(b.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: d,
		sort: [].sort,
		splice: [].splice
	}, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
			u = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r));
		return s
	}, b.extend({
		noConflict: function(t) {
			return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? b.readyWait++ : b.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--b.readyWait : !b.isReady) {
				if (!o.body) return setTimeout(b.ready);
				b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === b.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === b.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) return !1;
			try {
				if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			var r;
			for (r in e);
			return r === t || y.call(e, r)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || o;
			var r = C.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) return null;
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && b.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(j, "ms-").replace(D, L)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++) if (r = t.apply(e[i], n), r === !1) break
				} else for (i in e) if (r = t.apply(e[i], n), r === !1) break
			} else if (a) {
				for (; o > i; i++) if (r = t.call(e[i], i, e[i]), r === !1) break
			} else for (i in e) if (r = t.call(e[i], i, e[i]), r === !1) break;
			return e
		},
		trim: v && !v.call("\ufeff\u00a0") ?
		function(e) {
			return null == e ? "" : v.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(T, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (g) return g.call(t, e, n);
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];
			else while (n[o] !== t) e[i++] = n[o++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !! n; a > o; o++) r = !! t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a) for (; o > i; i++) r = t(e[i], i, n), null != r && (s[s.length] = r);
			else for (i in e) r = t(e[i], i, n), null != r && (s[s.length] = r);
			return f.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(h.call(arguments)))
			}, i.guid = e.guid = e.guid || b.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var u = 0,
				l = e.length,
				c = null == r;
			if ("object" === b.type(r)) {
				o = !0;
				for (u in r) b.access(e, n, u, r[u], !0, a, s)
			} else if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
				return c.call(b(e), n)
			})), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
			return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		}
	}), b.ready.promise = function(t) {
		if (!n) if (n = b.Deferred(), "complete" === o.readyState) setTimeout(b.ready);
		else if (o.addEventListener) o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
		else {
			o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
			var r = !1;
			try {
				r = null == e.frameElement && o.documentElement
			} catch (i) {}
			r && r.doScroll &&
			function a() {
				if (!b.isReady) {
					try {
						r.doScroll("left")
					} catch (e) {
						return setTimeout(a, 50)
					}
					q(), b.ready()
				}
			}()
		}
		return n.promise(t)
	}, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = b.type(e);
		return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = b(o);
	var _ = {};

	function F(e) {
		var t = _[e] = {};
		return b.each(e.match(w) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	b.Callbacks = function(e) {
		e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
		var n, r, i, o, a, s, u = [],
			l = !e.once && [],
			c = function(t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					r = !1;
					break
				}
				n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
			},
			p = {
				add: function() {
					if (u) {
						var t = u.length;
						(function i(t) {
							b.each(t, function(t, n) {
								var r = b.type(n);
								"function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = u.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return u && b.each(arguments, function(e, t) {
						var r;
						while ((r = b.inArray(t, u, r)) > -1) u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
					}), this
				},
				has: function(e) {
					return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], this
				},
				disable: function() {
					return u = l = r = t, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = t, r || p.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, b.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", b.Callbacks("once memory"), "resolved"],
				["reject", "fail", b.Callbacks("once memory"), "rejected"],
				["notify", "progress", b.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return b.Deferred(function(n) {
							b.each(t, function(t, o) {
								var a = o[0],
									s = b.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? b.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, b.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = h.call(arguments),
				r = n.length,
				i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : b.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, u, l;
			if (r > 1) for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i;
			return i || o.resolveWith(l, n), o.promise()
		}
	}), b.support = function() {
		var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {};
		s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
			getSetAttribute: "t" !== d.className,
			leadingWhitespace: 3 === d.firstChild.nodeType,
			tbody: !d.getElementsByTagName("tbody").length,
			htmlSerialize: !! d.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: "/a" === r.getAttribute("href"),
			opacity: /^0.5/.test(r.style.opacity),
			cssFloat: !! r.style.cssFloat,
			checkOn: !! a.value,
			optSelected: l.selected,
			enctype: !! o.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === o.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
			submit: !0,
			change: !0,
			focusin: !0
		}) d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
		return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
			var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				u = o.getElementsByTagName("body")[0];
			u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
		}), n = s = u = l = r = a = null, t
	}();
	var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		B = /([A-Z])/g;

	function P(e, n, r, i) {
		if (b.acceptData(e)) {
			var o, a, s = b.expando,
				u = "string" == typeof n,
				l = e.nodeType,
				p = l ? b.cache : e,
				f = l ? e[s] : e[s] && s;
			if (f && p[f] && (i || p[f].data) || !u || r !== t) return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
		}
	}
	function R(e, t, n) {
		if (b.acceptData(e)) {
			var r, i, o, a = e.nodeType,
				s = a ? b.cache : e,
				u = a ? e[b.expando] : b.expando;
			if (s[u]) {
				if (t && (o = n ? s[u] : s[u].data)) {
					b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
					for (r = 0, i = t.length; i > r; r++) delete o[t[r]];
					if (!(n ? $ : b.isEmptyObject)(o)) return
				}(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
			}
		}
	}
	b.extend({
		cache: {},
		expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !! e && !$(e)
		},
		data: function(e, t, n) {
			return P(e, t, n)
		},
		removeData: function(e, t) {
			return R(e, t)
		},
		_data: function(e, t, n) {
			return P(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return R(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
			var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), b.fn.extend({
		data: function(e, n) {
			var r, i, o = this[0],
				a = 0,
				s = null;
			if (e === t) {
				if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
					for (r = o.attributes; r.length > a; a++) i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]));
					b._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				b.data(this, e)
			}) : b.access(this, function(n) {
				return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
					b.data(this, e, n)
				}), t)
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				b.removeData(this, e)
			})
		}
	});

	function W(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(B, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
				} catch (o) {}
				b.data(e, n, r)
			} else r = t
		}
		return r
	}
	function $(e) {
		var t;
		for (t in e) if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
		return !0
	}
	b.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = b.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = b._queueHooks(e, t),
				a = function() {
					b.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return b._data(e, n) || b._data(e, n, {
				empty: b.Callbacks("once memory").add(function() {
					b._removeData(e, t + "queue"), b._removeData(e, n)
				})
			})
		}
	}), b.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = b.queue(this, e, n);
				b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				b.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = b.Deferred(),
				a = this,
				s = this.length,
				u = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
			return u(), o.promise(n)
		}
	});
	var I, z, X = /[\t\r\n]/g,
		U = /\r/g,
		V = /^(?:input|select|textarea|button|object)$/i,
		Y = /^(?:a|area)$/i,
		J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		G = /^(?:checked|selected)$/i,
		Q = b.support.getSetAttribute,
		K = b.support.input;
	b.fn.extend({
		attr: function(e, t) {
			return b.access(this, b.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				b.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return b.access(this, b.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = b.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = "string" == typeof e && e;
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).addClass(e.call(this, t, this.className))
			});
			if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
				o = 0;
				while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
				n.className = b.trim(r)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).removeClass(e.call(this, t, this.className))
			});
			if (u) for (t = (e || "").match(w) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
				o = 0;
				while (i = t[o++]) while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
				n.className = e ? b.trim(r) : ""
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "boolean" == typeof t;
			return b.isFunction(e) ? this.each(function(n) {
				b(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var o, a = 0,
						s = b(this),
						u = t,
						l = e.match(w) || [];
					while (o = l[a++]) u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
				} else(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0]; {
				if (arguments.length) return i = b.isFunction(e), this.each(function(n) {
					var o, a = b(this);
					1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				});
				if (o) return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
			}
		}
	}), b.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						u = 0 > i ? s : o ? i : 0;
					for (; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
						if (t = b(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					var n = b.makeArray(t);
					return b(e).find("option").each(function() {
						this.selected = b.inArray(b(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s, u = e.nodeType;
			if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(w);
			if (o && 1 === e.nodeType) while (n = o[i++]) r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), z = {
		get: function(e, n) {
			var r = b.prop(e, n),
				i = "boolean" == typeof r && e.getAttribute(n),
				o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
			return o && o.value !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, K && Q || (b.attrHooks.value = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
		},
		set: function(e, n, r) {
			return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
		}
	}), Q || (I = b.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
		},
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, b.attrHooks.contenteditable = {
		get: I.get,
		set: function(e, t, n) {
			I.set(e, "" === t ? !1 : t, n)
		}
	}, b.each(["width", "height"], function(e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		})
	})), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			get: function(e) {
				var r = e.getAttribute(n, 2);
				return null == r ? t : r
			}
		})
	}), b.each(["href", "src"], function(e, t) {
		b.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})), b.support.style || (b.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
		}
	})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
		b.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	}), b.each(["radio", "checkbox"], function() {
		b.valHooks[this] = b.extend(b.valHooks[this], {
			set: function(e, n) {
				return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
			}
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}
	function ot() {
		return !1
	}
	b.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
				while (l--) s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
					type: g,
					origType: y,
					data: o,
					handler: r,
					guid: r.guid,
					selector: a,
					needsContext: a && b.expr.match.needsContext.test(a),
					namespace: m.join(".")
				}, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0;
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(w) || [""], l = t.length;
				while (l--) if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
					p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
					while (o--) a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
					u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
				} else for (d in c) b.event.remove(e, d + t[l], n, r, !0);
				b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, a) {
			var s, u, l, c, p, f, d, h = [i || o],
				g = y.call(n, "type") ? n.type : n,
				m = y.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!a && !p.noBubble && !b.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) h.push(l), f = l;
					f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((l = h[d++]) && !n.isPropagationStopped()) n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
				if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
					f = i[u], f && (i[u] = null), b.event.triggered = g;
					try {
						i[g]()
					} catch (v) {}
					b.event.triggered = t, f && (i[u] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = b.event.fix(e);
			var n, r, i, o, a, s = [],
				u = h.call(arguments),
				l = (b._data(this, "events") || {})[e.type] || [],
				c = b.event.special[e.type] || {};
			if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = b.event.handlers.call(this, e, l), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				u = n.delegateCount,
				l = e.target;
			if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
				for (o = [], a = 0; u > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i);
				o.length && s.push({
					elem: l,
					handlers: o
				})
			}
			return n.length > u && s.push({
				elem: this,
				handlers: n.slice(u)
			}), s;
		},
		fix: function(e) {
			if (e[b.expando]) return e;
			var t, n, r, i = e.type,
				a = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
			while (t--) n = r[t], e[n] = a[n];
			return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, a) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, a, s = n.button,
					u = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				}
			},
			focus: {
				trigger: function() {
					if (this !== o.activeElement && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === o.activeElement && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = b.extend(new b.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, b.removeEvent = o.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, b.Event = function(e, n) {
		return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
	}, b.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, b.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		b.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), b.support.submitBubbles || (b.event.special.submit = {
		setup: function() {
			return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
				r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), b._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
		}
	}), b.support.changeBubbles || (b.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), b.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
			})), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
				}), b._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return b.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), b.support.focusinBubbles || b.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				b.event.simulate(t, e.target, b.event.fix(e), !0)
			};
		b.event.special[t] = {
			setup: function() {
				0 === n++ && o.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && o.removeEventListener(e, r, !0)
			}
		}
	}), b.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) this.on(a, n, r, e[a], o);
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;
			else if (!i) return this;
			return 1 === o && (s = i, i = function(e) {
				return b().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
				b.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (o in e) this.off(o, n, e[o]);
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				b.event.remove(this, e, r, n)
			})
		},
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
		},
		trigger: function(e, t) {
			return this.each(function() {
				b.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? b.event.trigger(e, n, r, !0) : t
		}
	}), function(e, t) {
		var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
			w = e.document,
			T = {},
			N = 0,
			C = 0,
			k = it(),
			E = it(),
			S = it(),
			A = typeof t,
			j = 1 << 31,
			D = [],
			L = D.pop,
			H = D.push,
			q = D.slice,
			M = D.indexOf ||
		function(e) {
			var t = 0,
				n = this.length;
			for (; n > t; t++) if (this[t] === e) return t;
			return -1
		}, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
			ID: RegExp("^#(" + F + ")"),
			CLASS: RegExp("^\\.(" + F + ")"),
			NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
			TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
			ATTR: RegExp("^" + P),
			PSEUDO: RegExp("^" + R),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
			needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
		}, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
			var n = "0x" + t - 65536;
			return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
		};
		try {
			q.call(w.documentElement.childNodes, 0)[0].nodeType
		} catch (nt) {
			q = function(e) {
				var t, n = [];
				while (t = this[e++]) n.push(t);
				return n
			}
		}
		function rt(e) {
			return Y.test(e + "")
		}
		function it() {
			var e, t = [];
			return e = function(n, r) {
				return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
			}
		}
		function ot(e) {
			return e[x] = !0, e
		}
		function at(e) {
			var t = p.createElement("div");
			try {
				return e(t)
			} catch (n) {
				return !1
			} finally {
				t = null
			}
		}
		function st(e, t, n, r) {
			var i, o, a, s, u, l, f, g, m, v;
			if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (s = t.nodeType) && 9 !== s) return [];
			if (!d && !r) {
				if (i = J.exec(e)) if (a = i[1]) {
					if (9 === s) {
						if (o = t.getElementById(a), !o || !o.parentNode) return n;
						if (o.id === a) return n.push(o), n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) return n.push(o), n
				} else {
					if (i[2]) return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n;
					if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
				}
				if (T.qsa && !h.test(e)) {
					if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
						while (u--) l[u] = g + dt(l[u]);
						m = V.test(e) && t.parentNode || t, v = l.join(",")
					}
					if (v) try {
						return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
					} catch (b) {} finally {
						f || t.removeAttribute("id")
					}
				}
			}
			return wt(e.replace(W, "$1"), t, n, r)
		}
		a = st.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, c = st.setDocument = function(e) {
			var n = e ? e.ownerDocument || e : w;
			return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), T.attributes = at(function(e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return "boolean" !== t && "string" !== t
			}), T.getByClassName = at(function(e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
			}), T.getByName = at(function(e) {
				e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
				var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
				return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
			}), i.attrHandle = at(function(e) {
				return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
			}) ? {} : {
				href: function(e) {
					return e.getAttribute("href", 2)
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			}, T.getIdNotName ? (i.find.ID = function(e, t) {
				if (typeof t.getElementById !== A && !d) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (i.find.ID = function(e, n) {
				if (typeof n.getElementById !== A && !d) {
					var r = n.getElementById(e);
					return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
				}
			}, i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), i.find.TAG = T.tagNameNoComments ?
			function(e, n) {
				return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++]) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, i.find.NAME = T.getByName &&
			function(e, n) {
				return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
			}, i.find.CLASS = T.getByClassName &&
			function(e, n) {
				return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
			}, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
			}), at(function(e) {
				e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
			})), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
				T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
			}), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ?
			function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t) while (t = t.parentNode) if (t === e) return !0;
				return !1
			}, v = f.compareDocumentPosition ?
			function(e, t) {
				var r;
				return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function(e, t) {
				var r, i = 0,
					o = e.parentNode,
					a = t.parentNode,
					s = [e],
					l = [t];
				if (e === t) return u = !0, 0;
				if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0;
				if (o === a) return ut(e, t);
				r = e;
				while (r = r.parentNode) s.unshift(r);
				r = t;
				while (r = r.parentNode) l.unshift(r);
				while (s[i] === l[i]) i++;
				return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
			}, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
		}, st.matches = function(e, t) {
			return st(e, null, null, t)
		}, st.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) try {
				var n = m.call(e, t);
				if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
			} catch (r) {}
			return st(t, p, null, [e]).length > 0
		}, st.contains = function(e, t) {
			return (e.ownerDocument || e) !== p && c(e), y(e, t)
		}, st.attr = function(e, t) {
			var n;
			return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
		}, st.error = function(e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		}, st.uniqueSort = function(e) {
			var t, n = [],
				r = 1,
				i = 0;
			if (u = !T.detectDuplicates, e.sort(v), u) {
				for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
				while (i--) e.splice(n[i], 1)
			}
			return e
		};

		function ut(e, t) {
			var n = t && e,
				r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
			if (r) return r;
			if (n) while (n = n.nextSibling) if (n === t) return -1;
			return e ? 1 : -1
		}
		function lt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function ct(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function pt(e) {
			return ot(function(t) {
				return t = +t, ot(function(n, r) {
					var i, o = e([], n.length, t),
						a = o.length;
					while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		o = st.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else for (; t = e[r]; r++) n += o(t);
			return n
		}, i = st.selectors = {
			cacheLength: 50,
			createPseudo: ot,
			match: U,
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
					return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					return "*" === e ?
					function() {
						return !0
					} : (e = e.replace(et, tt).toLowerCase(), function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS: function(e) {
					var t = k[e + " "];
					return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
						return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = st.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ?
					function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							y = s && t.nodeName.toLowerCase(),
							v = !u && !s;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g]) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && v) {
								c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
								while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if (1 === p.nodeType && ++f && p === t) {
									c[e] = [N, d, f];
									break
								}
							} else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) f = l[1];
							else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) break;
							return f -= i, f === r || 0 === f % r && f / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
					return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
						var i, o = r(e, t),
							a = o.length;
						while (a--) i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
					}) : function(e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: ot(function(e) {
					var t = [],
						n = [],
						r = s(e.replace(W, "$1"));
					return r[x] ? ot(function(e, t, n, i) {
						var o, a = r(e, null, i, []),
							s = e.length;
						while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}),
				has: ot(function(e) {
					return function(t) {
						return st(e, t).length > 0
					}
				}),
				contains: ot(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
					}
				}),
				lang: ot(function(e) {
					return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
						var n;
						do
						if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === f
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
					return !0
				},
				parent: function(e) {
					return !i.pseudos.empty(e)
				},
				header: function(e) {
					return Q.test(e.nodeName)
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
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: pt(function() {
					return [0]
				}),
				last: pt(function(e, t) {
					return [t - 1]
				}),
				eq: pt(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: pt(function(e, t) {
					var n = 0;
					for (; t > n; n += 2) e.push(n);
					return e
				}),
				odd: pt(function(e, t) {
					var n = 1;
					for (; t > n; n += 2) e.push(n);
					return e
				}),
				lt: pt(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0;) e.push(r);
					return e
				}),
				gt: pt(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r;) e.push(r);
					return e
				})
			}
		};
		for (n in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) i.pseudos[n] = lt(n);
		for (n in {
			submit: !0,
			reset: !0
		}) i.pseudos[n] = ct(n);

		function ft(e, t) {
			var n, r, o, a, s, u, l, c = E[e + " "];
			if (c) return t ? 0 : c.slice(0);
			s = e, u = [], l = i.preFilter;
			while (s) {
				(!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
					value: n,
					type: r[0].replace(W, " ")
				}), s = s.slice(n.length));
				for (a in i.filter)!(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
					value: n,
					type: a,
					matches: r
				}), s = s.slice(n.length));
				if (!n) break
			}
			return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
		}
		function dt(e) {
			var t = 0,
				n = e.length,
				r = "";
			for (; n > t; t++) r += e[t].value;
			return r
		}
		function ht(e, t, n) {
			var i = t.dir,
				o = n && "parentNode" === i,
				a = C++;
			return t.first ?
			function(t, n, r) {
				while (t = t[i]) if (1 === t.nodeType || o) return e(t, n, r)
			} : function(t, n, s) {
				var u, l, c, p = N + " " + a;
				if (s) {
					while (t = t[i]) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
				} else while (t = t[i]) if (1 === t.nodeType || o) if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
					if ((u = l[1]) === !0 || u === r) return u === !0
				} else if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) return !0
			}
		}
		function gt(e) {
			return e.length > 1 ?
			function(t, n, r) {
				var i = e.length;
				while (i--) if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}
		function mt(e, t, n, r, i) {
			var o, a = [],
				s = 0,
				u = e.length,
				l = null != t;
			for (; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
			return a
		}
		function yt(e, t, n, r, i, o) {
			return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
				var l, c, p, f = [],
					d = [],
					h = a.length,
					g = o || xt(t || "*", s.nodeType ? [s] : s, []),
					m = !e || !o && t ? g : mt(g, f, e, s, u),
					y = n ? i || (o ? e : h || r) ? [] : a : m;
				if (n && n(m, y, s, u), r) {
					l = mt(y, d), r(l, [], s, u), c = l.length;
					while (c--)(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
				}
				if (o) {
					if (i || e) {
						if (i) {
							l = [], c = y.length;
							while (c--)(p = y[c]) && l.push(m[c] = p);
							i(null, y = [], l, u)
						}
						c = y.length;
						while (c--)(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
					}
				} else y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
			})
		}
		function vt(e) {
			var t, n, r, o = e.length,
				a = i.relative[e[0].type],
				s = a || i.relative[" "],
				u = a ? 1 : 0,
				c = ht(function(e) {
					return e === t
				}, s, !0),
				p = ht(function(e) {
					return M.call(t, e) > -1
				}, s, !0),
				f = [function(e, n, r) {
					return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
				}];
			for (; o > u; u++) if (n = i.relative[e[u].type]) f = [ht(gt(f), n)];
			else {
				if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
					for (r = ++u; o > r; r++) if (i.relative[e[r].type]) break;
					return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
				}
				f.push(n)
			}
			return gt(f)
		}
		function bt(e, t) {
			var n = 0,
				o = t.length > 0,
				a = e.length > 0,
				s = function(s, u, c, f, d) {
					var h, g, m, y = [],
						v = 0,
						b = "0",
						x = s && [],
						w = null != d,
						T = l,
						C = s || a && i.find.TAG("*", d && u.parentNode || u),
						k = N += null == T ? 1 : Math.random() || .1;
					for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
						if (a && h) {
							g = 0;
							while (m = e[g++]) if (m(h, u, c)) {
								f.push(h);
								break
							}
							w && (N = k, r = ++n)
						}
						o && ((h = !m && h) && v--, s && x.push(h))
					}
					if (v += b, o && b !== v) {
						g = 0;
						while (m = t[g++]) m(x, y, u, c);
						if (s) {
							if (v > 0) while (b--) x[b] || y[b] || (y[b] = L.call(f));
							y = mt(y)
						}
						H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
					}
					return w && (N = k, l = T), x
				};
			return o ? ot(s) : s
		}
		s = st.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = S[e + " "];
			if (!o) {
				t || (t = ft(e)), n = t.length;
				while (n--) o = vt(t[n]), o[x] ? r.push(o) : i.push(o);
				o = S(e, bt(i, r))
			}
			return o
		};

		function xt(e, t, n) {
			var r = 0,
				i = t.length;
			for (; i > r; r++) st(e, t[r], n);
			return n
		}
		function wt(e, t, n, r) {
			var o, a, u, l, c, p = ft(e);
			if (!r && 1 === p.length) {
				if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
					if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) return n;
					e = e.slice(a.shift().value.length)
				}
				o = U.needsContext.test(e) ? 0 : a.length;
				while (o--) {
					if (u = a[o], i.relative[l = u.type]) break;
					if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
						if (a.splice(o, 1), e = r.length && dt(a), !e) return H.apply(n, q.call(r, 0)), n;
						break
					}
				}
			}
			return s(e, p)(r, t, d, n, V.test(e)), n
		}
		i.pseudos.nth = i.pseudos.eq;

		function Tt() {}
		i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
	}(e);
	var at = /Until$/,
		st = /^(?:parents|prev(?:Until|All))/,
		ut = /^.[^:#\[\.,]*$/,
		lt = b.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	b.fn.extend({
		find: function(e) {
			var t, n, r, i = this.length;
			if ("string" != typeof e) return r = this, this.pushStack(b(e).filter(function() {
				for (t = 0; i > t; t++) if (b.contains(r[t], this)) return !0
			}));
			for (n = [], t = 0; i > t; t++) b.find(e, this[t], n);
			return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function(e) {
			var t, n = b(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) if (b.contains(this, n[t])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e, !0))
		},
		is: function(e) {
			return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
			for (; i > r; r++) {
				n = this[r];
				while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
					if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
						o.push(n);
						break
					}
					n = n.parentNode
				}
			}
			return this.pushStack(o.length > 1 ? b.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
				r = b.merge(this.get(), n);
			return this.pushStack(b.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), b.fn.andSelf = b.fn.addBack;

	function pt(e, t) {
		do e = e[t];
		while (e && 1 !== e.nodeType);
		return e
	}
	b.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return b.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return b.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return b.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return b.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return b.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return b.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return b.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return b.sibling(e.firstChild)
		},
		contents: function(e) {
			return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
		}
	}, function(e, t) {
		b.fn[e] = function(n, r) {
			var i = b.map(this, t, n);
			return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
		}
	}), b.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) 1 === o.nodeType && i.push(o), o = o[n];
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function ft(e, t, n) {
		if (t = t || 0, b.isFunction(t)) return b.grep(e, function(e, r) {
			var i = !! t.call(e, r, e);
			return i === n
		});
		if (t.nodeType) return b.grep(e, function(e) {
			return e === t === n
		});
		if ("string" == typeof t) {
			var r = b.grep(e, function(e) {
				return 1 === e.nodeType
			});
			if (ut.test(t)) return b.filter(t, r, !n);
			t = b.filter(t, r)
		}
		return b.grep(e, function(e) {
			return b.inArray(e, t) >= 0 === n
		})
	}
	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) while (t.length) n.createElement(t.pop());
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Nt = /^(?:checkbox|radio)$/i,
		Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(o),
		Dt = jt.appendChild(o.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
		text: function(e) {
			return b.access(this, function(e) {
				return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (b.isFunction(e)) return this.each(function(t) {
				b(this).wrapAll(e.call(this, t))
			});
			if (this[0]) {
				var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return b.isFunction(e) ? this.each(function(t) {
				b(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = b(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = b.isFunction(e);
			return this.each(function(n) {
				b(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = 0;
			for (; null != (n = this[r]); r++)(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && b.cleanData(Ot(e, !1));
				while (e.firstChild) e.removeChild(e.firstChild);
				e.options && b.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return b.clone(this, e, t)
			})
		},
		html: function(e) {
			return b.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
				if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e);
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = b.isFunction(e);
			return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
				var t = this.nextSibling,
					n = this.parentNode;
				n && (b(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, r) {
			e = f.apply([], e);
			var i, o, a, s, u, l, c = 0,
				p = this.length,
				d = this,
				h = p - 1,
				g = e[0],
				m = b.isFunction(g);
			if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) return this.each(function(i) {
				var o = d.eq(i);
				m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
			});
			if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c);
				if (a) for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
					url: o.src,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				}) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")));
				l = i = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function Ht(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type, e
	}
	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function Mt(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
	}
	function _t(e, t) {
		if (1 === t.nodeType && b.hasData(e)) {
			var n, r, i, o = b._data(e),
				a = b._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) for (r = 0, i = s[n].length; i > r; r++) b.event.add(t, n, s[n][r])
			}
			a.data && (a.data = b.extend({}, a.data))
		}
	}
	function Ft(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
				i = b._data(t);
				for (r in i.events) b.removeEvent(t, r, i.handle);
				t.removeAttribute(b.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	b.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		b.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = b(e),
				a = o.length - 1;
			for (; a >= r; r++) n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get());
			return this.pushStack(i)
		}
	});

	function Ot(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n));
		return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
	}
	function Bt(e) {
		Nt.test(e.type) && (e.defaultChecked = e.checked)
	}
	b.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
			if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) r[a] && Ft(i, r[a]);
			if (t) if (n) for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) _t(i, r[a]);
			else _t(e, o);
			return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, u, l, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++) if (o = e[h], o || 0 === o) if ("object" === b.type(o)) b.merge(d, o.nodeType ? [o] : o);
			else if (wt.test(o)) {
				s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
				while (i--) s = s.lastChild;
				if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
					o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
					while (i--) b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
				}
				b.merge(d, s.childNodes), s.textContent = "";
				while (s.firstChild) s.removeChild(s.firstChild);
				s = f.lastChild
			} else d.push(t.createTextNode(o));
			s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
			while (o = d[h++]) if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
				i = 0;
				while (o = s[i++]) kt.test(o.type || "") && n.push(o)
			}
			return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				u = b.expando,
				l = b.cache,
				p = b.support.deleteExpando,
				f = b.event.special;
			for (; null != (n = e[s]); s++) if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
				if (a.events) for (r in a.events) f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle);
				l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
			}
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + x + ")(.*)$", "i"),
		Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + x + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--) if (t = en[i] + n, t in e) return t;
		return r
	}
	function nn(e, t) {
		return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
	}
	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	b.fn.extend({
		css: function(e, n) {
			return b.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (b.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) a[n[s]] = b.css(e, n[s], !1, o);
					return a
				}
				return r !== t ? b.style(e, n, r) : b.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : nn(this)) ? b(this).show() : b(this).hide()
			})
		}
	}), b.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": b.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, u = b.camelCase(n),
					l = e.style;
				if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
					l[n] = r
				} catch (c) {}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, u = b.camelCase(n);
			return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = a[o];
			return i
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s.getPropertyValue(n) || s[n] : t,
			l = e.style;
		return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
	}) : o.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s[n] : t,
			l = e.style;
		return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2)"margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)));
		return a
	}
	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
			r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function un(e) {
		var t = o,
			n = Gt[e];
		return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
	}
	function ln(e, t) {
		var n = b(t.createElement(e)).appendTo(t.body),
			r = b.css(n[0], "display");
		return n.remove(), r
	}
	b.each(["height", "width"], function(e, n) {
		b.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), b.support.opacity || (b.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), b(function() {
		b.support.reliableMarginRight || (b.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? b.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
			b.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
	}, b.expr.filters.visible = function(e) {
		return !b.expr.filters.hidden(e)
	}), b.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		b.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ut.test(e) || (b.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	b.fn.extend({
		serialize: function() {
			return b.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = b.prop(this, "elements");
				return e ? b.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
			}).map(function(e, t) {
				var n = b(this).val();
				return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), b.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) b.each(e, function() {
			o(this.name, this.value)
		});
		else for (r in e) gn(r, e[r], n, o);
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (b.isArray(t)) b.each(t, function(t, i) {
			n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== b.type(t)) r(e, t);
		else for (i in t) gn(e + "[" + i + "]", t[i], n, r)
	}
	b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		b.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), b.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var mn, yn, vn = b.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Cn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = b.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = a.href
	} catch (Ln) {
		yn = o.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(w) || [];
			if (b.isFunction(n)) while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(u) {
			var l;
			return o[u] = !0, b.each(e[u] || [], function(e, u) {
				var c = u(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), l
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}
	function Mn(e, n) {
		var r, i, o = b.ajaxSettings.flatOptions || {};
		for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
		return r && b.extend(!0, e, r), e
	}
	b.fn.load = function(e, n, r) {
		if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
		var i, o, a, s = this,
			u = e.indexOf(" ");
		return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
		}).complete(r &&
		function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		b.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), b.each(["get", "post"], function(e, n) {
		b[n] = function(e, r, i, o) {
			return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), b.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Nn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": b.parseJSON,
				"text xml": b.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
				h = b.Deferred(),
				g = b.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				x = 0,
				T = "canceled",
				N = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) c[t[1].toLowerCase()] = t[2]
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]];
						else N.always(e[N.status]);
						return this
					},
					abort: function(e) {
						var t = e || T;
						return l && l.abort(t), k(0, t), this
					}
				};
			if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) return N;
			u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) N.setRequestHeader(i, p.headers[i]);
			if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) return N.abort();
			T = "abort";
			for (i in {
				success: 1,
				error: 1,
				complete: 1
			}) N[i](p[i]);
			if (l = qn(jn, p, n, N)) {
				N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					N.abort("timeout")
				}, p.timeout));
				try {
					x = 1, l.send(y, k)
				} catch (C) {
					if (!(2 > x)) throw C;
					k(-1, C)
				}
			} else k(-1, "No Transport");

			function k(e, n, r, i) {
				var c, y, v, w, T, C = n;
				2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
			}
			return N
		},
		getScript: function(e, n) {
			return b.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return b.get(e, t, n, "json")
		}
	});

	function _n(e, n, r) {
		var i, o, a, s, u = e.contents,
			l = e.dataTypes,
			c = e.responseFields;
		for (s in c) s in r && (n[c[s]] = r[s]);
		while ("*" === l[0]) l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
		if (o) for (s in u) if (u[s] && u[s].test(o)) {
			l.unshift(s);
			break
		}
		if (l[0] in r) a = l[0];
		else {
			for (s in r) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== l[0] && l.unshift(a), r[a]) : t
	}
	function Fn(e, t) {
		var n, r, i, o, a = {},
			s = 0,
			u = e.dataTypes.slice(),
			l = u[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i];
		for (; r = u[++s];) if ("*" !== r) {
			if ("*" !== l && l !== r) {
				if (i = a[l + " " + r] || a["* " + r], !i) for (n in a) if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
					i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
					break
				}
				if (i !== !0) if (i && e["throws"]) t = i(t);
				else try {
					t = i(t)
				} catch (c) {
					return {
						state: "parsererror",
						error: i ? c : "No conversion from " + l + " to " + r
					}
				}
			}
			l = r
		}
		return {
			state: "success",
			data: t
		}
	}
	b.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return b.globalEval(e), e
			}
		}
	}), b.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), b.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = o.head || b("head")[0] || o.documentElement;
			return {
				send: function(t, i) {
					n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var On = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	b.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = On.pop() || b.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), b.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || b.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject &&
	function() {
		var e;
		for (e in Pn) Pn[e](t, !0)
	};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	b.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !! Rn && "withCredentials" in Rn, Rn = b.support.ajax = !! Rn, Rn && b.ajaxTransport(function(n) {
		if (!n.crossDomain || b.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, u = n.xhr();
					if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
					n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) u.setRequestHeader(s, i[s])
					} catch (l) {}
					u.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, l, c, p;
						try {
							if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) 4 !== u.readyState && u.abort();
							else {
								p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
								try {
									c = u.statusText
								} catch (f) {
									c = ""
								}
								s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
							}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, l)
					}, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n, r, i = this.createTween(e, t),
					o = Yn.exec(t),
					a = i.cur(),
					s = +a || 0,
					u = 1,
					l = 20;
				if (o) {
					if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
						s = b.css(i.elem, e, !0) || n || 1;
						do u = u || ".5", s /= u, b.style(i.elem, e, s + r);
						while (u !== (u = i.cur() / a) && 1 !== u && --l)
					}
					i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return i
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = b.now()
	}
	function Zn(e, t) {
		b.each(t, function(t, n) {
			var r = (Qn[t] || []).concat(Qn["*"]),
				i = 0,
				o = r.length;
			for (; o > i; i++) if (r[i].call(e, t, n)) return
		})
	}
	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = b.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				var t = Xn || Kn(),
					n = Math.max(0, l.startTime + l.duration - t),
					r = n / l.duration || 0,
					o = 1 - r,
					a = 0,
					u = l.tweens.length;
				for (; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: b.extend({}, t),
				opts: b.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (tr(c, l.opts.specialEasing); a > o; o++) if (r = Gn[o].call(l, e, c, l.opts)) return r;
		return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function tr(e, t) {
		var n, r, i, o, a;
		for (i in e) if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
			n = a.expand(n), delete e[r];
			for (i in n) i in e || (e[i] = n[i], t[i] = o)
		} else t[r] = o
	}
	b.Animation = b.extend(er, {
		tweener: function(e, t) {
			b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, u, l, c, p, f = this,
			d = e.style,
			h = {},
			g = [],
			m = e.nodeType && nn(e);
		n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
			c.unqueued || p()
		}), c.unqueued++, f.always(function() {
			f.always(function() {
				c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in t) if (a = t[i], Vn.exec(a)) {
			if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue;
			g.push(i)
		}
		if (o = g.length) {
			s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
				b(e).hide()
			}), f.done(function() {
				var t;
				b._removeData(e, "fxshow");
				for (t in h) b.style(e, t, h[t])
			});
			for (i = 0; o > i; i++) r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	b.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, b.each(["toggle", "show", "hide"], function(e, t) {
		var n = b.fn[t];
		b.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), b.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = b.isEmptyObject(e),
				o = b.speed(t, n, r),
				a = function() {
					var t = er(this, b.extend({}, e), o);
					a.finish = function() {
						t.stop(!0)
					}, (i || b._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, n, r) {
			var i = function(e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = b.timers,
					a = b._data(this);
				if (n) a[n] && a[n].stop && i(a[n]);
				else for (n in a) a[n] && a[n].stop && Jn.test(n) && i(a[n]);
				for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
				(t || !r) && b.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = b._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = b.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
			height: e
		},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Zt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	b.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
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
		b.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), b.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? b.extend({}, e) : {
			complete: n || !n && t || b.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !b.isFunction(t) && t
		};
		return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
		}, r
	}, b.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
		var e, n = b.timers,
			r = 0;
		for (Xn = b.now(); n.length > r; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
		n.length || b.fx.stop(), Xn = t
	}, b.fx.timer = function(e) {
		e() && b.timers.push(e) && b.fx.start()
	}, b.fx.interval = 13, b.fx.start = function() {
		Un || (Un = setInterval(b.fx.tick, b.fx.interval))
	}, b.fx.stop = function() {
		clearInterval(Un), Un = null
	}, b.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
		return b.grep(b.timers, function(t) {
			return e === t.elem
		}).length
	}), b.fn.offset = function(e) {
		if (arguments.length) return e === t ? this : this.each(function(t) {
			b.offset.setOffset(this, e, t)
		});
		var n, r, o = {
			top: 0,
			left: 0
		},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
			top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
			left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
		}) : o
	}, b.offset = {
		setOffset: function(e, t, n) {
			var r = b.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = b(e),
				o = i.offset(),
				a = b.css(e, "top"),
				s = b.css(e, "left"),
				u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
				l = {},
				c = {},
				p, f;
			u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
		}
	}, b.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
					r = this[0];
				return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - b.css(r, "marginTop", !0),
					left: t.left - n.left - b.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || o.documentElement;
				while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) e = e.offsetParent;
				return e || o.documentElement
			})
		}
	}), b.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		b.fn[e] = function(i) {
			return b.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	b.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		b.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			b.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return b.access(this, function(n, r, i) {
					var o;
					return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return b
	})
})(window);
//$(document).bind("contextmenu",function(e){return false;});
/***********
 *
 * 动态加载外部文件
 * */
var hei = $(window).height();
var wid = $(window).width();
window.Modernizr = (function(P, l) {
	var _ = '1.1',
		J = {},
		T = true,
		ab = true,
		M = 100,
		ad = l.documentElement,
		U = l.createElement("modernizr"),
		k = U.style,
		Z = l.createElement("input"),
		o = "canvas",
		Y = "canvastext",
		V = "rgba",
		g = "hsla",
		Q = "multiplebgs",
		x = "borderimage",
		D = "borderradius",
		v = "boxshadow",
		X = "opacity",
		B = "cssanimations",
		R = "csscolumns",
		a = "cssgradients",
		p = "cssreflections",
		h = "csstransforms",
		w = "csstransforms3d",
		aa = "csstransitions",
		F = "fontface",
		K = "geolocation",
		e = "video",
		A = "audio",
		d = "input",
		u = d + "types",
		N = "background",
		b = N + "Color",
		G = "canPlayType",
		H = "localstorage",
		j = "sessionstorage",
		C = "webworkers",
		O = "applicationcache",
		c = " -o- -moz- -ms- -webkit- ".split(" "),
		s = {},
		z = {},
		r = {},
		q, S, W, L, n = [];

	function y(f) {
		k.cssText = f
	}
	function E(i, f) {
		return y(c.join(i + ";") + (f || ""))
	}
	function I(i, f) {
		return i.indexOf(f) !== -1
	}
	function ac(m, ae) {
		for (var f in m) {
			if (k[m[f]] !== undefined && (!ae || ae(m[f]))) {
				return true
			}
		}
	}
	function t(ae, m) {
		var i = ae.charAt(0).toUpperCase() + ae.substr(1),
			f = [ae, "webkit" + i, "Moz" + i, "moz" + i, "o" + i, "ms" + i];
		return !!ac(f, m)
	}
	s[o] = function() {
		return !!l.createElement(o).getContext
	};
	s[Y] = function() {
		return !!(s[o]() && typeof l.createElement(o).getContext("2d").fillText == "function")
	};
	s[K] = function() {
		return !!navigator.geolocation
	};
	s[V] = function() {
		y(N + "-color:rgba(150,255,150,.5)");
		return I(k[b], V)
	};
	s[g] = function() {
		y(N + "-color:hsla(120,40%,100%,.5)");
		return I(k[b], V)
	};
	s[Q] = function() {
		y(N + ":url(m.png),url(a.png),#f99 url(m.png)");
		return /(url\s*\(.*?){3}/.test(k[N])
	};
	s[x] = function() {
		return t("borderImage")
	};
	s[D] = function() {
		return t("borderRadius", "", function(f) {
			return I(f, "orderRadius")
		})
	};
	s[v] = function() {
		return t("boxShadow")
	};
	s[X] = function() {
		y("opacity:.5");
		return I(k[X], "0.5")
	};
	s[B] = function() {
		return t("animationName")
	};
	s[R] = function() {
		return t("columnCount")
	};
	s[a] = function() {
		var m = N + "-image:",
			i = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			f = "linear-gradient(left top,#9f9, white);";
		y(m + i + m + "-webkit-" + i + m + "-moz-" + i + m + "-o-" + i + m + "-ms-" + i + m + f + m + "-webkit-" + f + m + "-moz-" + f + m + "-o-" + f + m + "-ms-" + f);
		return I(k.backgroundImage, "gradient")
	};
	s[p] = function() {
		return t("boxReflect")
	};
	s[h] = function() {
		return !!ac(["transformProperty", "webkitTransform", "MozTransform", "mozTransform", "oTransform", "msTransform"])
	};
	s[w] = function() {
		return !!ac(["perspectiveProperty", "webkitPerspective", "MozPerspective", "mozPerspective", "oPerspective", "msPerspective"])
	};
	s[aa] = function() {
		return t("transitionProperty")
	};
	s[F] = (function() {
		var i;
		if (!(! /*@cc_on@if(@_jscript_version>=5)!@end@*/ 0)) {
			i = true
		} else {
			var aj = l.createElement("style"),
				ae = l.createElement("span"),
				ak, af, ah = false,
				ag = l.body,
				ai, m;
			aj.textContent = "@font-face{font-family:testfont;src:url('data:font/ttf;base64,AAEAAAAMAIAAAwBAT1MvMliohmwAAADMAAAAVmNtYXCp5qrBAAABJAAAANhjdnQgACICiAAAAfwAAAAEZ2FzcP//AAMAAAIAAAAACGdseWYv5OZoAAACCAAAANxoZWFk69bnvwAAAuQAAAA2aGhlYQUJAt8AAAMcAAAAJGhtdHgGDgC4AAADQAAAABRsb2NhAIQAwgAAA1QAAAAMbWF4cABVANgAAANgAAAAIG5hbWUgXduAAAADgAAABPVwb3N03NkzmgAACHgAAAA4AAECBAEsAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAMDAAAAAAAAgAACbwAAAAoAAAAAAAAAAFBmRWQAAAAgqS8DM/8zAFwDMwDNAAAABQAAAAAAAAAAAAMAAAADAAAAHAABAAAAAABGAAMAAQAAAK4ABAAqAAAABgAEAAEAAgAuqQD//wAAAC6pAP///9ZXAwAAAAAAAAACAAAABgBoAAAAAAAvAAEAAAAAAAAAAAAAAAAAAAABAAIAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEACoAAAAGAAQAAQACAC6pAP//AAAALqkA////1lcDAAAAAAAAAAIAAAAiAogAAAAB//8AAgACACIAAAEyAqoAAwAHAC6xAQAvPLIHBADtMrEGBdw8sgMCAO0yALEDAC88sgUEAO0ysgcGAfw8sgECAO0yMxEhESczESMiARDuzMwCqv1WIgJmAAACAFUAAAIRAc0ADwAfAAATFRQWOwEyNj0BNCYrASIGARQGKwEiJj0BNDY7ATIWFX8aIvAiGhoi8CIaAZIoN/43KCg3/jcoAWD0JB4eJPQkHh7++EY2NkbVRjY2RgAAAAABAEH/+QCdAEEACQAANjQ2MzIWFAYjIkEeEA8fHw8QDxwWFhwWAAAAAQAAAAIAAIuYbWpfDzz1AAsEAAAAAADFn9IuAAAAAMWf0i797/8zA4gDMwAAAAgAAgAAAAAAAAABAAADM/8zAFwDx/3v/98DiAABAAAAAAAAAAAAAAAAAAAABQF2ACIAAAAAAVUAAAJmAFUA3QBBAAAAKgAqACoAWgBuAAEAAAAFAFAABwBUAAQAAgAAAAEAAQAAAEAALgADAAMAAAAQAMYAAQAAAAAAAACLAAAAAQAAAAAAAQAhAIsAAQAAAAAAAgAFAKwAAQAAAAAAAwBDALEAAQAAAAAABAAnAPQAAQAAAAAABQAKARsAAQAAAAAABgAmASUAAQAAAAAADgAaAUsAAwABBAkAAAEWAWUAAwABBAkAAQBCAnsAAwABBAkAAgAKAr0AAwABBAkAAwCGAscAAwABBAkABABOA00AAwABBAkABQAUA5sAAwABBAkABgBMA68AAwABBAkADgA0A/tDb3B5cmlnaHQgMjAwOSBieSBEYW5pZWwgSm9obnNvbi4gIFJlbGVhc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgT3BlbiBGb250IExpY2Vuc2UuIEtheWFoIExpIGdseXBocyBhcmUgcmVsZWFzZWQgdW5kZXIgdGhlIEdQTCB2ZXJzaW9uIDMuYmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhTGlnaHRiYWVjMmE5MmJmZmU1MDMyIC0gc3Vic2V0IG9mIEZvbnRGb3JnZSAyLjAgOiBKdXJhIExpZ2h0IDogMjMtMS0yMDA5YmFlYzJhOTJiZmZlNTAzMiAtIHN1YnNldCBvZiBKdXJhIExpZ2h0VmVyc2lvbiAyIGJhZWMyYTkyYmZmZTUwMzIgLSBzdWJzZXQgb2YgSnVyYUxpZ2h0aHR0cDovL3NjcmlwdHMuc2lsLm9yZy9PRkwAQwBvAHAAeQByAGkAZwBoAHQAIAAyADAAMAA5ACAAYgB5ACAARABhAG4AaQBlAGwAIABKAG8AaABuAHMAbwBuAC4AIAAgAFIAZQBsAGUAYQBzAGUAZAAgAHUAbgBkAGUAcgAgAHQAaABlACAAdABlAHIAbQBzACAAbwBmACAAdABoAGUAIABPAHAAZQBuACAARgBvAG4AdAAgAEwAaQBjAGUAbgBzAGUALgAgAEsAYQB5AGEAaAAgAEwAaQAgAGcAbAB5AHAAaABzACAAYQByAGUAIAByAGUAbABlAGEAcwBlAGQAIAB1AG4AZABlAHIAIAB0AGgAZQAgAEcAUABMACAAdgBlAHIAcwBpAG8AbgAgADMALgBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQBMAGkAZwBoAHQAYgBhAGUAYwAyAGEAOQAyAGIAZgBmAGUANQAwADMAMgAgAC0AIABzAHUAYgBzAGUAdAAgAG8AZgAgAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAASgB1AHIAYQAgAEwAaQBnAGgAdAAgADoAIAAyADMALQAxAC0AMgAwADAAOQBiAGEAZQBjADIAYQA5ADIAYgBmAGYAZQA1ADAAMwAyACAALQAgAHMAdQBiAHMAZQB0ACAAbwBmACAASgB1AHIAYQAgAEwAaQBnAGgAdABWAGUAcgBzAGkAbwBuACAAMgAgAGIAYQBlAGMAMgBhADkAMgBiAGYAZgBlADUAMAAzADIAIAAtACAAcwB1AGIAcwBlAHQAIABvAGYAIABKAHUAcgBhAEwAaQBnAGgAdABoAHQAdABwADoALwAvAHMAYwByAGkAcAB0AHMALgBzAGkAbAAuAG8AcgBnAC8ATwBGAEwAAAAAAgAAAAAAAP+BADMAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAQACAQIAEQt6ZXJva2F5YWhsaQ==')}";
			l.getElementsByTagName("head")[0].appendChild(aj);
			ae.setAttribute("style", "font:99px _,serif;position:absolute;visibility:hidden");
			if (!ag) {
				ag = ad.appendChild(l.createElement(F));
				ah = true
			}
			ag.appendChild(ae);
			ak = ae.offsetWidth;
			ae.style.font = "99px testfont,_,serif";
			i = ak !== ae.offsetWidth;
			var f = function() {
					i = J[F] = ak !== ae.offsetWidth;
					ad.className = ad.className.replace(/(no-)?font.*?\b/, "") + (i ? " " : " no-") + F;
					ai && (m = true) && ai(i);
					ah && setTimeout(function() {
						ag.parentNode.removeChild(ag)
					}, 50)
				};
			setTimeout(f, M)
		}
		J._fontfaceready = function(al) {
			(m || i) ? al(i) : (ai = al)
		};
		return function() {
			return i || ak !== ae.offsetWidth
		}
	})();
	s[e] = function() {
		var i = l.createElement(e),
			f = !! i[G];
		if (f) {
			f = new Boolean(f);
			f.ogg = i[G]('video/ogg; codecs="theora, vorbis"');
			f.h264 = i[G]('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')
		}
		return f
	};
	s[A] = function() {
		var i = l.createElement(A),
			f = !! i[G];
		if (f) {
			f = new Boolean(f);
			f.ogg = i[G]('audio/ogg; codecs="vorbis"');
			f.mp3 = i[G]("audio/mpeg3;");
			f.wav = i[G]('audio/wav; codecs="1"');
			f.m4a = i[G]("audio/x-m4a;")
		}
		return f
	};
	s[H] = function() {
		return "localStorage" in P
	};
	s[j] = function() {
		return "sessionStorage" in P
	};
	s[C] = function() {
		return !!P.Worker
	};
	s[O] = function() {
		return !!P.applicationCache
	};
	for (L in s) {
		if (s.hasOwnProperty(L)) {
			n.push((!(J[L] = s[L]()) && ab ? "no-" : "") + L)
		}
	}
	J.addTest = function(f, i) {
		if (this.hasOwnProperty(f)) {}
		i = !! (i());
		ad.className += " " + (!i && ab ? "no-" : "") + f;
		J[f] = i
	};
	J[d] = (function(m) {
		for (var f in m) {
			r[m[f]] = !! (m[f] in Z)
		}
		return r
	})("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
	J[u] = (function(m) {
		for (var f in m) {
			Z.setAttribute("type", m[f]);
			z[m[f]] = !! (Z.type !== "text")
		}
		return z
	})("search tel url email datetime date month week time datetime-local number range color".split(" "));
	y("");
	U = Z = null;
	if (T && !(! /*@cc_on!@*/ 0)) {
		q = "abbr article aside audio canvas datalist details eventsource figure footer header hgroup mark menu meter nav output progress section time video".split(" ");
		W = q.length + 1;
		while (--W) {
			S = l.createElement(q[W])
		}
		S = null
	}
	J._enableHTML5 = T;
	J._enableNoClasses = ab;
	J._version = _;
	(function(f, i) {
		f[i] = f[i].replace(/\bno-js\b/, "js")
	})(ad, "className");
	ad.className += " " + n.join(" ");
	return J
})(this, this.document);

/***
 * 地区JSON
 */
var proStr = '[{"ID":"1","NAME":"北京市","ITEMS":[{"ID":"1","NAME":"北京市","ITEMS":[{"ID":"1","NAME":"东城区"},{"ID":"2","NAME":"西城区"},{"ID":"3","NAME":"崇文区"},{"ID":"4","NAME":"宣武区"},{"ID":"5","NAME":"朝阳区"},{"ID":"6","NAME":"丰台区"},{"ID":"7","NAME":"石景山区"},{"ID":"8","NAME":"海淀区"},{"ID":"9","NAME":"门头沟区"},{"ID":"10","NAME":"房山区"},{"ID":"11","NAME":"通州区"},{"ID":"12","NAME":"顺义区"},{"ID":"13","NAME":"昌平区"},{"ID":"14","NAME":"大兴区"},{"ID":"15","NAME":"怀柔区"},{"ID":"16","NAME":"平谷区"},{"ID":"17","NAME":"密云县"},{"ID":"18","NAME":"延庆县"}]}]},{"ID":"2","NAME":"天津市","ITEMS":[{"ID":"2","NAME":"天津市","ITEMS":[{"ID":"19","NAME":"和平区"},{"ID":"20","NAME":"河东区"},{"ID":"21","NAME":"河西区"},{"ID":"22","NAME":"南开区"},{"ID":"23","NAME":"河北区"},{"ID":"24","NAME":"红桥区"},{"ID":"25","NAME":"塘沽区"},{"ID":"26","NAME":"汉沽区"},{"ID":"27","NAME":"大港区"},{"ID":"28","NAME":"东丽区"},{"ID":"29","NAME":"西青区"},{"ID":"30","NAME":"津南区"},{"ID":"31","NAME":"北辰区"},{"ID":"32","NAME":"武清区"},{"ID":"33","NAME":"宝坻区"},{"ID":"34","NAME":"宁河县"},{"ID":"35","NAME":"静海县"},{"ID":"36","NAME":"蓟县"}]}]},{"ID":"9","NAME":"上海市","ITEMS":[{"ID":"3","NAME":"上海市","ITEMS":[{"ID":"37","NAME":"黄浦区"},{"ID":"38","NAME":"卢湾区"},{"ID":"39","NAME":"徐汇区"},{"ID":"40","NAME":"长宁区"},{"ID":"41","NAME":"静安区"},{"ID":"42","NAME":"普陀区"},{"ID":"43","NAME":"闸北区"},{"ID":"44","NAME":"虹口区"},{"ID":"45","NAME":"杨浦区"},{"ID":"46","NAME":"闵行区"},{"ID":"47","NAME":"宝山区"},{"ID":"48","NAME":"嘉定区"},{"ID":"49","NAME":"浦东新区"},{"ID":"50","NAME":"金山区"},{"ID":"51","NAME":"松江区"},{"ID":"52","NAME":"青浦区"},{"ID":"53","NAME":"南汇区"},{"ID":"54","NAME":"奉贤区"},{"ID":"55","NAME":"崇明县"}]}]},{"ID":"27","NAME":"重庆市","ITEMS":[{"ID":"4","NAME":"重庆市","ITEMS":[{"ID":"56","NAME":"万州区"},{"ID":"57","NAME":"涪陵区"},{"ID":"58","NAME":"渝中区"},{"ID":"59","NAME":"大渡口区"},{"ID":"60","NAME":"江北区"},{"ID":"61","NAME":"沙坪坝区"},{"ID":"62","NAME":"九龙坡区"},{"ID":"63","NAME":"南岸区"},{"ID":"64","NAME":"北碚区"},{"ID":"65","NAME":"万盛区"},{"ID":"66","NAME":"双桥区"},{"ID":"67","NAME":"渝北区"},{"ID":"68","NAME":"巴南区"},{"ID":"69","NAME":"黔江区"},{"ID":"70","NAME":"长寿区"},{"ID":"71","NAME":"江津区"},{"ID":"72","NAME":"合川区"},{"ID":"73","NAME":"永川区"},{"ID":"74","NAME":"南川区"},{"ID":"75","NAME":"綦江县"},{"ID":"76","NAME":"潼南县"},{"ID":"77","NAME":"铜梁县"},{"ID":"78","NAME":"大足县"},{"ID":"79","NAME":"荣昌县"},{"ID":"80","NAME":"璧山县"},{"ID":"81","NAME":"梁平县"},{"ID":"82","NAME":"城口县"},{"ID":"83","NAME":"丰都县"},{"ID":"84","NAME":"垫江县"},{"ID":"85","NAME":"武隆县"},{"ID":"86","NAME":"忠县"},{"ID":"87","NAME":"开县"},{"ID":"88","NAME":"云阳县"},{"ID":"89","NAME":"奉节县"},{"ID":"90","NAME":"巫山县"},{"ID":"91","NAME":"巫溪县"},{"ID":"92","NAME":"石柱土家族自治县"},{"ID":"93","NAME":"秀山土家族苗族自治县"},{"ID":"94","NAME":"酉阳土家族苗族自治县"},{"ID":"95","NAME":"彭水苗族土家族自治县"}]}]},{"ID":"3","NAME":"河北省","ITEMS":[{"ID":"5","NAME":"邯郸市","ITEMS":[{"ID":"96","NAME":"邯山区"},{"ID":"97","NAME":"丛台区"},{"ID":"98","NAME":"复兴区"},{"ID":"99","NAME":"峰峰矿区"},{"ID":"100","NAME":"邯郸县"},{"ID":"101","NAME":"临漳县"},{"ID":"102","NAME":"成安县"},{"ID":"103","NAME":"大名县"},{"ID":"104","NAME":"涉县"},{"ID":"105","NAME":"磁县"},{"ID":"106","NAME":"肥乡县"},{"ID":"107","NAME":"永年县"},{"ID":"108","NAME":"邱县"},{"ID":"109","NAME":"鸡泽县"},{"ID":"110","NAME":"广平县"},{"ID":"111","NAME":"馆陶县"},{"ID":"112","NAME":"魏县"},{"ID":"113","NAME":"曲周县"},{"ID":"114","NAME":"武安市"}]},{"ID":"6","NAME":"石家庄市","ITEMS":[{"ID":"115","NAME":"长安区"},{"ID":"116","NAME":"桥东区"},{"ID":"117","NAME":"桥西区"},{"ID":"118","NAME":"新华区"},{"ID":"119","NAME":"井陉矿区"},{"ID":"120","NAME":"裕华区"},{"ID":"121","NAME":"井陉县"},{"ID":"122","NAME":"正定县"},{"ID":"123","NAME":"栾城县"},{"ID":"124","NAME":"行唐县"},{"ID":"125","NAME":"灵寿县"},{"ID":"126","NAME":"高邑县"},{"ID":"127","NAME":"深泽县"},{"ID":"128","NAME":"赞皇县"},{"ID":"129","NAME":"无极县"},{"ID":"130","NAME":"平山县"},{"ID":"131","NAME":"元氏县"},{"ID":"132","NAME":"赵县"},{"ID":"133","NAME":"辛集市"},{"ID":"134","NAME":"藁城市"},{"ID":"135","NAME":"晋州市"},{"ID":"136","NAME":"新乐市"},{"ID":"137","NAME":"鹿泉市"}]},{"ID":"7","NAME":"保定市","ITEMS":[{"ID":"138","NAME":"新市区"},{"ID":"139","NAME":"北市区"},{"ID":"140","NAME":"南市区"},{"ID":"141","NAME":"满城县"},{"ID":"142","NAME":"清苑县"},{"ID":"143","NAME":"涞水县"},{"ID":"144","NAME":"阜平县"},{"ID":"145","NAME":"徐水县"},{"ID":"146","NAME":"定兴县"},{"ID":"147","NAME":"唐县"},{"ID":"148","NAME":"高阳县"},{"ID":"149","NAME":"容城县"},{"ID":"150","NAME":"涞源县"},{"ID":"151","NAME":"望都县"},{"ID":"152","NAME":"安新县"},{"ID":"153","NAME":"易县"},{"ID":"154","NAME":"曲阳县"},{"ID":"155","NAME":"蠡县"},{"ID":"156","NAME":"顺平县"},{"ID":"157","NAME":"博野县"},{"ID":"158","NAME":"雄县"},{"ID":"159","NAME":"涿州市"},{"ID":"160","NAME":"定州市"},{"ID":"161","NAME":"安国市"},{"ID":"162","NAME":"高碑店市"}]},{"ID":"8","NAME":"张家口市","ITEMS":[{"ID":"163","NAME":"桥东区"},{"ID":"164","NAME":"桥西区"},{"ID":"165","NAME":"宣化区"},{"ID":"166","NAME":"下花园区"},{"ID":"167","NAME":"宣化县"},{"ID":"168","NAME":"张北县"},{"ID":"169","NAME":"康保县"},{"ID":"170","NAME":"沽源县"},{"ID":"171","NAME":"尚义县"},{"ID":"172","NAME":"蔚县"},{"ID":"173","NAME":"阳原县"},{"ID":"174","NAME":"怀安县"},{"ID":"175","NAME":"万全县"},{"ID":"176","NAME":"怀来县"},{"ID":"177","NAME":"涿鹿县"},{"ID":"178","NAME":"赤城县"},{"ID":"179","NAME":"崇礼县"}]},{"ID":"9","NAME":"承德市","ITEMS":[{"ID":"180","NAME":"双桥区"},{"ID":"181","NAME":"双滦区"},{"ID":"182","NAME":"鹰手营子矿区"},{"ID":"183","NAME":"承德县"},{"ID":"184","NAME":"兴隆县"},{"ID":"185","NAME":"平泉县"},{"ID":"186","NAME":"滦平县"},{"ID":"187","NAME":"隆化县"},{"ID":"188","NAME":"丰宁满族自治县"},{"ID":"189","NAME":"宽城满族自治县"},{"ID":"190","NAME":"围场满族蒙古族自治县"}]},{"ID":"10","NAME":"唐山市","ITEMS":[{"ID":"191","NAME":"路南区"},{"ID":"192","NAME":"路北区"},{"ID":"193","NAME":"古冶区"},{"ID":"194","NAME":"开平区"},{"ID":"195","NAME":"丰南区"},{"ID":"196","NAME":"丰润区"},{"ID":"197","NAME":"滦县"},{"ID":"198","NAME":"滦南县"},{"ID":"199","NAME":"乐亭县"},{"ID":"200","NAME":"迁西县"},{"ID":"201","NAME":"玉田县"},{"ID":"202","NAME":"唐海县"},{"ID":"203","NAME":"遵化市"},{"ID":"204","NAME":"迁安市"}]},{"ID":"11","NAME":"廊坊市","ITEMS":[{"ID":"205","NAME":"安次区"},{"ID":"206","NAME":"广阳区"},{"ID":"207","NAME":"固安县"},{"ID":"208","NAME":"永清县"},{"ID":"209","NAME":"香河县"},{"ID":"210","NAME":"大城县"},{"ID":"211","NAME":"文安县"},{"ID":"212","NAME":"大厂回族自治县"},{"ID":"213","NAME":"霸州市"},{"ID":"214","NAME":"三河市"}]},{"ID":"12","NAME":"沧州市","ITEMS":[{"ID":"215","NAME":"新华区"},{"ID":"216","NAME":"运河区"},{"ID":"217","NAME":"沧县"},{"ID":"218","NAME":"青县"},{"ID":"219","NAME":"东光县"},{"ID":"220","NAME":"海兴县"},{"ID":"221","NAME":"盐山县"},{"ID":"222","NAME":"肃宁县"},{"ID":"223","NAME":"南皮县"},{"ID":"224","NAME":"吴桥县"},{"ID":"225","NAME":"献县"},{"ID":"226","NAME":"孟村回族自治县"},{"ID":"227","NAME":"泊头市"},{"ID":"228","NAME":"任丘市"},{"ID":"229","NAME":"黄骅市"},{"ID":"230","NAME":"河间市"}]},{"ID":"13","NAME":"衡水市","ITEMS":[{"ID":"231","NAME":"桃城区"},{"ID":"232","NAME":"枣强县"},{"ID":"233","NAME":"武邑县"},{"ID":"234","NAME":"武强县"},{"ID":"235","NAME":"饶阳县"},{"ID":"236","NAME":"安平县"},{"ID":"237","NAME":"故城县"},{"ID":"238","NAME":"景县"},{"ID":"239","NAME":"阜城县"},{"ID":"240","NAME":"冀州市"},{"ID":"241","NAME":"深州市"}]},{"ID":"14","NAME":"邢台市","ITEMS":[{"ID":"242","NAME":"桥东区"},{"ID":"243","NAME":"桥西区"},{"ID":"244","NAME":"邢台县"},{"ID":"245","NAME":"临城县"},{"ID":"246","NAME":"内丘县"},{"ID":"247","NAME":"柏乡县"},{"ID":"248","NAME":"隆尧县"},{"ID":"249","NAME":"任县"},{"ID":"250","NAME":"南和县"},{"ID":"251","NAME":"宁晋县"},{"ID":"252","NAME":"巨鹿县"},{"ID":"253","NAME":"新河县"},{"ID":"254","NAME":"广宗县"},{"ID":"255","NAME":"平乡县"},{"ID":"256","NAME":"威县"},{"ID":"257","NAME":"清河县"},{"ID":"258","NAME":"临西县"},{"ID":"259","NAME":"南宫市"},{"ID":"260","NAME":"沙河市"}]},{"ID":"15","NAME":"秦皇岛市","ITEMS":[{"ID":"261","NAME":"海港区"},{"ID":"262","NAME":"山海关区"},{"ID":"263","NAME":"北戴河区"},{"ID":"264","NAME":"青龙满族自治县"},{"ID":"265","NAME":"昌黎县"},{"ID":"266","NAME":"抚宁县"},{"ID":"267","NAME":"卢龙县"}]}]},{"ID":"4","NAME":"山西省","ITEMS":[{"ID":"16","NAME":"朔州市","ITEMS":[{"ID":"268","NAME":"朔城区"},{"ID":"269","NAME":"平鲁区"},{"ID":"270","NAME":"山阴县"},{"ID":"271","NAME":"应县"},{"ID":"272","NAME":"右玉县"},{"ID":"273","NAME":"怀仁县"}]},{"ID":"17","NAME":"忻州市","ITEMS":[{"ID":"274","NAME":"忻府区"},{"ID":"275","NAME":"定襄县"},{"ID":"276","NAME":"五台县"},{"ID":"277","NAME":"代县"},{"ID":"278","NAME":"繁峙县"},{"ID":"279","NAME":"宁武县"},{"ID":"280","NAME":"静乐县"},{"ID":"281","NAME":"神池县"},{"ID":"282","NAME":"五寨县"},{"ID":"283","NAME":"岢岚县"},{"ID":"284","NAME":"河曲县"},{"ID":"285","NAME":"保德县"},{"ID":"286","NAME":"偏关县"},{"ID":"287","NAME":"原平市"}]},{"ID":"18","NAME":"太原市","ITEMS":[{"ID":"288","NAME":"小店区"},{"ID":"289","NAME":"迎泽区"},{"ID":"290","NAME":"杏花岭区"},{"ID":"291","NAME":"尖草坪区"},{"ID":"292","NAME":"万柏林区"},{"ID":"293","NAME":"晋源区"},{"ID":"294","NAME":"清徐县"},{"ID":"295","NAME":"阳曲县"},{"ID":"296","NAME":"娄烦县"},{"ID":"297","NAME":"古交市"}]},{"ID":"19","NAME":"大同市","ITEMS":[{"ID":"298","NAME":"矿区"},{"ID":"299","NAME":"南郊区"},{"ID":"300","NAME":"新荣区"},{"ID":"301","NAME":"阳高县"},{"ID":"302","NAME":"天镇县"},{"ID":"303","NAME":"广灵县"},{"ID":"304","NAME":"灵丘县"},{"ID":"305","NAME":"浑源县"},{"ID":"306","NAME":"左云县"},{"ID":"307","NAME":"大同县"}]},{"ID":"20","NAME":"阳泉市","ITEMS":[{"ID":"308","NAME":"矿区"},{"ID":"309","NAME":"平定县"},{"ID":"310","NAME":"盂县"}]},{"ID":"21","NAME":"晋中市","ITEMS":[{"ID":"311","NAME":"榆次区"},{"ID":"312","NAME":"榆社县"},{"ID":"313","NAME":"左权县"},{"ID":"314","NAME":"和顺县"},{"ID":"315","NAME":"昔阳县"},{"ID":"316","NAME":"寿阳县"},{"ID":"317","NAME":"太谷县"},{"ID":"318","NAME":"祁县"},{"ID":"319","NAME":"平遥县"},{"ID":"320","NAME":"灵石县"},{"ID":"321","NAME":"介休市"}]},{"ID":"22","NAME":"长治市","ITEMS":[{"ID":"322","NAME":"长治县"},{"ID":"323","NAME":"襄垣县"},{"ID":"324","NAME":"屯留县"},{"ID":"325","NAME":"平顺县"},{"ID":"326","NAME":"黎城县"},{"ID":"327","NAME":"壶关县"},{"ID":"328","NAME":"长子县"},{"ID":"329","NAME":"武乡县"},{"ID":"330","NAME":"沁县"},{"ID":"331","NAME":"沁源县"},{"ID":"332","NAME":"潞城市"}]},{"ID":"23","NAME":"晋城市","ITEMS":[{"ID":"333","NAME":"沁水县"},{"ID":"334","NAME":"阳城县"},{"ID":"335","NAME":"陵川县"},{"ID":"336","NAME":"泽州县"},{"ID":"337","NAME":"高平市"}]},{"ID":"24","NAME":"临汾市","ITEMS":[{"ID":"338","NAME":"尧都区"},{"ID":"339","NAME":"曲沃县"},{"ID":"340","NAME":"翼城县"},{"ID":"341","NAME":"襄汾县"},{"ID":"342","NAME":"洪洞县"},{"ID":"343","NAME":"古县"},{"ID":"344","NAME":"安泽县"},{"ID":"345","NAME":"浮山县"},{"ID":"346","NAME":"吉县"},{"ID":"347","NAME":"乡宁县"},{"ID":"348","NAME":"大宁县"},{"ID":"349","NAME":"隰县"},{"ID":"350","NAME":"永和县"},{"ID":"351","NAME":"蒲县"},{"ID":"352","NAME":"汾西县"},{"ID":"353","NAME":"侯马市"},{"ID":"354","NAME":"霍州市"}]},{"ID":"25","NAME":"吕梁市","ITEMS":[{"ID":"355","NAME":"离石区"},{"ID":"356","NAME":"文水县"},{"ID":"357","NAME":"交城县"},{"ID":"358","NAME":"兴县"},{"ID":"359","NAME":"临县"},{"ID":"360","NAME":"柳林县"},{"ID":"361","NAME":"石楼县"},{"ID":"362","NAME":"岚县"},{"ID":"363","NAME":"方山县"},{"ID":"364","NAME":"中阳县"},{"ID":"365","NAME":"交口县"},{"ID":"366","NAME":"孝义市"},{"ID":"367","NAME":"汾阳市"}]},{"ID":"26","NAME":"运城市","ITEMS":[{"ID":"368","NAME":"盐湖区"},{"ID":"369","NAME":"临猗县"},{"ID":"370","NAME":"万荣县"},{"ID":"371","NAME":"闻喜县"},{"ID":"372","NAME":"稷山县"},{"ID":"373","NAME":"新绛县"},{"ID":"374","NAME":"绛县"},{"ID":"375","NAME":"垣曲县"},{"ID":"376","NAME":"夏县"},{"ID":"377","NAME":"平陆县"},{"ID":"378","NAME":"芮城县"},{"ID":"379","NAME":"永济市"},{"ID":"380","NAME":"河津市"}]}]},{"ID":"32","NAME":"台湾省","ITEMS":[{"ID":"363","NAME":"台北市","ITEMS":[]},{"ID":"364","NAME":"高雄市","ITEMS":[]},{"ID":"365","NAME":"基隆市","ITEMS":[]},{"ID":"366","NAME":"台中市","ITEMS":[]},{"ID":"367","NAME":"台南市","ITEMS":[]},{"ID":"368","NAME":"新竹市","ITEMS":[]},{"ID":"369","NAME":"嘉义市","ITEMS":[]}]},{"ID":"6","NAME":"辽宁省","ITEMS":[{"ID":"27","NAME":"沈阳市","ITEMS":[{"ID":"381","NAME":"和平区"},{"ID":"382","NAME":"沈河区"},{"ID":"383","NAME":"大东区"},{"ID":"384","NAME":"皇姑区"},{"ID":"385","NAME":"铁西区"},{"ID":"386","NAME":"苏家屯区"},{"ID":"387","NAME":"东陵区"},{"ID":"388","NAME":"沈北新区"},{"ID":"389","NAME":"于洪区"},{"ID":"390","NAME":"辽中县"},{"ID":"391","NAME":"康平县"},{"ID":"392","NAME":"法库县"},{"ID":"393","NAME":"新民市"}]},{"ID":"28","NAME":"铁岭市","ITEMS":[{"ID":"394","NAME":"银州区"},{"ID":"395","NAME":"清河区"},{"ID":"396","NAME":"铁岭县"},{"ID":"397","NAME":"西丰县"},{"ID":"398","NAME":"昌图县"},{"ID":"399","NAME":"调兵山市"},{"ID":"400","NAME":"开原市"}]},{"ID":"29","NAME":"大连市","ITEMS":[{"ID":"401","NAME":"长海县"},{"ID":"402","NAME":"旅顺口区"},{"ID":"403","NAME":"中山区"},{"ID":"404","NAME":"西岗区"},{"ID":"405","NAME":"沙河口区"},{"ID":"406","NAME":"甘井子区"},{"ID":"407","NAME":"金州区"},{"ID":"408","NAME":"普兰店市"},{"ID":"409","NAME":"瓦房店市"},{"ID":"410","NAME":"庄河市"}]},{"ID":"30","NAME":"鞍山市","ITEMS":[{"ID":"411","NAME":"铁东区"},{"ID":"412","NAME":"铁西区"},{"ID":"413","NAME":"立山区"},{"ID":"414","NAME":"千山区"},{"ID":"415","NAME":"台安县"},{"ID":"416","NAME":"岫岩满族自治县"},{"ID":"417","NAME":"海城市"}]},{"ID":"31","NAME":"抚顺市","ITEMS":[{"ID":"418","NAME":"新抚区"},{"ID":"419","NAME":"东洲区"},{"ID":"420","NAME":"望花区"},{"ID":"421","NAME":"顺城区"},{"ID":"422","NAME":"抚顺县"},{"ID":"423","NAME":"新宾满族自治县"},{"ID":"424","NAME":"清原满族自治县"}]},{"ID":"32","NAME":"本溪市","ITEMS":[{"ID":"425","NAME":"平山区"},{"ID":"426","NAME":"溪湖区"},{"ID":"427","NAME":"明山区"},{"ID":"428","NAME":"南芬区"},{"ID":"429","NAME":"本溪满族自治县"},{"ID":"430","NAME":"桓仁满族自治县"}]},{"ID":"33","NAME":"丹东市","ITEMS":[{"ID":"431","NAME":"元宝区"},{"ID":"432","NAME":"振兴区"},{"ID":"433","NAME":"振安区"},{"ID":"434","NAME":"宽甸满族自治县"},{"ID":"435","NAME":"东港市"},{"ID":"436","NAME":"凤城市"}]},{"ID":"34","NAME":"锦州市","ITEMS":[{"ID":"437","NAME":"古塔区"},{"ID":"438","NAME":"凌河区"},{"ID":"439","NAME":"太和区"},{"ID":"440","NAME":"黑山县"},{"ID":"441","NAME":"义县"},{"ID":"442","NAME":"凌海市"},{"ID":"443","NAME":"北镇市"}]},{"ID":"35","NAME":"营口市","ITEMS":[{"ID":"444","NAME":"站前区"},{"ID":"445","NAME":"西市区"},{"ID":"446","NAME":"鮁鱼圈区"},{"ID":"447","NAME":"老边区"},{"ID":"448","NAME":"盖州市"},{"ID":"449","NAME":"大石桥市"}]},{"ID":"36","NAME":"阜新市","ITEMS":[{"ID":"450","NAME":"海州区"},{"ID":"451","NAME":"新邱区"},{"ID":"452","NAME":"太平区"},{"ID":"453","NAME":"清河门区"},{"ID":"454","NAME":"细河区"},{"ID":"455","NAME":"阜新蒙古族自治县"},{"ID":"456","NAME":"彰武县"}]},{"ID":"37","NAME":"辽阳市","ITEMS":[{"ID":"457","NAME":"白塔区"},{"ID":"458","NAME":"文圣区"},{"ID":"459","NAME":"宏伟区"},{"ID":"460","NAME":"弓长岭区"},{"ID":"461","NAME":"太子河区"},{"ID":"462","NAME":"辽阳县"},{"ID":"463","NAME":"灯塔市"}]},{"ID":"38","NAME":"朝阳市","ITEMS":[{"ID":"464","NAME":"双塔区"},{"ID":"465","NAME":"龙城区"},{"ID":"466","NAME":"朝阳县"},{"ID":"467","NAME":"建平县"},{"ID":"468","NAME":"喀喇沁左翼蒙古族自治县"},{"ID":"469","NAME":"北票市"},{"ID":"470","NAME":"凌源市"}]},{"ID":"39","NAME":"盘锦市","ITEMS":[{"ID":"471","NAME":"双台子区"},{"ID":"472","NAME":"兴隆台区"},{"ID":"473","NAME":"大洼县"},{"ID":"474","NAME":"盘山县"}]},{"ID":"40","NAME":"葫芦岛市","ITEMS":[{"ID":"475","NAME":"连山区"},{"ID":"476","NAME":"龙港区"},{"ID":"477","NAME":"南票区"},{"ID":"478","NAME":"绥中县"},{"ID":"479","NAME":"建昌县"},{"ID":"480","NAME":"兴城市"}]}]},{"ID":"7","NAME":"吉林省","ITEMS":[{"ID":"41","NAME":"长春市","ITEMS":[{"ID":"481","NAME":"南关区"},{"ID":"482","NAME":"宽城区"},{"ID":"483","NAME":"朝阳区"},{"ID":"484","NAME":"二道区"},{"ID":"485","NAME":"绿园区"},{"ID":"486","NAME":"双阳区"},{"ID":"487","NAME":"农安县"},{"ID":"488","NAME":"九台市"},{"ID":"489","NAME":"榆树市"},{"ID":"490","NAME":"德惠市"}]},{"ID":"42","NAME":"吉林市","ITEMS":[{"ID":"491","NAME":"昌邑区"},{"ID":"492","NAME":"龙潭区"},{"ID":"493","NAME":"船营区"},{"ID":"494","NAME":"丰满区"},{"ID":"495","NAME":"永吉县"},{"ID":"496","NAME":"蛟河市"},{"ID":"497","NAME":"桦甸市"},{"ID":"498","NAME":"舒兰市"},{"ID":"499","NAME":"磐石市"}]},{"ID":"43","NAME":"延边朝鲜族自治州","ITEMS":[{"ID":"500","NAME":"延吉市"},{"ID":"501","NAME":"图们市"},{"ID":"502","NAME":"敦化市"},{"ID":"503","NAME":"珲春市"},{"ID":"504","NAME":"龙井市"},{"ID":"505","NAME":"和龙市"},{"ID":"506","NAME":"汪清县"},{"ID":"507","NAME":"安图县"}]},{"ID":"44","NAME":"四平市","ITEMS":[{"ID":"508","NAME":"铁西区"},{"ID":"509","NAME":"铁东区"},{"ID":"510","NAME":"梨树县"},{"ID":"511","NAME":"伊通满族自治县"},{"ID":"512","NAME":"公主岭市"},{"ID":"513","NAME":"双辽市"}]},{"ID":"45","NAME":"通化市","ITEMS":[{"ID":"514","NAME":"东昌区"},{"ID":"515","NAME":"二道江区"},{"ID":"516","NAME":"通化县"},{"ID":"517","NAME":"辉南县"},{"ID":"518","NAME":"柳河县"},{"ID":"519","NAME":"梅河口市"},{"ID":"520","NAME":"集安市"}]},{"ID":"46","NAME":"白城市","ITEMS":[{"ID":"521","NAME":"洮北区"},{"ID":"522","NAME":"镇赉县"},{"ID":"523","NAME":"通榆县"},{"ID":"524","NAME":"洮南市"},{"ID":"525","NAME":"大安市"}]},{"ID":"47","NAME":"辽源市","ITEMS":[{"ID":"526","NAME":"龙山区"},{"ID":"527","NAME":"西安区"},{"ID":"528","NAME":"东丰县"},{"ID":"529","NAME":"东辽县"}]},{"ID":"48","NAME":"松原市","ITEMS":[{"ID":"530","NAME":"宁江区"},{"ID":"531","NAME":"前郭尔罗斯蒙古族自治县"},{"ID":"532","NAME":"长岭县"},{"ID":"533","NAME":"乾安县"},{"ID":"534","NAME":"扶余县"}]},{"ID":"49","NAME":"白山市","ITEMS":[{"ID":"535","NAME":"八道江区"},{"ID":"536","NAME":"江源区"},{"ID":"537","NAME":"抚松县"},{"ID":"538","NAME":"靖宇县"},{"ID":"539","NAME":"长白朝鲜族自治县"},{"ID":"540","NAME":"临江市"}]}]},{"ID":"8","NAME":"黑龙江省","ITEMS":[{"ID":"50","NAME":"哈尔滨市","ITEMS":[{"ID":"541","NAME":"道里区"},{"ID":"542","NAME":"南岗区"},{"ID":"543","NAME":"道外区"},{"ID":"544","NAME":"平房区"},{"ID":"545","NAME":"松北区"},{"ID":"546","NAME":"香坊区"},{"ID":"547","NAME":"呼兰区"},{"ID":"548","NAME":"阿城区"},{"ID":"549","NAME":"依兰县"},{"ID":"550","NAME":"方正县"},{"ID":"551","NAME":"宾县"},{"ID":"552","NAME":"巴彦县"},{"ID":"553","NAME":"木兰县"},{"ID":"554","NAME":"通河县"},{"ID":"555","NAME":"延寿县"},{"ID":"556","NAME":"双城市"},{"ID":"557","NAME":"尚志市"},{"ID":"558","NAME":"五常市"}]},{"ID":"51","NAME":"齐齐哈尔市","ITEMS":[{"ID":"559","NAME":"龙沙区"},{"ID":"560","NAME":"建华区"},{"ID":"561","NAME":"铁锋区"},{"ID":"562","NAME":"昂昂溪区"},{"ID":"563","NAME":"富拉尔基区"},{"ID":"564","NAME":"碾子山区"},{"ID":"565","NAME":"梅里斯达翰尔族区"},{"ID":"566","NAME":"龙江县"},{"ID":"567","NAME":"依安县"},{"ID":"568","NAME":"泰来县"},{"ID":"569","NAME":"甘南县"},{"ID":"570","NAME":"富裕县"},{"ID":"571","NAME":"克山县"},{"ID":"572","NAME":"克东县"},{"ID":"573","NAME":"拜泉县"},{"ID":"574","NAME":"讷河市"}]},{"ID":"52","NAME":"鸡西市","ITEMS":[{"ID":"575","NAME":"鸡冠区"},{"ID":"576","NAME":"恒山区"},{"ID":"577","NAME":"滴道区"},{"ID":"578","NAME":"梨树区"},{"ID":"579","NAME":"城子河区"},{"ID":"580","NAME":"麻山区"},{"ID":"581","NAME":"鸡东县"},{"ID":"582","NAME":"虎林市"},{"ID":"583","NAME":"密山市"}]},{"ID":"53","NAME":"牡丹江市","ITEMS":[{"ID":"584","NAME":"东安区"},{"ID":"585","NAME":"阳明区"},{"ID":"586","NAME":"爱民区"},{"ID":"587","NAME":"西安区"},{"ID":"588","NAME":"东宁县"},{"ID":"589","NAME":"林口县"},{"ID":"590","NAME":"绥芬河市"},{"ID":"591","NAME":"海林市"},{"ID":"592","NAME":"宁安市"},{"ID":"593","NAME":"穆棱市"}]},{"ID":"54","NAME":"七台河市","ITEMS":[{"ID":"594","NAME":"新兴区"},{"ID":"595","NAME":"桃山区"},{"ID":"596","NAME":"茄子河区"},{"ID":"597","NAME":"勃利县"}]},{"ID":"55","NAME":"佳木斯市","ITEMS":[{"ID":"598","NAME":"向阳区"},{"ID":"599","NAME":"前进区"},{"ID":"600","NAME":"东风区"},{"ID":"601","NAME":"桦南县"},{"ID":"602","NAME":"桦川县"},{"ID":"603","NAME":"汤原县"},{"ID":"604","NAME":"抚远县"},{"ID":"605","NAME":"同江市"},{"ID":"606","NAME":"富锦市"}]},{"ID":"56","NAME":"鹤岗市","ITEMS":[{"ID":"607","NAME":"向阳区"},{"ID":"608","NAME":"工农区"},{"ID":"609","NAME":"南山区"},{"ID":"610","NAME":"兴安区"},{"ID":"611","NAME":"东山区"},{"ID":"612","NAME":"兴山区"},{"ID":"613","NAME":"萝北县"},{"ID":"614","NAME":"绥滨县"}]},{"ID":"57","NAME":"双鸭山市","ITEMS":[{"ID":"615","NAME":"尖山区"},{"ID":"616","NAME":"岭东区"},{"ID":"617","NAME":"四方台区"},{"ID":"618","NAME":"宝山区"},{"ID":"619","NAME":"集贤县"},{"ID":"620","NAME":"友谊县"},{"ID":"621","NAME":"宝清县"},{"ID":"622","NAME":"饶河县"}]},{"ID":"58","NAME":"绥化市","ITEMS":[{"ID":"623","NAME":"北林区"},{"ID":"624","NAME":"望奎县"},{"ID":"625","NAME":"兰西县"},{"ID":"626","NAME":"青冈县"},{"ID":"627","NAME":"庆安县"},{"ID":"628","NAME":"明水县"},{"ID":"629","NAME":"绥棱县"},{"ID":"630","NAME":"安达市"},{"ID":"631","NAME":"肇东市"},{"ID":"632","NAME":"海伦市"}]},{"ID":"59","NAME":"黑河市","ITEMS":[{"ID":"633","NAME":"爱辉区"},{"ID":"634","NAME":"嫩江县"},{"ID":"635","NAME":"逊克县"},{"ID":"636","NAME":"孙吴县"},{"ID":"637","NAME":"北安市"},{"ID":"638","NAME":"五大连池市"}]},{"ID":"60","NAME":"大兴安岭地区","ITEMS":[{"ID":"639","NAME":"呼玛县"},{"ID":"640","NAME":"塔河县"},{"ID":"641","NAME":"漠河县"}]},{"ID":"61","NAME":"伊春市","ITEMS":[{"ID":"642","NAME":"伊春区"},{"ID":"643","NAME":"南岔区"},{"ID":"644","NAME":"友好区"},{"ID":"645","NAME":"西林区"},{"ID":"646","NAME":"翠峦区"},{"ID":"647","NAME":"新青区"},{"ID":"648","NAME":"美溪区"},{"ID":"649","NAME":"金山屯区"},{"ID":"650","NAME":"五营区"},{"ID":"651","NAME":"乌马河区"},{"ID":"652","NAME":"汤旺河区"},{"ID":"653","NAME":"带岭区"},{"ID":"654","NAME":"乌伊岭区"},{"ID":"655","NAME":"红星区"},{"ID":"656","NAME":"上甘岭区"},{"ID":"657","NAME":"嘉荫县"},{"ID":"658","NAME":"铁力市"}]},{"ID":"62","NAME":"大庆市","ITEMS":[{"ID":"659","NAME":"萨尔图区"},{"ID":"660","NAME":"龙凤区"},{"ID":"661","NAME":"让胡路区"},{"ID":"662","NAME":"红岗区"},{"ID":"663","NAME":"大同区"},{"ID":"664","NAME":"肇州县"},{"ID":"665","NAME":"肇源县"},{"ID":"666","NAME":"林甸县"},{"ID":"667","NAME":"杜尔伯特蒙古族自治县"}]}]},{"ID":"10","NAME":"江苏省","ITEMS":[{"ID":"63","NAME":"南京市","ITEMS":[{"ID":"668","NAME":"江宁区"},{"ID":"669","NAME":"浦口区"},{"ID":"670","NAME":"玄武区"},{"ID":"671","NAME":"白下区"},{"ID":"672","NAME":"秦淮区"},{"ID":"673","NAME":"建邺区"},{"ID":"674","NAME":"鼓楼区"},{"ID":"675","NAME":"下关区"},{"ID":"676","NAME":"栖霞区"},{"ID":"677","NAME":"雨花台区"},{"ID":"678","NAME":"六合区"},{"ID":"679","NAME":"溧水县"},{"ID":"680","NAME":"高淳县"}]},{"ID":"64","NAME":"无锡市","ITEMS":[{"ID":"681","NAME":"崇安区"},{"ID":"682","NAME":"南长区"},{"ID":"683","NAME":"北塘区"},{"ID":"684","NAME":"锡山区"},{"ID":"685","NAME":"惠山区"},{"ID":"686","NAME":"滨湖区"},{"ID":"687","NAME":"江阴市"},{"ID":"688","NAME":"宜兴市"}]},{"ID":"65","NAME":"镇江市","ITEMS":[{"ID":"689","NAME":"京口区"},{"ID":"690","NAME":"润州区"},{"ID":"691","NAME":"丹徒区"},{"ID":"692","NAME":"丹阳市"},{"ID":"693","NAME":"扬中市"},{"ID":"694","NAME":"句容市"}]},{"ID":"66","NAME":"苏州市","ITEMS":[{"ID":"695","NAME":"沧浪区"},{"ID":"696","NAME":"常熟市"},{"ID":"697","NAME":"平江区"},{"ID":"698","NAME":"金阊区"},{"ID":"699","NAME":"虎丘区"},{"ID":"700","NAME":"昆山市"},{"ID":"701","NAME":"太仓市"},{"ID":"702","NAME":"吴江市"},{"ID":"703","NAME":"吴中区"},{"ID":"704","NAME":"相城区"},{"ID":"705","NAME":"张家港市"}]},{"ID":"67","NAME":"南通市","ITEMS":[{"ID":"706","NAME":"崇川区"},{"ID":"707","NAME":"港闸区"},{"ID":"708","NAME":"海安县"},{"ID":"709","NAME":"如东县"},{"ID":"710","NAME":"启东市"},{"ID":"711","NAME":"如皋市"},{"ID":"712","NAME":"通州市"},{"ID":"713","NAME":"海门市"}]},{"ID":"68","NAME":"扬州市","ITEMS":[{"ID":"714","NAME":"高邮市"},{"ID":"715","NAME":"广陵区"},{"ID":"716","NAME":"邗江区"},{"ID":"717","NAME":"维扬区"},{"ID":"718","NAME":"宝应县"},{"ID":"719","NAME":"江都市"},{"ID":"720","NAME":"仪征市"}]},{"ID":"69","NAME":"盐城市","ITEMS":[{"ID":"721","NAME":"亭湖区"},{"ID":"722","NAME":"盐都区"},{"ID":"723","NAME":"响水县"},{"ID":"724","NAME":"滨海县"},{"ID":"725","NAME":"阜宁县"},{"ID":"726","NAME":"射阳县"},{"ID":"727","NAME":"建湖县"},{"ID":"728","NAME":"东台市"},{"ID":"729","NAME":"大丰市"}]},{"ID":"70","NAME":"徐州市","ITEMS":[{"ID":"730","NAME":"鼓楼区"},{"ID":"731","NAME":"云龙区"},{"ID":"732","NAME":"九里区"},{"ID":"733","NAME":"贾汪区"},{"ID":"734","NAME":"泉山区"},{"ID":"735","NAME":"丰县"},{"ID":"736","NAME":"沛县"},{"ID":"737","NAME":"铜山县"},{"ID":"738","NAME":"睢宁县"},{"ID":"739","NAME":"新沂市"},{"ID":"740","NAME":"邳州市"}]},{"ID":"71","NAME":"淮安市","ITEMS":[{"ID":"741","NAME":"清河区"},{"ID":"742","NAME":"楚州区"},{"ID":"743","NAME":"淮阴区"},{"ID":"744","NAME":"清浦区"},{"ID":"745","NAME":"涟水县"},{"ID":"746","NAME":"洪泽县"},{"ID":"747","NAME":"盱眙县"},{"ID":"748","NAME":"金湖县"}]},{"ID":"72","NAME":"连云港市","ITEMS":[{"ID":"749","NAME":"连云区"},{"ID":"750","NAME":"新浦区"},{"ID":"751","NAME":"海州区"},{"ID":"752","NAME":"赣榆县"},{"ID":"753","NAME":"东海县"},{"ID":"754","NAME":"灌云县"},{"ID":"755","NAME":"灌南县"}]},{"ID":"73","NAME":"常州市","ITEMS":[{"ID":"756","NAME":"天宁区"},{"ID":"757","NAME":"钟楼区"},{"ID":"758","NAME":"戚墅堰区"},{"ID":"759","NAME":"新北区"},{"ID":"760","NAME":"武进区"},{"ID":"761","NAME":"溧阳市"},{"ID":"762","NAME":"金坛市"}]},{"ID":"74","NAME":"泰州市","ITEMS":[{"ID":"763","NAME":"海陵区"},{"ID":"764","NAME":"高港区"},{"ID":"765","NAME":"兴化市"},{"ID":"766","NAME":"靖江市"},{"ID":"767","NAME":"泰兴市"},{"ID":"768","NAME":"姜堰市"}]},{"ID":"75","NAME":"宿迁市","ITEMS":[{"ID":"769","NAME":"宿城区"},{"ID":"770","NAME":"宿豫区"},{"ID":"771","NAME":"沭阳县"},{"ID":"772","NAME":"泗阳县"},{"ID":"773","NAME":"泗洪县"}]}]},{"ID":"11","NAME":"浙江省","ITEMS":[{"ID":"76","NAME":"舟山市","ITEMS":[{"ID":"774","NAME":"定海区"},{"ID":"775","NAME":"普陀区"},{"ID":"776","NAME":"岱山县"},{"ID":"777","NAME":"嵊泗县"}]},{"ID":"77","NAME":"衢州市","ITEMS":[{"ID":"778","NAME":"柯城区"},{"ID":"779","NAME":"衢江区"},{"ID":"780","NAME":"常山县"},{"ID":"781","NAME":"开化县"},{"ID":"782","NAME":"龙游县"},{"ID":"783","NAME":"江山市"}]},{"ID":"78","NAME":"杭州市","ITEMS":[{"ID":"784","NAME":"上城区"},{"ID":"785","NAME":"下城区"},{"ID":"786","NAME":"江干区"},{"ID":"787","NAME":"拱墅区"},{"ID":"788","NAME":"西湖区"},{"ID":"789","NAME":"滨江区"},{"ID":"790","NAME":"余杭区"},{"ID":"791","NAME":"桐庐县"},{"ID":"792","NAME":"淳安县"},{"ID":"793","NAME":"建德市"},{"ID":"794","NAME":"富阳市"},{"ID":"795","NAME":"临安市"},{"ID":"796","NAME":"萧山区"}]},{"ID":"79","NAME":"湖州市","ITEMS":[{"ID":"797","NAME":"吴兴区"},{"ID":"798","NAME":"南浔区"},{"ID":"799","NAME":"德清县"},{"ID":"800","NAME":"长兴县"},{"ID":"801","NAME":"安吉县"}]},{"ID":"80","NAME":"嘉兴市","ITEMS":[{"ID":"802","NAME":" 南湖区"},{"ID":"803","NAME":" 秀洲区"},{"ID":"804","NAME":" 嘉善县"},{"ID":"805","NAME":" 海盐县"},{"ID":"806","NAME":" 海宁市"},{"ID":"807","NAME":" 平湖市"},{"ID":"808","NAME":" 桐乡市 "}]},{"ID":"81","NAME":"宁波市","ITEMS":[{"ID":"809","NAME":"海曙区"},{"ID":"810","NAME":"江东区"},{"ID":"811","NAME":"江北区"},{"ID":"812","NAME":"北仑区"},{"ID":"813","NAME":"镇海区"},{"ID":"814","NAME":"鄞州区"},{"ID":"815","NAME":"象山县"},{"ID":"816","NAME":"宁海县"},{"ID":"817","NAME":"余姚市"},{"ID":"818","NAME":"慈溪市"},{"ID":"819","NAME":"奉化市"}]},{"ID":"82","NAME":"绍兴市","ITEMS":[{"ID":"820","NAME":"越城区"},{"ID":"821","NAME":"绍兴县"},{"ID":"822","NAME":"新昌县"},{"ID":"823","NAME":"诸暨市"},{"ID":"824","NAME":"上虞市"},{"ID":"825","NAME":"嵊州市"}]},{"ID":"83","NAME":"温州市","ITEMS":[{"ID":"826","NAME":"鹿城区"},{"ID":"827","NAME":"龙湾区"},{"ID":"828","NAME":"瓯海区"},{"ID":"829","NAME":"洞头县"},{"ID":"830","NAME":"永嘉县"},{"ID":"831","NAME":"平阳县"},{"ID":"832","NAME":"苍南县"},{"ID":"833","NAME":"文成县"},{"ID":"834","NAME":"泰顺县"},{"ID":"835","NAME":"瑞安市"},{"ID":"836","NAME":"乐清市"}]},{"ID":"84","NAME":"丽水市","ITEMS":[{"ID":"837","NAME":"莲都区"},{"ID":"838","NAME":"青田县"},{"ID":"839","NAME":"缙云县"},{"ID":"840","NAME":"遂昌县"},{"ID":"841","NAME":"松阳县"},{"ID":"842","NAME":"云和县"},{"ID":"843","NAME":"庆元县"},{"ID":"844","NAME":"景宁畲族自治县"},{"ID":"845","NAME":"龙泉市"}]},{"ID":"85","NAME":"金华市","ITEMS":[{"ID":"846","NAME":"婺城区"},{"ID":"847","NAME":"金东区"},{"ID":"848","NAME":"武义县"},{"ID":"849","NAME":"浦江县"},{"ID":"850","NAME":"磐安县"},{"ID":"851","NAME":"兰溪市"},{"ID":"852","NAME":"义乌市"},{"ID":"853","NAME":"东阳市"},{"ID":"854","NAME":"永康市"}]},{"ID":"86","NAME":"台州市","ITEMS":[{"ID":"855","NAME":"椒江区"},{"ID":"856","NAME":"黄岩区"},{"ID":"857","NAME":"路桥区"},{"ID":"858","NAME":"玉环县"},{"ID":"859","NAME":"三门县"},{"ID":"860","NAME":"天台县"},{"ID":"861","NAME":"仙居县"},{"ID":"862","NAME":"温岭市"},{"ID":"863","NAME":"临海市"}]}]},{"ID":"12","NAME":"安徽省","ITEMS":[{"ID":"87","NAME":"合肥市","ITEMS":[{"ID":"864","NAME":"瑶海区"},{"ID":"865","NAME":"庐阳区"},{"ID":"866","NAME":"蜀山区"},{"ID":"867","NAME":"包河区"},{"ID":"868","NAME":"长丰县"},{"ID":"869","NAME":"肥东县"},{"ID":"870","NAME":"肥西县"}]},{"ID":"88","NAME":"芜湖市","ITEMS":[{"ID":"871","NAME":"镜湖区"},{"ID":"872","NAME":"弋江区"},{"ID":"873","NAME":"鸠江区"},{"ID":"874","NAME":"三山区"},{"ID":"875","NAME":"芜湖县"},{"ID":"876","NAME":"繁昌县"},{"ID":"877","NAME":"南陵县"}]},{"ID":"89","NAME":"蚌埠市","ITEMS":[{"ID":"878","NAME":"龙子湖区"},{"ID":"879","NAME":"蚌山区"},{"ID":"880","NAME":"禹会区"},{"ID":"881","NAME":"淮上区"},{"ID":"882","NAME":"怀远县"},{"ID":"883","NAME":"五河县"},{"ID":"884","NAME":"固镇县"}]},{"ID":"90","NAME":"淮南市","ITEMS":[{"ID":"885","NAME":"大通区"},{"ID":"886","NAME":"田家庵区"},{"ID":"887","NAME":"谢家集区"},{"ID":"888","NAME":"八公山区"},{"ID":"889","NAME":"潘集区"},{"ID":"890","NAME":"凤台县"}]},{"ID":"91","NAME":"马鞍山市","ITEMS":[{"ID":"891","NAME":"金家庄区"},{"ID":"892","NAME":"花山区"},{"ID":"893","NAME":"雨山区"},{"ID":"894","NAME":"当涂县"}]},{"ID":"92","NAME":"淮北市","ITEMS":[{"ID":"895","NAME":"杜集区"},{"ID":"896","NAME":"相山区"},{"ID":"897","NAME":"烈山区"},{"ID":"898","NAME":"濉溪县 "}]},{"ID":"93","NAME":"铜陵市","ITEMS":[{"ID":"899","NAME":"铜官山区"},{"ID":"900","NAME":"狮子山区"},{"ID":"901","NAME":"铜陵县"}]},{"ID":"94","NAME":"安庆市","ITEMS":[{"ID":"902","NAME":"迎江区"},{"ID":"903","NAME":"大观区"},{"ID":"904","NAME":"宜秀区"},{"ID":"905","NAME":"怀宁县"},{"ID":"906","NAME":"枞阳县"},{"ID":"907","NAME":"潜山县"},{"ID":"908","NAME":"太湖县"},{"ID":"909","NAME":"宿松县"},{"ID":"910","NAME":"望江县"},{"ID":"911","NAME":"岳西县"},{"ID":"912","NAME":"桐城市"}]},{"ID":"95","NAME":"黄山市","ITEMS":[{"ID":"913","NAME":"屯溪区"},{"ID":"914","NAME":"黄山区"},{"ID":"915","NAME":"徽州区"},{"ID":"916","NAME":"歙县"},{"ID":"917","NAME":"休宁县"},{"ID":"918","NAME":"黟县"},{"ID":"919","NAME":"祁门县"}]},{"ID":"96","NAME":"滁州市","ITEMS":[{"ID":"920","NAME":"琅琊区"},{"ID":"921","NAME":"南谯区"},{"ID":"922","NAME":"来安县"},{"ID":"923","NAME":"全椒县"},{"ID":"924","NAME":"定远县"},{"ID":"925","NAME":"凤阳县"},{"ID":"926","NAME":"天长市"},{"ID":"927","NAME":"明光市"}]},{"ID":"97","NAME":"阜阳市","ITEMS":[{"ID":"928","NAME":"颍州区"},{"ID":"929","NAME":"颍东区"},{"ID":"930","NAME":"颍泉区"},{"ID":"931","NAME":"临泉县"},{"ID":"932","NAME":"太和县"},{"ID":"933","NAME":"阜南县"},{"ID":"934","NAME":"颍上县"},{"ID":"935","NAME":"界首市"}]},{"ID":"98","NAME":"宿州市","ITEMS":[{"ID":"936","NAME":"埇桥区"},{"ID":"937","NAME":"砀山县"},{"ID":"938","NAME":"萧县"},{"ID":"939","NAME":"灵璧县"},{"ID":"940","NAME":"泗县 "}]},{"ID":"99","NAME":"巢湖市","ITEMS":[{"ID":"941","NAME":"居巢区"},{"ID":"942","NAME":"庐江县"},{"ID":"943","NAME":"无为县"},{"ID":"944","NAME":"含山县"},{"ID":"945","NAME":"和县 "}]},{"ID":"100","NAME":"六安市","ITEMS":[{"ID":"946","NAME":"金安区"},{"ID":"947","NAME":"裕安区"},{"ID":"948","NAME":"寿县"},{"ID":"949","NAME":"霍邱县"},{"ID":"950","NAME":"舒城县"},{"ID":"951","NAME":"金寨县"},{"ID":"952","NAME":"霍山县"}]},{"ID":"101","NAME":"亳州市","ITEMS":[{"ID":"953","NAME":"谯城区"},{"ID":"954","NAME":"涡阳县"},{"ID":"955","NAME":"蒙城县"},{"ID":"956","NAME":"利辛县"}]},{"ID":"102","NAME":"池州市","ITEMS":[{"ID":"957","NAME":"贵池区"},{"ID":"958","NAME":"东至县"},{"ID":"959","NAME":"石台县"},{"ID":"960","NAME":"青阳县"}]},{"ID":"103","NAME":"宣城市","ITEMS":[{"ID":"961","NAME":"宣州区"},{"ID":"962","NAME":"郎溪县"},{"ID":"963","NAME":"广德县"},{"ID":"964","NAME":"泾县"},{"ID":"965","NAME":"绩溪县"},{"ID":"966","NAME":"旌德县"},{"ID":"967","NAME":"宁国市"}]}]},{"ID":"13","NAME":"福建省","ITEMS":[{"ID":"104","NAME":"福州市","ITEMS":[{"ID":"968","NAME":"鼓楼区"},{"ID":"969","NAME":"台江区"},{"ID":"970","NAME":"仓山区"},{"ID":"971","NAME":"马尾区"},{"ID":"972","NAME":"晋安区"},{"ID":"973","NAME":"闽侯县"},{"ID":"974","NAME":"连江县"},{"ID":"975","NAME":"罗源县"},{"ID":"976","NAME":"闽清县"},{"ID":"977","NAME":"永泰县"},{"ID":"978","NAME":"平潭县"},{"ID":"979","NAME":"福清市"},{"ID":"980","NAME":"长乐市"}]},{"ID":"105","NAME":"厦门市","ITEMS":[{"ID":"981","NAME":"思明区"},{"ID":"982","NAME":"海沧区"},{"ID":"983","NAME":"湖里区"},{"ID":"984","NAME":"集美区"},{"ID":"985","NAME":"同安区"},{"ID":"986","NAME":"翔安区"}]},{"ID":"106","NAME":"宁德市","ITEMS":[{"ID":"987","NAME":"蕉城区"},{"ID":"988","NAME":"霞浦县"},{"ID":"989","NAME":"古田县"},{"ID":"990","NAME":"屏南县"},{"ID":"991","NAME":"寿宁县"},{"ID":"992","NAME":"周宁县"},{"ID":"993","NAME":"柘荣县"},{"ID":"994","NAME":"福安市"},{"ID":"995","NAME":"福鼎市"}]},{"ID":"107","NAME":"莆田市","ITEMS":[{"ID":"996","NAME":"城厢区"},{"ID":"997","NAME":"涵江区"},{"ID":"998","NAME":"荔城区"},{"ID":"999","NAME":"秀屿区"},{"ID":"1000","NAME":"仙游县"}]},{"ID":"108","NAME":"泉州市","ITEMS":[{"ID":"1001","NAME":"鲤城区"},{"ID":"1002","NAME":"丰泽区"},{"ID":"1003","NAME":"洛江区"},{"ID":"1004","NAME":"泉港区"},{"ID":"1005","NAME":"惠安县"},{"ID":"1006","NAME":"安溪县"},{"ID":"1007","NAME":"永春县"},{"ID":"1008","NAME":"德化县"},{"ID":"1009","NAME":"石狮市"},{"ID":"1010","NAME":"晋江市"},{"ID":"1011","NAME":"南安市"}]},{"ID":"109","NAME":"漳州市","ITEMS":[{"ID":"1012","NAME":"芗城区"},{"ID":"1013","NAME":"龙文区"},{"ID":"1014","NAME":"云霄县"},{"ID":"1015","NAME":"漳浦县"},{"ID":"1016","NAME":"诏安县"},{"ID":"1017","NAME":"长泰县"},{"ID":"1018","NAME":"东山县"},{"ID":"1019","NAME":"南靖县"},{"ID":"1020","NAME":"平和县"},{"ID":"1021","NAME":"华安县"},{"ID":"1022","NAME":"龙海市"}]},{"ID":"110","NAME":"龙岩市","ITEMS":[{"ID":"1023","NAME":"新罗区"},{"ID":"1024","NAME":"长汀县"},{"ID":"1025","NAME":"永定县"},{"ID":"1026","NAME":"上杭县"},{"ID":"1027","NAME":"武平县"},{"ID":"1028","NAME":"连城县"},{"ID":"1029","NAME":"漳平市"}]},{"ID":"111","NAME":"三明市","ITEMS":[{"ID":"1030","NAME":"梅列区"},{"ID":"1031","NAME":"三元区"},{"ID":"1032","NAME":"明溪县"},{"ID":"1033","NAME":"清流县"},{"ID":"1034","NAME":"宁化县"},{"ID":"1035","NAME":"大田县"},{"ID":"1036","NAME":"尤溪县"},{"ID":"1037","NAME":"沙县"},{"ID":"1038","NAME":"将乐县"},{"ID":"1039","NAME":"泰宁县"},{"ID":"1040","NAME":"建宁县"},{"ID":"1041","NAME":"永安市"}]},{"ID":"112","NAME":"南平市","ITEMS":[{"ID":"1042","NAME":"延平区"},{"ID":"1043","NAME":"顺昌县"},{"ID":"1044","NAME":"浦城县"},{"ID":"1045","NAME":"光泽县"},{"ID":"1046","NAME":"松溪县"},{"ID":"1047","NAME":"政和县"},{"ID":"1048","NAME":"邵武市"},{"ID":"1049","NAME":"武夷山市"},{"ID":"1050","NAME":"建瓯市"},{"ID":"1051","NAME":"建阳市"}]}]},{"ID":"14","NAME":"江西省","ITEMS":[{"ID":"113","NAME":"鹰潭市","ITEMS":[{"ID":"1052","NAME":"月湖区"},{"ID":"1053","NAME":"余江县"},{"ID":"1054","NAME":"贵溪市"}]},{"ID":"114","NAME":"新余市","ITEMS":[{"ID":"1055","NAME":"渝水区"},{"ID":"1056","NAME":"分宜县"}]},{"ID":"115","NAME":"南昌市","ITEMS":[{"ID":"1057","NAME":"东湖区"},{"ID":"1058","NAME":"西湖区"},{"ID":"1059","NAME":"青云谱区"},{"ID":"1060","NAME":"湾里区"},{"ID":"1061","NAME":"青山湖区"},{"ID":"1062","NAME":"南昌县"},{"ID":"1063","NAME":"新建县"},{"ID":"1064","NAME":"安义县"},{"ID":"1065","NAME":"进贤县"}]},{"ID":"116","NAME":"九江市","ITEMS":[{"ID":"1066","NAME":"庐山区"},{"ID":"1067","NAME":"浔阳区"},{"ID":"1068","NAME":"九江县"},{"ID":"1069","NAME":"武宁县"},{"ID":"1070","NAME":"修水县"},{"ID":"1071","NAME":"永修县"},{"ID":"1072","NAME":"德安县"},{"ID":"1073","NAME":"星子县"},{"ID":"1074","NAME":"都昌县"},{"ID":"1075","NAME":"湖口县"},{"ID":"1076","NAME":"彭泽县"},{"ID":"1077","NAME":"瑞昌市"}]},{"ID":"117","NAME":"上饶市","ITEMS":[{"ID":"1078","NAME":"信州区"},{"ID":"1079","NAME":"上饶县"},{"ID":"1080","NAME":"广丰县"},{"ID":"1081","NAME":"玉山县"},{"ID":"1082","NAME":"铅山县"},{"ID":"1083","NAME":"横峰县"},{"ID":"1084","NAME":"弋阳县"},{"ID":"1085","NAME":"余干县"},{"ID":"1086","NAME":"鄱阳县"},{"ID":"1087","NAME":"万年县"},{"ID":"1088","NAME":"婺源县"},{"ID":"1089","NAME":"德兴市"}]},{"ID":"118","NAME":"抚州市","ITEMS":[{"ID":"1090","NAME":"临川区"},{"ID":"1091","NAME":"南城县"},{"ID":"1092","NAME":"黎川县"},{"ID":"1093","NAME":"南丰县"},{"ID":"1094","NAME":"崇仁县"},{"ID":"1095","NAME":"乐安县"},{"ID":"1096","NAME":"宜黄县"},{"ID":"1097","NAME":"金溪县"},{"ID":"1098","NAME":"资溪县"},{"ID":"1099","NAME":"东乡县"},{"ID":"1100","NAME":"广昌县"}]},{"ID":"119","NAME":"宜春市","ITEMS":[{"ID":"1101","NAME":"袁州区"},{"ID":"1102","NAME":"奉新县"},{"ID":"1103","NAME":"万载县"},{"ID":"1104","NAME":"上高县"},{"ID":"1105","NAME":"宜丰县"},{"ID":"1106","NAME":"靖安县"},{"ID":"1107","NAME":"铜鼓县"},{"ID":"1108","NAME":"丰城市"},{"ID":"1109","NAME":"樟树市"},{"ID":"1110","NAME":"高安市"}]},{"ID":"120","NAME":"吉安市","ITEMS":[{"ID":"1111","NAME":"吉州区"},{"ID":"1112","NAME":"青原区"},{"ID":"1113","NAME":"吉安县"},{"ID":"1114","NAME":"吉水县"},{"ID":"1115","NAME":"峡江县"},{"ID":"1116","NAME":"新干县"},{"ID":"1117","NAME":"永丰县"},{"ID":"1118","NAME":"泰和县"},{"ID":"1119","NAME":"遂川县"},{"ID":"1120","NAME":"万安县"},{"ID":"1121","NAME":"安福县"},{"ID":"1122","NAME":"永新县"},{"ID":"1123","NAME":"井冈山市"}]},{"ID":"121","NAME":"赣州市","ITEMS":[{"ID":"1124","NAME":"章贡区"},{"ID":"1125","NAME":"赣县"},{"ID":"1126","NAME":"信丰县"},{"ID":"1127","NAME":"大余县"},{"ID":"1128","NAME":"上犹县"},{"ID":"1129","NAME":"崇义县"},{"ID":"1130","NAME":"安远县"},{"ID":"1131","NAME":"龙南县"},{"ID":"1132","NAME":"定南县"},{"ID":"1133","NAME":"全南县"},{"ID":"1134","NAME":"宁都县"},{"ID":"1135","NAME":"于都县"},{"ID":"1136","NAME":"兴国县"},{"ID":"1137","NAME":"会昌县"},{"ID":"1138","NAME":"寻乌县"},{"ID":"1139","NAME":"石城县"},{"ID":"1140","NAME":"瑞金市"},{"ID":"1141","NAME":"南康市"}]},{"ID":"122","NAME":"景德镇市","ITEMS":[{"ID":"1142","NAME":"昌江区"},{"ID":"1143","NAME":"珠山区"},{"ID":"1144","NAME":"浮梁县"},{"ID":"1145","NAME":"乐平市"}]},{"ID":"123","NAME":"萍乡市","ITEMS":[{"ID":"1146","NAME":"安源区"},{"ID":"1147","NAME":"湘东区"},{"ID":"1148","NAME":"莲花县"},{"ID":"1149","NAME":"上栗县"},{"ID":"1150","NAME":"芦溪县"}]}]},{"ID":"15","NAME":"山东省","ITEMS":[{"ID":"124","NAME":"菏泽市","ITEMS":[{"ID":"1151","NAME":"牡丹区"},{"ID":"1152","NAME":"曹县"},{"ID":"1153","NAME":"单县"},{"ID":"1154","NAME":"成武县"},{"ID":"1155","NAME":"巨野县"},{"ID":"1156","NAME":"郓城县"},{"ID":"1157","NAME":"鄄城县"},{"ID":"1158","NAME":"定陶县"},{"ID":"1159","NAME":"东明县"}]},{"ID":"125","NAME":"济南市","ITEMS":[{"ID":"1160","NAME":"历下区"},{"ID":"1161","NAME":"市中区"},{"ID":"1162","NAME":"槐荫区"},{"ID":"1163","NAME":"天桥区"},{"ID":"1164","NAME":"历城区"},{"ID":"1165","NAME":"长清区"},{"ID":"1166","NAME":"平阴县"},{"ID":"1167","NAME":"济阳县"},{"ID":"1168","NAME":"商河县"},{"ID":"1169","NAME":"章丘市"}]},{"ID":"126","NAME":"青岛市","ITEMS":[{"ID":"1170","NAME":"市南区"},{"ID":"1171","NAME":"市北区"},{"ID":"1172","NAME":"四方区"},{"ID":"1173","NAME":"黄岛区"},{"ID":"1174","NAME":"崂山区"},{"ID":"1175","NAME":"李沧区"},{"ID":"1176","NAME":"城阳区"},{"ID":"1177","NAME":"胶州市"},{"ID":"1178","NAME":"即墨市"},{"ID":"1179","NAME":"平度市"},{"ID":"1180","NAME":"胶南市"},{"ID":"1181","NAME":"莱西市"}]},{"ID":"127","NAME":"淄博市","ITEMS":[{"ID":"1182","NAME":"淄川区"},{"ID":"1183","NAME":"张店区"},{"ID":"1184","NAME":"博山区"},{"ID":"1185","NAME":"临淄区"},{"ID":"1186","NAME":"周村区"},{"ID":"1187","NAME":"桓台县"},{"ID":"1188","NAME":"高青县"},{"ID":"1189","NAME":"沂源县"}]},{"ID":"128","NAME":"德州市","ITEMS":[{"ID":"1190","NAME":"德城区"},{"ID":"1191","NAME":"陵县"},{"ID":"1192","NAME":"宁津县"},{"ID":"1193","NAME":"庆云县"},{"ID":"1194","NAME":"临邑县"},{"ID":"1195","NAME":"齐河县"},{"ID":"1196","NAME":"平原县"},{"ID":"1197","NAME":"夏津县"},{"ID":"1198","NAME":"武城县"},{"ID":"1199","NAME":"乐陵市"},{"ID":"1200","NAME":"禹城市"}]},{"ID":"129","NAME":"烟台市","ITEMS":[{"ID":"1201","NAME":"芝罘区"},{"ID":"1202","NAME":"福山区"},{"ID":"1203","NAME":"牟平区"},{"ID":"1204","NAME":"莱山区"},{"ID":"1205","NAME":"长岛县"},{"ID":"1206","NAME":"龙口市"},{"ID":"1207","NAME":"莱阳市"},{"ID":"1208","NAME":"莱州市"},{"ID":"1209","NAME":"蓬莱市"},{"ID":"1210","NAME":"招远市"},{"ID":"1211","NAME":"栖霞市"},{"ID":"1212","NAME":"海阳市"}]},{"ID":"130","NAME":"潍坊市","ITEMS":[{"ID":"1213","NAME":"潍城区"},{"ID":"1214","NAME":"寒亭区"},{"ID":"1215","NAME":"坊子区"},{"ID":"1216","NAME":"奎文区"},{"ID":"1217","NAME":"临朐县"},{"ID":"1218","NAME":"昌乐县"},{"ID":"1219","NAME":"青州市"},{"ID":"1220","NAME":"诸城市"},{"ID":"1221","NAME":"寿光市"},{"ID":"1222","NAME":"安丘市"},{"ID":"1223","NAME":"高密市"},{"ID":"1224","NAME":"昌邑市"}]},{"ID":"131","NAME":"济宁市","ITEMS":[{"ID":"1225","NAME":"市中区"},{"ID":"1226","NAME":"任城区"},{"ID":"1227","NAME":"微山县"},{"ID":"1228","NAME":"鱼台县"},{"ID":"1229","NAME":"金乡县"},{"ID":"1230","NAME":"嘉祥县"},{"ID":"1231","NAME":"汶上县"},{"ID":"1232","NAME":"泗水县"},{"ID":"1233","NAME":"梁山县"},{"ID":"1234","NAME":"曲阜市"},{"ID":"1235","NAME":"兖州市"},{"ID":"1236","NAME":"邹城市"}]},{"ID":"132","NAME":"泰安市","ITEMS":[{"ID":"1237","NAME":"泰山区"},{"ID":"1238","NAME":"岱岳区"},{"ID":"1239","NAME":"宁阳县"},{"ID":"1240","NAME":"东平县"},{"ID":"1241","NAME":"新泰市"},{"ID":"1242","NAME":"肥城市"}]},{"ID":"133","NAME":"临沂市","ITEMS":[{"ID":"1243","NAME":"兰山区"},{"ID":"1244","NAME":"罗庄区"},{"ID":"1245","NAME":"河东区"},{"ID":"1246","NAME":"沂南县"},{"ID":"1247","NAME":"郯城县"},{"ID":"1248","NAME":"沂水县"},{"ID":"1249","NAME":"苍山县"},{"ID":"1250","NAME":"费县"},{"ID":"1251","NAME":"平邑县"},{"ID":"1252","NAME":"莒南县"},{"ID":"1253","NAME":"蒙阴县"},{"ID":"1254","NAME":"临沭县"}]},{"ID":"134","NAME":"滨州市","ITEMS":[{"ID":"1255","NAME":"滨城区"},{"ID":"1256","NAME":"惠民县"},{"ID":"1257","NAME":"阳信县"},{"ID":"1258","NAME":"无棣县"},{"ID":"1259","NAME":"沾化县"},{"ID":"1260","NAME":"博兴县"},{"ID":"1261","NAME":"邹平县"}]},{"ID":"135","NAME":"东营市","ITEMS":[{"ID":"1262","NAME":"东营区"},{"ID":"1263","NAME":"河口区"},{"ID":"1264","NAME":"垦利县"},{"ID":"1265","NAME":"利津县"},{"ID":"1266","NAME":"广饶县"}]},{"ID":"136","NAME":"威海市","ITEMS":[{"ID":"1267","NAME":"环翠区"},{"ID":"1268","NAME":"文登市"},{"ID":"1269","NAME":"荣成市"},{"ID":"1270","NAME":"乳山市"}]},{"ID":"137","NAME":"枣庄市","ITEMS":[{"ID":"1271","NAME":"市中区"},{"ID":"1272","NAME":"薛城区"},{"ID":"1273","NAME":"峄城区"},{"ID":"1274","NAME":"台儿庄区"},{"ID":"1275","NAME":"山亭区"},{"ID":"1276","NAME":"滕州市"}]},{"ID":"138","NAME":"日照市","ITEMS":[{"ID":"1277","NAME":"东港区"},{"ID":"1278","NAME":"岚山区"},{"ID":"1279","NAME":"五莲县"},{"ID":"1280","NAME":"莒县"}]},{"ID":"139","NAME":"莱芜市","ITEMS":[{"ID":"1281","NAME":"莱城区"},{"ID":"1282","NAME":"钢城区"}]},{"ID":"140","NAME":"聊城市","ITEMS":[{"ID":"1283","NAME":"东昌府区"},{"ID":"1284","NAME":"阳谷县"},{"ID":"1285","NAME":"莘县"},{"ID":"1286","NAME":"茌平县"},{"ID":"1287","NAME":"东阿县"},{"ID":"1288","NAME":"冠县"},{"ID":"1289","NAME":"高唐县"},{"ID":"1290","NAME":"临清市"}]}]},{"ID":"16","NAME":"河南省","ITEMS":[{"ID":"141","NAME":"商丘市","ITEMS":[{"ID":"1291","NAME":"梁园区"},{"ID":"1292","NAME":"睢阳区"},{"ID":"1293","NAME":"民权县"},{"ID":"1294","NAME":"睢县"},{"ID":"1295","NAME":"宁陵县"},{"ID":"1296","NAME":"柘城县"},{"ID":"1297","NAME":"虞城县"},{"ID":"1298","NAME":"夏邑县"},{"ID":"1299","NAME":"永城市"}]},{"ID":"142","NAME":"郑州市","ITEMS":[{"ID":"1300","NAME":"中原区"},{"ID":"1301","NAME":"二七区"},{"ID":"1302","NAME":"管城回族区"},{"ID":"1303","NAME":"金水区"},{"ID":"1304","NAME":"上街区"},{"ID":"1305","NAME":"惠济区"},{"ID":"1306","NAME":"中牟县"},{"ID":"1307","NAME":"巩义市"},{"ID":"1308","NAME":"荥阳市"},{"ID":"1309","NAME":"新密市"},{"ID":"1310","NAME":"新郑市"},{"ID":"1311","NAME":"登封市"}]},{"ID":"143","NAME":"安阳市","ITEMS":[{"ID":"1312","NAME":"文峰区"},{"ID":"1313","NAME":"北关区"},{"ID":"1314","NAME":"殷都区"},{"ID":"1315","NAME":"龙安区"},{"ID":"1316","NAME":"安阳县"},{"ID":"1317","NAME":"汤阴县"},{"ID":"1318","NAME":"滑县"},{"ID":"1319","NAME":"内黄县"},{"ID":"1320","NAME":"林州市"}]},{"ID":"144","NAME":"新乡市","ITEMS":[{"ID":"1321","NAME":"红旗区"},{"ID":"1322","NAME":"卫滨区"},{"ID":"1323","NAME":"凤泉区"},{"ID":"1324","NAME":"牧野区"},{"ID":"1325","NAME":"新乡县"},{"ID":"1326","NAME":"获嘉县"},{"ID":"1327","NAME":"原阳县"},{"ID":"1328","NAME":"延津县"},{"ID":"1329","NAME":"封丘县"},{"ID":"1330","NAME":"长垣县"},{"ID":"1331","NAME":"卫辉市"},{"ID":"1332","NAME":"辉县市"}]},{"ID":"145","NAME":"许昌市","ITEMS":[{"ID":"1333","NAME":"魏都区"},{"ID":"1334","NAME":"许昌县"},{"ID":"1335","NAME":"鄢陵县"},{"ID":"1336","NAME":"襄城县"},{"ID":"1337","NAME":"禹州市"},{"ID":"1338","NAME":"长葛市"}]},{"ID":"146","NAME":"平顶山市","ITEMS":[{"ID":"1339","NAME":"新华区"},{"ID":"1340","NAME":"卫东区"},{"ID":"1341","NAME":"石龙区"},{"ID":"1342","NAME":"湛河区"},{"ID":"1343","NAME":"宝丰县"},{"ID":"1344","NAME":"叶县"},{"ID":"1345","NAME":"鲁山县"},{"ID":"1346","NAME":"郏县"},{"ID":"1347","NAME":"舞钢市"},{"ID":"1348","NAME":"汝州市"}]},{"ID":"147","NAME":"信阳市","ITEMS":[{"ID":"1349","NAME":"浉河区"},{"ID":"1350","NAME":"平桥区"},{"ID":"1351","NAME":"罗山县"},{"ID":"1352","NAME":"光山县"},{"ID":"1353","NAME":"新县"},{"ID":"1354","NAME":"商城县"},{"ID":"1355","NAME":"固始县"},{"ID":"1356","NAME":"潢川县"},{"ID":"1357","NAME":"淮滨县"},{"ID":"1358","NAME":"息县"}]},{"ID":"148","NAME":"南阳市","ITEMS":[{"ID":"1359","NAME":"宛城区"},{"ID":"1360","NAME":"卧龙区"},{"ID":"1361","NAME":"南召县"},{"ID":"1362","NAME":"方城县"},{"ID":"1363","NAME":"西峡县"},{"ID":"1364","NAME":"镇平县"},{"ID":"1365","NAME":"内乡县"},{"ID":"1366","NAME":"淅川县"},{"ID":"1367","NAME":"社旗县"},{"ID":"1368","NAME":"唐河县"},{"ID":"1369","NAME":"新野县"},{"ID":"1370","NAME":"桐柏县"},{"ID":"1371","NAME":"邓州市"}]},{"ID":"149","NAME":"开封市","ITEMS":[{"ID":"1372","NAME":"龙亭区"},{"ID":"1373","NAME":"顺河回族区"},{"ID":"1374","NAME":"鼓楼区"},{"ID":"1375","NAME":"禹王台区"},{"ID":"1376","NAME":"金明区"},{"ID":"1377","NAME":"杞县"},{"ID":"1378","NAME":"通许县"},{"ID":"1379","NAME":"尉氏县"},{"ID":"1380","NAME":"开封县"},{"ID":"1381","NAME":"兰考县"}]},{"ID":"150","NAME":"洛阳市","ITEMS":[{"ID":"1382","NAME":"老城区"},{"ID":"1383","NAME":"西工区"},{"ID":"1384","NAME":"瀍河回族区"},{"ID":"1385","NAME":"涧西区"},{"ID":"1386","NAME":"吉利区"},{"ID":"1387","NAME":"洛龙区"},{"ID":"1388","NAME":"孟津县"},{"ID":"1389","NAME":"新安县"},{"ID":"1390","NAME":"栾川县"},{"ID":"1391","NAME":"嵩县"},{"ID":"1392","NAME":"汝阳县"},{"ID":"1393","NAME":"宜阳县"},{"ID":"1394","NAME":"洛宁县"},{"ID":"1395","NAME":"伊川县"},{"ID":"1396","NAME":"偃师市"}]},{"ID":"151","NAME":"济源市","ITEMS":[]},{"ID":"152","NAME":"焦作市","ITEMS":[{"ID":"1397","NAME":"解放区"},{"ID":"1398","NAME":"中站区"},{"ID":"1399","NAME":"马村区"},{"ID":"1400","NAME":"山阳区"},{"ID":"1401","NAME":"修武县"},{"ID":"1402","NAME":"博爱县"},{"ID":"1403","NAME":"武陟县"},{"ID":"1404","NAME":"温县"},{"ID":"1405","NAME":"沁阳市"},{"ID":"1406","NAME":"孟州市"}]},{"ID":"153","NAME":"鹤壁市","ITEMS":[{"ID":"1407","NAME":"鹤山区"},{"ID":"1408","NAME":"山城区"},{"ID":"1409","NAME":"淇滨区"},{"ID":"1410","NAME":"浚县"},{"ID":"1411","NAME":"淇县"}]},{"ID":"154","NAME":"濮阳市","ITEMS":[{"ID":"1412","NAME":"华龙区"},{"ID":"1413","NAME":"清丰县"},{"ID":"1414","NAME":"南乐县"},{"ID":"1415","NAME":"范县"},{"ID":"1416","NAME":"台前县"},{"ID":"1417","NAME":"濮阳县"}]},{"ID":"155","NAME":"周口市","ITEMS":[{"ID":"1418","NAME":"川汇区"},{"ID":"1419","NAME":"扶沟县"},{"ID":"1420","NAME":"西华县"},{"ID":"1421","NAME":"商水县"},{"ID":"1422","NAME":"沈丘县"},{"ID":"1423","NAME":"郸城县"},{"ID":"1424","NAME":"淮阳县"},{"ID":"1425","NAME":"太康县"},{"ID":"1426","NAME":"鹿邑县"},{"ID":"1427","NAME":"项城市"}]},{"ID":"156","NAME":"漯河市","ITEMS":[{"ID":"1428","NAME":"源汇区"},{"ID":"1429","NAME":"郾城区"},{"ID":"1430","NAME":"召陵区"},{"ID":"1431","NAME":"舞阳县"},{"ID":"1432","NAME":"临颍县"}]},{"ID":"157","NAME":"驻马店市","ITEMS":[{"ID":"1433","NAME":"驿城区"},{"ID":"1434","NAME":"西平县"},{"ID":"1435","NAME":"上蔡县"},{"ID":"1436","NAME":"平舆县"},{"ID":"1437","NAME":"正阳县"},{"ID":"1438","NAME":"确山县"},{"ID":"1439","NAME":"泌阳县"},{"ID":"1440","NAME":"汝南县"},{"ID":"1441","NAME":"遂平县"},{"ID":"1442","NAME":"新蔡县"}]},{"ID":"158","NAME":"三门峡市","ITEMS":[{"ID":"1443","NAME":"湖滨区"},{"ID":"1444","NAME":"渑池县"},{"ID":"1445","NAME":"陕县"},{"ID":"1446","NAME":"卢氏县"},{"ID":"1447","NAME":"义马市"},{"ID":"1448","NAME":"灵宝市"}]}]},{"ID":"17","NAME":"湖北省","ITEMS":[{"ID":"159","NAME":"武汉市","ITEMS":[{"ID":"1449","NAME":"江岸区"},{"ID":"1450","NAME":"江汉区"},{"ID":"1451","NAME":"硚口区"},{"ID":"1452","NAME":"汉阳区"},{"ID":"1453","NAME":"武昌区"},{"ID":"1454","NAME":"青山区"},{"ID":"1455","NAME":"洪山区"},{"ID":"1456","NAME":"东西湖区"},{"ID":"1457","NAME":"汉南区"},{"ID":"1458","NAME":"蔡甸区"},{"ID":"1459","NAME":"江夏区"},{"ID":"1460","NAME":"黄陂区"},{"ID":"1461","NAME":"新洲区"}]},{"ID":"160","NAME":"襄樊市","ITEMS":[{"ID":"1462","NAME":"襄城区"},{"ID":"1463","NAME":"樊城区"},{"ID":"1464","NAME":"襄阳区"},{"ID":"1465","NAME":"南漳县"},{"ID":"1466","NAME":"谷城县"},{"ID":"1467","NAME":"保康县"},{"ID":"1468","NAME":"老河口市"},{"ID":"1469","NAME":"枣阳市"},{"ID":"1470","NAME":"宜城市"}]},{"ID":"161","NAME":"鄂州市","ITEMS":[{"ID":"1471","NAME":"梁子湖区"},{"ID":"1472","NAME":"华容区"},{"ID":"1473","NAME":"鄂城区"}]},{"ID":"162","NAME":"孝感市","ITEMS":[{"ID":"1474","NAME":"孝南区"},{"ID":"1475","NAME":"孝昌县"},{"ID":"1476","NAME":"大悟县"},{"ID":"1477","NAME":"云梦县"},{"ID":"1478","NAME":"应城市"},{"ID":"1479","NAME":"安陆市"},{"ID":"1480","NAME":"汉川市"}]},{"ID":"163","NAME":"黄冈市","ITEMS":[{"ID":"1481","NAME":"黄州区"},{"ID":"1482","NAME":"团风县"},{"ID":"1483","NAME":"红安县"},{"ID":"1484","NAME":"罗田县"},{"ID":"1485","NAME":"英山县"},{"ID":"1486","NAME":"浠水县"},{"ID":"1487","NAME":"蕲春县"},{"ID":"1488","NAME":"黄梅县"},{"ID":"1489","NAME":"麻城市"},{"ID":"1490","NAME":"武穴市"}]},{"ID":"164","NAME":"黄石市","ITEMS":[{"ID":"1491","NAME":"黄石港区"},{"ID":"1492","NAME":"西塞山区"},{"ID":"1493","NAME":"下陆区"},{"ID":"1494","NAME":"铁山区"},{"ID":"1495","NAME":"阳新县"},{"ID":"1496","NAME":"大冶市"}]},{"ID":"165","NAME":"咸宁市","ITEMS":[{"ID":"1497","NAME":"咸安区"},{"ID":"1498","NAME":"嘉鱼县"},{"ID":"1499","NAME":"通城县"},{"ID":"1500","NAME":"崇阳县"},{"ID":"1501","NAME":"通山县"},{"ID":"1502","NAME":"赤壁市"}]},{"ID":"166","NAME":"荆州市","ITEMS":[{"ID":"1503","NAME":"沙市区"},{"ID":"1504","NAME":"荆州区"},{"ID":"1505","NAME":"公安县"},{"ID":"1506","NAME":"监利县"},{"ID":"1507","NAME":"江陵县"},{"ID":"1508","NAME":"石首市"},{"ID":"1509","NAME":"洪湖市"},{"ID":"1510","NAME":"松滋市"}]},{"ID":"167","NAME":"宜昌市","ITEMS":[{"ID":"1511","NAME":"西陵区"},{"ID":"1512","NAME":"伍家岗区"},{"ID":"1513","NAME":"点军区"},{"ID":"1514","NAME":"猇亭区"},{"ID":"1515","NAME":"夷陵区"},{"ID":"1516","NAME":"远安县"},{"ID":"1517","NAME":"兴山县"},{"ID":"1518","NAME":"秭归县"},{"ID":"1519","NAME":"长阳土家族自治县"},{"ID":"1520","NAME":"五峰土家族自治县"},{"ID":"1521","NAME":"宜都市"},{"ID":"1522","NAME":"当阳市"},{"ID":"1523","NAME":"枝江市"}]},{"ID":"168","NAME":"恩施土家族苗族自治州","ITEMS":[{"ID":"1524","NAME":"恩施市"},{"ID":"1525","NAME":"利川市"},{"ID":"1526","NAME":"建始县"},{"ID":"1527","NAME":"巴东县"},{"ID":"1528","NAME":"宣恩县"},{"ID":"1529","NAME":"咸丰县"},{"ID":"1530","NAME":"来凤县"},{"ID":"1531","NAME":"鹤峰县"}]},{"ID":"169","NAME":"神农架林区","ITEMS":[]},{"ID":"170","NAME":"十堰市","ITEMS":[{"ID":"1532","NAME":"茅箭区"},{"ID":"1533","NAME":"张湾区"},{"ID":"1534","NAME":"郧县"},{"ID":"1535","NAME":"郧西县"},{"ID":"1536","NAME":"竹山县"},{"ID":"1537","NAME":"竹溪县"},{"ID":"1538","NAME":"房县"},{"ID":"1539","NAME":"丹江口市"}]},{"ID":"171","NAME":"随州市","ITEMS":[{"ID":"1540","NAME":"曾都区"},{"ID":"1541","NAME":"广水市"}]},{"ID":"172","NAME":"荆门市","ITEMS":[{"ID":"1542","NAME":"东宝区"},{"ID":"1543","NAME":"掇刀区"},{"ID":"1544","NAME":"京山县"},{"ID":"1545","NAME":"沙洋县"},{"ID":"1546","NAME":"钟祥市"}]},{"ID":"173","NAME":"仙桃市","ITEMS":[]},{"ID":"174","NAME":"天门市","ITEMS":[]},{"ID":"175","NAME":"潜江市","ITEMS":[]}]},{"ID":"18","NAME":"湖南省","ITEMS":[{"ID":"176","NAME":"岳阳市","ITEMS":[{"ID":"1547","NAME":"岳阳楼区"},{"ID":"1548","NAME":"云溪区"},{"ID":"1549","NAME":"君山区"},{"ID":"1550","NAME":"岳阳县"},{"ID":"1551","NAME":"华容县"},{"ID":"1552","NAME":"湘阴县"},{"ID":"1553","NAME":"平江县"},{"ID":"1554","NAME":"汨罗市"},{"ID":"1555","NAME":"临湘市"}]},{"ID":"177","NAME":"长沙市","ITEMS":[{"ID":"1556","NAME":"芙蓉区"},{"ID":"1557","NAME":"天心区"},{"ID":"1558","NAME":"岳麓区"},{"ID":"1559","NAME":"开福区"},{"ID":"1560","NAME":"雨花区"},{"ID":"1561","NAME":"长沙县"},{"ID":"1562","NAME":"望城县"},{"ID":"1563","NAME":"宁乡县"},{"ID":"1564","NAME":"浏阳市"}]},{"ID":"178","NAME":"湘潭市","ITEMS":[{"ID":"1565","NAME":"雨湖区"},{"ID":"1566","NAME":"岳塘区"},{"ID":"1567","NAME":"湘潭县"},{"ID":"1568","NAME":"湘乡市"},{"ID":"1569","NAME":"韶山市"}]},{"ID":"179","NAME":"株洲市","ITEMS":[{"ID":"1570","NAME":"荷塘区"},{"ID":"1571","NAME":"芦淞区"},{"ID":"1572","NAME":"石峰区"},{"ID":"1573","NAME":"天元区"},{"ID":"1574","NAME":"株洲县"},{"ID":"1575","NAME":"攸县"},{"ID":"1576","NAME":"茶陵县"},{"ID":"1577","NAME":"炎陵县"},{"ID":"1578","NAME":"醴陵市"}]},{"ID":"180","NAME":"衡阳市","ITEMS":[{"ID":"1579","NAME":"珠晖区"},{"ID":"1580","NAME":"雁峰区"},{"ID":"1581","NAME":"石鼓区"},{"ID":"1582","NAME":"蒸湘区"},{"ID":"1583","NAME":"南岳区"},{"ID":"1584","NAME":"衡阳县"},{"ID":"1585","NAME":"衡南县"},{"ID":"1586","NAME":"衡山县"},{"ID":"1587","NAME":"衡东县"},{"ID":"1588","NAME":"祁东县"},{"ID":"1589","NAME":"耒阳市"},{"ID":"1590","NAME":"常宁市"}]},{"ID":"181","NAME":"郴州市","ITEMS":[{"ID":"1591","NAME":"北湖区"},{"ID":"1592","NAME":"苏仙区"},{"ID":"1593","NAME":"桂阳县"},{"ID":"1594","NAME":"宜章县"},{"ID":"1595","NAME":"永兴县"},{"ID":"1596","NAME":"嘉禾县"},{"ID":"1597","NAME":"临武县"},{"ID":"1598","NAME":"汝城县"},{"ID":"1599","NAME":"桂东县"},{"ID":"1600","NAME":"安仁县"},{"ID":"1601","NAME":"资兴市"}]},{"ID":"182","NAME":"常德市","ITEMS":[{"ID":"1602","NAME":"武陵区"},{"ID":"1603","NAME":"鼎城区"},{"ID":"1604","NAME":"安乡县"},{"ID":"1605","NAME":"汉寿县"},{"ID":"1606","NAME":"澧县"},{"ID":"1607","NAME":"临澧县"},{"ID":"1608","NAME":"桃源县"},{"ID":"1609","NAME":"石门县"},{"ID":"1610","NAME":"津市市"}]},{"ID":"183","NAME":"益阳市","ITEMS":[{"ID":"1611","NAME":"资阳区"},{"ID":"1612","NAME":"赫山区"},{"ID":"1613","NAME":"南县"},{"ID":"1614","NAME":"桃江县"},{"ID":"1615","NAME":"安化县"},{"ID":"1616","NAME":"沅江市"}]},{"ID":"184","NAME":"娄底市","ITEMS":[{"ID":"1617","NAME":"娄星区"},{"ID":"1618","NAME":"双峰县"},{"ID":"1619","NAME":"新化县"},{"ID":"1620","NAME":"冷水江市"},{"ID":"1621","NAME":"涟源市"}]},{"ID":"185","NAME":"邵阳市","ITEMS":[{"ID":"1622","NAME":"双清区"},{"ID":"1623","NAME":"大祥区"},{"ID":"1624","NAME":"北塔区"},{"ID":"1625","NAME":"邵东县"},{"ID":"1626","NAME":"新邵县"},{"ID":"1627","NAME":"邵阳县"},{"ID":"1628","NAME":"隆回县"},{"ID":"1629","NAME":"洞口县"},{"ID":"1630","NAME":"绥宁县"},{"ID":"1631","NAME":"新宁县"},{"ID":"1632","NAME":"城步苗族自治县"},{"ID":"1633","NAME":"武冈市"}]},{"ID":"186","NAME":"湘西土家族苗族自治州","ITEMS":[{"ID":"1634","NAME":"吉首市"},{"ID":"1635","NAME":"泸溪县"},{"ID":"1636","NAME":"凤凰县"},{"ID":"1637","NAME":"花垣县"},{"ID":"1638","NAME":"保靖县"},{"ID":"1639","NAME":"古丈县"},{"ID":"1640","NAME":"永顺县"},{"ID":"1641","NAME":"龙山县"}]},{"ID":"187","NAME":"张家界市","ITEMS":[{"ID":"1642","NAME":"永定区"},{"ID":"1643","NAME":"武陵源区"},{"ID":"1644","NAME":"慈利县"},{"ID":"1645","NAME":"桑植县"}]},{"ID":"188","NAME":"怀化市","ITEMS":[{"ID":"1646","NAME":"鹤城区"},{"ID":"1647","NAME":"中方县"},{"ID":"1648","NAME":"沅陵县"},{"ID":"1649","NAME":"辰溪县"},{"ID":"1650","NAME":"溆浦县"},{"ID":"1651","NAME":"会同县"},{"ID":"1652","NAME":"麻阳苗族自治县"},{"ID":"1653","NAME":"新晃侗族自治县"},{"ID":"1654","NAME":"芷江侗族自治县"},{"ID":"1655","NAME":"靖州苗族侗族自治县"},{"ID":"1656","NAME":"通道侗族自治县"},{"ID":"1657","NAME":"洪江市"}]},{"ID":"189","NAME":"永州市","ITEMS":[{"ID":"1658","NAME":"零陵区"},{"ID":"1659","NAME":"冷水滩区"},{"ID":"1660","NAME":"祁阳县"},{"ID":"1661","NAME":"东安县"},{"ID":"1662","NAME":"双牌县"},{"ID":"1663","NAME":"道县"},{"ID":"1664","NAME":"江永县"},{"ID":"1665","NAME":"宁远县"},{"ID":"1666","NAME":"蓝山县"},{"ID":"1667","NAME":"新田县"},{"ID":"1668","NAME":"江华瑶族自治县"}]}]},{"ID":"19","NAME":"广东省","ITEMS":[{"ID":"190","NAME":"广州市","ITEMS":[{"ID":"1669","NAME":"从化市"},{"ID":"1670","NAME":"荔湾区"},{"ID":"1671","NAME":"越秀区"},{"ID":"1672","NAME":"海珠区"},{"ID":"1673","NAME":"天河区"},{"ID":"1674","NAME":"白云区"},{"ID":"1675","NAME":"花都区"},{"ID":"1676","NAME":"黄埔区"},{"ID":"1677","NAME":"萝岗区"},{"ID":"1678","NAME":"南沙区"},{"ID":"1679","NAME":"番禺区"},{"ID":"1680","NAME":"增城市"}]},{"ID":"191","NAME":"汕尾市","ITEMS":[{"ID":"1681","NAME":"海丰县"},{"ID":"1682","NAME":"陆河县"},{"ID":"1683","NAME":"陆丰市"}]},{"ID":"192","NAME":"阳江市","ITEMS":[{"ID":"1684","NAME":"江城区"},{"ID":"1685","NAME":"阳西县"},{"ID":"1686","NAME":"阳东县"},{"ID":"1687","NAME":"阳春市"}]},{"ID":"193","NAME":"揭阳市","ITEMS":[{"ID":"1688","NAME":"榕城区"},{"ID":"1689","NAME":"揭东县"},{"ID":"1690","NAME":"揭西县"},{"ID":"1691","NAME":"惠来县"},{"ID":"1692","NAME":"普宁市"}]},{"ID":"194","NAME":"茂名市","ITEMS":[{"ID":"1693","NAME":"茂南区"},{"ID":"1694","NAME":"茂港区"},{"ID":"1695","NAME":"电白县"},{"ID":"1696","NAME":"高州市"},{"ID":"1697","NAME":"化州市"},{"ID":"1698","NAME":"信宜市"}]},{"ID":"195","NAME":"惠州市","ITEMS":[{"ID":"1699","NAME":"惠城区"},{"ID":"1700","NAME":"惠阳区"},{"ID":"1701","NAME":"博罗县"},{"ID":"1702","NAME":"惠东县"},{"ID":"1703","NAME":"龙门县"}]},{"ID":"196","NAME":"江门市","ITEMS":[{"ID":"1704","NAME":"蓬江区"},{"ID":"1705","NAME":"江海区"},{"ID":"1706","NAME":"新会区"},{"ID":"1707","NAME":"台山市"},{"ID":"1708","NAME":"开平市"},{"ID":"1709","NAME":"鹤山市"},{"ID":"1710","NAME":"恩平市"}]},{"ID":"197","NAME":"韶关市","ITEMS":[{"ID":"1711","NAME":"武江区"},{"ID":"1712","NAME":"浈江区"},{"ID":"1713","NAME":"曲江区"},{"ID":"1714","NAME":"始兴县"},{"ID":"1715","NAME":"仁化县"},{"ID":"1716","NAME":"翁源县"},{"ID":"1717","NAME":"乳源瑶族自治县"},{"ID":"1718","NAME":"新丰县"},{"ID":"1719","NAME":"乐昌市"},{"ID":"1720","NAME":"南雄市"}]},{"ID":"198","NAME":"梅州市","ITEMS":[{"ID":"1721","NAME":"梅江区"},{"ID":"1722","NAME":"梅县"},{"ID":"1723","NAME":"大埔县"},{"ID":"1724","NAME":"丰顺县"},{"ID":"1725","NAME":"五华县"},{"ID":"1726","NAME":"平远县"},{"ID":"1727","NAME":"蕉岭县"},{"ID":"1728","NAME":"兴宁市"}]},{"ID":"199","NAME":"汕头市","ITEMS":[{"ID":"1729","NAME":"龙湖区"},{"ID":"1730","NAME":"金平区"},{"ID":"1731","NAME":"濠江区"},{"ID":"1732","NAME":"潮阳区"},{"ID":"1733","NAME":"潮南区"},{"ID":"1734","NAME":"澄海区"},{"ID":"1735","NAME":"南澳县"}]},{"ID":"200","NAME":"深圳市","ITEMS":[{"ID":"1736","NAME":"罗湖区"},{"ID":"1737","NAME":"福田区"},{"ID":"1738","NAME":"南山区"},{"ID":"1739","NAME":"宝安区"},{"ID":"1740","NAME":"龙岗区"},{"ID":"1741","NAME":"盐田区"}]},{"ID":"201","NAME":"珠海市","ITEMS":[{"ID":"1742","NAME":"香洲区"},{"ID":"1743","NAME":"斗门区"},{"ID":"1744","NAME":"金湾区"}]},{"ID":"202","NAME":"佛山市","ITEMS":[{"ID":"1745","NAME":"禅城区"},{"ID":"1746","NAME":"南海区"},{"ID":"1747","NAME":"顺德区"},{"ID":"1748","NAME":"三水区"},{"ID":"1749","NAME":"高明区"}]},{"ID":"203","NAME":"肇庆市","ITEMS":[{"ID":"1750","NAME":"端州区"},{"ID":"1751","NAME":"鼎湖区"},{"ID":"1752","NAME":"广宁县"},{"ID":"1753","NAME":"怀集县"},{"ID":"1754","NAME":"封开县"},{"ID":"1755","NAME":"德庆县"},{"ID":"1756","NAME":"高要市"},{"ID":"1757","NAME":"四会市"}]},{"ID":"204","NAME":"湛江市","ITEMS":[{"ID":"1758","NAME":"赤坎区"},{"ID":"1759","NAME":"霞山区"},{"ID":"1760","NAME":"坡头区"},{"ID":"1761","NAME":"麻章区"},{"ID":"1762","NAME":"遂溪县"},{"ID":"1763","NAME":"徐闻县"},{"ID":"1764","NAME":"廉江市"},{"ID":"1765","NAME":"雷州市"},{"ID":"1766","NAME":"吴川市"}]},{"ID":"205","NAME":"中山市","ITEMS":[]},{"ID":"206","NAME":"河源市","ITEMS":[{"ID":"1767","NAME":"源城区"},{"ID":"1768","NAME":"紫金县"},{"ID":"1769","NAME":"龙川县"},{"ID":"1770","NAME":"连平县"},{"ID":"1771","NAME":"和平县"},{"ID":"1772","NAME":"东源县"}]},{"ID":"207","NAME":"清远市","ITEMS":[{"ID":"1773","NAME":"清城区"},{"ID":"1774","NAME":"佛冈县"},{"ID":"1775","NAME":"阳山县"},{"ID":"1776","NAME":"连山壮族瑶族自治县"},{"ID":"1777","NAME":"连南瑶族自治县"},{"ID":"1778","NAME":"清新县"},{"ID":"1779","NAME":"英德市"},{"ID":"1780","NAME":"连州市"}]},{"ID":"208","NAME":"云浮市","ITEMS":[{"ID":"1781","NAME":"云城区"},{"ID":"1782","NAME":"新兴县"},{"ID":"1783","NAME":"郁南县"},{"ID":"1784","NAME":"云安县"},{"ID":"1785","NAME":"罗定市"}]},{"ID":"209","NAME":"潮州市","ITEMS":[{"ID":"1786","NAME":"湘桥区"},{"ID":"1787","NAME":"潮安县"},{"ID":"1788","NAME":"饶平县"}]},{"ID":"210","NAME":"东莞市","ITEMS":[]}]},{"ID":"22","NAME":"甘肃省","ITEMS":[{"ID":"211","NAME":"兰州市","ITEMS":[{"ID":"1789","NAME":"城关区"},{"ID":"1790","NAME":"七里河区"},{"ID":"1791","NAME":"西固区"},{"ID":"1792","NAME":"安宁区"},{"ID":"1793","NAME":"红古区"},{"ID":"1794","NAME":"永登县"},{"ID":"1795","NAME":"皋兰县"},{"ID":"1796","NAME":"榆中县"}]},{"ID":"212","NAME":"金昌市","ITEMS":[{"ID":"1797","NAME":"金川区"},{"ID":"1798","NAME":"永昌县"}]},{"ID":"213","NAME":"白银市","ITEMS":[{"ID":"1799","NAME":"白银区"},{"ID":"1800","NAME":"平川区"},{"ID":"1801","NAME":"靖远县"},{"ID":"1802","NAME":"会宁县"},{"ID":"1803","NAME":"景泰县"}]},{"ID":"214","NAME":"天水市","ITEMS":[{"ID":"1804","NAME":"秦州区"},{"ID":"1805","NAME":"麦积区"},{"ID":"1806","NAME":"清水县"},{"ID":"1807","NAME":"秦安县"},{"ID":"1808","NAME":"甘谷县"},{"ID":"1809","NAME":"武山县"},{"ID":"1810","NAME":"张家川回族自治县"}]},{"ID":"215","NAME":"嘉峪关市","ITEMS":[]},{"ID":"216","NAME":"武威市","ITEMS":[{"ID":"1811","NAME":"凉州区"},{"ID":"1812","NAME":"民勤县"},{"ID":"1813","NAME":"古浪县"},{"ID":"1814","NAME":"天祝藏族自治县"}]},{"ID":"217","NAME":"张掖市","ITEMS":[{"ID":"1815","NAME":"甘州区"},{"ID":"1816","NAME":"肃南裕固族自治县"},{"ID":"1817","NAME":"民乐县"},{"ID":"1818","NAME":"临泽县"},{"ID":"1819","NAME":"高台县"},{"ID":"1820","NAME":"山丹县"}]},{"ID":"218","NAME":"平凉市","ITEMS":[{"ID":"1821","NAME":"崆峒区"},{"ID":"1822","NAME":"泾川县"},{"ID":"1823","NAME":"灵台县"},{"ID":"1824","NAME":"崇信县"},{"ID":"1825","NAME":"华亭县"},{"ID":"1826","NAME":"庄浪县"},{"ID":"1827","NAME":"静宁县"}]},{"ID":"219","NAME":"酒泉市","ITEMS":[{"ID":"1828","NAME":"肃州区"},{"ID":"1829","NAME":"金塔县"},{"ID":"1830","NAME":"瓜州县"},{"ID":"1831","NAME":"肃北蒙古族自治县"},{"ID":"1832","NAME":"阿克塞哈萨克族自治县"},{"ID":"1833","NAME":"玉门市"},{"ID":"1834","NAME":"敦煌市"}]},{"ID":"220","NAME":"庆阳市","ITEMS":[{"ID":"1835","NAME":"西峰区"},{"ID":"1836","NAME":"庆城县"},{"ID":"1837","NAME":"环县"},{"ID":"1838","NAME":"华池县"},{"ID":"1839","NAME":"合水县"},{"ID":"1840","NAME":"正宁县"},{"ID":"1841","NAME":"宁县"},{"ID":"1842","NAME":"镇原县"}]},{"ID":"221","NAME":"定西市","ITEMS":[{"ID":"1843","NAME":"安定区"},{"ID":"1844","NAME":"通渭县"},{"ID":"1845","NAME":"陇西县"},{"ID":"1846","NAME":"渭源县"},{"ID":"1847","NAME":"临洮县"},{"ID":"1848","NAME":"漳县"},{"ID":"1849","NAME":"岷县"}]},{"ID":"222","NAME":"陇南市","ITEMS":[{"ID":"1850","NAME":"武都区"},{"ID":"1851","NAME":"成县"},{"ID":"1852","NAME":"文县"},{"ID":"1853","NAME":"宕昌县"},{"ID":"1854","NAME":"康县"},{"ID":"1855","NAME":"西和县"},{"ID":"1856","NAME":"礼县"},{"ID":"1857","NAME":"徽县"},{"ID":"1858","NAME":"两当县"}]},{"ID":"223","NAME":"临夏回族自治州","ITEMS":[{"ID":"1859","NAME":"临夏市"},{"ID":"1860","NAME":"临夏县"},{"ID":"1861","NAME":"康乐县"},{"ID":"1862","NAME":"永靖县"},{"ID":"1863","NAME":"广河县"},{"ID":"1864","NAME":"和政县"},{"ID":"1865","NAME":"东乡族自治县"},{"ID":"1866","NAME":"积石山保安族东乡族撒拉族自治县"}]},{"ID":"224","NAME":"甘南藏族自治州","ITEMS":[{"ID":"1867","NAME":"合作市"},{"ID":"1868","NAME":"临潭县"},{"ID":"1869","NAME":"卓尼县"},{"ID":"1870","NAME":"舟曲县"},{"ID":"1871","NAME":"迭部县"},{"ID":"1872","NAME":"玛曲县"},{"ID":"1873","NAME":"碌曲县"},{"ID":"1874","NAME":"夏河县"}]}]},{"ID":"28","NAME":"四川省","ITEMS":[{"ID":"225","NAME":"成都市","ITEMS":[{"ID":"1875","NAME":"锦江区"},{"ID":"1876","NAME":"青羊区"},{"ID":"1877","NAME":"金牛区"},{"ID":"1878","NAME":"武侯区"},{"ID":"1879","NAME":"成华区"},{"ID":"1880","NAME":"龙泉驿区"},{"ID":"1881","NAME":"青白江区"},{"ID":"1882","NAME":"新都区"},{"ID":"1883","NAME":"温江区"},{"ID":"1884","NAME":"金堂县"},{"ID":"1885","NAME":"双流县"},{"ID":"1886","NAME":"郫县"},{"ID":"1887","NAME":"大邑县"},{"ID":"1888","NAME":"蒲江县"},{"ID":"1889","NAME":"新津县"},{"ID":"1890","NAME":"都江堰市"},{"ID":"1891","NAME":"彭州市"},{"ID":"1892","NAME":"邛崃市"},{"ID":"1893","NAME":"崇州市"}]},{"ID":"226","NAME":"攀枝花市","ITEMS":[{"ID":"1894","NAME":"东区"},{"ID":"1895","NAME":"西区"},{"ID":"1896","NAME":"仁和区"},{"ID":"1897","NAME":"米易县"},{"ID":"1898","NAME":"盐边县"}]},{"ID":"227","NAME":"自贡市","ITEMS":[{"ID":"1899","NAME":"自流井区"},{"ID":"1900","NAME":"贡井区"},{"ID":"1901","NAME":"大安区"},{"ID":"1902","NAME":"沿滩区"},{"ID":"1903","NAME":"荣县"},{"ID":"1904","NAME":"富顺县"}]},{"ID":"228","NAME":"绵阳市","ITEMS":[{"ID":"1905","NAME":"涪城区"},{"ID":"1906","NAME":"游仙区"},{"ID":"1907","NAME":"三台县"},{"ID":"1908","NAME":"盐亭县"},{"ID":"1909","NAME":"安县"},{"ID":"1910","NAME":"梓潼县"},{"ID":"1911","NAME":"北川羌族自治县"},{"ID":"1912","NAME":"平武县"},{"ID":"1913","NAME":"江油市"}]},{"ID":"229","NAME":"南充市","ITEMS":[{"ID":"1914","NAME":"顺庆区"},{"ID":"1915","NAME":"高坪区"},{"ID":"1916","NAME":"嘉陵区"},{"ID":"1917","NAME":"南部县"},{"ID":"1918","NAME":"营山县"},{"ID":"1919","NAME":"蓬安县"},{"ID":"1920","NAME":"仪陇县"},{"ID":"1921","NAME":"西充县"},{"ID":"1922","NAME":"阆中市"}]},{"ID":"230","NAME":"达州市","ITEMS":[{"ID":"1923","NAME":"通川区"},{"ID":"1924","NAME":"达县"},{"ID":"1925","NAME":"宣汉县"},{"ID":"1926","NAME":"开江县"},{"ID":"1927","NAME":"大竹县"},{"ID":"1928","NAME":"渠县"},{"ID":"1929","NAME":"万源市"}]},{"ID":"231","NAME":"遂宁市","ITEMS":[{"ID":"1930","NAME":"船山区"},{"ID":"1931","NAME":"安居区"},{"ID":"1932","NAME":"蓬溪县"},{"ID":"1933","NAME":"射洪县"},{"ID":"1934","NAME":"大英县"}]},{"ID":"232","NAME":"广安市","ITEMS":[{"ID":"1935","NAME":"广安区"},{"ID":"1936","NAME":"岳池县"},{"ID":"1937","NAME":"武胜县"},{"ID":"1938","NAME":"邻水县"},{"ID":"1939","NAME":"华蓥市"}]},{"ID":"233","NAME":"巴中市","ITEMS":[{"ID":"1940","NAME":"巴州区"},{"ID":"1941","NAME":"通江县"},{"ID":"1942","NAME":"南江县"},{"ID":"1943","NAME":"平昌县"}]},{"ID":"234","NAME":"泸州市","ITEMS":[{"ID":"1944","NAME":"江阳区"},{"ID":"1945","NAME":"纳溪区"},{"ID":"1946","NAME":"龙马潭区"},{"ID":"1947","NAME":"泸县"},{"ID":"1948","NAME":"合江县"},{"ID":"1949","NAME":"叙永县"},{"ID":"1950","NAME":"古蔺县"}]},{"ID":"235","NAME":"宜宾市","ITEMS":[{"ID":"1951","NAME":"翠屏区"},{"ID":"1952","NAME":"宜宾县"},{"ID":"1953","NAME":"南溪县"},{"ID":"1954","NAME":"江安县"},{"ID":"1955","NAME":"长宁县"},{"ID":"1956","NAME":"高县"},{"ID":"1957","NAME":"珙县"},{"ID":"1958","NAME":"筠连县"},{"ID":"1959","NAME":"兴文县"},{"ID":"1960","NAME":"屏山县"}]},{"ID":"236","NAME":"资阳市","ITEMS":[{"ID":"1961","NAME":"雁江区"},{"ID":"1962","NAME":"安岳县"},{"ID":"1963","NAME":"乐至县"},{"ID":"1964","NAME":"简阳市"}]},{"ID":"237","NAME":"内江市","ITEMS":[{"ID":"1965","NAME":"市中区"},{"ID":"1966","NAME":"东兴区"},{"ID":"1967","NAME":"威远县"},{"ID":"1968","NAME":"资中县"},{"ID":"1969","NAME":"隆昌县"}]},{"ID":"238","NAME":"乐山市","ITEMS":[{"ID":"1970","NAME":"市中区"},{"ID":"1971","NAME":"沙湾区"},{"ID":"1972","NAME":"五通桥区"},{"ID":"1973","NAME":"金口河区"},{"ID":"1974","NAME":"犍为县"},{"ID":"1975","NAME":"井研县"},{"ID":"1976","NAME":"夹江县"},{"ID":"1977","NAME":"沐川县"},{"ID":"1978","NAME":"峨边彝族自治县"},{"ID":"1979","NAME":"马边彝族自治县"},{"ID":"1980","NAME":"峨眉山市"}]},{"ID":"239","NAME":"眉山市","ITEMS":[{"ID":"1981","NAME":"东坡区"},{"ID":"1982","NAME":"仁寿县"},{"ID":"1983","NAME":"彭山县"},{"ID":"1984","NAME":"洪雅县"},{"ID":"1985","NAME":"丹棱县"},{"ID":"1986","NAME":"青神县"}]},{"ID":"240","NAME":"凉山彝族自治州","ITEMS":[{"ID":"1987","NAME":"西昌市"},{"ID":"1988","NAME":"木里藏族自治县"},{"ID":"1989","NAME":"盐源县"},{"ID":"1990","NAME":"德昌县"},{"ID":"1991","NAME":"会理县"},{"ID":"1992","NAME":"会东县"},{"ID":"1993","NAME":"宁南县"},{"ID":"1994","NAME":"普格县"},{"ID":"1995","NAME":"布拖县"},{"ID":"1996","NAME":"金阳县"},{"ID":"1997","NAME":"昭觉县"},{"ID":"1998","NAME":"喜德县"},{"ID":"1999","NAME":"冕宁县"},{"ID":"2000","NAME":"越西县"},{"ID":"2001","NAME":"甘洛县"},{"ID":"2002","NAME":"美姑县"},{"ID":"2003","NAME":"雷波县"}]},{"ID":"241","NAME":"雅安市","ITEMS":[{"ID":"2004","NAME":"雨城区"},{"ID":"2005","NAME":"名山县"},{"ID":"2006","NAME":"荥经县"},{"ID":"2007","NAME":"汉源县"},{"ID":"2008","NAME":"石棉县"},{"ID":"2009","NAME":"天全县"},{"ID":"2010","NAME":"芦山县"},{"ID":"2011","NAME":"宝兴县"}]},{"ID":"242","NAME":"甘孜藏族自治州","ITEMS":[{"ID":"2012","NAME":"康定县"},{"ID":"2013","NAME":"泸定县"},{"ID":"2014","NAME":"丹巴县"},{"ID":"2015","NAME":"九龙县"},{"ID":"2016","NAME":"雅江县"},{"ID":"2017","NAME":"道孚县"},{"ID":"2018","NAME":"炉霍县"},{"ID":"2019","NAME":"甘孜县"},{"ID":"2020","NAME":"新龙县"},{"ID":"2021","NAME":"德格县"},{"ID":"2022","NAME":"白玉县"},{"ID":"2023","NAME":"石渠县"},{"ID":"2024","NAME":"色达县"},{"ID":"2025","NAME":"理塘县"},{"ID":"2026","NAME":"巴塘县"},{"ID":"2027","NAME":"乡城县"},{"ID":"2028","NAME":"稻城县"},{"ID":"2029","NAME":"得荣县"}]},{"ID":"243","NAME":"阿坝藏族羌族自治州","ITEMS":[{"ID":"2030","NAME":"汶川县"},{"ID":"2031","NAME":"理县"},{"ID":"2032","NAME":"茂县"},{"ID":"2033","NAME":"松潘县"},{"ID":"2034","NAME":"九寨沟县"},{"ID":"2035","NAME":"金川县"},{"ID":"2036","NAME":"小金县"},{"ID":"2037","NAME":"黑水县"},{"ID":"2038","NAME":"马尔康县"},{"ID":"2039","NAME":"壤塘县"},{"ID":"2040","NAME":"阿坝县"},{"ID":"2041","NAME":"若尔盖县"},{"ID":"2042","NAME":"红原县"}]},{"ID":"244","NAME":"德阳市","ITEMS":[{"ID":"2043","NAME":"旌阳区"},{"ID":"2044","NAME":"中江县"},{"ID":"2045","NAME":"罗江县"},{"ID":"2046","NAME":"广汉市"},{"ID":"2047","NAME":"什邡市"},{"ID":"2048","NAME":"绵竹市"}]},{"ID":"245","NAME":"广元市","ITEMS":[{"ID":"2049","NAME":"市中区"},{"ID":"2050","NAME":"元坝区"},{"ID":"2051","NAME":"朝天区"},{"ID":"2052","NAME":"旺苍县"},{"ID":"2053","NAME":"青川县"},{"ID":"2054","NAME":"剑阁县"},{"ID":"2055","NAME":"苍溪县"}]}]},{"ID":"29","NAME":"贵州省","ITEMS":[{"ID":"246","NAME":"贵阳市","ITEMS":[{"ID":"2056","NAME":"南明区"},{"ID":"2057","NAME":"云岩区"},{"ID":"2058","NAME":"花溪区"},{"ID":"2059","NAME":"乌当区"},{"ID":"2060","NAME":"白云区"},{"ID":"2061","NAME":"小河区"},{"ID":"2062","NAME":"开阳县"},{"ID":"2063","NAME":"息烽县"},{"ID":"2064","NAME":"修文县"},{"ID":"2065","NAME":"清镇市"}]},{"ID":"247","NAME":"遵义市","ITEMS":[{"ID":"2066","NAME":"红花岗区"},{"ID":"2067","NAME":"汇川区"},{"ID":"2068","NAME":"遵义县"},{"ID":"2069","NAME":"桐梓县"},{"ID":"2070","NAME":"绥阳县"},{"ID":"2071","NAME":"正安县"},{"ID":"2072","NAME":"道真仡佬族苗族自治县"},{"ID":"2073","NAME":"务川仡佬族苗族自治县"},{"ID":"2074","NAME":"凤冈县"},{"ID":"2075","NAME":"湄潭县"},{"ID":"2076","NAME":"余庆县"},{"ID":"2077","NAME":"习水县"},{"ID":"2078","NAME":"赤水市"},{"ID":"2079","NAME":"仁怀市"}]},{"ID":"248","NAME":"安顺市","ITEMS":[{"ID":"2080","NAME":"西秀区"},{"ID":"2081","NAME":"平坝县"},{"ID":"2082","NAME":"普定县"},{"ID":"2083","NAME":"镇宁布依族苗族自治县"},{"ID":"2084","NAME":"关岭布依族苗族自治县"},{"ID":"2085","NAME":"紫云苗族布依族自治县"}]},{"ID":"249","NAME":"黔南布依族苗族自治州","ITEMS":[{"ID":"2086","NAME":"都匀市"},{"ID":"2087","NAME":"福泉市"},{"ID":"2088","NAME":"荔波县"},{"ID":"2089","NAME":"贵定县"},{"ID":"2090","NAME":"瓮安县"},{"ID":"2091","NAME":"独山县"},{"ID":"2092","NAME":"平塘县"},{"ID":"2093","NAME":"罗甸县"},{"ID":"2094","NAME":"长顺县"},{"ID":"2095","NAME":"龙里县"},{"ID":"2096","NAME":"惠水县"},{"ID":"2097","NAME":"三都水族自治县"}]},{"ID":"250","NAME":"黔东南苗族侗族自治州","ITEMS":[{"ID":"2098","NAME":"凯里市"},{"ID":"2099","NAME":"黄平县"},{"ID":"2100","NAME":"施秉县"},{"ID":"2101","NAME":"三穗县"},{"ID":"2102","NAME":"镇远县"},{"ID":"2103","NAME":"岑巩县"},{"ID":"2104","NAME":"天柱县"},{"ID":"2105","NAME":"锦屏县"},{"ID":"2106","NAME":"剑河县"},{"ID":"2107","NAME":"台江县"},{"ID":"2108","NAME":"黎平县"},{"ID":"2109","NAME":"榕江县"},{"ID":"2110","NAME":"从江县"},{"ID":"2111","NAME":"雷山县"},{"ID":"2112","NAME":"麻江县"},{"ID":"2113","NAME":"丹寨县"}]},{"ID":"251","NAME":"铜仁地区","ITEMS":[{"ID":"2114","NAME":"铜仁市"},{"ID":"2115","NAME":"江口县"},{"ID":"2116","NAME":"玉屏侗族自治县"},{"ID":"2117","NAME":"石阡县"},{"ID":"2118","NAME":"思南县"},{"ID":"2119","NAME":"印江土家族苗族自治县"},{"ID":"2120","NAME":"德江县"},{"ID":"2121","NAME":"沿河土家族自治县"},{"ID":"2122","NAME":"松桃苗族自治县"},{"ID":"2123","NAME":"万山特区"}]},{"ID":"252","NAME":"毕节地区","ITEMS":[{"ID":"2124","NAME":"毕节市"},{"ID":"2125","NAME":"大方县"},{"ID":"2126","NAME":"黔西县"},{"ID":"2127","NAME":"金沙县"},{"ID":"2128","NAME":"织金县"},{"ID":"2129","NAME":"纳雍县"},{"ID":"2130","NAME":"威宁彝族回族苗族自治县"},{"ID":"2131","NAME":"赫章县"}]},{"ID":"253","NAME":"六盘水市","ITEMS":[{"ID":"2132","NAME":"钟山区"},{"ID":"2133","NAME":"六枝特区"},{"ID":"2134","NAME":"水城县"},{"ID":"2135","NAME":"盘县"}]},{"ID":"254","NAME":"黔西南布依族苗族自治州","ITEMS":[{"ID":"2136","NAME":"兴义市"},{"ID":"2137","NAME":"兴仁县"},{"ID":"2138","NAME":"普安县"},{"ID":"2139","NAME":"晴隆县"},{"ID":"2140","NAME":"贞丰县"},{"ID":"2141","NAME":"望谟县"},{"ID":"2142","NAME":"册亨县"},{"ID":"2143","NAME":"安龙县"}]}]},{"ID":"20","NAME":"海南省","ITEMS":[{"ID":"255","NAME":"海口市","ITEMS":[{"ID":"2144","NAME":"秀英区"},{"ID":"2145","NAME":"龙华区"},{"ID":"2146","NAME":"琼山区"},{"ID":"2147","NAME":"美兰区"}]},{"ID":"256","NAME":"三亚市","ITEMS":[]},{"ID":"257","NAME":"五指山市","ITEMS":[]},{"ID":"258","NAME":"琼海市","ITEMS":[]},{"ID":"259","NAME":"儋州市","ITEMS":[]},{"ID":"260","NAME":"文昌市","ITEMS":[]},{"ID":"261","NAME":"万宁市","ITEMS":[]},{"ID":"262","NAME":"东方市","ITEMS":[]},{"ID":"263","NAME":"澄迈县","ITEMS":[]},{"ID":"264","NAME":"定安县","ITEMS":[]},{"ID":"265","NAME":"屯昌县","ITEMS":[]},{"ID":"266","NAME":"临高县","ITEMS":[]},{"ID":"267","NAME":"白沙黎族自治县","ITEMS":[]},{"ID":"268","NAME":"昌江黎族自治县","ITEMS":[]},{"ID":"269","NAME":"乐东黎族自治县","ITEMS":[]},{"ID":"270","NAME":"陵水黎族自治县","ITEMS":[]},{"ID":"271","NAME":"保亭黎族苗族自治县","ITEMS":[]},{"ID":"272","NAME":"琼中黎族苗族自治县","ITEMS":[]}]},{"ID":"30","NAME":"云南省","ITEMS":[{"ID":"273","NAME":"西双版纳傣族自治州","ITEMS":[{"ID":"2148","NAME":"景洪市"},{"ID":"2149","NAME":"勐海县"},{"ID":"2150","NAME":"勐腊县"}]},{"ID":"274","NAME":"德宏傣族景颇族自治州","ITEMS":[{"ID":"2151","NAME":"瑞丽市"},{"ID":"2152","NAME":"潞西市"},{"ID":"2153","NAME":"梁河县"},{"ID":"2154","NAME":"盈江县"},{"ID":"2155","NAME":"陇川县"}]},{"ID":"275","NAME":"昭通市","ITEMS":[{"ID":"2156","NAME":"昭阳区"},{"ID":"2157","NAME":"鲁甸县"},{"ID":"2158","NAME":"巧家县"},{"ID":"2159","NAME":"盐津县"},{"ID":"2160","NAME":"大关县"},{"ID":"2161","NAME":"永善县"},{"ID":"2162","NAME":"绥江县"},{"ID":"2163","NAME":"镇雄县"},{"ID":"2164","NAME":"彝良县"},{"ID":"2165","NAME":"威信县"},{"ID":"2166","NAME":"水富县"}]},{"ID":"276","NAME":"昆明市","ITEMS":[{"ID":"2167","NAME":"五华区"},{"ID":"2168","NAME":"盘龙区"},{"ID":"2169","NAME":"官渡区"},{"ID":"2170","NAME":"西山区"},{"ID":"2171","NAME":"东川区"},{"ID":"2172","NAME":"呈贡县"},{"ID":"2173","NAME":"晋宁县"},{"ID":"2174","NAME":"富民县"},{"ID":"2175","NAME":"宜良县"},{"ID":"2176","NAME":"石林彝族自治县"},{"ID":"2177","NAME":"嵩明县"},{"ID":"2178","NAME":"禄劝彝族苗族自治县"},{"ID":"2179","NAME":"寻甸回族彝族自治县"},{"ID":"2180","NAME":"安宁市"}]},{"ID":"277","NAME":"大理白族自治州","ITEMS":[{"ID":"2181","NAME":"大理市"},{"ID":"2182","NAME":"漾濞彝族自治县"},{"ID":"2183","NAME":"祥云县"},{"ID":"2184","NAME":"宾川县"},{"ID":"2185","NAME":"弥渡县"},{"ID":"2186","NAME":"南涧彝族自治县"},{"ID":"2187","NAME":"巍山彝族回族自治县"},{"ID":"2188","NAME":"永平县"},{"ID":"2189","NAME":"云龙县"},{"ID":"2190","NAME":"洱源县"},{"ID":"2191","NAME":"剑川县"},{"ID":"2192","NAME":"鹤庆县"}]},{"ID":"278","NAME":"红河哈尼族彝族自治州","ITEMS":[{"ID":"2193","NAME":"个旧市"},{"ID":"2194","NAME":"开远市"},{"ID":"2195","NAME":"蒙自县"},{"ID":"2196","NAME":"屏边苗族自治县"},{"ID":"2197","NAME":"建水县"},{"ID":"2198","NAME":"石屏县"},{"ID":"2199","NAME":"弥勒县"},{"ID":"2200","NAME":"泸西县"},{"ID":"2201","NAME":"元阳县"},{"ID":"2202","NAME":"红河县"},{"ID":"2203","NAME":"金平苗族瑶族傣族自治县"},{"ID":"2204","NAME":"绿春县"},{"ID":"2205","NAME":"河口瑶族自治县"}]},{"ID":"279","NAME":"曲靖市","ITEMS":[{"ID":"2206","NAME":"麒麟区"},{"ID":"2207","NAME":"马龙县"},{"ID":"2208","NAME":"陆良县"},{"ID":"2209","NAME":"师宗县"},{"ID":"2210","NAME":"罗平县"},{"ID":"2211","NAME":"富源县"},{"ID":"2212","NAME":"会泽县"},{"ID":"2213","NAME":"沾益县"},{"ID":"2214","NAME":"宣威市"}]},{"ID":"280","NAME":"保山市","ITEMS":[{"ID":"2215","NAME":"隆阳区"},{"ID":"2216","NAME":"施甸县"},{"ID":"2217","NAME":"腾冲县"},{"ID":"2218","NAME":"龙陵县"},{"ID":"2219","NAME":"昌宁县"}]},{"ID":"281","NAME":"文山壮族苗族自治州","ITEMS":[{"ID":"2220","NAME":"文山县"},{"ID":"2221","NAME":"砚山县"},{"ID":"2222","NAME":"西畴县"},{"ID":"2223","NAME":"麻栗坡县"},{"ID":"2224","NAME":"马关县"},{"ID":"2225","NAME":"丘北县"},{"ID":"2226","NAME":"广南县"},{"ID":"2227","NAME":"富宁县"}]},{"ID":"282","NAME":"玉溪市","ITEMS":[{"ID":"2228","NAME":"红塔区"},{"ID":"2229","NAME":"江川县"},{"ID":"2230","NAME":"澄江县"},{"ID":"2231","NAME":"通海县"},{"ID":"2232","NAME":"华宁县"},{"ID":"2233","NAME":"易门县"},{"ID":"2234","NAME":"峨山彝族自治县"},{"ID":"2235","NAME":"新平彝族傣族自治县"},{"ID":"2236","NAME":"元江哈尼族彝族傣族自治县"}]},{"ID":"283","NAME":"楚雄彝族自治州","ITEMS":[{"ID":"2237","NAME":"楚雄市"},{"ID":"2238","NAME":"双柏县"},{"ID":"2239","NAME":"牟定县"},{"ID":"2240","NAME":"南华县"},{"ID":"2241","NAME":"姚安县"},{"ID":"2242","NAME":"大姚县"},{"ID":"2243","NAME":"永仁县"},{"ID":"2244","NAME":"元谋县"},{"ID":"2245","NAME":"武定县"},{"ID":"2246","NAME":"禄丰县"}]},{"ID":"284","NAME":"普洱市","ITEMS":[{"ID":"2247","NAME":"思茅区"},{"ID":"2248","NAME":"宁洱哈尼族彝族自治县"},{"ID":"2249","NAME":"墨江哈尼族自治县"},{"ID":"2250","NAME":"景东彝族自治县"},{"ID":"2251","NAME":"景谷傣族彝族自治县"},{"ID":"2252","NAME":"镇沅彝族哈尼族拉祜族自治县"},{"ID":"2253","NAME":"江城哈尼族彝族自治县"},{"ID":"2254","NAME":"孟连傣族拉祜族佤族自治县"},{"ID":"2255","NAME":"澜沧拉祜族自治县"},{"ID":"2256","NAME":"西盟佤族自治县"}]},{"ID":"285","NAME":"临沧市","ITEMS":[{"ID":"2257","NAME":"临翔区"},{"ID":"2258","NAME":"凤庆县"},{"ID":"2259","NAME":"云县"},{"ID":"2260","NAME":"永德县"},{"ID":"2261","NAME":"镇康县"},{"ID":"2262","NAME":"双江拉祜族佤族布朗族傣族自治县"},{"ID":"2263","NAME":"耿马傣族佤族自治县"},{"ID":"2264","NAME":"沧源佤族自治县"}]},{"ID":"286","NAME":"怒江傈傈族自治州","ITEMS":[{"ID":"2265","NAME":"泸水县"},{"ID":"2266","NAME":"福贡县"},{"ID":"2267","NAME":"贡山独龙族怒族自治县"},{"ID":"2268","NAME":"兰坪白族普米族自治县"}]},{"ID":"287","NAME":"迪庆藏族自治州","ITEMS":[{"ID":"2269","NAME":"香格里拉县"},{"ID":"2270","NAME":"德钦县"},{"ID":"2271","NAME":"维西傈僳族自治县"}]},{"ID":"288","NAME":"丽江市","ITEMS":[{"ID":"2272","NAME":"古城区"},{"ID":"2273","NAME":"玉龙纳西族自治县"},{"ID":"2274","NAME":"永胜县"},{"ID":"2275","NAME":"华坪县"},{"ID":"2276","NAME":"宁蒗彝族自治县"}]}]},{"ID":"25","NAME":"青海省","ITEMS":[{"ID":"289","NAME":"海北藏族自治州","ITEMS":[{"ID":"2277","NAME":"门源回族自治县"},{"ID":"2278","NAME":"祁连县"},{"ID":"2279","NAME":"海晏县"},{"ID":"2280","NAME":"刚察县"}]},{"ID":"290","NAME":"西宁市","ITEMS":[{"ID":"2281","NAME":"城东区"},{"ID":"2282","NAME":"城中区"},{"ID":"2283","NAME":"城西区"},{"ID":"2284","NAME":"城北区"},{"ID":"2285","NAME":"大通回族土族自治县"},{"ID":"2286","NAME":"湟中县"},{"ID":"2287","NAME":"湟源县"}]},{"ID":"291","NAME":"海东地区","ITEMS":[{"ID":"2288","NAME":"平安县"},{"ID":"2289","NAME":"民和回族土族自治县"},{"ID":"2290","NAME":"乐都县"},{"ID":"2291","NAME":"互助土族自治县"},{"ID":"2292","NAME":"化隆回族自治县"},{"ID":"2293","NAME":"循化撒拉族自治县"}]},{"ID":"292","NAME":"黄南藏族自治州","ITEMS":[{"ID":"2294","NAME":"同仁县"},{"ID":"2295","NAME":"尖扎县"},{"ID":"2296","NAME":"泽库县"},{"ID":"2297","NAME":"河南蒙古族自治县"}]},{"ID":"293","NAME":"海南藏族自治州","ITEMS":[{"ID":"2298","NAME":"共和县"},{"ID":"2299","NAME":"同德县"},{"ID":"2300","NAME":"贵德县"},{"ID":"2301","NAME":"兴海县"},{"ID":"2302","NAME":"贵南县"}]},{"ID":"294","NAME":"果洛藏族自治州","ITEMS":[{"ID":"2303","NAME":"玛沁县"},{"ID":"2304","NAME":"班玛县"},{"ID":"2305","NAME":"甘德县"},{"ID":"2306","NAME":"达日县"},{"ID":"2307","NAME":"久治县"},{"ID":"2308","NAME":"玛多县"}]},{"ID":"295","NAME":"玉树藏族自治州","ITEMS":[{"ID":"2309","NAME":"玉树县"},{"ID":"2310","NAME":"杂多县"},{"ID":"2311","NAME":"称多县"},{"ID":"2312","NAME":"治多县"},{"ID":"2313","NAME":"囊谦县"},{"ID":"2314","NAME":"曲麻莱县"}]},{"ID":"296","NAME":"海西蒙古族藏族自治州","ITEMS":[{"ID":"2315","NAME":"格尔木市"},{"ID":"2316","NAME":"德令哈市"},{"ID":"2317","NAME":"乌兰县"},{"ID":"2318","NAME":"都兰县"},{"ID":"2319","NAME":"天峻县"}]}]},{"ID":"23","NAME":"陕西省","ITEMS":[{"ID":"297","NAME":"西安市","ITEMS":[{"ID":"2320","NAME":"新城区"},{"ID":"2321","NAME":"碑林区"},{"ID":"2322","NAME":"莲湖区"},{"ID":"2323","NAME":"灞桥区"},{"ID":"2324","NAME":"未央区"},{"ID":"2325","NAME":"雁塔区"},{"ID":"2326","NAME":"阎良区"},{"ID":"2327","NAME":"临潼区"},{"ID":"2328","NAME":"长安区"},{"ID":"2329","NAME":"蓝田县"},{"ID":"2330","NAME":"周至县"},{"ID":"2331","NAME":"户县"},{"ID":"2332","NAME":"高陵县"}]},{"ID":"298","NAME":"咸阳市","ITEMS":[{"ID":"2333","NAME":"秦都区"},{"ID":"2334","NAME":"杨陵区"},{"ID":"2335","NAME":"渭城区"},{"ID":"2336","NAME":"三原县"},{"ID":"2337","NAME":"泾阳县"},{"ID":"2338","NAME":"乾县"},{"ID":"2339","NAME":"礼泉县"},{"ID":"2340","NAME":"永寿县"},{"ID":"2341","NAME":"彬县"},{"ID":"2342","NAME":"长武县"},{"ID":"2343","NAME":"旬邑县"},{"ID":"2344","NAME":"淳化县"},{"ID":"2345","NAME":"武功县"},{"ID":"2346","NAME":"兴平市"}]},{"ID":"299","NAME":"延安市","ITEMS":[{"ID":"2347","NAME":"宝塔区"},{"ID":"2348","NAME":"延长县"},{"ID":"2349","NAME":"延川县"},{"ID":"2350","NAME":"子长县"},{"ID":"2351","NAME":"安塞县"},{"ID":"2352","NAME":"志丹县"},{"ID":"2353","NAME":"吴起县"},{"ID":"2354","NAME":"甘泉县"},{"ID":"2355","NAME":"富县"},{"ID":"2356","NAME":"洛川县"},{"ID":"2357","NAME":"宜川县"},{"ID":"2358","NAME":"黄龙县"},{"ID":"2359","NAME":"黄陵县"}]},{"ID":"300","NAME":"榆林市","ITEMS":[{"ID":"2360","NAME":"榆阳区"},{"ID":"2361","NAME":"神木县"},{"ID":"2362","NAME":"府谷县"},{"ID":"2363","NAME":"横山县"},{"ID":"2364","NAME":"靖边县"},{"ID":"2365","NAME":"定边县"},{"ID":"2366","NAME":"绥德县"},{"ID":"2367","NAME":"米脂县"},{"ID":"2368","NAME":"佳县"},{"ID":"2369","NAME":"吴堡县"},{"ID":"2370","NAME":"清涧县"},{"ID":"2371","NAME":"子洲县"}]},{"ID":"301","NAME":"渭南市","ITEMS":[{"ID":"2372","NAME":"临渭区"},{"ID":"2373","NAME":"华县"},{"ID":"2374","NAME":"潼关县"},{"ID":"2375","NAME":"大荔县"},{"ID":"2376","NAME":"合阳县"},{"ID":"2377","NAME":"澄城县"},{"ID":"2378","NAME":"蒲城县"},{"ID":"2379","NAME":"白水县"},{"ID":"2380","NAME":"富平县"},{"ID":"2381","NAME":"韩城市"},{"ID":"2382","NAME":"华阴市"}]},{"ID":"302","NAME":"商洛市","ITEMS":[{"ID":"2383","NAME":"商州区"},{"ID":"2384","NAME":"洛南县"},{"ID":"2385","NAME":"丹凤县"},{"ID":"2386","NAME":"商南县"},{"ID":"2387","NAME":"山阳县"},{"ID":"2388","NAME":"镇安县"},{"ID":"2389","NAME":"柞水县"}]},{"ID":"303","NAME":"安康市","ITEMS":[{"ID":"2390","NAME":"汉滨区"},{"ID":"2391","NAME":"汉阴县"},{"ID":"2392","NAME":"石泉县"},{"ID":"2393","NAME":"宁陕县"},{"ID":"2394","NAME":"紫阳县"},{"ID":"2395","NAME":"岚皋县"},{"ID":"2396","NAME":"平利县"},{"ID":"2397","NAME":"镇坪县"},{"ID":"2398","NAME":"旬阳县"},{"ID":"2399","NAME":"白河县"}]},{"ID":"304","NAME":"汉中市","ITEMS":[{"ID":"2400","NAME":"汉台区"},{"ID":"2401","NAME":"南郑县"},{"ID":"2402","NAME":"城固县"},{"ID":"2403","NAME":"洋县"},{"ID":"2404","NAME":"西乡县"},{"ID":"2405","NAME":"勉县"},{"ID":"2406","NAME":"宁强县"},{"ID":"2407","NAME":"略阳县"},{"ID":"2408","NAME":"镇巴县"},{"ID":"2409","NAME":"留坝县"},{"ID":"2410","NAME":"佛坪县"}]},{"ID":"305","NAME":"宝鸡市","ITEMS":[{"ID":"2411","NAME":"渭滨区"},{"ID":"2412","NAME":"金台区"},{"ID":"2413","NAME":"陈仓区"},{"ID":"2414","NAME":"凤翔县"},{"ID":"2415","NAME":"岐山县"},{"ID":"2416","NAME":"扶风县"},{"ID":"2417","NAME":"眉县"},{"ID":"2418","NAME":"陇县"},{"ID":"2419","NAME":"千阳县"},{"ID":"2420","NAME":"麟游县"},{"ID":"2421","NAME":"凤县"},{"ID":"2422","NAME":"太白县"}]},{"ID":"306","NAME":"铜川市","ITEMS":[{"ID":"2423","NAME":"王益区"},{"ID":"2424","NAME":"印台区"},{"ID":"2425","NAME":"耀州区"},{"ID":"2426","NAME":"宜君县"}]}]},{"ID":"21","NAME":"广西壮族自治区","ITEMS":[{"ID":"307","NAME":"防城港市","ITEMS":[{"ID":"2427","NAME":"港口区"},{"ID":"2428","NAME":"防城区"},{"ID":"2429","NAME":"上思县"},{"ID":"2430","NAME":"东兴市"}]},{"ID":"308","NAME":"南宁市","ITEMS":[{"ID":"2431","NAME":"兴宁区"},{"ID":"2432","NAME":"青秀区"},{"ID":"2433","NAME":"江南区"},{"ID":"2434","NAME":"西乡塘区"},{"ID":"2435","NAME":"良庆区"},{"ID":"2436","NAME":"邕宁区"},{"ID":"2437","NAME":"武鸣县"},{"ID":"2438","NAME":"隆安县"},{"ID":"2439","NAME":"马山县"},{"ID":"2440","NAME":"上林县"},{"ID":"2441","NAME":"宾阳县"},{"ID":"2442","NAME":"横县"}]},{"ID":"309","NAME":"崇左市","ITEMS":[{"ID":"2443","NAME":"江洲区"},{"ID":"2444","NAME":"扶绥县"},{"ID":"2445","NAME":"宁明县"},{"ID":"2446","NAME":"龙州县"},{"ID":"2447","NAME":"大新县"},{"ID":"2448","NAME":"天等县"},{"ID":"2449","NAME":"凭祥市"}]},{"ID":"310","NAME":"来宾市","ITEMS":[{"ID":"2450","NAME":"兴宾区"},{"ID":"2451","NAME":"忻城县"},{"ID":"2452","NAME":"象州县"},{"ID":"2453","NAME":"武宣县"},{"ID":"2454","NAME":"金秀瑶族自治县"},{"ID":"2455","NAME":"合山市"}]},{"ID":"311","NAME":"柳州市","ITEMS":[{"ID":"2456","NAME":"城中区"},{"ID":"2457","NAME":"鱼峰区"},{"ID":"2458","NAME":"柳南区"},{"ID":"2459","NAME":"柳北区"},{"ID":"2460","NAME":"柳江县"},{"ID":"2461","NAME":"柳城县"},{"ID":"2462","NAME":"鹿寨县"},{"ID":"2463","NAME":"融安县"},{"ID":"2464","NAME":"融水苗族自治县"},{"ID":"2465","NAME":"三江侗族自治县"}]},{"ID":"312","NAME":"桂林市","ITEMS":[{"ID":"2466","NAME":"秀峰区"},{"ID":"2467","NAME":"叠彩区"},{"ID":"2468","NAME":"象山区"},{"ID":"2469","NAME":"七星区"},{"ID":"2470","NAME":"雁山区"},{"ID":"2471","NAME":"阳朔县"},{"ID":"2472","NAME":"临桂县"},{"ID":"2473","NAME":"灵川县"},{"ID":"2474","NAME":"全州县"},{"ID":"2475","NAME":"兴安县"},{"ID":"2476","NAME":"永福县"},{"ID":"2477","NAME":"灌阳县"},{"ID":"2478","NAME":"龙胜各族自治县"},{"ID":"2479","NAME":"资源县"},{"ID":"2480","NAME":"平乐县"},{"ID":"2481","NAME":"荔浦县"},{"ID":"2482","NAME":"恭城瑶族自治县"}]},{"ID":"313","NAME":"梧州市","ITEMS":[{"ID":"2483","NAME":"万秀区"},{"ID":"2484","NAME":"碟山区"},{"ID":"2485","NAME":"长洲区"},{"ID":"2486","NAME":"苍梧县"},{"ID":"2487","NAME":"藤县"},{"ID":"2488","NAME":"蒙山县"},{"ID":"2489","NAME":"岑溪市"}]},{"ID":"314","NAME":"贺州市","ITEMS":[{"ID":"2490","NAME":"八步区"},{"ID":"2491","NAME":"昭平县"},{"ID":"2492","NAME":"钟山县"},{"ID":"2493","NAME":"富川瑶族自治县"}]},{"ID":"315","NAME":"贵港市","ITEMS":[{"ID":"2494","NAME":"港北区"},{"ID":"2495","NAME":"港南区"},{"ID":"2496","NAME":"覃塘区"},{"ID":"2497","NAME":"平南县"},{"ID":"2498","NAME":"桂平市"}]},{"ID":"316","NAME":"玉林市","ITEMS":[{"ID":"2499","NAME":"玉州区"},{"ID":"2500","NAME":"容县"},{"ID":"2501","NAME":"陆川县"},{"ID":"2502","NAME":"博白县"},{"ID":"2503","NAME":"兴业县"},{"ID":"2504","NAME":"北流市"}]},{"ID":"317","NAME":"百色市","ITEMS":[{"ID":"2505","NAME":"右江区"},{"ID":"2506","NAME":"田阳县"},{"ID":"2507","NAME":"田东县"},{"ID":"2508","NAME":"平果县"},{"ID":"2509","NAME":"德保县"},{"ID":"2510","NAME":"靖西县"},{"ID":"2511","NAME":"那坡县"},{"ID":"2512","NAME":"凌云县"},{"ID":"2513","NAME":"乐业县"},{"ID":"2514","NAME":"田林县"},{"ID":"2515","NAME":"西林县"},{"ID":"2516","NAME":"隆林各族自治县"}]},{"ID":"318","NAME":"钦州市","ITEMS":[{"ID":"2517","NAME":"钦南区"},{"ID":"2518","NAME":"钦北区"},{"ID":"2519","NAME":"灵山县"},{"ID":"2520","NAME":"浦北县"}]},{"ID":"319","NAME":"河池市","ITEMS":[{"ID":"2521","NAME":"金城江区"},{"ID":"2522","NAME":"南丹县"},{"ID":"2523","NAME":"天峨县"},{"ID":"2524","NAME":"凤山县"},{"ID":"2525","NAME":"东兰县"},{"ID":"2526","NAME":"罗城仫佬族自治县"},{"ID":"2527","NAME":"环江毛南族自治县"},{"ID":"2528","NAME":"巴马瑶族自治县"},{"ID":"2529","NAME":"都安瑶族自治县"},{"ID":"2530","NAME":"大化瑶族自治县"},{"ID":"2531","NAME":"宜州市"}]},{"ID":"320","NAME":"北海市","ITEMS":[{"ID":"2532","NAME":"海城区"},{"ID":"2533","NAME":"银海区"},{"ID":"2534","NAME":"铁山港区"},{"ID":"2535","NAME":"合浦县"}]}]},{"ID":"31","NAME":"西藏自治区","ITEMS":[{"ID":"321","NAME":"拉萨市","ITEMS":[{"ID":"2536","NAME":"城关区"},{"ID":"2537","NAME":"林周县"},{"ID":"2538","NAME":"当雄县"},{"ID":"2539","NAME":"尼木县"},{"ID":"2540","NAME":"曲水县"},{"ID":"2541","NAME":"堆龙德庆县"},{"ID":"2542","NAME":"达孜县"},{"ID":"2543","NAME":"墨竹工卡县"}]},{"ID":"322","NAME":"日喀则地区","ITEMS":[{"ID":"2544","NAME":"日喀则市"},{"ID":"2545","NAME":"南木林县"},{"ID":"2546","NAME":"江孜县"},{"ID":"2547","NAME":"定日县"},{"ID":"2548","NAME":"萨迦县"},{"ID":"2549","NAME":"拉孜县"},{"ID":"2550","NAME":"昂仁县"},{"ID":"2551","NAME":"谢通门县"},{"ID":"2552","NAME":"白朗县"},{"ID":"2553","NAME":"仁布县"},{"ID":"2554","NAME":"康马县"},{"ID":"2555","NAME":"定结县"},{"ID":"2556","NAME":"仲巴县"},{"ID":"2557","NAME":"亚东县"},{"ID":"2558","NAME":"吉隆县"},{"ID":"2559","NAME":"聂拉木县"},{"ID":"2560","NAME":"萨嘎县"},{"ID":"2561","NAME":"岗巴县"}]},{"ID":"323","NAME":"山南地区","ITEMS":[{"ID":"2562","NAME":"乃东县"},{"ID":"2563","NAME":"扎囊县"},{"ID":"2564","NAME":"贡嘎县"},{"ID":"2565","NAME":"桑日县"},{"ID":"2566","NAME":"琼结县"},{"ID":"2567","NAME":"曲松县"},{"ID":"2568","NAME":"措美县"},{"ID":"2569","NAME":"洛扎县"},{"ID":"2570","NAME":"加查县"},{"ID":"2571","NAME":"隆子县"},{"ID":"2572","NAME":"错那县"},{"ID":"2573","NAME":"浪卡子县"}]},{"ID":"324","NAME":"林芝地区","ITEMS":[{"ID":"2574","NAME":"林芝县"},{"ID":"2575","NAME":"工布江达县"},{"ID":"2576","NAME":"米林县"},{"ID":"2577","NAME":"墨脱县"},{"ID":"2578","NAME":"波密县"},{"ID":"2579","NAME":"察隅县"},{"ID":"2580","NAME":"朗县"}]},{"ID":"325","NAME":"昌都地区","ITEMS":[{"ID":"2581","NAME":"昌都县"},{"ID":"2582","NAME":"江达县"},{"ID":"2583","NAME":"贡觉县"},{"ID":"2584","NAME":"类乌齐县"},{"ID":"2585","NAME":"丁青县"},{"ID":"2586","NAME":"察雅县"},{"ID":"2587","NAME":"八宿县"},{"ID":"2588","NAME":"左贡县"},{"ID":"2589","NAME":"芒康县"},{"ID":"2590","NAME":"洛隆县"},{"ID":"2591","NAME":"边坝县"}]},{"ID":"326","NAME":"那曲地区","ITEMS":[{"ID":"2592","NAME":"那曲县"},{"ID":"2593","NAME":"嘉黎县"},{"ID":"2594","NAME":"比如县"},{"ID":"2595","NAME":"聂荣县"},{"ID":"2596","NAME":"安多县"},{"ID":"2597","NAME":"申扎县"},{"ID":"2598","NAME":"索县"},{"ID":"2599","NAME":"班戈县"},{"ID":"2600","NAME":"巴青县"},{"ID":"2601","NAME":"尼玛县"}]},{"ID":"327","NAME":"阿里地区","ITEMS":[{"ID":"2602","NAME":"普兰县"},{"ID":"2603","NAME":"札达县"},{"ID":"2604","NAME":"噶尔县"},{"ID":"2605","NAME":"日土县"},{"ID":"2606","NAME":"革吉县"},{"ID":"2607","NAME":"改则县"},{"ID":"2608","NAME":"措勤县"}]}]},{"ID":"26","NAME":"宁夏回族自治区","ITEMS":[{"ID":"328","NAME":"银川市","ITEMS":[{"ID":"2609","NAME":"兴庆区"},{"ID":"2610","NAME":"西夏区"},{"ID":"2611","NAME":"金凤区"},{"ID":"2612","NAME":"永宁县"},{"ID":"2613","NAME":"贺兰县"},{"ID":"2614","NAME":"灵武市"}]},{"ID":"329","NAME":"石嘴山市","ITEMS":[{"ID":"2615","NAME":"大武口区"},{"ID":"2616","NAME":"惠农区"},{"ID":"2617","NAME":"平罗县"}]},{"ID":"330","NAME":"吴忠市","ITEMS":[{"ID":"2618","NAME":"利通区"},{"ID":"2619","NAME":"盐池县"},{"ID":"2620","NAME":"同心县"},{"ID":"2621","NAME":"青铜峡市"}]},{"ID":"331","NAME":"固原市","ITEMS":[{"ID":"2622","NAME":"原州区"},{"ID":"2623","NAME":"西吉县"},{"ID":"2624","NAME":"隆德县"},{"ID":"2625","NAME":"泾源县"},{"ID":"2626","NAME":"彭阳县"}]},{"ID":"332","NAME":"中卫市","ITEMS":[{"ID":"2627","NAME":"沙坡头区"},{"ID":"2628","NAME":"中宁县"},{"ID":"2629","NAME":"海原县"}]}]},{"ID":"24","NAME":"新 疆维吾尔自治区","ITEMS":[{"ID":"333","NAME":"塔城地区","ITEMS":[{"ID":"2630","NAME":"塔城市"},{"ID":"2631","NAME":"乌苏市"},{"ID":"2632","NAME":"额敏县"},{"ID":"2633","NAME":"沙湾县"},{"ID":"2634","NAME":"托里县"},{"ID":"2635","NAME":"裕民县"},{"ID":"2636","NAME":"和布克赛尔蒙古自治县"}]},{"ID":"334","NAME":"哈密地区","ITEMS":[{"ID":"2637","NAME":"哈密市"},{"ID":"2638","NAME":"巴里坤哈萨克自治县"},{"ID":"2639","NAME":"伊吾县"}]},{"ID":"335","NAME":"和田地区","ITEMS":[{"ID":"2640","NAME":"和田市"},{"ID":"2641","NAME":"和田县"},{"ID":"2642","NAME":"墨玉县"},{"ID":"2643","NAME":"皮山县"},{"ID":"2644","NAME":"洛浦县"},{"ID":"2645","NAME":"策勒县"},{"ID":"2646","NAME":"于田县"},{"ID":"2647","NAME":"民丰县"}]},{"ID":"336","NAME":"阿勒泰地区","ITEMS":[{"ID":"2648","NAME":"阿勒泰市"},{"ID":"2649","NAME":"布尔津县"},{"ID":"2650","NAME":"富蕴县"},{"ID":"2651","NAME":"福海县"},{"ID":"2652","NAME":"哈巴河县"},{"ID":"2653","NAME":"青河县"},{"ID":"2654","NAME":"吉木乃县"}]},{"ID":"337","NAME":"克孜勒苏柯尔克孜自治州","ITEMS":[{"ID":"2655","NAME":"阿图什市"},{"ID":"2656","NAME":"阿克陶县"},{"ID":"2657","NAME":"阿合奇县"},{"ID":"2658","NAME":"乌恰县"}]},{"ID":"338","NAME":"博尔塔拉蒙古自治州","ITEMS":[{"ID":"2659","NAME":"博乐市"},{"ID":"2660","NAME":"精河县"},{"ID":"2661","NAME":"温泉县"}]},{"ID":"339","NAME":"克拉玛依市","ITEMS":[{"ID":"2662","NAME":"独山子区"},{"ID":"2663","NAME":"克拉玛依区"},{"ID":"2664","NAME":"白碱滩区"},{"ID":"2665","NAME":"乌尔禾区"}]},{"ID":"340","NAME":"乌鲁木齐市","ITEMS":[{"ID":"2666","NAME":"天山区"},{"ID":"2667","NAME":"沙依巴克区"},{"ID":"2668","NAME":"新市区"},{"ID":"2669","NAME":"水磨沟区"},{"ID":"2670","NAME":"头屯河区"},{"ID":"2671","NAME":"达坂城区"},{"ID":"2672","NAME":"米东区"},{"ID":"2673","NAME":"乌鲁木齐县"}]},{"ID":"341","NAME":"石河子市","ITEMS":[]},{"ID":"342","NAME":"昌吉回族自治州","ITEMS":[{"ID":"2674","NAME":"昌吉市"},{"ID":"2675","NAME":"阜康市"},{"ID":"2676","NAME":"呼图壁县"},{"ID":"2677","NAME":"玛纳斯县"},{"ID":"2678","NAME":"奇台县"},{"ID":"2679","NAME":"吉木萨尔县"},{"ID":"2680","NAME":"木垒哈萨克自治县"}]},{"ID":"343","NAME":"五家渠市","ITEMS":[]},{"ID":"344","NAME":"吐鲁番地区","ITEMS":[{"ID":"2681","NAME":"吐鲁番市"},{"ID":"2682","NAME":"鄯善县"},{"ID":"2683","NAME":"托克逊县"}]},{"ID":"345","NAME":"巴音郭楞蒙古自治州","ITEMS":[{"ID":"2684","NAME":"库尔勒市"},{"ID":"2685","NAME":"轮台县"},{"ID":"2686","NAME":"尉犁县"},{"ID":"2687","NAME":"若羌县"},{"ID":"2688","NAME":"且末县"},{"ID":"2689","NAME":"焉耆回族自治县"},{"ID":"2690","NAME":"和静县"},{"ID":"2691","NAME":"和硕县"},{"ID":"2692","NAME":"博湖县"}]},{"ID":"346","NAME":"阿克苏地区","ITEMS":[{"ID":"2693","NAME":"阿克苏市"},{"ID":"2694","NAME":"温宿县"},{"ID":"2695","NAME":"库车县"},{"ID":"2696","NAME":"沙雅县"},{"ID":"2697","NAME":"新和县"},{"ID":"2698","NAME":"拜城县"},{"ID":"2699","NAME":"乌什县"},{"ID":"2700","NAME":"阿瓦提县"},{"ID":"2701","NAME":"柯坪县"}]},{"ID":"347","NAME":"阿拉尔市","ITEMS":[]},{"ID":"348","NAME":"喀什地区","ITEMS":[{"ID":"2702","NAME":"喀什市"},{"ID":"2703","NAME":"疏附县"},{"ID":"2704","NAME":"疏勒县"},{"ID":"2705","NAME":"英吉沙县"},{"ID":"2706","NAME":"泽普县"},{"ID":"2707","NAME":"莎车县"},{"ID":"2708","NAME":"叶城县"},{"ID":"2709","NAME":"麦盖提县"},{"ID":"2710","NAME":"岳普湖县"},{"ID":"2711","NAME":"伽师县"},{"ID":"2712","NAME":"巴楚县"},{"ID":"2713","NAME":"塔什库尔干塔吉克自治县"}]},{"ID":"349","NAME":"图木舒克市","ITEMS":[]},{"ID":"350","NAME":"伊犁哈萨克自治州","ITEMS":[{"ID":"2714","NAME":"伊宁市"},{"ID":"2715","NAME":"奎屯市"},{"ID":"2716","NAME":"伊宁县"},{"ID":"2717","NAME":"察布查尔锡伯自治县"},{"ID":"2718","NAME":"霍城县"},{"ID":"2719","NAME":"巩留县"},{"ID":"2720","NAME":"新源县"},{"ID":"2721","NAME":"昭苏县"},{"ID":"2722","NAME":"特克斯县"},{"ID":"2723","NAME":"尼勒克县"}]}]},{"ID":"5","NAME":"内蒙古自治区","ITEMS":[{"ID":"351","NAME":"呼伦贝尔市","ITEMS":[{"ID":"2724","NAME":"海拉尔区"},{"ID":"2725","NAME":"阿荣旗"},{"ID":"2726","NAME":"莫力达瓦达斡尔族自治旗"},{"ID":"2727","NAME":"鄂伦春自治旗"},{"ID":"2728","NAME":"鄂温克族自治旗"},{"ID":"2729","NAME":"陈巴尔虎旗"},{"ID":"2730","NAME":"新巴尔虎左旗"},{"ID":"2731","NAME":"新巴尔虎右旗"},{"ID":"2732","NAME":"满洲里市"},{"ID":"2733","NAME":"牙克石市"},{"ID":"2734","NAME":"扎兰屯市"},{"ID":"2735","NAME":"额尔古纳市"},{"ID":"2736","NAME":"根河市"}]},{"ID":"352","NAME":"呼和浩特市","ITEMS":[{"ID":"2737","NAME":"新城区"},{"ID":"2738","NAME":"回民区"},{"ID":"2739","NAME":"玉泉区"},{"ID":"2740","NAME":"赛罕区"},{"ID":"2741","NAME":"土默特左旗"},{"ID":"2742","NAME":"托克托县"},{"ID":"2743","NAME":"和林格尔县"},{"ID":"2744","NAME":"清水河县"},{"ID":"2745","NAME":"武川县"}]},{"ID":"353","NAME":"包头市","ITEMS":[{"ID":"2746","NAME":"东河区"},{"ID":"2747","NAME":"昆都仑区"},{"ID":"2748","NAME":"青山区"},{"ID":"2749","NAME":"石拐区"},{"ID":"2750","NAME":"白云鄂博矿区"},{"ID":"2751","NAME":"九原区"},{"ID":"2752","NAME":"土默特右旗"},{"ID":"2753","NAME":"固阳县"},{"ID":"2754","NAME":"达尔罕茂明安联合旗"}]},{"ID":"354","NAME":"乌海市","ITEMS":[{"ID":"2755","NAME":"海勃湾区"},{"ID":"2756","NAME":"海南区"},{"ID":"2757","NAME":"乌达区"}]},{"ID":"355","NAME":"乌兰察布市","ITEMS":[{"ID":"2758","NAME":"集宁区"},{"ID":"2759","NAME":"卓资县"},{"ID":"2760","NAME":"化德县"},{"ID":"2761","NAME":"商都县"},{"ID":"2762","NAME":"兴和县"},{"ID":"2763","NAME":"凉城县"},{"ID":"2764","NAME":"察哈尔右翼前旗"},{"ID":"2765","NAME":"察哈尔右翼中旗"},{"ID":"2766","NAME":"察哈尔右翼后旗"},{"ID":"2767","NAME":"四子王旗"},{"ID":"2768","NAME":"丰镇市"}]},{"ID":"356","NAME":"通辽市","ITEMS":[{"ID":"2769","NAME":"科尔沁区"},{"ID":"2770","NAME":"科尔沁左翼中旗"},{"ID":"2771","NAME":"科尔沁左翼后旗"},{"ID":"2772","NAME":"开鲁县"},{"ID":"2773","NAME":"库伦旗"},{"ID":"2774","NAME":"奈曼旗"},{"ID":"2775","NAME":"扎鲁特旗"},{"ID":"2776","NAME":"霍林郭勒市"}]},{"ID":"357","NAME":"赤峰市","ITEMS":[{"ID":"2777","NAME":"红山区"},{"ID":"2778","NAME":"元宝山区"},{"ID":"2779","NAME":"松山区"},{"ID":"2780","NAME":"阿鲁科尔沁旗"},{"ID":"2781","NAME":"巴林左旗"},{"ID":"2782","NAME":"巴林右旗"},{"ID":"2783","NAME":"林西县"},{"ID":"2784","NAME":"克什克腾旗"},{"ID":"2785","NAME":"翁牛特旗"},{"ID":"2786","NAME":"喀喇沁旗"},{"ID":"2787","NAME":"宁城县"},{"ID":"2788","NAME":"敖汉旗"}]},{"ID":"358","NAME":"鄂尔多斯市","ITEMS":[{"ID":"2789","NAME":"东胜区"},{"ID":"2790","NAME":"达拉特旗"},{"ID":"2791","NAME":"准格尔旗"},{"ID":"2792","NAME":"鄂托克前旗"},{"ID":"2793","NAME":"鄂托克旗"},{"ID":"2794","NAME":"杭锦旗"},{"ID":"2795","NAME":"乌审旗"},{"ID":"2796","NAME":"伊金霍洛旗"}]},{"ID":"359","NAME":"巴彦淖尔市","ITEMS":[{"ID":"2797","NAME":"临河区"},{"ID":"2798","NAME":"五原县"},{"ID":"2799","NAME":"磴口县"},{"ID":"2800","NAME":"乌拉特前旗"},{"ID":"2801","NAME":"乌拉特中旗"},{"ID":"2802","NAME":"乌拉特后旗"},{"ID":"2803","NAME":"杭锦后旗"}]},{"ID":"360","NAME":"锡林郭勒盟","ITEMS":[{"ID":"2804","NAME":"二连浩特市"},{"ID":"2805","NAME":"锡林浩特市"},{"ID":"2806","NAME":"阿巴嘎旗"},{"ID":"2807","NAME":"苏尼特左旗"},{"ID":"2808","NAME":"苏尼特右旗"},{"ID":"2809","NAME":"东乌珠穆沁旗"},{"ID":"2810","NAME":"西乌珠穆沁旗"},{"ID":"2811","NAME":"太仆寺旗"},{"ID":"2812","NAME":"镶黄旗"},{"ID":"2813","NAME":"正镶白旗"},{"ID":"2814","NAME":"正蓝旗"},{"ID":"2815","NAME":"多伦县"}]},{"ID":"361","NAME":"兴安盟","ITEMS":[{"ID":"2816","NAME":"乌兰浩特市"},{"ID":"2817","NAME":"阿尔山市"},{"ID":"2818","NAME":"科尔沁右翼前旗"},{"ID":"2819","NAME":"科尔沁右翼中旗"},{"ID":"2820","NAME":"扎赉特旗"},{"ID":"2821","NAME":"突泉县"}]},{"ID":"362","NAME":"阿拉善盟","ITEMS":[{"ID":"2822","NAME":"阿拉善左旗"},{"ID":"2823","NAME":"阿拉善右旗"},{"ID":"2824","NAME":"额济纳旗"}]}]},{"ID":"33","NAME":"澳门特别行政区","ITEMS":[{"ID":"370","NAME":"澳门特别行政区","ITEMS":[]}]},{"ID":"34","NAME":"香港特别行政区","ITEMS":[{"ID":"371","NAME":"香港特别行政区","ITEMS":[]}]}]';


/***
 * form 提交 回调函数
 */
var uploadiframeid = "";
jQuery.extend({
	createUploadIframe: function(id, uri) {
		var frameId = "jUploadFrame" + id;
		var iframeHtml = '<iframe id="' + frameId + '" name="' + frameId + '" style="position:absolute; top:-9999px; left:-9999px"';
		if (window.ActiveXObject) {
			if (typeof uri == "boolean") {
				iframeHtml += ' src="' + "javascript:false" + '"'
			} else {
				if (typeof uri == "string") {
					iframeHtml += ' src="' + uri + '"'
				}
			}
		}
		iframeHtml += " />";
		jQuery(iframeHtml).appendTo(document.body);
		return jQuery("#" + frameId).get(0)
	},
	createUploadForm: function(id, fileElementId, data, fileElement) {
		var formId = "jUploadForm" + id;
		var fileId = "jUploadFile" + id;
		var form = jQuery('<form  action="" method="POST" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');
		if (data) {
			for (var i in data) {
				jQuery('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form)
			}
		}
		var oldElement;
		if (fileElement == null) {
			oldElement = jQuery("#" + fileElementId)
		} else {
			oldElement = fileElement
		}
		var newElement = jQuery(oldElement).clone();
		jQuery(oldElement).attr("id", fileId);
		jQuery(oldElement).before(newElement);
		jQuery(oldElement).appendTo(form);
		jQuery(form).css("position", "absolute");
		jQuery(form).css("top", "-1200px");
		jQuery(form).css("left", "-1200px");
		jQuery(form).appendTo("body");
		return form
	},
	ajaxFileUpload: function(s) {
		s = jQuery.extend({}, jQuery.ajaxSettings, s);
		var id = new Date().getTime();
		var form = jQuery.createUploadForm(id, s.fileElementId, (typeof(s.data) == "undefined" ? false : s.data), s.fileElement);
		var io = jQuery.createUploadIframe(id, s.secureuri);
		var frameId = "jUploadFrame" + id;
		uploadiframeid = frameId;
		var formId = "jUploadForm" + id;
		if (s.global && !jQuery.active++) {
			jQuery.event.trigger("ajaxStart")
		}
		var requestDone = false;
		var xml = {};
		if (s.global) {
			jQuery.event.trigger("ajaxSend", [xml, s])
		}
		var uploadCallback = function(isTimeout) {
				var io = document.getElementById(frameId);
				try {
					if (io.contentWindow) {
						xml.responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML : null;
						xml.responseXML = io.contentWindow.document.XMLDocument ? io.contentWindow.document.XMLDocument : io.contentWindow.document
					} else {
						if (io.contentDocument) {
							xml.responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML : null;
							xml.responseXML = io.contentDocument.document.XMLDocument ? io.contentDocument.document.XMLDocument : io.contentDocument.document
						}
					}
				} catch (e) {
					jQuery.handleError(s, xml, null, e)
				}
				if (xml || isTimeout == "timeout") {
					requestDone = true;
					var status;
					try {
						status = isTimeout != "timeout" ? "success" : "error";
						if (status != "error") {
							var data = jQuery.uploadHttpData(xml, s.dataType);
							if (s.success) {
								s.success(data, status)
							}
							if (s.global) {
								jQuery.event.trigger("ajaxSuccess", [xml, s])
							}
						} else {
							jQuery.handleError(s, xml, status)
						}
					} catch (e) {
						status = "error";
						jQuery.handleError(s, xml, status, e)
					}
					if (s.global) {
						jQuery.event.trigger("ajaxComplete", [xml, s])
					}
					if (s.global && !--jQuery.active) {
						jQuery.event.trigger("ajaxStop")
					}
					if (s.complete) {
						s.complete(xml, status)
					}
					jQuery(io).unbind();
					setTimeout(function() {
						try {
							jQuery(io).remove();
							jQuery(form).remove()
						} catch (e) {
							jQuery.handleError(s, xml, null, e)
						}
					}, 100);
					xml = null
				}
			};
		if (s.timeout > 0) {
			setTimeout(function() {
				if (!requestDone) {
					uploadCallback("timeout")
				}
			}, s.timeout)
		}
		try {
			var form = jQuery("#" + formId);
			jQuery(form).attr("action", s.url);
			jQuery(form).attr("method", "POST");
			jQuery(form).attr("target", frameId);
			if (form.encoding) {
				jQuery(form).attr("encoding", "multipart/form-data")
			} else {
				jQuery(form).attr("enctype", "multipart/form-data")
			}
			jQuery(form).submit()
		} catch (e) {
			jQuery.handleError(s, xml, null, e)
		}
		jQuery("#" + frameId).load(uploadCallback);
		return {
			abort: function() {
				try {
					jQuery("#" + frameId).remove();
					jQuery(form).remove()
				} catch (e) {}
			}
		}
	},
	uploadHttpData: function(r, type) {
		var data = !type;
		data = type == "xml" || data ? r.responseXML : r.responseText;
		if (type == "script") {
			jQuery.globalEval(data)
		}
		if (type == "json") {}
		if (type == "html") {
			jQuery("<div>").html(data).evalScripts()
		}
		return data
	},
	handleError: function(s, xml, status, e) {
		if (s.error) {
			s.error(xml, status, e)
		}
		if (s.global) {
			jQuery.event.trigger("ajaxError", [xml, s, e])
		}
	}
});

/**
 * 控件resize事件   $(id).resize(function(){....});
 */
(function($, h, c) {
	var a = $([]),
		e = $.resize = $.extend($.resize, {}),
		i, k = "setTimeout",
		j = "resize",
		d = j + "-special-event",
		b = "delay",
		f = "throttleWindow";
	e[b] = 0;
	e[f] = true;
	$.event.special[j] = {
		setup: function() {
			if (!e[f] && this[k]) {
				return false
			}
			var l = $(this);
			a = a.add(l);
			$.data(this, d, {
				w: l.width(),
				h: l.height()
			});
			if (a.length === 1) {
				g()
			}
		},
		teardown: function() {
			if (!e[f] && this[k]) {
				return false
			}
			var l = $(this);
			a = a.not(l);
			l.removeData(d);
			if (!a.length) {
				clearTimeout(i)
			}
		},
		add: function(l) {
			if (!e[f] && this[k]) {
				return false
			}
			var n;

			function m(s, o, p) {
				var q = $(this),
					r = $.data(this, d);
				r.w = o !== c ? o : q.width();
				r.h = p !== c ? p : q.height();
				n.apply(this, arguments)
			}
			if ($.isFunction(l)) {
				n = l;
				return m
			} else {
				n = l.handler;
				l.handler = m
			}
		}
	};

	function g() {
		i = h[k](function() {
			a.each(function() {
				var n = $(this),
					m = n.width(),
					l = n.height(),
					o = $.data(this, d);
				if (m !== o.w || l !== o.h) {
					n.trigger(j, [o.w = m, o.h = l])
				}
			});
			g()
		}, e[b])
	}
})(jQuery, this);
/***
 * 汉字转拼音
 */

(function(b) {
	b.fn.toPinyin = function(h) {
		var f = b(this).val();
		var e = f.length;
		var l = "";
		var k = new RegExp("[a-zA-Z0-9- ]");
		for (var j = 0; j < e; j++) {
			var m = f.substr(j, 1);
			var g = c(m, d);
			if (k.test(m)) {
				l += m
			} else {
				if (g !== false) {
					l += g
				}
			}
		}
		l = l.replace(/ /g, "-");
		while (l.indexOf("--") > 0) {
			l = l.replace("--", "-")
		}
		return l
	};
	var d = {
		a: "\u554a\u963f\u9515",
		ai: "\u57c3\u6328\u54ce\u5509\u54c0\u7691\u764c\u853c\u77ee\u827e\u788d\u7231\u9698\u8bf6\u6371\u55f3\u55cc\u5ad2\u7477\u66a7\u7839\u953f\u972d",
		an: "\u978d\u6c28\u5b89\u4ffa\u6309\u6697\u5cb8\u80fa\u6848\u8c19\u57ef\u63de\u72b4\u5eb5\u6849\u94f5\u9e4c\u9878\u9eef",
		ang: "\u80ae\u6602\u76ce",
		ao: "\u51f9\u6556\u71ac\u7ff1\u8884\u50b2\u5965\u61ca\u6fb3\u5773\u62d7\u55f7\u5662\u5c99\u5ed2\u9068\u5aaa\u9a9c\u8071\u87af\u93ca\u9ccc\u93d6",
		ba: "\u82ad\u634c\u6252\u53ed\u5427\u7b06\u516b\u75a4\u5df4\u62d4\u8dcb\u9776\u628a\u8019\u575d\u9738\u7f62\u7238\u8307\u83dd\u8406\u636d\u5c9c\u705e\u6777\u94af\u7c91\u9c85\u9b43",
		bai: "\u767d\u67cf\u767e\u6446\u4f70\u8d25\u62dc\u7a17\u859c\u63b0\u97b4",
		ban: "\u6591\u73ed\u642c\u6273\u822c\u9881\u677f\u7248\u626e\u62cc\u4f34\u74e3\u534a\u529e\u7eca\u962a\u5742\u8c73\u94a3\u7622\u764d\u8228",
		bang: "\u90a6\u5e2e\u6886\u699c\u8180\u7ed1\u68d2\u78c5\u868c\u9551\u508d\u8c24\u84a1\u8783",
		bao: "\u82de\u80de\u5305\u8912\u96f9\u4fdd\u5821\u9971\u5b9d\u62b1\u62a5\u66b4\u8c79\u9c8d\u7206\u52f9\u8446\u5b80\u5b62\u7172\u9e28\u8913\u8db5\u9f85",
		bo: "\u5265\u8584\u73bb\u83e0\u64ad\u62e8\u94b5\u6ce2\u535a\u52c3\u640f\u94c2\u7b94\u4f2f\u5e1b\u8236\u8116\u818a\u6e24\u6cca\u9a73\u4eb3\u8543\u5575\u997d\u6a97\u64d8\u7934\u94b9\u9e41\u7c38\u8ddb",
		bei: "\u676f\u7891\u60b2\u5351\u5317\u8f88\u80cc\u8d1d\u94a1\u500d\u72c8\u5907\u60eb\u7119\u88ab\u5b5b\u9642\u90b6\u57e4\u84d3\u5457\u602b\u6096\u789a\u9e4e\u8919\u943e",
		ben: "\u5954\u82ef\u672c\u7b28\u755a\u574c\u951b",
		beng: "\u5d29\u7ef7\u752d\u6cf5\u8e66\u8ff8\u552a\u5623\u750f",
		bi: "\u903c\u9f3b\u6bd4\u9119\u7b14\u5f7c\u78a7\u84d6\u853d\u6bd5\u6bd9\u6bd6\u5e01\u5e87\u75f9\u95ed\u655d\u5f0a\u5fc5\u8f9f\u58c1\u81c2\u907f\u965b\u5315\u4ef3\u4ffe\u8298\u835c\u8378\u5421\u54d4\u72f4\u5eb3\u610e\u6ed7\u6fde\u5f3c\u59a3\u5a62\u5b16\u74a7\u8d32\u7540\u94cb\u79d5\u88e8\u7b5a\u7b85\u7be6\u822d\u895e\u8df8\u9ac0",
		bian: "\u97ad\u8fb9\u7f16\u8d2c\u6241\u4fbf\u53d8\u535e\u8fa8\u8fa9\u8fab\u904d\u533e\u5f01\u82c4\u5fed\u6c74\u7f0f\u7178\u782d\u78a5\u7a39\u7a86\u8759\u7b3e\u9cca",
		biao: "\u6807\u5f6a\u8198\u8868\u5a4a\u9aa0\u98d1\u98d9\u98da\u706c\u9556\u9573\u762d\u88f1\u9cd4",
		bie: "\u9cd6\u618b\u522b\u762a\u8e69\u9cd8",
		bin: "\u5f6c\u658c\u6fd2\u6ee8\u5bbe\u6448\u50a7\u6d5c\u7f24\u73a2\u6ba1\u8191\u9554\u9acc\u9b13",
		bing: "\u5175\u51b0\u67c4\u4e19\u79c9\u997c\u70b3\u75c5\u5e76\u7980\u90b4\u6452\u7ee0\u678b\u69df\u71f9",
		bu: "\u6355\u535c\u54fa\u8865\u57e0\u4e0d\u5e03\u6b65\u7c3f\u90e8\u6016\u62ca\u535f\u900b\u74ff\u6661\u949a\u91ad",
		ca: "\u64e6\u5693\u7924",
		cai: "\u731c\u88c1\u6750\u624d\u8d22\u776c\u8e29\u91c7\u5f69\u83dc\u8521",
		can: "\u9910\u53c2\u8695\u6b8b\u60ed\u60e8\u707f\u9a96\u74a8\u7cb2\u9eea",
		cang: "\u82cd\u8231\u4ed3\u6ca7\u85cf\u4f27",
		cao: "\u64cd\u7cd9\u69fd\u66f9\u8349\u8279\u5608\u6f15\u87ac\u825a",
		ce: "\u5395\u7b56\u4fa7\u518c\u6d4b\u5202\u5e3b\u607b",
		ceng: "\u5c42\u8e6d\u564c",
		cha: "\u63d2\u53c9\u832c\u8336\u67e5\u78b4\u643d\u5bdf\u5c94\u5dee\u8be7\u7339\u9987\u6c4a\u59f9\u6748\u6942\u69ce\u6aab\u9497\u9538\u9572\u8869",
		chai: "\u62c6\u67f4\u8c7a\u4faa\u8308\u7625\u867f\u9f87",
		chan: "\u6400\u63ba\u8749\u998b\u8c17\u7f20\u94f2\u4ea7\u9610\u98a4\u5181\u8c04\u8c36\u8487\u5edb\u5fcf\u6f7a\u6fb6\u5b71\u7fbc\u5a75\u5b17\u9aa3\u89c7\u7985\u9561\u88e3\u87fe\u8e94",
		chang: "\u660c\u7316\u573a\u5c1d\u5e38\u957f\u507f\u80a0\u5382\u655e\u7545\u5531\u5021\u4f25\u9b2f\u82cc\u83d6\u5f9c\u6005\u60dd\u960a\u5a3c\u5ae6\u6636\u6c05\u9cb3",
		chao: "\u8d85\u6284\u949e\u671d\u5632\u6f6e\u5de2\u5435\u7092\u600a\u7ec9\u6641\u8016",
		che: "\u8f66\u626f\u64a4\u63a3\u5f7b\u6f88\u577c\u5c6e\u7817",
		chen: "\u90f4\u81e3\u8fb0\u5c18\u6668\u5ff1\u6c89\u9648\u8d81\u886c\u79f0\u8c0c\u62bb\u55d4\u5bb8\u741b\u6987\u809c\u80c2\u789c\u9f80",
		cheng: "\u6491\u57ce\u6a59\u6210\u5448\u4e58\u7a0b\u60e9\u6f84\u8bda\u627f\u901e\u9a8b\u79e4\u57d5\u5d4a\u5fb5\u6d48\u67a8\u67fd\u6a18\u665f\u584d\u77a0\u94d6\u88ce\u86cf\u9172",
		chi: "\u5403\u75f4\u6301\u5319\u6c60\u8fdf\u5f1b\u9a70\u803b\u9f7f\u4f88\u5c3a\u8d64\u7fc5\u65a5\u70bd\u50ba\u5880\u82aa\u830c\u640b\u53f1\u54e7\u557b\u55e4\u5f73\u996c\u6cb2\u5ab8\u6555\u80dd\u7719\u7735\u9e31\u761b\u892b\u86a9\u87ad\u7b1e\u7bea\u8c49\u8e05\u8e1f\u9b51",
		chong: "\u5145\u51b2\u866b\u5d07\u5ba0\u833a\u5fe1\u61a7\u94f3\u825f",
		chou: "\u62bd\u916c\u7574\u8e0c\u7a20\u6101\u7b79\u4ec7\u7ef8\u7785\u4e11\u4fe6\u5733\u5e31\u60c6\u6eb4\u59af\u7633\u96e0\u9c8b",
		chu: "\u81ed\u521d\u51fa\u6a71\u53a8\u8e87\u9504\u96cf\u6ec1\u9664\u695a\u7840\u50a8\u77d7\u6410\u89e6\u5904\u4e8d\u520d\u61b7\u7ecc\u6775\u696e\u6a17\u870d\u8e70\u9edc",
		chuan: "\u63e3\u5ddd\u7a7f\u693d\u4f20\u8239\u5598\u4e32\u63be\u821b\u60f4\u9044\u5ddb\u6c1a\u948f\u9569\u8221",
		chuang: "\u75ae\u7a97\u5e62\u5e8a\u95ef\u521b\u6006",
		chui: "\u5439\u708a\u6376\u9524\u5782\u9672\u68f0\u69cc",
		chun: "\u6625\u693f\u9187\u5507\u6df3\u7eaf\u8822\u4fc3\u83bc\u6c8c\u80ab\u6710\u9e51\u877d",
		chuo: "\u6233\u7ef0\u851f\u8fb6\u8f8d\u955e\u8e14\u9f8a",
		ci: "\u75b5\u8328\u78c1\u96cc\u8f9e\u6148\u74f7\u8bcd\u6b64\u523a\u8d50\u6b21\u8360\u5472\u5d6f\u9e5a\u8785\u7ccd\u8d91",
		cong: "\u806a\u8471\u56f1\u5306\u4ece\u4e1b\u506c\u82c1\u6dd9\u9aa2\u742e\u7481\u679e",
		cu: "\u51d1\u7c97\u918b\u7c07\u731d\u6b82\u8e59",
		cuan: "\u8e7f\u7be1\u7a9c\u6c46\u64ba\u6615\u7228",
		cui: "\u6467\u5d14\u50ac\u8106\u7601\u7cb9\u6dec\u7fe0\u8403\u60b4\u7480\u69b1\u96b9",
		cun: "\u6751\u5b58\u5bf8\u78cb\u5fd6\u76b4",
		cuo: "\u64ae\u6413\u63aa\u632b\u9519\u539d\u811e\u9509\u77ec\u75e4\u9e7e\u8e49\u8e9c",
		da: "\u642d\u8fbe\u7b54\u7629\u6253\u5927\u8037\u54d2\u55d2\u601b\u59b2\u75b8\u8921\u7b2a\u977c\u9791",
		dai: "\u5446\u6b79\u50a3\u6234\u5e26\u6b86\u4ee3\u8d37\u888b\u5f85\u902e\u6020\u57ed\u7519\u5454\u5cb1\u8fe8\u902f\u9a80\u7ed0\u73b3\u9edb",
		dan: "\u803d\u62c5\u4e39\u5355\u90f8\u63b8\u80c6\u65e6\u6c2e\u4f46\u60ee\u6de1\u8bde\u5f39\u86cb\u4ebb\u510b\u5369\u840f\u5556\u6fb9\u6a90\u6b9a\u8d55\u7708\u7605\u8043\u7baa",
		dang: "\u5f53\u6321\u515a\u8361\u6863\u8c20\u51fc\u83ea\u5b95\u7800\u94db\u88c6",
		dao: "\u5200\u6363\u8e48\u5012\u5c9b\u7977\u5bfc\u5230\u7a3b\u60bc\u9053\u76d7\u53e8\u5541\u5fc9\u6d2e\u6c18\u7118\u5fd1\u7e9b",
		de: "\u5fb7\u5f97\u7684\u951d",
		deng: "\u8e6c\u706f\u767b\u7b49\u77aa\u51f3\u9093\u5654\u5d9d\u6225\u78f4\u956b\u7c26",
		di: "\u5824\u4f4e\u6ef4\u8fea\u654c\u7b1b\u72c4\u6da4\u7fdf\u5ae1\u62b5\u5e95\u5730\u8482\u7b2c\u5e1d\u5f1f\u9012\u7f14\u6c10\u7c74\u8bcb\u8c1b\u90b8\u577b\u839c\u837b\u5600\u5a23\u67e2\u68e3\u89cc\u7825\u78b2\u7747\u955d\u7f9d\u9ab6",
		dian: "\u98a0\u6382\u6ec7\u7898\u70b9\u5178\u975b\u57ab\u7535\u4f43\u7538\u5e97\u60e6\u5960\u6dc0\u6bbf\u4e36\u963d\u576b\u57dd\u5dc5\u73b7\u765c\u766b\u7c1f\u8e2e",
		diao: "\u7889\u53fc\u96d5\u51cb\u5201\u6389\u540a\u9493\u8c03\u8f7a\u94de\u8729\u7c9c\u8c82",
		die: "\u8dcc\u7239\u789f\u8776\u8fed\u8c0d\u53e0\u4f5a\u57a4\u581e\u63f2\u558b\u6e2b\u8f76\u7252\u74de\u8936\u800b\u8e40\u9cbd\u9cce",
		ding: "\u4e01\u76ef\u53ee\u9489\u9876\u9f0e\u952d\u5b9a\u8ba2\u4e22\u4ec3\u5576\u738e\u815a\u7887\u753a\u94e4\u7594\u8035\u914a",
		dong: "\u4e1c\u51ac\u8463\u61c2\u52a8\u680b\u4f97\u606b\u51bb\u6d1e\u578c\u549a\u5cbd\u5cd2\u5902\u6c21\u80e8\u80f4\u7850\u9e2b",
		dou: "\u515c\u6296\u6597\u9661\u8c46\u9017\u75d8\u8538\u94ad\u7aa6\u7aac\u86aa\u7bfc\u9161",
		du: "\u90fd\u7763\u6bd2\u728a\u72ec\u8bfb\u5835\u7779\u8d4c\u675c\u9540\u809a\u5ea6\u6e21\u5992\u828f\u561f\u6e0e\u691f\u6a50\u724d\u8839\u7b03\u9ad1\u9ee9",
		duan: "\u7aef\u77ed\u953b\u6bb5\u65ad\u7f0e\u5f56\u6934\u7145\u7c16",
		dui: "\u5806\u5151\u961f\u5bf9\u603c\u619d\u7893",
		dun: "\u58a9\u5428\u8e72\u6566\u987f\u56e4\u949d\u76fe\u9041\u7096\u7818\u7905\u76f9\u9566\u8db8",
		duo: "\u6387\u54c6\u591a\u593a\u579b\u8eb2\u6735\u8dfa\u8235\u5241\u60f0\u5815\u5484\u54da\u7f0d\u67c1\u94ce\u88f0\u8e31",
		e: "\u86fe\u5ce8\u9e45\u4fc4\u989d\u8bb9\u5a25\u6076\u5384\u627c\u904f\u9102\u997f\u5669\u8c14\u57a9\u57ad\u82ca\u83aa\u843c\u5443\u6115\u5c59\u5a40\u8f6d\u66f7\u816d\u786a\u9507\u9537\u9e57\u989a\u9cc4",
		en: "\u6069\u84bd\u6441\u5514\u55ef",
		er: "\u800c\u513f\u8033\u5c14\u9975\u6d31\u4e8c\u8d30\u8fe9\u73e5\u94d2\u9e38\u9c95",
		fa: "\u53d1\u7f5a\u7b4f\u4f10\u4e4f\u9600\u6cd5\u73d0\u57a1\u781d",
		fan: "\u85e9\u5e06\u756a\u7ffb\u6a0a\u77fe\u9492\u7e41\u51e1\u70e6\u53cd\u8fd4\u8303\u8d29\u72af\u996d\u6cdb\u8629\u5e61\u72ad\u68b5\u6535\u71d4\u7548\u8e6f",
		fang: "\u574a\u82b3\u65b9\u80aa\u623f\u9632\u59a8\u4eff\u8bbf\u7eba\u653e\u531a\u90a1\u5f77\u94ab\u822b\u9c82",
		fei: "\u83f2\u975e\u5561\u98de\u80a5\u532a\u8bfd\u5420\u80ba\u5e9f\u6cb8\u8d39\u82be\u72d2\u60b1\u6ddd\u5983\u7ecb\u7eef\u69a7\u8153\u6590\u6249\u7953\u7829\u9544\u75f1\u871a\u7bda\u7fe1\u970f\u9cb1",
		fen: "\u82ac\u915a\u5429\u6c1b\u5206\u7eb7\u575f\u711a\u6c7e\u7c89\u594b\u4efd\u5fff\u6124\u7caa\u507e\u7035\u68fc\u610d\u9cbc\u9f22",
		feng: "\u4e30\u5c01\u67ab\u8702\u5cf0\u950b\u98ce\u75af\u70fd\u9022\u51af\u7f1d\u8bbd\u5949\u51e4\u4ff8\u9146\u8451\u6ca3\u781c",
		fu: "\u4f5b\u5426\u592b\u6577\u80a4\u5b75\u6276\u62c2\u8f90\u5e45\u6c1f\u7b26\u4f0f\u4fd8\u670d\u6d6e\u6daa\u798f\u88b1\u5f17\u752b\u629a\u8f85\u4fef\u91dc\u65a7\u812f\u8151\u5e9c\u8150\u8d74\u526f\u8986\u8d4b\u590d\u5085\u4ed8\u961c\u7236\u8179\u8d1f\u5bcc\u8ba3\u9644\u5987\u7f1a\u5490\u5310\u51eb\u90db\u8299\u82fb\u832f\u83a9\u83d4\u544b\u5e5e\u6ecf\u8274\u5b5a\u9a78\u7ec2\u6874\u8d59\u9efb\u9efc\u7f58\u7a03\u99a5\u864d\u86a8\u8709\u8760\u876e\u9eb8\u8dba\u8dd7\u9cc6",
		ga: "\u5676\u560e\u86e4\u5c2c\u5477\u5c15\u5c1c\u65ee\u9486",
		gai: "\u8be5\u6539\u6982\u9499\u76d6\u6e89\u4e10\u9654\u5793\u6224\u8d45\u80f2",
		gan: "\u5e72\u7518\u6746\u67d1\u7aff\u809d\u8d76\u611f\u79c6\u6562\u8d63\u5769\u82f7\u5c34\u64c0\u6cd4\u6de6\u6f89\u7ec0\u6a44\u65f0\u77f8\u75b3\u9150",
		gang: "\u5188\u521a\u94a2\u7f38\u809b\u7eb2\u5c97\u6e2f\u6206\u7f61\u9883\u7b7b",
		gong: "\u6760\u5de5\u653b\u529f\u606d\u9f9a\u4f9b\u8eac\u516c\u5bab\u5f13\u5de9\u6c5e\u62f1\u8d21\u5171\u857b\u5efe\u54a3\u73d9\u80b1\u86a3\u86e9\u89e5",
		gao: "\u7bd9\u768b\u9ad8\u818f\u7f94\u7cd5\u641e\u9550\u7a3f\u544a\u777e\u8bf0\u90dc\u84bf\u85c1\u7f1f\u69d4\u69c1\u6772\u9506",
		ge: "\u54e5\u6b4c\u6401\u6208\u9e3d\u80f3\u7599\u5272\u9769\u845b\u683c\u9601\u9694\u94ec\u4e2a\u5404\u9b32\u4ee1\u54ff\u5865\u55dd\u7ea5\u643f\u8188\u784c\u94ea\u9549\u88bc\u988c\u867c\u8238\u9abc\u9ac2",
		gei: "\u7ed9",
		gen: "\u6839\u8ddf\u4e98\u831b\u54cf\u826e",
		geng: "\u8015\u66f4\u5e9a\u7fb9\u57c2\u803f\u6897\u54fd\u8d53\u9ca0",
		gou: "\u94a9\u52fe\u6c9f\u82df\u72d7\u57a2\u6784\u8d2d\u591f\u4f5d\u8bdf\u5ca3\u9058\u5abe\u7f11\u89cf\u5f40\u9e32\u7b31\u7bdd\u97b2",
		gu: "\u8f9c\u83c7\u5495\u7b8d\u4f30\u6cbd\u5b64\u59d1\u9f13\u53e4\u86ca\u9aa8\u8c37\u80a1\u6545\u987e\u56fa\u96c7\u560f\u8bc2\u83f0\u54cc\u5d2e\u6c69\u688f\u8f71\u726f\u727f\u80cd\u81cc\u6bc2\u77bd\u7f5f\u94b4\u9522\u74e0\u9e2a\u9e44\u75fc\u86c4\u9164\u89da\u9cb4\u9ab0\u9e58",
		gua: "\u522e\u74dc\u5250\u5be1\u6302\u8902\u5366\u8bd6\u5471\u681d\u9e39",
		guai: "\u4e56\u62d0\u602a\u54d9",
		guan: "\u68fa\u5173\u5b98\u51a0\u89c2\u7ba1\u9986\u7f50\u60ef\u704c\u8d2f\u500c\u839e\u63bc\u6dab\u76e5\u9e73\u9ccf",
		guang: "\u5149\u5e7f\u901b\u72b7\u6844\u80f1\u7592",
		gui: "\u7470\u89c4\u572d\u7845\u5f52\u9f9f\u95fa\u8f68\u9b3c\u8be1\u7678\u6842\u67dc\u8dea\u8d35\u523d\u5326\u523f\u5e8b\u5b84\u59ab\u6867\u7085\u6677\u7688\u7c0b\u9c91\u9cdc",
		gun: "\u8f8a\u6eda\u68cd\u4e28\u886e\u7ef2\u78d9\u9ca7",
		guo: "\u9505\u90ed\u56fd\u679c\u88f9\u8fc7\u9998\u8803\u57da\u63b4\u5459\u56d7\u5e3c\u5d1e\u7313\u6901\u8662\u951e\u8052\u872e\u873e\u8748",
		ha: "\u54c8",
		hai: "\u9ab8\u5b69\u6d77\u6c26\u4ea5\u5bb3\u9a87\u54b4\u55e8\u988f\u91a2",
		han: "\u9163\u61a8\u90af\u97e9\u542b\u6db5\u5bd2\u51fd\u558a\u7f55\u7ff0\u64bc\u634d\u65f1\u61be\u608d\u710a\u6c57\u6c49\u9097\u83e1\u6496\u961a\u701a\u6657\u7113\u9894\u86b6\u9f3e",
		hen: "\u592f\u75d5\u5f88\u72e0\u6068",
		hang: "\u676d\u822a\u6c86\u7ed7\u73e9\u6841",
		hao: "\u58d5\u568e\u8c6a\u6beb\u90dd\u597d\u8017\u53f7\u6d69\u8585\u55e5\u5686\u6fe0\u704f\u660a\u7693\u98a2\u869d",
		he: "\u5475\u559d\u8377\u83cf\u6838\u79be\u548c\u4f55\u5408\u76d2\u8c89\u9602\u6cb3\u6db8\u8d6b\u8910\u9e64\u8d3a\u8bc3\u52be\u58d1\u85ff\u55d1\u55ec\u9616\u76cd\u86b5\u7fee",
		hei: "\u563f\u9ed1",
		heng: "\u54fc\u4ea8\u6a2a\u8861\u6052\u8a07\u8605",
		hong: "\u8f70\u54c4\u70d8\u8679\u9e3f\u6d2a\u5b8f\u5f18\u7ea2\u9ec9\u8ba7\u836d\u85a8\u95f3\u6cd3",
		hou: "\u5589\u4faf\u7334\u543c\u539a\u5019\u540e\u5820\u5f8c\u9005\u760a\u7bcc\u7cc7\u9c8e\u9aba",
		hu: "\u547c\u4e4e\u5ffd\u745a\u58f6\u846b\u80e1\u8774\u72d0\u7cca\u6e56\u5f27\u864e\u552c\u62a4\u4e92\u6caa\u6237\u51b1\u553f\u56eb\u5cb5\u7322\u6019\u60da\u6d52\u6ef9\u7425\u69f2\u8f77\u89f3\u70c0\u7173\u623d\u6248\u795c\u9e55\u9e71\u7b0f\u9190\u659b",
		hua: "\u82b1\u54d7\u534e\u733e\u6ed1\u753b\u5212\u5316\u8bdd\u5290\u6d4d\u9a85\u6866\u94e7\u7a1e",
		huai: "\u69d0\u5f8a\u6000\u6dee\u574f\u8fd8\u8e1d",
		huan: "\u6b22\u73af\u6853\u7f13\u6362\u60a3\u5524\u75ea\u8c62\u7115\u6da3\u5ba6\u5e7b\u90c7\u5942\u57b8\u64d0\u571c\u6d39\u6d63\u6f36\u5bf0\u902d\u7f33\u953e\u9ca9\u9b1f",
		huang: "\u8352\u614c\u9ec4\u78fa\u8757\u7c27\u7687\u51f0\u60f6\u714c\u6643\u5e4c\u604d\u8c0e\u968d\u5fa8\u6e5f\u6f62\u9051\u749c\u8093\u7640\u87e5\u7bc1\u9cc7",
		hui: "\u7070\u6325\u8f89\u5fbd\u6062\u86d4\u56de\u6bc1\u6094\u6167\u5349\u60e0\u6666\u8d3f\u79fd\u4f1a\u70e9\u6c47\u8bb3\u8bf2\u7ed8\u8bd9\u8334\u835f\u8559\u54d5\u5599\u96b3\u6d04\u5f57\u7f0b\u73f2\u6656\u605a\u867a\u87ea\u9ebe",
		hun: "\u8364\u660f\u5a5a\u9b42\u6d51\u6df7\u8be8\u9984\u960d\u6eb7\u7f17",
		huo: "\u8c41\u6d3b\u4f19\u706b\u83b7\u6216\u60d1\u970d\u8d27\u7978\u6509\u56af\u5925\u94ac\u952a\u956c\u8020\u8816",
		ji: "\u51fb\u573e\u57fa\u673a\u7578\u7a3d\u79ef\u7b95\u808c\u9965\u8ff9\u6fc0\u8ba5\u9e21\u59ec\u7ee9\u7f09\u5409\u6781\u68d8\u8f91\u7c4d\u96c6\u53ca\u6025\u75be\u6c72\u5373\u5ac9\u7ea7\u6324\u51e0\u810a\u5df1\u84df\u6280\u5180\u5b63\u4f0e\u796d\u5242\u60b8\u6d4e\u5bc4\u5bc2\u8ba1\u8bb0\u65e2\u5fcc\u9645\u5993\u7ee7\u7eaa\u5c45\u4e0c\u4e69\u525e\u4f76\u4f74\u8114\u58bc\u82a8\u82b0\u8401\u84ba\u857a\u638e\u53fd\u54ad\u54dc\u5527\u5c8c\u5d74\u6d0e\u5f50\u5c50\u9aa5\u757f\u7391\u696b\u6b9b\u621f\u6222\u8d4d\u89ca\u7284\u9f51\u77f6\u7f81\u5d47\u7a37\u7620\u7635\u866e\u7b08\u7b04\u66a8\u8dfb\u8dfd\u9701\u9c9a\u9cab\u9afb\u9e82",
		jia: "\u5609\u67b7\u5939\u4f73\u5bb6\u52a0\u835a\u988a\u8d3e\u7532\u94be\u5047\u7a3c\u4ef7\u67b6\u9a7e\u5ac1\u4f3d\u90cf\u62ee\u5cac\u6d43\u8fe6\u73c8\u621b\u80db\u605d\u94d7\u9553\u75c2\u86f1\u7b33\u8888\u8dcf",
		jian: "\u6b7c\u76d1\u575a\u5c16\u7b3a\u95f4\u714e\u517c\u80a9\u8270\u5978\u7f04\u8327\u68c0\u67ec\u78b1\u7877\u62e3\u6361\u7b80\u4fed\u526a\u51cf\u8350\u69db\u9274\u8df5\u8d31\u89c1\u952e\u7bad\u4ef6\u5065\u8230\u5251\u996f\u6e10\u6e85\u6da7\u5efa\u50ed\u8c0f\u8c2b\u83c5\u84b9\u641b\u56dd\u6e54\u8e47\u8b07\u7f23\u67a7\u67d9\u6957\u620b\u622c\u726e\u728d\u6bfd\u8171\u7751\u950f\u9e63\u88e5\u7b15\u7bb4\u7fe6\u8dbc\u8e3a\u9ca3\u97af",
		jiang: "\u50f5\u59dc\u5c06\u6d46\u6c5f\u7586\u848b\u6868\u5956\u8bb2\u5320\u9171\u964d\u8333\u6d1a\u7edb\u7f30\u729f\u7913\u8029\u7ce8\u8c47",
		jiao: "\u8549\u6912\u7901\u7126\u80f6\u4ea4\u90ca\u6d47\u9a84\u5a07\u56bc\u6405\u94f0\u77eb\u4fa5\u811a\u72e1\u89d2\u997a\u7f34\u7ede\u527f\u6559\u9175\u8f7f\u8f83\u53eb\u4f7c\u50ec\u832d\u6322\u564d\u5ce4\u5fbc\u59e3\u7e9f\u656b\u768e\u9e6a\u86df\u91ae\u8de4\u9c9b",
		jie: "\u7a96\u63ed\u63a5\u7686\u79f8\u8857\u9636\u622a\u52ab\u8282\u6854\u6770\u6377\u776b\u7aed\u6d01\u7ed3\u89e3\u59d0\u6212\u85c9\u82a5\u754c\u501f\u4ecb\u75a5\u8beb\u5c4a\u5048\u8ba6\u8bd8\u5588\u55df\u736c\u5a55\u5b51\u6840\u7352\u78a3\u9534\u7596\u88b7\u9889\u86a7\u7faf\u9c92\u9ab1\u9aeb",
		jin: "\u5dfe\u7b4b\u65a4\u91d1\u4eca\u6d25\u895f\u7d27\u9526\u4ec5\u8c28\u8fdb\u9773\u664b\u7981\u8fd1\u70ec\u6d78\u5c3d\u537a\u8369\u5807\u5664\u9991\u5ed1\u5997\u7f19\u747e\u69ff\u8d46\u89d0\u9485\u9513\u887f\u77dc",
		jing: "\u52b2\u8346\u5162\u830e\u775b\u6676\u9cb8\u4eac\u60ca\u7cbe\u7cb3\u7ecf\u4e95\u8b66\u666f\u9888\u9759\u5883\u656c\u955c\u5f84\u75c9\u9756\u7adf\u7ade\u51c0\u522d\u5106\u9631\u83c1\u734d\u61ac\u6cfe\u8ff3\u5f2a\u5a67\u80bc\u80eb\u8148\u65cc",
		jiong: "\u70af\u7a98\u5182\u8fe5\u6243",
		jiu: "\u63ea\u7a76\u7ea0\u7396\u97ed\u4e45\u7078\u4e5d\u9152\u53a9\u6551\u65e7\u81fc\u8205\u548e\u5c31\u759a\u50e6\u557e\u9604\u67e9\u6855\u9e6b\u8d73\u9b0f",
		ju: "\u97a0\u62d8\u72d9\u75bd\u9a79\u83ca\u5c40\u5480\u77e9\u4e3e\u6cae\u805a\u62d2\u636e\u5de8\u5177\u8ddd\u8e1e\u952f\u4ff1\u53e5\u60e7\u70ac\u5267\u5028\u8bb5\u82e3\u82f4\u8392\u63ac\u907d\u5c66\u741a\u67b8\u6910\u6998\u6989\u6a58\u728b\u98d3\u949c\u9514\u7aad\u88fe\u8d84\u91b5\u8e3d\u9f83\u96ce\u97ab",
		juan: "\u6350\u9e43\u5a1f\u5026\u7737\u5377\u7ee2\u9104\u72f7\u6d93\u684a\u8832\u9529\u954c\u96bd",
		jue: "\u6485\u652b\u6289\u6398\u5014\u7235\u89c9\u51b3\u8bc0\u7edd\u53a5\u5282\u8c32\u77cd\u8568\u5658\u5d1b\u7357\u5b53\u73cf\u6877\u6a5b\u721d\u9562\u8e76\u89d6",
		jun: "\u5747\u83cc\u94a7\u519b\u541b\u5cfb\u4fca\u7ae3\u6d5a\u90e1\u9a8f\u6343\u72fb\u76b2\u7b60\u9e87",
		ka: "\u5580\u5496\u5361\u4f67\u5494\u80e9",
		ke: "\u54af\u5777\u82db\u67ef\u68f5\u78d5\u9897\u79d1\u58f3\u54b3\u53ef\u6e34\u514b\u523b\u5ba2\u8bfe\u5ca2\u606a\u6e98\u9a92\u7f02\u73c2\u8f72\u6c2a\u778c\u94b6\u75b4\u7aa0\u874c\u9ac1",
		kai: "\u5f00\u63e9\u6977\u51ef\u6168\u5240\u57b2\u8488\u5ffe\u607a\u94e0\u950e",
		kan: "\u520a\u582a\u52d8\u574e\u780d\u770b\u4f83\u51f5\u83b0\u83b6\u6221\u9f9b\u77b0",
		kang: "\u5eb7\u6177\u7ce0\u625b\u6297\u4ea2\u7095\u5751\u4f09\u95f6\u94aa",
		kao: "\u8003\u62f7\u70e4\u9760\u5c3b\u6832\u7292\u94d0",
		ken: "\u80af\u5543\u57a6\u6073\u57a0\u88c9\u9880",
		keng: "\u542d\u5fd0\u94ff",
		kong: "\u7a7a\u6050\u5b54\u63a7\u5025\u5d06\u7b9c",
		kou: "\u62a0\u53e3\u6263\u5bc7\u82a4\u853b\u53e9\u770d\u7b58",
		ku: "\u67af\u54ed\u7a9f\u82e6\u9177\u5e93\u88e4\u5233\u5800\u55be\u7ed4\u9ab7",
		kua: "\u5938\u57ae\u630e\u8de8\u80ef\u4f89",
		kuai: "\u5757\u7b77\u4fa9\u5feb\u84af\u90d0\u8489\u72ef\u810d",
		kuan: "\u5bbd\u6b3e\u9acb",
		kuang: "\u5321\u7b50\u72c2\u6846\u77ff\u7736\u65f7\u51b5\u8bd3\u8bf3\u909d\u5739\u593c\u54d0\u7ea9\u8d36",
		kui: "\u4e8f\u76d4\u5cbf\u7aa5\u8475\u594e\u9b41\u5080\u9988\u6127\u6e83\u9997\u532e\u5914\u9697\u63c6\u55b9\u559f\u609d\u6126\u9615\u9035\u668c\u777d\u8069\u8770\u7bd1\u81fe\u8dec",
		kun: "\u5764\u6606\u6346\u56f0\u6083\u9603\u7428\u951f\u918c\u9cb2\u9ae1",
		kuo: "\u62ec\u6269\u5ed3\u9614\u86de",
		la: "\u5783\u62c9\u5587\u8721\u814a\u8fa3\u5566\u524c\u647a\u908b\u65ef\u782c\u760c",
		lai: "\u83b1\u6765\u8d56\u5d03\u5f95\u6d9e\u6fd1\u8d49\u7750\u94fc\u765e\u7c41",
		lan: "\u84dd\u5a6a\u680f\u62e6\u7bee\u9611\u5170\u6f9c\u8c30\u63fd\u89c8\u61d2\u7f06\u70c2\u6ee5\u5549\u5c9a\u61d4\u6f24\u6984\u6593\u7f71\u9567\u8934",
		lang: "\u7405\u6994\u72fc\u5eca\u90ce\u6717\u6d6a\u83a8\u8497\u5577\u9606\u9512\u7a02\u8782",
		lao: "\u635e\u52b3\u7262\u8001\u4f6c\u59e5\u916a\u70d9\u6d9d\u5520\u5d02\u6833\u94d1\u94f9\u75e8\u91aa",
		le: "\u52d2\u4e50\u808b\u4ec2\u53fb\u561e\u6cd0\u9cd3",
		lei: "\u96f7\u956d\u857e\u78ca\u7d2f\u5121\u5792\u64c2\u7c7b\u6cea\u7fb8\u8bd4\u837d\u54a7\u6f2f\u5ad8\u7f27\u6a91\u8012\u9179",
		ling: "\u68f1\u51b7\u62ce\u73b2\u83f1\u96f6\u9f84\u94c3\u4f36\u7f9a\u51cc\u7075\u9675\u5cad\u9886\u53e6\u4ee4\u9143\u5844\u82d3\u5464\u56f9\u6ce0\u7eeb\u67c3\u68c2\u74f4\u8046\u86c9\u7fce\u9cae",
		leng: "\u695e\u6123",
		li: "\u5398\u68a8\u7281\u9ece\u7bf1\u72f8\u79bb\u6f13\u7406\u674e\u91cc\u9ca4\u793c\u8389\u8354\u540f\u6817\u4e3d\u5389\u52b1\u783e\u5386\u5229\u5088\u4f8b\u4fd0\u75e2\u7acb\u7c92\u6ca5\u96b6\u529b\u7483\u54e9\u4fea\u4fda\u90e6\u575c\u82c8\u8385\u84e0\u85dc\u6369\u5456\u5533\u55b1\u7301\u6ea7\u6fa7\u9026\u5a0c\u5ae0\u9a8a\u7f21\u73de\u67a5\u680e\u8f79\u623e\u783a\u8a48\u7f79\u9502\u9e42\u75a0\u75ac\u86ce\u870a\u8821\u7b20\u7be5\u7c9d\u91b4\u8dde\u96f3\u9ca1\u9ce2\u9ee7",
		lian: "\u4fe9\u8054\u83b2\u8fde\u9570\u5ec9\u601c\u6d9f\u5e18\u655b\u8138\u94fe\u604b\u70bc\u7ec3\u631b\u8539\u5941\u6f4b\u6fc2\u5a08\u740f\u695d\u6b93\u81c1\u81a6\u88e2\u880a\u9ca2",
		liang: "\u7cae\u51c9\u6881\u7cb1\u826f\u4e24\u8f86\u91cf\u667e\u4eae\u8c05\u589a\u690b\u8e09\u9753\u9b49",
		liao: "\u64a9\u804a\u50da\u7597\u71ce\u5be5\u8fbd\u6f66\u4e86\u6482\u9563\u5ed6\u6599\u84fc\u5c25\u5639\u7360\u5bee\u7f2d\u948c\u9e69\u8022",
		lie: "\u5217\u88c2\u70c8\u52a3\u730e\u51bd\u57d2\u6d0c\u8d94\u8e90\u9b23",
		lin: "\u7433\u6797\u78f7\u9716\u4e34\u90bb\u9cde\u6dcb\u51db\u8d41\u541d\u853a\u5d99\u5eea\u9074\u6aa9\u8f9a\u77b5\u7cbc\u8e8f\u9e9f",
		liu: "\u6e9c\u7409\u69b4\u786b\u998f\u7559\u5218\u7624\u6d41\u67f3\u516d\u62a1\u507b\u848c\u6cd6\u6d4f\u905b\u9a9d\u7efa\u65d2\u7198\u950d\u954f\u9e68\u938f",
		"long": "\u9f99\u804b\u5499\u7b3c\u7abf\u9686\u5784\u62e2\u9647\u5f04\u5785\u830f\u6cf7\u73d1\u680a\u80e7\u783b\u7643",
		lou: "\u697c\u5a04\u6402\u7bd3\u6f0f\u964b\u55bd\u5d5d\u9542\u7618\u8027\u877c\u9ac5",
		lu: "\u82a6\u5362\u9885\u5e90\u7089\u63b3\u5364\u864f\u9c81\u9e93\u788c\u9732\u8def\u8d42\u9e7f\u6f5e\u7984\u5f55\u9646\u622e\u5786\u6445\u64b8\u565c\u6cf8\u6e0c\u6f09\u7490\u680c\u6a79\u8f73\u8f82\u8f98\u6c07\u80ea\u9565\u9e2c\u9e6d\u7c0f\u823b\u9c88",
		lv: "\u9a74\u5415\u94dd\u4fa3\u65c5\u5c65\u5c61\u7f15\u8651\u6c2f\u5f8b\u7387\u6ee4\u7eff\u634b\u95fe\u6988\u8182\u7a06\u891b",
		luan: "\u5ce6\u5b6a\u6ee6\u5375\u4e71\u683e\u9e3e\u92ae",
		lue: "\u63a0\u7565\u950a",
		lun: "\u8f6e\u4f26\u4ed1\u6ca6\u7eb6\u8bba\u56f5",
		luo: "\u841d\u87ba\u7f57\u903b\u9523\u7ba9\u9aa1\u88f8\u843d\u6d1b\u9a86\u7edc\u502e\u8366\u645e\u7321\u6cfa\u6924\u8136\u9559\u7630\u96d2",
		ma: "\u5988\u9ebb\u739b\u7801\u8682\u9a6c\u9a82\u561b\u5417\u551b\u72b8\u5b37\u6769\u9ebd",
		mai: "\u57cb\u4e70\u9ea6\u5356\u8fc8\u8109\u52a2\u836c\u54aa\u973e",
		man: "\u7792\u9992\u86ee\u6ee1\u8513\u66fc\u6162\u6f2b\u8c29\u5881\u5e54\u7f26\u71b3\u9558\u989f\u87a8\u9cd7\u9794",
		mang: "\u8292\u832b\u76f2\u5fd9\u83bd\u9099\u6f2d\u6726\u786d\u87d2",
		meng: "\u6c13\u840c\u8499\u6aac\u76df\u9530\u731b\u68a6\u5b5f\u52d0\u750d\u77a2\u61f5\u791e\u867b\u8722\u8813\u824b\u8268\u9efe",
		miao: "\u732b\u82d7\u63cf\u7784\u85d0\u79d2\u6e3a\u5e99\u5999\u55b5\u9088\u7f08\u7f2a\u676a\u6dfc\u7707\u9e4b\u8731",
		mao: "\u8305\u951a\u6bdb\u77db\u94c6\u536f\u8302\u5192\u5e3d\u8c8c\u8d38\u4f94\u88a4\u52d6\u8306\u5cc1\u7441\u6634\u7266\u8004\u65c4\u61cb\u7780\u86d1\u8765\u87ca\u9ae6",
		me: "\u4e48",
		mei: "\u73ab\u679a\u6885\u9176\u9709\u7164\u6ca1\u7709\u5a92\u9541\u6bcf\u7f8e\u6627\u5bd0\u59b9\u5a9a\u5776\u8393\u5d4b\u7338\u6d7c\u6e44\u6963\u9545\u9e5b\u8882\u9b45",
		men: "\u95e8\u95f7\u4eec\u626a\u739f\u7116\u61d1\u9494",
		mi: "\u772f\u919a\u9761\u7cdc\u8ff7\u8c1c\u5f25\u7c73\u79d8\u89c5\u6ccc\u871c\u5bc6\u5e42\u8288\u5196\u8c27\u863c\u5627\u7315\u736f\u6c68\u5b93\u5f2d\u8112\u6549\u7cf8\u7e3b\u9e8b",
		mian: "\u68c9\u7720\u7ef5\u5195\u514d\u52c9\u5a29\u7f05\u9762\u6c94\u6e4e\u817c\u7704",
		mie: "\u8511\u706d\u54a9\u881b\u7bfe",
		min: "\u6c11\u62bf\u76bf\u654f\u60af\u95fd\u82e0\u5cb7\u95f5\u6cef\u73c9",
		ming: "\u660e\u879f\u9e23\u94ed\u540d\u547d\u51a5\u8317\u6e9f\u669d\u7791\u9169",
		miu: "\u8c2c",
		mo: "\u6478\u6479\u8611\u6a21\u819c\u78e8\u6469\u9b54\u62b9\u672b\u83ab\u58a8\u9ed8\u6cab\u6f20\u5bde\u964c\u8c1f\u8309\u84e6\u998d\u5aeb\u9546\u79e3\u763c\u8031\u87c6\u8c8a\u8c98",
		mou: "\u8c0b\u725f\u67d0\u53b6\u54de\u5a7a\u7738\u936a",
		mu: "\u62c7\u7261\u4ea9\u59c6\u6bcd\u5893\u66ae\u5e55\u52df\u6155\u6728\u76ee\u7766\u7267\u7a46\u4eeb\u82dc\u5452\u6c90\u6bea\u94bc",
		na: "\u62ff\u54ea\u5450\u94a0\u90a3\u5a1c\u7eb3\u5185\u637a\u80ad\u954e\u8872\u7bac",
		nai: "\u6c16\u4e43\u5976\u8010\u5948\u9f10\u827f\u8418\u67f0",
		nan: "\u5357\u7537\u96be\u56ca\u5583\u56e1\u6960\u8169\u877b\u8d67",
		nao: "\u6320\u8111\u607c\u95f9\u5b6c\u57b4\u7331\u7459\u7847\u94d9\u86f2",
		ne: "\u6dd6\u5462\u8bb7",
		nei: "\u9981",
		nen: "\u5ae9\u80fd\u6798\u6041",
		ni: "\u59ae\u9713\u502a\u6ce5\u5c3c\u62df\u4f60\u533f\u817b\u9006\u6eba\u4f32\u576d\u730a\u6029\u6ee0\u6635\u65ce\u7962\u615d\u7768\u94cc\u9cb5",
		nian: "\u852b\u62c8\u5e74\u78be\u64b5\u637b\u5ff5\u5eff\u8f87\u9ecf\u9c87\u9cb6",
		niang: "\u5a18\u917f",
		niao: "\u9e1f\u5c3f\u8311\u5b32\u8132\u8885",
		nie: "\u634f\u8042\u5b7d\u556e\u954a\u954d\u6d85\u4e5c\u9667\u8616\u55eb\u8080\u989e\u81ec\u8e51",
		nin: "\u60a8\u67e0",
		ning: "\u72de\u51dd\u5b81\u62e7\u6cde\u4f5e\u84e5\u549b\u752f\u804d",
		niu: "\u725b\u626d\u94ae\u7ebd\u72c3\u5ff8\u599e\u86b4",
		nong: "\u8113\u6d53\u519c\u4fac",
		nu: "\u5974\u52aa\u6012\u5476\u5e11\u5f29\u80ec\u5b65\u9a7d",
		nv: "\u5973\u6067\u9495\u8844",
		nuan: "\u6696",
		nuenue: "\u8650",
		nue: "\u759f\u8c11",
		nuo: "\u632a\u61e6\u7cef\u8bfa\u50a9\u6426\u558f\u9518",
		ou: "\u54e6\u6b27\u9e25\u6bb4\u85d5\u5455\u5076\u6ca4\u6004\u74ef\u8026",
		pa: "\u556a\u8db4\u722c\u5e15\u6015\u7436\u8469\u7b62",
		pai: "\u62cd\u6392\u724c\u5f98\u6e43\u6d3e\u4ff3\u848e",
		pan: "\u6500\u6f58\u76d8\u78d0\u76fc\u7554\u5224\u53db\u723f\u6cee\u88a2\u897b\u87e0\u8e52",
		pang: "\u4e53\u5e9e\u65c1\u802a\u80d6\u6ec2\u9004",
		pao: "\u629b\u5486\u5228\u70ae\u888d\u8dd1\u6ce1\u530f\u72cd\u5e96\u812c\u75b1",
		pei: "\u5478\u80da\u57f9\u88f4\u8d54\u966a\u914d\u4f69\u6c9b\u638a\u8f94\u5e14\u6de0\u65c6\u952b\u9185\u9708",
		pen: "\u55b7\u76c6\u6e53",
		peng: "\u7830\u62a8\u70f9\u6f8e\u5f6d\u84ec\u68da\u787c\u7bf7\u81a8\u670b\u9e4f\u6367\u78b0\u576f\u580b\u562d\u6026\u87db",
		pi: "\u7812\u9739\u6279\u62ab\u5288\u7435\u6bd7\u5564\u813e\u75b2\u76ae\u5339\u75de\u50fb\u5c41\u8b6c\u4e15\u9674\u90b3\u90eb\u572e\u9f19\u64d7\u567c\u5e80\u5ab2\u7eb0\u6787\u7513\u7765\u7f74\u94cd\u75e6\u7656\u758b\u868d\u8c94",
		pian: "\u7bc7\u504f\u7247\u9a97\u8c1d\u9a88\u728f\u80fc\u890a\u7fe9\u8e41",
		piao: "\u98d8\u6f02\u74e2\u7968\u527d\u560c\u5ad6\u7f25\u6b8d\u779f\u87b5",
		pie: "\u6487\u77a5\u4e3f\u82e4\u6c15",
		pin: "\u62fc\u9891\u8d2b\u54c1\u8058\u62da\u59d8\u5ad4\u6980\u725d\u98a6",
		ping: "\u4e52\u576a\u82f9\u840d\u5e73\u51ed\u74f6\u8bc4\u5c4f\u4fdc\u5a09\u67b0\u9c86",
		po: "\u5761\u6cfc\u9887\u5a46\u7834\u9b44\u8feb\u7c95\u53f5\u9131\u6ea5\u73c0\u948b\u94b7\u76a4\u7b38",
		pou: "\u5256\u88d2\u8e23",
		pu: "\u6251\u94fa\u4ec6\u8386\u8461\u83e9\u84b2\u57d4\u6734\u5703\u666e\u6d66\u8c31\u66dd\u7011\u530d\u5657\u6fee\u749e\u6c06\u9564\u9568\u8e7c",
		qi: "\u671f\u6b3a\u6816\u621a\u59bb\u4e03\u51c4\u6f06\u67d2\u6c8f\u5176\u68cb\u5947\u6b67\u7566\u5d0e\u8110\u9f50\u65d7\u7948\u7941\u9a91\u8d77\u5c82\u4e5e\u4f01\u542f\u5951\u780c\u5668\u6c14\u8fc4\u5f03\u6c7d\u6ce3\u8bab\u4e9f\u4e93\u573b\u8291\u840b\u847a\u5601\u5c7a\u5c90\u6c54\u6dc7\u9a90\u7eee\u742a\u7426\u675e\u6864\u69ed\u6b39\u797a\u61a9\u789b\u86f4\u871e\u7da6\u7dae\u8dbf\u8e4a\u9ccd\u9e92",
		qia: "\u6390\u6070\u6d3d\u845c",
		qian: "\u7275\u6266\u948e\u94c5\u5343\u8fc1\u7b7e\u4edf\u8c26\u4e7e\u9ed4\u94b1\u94b3\u524d\u6f5c\u9063\u6d45\u8c34\u5811\u5d4c\u6b20\u6b49\u4f65\u9621\u828a\u82a1\u8368\u63ae\u5c8d\u60ad\u614a\u9a9e\u6434\u8930\u7f31\u6920\u80b7\u6106\u94a4\u8654\u7b9d",
		qiang: "\u67aa\u545b\u8154\u7f8c\u5899\u8537\u5f3a\u62a2\u5af1\u6a2f\u6217\u709d\u9516\u9535\u956a\u8941\u8723\u7f9f\u8deb\u8dc4",
		qiao: "\u6a47\u9539\u6572\u6084\u6865\u77a7\u4e54\u4fa8\u5de7\u9798\u64ac\u7fd8\u5ced\u4fcf\u7a8d\u5281\u8bee\u8c2f\u835e\u6100\u6194\u7f32\u6a35\u6bf3\u7857\u8df7\u9792",
		qie: "\u5207\u8304\u4e14\u602f\u7a83\u90c4\u553c\u60ec\u59be\u6308\u9532\u7ba7",
		qin: "\u94a6\u4fb5\u4eb2\u79e6\u7434\u52e4\u82b9\u64d2\u79bd\u5bdd\u6c81\u82a9\u84c1\u8572\u63ff\u5423\u55ea\u5659\u6eb1\u6a8e\u8793\u887e",
		qing: "\u9752\u8f7b\u6c22\u503e\u537f\u6e05\u64ce\u6674\u6c30\u60c5\u9877\u8bf7\u5e86\u5029\u82d8\u570a\u6aa0\u78ec\u873b\u7f44\u7b90\u8b26\u9cad\u9ee5",
		qiong: "\u743c\u7a77\u909b\u8315\u7a79\u7b47\u928e",
		qiu: "\u79cb\u4e18\u90b1\u7403\u6c42\u56da\u914b\u6cc5\u4fc5\u6c3d\u5def\u827d\u72b0\u6e6b\u9011\u9052\u6978\u8d47\u9e20\u866c\u86af\u8764\u88d8\u7cd7\u9cc5\u9f3d",
		qu: "\u8d8b\u533a\u86c6\u66f2\u8eaf\u5c48\u9a71\u6e20\u53d6\u5a36\u9f8b\u8da3\u53bb\u8bce\u52ac\u8556\u8627\u5c96\u8862\u9612\u74a9\u89d1\u6c0d\u795b\u78f2\u766f\u86d0\u883c\u9eb4\u77bf\u9ee2",
		quan: "\u5708\u98a7\u6743\u919b\u6cc9\u5168\u75ca\u62f3\u72ac\u5238\u529d\u8be0\u8343\u737e\u609b\u7efb\u8f81\u754e\u94e8\u8737\u7b4c\u9b08",
		que: "\u7f3a\u7094\u7638\u5374\u9e4a\u69b7\u786e\u96c0\u9619\u60ab",
		qun: "\u88d9\u7fa4\u9021",
		ran: "\u7136\u71c3\u5189\u67d3\u82d2\u9aef",
		rang: "\u74e4\u58e4\u6518\u56b7\u8ba9\u79b3\u7a70",
		rao: "\u9976\u6270\u7ed5\u835b\u5a06\u6861",
		ruo: "\u60f9\u82e5\u5f31",
		re: "\u70ed\u504c",
		ren: "\u58ec\u4ec1\u4eba\u5fcd\u97e7\u4efb\u8ba4\u5203\u598a\u7eab\u4ede\u834f\u845a\u996a\u8f6b\u7a14\u887d",
		reng: "\u6254\u4ecd",
		ri: "\u65e5",
		rong: "\u620e\u8338\u84c9\u8363\u878d\u7194\u6eb6\u5bb9\u7ed2\u5197\u5d58\u72e8\u7f1b\u6995\u877e",
		rou: "\u63c9\u67d4\u8089\u7cc5\u8e42\u97a3",
		ru: "\u8339\u8815\u5112\u5b7a\u5982\u8fb1\u4e73\u6c5d\u5165\u8925\u84d0\u85b7\u5685\u6d33\u6ebd\u6fe1\u94f7\u8966\u98a5",
		ruan: "\u8f6f\u962e\u670a",
		rui: "\u854a\u745e\u9510\u82ae\u8564\u777f\u868b",
		run: "\u95f0\u6da6",
		sa: "\u6492\u6d12\u8428\u5345\u4ee8\u6332\u98d2",
		sai: "\u816e\u9cc3\u585e\u8d5b\u567b",
		san: "\u4e09\u53c1\u4f1e\u6563\u5f61\u9993\u6c35\u6bf5\u7cc1\u9730",
		sang: "\u6851\u55d3\u4e27\u6421\u78c9\u98a1",
		sao: "\u6414\u9a9a\u626b\u5ac2\u57fd\u81ca\u7619\u9ccb",
		se: "\u745f\u8272\u6da9\u556c\u94e9\u94ef\u7a51",
		sen: "\u68ee",
		seng: "\u50e7",
		sha: "\u838e\u7802\u6740\u5239\u6c99\u7eb1\u50bb\u5565\u715e\u810e\u6b43\u75e7\u88df\u970e\u9ca8",
		shai: "\u7b5b\u6652\u917e",
		shan: "\u73ca\u82eb\u6749\u5c71\u5220\u717d\u886b\u95ea\u9655\u64c5\u8d61\u81b3\u5584\u6c55\u6247\u7f2e\u5261\u8baa\u912f\u57cf\u829f\u6f78\u59d7\u9a9f\u81bb\u9490\u759d\u87ee\u8222\u8dda\u9cdd",
		shang: "\u5892\u4f24\u5546\u8d4f\u664c\u4e0a\u5c1a\u88f3\u57a7\u7ef1\u6b87\u71b5\u89de",
		shao: "\u68a2\u634e\u7a0d\u70e7\u828d\u52fa\u97f6\u5c11\u54e8\u90b5\u7ecd\u52ad\u82d5\u6f72\u86f8\u7b24\u7b72\u8244",
		she: "\u5962\u8d4a\u86c7\u820c\u820d\u8d66\u6444\u5c04\u6151\u6d89\u793e\u8bbe\u538d\u4f58\u731e\u7572\u9e9d",
		shen: "\u7837\u7533\u547b\u4f38\u8eab\u6df1\u5a20\u7ec5\u795e\u6c88\u5ba1\u5a76\u751a\u80be\u614e\u6e17\u8bdc\u8c02\u5432\u54c2\u6e16\u6939\u77e7\u8703",
		sheng: "\u58f0\u751f\u7525\u7272\u5347\u7ef3\u7701\u76db\u5269\u80dc\u5723\u4e1e\u6e11\u5ab5\u771a\u7b19",
		shi: "\u5e08\u5931\u72ee\u65bd\u6e7f\u8bd7\u5c38\u8671\u5341\u77f3\u62fe\u65f6\u4ec0\u98df\u8680\u5b9e\u8bc6\u53f2\u77e2\u4f7f\u5c4e\u9a76\u59cb\u5f0f\u793a\u58eb\u4e16\u67ff\u4e8b\u62ed\u8a93\u901d\u52bf\u662f\u55dc\u566c\u9002\u4ed5\u4f8d\u91ca\u9970\u6c0f\u5e02\u6043\u5ba4\u89c6\u8bd5\u8c25\u57d8\u83b3\u84cd\u5f11\u5511\u9963\u8f7c\u8006\u8d33\u70bb\u793b\u94c8\u94ca\u87ab\u8210\u7b6e\u8c55\u9ca5\u9cba",
		shou: "\u6536\u624b\u9996\u5b88\u5bff\u6388\u552e\u53d7\u7626\u517d\u624c\u72e9\u7ef6\u824f",
		shu: "\u852c\u67a2\u68b3\u6b8a\u6292\u8f93\u53d4\u8212\u6dd1\u758f\u4e66\u8d4e\u5b70\u719f\u85af\u6691\u66d9\u7f72\u8700\u9ecd\u9f20\u5c5e\u672f\u8ff0\u6811\u675f\u620d\u7ad6\u5885\u5eb6\u6570\u6f31\u6055\u500f\u587e\u83fd\u5fc4\u6cad\u6d91\u6f8d\u59dd\u7ebe\u6bf9\u8167\u6bb3\u956f\u79eb\u9e6c",
		shua: "\u5237\u800d\u5530\u6dae",
		shuai: "\u6454\u8870\u7529\u5e05\u87c0",
		shuan: "\u6813\u62f4\u95e9",
		shuang: "\u971c\u53cc\u723d\u5b40",
		shui: "\u8c01\u6c34\u7761\u7a0e",
		shun: "\u542e\u77ac\u987a\u821c\u6042",
		shuo: "\u8bf4\u7855\u6714\u70c1\u84b4\u6420\u55cd\u6fef\u5981\u69ca\u94c4",
		si: "\u65af\u6495\u5636\u601d\u79c1\u53f8\u4e1d\u6b7b\u8086\u5bfa\u55e3\u56db\u4f3a\u4f3c\u9972\u5df3\u53ae\u4fdf\u5155\u83e5\u549d\u6c5c\u6cd7\u6f8c\u59d2\u9a77\u7f0c\u7940\u7960\u9536\u9e36\u801c\u86f3\u7b25",
		song: "\u677e\u8038\u6002\u9882\u9001\u5b8b\u8bbc\u8bf5\u51c7\u83d8\u5d27\u5d69\u5fea\u609a\u6dde\u7ae6",
		sou: "\u641c\u8258\u64de\u55fd\u53df\u55d6\u55fe\u998a\u6eb2\u98d5\u778d\u953c\u878b",
		su: "\u82cf\u9165\u4fd7\u7d20\u901f\u7c9f\u50f3\u5851\u6eaf\u5bbf\u8bc9\u8083\u5919\u8c21\u850c\u55c9\u612b\u7c0c\u89eb\u7a23",
		suan: "\u9178\u849c\u7b97",
		sui: "\u867d\u968b\u968f\u7ee5\u9ad3\u788e\u5c81\u7a57\u9042\u96a7\u795f\u84d1\u51ab\u8c07\u6fc9\u9083\u71e7\u772d\u7762",
		sun: "\u5b59\u635f\u7b0b\u836a\u72f2\u98e7\u69ab\u8de3\u96bc",
		suo: "\u68ad\u5506\u7f29\u7410\u7d22\u9501\u6240\u5522\u55e6\u5a11\u686b\u7743\u7fa7",
		ta: "\u584c\u4ed6\u5b83\u5979\u5854\u736d\u631e\u8e4b\u8e0f\u95fc\u6ebb\u9062\u69bb\u6c93",
		tai: "\u80ce\u82d4\u62ac\u53f0\u6cf0\u915e\u592a\u6001\u6c70\u90b0\u85b9\u80bd\u70b1\u949b\u8dc6\u9c90",
		tan: "\u574d\u644a\u8d2a\u762b\u6ee9\u575b\u6a80\u75f0\u6f6d\u8c2d\u8c08\u5766\u6bef\u8892\u78b3\u63a2\u53f9\u70ad\u90ef\u8548\u6619\u94bd\u952c\u8983",
		tang: "\u6c64\u5858\u642a\u5802\u68e0\u819b\u5510\u7cd6\u50a5\u9967\u6e8f\u746d\u94f4\u9557\u8025\u8797\u87b3\u7fb0\u91a3",
		thang: "\u5018\u8eba\u6dcc",
		theng: "\u8d9f\u70eb",
		tao: "\u638f\u6d9b\u6ed4\u7ee6\u8404\u6843\u9003\u6dd8\u9676\u8ba8\u5957\u6311\u9f17\u5555\u97ec\u9955",
		te: "\u7279",
		teng: "\u85e4\u817e\u75bc\u8a8a\u6ed5",
		ti: "\u68af\u5254\u8e22\u9511\u63d0\u9898\u8e44\u557c\u4f53\u66ff\u568f\u60d5\u6d95\u5243\u5c49\u8351\u608c\u9016\u7ee8\u7f07\u9e48\u88fc\u918d",
		tian: "\u5929\u6dfb\u586b\u7530\u751c\u606c\u8214\u8146\u63ad\u5fdd\u9617\u6b84\u754b\u94bf\u86ba",
		tiao: "\u6761\u8fe2\u773a\u8df3\u4f7b\u7967\u94eb\u7a95\u9f86\u9ca6",
		tie: "\u8d34\u94c1\u5e16\u841c\u992e",
		ting: "\u5385\u542c\u70c3\u6c40\u5ef7\u505c\u4ead\u5ead\u633a\u8247\u839b\u8476\u5a77\u6883\u8713\u9706",
		tong: "\u901a\u6850\u916e\u77b3\u540c\u94dc\u5f64\u7ae5\u6876\u6345\u7b52\u7edf\u75db\u4f5f\u50ee\u4edd\u833c\u55f5\u6078\u6f7c\u783c",
		tou: "\u5077\u6295\u5934\u900f\u4ea0",
		tu: "\u51f8\u79c3\u7a81\u56fe\u5f92\u9014\u6d82\u5c60\u571f\u5410\u5154\u580d\u837c\u83df\u948d\u9174",
		tuan: "\u6e4d\u56e2\u7583",
		tui: "\u63a8\u9893\u817f\u8715\u892a\u9000\u5fd2\u717a",
		tun: "\u541e\u5c6f\u81c0\u9968\u66be\u8c5a\u7a80",
		tuo: "\u62d6\u6258\u8131\u9e35\u9640\u9a6e\u9a7c\u692d\u59a5\u62d3\u553e\u4e47\u4f57\u5768\u5eb9\u6cb1\u67dd\u7823\u7ba8\u8204\u8dce\u9f0d",
		wa: "\u6316\u54c7\u86d9\u6d3c\u5a03\u74e6\u889c\u4f64\u5a32\u817d",
		wai: "\u6b6a\u5916",
		wan: "\u8c4c\u5f2f\u6e7e\u73a9\u987d\u4e38\u70f7\u5b8c\u7897\u633d\u665a\u7696\u60cb\u5b9b\u5a49\u4e07\u8155\u525c\u8284\u82cb\u83c0\u7ea8\u7efe\u742c\u8118\u7579\u873f\u7ba2",
		wang: "\u6c6a\u738b\u4ea1\u6789\u7f51\u5f80\u65fa\u671b\u5fd8\u5984\u7f54\u5c22\u60d8\u8f8b\u9b4d",
		wei: "\u5a01\u5dcd\u5fae\u5371\u97e6\u8fdd\u6845\u56f4\u552f\u60df\u4e3a\u6f4d\u7ef4\u82c7\u840e\u59d4\u4f1f\u4f2a\u5c3e\u7eac\u672a\u851a\u5473\u754f\u80c3\u5582\u9b4f\u4f4d\u6e2d\u8c13\u5c09\u6170\u536b\u502d\u504e\u8bff\u9688\u8473\u8587\u5e0f\u5e37\u5d34\u5d6c\u7325\u732c\u95f1\u6ca9\u6d27\u6da0\u9036\u5a13\u73ae\u97ea\u8ece\u709c\u7168\u71a8\u75ff\u8249\u9c94",
		wen: "\u761f\u6e29\u868a\u6587\u95fb\u7eb9\u543b\u7a33\u7d0a\u95ee\u520e\u6120\u960c\u6c76\u74ba\u97eb\u6b81\u96ef",
		weng: "\u55e1\u7fc1\u74ee\u84ca\u8579",
		wo: "\u631d\u8717\u6da1\u7a9d\u6211\u65a1\u5367\u63e1\u6c83\u83b4\u5e44\u6e25\u674c\u809f\u9f8c",
		wu: "\u5deb\u545c\u94a8\u4e4c\u6c61\u8bec\u5c4b\u65e0\u829c\u68a7\u543e\u5434\u6bcb\u6b66\u4e94\u6342\u5348\u821e\u4f0d\u4fae\u575e\u620a\u96fe\u6664\u7269\u52ff\u52a1\u609f\u8bef\u5140\u4ef5\u9622\u90ac\u572c\u82b4\u5e91\u6003\u5fe4\u6d6f\u5be4\u8fd5\u59a9\u9a9b\u727e\u7110\u9e49\u9e5c\u8708\u92c8\u9f2f",
		xi: "\u6614\u7199\u6790\u897f\u7852\u77fd\u6670\u563b\u5438\u9521\u727a\u7a00\u606f\u5e0c\u6089\u819d\u5915\u60dc\u7184\u70ef\u6eaa\u6c50\u7280\u6a84\u88ad\u5e2d\u4e60\u5ab3\u559c\u94e3\u6d17\u7cfb\u9699\u620f\u7ec6\u50d6\u516e\u96b0\u90d7\u831c\u8478\u84f0\u595a\u550f\u5f99\u9969\u960b\u6d60\u6dc5\u5c63\u5b09\u73ba\u6a28\u66e6\u89cb\u6b37\u71b9\u798a\u79a7\u94b8\u7699\u7a78\u8725\u87cb\u823e\u7fb2\u7c9e\u7fd5\u91af\u9f37",
		xia: "\u778e\u867e\u5323\u971e\u8f96\u6687\u5ce1\u4fa0\u72ed\u4e0b\u53a6\u590f\u5413\u6380\u846d\u55c4\u72ce\u9050\u7455\u7856\u7615\u7f45\u9ee0",
		xian: "\u9528\u5148\u4ed9\u9c9c\u7ea4\u54b8\u8d24\u8854\u8237\u95f2\u6d8e\u5f26\u5acc\u663e\u9669\u73b0\u732e\u53bf\u817a\u9985\u7fa1\u5baa\u9677\u9650\u7ebf\u51bc\u85d3\u5c98\u7303\u66b9\u5a34\u6c19\u7946\u9e47\u75eb\u86ac\u7b45\u7c7c\u9170\u8df9",
		xiang: "\u76f8\u53a2\u9576\u9999\u7bb1\u8944\u6e58\u4e61\u7fd4\u7965\u8be6\u60f3\u54cd\u4eab\u9879\u5df7\u6a61\u50cf\u5411\u8c61\u8297\u8459\u9977\u5ea0\u9aa7\u7f03\u87d3\u9c9e\u98e8",
		xiao: "\u8427\u785d\u9704\u524a\u54ee\u56a3\u9500\u6d88\u5bb5\u6dc6\u6653\u5c0f\u5b5d\u6821\u8096\u5578\u7b11\u6548\u54d3\u54bb\u5d24\u6f47\u900d\u9a81\u7ee1\u67ad\u67b5\u7b71\u7bab\u9b48",
		xie: "\u6954\u4e9b\u6b47\u874e\u978b\u534f\u631f\u643a\u90aa\u659c\u80c1\u8c10\u5199\u68b0\u5378\u87f9\u61c8\u6cc4\u6cfb\u8c22\u5c51\u5055\u4eb5\u52f0\u71ee\u85a4\u64b7\u5ee8\u7023\u9082\u7ec1\u7f2c\u69ad\u698d\u6b59\u8e9e",
		xin: "\u85aa\u82af\u950c\u6b23\u8f9b\u65b0\u5ffb\u5fc3\u4fe1\u8845\u56df\u99a8\u8398\u6b46\u94fd\u946b",
		xing: "\u661f\u8165\u7329\u60fa\u5174\u5211\u578b\u5f62\u90a2\u884c\u9192\u5e78\u674f\u6027\u59d3\u9649\u8347\u8365\u64e4\u60bb\u784e",
		xiong: "\u5144\u51f6\u80f8\u5308\u6c79\u96c4\u718a\u828e",
		xiu: "\u4f11\u4fee\u7f9e\u673d\u55c5\u9508\u79c0\u8896\u7ee3\u83a0\u5cab\u9990\u5ea5\u9e3a\u8c85\u9af9",
		xu: "\u589f\u620c\u9700\u865a\u5618\u987b\u5f90\u8bb8\u84c4\u9157\u53d9\u65ed\u5e8f\u755c\u6064\u7d6e\u5a7f\u7eea\u7eed\u8bb4\u8be9\u5729\u84ff\u6035\u6d2b\u6e86\u987c\u6829\u7166\u7809\u76f1\u80e5\u7cc8\u9191",
		xuan: "\u8f69\u55a7\u5ba3\u60ac\u65cb\u7384\u9009\u7663\u7729\u7eda\u5107\u8c16\u8431\u63ce\u9994\u6ceb\u6d35\u6e32\u6f29\u7487\u6966\u6684\u70ab\u714a\u78b9\u94c9\u955f\u75c3",
		xue: "\u9774\u859b\u5b66\u7a74\u96ea\u8840\u5671\u6cf6\u9cd5",
		xun: "\u52cb\u718f\u5faa\u65ec\u8be2\u5bfb\u9a6f\u5de1\u6b89\u6c5b\u8bad\u8baf\u900a\u8fc5\u5dfd\u57d9\u8340\u85b0\u5ccb\u5f87\u6d54\u66db\u7aa8\u91ba\u9c9f",
		ya: "\u538b\u62bc\u9e26\u9e2d\u5440\u4e2b\u82bd\u7259\u869c\u5d16\u8859\u6daf\u96c5\u54d1\u4e9a\u8bb6\u4f22\u63e0\u5416\u5c88\u8fd3\u5a05\u740a\u6860\u6c29\u7811\u775a\u75d6",
		yan: "\u7109\u54bd\u9609\u70df\u6df9\u76d0\u4e25\u7814\u8712\u5ca9\u5ef6\u8a00\u989c\u960e\u708e\u6cbf\u5944\u63a9\u773c\u884d\u6f14\u8273\u5830\u71d5\u538c\u781a\u96c1\u5501\u5f66\u7130\u5bb4\u8c1a\u9a8c\u53a3\u9765\u8d5d\u4fe8\u5043\u5156\u8ba0\u8c33\u90fe\u9122\u82ab\u83f8\u5d26\u6079\u95eb\u960f\u6d07\u6e6e\u6edf\u598d\u5ae3\u7430\u664f\u80ed\u814c\u7131\u7f68\u7b75\u917d\u9b47\u990d\u9f39",
		yang: "\u6b83\u592e\u9e2f\u79e7\u6768\u626c\u4f6f\u75a1\u7f8a\u6d0b\u9633\u6c27\u4ef0\u75d2\u517b\u6837\u6f3e\u5f89\u600f\u6cf1\u7080\u70ca\u6059\u86d8\u9785",
		yao: "\u9080\u8170\u5996\u7476\u6447\u5c27\u9065\u7a91\u8c23\u59da\u54ac\u8200\u836f\u8981\u8000\u592d\u723b\u5406\u5d3e\u5fad\u7039\u5e7a\u73e7\u6773\u66dc\u80b4\u9e5e\u7a88\u7e47\u9cd0",
		ye: "\u6930\u564e\u8036\u7237\u91ce\u51b6\u4e5f\u9875\u6396\u4e1a\u53f6\u66f3\u814b\u591c\u6db2\u8c12\u90ba\u63f6\u9980\u6654\u70e8\u94d8",
		yi: "\u4e00\u58f9\u533b\u63d6\u94f1\u4f9d\u4f0a\u8863\u9890\u5937\u9057\u79fb\u4eea\u80f0\u7591\u6c82\u5b9c\u59e8\u5f5d\u6905\u8681\u501a\u5df2\u4e59\u77e3\u4ee5\u827a\u6291\u6613\u9091\u5c79\u4ebf\u5f79\u81c6\u9038\u8084\u75ab\u4ea6\u88d4\u610f\u6bc5\u5fc6\u4e49\u76ca\u6ea2\u8be3\u8bae\u8c0a\u8bd1\u5f02\u7ffc\u7fcc\u7ece\u5208\u5293\u4f7e\u8bd2\u572a\u572f\u57f8\u61ff\u82e1\u858f\u5f08\u5955\u6339\u5f0b\u5453\u54a6\u54bf\u566b\u5cc4\u5db7\u7317\u9974\u603f\u6021\u6092\u6f2a\u8fe4\u9a7f\u7f22\u6baa\u8d3b\u65d6\u71a0\u9487\u9552\u9571\u75cd\u7617\u7654\u7fca\u8864\u8734\u8223\u7fbf\u7ff3\u914f\u9edf",
		yin: "\u8335\u836b\u56e0\u6bb7\u97f3\u9634\u59fb\u541f\u94f6\u6deb\u5bc5\u996e\u5c39\u5f15\u9690\u5370\u80e4\u911e\u5819\u831a\u5591\u72fa\u5924\u6c24\u94df\u763e\u8693\u972a\u9f88",
		ying: "\u82f1\u6a31\u5a74\u9e70\u5e94\u7f28\u83b9\u8424\u8425\u8367\u8747\u8fce\u8d62\u76c8\u5f71\u9896\u786c\u6620\u5b34\u90e2\u8314\u83ba\u8426\u6484\u5624\u81ba\u6ee2\u6f46\u701b\u745b\u748e\u6979\u9e66\u763f\u988d\u7f42",
		yo: "\u54df\u5537",
		yong: "\u62e5\u4f63\u81c3\u75c8\u5eb8\u96cd\u8e0a\u86f9\u548f\u6cf3\u6d8c\u6c38\u607f\u52c7\u7528\u4fd1\u58c5\u5889\u6175\u9095\u955b\u752c\u9cd9\u9954",
		you: "\u5e7d\u4f18\u60a0\u5fe7\u5c24\u7531\u90ae\u94c0\u72b9\u6cb9\u6e38\u9149\u6709\u53cb\u53f3\u4f51\u91c9\u8bf1\u53c8\u5e7c\u5363\u6538\u4f91\u83b8\u5466\u56ff\u5ba5\u67da\u7337\u7256\u94d5\u75a3\u8763\u9c7f\u9edd\u9f2c",
		yu: "\u8fc2\u6de4\u4e8e\u76c2\u6986\u865e\u611a\u8206\u4f59\u4fde\u903e\u9c7c\u6109\u6e1d\u6e14\u9685\u4e88\u5a31\u96e8\u4e0e\u5c7f\u79b9\u5b87\u8bed\u7fbd\u7389\u57df\u828b\u90c1\u5401\u9047\u55bb\u5cea\u5fa1\u6108\u6b32\u72f1\u80b2\u8a89\u6d74\u5bd3\u88d5\u9884\u8c6b\u9a6d\u79ba\u6bd3\u4f1b\u4fe3\u8c00\u8c15\u8438\u84e3\u63c4\u5581\u5704\u5709\u5d5b\u72f3\u996b\u5ebe\u9608\u59aa\u59a4\u7ea1\u745c\u6631\u89ce\u8174\u6b24\u65bc\u715c\u71e0\u807f\u94b0\u9e46\u7610\u7600\u7ab3\u8753\u7afd\u8201\u96e9\u9f89",
		yuan: "\u9e33\u6e0a\u51a4\u5143\u57a3\u8881\u539f\u63f4\u8f95\u56ed\u5458\u5706\u733f\u6e90\u7f18\u8fdc\u82d1\u613f\u6028\u9662\u586c\u6c85\u5a9b\u7457\u6a7c\u7230\u7722\u9e22\u8788\u9f0b",
		yue: "\u66f0\u7ea6\u8d8a\u8dc3\u94a5\u5cb3\u7ca4\u6708\u60a6\u9605\u9fa0\u6a3e\u5216\u94ba",
		yun: "\u8018\u4e91\u90e7\u5300\u9668\u5141\u8fd0\u8574\u915d\u6655\u97f5\u5b55\u90d3\u82b8\u72c1\u607d\u7ead\u6b92\u6600\u6c32",
		za: "\u531d\u7838\u6742\u62f6\u5482",
		zai: "\u683d\u54c9\u707e\u5bb0\u8f7d\u518d\u5728\u54b1\u5d3d\u753e",
		zan: "\u6512\u6682\u8d5e\u74d2\u661d\u7c2a\u7ccc\u8db1\u933e",
		zang: "\u8d43\u810f\u846c\u5958\u6215\u81e7",
		zao: "\u906d\u7cdf\u51ff\u85fb\u67a3\u65e9\u6fa1\u86a4\u8e81\u566a\u9020\u7682\u7076\u71e5\u5523\u7f2b",
		ze: "\u8d23\u62e9\u5219\u6cfd\u4ec4\u8d5c\u5567\u8fee\u6603\u7b2e\u7ba6\u8234",
		zei: "\u8d3c",
		zen: "\u600e\u8c2e",
		zeng: "\u589e\u618e\u66fe\u8d60\u7f2f\u7511\u7f7e\u9503",
		zha: "\u624e\u55b3\u6e23\u672d\u8f67\u94e1\u95f8\u7728\u6805\u69a8\u548b\u4e4d\u70b8\u8bc8\u63f8\u5412\u54a4\u54f3\u600d\u781f\u75c4\u86b1\u9f44",
		zhai: "\u6458\u658b\u5b85\u7a84\u503a\u5be8\u7826",
		zhan: "\u77bb\u6be1\u8a79\u7c98\u6cbe\u76cf\u65a9\u8f97\u5d2d\u5c55\u8638\u6808\u5360\u6218\u7ad9\u6e5b\u7efd\u8c35\u640c\u65c3",
		zhang: "\u6a1f\u7ae0\u5f70\u6f33\u5f20\u638c\u6da8\u6756\u4e08\u5e10\u8d26\u4ed7\u80c0\u7634\u969c\u4ec9\u9123\u5e5b\u5d82\u7350\u5adc\u748b\u87d1",
		zhao: "\u62db\u662d\u627e\u6cbc\u8d75\u7167\u7f69\u5146\u8087\u53ec\u722a\u8bcf\u68f9\u948a\u7b0a",
		zhe: "\u906e\u6298\u54f2\u86f0\u8f99\u8005\u9517\u8517\u8fd9\u6d59\u8c2a\u966c\u67d8\u8f84\u78d4\u9e67\u891a\u8707\u8d6d",
		zhen: "\u73cd\u659f\u771f\u7504\u7827\u81fb\u8d1e\u9488\u4fa6\u6795\u75b9\u8bca\u9707\u632f\u9547\u9635\u7f1c\u6862\u699b\u8f78\u8d48\u80d7\u6715\u796f\u755b\u9e29",
		zheng: "\u84b8\u6323\u7741\u5f81\u72f0\u4e89\u6014\u6574\u62ef\u6b63\u653f\u5e27\u75c7\u90d1\u8bc1\u8be4\u5ce5\u94b2\u94ee\u7b5d",
		zhi: "\u829d\u679d\u652f\u5431\u8718\u77e5\u80a2\u8102\u6c41\u4e4b\u7ec7\u804c\u76f4\u690d\u6b96\u6267\u503c\u4f84\u5740\u6307\u6b62\u8dbe\u53ea\u65e8\u7eb8\u5fd7\u631a\u63b7\u81f3\u81f4\u7f6e\u5e1c\u5cd9\u5236\u667a\u79e9\u7a1a\u8d28\u7099\u75d4\u6ede\u6cbb\u7a92\u536e\u965f\u90c5\u57f4\u82b7\u646d\u5e19\u5fee\u5f58\u54ab\u9a98\u6809\u67b3\u6800\u684e\u8f75\u8f7e\u6534\u8d3d\u81a3\u7949\u7957\u9ef9\u96c9\u9e37\u75e3\u86ed\u7d77\u916f\u8dd6\u8e2c\u8e2f\u8c78\u89ef",
		zhong: "\u4e2d\u76c5\u5fe0\u949f\u8877\u7ec8\u79cd\u80bf\u91cd\u4ef2\u4f17\u51a2\u953a\u87bd\u8202\u822f\u8e35",
		zhou: "\u821f\u5468\u5dde\u6d32\u8bcc\u7ca5\u8f74\u8098\u5e1a\u5492\u76b1\u5b99\u663c\u9aa4\u5544\u7740\u501c\u8bf9\u836e\u9b3b\u7ea3\u80c4\u78a1\u7c40\u8233\u914e\u9cb7",
		zhu: "\u73e0\u682a\u86db\u6731\u732a\u8bf8\u8bdb\u9010\u7af9\u70db\u716e\u62c4\u77a9\u5631\u4e3b\u8457\u67f1\u52a9\u86c0\u8d2e\u94f8\u7b51\u4f4f\u6ce8\u795d\u9a7b\u4f2b\u4f8f\u90be\u82ce\u8331\u6d19\u6e1a\u6f74\u9a7a\u677c\u69e0\u6a65\u70b7\u94e2\u75b0\u7603\u86b0\u7afa\u7bb8\u7fe5\u8e85\u9e88",
		zhua: "\u6293",
		zhuai: "\u62fd",
		zhuan: "\u4e13\u7816\u8f6c\u64b0\u8d5a\u7bc6\u629f\u556d\u989b",
		zhuang: "\u6869\u5e84\u88c5\u5986\u649e\u58ee\u72b6\u4e2c",
		zhui: "\u690e\u9525\u8ffd\u8d58\u5760\u7f00\u8411\u9a93\u7f12",
		zhun: "\u8c06\u51c6",
		zhuo: "\u6349\u62d9\u5353\u684c\u7422\u8301\u914c\u707c\u6d4a\u502c\u8bfc\u5ef4\u855e\u64e2\u555c\u6d5e\u6dbf\u6753\u712f\u799a\u65ab",
		zi: "\u5179\u54a8\u8d44\u59ff\u6ecb\u6dc4\u5b5c\u7d2b\u4ed4\u7c7d\u6ed3\u5b50\u81ea\u6e0d\u5b57\u8c18\u5d6b\u59ca\u5b73\u7f01\u6893\u8f8e\u8d40\u6063\u7726\u9531\u79ed\u8014\u7b2b\u7ca2\u89dc\u8a3e\u9cbb\u9aed",
		zong: "\u9b03\u68d5\u8e2a\u5b97\u7efc\u603b\u7eb5\u8159\u7cbd",
		zou: "\u90b9\u8d70\u594f\u63cd\u9139\u9cb0",
		zu: "\u79df\u8db3\u5352\u65cf\u7956\u8bc5\u963b\u7ec4\u4fce\u83f9\u5550\u5f82\u9a75\u8e74",
		zuan: "\u94bb\u7e82\u6525\u7f35",
		zui: "\u5634\u9189\u6700\u7f6a",
		zun: "\u5c0a\u9075\u6499\u6a3d\u9cdf",
		zuo: "\u6628\u5de6\u4f50\u67de\u505a\u4f5c\u5750\u5ea7\u961d\u963c\u80d9\u795a\u9162",
		cou: "\u85ae\u6971\u8f8f\u8160",
		nang: "\u652e\u54dd\u56d4\u9995\u66e9",
		o: "\u5594",
		dia: "\u55f2",
		chuai: "\u562c\u81aa\u8e39",
		cen: "\u5c91\u6d94",
		diu: "\u94e5",
		nou: "\u8028",
		fou: "\u7f36",
		bia: "\u9adf"
	};

	function c(f, e) {
		for (var g in d) {
			if (d[g].indexOf(f) != -1) {
				return a(g);
				break
			}
		}
		return false
	}
	function a(e) {
		if (e.length > 0) {
			var g = e.substr(0, 1).toUpperCase();
			var f = e.substr(1, e.length);
			return g + f
		}
	}
})(jQuery);


/***处理删除**/

function forbidBackSpace(e) {
	var ev = e || window.event;
	var obj = ev.target || ev.srcElement;
	var t = obj.type || obj.getAttribute('type');
	var vReadOnly = obj.readOnly;
	var vDisabled = obj.disabled;
	vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
	vDisabled = (vDisabled == undefined) ? true : vDisabled;
	var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
	var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
	if (flag2 || flag1) return false;
}
document.onkeypress = forbidBackSpace;
document.onkeydown = forbidBackSpace;