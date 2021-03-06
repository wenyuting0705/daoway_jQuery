'use strict';

$(document).ready(function () {

  $.get('http://localhost:3000/home', function (data) {
    $('.banner_item').append(template('banner_nav', { data: data }));
    $('.main').append(template('main', { data: data }));
    $(".banner_item li:has(ul)").hover(function () {
      var top = $(this).position().top;
      $(this).find("ul").css({ "display": "block", "top": -top });
      $(this).find(".arrowRight").hide();
      $(this).find(".arrowLeft").show();
    }, function () {
      $(this).find("ul").css("display", "none");
      $(this).find(".arrowRight").show();
      $(this).find(".arrowLeft").hide();
    });
  });

  new Swiper('.swiper-container', {
    // direction: 'horizontal',
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000 //1秒切换一次
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 * pagination.js 2.0.6
 * A jQuery plugin to provide simple yet fully customisable pagination
 * https://github.com/superRaytin/paginationjs

 * Homepage: http://paginationjs.com
 *
 * Copyright 2014-2100, superRaytin
 * Released under the MIT license.
*/
!function (a, b) {
  function c(a) {
    throw new Error("Pagination: " + a);
  }function d(a) {
    a.dataSource || c('"dataSource" is required.'), "string" == typeof a.dataSource ? "undefined" == typeof a.totalNumber ? c('"totalNumber" is required.') : b.isNumeric(a.totalNumber) || c('"totalNumber" is incorrect. (Number)') : i.isObject(a.dataSource) && ("undefined" == typeof a.locator ? c('"dataSource" is an Object, please specify "locator".') : "string" == typeof a.locator || b.isFunction(a.locator) || c("" + a.locator + " is incorrect. (String | Function)"));
  }function e(a, b) {
    return ("object" == (b = typeof a === "undefined" ? "undefined" : _typeof(a)) ? null == a && "null" || Object.prototype.toString.call(a).slice(8, -1) : b).toLowerCase();
  }"undefined" == typeof b && c("Pagination requires jQuery.");var f = "pagination",
      g = "addHook",
      h = "__pagination-";b.fn.pagination && (f = "pagination2"), b.fn[f] = function (e) {
    if ("undefined" == typeof e) return this;var f = b(this),
        g = { initialize: function initialize() {
        var a = this;if (f.data("pagination") || f.data("pagination", {}), a.callHook("beforeInit") !== !1) {
          f.data("pagination").initialized && b(".paginationjs", f).remove(), a.disabled = !!k.disabled;var c = a.model = { pageRange: k.pageRange, pageSize: k.pageSize };a.parseDataSource(k.dataSource, function (b) {
            if (a.sync = i.isArray(b), a.sync && (c.totalNumber = k.totalNumber = b.length), c.totalPage = a.getTotalPage(), !(k.hideWhenLessThanOnePage && c.totalPage <= 1)) {
              var d = a.render(!0);k.className && d.addClass(k.className), c.el = d, f["bottom" === k.position ? "append" : "prepend"](d), a.observer(), f.data("pagination").initialized = !0, a.callHook("afterInit", d);
            }
          });
        }
      }, render: function render(a) {
        var c = this,
            d = c.model,
            e = d.el || b('<div class="paginationjs"></div>'),
            f = a !== !0;c.callHook("beforeRender", f);var g = d.pageNumber || k.pageNumber,
            h = k.pageRange,
            i = d.totalPage,
            j = g - h,
            l = g + h;return l > i && (l = i, j = i - 2 * h, j = 1 > j ? 1 : j), 1 >= j && (j = 1, l = Math.min(2 * h + 1, i)), e.html(c.createTemplate({ currentPage: g, pageRange: h, totalPage: i, rangeStart: j, rangeEnd: l })), c.callHook("afterRender", f), e;
      }, createTemplate: function createTemplate(a) {
        var c,
            d,
            e = this,
            f = a.currentPage,
            g = a.totalPage,
            h = a.rangeStart,
            i = a.rangeEnd,
            j = k.totalNumber,
            l = k.showPrevious,
            m = k.showNext,
            n = k.showPageNumbers,
            o = k.showNavigator,
            p = k.showGoInput,
            q = k.showGoButton,
            r = k.pageLink,
            s = k.prevText,
            t = k.nextText,
            u = k.ellipsisText,
            v = k.goButtonText,
            w = k.classPrefix,
            x = k.activeClassName,
            y = k.disableClassName,
            z = k.ulClassName,
            A = b.isFunction(k.formatNavigator) ? k.formatNavigator() : k.formatNavigator,
            B = b.isFunction(k.formatGoInput) ? k.formatGoInput() : k.formatGoInput,
            C = b.isFunction(k.formatGoButton) ? k.formatGoButton() : k.formatGoButton,
            D = b.isFunction(k.autoHidePrevious) ? k.autoHidePrevious() : k.autoHidePrevious,
            E = b.isFunction(k.autoHideNext) ? k.autoHideNext() : k.autoHideNext,
            F = b.isFunction(k.header) ? k.header() : k.header,
            G = b.isFunction(k.footer) ? k.footer() : k.footer,
            H = "",
            I = '<input type="text" class="J-paginationjs-go-pagenumber">',
            J = '<input type="button" class="J-paginationjs-go-button" value="' + v + '">';if (F && (c = e.replaceVariables(F, { currentPage: f, totalPage: g, totalNumber: j }), H += c), l || n || m) {
          if (H += '<div class="paginationjs-pages">', H += z ? '<ul class="' + z + '">' : "<ul>", l && (1 === f ? D || (H += '<li class="' + w + "-prev " + y + '"><a>' + s + "</a></li>") : H += '<li class="' + w + '-prev J-paginationjs-previous" data-num="' + (f - 1) + '" title="Previous page"><a href="' + r + '">' + s + "</a></li>"), n) {
            if (3 >= h) for (d = 1; h > d; d++) {
              H += d == f ? '<li class="' + w + "-page J-paginationjs-page " + x + '" data-num="' + d + '"><a>' + d + "</a></li>" : '<li class="' + w + '-page J-paginationjs-page" data-num="' + d + '"><a href="' + r + '">' + d + "</a></li>";
            } else k.showFirstOnEllipsisShow && (H += '<li class="' + w + "-page " + w + '-first J-paginationjs-page" data-num="1"><a href="' + r + '">1</a></li>'), H += '<li class="' + w + "-ellipsis " + y + '"><a>' + u + "</a></li>";for (d = h; i >= d; d++) {
              H += d == f ? '<li class="' + w + "-page J-paginationjs-page " + x + '" data-num="' + d + '"><a>' + d + "</a></li>" : '<li class="' + w + '-page J-paginationjs-page" data-num="' + d + '"><a href="' + r + '">' + d + "</a></li>";
            }if (i >= g - 2) for (d = i + 1; g >= d; d++) {
              H += '<li class="' + w + '-page J-paginationjs-page" data-num="' + d + '"><a href="' + r + '">' + d + "</a></li>";
            } else H += '<li class="' + w + "-ellipsis " + y + '"><a>' + u + "</a></li>", k.showLastOnEllipsisShow && (H += '<li class="' + w + "-page " + w + '-last J-paginationjs-page" data-num="' + g + '"><a href="' + r + '">' + g + "</a></li>");
          }m && (f == g ? E || (H += '<li class="' + w + "-next " + y + '"><a>' + t + "</a></li>") : H += '<li class="' + w + '-next J-paginationjs-next" data-num="' + (f + 1) + '" title="Next page"><a href="' + r + '">' + t + "</a></li>"), H += "</ul></div>";
        }return o && A && (c = e.replaceVariables(A, { currentPage: f, totalPage: g, totalNumber: j }), H += '<div class="' + w + '-nav J-paginationjs-nav">' + c + "</div>"), p && B && (c = e.replaceVariables(B, { currentPage: f, totalPage: g, totalNumber: j, input: I }), H += '<div class="' + w + '-go-input">' + c + "</div>"), q && C && (c = e.replaceVariables(C, { currentPage: f, totalPage: g, totalNumber: j, button: J }), H += '<div class="' + w + '-go-button">' + c + "</div>"), G && (c = e.replaceVariables(G, { currentPage: f, totalPage: g, totalNumber: j }), H += c), H;
      }, go: function go(a, c) {
        function d(a) {
          if (e.callHook("beforePaging", h) === !1) return !1;if (g.direction = "undefined" == typeof g.pageNumber ? 0 : h > g.pageNumber ? 1 : -1, g.pageNumber = h, e.render(), e.disabled && !e.sync && e.enable(), f.data("pagination").model = g, b.isFunction(k.formatResult)) {
            var d = b.extend(!0, [], a);i.isArray(a = k.formatResult(d)) || (a = d);
          }f.data("pagination").currentPageData = a, e.doCallback(a, c), e.callHook("afterPaging", h), 1 == h && e.callHook("afterIsFirstPage"), h == g.totalPage && e.callHook("afterIsLastPage");
        }var e = this,
            g = e.model;if (!e.disabled) {
          var h = a,
              j = k.pageSize,
              l = g.totalPage;if (h = parseInt(h), !(!h || 1 > h || h > l)) {
            if (e.sync) return void d(e.getDataSegment(h));var m = {},
                n = k.alias || {};m[n.pageSize ? n.pageSize : "pageSize"] = j, m[n.pageNumber ? n.pageNumber : "pageNumber"] = h;var o = { type: "get", cache: !1, data: {}, contentType: "application/x-www-form-urlencoded; charset=UTF-8", dataType: "json", async: !0 };b.extend(!0, o, k.ajax), b.extend(o.data || {}, m), o.url = k.dataSource, o.success = function (a) {
              d(e.filterDataByLocator(a));
            }, o.error = function (a, b, c) {
              k.formatAjaxError && k.formatAjaxError(a, b, c), e.enable();
            }, e.disable(), b.ajax(o);
          }
        }
      }, doCallback: function doCallback(a, c) {
        var d = this,
            e = d.model;b.isFunction(c) ? c(a, e) : b.isFunction(k.callback) && k.callback(a, e);
      }, destroy: function destroy() {
        this.callHook("beforeDestroy") !== !1 && (this.model.el.remove(), f.off(), b("#paginationjs-style").remove(), this.callHook("afterDestroy"));
      }, previous: function previous(a) {
        this.go(this.model.pageNumber - 1, a);
      }, next: function next(a) {
        this.go(this.model.pageNumber + 1, a);
      }, disable: function disable() {
        var a = this,
            b = a.sync ? "sync" : "async";a.callHook("beforeDisable", b) !== !1 && (a.disabled = !0, a.model.disabled = !0, a.callHook("afterDisable", b));
      }, enable: function enable() {
        var a = this,
            b = a.sync ? "sync" : "async";a.callHook("beforeEnable", b) !== !1 && (a.disabled = !1, a.model.disabled = !1, a.callHook("afterEnable", b));
      }, refresh: function refresh(a) {
        this.go(this.model.pageNumber, a);
      }, show: function show() {
        var a = this;a.model.el.is(":visible") || a.model.el.show();
      }, hide: function hide() {
        var a = this;a.model.el.is(":visible") && a.model.el.hide();
      }, replaceVariables: function replaceVariables(a, b) {
        var c;for (var d in b) {
          var e = b[d],
              f = new RegExp("<%=\\s*" + d + "\\s*%>", "img");c = (c || a).replace(f, e);
        }return c;
      }, getDataSegment: function getDataSegment(a) {
        var b = k.pageSize,
            c = k.dataSource,
            d = k.totalNumber,
            e = b * (a - 1) + 1,
            f = Math.min(a * b, d);return c.slice(e - 1, f);
      }, getTotalPage: function getTotalPage() {
        return Math.ceil(k.totalNumber / k.pageSize);
      }, getLocator: function getLocator(a) {
        var d;return "string" == typeof a ? d = a : b.isFunction(a) ? d = a() : c('"locator" is incorrect. (String | Function)'), d;
      }, filterDataByLocator: function filterDataByLocator(a) {
        var d,
            e = this.getLocator(k.locator);if (i.isObject(a)) {
          try {
            b.each(e.split("."), function (b, c) {
              d = (d ? d : a)[c];
            });
          } catch (f) {}d ? i.isArray(d) || c("dataSource." + e + " must be an Array.") : c("dataSource." + e + " is undefined.");
        }return d || a;
      }, parseDataSource: function parseDataSource(a, d) {
        var e = this,
            f = arguments;i.isObject(a) ? d(k.dataSource = e.filterDataByLocator(a)) : i.isArray(a) ? d(k.dataSource = a) : b.isFunction(a) ? k.dataSource(function (a) {
          b.isFunction(a) && c('Unexpect parameter of the "done" Function.'), f.callee.call(e, a, d);
        }) : "string" == typeof a ? (/^https?|file:/.test(a) && (k.ajaxDataType = "jsonp"), d(a)) : c('Unexpect data type of the "dataSource".');
      }, callHook: function callHook(c) {
        var d,
            e = f.data("pagination"),
            g = Array.prototype.slice.apply(arguments);return g.shift(), k[c] && b.isFunction(k[c]) && k[c].apply(a, g) === !1 && (d = !1), e.hooks && e.hooks[c] && b.each(e.hooks[c], function (b, c) {
          c.apply(a, g) === !1 && (d = !1);
        }), d !== !1;
      }, observer: function observer() {
        var a = this,
            d = a.model.el;f.on(h + "go", function (d, e, f) {
          e = parseInt(b.trim(e)), e && (b.isNumeric(e) || c('"pageNumber" is incorrect. (Number)'), a.go(e, f));
        }), d.delegate(".J-paginationjs-page", "click", function (c) {
          var d = b(c.currentTarget),
              e = b.trim(d.attr("data-num"));return !e || d.hasClass(k.disableClassName) || d.hasClass(k.activeClassName) ? void 0 : a.callHook("beforePageOnClick", c, e) === !1 ? !1 : (a.go(e), a.callHook("afterPageOnClick", c, e), k.pageLink ? void 0 : !1);
        }), d.delegate(".J-paginationjs-previous", "click", function (c) {
          var d = b(c.currentTarget),
              e = b.trim(d.attr("data-num"));return e && !d.hasClass(k.disableClassName) ? a.callHook("beforePreviousOnClick", c, e) === !1 ? !1 : (a.go(e), a.callHook("afterPreviousOnClick", c, e), k.pageLink ? void 0 : !1) : void 0;
        }), d.delegate(".J-paginationjs-next", "click", function (c) {
          var d = b(c.currentTarget),
              e = b.trim(d.attr("data-num"));return e && !d.hasClass(k.disableClassName) ? a.callHook("beforeNextOnClick", c, e) === !1 ? !1 : (a.go(e), a.callHook("afterNextOnClick", c, e), k.pageLink ? void 0 : !1) : void 0;
        }), d.delegate(".J-paginationjs-go-button", "click", function () {
          var c = b(".J-paginationjs-go-pagenumber", d).val();return a.callHook("beforeGoButtonOnClick", event, c) === !1 ? !1 : (f.trigger(h + "go", c), void a.callHook("afterGoButtonOnClick", event, c));
        }), d.delegate(".J-paginationjs-go-pagenumber", "keyup", function (c) {
          if (13 === c.which) {
            var e = b(c.currentTarget).val();if (a.callHook("beforeGoInputOnEnter", c, e) === !1) return !1;f.trigger(h + "go", e), b(".J-paginationjs-go-pagenumber", d).focus(), a.callHook("afterGoInputOnEnter", c, e);
          }
        }), f.on(h + "previous", function (b, c) {
          a.previous(c);
        }), f.on(h + "next", function (b, c) {
          a.next(c);
        }), f.on(h + "disable", function () {
          a.disable();
        }), f.on(h + "enable", function () {
          a.enable();
        }), f.on(h + "refresh", function (b, c) {
          a.refresh(c);
        }), f.on(h + "show", function () {
          a.show();
        }), f.on(h + "hide", function () {
          a.hide();
        }), f.on(h + "destroy", function () {
          a.destroy();
        }), k.triggerPagingOnInit && f.trigger(h + "go", Math.min(k.pageNumber, a.model.totalPage));
      } };if (f.data("pagination") && f.data("pagination").initialized === !0) {
      if (b.isNumeric(e)) return f.trigger.call(this, h + "go", e, arguments[1]), this;if ("string" == typeof e) {
        var j = Array.prototype.slice.apply(arguments);switch (j[0] = h + j[0], e) {case "previous":case "next":case "go":case "disable":case "enable":case "refresh":case "show":case "hide":case "destroy":
            f.trigger.apply(this, j);break;case "getSelectedPageNum":
            return f.data("pagination").model ? f.data("pagination").model.pageNumber : f.data("pagination").attributes.pageNumber;case "getTotalPage":
            return f.data("pagination").model.totalPage;case "getSelectedPageData":
            return f.data("pagination").currentPageData;case "isDisabled":
            return f.data("pagination").model.disabled === !0;default:
            c("Pagination do not provide action: " + e);}return this;
      }
    } else i.isObject(e) || c("Illegal options");var k = b.extend({}, arguments.callee.defaults, e);return d(k), g.initialize(), this;
  }, b.fn[f].defaults = { totalNumber: 1, pageNumber: 1, pageSize: 10, pageRange: 2, showPrevious: !0, showNext: !0, showPageNumbers: !0, showNavigator: !1, showGoInput: !1, showGoButton: !1, pageLink: "", prevText: "&laquo;", nextText: "&raquo;", ellipsisText: "...", goButtonText: "Go", classPrefix: "paginationjs", activeClassName: "active", disableClassName: "disabled", inlineStyle: !0, formatNavigator: "<%= currentPage %> / <%= totalPage %>", formatGoInput: "<%= input %>", formatGoButton: "<%= button %>", position: "bottom", autoHidePrevious: !1, autoHideNext: !1, triggerPagingOnInit: !0, hideWhenLessThanOnePage: !1, showFirstOnEllipsisShow: !0, showLastOnEllipsisShow: !0, callback: function callback() {} }, b.fn[g] = function (a, d) {
    arguments.length < 2 && c("Missing argument."), b.isFunction(d) || c("callback must be a function.");var e = b(this),
        f = e.data("pagination");f || (e.data("pagination", {}), f = e.data("pagination")), !f.hooks && (f.hooks = {}), f.hooks[a] = f.hooks[a] || [], f.hooks[a].push(d);
  }, b[f] = function (a, d) {
    arguments.length < 2 && c("Requires two parameters.");var e;return e = "string" != typeof a && a instanceof jQuery ? a : b(a), e.length ? (e.pagination(d), e) : void 0;
  };var i = {};b.each(["Object", "Array"], function (a, b) {
    i["is" + b] = function (a) {
      return e(a) === b.toLowerCase();
    };
  }), "function" == typeof define && define.amd && define(function () {
    return b;
  });
}(undefined, window.jQuery);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function () {
  function a(a) {
    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
  }function b(a) {
    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
  }function c(c, d) {
    function e(a) {
      return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a;
    }function f(b) {
      var c = m;if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
        return m++, "$line=" + m + ";";
      })), 0 === b.indexOf("=")) {
        var e = l && !/^=[=#]/.test(b);if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
          var f = b.replace(/\s*\([^\)]+\)/, "");n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
        } else b = "$string(" + b + ")";b = s[1] + b + s[2];
      }return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
        if (a && !p[a]) {
          var b;b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0;
        }
      }), b + "\n";
    }var g = d.debug,
        h = d.openTag,
        i = d.closeTag,
        j = d.parser,
        k = d.compress,
        l = d.escape,
        m = 1,
        p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
        q = "".trim,
        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
        t = q ? "$out+=text;return $out;" : "$out.push(text);",
        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
        x = s[0],
        y = "return new String(" + s[3] + ");";r(c.split(h), function (a) {
      a = a.split(i);var b = a[0],
          c = a[1];1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
    });var z = w + x + y;g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try {
      var A = new Function("$data", "$filename", z);return A.prototype = n, A;
    } catch (B) {
      throw B.temp = "function anonymous($data,$filename) {" + z + "}", B;
    }
  }var d = function d(a, b) {
    return "string" == typeof b ? q(b, { filename: a }) : g(a, b);
  };d.version = "3.0.0", d.config = function (a, b) {
    e[a] = b;
  };var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
      f = d.cache = {};d.render = function (a, b) {
    return q(a, b);
  };var g = d.renderFile = function (a, b) {
    var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });return b ? c(b) : c;
  };d.get = function (a) {
    var b;if (f[a]) b = f[a];else if ("object" == (typeof document === "undefined" ? "undefined" : _typeof(document))) {
      var c = document.getElementById(a);if (c) {
        var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");b = q(d, { filename: a });
      }
    }return b;
  };var h = function h(a, b) {
    return "string" != typeof a && (b = typeof a === "undefined" ? "undefined" : _typeof(a), "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a;
  },
      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
      j = function j(a) {
    return i[a];
  },
      k = function k(a) {
    return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
  },
      l = Array.isArray || function (a) {
    return "[object Array]" === {}.toString.call(a);
  },
      m = function m(a, b) {
    var c, d;if (l(a)) for (c = 0, d = a.length; d > c; c++) {
      b.call(a, a[c], c, a);
    } else for (c in a) {
      b.call(a, a[c], c);
    }
  },
      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };d.helper = function (a, b) {
    o[a] = b;
  };var o = d.helpers = n.$helpers;d.onerror = function (a) {
    var b = "Template Error\n\n";for (var c in a) {
      b += "<" + c + ">\n" + a[c] + "\n\n";
    }"object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.error(b);
  };var p = function p(a) {
    return d.onerror(a), function () {
      return "{Template Error}";
    };
  },
      q = d.compile = function (a, b) {
    function d(c) {
      try {
        return new i(c, h) + "";
      } catch (d) {
        return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
      }
    }b = b || {};for (var g in e) {
      void 0 === b[g] && (b[g] = e[g]);
    }var h = b.filename;try {
      var i = c(a, b);
    } catch (j) {
      return j.filename = h || "anonymous", j.name = "Syntax Error", p(j);
    }return d.prototype = i.prototype, d.toString = function () {
      return i.toString();
    }, h && b.cache && (f[h] = d), d;
  },
      r = n.$each,
      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
      u = /[^\w$]+/g,
      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
      w = /^\d[^,]*|,\d[^,]*/g,
      x = /^,+|,+$/g,
      y = /^$|,+/;e.openTag = "{{", e.closeTag = "}}";var z = function z(a, b) {
    var c = b.split(":"),
        d = c.shift(),
        e = c.join(":") || "";return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")";
  };e.parser = function (a) {
    a = a.replace(/^\s/, "");var b = a.split(" "),
        c = b.shift(),
        e = b.join(" ");switch (c) {case "if":
        a = "if(" + e + "){";break;case "else":
        b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{";break;case "/if":
        a = "}";break;case "each":
        var f = b[0] || "$data",
            g = b[1] || "as",
            h = b[2] || "$value",
            i = b[3] || "$index",
            j = h + "," + i;"as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){";break;case "/each":
        a = "});";break;case "echo":
        a = "print(" + e + ");";break;case "print":case "include":
        a = c + "(" + b.join(",") + ");";break;default:
        if (/^\s*\|\s*[\w\$]/.test(e)) {
          var k = !0;0 === a.indexOf("#") && (a = a.substr(1), k = !1);for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) {
            o = z(o, m[l]);
          }a = (k ? "=" : "=#") + o;
        } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a;}return a;
  }, "function" == typeof define ? define(function () {
    return d;
  }) : "undefined" != typeof exports ? module.exports = d : this.template = d;
}();