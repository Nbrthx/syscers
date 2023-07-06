(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/lib/mithril.min.js
  var require_mithril_min = __commonJS({
    "src/lib/mithril.min.js"(exports, module) {
      !function() {
        "use strict";
        function e2(e3, t3, n3, r3, o3, l3) {
          return { tag: e3, key: t3, attrs: n3, children: r3, text: o3, dom: l3, domSize: void 0, state: void 0, events: void 0, instance: void 0 };
        }
        e2.normalize = function(t3) {
          return Array.isArray(t3) ? e2("[", void 0, void 0, e2.normalizeChildren(t3), void 0, void 0) : null == t3 || "boolean" == typeof t3 ? null : "object" == typeof t3 ? t3 : e2("#", void 0, void 0, String(t3), void 0, void 0);
        }, e2.normalizeChildren = function(t3) {
          var n3 = [];
          if (t3.length) {
            for (var r3 = null != t3[0] && null != t3[0].key, o3 = 1; o3 < t3.length; o3++)
              if ((null != t3[o3] && null != t3[o3].key) !== r3)
                throw new TypeError(!r3 || null == t3[o3] && "boolean" != typeof t3[o3] ? "In fragments, vnodes must either all have keys or none have keys." : "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole.");
            for (o3 = 0; o3 < t3.length; o3++)
              n3[o3] = e2.normalize(t3[o3]);
          }
          return n3;
        };
        var t2 = function() {
          var t3, n3 = arguments[this], r3 = this + 1;
          if (null == n3 ? n3 = {} : ("object" != typeof n3 || null != n3.tag || Array.isArray(n3)) && (n3 = {}, r3 = this), arguments.length === r3 + 1)
            t3 = arguments[r3], Array.isArray(t3) || (t3 = [t3]);
          else
            for (t3 = []; r3 < arguments.length; )
              t3.push(arguments[r3++]);
          return e2("", n3.key, n3, t3);
        }, n2 = {}.hasOwnProperty, r2 = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g, o2 = {};
        function l2(e3) {
          for (var t3 in e3)
            if (n2.call(e3, t3))
              return false;
          return true;
        }
        function i2(e3) {
          for (var t3, n3 = "div", l3 = [], i3 = {}; t3 = r2.exec(e3); ) {
            var a3 = t3[1], u3 = t3[2];
            if ("" === a3 && "" !== u3)
              n3 = u3;
            else if ("#" === a3)
              i3.id = u3;
            else if ("." === a3)
              l3.push(u3);
            else if ("[" === t3[3][0]) {
              var s3 = t3[6];
              s3 && (s3 = s3.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")), "class" === t3[4] ? l3.push(s3) : i3[t3[4]] = "" === s3 ? s3 : s3 || true;
            }
          }
          return l3.length > 0 && (i3.className = l3.join(" ")), o2[e3] = { tag: n3, attrs: i3 };
        }
        function a2(e3, t3) {
          var r3 = t3.attrs, o3 = n2.call(r3, "class"), i3 = o3 ? r3.class : r3.className;
          if (t3.tag = e3.tag, t3.attrs = {}, !l2(e3.attrs) && !l2(r3)) {
            var a3 = {};
            for (var u3 in r3)
              n2.call(r3, u3) && (a3[u3] = r3[u3]);
            r3 = a3;
          }
          for (var u3 in e3.attrs)
            n2.call(e3.attrs, u3) && "className" !== u3 && !n2.call(r3, u3) && (r3[u3] = e3.attrs[u3]);
          for (var u3 in null == i3 && null == e3.attrs.className || (r3.className = null != i3 ? null != e3.attrs.className ? String(e3.attrs.className) + " " + String(i3) : i3 : null != e3.attrs.className ? e3.attrs.className : null), o3 && (r3.class = null), r3)
            if (n2.call(r3, u3) && "key" !== u3) {
              t3.attrs = r3;
              break;
            }
          return t3;
        }
        function u2(n3) {
          if (null == n3 || "string" != typeof n3 && "function" != typeof n3 && "function" != typeof n3.view)
            throw Error("The selector must be either a string or a component.");
          var r3 = t2.apply(1, arguments);
          return "string" == typeof n3 && (r3.children = e2.normalizeChildren(r3.children), "[" !== n3) ? a2(o2[n3] || i2(n3), r3) : (r3.tag = n3, r3);
        }
        u2.trust = function(t3) {
          return null == t3 && (t3 = ""), e2("<", void 0, void 0, t3, void 0, void 0);
        }, u2.fragment = function() {
          var n3 = t2.apply(0, arguments);
          return n3.tag = "[", n3.children = e2.normalizeChildren(n3.children), n3;
        };
        var s2 = /* @__PURE__ */ new WeakMap();
        var f2 = { delayedRemoval: s2, domFor: function* ({ dom: e3, domSize0: t3 }, { generation0: n3 } = {}) {
          if (null != e3)
            do {
              const { nextSibling: r3 } = e3;
              s2.get(e3) === n3 && (yield e3, t3--), e3 = r3;
            } while (t3);
        } }, c2 = f2.delayedRemoval, d2 = f2.domFor, p2 = function(t3) {
          var n3, r3, o3 = t3 && t3.document, l3 = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" };
          function i3(e3) {
            return e3.attrs && e3.attrs.xmlns || l3[e3.tag];
          }
          function a3(e3, t4) {
            if (e3.state !== t4)
              throw new Error("'vnode.state' must not be modified.");
          }
          function u3(e3) {
            var t4 = e3.state;
            try {
              return this.apply(t4, arguments);
            } finally {
              a3(e3, t4);
            }
          }
          function s3() {
            try {
              return o3.activeElement;
            } catch (e3) {
              return null;
            }
          }
          function f3(e3, t4, n4, r4, o4, l4, i4) {
            for (var a4 = n4; a4 < r4; a4++) {
              var u4 = t4[a4];
              null != u4 && p3(e3, u4, o4, i4, l4);
            }
          }
          function p3(t4, n4, r4, l4, a4) {
            var s4 = n4.tag;
            if ("string" == typeof s4)
              switch (n4.state = {}, null != n4.attrs && D2(n4.attrs, n4, r4), s4) {
                case "#":
                  !function(e3, t5, n5) {
                    t5.dom = o3.createTextNode(t5.children), k3(e3, t5.dom, n5);
                  }(t4, n4, a4);
                  break;
                case "<":
                  v3(t4, n4, l4, a4);
                  break;
                case "[":
                  !function(e3, t5, n5, r5, l5) {
                    var i4 = o3.createDocumentFragment();
                    if (null != t5.children) {
                      var a5 = t5.children;
                      f3(i4, a5, 0, a5.length, n5, null, r5);
                    }
                    t5.dom = i4.firstChild, t5.domSize = i4.childNodes.length, k3(e3, i4, l5);
                  }(t4, n4, r4, l4, a4);
                  break;
                default:
                  !function(e3, t5, n5, r5, l5) {
                    var a5 = t5.tag, u4 = t5.attrs, s5 = u4 && u4.is, c3 = (r5 = i3(t5) || r5) ? s5 ? o3.createElementNS(r5, a5, { is: s5 }) : o3.createElementNS(r5, a5) : s5 ? o3.createElement(a5, { is: s5 }) : o3.createElement(a5);
                    t5.dom = c3, null != u4 && function(e4, t6, n6) {
                      "input" === e4.tag && null != t6.type && e4.dom.setAttribute("type", t6.type);
                      var r6 = null != t6 && "input" === e4.tag && "file" === t6.type;
                      for (var o4 in t6)
                        C3(e4, o4, null, t6[o4], n6, r6);
                    }(t5, u4, r5);
                    if (k3(e3, c3, l5), !S3(t5) && null != t5.children) {
                      var d3 = t5.children;
                      f3(c3, d3, 0, d3.length, n5, null, r5), "select" === t5.tag && null != u4 && function(e4, t6) {
                        if ("value" in t6)
                          if (null === t6.value)
                            -1 !== e4.dom.selectedIndex && (e4.dom.value = null);
                          else {
                            var n6 = "" + t6.value;
                            e4.dom.value === n6 && -1 !== e4.dom.selectedIndex || (e4.dom.value = n6);
                          }
                        "selectedIndex" in t6 && C3(e4, "selectedIndex", null, t6.selectedIndex, void 0);
                      }(t5, u4);
                    }
                  }(t4, n4, r4, l4, a4);
              }
            else
              !function(t5, n5, r5, o4, l5) {
                (function(t6, n6) {
                  var r6;
                  if ("function" == typeof t6.tag.view) {
                    if (t6.state = Object.create(t6.tag), null != (r6 = t6.state.view).$$reentrantLock$$)
                      return;
                    r6.$$reentrantLock$$ = true;
                  } else {
                    if (t6.state = void 0, null != (r6 = t6.tag).$$reentrantLock$$)
                      return;
                    r6.$$reentrantLock$$ = true, t6.state = null != t6.tag.prototype && "function" == typeof t6.tag.prototype.view ? new t6.tag(t6) : t6.tag(t6);
                  }
                  D2(t6.state, t6, n6), null != t6.attrs && D2(t6.attrs, t6, n6);
                  if (t6.instance = e2.normalize(u3.call(t6.state.view, t6)), t6.instance === t6)
                    throw Error("A view cannot return the vnode it received as argument");
                  r6.$$reentrantLock$$ = null;
                })(n5, r5), null != n5.instance ? (p3(t5, n5.instance, r5, o4, l5), n5.dom = n5.instance.dom, n5.domSize = null != n5.dom ? n5.instance.domSize : 0) : n5.domSize = 0;
              }(t4, n4, r4, l4, a4);
          }
          var m8 = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" };
          function v3(e3, t4, n4, r4) {
            var l4 = t4.children.match(/^\s*?<(\w+)/im) || [], i4 = o3.createElement(m8[l4[1]] || "div");
            "http://www.w3.org/2000/svg" === n4 ? (i4.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + t4.children + "</svg>", i4 = i4.firstChild) : i4.innerHTML = t4.children, t4.dom = i4.firstChild, t4.domSize = i4.childNodes.length;
            for (var a4, u4 = o3.createDocumentFragment(); a4 = i4.firstChild; )
              u4.appendChild(a4);
            k3(e3, u4, r4);
          }
          function h3(e3, t4, n4, r4, o4, l4) {
            if (t4 !== n4 && (null != t4 || null != n4))
              if (null == t4 || 0 === t4.length)
                f3(e3, n4, 0, n4.length, r4, o4, l4);
              else if (null == n4 || 0 === n4.length)
                E3(e3, t4, 0, t4.length);
              else {
                var i4 = null != t4[0] && null != t4[0].key, a4 = null != n4[0] && null != n4[0].key, u4 = 0, s4 = 0;
                if (!i4)
                  for (; s4 < t4.length && null == t4[s4]; )
                    s4++;
                if (!a4)
                  for (; u4 < n4.length && null == n4[u4]; )
                    u4++;
                if (i4 !== a4)
                  E3(e3, t4, s4, t4.length), f3(e3, n4, u4, n4.length, r4, o4, l4);
                else if (a4) {
                  for (var c3, d3, m9, v4, h4, k4 = t4.length - 1, S4 = n4.length - 1; k4 >= s4 && S4 >= u4 && (m9 = t4[k4], v4 = n4[S4], m9.key === v4.key); )
                    m9 !== v4 && y3(e3, m9, v4, r4, o4, l4), null != v4.dom && (o4 = v4.dom), k4--, S4--;
                  for (; k4 >= s4 && S4 >= u4 && (c3 = t4[s4], d3 = n4[u4], c3.key === d3.key); )
                    s4++, u4++, c3 !== d3 && y3(e3, c3, d3, r4, b3(t4, s4, o4), l4);
                  for (; k4 >= s4 && S4 >= u4 && u4 !== S4 && c3.key === v4.key && m9.key === d3.key; )
                    x3(e3, m9, h4 = b3(t4, s4, o4)), m9 !== d3 && y3(e3, m9, d3, r4, h4, l4), ++u4 <= --S4 && x3(e3, c3, o4), c3 !== v4 && y3(e3, c3, v4, r4, o4, l4), null != v4.dom && (o4 = v4.dom), s4++, m9 = t4[--k4], v4 = n4[S4], c3 = t4[s4], d3 = n4[u4];
                  for (; k4 >= s4 && S4 >= u4 && m9.key === v4.key; )
                    m9 !== v4 && y3(e3, m9, v4, r4, o4, l4), null != v4.dom && (o4 = v4.dom), S4--, m9 = t4[--k4], v4 = n4[S4];
                  if (u4 > S4)
                    E3(e3, t4, s4, k4 + 1);
                  else if (s4 > k4)
                    f3(e3, n4, u4, S4 + 1, r4, o4, l4);
                  else {
                    var j4, A4, C4 = o4, O4 = S4 - u4 + 1, T3 = new Array(O4), N3 = 0, $3 = 0, L3 = 2147483647, R3 = 0;
                    for ($3 = 0; $3 < O4; $3++)
                      T3[$3] = -1;
                    for ($3 = S4; $3 >= u4; $3--) {
                      null == j4 && (j4 = g3(t4, s4, k4 + 1));
                      var I3 = j4[(v4 = n4[$3]).key];
                      null != I3 && (L3 = I3 < L3 ? I3 : -1, T3[$3 - u4] = I3, m9 = t4[I3], t4[I3] = null, m9 !== v4 && y3(e3, m9, v4, r4, o4, l4), null != v4.dom && (o4 = v4.dom), R3++);
                    }
                    if (o4 = C4, R3 !== k4 - s4 + 1 && E3(e3, t4, s4, k4 + 1), 0 === R3)
                      f3(e3, n4, u4, S4 + 1, r4, o4, l4);
                    else if (-1 === L3)
                      for (N3 = (A4 = function(e4) {
                        var t5 = [0], n5 = 0, r5 = 0, o5 = 0, l5 = w3.length = e4.length;
                        for (o5 = 0; o5 < l5; o5++)
                          w3[o5] = e4[o5];
                        for (o5 = 0; o5 < l5; ++o5)
                          if (-1 !== e4[o5]) {
                            var i5 = t5[t5.length - 1];
                            if (e4[i5] < e4[o5])
                              w3[o5] = i5, t5.push(o5);
                            else {
                              for (n5 = 0, r5 = t5.length - 1; n5 < r5; ) {
                                var a5 = (n5 >>> 1) + (r5 >>> 1) + (n5 & r5 & 1);
                                e4[t5[a5]] < e4[o5] ? n5 = a5 + 1 : r5 = a5;
                              }
                              e4[o5] < e4[t5[n5]] && (n5 > 0 && (w3[o5] = t5[n5 - 1]), t5[n5] = o5);
                            }
                          }
                        n5 = t5.length, r5 = t5[n5 - 1];
                        for (; n5-- > 0; )
                          t5[n5] = r5, r5 = w3[r5];
                        return w3.length = 0, t5;
                      }(T3)).length - 1, $3 = S4; $3 >= u4; $3--)
                        d3 = n4[$3], -1 === T3[$3 - u4] ? p3(e3, d3, r4, l4, o4) : A4[N3] === $3 - u4 ? N3-- : x3(e3, d3, o4), null != d3.dom && (o4 = n4[$3].dom);
                    else
                      for ($3 = S4; $3 >= u4; $3--)
                        d3 = n4[$3], -1 === T3[$3 - u4] && p3(e3, d3, r4, l4, o4), null != d3.dom && (o4 = n4[$3].dom);
                  }
                } else {
                  var P3 = t4.length < n4.length ? t4.length : n4.length;
                  for (u4 = u4 < s4 ? u4 : s4; u4 < P3; u4++)
                    (c3 = t4[u4]) === (d3 = n4[u4]) || null == c3 && null == d3 || (null == c3 ? p3(e3, d3, r4, l4, b3(t4, u4 + 1, o4)) : null == d3 ? z3(e3, c3) : y3(e3, c3, d3, r4, b3(t4, u4 + 1, o4), l4));
                  t4.length > P3 && E3(e3, t4, u4, t4.length), n4.length > P3 && f3(e3, n4, u4, n4.length, r4, o4, l4);
                }
              }
          }
          function y3(t4, n4, r4, o4, l4, a4) {
            var s4 = n4.tag;
            if (s4 === r4.tag) {
              if (r4.state = n4.state, r4.events = n4.events, function(e3, t5) {
                do {
                  var n5;
                  if (null != e3.attrs && "function" == typeof e3.attrs.onbeforeupdate) {
                    if (void 0 !== (n5 = u3.call(e3.attrs.onbeforeupdate, e3, t5)) && !n5)
                      break;
                  }
                  if ("string" != typeof e3.tag && "function" == typeof e3.state.onbeforeupdate) {
                    if (void 0 !== (n5 = u3.call(e3.state.onbeforeupdate, e3, t5)) && !n5)
                      break;
                  }
                  return false;
                } while (0);
                return e3.dom = t5.dom, e3.domSize = t5.domSize, e3.instance = t5.instance, e3.attrs = t5.attrs, e3.children = t5.children, e3.text = t5.text, true;
              }(r4, n4))
                return;
              if ("string" == typeof s4)
                switch (null != r4.attrs && M2(r4.attrs, r4, o4), s4) {
                  case "#":
                    !function(e3, t5) {
                      e3.children.toString() !== t5.children.toString() && (e3.dom.nodeValue = t5.children);
                      t5.dom = e3.dom;
                    }(n4, r4);
                    break;
                  case "<":
                    !function(e3, t5, n5, r5, o5) {
                      t5.children !== n5.children ? (j3(e3, t5, void 0), v3(e3, n5, r5, o5)) : (n5.dom = t5.dom, n5.domSize = t5.domSize);
                    }(t4, n4, r4, a4, l4);
                    break;
                  case "[":
                    !function(e3, t5, n5, r5, o5, l5) {
                      h3(e3, t5.children, n5.children, r5, o5, l5);
                      var i4 = 0, a5 = n5.children;
                      if (n5.dom = null, null != a5) {
                        for (var u4 = 0; u4 < a5.length; u4++) {
                          var s5 = a5[u4];
                          null != s5 && null != s5.dom && (null == n5.dom && (n5.dom = s5.dom), i4 += s5.domSize || 1);
                        }
                        1 !== i4 && (n5.domSize = i4);
                      }
                    }(t4, n4, r4, o4, l4, a4);
                    break;
                  default:
                    !function(e3, t5, n5, r5) {
                      var o5 = t5.dom = e3.dom;
                      r5 = i3(t5) || r5, "textarea" === t5.tag && null == t5.attrs && (t5.attrs = {});
                      (function(e4, t6, n6, r6) {
                        t6 && t6 === n6 && console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major");
                        if (null != n6) {
                          "input" === e4.tag && null != n6.type && e4.dom.setAttribute("type", n6.type);
                          var o6 = "input" === e4.tag && "file" === n6.type;
                          for (var l5 in n6)
                            C3(e4, l5, t6 && t6[l5], n6[l5], r6, o6);
                        }
                        var i4;
                        if (null != t6)
                          for (var l5 in t6)
                            null == (i4 = t6[l5]) || null != n6 && null != n6[l5] || O3(e4, l5, i4, r6);
                      })(t5, e3.attrs, t5.attrs, r5), S3(t5) || h3(o5, e3.children, t5.children, n5, null, r5);
                    }(n4, r4, o4, a4);
                }
              else
                !function(t5, n5, r5, o5, l5, i4) {
                  if (r5.instance = e2.normalize(u3.call(r5.state.view, r5)), r5.instance === r5)
                    throw Error("A view cannot return the vnode it received as argument");
                  M2(r5.state, r5, o5), null != r5.attrs && M2(r5.attrs, r5, o5);
                  null != r5.instance ? (null == n5.instance ? p3(t5, r5.instance, o5, i4, l5) : y3(t5, n5.instance, r5.instance, o5, l5, i4), r5.dom = r5.instance.dom, r5.domSize = r5.instance.domSize) : null != n5.instance ? (z3(t5, n5.instance), r5.dom = void 0, r5.domSize = 0) : (r5.dom = n5.dom, r5.domSize = n5.domSize);
                }(t4, n4, r4, o4, l4, a4);
            } else
              z3(t4, n4), p3(t4, r4, o4, a4, l4);
          }
          function g3(e3, t4, n4) {
            for (var r4 = /* @__PURE__ */ Object.create(null); t4 < n4; t4++) {
              var o4 = e3[t4];
              if (null != o4) {
                var l4 = o4.key;
                null != l4 && (r4[l4] = t4);
              }
            }
            return r4;
          }
          var w3 = [];
          function b3(e3, t4, n4) {
            for (; t4 < e3.length; t4++)
              if (null != e3[t4] && null != e3[t4].dom)
                return e3[t4].dom;
            return n4;
          }
          function x3(e3, t4, n4) {
            if (null != t4.dom) {
              var r4;
              if (null == t4.domSize)
                r4 = t4.dom;
              else
                for (var l4 of (r4 = o3.createDocumentFragment(), d2(t4)))
                  r4.appendChild(l4);
              k3(e3, r4, n4);
            }
          }
          function k3(e3, t4, n4) {
            null != n4 ? e3.insertBefore(t4, n4) : e3.appendChild(t4);
          }
          function S3(e3) {
            if (null == e3.attrs || null == e3.attrs.contenteditable && null == e3.attrs.contentEditable)
              return false;
            var t4 = e3.children;
            if (null != t4 && 1 === t4.length && "<" === t4[0].tag) {
              var n4 = t4[0].children;
              e3.dom.innerHTML !== n4 && (e3.dom.innerHTML = n4);
            } else if (null != t4 && 0 !== t4.length)
              throw new Error("Child node of a contenteditable must be trusted.");
            return true;
          }
          function E3(e3, t4, n4, r4) {
            for (var o4 = n4; o4 < r4; o4++) {
              var l4 = t4[o4];
              null != l4 && z3(e3, l4);
            }
          }
          function z3(e3, t4) {
            var n4, o4, l4, i4, s4 = 0, f4 = t4.state;
            "string" != typeof t4.tag && "function" == typeof t4.state.onbeforeremove && (null != (l4 = u3.call(t4.state.onbeforeremove, t4)) && "function" == typeof l4.then && (s4 = 1, n4 = l4));
            t4.attrs && "function" == typeof t4.attrs.onbeforeremove && (null != (l4 = u3.call(t4.attrs.onbeforeremove, t4)) && "function" == typeof l4.then && (s4 |= 2, o4 = l4));
            if (a3(t4, f4), s4) {
              for (var p4 of (i4 = r3, d2(t4)))
                c2.set(p4, i4);
              null != n4 && n4.finally(function() {
                1 & s4 && ((s4 &= 2) || (a3(t4, f4), A3(t4), j3(e3, t4, i4)));
              }), null != o4 && o4.finally(function() {
                2 & s4 && ((s4 &= 1) || (a3(t4, f4), A3(t4), j3(e3, t4, i4)));
              });
            } else
              A3(t4), j3(e3, t4, i4);
          }
          function j3(e3, t4, n4) {
            if (null != t4.dom)
              if (null == t4.domSize)
                c2.get(t4.dom) === n4 && e3.removeChild(t4.dom);
              else
                for (var r4 of d2(t4, { generation: n4 }))
                  e3.removeChild(r4);
          }
          function A3(e3) {
            if ("string" != typeof e3.tag && "function" == typeof e3.state.onremove && u3.call(e3.state.onremove, e3), e3.attrs && "function" == typeof e3.attrs.onremove && u3.call(e3.attrs.onremove, e3), "string" != typeof e3.tag)
              null != e3.instance && A3(e3.instance);
            else {
              var t4 = e3.children;
              if (Array.isArray(t4))
                for (var n4 = 0; n4 < t4.length; n4++) {
                  var r4 = t4[n4];
                  null != r4 && A3(r4);
                }
            }
          }
          function C3(e3, t4, n4, r4, l4, i4) {
            if (!("key" === t4 || "is" === t4 || null == r4 || T2(t4) || n4 === r4 && !function(e4, t5) {
              return "value" === t5 || "checked" === t5 || "selectedIndex" === t5 || "selected" === t5 && e4.dom === s3() || "option" === e4.tag && e4.dom.parentNode === o3.activeElement;
            }(e3, t4) && "object" != typeof r4 || "type" === t4 && "input" === e3.tag)) {
              if ("o" === t4[0] && "n" === t4[1])
                return _2(e3, t4, r4);
              if ("xlink:" === t4.slice(0, 6))
                e3.dom.setAttributeNS("http://www.w3.org/1999/xlink", t4.slice(6), r4);
              else if ("style" === t4)
                P2(e3.dom, n4, r4);
              else if (N2(e3, t4, l4)) {
                if ("value" === t4) {
                  if (("input" === e3.tag || "textarea" === e3.tag) && e3.dom.value === "" + r4 && (i4 || e3.dom === s3()))
                    return;
                  if ("select" === e3.tag && null !== n4 && e3.dom.value === "" + r4)
                    return;
                  if ("option" === e3.tag && null !== n4 && e3.dom.value === "" + r4)
                    return;
                  if (i4 && "" + r4 != "")
                    return void console.error("`value` is read-only on file inputs!");
                }
                e3.dom[t4] = r4;
              } else
                "boolean" == typeof r4 ? r4 ? e3.dom.setAttribute(t4, "") : e3.dom.removeAttribute(t4) : e3.dom.setAttribute("className" === t4 ? "class" : t4, r4);
            }
          }
          function O3(e3, t4, n4, r4) {
            if ("key" !== t4 && "is" !== t4 && null != n4 && !T2(t4))
              if ("o" === t4[0] && "n" === t4[1])
                _2(e3, t4, void 0);
              else if ("style" === t4)
                P2(e3.dom, n4, null);
              else if (!N2(e3, t4, r4) || "className" === t4 || "title" === t4 || "value" === t4 && ("option" === e3.tag || "select" === e3.tag && -1 === e3.dom.selectedIndex && e3.dom === s3()) || "input" === e3.tag && "type" === t4) {
                var o4 = t4.indexOf(":");
                -1 !== o4 && (t4 = t4.slice(o4 + 1)), false !== n4 && e3.dom.removeAttribute("className" === t4 ? "class" : t4);
              } else
                e3.dom[t4] = null;
          }
          function T2(e3) {
            return "oninit" === e3 || "oncreate" === e3 || "onupdate" === e3 || "onremove" === e3 || "onbeforeremove" === e3 || "onbeforeupdate" === e3;
          }
          function N2(e3, t4, n4) {
            return void 0 === n4 && (e3.tag.indexOf("-") > -1 || null != e3.attrs && e3.attrs.is || "href" !== t4 && "list" !== t4 && "form" !== t4 && "width" !== t4 && "height" !== t4) && t4 in e3.dom;
          }
          var $2, L2 = /[A-Z]/g;
          function R2(e3) {
            return "-" + e3.toLowerCase();
          }
          function I2(e3) {
            return "-" === e3[0] && "-" === e3[1] ? e3 : "cssFloat" === e3 ? "float" : e3.replace(L2, R2);
          }
          function P2(e3, t4, n4) {
            if (t4 === n4)
              ;
            else if (null == n4)
              e3.style = "";
            else if ("object" != typeof n4)
              e3.style = n4;
            else if (null == t4 || "object" != typeof t4)
              for (var r4 in e3.style.cssText = "", n4) {
                null != (o4 = n4[r4]) && e3.style.setProperty(I2(r4), String(o4));
              }
            else {
              for (var r4 in n4) {
                var o4;
                null != (o4 = n4[r4]) && (o4 = String(o4)) !== String(t4[r4]) && e3.style.setProperty(I2(r4), o4);
              }
              for (var r4 in t4)
                null != t4[r4] && null == n4[r4] && e3.style.removeProperty(I2(r4));
            }
          }
          function F2() {
            this._ = n3;
          }
          function _2(e3, t4, r4) {
            if (null != e3.events) {
              if (e3.events._ = n3, e3.events[t4] === r4)
                return;
              null == r4 || "function" != typeof r4 && "object" != typeof r4 ? (null != e3.events[t4] && e3.dom.removeEventListener(t4.slice(2), e3.events, false), e3.events[t4] = void 0) : (null == e3.events[t4] && e3.dom.addEventListener(t4.slice(2), e3.events, false), e3.events[t4] = r4);
            } else
              null == r4 || "function" != typeof r4 && "object" != typeof r4 || (e3.events = new F2(), e3.dom.addEventListener(t4.slice(2), e3.events, false), e3.events[t4] = r4);
          }
          function D2(e3, t4, n4) {
            "function" == typeof e3.oninit && u3.call(e3.oninit, t4), "function" == typeof e3.oncreate && n4.push(u3.bind(e3.oncreate, t4));
          }
          function M2(e3, t4, n4) {
            "function" == typeof e3.onupdate && n4.push(u3.bind(e3.onupdate, t4));
          }
          return F2.prototype = /* @__PURE__ */ Object.create(null), F2.prototype.handleEvent = function(e3) {
            var t4, n4 = this["on" + e3.type];
            "function" == typeof n4 ? t4 = n4.call(e3.currentTarget, e3) : "function" == typeof n4.handleEvent && n4.handleEvent(e3), this._ && false !== e3.redraw && (0, this._)(), false === t4 && (e3.preventDefault(), e3.stopPropagation());
          }, function(t4, o4, l4) {
            if (!t4)
              throw new TypeError("DOM element being rendered to does not exist.");
            if (null != $2 && t4.contains($2))
              throw new TypeError("Node is currently being rendered to and thus is locked.");
            var i4 = n3, a4 = $2, u4 = [], f4 = s3(), c3 = t4.namespaceURI;
            $2 = t4, n3 = "function" == typeof l4 ? l4 : void 0, r3 = {};
            try {
              null == t4.vnodes && (t4.textContent = ""), o4 = e2.normalizeChildren(Array.isArray(o4) ? o4 : [o4]), h3(t4, t4.vnodes, o4, u4, null, "http://www.w3.org/1999/xhtml" === c3 ? void 0 : c3), t4.vnodes = o4, null != f4 && s3() !== f4 && "function" == typeof f4.focus && f4.focus();
              for (var d3 = 0; d3 < u4.length; d3++)
                u4[d3]();
            } finally {
              n3 = i4, $2 = a4;
            }
          };
        }("undefined" != typeof window ? window : null), m7 = function(t3, n3, r3) {
          var o3 = [], l3 = false, i3 = -1;
          function a3() {
            for (i3 = 0; i3 < o3.length; i3 += 2)
              try {
                t3(o3[i3], e2(o3[i3 + 1]), u3);
              } catch (e3) {
                r3.error(e3);
              }
            i3 = -1;
          }
          function u3() {
            l3 || (l3 = true, n3(function() {
              l3 = false, a3();
            }));
          }
          return u3.sync = a3, { mount: function(n4, r4) {
            if (null != r4 && null == r4.view && "function" != typeof r4)
              throw new TypeError("m.mount expects a component, not a vnode.");
            var l4 = o3.indexOf(n4);
            l4 >= 0 && (o3.splice(l4, 2), l4 <= i3 && (i3 -= 2), t3(n4, [])), null != r4 && (o3.push(n4, r4), t3(n4, e2(r4), u3));
          }, redraw: u3 };
        }(p2, "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : null, "undefined" != typeof console ? console : null), v2 = function(e3) {
          if ("[object Object]" !== Object.prototype.toString.call(e3))
            return "";
          var t3 = [];
          for (var n3 in e3)
            r3(n3, e3[n3]);
          return t3.join("&");
          function r3(e4, n4) {
            if (Array.isArray(n4))
              for (var o3 = 0; o3 < n4.length; o3++)
                r3(e4 + "[" + o3 + "]", n4[o3]);
            else if ("[object Object]" === Object.prototype.toString.call(n4))
              for (var o3 in n4)
                r3(e4 + "[" + o3 + "]", n4[o3]);
            else
              t3.push(encodeURIComponent(e4) + (null != n4 && "" !== n4 ? "=" + encodeURIComponent(n4) : ""));
          }
        }, h2 = Object.assign || function(e3, t3) {
          for (var r3 in t3)
            n2.call(t3, r3) && (e3[r3] = t3[r3]);
        }, y2 = function(e3, t3) {
          if (/:([^\/\.-]+)(\.{3})?:/.test(e3))
            throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
          if (null == t3)
            return e3;
          var n3 = e3.indexOf("?"), r3 = e3.indexOf("#"), o3 = r3 < 0 ? e3.length : r3, l3 = n3 < 0 ? o3 : n3, i3 = e3.slice(0, l3), a3 = {};
          h2(a3, t3);
          var u3 = i3.replace(/:([^\/\.-]+)(\.{3})?/g, function(e4, n4, r4) {
            return delete a3[n4], null == t3[n4] ? e4 : r4 ? t3[n4] : encodeURIComponent(String(t3[n4]));
          }), s3 = u3.indexOf("?"), f3 = u3.indexOf("#"), c3 = f3 < 0 ? u3.length : f3, d3 = s3 < 0 ? c3 : s3, p3 = u3.slice(0, d3);
          n3 >= 0 && (p3 += e3.slice(n3, o3)), s3 >= 0 && (p3 += (n3 < 0 ? "?" : "&") + u3.slice(s3, c3));
          var m8 = v2(a3);
          return m8 && (p3 += (n3 < 0 && s3 < 0 ? "?" : "&") + m8), r3 >= 0 && (p3 += e3.slice(r3)), f3 >= 0 && (p3 += (r3 < 0 ? "" : "&") + u3.slice(f3)), p3;
        }, g2 = function(e3, t3) {
          function r3(e4) {
            return new Promise(e4);
          }
          function o3(e4, t4) {
            for (var r4 in e4.headers)
              if (n2.call(e4.headers, r4) && r4.toLowerCase() === t4)
                return true;
            return false;
          }
          return r3.prototype = Promise.prototype, r3.__proto__ = Promise, { request: function(l3, i3) {
            "string" != typeof l3 ? (i3 = l3, l3 = l3.url) : null == i3 && (i3 = {});
            var a3 = function(t4, r4) {
              return new Promise(function(l4, i4) {
                t4 = y2(t4, r4.params);
                var a4, u4 = null != r4.method ? r4.method.toUpperCase() : "GET", s4 = r4.body, f3 = (null == r4.serialize || r4.serialize === JSON.serialize) && !(s4 instanceof e3.FormData || s4 instanceof e3.URLSearchParams), c3 = r4.responseType || ("function" == typeof r4.extract ? "" : "json"), d3 = new e3.XMLHttpRequest(), p3 = false, m8 = false, v3 = d3, h3 = d3.abort;
                for (var g3 in d3.abort = function() {
                  p3 = true, h3.call(this);
                }, d3.open(u4, t4, false !== r4.async, "string" == typeof r4.user ? r4.user : void 0, "string" == typeof r4.password ? r4.password : void 0), f3 && null != s4 && !o3(r4, "content-type") && d3.setRequestHeader("Content-Type", "application/json; charset=utf-8"), "function" == typeof r4.deserialize || o3(r4, "accept") || d3.setRequestHeader("Accept", "application/json, text/*"), r4.withCredentials && (d3.withCredentials = r4.withCredentials), r4.timeout && (d3.timeout = r4.timeout), d3.responseType = c3, r4.headers)
                  n2.call(r4.headers, g3) && d3.setRequestHeader(g3, r4.headers[g3]);
                d3.onreadystatechange = function(e4) {
                  if (!p3 && 4 === e4.target.readyState)
                    try {
                      var n3, o4 = e4.target.status >= 200 && e4.target.status < 300 || 304 === e4.target.status || /^file:\/\//i.test(t4), a5 = e4.target.response;
                      if ("json" === c3) {
                        if (!e4.target.responseType && "function" != typeof r4.extract)
                          try {
                            a5 = JSON.parse(e4.target.responseText);
                          } catch (e5) {
                            a5 = null;
                          }
                      } else
                        c3 && "text" !== c3 || null == a5 && (a5 = e4.target.responseText);
                      if ("function" == typeof r4.extract ? (a5 = r4.extract(e4.target, r4), o4 = true) : "function" == typeof r4.deserialize && (a5 = r4.deserialize(a5)), o4) {
                        if ("function" == typeof r4.type)
                          if (Array.isArray(a5))
                            for (var u5 = 0; u5 < a5.length; u5++)
                              a5[u5] = new r4.type(a5[u5]);
                          else
                            a5 = new r4.type(a5);
                        l4(a5);
                      } else {
                        var s5 = function() {
                          try {
                            n3 = e4.target.responseText;
                          } catch (e5) {
                            n3 = a5;
                          }
                          var t5 = new Error(n3);
                          t5.code = e4.target.status, t5.response = a5, i4(t5);
                        };
                        0 === d3.status ? setTimeout(function() {
                          m8 || s5();
                        }) : s5();
                      }
                    } catch (e5) {
                      i4(e5);
                    }
                }, d3.ontimeout = function(e4) {
                  m8 = true;
                  var t5 = new Error("Request timed out");
                  t5.code = e4.target.status, i4(t5);
                }, "function" == typeof r4.config && (d3 = r4.config(d3, r4, t4) || d3) !== v3 && (a4 = d3.abort, d3.abort = function() {
                  p3 = true, a4.call(this);
                }), null == s4 ? d3.send() : "function" == typeof r4.serialize ? d3.send(r4.serialize(s4)) : s4 instanceof e3.FormData || s4 instanceof e3.URLSearchParams ? d3.send(s4) : d3.send(JSON.stringify(s4));
              });
            }(l3, i3);
            if (true === i3.background)
              return a3;
            var u3 = 0;
            function s3() {
              0 == --u3 && "function" == typeof t3 && t3();
            }
            return function e4(t4) {
              var n3 = t4.then;
              return t4.constructor = r3, t4.then = function() {
                u3++;
                var r4 = n3.apply(t4, arguments);
                return r4.then(s3, function(e5) {
                  if (s3(), 0 === u3)
                    throw e5;
                }), e4(r4);
              }, t4;
            }(a3);
          } };
        }("undefined" != typeof window ? window : null, m7.redraw), w2 = m7, b2 = f2, x2 = function() {
          return u2.apply(this, arguments);
        };
        x2.m = u2, x2.trust = u2.trust, x2.fragment = u2.fragment, x2.Fragment = "[", x2.mount = w2.mount;
        var k2 = u2;
        function S2(e3) {
          try {
            return decodeURIComponent(e3);
          } catch (t3) {
            return e3;
          }
        }
        var E2 = function(e3) {
          if ("" === e3 || null == e3)
            return {};
          "?" === e3.charAt(0) && (e3 = e3.slice(1));
          for (var t3 = e3.split("&"), n3 = {}, r3 = {}, o3 = 0; o3 < t3.length; o3++) {
            var l3 = t3[o3].split("="), i3 = S2(l3[0]), a3 = 2 === l3.length ? S2(l3[1]) : "";
            "true" === a3 ? a3 = true : "false" === a3 && (a3 = false);
            var u3 = i3.split(/\]\[?|\[/), s3 = r3;
            i3.indexOf("[") > -1 && u3.pop();
            for (var f3 = 0; f3 < u3.length; f3++) {
              var c3 = u3[f3], d3 = u3[f3 + 1], p3 = "" == d3 || !isNaN(parseInt(d3, 10));
              if ("" === c3)
                null == n3[i3 = u3.slice(0, f3).join()] && (n3[i3] = Array.isArray(s3) ? s3.length : 0), c3 = n3[i3]++;
              else if ("__proto__" === c3)
                break;
              if (f3 === u3.length - 1)
                s3[c3] = a3;
              else {
                var m8 = Object.getOwnPropertyDescriptor(s3, c3);
                null != m8 && (m8 = m8.value), null == m8 && (s3[c3] = m8 = p3 ? [] : {}), s3 = m8;
              }
            }
          }
          return r3;
        }, z2 = function(e3) {
          var t3 = e3.indexOf("?"), n3 = e3.indexOf("#"), r3 = n3 < 0 ? e3.length : n3, o3 = t3 < 0 ? r3 : t3, l3 = e3.slice(0, o3).replace(/\/{2,}/g, "/");
          return l3 ? "/" !== l3[0] && (l3 = "/" + l3) : l3 = "/", { path: l3, params: t3 < 0 ? {} : E2(e3.slice(t3 + 1, r3)) };
        }, j2 = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$"), A2 = function(e3, t3) {
          var r3 = {};
          if (null != t3)
            for (var o3 in e3)
              n2.call(e3, o3) && !j2.test(o3) && t3.indexOf(o3) < 0 && (r3[o3] = e3[o3]);
          else
            for (var o3 in e3)
              n2.call(e3, o3) && !j2.test(o3) && (r3[o3] = e3[o3]);
          return r3;
        }, C2 = {};
        function O2(e3) {
          try {
            return decodeURIComponent(e3);
          } catch (t3) {
            return e3;
          }
        }
        x2.route = function(t3, n3) {
          var r3, o3, l3, i3, a3, u3, s3 = null == t3 ? null : "function" == typeof t3.setImmediate ? t3.setImmediate : t3.setTimeout, f3 = Promise.resolve(), c3 = false, d3 = false, p3 = 0, m8 = C2, v3 = { onbeforeupdate: function() {
            return !(!(p3 = p3 ? 2 : 1) || C2 === m8);
          }, onremove: function() {
            t3.removeEventListener("popstate", b3, false), t3.removeEventListener("hashchange", w3, false);
          }, view: function() {
            if (p3 && C2 !== m8) {
              var t4 = [e2(l3, i3.key, i3)];
              return m8 && (t4 = m8.render(t4[0])), t4;
            }
          } }, g3 = S3.SKIP = {};
          function w3() {
            c3 = false;
            var e3 = t3.location.hash;
            "#" !== S3.prefix[0] && (e3 = t3.location.search + e3, "?" !== S3.prefix[0] && "/" !== (e3 = t3.location.pathname + e3)[0] && (e3 = "/" + e3));
            var s4 = e3.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, O2).slice(S3.prefix.length), d4 = z2(s4);
            function v4(e4) {
              console.error(e4), x3(o3, null, { replace: true });
            }
            h2(d4.params, t3.history.state), function e4(t4) {
              for (; t4 < r3.length; t4++)
                if (r3[t4].check(d4)) {
                  var c4 = r3[t4].component, h3 = r3[t4].route, y3 = c4, w4 = u3 = function(r4) {
                    if (w4 === u3) {
                      if (r4 === g3)
                        return e4(t4 + 1);
                      l3 = null == r4 || "function" != typeof r4.view && "function" != typeof r4 ? "div" : r4, i3 = d4.params, a3 = s4, u3 = null, m8 = c4.render ? c4 : null, 2 === p3 ? n3.redraw() : (p3 = 2, n3.redraw.sync());
                    }
                  };
                  return void (c4.view || "function" == typeof c4 ? (c4 = {}, w4(y3)) : c4.onmatch ? f3.then(function() {
                    return c4.onmatch(d4.params, s4, h3);
                  }).then(w4, s4 === o3 ? null : v4) : w4("div"));
                }
              if (s4 === o3)
                throw new Error("Could not resolve default route " + o3 + ".");
              x3(o3, null, { replace: true });
            }(0);
          }
          function b3() {
            c3 || (c3 = true, s3(w3));
          }
          function x3(e3, n4, r4) {
            if (e3 = y2(e3, n4), d3) {
              b3();
              var o4 = r4 ? r4.state : null, l4 = r4 ? r4.title : null;
              r4 && r4.replace ? t3.history.replaceState(o4, l4, S3.prefix + e3) : t3.history.pushState(o4, l4, S3.prefix + e3);
            } else
              t3.location.href = S3.prefix + e3;
          }
          function S3(e3, l4, i4) {
            if (!e3)
              throw new TypeError("DOM element being rendered to does not exist.");
            if (r3 = Object.keys(i4).map(function(e4) {
              if ("/" !== e4[0])
                throw new SyntaxError("Routes must start with a '/'.");
              if (/:([^\/\.-]+)(\.{3})?:/.test(e4))
                throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
              return { route: e4, component: i4[e4], check: (t4 = e4, n4 = z2(t4), r4 = Object.keys(n4.params), o4 = [], l5 = new RegExp("^" + n4.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(e5, t5, n5) {
                return null == t5 ? "\\" + e5 : (o4.push({ k: t5, r: "..." === n5 }), "..." === n5 ? "(.*)" : "." === n5 ? "([^/]+)\\." : "([^/]+)" + (n5 || ""));
              }) + "$"), function(e5) {
                for (var t5 = 0; t5 < r4.length; t5++)
                  if (n4.params[r4[t5]] !== e5.params[r4[t5]])
                    return false;
                if (!o4.length)
                  return l5.test(e5.path);
                var i5 = l5.exec(e5.path);
                if (null == i5)
                  return false;
                for (t5 = 0; t5 < o4.length; t5++)
                  e5.params[o4[t5].k] = o4[t5].r ? i5[t5 + 1] : decodeURIComponent(i5[t5 + 1]);
                return true;
              }) };
              var t4, n4, r4, o4, l5;
            }), o3 = l4, null != l4) {
              var a4 = z2(l4);
              if (!r3.some(function(e4) {
                return e4.check(a4);
              }))
                throw new ReferenceError("Default route doesn't match any known routes.");
            }
            "function" == typeof t3.history.pushState ? t3.addEventListener("popstate", b3, false) : "#" === S3.prefix[0] && t3.addEventListener("hashchange", w3, false), d3 = true, n3.mount(e3, v3), w3();
          }
          return S3.set = function(e3, t4, n4) {
            null != u3 && ((n4 = n4 || {}).replace = true), u3 = null, x3(e3, t4, n4);
          }, S3.get = function() {
            return a3;
          }, S3.prefix = "#!", S3.Link = { view: function(e3) {
            var t4, n4, r4, o4 = k2(e3.attrs.selector || "a", A2(e3.attrs, ["options", "params", "selector", "onclick"]), e3.children);
            return (o4.attrs.disabled = Boolean(o4.attrs.disabled)) ? (o4.attrs.href = null, o4.attrs["aria-disabled"] = "true") : (t4 = e3.attrs.options, n4 = e3.attrs.onclick, r4 = y2(o4.attrs.href, e3.attrs.params), o4.attrs.href = S3.prefix + r4, o4.attrs.onclick = function(e4) {
              var o5;
              "function" == typeof n4 ? o5 = n4.call(e4.currentTarget, e4) : null == n4 || "object" != typeof n4 || "function" == typeof n4.handleEvent && n4.handleEvent(e4), false === o5 || e4.defaultPrevented || 0 !== e4.button && 0 !== e4.which && 1 !== e4.which || e4.currentTarget.target && "_self" !== e4.currentTarget.target || e4.ctrlKey || e4.metaKey || e4.shiftKey || e4.altKey || (e4.preventDefault(), e4.redraw = false, S3.set(r4, null, t4));
            }), o4;
          } }, S3.param = function(e3) {
            return i3 && null != e3 ? i3[e3] : i3;
          }, S3;
        }("undefined" != typeof window ? window : null, w2), x2.render = p2, x2.redraw = w2.redraw, x2.request = g2.request, x2.parseQueryString = E2, x2.buildQueryString = v2, x2.parsePathname = z2, x2.buildPathname = y2, x2.vnode = e2, x2.censor = A2, x2.domFor = b2.domFor, "undefined" != typeof module ? module.exports = x2 : window.m = x2;
      }();
    }
  });

  // src/lib/elliptic.min.js
  var require_elliptic_min = __commonJS({
    "src/lib/elliptic.min.js"(exports, module) {
      !function(e2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define([], e2) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).elliptic = e2();
      }(function() {
        return function r2(f2, d2, n2) {
          function a2(t2, e3) {
            if (!d2[t2]) {
              if (!f2[t2]) {
                var i2 = "function" == typeof __require && __require;
                if (!e3 && i2)
                  return i2(t2, true);
                if (s2)
                  return s2(t2, true);
                throw (i2 = new Error("Cannot find module '" + t2 + "'")).code = "MODULE_NOT_FOUND", i2;
              }
              i2 = d2[t2] = { exports: {} }, f2[t2][0].call(i2.exports, function(e4) {
                return a2(f2[t2][1][e4] || e4);
              }, i2, i2.exports, r2, f2, d2, n2);
            }
            return d2[t2].exports;
          }
          for (var s2 = "function" == typeof __require && __require, e2 = 0; e2 < n2.length; e2++)
            a2(n2[e2]);
          return a2;
        }({ 1: [function(e2, t2, i2) {
          "use strict";
          i2.version = e2("../package.json").version, i2.utils = e2("./elliptic/utils"), i2.rand = e2("brorand"), i2.curve = e2("./elliptic/curve"), i2.curves = e2("./elliptic/curves"), i2.ec = e2("./elliptic/ec"), i2.eddsa = e2("./elliptic/eddsa");
        }, { "../package.json": 35, "./elliptic/curve": 4, "./elliptic/curves": 7, "./elliptic/ec": 8, "./elliptic/eddsa": 11, "./elliptic/utils": 15, brorand: 17 }], 2: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("bn.js"), f2 = e2("../utils"), x2 = f2.getNAF, I2 = f2.getJSF, o2 = f2.assert;
          function d2(e3, t3) {
            this.type = e3, this.p = new r2(t3.p, 16), this.red = t3.prime ? r2.red(t3.prime) : r2.mont(this.p), this.zero = new r2(0).toRed(this.red), this.one = new r2(1).toRed(this.red), this.two = new r2(2).toRed(this.red), this.n = t3.n && new r2(t3.n, 16), this.g = t3.g && this.pointFromJSON(t3.g, t3.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
            t3 = this.n && this.p.div(this.n);
            !t3 || 0 < t3.cmpn(100) ? this.redN = null : (this._maxwellTrick = true, this.redN = this.n.toRed(this.red));
          }
          function n2(e3, t3) {
            this.curve = e3, this.type = t3, this.precomputed = null;
          }
          (t2.exports = d2).prototype.point = function() {
            throw new Error("Not implemented");
          }, d2.prototype.validate = function() {
            throw new Error("Not implemented");
          }, d2.prototype._fixedNafMul = function(e3, t3) {
            o2(e3.precomputed);
            var i3 = e3._getDoubles(), r3 = x2(t3, 1, this._bitLength), t3 = (1 << i3.step + 1) - (i3.step % 2 == 0 ? 2 : 1);
            t3 /= 3;
            for (var f3, d3 = [], n3 = 0; n3 < r3.length; n3 += i3.step) {
              f3 = 0;
              for (var a2 = n3 + i3.step - 1; n3 <= a2; a2--)
                f3 = (f3 << 1) + r3[a2];
              d3.push(f3);
            }
            for (var s2 = this.jpoint(null, null, null), c2 = this.jpoint(null, null, null), h2 = t3; 0 < h2; h2--) {
              for (n3 = 0; n3 < d3.length; n3++)
                (f3 = d3[n3]) === h2 ? c2 = c2.mixedAdd(i3.points[n3]) : f3 === -h2 && (c2 = c2.mixedAdd(i3.points[n3].neg()));
              s2 = s2.add(c2);
            }
            return s2.toP();
          }, d2.prototype._wnafMul = function(e3, t3) {
            for (var i3 = e3._getNAFPoints(4), r3 = i3.wnd, f3 = i3.points, d3 = x2(t3, r3, this._bitLength), n3 = this.jpoint(null, null, null), a2 = d3.length - 1; 0 <= a2; a2--) {
              for (var s2 = 0; 0 <= a2 && 0 === d3[a2]; a2--)
                s2++;
              if (0 <= a2 && s2++, n3 = n3.dblp(s2), a2 < 0)
                break;
              var c2 = d3[a2];
              o2(0 !== c2), n3 = "affine" === e3.type ? 0 < c2 ? n3.mixedAdd(f3[c2 - 1 >> 1]) : n3.mixedAdd(f3[-c2 - 1 >> 1].neg()) : 0 < c2 ? n3.add(f3[c2 - 1 >> 1]) : n3.add(f3[-c2 - 1 >> 1].neg());
            }
            return "affine" === e3.type ? n3.toP() : n3;
          }, d2.prototype._wnafMulAdd = function(e3, t3, i3, r3, f3) {
            for (var d3, n3 = this._wnafT1, a2 = this._wnafT2, s2 = this._wnafT3, c2 = 0, h2 = 0; h2 < r3; h2++) {
              var o3 = (d3 = t3[h2])._getNAFPoints(e3);
              n3[h2] = o3.wnd, a2[h2] = o3.points;
            }
            for (h2 = r3 - 1; 1 <= h2; h2 -= 2) {
              var u2 = h2 - 1, b2 = h2;
              if (1 === n3[u2] && 1 === n3[b2]) {
                var l2 = [t3[u2], null, null, t3[b2]];
                0 === t3[u2].y.cmp(t3[b2].y) ? (l2[1] = t3[u2].add(t3[b2]), l2[2] = t3[u2].toJ().mixedAdd(t3[b2].neg())) : 0 === t3[u2].y.cmp(t3[b2].y.redNeg()) ? (l2[1] = t3[u2].toJ().mixedAdd(t3[b2]), l2[2] = t3[u2].add(t3[b2].neg())) : (l2[1] = t3[u2].toJ().mixedAdd(t3[b2]), l2[2] = t3[u2].toJ().mixedAdd(t3[b2].neg()));
                var p2 = [-3, -1, -5, -7, 0, 7, 5, 1, 3], m7 = I2(i3[u2], i3[b2]), c2 = Math.max(m7[0].length, c2);
                for (s2[u2] = new Array(c2), s2[b2] = new Array(c2), _2 = 0; _2 < c2; _2++) {
                  var v2 = 0 | m7[0][_2], g2 = 0 | m7[1][_2];
                  s2[u2][_2] = p2[3 * (1 + v2) + (1 + g2)], s2[b2][_2] = 0, a2[u2] = l2;
                }
              } else
                s2[u2] = x2(i3[u2], n3[u2], this._bitLength), s2[b2] = x2(i3[b2], n3[b2], this._bitLength), c2 = Math.max(s2[u2].length, c2), c2 = Math.max(s2[b2].length, c2);
            }
            var y2 = this.jpoint(null, null, null), M2 = this._wnafT4;
            for (h2 = c2; 0 <= h2; h2--) {
              for (var w2 = 0; 0 <= h2; ) {
                for (var S2 = true, _2 = 0; _2 < r3; _2++)
                  M2[_2] = 0 | s2[_2][h2], 0 !== M2[_2] && (S2 = false);
                if (!S2)
                  break;
                w2++, h2--;
              }
              if (0 <= h2 && w2++, y2 = y2.dblp(w2), h2 < 0)
                break;
              for (_2 = 0; _2 < r3; _2++) {
                var A2 = M2[_2];
                0 !== A2 && (0 < A2 ? d3 = a2[_2][A2 - 1 >> 1] : A2 < 0 && (d3 = a2[_2][-A2 - 1 >> 1].neg()), y2 = "affine" === d3.type ? y2.mixedAdd(d3) : y2.add(d3));
              }
            }
            for (h2 = 0; h2 < r3; h2++)
              a2[h2] = null;
            return f3 ? y2 : y2.toP();
          }, (d2.BasePoint = n2).prototype.eq = function() {
            throw new Error("Not implemented");
          }, n2.prototype.validate = function() {
            return this.curve.validate(this);
          }, d2.prototype.decodePoint = function(e3, t3) {
            e3 = f2.toArray(e3, t3);
            t3 = this.p.byteLength();
            if ((4 === e3[0] || 6 === e3[0] || 7 === e3[0]) && e3.length - 1 == 2 * t3)
              return 6 === e3[0] ? o2(e3[e3.length - 1] % 2 == 0) : 7 === e3[0] && o2(e3[e3.length - 1] % 2 == 1), this.point(e3.slice(1, 1 + t3), e3.slice(1 + t3, 1 + 2 * t3));
            if ((2 === e3[0] || 3 === e3[0]) && e3.length - 1 === t3)
              return this.pointFromX(e3.slice(1, 1 + t3), 3 === e3[0]);
            throw new Error("Unknown point format");
          }, n2.prototype.encodeCompressed = function(e3) {
            return this.encode(e3, true);
          }, n2.prototype._encode = function(e3) {
            var t3 = this.curve.p.byteLength(), i3 = this.getX().toArray("be", t3);
            return e3 ? [this.getY().isEven() ? 2 : 3].concat(i3) : [4].concat(i3, this.getY().toArray("be", t3));
          }, n2.prototype.encode = function(e3, t3) {
            return f2.encode(this._encode(t3), e3);
          }, n2.prototype.precompute = function(e3) {
            if (this.precomputed)
              return this;
            var t3 = { doubles: null, naf: null, beta: null };
            return t3.naf = this._getNAFPoints(8), t3.doubles = this._getDoubles(4, e3), t3.beta = this._getBeta(), this.precomputed = t3, this;
          }, n2.prototype._hasDoubles = function(e3) {
            if (!this.precomputed)
              return false;
            var t3 = this.precomputed.doubles;
            return !!t3 && t3.points.length >= Math.ceil((e3.bitLength() + 1) / t3.step);
          }, n2.prototype._getDoubles = function(e3, t3) {
            if (this.precomputed && this.precomputed.doubles)
              return this.precomputed.doubles;
            for (var i3 = [this], r3 = this, f3 = 0; f3 < t3; f3 += e3) {
              for (var d3 = 0; d3 < e3; d3++)
                r3 = r3.dbl();
              i3.push(r3);
            }
            return { step: e3, points: i3 };
          }, n2.prototype._getNAFPoints = function(e3) {
            if (this.precomputed && this.precomputed.naf)
              return this.precomputed.naf;
            for (var t3 = [this], i3 = (1 << e3) - 1, r3 = 1 == i3 ? null : this.dbl(), f3 = 1; f3 < i3; f3++)
              t3[f3] = t3[f3 - 1].add(r3);
            return { wnd: e3, points: t3 };
          }, n2.prototype._getBeta = function() {
            return null;
          }, n2.prototype.dblp = function(e3) {
            for (var t3 = this, i3 = 0; i3 < e3; i3++)
              t3 = t3.dbl();
            return t3;
          };
        }, { "../utils": 15, "bn.js": 16 }], 3: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), d2 = e2("bn.js"), f2 = e2("inherits"), n2 = e2("./base"), a2 = r2.assert;
          function s2(e3) {
            this.twisted = 1 != (0 | e3.a), this.mOneA = this.twisted && -1 == (0 | e3.a), this.extended = this.mOneA, n2.call(this, "edwards", e3), this.a = new d2(e3.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new d2(e3.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new d2(e3.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), a2(!this.twisted || 0 === this.c.fromRed().cmpn(1)), this.oneC = 1 == (0 | e3.c);
          }
          function c2(e3, t3, i3, r3, f3) {
            n2.BasePoint.call(this, e3, "projective"), null === t3 && null === i3 && null === r3 ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = true) : (this.x = new d2(t3, 16), this.y = new d2(i3, 16), this.z = r3 ? new d2(r3, 16) : this.curve.one, this.t = f3 && new d2(f3, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))));
          }
          f2(s2, n2), (t2.exports = s2).prototype._mulA = function(e3) {
            return this.mOneA ? e3.redNeg() : this.a.redMul(e3);
          }, s2.prototype._mulC = function(e3) {
            return this.oneC ? e3 : this.c.redMul(e3);
          }, s2.prototype.jpoint = function(e3, t3, i3, r3) {
            return this.point(e3, t3, i3, r3);
          }, s2.prototype.pointFromX = function(e3, t3) {
            var i3 = (e3 = !(e3 = new d2(e3, 16)).red ? e3.toRed(this.red) : e3).redSqr(), r3 = this.c2.redSub(this.a.redMul(i3)), i3 = this.one.redSub(this.c2.redMul(this.d).redMul(i3)), r3 = r3.redMul(i3.redInvm()), i3 = r3.redSqrt();
            if (0 !== i3.redSqr().redSub(r3).cmp(this.zero))
              throw new Error("invalid point");
            r3 = i3.fromRed().isOdd();
            return (t3 && !r3 || !t3 && r3) && (i3 = i3.redNeg()), this.point(e3, i3);
          }, s2.prototype.pointFromY = function(e3, t3) {
            var i3 = (e3 = !(e3 = new d2(e3, 16)).red ? e3.toRed(this.red) : e3).redSqr(), r3 = i3.redSub(this.c2), i3 = i3.redMul(this.d).redMul(this.c2).redSub(this.a), r3 = r3.redMul(i3.redInvm());
            if (0 === r3.cmp(this.zero)) {
              if (t3)
                throw new Error("invalid point");
              return this.point(this.zero, e3);
            }
            i3 = r3.redSqrt();
            if (0 !== i3.redSqr().redSub(r3).cmp(this.zero))
              throw new Error("invalid point");
            return i3.fromRed().isOdd() !== t3 && (i3 = i3.redNeg()), this.point(i3, e3);
          }, s2.prototype.validate = function(e3) {
            if (e3.isInfinity())
              return true;
            e3.normalize();
            var t3 = e3.x.redSqr(), i3 = e3.y.redSqr(), e3 = t3.redMul(this.a).redAdd(i3), i3 = this.c2.redMul(this.one.redAdd(this.d.redMul(t3).redMul(i3)));
            return 0 === e3.cmp(i3);
          }, f2(c2, n2.BasePoint), s2.prototype.pointFromJSON = function(e3) {
            return c2.fromJSON(this, e3);
          }, s2.prototype.point = function(e3, t3, i3, r3) {
            return new c2(this, e3, t3, i3, r3);
          }, c2.fromJSON = function(e3, t3) {
            return new c2(e3, t3[0], t3[1], t3[2]);
          }, c2.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
          }, c2.prototype.isInfinity = function() {
            return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || this.zOne && 0 === this.y.cmp(this.curve.c));
          }, c2.prototype._extDbl = function() {
            var e3 = this.x.redSqr(), t3 = this.y.redSqr(), i3 = (i3 = this.z.redSqr()).redIAdd(i3), r3 = this.curve._mulA(e3), f3 = this.x.redAdd(this.y).redSqr().redISub(e3).redISub(t3), d3 = r3.redAdd(t3), e3 = d3.redSub(i3), i3 = r3.redSub(t3), r3 = f3.redMul(e3), t3 = d3.redMul(i3), i3 = f3.redMul(i3), d3 = e3.redMul(d3);
            return this.curve.point(r3, t3, d3, i3);
          }, c2.prototype._projDbl = function() {
            var e3, t3, i3, r3, f3, d3, n3 = this.x.redAdd(this.y).redSqr(), a3 = this.x.redSqr(), s3 = this.y.redSqr();
            return d3 = this.curve.twisted ? (f3 = (i3 = this.curve._mulA(a3)).redAdd(s3), this.zOne ? (e3 = n3.redSub(a3).redSub(s3).redMul(f3.redSub(this.curve.two)), t3 = f3.redMul(i3.redSub(s3)), f3.redSqr().redSub(f3).redSub(f3)) : (r3 = this.z.redSqr(), d3 = f3.redSub(r3).redISub(r3), e3 = n3.redSub(a3).redISub(s3).redMul(d3), t3 = f3.redMul(i3.redSub(s3)), f3.redMul(d3))) : (i3 = a3.redAdd(s3), r3 = this.curve._mulC(this.z).redSqr(), d3 = i3.redSub(r3).redSub(r3), e3 = this.curve._mulC(n3.redISub(i3)).redMul(d3), t3 = this.curve._mulC(i3).redMul(a3.redISub(s3)), i3.redMul(d3)), this.curve.point(e3, t3, d3);
          }, c2.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
          }, c2.prototype._extAdd = function(e3) {
            var t3 = this.y.redSub(this.x).redMul(e3.y.redSub(e3.x)), i3 = this.y.redAdd(this.x).redMul(e3.y.redAdd(e3.x)), r3 = this.t.redMul(this.curve.dd).redMul(e3.t), f3 = this.z.redMul(e3.z.redAdd(e3.z)), d3 = i3.redSub(t3), e3 = f3.redSub(r3), f3 = f3.redAdd(r3), r3 = i3.redAdd(t3), i3 = d3.redMul(e3), t3 = f3.redMul(r3), r3 = d3.redMul(r3), f3 = e3.redMul(f3);
            return this.curve.point(i3, t3, f3, r3);
          }, c2.prototype._projAdd = function(e3) {
            var t3, i3 = this.z.redMul(e3.z), r3 = i3.redSqr(), f3 = this.x.redMul(e3.x), d3 = this.y.redMul(e3.y), n3 = this.curve.d.redMul(f3).redMul(d3), a3 = r3.redSub(n3), n3 = r3.redAdd(n3), e3 = this.x.redAdd(this.y).redMul(e3.x.redAdd(e3.y)).redISub(f3).redISub(d3), e3 = i3.redMul(a3).redMul(e3), n3 = this.curve.twisted ? (t3 = i3.redMul(n3).redMul(d3.redSub(this.curve._mulA(f3))), a3.redMul(n3)) : (t3 = i3.redMul(n3).redMul(d3.redSub(f3)), this.curve._mulC(a3).redMul(n3));
            return this.curve.point(e3, t3, n3);
          }, c2.prototype.add = function(e3) {
            return this.isInfinity() ? e3 : e3.isInfinity() ? this : this.curve.extended ? this._extAdd(e3) : this._projAdd(e3);
          }, c2.prototype.mul = function(e3) {
            return this._hasDoubles(e3) ? this.curve._fixedNafMul(this, e3) : this.curve._wnafMul(this, e3);
          }, c2.prototype.mulAdd = function(e3, t3, i3) {
            return this.curve._wnafMulAdd(1, [this, t3], [e3, i3], 2, false);
          }, c2.prototype.jmulAdd = function(e3, t3, i3) {
            return this.curve._wnafMulAdd(1, [this, t3], [e3, i3], 2, true);
          }, c2.prototype.normalize = function() {
            if (this.zOne)
              return this;
            var e3 = this.z.redInvm();
            return this.x = this.x.redMul(e3), this.y = this.y.redMul(e3), this.t && (this.t = this.t.redMul(e3)), this.z = this.curve.one, this.zOne = true, this;
          }, c2.prototype.neg = function() {
            return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
          }, c2.prototype.getX = function() {
            return this.normalize(), this.x.fromRed();
          }, c2.prototype.getY = function() {
            return this.normalize(), this.y.fromRed();
          }, c2.prototype.eq = function(e3) {
            return this === e3 || 0 === this.getX().cmp(e3.getX()) && 0 === this.getY().cmp(e3.getY());
          }, c2.prototype.eqXToP = function(e3) {
            var t3 = e3.toRed(this.curve.red).redMul(this.z);
            if (0 === this.x.cmp(t3))
              return true;
            for (var i3 = e3.clone(), r3 = this.curve.redN.redMul(this.z); ; ) {
              if (i3.iadd(this.curve.n), 0 <= i3.cmp(this.curve.p))
                return false;
              if (t3.redIAdd(r3), 0 === this.x.cmp(t3))
                return true;
            }
          }, c2.prototype.toP = c2.prototype.normalize, c2.prototype.mixedAdd = c2.prototype.add;
        }, { "../utils": 15, "./base": 2, "bn.js": 16, inherits: 32 }], 4: [function(e2, t2, i2) {
          "use strict";
          i2.base = e2("./base"), i2.short = e2("./short"), i2.mont = e2("./mont"), i2.edwards = e2("./edwards");
        }, { "./base": 2, "./edwards": 3, "./mont": 5, "./short": 6 }], 5: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("bn.js"), f2 = e2("inherits"), d2 = e2("./base"), n2 = e2("../utils");
          function a2(e3) {
            d2.call(this, "mont", e3), this.a = new r2(e3.a, 16).toRed(this.red), this.b = new r2(e3.b, 16).toRed(this.red), this.i4 = new r2(4).toRed(this.red).redInvm(), this.two = new r2(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two));
          }
          function s2(e3, t3, i3) {
            d2.BasePoint.call(this, e3, "projective"), null === t3 && null === i3 ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new r2(t3, 16), this.z = new r2(i3, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)));
          }
          f2(a2, d2), (t2.exports = a2).prototype.validate = function(e3) {
            var t3 = e3.normalize().x, e3 = t3.redSqr(), t3 = e3.redMul(t3).redAdd(e3.redMul(this.a)).redAdd(t3);
            return 0 === t3.redSqrt().redSqr().cmp(t3);
          }, f2(s2, d2.BasePoint), a2.prototype.decodePoint = function(e3, t3) {
            return this.point(n2.toArray(e3, t3), 1);
          }, a2.prototype.point = function(e3, t3) {
            return new s2(this, e3, t3);
          }, a2.prototype.pointFromJSON = function(e3) {
            return s2.fromJSON(this, e3);
          }, s2.prototype.precompute = function() {
          }, s2.prototype._encode = function() {
            return this.getX().toArray("be", this.curve.p.byteLength());
          }, s2.fromJSON = function(e3, t3) {
            return new s2(e3, t3[0], t3[1] || e3.one);
          }, s2.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">";
          }, s2.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0);
          }, s2.prototype.dbl = function() {
            var e3 = this.x.redAdd(this.z).redSqr(), t3 = this.x.redSub(this.z).redSqr(), i3 = e3.redSub(t3), e3 = e3.redMul(t3), i3 = i3.redMul(t3.redAdd(this.curve.a24.redMul(i3)));
            return this.curve.point(e3, i3);
          }, s2.prototype.add = function() {
            throw new Error("Not supported on Montgomery curve");
          }, s2.prototype.diffAdd = function(e3, t3) {
            var i3 = this.x.redAdd(this.z), r3 = this.x.redSub(this.z), f3 = e3.x.redAdd(e3.z), i3 = e3.x.redSub(e3.z).redMul(i3), f3 = f3.redMul(r3), r3 = t3.z.redMul(i3.redAdd(f3).redSqr()), f3 = t3.x.redMul(i3.redISub(f3).redSqr());
            return this.curve.point(r3, f3);
          }, s2.prototype.mul = function(e3) {
            for (var t3 = e3.clone(), i3 = this, r3 = this.curve.point(null, null), f3 = []; 0 !== t3.cmpn(0); t3.iushrn(1))
              f3.push(t3.andln(1));
            for (var d3 = f3.length - 1; 0 <= d3; d3--)
              0 === f3[d3] ? (i3 = i3.diffAdd(r3, this), r3 = r3.dbl()) : (r3 = i3.diffAdd(r3, this), i3 = i3.dbl());
            return r3;
          }, s2.prototype.mulAdd = function() {
            throw new Error("Not supported on Montgomery curve");
          }, s2.prototype.jumlAdd = function() {
            throw new Error("Not supported on Montgomery curve");
          }, s2.prototype.eq = function(e3) {
            return 0 === this.getX().cmp(e3.getX());
          }, s2.prototype.normalize = function() {
            return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this;
          }, s2.prototype.getX = function() {
            return this.normalize(), this.x.fromRed();
          };
        }, { "../utils": 15, "./base": 2, "bn.js": 16, inherits: 32 }], 6: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), y2 = e2("bn.js"), f2 = e2("inherits"), d2 = e2("./base"), n2 = r2.assert;
          function a2(e3) {
            d2.call(this, "short", e3), this.a = new y2(e3.a, 16).toRed(this.red), this.b = new y2(e3.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e3), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
          }
          function s2(e3, t3, i3, r3) {
            d2.BasePoint.call(this, e3, "affine"), null === t3 && null === i3 ? (this.x = null, this.y = null, this.inf = true) : (this.x = new y2(t3, 16), this.y = new y2(i3, 16), r3 && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = false);
          }
          function c2(e3, t3, i3, r3) {
            d2.BasePoint.call(this, e3, "jacobian"), null === t3 && null === i3 && null === r3 ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new y2(0)) : (this.x = new y2(t3, 16), this.y = new y2(i3, 16), this.z = new y2(r3, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
          }
          f2(a2, d2), (t2.exports = a2).prototype._getEndomorphism = function(e3) {
            var t3, i3, r3;
            if (this.zeroA && this.g && this.n && 1 === this.p.modn(3))
              return i3 = (e3.beta ? new y2(e3.beta, 16) : i3 = (r3 = this._getEndoRoots(this.p))[0].cmp(r3[1]) < 0 ? r3[0] : r3[1]).toRed(this.red), e3.lambda ? t3 = new y2(e3.lambda, 16) : (r3 = this._getEndoRoots(this.n), 0 === this.g.mul(r3[0]).x.cmp(this.g.x.redMul(i3)) ? t3 = r3[0] : (t3 = r3[1], n2(0 === this.g.mul(t3).x.cmp(this.g.x.redMul(i3))))), { beta: i3, lambda: t3, basis: e3.basis ? e3.basis.map(function(e4) {
                return { a: new y2(e4.a, 16), b: new y2(e4.b, 16) };
              }) : this._getEndoBasis(t3) };
          }, a2.prototype._getEndoRoots = function(e3) {
            var t3 = e3 === this.p ? this.red : y2.mont(e3), i3 = new y2(2).toRed(t3).redInvm(), e3 = i3.redNeg(), i3 = new y2(3).toRed(t3).redNeg().redSqrt().redMul(i3);
            return [e3.redAdd(i3).fromRed(), e3.redSub(i3).fromRed()];
          }, a2.prototype._getEndoBasis = function(e3) {
            for (var t3, i3, r3, f3, d3, n3, a3, s3 = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), c3 = e3, h2 = this.n.clone(), o2 = new y2(1), u2 = new y2(0), b2 = new y2(0), l2 = new y2(1), p2 = 0; 0 !== c3.cmpn(0); ) {
              var m7 = h2.div(c3), v2 = h2.sub(m7.mul(c3)), g2 = b2.sub(m7.mul(o2)), m7 = l2.sub(m7.mul(u2));
              if (!r3 && v2.cmp(s3) < 0)
                t3 = a3.neg(), i3 = o2, r3 = v2.neg(), f3 = g2;
              else if (r3 && 2 == ++p2)
                break;
              h2 = c3, c3 = a3 = v2, b2 = o2, o2 = g2, l2 = u2, u2 = m7;
            }
            d3 = v2.neg(), n3 = g2;
            e3 = r3.sqr().add(f3.sqr());
            return 0 <= d3.sqr().add(n3.sqr()).cmp(e3) && (d3 = t3, n3 = i3), r3.negative && (r3 = r3.neg(), f3 = f3.neg()), d3.negative && (d3 = d3.neg(), n3 = n3.neg()), [{ a: r3, b: f3 }, { a: d3, b: n3 }];
          }, a2.prototype._endoSplit = function(e3) {
            var t3 = this.endo.basis, i3 = t3[0], r3 = t3[1], f3 = r3.b.mul(e3).divRound(this.n), d3 = i3.b.neg().mul(e3).divRound(this.n), n3 = f3.mul(i3.a), t3 = d3.mul(r3.a), i3 = f3.mul(i3.b), r3 = d3.mul(r3.b);
            return { k1: e3.sub(n3).sub(t3), k2: i3.add(r3).neg() };
          }, a2.prototype.pointFromX = function(e3, t3) {
            var i3 = (e3 = !(e3 = new y2(e3, 16)).red ? e3.toRed(this.red) : e3).redSqr().redMul(e3).redIAdd(e3.redMul(this.a)).redIAdd(this.b), r3 = i3.redSqrt();
            if (0 !== r3.redSqr().redSub(i3).cmp(this.zero))
              throw new Error("invalid point");
            i3 = r3.fromRed().isOdd();
            return (t3 && !i3 || !t3 && i3) && (r3 = r3.redNeg()), this.point(e3, r3);
          }, a2.prototype.validate = function(e3) {
            if (e3.inf)
              return true;
            var t3 = e3.x, i3 = e3.y, e3 = this.a.redMul(t3), e3 = t3.redSqr().redMul(t3).redIAdd(e3).redIAdd(this.b);
            return 0 === i3.redSqr().redISub(e3).cmpn(0);
          }, a2.prototype._endoWnafMulAdd = function(e3, t3, i3) {
            for (var r3 = this._endoWnafT1, f3 = this._endoWnafT2, d3 = 0; d3 < e3.length; d3++) {
              var n3 = this._endoSplit(t3[d3]), a3 = e3[d3], s3 = a3._getBeta();
              n3.k1.negative && (n3.k1.ineg(), a3 = a3.neg(true)), n3.k2.negative && (n3.k2.ineg(), s3 = s3.neg(true)), r3[2 * d3] = a3, r3[2 * d3 + 1] = s3, f3[2 * d3] = n3.k1, f3[2 * d3 + 1] = n3.k2;
            }
            for (var i3 = this._wnafMulAdd(1, r3, f3, 2 * d3, i3), c3 = 0; c3 < 2 * d3; c3++)
              r3[c3] = null, f3[c3] = null;
            return i3;
          }, f2(s2, d2.BasePoint), a2.prototype.point = function(e3, t3, i3) {
            return new s2(this, e3, t3, i3);
          }, a2.prototype.pointFromJSON = function(e3, t3) {
            return s2.fromJSON(this, e3, t3);
          }, s2.prototype._getBeta = function() {
            if (this.curve.endo) {
              var e3 = this.precomputed;
              if (e3 && e3.beta)
                return e3.beta;
              var t3, i3, r3 = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
              return e3 && (t3 = this.curve, i3 = function(e4) {
                return t3.point(e4.x.redMul(t3.endo.beta), e4.y);
              }, (e3.beta = r3).precomputed = { beta: null, naf: e3.naf && { wnd: e3.naf.wnd, points: e3.naf.points.map(i3) }, doubles: e3.doubles && { step: e3.doubles.step, points: e3.doubles.points.map(i3) } }), r3;
            }
          }, s2.prototype.toJSON = function() {
            return this.precomputed ? [this.x, this.y, this.precomputed && { doubles: this.precomputed.doubles && { step: this.precomputed.doubles.step, points: this.precomputed.doubles.points.slice(1) }, naf: this.precomputed.naf && { wnd: this.precomputed.naf.wnd, points: this.precomputed.naf.points.slice(1) } }] : [this.x, this.y];
          }, s2.fromJSON = function(t3, e3, i3) {
            "string" == typeof e3 && (e3 = JSON.parse(e3));
            var r3 = t3.point(e3[0], e3[1], i3);
            if (!e3[2])
              return r3;
            function f3(e4) {
              return t3.point(e4[0], e4[1], i3);
            }
            e3 = e3[2];
            return r3.precomputed = { beta: null, doubles: e3.doubles && { step: e3.doubles.step, points: [r3].concat(e3.doubles.points.map(f3)) }, naf: e3.naf && { wnd: e3.naf.wnd, points: [r3].concat(e3.naf.points.map(f3)) } }, r3;
          }, s2.prototype.inspect = function() {
            return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
          }, s2.prototype.isInfinity = function() {
            return this.inf;
          }, s2.prototype.add = function(e3) {
            if (this.inf)
              return e3;
            if (e3.inf)
              return this;
            if (this.eq(e3))
              return this.dbl();
            if (this.neg().eq(e3))
              return this.curve.point(null, null);
            if (0 === this.x.cmp(e3.x))
              return this.curve.point(null, null);
            var t3 = this.y.redSub(e3.y), e3 = (t3 = 0 !== t3.cmpn(0) ? t3.redMul(this.x.redSub(e3.x).redInvm()) : t3).redSqr().redISub(this.x).redISub(e3.x), t3 = t3.redMul(this.x.redSub(e3)).redISub(this.y);
            return this.curve.point(e3, t3);
          }, s2.prototype.dbl = function() {
            if (this.inf)
              return this;
            var e3 = this.y.redAdd(this.y);
            if (0 === e3.cmpn(0))
              return this.curve.point(null, null);
            var t3 = this.curve.a, i3 = this.x.redSqr(), e3 = e3.redInvm(), t3 = i3.redAdd(i3).redIAdd(i3).redIAdd(t3).redMul(e3), e3 = t3.redSqr().redISub(this.x.redAdd(this.x)), t3 = t3.redMul(this.x.redSub(e3)).redISub(this.y);
            return this.curve.point(e3, t3);
          }, s2.prototype.getX = function() {
            return this.x.fromRed();
          }, s2.prototype.getY = function() {
            return this.y.fromRed();
          }, s2.prototype.mul = function(e3) {
            return e3 = new y2(e3, 16), this.isInfinity() ? this : this._hasDoubles(e3) ? this.curve._fixedNafMul(this, e3) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [e3]) : this.curve._wnafMul(this, e3);
          }, s2.prototype.mulAdd = function(e3, t3, i3) {
            t3 = [this, t3], i3 = [e3, i3];
            return this.curve.endo ? this.curve._endoWnafMulAdd(t3, i3) : this.curve._wnafMulAdd(1, t3, i3, 2);
          }, s2.prototype.jmulAdd = function(e3, t3, i3) {
            t3 = [this, t3], i3 = [e3, i3];
            return this.curve.endo ? this.curve._endoWnafMulAdd(t3, i3, true) : this.curve._wnafMulAdd(1, t3, i3, 2, true);
          }, s2.prototype.eq = function(e3) {
            return this === e3 || this.inf === e3.inf && (this.inf || 0 === this.x.cmp(e3.x) && 0 === this.y.cmp(e3.y));
          }, s2.prototype.neg = function(e3) {
            if (this.inf)
              return this;
            var t3, i3 = this.curve.point(this.x, this.y.redNeg());
            return e3 && this.precomputed && (t3 = this.precomputed, e3 = function(e4) {
              return e4.neg();
            }, i3.precomputed = { naf: t3.naf && { wnd: t3.naf.wnd, points: t3.naf.points.map(e3) }, doubles: t3.doubles && { step: t3.doubles.step, points: t3.doubles.points.map(e3) } }), i3;
          }, s2.prototype.toJ = function() {
            return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
          }, f2(c2, d2.BasePoint), a2.prototype.jpoint = function(e3, t3, i3) {
            return new c2(this, e3, t3, i3);
          }, c2.prototype.toP = function() {
            if (this.isInfinity())
              return this.curve.point(null, null);
            var e3 = this.z.redInvm(), t3 = e3.redSqr(), i3 = this.x.redMul(t3), e3 = this.y.redMul(t3).redMul(e3);
            return this.curve.point(i3, e3);
          }, c2.prototype.neg = function() {
            return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
          }, c2.prototype.add = function(e3) {
            if (this.isInfinity())
              return e3;
            if (e3.isInfinity())
              return this;
            var t3 = e3.z.redSqr(), i3 = this.z.redSqr(), r3 = this.x.redMul(t3), f3 = e3.x.redMul(i3), d3 = this.y.redMul(t3.redMul(e3.z)), n3 = e3.y.redMul(i3.redMul(this.z)), t3 = r3.redSub(f3), i3 = d3.redSub(n3);
            if (0 === t3.cmpn(0))
              return 0 !== i3.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            f3 = t3.redSqr(), n3 = f3.redMul(t3), r3 = r3.redMul(f3), f3 = i3.redSqr().redIAdd(n3).redISub(r3).redISub(r3), n3 = i3.redMul(r3.redISub(f3)).redISub(d3.redMul(n3)), t3 = this.z.redMul(e3.z).redMul(t3);
            return this.curve.jpoint(f3, n3, t3);
          }, c2.prototype.mixedAdd = function(e3) {
            if (this.isInfinity())
              return e3.toJ();
            if (e3.isInfinity())
              return this;
            var t3 = this.z.redSqr(), i3 = this.x, r3 = e3.x.redMul(t3), f3 = this.y, d3 = e3.y.redMul(t3).redMul(this.z), e3 = i3.redSub(r3), t3 = f3.redSub(d3);
            if (0 === e3.cmpn(0))
              return 0 !== t3.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
            r3 = e3.redSqr(), d3 = r3.redMul(e3), i3 = i3.redMul(r3), r3 = t3.redSqr().redIAdd(d3).redISub(i3).redISub(i3), d3 = t3.redMul(i3.redISub(r3)).redISub(f3.redMul(d3)), e3 = this.z.redMul(e3);
            return this.curve.jpoint(r3, d3, e3);
          }, c2.prototype.dblp = function(e3) {
            if (0 === e3)
              return this;
            if (this.isInfinity())
              return this;
            if (!e3)
              return this.dbl();
            if (this.curve.zeroA || this.curve.threeA) {
              for (var t3 = this, i3 = 0; i3 < e3; i3++)
                t3 = t3.dbl();
              return t3;
            }
            var r3 = this.curve.a, f3 = this.curve.tinv, d3 = this.x, n3 = this.y, a3 = this.z, s3 = a3.redSqr().redSqr(), c3 = n3.redAdd(n3);
            for (i3 = 0; i3 < e3; i3++) {
              var h2 = d3.redSqr(), o2 = c3.redSqr(), u2 = o2.redSqr(), b2 = h2.redAdd(h2).redIAdd(h2).redIAdd(r3.redMul(s3)), h2 = d3.redMul(o2), o2 = b2.redSqr().redISub(h2.redAdd(h2)), h2 = h2.redISub(o2), b2 = (b2 = b2.redMul(h2)).redIAdd(b2).redISub(u2), h2 = c3.redMul(a3);
              i3 + 1 < e3 && (s3 = s3.redMul(u2)), d3 = o2, a3 = h2, c3 = b2;
            }
            return this.curve.jpoint(d3, c3.redMul(f3), a3);
          }, c2.prototype.dbl = function() {
            return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
          }, c2.prototype._zeroDbl = function() {
            var e3, t3, i3, r3, f3, d3 = this.zOne ? (i3 = this.x.redSqr(), e3 = (r3 = this.y.redSqr()).redSqr(), f3 = (f3 = this.x.redAdd(r3).redSqr().redISub(i3).redISub(e3)).redIAdd(f3), r3 = (t3 = i3.redAdd(i3).redIAdd(i3)).redSqr().redISub(f3).redISub(f3), i3 = (i3 = (i3 = e3.redIAdd(e3)).redIAdd(i3)).redIAdd(i3), e3 = r3, t3 = t3.redMul(f3.redISub(r3)).redISub(i3), this.y.redAdd(this.y)) : (f3 = this.x.redSqr(), d3 = (r3 = this.y.redSqr()).redSqr(), i3 = (i3 = this.x.redAdd(r3).redSqr().redISub(f3).redISub(d3)).redIAdd(i3), f3 = (r3 = f3.redAdd(f3).redIAdd(f3)).redSqr(), d3 = (d3 = (d3 = d3.redIAdd(d3)).redIAdd(d3)).redIAdd(d3), e3 = f3.redISub(i3).redISub(i3), t3 = r3.redMul(i3.redISub(e3)).redISub(d3), (d3 = this.y.redMul(this.z)).redIAdd(d3));
            return this.curve.jpoint(e3, t3, d3);
          }, c2.prototype._threeDbl = function() {
            var e3, t3, i3, r3, f3, d3, n3, a3;
            return this.zOne ? (e3 = this.x.redSqr(), r3 = (t3 = this.y.redSqr()).redSqr(), n3 = (n3 = this.x.redAdd(t3).redSqr().redISub(e3).redISub(r3)).redIAdd(n3), i3 = f3 = (a3 = e3.redAdd(e3).redIAdd(e3).redIAdd(this.curve.a)).redSqr().redISub(n3).redISub(n3), d3 = (d3 = (d3 = r3.redIAdd(r3)).redIAdd(d3)).redIAdd(d3), t3 = a3.redMul(n3.redISub(f3)).redISub(d3), e3 = this.y.redAdd(this.y)) : (r3 = this.z.redSqr(), a3 = this.y.redSqr(), n3 = this.x.redMul(a3), f3 = (f3 = this.x.redSub(r3).redMul(this.x.redAdd(r3))).redAdd(f3).redIAdd(f3), n3 = (d3 = (d3 = n3.redIAdd(n3)).redIAdd(d3)).redAdd(d3), i3 = f3.redSqr().redISub(n3), e3 = this.y.redAdd(this.z).redSqr().redISub(a3).redISub(r3), a3 = (a3 = (a3 = (a3 = a3.redSqr()).redIAdd(a3)).redIAdd(a3)).redIAdd(a3), t3 = f3.redMul(d3.redISub(i3)).redISub(a3)), this.curve.jpoint(i3, t3, e3);
          }, c2.prototype._dbl = function() {
            var e3 = this.curve.a, t3 = this.x, i3 = this.y, r3 = this.z, f3 = r3.redSqr().redSqr(), d3 = t3.redSqr(), n3 = i3.redSqr(), e3 = d3.redAdd(d3).redIAdd(d3).redIAdd(e3.redMul(f3)), f3 = t3.redAdd(t3), t3 = (f3 = f3.redIAdd(f3)).redMul(n3), f3 = e3.redSqr().redISub(t3.redAdd(t3)), t3 = t3.redISub(f3), n3 = n3.redSqr();
            n3 = (n3 = (n3 = n3.redIAdd(n3)).redIAdd(n3)).redIAdd(n3);
            n3 = e3.redMul(t3).redISub(n3), r3 = i3.redAdd(i3).redMul(r3);
            return this.curve.jpoint(f3, n3, r3);
          }, c2.prototype.trpl = function() {
            if (!this.curve.zeroA)
              return this.dbl().add(this);
            var e3 = this.x.redSqr(), t3 = this.y.redSqr(), i3 = this.z.redSqr(), r3 = t3.redSqr(), f3 = e3.redAdd(e3).redIAdd(e3), d3 = f3.redSqr(), n3 = this.x.redAdd(t3).redSqr().redISub(e3).redISub(r3), e3 = (n3 = (n3 = (n3 = n3.redIAdd(n3)).redAdd(n3).redIAdd(n3)).redISub(d3)).redSqr(), r3 = r3.redIAdd(r3);
            r3 = (r3 = (r3 = r3.redIAdd(r3)).redIAdd(r3)).redIAdd(r3);
            d3 = f3.redIAdd(n3).redSqr().redISub(d3).redISub(e3).redISub(r3), t3 = t3.redMul(d3);
            t3 = (t3 = t3.redIAdd(t3)).redIAdd(t3);
            t3 = this.x.redMul(e3).redISub(t3);
            t3 = (t3 = t3.redIAdd(t3)).redIAdd(t3);
            d3 = this.y.redMul(d3.redMul(r3.redISub(d3)).redISub(n3.redMul(e3)));
            d3 = (d3 = (d3 = d3.redIAdd(d3)).redIAdd(d3)).redIAdd(d3);
            e3 = this.z.redAdd(n3).redSqr().redISub(i3).redISub(e3);
            return this.curve.jpoint(t3, d3, e3);
          }, c2.prototype.mul = function(e3, t3) {
            return e3 = new y2(e3, t3), this.curve._wnafMul(this, e3);
          }, c2.prototype.eq = function(e3) {
            if ("affine" === e3.type)
              return this.eq(e3.toJ());
            if (this === e3)
              return true;
            var t3 = this.z.redSqr(), i3 = e3.z.redSqr();
            if (0 !== this.x.redMul(i3).redISub(e3.x.redMul(t3)).cmpn(0))
              return false;
            t3 = t3.redMul(this.z), i3 = i3.redMul(e3.z);
            return 0 === this.y.redMul(i3).redISub(e3.y.redMul(t3)).cmpn(0);
          }, c2.prototype.eqXToP = function(e3) {
            var t3 = this.z.redSqr(), i3 = e3.toRed(this.curve.red).redMul(t3);
            if (0 === this.x.cmp(i3))
              return true;
            for (var r3 = e3.clone(), f3 = this.curve.redN.redMul(t3); ; ) {
              if (r3.iadd(this.curve.n), 0 <= r3.cmp(this.curve.p))
                return false;
              if (i3.redIAdd(f3), 0 === this.x.cmp(i3))
                return true;
            }
          }, c2.prototype.inspect = function() {
            return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
          }, c2.prototype.isInfinity = function() {
            return 0 === this.z.cmpn(0);
          };
        }, { "../utils": 15, "./base": 2, "bn.js": 16, inherits: 32 }], 7: [function(e2, t2, i2) {
          "use strict";
          var r2, f2 = i2, i2 = e2("hash.js"), d2 = e2("./curve"), n2 = e2("./utils").assert;
          function a2(e3) {
            "short" === e3.type ? this.curve = new d2.short(e3) : "edwards" === e3.type ? this.curve = new d2.edwards(e3) : this.curve = new d2.mont(e3), this.g = this.curve.g, this.n = this.curve.n, this.hash = e3.hash, n2(this.g.validate(), "Invalid curve"), n2(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
          }
          function s2(t3, i3) {
            Object.defineProperty(f2, t3, { configurable: true, enumerable: true, get: function() {
              var e3 = new a2(i3);
              return Object.defineProperty(f2, t3, { configurable: true, enumerable: true, value: e3 }), e3;
            } });
          }
          f2.PresetCurve = a2, s2("p192", { type: "short", prime: "p192", p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff", a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc", b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1", n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831", hash: i2.sha256, gRed: false, g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"] }), s2("p224", { type: "short", prime: "p224", p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001", a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe", b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4", n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d", hash: i2.sha256, gRed: false, g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"] }), s2("p256", { type: "short", prime: null, p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff", a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc", b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b", n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551", hash: i2.sha256, gRed: false, g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"] }), s2("p384", { type: "short", prime: null, p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff", a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc", b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef", n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973", hash: i2.sha384, gRed: false, g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"] }), s2("p521", { type: "short", prime: null, p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff", a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc", b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00", n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409", hash: i2.sha512, gRed: false, g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"] }), s2("curve25519", { type: "mont", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "76d06", b: "1", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: i2.sha256, gRed: false, g: ["9"] }), s2("ed25519", { type: "edwards", prime: "p25519", p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed", a: "-1", c: "1", d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3", n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed", hash: i2.sha256, gRed: false, g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"] });
          try {
            r2 = e2("./precomputed/secp256k1");
          } catch (e3) {
            r2 = void 0;
          }
          s2("secp256k1", { type: "short", prime: "k256", p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f", a: "0", b: "7", n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141", h: "1", hash: i2.sha256, beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee", lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72", basis: [{ a: "3086d221a7d46bcde86c90e49284eb15", b: "-e4437ed6010e88286f547fa90abfe4c3" }, { a: "114ca50f7a8e2f3f657c1108d9d44cfd8", b: "3086d221a7d46bcde86c90e49284eb15" }], gRed: false, g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", r2] });
        }, { "./curve": 4, "./precomputed/secp256k1": 14, "./utils": 15, "hash.js": 19 }], 8: [function(e2, t2, i2) {
          "use strict";
          var u2 = e2("bn.js"), b2 = e2("hmac-drbg"), r2 = e2("../utils"), f2 = e2("../curves"), d2 = e2("brorand"), a2 = r2.assert, n2 = e2("./key"), l2 = e2("./signature");
          function s2(e3) {
            if (!(this instanceof s2))
              return new s2(e3);
            "string" == typeof e3 && (a2(Object.prototype.hasOwnProperty.call(f2, e3), "Unknown curve " + e3), e3 = f2[e3]), e3 instanceof f2.PresetCurve && (e3 = { curve: e3 }), this.curve = e3.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e3.curve.g, this.g.precompute(e3.curve.n.bitLength() + 1), this.hash = e3.hash || e3.curve.hash;
          }
          (t2.exports = s2).prototype.keyPair = function(e3) {
            return new n2(this, e3);
          }, s2.prototype.keyFromPrivate = function(e3, t3) {
            return n2.fromPrivate(this, e3, t3);
          }, s2.prototype.keyFromPublic = function(e3, t3) {
            return n2.fromPublic(this, e3, t3);
          }, s2.prototype.genKeyPair = function(e3) {
            e3 = e3 || {};
            for (var t3 = new b2({ hash: this.hash, pers: e3.pers, persEnc: e3.persEnc || "utf8", entropy: e3.entropy || d2(this.hash.hmacStrength), entropyEnc: e3.entropy && e3.entropyEnc || "utf8", nonce: this.n.toArray() }), i3 = this.n.byteLength(), r3 = this.n.sub(new u2(2)); ; ) {
              var f3 = new u2(t3.generate(i3));
              if (!(0 < f3.cmp(r3)))
                return f3.iaddn(1), this.keyFromPrivate(f3);
            }
          }, s2.prototype._truncateToN = function(e3, t3) {
            var i3 = 8 * e3.byteLength() - this.n.bitLength();
            return 0 < i3 && (e3 = e3.ushrn(i3)), !t3 && 0 <= e3.cmp(this.n) ? e3.sub(this.n) : e3;
          }, s2.prototype.sign = function(e3, t3, i3, r3) {
            "object" == typeof i3 && (r3 = i3, i3 = null), r3 = r3 || {}, t3 = this.keyFromPrivate(t3, i3), e3 = this._truncateToN(new u2(e3, 16));
            for (var f3 = this.n.byteLength(), i3 = t3.getPrivate().toArray("be", f3), f3 = e3.toArray("be", f3), d3 = new b2({ hash: this.hash, entropy: i3, nonce: f3, pers: r3.pers, persEnc: r3.persEnc || "utf8" }), n3 = this.n.sub(new u2(1)), a3 = 0; ; a3++) {
              var s3 = r3.k ? r3.k(a3) : new u2(d3.generate(this.n.byteLength()));
              if (!((s3 = this._truncateToN(s3, true)).cmpn(1) <= 0 || 0 <= s3.cmp(n3))) {
                var c2 = this.g.mul(s3);
                if (!c2.isInfinity()) {
                  var h2 = c2.getX(), o2 = h2.umod(this.n);
                  if (0 !== o2.cmpn(0)) {
                    s3 = s3.invm(this.n).mul(o2.mul(t3.getPrivate()).iadd(e3));
                    if (0 !== (s3 = s3.umod(this.n)).cmpn(0)) {
                      h2 = (c2.getY().isOdd() ? 1 : 0) | (0 !== h2.cmp(o2) ? 2 : 0);
                      return r3.canonical && 0 < s3.cmp(this.nh) && (s3 = this.n.sub(s3), h2 ^= 1), new l2({ r: o2, s: s3, recoveryParam: h2 });
                    }
                  }
                }
              }
            }
          }, s2.prototype.verify = function(e3, t3, i3, r3) {
            e3 = this._truncateToN(new u2(e3, 16)), i3 = this.keyFromPublic(i3, r3);
            r3 = (t3 = new l2(t3, "hex")).r, t3 = t3.s;
            if (r3.cmpn(1) < 0 || 0 <= r3.cmp(this.n))
              return false;
            if (t3.cmpn(1) < 0 || 0 <= t3.cmp(this.n))
              return false;
            var f3, t3 = t3.invm(this.n), e3 = t3.mul(e3).umod(this.n), t3 = t3.mul(r3).umod(this.n);
            return this.curve._maxwellTrick ? !(f3 = this.g.jmulAdd(e3, i3.getPublic(), t3)).isInfinity() && f3.eqXToP(r3) : !(f3 = this.g.mulAdd(e3, i3.getPublic(), t3)).isInfinity() && 0 === f3.getX().umod(this.n).cmp(r3);
          }, s2.prototype.recoverPubKey = function(e3, t3, i3, r3) {
            a2((3 & i3) === i3, "The recovery param is more than two bits"), t3 = new l2(t3, r3);
            var f3 = this.n, d3 = new u2(e3), n3 = t3.r, r3 = t3.s, e3 = 1 & i3, i3 = i3 >> 1;
            if (0 <= n3.cmp(this.curve.p.umod(this.curve.n)) && i3)
              throw new Error("Unable to find sencond key candinate");
            n3 = i3 ? this.curve.pointFromX(n3.add(this.curve.n), e3) : this.curve.pointFromX(n3, e3);
            t3 = t3.r.invm(f3), d3 = f3.sub(d3).mul(t3).umod(f3), f3 = r3.mul(t3).umod(f3);
            return this.g.mulAdd(d3, n3, f3);
          }, s2.prototype.getKeyRecoveryParam = function(e3, t3, i3, r3) {
            if (null !== (t3 = new l2(t3, r3)).recoveryParam)
              return t3.recoveryParam;
            for (var f3, d3 = 0; d3 < 4; d3++) {
              try {
                f3 = this.recoverPubKey(e3, t3, d3);
              } catch (e4) {
                continue;
              }
              if (f3.eq(i3))
                return d3;
            }
            throw new Error("Unable to find valid recovery factor");
          };
        }, { "../curves": 7, "../utils": 15, "./key": 9, "./signature": 10, "bn.js": 16, brorand: 17, "hmac-drbg": 31 }], 9: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("bn.js"), f2 = e2("../utils").assert;
          function d2(e3, t3) {
            this.ec = e3, this.priv = null, this.pub = null, t3.priv && this._importPrivate(t3.priv, t3.privEnc), t3.pub && this._importPublic(t3.pub, t3.pubEnc);
          }
          (t2.exports = d2).fromPublic = function(e3, t3, i3) {
            return t3 instanceof d2 ? t3 : new d2(e3, { pub: t3, pubEnc: i3 });
          }, d2.fromPrivate = function(e3, t3, i3) {
            return t3 instanceof d2 ? t3 : new d2(e3, { priv: t3, privEnc: i3 });
          }, d2.prototype.validate = function() {
            var e3 = this.getPublic();
            return e3.isInfinity() ? { result: false, reason: "Invalid public key" } : e3.validate() ? e3.mul(this.ec.curve.n).isInfinity() ? { result: true, reason: null } : { result: false, reason: "Public key * N != O" } : { result: false, reason: "Public key is not a point" };
          }, d2.prototype.getPublic = function(e3, t3) {
            return "string" == typeof e3 && (t3 = e3, e3 = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), t3 ? this.pub.encode(t3, e3) : this.pub;
          }, d2.prototype.getPrivate = function(e3) {
            return "hex" === e3 ? this.priv.toString(16, 2) : this.priv;
          }, d2.prototype._importPrivate = function(e3, t3) {
            this.priv = new r2(e3, t3 || 16), this.priv = this.priv.umod(this.ec.curve.n);
          }, d2.prototype._importPublic = function(e3, t3) {
            if (e3.x || e3.y)
              return "mont" === this.ec.curve.type ? f2(e3.x, "Need x coordinate") : "short" !== this.ec.curve.type && "edwards" !== this.ec.curve.type || f2(e3.x && e3.y, "Need both x and y coordinate"), void (this.pub = this.ec.curve.point(e3.x, e3.y));
            this.pub = this.ec.curve.decodePoint(e3, t3);
          }, d2.prototype.derive = function(e3) {
            return e3.validate() || f2(e3.validate(), "public point not validated"), e3.mul(this.priv).getX();
          }, d2.prototype.sign = function(e3, t3, i3) {
            return this.ec.sign(e3, this, t3, i3);
          }, d2.prototype.verify = function(e3, t3) {
            return this.ec.verify(e3, t3, this);
          }, d2.prototype.inspect = function() {
            return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
          };
        }, { "../utils": 15, "bn.js": 16 }], 10: [function(e2, t2, i2) {
          "use strict";
          var f2 = e2("bn.js"), d2 = e2("../utils"), r2 = d2.assert;
          function n2(e3, t3) {
            if (e3 instanceof n2)
              return e3;
            this._importDER(e3, t3) || (r2(e3.r && e3.s, "Signature without r or s"), this.r = new f2(e3.r, 16), this.s = new f2(e3.s, 16), void 0 === e3.recoveryParam ? this.recoveryParam = null : this.recoveryParam = e3.recoveryParam);
          }
          function a2() {
            this.place = 0;
          }
          function s2(e3, t3) {
            var i3 = e3[t3.place++];
            if (!(128 & i3))
              return i3;
            var r3 = 15 & i3;
            if (0 == r3 || 4 < r3)
              return false;
            for (var f3 = 0, d3 = 0, n3 = t3.place; d3 < r3; d3++, n3++)
              f3 <<= 8, f3 |= e3[n3], f3 >>>= 0;
            return !(f3 <= 127) && (t3.place = n3, f3);
          }
          function c2(e3) {
            for (var t3 = 0, i3 = e3.length - 1; !e3[t3] && !(128 & e3[t3 + 1]) && t3 < i3; )
              t3++;
            return 0 === t3 ? e3 : e3.slice(t3);
          }
          function h2(e3, t3) {
            if (t3 < 128)
              e3.push(t3);
            else {
              var i3 = 1 + (Math.log(t3) / Math.LN2 >>> 3);
              for (e3.push(128 | i3); --i3; )
                e3.push(t3 >>> (i3 << 3) & 255);
              e3.push(t3);
            }
          }
          (t2.exports = n2).prototype._importDER = function(e3, t3) {
            e3 = d2.toArray(e3, t3);
            var i3 = new a2();
            if (48 !== e3[i3.place++])
              return false;
            var r3 = s2(e3, i3);
            if (false === r3)
              return false;
            if (r3 + i3.place !== e3.length)
              return false;
            if (2 !== e3[i3.place++])
              return false;
            t3 = s2(e3, i3);
            if (false === t3)
              return false;
            r3 = e3.slice(i3.place, t3 + i3.place);
            if (i3.place += t3, 2 !== e3[i3.place++])
              return false;
            t3 = s2(e3, i3);
            if (false === t3)
              return false;
            if (e3.length !== t3 + i3.place)
              return false;
            i3 = e3.slice(i3.place, t3 + i3.place);
            if (0 === r3[0]) {
              if (!(128 & r3[1]))
                return false;
              r3 = r3.slice(1);
            }
            if (0 === i3[0]) {
              if (!(128 & i3[1]))
                return false;
              i3 = i3.slice(1);
            }
            return this.r = new f2(r3), this.s = new f2(i3), !(this.recoveryParam = null);
          }, n2.prototype.toDER = function(e3) {
            var t3 = this.r.toArray(), i3 = this.s.toArray();
            for (128 & t3[0] && (t3 = [0].concat(t3)), 128 & i3[0] && (i3 = [0].concat(i3)), t3 = c2(t3), i3 = c2(i3); !(i3[0] || 128 & i3[1]); )
              i3 = i3.slice(1);
            var r3 = [2];
            h2(r3, t3.length), (r3 = r3.concat(t3)).push(2), h2(r3, i3.length);
            t3 = r3.concat(i3), r3 = [48];
            return h2(r3, t3.length), r3 = r3.concat(t3), d2.encode(r3, e3);
          };
        }, { "../utils": 15, "bn.js": 16 }], 11: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("hash.js"), f2 = e2("../curves"), d2 = e2("../utils"), n2 = d2.assert, a2 = d2.parseBytes, s2 = e2("./key"), c2 = e2("./signature");
          function h2(e3) {
            if (n2("ed25519" === e3, "only tested with ed25519 so far"), !(this instanceof h2))
              return new h2(e3);
            e3 = f2[e3].curve, this.curve = e3, this.g = e3.g, this.g.precompute(e3.n.bitLength() + 1), this.pointClass = e3.point().constructor, this.encodingLength = Math.ceil(e3.n.bitLength() / 8), this.hash = r2.sha512;
          }
          (t2.exports = h2).prototype.sign = function(e3, t3) {
            e3 = a2(e3);
            var i3 = this.keyFromSecret(t3), r3 = this.hashInt(i3.messagePrefix(), e3), f3 = this.g.mul(r3), t3 = this.encodePoint(f3), i3 = this.hashInt(t3, i3.pubBytes(), e3).mul(i3.priv()), i3 = r3.add(i3).umod(this.curve.n);
            return this.makeSignature({ R: f3, S: i3, Rencoded: t3 });
          }, h2.prototype.verify = function(e3, t3, i3) {
            e3 = a2(e3), t3 = this.makeSignature(t3);
            var r3 = this.keyFromPublic(i3), i3 = this.hashInt(t3.Rencoded(), r3.pubBytes(), e3), e3 = this.g.mul(t3.S());
            return t3.R().add(r3.pub().mul(i3)).eq(e3);
          }, h2.prototype.hashInt = function() {
            for (var e3 = this.hash(), t3 = 0; t3 < arguments.length; t3++)
              e3.update(arguments[t3]);
            return d2.intFromLE(e3.digest()).umod(this.curve.n);
          }, h2.prototype.keyFromPublic = function(e3) {
            return s2.fromPublic(this, e3);
          }, h2.prototype.keyFromSecret = function(e3) {
            return s2.fromSecret(this, e3);
          }, h2.prototype.makeSignature = function(e3) {
            return e3 instanceof c2 ? e3 : new c2(this, e3);
          }, h2.prototype.encodePoint = function(e3) {
            var t3 = e3.getY().toArray("le", this.encodingLength);
            return t3[this.encodingLength - 1] |= e3.getX().isOdd() ? 128 : 0, t3;
          }, h2.prototype.decodePoint = function(e3) {
            var t3 = (e3 = d2.parseBytes(e3)).length - 1, i3 = e3.slice(0, t3).concat(-129 & e3[t3]), t3 = 0 != (128 & e3[t3]), i3 = d2.intFromLE(i3);
            return this.curve.pointFromY(i3, t3);
          }, h2.prototype.encodeInt = function(e3) {
            return e3.toArray("le", this.encodingLength);
          }, h2.prototype.decodeInt = function(e3) {
            return d2.intFromLE(e3);
          }, h2.prototype.isPoint = function(e3) {
            return e3 instanceof this.pointClass;
          };
        }, { "../curves": 7, "../utils": 15, "./key": 12, "./signature": 13, "hash.js": 19 }], 12: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = r2.assert, d2 = r2.parseBytes, e2 = r2.cachedProperty;
          function n2(e3, t3) {
            this.eddsa = e3, this._secret = d2(t3.secret), e3.isPoint(t3.pub) ? this._pub = t3.pub : this._pubBytes = d2(t3.pub);
          }
          n2.fromPublic = function(e3, t3) {
            return t3 instanceof n2 ? t3 : new n2(e3, { pub: t3 });
          }, n2.fromSecret = function(e3, t3) {
            return t3 instanceof n2 ? t3 : new n2(e3, { secret: t3 });
          }, n2.prototype.secret = function() {
            return this._secret;
          }, e2(n2, "pubBytes", function() {
            return this.eddsa.encodePoint(this.pub());
          }), e2(n2, "pub", function() {
            return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv());
          }), e2(n2, "privBytes", function() {
            var e3 = this.eddsa, t3 = this.hash(), i3 = e3.encodingLength - 1, e3 = t3.slice(0, e3.encodingLength);
            return e3[0] &= 248, e3[i3] &= 127, e3[i3] |= 64, e3;
          }), e2(n2, "priv", function() {
            return this.eddsa.decodeInt(this.privBytes());
          }), e2(n2, "hash", function() {
            return this.eddsa.hash().update(this.secret()).digest();
          }), e2(n2, "messagePrefix", function() {
            return this.hash().slice(this.eddsa.encodingLength);
          }), n2.prototype.sign = function(e3) {
            return f2(this._secret, "KeyPair can only verify"), this.eddsa.sign(e3, this);
          }, n2.prototype.verify = function(e3, t3) {
            return this.eddsa.verify(e3, t3, this);
          }, n2.prototype.getSecret = function(e3) {
            return f2(this._secret, "KeyPair is public only"), r2.encode(this.secret(), e3);
          }, n2.prototype.getPublic = function(e3) {
            return r2.encode(this.pubBytes(), e3);
          }, t2.exports = n2;
        }, { "../utils": 15 }], 13: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("bn.js"), f2 = e2("../utils"), d2 = f2.assert, e2 = f2.cachedProperty, n2 = f2.parseBytes;
          function a2(e3, t3) {
            this.eddsa = e3, "object" != typeof t3 && (t3 = n2(t3)), Array.isArray(t3) && (t3 = { R: t3.slice(0, e3.encodingLength), S: t3.slice(e3.encodingLength) }), d2(t3.R && t3.S, "Signature without R or S"), e3.isPoint(t3.R) && (this._R = t3.R), t3.S instanceof r2 && (this._S = t3.S), this._Rencoded = Array.isArray(t3.R) ? t3.R : t3.Rencoded, this._Sencoded = Array.isArray(t3.S) ? t3.S : t3.Sencoded;
          }
          e2(a2, "S", function() {
            return this.eddsa.decodeInt(this.Sencoded());
          }), e2(a2, "R", function() {
            return this.eddsa.decodePoint(this.Rencoded());
          }), e2(a2, "Rencoded", function() {
            return this.eddsa.encodePoint(this.R());
          }), e2(a2, "Sencoded", function() {
            return this.eddsa.encodeInt(this.S());
          }), a2.prototype.toBytes = function() {
            return this.Rencoded().concat(this.Sencoded());
          }, a2.prototype.toHex = function() {
            return f2.encode(this.toBytes(), "hex").toUpperCase();
          }, t2.exports = a2;
        }, { "../utils": 15, "bn.js": 16 }], 14: [function(e2, t2, i2) {
          t2.exports = { doubles: { step: 4, points: [["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"], ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"], ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"], ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"], ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"], ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"], ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"], ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"], ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"], ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"], ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"], ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"], ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"], ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"], ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"], ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"], ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"], ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"], ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"], ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"], ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"], ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"], ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"], ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"], ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"], ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"], ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"], ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"], ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"], ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"], ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"], ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"], ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"], ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"], ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"], ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"], ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"], ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"], ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"], ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"], ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"], ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"], ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"], ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"], ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"], ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"], ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"], ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"], ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"], ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"], ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"], ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"], ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"], ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"], ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"], ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"], ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"], ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"], ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"], ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"], ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"], ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"], ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"], ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"], ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]] }, naf: { wnd: 7, points: [["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"], ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"], ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"], ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"], ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"], ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"], ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"], ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"], ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"], ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"], ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"], ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"], ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"], ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"], ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"], ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"], ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"], ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"], ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"], ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"], ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"], ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"], ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"], ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"], ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"], ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"], ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"], ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"], ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"], ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"], ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"], ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"], ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"], ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"], ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"], ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"], ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"], ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"], ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"], ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"], ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"], ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"], ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"], ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"], ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"], ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"], ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"], ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"], ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"], ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"], ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"], ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"], ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"], ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"], ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"], ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"], ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"], ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"], ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"], ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"], ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"], ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"], ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"], ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"], ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"], ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"], ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"], ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"], ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"], ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"], ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"], ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"], ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"], ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"], ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"], ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"], ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"], ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"], ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"], ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"], ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"], ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"], ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"], ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"], ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"], ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"], ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"], ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"], ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"], ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"], ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"], ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"], ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"], ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"], ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"], ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"], ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"], ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"], ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"], ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"], ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"], ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"], ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"], ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"], ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"], ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"], ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"], ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"], ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"], ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"], ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"], ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"], ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"], ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"], ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"], ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"], ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"], ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"], ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"], ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"], ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"], ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"], ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"], ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"], ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"], ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"], ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]] } };
        }, {}], 15: [function(e2, t2, i2) {
          "use strict";
          var r2 = i2, f2 = e2("bn.js"), i2 = e2("minimalistic-assert"), e2 = e2("minimalistic-crypto-utils");
          r2.assert = i2, r2.toArray = e2.toArray, r2.zero2 = e2.zero2, r2.toHex = e2.toHex, r2.encode = e2.encode, r2.getNAF = function(e3, t3, i3) {
            var r3 = new Array(Math.max(e3.bitLength(), i3) + 1);
            r3.fill(0);
            for (var f3 = 1 << t3 + 1, d2 = e3.clone(), n2 = 0; n2 < r3.length; n2++) {
              var a2, s2 = d2.andln(f3 - 1);
              d2.isOdd() ? (a2 = (f3 >> 1) - 1 < s2 ? (f3 >> 1) - s2 : s2, d2.isubn(a2)) : a2 = 0, r3[n2] = a2, d2.iushrn(1);
            }
            return r3;
          }, r2.getJSF = function(e3, t3) {
            var i3 = [[], []];
            e3 = e3.clone(), t3 = t3.clone();
            for (var r3, f3 = 0, d2 = 0; 0 < e3.cmpn(-f3) || 0 < t3.cmpn(-d2); ) {
              var n2, a2 = e3.andln(3) + f3 & 3, s2 = t3.andln(3) + d2 & 3;
              3 === s2 && (s2 = -1), n2 = 0 == (1 & (a2 = 3 === a2 ? -1 : a2)) ? 0 : 3 !== (r3 = e3.andln(7) + f3 & 7) && 5 !== r3 || 2 !== s2 ? a2 : -a2, i3[0].push(n2), s2 = 0 == (1 & s2) ? 0 : 3 !== (r3 = t3.andln(7) + d2 & 7) && 5 !== r3 || 2 !== a2 ? s2 : -s2, i3[1].push(s2), 2 * f3 === n2 + 1 && (f3 = 1 - f3), 2 * d2 === s2 + 1 && (d2 = 1 - d2), e3.iushrn(1), t3.iushrn(1);
            }
            return i3;
          }, r2.cachedProperty = function(e3, t3, i3) {
            var r3 = "_" + t3;
            e3.prototype[t3] = function() {
              return void 0 !== this[r3] ? this[r3] : this[r3] = i3.call(this);
            };
          }, r2.parseBytes = function(e3) {
            return "string" == typeof e3 ? r2.toArray(e3, "hex") : e3;
          }, r2.intFromLE = function(e3) {
            return new f2(e3, "hex", "le");
          };
        }, { "bn.js": 16, "minimalistic-assert": 33, "minimalistic-crypto-utils": 34 }], 16: [function(_2, e2, t2) {
          !function(e3, t3) {
            "use strict";
            function p2(e4, t4) {
              if (!e4)
                throw new Error(t4 || "Assertion failed");
            }
            function i2(e4, t4) {
              e4.super_ = t4;
              function i3() {
              }
              i3.prototype = t4.prototype, e4.prototype = new i3(), e4.prototype.constructor = e4;
            }
            function m7(e4, t4, i3) {
              if (m7.isBN(e4))
                return e4;
              this.negative = 0, this.words = null, this.length = 0, (this.red = null) !== e4 && ("le" !== t4 && "be" !== t4 || (i3 = t4, t4 = 10), this._init(e4 || 0, t4 || 10, i3 || "be"));
            }
            var r2;
            "object" == typeof e3 ? e3.exports = m7 : t3.BN = m7, (m7.BN = m7).wordSize = 26;
            try {
              r2 = _2("buffer").Buffer;
            } catch (e4) {
            }
            function n2(e4, t4, i3) {
              for (var r3 = 0, f3 = Math.min(e4.length, i3), d3 = t4; d3 < f3; d3++) {
                var n3 = e4.charCodeAt(d3) - 48;
                r3 <<= 4, r3 |= 49 <= n3 && n3 <= 54 ? n3 - 49 + 10 : 17 <= n3 && n3 <= 22 ? n3 - 17 + 10 : 15 & n3;
              }
              return r3;
            }
            function o2(e4, t4, i3, r3) {
              for (var f3 = 0, d3 = Math.min(e4.length, i3), n3 = t4; n3 < d3; n3++) {
                var a3 = e4.charCodeAt(n3) - 48;
                f3 *= r3, f3 += 49 <= a3 ? a3 - 49 + 10 : 17 <= a3 ? a3 - 17 + 10 : a3;
              }
              return f3;
            }
            m7.isBN = function(e4) {
              return e4 instanceof m7 || null !== e4 && "object" == typeof e4 && e4.constructor.wordSize === m7.wordSize && Array.isArray(e4.words);
            }, m7.max = function(e4, t4) {
              return 0 < e4.cmp(t4) ? e4 : t4;
            }, m7.min = function(e4, t4) {
              return e4.cmp(t4) < 0 ? e4 : t4;
            }, m7.prototype._init = function(e4, t4, i3) {
              if ("number" == typeof e4)
                return this._initNumber(e4, t4, i3);
              if ("object" == typeof e4)
                return this._initArray(e4, t4, i3);
              p2((t4 = "hex" === t4 ? 16 : t4) === (0 | t4) && 2 <= t4 && t4 <= 36);
              var r3 = 0;
              "-" === (e4 = e4.toString().replace(/\s+/g, ""))[0] && r3++, 16 === t4 ? this._parseHex(e4, r3) : this._parseBase(e4, t4, r3), "-" === e4[0] && (this.negative = 1), this.strip(), "le" === i3 && this._initArray(this.toArray(), t4, i3);
            }, m7.prototype._initNumber = function(e4, t4, i3) {
              e4 < 0 && (this.negative = 1, e4 = -e4), e4 < 67108864 ? (this.words = [67108863 & e4], this.length = 1) : e4 < 4503599627370496 ? (this.words = [67108863 & e4, e4 / 67108864 & 67108863], this.length = 2) : (p2(e4 < 9007199254740992), this.words = [67108863 & e4, e4 / 67108864 & 67108863, 1], this.length = 3), "le" === i3 && this._initArray(this.toArray(), t4, i3);
            }, m7.prototype._initArray = function(e4, t4, i3) {
              if (p2("number" == typeof e4.length), e4.length <= 0)
                return this.words = [0], this.length = 1, this;
              this.length = Math.ceil(e4.length / 3), this.words = new Array(this.length);
              for (var r3, f3, d3 = 0; d3 < this.length; d3++)
                this.words[d3] = 0;
              var n3 = 0;
              if ("be" === i3)
                for (d3 = e4.length - 1, r3 = 0; 0 <= d3; d3 -= 3)
                  f3 = e4[d3] | e4[d3 - 1] << 8 | e4[d3 - 2] << 16, this.words[r3] |= f3 << n3 & 67108863, this.words[r3 + 1] = f3 >>> 26 - n3 & 67108863, 26 <= (n3 += 24) && (n3 -= 26, r3++);
              else if ("le" === i3)
                for (r3 = d3 = 0; d3 < e4.length; d3 += 3)
                  f3 = e4[d3] | e4[d3 + 1] << 8 | e4[d3 + 2] << 16, this.words[r3] |= f3 << n3 & 67108863, this.words[r3 + 1] = f3 >>> 26 - n3 & 67108863, 26 <= (n3 += 24) && (n3 -= 26, r3++);
              return this.strip();
            }, m7.prototype._parseHex = function(e4, t4) {
              this.length = Math.ceil((e4.length - t4) / 6), this.words = new Array(this.length);
              for (var i3, r3 = 0; r3 < this.length; r3++)
                this.words[r3] = 0;
              for (var f3 = 0, r3 = e4.length - 6, d3 = 0; t4 <= r3; r3 -= 6)
                i3 = n2(e4, r3, r3 + 6), this.words[d3] |= i3 << f3 & 67108863, this.words[d3 + 1] |= i3 >>> 26 - f3 & 4194303, 26 <= (f3 += 24) && (f3 -= 26, d3++);
              r3 + 6 !== t4 && (i3 = n2(e4, t4, r3 + 6), this.words[d3] |= i3 << f3 & 67108863, this.words[d3 + 1] |= i3 >>> 26 - f3 & 4194303), this.strip();
            }, m7.prototype._parseBase = function(e4, t4, i3) {
              this.words = [0];
              for (var r3 = 0, f3 = this.length = 1; f3 <= 67108863; f3 *= t4)
                r3++;
              r3--, f3 = f3 / t4 | 0;
              for (var d3 = e4.length - i3, n3 = d3 % r3, a3 = Math.min(d3, d3 - n3) + i3, s3 = 0, c3 = i3; c3 < a3; c3 += r3)
                s3 = o2(e4, c3, c3 + r3, t4), this.imuln(f3), this.words[0] + s3 < 67108864 ? this.words[0] += s3 : this._iaddn(s3);
              if (0 != n3) {
                for (var h3 = 1, s3 = o2(e4, c3, e4.length, t4), c3 = 0; c3 < n3; c3++)
                  h3 *= t4;
                this.imuln(h3), this.words[0] + s3 < 67108864 ? this.words[0] += s3 : this._iaddn(s3);
              }
            }, m7.prototype.copy = function(e4) {
              e4.words = new Array(this.length);
              for (var t4 = 0; t4 < this.length; t4++)
                e4.words[t4] = this.words[t4];
              e4.length = this.length, e4.negative = this.negative, e4.red = this.red;
            }, m7.prototype.clone = function() {
              var e4 = new m7(null);
              return this.copy(e4), e4;
            }, m7.prototype._expand = function(e4) {
              for (; this.length < e4; )
                this.words[this.length++] = 0;
              return this;
            }, m7.prototype.strip = function() {
              for (; 1 < this.length && 0 === this.words[this.length - 1]; )
                this.length--;
              return this._normSign();
            }, m7.prototype._normSign = function() {
              return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
            }, m7.prototype.inspect = function() {
              return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
            };
            var u2 = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"], b2 = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], l2 = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            function f2(e4, t4, i3) {
              i3.negative = t4.negative ^ e4.negative;
              var r3 = e4.length + t4.length | 0, r3 = (i3.length = r3) - 1 | 0, f3 = 67108863 & (o3 = (0 | e4.words[0]) * (0 | t4.words[0])), d3 = o3 / 67108864 | 0;
              i3.words[0] = f3;
              for (var n3 = 1; n3 < r3; n3++) {
                for (var a3 = d3 >>> 26, s3 = 67108863 & d3, c3 = Math.min(n3, t4.length - 1), h3 = Math.max(0, n3 - e4.length + 1); h3 <= c3; h3++) {
                  var o3, u3 = n3 - h3 | 0;
                  a3 += (o3 = (0 | e4.words[u3]) * (0 | t4.words[h3]) + s3) / 67108864 | 0, s3 = 67108863 & o3;
                }
                i3.words[n3] = 0 | s3, d3 = 0 | a3;
              }
              return 0 !== d3 ? i3.words[n3] = 0 | d3 : i3.length--, i3.strip();
            }
            m7.prototype.toString = function(e4, t4) {
              if (t4 = 0 | t4 || 1, 16 === (e4 = e4 || 10) || "hex" === e4) {
                a3 = "";
                for (var i3 = 0, r3 = 0, f3 = 0; f3 < this.length; f3++) {
                  var d3 = this.words[f3], n3 = (16777215 & (d3 << i3 | r3)).toString(16), a3 = 0 !== (r3 = d3 >>> 24 - i3 & 16777215) || f3 !== this.length - 1 ? u2[6 - n3.length] + n3 + a3 : n3 + a3;
                  26 <= (i3 += 2) && (i3 -= 26, f3--);
                }
                for (0 !== r3 && (a3 = r3.toString(16) + a3); a3.length % t4 != 0; )
                  a3 = "0" + a3;
                return a3 = 0 !== this.negative ? "-" + a3 : a3;
              }
              if (e4 === (0 | e4) && 2 <= e4 && e4 <= 36) {
                var s3 = b2[e4], c3 = l2[e4];
                for (a3 = "", (h3 = this.clone()).negative = 0; !h3.isZero(); ) {
                  var h3, o3 = h3.modn(c3).toString(e4);
                  a3 = (h3 = h3.idivn(c3)).isZero() ? o3 + a3 : u2[s3 - o3.length] + o3 + a3;
                }
                for (this.isZero() && (a3 = "0" + a3); a3.length % t4 != 0; )
                  a3 = "0" + a3;
                return a3 = 0 !== this.negative ? "-" + a3 : a3;
              }
              p2(false, "Base should be between 2 and 36");
            }, m7.prototype.toNumber = function() {
              var e4 = this.words[0];
              return 2 === this.length ? e4 += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e4 += 4503599627370496 + 67108864 * this.words[1] : 2 < this.length && p2(false, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e4 : e4;
            }, m7.prototype.toJSON = function() {
              return this.toString(16);
            }, m7.prototype.toBuffer = function(e4, t4) {
              return p2(void 0 !== r2), this.toArrayLike(r2, e4, t4);
            }, m7.prototype.toArray = function(e4, t4) {
              return this.toArrayLike(Array, e4, t4);
            }, m7.prototype.toArrayLike = function(e4, t4, i3) {
              var r3 = this.byteLength(), f3 = i3 || Math.max(1, r3);
              p2(r3 <= f3, "byte array longer than desired length"), p2(0 < f3, "Requested array length <= 0"), this.strip();
              var d3, n3, t4 = "le" === t4, a3 = new e4(f3), s3 = this.clone();
              if (t4) {
                for (n3 = 0; !s3.isZero(); n3++)
                  d3 = s3.andln(255), s3.iushrn(8), a3[n3] = d3;
                for (; n3 < f3; n3++)
                  a3[n3] = 0;
              } else {
                for (n3 = 0; n3 < f3 - r3; n3++)
                  a3[n3] = 0;
                for (n3 = 0; !s3.isZero(); n3++)
                  d3 = s3.andln(255), s3.iushrn(8), a3[f3 - n3 - 1] = d3;
              }
              return a3;
            }, Math.clz32 ? m7.prototype._countBits = function(e4) {
              return 32 - Math.clz32(e4);
            } : m7.prototype._countBits = function(e4) {
              var t4 = e4, e4 = 0;
              return 4096 <= t4 && (e4 += 13, t4 >>>= 13), 64 <= t4 && (e4 += 7, t4 >>>= 7), 8 <= t4 && (e4 += 4, t4 >>>= 4), 2 <= t4 && (e4 += 2, t4 >>>= 2), e4 + t4;
            }, m7.prototype._zeroBits = function(e4) {
              if (0 === e4)
                return 26;
              var t4 = e4, e4 = 0;
              return 0 == (8191 & t4) && (e4 += 13, t4 >>>= 13), 0 == (127 & t4) && (e4 += 7, t4 >>>= 7), 0 == (15 & t4) && (e4 += 4, t4 >>>= 4), 0 == (3 & t4) && (e4 += 2, t4 >>>= 2), 0 == (1 & t4) && e4++, e4;
            }, m7.prototype.bitLength = function() {
              var e4 = this.words[this.length - 1], e4 = this._countBits(e4);
              return 26 * (this.length - 1) + e4;
            }, m7.prototype.zeroBits = function() {
              if (this.isZero())
                return 0;
              for (var e4 = 0, t4 = 0; t4 < this.length; t4++) {
                var i3 = this._zeroBits(this.words[t4]);
                if (e4 += i3, 26 !== i3)
                  break;
              }
              return e4;
            }, m7.prototype.byteLength = function() {
              return Math.ceil(this.bitLength() / 8);
            }, m7.prototype.toTwos = function(e4) {
              return 0 !== this.negative ? this.abs().inotn(e4).iaddn(1) : this.clone();
            }, m7.prototype.fromTwos = function(e4) {
              return this.testn(e4 - 1) ? this.notn(e4).iaddn(1).ineg() : this.clone();
            }, m7.prototype.isNeg = function() {
              return 0 !== this.negative;
            }, m7.prototype.neg = function() {
              return this.clone().ineg();
            }, m7.prototype.ineg = function() {
              return this.isZero() || (this.negative ^= 1), this;
            }, m7.prototype.iuor = function(e4) {
              for (; this.length < e4.length; )
                this.words[this.length++] = 0;
              for (var t4 = 0; t4 < e4.length; t4++)
                this.words[t4] = this.words[t4] | e4.words[t4];
              return this.strip();
            }, m7.prototype.ior = function(e4) {
              return p2(0 == (this.negative | e4.negative)), this.iuor(e4);
            }, m7.prototype.or = function(e4) {
              return this.length > e4.length ? this.clone().ior(e4) : e4.clone().ior(this);
            }, m7.prototype.uor = function(e4) {
              return this.length > e4.length ? this.clone().iuor(e4) : e4.clone().iuor(this);
            }, m7.prototype.iuand = function(e4) {
              for (var t4 = this.length > e4.length ? e4 : this, i3 = 0; i3 < t4.length; i3++)
                this.words[i3] = this.words[i3] & e4.words[i3];
              return this.length = t4.length, this.strip();
            }, m7.prototype.iand = function(e4) {
              return p2(0 == (this.negative | e4.negative)), this.iuand(e4);
            }, m7.prototype.and = function(e4) {
              return this.length > e4.length ? this.clone().iand(e4) : e4.clone().iand(this);
            }, m7.prototype.uand = function(e4) {
              return this.length > e4.length ? this.clone().iuand(e4) : e4.clone().iuand(this);
            }, m7.prototype.iuxor = function(e4) {
              for (var t4, i3 = this.length > e4.length ? (t4 = this, e4) : (t4 = e4, this), r3 = 0; r3 < i3.length; r3++)
                this.words[r3] = t4.words[r3] ^ i3.words[r3];
              if (this !== t4)
                for (; r3 < t4.length; r3++)
                  this.words[r3] = t4.words[r3];
              return this.length = t4.length, this.strip();
            }, m7.prototype.ixor = function(e4) {
              return p2(0 == (this.negative | e4.negative)), this.iuxor(e4);
            }, m7.prototype.xor = function(e4) {
              return this.length > e4.length ? this.clone().ixor(e4) : e4.clone().ixor(this);
            }, m7.prototype.uxor = function(e4) {
              return this.length > e4.length ? this.clone().iuxor(e4) : e4.clone().iuxor(this);
            }, m7.prototype.inotn = function(e4) {
              p2("number" == typeof e4 && 0 <= e4);
              var t4 = 0 | Math.ceil(e4 / 26), e4 = e4 % 26;
              this._expand(t4), 0 < e4 && t4--;
              for (var i3 = 0; i3 < t4; i3++)
                this.words[i3] = 67108863 & ~this.words[i3];
              return 0 < e4 && (this.words[i3] = ~this.words[i3] & 67108863 >> 26 - e4), this.strip();
            }, m7.prototype.notn = function(e4) {
              return this.clone().inotn(e4);
            }, m7.prototype.setn = function(e4, t4) {
              p2("number" == typeof e4 && 0 <= e4);
              var i3 = e4 / 26 | 0, e4 = e4 % 26;
              return this._expand(1 + i3), this.words[i3] = t4 ? this.words[i3] | 1 << e4 : this.words[i3] & ~(1 << e4), this.strip();
            }, m7.prototype.iadd = function(e4) {
              var t4, i3, r3;
              if (0 !== this.negative && 0 === e4.negative)
                return this.negative = 0, t4 = this.isub(e4), this.negative ^= 1, this._normSign();
              if (0 === this.negative && 0 !== e4.negative)
                return e4.negative = 0, t4 = this.isub(e4), e4.negative = 1, t4._normSign();
              r3 = this.length > e4.length ? (i3 = this, e4) : (i3 = e4, this);
              for (var f3 = 0, d3 = 0; d3 < r3.length; d3++)
                t4 = (0 | i3.words[d3]) + (0 | r3.words[d3]) + f3, this.words[d3] = 67108863 & t4, f3 = t4 >>> 26;
              for (; 0 !== f3 && d3 < i3.length; d3++)
                t4 = (0 | i3.words[d3]) + f3, this.words[d3] = 67108863 & t4, f3 = t4 >>> 26;
              if (this.length = i3.length, 0 !== f3)
                this.words[this.length] = f3, this.length++;
              else if (i3 !== this)
                for (; d3 < i3.length; d3++)
                  this.words[d3] = i3.words[d3];
              return this;
            }, m7.prototype.add = function(e4) {
              var t4;
              return 0 !== e4.negative && 0 === this.negative ? (e4.negative = 0, t4 = this.sub(e4), e4.negative ^= 1, t4) : 0 === e4.negative && 0 !== this.negative ? (this.negative = 0, t4 = e4.sub(this), this.negative = 1, t4) : this.length > e4.length ? this.clone().iadd(e4) : e4.clone().iadd(this);
            }, m7.prototype.isub = function(e4) {
              if (0 !== e4.negative) {
                e4.negative = 0;
                var t4 = this.iadd(e4);
                return e4.negative = 1, t4._normSign();
              }
              if (0 !== this.negative)
                return this.negative = 0, this.iadd(e4), this.negative = 1, this._normSign();
              var i3, r3, f3 = this.cmp(e4);
              if (0 === f3)
                return this.negative = 0, this.length = 1, this.words[0] = 0, this;
              r3 = 0 < f3 ? (i3 = this, e4) : (i3 = e4, this);
              for (var d3 = 0, n3 = 0; n3 < r3.length; n3++)
                d3 = (t4 = (0 | i3.words[n3]) - (0 | r3.words[n3]) + d3) >> 26, this.words[n3] = 67108863 & t4;
              for (; 0 !== d3 && n3 < i3.length; n3++)
                d3 = (t4 = (0 | i3.words[n3]) + d3) >> 26, this.words[n3] = 67108863 & t4;
              if (0 === d3 && n3 < i3.length && i3 !== this)
                for (; n3 < i3.length; n3++)
                  this.words[n3] = i3.words[n3];
              return this.length = Math.max(this.length, n3), i3 !== this && (this.negative = 1), this.strip();
            }, m7.prototype.sub = function(e4) {
              return this.clone().isub(e4);
            };
            var d2 = function(e4, t4, i3) {
              var r3 = e4.words, f3 = t4.words, d3 = i3.words, n3 = 0 | r3[0], a3 = 8191 & n3, s3 = n3 >>> 13, c3 = 0 | r3[1], h3 = 8191 & c3, o3 = c3 >>> 13, u3 = 0 | r3[2], b3 = 8191 & u3, l3 = u3 >>> 13, p3 = 0 | r3[3], m8 = 8191 & p3, v3 = p3 >>> 13, g3 = 0 | r3[4], y3 = 8191 & g3, M3 = g3 >>> 13, w3 = 0 | r3[5], S3 = 8191 & w3, _3 = w3 >>> 13, A2 = 0 | r3[6], x2 = 8191 & A2, I2 = A2 >>> 13, z2 = 0 | r3[7], q2 = 8191 & z2, R2 = z2 >>> 13, k2 = 0 | r3[8], P2 = 8191 & k2, j2 = k2 >>> 13, N2 = 0 | r3[9], E2 = 8191 & N2, B2 = N2 >>> 13, L2 = 0 | f3[0], O2 = 8191 & L2, F2 = L2 >>> 13, T2 = 0 | f3[1], C2 = 8191 & T2, Z2 = T2 >>> 13, J2 = 0 | f3[2], H2 = 8191 & J2, D2 = J2 >>> 13, X2 = 0 | f3[3], K2 = 8191 & X2, V2 = X2 >>> 13, W2 = 0 | f3[4], U2 = 8191 & W2, Y2 = W2 >>> 13, G2 = 0 | f3[5], Q2 = 8191 & G2, $2 = G2 >>> 13, n3 = 0 | f3[6], c3 = 8191 & n3, u3 = n3 >>> 13, p3 = 0 | f3[7], g3 = 8191 & p3, w3 = p3 >>> 13, A2 = 0 | f3[8], z2 = 8191 & A2, k2 = A2 >>> 13, r3 = 0 | f3[9], N2 = 8191 & r3, L2 = r3 >>> 13;
              i3.negative = e4.negative ^ t4.negative, i3.length = 19;
              var X2 = (0 + Math.imul(a3, O2) | 0) + ((8191 & (J2 = Math.imul(a3, F2) + Math.imul(s3, O2) | 0)) << 13) | 0, ee = (Math.imul(s3, F2) + (J2 >>> 13) | 0) + (X2 >>> 26) | 0;
              X2 &= 67108863, T2 = Math.imul(h3, O2), J2 = Math.imul(h3, F2) + Math.imul(o3, O2) | 0, W2 = Math.imul(o3, F2);
              G2 = (ee + (T2 + Math.imul(a3, C2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, Z2) | 0) + Math.imul(s3, C2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, Z2) | 0) + (J2 >>> 13) | 0) + (G2 >>> 26) | 0, G2 &= 67108863, T2 = Math.imul(b3, O2), J2 = Math.imul(b3, F2) + Math.imul(l3, O2) | 0, W2 = Math.imul(l3, F2), T2 = T2 + Math.imul(h3, C2) | 0, J2 = (J2 + Math.imul(h3, Z2) | 0) + Math.imul(o3, C2) | 0, W2 = W2 + Math.imul(o3, Z2) | 0;
              n3 = (ee + (T2 + Math.imul(a3, H2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, D2) | 0) + Math.imul(s3, H2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, D2) | 0) + (J2 >>> 13) | 0) + (n3 >>> 26) | 0, n3 &= 67108863, T2 = Math.imul(m8, O2), J2 = Math.imul(m8, F2) + Math.imul(v3, O2) | 0, W2 = Math.imul(v3, F2), T2 = T2 + Math.imul(b3, C2) | 0, J2 = (J2 + Math.imul(b3, Z2) | 0) + Math.imul(l3, C2) | 0, W2 = W2 + Math.imul(l3, Z2) | 0, T2 = T2 + Math.imul(h3, H2) | 0, J2 = (J2 + Math.imul(h3, D2) | 0) + Math.imul(o3, H2) | 0, W2 = W2 + Math.imul(o3, D2) | 0;
              p3 = (ee + (T2 + Math.imul(a3, K2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, V2) | 0) + Math.imul(s3, K2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, V2) | 0) + (J2 >>> 13) | 0) + (p3 >>> 26) | 0, p3 &= 67108863, T2 = Math.imul(y3, O2), J2 = Math.imul(y3, F2) + Math.imul(M3, O2) | 0, W2 = Math.imul(M3, F2), T2 = T2 + Math.imul(m8, C2) | 0, J2 = (J2 + Math.imul(m8, Z2) | 0) + Math.imul(v3, C2) | 0, W2 = W2 + Math.imul(v3, Z2) | 0, T2 = T2 + Math.imul(b3, H2) | 0, J2 = (J2 + Math.imul(b3, D2) | 0) + Math.imul(l3, H2) | 0, W2 = W2 + Math.imul(l3, D2) | 0, T2 = T2 + Math.imul(h3, K2) | 0, J2 = (J2 + Math.imul(h3, V2) | 0) + Math.imul(o3, K2) | 0, W2 = W2 + Math.imul(o3, V2) | 0;
              A2 = (ee + (T2 + Math.imul(a3, U2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, Y2) | 0) + Math.imul(s3, U2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, Y2) | 0) + (J2 >>> 13) | 0) + (A2 >>> 26) | 0, A2 &= 67108863, T2 = Math.imul(S3, O2), J2 = Math.imul(S3, F2) + Math.imul(_3, O2) | 0, W2 = Math.imul(_3, F2), T2 = T2 + Math.imul(y3, C2) | 0, J2 = (J2 + Math.imul(y3, Z2) | 0) + Math.imul(M3, C2) | 0, W2 = W2 + Math.imul(M3, Z2) | 0, T2 = T2 + Math.imul(m8, H2) | 0, J2 = (J2 + Math.imul(m8, D2) | 0) + Math.imul(v3, H2) | 0, W2 = W2 + Math.imul(v3, D2) | 0, T2 = T2 + Math.imul(b3, K2) | 0, J2 = (J2 + Math.imul(b3, V2) | 0) + Math.imul(l3, K2) | 0, W2 = W2 + Math.imul(l3, V2) | 0, T2 = T2 + Math.imul(h3, U2) | 0, J2 = (J2 + Math.imul(h3, Y2) | 0) + Math.imul(o3, U2) | 0, W2 = W2 + Math.imul(o3, Y2) | 0;
              f3 = (ee + (T2 + Math.imul(a3, Q2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, $2) | 0) + Math.imul(s3, Q2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, $2) | 0) + (J2 >>> 13) | 0) + (f3 >>> 26) | 0, f3 &= 67108863, T2 = Math.imul(x2, O2), J2 = Math.imul(x2, F2) + Math.imul(I2, O2) | 0, W2 = Math.imul(I2, F2), T2 = T2 + Math.imul(S3, C2) | 0, J2 = (J2 + Math.imul(S3, Z2) | 0) + Math.imul(_3, C2) | 0, W2 = W2 + Math.imul(_3, Z2) | 0, T2 = T2 + Math.imul(y3, H2) | 0, J2 = (J2 + Math.imul(y3, D2) | 0) + Math.imul(M3, H2) | 0, W2 = W2 + Math.imul(M3, D2) | 0, T2 = T2 + Math.imul(m8, K2) | 0, J2 = (J2 + Math.imul(m8, V2) | 0) + Math.imul(v3, K2) | 0, W2 = W2 + Math.imul(v3, V2) | 0, T2 = T2 + Math.imul(b3, U2) | 0, J2 = (J2 + Math.imul(b3, Y2) | 0) + Math.imul(l3, U2) | 0, W2 = W2 + Math.imul(l3, Y2) | 0, T2 = T2 + Math.imul(h3, Q2) | 0, J2 = (J2 + Math.imul(h3, $2) | 0) + Math.imul(o3, Q2) | 0, W2 = W2 + Math.imul(o3, $2) | 0;
              r3 = (ee + (T2 + Math.imul(a3, c3) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, u3) | 0) + Math.imul(s3, c3) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, u3) | 0) + (J2 >>> 13) | 0) + (r3 >>> 26) | 0, r3 &= 67108863, T2 = Math.imul(q2, O2), J2 = Math.imul(q2, F2) + Math.imul(R2, O2) | 0, W2 = Math.imul(R2, F2), T2 = T2 + Math.imul(x2, C2) | 0, J2 = (J2 + Math.imul(x2, Z2) | 0) + Math.imul(I2, C2) | 0, W2 = W2 + Math.imul(I2, Z2) | 0, T2 = T2 + Math.imul(S3, H2) | 0, J2 = (J2 + Math.imul(S3, D2) | 0) + Math.imul(_3, H2) | 0, W2 = W2 + Math.imul(_3, D2) | 0, T2 = T2 + Math.imul(y3, K2) | 0, J2 = (J2 + Math.imul(y3, V2) | 0) + Math.imul(M3, K2) | 0, W2 = W2 + Math.imul(M3, V2) | 0, T2 = T2 + Math.imul(m8, U2) | 0, J2 = (J2 + Math.imul(m8, Y2) | 0) + Math.imul(v3, U2) | 0, W2 = W2 + Math.imul(v3, Y2) | 0, T2 = T2 + Math.imul(b3, Q2) | 0, J2 = (J2 + Math.imul(b3, $2) | 0) + Math.imul(l3, Q2) | 0, W2 = W2 + Math.imul(l3, $2) | 0, T2 = T2 + Math.imul(h3, c3) | 0, J2 = (J2 + Math.imul(h3, u3) | 0) + Math.imul(o3, c3) | 0, W2 = W2 + Math.imul(o3, u3) | 0;
              e4 = (ee + (T2 + Math.imul(a3, g3) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, w3) | 0) + Math.imul(s3, g3) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, w3) | 0) + (J2 >>> 13) | 0) + (e4 >>> 26) | 0, e4 &= 67108863, T2 = Math.imul(P2, O2), J2 = Math.imul(P2, F2) + Math.imul(j2, O2) | 0, W2 = Math.imul(j2, F2), T2 = T2 + Math.imul(q2, C2) | 0, J2 = (J2 + Math.imul(q2, Z2) | 0) + Math.imul(R2, C2) | 0, W2 = W2 + Math.imul(R2, Z2) | 0, T2 = T2 + Math.imul(x2, H2) | 0, J2 = (J2 + Math.imul(x2, D2) | 0) + Math.imul(I2, H2) | 0, W2 = W2 + Math.imul(I2, D2) | 0, T2 = T2 + Math.imul(S3, K2) | 0, J2 = (J2 + Math.imul(S3, V2) | 0) + Math.imul(_3, K2) | 0, W2 = W2 + Math.imul(_3, V2) | 0, T2 = T2 + Math.imul(y3, U2) | 0, J2 = (J2 + Math.imul(y3, Y2) | 0) + Math.imul(M3, U2) | 0, W2 = W2 + Math.imul(M3, Y2) | 0, T2 = T2 + Math.imul(m8, Q2) | 0, J2 = (J2 + Math.imul(m8, $2) | 0) + Math.imul(v3, Q2) | 0, W2 = W2 + Math.imul(v3, $2) | 0, T2 = T2 + Math.imul(b3, c3) | 0, J2 = (J2 + Math.imul(b3, u3) | 0) + Math.imul(l3, c3) | 0, W2 = W2 + Math.imul(l3, u3) | 0, T2 = T2 + Math.imul(h3, g3) | 0, J2 = (J2 + Math.imul(h3, w3) | 0) + Math.imul(o3, g3) | 0, W2 = W2 + Math.imul(o3, w3) | 0;
              t4 = (ee + (T2 + Math.imul(a3, z2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, k2) | 0) + Math.imul(s3, z2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, k2) | 0) + (J2 >>> 13) | 0) + (t4 >>> 26) | 0, t4 &= 67108863, T2 = Math.imul(E2, O2), J2 = Math.imul(E2, F2) + Math.imul(B2, O2) | 0, W2 = Math.imul(B2, F2), T2 = T2 + Math.imul(P2, C2) | 0, J2 = (J2 + Math.imul(P2, Z2) | 0) + Math.imul(j2, C2) | 0, W2 = W2 + Math.imul(j2, Z2) | 0, T2 = T2 + Math.imul(q2, H2) | 0, J2 = (J2 + Math.imul(q2, D2) | 0) + Math.imul(R2, H2) | 0, W2 = W2 + Math.imul(R2, D2) | 0, T2 = T2 + Math.imul(x2, K2) | 0, J2 = (J2 + Math.imul(x2, V2) | 0) + Math.imul(I2, K2) | 0, W2 = W2 + Math.imul(I2, V2) | 0, T2 = T2 + Math.imul(S3, U2) | 0, J2 = (J2 + Math.imul(S3, Y2) | 0) + Math.imul(_3, U2) | 0, W2 = W2 + Math.imul(_3, Y2) | 0, T2 = T2 + Math.imul(y3, Q2) | 0, J2 = (J2 + Math.imul(y3, $2) | 0) + Math.imul(M3, Q2) | 0, W2 = W2 + Math.imul(M3, $2) | 0, T2 = T2 + Math.imul(m8, c3) | 0, J2 = (J2 + Math.imul(m8, u3) | 0) + Math.imul(v3, c3) | 0, W2 = W2 + Math.imul(v3, u3) | 0, T2 = T2 + Math.imul(b3, g3) | 0, J2 = (J2 + Math.imul(b3, w3) | 0) + Math.imul(l3, g3) | 0, W2 = W2 + Math.imul(l3, w3) | 0, T2 = T2 + Math.imul(h3, z2) | 0, J2 = (J2 + Math.imul(h3, k2) | 0) + Math.imul(o3, z2) | 0, W2 = W2 + Math.imul(o3, k2) | 0;
              a3 = (ee + (T2 + Math.imul(a3, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(a3, L2) | 0) + Math.imul(s3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(s3, L2) | 0) + (J2 >>> 13) | 0) + (a3 >>> 26) | 0, a3 &= 67108863, T2 = Math.imul(E2, C2), J2 = Math.imul(E2, Z2) + Math.imul(B2, C2) | 0, W2 = Math.imul(B2, Z2), T2 = T2 + Math.imul(P2, H2) | 0, J2 = (J2 + Math.imul(P2, D2) | 0) + Math.imul(j2, H2) | 0, W2 = W2 + Math.imul(j2, D2) | 0, T2 = T2 + Math.imul(q2, K2) | 0, J2 = (J2 + Math.imul(q2, V2) | 0) + Math.imul(R2, K2) | 0, W2 = W2 + Math.imul(R2, V2) | 0, T2 = T2 + Math.imul(x2, U2) | 0, J2 = (J2 + Math.imul(x2, Y2) | 0) + Math.imul(I2, U2) | 0, W2 = W2 + Math.imul(I2, Y2) | 0, T2 = T2 + Math.imul(S3, Q2) | 0, J2 = (J2 + Math.imul(S3, $2) | 0) + Math.imul(_3, Q2) | 0, W2 = W2 + Math.imul(_3, $2) | 0, T2 = T2 + Math.imul(y3, c3) | 0, J2 = (J2 + Math.imul(y3, u3) | 0) + Math.imul(M3, c3) | 0, W2 = W2 + Math.imul(M3, u3) | 0, T2 = T2 + Math.imul(m8, g3) | 0, J2 = (J2 + Math.imul(m8, w3) | 0) + Math.imul(v3, g3) | 0, W2 = W2 + Math.imul(v3, w3) | 0, T2 = T2 + Math.imul(b3, z2) | 0, J2 = (J2 + Math.imul(b3, k2) | 0) + Math.imul(l3, z2) | 0, W2 = W2 + Math.imul(l3, k2) | 0;
              h3 = (ee + (T2 + Math.imul(h3, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(h3, L2) | 0) + Math.imul(o3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(o3, L2) | 0) + (J2 >>> 13) | 0) + (h3 >>> 26) | 0, h3 &= 67108863, T2 = Math.imul(E2, H2), J2 = Math.imul(E2, D2) + Math.imul(B2, H2) | 0, W2 = Math.imul(B2, D2), T2 = T2 + Math.imul(P2, K2) | 0, J2 = (J2 + Math.imul(P2, V2) | 0) + Math.imul(j2, K2) | 0, W2 = W2 + Math.imul(j2, V2) | 0, T2 = T2 + Math.imul(q2, U2) | 0, J2 = (J2 + Math.imul(q2, Y2) | 0) + Math.imul(R2, U2) | 0, W2 = W2 + Math.imul(R2, Y2) | 0, T2 = T2 + Math.imul(x2, Q2) | 0, J2 = (J2 + Math.imul(x2, $2) | 0) + Math.imul(I2, Q2) | 0, W2 = W2 + Math.imul(I2, $2) | 0, T2 = T2 + Math.imul(S3, c3) | 0, J2 = (J2 + Math.imul(S3, u3) | 0) + Math.imul(_3, c3) | 0, W2 = W2 + Math.imul(_3, u3) | 0, T2 = T2 + Math.imul(y3, g3) | 0, J2 = (J2 + Math.imul(y3, w3) | 0) + Math.imul(M3, g3) | 0, W2 = W2 + Math.imul(M3, w3) | 0, T2 = T2 + Math.imul(m8, z2) | 0, J2 = (J2 + Math.imul(m8, k2) | 0) + Math.imul(v3, z2) | 0, W2 = W2 + Math.imul(v3, k2) | 0;
              b3 = (ee + (T2 + Math.imul(b3, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(b3, L2) | 0) + Math.imul(l3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(l3, L2) | 0) + (J2 >>> 13) | 0) + (b3 >>> 26) | 0, b3 &= 67108863, T2 = Math.imul(E2, K2), J2 = Math.imul(E2, V2) + Math.imul(B2, K2) | 0, W2 = Math.imul(B2, V2), T2 = T2 + Math.imul(P2, U2) | 0, J2 = (J2 + Math.imul(P2, Y2) | 0) + Math.imul(j2, U2) | 0, W2 = W2 + Math.imul(j2, Y2) | 0, T2 = T2 + Math.imul(q2, Q2) | 0, J2 = (J2 + Math.imul(q2, $2) | 0) + Math.imul(R2, Q2) | 0, W2 = W2 + Math.imul(R2, $2) | 0, T2 = T2 + Math.imul(x2, c3) | 0, J2 = (J2 + Math.imul(x2, u3) | 0) + Math.imul(I2, c3) | 0, W2 = W2 + Math.imul(I2, u3) | 0, T2 = T2 + Math.imul(S3, g3) | 0, J2 = (J2 + Math.imul(S3, w3) | 0) + Math.imul(_3, g3) | 0, W2 = W2 + Math.imul(_3, w3) | 0, T2 = T2 + Math.imul(y3, z2) | 0, J2 = (J2 + Math.imul(y3, k2) | 0) + Math.imul(M3, z2) | 0, W2 = W2 + Math.imul(M3, k2) | 0;
              m8 = (ee + (T2 + Math.imul(m8, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(m8, L2) | 0) + Math.imul(v3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(v3, L2) | 0) + (J2 >>> 13) | 0) + (m8 >>> 26) | 0, m8 &= 67108863, T2 = Math.imul(E2, U2), J2 = Math.imul(E2, Y2) + Math.imul(B2, U2) | 0, W2 = Math.imul(B2, Y2), T2 = T2 + Math.imul(P2, Q2) | 0, J2 = (J2 + Math.imul(P2, $2) | 0) + Math.imul(j2, Q2) | 0, W2 = W2 + Math.imul(j2, $2) | 0, T2 = T2 + Math.imul(q2, c3) | 0, J2 = (J2 + Math.imul(q2, u3) | 0) + Math.imul(R2, c3) | 0, W2 = W2 + Math.imul(R2, u3) | 0, T2 = T2 + Math.imul(x2, g3) | 0, J2 = (J2 + Math.imul(x2, w3) | 0) + Math.imul(I2, g3) | 0, W2 = W2 + Math.imul(I2, w3) | 0, T2 = T2 + Math.imul(S3, z2) | 0, J2 = (J2 + Math.imul(S3, k2) | 0) + Math.imul(_3, z2) | 0, W2 = W2 + Math.imul(_3, k2) | 0;
              y3 = (ee + (T2 + Math.imul(y3, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(y3, L2) | 0) + Math.imul(M3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(M3, L2) | 0) + (J2 >>> 13) | 0) + (y3 >>> 26) | 0, y3 &= 67108863, T2 = Math.imul(E2, Q2), J2 = Math.imul(E2, $2) + Math.imul(B2, Q2) | 0, W2 = Math.imul(B2, $2), T2 = T2 + Math.imul(P2, c3) | 0, J2 = (J2 + Math.imul(P2, u3) | 0) + Math.imul(j2, c3) | 0, W2 = W2 + Math.imul(j2, u3) | 0, T2 = T2 + Math.imul(q2, g3) | 0, J2 = (J2 + Math.imul(q2, w3) | 0) + Math.imul(R2, g3) | 0, W2 = W2 + Math.imul(R2, w3) | 0, T2 = T2 + Math.imul(x2, z2) | 0, J2 = (J2 + Math.imul(x2, k2) | 0) + Math.imul(I2, z2) | 0, W2 = W2 + Math.imul(I2, k2) | 0;
              S3 = (ee + (T2 + Math.imul(S3, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(S3, L2) | 0) + Math.imul(_3, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(_3, L2) | 0) + (J2 >>> 13) | 0) + (S3 >>> 26) | 0, S3 &= 67108863, T2 = Math.imul(E2, c3), J2 = Math.imul(E2, u3) + Math.imul(B2, c3) | 0, W2 = Math.imul(B2, u3), T2 = T2 + Math.imul(P2, g3) | 0, J2 = (J2 + Math.imul(P2, w3) | 0) + Math.imul(j2, g3) | 0, W2 = W2 + Math.imul(j2, w3) | 0, T2 = T2 + Math.imul(q2, z2) | 0, J2 = (J2 + Math.imul(q2, k2) | 0) + Math.imul(R2, z2) | 0, W2 = W2 + Math.imul(R2, k2) | 0;
              x2 = (ee + (T2 + Math.imul(x2, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(x2, L2) | 0) + Math.imul(I2, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(I2, L2) | 0) + (J2 >>> 13) | 0) + (x2 >>> 26) | 0, x2 &= 67108863, T2 = Math.imul(E2, g3), J2 = Math.imul(E2, w3) + Math.imul(B2, g3) | 0, W2 = Math.imul(B2, w3), T2 = T2 + Math.imul(P2, z2) | 0, J2 = (J2 + Math.imul(P2, k2) | 0) + Math.imul(j2, z2) | 0, W2 = W2 + Math.imul(j2, k2) | 0;
              q2 = (ee + (T2 + Math.imul(q2, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(q2, L2) | 0) + Math.imul(R2, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(R2, L2) | 0) + (J2 >>> 13) | 0) + (q2 >>> 26) | 0, q2 &= 67108863, T2 = Math.imul(E2, z2), J2 = Math.imul(E2, k2) + Math.imul(B2, z2) | 0, W2 = Math.imul(B2, k2);
              P2 = (ee + (T2 + Math.imul(P2, N2) | 0) | 0) + ((8191 & (J2 = (J2 + Math.imul(P2, L2) | 0) + Math.imul(j2, N2) | 0)) << 13) | 0;
              ee = ((W2 + Math.imul(j2, L2) | 0) + (J2 >>> 13) | 0) + (P2 >>> 26) | 0, P2 &= 67108863;
              N2 = (ee + Math.imul(E2, N2) | 0) + ((8191 & (J2 = Math.imul(E2, L2) + Math.imul(B2, N2) | 0)) << 13) | 0;
              return ee = (Math.imul(B2, L2) + (J2 >>> 13) | 0) + (N2 >>> 26) | 0, N2 &= 67108863, d3[0] = X2, d3[1] = G2, d3[2] = n3, d3[3] = p3, d3[4] = A2, d3[5] = f3, d3[6] = r3, d3[7] = e4, d3[8] = t4, d3[9] = a3, d3[10] = h3, d3[11] = b3, d3[12] = m8, d3[13] = y3, d3[14] = S3, d3[15] = x2, d3[16] = q2, d3[17] = P2, d3[18] = N2, 0 != ee && (d3[19] = ee, i3.length++), i3;
            };
            function a2(e4, t4, i3) {
              return new s2().mulp(e4, t4, i3);
            }
            function s2(e4, t4) {
              this.x = e4, this.y = t4;
            }
            Math.imul || (d2 = f2), m7.prototype.mulTo = function(e4, t4) {
              var i3 = this.length + e4.length, t4 = (10 === this.length && 10 === e4.length ? d2 : i3 < 63 ? f2 : i3 < 1024 ? function(e5, t5, i4) {
                i4.negative = t5.negative ^ e5.negative, i4.length = e5.length + t5.length;
                for (var r3 = 0, f3 = 0, d3 = 0; d3 < i4.length - 1; d3++) {
                  for (var n3 = f3, f3 = 0, a3 = 67108863 & r3, s3 = Math.min(d3, t5.length - 1), c3 = Math.max(0, d3 - e5.length + 1); c3 <= s3; c3++) {
                    var h3 = d3 - c3, o3 = (0 | e5.words[h3]) * (0 | t5.words[c3]), h3 = 67108863 & o3, a3 = 67108863 & (h3 = h3 + a3 | 0);
                    f3 += (n3 = (n3 = n3 + (o3 / 67108864 | 0) | 0) + (h3 >>> 26) | 0) >>> 26, n3 &= 67108863;
                  }
                  i4.words[d3] = a3, r3 = n3, n3 = f3;
                }
                return 0 !== r3 ? i4.words[d3] = r3 : i4.length--, i4.strip();
              } : a2)(this, e4, t4);
              return t4;
            }, s2.prototype.makeRBT = function(e4) {
              for (var t4 = new Array(e4), i3 = m7.prototype._countBits(e4) - 1, r3 = 0; r3 < e4; r3++)
                t4[r3] = this.revBin(r3, i3, e4);
              return t4;
            }, s2.prototype.revBin = function(e4, t4, i3) {
              if (0 === e4 || e4 === i3 - 1)
                return e4;
              for (var r3 = 0, f3 = 0; f3 < t4; f3++)
                r3 |= (1 & e4) << t4 - f3 - 1, e4 >>= 1;
              return r3;
            }, s2.prototype.permute = function(e4, t4, i3, r3, f3, d3) {
              for (var n3 = 0; n3 < d3; n3++)
                r3[n3] = t4[e4[n3]], f3[n3] = i3[e4[n3]];
            }, s2.prototype.transform = function(e4, t4, i3, r3, f3, d3) {
              this.permute(d3, e4, t4, i3, r3, f3);
              for (var n3 = 1; n3 < f3; n3 <<= 1)
                for (var a3 = n3 << 1, s3 = Math.cos(2 * Math.PI / a3), c3 = Math.sin(2 * Math.PI / a3), h3 = 0; h3 < f3; h3 += a3)
                  for (var o3 = s3, u3 = c3, b3 = 0; b3 < n3; b3++) {
                    var l3 = i3[h3 + b3], p3 = r3[h3 + b3], m8 = o3 * (g3 = i3[h3 + b3 + n3]) - u3 * (v3 = r3[h3 + b3 + n3]), v3 = o3 * v3 + u3 * g3, g3 = m8;
                    i3[h3 + b3] = l3 + g3, r3[h3 + b3] = p3 + v3, i3[h3 + b3 + n3] = l3 - g3, r3[h3 + b3 + n3] = p3 - v3, b3 !== a3 && (m8 = s3 * o3 - c3 * u3, u3 = s3 * u3 + c3 * o3, o3 = m8);
                  }
            }, s2.prototype.guessLen13b = function(e4, t4) {
              for (var e4 = 1 & (r3 = 1 | Math.max(t4, e4)), i3 = 0, r3 = r3 / 2 | 0; r3; r3 >>>= 1)
                i3++;
              return 1 << i3 + 1 + e4;
            }, s2.prototype.conjugate = function(e4, t4, i3) {
              if (!(i3 <= 1))
                for (var r3 = 0; r3 < i3 / 2; r3++) {
                  var f3 = e4[r3];
                  e4[r3] = e4[i3 - r3 - 1], e4[i3 - r3 - 1] = f3, f3 = t4[r3], t4[r3] = -t4[i3 - r3 - 1], t4[i3 - r3 - 1] = -f3;
                }
            }, s2.prototype.normalize13b = function(e4, t4) {
              for (var i3 = 0, r3 = 0; r3 < t4 / 2; r3++) {
                var f3 = 8192 * Math.round(e4[2 * r3 + 1] / t4) + Math.round(e4[2 * r3] / t4) + i3;
                e4[r3] = 67108863 & f3, i3 = f3 < 67108864 ? 0 : f3 / 67108864 | 0;
              }
              return e4;
            }, s2.prototype.convert13b = function(e4, t4, i3, r3) {
              for (var f3 = 0, d3 = 0; d3 < t4; d3++)
                f3 += 0 | e4[d3], i3[2 * d3] = 8191 & f3, f3 >>>= 13, i3[2 * d3 + 1] = 8191 & f3, f3 >>>= 13;
              for (d3 = 2 * t4; d3 < r3; ++d3)
                i3[d3] = 0;
              p2(0 === f3), p2(0 == (-8192 & f3));
            }, s2.prototype.stub = function(e4) {
              for (var t4 = new Array(e4), i3 = 0; i3 < e4; i3++)
                t4[i3] = 0;
              return t4;
            }, s2.prototype.mulp = function(e4, t4, i3) {
              var r3 = 2 * this.guessLen13b(e4.length, t4.length), f3 = this.makeRBT(r3), d3 = this.stub(r3), n3 = new Array(r3), a3 = new Array(r3), s3 = new Array(r3), c3 = new Array(r3), h3 = new Array(r3), o3 = new Array(r3), u3 = i3.words;
              u3.length = r3, this.convert13b(e4.words, e4.length, n3, r3), this.convert13b(t4.words, t4.length, c3, r3), this.transform(n3, d3, a3, s3, r3, f3), this.transform(c3, d3, h3, o3, r3, f3);
              for (var b3 = 0; b3 < r3; b3++) {
                var l3 = a3[b3] * h3[b3] - s3[b3] * o3[b3];
                s3[b3] = a3[b3] * o3[b3] + s3[b3] * h3[b3], a3[b3] = l3;
              }
              return this.conjugate(a3, s3, r3), this.transform(a3, s3, u3, d3, r3, f3), this.conjugate(u3, d3, r3), this.normalize13b(u3, r3), i3.negative = e4.negative ^ t4.negative, i3.length = e4.length + t4.length, i3.strip();
            }, m7.prototype.mul = function(e4) {
              var t4 = new m7(null);
              return t4.words = new Array(this.length + e4.length), this.mulTo(e4, t4);
            }, m7.prototype.mulf = function(e4) {
              var t4 = new m7(null);
              return t4.words = new Array(this.length + e4.length), a2(this, e4, t4);
            }, m7.prototype.imul = function(e4) {
              return this.clone().mulTo(e4, this);
            }, m7.prototype.imuln = function(e4) {
              p2("number" == typeof e4), p2(e4 < 67108864);
              for (var t4 = 0, i3 = 0; i3 < this.length; i3++) {
                var r3 = (0 | this.words[i3]) * e4, f3 = (67108863 & r3) + (67108863 & t4);
                t4 >>= 26, t4 += r3 / 67108864 | 0, t4 += f3 >>> 26, this.words[i3] = 67108863 & f3;
              }
              return 0 !== t4 && (this.words[i3] = t4, this.length++), this;
            }, m7.prototype.muln = function(e4) {
              return this.clone().imuln(e4);
            }, m7.prototype.sqr = function() {
              return this.mul(this);
            }, m7.prototype.isqr = function() {
              return this.imul(this.clone());
            }, m7.prototype.pow = function(e4) {
              var t4 = function(e5) {
                for (var t5 = new Array(e5.bitLength()), i4 = 0; i4 < t5.length; i4++) {
                  var r4 = i4 / 26 | 0, f4 = i4 % 26;
                  t5[i4] = (e5.words[r4] & 1 << f4) >>> f4;
                }
                return t5;
              }(e4);
              if (0 === t4.length)
                return new m7(1);
              for (var i3 = this, r3 = 0; r3 < t4.length && 0 === t4[r3]; r3++, i3 = i3.sqr())
                ;
              if (++r3 < t4.length)
                for (var f3 = i3.sqr(); r3 < t4.length; r3++, f3 = f3.sqr())
                  0 !== t4[r3] && (i3 = i3.mul(f3));
              return i3;
            }, m7.prototype.iushln = function(e4) {
              p2("number" == typeof e4 && 0 <= e4);
              var t4 = e4 % 26, i3 = (e4 - t4) / 26, r3 = 67108863 >>> 26 - t4 << 26 - t4;
              if (0 != t4) {
                for (var f3 = 0, d3 = 0; d3 < this.length; d3++) {
                  var n3 = this.words[d3] & r3, a3 = (0 | this.words[d3]) - n3 << t4;
                  this.words[d3] = a3 | f3, f3 = n3 >>> 26 - t4;
                }
                f3 && (this.words[d3] = f3, this.length++);
              }
              if (0 != i3) {
                for (d3 = this.length - 1; 0 <= d3; d3--)
                  this.words[d3 + i3] = this.words[d3];
                for (d3 = 0; d3 < i3; d3++)
                  this.words[d3] = 0;
                this.length += i3;
              }
              return this.strip();
            }, m7.prototype.ishln = function(e4) {
              return p2(0 === this.negative), this.iushln(e4);
            }, m7.prototype.iushrn = function(e4, t4, i3) {
              var r3;
              p2("number" == typeof e4 && 0 <= e4), r3 = t4 ? (t4 - t4 % 26) / 26 : 0;
              var f3 = e4 % 26, d3 = Math.min((e4 - f3) / 26, this.length), n3 = 67108863 ^ 67108863 >>> f3 << f3, a3 = i3;
              if (r3 -= d3, r3 = Math.max(0, r3), a3) {
                for (var s3 = 0; s3 < d3; s3++)
                  a3.words[s3] = this.words[s3];
                a3.length = d3;
              }
              if (0 !== d3)
                if (this.length > d3)
                  for (this.length -= d3, s3 = 0; s3 < this.length; s3++)
                    this.words[s3] = this.words[s3 + d3];
                else
                  this.words[0] = 0, this.length = 1;
              for (var c3 = 0, s3 = this.length - 1; 0 <= s3 && (0 !== c3 || r3 <= s3); s3--) {
                var h3 = 0 | this.words[s3];
                this.words[s3] = c3 << 26 - f3 | h3 >>> f3, c3 = h3 & n3;
              }
              return a3 && 0 !== c3 && (a3.words[a3.length++] = c3), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
            }, m7.prototype.ishrn = function(e4, t4, i3) {
              return p2(0 === this.negative), this.iushrn(e4, t4, i3);
            }, m7.prototype.shln = function(e4) {
              return this.clone().ishln(e4);
            }, m7.prototype.ushln = function(e4) {
              return this.clone().iushln(e4);
            }, m7.prototype.shrn = function(e4) {
              return this.clone().ishrn(e4);
            }, m7.prototype.ushrn = function(e4) {
              return this.clone().iushrn(e4);
            }, m7.prototype.testn = function(e4) {
              p2("number" == typeof e4 && 0 <= e4);
              var t4 = e4 % 26, e4 = (e4 - t4) / 26, t4 = 1 << t4;
              return !(this.length <= e4) && !!(this.words[e4] & t4);
            }, m7.prototype.imaskn = function(e4) {
              p2("number" == typeof e4 && 0 <= e4);
              var t4 = e4 % 26, e4 = (e4 - t4) / 26;
              return p2(0 === this.negative, "imaskn works only with positive numbers"), this.length <= e4 ? this : (0 != t4 && e4++, this.length = Math.min(e4, this.length), 0 != t4 && (t4 = 67108863 ^ 67108863 >>> t4 << t4, this.words[this.length - 1] &= t4), this.strip());
            }, m7.prototype.maskn = function(e4) {
              return this.clone().imaskn(e4);
            }, m7.prototype.iaddn = function(e4) {
              return p2("number" == typeof e4), p2(e4 < 67108864), e4 < 0 ? this.isubn(-e4) : 0 !== this.negative ? (1 === this.length && (0 | this.words[0]) < e4 ? (this.words[0] = e4 - (0 | this.words[0]), this.negative = 0) : (this.negative = 0, this.isubn(e4), this.negative = 1), this) : this._iaddn(e4);
            }, m7.prototype._iaddn = function(e4) {
              this.words[0] += e4;
              for (var t4 = 0; t4 < this.length && 67108864 <= this.words[t4]; t4++)
                this.words[t4] -= 67108864, t4 === this.length - 1 ? this.words[t4 + 1] = 1 : this.words[t4 + 1]++;
              return this.length = Math.max(this.length, t4 + 1), this;
            }, m7.prototype.isubn = function(e4) {
              if (p2("number" == typeof e4), p2(e4 < 67108864), e4 < 0)
                return this.iaddn(-e4);
              if (0 !== this.negative)
                return this.negative = 0, this.iaddn(e4), this.negative = 1, this;
              if (this.words[0] -= e4, 1 === this.length && this.words[0] < 0)
                this.words[0] = -this.words[0], this.negative = 1;
              else
                for (var t4 = 0; t4 < this.length && this.words[t4] < 0; t4++)
                  this.words[t4] += 67108864, --this.words[t4 + 1];
              return this.strip();
            }, m7.prototype.addn = function(e4) {
              return this.clone().iaddn(e4);
            }, m7.prototype.subn = function(e4) {
              return this.clone().isubn(e4);
            }, m7.prototype.iabs = function() {
              return this.negative = 0, this;
            }, m7.prototype.abs = function() {
              return this.clone().iabs();
            }, m7.prototype._ishlnsubmul = function(e4, t4, i3) {
              var r3, f3 = e4.length + i3;
              this._expand(f3);
              for (var d3 = 0, n3 = 0; n3 < e4.length; n3++) {
                r3 = (0 | this.words[n3 + i3]) + d3;
                var a3 = (0 | e4.words[n3]) * t4, d3 = ((r3 -= 67108863 & a3) >> 26) - (a3 / 67108864 | 0);
                this.words[n3 + i3] = 67108863 & r3;
              }
              for (; n3 < this.length - i3; n3++)
                d3 = (r3 = (0 | this.words[n3 + i3]) + d3) >> 26, this.words[n3 + i3] = 67108863 & r3;
              if (0 === d3)
                return this.strip();
              for (p2(-1 === d3), n3 = d3 = 0; n3 < this.length; n3++)
                d3 = (r3 = -(0 | this.words[n3]) + d3) >> 26, this.words[n3] = 67108863 & r3;
              return this.negative = 1, this.strip();
            }, m7.prototype._wordDiv = function(e4, t4) {
              var i3 = this.length - e4.length, r3 = this.clone(), f3 = e4, d3 = 0 | f3.words[f3.length - 1];
              0 != (i3 = 26 - this._countBits(d3)) && (f3 = f3.ushln(i3), r3.iushln(i3), d3 = 0 | f3.words[f3.length - 1]);
              var n3, a3 = r3.length - f3.length;
              if ("mod" !== t4) {
                (n3 = new m7(null)).length = 1 + a3, n3.words = new Array(n3.length);
                for (var s3 = 0; s3 < n3.length; s3++)
                  n3.words[s3] = 0;
              }
              e4 = r3.clone()._ishlnsubmul(f3, 1, a3);
              0 === e4.negative && (r3 = e4, n3 && (n3.words[a3] = 1));
              for (var c3 = a3 - 1; 0 <= c3; c3--) {
                var h3 = 67108864 * (0 | r3.words[f3.length + c3]) + (0 | r3.words[f3.length + c3 - 1]), h3 = Math.min(h3 / d3 | 0, 67108863);
                for (r3._ishlnsubmul(f3, h3, c3); 0 !== r3.negative; )
                  h3--, r3.negative = 0, r3._ishlnsubmul(f3, 1, c3), r3.isZero() || (r3.negative ^= 1);
                n3 && (n3.words[c3] = h3);
              }
              return n3 && n3.strip(), r3.strip(), "div" !== t4 && 0 != i3 && r3.iushrn(i3), { div: n3 || null, mod: r3 };
            }, m7.prototype.divmod = function(e4, t4, i3) {
              return p2(!e4.isZero()), this.isZero() ? { div: new m7(0), mod: new m7(0) } : 0 !== this.negative && 0 === e4.negative ? (d3 = this.neg().divmod(e4, t4), "mod" !== t4 && (r3 = d3.div.neg()), "div" !== t4 && (f3 = d3.mod.neg(), i3 && 0 !== f3.negative && f3.iadd(e4)), { div: r3, mod: f3 }) : 0 === this.negative && 0 !== e4.negative ? (d3 = this.divmod(e4.neg(), t4), { div: r3 = "mod" !== t4 ? d3.div.neg() : r3, mod: d3.mod }) : 0 != (this.negative & e4.negative) ? (d3 = this.neg().divmod(e4.neg(), t4), "div" !== t4 && (f3 = d3.mod.neg(), i3 && 0 !== f3.negative && f3.isub(e4)), { div: d3.div, mod: f3 }) : e4.length > this.length || this.cmp(e4) < 0 ? { div: new m7(0), mod: this } : 1 === e4.length ? "div" === t4 ? { div: this.divn(e4.words[0]), mod: null } : "mod" === t4 ? { div: null, mod: new m7(this.modn(e4.words[0])) } : { div: this.divn(e4.words[0]), mod: new m7(this.modn(e4.words[0])) } : this._wordDiv(e4, t4);
              var r3, f3, d3;
            }, m7.prototype.div = function(e4) {
              return this.divmod(e4, "div", false).div;
            }, m7.prototype.mod = function(e4) {
              return this.divmod(e4, "mod", false).mod;
            }, m7.prototype.umod = function(e4) {
              return this.divmod(e4, "mod", true).mod;
            }, m7.prototype.divRound = function(e4) {
              var t4 = this.divmod(e4);
              if (t4.mod.isZero())
                return t4.div;
              var i3 = 0 !== t4.div.negative ? t4.mod.isub(e4) : t4.mod, r3 = e4.ushrn(1), e4 = e4.andln(1), r3 = i3.cmp(r3);
              return r3 < 0 || 1 === e4 && 0 === r3 ? t4.div : 0 !== t4.div.negative ? t4.div.isubn(1) : t4.div.iaddn(1);
            }, m7.prototype.modn = function(e4) {
              p2(e4 <= 67108863);
              for (var t4 = (1 << 26) % e4, i3 = 0, r3 = this.length - 1; 0 <= r3; r3--)
                i3 = (t4 * i3 + (0 | this.words[r3])) % e4;
              return i3;
            }, m7.prototype.idivn = function(e4) {
              p2(e4 <= 67108863);
              for (var t4 = 0, i3 = this.length - 1; 0 <= i3; i3--) {
                var r3 = (0 | this.words[i3]) + 67108864 * t4;
                this.words[i3] = r3 / e4 | 0, t4 = r3 % e4;
              }
              return this.strip();
            }, m7.prototype.divn = function(e4) {
              return this.clone().idivn(e4);
            }, m7.prototype.egcd = function(e4) {
              p2(0 === e4.negative), p2(!e4.isZero());
              for (var t4 = this, i3 = e4.clone(), t4 = 0 !== t4.negative ? t4.umod(e4) : t4.clone(), r3 = new m7(1), f3 = new m7(0), d3 = new m7(0), n3 = new m7(1), a3 = 0; t4.isEven() && i3.isEven(); )
                t4.iushrn(1), i3.iushrn(1), ++a3;
              for (var s3 = i3.clone(), c3 = t4.clone(); !t4.isZero(); ) {
                for (var h3 = 0, o3 = 1; 0 == (t4.words[0] & o3) && h3 < 26; ++h3, o3 <<= 1)
                  ;
                if (0 < h3)
                  for (t4.iushrn(h3); 0 < h3--; )
                    (r3.isOdd() || f3.isOdd()) && (r3.iadd(s3), f3.isub(c3)), r3.iushrn(1), f3.iushrn(1);
                for (var u3 = 0, b3 = 1; 0 == (i3.words[0] & b3) && u3 < 26; ++u3, b3 <<= 1)
                  ;
                if (0 < u3)
                  for (i3.iushrn(u3); 0 < u3--; )
                    (d3.isOdd() || n3.isOdd()) && (d3.iadd(s3), n3.isub(c3)), d3.iushrn(1), n3.iushrn(1);
                0 <= t4.cmp(i3) ? (t4.isub(i3), r3.isub(d3), f3.isub(n3)) : (i3.isub(t4), d3.isub(r3), n3.isub(f3));
              }
              return { a: d3, b: n3, gcd: i3.iushln(a3) };
            }, m7.prototype._invmp = function(e4) {
              p2(0 === e4.negative), p2(!e4.isZero());
              for (var t4, i3 = this, r3 = e4.clone(), i3 = 0 !== i3.negative ? i3.umod(e4) : i3.clone(), f3 = new m7(1), d3 = new m7(0), n3 = r3.clone(); 0 < i3.cmpn(1) && 0 < r3.cmpn(1); ) {
                for (var a3 = 0, s3 = 1; 0 == (i3.words[0] & s3) && a3 < 26; ++a3, s3 <<= 1)
                  ;
                if (0 < a3)
                  for (i3.iushrn(a3); 0 < a3--; )
                    f3.isOdd() && f3.iadd(n3), f3.iushrn(1);
                for (var c3 = 0, h3 = 1; 0 == (r3.words[0] & h3) && c3 < 26; ++c3, h3 <<= 1)
                  ;
                if (0 < c3)
                  for (r3.iushrn(c3); 0 < c3--; )
                    d3.isOdd() && d3.iadd(n3), d3.iushrn(1);
                0 <= i3.cmp(r3) ? (i3.isub(r3), f3.isub(d3)) : (r3.isub(i3), d3.isub(f3));
              }
              return (t4 = 0 === i3.cmpn(1) ? f3 : d3).cmpn(0) < 0 && t4.iadd(e4), t4;
            }, m7.prototype.gcd = function(e4) {
              if (this.isZero())
                return e4.abs();
              if (e4.isZero())
                return this.abs();
              var t4 = this.clone(), i3 = e4.clone();
              t4.negative = 0;
              for (var r3 = i3.negative = 0; t4.isEven() && i3.isEven(); r3++)
                t4.iushrn(1), i3.iushrn(1);
              for (; ; ) {
                for (; t4.isEven(); )
                  t4.iushrn(1);
                for (; i3.isEven(); )
                  i3.iushrn(1);
                var f3 = t4.cmp(i3);
                if (f3 < 0)
                  var d3 = t4, t4 = i3, i3 = d3;
                else if (0 === f3 || 0 === i3.cmpn(1))
                  break;
                t4.isub(i3);
              }
              return i3.iushln(r3);
            }, m7.prototype.invm = function(e4) {
              return this.egcd(e4).a.umod(e4);
            }, m7.prototype.isEven = function() {
              return 0 == (1 & this.words[0]);
            }, m7.prototype.isOdd = function() {
              return 1 == (1 & this.words[0]);
            }, m7.prototype.andln = function(e4) {
              return this.words[0] & e4;
            }, m7.prototype.bincn = function(e4) {
              p2("number" == typeof e4);
              var t4 = e4 % 26, e4 = (e4 - t4) / 26, t4 = 1 << t4;
              if (this.length <= e4)
                return this._expand(1 + e4), this.words[e4] |= t4, this;
              for (var i3 = t4, r3 = e4; 0 !== i3 && r3 < this.length; r3++) {
                var f3 = 0 | this.words[r3], i3 = (f3 += i3) >>> 26;
                f3 &= 67108863, this.words[r3] = f3;
              }
              return 0 !== i3 && (this.words[r3] = i3, this.length++), this;
            }, m7.prototype.isZero = function() {
              return 1 === this.length && 0 === this.words[0];
            }, m7.prototype.cmpn = function(e4) {
              var t4 = e4 < 0;
              return 0 === this.negative || t4 ? 0 === this.negative && t4 ? 1 : (this.strip(), e4 = 1 < this.length ? 1 : (p2((e4 = t4 ? -e4 : e4) <= 67108863, "Number is too big"), (t4 = 0 | this.words[0]) === e4 ? 0 : t4 < e4 ? -1 : 1), 0 !== this.negative ? 0 | -e4 : e4) : -1;
            }, m7.prototype.cmp = function(e4) {
              if (0 !== this.negative && 0 === e4.negative)
                return -1;
              if (0 === this.negative && 0 !== e4.negative)
                return 1;
              e4 = this.ucmp(e4);
              return 0 !== this.negative ? 0 | -e4 : e4;
            }, m7.prototype.ucmp = function(e4) {
              if (this.length > e4.length)
                return 1;
              if (this.length < e4.length)
                return -1;
              for (var t4 = 0, i3 = this.length - 1; 0 <= i3; i3--) {
                var r3 = 0 | this.words[i3], f3 = 0 | e4.words[i3];
                if (r3 != f3) {
                  r3 < f3 ? t4 = -1 : f3 < r3 && (t4 = 1);
                  break;
                }
              }
              return t4;
            }, m7.prototype.gtn = function(e4) {
              return 1 === this.cmpn(e4);
            }, m7.prototype.gt = function(e4) {
              return 1 === this.cmp(e4);
            }, m7.prototype.gten = function(e4) {
              return 0 <= this.cmpn(e4);
            }, m7.prototype.gte = function(e4) {
              return 0 <= this.cmp(e4);
            }, m7.prototype.ltn = function(e4) {
              return -1 === this.cmpn(e4);
            }, m7.prototype.lt = function(e4) {
              return -1 === this.cmp(e4);
            }, m7.prototype.lten = function(e4) {
              return this.cmpn(e4) <= 0;
            }, m7.prototype.lte = function(e4) {
              return this.cmp(e4) <= 0;
            }, m7.prototype.eqn = function(e4) {
              return 0 === this.cmpn(e4);
            }, m7.prototype.eq = function(e4) {
              return 0 === this.cmp(e4);
            }, m7.red = function(e4) {
              return new w2(e4);
            }, m7.prototype.toRed = function(e4) {
              return p2(!this.red, "Already a number in reduction context"), p2(0 === this.negative, "red works only with positives"), e4.convertTo(this)._forceRed(e4);
            }, m7.prototype.fromRed = function() {
              return p2(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
            }, m7.prototype._forceRed = function(e4) {
              return this.red = e4, this;
            }, m7.prototype.forceRed = function(e4) {
              return p2(!this.red, "Already a number in reduction context"), this._forceRed(e4);
            }, m7.prototype.redAdd = function(e4) {
              return p2(this.red, "redAdd works only with red numbers"), this.red.add(this, e4);
            }, m7.prototype.redIAdd = function(e4) {
              return p2(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e4);
            }, m7.prototype.redSub = function(e4) {
              return p2(this.red, "redSub works only with red numbers"), this.red.sub(this, e4);
            }, m7.prototype.redISub = function(e4) {
              return p2(this.red, "redISub works only with red numbers"), this.red.isub(this, e4);
            }, m7.prototype.redShl = function(e4) {
              return p2(this.red, "redShl works only with red numbers"), this.red.shl(this, e4);
            }, m7.prototype.redMul = function(e4) {
              return p2(this.red, "redMul works only with red numbers"), this.red._verify2(this, e4), this.red.mul(this, e4);
            }, m7.prototype.redIMul = function(e4) {
              return p2(this.red, "redMul works only with red numbers"), this.red._verify2(this, e4), this.red.imul(this, e4);
            }, m7.prototype.redSqr = function() {
              return p2(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
            }, m7.prototype.redISqr = function() {
              return p2(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
            }, m7.prototype.redSqrt = function() {
              return p2(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
            }, m7.prototype.redInvm = function() {
              return p2(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
            }, m7.prototype.redNeg = function() {
              return p2(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
            }, m7.prototype.redPow = function(e4) {
              return p2(this.red && !e4.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e4);
            };
            var c2 = { k256: null, p224: null, p192: null, p25519: null };
            function h2(e4, t4) {
              this.name = e4, this.p = new m7(t4, 16), this.n = this.p.bitLength(), this.k = new m7(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
            }
            function v2() {
              h2.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
            }
            function g2() {
              h2.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
            }
            function y2() {
              h2.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
            }
            function M2() {
              h2.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
            }
            function w2(e4) {
              var t4;
              "string" == typeof e4 ? (t4 = m7._prime(e4), this.m = t4.p, this.prime = t4) : (p2(e4.gtn(1), "modulus must be greater than 1"), this.m = e4, this.prime = null);
            }
            function S2(e4) {
              w2.call(this, e4), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new m7(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
            }
            h2.prototype._tmp = function() {
              var e4 = new m7(null);
              return e4.words = new Array(Math.ceil(this.n / 13)), e4;
            }, h2.prototype.ireduce = function(e4) {
              for (var t4, i3 = e4; this.split(i3, this.tmp), t4 = (i3 = (i3 = this.imulK(i3)).iadd(this.tmp)).bitLength(), t4 > this.n; )
                ;
              e4 = t4 < this.n ? -1 : i3.ucmp(this.p);
              return 0 === e4 ? (i3.words[0] = 0, i3.length = 1) : 0 < e4 ? i3.isub(this.p) : void 0 !== i3.strip ? i3.strip() : i3._strip(), i3;
            }, h2.prototype.split = function(e4, t4) {
              e4.iushrn(this.n, 0, t4);
            }, h2.prototype.imulK = function(e4) {
              return e4.imul(this.k);
            }, i2(v2, h2), v2.prototype.split = function(e4, t4) {
              for (var i3 = Math.min(e4.length, 9), r3 = 0; r3 < i3; r3++)
                t4.words[r3] = e4.words[r3];
              if (t4.length = i3, e4.length <= 9)
                return e4.words[0] = 0, void (e4.length = 1);
              var f3 = e4.words[9];
              for (t4.words[t4.length++] = 4194303 & f3, r3 = 10; r3 < e4.length; r3++) {
                var d3 = 0 | e4.words[r3];
                e4.words[r3 - 10] = (4194303 & d3) << 4 | f3 >>> 22, f3 = d3;
              }
              f3 >>>= 22, 0 === (e4.words[r3 - 10] = f3) && 10 < e4.length ? e4.length -= 10 : e4.length -= 9;
            }, v2.prototype.imulK = function(e4) {
              e4.words[e4.length] = 0, e4.words[e4.length + 1] = 0, e4.length += 2;
              for (var t4 = 0, i3 = 0; i3 < e4.length; i3++) {
                var r3 = 0 | e4.words[i3];
                t4 += 977 * r3, e4.words[i3] = 67108863 & t4, t4 = 64 * r3 + (t4 / 67108864 | 0);
              }
              return 0 === e4.words[e4.length - 1] && (e4.length--, 0 === e4.words[e4.length - 1] && e4.length--), e4;
            }, i2(g2, h2), i2(y2, h2), i2(M2, h2), M2.prototype.imulK = function(e4) {
              for (var t4 = 0, i3 = 0; i3 < e4.length; i3++) {
                var r3 = 19 * (0 | e4.words[i3]) + t4, f3 = 67108863 & r3;
                r3 >>>= 26, e4.words[i3] = f3, t4 = r3;
              }
              return 0 !== t4 && (e4.words[e4.length++] = t4), e4;
            }, m7._prime = function(e4) {
              if (c2[e4])
                return c2[e4];
              var t4;
              if ("k256" === e4)
                t4 = new v2();
              else if ("p224" === e4)
                t4 = new g2();
              else if ("p192" === e4)
                t4 = new y2();
              else {
                if ("p25519" !== e4)
                  throw new Error("Unknown prime " + e4);
                t4 = new M2();
              }
              return c2[e4] = t4;
            }, w2.prototype._verify1 = function(e4) {
              p2(0 === e4.negative, "red works only with positives"), p2(e4.red, "red works only with red numbers");
            }, w2.prototype._verify2 = function(e4, t4) {
              p2(0 == (e4.negative | t4.negative), "red works only with positives"), p2(e4.red && e4.red === t4.red, "red works only with red numbers");
            }, w2.prototype.imod = function(e4) {
              return (this.prime ? this.prime.ireduce(e4) : e4.umod(this.m))._forceRed(this);
            }, w2.prototype.neg = function(e4) {
              return e4.isZero() ? e4.clone() : this.m.sub(e4)._forceRed(this);
            }, w2.prototype.add = function(e4, t4) {
              this._verify2(e4, t4);
              t4 = e4.add(t4);
              return 0 <= t4.cmp(this.m) && t4.isub(this.m), t4._forceRed(this);
            }, w2.prototype.iadd = function(e4, t4) {
              this._verify2(e4, t4);
              t4 = e4.iadd(t4);
              return 0 <= t4.cmp(this.m) && t4.isub(this.m), t4;
            }, w2.prototype.sub = function(e4, t4) {
              this._verify2(e4, t4);
              t4 = e4.sub(t4);
              return t4.cmpn(0) < 0 && t4.iadd(this.m), t4._forceRed(this);
            }, w2.prototype.isub = function(e4, t4) {
              this._verify2(e4, t4);
              t4 = e4.isub(t4);
              return t4.cmpn(0) < 0 && t4.iadd(this.m), t4;
            }, w2.prototype.shl = function(e4, t4) {
              return this._verify1(e4), this.imod(e4.ushln(t4));
            }, w2.prototype.imul = function(e4, t4) {
              return this._verify2(e4, t4), this.imod(e4.imul(t4));
            }, w2.prototype.mul = function(e4, t4) {
              return this._verify2(e4, t4), this.imod(e4.mul(t4));
            }, w2.prototype.isqr = function(e4) {
              return this.imul(e4, e4.clone());
            }, w2.prototype.sqr = function(e4) {
              return this.mul(e4, e4);
            }, w2.prototype.sqrt = function(e4) {
              if (e4.isZero())
                return e4.clone();
              var t4 = this.m.andln(3);
              if (p2(t4 % 2 == 1), 3 === t4) {
                t4 = this.m.add(new m7(1)).iushrn(2);
                return this.pow(e4, t4);
              }
              for (var i3 = this.m.subn(1), r3 = 0; !i3.isZero() && 0 === i3.andln(1); )
                r3++, i3.iushrn(1);
              p2(!i3.isZero());
              for (var f3 = new m7(1).toRed(this), d3 = f3.redNeg(), n3 = this.m.subn(1).iushrn(1), a3 = new m7(2 * (a3 = this.m.bitLength()) * a3).toRed(this); 0 !== this.pow(a3, n3).cmp(d3); )
                a3.redIAdd(d3);
              for (var s3 = this.pow(a3, i3), c3 = this.pow(e4, i3.addn(1).iushrn(1)), h3 = this.pow(e4, i3), o3 = r3; 0 !== h3.cmp(f3); ) {
                for (var u3 = h3, b3 = 0; 0 !== u3.cmp(f3); b3++)
                  u3 = u3.redSqr();
                p2(b3 < o3);
                var l3 = this.pow(s3, new m7(1).iushln(o3 - b3 - 1)), c3 = c3.redMul(l3), s3 = l3.redSqr(), h3 = h3.redMul(s3), o3 = b3;
              }
              return c3;
            }, w2.prototype.invm = function(e4) {
              e4 = e4._invmp(this.m);
              return 0 !== e4.negative ? (e4.negative = 0, this.imod(e4).redNeg()) : this.imod(e4);
            }, w2.prototype.pow = function(e4, t4) {
              if (t4.isZero())
                return new m7(1).toRed(this);
              if (0 === t4.cmpn(1))
                return e4.clone();
              var i3 = new Array(16);
              i3[0] = new m7(1).toRed(this), i3[1] = e4;
              for (var r3 = 2; r3 < i3.length; r3++)
                i3[r3] = this.mul(i3[r3 - 1], e4);
              var f3 = i3[0], d3 = 0, n3 = 0, a3 = t4.bitLength() % 26;
              for (0 === a3 && (a3 = 26), r3 = t4.length - 1; 0 <= r3; r3--) {
                for (var s3 = t4.words[r3], c3 = a3 - 1; 0 <= c3; c3--) {
                  var h3 = s3 >> c3 & 1;
                  f3 !== i3[0] && (f3 = this.sqr(f3)), 0 != h3 || 0 !== d3 ? (d3 <<= 1, d3 |= h3, (4 === ++n3 || 0 === r3 && 0 === c3) && (f3 = this.mul(f3, i3[d3]), d3 = n3 = 0)) : n3 = 0;
                }
                a3 = 26;
              }
              return f3;
            }, w2.prototype.convertTo = function(e4) {
              var t4 = e4.umod(this.m);
              return t4 === e4 ? t4.clone() : t4;
            }, w2.prototype.convertFrom = function(e4) {
              e4 = e4.clone();
              return e4.red = null, e4;
            }, m7.mont = function(e4) {
              return new S2(e4);
            }, i2(S2, w2), S2.prototype.convertTo = function(e4) {
              return this.imod(e4.ushln(this.shift));
            }, S2.prototype.convertFrom = function(e4) {
              e4 = this.imod(e4.mul(this.rinv));
              return e4.red = null, e4;
            }, S2.prototype.imul = function(e4, t4) {
              if (e4.isZero() || t4.isZero())
                return e4.words[0] = 0, e4.length = 1, e4;
              e4 = e4.imul(t4), t4 = e4.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), e4 = e4.isub(t4).iushrn(this.shift), t4 = e4;
              return 0 <= e4.cmp(this.m) ? t4 = e4.isub(this.m) : e4.cmpn(0) < 0 && (t4 = e4.iadd(this.m)), t4._forceRed(this);
            }, S2.prototype.mul = function(e4, t4) {
              if (e4.isZero() || t4.isZero())
                return new m7(0)._forceRed(this);
              e4 = e4.mul(t4), t4 = e4.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), e4 = e4.isub(t4).iushrn(this.shift), t4 = e4;
              return 0 <= e4.cmp(this.m) ? t4 = e4.isub(this.m) : e4.cmpn(0) < 0 && (t4 = e4.iadd(this.m)), t4._forceRed(this);
            }, S2.prototype.invm = function(e4) {
              return this.imod(e4._invmp(this.m).mul(this.r2))._forceRed(this);
            };
          }(void 0 === e2 || e2, this);
        }, { buffer: 18 }], 17: [function(e2, t2, i2) {
          var r2;
          function f2(e3) {
            this.rand = e3;
          }
          if (t2.exports = function(e3) {
            return (r2 = r2 || new f2(null)).generate(e3);
          }, (t2.exports.Rand = f2).prototype.generate = function(e3) {
            return this._rand(e3);
          }, f2.prototype._rand = function(e3) {
            if (this.rand.getBytes)
              return this.rand.getBytes(e3);
            for (var t3 = new Uint8Array(e3), i3 = 0; i3 < t3.length; i3++)
              t3[i3] = this.rand.getByte();
            return t3;
          }, "object" == typeof self)
            self.crypto && self.crypto.getRandomValues ? f2.prototype._rand = function(e3) {
              e3 = new Uint8Array(e3);
              return self.crypto.getRandomValues(e3), e3;
            } : self.msCrypto && self.msCrypto.getRandomValues ? f2.prototype._rand = function(e3) {
              e3 = new Uint8Array(e3);
              return self.msCrypto.getRandomValues(e3), e3;
            } : "object" == typeof window && (f2.prototype._rand = function() {
              throw new Error("Not implemented yet");
            });
          else
            try {
              var d2 = e2("crypto");
              if ("function" != typeof d2.randomBytes)
                throw new Error("Not supported");
              f2.prototype._rand = function(e3) {
                return d2.randomBytes(e3);
              };
            } catch (e3) {
            }
        }, { crypto: 18 }], 18: [function(e2, t2, i2) {
        }, {}], 19: [function(e2, t2, i2) {
          i2.utils = e2("./hash/utils"), i2.common = e2("./hash/common"), i2.sha = e2("./hash/sha"), i2.ripemd = e2("./hash/ripemd"), i2.hmac = e2("./hash/hmac"), i2.sha1 = i2.sha.sha1, i2.sha256 = i2.sha.sha256, i2.sha224 = i2.sha.sha224, i2.sha384 = i2.sha.sha384, i2.sha512 = i2.sha.sha512, i2.ripemd160 = i2.ripemd.ripemd160;
        }, { "./hash/common": 20, "./hash/hmac": 21, "./hash/ripemd": 22, "./hash/sha": 23, "./hash/utils": 30 }], 20: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("./utils"), f2 = e2("minimalistic-assert");
          function d2() {
            this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
          }
          (i2.BlockHash = d2).prototype.update = function(e3, t3) {
            if (e3 = r2.toArray(e3, t3), this.pending ? this.pending = this.pending.concat(e3) : this.pending = e3, this.pendingTotal += e3.length, this.pending.length >= this._delta8) {
              t3 = (e3 = this.pending).length % this._delta8;
              this.pending = e3.slice(e3.length - t3, e3.length), 0 === this.pending.length && (this.pending = null), e3 = r2.join32(e3, 0, e3.length - t3, this.endian);
              for (var i3 = 0; i3 < e3.length; i3 += this._delta32)
                this._update(e3, i3, i3 + this._delta32);
            }
            return this;
          }, d2.prototype.digest = function(e3) {
            return this.update(this._pad()), f2(null === this.pending), this._digest(e3);
          }, d2.prototype._pad = function() {
            var e3 = this.pendingTotal, t3 = this._delta8, i3 = t3 - (e3 + this.padLength) % t3, r3 = new Array(i3 + this.padLength);
            r3[0] = 128;
            for (var f3 = 1; f3 < i3; f3++)
              r3[f3] = 0;
            if (e3 <<= 3, "big" === this.endian) {
              for (var d3 = 8; d3 < this.padLength; d3++)
                r3[f3++] = 0;
              r3[f3++] = 0, r3[f3++] = 0, r3[f3++] = 0, r3[f3++] = 0, r3[f3++] = e3 >>> 24 & 255, r3[f3++] = e3 >>> 16 & 255, r3[f3++] = e3 >>> 8 & 255, r3[f3++] = 255 & e3;
            } else
              for (r3[f3++] = 255 & e3, r3[f3++] = e3 >>> 8 & 255, r3[f3++] = e3 >>> 16 & 255, r3[f3++] = e3 >>> 24 & 255, r3[f3++] = 0, r3[f3++] = 0, r3[f3++] = 0, r3[f3++] = 0, d3 = 8; d3 < this.padLength; d3++)
                r3[f3++] = 0;
            return r3;
          };
        }, { "./utils": 30, "minimalistic-assert": 33 }], 21: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("./utils"), f2 = e2("minimalistic-assert");
          function d2(e3, t3, i3) {
            if (!(this instanceof d2))
              return new d2(e3, t3, i3);
            this.Hash = e3, this.blockSize = e3.blockSize / 8, this.outSize = e3.outSize / 8, this.inner = null, this.outer = null, this._init(r2.toArray(t3, i3));
          }
          (t2.exports = d2).prototype._init = function(e3) {
            e3.length > this.blockSize && (e3 = new this.Hash().update(e3).digest()), f2(e3.length <= this.blockSize);
            for (var t3 = e3.length; t3 < this.blockSize; t3++)
              e3.push(0);
            for (t3 = 0; t3 < e3.length; t3++)
              e3[t3] ^= 54;
            for (this.inner = new this.Hash().update(e3), t3 = 0; t3 < e3.length; t3++)
              e3[t3] ^= 106;
            this.outer = new this.Hash().update(e3);
          }, d2.prototype.update = function(e3, t3) {
            return this.inner.update(e3, t3), this;
          }, d2.prototype.digest = function(e3) {
            return this.outer.update(this.inner.digest()), this.outer.digest(e3);
          };
        }, { "./utils": 30, "minimalistic-assert": 33 }], 22: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("./utils"), e2 = e2("./common"), p2 = r2.rotl32, m7 = r2.sum32, v2 = r2.sum32_3, g2 = r2.sum32_4, f2 = e2.BlockHash;
          function d2() {
            if (!(this instanceof d2))
              return new d2();
            f2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little";
          }
          function y2(e3, t3, i3, r3) {
            return e3 <= 15 ? t3 ^ i3 ^ r3 : e3 <= 31 ? t3 & i3 | ~t3 & r3 : e3 <= 47 ? (t3 | ~i3) ^ r3 : e3 <= 63 ? t3 & r3 | i3 & ~r3 : t3 ^ (i3 | ~r3);
          }
          r2.inherits(d2, f2), (i2.ripemd160 = d2).blockSize = 512, d2.outSize = 160, d2.hmacStrength = 192, d2.padLength = 64, d2.prototype._update = function(e3, t3) {
            for (var i3, r3 = h2 = this.h[0], f3 = l2 = this.h[1], d3 = b2 = this.h[2], n2 = u2 = this.h[3], a2 = o2 = this.h[4], s2 = 0; s2 < 80; s2++)
              var c2 = m7(p2(g2(h2, y2(s2, l2, b2, u2), e3[M2[s2] + t3], (i3 = s2) <= 15 ? 0 : i3 <= 31 ? 1518500249 : i3 <= 47 ? 1859775393 : i3 <= 63 ? 2400959708 : 2840853838), S2[s2]), o2), h2 = o2, o2 = u2, u2 = p2(b2, 10), b2 = l2, l2 = c2, c2 = m7(p2(g2(r3, y2(79 - s2, f3, d3, n2), e3[w2[s2] + t3], (i3 = s2) <= 15 ? 1352829926 : i3 <= 31 ? 1548603684 : i3 <= 47 ? 1836072691 : i3 <= 63 ? 2053994217 : 0), _2[s2]), a2), r3 = a2, a2 = n2, n2 = p2(d3, 10), d3 = f3, f3 = c2;
            c2 = v2(this.h[1], b2, n2), this.h[1] = v2(this.h[2], u2, a2), this.h[2] = v2(this.h[3], o2, r3), this.h[3] = v2(this.h[4], h2, f3), this.h[4] = v2(this.h[0], l2, d3), this.h[0] = c2;
          }, d2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h, "little") : r2.split32(this.h, "little");
          };
          var M2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13], w2 = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11], S2 = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6], _2 = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
        }, { "./common": 20, "./utils": 30 }], 23: [function(e2, t2, i2) {
          "use strict";
          i2.sha1 = e2("./sha/1"), i2.sha224 = e2("./sha/224"), i2.sha256 = e2("./sha/256"), i2.sha384 = e2("./sha/384"), i2.sha512 = e2("./sha/512");
        }, { "./sha/1": 24, "./sha/224": 25, "./sha/256": 26, "./sha/384": 27, "./sha/512": 28 }], 24: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = e2("../common"), e2 = e2("./common"), h2 = r2.rotl32, o2 = r2.sum32, u2 = r2.sum32_5, b2 = e2.ft_1, d2 = f2.BlockHash, l2 = [1518500249, 1859775393, 2400959708, 3395469782];
          function n2() {
            if (!(this instanceof n2))
              return new n2();
            d2.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80);
          }
          r2.inherits(n2, d2), (t2.exports = n2).blockSize = 512, n2.outSize = 160, n2.hmacStrength = 80, n2.padLength = 64, n2.prototype._update = function(e3, t3) {
            for (var i3 = this.W, r3 = 0; r3 < 16; r3++)
              i3[r3] = e3[t3 + r3];
            for (; r3 < i3.length; r3++)
              i3[r3] = h2(i3[r3 - 3] ^ i3[r3 - 8] ^ i3[r3 - 14] ^ i3[r3 - 16], 1);
            for (var f3 = this.h[0], d3 = this.h[1], n3 = this.h[2], a2 = this.h[3], s2 = this.h[4], r3 = 0; r3 < i3.length; r3++)
              var c2 = ~~(r3 / 20), c2 = u2(h2(f3, 5), b2(c2, d3, n3, a2), s2, i3[r3], l2[c2]), s2 = a2, a2 = n3, n3 = h2(d3, 30), d3 = f3, f3 = c2;
            this.h[0] = o2(this.h[0], f3), this.h[1] = o2(this.h[1], d3), this.h[2] = o2(this.h[2], n3), this.h[3] = o2(this.h[3], a2), this.h[4] = o2(this.h[4], s2);
          }, n2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h, "big") : r2.split32(this.h, "big");
          };
        }, { "../common": 20, "../utils": 30, "./common": 29 }], 25: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = e2("./256");
          function d2() {
            if (!(this instanceof d2))
              return new d2();
            f2.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
          }
          r2.inherits(d2, f2), (t2.exports = d2).blockSize = 512, d2.outSize = 224, d2.hmacStrength = 192, d2.padLength = 64, d2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h.slice(0, 7), "big") : r2.split32(this.h.slice(0, 7), "big");
          };
        }, { "../utils": 30, "./256": 26 }], 26: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = e2("../common"), d2 = e2("./common"), l2 = e2("minimalistic-assert"), p2 = r2.sum32, m7 = r2.sum32_4, v2 = r2.sum32_5, g2 = d2.ch32, y2 = d2.maj32, M2 = d2.s0_256, w2 = d2.s1_256, S2 = d2.g0_256, _2 = d2.g1_256, n2 = f2.BlockHash, a2 = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
          function s2() {
            if (!(this instanceof s2))
              return new s2();
            n2.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = a2, this.W = new Array(64);
          }
          r2.inherits(s2, n2), (t2.exports = s2).blockSize = 512, s2.outSize = 256, s2.hmacStrength = 192, s2.padLength = 64, s2.prototype._update = function(e3, t3) {
            for (var i3 = this.W, r3 = 0; r3 < 16; r3++)
              i3[r3] = e3[t3 + r3];
            for (; r3 < i3.length; r3++)
              i3[r3] = m7(_2(i3[r3 - 2]), i3[r3 - 7], S2(i3[r3 - 15]), i3[r3 - 16]);
            var f3 = this.h[0], d3 = this.h[1], n3 = this.h[2], a3 = this.h[3], s3 = this.h[4], c2 = this.h[5], h2 = this.h[6], o2 = this.h[7];
            for (l2(this.k.length === i3.length), r3 = 0; r3 < i3.length; r3++)
              var u2 = v2(o2, w2(s3), g2(s3, c2, h2), this.k[r3], i3[r3]), b2 = p2(M2(f3), y2(f3, d3, n3)), o2 = h2, h2 = c2, c2 = s3, s3 = p2(a3, u2), a3 = n3, n3 = d3, d3 = f3, f3 = p2(u2, b2);
            this.h[0] = p2(this.h[0], f3), this.h[1] = p2(this.h[1], d3), this.h[2] = p2(this.h[2], n3), this.h[3] = p2(this.h[3], a3), this.h[4] = p2(this.h[4], s3), this.h[5] = p2(this.h[5], c2), this.h[6] = p2(this.h[6], h2), this.h[7] = p2(this.h[7], o2);
          }, s2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h, "big") : r2.split32(this.h, "big");
          };
        }, { "../common": 20, "../utils": 30, "./common": 29, "minimalistic-assert": 33 }], 27: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = e2("./512");
          function d2() {
            if (!(this instanceof d2))
              return new d2();
            f2.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
          }
          r2.inherits(d2, f2), (t2.exports = d2).blockSize = 1024, d2.outSize = 384, d2.hmacStrength = 192, d2.padLength = 128, d2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h.slice(0, 12), "big") : r2.split32(this.h.slice(0, 12), "big");
          };
        }, { "../utils": 30, "./512": 28 }], 28: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils"), f2 = e2("../common"), P2 = e2("minimalistic-assert"), j2 = r2.rotr64_hi, N2 = r2.rotr64_lo, u2 = r2.shr64_hi, b2 = r2.shr64_lo, E2 = r2.sum64, B2 = r2.sum64_hi, L2 = r2.sum64_lo, l2 = r2.sum64_4_hi, p2 = r2.sum64_4_lo, O2 = r2.sum64_5_hi, F2 = r2.sum64_5_lo, d2 = f2.BlockHash, n2 = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
          function a2() {
            if (!(this instanceof a2))
              return new a2();
            d2.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = n2, this.W = new Array(160);
          }
          r2.inherits(a2, d2), (t2.exports = a2).blockSize = 1024, a2.outSize = 512, a2.hmacStrength = 192, a2.padLength = 128, a2.prototype._prepareBlock = function(e3, t3) {
            for (var i3 = this.W, r3 = 0; r3 < 32; r3++)
              i3[r3] = e3[t3 + r3];
            for (; r3 < i3.length; r3 += 2) {
              var f3 = function(e4, t4) {
                var i4 = j2(e4, t4, 19), r4 = j2(t4, e4, 29), t4 = u2(e4, t4, 6), t4 = i4 ^ r4 ^ t4;
                t4 < 0 && (t4 += 4294967296);
                return t4;
              }(i3[r3 - 4], i3[r3 - 3]), d3 = function(e4, t4) {
                var i4 = N2(e4, t4, 19), r4 = N2(t4, e4, 29), t4 = b2(e4, t4, 6), t4 = i4 ^ r4 ^ t4;
                t4 < 0 && (t4 += 4294967296);
                return t4;
              }(i3[r3 - 4], i3[r3 - 3]), n3 = i3[r3 - 14], a3 = i3[r3 - 13], s2 = function(e4, t4) {
                var i4 = j2(e4, t4, 1), r4 = j2(e4, t4, 8), t4 = u2(e4, t4, 7), t4 = i4 ^ r4 ^ t4;
                t4 < 0 && (t4 += 4294967296);
                return t4;
              }(i3[r3 - 30], i3[r3 - 29]), c2 = function(e4, t4) {
                var i4 = N2(e4, t4, 1), r4 = N2(e4, t4, 8), t4 = b2(e4, t4, 7), t4 = i4 ^ r4 ^ t4;
                t4 < 0 && (t4 += 4294967296);
                return t4;
              }(i3[r3 - 30], i3[r3 - 29]), h2 = i3[r3 - 32], o2 = i3[r3 - 31];
              i3[r3] = l2(f3, d3, n3, a3, s2, c2, h2, o2), i3[r3 + 1] = p2(f3, d3, n3, a3, s2, c2, h2, o2);
            }
          }, a2.prototype._update = function(e3, t3) {
            this._prepareBlock(e3, t3);
            var i3 = this.W, r3 = this.h[0], f3 = this.h[1], d3 = this.h[2], n3 = this.h[3], a3 = this.h[4], s2 = this.h[5], c2 = this.h[6], h2 = this.h[7], o2 = this.h[8], u3 = this.h[9], b3 = this.h[10], l3 = this.h[11], p3 = this.h[12], m7 = this.h[13], v2 = this.h[14], g2 = this.h[15];
            P2(this.k.length === i3.length);
            for (var y2 = 0; y2 < i3.length; y2 += 2)
              var M2 = v2, w2 = g2, S2 = function(e4, t4) {
                var i4 = j2(e4, t4, 14), r4 = j2(e4, t4, 18), e4 = j2(t4, e4, 9), e4 = i4 ^ r4 ^ e4;
                e4 < 0 && (e4 += 4294967296);
                return e4;
              }(o2, u3), _2 = function(e4, t4) {
                var i4 = N2(e4, t4, 14), r4 = N2(e4, t4, 18), e4 = N2(t4, e4, 9), e4 = i4 ^ r4 ^ e4;
                e4 < 0 && (e4 += 4294967296);
                return e4;
              }(o2, u3), A2 = function(e4, t4, i4) {
                i4 = e4 & t4 ^ ~e4 & i4;
                i4 < 0 && (i4 += 4294967296);
                return i4;
              }(o2, b3, p3), x2 = function(e4, t4, i4) {
                i4 = e4 & t4 ^ ~e4 & i4;
                i4 < 0 && (i4 += 4294967296);
                return i4;
              }(u3, l3, m7), I2 = this.k[y2], z2 = this.k[y2 + 1], q2 = i3[y2], R2 = i3[y2 + 1], k2 = O2(M2, w2, S2, _2, A2, x2, I2, z2, q2, R2), q2 = F2(M2, w2, S2, _2, A2, x2, I2, z2, q2, R2), M2 = function(e4, t4) {
                var i4 = j2(e4, t4, 28), r4 = j2(t4, e4, 2), e4 = j2(t4, e4, 7), e4 = i4 ^ r4 ^ e4;
                e4 < 0 && (e4 += 4294967296);
                return e4;
              }(r3, f3), w2 = function(e4, t4) {
                var i4 = N2(e4, t4, 28), r4 = N2(t4, e4, 2), e4 = N2(t4, e4, 7), e4 = i4 ^ r4 ^ e4;
                e4 < 0 && (e4 += 4294967296);
                return e4;
              }(r3, f3), S2 = function(e4, t4, i4) {
                i4 = e4 & t4 ^ e4 & i4 ^ t4 & i4;
                i4 < 0 && (i4 += 4294967296);
                return i4;
              }(r3, d3, a3), _2 = function(e4, t4, i4) {
                i4 = e4 & t4 ^ e4 & i4 ^ t4 & i4;
                i4 < 0 && (i4 += 4294967296);
                return i4;
              }(f3, n3, s2), R2 = B2(M2, w2, S2, _2), _2 = L2(M2, w2, S2, _2), v2 = p3, g2 = m7, p3 = b3, m7 = l3, b3 = o2, l3 = u3, o2 = B2(c2, h2, k2, q2), u3 = L2(h2, h2, k2, q2), c2 = a3, h2 = s2, a3 = d3, s2 = n3, d3 = r3, n3 = f3, r3 = B2(k2, q2, R2, _2), f3 = L2(k2, q2, R2, _2);
            E2(this.h, 0, r3, f3), E2(this.h, 2, d3, n3), E2(this.h, 4, a3, s2), E2(this.h, 6, c2, h2), E2(this.h, 8, o2, u3), E2(this.h, 10, b3, l3), E2(this.h, 12, p3, m7), E2(this.h, 14, v2, g2);
          }, a2.prototype._digest = function(e3) {
            return "hex" === e3 ? r2.toHex32(this.h, "big") : r2.split32(this.h, "big");
          };
        }, { "../common": 20, "../utils": 30, "minimalistic-assert": 33 }], 29: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("../utils").rotr32;
          function f2(e3, t3, i3) {
            return e3 & t3 ^ ~e3 & i3;
          }
          function d2(e3, t3, i3) {
            return e3 & t3 ^ e3 & i3 ^ t3 & i3;
          }
          function n2(e3, t3, i3) {
            return e3 ^ t3 ^ i3;
          }
          i2.ft_1 = function(e3, t3, i3, r3) {
            return 0 === e3 ? f2(t3, i3, r3) : 1 === e3 || 3 === e3 ? t3 ^ i3 ^ r3 : 2 === e3 ? d2(t3, i3, r3) : void 0;
          }, i2.ch32 = f2, i2.maj32 = d2, i2.p32 = n2, i2.s0_256 = function(e3) {
            return r2(e3, 2) ^ r2(e3, 13) ^ r2(e3, 22);
          }, i2.s1_256 = function(e3) {
            return r2(e3, 6) ^ r2(e3, 11) ^ r2(e3, 25);
          }, i2.g0_256 = function(e3) {
            return r2(e3, 7) ^ r2(e3, 18) ^ e3 >>> 3;
          }, i2.g1_256 = function(e3) {
            return r2(e3, 17) ^ r2(e3, 19) ^ e3 >>> 10;
          };
        }, { "../utils": 30 }], 30: [function(e2, t2, i2) {
          "use strict";
          var s2 = e2("minimalistic-assert"), e2 = e2("inherits");
          function d2(e3) {
            return (e3 >>> 24 | e3 >>> 8 & 65280 | e3 << 8 & 16711680 | (255 & e3) << 24) >>> 0;
          }
          function r2(e3) {
            return 1 === e3.length ? "0" + e3 : e3;
          }
          function n2(e3) {
            return 7 === e3.length ? "0" + e3 : 6 === e3.length ? "00" + e3 : 5 === e3.length ? "000" + e3 : 4 === e3.length ? "0000" + e3 : 3 === e3.length ? "00000" + e3 : 2 === e3.length ? "000000" + e3 : 1 === e3.length ? "0000000" + e3 : e3;
          }
          i2.inherits = e2, i2.toArray = function(e3, t3) {
            if (Array.isArray(e3))
              return e3.slice();
            if (!e3)
              return [];
            var i3, r3, f2 = [];
            if ("string" == typeof e3)
              if (t3) {
                if ("hex" === t3)
                  for ((e3 = e3.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e3 = "0" + e3), n3 = 0; n3 < e3.length; n3 += 2)
                    f2.push(parseInt(e3[n3] + e3[n3 + 1], 16));
              } else
                for (var d3 = 0, n3 = 0; n3 < e3.length; n3++) {
                  var a2 = e3.charCodeAt(n3);
                  a2 < 128 ? f2[d3++] = a2 : a2 < 2048 ? (f2[d3++] = a2 >> 6 | 192, f2[d3++] = 63 & a2 | 128) : (r3 = n3, 55296 != (64512 & (i3 = e3).charCodeAt(r3)) || r3 < 0 || r3 + 1 >= i3.length || 56320 != (64512 & i3.charCodeAt(r3 + 1)) ? f2[d3++] = a2 >> 12 | 224 : (a2 = 65536 + ((1023 & a2) << 10) + (1023 & e3.charCodeAt(++n3)), f2[d3++] = a2 >> 18 | 240, f2[d3++] = a2 >> 12 & 63 | 128), f2[d3++] = a2 >> 6 & 63 | 128, f2[d3++] = 63 & a2 | 128);
                }
            else
              for (n3 = 0; n3 < e3.length; n3++)
                f2[n3] = 0 | e3[n3];
            return f2;
          }, i2.toHex = function(e3) {
            for (var t3 = "", i3 = 0; i3 < e3.length; i3++)
              t3 += r2(e3[i3].toString(16));
            return t3;
          }, i2.htonl = d2, i2.toHex32 = function(e3, t3) {
            for (var i3 = "", r3 = 0; r3 < e3.length; r3++) {
              var f2 = e3[r3];
              i3 += n2((f2 = "little" === t3 ? d2(f2) : f2).toString(16));
            }
            return i3;
          }, i2.zero2 = r2, i2.zero8 = n2, i2.join32 = function(e3, t3, i3, r3) {
            s2((i3 -= t3) % 4 == 0);
            for (var f2 = new Array(i3 / 4), d3 = 0, n3 = t3; d3 < f2.length; d3++, n3 += 4) {
              var a2 = "big" === r3 ? e3[n3] << 24 | e3[n3 + 1] << 16 | e3[n3 + 2] << 8 | e3[n3 + 3] : e3[n3 + 3] << 24 | e3[n3 + 2] << 16 | e3[n3 + 1] << 8 | e3[n3];
              f2[d3] = a2 >>> 0;
            }
            return f2;
          }, i2.split32 = function(e3, t3) {
            for (var i3 = new Array(4 * e3.length), r3 = 0, f2 = 0; r3 < e3.length; r3++, f2 += 4) {
              var d3 = e3[r3];
              "big" === t3 ? (i3[f2] = d3 >>> 24, i3[f2 + 1] = d3 >>> 16 & 255, i3[f2 + 2] = d3 >>> 8 & 255, i3[f2 + 3] = 255 & d3) : (i3[f2 + 3] = d3 >>> 24, i3[f2 + 2] = d3 >>> 16 & 255, i3[f2 + 1] = d3 >>> 8 & 255, i3[f2] = 255 & d3);
            }
            return i3;
          }, i2.rotr32 = function(e3, t3) {
            return e3 >>> t3 | e3 << 32 - t3;
          }, i2.rotl32 = function(e3, t3) {
            return e3 << t3 | e3 >>> 32 - t3;
          }, i2.sum32 = function(e3, t3) {
            return e3 + t3 >>> 0;
          }, i2.sum32_3 = function(e3, t3, i3) {
            return e3 + t3 + i3 >>> 0;
          }, i2.sum32_4 = function(e3, t3, i3, r3) {
            return e3 + t3 + i3 + r3 >>> 0;
          }, i2.sum32_5 = function(e3, t3, i3, r3, f2) {
            return e3 + t3 + i3 + r3 + f2 >>> 0;
          }, i2.sum64 = function(e3, t3, i3, r3) {
            var f2 = e3[t3], d3 = r3 + e3[t3 + 1] >>> 0, f2 = (d3 < r3 ? 1 : 0) + i3 + f2;
            e3[t3] = f2 >>> 0, e3[t3 + 1] = d3;
          }, i2.sum64_hi = function(e3, t3, i3, r3) {
            return (t3 + r3 >>> 0 < t3 ? 1 : 0) + e3 + i3 >>> 0;
          }, i2.sum64_lo = function(e3, t3, i3, r3) {
            return t3 + r3 >>> 0;
          }, i2.sum64_4_hi = function(e3, t3, i3, r3, f2, d3, n3, a2) {
            var s3 = 0, c2 = t3;
            return s3 += (c2 = c2 + r3 >>> 0) < t3 ? 1 : 0, s3 += (c2 = c2 + d3 >>> 0) < d3 ? 1 : 0, e3 + i3 + f2 + n3 + (s3 += (c2 = c2 + a2 >>> 0) < a2 ? 1 : 0) >>> 0;
          }, i2.sum64_4_lo = function(e3, t3, i3, r3, f2, d3, n3, a2) {
            return t3 + r3 + d3 + a2 >>> 0;
          }, i2.sum64_5_hi = function(e3, t3, i3, r3, f2, d3, n3, a2, s3, c2) {
            var h2 = 0, o2 = t3;
            return h2 += (o2 = o2 + r3 >>> 0) < t3 ? 1 : 0, h2 += (o2 = o2 + d3 >>> 0) < d3 ? 1 : 0, h2 += (o2 = o2 + a2 >>> 0) < a2 ? 1 : 0, e3 + i3 + f2 + n3 + s3 + (h2 += (o2 = o2 + c2 >>> 0) < c2 ? 1 : 0) >>> 0;
          }, i2.sum64_5_lo = function(e3, t3, i3, r3, f2, d3, n3, a2, s3, c2) {
            return t3 + r3 + d3 + a2 + c2 >>> 0;
          }, i2.rotr64_hi = function(e3, t3, i3) {
            return (t3 << 32 - i3 | e3 >>> i3) >>> 0;
          }, i2.rotr64_lo = function(e3, t3, i3) {
            return (e3 << 32 - i3 | t3 >>> i3) >>> 0;
          }, i2.shr64_hi = function(e3, t3, i3) {
            return e3 >>> i3;
          }, i2.shr64_lo = function(e3, t3, i3) {
            return (e3 << 32 - i3 | t3 >>> i3) >>> 0;
          };
        }, { inherits: 32, "minimalistic-assert": 33 }], 31: [function(e2, t2, i2) {
          "use strict";
          var r2 = e2("hash.js"), d2 = e2("minimalistic-crypto-utils"), f2 = e2("minimalistic-assert");
          function n2(e3) {
            if (!(this instanceof n2))
              return new n2(e3);
            this.hash = e3.hash, this.predResist = !!e3.predResist, this.outLen = this.hash.outSize, this.minEntropy = e3.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
            var t3 = d2.toArray(e3.entropy, e3.entropyEnc || "hex"), i3 = d2.toArray(e3.nonce, e3.nonceEnc || "hex"), e3 = d2.toArray(e3.pers, e3.persEnc || "hex");
            f2(t3.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t3, i3, e3);
          }
          (t2.exports = n2).prototype._init = function(e3, t3, i3) {
            i3 = e3.concat(t3).concat(i3);
            this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
            for (var r3 = 0; r3 < this.V.length; r3++)
              this.K[r3] = 0, this.V[r3] = 1;
            this._update(i3), this._reseed = 1, this.reseedInterval = 281474976710656;
          }, n2.prototype._hmac = function() {
            return new r2.hmac(this.hash, this.K);
          }, n2.prototype._update = function(e3) {
            var t3 = this._hmac().update(this.V).update([0]);
            e3 && (t3 = t3.update(e3)), this.K = t3.digest(), this.V = this._hmac().update(this.V).digest(), e3 && (this.K = this._hmac().update(this.V).update([1]).update(e3).digest(), this.V = this._hmac().update(this.V).digest());
          }, n2.prototype.reseed = function(e3, t3, i3, r3) {
            "string" != typeof t3 && (r3 = i3, i3 = t3, t3 = null), e3 = d2.toArray(e3, t3), i3 = d2.toArray(i3, r3), f2(e3.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e3.concat(i3 || [])), this._reseed = 1;
          }, n2.prototype.generate = function(e3, t3, i3, r3) {
            if (this._reseed > this.reseedInterval)
              throw new Error("Reseed is required");
            "string" != typeof t3 && (r3 = i3, i3 = t3, t3 = null), i3 && (i3 = d2.toArray(i3, r3 || "hex"), this._update(i3));
            for (var f3 = []; f3.length < e3; )
              this.V = this._hmac().update(this.V).digest(), f3 = f3.concat(this.V);
            r3 = f3.slice(0, e3);
            return this._update(i3), this._reseed++, d2.encode(r3, t3);
          };
        }, { "hash.js": 19, "minimalistic-assert": 33, "minimalistic-crypto-utils": 34 }], 32: [function(e2, t2, i2) {
          "function" == typeof Object.create ? t2.exports = function(e3, t3) {
            t3 && (e3.super_ = t3, e3.prototype = Object.create(t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }));
          } : t2.exports = function(e3, t3) {
            var i3;
            t3 && (e3.super_ = t3, (i3 = function() {
            }).prototype = t3.prototype, e3.prototype = new i3(), e3.prototype.constructor = e3);
          };
        }, {}], 33: [function(e2, t2, i2) {
          function r2(e3, t3) {
            if (!e3)
              throw new Error(t3 || "Assertion failed");
          }
          (t2.exports = r2).equal = function(e3, t3, i3) {
            if (e3 != t3)
              throw new Error(i3 || "Assertion failed: " + e3 + " != " + t3);
          };
        }, {}], 34: [function(e2, t2, i2) {
          "use strict";
          function r2(e3) {
            return 1 === e3.length ? "0" + e3 : e3;
          }
          function f2(e3) {
            for (var t3 = "", i3 = 0; i3 < e3.length; i3++)
              t3 += r2(e3[i3].toString(16));
            return t3;
          }
          i2.toArray = function(e3, t3) {
            if (Array.isArray(e3))
              return e3.slice();
            if (!e3)
              return [];
            var i3 = [];
            if ("string" != typeof e3) {
              for (var r3 = 0; r3 < e3.length; r3++)
                i3[r3] = 0 | e3[r3];
              return i3;
            }
            if ("hex" === t3) {
              (e3 = e3.replace(/[^a-z0-9]+/gi, "")).length % 2 != 0 && (e3 = "0" + e3);
              for (r3 = 0; r3 < e3.length; r3 += 2)
                i3.push(parseInt(e3[r3] + e3[r3 + 1], 16));
            } else
              for (r3 = 0; r3 < e3.length; r3++) {
                var f3 = e3.charCodeAt(r3), d2 = f3 >> 8, f3 = 255 & f3;
                d2 ? i3.push(d2, f3) : i3.push(f3);
              }
            return i3;
          }, i2.zero2 = r2, i2.toHex = f2, i2.encode = function(e3, t3) {
            return "hex" === t3 ? f2(e3) : e3;
          };
        }, {}], 35: [function(e2, t2, i2) {
          t2.exports = { name: "elliptic", version: "6.5.4", description: "EC cryptography", main: "lib/elliptic.js", files: ["lib"], scripts: { lint: "eslint lib test", "lint:fix": "npm run lint -- --fix", unit: "istanbul test _mocha --reporter=spec test/index.js", test: "npm run lint && npm run unit", version: "grunt dist && git add dist/" }, repository: { type: "git", url: "git@github.com:indutny/elliptic" }, keywords: ["EC", "Elliptic", "curve", "Cryptography"], author: "Fedor Indutny <fedor@indutny.com>", license: "MIT", bugs: { url: "https://github.com/indutny/elliptic/issues" }, homepage: "https://github.com/indutny/elliptic", devDependencies: { brfs: "^2.0.2", coveralls: "^3.1.0", eslint: "^7.6.0", grunt: "^1.2.1", "grunt-browserify": "^5.3.0", "grunt-cli": "^1.3.2", "grunt-contrib-connect": "^3.0.0", "grunt-contrib-copy": "^1.0.0", "grunt-contrib-uglify": "^5.0.0", "grunt-mocha-istanbul": "^5.0.2", "grunt-saucelabs": "^9.0.1", istanbul: "^0.4.5", mocha: "^8.0.1" }, dependencies: { "bn.js": "^4.11.9", brorand: "^1.1.0", "hash.js": "^1.0.0", "hmac-drbg": "^1.0.1", inherits: "^2.0.4", "minimalistic-assert": "^1.0.1", "minimalistic-crypto-utils": "^1.0.1" } };
        }, {}] }, {}, [1])(1);
      });
    }
  });

  // src/main.js
  var import_mithril_min5 = __toESM(require_mithril_min());

  // src/views/Login.js
  var import_mithril_min = __toESM(require_mithril_min());

  // src/lib/passcolor.js
  function getPasscolor(text256) {
    var c2 = document.createElement("canvas");
    c2.width = 4;
    c2.height = 4;
    var ctx = c2.getContext("2d");
    for (var i2 = 0; i2 < 4; i2++) {
      for (var j2 = 0; j2 < 4; j2++) {
        if (i2 * 4 + j2 < 10) {
          ctx.fillStyle = "#" + text256.substr((i2 * 4 + j2) * 6, 6);
          ctx.fillRect(j2, i2, 1, 1);
        } else {
          ctx.fillStyle = "#" + text256.substr(60 + j2, 1).repeat(6);
          ctx.fillRect(j2, i2, 1, 1);
        }
      }
    }
    return c2;
  }
  function readPasscolor(data, result) {
    var c2 = document.createElement("canvas");
    c2.width = 4;
    c2.height = 4;
    var ctx = c2.getContext("2d");
    var reader = new FileReader();
    reader.readAsDataURL(data);
    var text = "";
    reader.onload = (e2) => {
      var img = new Image();
      img.src = e2.target.result;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
        var colordata = ctx.getImageData(0, 0, 4, 4).data;
        for (var i2 = 0; i2 < 40; i2++)
          if ((i2 + 1) % 4 != 0)
            text += colordata[i2].toString(16).length == 2 ? colordata[i2].toString(16) : "0" + colordata[i2].toString(16);
        for (var i2 = 48; i2 < 64; i2 += 4)
          text += colordata[i2].toString(16)[0];
        result(text);
      };
    };
  }
  function downloadImg(canv) {
    var anchor = document.createElement("a");
    anchor.download = "passcolor";
    anchor.href = canv.toDataURL("image/png");
    anchor.click();
  }

  // src/views/Login.js
  var import_elliptic_min = __toESM(require_elliptic_min());
  function Login() {
    if (localStorage.getItem("priv"))
      import_mithril_min.default.route.set("/");
    const file = document.createElement("input");
    file.type = "file";
    const ec = new import_elliptic_min.ec("secp256k1");
    let warn = "";
    let disable = false;
    file.onchange = (e2) => readPasscolor(e2.target.files[0], (r2) => {
      const key = ec.keyFromPrivate(r2);
      const pub = key.getPublic(true, "hex");
      const time = Date.now();
      const signature = key.sign("s.auth-" + time).toDER("hex");
      const data = {
        pub,
        hash: signature,
        time
      };
      import_mithril_min.default.request({
        method: "post",
        url: "/api?login",
        body: data
      }).then((data2) => {
        if (data2) {
          localStorage.setItem("priv", r2);
          localStorage.setItem("pub", pub);
          import_mithril_min.default.route.set("/");
        } else {
          warn = "Passcode not valid";
          disable = false;
        }
      });
      disable = true;
    });
    return {
      view: () => (0, import_mithril_min.default)("div.card", [
        (0, import_mithril_min.default)("h1", "Login"),
        (0, import_mithril_min.default)("button.btn", {
          onclick: () => file.click(),
          disabled: disable
        }, "Upload private Key"),
        (0, import_mithril_min.default)("br"),
        (0, import_mithril_min.default)("p.warn", warn),
        (0, import_mithril_min.default)(import_mithril_min.default.route.Link, { href: "/register" }, "Don't have an account")
      ])
    };
  }
  var Login_default = Login;

  // src/views/Register.js
  var import_mithril_min2 = __toESM(require_mithril_min());
  var import_elliptic_min2 = __toESM(require_elliptic_min());
  function Register() {
    if (localStorage.getItem("priv"))
      import_mithril_min2.default.route.set("/");
    const ec = new import_elliptic_min2.ec("secp256k1");
    let warn = "";
    let disable = false;
    function download() {
      const key = ec.genKeyPair();
      const hash = key.getPrivate().toString("hex");
      downloadImg(getPasscolor(hash));
      warn = "save the photo securely, and use it on the login page now";
    }
    return {
      view: () => (0, import_mithril_min2.default)("div.card", [
        (0, import_mithril_min2.default)("h1", "Register"),
        (0, import_mithril_min2.default)("button.btn", {
          onclick: download,
          disabled: disable
        }, "Generate your private Key"),
        (0, import_mithril_min2.default)("br"),
        (0, import_mithril_min2.default)("p.warn", warn),
        (0, import_mithril_min2.default)(import_mithril_min2.default.route.Link, { href: "/login" }, "Already have an account")
      ])
    };
  }
  var Register_default = Register;

  // src/views/Home.js
  var import_mithril_min3 = __toESM(require_mithril_min());

  // src/lib/socket.io.esm.min.js
  var t = /* @__PURE__ */ Object.create(null);
  t.open = "0", t.close = "1", t.ping = "2", t.pong = "3", t.message = "4", t.upgrade = "5", t.noop = "6";
  var e = /* @__PURE__ */ Object.create(null);
  Object.keys(t).forEach((s2) => {
    e[t[s2]] = s2;
  });
  var s = { type: "error", data: "parser error" };
  var n = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob);
  var i = "function" == typeof ArrayBuffer;
  var r = ({ type: e2, data: s2 }, r2, h2) => {
    return n && s2 instanceof Blob ? r2 ? h2(s2) : o(s2, h2) : i && (s2 instanceof ArrayBuffer || (a2 = s2, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(a2) : a2 && a2.buffer instanceof ArrayBuffer)) ? r2 ? h2(s2) : o(new Blob([s2]), h2) : h2(t[e2] + (s2 || ""));
    var a2;
  };
  var o = (t2, e2) => {
    const s2 = new FileReader();
    return s2.onload = function() {
      const t3 = s2.result.split(",")[1];
      e2("b" + t3);
    }, s2.readAsDataURL(t2);
  };
  var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var a = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
  for (let t2 = 0; t2 < h.length; t2++)
    a[h.charCodeAt(t2)] = t2;
  var c = "function" == typeof ArrayBuffer;
  var p = (t2, n2) => {
    if ("string" != typeof t2)
      return { type: "message", data: l(t2, n2) };
    const i2 = t2.charAt(0);
    if ("b" === i2)
      return { type: "message", data: u(t2.substring(1), n2) };
    return e[i2] ? t2.length > 1 ? { type: e[i2], data: t2.substring(1) } : { type: e[i2] } : s;
  };
  var u = (t2, e2) => {
    if (c) {
      const s2 = ((t3) => {
        let e3, s3, n2, i2, r2, o2 = 0.75 * t3.length, h2 = t3.length, c2 = 0;
        "=" === t3[t3.length - 1] && (o2--, "=" === t3[t3.length - 2] && o2--);
        const p2 = new ArrayBuffer(o2), u2 = new Uint8Array(p2);
        for (e3 = 0; e3 < h2; e3 += 4)
          s3 = a[t3.charCodeAt(e3)], n2 = a[t3.charCodeAt(e3 + 1)], i2 = a[t3.charCodeAt(e3 + 2)], r2 = a[t3.charCodeAt(e3 + 3)], u2[c2++] = s3 << 2 | n2 >> 4, u2[c2++] = (15 & n2) << 4 | i2 >> 2, u2[c2++] = (3 & i2) << 6 | 63 & r2;
        return p2;
      })(t2);
      return l(s2, e2);
    }
    return { base64: true, data: t2 };
  };
  var l = (t2, e2) => "blob" === e2 && t2 instanceof ArrayBuffer ? new Blob([t2]) : t2;
  var d = String.fromCharCode(30);
  function f(t2) {
    if (t2)
      return function(t3) {
        for (var e2 in f.prototype)
          t3[e2] = f.prototype[e2];
        return t3;
      }(t2);
  }
  f.prototype.on = f.prototype.addEventListener = function(t2, e2) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
  }, f.prototype.once = function(t2, e2) {
    function s2() {
      this.off(t2, s2), e2.apply(this, arguments);
    }
    return s2.fn = e2, this.on(t2, s2), this;
  }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function(t2, e2) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length)
      return this._callbacks = {}, this;
    var s2, n2 = this._callbacks["$" + t2];
    if (!n2)
      return this;
    if (1 == arguments.length)
      return delete this._callbacks["$" + t2], this;
    for (var i2 = 0; i2 < n2.length; i2++)
      if ((s2 = n2[i2]) === e2 || s2.fn === e2) {
        n2.splice(i2, 1);
        break;
      }
    return 0 === n2.length && delete this._callbacks["$" + t2], this;
  }, f.prototype.emit = function(t2) {
    this._callbacks = this._callbacks || {};
    for (var e2 = new Array(arguments.length - 1), s2 = this._callbacks["$" + t2], n2 = 1; n2 < arguments.length; n2++)
      e2[n2 - 1] = arguments[n2];
    if (s2) {
      n2 = 0;
      for (var i2 = (s2 = s2.slice(0)).length; n2 < i2; ++n2)
        s2[n2].apply(this, e2);
    }
    return this;
  }, f.prototype.emitReserved = f.prototype.emit, f.prototype.listeners = function(t2) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
  }, f.prototype.hasListeners = function(t2) {
    return !!this.listeners(t2).length;
  };
  var y = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
  function g(t2, ...e2) {
    return e2.reduce((e3, s2) => (t2.hasOwnProperty(s2) && (e3[s2] = t2[s2]), e3), {});
  }
  var m3 = y.setTimeout;
  var b = y.clearTimeout;
  function v(t2, e2) {
    e2.useNativeTimers ? (t2.setTimeoutFn = m3.bind(y), t2.clearTimeoutFn = b.bind(y)) : (t2.setTimeoutFn = y.setTimeout.bind(y), t2.clearTimeoutFn = y.clearTimeout.bind(y));
  }
  var k = class extends Error {
    constructor(t2, e2, s2) {
      super(t2), this.description = e2, this.context = s2, this.type = "TransportError";
    }
  };
  var w = class extends f {
    constructor(t2) {
      super(), this.writable = false, v(this, t2), this.opts = t2, this.query = t2.query, this.socket = t2.socket;
    }
    onError(t2, e2, s2) {
      return super.emitReserved("error", new k(t2, e2, s2)), this;
    }
    open() {
      return this.readyState = "opening", this.doOpen(), this;
    }
    close() {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
    }
    send(t2) {
      "open" === this.readyState && this.write(t2);
    }
    onOpen() {
      this.readyState = "open", this.writable = true, super.emitReserved("open");
    }
    onData(t2) {
      const e2 = p(t2, this.socket.binaryType);
      this.onPacket(e2);
    }
    onPacket(t2) {
      super.emitReserved("packet", t2);
    }
    onClose(t2) {
      this.readyState = "closed", super.emitReserved("close", t2);
    }
    pause(t2) {
    }
  };
  var _ = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
  var E = {};
  var A;
  var O = 0;
  var R = 0;
  function C(t2) {
    let e2 = "";
    do {
      e2 = _[t2 % 64] + e2, t2 = Math.floor(t2 / 64);
    } while (t2 > 0);
    return e2;
  }
  function T() {
    const t2 = C(+/* @__PURE__ */ new Date());
    return t2 !== A ? (O = 0, A = t2) : t2 + "." + C(O++);
  }
  for (; R < 64; R++)
    E[_[R]] = R;
  function B(t2) {
    let e2 = "";
    for (let s2 in t2)
      t2.hasOwnProperty(s2) && (e2.length && (e2 += "&"), e2 += encodeURIComponent(s2) + "=" + encodeURIComponent(t2[s2]));
    return e2;
  }
  var x = false;
  try {
    x = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  } catch (t2) {
  }
  var N = x;
  function L(t2) {
    const e2 = t2.xdomain;
    try {
      if ("undefined" != typeof XMLHttpRequest && (!e2 || N))
        return new XMLHttpRequest();
    } catch (t3) {
    }
    if (!e2)
      try {
        return new y[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
      } catch (t3) {
      }
  }
  function S() {
  }
  var q = null != new L({ xdomain: false }).responseType;
  var P = class _P extends f {
    constructor(t2, e2) {
      super(), v(this, e2), this.opts = e2, this.method = e2.method || "GET", this.uri = t2, this.async = false !== e2.async, this.data = void 0 !== e2.data ? e2.data : null, this.create();
    }
    create() {
      const t2 = g(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      t2.xdomain = !!this.opts.xd, t2.xscheme = !!this.opts.xs;
      const e2 = this.xhr = new L(t2);
      try {
        e2.open(this.method, this.uri, this.async);
        try {
          if (this.opts.extraHeaders) {
            e2.setDisableHeaderCheck && e2.setDisableHeaderCheck(true);
            for (let t3 in this.opts.extraHeaders)
              this.opts.extraHeaders.hasOwnProperty(t3) && e2.setRequestHeader(t3, this.opts.extraHeaders[t3]);
          }
        } catch (t3) {
        }
        if ("POST" === this.method)
          try {
            e2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
          } catch (t3) {
          }
        try {
          e2.setRequestHeader("Accept", "*/*");
        } catch (t3) {
        }
        "withCredentials" in e2 && (e2.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (e2.timeout = this.opts.requestTimeout), e2.onreadystatechange = () => {
          4 === e2.readyState && (200 === e2.status || 1223 === e2.status ? this.onLoad() : this.setTimeoutFn(() => {
            this.onError("number" == typeof e2.status ? e2.status : 0);
          }, 0));
        }, e2.send(this.data);
      } catch (t3) {
        return void this.setTimeoutFn(() => {
          this.onError(t3);
        }, 0);
      }
      "undefined" != typeof document && (this.index = _P.requestsCount++, _P.requests[this.index] = this);
    }
    onError(t2) {
      this.emitReserved("error", t2, this.xhr), this.cleanup(true);
    }
    cleanup(t2) {
      if (void 0 !== this.xhr && null !== this.xhr) {
        if (this.xhr.onreadystatechange = S, t2)
          try {
            this.xhr.abort();
          } catch (t3) {
          }
        "undefined" != typeof document && delete _P.requests[this.index], this.xhr = null;
      }
    }
    onLoad() {
      const t2 = this.xhr.responseText;
      null !== t2 && (this.emitReserved("data", t2), this.emitReserved("success"), this.cleanup());
    }
    abort() {
      this.cleanup();
    }
  };
  if (P.requestsCount = 0, P.requests = {}, "undefined" != typeof document) {
    if ("function" == typeof attachEvent)
      attachEvent("onunload", j);
    else if ("function" == typeof addEventListener) {
      addEventListener("onpagehide" in y ? "pagehide" : "unload", j, false);
    }
  }
  function j() {
    for (let t2 in P.requests)
      P.requests.hasOwnProperty(t2) && P.requests[t2].abort();
  }
  var I = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t2) => Promise.resolve().then(t2) : (t2, e2) => e2(t2, 0);
  var D = y.WebSocket || y.MozWebSocket;
  var F = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
  var M = { websocket: class extends w {
    constructor(t2) {
      super(t2), this.supportsBinary = !t2.forceBase64;
    }
    get name() {
      return "websocket";
    }
    doOpen() {
      if (!this.check())
        return;
      const t2 = this.uri(), e2 = this.opts.protocols, s2 = F ? {} : g(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      this.opts.extraHeaders && (s2.headers = this.opts.extraHeaders);
      try {
        this.ws = F ? new D(t2, e2, s2) : e2 ? new D(t2, e2) : new D(t2);
      } catch (t3) {
        return this.emitReserved("error", t3);
      }
      this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }, this.ws.onclose = (t2) => this.onClose({ description: "websocket connection closed", context: t2 }), this.ws.onmessage = (t2) => this.onData(t2.data), this.ws.onerror = (t2) => this.onError("websocket error", t2);
    }
    write(t2) {
      this.writable = false;
      for (let e2 = 0; e2 < t2.length; e2++) {
        const s2 = t2[e2], n2 = e2 === t2.length - 1;
        r(s2, this.supportsBinary, (t3) => {
          try {
            this.ws.send(t3);
          } catch (t4) {
          }
          n2 && I(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      void 0 !== this.ws && (this.ws.close(), this.ws = null);
    }
    uri() {
      let t2 = this.query || {};
      const e2 = this.opts.secure ? "wss" : "ws";
      let s2 = "";
      this.opts.port && ("wss" === e2 && 443 !== Number(this.opts.port) || "ws" === e2 && 80 !== Number(this.opts.port)) && (s2 = ":" + this.opts.port), this.opts.timestampRequests && (t2[this.opts.timestampParam] = T()), this.supportsBinary || (t2.b64 = 1);
      const n2 = B(t2);
      return e2 + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s2 + this.opts.path + (n2.length ? "?" + n2 : "");
    }
    check() {
      return !!D;
    }
  }, polling: class extends w {
    constructor(t2) {
      if (super(t2), this.polling = false, "undefined" != typeof location) {
        const e3 = "https:" === location.protocol;
        let s2 = location.port;
        s2 || (s2 = e3 ? "443" : "80"), this.xd = "undefined" != typeof location && t2.hostname !== location.hostname || s2 !== t2.port, this.xs = t2.secure !== e3;
      }
      const e2 = t2 && t2.forceBase64;
      this.supportsBinary = q && !e2;
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this.poll();
    }
    pause(t2) {
      this.readyState = "pausing";
      const e2 = () => {
        this.readyState = "paused", t2();
      };
      if (this.polling || !this.writable) {
        let t3 = 0;
        this.polling && (t3++, this.once("pollComplete", function() {
          --t3 || e2();
        })), this.writable || (t3++, this.once("drain", function() {
          --t3 || e2();
        }));
      } else
        e2();
    }
    poll() {
      this.polling = true, this.doPoll(), this.emitReserved("poll");
    }
    onData(t2) {
      ((t3, e2) => {
        const s2 = t3.split(d), n2 = [];
        for (let t4 = 0; t4 < s2.length; t4++) {
          const i2 = p(s2[t4], e2);
          if (n2.push(i2), "error" === i2.type)
            break;
        }
        return n2;
      })(t2, this.socket.binaryType).forEach((t3) => {
        if ("opening" === this.readyState && "open" === t3.type && this.onOpen(), "close" === t3.type)
          return this.onClose({ description: "transport closed by the server" }), false;
        this.onPacket(t3);
      }), "closed" !== this.readyState && (this.polling = false, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
    }
    doClose() {
      const t2 = () => {
        this.write([{ type: "close" }]);
      };
      "open" === this.readyState ? t2() : this.once("open", t2);
    }
    write(t2) {
      this.writable = false, ((t3, e2) => {
        const s2 = t3.length, n2 = new Array(s2);
        let i2 = 0;
        t3.forEach((t4, o2) => {
          r(t4, false, (t5) => {
            n2[o2] = t5, ++i2 === s2 && e2(n2.join(d));
          });
        });
      })(t2, (t3) => {
        this.doWrite(t3, () => {
          this.writable = true, this.emitReserved("drain");
        });
      });
    }
    uri() {
      let t2 = this.query || {};
      const e2 = this.opts.secure ? "https" : "http";
      let s2 = "";
      false !== this.opts.timestampRequests && (t2[this.opts.timestampParam] = T()), this.supportsBinary || t2.sid || (t2.b64 = 1), this.opts.port && ("https" === e2 && 443 !== Number(this.opts.port) || "http" === e2 && 80 !== Number(this.opts.port)) && (s2 = ":" + this.opts.port);
      const n2 = B(t2);
      return e2 + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + s2 + this.opts.path + (n2.length ? "?" + n2 : "");
    }
    request(t2 = {}) {
      return Object.assign(t2, { xd: this.xd, xs: this.xs }, this.opts), new P(this.uri(), t2);
    }
    doWrite(t2, e2) {
      const s2 = this.request({ method: "POST", data: t2 });
      s2.on("success", e2), s2.on("error", (t3, e3) => {
        this.onError("xhr post error", t3, e3);
      });
    }
    doPoll() {
      const t2 = this.request();
      t2.on("data", this.onData.bind(this)), t2.on("error", (t3, e2) => {
        this.onError("xhr poll error", t3, e2);
      }), this.pollXhr = t2;
    }
  } };
  var V = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
  var U = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  function H(t2) {
    const e2 = t2, s2 = t2.indexOf("["), n2 = t2.indexOf("]");
    -1 != s2 && -1 != n2 && (t2 = t2.substring(0, s2) + t2.substring(s2, n2).replace(/:/g, ";") + t2.substring(n2, t2.length));
    let i2 = V.exec(t2 || ""), r2 = {}, o2 = 14;
    for (; o2--; )
      r2[U[o2]] = i2[o2] || "";
    return -1 != s2 && -1 != n2 && (r2.source = e2, r2.host = r2.host.substring(1, r2.host.length - 1).replace(/;/g, ":"), r2.authority = r2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r2.ipv6uri = true), r2.pathNames = function(t3, e3) {
      const s3 = /\/{2,9}/g, n3 = e3.replace(s3, "/").split("/");
      "/" != e3.slice(0, 1) && 0 !== e3.length || n3.splice(0, 1);
      "/" == e3.slice(-1) && n3.splice(n3.length - 1, 1);
      return n3;
    }(0, r2.path), r2.queryKey = function(t3, e3) {
      const s3 = {};
      return e3.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t4, e4, n3) {
        e4 && (s3[e4] = n3);
      }), s3;
    }(0, r2.query), r2;
  }
  var K = class _K extends f {
    constructor(t2, e2 = {}) {
      super(), this.writeBuffer = [], t2 && "object" == typeof t2 && (e2 = t2, t2 = null), t2 ? (t2 = H(t2), e2.hostname = t2.host, e2.secure = "https" === t2.protocol || "wss" === t2.protocol, e2.port = t2.port, t2.query && (e2.query = t2.query)) : e2.host && (e2.hostname = H(e2.host).host), v(this, e2), this.secure = null != e2.secure ? e2.secure : "undefined" != typeof location && "https:" === location.protocol, e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.hostname = e2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = e2.transports || ["polling", "websocket"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: true }, e2), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = function(t3) {
        let e3 = {}, s2 = t3.split("&");
        for (let t4 = 0, n2 = s2.length; t4 < n2; t4++) {
          let n3 = s2[t4].split("=");
          e3[decodeURIComponent(n3[0])] = decodeURIComponent(n3[1]);
        }
        return e3;
      }(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
        this.transport && (this.transport.removeAllListeners(), this.transport.close());
      }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), "localhost" !== this.hostname && (this.offlineEventListener = () => {
        this.onClose("transport close", { description: "network connection lost" });
      }, addEventListener("offline", this.offlineEventListener, false))), this.open();
    }
    createTransport(t2) {
      const e2 = Object.assign({}, this.opts.query);
      e2.EIO = 4, e2.transport = t2, this.id && (e2.sid = this.id);
      const s2 = Object.assign({}, this.opts.transportOptions[t2], this.opts, { query: e2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port });
      return new M[t2](s2);
    }
    open() {
      let t2;
      if (this.opts.rememberUpgrade && _K.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket"))
        t2 = "websocket";
      else {
        if (0 === this.transports.length)
          return void this.setTimeoutFn(() => {
            this.emitReserved("error", "No transports available");
          }, 0);
        t2 = this.transports[0];
      }
      this.readyState = "opening";
      try {
        t2 = this.createTransport(t2);
      } catch (t3) {
        return this.transports.shift(), void this.open();
      }
      t2.open(), this.setTransport(t2);
    }
    setTransport(t2) {
      this.transport && this.transport.removeAllListeners(), this.transport = t2, t2.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (t3) => this.onClose("transport close", t3));
    }
    probe(t2) {
      let e2 = this.createTransport(t2), s2 = false;
      _K.priorWebsocketSuccess = false;
      const n2 = () => {
        s2 || (e2.send([{ type: "ping", data: "probe" }]), e2.once("packet", (t3) => {
          if (!s2)
            if ("pong" === t3.type && "probe" === t3.data) {
              if (this.upgrading = true, this.emitReserved("upgrading", e2), !e2)
                return;
              _K.priorWebsocketSuccess = "websocket" === e2.name, this.transport.pause(() => {
                s2 || "closed" !== this.readyState && (c2(), this.setTransport(e2), e2.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e2), e2 = null, this.upgrading = false, this.flush());
              });
            } else {
              const t4 = new Error("probe error");
              t4.transport = e2.name, this.emitReserved("upgradeError", t4);
            }
        }));
      };
      function i2() {
        s2 || (s2 = true, c2(), e2.close(), e2 = null);
      }
      const r2 = (t3) => {
        const s3 = new Error("probe error: " + t3);
        s3.transport = e2.name, i2(), this.emitReserved("upgradeError", s3);
      };
      function o2() {
        r2("transport closed");
      }
      function h2() {
        r2("socket closed");
      }
      function a2(t3) {
        e2 && t3.name !== e2.name && i2();
      }
      const c2 = () => {
        e2.removeListener("open", n2), e2.removeListener("error", r2), e2.removeListener("close", o2), this.off("close", h2), this.off("upgrading", a2);
      };
      e2.once("open", n2), e2.once("error", r2), e2.once("close", o2), this.once("close", h2), this.once("upgrading", a2), e2.open();
    }
    onOpen() {
      if (this.readyState = "open", _K.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade) {
        let t2 = 0;
        const e2 = this.upgrades.length;
        for (; t2 < e2; t2++)
          this.probe(this.upgrades[t2]);
      }
    }
    onPacket(t2) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
        switch (this.emitReserved("packet", t2), this.emitReserved("heartbeat"), t2.type) {
          case "open":
            this.onHandshake(JSON.parse(t2.data));
            break;
          case "ping":
            this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
            break;
          case "error":
            const e2 = new Error("server error");
            e2.code = t2.data, this.onError(e2);
            break;
          case "message":
            this.emitReserved("data", t2.data), this.emitReserved("message", t2.data);
        }
    }
    onHandshake(t2) {
      this.emitReserved("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this.upgrades = this.filterUpgrades(t2.upgrades), this.pingInterval = t2.pingInterval, this.pingTimeout = t2.pingTimeout, this.maxPayload = t2.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
    }
    resetPingTimeout() {
      this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose("ping timeout");
      }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
    }
    onDrain() {
      this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
    }
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        const t2 = this.getWritablePackets();
        this.transport.send(t2), this.prevBufferLen = t2.length, this.emitReserved("flush");
      }
    }
    getWritablePackets() {
      if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1))
        return this.writeBuffer;
      let t2 = 1;
      for (let s2 = 0; s2 < this.writeBuffer.length; s2++) {
        const n2 = this.writeBuffer[s2].data;
        if (n2 && (t2 += "string" == typeof (e2 = n2) ? function(t3) {
          let e3 = 0, s3 = 0;
          for (let n3 = 0, i2 = t3.length; n3 < i2; n3++)
            e3 = t3.charCodeAt(n3), e3 < 128 ? s3 += 1 : e3 < 2048 ? s3 += 2 : e3 < 55296 || e3 >= 57344 ? s3 += 3 : (n3++, s3 += 4);
          return s3;
        }(e2) : Math.ceil(1.33 * (e2.byteLength || e2.size))), s2 > 0 && t2 > this.maxPayload)
          return this.writeBuffer.slice(0, s2);
        t2 += 2;
      }
      var e2;
      return this.writeBuffer;
    }
    write(t2, e2, s2) {
      return this.sendPacket("message", t2, e2, s2), this;
    }
    send(t2, e2, s2) {
      return this.sendPacket("message", t2, e2, s2), this;
    }
    sendPacket(t2, e2, s2, n2) {
      if ("function" == typeof e2 && (n2 = e2, e2 = void 0), "function" == typeof s2 && (n2 = s2, s2 = null), "closing" === this.readyState || "closed" === this.readyState)
        return;
      (s2 = s2 || {}).compress = false !== s2.compress;
      const i2 = { type: t2, data: e2, options: s2 };
      this.emitReserved("packetCreate", i2), this.writeBuffer.push(i2), n2 && this.once("flush", n2), this.flush();
    }
    close() {
      const t2 = () => {
        this.onClose("forced close"), this.transport.close();
      }, e2 = () => {
        this.off("upgrade", e2), this.off("upgradeError", e2), t2();
      }, s2 = () => {
        this.once("upgrade", e2), this.once("upgradeError", e2);
      };
      return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
        this.upgrading ? s2() : t2();
      }) : this.upgrading ? s2() : t2()), this;
    }
    onError(t2) {
      _K.priorWebsocketSuccess = false, this.emitReserved("error", t2), this.onClose("transport error", t2);
    }
    onClose(t2, e2) {
      "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", t2, e2), this.writeBuffer = [], this.prevBufferLen = 0);
    }
    filterUpgrades(t2) {
      const e2 = [];
      let s2 = 0;
      const n2 = t2.length;
      for (; s2 < n2; s2++)
        ~this.transports.indexOf(t2[s2]) && e2.push(t2[s2]);
      return e2;
    }
  };
  K.protocol = 4;
  var Y = "function" == typeof ArrayBuffer;
  var z = Object.prototype.toString;
  var W = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === z.call(Blob);
  var $ = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === z.call(File);
  function J(t2) {
    return Y && (t2 instanceof ArrayBuffer || ((t3) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t3) : t3.buffer instanceof ArrayBuffer)(t2)) || W && t2 instanceof Blob || $ && t2 instanceof File;
  }
  function Q(t2, e2) {
    if (!t2 || "object" != typeof t2)
      return false;
    if (Array.isArray(t2)) {
      for (let e3 = 0, s2 = t2.length; e3 < s2; e3++)
        if (Q(t2[e3]))
          return true;
      return false;
    }
    if (J(t2))
      return true;
    if (t2.toJSON && "function" == typeof t2.toJSON && 1 === arguments.length)
      return Q(t2.toJSON(), true);
    for (const e3 in t2)
      if (Object.prototype.hasOwnProperty.call(t2, e3) && Q(t2[e3]))
        return true;
    return false;
  }
  function X(t2) {
    const e2 = [], s2 = t2.data, n2 = t2;
    return n2.data = G(s2, e2), n2.attachments = e2.length, { packet: n2, buffers: e2 };
  }
  function G(t2, e2) {
    if (!t2)
      return t2;
    if (J(t2)) {
      const s2 = { _placeholder: true, num: e2.length };
      return e2.push(t2), s2;
    }
    if (Array.isArray(t2)) {
      const s2 = new Array(t2.length);
      for (let n2 = 0; n2 < t2.length; n2++)
        s2[n2] = G(t2[n2], e2);
      return s2;
    }
    if ("object" == typeof t2 && !(t2 instanceof Date)) {
      const s2 = {};
      for (const n2 in t2)
        Object.prototype.hasOwnProperty.call(t2, n2) && (s2[n2] = G(t2[n2], e2));
      return s2;
    }
    return t2;
  }
  function Z(t2, e2) {
    return t2.data = tt(t2.data, e2), delete t2.attachments, t2;
  }
  function tt(t2, e2) {
    if (!t2)
      return t2;
    if (t2 && true === t2._placeholder) {
      if ("number" == typeof t2.num && t2.num >= 0 && t2.num < e2.length)
        return e2[t2.num];
      throw new Error("illegal attachments");
    }
    if (Array.isArray(t2))
      for (let s2 = 0; s2 < t2.length; s2++)
        t2[s2] = tt(t2[s2], e2);
    else if ("object" == typeof t2)
      for (const s2 in t2)
        Object.prototype.hasOwnProperty.call(t2, s2) && (t2[s2] = tt(t2[s2], e2));
    return t2;
  }
  var et = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
  var nt;
  !function(t2) {
    t2[t2.CONNECT = 0] = "CONNECT", t2[t2.DISCONNECT = 1] = "DISCONNECT", t2[t2.EVENT = 2] = "EVENT", t2[t2.ACK = 3] = "ACK", t2[t2.CONNECT_ERROR = 4] = "CONNECT_ERROR", t2[t2.BINARY_EVENT = 5] = "BINARY_EVENT", t2[t2.BINARY_ACK = 6] = "BINARY_ACK";
  }(nt || (nt = {}));
  function it(t2) {
    return "[object Object]" === Object.prototype.toString.call(t2);
  }
  var rt = class _rt extends f {
    constructor(t2) {
      super(), this.reviver = t2;
    }
    add(t2) {
      let e2;
      if ("string" == typeof t2) {
        if (this.reconstructor)
          throw new Error("got plaintext data when reconstructing a packet");
        e2 = this.decodeString(t2);
        const s2 = e2.type === nt.BINARY_EVENT;
        s2 || e2.type === nt.BINARY_ACK ? (e2.type = s2 ? nt.EVENT : nt.ACK, this.reconstructor = new ot(e2), 0 === e2.attachments && super.emitReserved("decoded", e2)) : super.emitReserved("decoded", e2);
      } else {
        if (!J(t2) && !t2.base64)
          throw new Error("Unknown type: " + t2);
        if (!this.reconstructor)
          throw new Error("got binary data when not reconstructing a packet");
        e2 = this.reconstructor.takeBinaryData(t2), e2 && (this.reconstructor = null, super.emitReserved("decoded", e2));
      }
    }
    decodeString(t2) {
      let e2 = 0;
      const s2 = { type: Number(t2.charAt(0)) };
      if (void 0 === nt[s2.type])
        throw new Error("unknown packet type " + s2.type);
      if (s2.type === nt.BINARY_EVENT || s2.type === nt.BINARY_ACK) {
        const n3 = e2 + 1;
        for (; "-" !== t2.charAt(++e2) && e2 != t2.length; )
          ;
        const i2 = t2.substring(n3, e2);
        if (i2 != Number(i2) || "-" !== t2.charAt(e2))
          throw new Error("Illegal attachments");
        s2.attachments = Number(i2);
      }
      if ("/" === t2.charAt(e2 + 1)) {
        const n3 = e2 + 1;
        for (; ++e2; ) {
          if ("," === t2.charAt(e2))
            break;
          if (e2 === t2.length)
            break;
        }
        s2.nsp = t2.substring(n3, e2);
      } else
        s2.nsp = "/";
      const n2 = t2.charAt(e2 + 1);
      if ("" !== n2 && Number(n2) == n2) {
        const n3 = e2 + 1;
        for (; ++e2; ) {
          const s3 = t2.charAt(e2);
          if (null == s3 || Number(s3) != s3) {
            --e2;
            break;
          }
          if (e2 === t2.length)
            break;
        }
        s2.id = Number(t2.substring(n3, e2 + 1));
      }
      if (t2.charAt(++e2)) {
        const n3 = this.tryParse(t2.substr(e2));
        if (!_rt.isPayloadValid(s2.type, n3))
          throw new Error("invalid payload");
        s2.data = n3;
      }
      return s2;
    }
    tryParse(t2) {
      try {
        return JSON.parse(t2, this.reviver);
      } catch (t3) {
        return false;
      }
    }
    static isPayloadValid(t2, e2) {
      switch (t2) {
        case nt.CONNECT:
          return it(e2);
        case nt.DISCONNECT:
          return void 0 === e2;
        case nt.CONNECT_ERROR:
          return "string" == typeof e2 || it(e2);
        case nt.EVENT:
        case nt.BINARY_EVENT:
          return Array.isArray(e2) && ("number" == typeof e2[0] || "string" == typeof e2[0] && -1 === et.indexOf(e2[0]));
        case nt.ACK:
        case nt.BINARY_ACK:
          return Array.isArray(e2);
      }
    }
    destroy() {
      this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
  };
  var ot = class {
    constructor(t2) {
      this.packet = t2, this.buffers = [], this.reconPack = t2;
    }
    takeBinaryData(t2) {
      if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
        const t3 = Z(this.reconPack, this.buffers);
        return this.finishedReconstruction(), t3;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null, this.buffers = [];
    }
  };
  var ht = Object.freeze({ __proto__: null, protocol: 5, get PacketType() {
    return nt;
  }, Encoder: class {
    constructor(t2) {
      this.replacer = t2;
    }
    encode(t2) {
      return t2.type !== nt.EVENT && t2.type !== nt.ACK || !Q(t2) ? [this.encodeAsString(t2)] : this.encodeAsBinary({ type: t2.type === nt.EVENT ? nt.BINARY_EVENT : nt.BINARY_ACK, nsp: t2.nsp, data: t2.data, id: t2.id });
    }
    encodeAsString(t2) {
      let e2 = "" + t2.type;
      return t2.type !== nt.BINARY_EVENT && t2.type !== nt.BINARY_ACK || (e2 += t2.attachments + "-"), t2.nsp && "/" !== t2.nsp && (e2 += t2.nsp + ","), null != t2.id && (e2 += t2.id), null != t2.data && (e2 += JSON.stringify(t2.data, this.replacer)), e2;
    }
    encodeAsBinary(t2) {
      const e2 = X(t2), s2 = this.encodeAsString(e2.packet), n2 = e2.buffers;
      return n2.unshift(s2), n2;
    }
  }, Decoder: rt });
  function at(t2, e2, s2) {
    return t2.on(e2, s2), function() {
      t2.off(e2, s2);
    };
  }
  var ct = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
  var pt = class extends f {
    constructor(t2, e2, s2) {
      super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t2, this.nsp = e2, s2 && s2.auth && (this.auth = s2.auth), this._opts = Object.assign({}, s2), this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs)
        return;
      const t2 = this.io;
      this.subs = [at(t2, "open", this.onopen.bind(this)), at(t2, "packet", this.onpacket.bind(this)), at(t2, "error", this.onerror.bind(this)), at(t2, "close", this.onclose.bind(this))];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
    }
    open() {
      return this.connect();
    }
    send(...t2) {
      return t2.unshift("message"), this.emit.apply(this, t2), this;
    }
    emit(t2, ...e2) {
      if (ct.hasOwnProperty(t2))
        throw new Error('"' + t2.toString() + '" is a reserved event name');
      if (e2.unshift(t2), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
        return this._addToQueue(e2), this;
      const s2 = { type: nt.EVENT, data: e2, options: {} };
      if (s2.options.compress = false !== this.flags.compress, "function" == typeof e2[e2.length - 1]) {
        const t3 = this.ids++, n3 = e2.pop();
        this._registerAckCallback(t3, n3), s2.id = t3;
      }
      const n2 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
      return this.flags.volatile && (!n2 || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(s2), this.packet(s2)) : this.sendBuffer.push(s2)), this.flags = {}, this;
    }
    _registerAckCallback(t2, e2) {
      var s2;
      const n2 = null !== (s2 = this.flags.timeout) && void 0 !== s2 ? s2 : this._opts.ackTimeout;
      if (void 0 === n2)
        return void (this.acks[t2] = e2);
      const i2 = this.io.setTimeoutFn(() => {
        delete this.acks[t2];
        for (let e3 = 0; e3 < this.sendBuffer.length; e3++)
          this.sendBuffer[e3].id === t2 && this.sendBuffer.splice(e3, 1);
        e2.call(this, new Error("operation has timed out"));
      }, n2);
      this.acks[t2] = (...t3) => {
        this.io.clearTimeoutFn(i2), e2.apply(this, [null, ...t3]);
      };
    }
    emitWithAck(t2, ...e2) {
      const s2 = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
      return new Promise((n2, i2) => {
        e2.push((t3, e3) => s2 ? t3 ? i2(t3) : n2(e3) : n2(t3)), this.emit(t2, ...e2);
      });
    }
    _addToQueue(t2) {
      let e2;
      "function" == typeof t2[t2.length - 1] && (e2 = t2.pop());
      const s2 = { id: this._queueSeq++, tryCount: 0, pending: false, args: t2, flags: Object.assign({ fromQueue: true }, this.flags) };
      t2.push((t3, ...n2) => {
        if (s2 !== this._queue[0])
          return;
        return null !== t3 ? s2.tryCount > this._opts.retries && (this._queue.shift(), e2 && e2(t3)) : (this._queue.shift(), e2 && e2(null, ...n2)), s2.pending = false, this._drainQueue();
      }), this._queue.push(s2), this._drainQueue();
    }
    _drainQueue(t2 = false) {
      if (!this.connected || 0 === this._queue.length)
        return;
      const e2 = this._queue[0];
      e2.pending && !t2 || (e2.pending = true, e2.tryCount++, this.flags = e2.flags, this.emit.apply(this, e2.args));
    }
    packet(t2) {
      t2.nsp = this.nsp, this.io._packet(t2);
    }
    onopen() {
      "function" == typeof this.auth ? this.auth((t2) => {
        this._sendConnectPacket(t2);
      }) : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t2) {
      this.packet({ type: nt.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t2) : t2 });
    }
    onerror(t2) {
      this.connected || this.emitReserved("connect_error", t2);
    }
    onclose(t2, e2) {
      this.connected = false, delete this.id, this.emitReserved("disconnect", t2, e2);
    }
    onpacket(t2) {
      if (t2.nsp === this.nsp)
        switch (t2.type) {
          case nt.CONNECT:
            t2.data && t2.data.sid ? this.onconnect(t2.data.sid, t2.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
            break;
          case nt.EVENT:
          case nt.BINARY_EVENT:
            this.onevent(t2);
            break;
          case nt.ACK:
          case nt.BINARY_ACK:
            this.onack(t2);
            break;
          case nt.DISCONNECT:
            this.ondisconnect();
            break;
          case nt.CONNECT_ERROR:
            this.destroy();
            const e2 = new Error(t2.data.message);
            e2.data = t2.data.data, this.emitReserved("connect_error", e2);
        }
    }
    onevent(t2) {
      const e2 = t2.data || [];
      null != t2.id && e2.push(this.ack(t2.id)), this.connected ? this.emitEvent(e2) : this.receiveBuffer.push(Object.freeze(e2));
    }
    emitEvent(t2) {
      if (this._anyListeners && this._anyListeners.length) {
        const e2 = this._anyListeners.slice();
        for (const s2 of e2)
          s2.apply(this, t2);
      }
      super.emit.apply(this, t2), this._pid && t2.length && "string" == typeof t2[t2.length - 1] && (this._lastOffset = t2[t2.length - 1]);
    }
    ack(t2) {
      const e2 = this;
      let s2 = false;
      return function(...n2) {
        s2 || (s2 = true, e2.packet({ type: nt.ACK, id: t2, data: n2 }));
      };
    }
    onack(t2) {
      const e2 = this.acks[t2.id];
      "function" == typeof e2 && (e2.apply(this, t2.data), delete this.acks[t2.id]);
    }
    onconnect(t2, e2) {
      this.id = t2, this.recovered = e2 && this._pid === e2, this._pid = e2, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((t2) => this.emitEvent(t2)), this.receiveBuffer = [], this.sendBuffer.forEach((t2) => {
        this.notifyOutgoingListeners(t2), this.packet(t2);
      }), this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((t2) => t2()), this.subs = void 0), this.io._destroy(this);
    }
    disconnect() {
      return this.connected && this.packet({ type: nt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    close() {
      return this.disconnect();
    }
    compress(t2) {
      return this.flags.compress = t2, this;
    }
    get volatile() {
      return this.flags.volatile = true, this;
    }
    timeout(t2) {
      return this.flags.timeout = t2, this;
    }
    onAny(t2) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t2), this;
    }
    prependAny(t2) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t2), this;
    }
    offAny(t2) {
      if (!this._anyListeners)
        return this;
      if (t2) {
        const e2 = this._anyListeners;
        for (let s2 = 0; s2 < e2.length; s2++)
          if (t2 === e2[s2])
            return e2.splice(s2, 1), this;
      } else
        this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(t2) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t2), this;
    }
    prependAnyOutgoing(t2) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t2), this;
    }
    offAnyOutgoing(t2) {
      if (!this._anyOutgoingListeners)
        return this;
      if (t2) {
        const e2 = this._anyOutgoingListeners;
        for (let s2 = 0; s2 < e2.length; s2++)
          if (t2 === e2[s2])
            return e2.splice(s2, 1), this;
      } else
        this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t2) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
        const e2 = this._anyOutgoingListeners.slice();
        for (const s2 of e2)
          s2.apply(this, t2.data);
      }
    }
  };
  function ut(t2) {
    t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
  }
  ut.prototype.duration = function() {
    var t2 = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var e2 = Math.random(), s2 = Math.floor(e2 * this.jitter * t2);
      t2 = 0 == (1 & Math.floor(10 * e2)) ? t2 - s2 : t2 + s2;
    }
    return 0 | Math.min(t2, this.max);
  }, ut.prototype.reset = function() {
    this.attempts = 0;
  }, ut.prototype.setMin = function(t2) {
    this.ms = t2;
  }, ut.prototype.setMax = function(t2) {
    this.max = t2;
  }, ut.prototype.setJitter = function(t2) {
    this.jitter = t2;
  };
  var lt = class extends f {
    constructor(t2, e2) {
      var s2;
      super(), this.nsps = {}, this.subs = [], t2 && "object" == typeof t2 && (e2 = t2, t2 = void 0), (e2 = e2 || {}).path = e2.path || "/socket.io", this.opts = e2, v(this, e2), this.reconnection(false !== e2.reconnection), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (s2 = e2.randomizationFactor) && void 0 !== s2 ? s2 : 0.5), this.backoff = new ut({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e2.timeout ? 2e4 : e2.timeout), this._readyState = "closed", this.uri = t2;
      const n2 = e2.parser || ht;
      this.encoder = new n2.Encoder(), this.decoder = new n2.Decoder(), this._autoConnect = false !== e2.autoConnect, this._autoConnect && this.open();
    }
    reconnection(t2) {
      return arguments.length ? (this._reconnection = !!t2, this) : this._reconnection;
    }
    reconnectionAttempts(t2) {
      return void 0 === t2 ? this._reconnectionAttempts : (this._reconnectionAttempts = t2, this);
    }
    reconnectionDelay(t2) {
      var e2;
      return void 0 === t2 ? this._reconnectionDelay : (this._reconnectionDelay = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMin(t2), this);
    }
    randomizationFactor(t2) {
      var e2;
      return void 0 === t2 ? this._randomizationFactor : (this._randomizationFactor = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setJitter(t2), this);
    }
    reconnectionDelayMax(t2) {
      var e2;
      return void 0 === t2 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t2, null === (e2 = this.backoff) || void 0 === e2 || e2.setMax(t2), this);
    }
    timeout(t2) {
      return arguments.length ? (this._timeout = t2, this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }
    open(t2) {
      if (~this._readyState.indexOf("open"))
        return this;
      this.engine = new K(this.uri, this.opts);
      const e2 = this.engine, s2 = this;
      this._readyState = "opening", this.skipReconnect = false;
      const n2 = at(e2, "open", function() {
        s2.onopen(), t2 && t2();
      }), i2 = at(e2, "error", (e3) => {
        s2.cleanup(), s2._readyState = "closed", this.emitReserved("error", e3), t2 ? t2(e3) : s2.maybeReconnectOnOpen();
      });
      if (false !== this._timeout) {
        const t3 = this._timeout;
        0 === t3 && n2();
        const s3 = this.setTimeoutFn(() => {
          n2(), e2.close(), e2.emit("error", new Error("timeout"));
        }, t3);
        this.opts.autoUnref && s3.unref(), this.subs.push(function() {
          clearTimeout(s3);
        });
      }
      return this.subs.push(n2), this.subs.push(i2), this;
    }
    connect(t2) {
      return this.open(t2);
    }
    onopen() {
      this.cleanup(), this._readyState = "open", this.emitReserved("open");
      const t2 = this.engine;
      this.subs.push(at(t2, "ping", this.onping.bind(this)), at(t2, "data", this.ondata.bind(this)), at(t2, "error", this.onerror.bind(this)), at(t2, "close", this.onclose.bind(this)), at(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(t2) {
      try {
        this.decoder.add(t2);
      } catch (t3) {
        this.onclose("parse error", t3);
      }
    }
    ondecoded(t2) {
      I(() => {
        this.emitReserved("packet", t2);
      }, this.setTimeoutFn);
    }
    onerror(t2) {
      this.emitReserved("error", t2);
    }
    socket(t2, e2) {
      let s2 = this.nsps[t2];
      return s2 ? this._autoConnect && !s2.active && s2.connect() : (s2 = new pt(this, t2, e2), this.nsps[t2] = s2), s2;
    }
    _destroy(t2) {
      const e2 = Object.keys(this.nsps);
      for (const t3 of e2) {
        if (this.nsps[t3].active)
          return;
      }
      this._close();
    }
    _packet(t2) {
      const e2 = this.encoder.encode(t2);
      for (let s2 = 0; s2 < e2.length; s2++)
        this.engine.write(e2[s2], t2.options);
    }
    cleanup() {
      this.subs.forEach((t2) => t2()), this.subs.length = 0, this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close"), this.engine && this.engine.close();
    }
    disconnect() {
      return this._close();
    }
    onclose(t2, e2) {
      this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t2, e2), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect)
        return this;
      const t2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts)
        this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
      else {
        const e2 = this.backoff.duration();
        this._reconnecting = true;
        const s2 = this.setTimeoutFn(() => {
          t2.skipReconnect || (this.emitReserved("reconnect_attempt", t2.backoff.attempts), t2.skipReconnect || t2.open((e3) => {
            e3 ? (t2._reconnecting = false, t2.reconnect(), this.emitReserved("reconnect_error", e3)) : t2.onreconnect();
          }));
        }, e2);
        this.opts.autoUnref && s2.unref(), this.subs.push(function() {
          clearTimeout(s2);
        });
      }
    }
    onreconnect() {
      const t2 = this.backoff.attempts;
      this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", t2);
    }
  };
  var dt = {};
  function ft(t2, e2) {
    "object" == typeof t2 && (e2 = t2, t2 = void 0);
    const s2 = function(t3, e3 = "", s3) {
      let n3 = t3;
      s3 = s3 || "undefined" != typeof location && location, null == t3 && (t3 = s3.protocol + "//" + s3.host), "string" == typeof t3 && ("/" === t3.charAt(0) && (t3 = "/" === t3.charAt(1) ? s3.protocol + t3 : s3.host + t3), /^(https?|wss?):\/\//.test(t3) || (t3 = void 0 !== s3 ? s3.protocol + "//" + t3 : "https://" + t3), n3 = H(t3)), n3.port || (/^(http|ws)$/.test(n3.protocol) ? n3.port = "80" : /^(http|ws)s$/.test(n3.protocol) && (n3.port = "443")), n3.path = n3.path || "/";
      const i3 = -1 !== n3.host.indexOf(":") ? "[" + n3.host + "]" : n3.host;
      return n3.id = n3.protocol + "://" + i3 + ":" + n3.port + e3, n3.href = n3.protocol + "://" + i3 + (s3 && s3.port === n3.port ? "" : ":" + n3.port), n3;
    }(t2, (e2 = e2 || {}).path || "/socket.io"), n2 = s2.source, i2 = s2.id, r2 = s2.path, o2 = dt[i2] && r2 in dt[i2].nsps;
    let h2;
    return e2.forceNew || e2["force new connection"] || false === e2.multiplex || o2 ? h2 = new lt(n2, e2) : (dt[i2] || (dt[i2] = new lt(n2, e2)), h2 = dt[i2]), s2.query && !e2.query && (e2.query = s2.queryKey), h2.socket(s2.path, e2);
  }
  Object.assign(ft, { Manager: lt, Socket: pt, io: ft, connect: ft });

  // src/socket.js
  var socket = ft(
    /*{transports:["pooling"]}*/
  );

  // src/lib/idb-keyval.min.js
  function promisifyRequest(r2) {
    return new Promise((e2, t2) => {
      r2.oncomplete = r2.onsuccess = () => e2(r2.result), r2.onabort = r2.onerror = () => t2(r2.error);
    });
  }
  function createStore(e2, n2) {
    const t2 = indexedDB.open(e2), u2 = (t2.onupgradeneeded = () => t2.result.createObjectStore(n2), promisifyRequest(t2));
    return (t3, r2) => u2.then((e3) => r2(e3.transaction(n2, t3).objectStore(n2)));
  }
  var defaultGetStoreFunc;
  function defaultGetStore() {
    return defaultGetStoreFunc = defaultGetStoreFunc || createStore("syscers", "base");
  }
  function get(t2, e2 = defaultGetStore()) {
    return e2("readonly", (e3) => promisifyRequest(e3.get(t2)));
  }
  function set(t2, r2, e2 = defaultGetStore()) {
    return e2("readwrite", (e3) => (e3.put(r2, t2), promisifyRequest(e3.transaction)));
  }
  function clear(e2 = defaultGetStore()) {
    return e2("readwrite", (e3) => (e3.clear(), promisifyRequest(e3.transaction)));
  }

  // src/views/Home.js
  function Home() {
    if (!localStorage.getItem("priv")) {
      import_mithril_min3.default.route.set("/login");
      return;
    }
    let msg = "";
    let username = "";
    let contact = "";
    let popup = true;
    let chats = [];
    let pending = [];
    import_mithril_min3.default.request({
      method: "post",
      url: "/api?get-account",
      body: { pub: localStorage.getItem("pub") }
    }).then((data) => {
      if (!data) {
        import_mithril_min3.default.route.set("/account");
        return;
      } else {
        username = data.username;
        socket.emit("online", username, () => "nothing");
      }
    });
    function logout() {
      localStorage.removeItem("priv");
      localStorage.removeItem("pub");
      import_mithril_min3.default.route.set("/login");
    }
    get("some").then((val) => {
      if (val)
        chats = val;
      import_mithril_min3.default.redraw();
    });
    socket.on("chat", (data, callback) => {
      if (Array.isArray(data)) {
        data.forEach((x2) => {
          if (x2.from == username)
            return;
          chats.push({
            from: x2.from,
            msg: x2.msg
          });
        });
        callback();
      } else {
        if (data.from == username)
          return;
        chats.push({ from: data.from, msg: data.msg });
        callback();
      }
      set("some", chats);
      import_mithril_min3.default.redraw();
    });
    function send() {
      pending.push({
        id: chats.length,
        from: username,
        to: contact,
        msg
      });
      chats.push({ from: "you", msg, stats: 0 });
      socket.emit("chat", {
        id: chats.length - 1,
        from: username,
        to: contact,
        msg
      }, () => {
        pending.shift();
        chats[chats.length - 1].stats = 1;
        set("some", chats);
        import_mithril_min3.default.redraw();
      });
      msg = "";
      import_mithril_min3.default.redraw();
    }
    socket.on("reconnect", () => socket.emit("online", username, () => {
      if (!pending[0])
        return;
      pending.forEach((x2) => {
        socket.emit("chat", x2);
      });
      pending = [];
    }));
    socket.on("received", (data) => {
      if (Array.isArray(data)) {
        data.forEach((x2) => {
          chats[x2].stats = 2;
        });
      } else
        chats[data].stats = 2;
      set("some", chats);
      import_mithril_min3.default.redraw();
    });
    function mapping() {
      return chats.map((x2) => {
        if (x2.stats || x2.stats === 0)
          return (0, import_mithril_min3.default)("p", [x2.from, ": ", x2.msg, (0, import_mithril_min3.default)("b", "(" + x2.stats + ")")]);
        return (0, import_mithril_min3.default)("p", [x2.from, ": ", x2.msg]);
      });
    }
    function popups() {
      if (contact == "")
        popup = true;
      else
        popup = popup ? false : true;
    }
    return {
      view: () => (0, import_mithril_min3.default)("div", [
        (0, import_mithril_min3.default)("div", {}, [
          (0, import_mithril_min3.default)("div.content", mapping())
        ]),
        (0, import_mithril_min3.default)("div.ui", [
          (0, import_mithril_min3.default)("div.header", [
            (0, import_mithril_min3.default)("button", { onclick: logout }, "Logout"),
            (0, import_mithril_min3.default)("button.change", { onclick: popups }, "New"),
            (0, import_mithril_min3.default)("button", { onclick: () => clear() }, "Clear"),
            (0, import_mithril_min3.default)("div.persons", { id: popup ? "show" : "hide" }, [
              (0, import_mithril_min3.default)("input.contact", {
                type: "text",
                value: contact,
                oninput: (e2) => contact = e2.target.value,
                placeholder: "New Contact"
              })
            ])
          ]),
          (0, import_mithril_min3.default)("div.navbar", [
            (0, import_mithril_min3.default)("textarea.text-chat", {
              value: msg,
              oninput: (e2) => msg = e2.target.value
            }),
            (0, import_mithril_min3.default)("button.send-chat", { onclick: send }, "send")
          ])
        ])
      ])
    };
  }
  var Home_default = Home;

  // src/views/Account.js
  var import_mithril_min4 = __toESM(require_mithril_min());
  var import_elliptic_min3 = __toESM(require_elliptic_min());

  // src/lib/randpp.js
  var colors = ["red", "green", "blue", "cyan", "magenta", "yellow", "greenyellow", "pink", "purple", "orange", "lightseagreen", "coral", "black", "white"];
  function randpp() {
    var c2 = document.createElement("canvas");
    c2.width = 400;
    c2.height = 400;
    var ctx = c2.getContext("2d");
    for (var i2 = 0; i2 < 4; i2++) {
      for (var j2 = 0; j2 < 4; j2++) {
        var rand = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = rand;
        ctx.fillRect(j2 * 100, i2 * 100, 100, 100);
      }
    }
    return c2.toDataURL();
  }
  function resize(file, loaded) {
    if (!file) {
      loaded(false);
    } else if (file.type.match(/image.*/)) {
      var reader = new FileReader();
      reader.onload = function(readerEvent) {
        var image = new Image();
        image.onload = function(imageEvent) {
          var canvas = document.createElement("canvas"), width = image.width, height = image.height;
          canvas.width = 400;
          canvas.height = 400;
          if (width < height) {
            height *= 400 / width;
            width = 400;
            canvas.getContext("2d").drawImage(image, 0, (height - 400) / -2, width, height);
          } else if (width > height) {
            width *= 400 / height;
            height = 400;
            canvas.getContext("2d").drawImage(image, (width - 400) / -2, 0, width, height);
          } else {
            canvas.getContext("2d").drawImage(image, 0, 0, 400, 400);
          }
          loaded(canvas.toDataURL("image/png"));
        };
        image.src = readerEvent.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // src/views/Account.js
  function Account() {
    if (!localStorage.getItem("priv"))
      import_mithril_min4.default.route.set("/login");
    const file = document.createElement("input");
    file.type = "file";
    const ec = new import_elliptic_min3.ec("secp256k1");
    var photo = randpp();
    var warn = "";
    var pp = photo;
    var username = "";
    var name = "";
    var gender = 1;
    import_mithril_min4.default.request({
      method: "post",
      url: "/api?get-account",
      body: { pub: localStorage.getItem("pub") }
    }).then((data) => {
      if (data && !data.err) {
        username = data.username;
        name = data.name;
        gender = data.gender;
        pp = data.pp;
        console.log("changed");
      } else if (data.err) {
        warn = data.err;
      } else {
        pp = photo;
      }
    });
    file.onchange = (data) => {
      var reader = new FileReader();
      reader.readAsDataURL(data.target.files[0]);
      reader.onload = (e2) => {
        pp = e2.target.result;
        import_mithril_min4.default.redraw();
      };
    };
    const save = () => resize(file.files[0], (url) => {
      if (url)
        pp = url;
      if (username == "") {
        warn = "username must be filled";
        return;
      }
      const key = ec.keyFromPrivate(localStorage.getItem("priv"));
      const pub = key.getPublic(true, "hex");
      const time = Date.now();
      const signature = key.sign("s.auth-" + time).toDER("hex");
      console.log(pp.length);
      const body = {
        data: {
          pp,
          username: username.toLowerCase(),
          name,
          gender
        },
        pub,
        hash: signature,
        time
      };
      import_mithril_min4.default.request({
        method: "post",
        url: "/api?account",
        body
      }).then((data) => {
        if (data.err)
          warn = data.err;
        else
          import_mithril_min4.default.route.set("/");
      });
    });
    const br = (0, import_mithril_min4.default)("br");
    return {
      view: () => (0, import_mithril_min4.default)("div.card", [
        (0, import_mithril_min4.default)("img", { src: pp, onclick: () => file.click(), class: "pp" }),
        (0, import_mithril_min4.default)("label", "Username"),
        br,
        (0, import_mithril_min4.default)("input.text", {
          type: "text",
          required: true,
          value: username,
          oninput: (e2) => username = e2.target.value
        }),
        br,
        br,
        (0, import_mithril_min4.default)("label", "Name"),
        br,
        (0, import_mithril_min4.default)("input.text", {
          type: "text",
          value: name,
          oninput: (e2) => name = e2.target.value
        }),
        br,
        br,
        (0, import_mithril_min4.default)("label", "Gender"),
        br,
        [1, 0].map((x2) => [
          (0, import_mithril_min4.default)("input", {
            type: "radio",
            name: "gender",
            checked: gender == x2,
            onchange: () => gender = x2,
            value: x2
          }),
          x2 == 1 ? "Male" : "Female",
          br
        ]),
        br,
        (0, import_mithril_min4.default)("button.btn", {
          onclick: save
        }, "Save"),
        br,
        (0, import_mithril_min4.default)("p", { id: "warn" }, warn),
        (0, import_mithril_min4.default)(import_mithril_min4.default.route.Link, { href: "/" }, "Back to dashboard")
      ])
    };
  }
  var Account_default = Account;

  // src/main.js
  import_mithril_min5.default.route.prefix = "";
  import_mithril_min5.default.route(document.querySelector("#root"), "/login", {
    "/login": Login_default,
    "/register": Register_default,
    "/": Home_default,
    "/account": Account_default
  });
})();
/*!
 * Socket.IO v4.6.2
 * (c) 2014-2023 Guillermo Rauch
 * Released under the MIT License.
 */
