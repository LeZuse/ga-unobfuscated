// Beautified with http://jsbeautifier.org/

(function() {
  var encodeURIComponent = encodeURIComponent,
    window = window,
    Math = Math;

  function setHref(a, b) {
    return a.href = b
  }
  var replace = "replace",
    data = "data",
    match = "match",
    port = "port",
    createElement = "createElement",
    setAttribute = "setAttribute",
    getTime = "getTime",
    split = "split",
    location = "location",
    hadOwnProperty = "hasOwnProperty",
    hostname = "hostname",
    search = "search",
    protocol = "protocol",
    href = "href",
    action = "action",
    apply = "apply",
    push = "push",
    hash = "hash",
    test = "test",
    slice = "slice",
    cookie = "cookie",
    indexOf = "indexOf",
    defaultValue = "defaultValue",
    name = "name",
    length = "length",
    sendBeacon = "sendBeacon",
    prototype = "prototype",
    clientWidth = "clientWidth",
    target = "target",
    call = "call",
    clientHeight = "clientHeight",
    substring = "substring",
    navigator = "navigator",
    join = "join",
    toLowerCase = "toLowerCase";
  var FlagMap = function(a) {
    this.w = a || []
  };
  FlagMap[prototype].set = function(a) {
    this.w[a] = !0
  };
  FlagMap[prototype].encode = function() {
    for (var a = [], b = 0; b < this.w[length]; b++) this.w[b] && (a[Math.floor(b / 6)] = a[Math.floor(b / 6)] ^ 1 << b % 6);
    for (b = 0; b < a[length]; b++) a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
    return a[join]("") + "~"
  };
  var flags = new FlagMap;

  function J(a) {
    flags.set(a)
  }
  var Nd = function(a, b) {
      var c = new FlagMap(Dd(a));
      c.set(b);
      a.set(Gd, c.w)
    },
    Td = function(a) {
      a = Dd(a);
      a = new FlagMap(a);
      for (var b = flags.w[slice](), c = 0; c < a.w[length]; c++) b[c] = b[c] || a.w[c];
      return (new FlagMap(b)).encode()
    },
    Dd = function(a) {
      a = a.get(Gd);
      isArray(a) || (a = []);
      return a
    };
  var isFunction = function(a) {
      return "function" == typeof a
    },
    isArray = function(a) {
      return "[object Array]" == Object[prototype].toString[call](Object(a))
    },
    isString = function(a) {
      return void 0 != a && -1 < (a.constructor + "")[indexOf]("String")
    },
    indexOfIsZero = function(a, b) {
      return 0 == a[indexOf](b)
    },
    maybeTrimWhiteSpace = function(a) {
      return a ? a["replace"](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    },
    newImg = function(a) {
      var b = document[createElement]("img");
      b.width = 1;
      b.height = 1;
      b.src = a;
      return b
    },
    ua = function() {},
    K = function(a) {
      if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
      J(28);
      return a
    },
    L = function(a, b, c, d) {
      try {
        a.addEventListener ? a.addEventListener(b,
          c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
      } catch (e) {
        J(27)
      }
    },
    wa = function(a, b) {
      if (a) {
        var c = document[createElement]("script");
        c.type = "text/javascript";
        c.async = !0;
        c.src = a;
        b && (c.id = b);
        var d = document.getElementsByTagName("script")[0];
        d.parentNode.insertBefore(c, d)
      }
    },
    isHttps = function() {
      return "https:" == document[location][protocol]
    },
    getHostnameWithoutWww = function() {
      var a = "" + document[location][hostname];
      return 0 == a[indexOf]("www.") ? a[substring](4) : a
    },
    ya = function(a) {
      var b = document.referrer;
      if (/^https?:\/\//i [test](b)) {
        if (a) return b;
        a = "//" + document[location][hostname];
        var c = b[indexOf](a);
        if (5 == c || 6 == c)
          if (a = b.charAt(c + a[length]), "/" == a || "?" == a || "" ==
            a || ":" == a) return;
        return b
      }
    },
    za = function(a, b) {
      if (1 == b[length] && null != b[0] && "object" === typeof b[0]) return b[0];
      for (var c = {}, d = Math.min(a[length] + 1, b[length]), e = 0; e < d; e++)
        if ("object" === typeof b[e]) {
          for (var g in b[e]) b[e][hadOwnProperty](g) && (c[g] = b[e][g]);
          break
        } else e < a[length] && (c[a[e]] = b[e]);
      return c
    };
  var HashMap = function() {
    this.keys = [];
    this.values = {};
    this.m = {}
  };
  HashMap[prototype].set = function(a, b, c) {
    this.keys[push](a);
    c ? this.m[":" + a] = b : this.values[":" + a] = b
  };
  HashMap[prototype].get = function(a) {
    return this.m[hadOwnProperty](":" + a) ? this.m[":" + a] : this.values[":" + a]
  };
  HashMap[prototype].map = function(a) {
    for (var b = 0; b < this.keys[length]; b++) {
      var c = this.keys[b],
        d = this.get(c);
      d && a(c, d)
    }
  };
  var window = window,
    document = document,
    Mc = function() {
      for (var a = window[navigator].userAgent + (document[cookie] ? document[cookie] : "") + (document.referrer ? document.referrer : ""), b = a[length], c = window.history[length]; 0 < c;) a += c-- ^ b++;
      return La(a)
    };
  var Aa = function(a) {
    var b = window._gaUserPrefs;
    if (b && b.ioo && b.ioo() || a && !0 === window["ga-disable-" + a]) return !0;
    try {
      var c = window.external;
      if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
    } catch (d) {}
    return !1
  };
  var Ca = function(a) {
      var b = [],
        c = document[cookie][split](";");
      a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
      for (var d = 0; d < c[length]; d++) {
        var e = c[d][match](a);
        e && b[push](e[1])
      }
      return b
    },
    setCookie = function(a, b, c, d, e, g) {
      e = Aa(e) ? !1 : eb[test](document[location][hostname]) || "/" == c && vc[test](d) ? !1 : !0;
      if (!e) return !1;
      b && 1200 < b[length] && (b = b[substring](0, 1200), J(24));
      c = a + "=" + b + "; path=" + c + "; ";
      g && (c += "expires=" + (new Date((new Date)[getTime]() + g)).toGMTString() + "; ");
      d && "none" != d && (c += "domain=" + d + ";");
      d = document[cookie];
      document.cookie = c;
      if (!(d = d != document[cookie])) a: {
        a = Ca(a);
        for (d = 0; d < a[length]; d++)
          if (b == a[d]) {
            d = !0;
            break a
          }
        d = !1
      }
      return d
    },
    Cc = function(a) {
      return K(a)["replace"](/\(/g, "%28")["replace"](/\)/g, "%29")
    },
    vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    eb = /(^|\.)doubleclick\.net$/i;
  var getTrackUrlBase = function() {
      return (falsyValue || isHttps() ? "https:" : "http:") + "//www.google-analytics.com"
    },
    Da = function(a) {
      this.name = "len";
      this.message = a + "-8192"
    },
    send = function(a, b, c) {
      c = c || ua;
      if (2036 >= b[length]) sendUsingImg(a, b, c);
      else if (8192 >= b[length]) sendUsingBeacon(a, b, c) || sendUsingXHR(a, b, c) || sendUsingImg(a, b, c);
      else throw ge("len", b[length]), new Da(b[length]);
    },
    sendUsingImg = function(a, b, c) {
      var d = newImg(a + "?" + b);
      d.onload = d.onerror = function() {
        d.onload = null;
        d.onerror = null;
        c()
      }
    },
    sendUsingXHR = function(a, b, c) {
      var d = window.XMLHttpRequest;
      if (!d) return !1;
      var e = new d;
      if (!("withCredentials" in e)) return !1;
      e.open("POST",
        a, !0);
      e.withCredentials = !0;
      e.setRequestHeader("Content-Type", "text/plain");
      e.onreadystatechange = function() {
        4 == e.readyState && (c(), e = null)
      };
      e.send(b);
      return !0
    },
    sendUsingBeacon = function(a, b, c) {
      return window[navigator]["sendBeacon"] ? window[navigator]["sendBeacon"](a, b) ? (c(), !0) : !1 : !1
    },
    ge = function(a, b, c) {
      1 <= 100 * Math.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j37", "sr=1"], b && a[push]("_f=" + b), c && a[push]("_m=" + K(c[substring](0, 100))), a[push]("aip=1"), a[push]("z=" + fe()), sendUsingImg(getTrackUrlBase() + "/collect", a[join]("&"), ua))
    };
  var Ha = function() {
    this.M = []
  };
  Ha[prototype].add = function(a) {
    this.M[push](a)
  };
  Ha[prototype].D = function(a) {
    try {
      for (var b = 0; b < this.M[length]; b++) {
        var c = a.get(this.M[b]);
        c && isFunction(c) && c[call](window, a)
      }
    } catch (d) {}
    b = a.get(Ia);
    b != ua && isFunction(b) && (a.set(Ia, ua, !0), setTimeout(b, 10))
  };

  function Ja(a) {
    if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka)) throw "abort";
  }

  function Ma(a) {
    if (Aa(P(a, Na))) throw "abort";
  }

  function Oa() {
    var a = document[location][protocol];
    if ("http:" != a && "https:" != a) throw "abort";
  }

  function Pa(a) {
    try {
      window[navigator]["sendBeacon"] ? J(42) : window.XMLHttpRequest && "withCredentials" in new window.XMLHttpRequest && J(40)
    } catch (b) {}
    a.set(ld, Td(a), !0);
    a.set(Ac, R(a, Ac) + 1);
    var c = [];
    filterMap.map(function(b, e) {
      if (e.F) {
        var g = a.get(b);
        void 0 != g && g != e[defaultValue] && ("boolean" == typeof g && (g *= 1), c[push](e.F + "=" + K("" + g)))
      }
    });
    c[push]("z=" + Bd());
    a.set(Ra, c[join]("&"), !0)
  }

  function maybeTrackPageview(a) {
    var b = P(a, gd) || getTrackUrlBase() + "/collect",
      c = P(a, fa);
    !c && a.get(Vd) && (c = "beacon");
    if (c) {
      var d = P(a, Ra),
        e = a.get(Ia),
        e = e || ua;
      "image" == c ? sendUsingImg(b, d, e) : "xhr" == c && sendUsingXHR(b, d, e) || "beacon" == c && sendUsingBeacon(b, d, e) || send(b, d, e)
    } else send(b, P(a, Ra), a.get(Ia));
    a.set(Ia, ua, !0)
  }

  function Hc(a) {
    var b = window.gaData;
    b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
  }

  function cd() {
    if (window[navigator] && "preview" == window[navigator].loadPurpose) throw "abort";
  }

  function yd(a) {
    var b = window.gaDevIds;
    isArray(b) && 0 != b[length] && a.set("&did", b[join](","), !0)
  }

  function vb(a) {
    if (!a.get(Na)) throw "abort";
  };
  var hd = function() {
      return Math.round(2147483647 * Math.random())
    },
    Bd = function() {
      try {
        var a = new Uint32Array(1);
        window.crypto.getRandomValues(a);
        return a[0] & 2147483647
      } catch (b) {
        return hd()
      }
    },
    fe = hd;

  function Ta(a) {
    var b = R(a, Ua);
    500 <= b && J(15);
    var c = P(a, Va);
    if ("transaction" != c && "item" != c) {
      var c = R(a, Wa),
        d = (new Date)[getTime](),
        e = R(a, Xa);
      0 == e && a.set(Xa, d);
      e = Math.round(2 * (d - e) / 1E3);
      0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
      if (0 >= c) throw "abort";
      a.set(Wa, --c)
    }
    a.set(Ua, ++b)
  };
  var Ya = function() {
      this.data = new HashMap
    },
    filterMap = new HashMap,
    Za = [];
  Ya[prototype].get = function(a) {
    var b = $a(a),
      c = this["data"].get(a);
    b && void 0 == c && (c = isFunction(b[defaultValue]) ? b[defaultValue]() : b[defaultValue]);
    return b && b.Z ? b.Z(this, a, c) : c
  };
  var P = function(a, b) {
      var c = a.get(b);
      return void 0 == c ? "" : "" + c
    },
    R = function(a, b) {
      var c = a.get(b);
      return void 0 == c || "" === c ? 0 : 1 * c
    };
  Ya[prototype].set = function(a, b, c) {
    if (a)
      if ("object" == typeof a)
        for (var d in a) a[hadOwnProperty](d) && ab(this, d, a[d], c);
      else ab(this, a, b, c)
  };
  var ab = function(a, b, c, d) {
      if (void 0 != c) switch (b) {
        case Na:
          wb[test](c)
      }
      var e = $a(b);
      e && e.o ? e.o(a, b, c, d) : a["data"].set(b, c, d)
    },
    trackValue = function(a, b, c, d, e) {
      this.name = a;
      this.F = b;
      this.Z = d;
      this.o = e;
      this.defaultValue = c
    },
    $a = function(a) {
      var b = filterMap.get(a);
      if (!b)
        for (var c = 0; c < Za[length]; c++) {
          var d = Za[c],
            e = d[0].exec(a);
          if (e) {
            b = d[1](e);
            filterMap.set(b[name], b);
            break
          }
        }
      return b
    },
    yc = function(a) {
      var b;
      filterMap.map(function(c, d) {
        d.F == a && (b = d)
      });
      return b && b[name]
    },
    addNewFilter = function(filterName, trackValueName, c, d, e) {
      filterName = new trackValue(filterName, trackValueName, c, d, e);
      filterMap.set(filterName[name], filterName);
      return filterName[name]
    },
    cb = function(a, b) {
      Za[push]([new RegExp("^" +
        a + "$"), b])
    },
    T = function(a, b, c) {
      return addNewFilter(a, b, c, void 0, db)
    },
    db = function() {};
  var gaObjectName = isString(window.GoogleAnalyticsObject) && maybeTrimWhiteSpace(window.GoogleAnalyticsObject) || "ga",
    falsyValue = !1,
    he = addNewFilter("_br"),
    hb = T("apiVersion", "v"),
    ib = T("clientVersion", "_v");
  addNewFilter("anonymizeIp", "aip");
  var jb = addNewFilter("adSenseId", "a"),
    Va = addNewFilter("hitType", "t"),
    Ia = addNewFilter("hitCallback"),
    Ra = addNewFilter("hitPayload");
  addNewFilter("nonInteraction", "ni");
  addNewFilter("currencyCode", "cu");
  addNewFilter("dataSource", "ds");
  var Vd = addNewFilter("useBeacon", void 0, !1),
    fa = addNewFilter("transport");
  addNewFilter("sessionControl", "sc", "");
  addNewFilter("sessionGroup", "sg");
  addNewFilter("queueTime", "qt");
  var Ac = addNewFilter("_s", "_s");
  addNewFilter("screenName", "cd");
  var kb = addNewFilter("location", "dl", ""),
    lb = addNewFilter("referrer", "dr"),
    mb = addNewFilter("page", "dp", "");
  addNewFilter("hostname", "dh");
  var nb = addNewFilter("language", "ul"),
    ob = addNewFilter("encoding", "de");
  addNewFilter("title", "dt", function() {
    return document.title || void 0
  });
  cb("contentGroup([0-9]+)", function(a) {
    return new trackValue(a[0], "cg" + a[1])
  });
  var pb = addNewFilter("screenColors", "sd"),
    qb = addNewFilter("screenResolution", "sr"),
    rb = addNewFilter("viewportSize", "vp"),
    sb = addNewFilter("javaEnabled", "je"),
    tb = addNewFilter("flashVersion", "fl");
  addNewFilter("campaignId", "ci");
  addNewFilter("campaignName", "cn");
  addNewFilter("campaignSource", "cs");
  addNewFilter("campaignMedium", "cm");
  addNewFilter("campaignKeyword", "ck");
  addNewFilter("campaignContent", "cc");
  var ub = addNewFilter("eventCategory", "ec"),
    xb = addNewFilter("eventAction", "ea"),
    yb = addNewFilter("eventLabel", "el"),
    zb = addNewFilter("eventValue", "ev"),
    Bb = addNewFilter("socialNetwork", "sn"),
    Cb = addNewFilter("socialAction", "sa"),
    Db = addNewFilter("socialTarget", "st"),
    Eb = addNewFilter("l1", "plt"),
    Fb = addNewFilter("l2", "pdt"),
    Gb = addNewFilter("l3", "dns"),
    Hb = addNewFilter("l4", "rrt"),
    Ib = addNewFilter("l5", "srt"),
    Jb = addNewFilter("l6", "tcp"),
    Kb = addNewFilter("l7", "dit"),
    Lb = addNewFilter("l8", "clt"),
    Mb = addNewFilter("timingCategory", "utc"),
    Nb = addNewFilter("timingVar", "utv"),
    Ob = addNewFilter("timingLabel", "utl"),
    Pb = addNewFilter("timingValue", "utt");
  addNewFilter("appName", "an");
  addNewFilter("appVersion", "av", "");
  addNewFilter("appId", "aid", "");
  addNewFilter("appInstallerId", "aiid", "");
  addNewFilter("exDescription", "exd");
  addNewFilter("exFatal", "exf");
  var Nc = addNewFilter("expId", "xid"),
    Oc = addNewFilter("expVar", "xvar"),
    Rc = addNewFilter("_utma", "_utma"),
    Sc = addNewFilter("_utmz", "_utmz"),
    Tc = addNewFilter("_utmht", "_utmht"),
    Ua = addNewFilter("_hc", void 0, 0),
    Xa = addNewFilter("_ti", void 0, 0),
    Wa = addNewFilter("_to", void 0, 20);
  cb("dimension([0-9]+)", function(a) {
    return new trackValue(a[0], "cd" + a[1])
  });
  cb("metric([0-9]+)", function(a) {
    return new trackValue(a[0], "cm" + a[1])
  });
  addNewFilter("linkerParam", void 0, void 0, Bc, db);
  var ld = addNewFilter("usage", "_u"),
    Gd = addNewFilter("_um");
  addNewFilter("forceSSL", void 0, void 0, function() {
    return falsyValue
  }, function(a, b, c) {
    J(34);
    falsyValue = !!c
  });
  var ed = addNewFilter("_j1", "jid");
  cb("\\&(.*)", function(a) {
    var b = new trackValue(a[0], a[1]),
      c = yc(a[0][substring](1));
    c && (b.Z = function(a) {
      return a.get(c)
    }, b.o = function(a, b, g, ca) {
      a.set(c, g, ca)
    }, b.F = void 0);
    return b
  });
  var Qb = T("_oot"),
    dd = addNewFilter("previewTask"),
    Rb = addNewFilter("checkProtocolTask"),
    md = addNewFilter("validationTask"),
    Sb = addNewFilter("checkStorageTask"),
    Uc = addNewFilter("historyImportTask"),
    Tb = addNewFilter("samplerTask"),
    Vb = addNewFilter("_rlt"),
    Wb = addNewFilter("buildHitTask"),
    Xb = addNewFilter("sendHitTask"),
    Vc = addNewFilter("ceTask"),
    zd = addNewFilter("devIdTask"),
    Cd = addNewFilter("timingTask"),
    Ld = addNewFilter("displayFeaturesTask"),
    V = T("name"),
    Q = T("clientId", "cid"),
    Ad = addNewFilter("userId", "uid"),
    Na = T("trackingId", "tid"),
    U = T("cookieName", void 0, "_ga"),
    W = T("cookieDomain"),
    Yb = T("cookiePath", void 0, "/"),
    Zb = T("cookieExpires", void 0, 63072E3),
    $b = T("legacyCookieDomain"),
    Wc = T("legacyHistoryImport", void 0, !0),
    ac = T("storage", void 0, "cookie"),
    bc = T("allowLinker", void 0, !1),
    cc = T("allowAnchor", void 0, !0),
    Ka = T("sampleRate", "sf", 100),
    dc = T("siteSpeedSampleRate", void 0, 1),
    ec = T("alwaysSendReferrer", void 0, !1),
    gd = addNewFilter("transportUrl"),
    Md = addNewFilter("_r", "_r");

  function exposePublicMethod(methodName, instance, targetReference, d) {
    instance[methodName] = function() {
      try {
        return d && J(d), targetReference[apply](this, arguments)
      } catch (b) {
        throw ge("exc", methodName, b && b[name]), b;
      }
    }
  };
  var Od = function(a, b, c) {
      this.V = 1E4;
      this.fa = a;
      this.$ = !1;
      this.B = b;
      this.ea = c || 1
    },
    Ed = function(a, b) {
      var c;
      if (a.fa && a.$) return 0;
      a.$ = !0;
      if (b) {
        if (a.B && R(b, a.B)) return R(b, a.B);
        if (0 == b.get(dc)) return 0
      }
      if (0 == a.V) return 0;
      void 0 === c && (c = Bd());
      return 0 == c % a.V ? Math.floor(c / a.V) % a.ea + 1 : 0
    };
  var ie = new Od(!0, he, 7),
    je = function(a) {
      if (!isHttps() && !falsyValue) {
        var b = Ed(ie, a);
        if (b && !(!window[navigator]["sendBeacon"] && 4 <= b && 6 >= b)) {
          var c = (new Date).getHours(),
            d = [Bd(), Bd(), Bd()][join](".");
          a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br.";
          a += [b, "A", c, d][join](".");
          var e = 1 != b % 3 ? "https:" : "http:",
            e = e + "//www.google-analytics.com/collect?z=br.",
            e = e + [b, "B", c, d][join](".");
          7 == b && (e = e["replace"]("//www.", "//ssl."));
          c = function() {
            4 <= b && 6 >= b ? window[navigator]["sendBeacon"](e, "") : newImg(e)
          };
          Bd() % 2 ? (newImg(a), c()) : (c(), newImg(a))
        }
      }
    };

  function fc() {
    var a, b, c;
    if ((c = (c = window[navigator]) ? c.plugins : null) && c[length])
      for (var d = 0; d < c[length] && !b; d++) {
        var e = c[d]; - 1 < e[name][indexOf]("Shockwave Flash") && (b = e.description)
      }
    if (!b) try {
      a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
    } catch (g) {}
    if (!b) try {
      a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
    } catch (ca) {}
    if (!b) try {
      a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
    } catch (l) {}
    b &&
      (a = b[match](/[\d]+/g)) && 3 <= a[length] && (b = a[0] + "." + a[1] + " r" + a[2]);
    return b || void 0
  };
  var gc = function(a, b) {
      var c = Math.min(R(a, dc), 100);
      if (!(La(P(a, Q)) % 100 >= c) && (c = {}, measurePerformance(c) || Fc(c))) {
        var d = c[Eb];
        void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : L(window, "load", function() {
          gc(a, b)
        }, !1))
      }
    },
    measurePerformance = function(a) {
      var b = window.performance || window.webkitPerformance,
        b = b && b.timing;
      if (!b) return !1;
      var c = b.navigationStart;
      if (0 == c) return !1;
      a[Eb] = b.loadEventStart - c;
      a[Gb] = b.domainLookupEnd - b.domainLookupStart;
      a[Jb] = b.connectEnd - b.connectStart;
      a[Ib] = b.responseStart - b.requestStart;
      a[Fb] = b.responseEnd - b.responseStart;
      a[Hb] = b.fetchStart - c;
      a[Kb] = b.domInteractive - c;
      a[Lb] = b.domContentLoadedEventStart - c;
      return !0
    },
    Fc = function(a) {
      if (window.top != window) return !1;
      var b = window.external,
        c = b && b.onloadT;
      b && !b.isValidLoadTime && (c = void 0);
      2147483648 < c && (c = void 0);
      0 < c && b.setPageReadyTime();
      if (void 0 == c) return !1;
      a[Eb] = c;
      return !0
    },
    Y = function(a, b) {
      var c = a[b];
      if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0
    },
    Fd = function(a) {
      return function(b) {
        "pageview" != b.get(Va) || a.I || (a.I = !0, gc(b, function(b) {
          a.send("timing", b)
        }))
      }
    };
  var hc = !1,
    mc = function(a) {
      if ("cookie" == P(a, ac)) {
        var b = P(a, U),
          c = nd(a),
          d = kc(P(a, Yb)),
          e = lc(P(a, W)),
          g = 1E3 * R(a, Zb),
          ca = P(a, Na);
        if ("auto" != e) setCookie(b, c, d, e, ca, g) && (hc = !0);
        else {
          J(32);
          var l;
          a: {
            c = [];
            e = getHostnameWithoutWww()[split](".");
            if (4 == e[length] && (l = e[e[length] - 1], parseInt(l, 10) == l)) {
              l = ["none"];
              break a
            }
            for (l = e[length] - 2; 0 <= l; l--) c[push](e[slice](l)[join]("."));
            c[push]("none");
            l = c
          }
          for (var k = 0; k < l[length]; k++)
            if (e = l[k], a["data"].set(W, e), c = nd(a), setCookie(b, c, d, e, ca, g)) {
              hc = !0;
              return
            }
          a["data"].set(W, "auto")
        }
      }
    },
    nc = function(a) {
      if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
    },
    Yc = function(a) {
      if (a.get(Wc)) {
        var b = P(a, W),
          c = P(a, $b) || getHostnameWithoutWww(),
          d = Xc("__utma", c, b);
        d && (J(19), a.set(Tc, (new Date)[getTime](), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d[hash] == b[hash] && a.set(Sc, b.R))
      }
    },
    nd = function(a) {
      var b = Cc(P(a, Q)),
        c = ic(P(a, W));
      a = jc(P(a, Yb));
      1 < a && (c += "-" + a);
      return ["GA1", c, b][join](".")
    },
    Gc = function(a, b, c) {
      for (var d = [], e = [], g, ca = 0; ca < a[length]; ca++) {
        var l = a[ca];
        if (l.H[c] == b) d[push](l);
        else void 0 == g || l.H[c] < g ? (e = [l], g = l.H[c]) : l.H[c] == g && e[push](l)
      }
      return 0 < d[length] ? d : e
    },
    lc = function(a) {
      return 0 == a[indexOf](".") ? a.substr(1) :
        a
    },
    ic = function(a) {
      return lc(a)[split](".")[length]
    },
    kc = function(a) {
      if (!a) return "/";
      1 < a[length] && a.lastIndexOf("/") == a[length] - 1 && (a = a.substr(0, a[length] - 1));
      0 != a[indexOf]("/") && (a = "/" + a);
      return a
    },
    jc = function(a) {
      a = kc(a);
      return "/" == a ? 1 : a[split]("/")[length]
    };

  function Xc(a, b, c) {
    "none" == b && (b = "");
    var d = [],
      e = Ca(a);
    a = "__utma" == a ? 6 : 2;
    for (var g = 0; g < e[length]; g++) {
      var ca = ("" + e[g])[split](".");
      ca[length] >= a && d[push]({
        hash: ca[0],
        R: e[g],
        O: ca
      })
    }
    return 0 == d[length] ? void 0 : 1 == d[length] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
  }

  function Zc(a, b) {
    var c, d;
    null == a ? c = d = 1 : (c = La(a), d = La(indexOfIsZero(a, ".") ? a[substring](1) : "." + a));
    for (var e = 0; e < b[length]; e++)
      if (b[e][hash] == c || b[e][hash] == d) return b[e]
  };
  var od = new RegExp(/^https?:\/\/([^\/:]+)/),
    pd = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;

  function Bc(a) {
    a = a.get(Q);
    var b = Ic(a, 0);
    return "_ga=1." + K(b + "." + a)
  }

  function Ic(a, b) {
    for (var c = new Date, d = window[navigator], e = d.plugins || [], c = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < e[length]; ++d) c[push](e[d].description);
    return La(c[join]("."))
  }
  var Dc = function(a) {
    J(48);
    this.target = a;
    this.T = !1
  };
  Dc[prototype].ca = function(a, b) {
    if (a.tagName) {
      if ("a" == a.tagName[toLowerCase]()) {
        a[href] && setHref(a, qd(this, a[href], b));
        return
      }
      if ("form" == a.tagName[toLowerCase]()) return rd(this, a)
    }
    if ("string" == typeof a) return qd(this, a, b)
  };
  var qd = function(a, b, c) {
      var d = pd.exec(b);
      d && 3 <= d[length] && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
      a = a[target].get("linkerParam");
      var e = b[indexOf]("?"),
        d = b[indexOf]("#");
      c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b[substring](0, d) + c + a + b[substring](d));
      return b
    },
    rd = function(a, b) {
      if (b && b[action]) {
        var c = a[target].get("linkerParam")[split]("=")[1];
        if ("get" == b.method[toLowerCase]()) {
          for (var d = b.childNodes || [], e = 0; e < d[length]; e++)
            if ("_ga" == d[e][name]) {
              d[e][setAttribute]("value", c);
              return
            }
          d = document[createElement]("input");
          d[setAttribute]("type", "hidden");
          d[setAttribute]("name", "_ga");
          d[setAttribute]("value", c);
          b.appendChild(d)
        } else "post" ==
          b.method[toLowerCase]() && (b.action = qd(a, b[action]))
      }
    };
  Dc[prototype].S = function(a, b, c) {
    function d(c) {
      try {
        c = c || window.event;
        var d;
        a: {
          var g = c[target] || c.srcElement;
          for (c = 100; g && 0 < c;) {
            if (g[href] && g.nodeName[match](/^a(?:rea)?$/i)) {
              d = g;
              break a
            }
            g = g.parentNode;
            c--
          }
          d = {}
        }("http:" == d[protocol] || "https:" == d[protocol]) && sd(a, d[hostname] || "") && d[href] && setHref(d, qd(e, d[href], b))
      } catch (w) {
        J(26)
      }
    }
    var e = this;
    this.T || (this.T = !0, L(document, "mousedown", d, !1), L(document, "keyup", d, !1));
    if (c) {
      c = function(b) {
        b = b || window.event;
        if ((b = b[target] || b.srcElement) && b[action]) {
          var c = b[action][match](od);
          c && sd(a, c[1]) && rd(e, b)
        }
      };
      for (var g = 0; g < document.forms[length]; g++) L(document.forms[g],
        "submit", c)
    }
  };

  function sd(a, b) {
    if (b == document[location][hostname]) return !1;
    for (var c = 0; c < a[length]; c++)
      if (a[c] instanceof RegExp) {
        if (a[c][test](b)) return !0
      } else if (0 <= b[indexOf](a[c])) return !0;
    return !1
  };
  var Jd = function(a, b, c) {
      this.U = ed;
      this.aa = b;
      (b = c) || (b = (b = P(a, V)) && "t0" != b ? Wd[test](b) ? "_gat_" + Cc(P(a, Na)) : "_gat_" + Cc(b) : "_gat");
      this.Y = b
    },
    Rd = function(a, b) {
      var c = b.get(Wb);
      b.set(Wb, function(b) {
        Pd(a, b);
        var d = c(b);
        Qd(a, b);
        return d
      });
      var d = b.get(Xb);
      b.set(Xb, function(b) {
        var c = d(b);
        Id(a, b);
        return c
      })
    },
    Pd = function(a, b) {
      b.get(a.U) || ("1" == Ca(a.Y)[0] ? b.set(a.U, "", !0) : b.set(a.U, "" + fe(), !0))
    },
    Qd = function(a, b) {
      b.get(a.U) && setCookie(a.Y, "1", b.get(Yb), b.get(W), b.get(Na), 6E5)
    },
    Id = function(a, b) {
      if (b.get(a.U)) {
        var c = new HashMap,
          d = function(a) {
            $a(a).F && c.set($a(a).F, b.get(a))
          };
        d(hb);
        d(ib);
        d(Na);
        d(Q);
        d(a.U);
        c.set($a(ld).F, Td(b));
        var e = a.aa;
        c.map(function(a, b) {
          e += K(a) + "=";
          e += K("" + b) + "&"
        });
        e += "z=" + fe();
        newImg(e);
        b.set(a.U, "", !0)
      }
    },
    Wd = /^gtm\d+$/;
  var fd = function(a, b) {
    var c = a.b;
    if (!c.get("dcLoaded")) {
      Nd(c, 29);
      b = b || {};
      var d;
      b[U] && (d = Cc(b[U]));
      d = new Jd(c, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", d);
      Rd(d, c);
      c.set("dcLoaded", !0)
    }
  };
  var Sd = function(a) {
    var b;
    b = a.get("dcLoaded") ? !1 : "cookie" != a.get(ac) ? !1 : !0;
    b && (Nd(a, 51), b = new Jd(a), Pd(b, a), Qd(b, a), a.get(b.U) && (a.set(Md, 1, !0), a.set(gd, getTrackUrlBase() + "/r/collect", !0)))
  };
  var Lc = function() {
    var a = window.gaGlobal = window.gaGlobal || {};
    return a.hid = a.hid || fe()
  };
  var ad, bd = function(a, b, c) {
    if (!ad) {
      var d;
      d = document[location][hash];
      var e = window[name],
        g = /^#?gaso=([^&]*)/;
      if (e = (d = (d = d && d[match](g) || e && e[match](g)) ? d[1] : Ca("GASO")[0] || "") && d[match](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) setCookie("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], wa("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + fe(), "_gasojs");
      ad = !0
    }
  };
  var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
    pc = function(a) {
      function b(a, b) {
        thisInstance.b["data"].set(a, b)
      }

      function c(a, c) {
        b(a, c);
        thisInstance.filters.add(a)
      }
      var thisInstance = this;
      this.b = new Ya;
      this.filters = new Ha;
      b(V, a[V]);
      b(Na, maybeTrimWhiteSpace(a[Na]));
      b(U, a[U]);
      b(W, a[W] || getHostnameWithoutWww());
      b(Yb, a[Yb]);
      b(Zb, a[Zb]);
      b($b, a[$b]);
      b(Wc, a[Wc]);
      b(bc, a[bc]);
      b(cc, a[cc]);
      b(Ka, a[Ka]);
      b(dc, a[dc]);
      b(ec, a[ec]);
      b(ac, a[ac]);
      b(Ad, a[Ad]);
      b(hb, 1);
      b(ib, "j37");
      c(Qb, Ma);
      c(dd, cd);
      c(Rb, Oa);
      c(md, vb);
      c(Sb, nc);
      c(Uc, Yc);
      c(Tb, Ja);
      c(Vb, Ta);
      c(Vc, Hc);
      c(zd, yd);
      c(Ld, Sd);
      c(Wb, Pa);
      c(Xb, maybeTrackPageview);
      c(Cd, Fd(this));
      Jc(this.b, a[Q]);
      Kc(this.b);
      this.b.set(jb, Lc());
      bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
    },
    Jc = function(a, b) {
      if ("cookie" == P(a, ac)) {
        hc = !1;
        var c;
        b: {
          var d = Ca(P(a, U));
          if (d && !(1 > d[length])) {
            c = [];
            for (var e = 0; e < d[length]; e++) {
              var g;
              g = d[e][split](".");
              var ca = g.shift();
              ("GA1" == ca || "1" == ca) && 1 < g[length] ? (ca = g.shift()[split]("-"), 1 == ca[length] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                H: ca,
                s: g[join](".")
              }) : g = void 0;
              g && c[push](g)
            }
            if (1 == c[length]) {
              J(13);
              c = c[0].s;
              break b
            }
            if (0 == c[length]) J(12);
            else {
              J(14);
              d = ic(P(a, W));
              c = Gc(c, d, 0);
              if (1 == c[length]) {
                c = c[0].s;
                break b
              }
              d =
                jc(P(a, Yb));
              c = Gc(c, d, 1);
              c = c[0] && c[0].s;
              break b
            }
          }
          c = void 0
        }
        c || (c = P(a, W), d = P(a, $b) || getHostnameWithoutWww(), c = Xc("__utma", d, c), void 0 != c ? (J(10), c = c.O[1] + "." + c.O[2]) : c = void 0);
        c && (a["data"].set(Q, c), hc = !0)
      }
      c = a.get(cc);
      if (e = (c = document[location][c ? "href" : "search"][match]("(?:&|#|\\?)" + K("_ga")["replace"](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c[length] ? c[1] : "") a.get(bc) ? (c = e[indexOf]("."), -1 == c ? J(22) : (d = e[substring](c + 1), "1" != e[substring](0, c) ? J(22) : (c = d[indexOf]("."), -1 == c ? J(22) : (e = d[substring](0, c), c = d[substring](c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a["data"].set(Q,
        c)))))) : J(21);
      b && (J(9), a["data"].set(Q, K(b)));
      a.get(Q) || ((c = (c = window.gaGlobal && window.gaGlobal.vid) && -1 != c[search](/^(?:utma\.)?\d+\.\d+$/) ? c : void 0) ? (J(17), a["data"].set(Q, c)) : (J(8), a["data"].set(Q, [fe() ^ Mc() & 2147483647, Math.round((new Date)[getTime]() / 1E3)][join]("."))));
      mc(a)
    },
    Kc = function(a) {
      var b = window[navigator],
        c = window.screen,
        d = document[location];
      a.set(lb, ya(a.get(ec)));
      if (d) {
        var e = d.pathname || "";
        "/" != e.charAt(0) && (J(31), e = "/" + e);
        a.set(kb, d[protocol] + "//" + d[hostname] + e + d[search])
      }
      c && a.set(qb, c.width + "x" + c.height);
      c && a.set(pb, c.colorDepth + "-bit");
      var c = document.documentElement,
        g = (e =
          document.body) && e[clientWidth] && e[clientHeight],
        ca = [];
      c && c[clientWidth] && c[clientHeight] && ("CSS1Compat" === document.compatMode || !g) ? ca = [c[clientWidth], c[clientHeight]] : g && (ca = [e[clientWidth], e[clientHeight]]);
      c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca[join]("x");
      a.set(rb, c);
      a.set(tb, fc());
      a.set(ob, document.characterSet || document.charset);
      a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
      a.set(nb, (b && (b.language || b.browserLanguage) || "")[toLowerCase]());
      if (d && a.get(cc) && (b = document[location][hash])) {
        b = b[split](/[?&#]+/);
        d = [];
        for (c = 0; c < b[length]; ++c)(indexOfIsZero(b[c], "utm_id") || indexOfIsZero(b[c], "utm_campaign") || indexOfIsZero(b[c], "utm_source") || indexOfIsZero(b[c], "utm_medium") || indexOfIsZero(b[c],
          "utm_term") || indexOfIsZero(b[c], "utm_content") || indexOfIsZero(b[c], "gclid") || indexOfIsZero(b[c], "dclid") || indexOfIsZero(b[c], "gclsrc")) && d[push](b[c]);
        0 < d[length] && (b = "#" + d[join]("&"), a.set(kb, a.get(kb) + b))
      }
    };
  pc[prototype].get = function(a) {
    return this.b.get(a)
  };
  pc[prototype].set = function(a, b) {
    this.b.set(a, b)
  };
  var qc = {
    pageview: [mb],
    event: [ub, xb, yb, zb],
    social: [Bb, Cb, Db],
    timing: [Mb, Nb, Pb, Ob]
  };
  pc[prototype].send = function(a) {
    if (!(1 > arguments[length])) {
      var b, c;
      "string" === typeof arguments[0] ? (b = arguments[0], c = [][slice][call](arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
      b && (c = za(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.D(this.b), this.b["data"].m = {}, je(this.b))
    }
  };
  var rc = function(a) {
    if ("prerender" == document.visibilityState) return !1;
    a();
    return !0
  };
  var td = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
    sc = function(a) {
      if (isFunction(a[0])) this.u = a[0];
      else {
        var b = td.exec(a[0]);
        null != b && 4 == b[length] && (this.c = b[1] || "t0", this.K = b[2] || "", this.C = b[3], this.a = [][slice][call](a, 1), this.K || (this.A = "create" == this.C, this.i = "require" == this.C, this.g = "provide" == this.C, this.ba = "remove" == this.C), this.i && (3 <= this.a[length] ? (this.X = this.a[1], this.W = this.a[2]) : this.a[1] && (isString(this.a[1]) ? this.X = this.a[1] : this.W = this.a[1])));
        b = a[1];
        a = a[2];
        if (!this.C) throw "abort";
        if (this.i && (!isString(b) || "" == b)) throw "abort";
        if (this.g &&
          (!isString(b) || "" == b || !isFunction(a))) throw "abort";
        if (ud(this.c) || ud(this.K)) throw "abort";
        if (this.g && "t0" != this.c) throw "abort";
      }
    };

  function ud(a) {
    return 0 <= a[indexOf](".") || 0 <= a[indexOf](":")
  };
  var Yd, Zd, $d;
  Yd = new HashMap;
  $d = new HashMap;
  Zd = {
    ec: 45,
    ecommerce: 46,
    linkid: 47
  };
  var ae = function(a) {
    function b(a) {
      var b = (a[hostname] || "")[split](":")[0][toLowerCase](),
        c = (a[protocol] || "")[toLowerCase](),
        c = 1 * a[port] || ("http:" == c ? 80 : "https:" == c ? 443 : "");
      a = a.pathname || "";
      indexOfIsZero(a, "/") || (a = "/" + a);
      return [b, "" + c, a]
    }
    var c = document[createElement]("a");
    setHref(c, document[location][href]);
    var d = (c[protocol] || "")[toLowerCase](),
      e = b(c),
      g = c[search] || "",
      ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
    indexOfIsZero(a, "//") ? a = d + a : indexOfIsZero(a, "/") ? a = ca + a : !a || indexOfIsZero(a, "?") ? a = ca + e[2] + (a || g) : 0 > a[split]("/")[0][indexOf](":") && (a = ca + e[2][substring](0, e[2].lastIndexOf("/")) + "/" + a);
    setHref(c, a);
    d = b(c);
    return {
      protocol: (c[protocol] || "")[toLowerCase](),
      host: d[0],
      port: d[1],
      path: d[2],
      G: c[search] ||
        "",
      url: a || ""
    }
  };
  var Z = {
    ga: function() {
      Z.f = []
    }
  };
  Z.ga();
  Z.D = function(a) {
    var b = Z.J[apply](Z, arguments),
      b = Z.f.concat(b);
    for (Z.f = []; 0 < b[length] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f[length]););
    Z.f = Z.f.concat(b)
  };
  Z.J = function(a) {
    for (var b = [], c = 0; c < arguments[length]; c++) try {
      var d = new sc(arguments[c]);
      if (d.g) Yd.set(d.a[0], d.a[1]);
      else {
        if (d.i) {
          var e = d,
            g = e.a[0];
          if (!isFunction(Yd.get(g)) && !$d.get(g)) {
            Zd[hadOwnProperty](g) && J(Zd[g]);
            var ca = e.X;
            !ca && Zd[hadOwnProperty](g) ? (J(39), ca = g + ".js") : J(43);
            if (ca) {
              ca && 0 <= ca[indexOf]("/") || (ca = (falsyValue || isHttps() ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + ca);
              var l = ae(ca),
                e = void 0;
              var k = l[protocol],
                w = document[location][protocol],
                e = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
              var Xd;
              if (Xd = e) {
                var e = l,
                  be = ae(document[location][href]);
                if (e.G || 0 <= e.url[indexOf]("?") ||
                  0 <= e.path[indexOf]("://")) Xd = !1;
                else if (e.host == be.host && e[port] == be[port]) Xd = !0;
                else {
                  var ce = "http:" == e[protocol] ? 80 : 443;
                  Xd = "www.google-analytics.com" == e.host && (e[port] || ce) == ce && indexOfIsZero(e.path, "/plugins/") ? !0 : !1
                }
              }
              Xd && (wa(l.url), $d.set(g, !0))
            }
          }
        }
        b[push](d)
      }
    } catch (de) {}
    return b
  };
  Z.v = function(a) {
    try {
      if (a.u) a.u[call](window, N.j("t0"));
      else {
        var b = a.c == gaObjectName ? N : N.j(a.c);
        if (a.A) "t0" == a.c && N.create[apply](N, a.a);
        else if (a.ba) N.remove(a.c);
        else if (b)
          if (a.i) {
            var c;
            var d = a.a[0],
              e = a.W;
            b == N || b.get(V);
            var g = Yd.get(d);
            isFunction(g) ? (b.plugins_ = b.plugins_ || new HashMap, b.plugins_.get(d) || b.plugins_.set(d, new g(b, e || {})), c = !0) : c = !1;
            if (!c) return !0
          } else if (a.K) {
          var ca = a.C,
            l = a.a,
            k = b.plugins_.get(a.K);
          k[ca][apply](k, l)
        } else b[a.C][apply](b, a.a)
      }
    } catch (w) {}
  };
  var N = function(a) {
    J(1);
    Z.D[apply](Z, [arguments])
  };
  N.h = {};
  N.P = [];
  N.L = 0;
  N.answer = 42;
  var uc = [Na, W, V];
  N.create = function(a) {
    var b = za(uc, [][slice][call](arguments));
    b[V] || (b[V] = "t0");
    var c = "" + b[V];
    if (N.h[c]) return N.h[c];
    b = new pc(b);
    N.h[c] = b;
    N.P[push](b);
    return b
  };
  N.remove = function(a) {
    for (var b = 0; b < N.P[length]; b++)
      if (N.P[b].get(V) == a) {
        N.P.splice(b, 1);
        N.h[a] = null;
        break
      }
  };
  N.j = function(a) {
    return N.h[a]
  };
  N.getAll = function() {
    return N.P[slice](0)
  };
  N.N = function() {
    "ga" != gaObjectName && J(49);
    var a = window[gaObjectName];
    if (!a || 42 != a.answer) {
      N.L = a && a.l;
      N.loaded = !0;
      var gaPublicInstance = window[gaObjectName] = N;
      exposePublicMethod("create", gaPublicInstance, gaPublicInstance.create);
      exposePublicMethod("remove", gaPublicInstance, gaPublicInstance.remove);
      exposePublicMethod("getByName", gaPublicInstance, gaPublicInstance.j, 5);
      exposePublicMethod("getAll", gaPublicInstance, gaPublicInstance.getAll, 6);
      gaPublicInstance = pc[prototype];
      exposePublicMethod("get", gaPublicInstance, gaPublicInstance.get, 7);
      exposePublicMethod("set", gaPublicInstance, gaPublicInstance.set, 4);
      exposePublicMethod("send", gaPublicInstance, gaPublicInstance.send);
      gaPublicInstance = Ya[prototype];
      exposePublicMethod("get", gaPublicInstance, gaPublicInstance.get);
      exposePublicMethod("set", gaPublicInstance, gaPublicInstance.set);
      if (!isHttps() && !falsyValue) {
        a: {
          for (var b = document.getElementsByTagName("script"), c = 0; c < b[length] && 100 > c; c++) {
            var d = b[c].src;
            if (d && 0 == d[indexOf]("https://www.google-analytics.com/analytics")) {
              J(33);
              b = !0;
              break a
            }
          }
          gaPublicInstance = !1
        }
        gaPublicInstance && (falsyValue = !0)
      }
      isHttps() ||
        falsyValue || !Ed(new Od) || (J(36), falsyValue = !0);
      (window.gaplugins = window.gaplugins || {}).Linker = Dc;
      gaPublicInstance = Dc[prototype];
      Yd.set("linker", Dc);
      exposePublicMethod("decorate", gaPublicInstance, gaPublicInstance.ca, 20);
      exposePublicMethod("autoLink", gaPublicInstance, gaPublicInstance.S, 25);
      Yd.set("displayfeatures", fd);
      Yd.set("adfeatures", fd);
      a = a && a.q;
      isArray(a) ? Z.D[apply](N, a) : J(50)
    }
  };
  N.da = function() {
    for (var a = N.getAll(), b = 0; b < a[length]; b++) a[b].get(V)
  };
  (function() {
    var a = N.N;
    if (!rc(a)) {
      J(16);
      var b = !1,
        c = function() {
          if (!b && rc(a)) {
            b = !0;
            var d = c,
              e = document;
            e.removeEventListener ? e.removeEventListener("visibilitychange", d, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", d)
          }
        };
      L(document, "visibilitychange", c)
    }
  })();

  function La(a) {
    var b = 1,
      c = 0,
      d;
    if (a)
      for (b = 0, d = a[length] - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
    return b
  };
})(window);
