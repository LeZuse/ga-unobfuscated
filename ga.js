// Courtesy of http://blog.xam.de/2008/07/towards-gajs-un-obfuscated.html

/*
 * e:window,
 * a:document,
 * k:navigator
 */
var _gat = new Object({
  c: "length",
  lb: "4.3",
  m: "cookie",
  b: undefined,
  cb: function(d, a) {
    this.zb = d;
    this.Nb = a
  },
  r: "__utma=",
  W: "__utmb=",
  ma: "__utmc=",
  Ta: "__utmk=",
  na: "__utmv=",
  oa: "__utmx=",
  Sa: "GASO=",
  X: "__utmz=",
  lc: "http://www.google-analytics.com/__utm.gif",
  mc: "https://ssl.google-analytics.com/__utm.gif",
  Wa: "utmcid=",
  Ya: "utmcsr=",
  $a: "utmgclid=",
  Ua: "utmccn=",
  Xa: "utmcmd=",
  Za: "utmctr=",
  Va: "utmcct=",
  Hb: false,
  _gasoDomain: undefined,
  _gasoCPath: undefined,
  k: navigator,
  t: function(d) {
    var a = 1,
        c = 0,
        h, o;
    if (!_gat.f1(d)) {
      a = 0;
      for (h = d[_gat.c] - 1; h >= 0; h--) {
        o = d.charCodeAt(h);
        a = (a << 6 & 268435455) + o + (o << 14);
        c = a & 266338304;
        a = c != 0 ? a ^ c >> 21 : a
      }
    }
    return a
  },
  C: function(d, a, c) {
    var o = "-",
        k, l, s = _gat.f1;
    if (!s(d) && !s(a) && !s(c)) {
      k = _gat._indexOf(d, a);
      if (k > -1) {
        l = d._indexOf(c, k);
        if (l < 0) l = d[_gat.c];
        o = _gat.F(d, k + _gat._indexOf(a, "=") + 1, l)
      }
    }
    return o
  },
  Ea: function(d) {
    var a = false,
        c = 0,
        h, o;
    if (!_gat.f1(d)) {
      a = true;
      for (h = 0; h < d[_gat.c]; h++) {
        o = d.charAt(h);
        c += "." == o ? 1 : 0;
        a = a && c <= 1 && (0 == h && "-" == o || _gat.P(".0123456789", o))
      }
    }
    return a
  },
  d: function(d, a) {
    var c = encodeURIComponent;
    return c instanceof Function ? (a ? encodeURI(d) : encodeURIComponent(d)) : escape(d)
  },
  J: function(d, a) {
    var c = decodeURIComponent,
        h;
    d = d._split("+").join(" ");
    if (c instanceof Function) try {
      h = a ? decodeURI(d) : decodeURIComponent(d)
    } catch(o) {
      h = unescape(d)
    } else h = unescape(d);
    return h
  },
  Db: function(d) {
    return d && d.hash ? _gat.F(d.href, _gat._indexOf(d.href, "#")) : ""
  },
  f1: function(d) {
    return _gat.b == d || "-" == d || "" == d
  },
  Lb: function(param1) {
    return param1[_gat.c] > 0 && _gat.P(" \n\r\t", param1)
  },
  P: function(d, a) {
    return _gat._indexOf(d, a) > -1
  },
  h: function(d, a) {
    d[d[_gat.c]] = a
  },
  _toLowerCase: function(d) {
    return d.toLowerCase()
  },
  _split: function(d, a) {
    return d.split(a)
  },
  _indexOf: function(d, a) {
    return d.indexOf(a)
  },
  F: function(d, a, c) {
    c = _gat.b == c ? d[_gat.c] : c;
    return d.substring(a, c)
  },
  uc: function() {
    var d = _gat.b,
        a = window;
    if (a && a.gaGlobal && a.gaGlobal.hid) d = a.gaGlobal.hid;
    else {
      d = Math.round(Math.random() * 2147483647);
      a.gaGlobal = a.gaGlobal ? a.gaGlobal : {};
      a.gaGlobal.hid = d
    }
    return d
  },
  _random: function() {
    return Math.round(Math.random() * 2147483647)
  },
  Gc: function() {
    return (_gat._random() ^ _gat.vc()) * 2147483647
  },
  vc: function() {
    var d = _gat.k,
        a = _gat.a,
        c = _gat.e,
        h = a[_gat.m] ? a[_gat.m] : "",
        o = c.history[_gat.c],
        k,
        l,
        s = [d.appName, d.version, d.language ? d.language : d.browserLanguage, d.platform, d.userAgent, d.javaEnabled() ? 1 : 0].join("");
    if (c.screen) s += c.screen.width + "x" + c.screen.height + c.screen.colorDepth;
    else if (c.java) {
      l = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
      s += l.screen.width + "x" + l.screen.height
    }
    s += h;
    s += a.referrer ? a.referrer : "";
    k = s[_gat.c];
    while (o > 0) s += o-- ^ k++;
    return _gat.t(s)
  }
});
_gat.trackerConfig = function() {
  function c(h, o) {
    return new _gat.cb(h, o)
  }
  this.db = "utm_campaign";
  this.eb = "utm_content";
  this.fb = "utm_id";
  this.gb = "utm_medium";
  this.hb = "utm_nooverride";
  this.ib = "utm_source";
  this.jb = "utm_term";
  this.kb = "gclid";
  this.pa = 0;
  this.I = 0;
  this.wb = "15768000";
  this.Tb = "1800";
  this.ea = [];
  this.ga = [];
  this.Ic = "cse";
  this.Gb = "f1";
  this.ab = "google";
  this.fa = [c(this.ab, this.Gb),
    c("yahoo", "p"), c("msn", "f1"), c("aol", "query"), c("aol", "encquery"), c("lycos", "query"), c("ask", "f1"), c("altavista", "f1"),
    c("netscape", "query"), c("cnn", "query"), c("looksmart", "qt"), c("about", "terms"), c("mamma", "query"), c("alltheweb", "f1"),
    c("gigablast", "f1"), c("voila", "rdata"), c("virgilio", "qs"), c("live", "f1"), c("baidu", "wd"), c("alice", "qs"),
    c("yandex", "text"), c("najdi", "f1"), c("aol", "f1"), c("club-internet", "query"), c("mama", "query"), c("seznam", "f1"),
    c("search", "f1"), c("wp", "szukaj"), c("onet", "qt"), c("netsprint", "f1"), c("google.interia", "f1"), c("szukacz", "f1"),
    c("yam", "k"), c("pchome", "f1"), c("kvasir", "searchExpr"), c("sesam", "f1"), c("ozu", "f1"), c("terra", "query"), c("nostrum", "query"),
    c("mynet", "f1"), c("ekolay", "f1"), c("search.ilse", "search_for")];
  this.B = undefined;
  this.Kb = false;
  this.p = "/";
  this.ha = 100;
  this.Da = "/__utm.gif";
  this.ta = 1;
  this.ua = 1;
  this.G = "|";
  this.sa = 1;
  this.qa = 1;
  this.pb = 1;
  this.mode = "auto";
  this.serverMode__local_remote_both = 1;
  this.Ga = 1000;
  this.Yc = 10;
  this.nc = 10;
  this.Zc = 0.2
};
_gat.Y = function(d, a) {
  var c, h, o, k, l, s, q,
      f = this,
      n = _gat,
      w = n.f1,
      x = n.c,
      g, z = a;
  f.a = d;
  function B(i) {
    var b = i instanceof Array ? i.join(".") : "";
    return w(b) ? "-" : b
  }
  function A(i, b) {
    var e = [],
        j;
    if (!w(i)) {
      e = n._split(i, ".");
      if (b) for (j = 0; j < e[x]; j++) if (!n.Ea(e[j])) e[j] = "-"
    }
    return e
  }
  function p() {
    return u(63072000000)
  }
  function u(i) {
    var b = new Date,
        e = new Date(b.getTime() + i);
    return "expires=" + e.toGMTString() + "; "
  }
  function m(i, b) {
    f.a[n.m] = i + "; path=" + z.p + "; " + b + f.Cc()
  }
  function r(i, b, e) {
    var j = f.V,
        t, v;
    for (t = 0; t < j[x]; t++) {
      v = j[t][0];
      v += w(b) ? b : b + j[t][4];
      j[t][2](n.C(i, v, e))
    }
  }
  f.Jb = function() {
    return n.b == g || g == f.t()
  };
  f.Ba = function() {
    return l ? l : "-"
  };
  f.Wb = function(i) {
    l = i
  };
  f.Ma = function(i) {
    g = n.Ea(i) ? i * 1 : "-"
  };
  f.Aa = function() {
    return B(s)
  };
  f.Na = function(i) {
    s = A(i)
  };
  f.Hc = function() {
    return g ? g : "-"
  };
  f.Cc = function() {
    return w(z.mode) ? "" : "domain=" + z.mode + ";"
  };
  f.ya = function() {
    return B(c)
  };
  f.Ub = function(i) {
    c = A(i, 1)
  };
  f.K = function() {
    return B(h)
  };
  f.La = function(i) {
    h = A(i, 1)
  };
  f.za = function() {
    return B(o)
  };
  f.Vb = function(i) {
    o = A(i, 1)
  };
  f.Ca = function() {
    return B(k)
  };
  f.Xb = function(i) {
    k = A(i);
    for (var b = 0; b < k[x]; b++) if (b < 4 && !n.Ea(k[b])) k[b] = "-"
  };
  f.Dc = function() {
    return q
  };
  f.Uc = function(i) {
    q = i
  };
  f.pc = function() {
    c = [];
    h = [];
    o = [];
    k = [];
    l = n.b;
    s = [];
    g = n.b
  };
  f.t = function() {
    var i = "",
        b;
    for (b = 0; b < f.V[x]; b++) i += f.V[b][1]();
    return n.t(i)
  };
  f.Ha = function(i) {
    var b = f.a[n.m],
        e = false;
    if (b) {
      r(b, i, ";");
      f.Ma(f.t());
      e = true
    }
    return e
  };
  f.Rc = function(i) {
    r(i, "", "&");
    f.Ma(n.C(i, n.Ta, "&"))
  };
  f.Wc = function() {
    var i = f.V,
        b = [],
        e;
    for (e = 0; e < i[x]; e++) n.h(b, i[e][0] + i[e][1]());
    n.h(b, n.Ta + f.t());
    return b.join("&")
  };
  f.bd = function(i, b) {
    var e = f.V,
        j = z.p,
        t;
    f.Ha(i);
    z.p = b;
    for (t = 0; t < e[x]; t++) if (!w(e[t][1]())) e[t][3]();
    z.p = j
  };
  f.dc = function() {
    m(n.r + f.ya(), p())
  };
  f.Pa = function() {
    m(n.W + f.K(), u(z.Tb * 1000))
  };
  f.ec = function() {
    m(n.ma + f.za(), "")
  };
  f.Ra = function() {
    m(n.X + f.Ca(), u(z.wb * 1000))
  };
  f.fc = function() {
    m(n.oa + f.Ba(), p())
  };
  f.Qa = function() {
    m(n.na + f.Aa(), p())
  };
  f.cd = function() {
    m(n.Sa + f.Dc(), "")
  };
  f.V = [[n.r, f.ya, f.Ub, f.dc, "."], [n.W, f.K, f.La, f.Pa, ""], [n.ma, f.za, f.Vb, f.ec, ""], [n.oa, f.Ba, f.Wb, f.fc, ""], [n.X, f.Ca, f.Xb, f.Ra, "."], [n.na, f.Aa, f.Na, f.Qa, "."]]
};
_gat.sendData = function(trackerConfig) {
  var o,

      k = function(l) {
        var now = (new Date).getTime(),
            q;
        q = (now - l[3]) * (trackerConfig.Zc / 1000);
        if (q >= 1) {
          l[2] = Math.min(Math.floor(l[2] * 1 + q), trackerConfig.nc);
          l[3] = now
        }
        return l
      };

  /* seems to be the main function that sends data to GA servers. An Image object thats not added to the DOM */
  this.writeImageTag = function(l, param_trackername, param_document, f, param1_bool, param2_bool, x) {
    var g,
        location = param_document.location;
    if (!o) o = new _gat.Y(param_document, trackerConfig);
    o.Ha(f);
    g = _gat._split(o.K(), ".");
    if (g[1] < 500 || param1_bool) {
      if (param2_bool) g = k(g);
      if (param1_bool || !param2_bool || g[2] >= 1) {
        if (!param1_bool && param2_bool) g[2] = g[2] * 1 - 1;
        g[1] = g[1] * 1 + 1;
        l = "?utmwv=" + _gat.lb + "&utmn=" + _gat._random() + (_gat.f1(location.hostname) ? "" : "&utmhn=" + _gat.d(location.hostname)) + (trackerConfig.ha == 100 ? "" : "&utmsp=" + _gat.d(trackerConfig.ha)) + l;
        if (0 == trackerConfig.serverMode__local_remote_both || 2 == trackerConfig.serverMode__local_remote_both) {
          var image = new Image(1, 1);
          image.src = trackerConfig.Da + l;
          var p = 2 == trackerConfig.serverMode__local_remote_both ? function() {
          } : x || function() {
          };
          image.onload = p
        }
        if (1 == trackerConfig.serverMode__local_remote_both || 2 == trackerConfig.serverMode__local_remote_both) {
          var image2 = new Image(1, 1);
          image2.src = ("https:" == location.protocol ? _gat.mc : _gat.lc) + l + "&utmac=" + param_trackername + "&utmcc=" + this.wc(param_document, f);
          image2.onload = x || function() {
          }
        }
      }
    }
    o.La(g.join("."));
    o.Pa()
  };
  this.wc = function(l, s) {
    var q = [],
        f = [_gat.r, _gat.X, _gat.na, _gat.oa],
        n,
        w = l[_gat.m],
        x;
    for (n = 0; n < f[_gat.c]; n++) {
      x = _gat.C(w, f[n] + s, ";");
      if (!_gat.f1(x)) _gat.h(q, f[n] + x + ";")
    }
    return _gat.d(q.join("+"))
  }
};
_gat.i = function() {
  this.la = []
};
_gat.i.bb = function(d, a, c, h, o, k) {
  var l = this;
  l.cc = d;
  l.Oa = a;
  l.L = c;
  l.sb = h;
  l.Pb = o;
  l.Qb = k
};
_gat.i.bb.prototype.S = function() {
  var d = this,
      a = _gat.d;
  return "&" + ["utmt=item", "utmtid=" + a(d.cc), "utmipc=" + a(d.Oa), "utmipn=" + a(d.L), "utmiva=" + a(d.sb), "utmipr=" + a(d.Pb), "utmiqt=" + a(d.Qb)].join("&")
};
_gat.i.$ = function(d, a, c, h, o, k, l, s) {
  var q = this;
  q.v = d;
  q.ob = a;
  q.bc = c;
  q.ac = h;
  q.Yb = o;
  q.ub = k;
  q.$b = l;
  q.xb = s;
  q.ca = []
};
_gat.i.$.prototype.mb = function(d, a, c, h, o) {
  var k = this,
      l = k.Eb(d),
      s = k.v,
      q = _gat;
  if (q.b == l) q.h(k.ca, new q.i.bb(s, d, a, c, h, o));
  else {
    l.cc = s;
    l.Oa = d;
    l.L = a;
    l.sb = c;
    l.Pb = h;
    l.Qb = o
  }
};
_gat.i.$.prototype.Eb = function(d) {
  var a, c = this.ca,
      h;
  for (h = 0; h < c[_gat.c]; h++) a = d == c[h].Oa ? c[h] : a;
  return a
};
_gat.i.$.prototype.S = function() {
  var d = this,
      a = _gat.d;
  return "&" + ["utmt=tran", "utmtid=" + a(d.v), "utmtst=" + a(d.ob), "utmtto=" + a(d.bc), "utmttx=" + a(d.ac), "utmtsp=" + a(d.Yb), "utmtci=" + a(d.ub), "utmtrg=" + a(d.$b), "utmtco=" + a(d.xb)].join("&")
};
_gat.i.prototype.nb = function(d, a, c, h, o, k, l, s) {
  var q = this,
      f = _gat,
      n = q.xa(d);
  if (f.b == n) {
    n = new f.i.$(d, a, c, h, o, k, l, s);
    f.h(q.la, n)
  } else {
    n.ob = a;
    n.bc = c;
    n.ac = h;
    n.Yb = o;
    n.ub = k;
    n.$b = l;
    n.xb = s
  }
  return n
};
_gat.i.prototype.xa = function(d) {
  var a, c = this.la,
      h;
  for (h = 0; h < c[_gat.c]; h++) a = d == c[h].v ? c[h] : a;
  return a
};

/* probe for flash and java support in browser */
_gat.gc = function(d) {
  var a = this,
      c = "-",
      h = _gat,
      o = d;
  this.Ja = screen;
  this.qb = !self.screen && self.java ? java.awt.Toolkit.getDefaultToolkit() : h.b;
  this.a = document;
  this.e = window;
  this.k = navigator;
  this.Ka = c;
  this.Sb = c;
  this.tb = c;
  this.Ob = c;
  this.Mb = 1;
  this.Bb = c;
  function k() {
    var l, s, q, f, n = "ShockwaveFlash",
        w = "$version",
        x = this.k ? this.k.plugins : h.b;
    if (x && x[h.c] > 0) for (l = 0; l < x[h.c] && !q; l++) {
      s = x[l];
      if (h.P(s.name, "Shockwave Flash")) q = h._split(s.description, "Shockwave Flash ")[1]
    } else {
      n = n + "." + n;
      try {
        f = new ActiveXObject(n + ".7");
        q = f.GetVariable(w)
      } catch(g) {
      }
      if (!q) try {
        f = new ActiveXObject(n + ".6");
        q = "WIN 6,0,21,0";
        f.AllowScriptAccess = "always";
        q = f.GetVariable(w)
      } catch(z) {
      }
      if (!q) try {
        f = new ActiveXObject(n);
        q = f.GetVariable(w)
      } catch(z) {
      }
      if (q) {
        q = h._split(h._split(q, " ")[1], ",");
        q = q[0] + "." + q[1] + " r" + q[2]
      }
    }
    return q ? q : c
  }
  this.xc = function() {
    var l;
    if (self.screen) {
      this.Ka = this.Ja.width + "x" + this.Ja.height;
      this.Sb = this.Ja.colorDepth + "-bit"
    } else if (this.qb) try {
      l = this.qb.getScreenSize();
      this.Ka = l.width + "x" + l.height
    } catch(s) {
    }
    this.Ob = h._toLowerCase(this.k && this.k.language ? this.k.language : (this.k && this.k.browserLanguage ? this.k.browserLanguage : c));
    this.Mb = this.k && this.k.javaEnabled() ? 1 : 0;
    this.Bb = o ? k() : c;
    this.tb = h.d(this.a.characterSet ? this.a.characterSet : (this.a.charset ? this.a.charset : c))
  };
  this.Xc = function() {
    return "&" + ["utmcs=" + h.d(this.tb), "utmsr=" + this.Ka, "utmsc=" + this.Sb, "utmul=" + this.Ob, "utmje=" + this.Mb, "utmfl=" + h.d(this.Bb)].join("&")
  }
};

_gat.n = function(p1, p2, p3, p4, p5) {
  var s = _gat.f1,
      q = _gat.b,
      f = _gat.P,
      n = _gat.C,
      toLowerCase = _gat._toLowerCase,
      x = _gat._split,
      g = _gat.c;
  this.a = p2;
  this.f = p1;
  this.Rb = p3;
  this.ja = p4;
  this.o = p5;
  function z(p) {
    return s(p) || "0" == p || !f(p, "://")
  }
  function B(p) {
    var u = "";
    p = toLowerCase(x(p, "://")[1]);
    if (f(p, "/")) {
      p = x(p, "/")[1];
      if (f(p, "?")) u = x(p, "?")[0]
    }
    return u
  }
  function A(p) {
    var u = "";
    u = toLowerCase(x(p, "://")[1]);
    if (f(u, "/")) u = x(u, "/")[0];
    return u
  }
  this.Fc = function(p) {
    var u = this.Fb(),
        m = this.o;
    return new _gat.n.s(n(p, m.fb + "=", "&"), n(p, m.ib + "=", "&"), n(p, m.kb + "=", "&"), this.ba(p, m.db, "(not set)"), this.ba(p, m.gb, "(not set)"), this.ba(p, m.jb, u && !s(u.R) ? _gat.J(u.R) : q), this.ba(p, m.eb, q))
  };
  this.Ib = function(p) {
    var u = A(p),
        m = B(p);
    if (f(u, this.o.ab)) {
      p = x(p, "?").join("&");
      if (f(p, "&" + this.o.Gb + "=")) if (m == this.o.Ic) return true
    }
    return false
  };
  this.Fb = function() {
    var p, u, m = this.Rb,
        r, i, b = this.o.fa;
    if (z(m) || this.Ib(m)) return;
    p = A(m);
    for (r = 0; r < b[g]; r++) {
      i = b[r];
      if (f(p, i.zb._toLowerCase())) {
        m = x(m, "?").join("&");
        if (f(m, "&" + i.Nb + "=")) {
          u = x(m, "&" + i.Nb + "=")[1];
          if (f(u, "&")) u = x(u, "&")[0];
          return new _gat.n.s(q, i.zb, q, "(organic)", "organic", u, q)
        }
      }
    }
  };
  this.ba = function(p1, p2, p3) {
    var r = n(p1, p2 + "=", "&"),
        result = !s(r) ? _gat.J(r) : (!s(p3) ? p3 : "-");
    return result
  };
  this.Nc = function(p) {
    var u = this.o.ea,
        m = false,
        r, i;
    if (p && "organic" == p.da) {
      r = _gat.J(p.R)._toLowerCase();
      for (i = 0; i < u[g]; i++) m = m || u[i]._toLowerCase() == r
    }
    return m
  };
  this.Ec = function() {
    var p = "",
        u = "",
        m = this.Rb;
    if (z(m) || this.Ib(m)) return;
    p = toLowerCase(x(m, "://")[1]);
    if (f(p, "/")) {
      u = _gat.F(p, _gat._indexOf(p, "/"));
      if (f(u, "?")) u = x(u, "?")[0];
      p = x(p, "/")[0]
    }
    if (0 == _gat._indexOf(p, "www.")) p = _gat.F(p, 4);
    return new _gat.n.s(q, p, q, "(referral)", "referral", q, u)
  };
  this.sc = function(p) {
    var u = "";
    if (this.o.pa) {
      u = _gat.Db(p);
      u = "" != u ? u + "&" : u
    }
    u += p.search;
    return u
  };
  this.zc = function() {
    return new _gat.n.s(q, "(direct)", q, "(direct)", "(none)", q, q)
  };
  this.Oc = function(p) {
    var u = false,
        m, r, i = this.o.ga;
    if (p && "referral" == p.da) {
      m = _gat.d(p.ia)._toLowerCase();
      for (r = 0; r < i[g]; r++) u = u || f(m, i[r]._toLowerCase())
    }
    return u
  };
  this.U = function(p) {
    return q != p && p.Fa()
  };
  this.yc = function(p, u) {
    var m = "",
        r = "-",
        i, b, e = 0,
        j, t, v = this.f;
    if (!p) return "";
    t = this.a[_gat.m] ? this.a[_gat.m] : "";
    m = this.sc(this.a.location);
    if (this.o.I && p.Jb()) {
      r = p.Ca();
      if (!s(r) && !f(r, ";")) {
        p.Ra();
        return ""
      }
    }
    r = n(t, _gat.X + v + ".", ";");
    i = this.Fc(m);
    if (this.U(i)) {
      b = n(m, this.o.hb + "=", "&");
      if ("1" == b && !s(r)) return ""
    }
    if (!this.U(i)) {
      i = this.Fb();
      if (!s(r) && this.Nc(i)) return ""
    }
    if (!this.U(i) && u) {
      i = this.Ec();
      if (!s(r) && this.Oc(i)) return ""
    }
    if (!this.U(i)) if (s(r) && u) i = this.zc();
    if (!this.U(i)) return "";
    if (!s(r)) {
      var y = x(r, "."),
          E = new _gat.n.s;
      E.Cb(y.slice(4).join("."));
      j = E.ka()._toLowerCase() == i.ka()._toLowerCase();
      e = y[3] * 1
    }
    if (!j || u) {
      var F = n(t, _gat.r + v + ".", ";"),
          I = F.lastIndexOf("."),
          G = I > 9 ? _gat.F(F, I + 1) * 1 : 0;
      e++;
      G = 0 == G ? 1 : G;
      p.Xb([v, this.ja, G, e, i.ka()].join("."));
      p.Ra();
      return "&utmcn=1"
    } else return "&utmcr=1"
  }
};
_gat.n.s = function(d, a, c, h, o, k, l) {
  var s = this;
  s.v = d;
  s.ia = a;
  s.ra = c;
  s.L = h;
  s.da = o;
  s.R = k;
  s.vb = l
};
_gat.n.s.prototype.ka = function() {
  var d = this,
      a = _gat,
      c = [],
      h = [[a.Wa, d.v], [a.Ya, d.ia], [a.$a, d.ra], [a.Ua, d.L], [a.Xa, d.da], [a.Za, d.R], [a.Va, d.vb]],
      o,
      k;
  if (d.Fa()) for (o = 0; o < h[a.c]; o++) if (!a.f1(h[o][1])) {
    k = h[o][1]._split("+").join("%20");
    k = k._split(" ").join("%20");
    a.h(c, h[o][0] + k)
  }
  return c.join("|")
};
_gat.n.s.prototype.Fa = function() {
  var d = this,
      a = _gat.f1;
  return ! (a(d.v) && a(d.ia) && a(d.ra))
};
_gat.n.s.prototype.Cb = function(d) {
  var a = this,
      c = _gat,
      h = function(o) {
        return c.J(c.C(d, o, "|"))
      };
  a.v = h(c.Wa);
  a.ia = h(c.Ya);
  a.ra = h(c.$a);
  a.L = h(c.Ua);
  a.da = h(c.Xa);
  a.R = h(c.Za);
  a.vb = h(c.Va)
};
_gat.Z = function() {
  var d = this,
      a = _gat,
      c = {},
      h = "k",
      o = "v",
      k = [h, o],
      l = "(",
      s = ")",
      q = "*",
      f = "!",
      n = "'",
      w = {};
  w[n] = "'0";
  w[s] = "'1";
  w[q] = "'2";
  w[f] = "'3";
  var x = 1;
  function g(m, r, i, b) {
    if (a.b == c[m]) c[m] = {};
    if (a.b == c[m][r]) c[m][r] = [];
    c[m][r][i] = b
  }
  function z(m, r, i) {
    return a.b != c[m] && a.b != c[m][r] ? c[m][r][i] : a.b
  }
  function B(m, r) {
    if (a.b != c[m] && a.b != c[m][r]) {
      c[m][r] = a.b;
      var i = true,
          b;
      for (b = 0; b < k[a.c]; b++) if (a.b != c[m][k[b]]) {
        i = false;
        break
      }
      if (i) c[m] = a.b
    }
  }
  function A(m) {
    var r = "",
        i = false,
        b, e;
    for (b = 0; b < k[a.c]; b++) {
      e = m[k[b]];
      if (a.b != e) {
        if (i) r += k[b];
        r += p(e);
        i = false
      } else i = true
    }
    return r
  }
  function p(m) {
    var r = [],
        i,
        b;
    for (b = 0; b < m[a.c]; b++) if (a.b != m[b]) {
      i = "";
      if (b != x && a.b == m[b - 1]) {
        i += b.toString();
        i += f
      }
      i += u(m[b]);
      a.h(r, i)
    }
    return l + r.join(q) + s
  }
  function u(m) {
    var r = "",
        i, b, e;
    for (i = 0; i < m[a.c]; i++) {
      b = m.charAt(i);
      e = w[b];
      r += a.b != e ? e : b
    }
    return r
  }
  d.Kc = function(m) {
    return a.b != c[m]
  };
  d.N = function() {
    var m = [],
        r;
    for (r in c) if (a.b != c[r]) a.h(m, r.toString() + A(c[r]));
    return m.join("")
  };
  d.Sc = function(m) {
    if (m == a.b) return d.N();
    var r = [m.N()],
        i;
    for (i in c) if (a.b != c[i] && !m.Kc(i)) a.h(r, i.toString() + A(c[i]));
    return r.join("")
  };
  d._setKey = function(m, r, i) {
    if (typeof i != "string") return false;
    g(m, h, r, i);
    return true
  };
  d._setValue = function(m, r, i) {
    if (typeof i != "number" && (a.b == Number || !(i instanceof Number))) return false;
    if (Math.round(i) != i || i == NaN || i == Infinity) return false;
    g(m, o, r, i.toString());
    return true
  };
  d._getKey = function(m, r) {
    return z(m, h, r)
  };
  d._getValue = function(m, r) {
    return z(m, o, r)
  };
  d._clearKey = function(m) {
    B(m, h)
  };
  d._clearValue = function(m) {
    B(m, o)
  }
};
_gat.ic = function(d, a) {
  var c = this;
  c.jd = a;
  c.Pc = d;
  c._trackEvent = function(h, o, k) {
    return a._trackEvent(c.Pc, h, o, k)
  }
};
_gat.createTracker = function(trackerName) {
  var h = _gat.b,
      o = _gat.f1,
      k = _gat._indexOf,
      l = _gat.F,
      s = _gat.C,
      q = _gat.P,
      f = _gat._split,
      n = "location",
      w = _gat.c,
      x = h,
      _trackerConfig = new _gat.trackerConfig,
      z = false;
  this.ja = Math.round((new Date).getTime() / 1000);
  this._trackerName = trackerName;
  thisa.yb = document.referrer;
  this.va = h;
  this.j = h;
  this.A = h;
  this.M = false;
  this.aa = h;
  this.rb = "";
  this.l = h;
  this.Ab = h;
  this.f = h;
  this.u = h;

  function B() {
    if ("auto" == _trackerConfig.mode) {
      var b = document.domain;
      if ("www." == l(b, 0, 4)) b = l(b, 4);
      _trackerConfig.mode = b
    }
    _trackerConfig.mode = _gat._toLowerCase(_trackerConfig.mode)
  }

  /* check google domains */
  function A() {
    var b = _trackerConfig.mode,
        e = k(b, "www.google.") * k(b, ".google.") * k(b, "google.");
    return e || "/" != _trackerConfig.p || k(b, "google.org") > -1
  }
  function p(b, e, j) {
    if (o(b) || o(e) || o(j)) return "-";
    var t = s(b, _gat.r + this.f + ".", e),
        v;
    if (!o(t)) {
      v = f(t, ".");
      v[5] = v[5] ? v[5] * 1 + 1 : 1;
      v[3] = v[4];
      v[4] = j;
      t = v.join(".")
    }
    return t
  }
  /* check for 'file:' protocol and google domains */
  function u() {
    return "file:" != document[n].protocol && A()
  }
  function m(b) {
    if (!b || "" == b) return "";
    while (_gat.Lb(b.charAt(0))) b = l(b, 1);
    while (_gat.Lb(b.charAt(b[w] - 1))) b = l(b, 0, b[w] - 1);
    return b
  }
  function r(b, e, j) {
    if (!o(b())) {
      e(_gat.J(b()));
      if (!q(b(), ";")) j()
    }
  }
  function i(b) {
    var e, j = "" != b && document[n].host != b;
    if (j) for (e = 0; e < _trackerConfig.B[w]; e++) j = j && k(_gat._toLowerCase(b), _gat._toLowerCase(_trackerConfig.B[e])) == -1;
    return j
  }
  this.Bc = function() {
    if (!_trackerConfig.mode || "" == _trackerConfig.mode || "none" == _trackerConfig.mode) {
      _trackerConfig.mode = "";
      return 1
    }
    B();
    return _trackerConfig.pb ? _gat.t(_trackerConfig.mode) : 1
  };
  this.tc = function(b, e) {
    if (o(b)) b = "-";
    else {
      e += _trackerConfig.p && "/" != _trackerConfig.p ? _trackerConfig.p : "";
      var j = k(b, e);
      b = j >= 0 && j <= 8 ? "0" : ("[" == b.charAt(0) && "]" == b.charAt(b[w] - 1) ? "-" : b)
    }
    return b
  };
  this.Ia = function(b) {
    var e = "";
    e += this.aa ? this.aa.Xc() : "";
    e += _trackerConfig.qa ? this.rb : "";
    e += _trackerConfig.ta && !o(document.title) ? "&utmdt=" + _gat.d(document.title) : "";
    e += "&utmhid=" + _gat.uc() + "&utmr=" + this.va + "&utmp=" + this.Tc(b);
    return e
  };
  this.Tc = function(b) {
    var e = document[n];
    b = h != b && "" != b ? _gat.d(b, true) : _gat.d(e.pathname + unescape(e.search), true);
    return b
  };
  this.$c = function(b) {
    if (this.Q()) {
      var urlparts = "";
      if (this.l != h && this._gat.N().length > 0) urlparts += "&utme=" + _gat.d(a._gat.N());
      urlparts += this.Ia(b);
      x.writeImageTag(urlparts, this._trackerName, document, this.f)
    }
  };
  this.qc = function() {
    var b = new _gat.Y(document, _trackerConfig);
    return b.Ha(this.f) ? b.Wc() : h
  };
  this._getLinkerUrl = function(param1, param2) {
    var j = f(param1, "#"),
        t = param1;
    if (this.qc()) if (param2 && 1 >= j[w]) t += "#" + this.qc();
    else if (!param2 || 1 >= j[w]) if (1 >= j[w]) t += (q(param1, "?") ? "&" : "?") + this.qc();
    else t = j[0] + (q(param1, "?") ? "&" : "?") + this.qc() + "#" + j[1];
    return t
  };
  this.Zb = function() {
    var b;
    if (this.A && this.A[w] >= 10 && !q(this.A, "=")) {
      this.u.Uc(this.A);
      this.u.cd();
      _gat._gasoDomain = _trackerConfig.mode;
      _gat._gasoCPath = _trackerConfig.p;
      b = document.createElement("script");
      b.type = "text/javascript";
      b.id = "_gasojs";
      b.src = "https://www.google.com/analytics/reporting/overlay_js?gaso=" + this.A + "&" + _gat._random();
      document.getElementsByTagName("head")[0].appendChild(b)
    }
  };
  this.Jc = function() {
    var b = document[_gat.m],
        e = this.ja,
        j = this.u,
        t = this.f + "",
        v = window,
        y = v ? v.gaGlobal : h,
        E,
        F = q(b, _gat.r + t + "."),
        I = q(b, _gat.W + t),
        G = q(b, _gat.ma + t),
        C,
        D = [],
        H = "",
        K = false,
        J;
    b = o(b) ? "" : b;
    if (_trackerConfig.I) {
      E = _gat.Db(document[n]);
      if (_trackerConfig.pa && !o(E)) H = E + "&";
      H += document[n].search;
      if (!o(H) && q(H, _gat.r)) {
        j.Rc(H);
        if (!j.Jb()) j.pc();
        C = j.ya()
      }
      r(j.Ba, j.Wb, j.fc);
      r(j.Aa, j.Na, j.Qa)
    }
    if (!o(C)) if (o(j.K()) || o(j.za())) {
      C = p(H, "&", e);
      this.M = true
    } else {
      D = f(j.K(), ".");
      t = D[0]
    } else if (F) if (!I || !G) {
      C = p(b, ";", e);
      this.M = true
    } else {
      C = s(b, _gat.r + t + ".", ";");
      D = f(s(b, _gat.W + t, ";"), ".")
    } else {
      C = [t, _gat.Gc(), e, e, e, 1].join(".");
      this.M = true;
      K = true
    }
    C = f(C, ".");
    if (v && y && y.dh == t) {
      C[4] = y.sid ? y.sid : C[4];
      if (K) {
        C[3] = y.sid ? y.sid : C[4];
        if (y.vid) {
          J = f(y.vid, ".");
          C[1] = J[0];
          C[2] = J[1]
        }
      }
    }
    j.Ub(C.join("."));
    D[0] = t;
    D[1] = D[1] ? D[1] : 0;
    D[2] = undefined != D[2] ? D[2] : _trackerConfig.Yc;
    D[3] = D[3] ? D[3] : C[4];
    j.La(D.join("."));
    j.Vb(t);
    if (!o(j.Hc())) j.Ma(j.t());
    j.dc();
    j.Pa();
    j.ec()
  };
  this.Lc = function() {
    x = new _gat.sendData(_trackerConfig)
  };
  this._initData = function() {
    var b;
    if (!z) {
      this.Lc();
      this.f = this.Bc();
      this.u = new _gat.Y(document, _trackerConfig)
    }
    if (u()) this.Jc();
    if (!z) {
      if (u()) {
        this.va = this.tc(this.Ac(), document.domain);
        if (_trackerConfig.sa) {
          this.aa = new _gat.gc(_trackerConfig.ua);
          this.aa.xc()
        }
        if (_trackerConfig.qa) {
          b = new _gat.n(this.f, document, this.va, this.ja, _trackerConfig);
          this.rb = b.yc(this.u, this.M)
        }
      }
      this.l = new _gat.Z;
      this.Ab = new _gat.Z;
      z = true
    }
    if (!_gat.Hb) this.Mc()
  };
  this._visitCode = function() {
    this._initData();
    var b = s(document[_gat.m], _gat.r + this.f + ".", ";"),
        e = f(b, ".");
    return e[w] < 4 ? "" : e[1]
  };
  this._cookiePathCopy = function(b) {
    this._initData();
    if (this.u) this.u.bd(this.f, b)
  };
  this.Mc = function() {
    var b = document[n].hash,
        e;
    e = b && "" != b && 0 == k(b, "#gaso=") ? s(b, "gaso=", "&") : s(document[_gat.m], _gat.Sa, ";");
    if (e[w] >= 10) {
      this.A = e;
      if (window.addEventListener) window.addEventListener("load", this.Zb, false);
      else window.attachEvent("onload", this.Zb)
    }
    _gat.Hb = true
  };
  this.Q = function() {
    return this._visitCode() % 10000 < _trackerConfig.ha * 100
  };
  this.Vc = function() {
    var b, e, j = document.links;
    if (!_trackerConfig.Kb) {
      var t = document.domain;
      if ("www." == l(t, 0, 4)) t = l(t, 4);
      _trackerConfig.B.push("." + t)
    }
    for (b = 0; b < j[w] && (_trackerConfig.Ga == -1 || b < _trackerConfig.Ga); b++) {
      e = j[b];
      if (i(e.host)) if (!e.gatcOnclick) {
        e.gatcOnclick = e.onclick ? e.onclick : this.Qc;
        e.onclick = function(v) {
          var y = !this.target || this.target == "_self" || this.target == "_top" || this.target == "_parent";
          y = y && !this.oc(v);
          this.ad(v, this, y);
          return y ? false : (this.gatcOnclick ? this.gatcOnclick(v) : true)
        }
      }
    }
  };
  this.Qc = function() {
  };
  this._trackPageview = function(b) {
    if (u()) {
      this._initData();
      if (_trackerConfig.B) this.Vc();
      this.$c(b);
      this.M = false
    }
  };
  this._trackTrans = function() {
    var b = this.f,
        e = [],
        j,
        t,
        v,
        y;
    this._initData();
    if (this.j && this.Q()) {
      for (j = 0; j < this.j.la[w]; j++) {
        t = this.j.la[j];
        _gat.h(e, t.S());
        for (v = 0; v < t.ca[w]; v++) _gat.h(e, t.ca[v].S())
      }
      for (y = 0; y < e[w]; y++) x.writeImageTag(e[y], this._trackerName, document, b, true)
    }
  };
  this._setTrans = function() {
    var b = document,
        e, j, t, v, y = b.getElementById ? b.getElementById("utmtrans") : (b.utmform && b.utmform.utmtrans ? b.utmform.utmtrans : h);
    this._initData();
    if (y && y.value) {
      this.j = new _gat.i;
      v = f(y.value, "UTM:");
      _trackerConfig.G = !_trackerConfig.G || "" == _trackerConfig.G ? "|" : _trackerConfig.G;
      for (e = 0; e < v[w]; e++) {
        v[e] = m(v[e]);
        j = f(v[e], _trackerConfig.G);
        for (t = 0; t < j[w]; t++) j[t] = m(j[t]);
        if ("_toLowerCase" == j[0]) this._addTrans(j[1], j[2], j[3], j[4], j[5], j[6], j[7], j[8]);
        else if ("I" == j[0]) this._addItem(j[1], j[2], j[3], j[4], j[5], j[6])
      }
    }
  };
  this._addTrans = function(b, e, j, t, v, y, E, F) {
    this.j = this.j ? this.j : new _gat.i;
    return this.j.nb(b, e, j, t, v, y, E, F)
  };
  this._addItem = function(b, e, j, t, v, y) {
    var E;
    this.j = this.j ? this.j : new _gat.i;
    E = this.j.xa(b);
    if (!E) E = this._addTrans(b, "", "", "", "", "", "", "");
    E.mb(e, j, t, v, y)
  };
  this._setVar = function(b) {
    if (b && "" != b && A()) {
      this._initData();
      var e = new _gat.Y(document, _trackerConfig),
          j = this.f;
      e.Na(j + "." + _gat.d(b));
      e.Qa();
      if (this.Q()) x.writeImageTag("&utmt=var", this._trackerName, document, this.f)
    }
  };
  this._link = function(b, e) {
    if (_trackerConfig.I && b) {
      this._initData();
      document[n].href = this._getLinkerUrl(b, e)
    }
  };
  this._linkByPost = function(b, e) {
    if (_trackerConfig.I && b && b.action) {
      this._initData();
      b.action = this._getLinkerUrl(b.action, e)
    }
  };
  this._setXKey = function(b, e, j) {
    this._gat._setKey(b, e, j)
  };
  this._setXValue = function(b, e, j) {
    this._gat._setValue(b, e, j)
  };
  this._getXKey = function(b, e) {
    return this._gat._getKey(b, e)
  };
  this._getXValue = function(b, e) {
    return this._gat.getValue(b, e)
  };
  this._clearXKey = function(b) {
    this._gat._clearKey(b)
  };
  this._clearXValue = function(b) {
    this._gat._clearValue(b)
  };
  this._createXObj = function() {
    this._initData();
    return new _gat.Z
  };
  this._sendXEvent = function(b) {
    var e = "";
    this._initData();
    if (this.Q()) {
      e += "&utmt=event&utme=" + _gat.d(this._gat.Sc(b)) + this.Ia();
      x.writeImageTag(e, this._trackerName, document, this.f, false, true)
    }
  };
  this._createEventTracker = function(b) {
    this._initData();
    return new _gat.ic(b, a)
  };
  this._trackEvent = function(b, e, j, t) {
    var v = true,
        y = this.Ab;
    if (h != b && h != e && "" != b && "" != e) {
      y._clearKey(5);
      y._clearValue(5);
      v = y._setKey(5, 1, b) ? v : false;
      v = y._setKey(5, 2, e) ? v : false;
      v = h == j || y._setKey(5, 3, j) ? v : false;
      v = h == t || y._setValue(5, 1, t) ? v : false;
      if (v) this._sendXEvent(y)
    } else v = false;
    return v
  };
  this.ad = function(b, e, j) {
    this._initData();
    if (this.Q()) {
      var t = new _gat.Z;
      t._setKey(6, 1, e.href);
      var v = j ?
          function() {
            this.rc(b, e)
          } : undefined;
      x.writeImageTag("&utmt=event&utme=" + _gat.d(t.N()) + this.Ia(), this._trackerName, document, this.f, false, true, v)
    }
  };
  this.rc = function(b, e) {
    if (!b) b = window.event;
    var j = true;
    if (e.gatcOnclick) j = e.gatcOnclick(b);
    if (j || typeof j == "undefined") if (!e.target || e.target == "_self") window.location = e.href;
    else if (e.target == "_top") window.top.document.location = e.href;
    else if (e.target == "_parent") window.parent.document.location = e.href
  };
  this.oc = function(b) {
    if (!b) b = window.event;
    var e = b.shiftKey || b.ctrlKey || b.altKey;
    if (!e) if (b.modifiers && window.Event) e = b.modifiers & window.Event.CONTROL_MASK || b.modifiers & window.Event.SHIFT_MASK || b.modifiers & window.Event.ALT_MASK;
    return e
  };
  this._setDomainName = function(b) {
    _trackerConfig.mode = b
  };
  this.dd = function() {
    return _trackerConfig.mode
  };
  this._addOrganic = function(b, e) {
    _gat.h(_trackerConfig.fa, new _gat.cb(b, e))
  };
  this._clearOrganic = function() {
    _trackerConfig.fa = []
  };
  this.hd = function() {
    return _trackerConfig.fa
  };
  this._addIgnoredOrganic = function(b) {
    _gat.h(_trackerConfig.ea, b)
  };
  this._clearIgnoredOrganic = function() {
    _trackerConfig.ea = []
  };
  this.ed = function() {
    return _trackerConfig.ea
  };
  this._addIgnoredRef = function(b) {
    _gat.h(_trackerConfig.ga, b)
  };
  this._clearIgnoredRef = function() {
    _trackerConfig.ga = []
  };
  this.fd = function() {
    return _trackerConfig.ga
  };
  this._setAllowHash = function(b) {
    _trackerConfig.pb = b ? 1 : 0
  };
  this._setCampaignTrack = function(b) {
    _trackerConfig.qa = b ? 1 : 0
  };
  this._setClientInfo = function(b) {
    _trackerConfig.sa = b ? 1 : 0
  };
  this._getClientInfo = function() {
    return _trackerConfig.sa
  };
  this._setCookiePath = function(b) {
    _trackerConfig.p = b
  };
  this._setTransactionDelim = function(b) {
    _trackerConfig.G = b
  };
  this._setCookieTimeout = function(b) {
    _trackerConfig.wb = b
  };
  this._setDetectFlash = function(b) {
    _trackerConfig.ua = b ? 1 : 0
  };
  this._getDetectFlash = function() {
    return _trackerConfig.ua
  };
  this._setDetectTitle = function(b) {
    _trackerConfig.ta = b ? 1 : 0
  };
  this._getDetectTitle = function() {
    return _trackerConfig.ta
  };
  this._setLocalGifPath = function(b) {
    _trackerConfig.Da = b
  };
  this._getLocalGifPath = function() {
    return _trackerConfig.Da
  };
  this._setLocalServerMode = function() {
    _trackerConfig.serverMode__local_remote_both = 0
  };
  this._setRemoteServerMode = function() {
    _trackerConfig.serverMode__local_remote_both = 1
  };
  this._setLocalRemoteServerMode = function() {
    _trackerConfig.serverMode__local_remote_both = 2
  };
  this.gd = function() {
    return _trackerConfig.serverMode__local_remote_both
  };
  this._getServiceMode = function() {
    return _trackerConfig.serverMode__local_remote_both
  };
  this._setSampleRate = function(b) {
    _trackerConfig.ha = b
  };
  this._setSessionTimeout = function(b) {
    _trackerConfig.Tb = b
  };
  this._setAllowLinker = function(b) {
    _trackerConfig.I = b ? 1 : 0
  };
  this._setAllowAnchor = function(b) {
    _trackerConfig.pa = b ? 1 : 0
  };
  this._setCampNameKey = function(b) {
    _trackerConfig.db = b
  };
  this._setCampContentKey = function(b) {
    _trackerConfig.eb = b
  };
  this._setCampIdKey = function(b) {
    _trackerConfig.fb = b
  };
  this._setCampMediumKey = function(b) {
    _trackerConfig.gb = b
  };
  this._setCampNOKey = function(b) {
    _trackerConfig.hb = b
  };
  this._setCampSourceKey = function(b) {
    _trackerConfig.ib = b
  };
  this._setCampTermKey = function(b) {
    _trackerConfig.jb = b
  };
  this._setCampCIdKey = function(b) {
    _trackerConfig.kb = b
  };
  this._getAccount = function() {
    return this._trackerName
  };
  this._getVersion = function() {
    return _gat.lb
  };
  this.kd = function(b) {
    _trackerConfig.B = [];
    if (b) _trackerConfig.B = b
  };
  this.md = function(b) {
    _trackerConfig.Kb = b
  };
  this.ld = function(b) {
    _trackerConfig.Ga = b
  };
  this._setReferrerOverride = function(b) {
    this.yb = b
  };
  this.Ac = function() {
    return this.yb
  }
};

_gat._getTracker = function(trackerName) {
  var tracker = new _gat.createTracker(trackerName);
  return tracker
};
