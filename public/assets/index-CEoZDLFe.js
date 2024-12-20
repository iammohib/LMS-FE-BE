var hy = Object.defineProperty;
var py = (e, t, n) =>
  t in e
    ? hy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var D = (e, t, n) => py(e, typeof t != "symbol" ? t + "" : t, n);
function my(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function gy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Jp = { exports: {} },
  jl = {},
  Zp = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ws = Symbol.for("react.element"),
  yy = Symbol.for("react.portal"),
  xy = Symbol.for("react.fragment"),
  vy = Symbol.for("react.strict_mode"),
  wy = Symbol.for("react.profiler"),
  by = Symbol.for("react.provider"),
  _y = Symbol.for("react.context"),
  Sy = Symbol.for("react.forward_ref"),
  ky = Symbol.for("react.suspense"),
  Cy = Symbol.for("react.memo"),
  Ey = Symbol.for("react.lazy"),
  Wd = Symbol.iterator;
function jy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wd && e[Wd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var em = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tm = Object.assign,
  nm = {};
function ti(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nm),
    (this.updater = n || em);
}
ti.prototype.isReactComponent = {};
ti.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ti.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rm() {}
rm.prototype = ti.prototype;
function bu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nm),
    (this.updater = n || em);
}
var _u = (bu.prototype = new rm());
_u.constructor = bu;
tm(_u, ti.prototype);
_u.isPureReactComponent = !0;
var Vd = Array.isArray,
  im = Object.prototype.hasOwnProperty,
  Su = { current: null },
  sm = { key: !0, ref: !0, __self: !0, __source: !0 };
function om(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      im.call(t, r) && !sm.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: ws,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Su.current,
  };
}
function Ny(e, t) {
  return {
    $$typeof: ws,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ku(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ws;
}
function Py(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Kd = /\/+/g;
function sa(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Py("" + e.key)
    : t.toString(36);
}
function fo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ws:
          case yy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + sa(o, 0) : r),
      Vd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Kd, "$&/") + "/"),
          fo(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (ku(i) &&
            (i = Ny(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Kd, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Vd(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + sa(s, l);
      o += fo(s, t, n, a, i);
    }
  else if (((a = jy(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (a = r + sa(s, l++)), (o += fo(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ts(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    fo(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function My(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var We = { current: null },
  ho = { transition: null },
  Oy = {
    ReactCurrentDispatcher: We,
    ReactCurrentBatchConfig: ho,
    ReactCurrentOwner: Su,
  };
function lm() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: Ts,
  forEach: function (e, t, n) {
    Ts(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ts(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ts(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ku(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = ti;
B.Fragment = xy;
B.Profiler = wy;
B.PureComponent = bu;
B.StrictMode = vy;
B.Suspense = ky;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
B.act = lm;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = tm({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Su.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      im.call(t, a) &&
        !sm.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: ws, type: e.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: _y,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: by, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = om;
B.createFactory = function (e) {
  var t = om.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Sy, render: e };
};
B.isValidElement = ku;
B.lazy = function (e) {
  return { $$typeof: Ey, _payload: { _status: -1, _result: e }, _init: My };
};
B.memo = function (e, t) {
  return { $$typeof: Cy, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = ho.transition;
  ho.transition = {};
  try {
    e();
  } finally {
    ho.transition = t;
  }
};
B.unstable_act = lm;
B.useCallback = function (e, t) {
  return We.current.useCallback(e, t);
};
B.useContext = function (e) {
  return We.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return We.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return We.current.useEffect(e, t);
};
B.useId = function () {
  return We.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return We.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return We.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return We.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return We.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return We.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return We.current.useRef(e);
};
B.useState = function (e) {
  return We.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return We.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return We.current.useTransition();
};
B.version = "18.3.1";
Zp.exports = B;
var E = Zp.exports;
const Pt = gy(E),
  Za = my({ __proto__: null, default: Pt }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ry = E,
  Ty = Symbol.for("react.element"),
  Ly = Symbol.for("react.fragment"),
  Dy = Object.prototype.hasOwnProperty,
  Ay = Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  zy = { key: !0, ref: !0, __self: !0, __source: !0 };
function am(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Dy.call(t, r) && !zy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ty,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Ay.current,
  };
}
jl.Fragment = Ly;
jl.jsx = am;
jl.jsxs = am;
Jp.exports = jl;
var f = Jp.exports,
  cm = { exports: {} },
  ft = {},
  um = { exports: {} },
  dm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, T) {
    var z = P.length;
    P.push(T);
    e: for (; 0 < z; ) {
      var X = (z - 1) >>> 1,
        G = P[X];
      if (0 < i(G, T)) (P[X] = T), (P[z] = G), (z = X);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var T = P[0],
      z = P.pop();
    if (z !== T) {
      P[0] = z;
      e: for (var X = 0, G = P.length, Lt = G >>> 1; X < Lt; ) {
        var Be = 2 * (X + 1) - 1,
          Vt = P[Be],
          $e = Be + 1,
          Rs = P[$e];
        if (0 > i(Vt, z))
          $e < G && 0 > i(Rs, Vt)
            ? ((P[X] = Rs), (P[$e] = z), (X = $e))
            : ((P[X] = Vt), (P[Be] = z), (X = Be));
        else if ($e < G && 0 > i(Rs, z)) (P[X] = Rs), (P[$e] = z), (X = $e);
        else break e;
      }
    }
    return T;
  }
  function i(P, T) {
    var z = P.sortIndex - T.sortIndex;
    return z !== 0 ? z : P.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    c = [],
    u = 1,
    d = null,
    h = 3,
    p = !1,
    g = !1,
    x = !1,
    v = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    y = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function w(P) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= P)
        r(c), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(c);
    }
  }
  function b(P) {
    if (((x = !1), w(P), !g))
      if (n(a) !== null) (g = !0), Y(_);
      else {
        var T = n(c);
        T !== null && Q(b, T.startTime - P);
      }
  }
  function _(P, T) {
    (g = !1), x && ((x = !1), m(k), (k = -1)), (p = !0);
    var z = h;
    try {
      for (
        w(T), d = n(a);
        d !== null && (!(d.expirationTime > T) || (P && !A()));

      ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var G = X(d.expirationTime <= T);
          (T = e.unstable_now()),
            typeof G == "function" ? (d.callback = G) : d === n(a) && r(a),
            w(T);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Lt = !0;
      else {
        var Be = n(c);
        Be !== null && Q(b, Be.startTime - T), (Lt = !1);
      }
      return Lt;
    } finally {
      (d = null), (h = z), (p = !1);
    }
  }
  var S = !1,
    j = null,
    k = -1,
    M = 5,
    O = -1;
  function A() {
    return !(e.unstable_now() - O < M);
  }
  function I() {
    if (j !== null) {
      var P = e.unstable_now();
      O = P;
      var T = !0;
      try {
        T = j(!0, P);
      } finally {
        T ? se() : ((S = !1), (j = null));
      }
    } else S = !1;
  }
  var se;
  if (typeof y == "function")
    se = function () {
      y(I);
    };
  else if (typeof MessageChannel < "u") {
    var Re = new MessageChannel(),
      W = Re.port2;
    (Re.port1.onmessage = I),
      (se = function () {
        W.postMessage(null);
      });
  } else
    se = function () {
      v(I, 0);
    };
  function Y(P) {
    (j = P), S || ((S = !0), se());
  }
  function Q(P, T) {
    k = v(function () {
      P(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || p || ((g = !0), Y(_));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = h;
      }
      var z = h;
      h = T;
      try {
        return P();
      } finally {
        h = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, T) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var z = h;
      h = P;
      try {
        return T();
      } finally {
        h = z;
      }
    }),
    (e.unstable_scheduleCallback = function (P, T, z) {
      var X = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? X + z : X))
          : (z = X),
        P)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (P = {
          id: u++,
          callback: T,
          priorityLevel: P,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > X
          ? ((P.sortIndex = z),
            t(c, P),
            n(a) === null &&
              P === n(c) &&
              (x ? (m(k), (k = -1)) : (x = !0), Q(b, z - X)))
          : ((P.sortIndex = G), t(a, P), g || p || ((g = !0), Y(_))),
        P
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (P) {
      var T = h;
      return function () {
        var z = h;
        h = T;
        try {
          return P.apply(this, arguments);
        } finally {
          h = z;
        }
      };
    });
})(dm);
um.exports = dm;
var Fy = um.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Iy = E,
  ct = Fy;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var fm = new Set(),
  Yi = {};
function vr(e, t) {
  Kr(e, t), Kr(e + "Capture", t);
}
function Kr(e, t) {
  for (Yi[e] = t, e = 0; e < t.length; e++) fm.add(t[e]);
}
var rn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ec = Object.prototype.hasOwnProperty,
  By =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yd = {},
  Xd = {};
function $y(e) {
  return ec.call(Xd, e)
    ? !0
    : ec.call(Yd, e)
    ? !1
    : By.test(e)
    ? (Xd[e] = !0)
    : ((Yd[e] = !0), !1);
}
function Uy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hy(e, t, n, r) {
  if (t === null || typeof t > "u" || Uy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ve(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cu = /[\-:]([a-z])/g;
function Eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Eu);
    Oe[t] = new Ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Eu);
    Oe[t] = new Ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cu, Eu);
  Oe[t] = new Ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ju(e, t, n, r) {
  var i = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Hy(t, n, i, r) && (n = null),
    r || i === null
      ? $y(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ls = Symbol.for("react.element"),
  Cr = Symbol.for("react.portal"),
  Er = Symbol.for("react.fragment"),
  Nu = Symbol.for("react.strict_mode"),
  tc = Symbol.for("react.profiler"),
  hm = Symbol.for("react.provider"),
  pm = Symbol.for("react.context"),
  Pu = Symbol.for("react.forward_ref"),
  nc = Symbol.for("react.suspense"),
  rc = Symbol.for("react.suspense_list"),
  Mu = Symbol.for("react.memo"),
  gn = Symbol.for("react.lazy"),
  mm = Symbol.for("react.offscreen"),
  qd = Symbol.iterator;
function ui(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (qd && e[qd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  oa;
function ki(e) {
  if (oa === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      oa = (t && t[1]) || "";
    }
  return (
    `
` +
    oa +
    e
  );
}
var la = !1;
function aa(e, t) {
  if (!e || la) return "";
  la = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (la = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ki(e) : "";
}
function Wy(e) {
  switch (e.tag) {
    case 5:
      return ki(e.type);
    case 16:
      return ki("Lazy");
    case 13:
      return ki("Suspense");
    case 19:
      return ki("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = aa(e.type, !1)), e;
    case 11:
      return (e = aa(e.type.render, !1)), e;
    case 1:
      return (e = aa(e.type, !0)), e;
    default:
      return "";
  }
}
function ic(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Er:
      return "Fragment";
    case Cr:
      return "Portal";
    case tc:
      return "Profiler";
    case Nu:
      return "StrictMode";
    case nc:
      return "Suspense";
    case rc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case pm:
        return (e.displayName || "Context") + ".Consumer";
      case hm:
        return (e._context.displayName || "Context") + ".Provider";
      case Pu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Mu:
        return (
          (t = e.displayName || null), t !== null ? t : ic(e.type) || "Memo"
        );
      case gn:
        (t = e._payload), (e = e._init);
        try {
          return ic(e(t));
        } catch {}
    }
  return null;
}
function Vy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ic(t);
    case 8:
      return t === Nu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ky(e) {
  var t = gm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ds(e) {
  e._valueTracker || (e._valueTracker = Ky(e));
}
function ym(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sc(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function xm(e, t) {
  (t = t.checked), t != null && ju(e, "checked", t, !1);
}
function oc(e, t) {
  xm(e, t);
  var n = zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? lc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && lc(e, t.type, zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Gd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function lc(e, t, n) {
  (t !== "number" || Lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ci = Array.isArray;
function zr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ac(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Ci(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zn(n) };
}
function vm(e, t) {
  var n = zn(t.value),
    r = zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function wm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? wm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var As,
  bm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        As = As || document.createElement("div"),
          As.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = As.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Xi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Li = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Li).forEach(function (e) {
  Yy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Li[t] = Li[e]);
  });
});
function _m(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Li.hasOwnProperty(e) && Li[e])
    ? ("" + t).trim()
    : t + "px";
}
function Sm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = _m(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Xy = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uc(e, t) {
  if (t) {
    if (Xy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function dc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fc = null;
function Ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hc = null,
  Fr = null,
  Ir = null;
function ef(e) {
  if ((e = Ss(e))) {
    if (typeof hc != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Rl(t)), hc(e.stateNode, e.type, t));
  }
}
function km(e) {
  Fr ? (Ir ? Ir.push(e) : (Ir = [e])) : (Fr = e);
}
function Cm() {
  if (Fr) {
    var e = Fr,
      t = Ir;
    if (((Ir = Fr = null), ef(e), t)) for (e = 0; e < t.length; e++) ef(t[e]);
  }
}
function Em(e, t) {
  return e(t);
}
function jm() {}
var ca = !1;
function Nm(e, t, n) {
  if (ca) return e(t, n);
  ca = !0;
  try {
    return Em(e, t, n);
  } finally {
    (ca = !1), (Fr !== null || Ir !== null) && (jm(), Cm());
  }
}
function qi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var pc = !1;
if (rn)
  try {
    var di = {};
    Object.defineProperty(di, "passive", {
      get: function () {
        pc = !0;
      },
    }),
      window.addEventListener("test", di, di),
      window.removeEventListener("test", di, di);
  } catch {
    pc = !1;
  }
function qy(e, t, n, r, i, s, o, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Di = !1,
  Do = null,
  Ao = !1,
  mc = null,
  Qy = {
    onError: function (e) {
      (Di = !0), (Do = e);
    },
  };
function Gy(e, t, n, r, i, s, o, l, a) {
  (Di = !1), (Do = null), qy.apply(Qy, arguments);
}
function Jy(e, t, n, r, i, s, o, l, a) {
  if ((Gy.apply(this, arguments), Di)) {
    if (Di) {
      var c = Do;
      (Di = !1), (Do = null);
    } else throw Error(N(198));
    Ao || ((Ao = !0), (mc = c));
  }
}
function wr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Pm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tf(e) {
  if (wr(e) !== e) throw Error(N(188));
}
function Zy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wr(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return tf(i), e;
        if (s === r) return tf(i), t;
        s = s.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Mm(e) {
  return (e = Zy(e)), e !== null ? Om(e) : null;
}
function Om(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Om(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rm = ct.unstable_scheduleCallback,
  nf = ct.unstable_cancelCallback,
  ex = ct.unstable_shouldYield,
  tx = ct.unstable_requestPaint,
  de = ct.unstable_now,
  nx = ct.unstable_getCurrentPriorityLevel,
  Ru = ct.unstable_ImmediatePriority,
  Tm = ct.unstable_UserBlockingPriority,
  zo = ct.unstable_NormalPriority,
  rx = ct.unstable_LowPriority,
  Lm = ct.unstable_IdlePriority,
  Nl = null,
  $t = null;
function ix(e) {
  if ($t && typeof $t.onCommitFiberRoot == "function")
    try {
      $t.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : lx,
  sx = Math.log,
  ox = Math.LN2;
function lx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sx(e) / ox) | 0)) | 0;
}
var zs = 64,
  Fs = 4194304;
function Ei(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Ei(l)) : ((s &= o), s !== 0 && (r = Ei(s)));
  } else (o = n & ~i), o !== 0 ? (r = Ei(o)) : s !== 0 && (r = Ei(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ax(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Mt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = ax(l, t))
      : a <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function gc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Dm() {
  var e = zs;
  return (zs <<= 1), !(zs & 4194240) && (zs = 64), e;
}
function ua(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Mt(t)),
    (e[t] = n);
}
function ux(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Mt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Tu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Mt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var K = 0;
function Am(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var zm,
  Lu,
  Fm,
  Im,
  Bm,
  yc = !1,
  Is = [],
  En = null,
  jn = null,
  Nn = null,
  Qi = new Map(),
  Gi = new Map(),
  xn = [],
  dx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      En = null;
      break;
    case "dragenter":
    case "dragleave":
      jn = null;
      break;
    case "mouseover":
    case "mouseout":
      Nn = null;
      break;
    case "pointerover":
    case "pointerout":
      Qi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gi.delete(t.pointerId);
  }
}
function fi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ss(t)), t !== null && Lu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function fx(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (En = fi(En, e, t, n, r, i)), !0;
    case "dragenter":
      return (jn = fi(jn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nn = fi(Nn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Qi.set(s, fi(Qi.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Gi.set(s, fi(Gi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function $m(e) {
  var t = er(e.target);
  if (t !== null) {
    var n = wr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pm(n)), t !== null)) {
          (e.blockedOn = t),
            Bm(e.priority, function () {
              Fm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function po(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fc = r), n.target.dispatchEvent(r), (fc = null);
    } else return (t = Ss(n)), t !== null && Lu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function sf(e, t, n) {
  po(e) && n.delete(t);
}
function hx() {
  (yc = !1),
    En !== null && po(En) && (En = null),
    jn !== null && po(jn) && (jn = null),
    Nn !== null && po(Nn) && (Nn = null),
    Qi.forEach(sf),
    Gi.forEach(sf);
}
function hi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    yc ||
      ((yc = !0),
      ct.unstable_scheduleCallback(ct.unstable_NormalPriority, hx)));
}
function Ji(e) {
  function t(i) {
    return hi(i, e);
  }
  if (0 < Is.length) {
    hi(Is[0], e);
    for (var n = 1; n < Is.length; n++) {
      var r = Is[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    En !== null && hi(En, e),
      jn !== null && hi(jn, e),
      Nn !== null && hi(Nn, e),
      Qi.forEach(t),
      Gi.forEach(t),
      n = 0;
    n < xn.length;
    n++
  )
    (r = xn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < xn.length && ((n = xn[0]), n.blockedOn === null); )
    $m(n), n.blockedOn === null && xn.shift();
}
var Br = dn.ReactCurrentBatchConfig,
  Io = !0;
function px(e, t, n, r) {
  var i = K,
    s = Br.transition;
  Br.transition = null;
  try {
    (K = 1), Du(e, t, n, r);
  } finally {
    (K = i), (Br.transition = s);
  }
}
function mx(e, t, n, r) {
  var i = K,
    s = Br.transition;
  Br.transition = null;
  try {
    (K = 4), Du(e, t, n, r);
  } finally {
    (K = i), (Br.transition = s);
  }
}
function Du(e, t, n, r) {
  if (Io) {
    var i = xc(e, t, n, r);
    if (i === null) wa(e, t, r, Bo, n), rf(e, r);
    else if (fx(i, e, t, n, r)) r.stopPropagation();
    else if ((rf(e, r), t & 4 && -1 < dx.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ss(i);
        if (
          (s !== null && zm(s),
          (s = xc(e, t, n, r)),
          s === null && wa(e, t, r, Bo, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else wa(e, t, r, null, n);
  }
}
var Bo = null;
function xc(e, t, n, r) {
  if (((Bo = null), (e = Ou(r)), (e = er(e)), e !== null))
    if (((t = wr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Bo = e), null;
}
function Um(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nx()) {
        case Ru:
          return 1;
        case Tm:
          return 4;
        case zo:
        case rx:
          return 16;
        case Lm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bn = null,
  Au = null,
  mo = null;
function Hm() {
  if (mo) return mo;
  var e,
    t = Au,
    n = t.length,
    r,
    i = "value" in bn ? bn.value : bn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (mo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function go(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Bs() {
  return !0;
}
function of() {
  return !1;
}
function ht(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Bs
        : of),
      (this.isPropagationStopped = of),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Bs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Bs));
      },
      persist: function () {},
      isPersistent: Bs,
    }),
    t
  );
}
var ni = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zu = ht(ni),
  _s = ae({}, ni, { view: 0, detail: 0 }),
  gx = ht(_s),
  da,
  fa,
  pi,
  Pl = ae({}, _s, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pi &&
            (pi && e.type === "mousemove"
              ? ((da = e.screenX - pi.screenX), (fa = e.screenY - pi.screenY))
              : (fa = da = 0),
            (pi = e)),
          da);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fa;
    },
  }),
  lf = ht(Pl),
  yx = ae({}, Pl, { dataTransfer: 0 }),
  xx = ht(yx),
  vx = ae({}, _s, { relatedTarget: 0 }),
  ha = ht(vx),
  wx = ae({}, ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bx = ht(wx),
  _x = ae({}, ni, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Sx = ht(_x),
  kx = ae({}, ni, { data: 0 }),
  af = ht(kx),
  Cx = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ex = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jx[e]) ? !!t[e] : !1;
}
function Fu() {
  return Nx;
}
var Px = ae({}, _s, {
    key: function (e) {
      if (e.key) {
        var t = Cx[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = go(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ex[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fu,
    charCode: function (e) {
      return e.type === "keypress" ? go(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? go(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mx = ht(Px),
  Ox = ae({}, Pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  cf = ht(Ox),
  Rx = ae({}, _s, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fu,
  }),
  Tx = ht(Rx),
  Lx = ae({}, ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Dx = ht(Lx),
  Ax = ae({}, Pl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zx = ht(Ax),
  Fx = [9, 13, 27, 32],
  Iu = rn && "CompositionEvent" in window,
  Ai = null;
rn && "documentMode" in document && (Ai = document.documentMode);
var Ix = rn && "TextEvent" in window && !Ai,
  Wm = rn && (!Iu || (Ai && 8 < Ai && 11 >= Ai)),
  uf = " ",
  df = !1;
function Vm(e, t) {
  switch (e) {
    case "keyup":
      return Fx.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Km(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jr = !1;
function Bx(e, t) {
  switch (e) {
    case "compositionend":
      return Km(t);
    case "keypress":
      return t.which !== 32 ? null : ((df = !0), uf);
    case "textInput":
      return (e = t.data), e === uf && df ? null : e;
    default:
      return null;
  }
}
function $x(e, t) {
  if (jr)
    return e === "compositionend" || (!Iu && Vm(e, t))
      ? ((e = Hm()), (mo = Au = bn = null), (jr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Wm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ux = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ux[e.type] : t === "textarea";
}
function Ym(e, t, n, r) {
  km(r),
    (t = $o(t, "onChange")),
    0 < t.length &&
      ((n = new zu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var zi = null,
  Zi = null;
function Hx(e) {
  ig(e, 0);
}
function Ml(e) {
  var t = Mr(e);
  if (ym(t)) return e;
}
function Wx(e, t) {
  if (e === "change") return t;
}
var Xm = !1;
if (rn) {
  var pa;
  if (rn) {
    var ma = "oninput" in document;
    if (!ma) {
      var hf = document.createElement("div");
      hf.setAttribute("oninput", "return;"),
        (ma = typeof hf.oninput == "function");
    }
    pa = ma;
  } else pa = !1;
  Xm = pa && (!document.documentMode || 9 < document.documentMode);
}
function pf() {
  zi && (zi.detachEvent("onpropertychange", qm), (Zi = zi = null));
}
function qm(e) {
  if (e.propertyName === "value" && Ml(Zi)) {
    var t = [];
    Ym(t, Zi, e, Ou(e)), Nm(Hx, t);
  }
}
function Vx(e, t, n) {
  e === "focusin"
    ? (pf(), (zi = t), (Zi = n), zi.attachEvent("onpropertychange", qm))
    : e === "focusout" && pf();
}
function Kx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ml(Zi);
}
function Yx(e, t) {
  if (e === "click") return Ml(t);
}
function Xx(e, t) {
  if (e === "input" || e === "change") return Ml(t);
}
function qx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Rt = typeof Object.is == "function" ? Object.is : qx;
function es(e, t) {
  if (Rt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ec.call(t, i) || !Rt(e[i], t[i])) return !1;
  }
  return !0;
}
function mf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gf(e, t) {
  var n = mf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mf(n);
  }
}
function Qm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gm() {
  for (var e = window, t = Lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lo(e.document);
  }
  return t;
}
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Qx(e) {
  var t = Gm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = gf(n, s));
        var o = gf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gx = rn && "documentMode" in document && 11 >= document.documentMode,
  Nr = null,
  vc = null,
  Fi = null,
  wc = !1;
function yf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wc ||
    Nr == null ||
    Nr !== Lo(r) ||
    ((r = Nr),
    "selectionStart" in r && Bu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fi && es(Fi, r)) ||
      ((Fi = r),
      (r = $o(vc, "onSelect")),
      0 < r.length &&
        ((t = new zu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nr))));
}
function $s(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pr = {
    animationend: $s("Animation", "AnimationEnd"),
    animationiteration: $s("Animation", "AnimationIteration"),
    animationstart: $s("Animation", "AnimationStart"),
    transitionend: $s("Transition", "TransitionEnd"),
  },
  ga = {},
  Jm = {};
rn &&
  ((Jm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pr.animationend.animation,
    delete Pr.animationiteration.animation,
    delete Pr.animationstart.animation),
  "TransitionEvent" in window || delete Pr.transitionend.transition);
function Ol(e) {
  if (ga[e]) return ga[e];
  if (!Pr[e]) return e;
  var t = Pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jm) return (ga[e] = t[n]);
  return e;
}
var Zm = Ol("animationend"),
  eg = Ol("animationiteration"),
  tg = Ol("animationstart"),
  ng = Ol("transitionend"),
  rg = new Map(),
  xf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function $n(e, t) {
  rg.set(e, t), vr(t, [e]);
}
for (var ya = 0; ya < xf.length; ya++) {
  var xa = xf[ya],
    Jx = xa.toLowerCase(),
    Zx = xa[0].toUpperCase() + xa.slice(1);
  $n(Jx, "on" + Zx);
}
$n(Zm, "onAnimationEnd");
$n(eg, "onAnimationIteration");
$n(tg, "onAnimationStart");
$n("dblclick", "onDoubleClick");
$n("focusin", "onFocus");
$n("focusout", "onBlur");
$n(ng, "onTransitionEnd");
Kr("onMouseEnter", ["mouseout", "mouseover"]);
Kr("onMouseLeave", ["mouseout", "mouseover"]);
Kr("onPointerEnter", ["pointerout", "pointerover"]);
Kr("onPointerLeave", ["pointerout", "pointerover"]);
vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ji =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ev = new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));
function vf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Jy(r, t, void 0, e), (e.currentTarget = null);
}
function ig(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          vf(i, l, c), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          vf(i, l, c), (s = a);
        }
    }
  }
  if (Ao) throw ((e = mc), (Ao = !1), (mc = null), e);
}
function J(e, t) {
  var n = t[Cc];
  n === void 0 && (n = t[Cc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (sg(t, e, 2, !1), n.add(r));
}
function va(e, t, n) {
  var r = 0;
  t && (r |= 4), sg(n, e, r, t);
}
var Us = "_reactListening" + Math.random().toString(36).slice(2);
function ts(e) {
  if (!e[Us]) {
    (e[Us] = !0),
      fm.forEach(function (n) {
        n !== "selectionchange" && (ev.has(n) || va(n, !1, e), va(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Us] || ((t[Us] = !0), va("selectionchange", !1, t));
  }
}
function sg(e, t, n, r) {
  switch (Um(t)) {
    case 1:
      var i = px;
      break;
    case 4:
      i = mx;
      break;
    default:
      i = Du;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !pc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function wa(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = er(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Nm(function () {
    var c = s,
      u = Ou(n),
      d = [];
    e: {
      var h = rg.get(e);
      if (h !== void 0) {
        var p = zu,
          g = e;
        switch (e) {
          case "keypress":
            if (go(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = Mx;
            break;
          case "focusin":
            (g = "focus"), (p = ha);
            break;
          case "focusout":
            (g = "blur"), (p = ha);
            break;
          case "beforeblur":
          case "afterblur":
            p = ha;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = xx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = Tx;
            break;
          case Zm:
          case eg:
          case tg:
            p = bx;
            break;
          case ng:
            p = Dx;
            break;
          case "scroll":
            p = gx;
            break;
          case "wheel":
            p = zx;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = Sx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = cf;
        }
        var x = (t & 4) !== 0,
          v = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var y = c, w; y !== null; ) {
          w = y;
          var b = w.stateNode;
          if (
            (w.tag === 5 &&
              b !== null &&
              ((w = b),
              m !== null && ((b = qi(y, m)), b != null && x.push(ns(y, b, w)))),
            v)
          )
            break;
          y = y.return;
        }
        0 < x.length &&
          ((h = new p(h, g, null, n, u)), d.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== fc &&
            (g = n.relatedTarget || n.fromElement) &&
            (er(g) || g[sn]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            u.window === u
              ? u
              : (h = u.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = c),
              (g = g ? er(g) : null),
              g !== null &&
                ((v = wr(g)), g !== v || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = c)),
          p !== g)
        ) {
          if (
            ((x = lf),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (y = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = cf),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (y = "pointer")),
            (v = p == null ? h : Mr(p)),
            (w = g == null ? h : Mr(g)),
            (h = new x(b, y + "leave", p, n, u)),
            (h.target = v),
            (h.relatedTarget = w),
            (b = null),
            er(u) === c &&
              ((x = new x(m, y + "enter", g, n, u)),
              (x.target = w),
              (x.relatedTarget = v),
              (b = x)),
            (v = b),
            p && g)
          )
            t: {
              for (x = p, m = g, y = 0, w = x; w; w = _r(w)) y++;
              for (w = 0, b = m; b; b = _r(b)) w++;
              for (; 0 < y - w; ) (x = _r(x)), y--;
              for (; 0 < w - y; ) (m = _r(m)), w--;
              for (; y--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = _r(x)), (m = _r(m));
              }
              x = null;
            }
          else x = null;
          p !== null && wf(d, h, p, x, !1),
            g !== null && v !== null && wf(d, v, g, x, !0);
        }
      }
      e: {
        if (
          ((h = c ? Mr(c) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var _ = Wx;
        else if (ff(h))
          if (Xm) _ = Xx;
          else {
            _ = Kx;
            var S = Vx;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (_ = Yx);
        if (_ && (_ = _(e, c))) {
          Ym(d, _, n, u);
          break e;
        }
        S && S(e, h, c),
          e === "focusout" &&
            (S = h._wrapperState) &&
            S.controlled &&
            h.type === "number" &&
            lc(h, "number", h.value);
      }
      switch (((S = c ? Mr(c) : window), e)) {
        case "focusin":
          (ff(S) || S.contentEditable === "true") &&
            ((Nr = S), (vc = c), (Fi = null));
          break;
        case "focusout":
          Fi = vc = Nr = null;
          break;
        case "mousedown":
          wc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wc = !1), yf(d, n, u);
          break;
        case "selectionchange":
          if (Gx) break;
        case "keydown":
        case "keyup":
          yf(d, n, u);
      }
      var j;
      if (Iu)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        jr
          ? Vm(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Wm &&
          n.locale !== "ko" &&
          (jr || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && jr && (j = Hm())
            : ((bn = u),
              (Au = "value" in bn ? bn.value : bn.textContent),
              (jr = !0))),
        (S = $o(c, k)),
        0 < S.length &&
          ((k = new af(k, e, null, n, u)),
          d.push({ event: k, listeners: S }),
          j ? (k.data = j) : ((j = Km(n)), j !== null && (k.data = j)))),
        (j = Ix ? Bx(e, n) : $x(e, n)) &&
          ((c = $o(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new af("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = j)));
    }
    ig(d, t);
  });
}
function ns(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $o(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = qi(e, n)),
      s != null && r.unshift(ns(e, s, i)),
      (s = qi(e, t)),
      s != null && r.push(ns(e, s, i))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      c !== null &&
      ((l = c),
      i
        ? ((a = qi(n, s)), a != null && o.unshift(ns(n, a, l)))
        : i || ((a = qi(n, s)), a != null && o.push(ns(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var tv = /\r\n?/g,
  nv = /\u0000|\uFFFD/g;
function bf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tv,
      `
`
    )
    .replace(nv, "");
}
function Hs(e, t, n) {
  if (((t = bf(t)), bf(e) !== t && n)) throw Error(N(425));
}
function Uo() {}
var bc = null,
  _c = null;
function Sc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var kc = typeof setTimeout == "function" ? setTimeout : void 0,
  rv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  _f = typeof Promise == "function" ? Promise : void 0,
  iv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof _f < "u"
      ? function (e) {
          return _f.resolve(null).then(e).catch(sv);
        }
      : kc;
function sv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ba(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ji(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ji(t);
}
function Pn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ri = Math.random().toString(36).slice(2),
  Bt = "__reactFiber$" + ri,
  rs = "__reactProps$" + ri,
  sn = "__reactContainer$" + ri,
  Cc = "__reactEvents$" + ri,
  ov = "__reactListeners$" + ri,
  lv = "__reactHandles$" + ri;
function er(e) {
  var t = e[Bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sn] || n[Bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sf(e); e !== null; ) {
          if ((n = e[Bt])) return n;
          e = Sf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ss(e) {
  return (
    (e = e[Bt] || e[sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Rl(e) {
  return e[rs] || null;
}
var Ec = [],
  Or = -1;
function Un(e) {
  return { current: e };
}
function ne(e) {
  0 > Or || ((e.current = Ec[Or]), (Ec[Or] = null), Or--);
}
function q(e, t) {
  Or++, (Ec[Or] = e.current), (e.current = t);
}
var Fn = {},
  Ie = Un(Fn),
  Je = Un(!1),
  cr = Fn;
function Yr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Fn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Ho() {
  ne(Je), ne(Ie);
}
function kf(e, t, n) {
  if (Ie.current !== Fn) throw Error(N(168));
  q(Ie, t), q(Je, n);
}
function og(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(N(108, Vy(e) || "Unknown", i));
  return ae({}, n, r);
}
function Wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Fn),
    (cr = Ie.current),
    q(Ie, e),
    q(Je, Je.current),
    !0
  );
}
function Cf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = og(e, t, cr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(Je),
      ne(Ie),
      q(Ie, e))
    : ne(Je),
    q(Je, n);
}
var Gt = null,
  Tl = !1,
  _a = !1;
function lg(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function av(e) {
  (Tl = !0), lg(e);
}
function Hn() {
  if (!_a && Gt !== null) {
    _a = !0;
    var e = 0,
      t = K;
    try {
      var n = Gt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gt = null), (Tl = !1);
    } catch (i) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), Rm(Ru, Hn), i);
    } finally {
      (K = t), (_a = !1);
    }
  }
  return null;
}
var Rr = [],
  Tr = 0,
  Vo = null,
  Ko = 0,
  mt = [],
  gt = 0,
  ur = null,
  Zt = 1,
  en = "";
function Qn(e, t) {
  (Rr[Tr++] = Ko), (Rr[Tr++] = Vo), (Vo = e), (Ko = t);
}
function ag(e, t, n) {
  (mt[gt++] = Zt), (mt[gt++] = en), (mt[gt++] = ur), (ur = e);
  var r = Zt;
  e = en;
  var i = 32 - Mt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Mt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Zt = (1 << (32 - Mt(t) + i)) | (n << i) | r),
      (en = s + e);
  } else (Zt = (1 << s) | (n << i) | r), (en = e);
}
function $u(e) {
  e.return !== null && (Qn(e, 1), ag(e, 1, 0));
}
function Uu(e) {
  for (; e === Vo; )
    (Vo = Rr[--Tr]), (Rr[Tr] = null), (Ko = Rr[--Tr]), (Rr[Tr] = null);
  for (; e === ur; )
    (ur = mt[--gt]),
      (mt[gt] = null),
      (en = mt[--gt]),
      (mt[gt] = null),
      (Zt = mt[--gt]),
      (mt[gt] = null);
}
var ot = null,
  it = null,
  re = !1,
  jt = null;
function cg(e, t) {
  var n = yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ef(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ot = e), (it = Pn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ot = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ur !== null ? { id: Zt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ot = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Nc(e) {
  if (re) {
    var t = it;
    if (t) {
      var n = t;
      if (!Ef(e, t)) {
        if (jc(e)) throw Error(N(418));
        t = Pn(n.nextSibling);
        var r = ot;
        t && Ef(e, t)
          ? cg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (ot = e));
      }
    } else {
      if (jc(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (ot = e);
    }
  }
}
function jf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ot = e;
}
function Ws(e) {
  if (e !== ot) return !1;
  if (!re) return jf(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Sc(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (jc(e)) throw (ug(), Error(N(418)));
    for (; t; ) cg(e, t), (t = Pn(t.nextSibling));
  }
  if ((jf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              it = Pn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = ot ? Pn(e.stateNode.nextSibling) : null;
  return !0;
}
function ug() {
  for (var e = it; e; ) e = Pn(e.nextSibling);
}
function Xr() {
  (it = ot = null), (re = !1);
}
function Hu(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
var cv = dn.ReactCurrentBatchConfig;
function mi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Nf(e) {
  var t = e._init;
  return t(e._payload);
}
function dg(e) {
  function t(m, y) {
    if (e) {
      var w = m.deletions;
      w === null ? ((m.deletions = [y]), (m.flags |= 16)) : w.push(y);
    }
  }
  function n(m, y) {
    if (!e) return null;
    for (; y !== null; ) t(m, y), (y = y.sibling);
    return null;
  }
  function r(m, y) {
    for (m = new Map(); y !== null; )
      y.key !== null ? m.set(y.key, y) : m.set(y.index, y), (y = y.sibling);
    return m;
  }
  function i(m, y) {
    return (m = Tn(m, y)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, y, w) {
    return (
      (m.index = w),
      e
        ? ((w = m.alternate),
          w !== null
            ? ((w = w.index), w < y ? ((m.flags |= 2), y) : w)
            : ((m.flags |= 2), y))
        : ((m.flags |= 1048576), y)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, y, w, b) {
    return y === null || y.tag !== 6
      ? ((y = Pa(w, m.mode, b)), (y.return = m), y)
      : ((y = i(y, w)), (y.return = m), y);
  }
  function a(m, y, w, b) {
    var _ = w.type;
    return _ === Er
      ? u(m, y, w.props.children, b, w.key)
      : y !== null &&
        (y.elementType === _ ||
          (typeof _ == "object" &&
            _ !== null &&
            _.$$typeof === gn &&
            Nf(_) === y.type))
      ? ((b = i(y, w.props)), (b.ref = mi(m, y, w)), (b.return = m), b)
      : ((b = So(w.type, w.key, w.props, null, m.mode, b)),
        (b.ref = mi(m, y, w)),
        (b.return = m),
        b);
  }
  function c(m, y, w, b) {
    return y === null ||
      y.tag !== 4 ||
      y.stateNode.containerInfo !== w.containerInfo ||
      y.stateNode.implementation !== w.implementation
      ? ((y = Ma(w, m.mode, b)), (y.return = m), y)
      : ((y = i(y, w.children || [])), (y.return = m), y);
  }
  function u(m, y, w, b, _) {
    return y === null || y.tag !== 7
      ? ((y = or(w, m.mode, b, _)), (y.return = m), y)
      : ((y = i(y, w)), (y.return = m), y);
  }
  function d(m, y, w) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (y = Pa("" + y, m.mode, w)), (y.return = m), y;
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ls:
          return (
            (w = So(y.type, y.key, y.props, null, m.mode, w)),
            (w.ref = mi(m, null, y)),
            (w.return = m),
            w
          );
        case Cr:
          return (y = Ma(y, m.mode, w)), (y.return = m), y;
        case gn:
          var b = y._init;
          return d(m, b(y._payload), w);
      }
      if (Ci(y) || ui(y))
        return (y = or(y, m.mode, w, null)), (y.return = m), y;
      Vs(m, y);
    }
    return null;
  }
  function h(m, y, w, b) {
    var _ = y !== null ? y.key : null;
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return _ !== null ? null : l(m, y, "" + w, b);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ls:
          return w.key === _ ? a(m, y, w, b) : null;
        case Cr:
          return w.key === _ ? c(m, y, w, b) : null;
        case gn:
          return (_ = w._init), h(m, y, _(w._payload), b);
      }
      if (Ci(w) || ui(w)) return _ !== null ? null : u(m, y, w, b, null);
      Vs(m, w);
    }
    return null;
  }
  function p(m, y, w, b, _) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(w) || null), l(y, m, "" + b, _);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Ls:
          return (m = m.get(b.key === null ? w : b.key) || null), a(y, m, b, _);
        case Cr:
          return (m = m.get(b.key === null ? w : b.key) || null), c(y, m, b, _);
        case gn:
          var S = b._init;
          return p(m, y, w, S(b._payload), _);
      }
      if (Ci(b) || ui(b)) return (m = m.get(w) || null), u(y, m, b, _, null);
      Vs(y, b);
    }
    return null;
  }
  function g(m, y, w, b) {
    for (
      var _ = null, S = null, j = y, k = (y = 0), M = null;
      j !== null && k < w.length;
      k++
    ) {
      j.index > k ? ((M = j), (j = null)) : (M = j.sibling);
      var O = h(m, j, w[k], b);
      if (O === null) {
        j === null && (j = M);
        break;
      }
      e && j && O.alternate === null && t(m, j),
        (y = s(O, y, k)),
        S === null ? (_ = O) : (S.sibling = O),
        (S = O),
        (j = M);
    }
    if (k === w.length) return n(m, j), re && Qn(m, k), _;
    if (j === null) {
      for (; k < w.length; k++)
        (j = d(m, w[k], b)),
          j !== null &&
            ((y = s(j, y, k)), S === null ? (_ = j) : (S.sibling = j), (S = j));
      return re && Qn(m, k), _;
    }
    for (j = r(m, j); k < w.length; k++)
      (M = p(j, m, k, w[k], b)),
        M !== null &&
          (e && M.alternate !== null && j.delete(M.key === null ? k : M.key),
          (y = s(M, y, k)),
          S === null ? (_ = M) : (S.sibling = M),
          (S = M));
    return (
      e &&
        j.forEach(function (A) {
          return t(m, A);
        }),
      re && Qn(m, k),
      _
    );
  }
  function x(m, y, w, b) {
    var _ = ui(w);
    if (typeof _ != "function") throw Error(N(150));
    if (((w = _.call(w)), w == null)) throw Error(N(151));
    for (
      var S = (_ = null), j = y, k = (y = 0), M = null, O = w.next();
      j !== null && !O.done;
      k++, O = w.next()
    ) {
      j.index > k ? ((M = j), (j = null)) : (M = j.sibling);
      var A = h(m, j, O.value, b);
      if (A === null) {
        j === null && (j = M);
        break;
      }
      e && j && A.alternate === null && t(m, j),
        (y = s(A, y, k)),
        S === null ? (_ = A) : (S.sibling = A),
        (S = A),
        (j = M);
    }
    if (O.done) return n(m, j), re && Qn(m, k), _;
    if (j === null) {
      for (; !O.done; k++, O = w.next())
        (O = d(m, O.value, b)),
          O !== null &&
            ((y = s(O, y, k)), S === null ? (_ = O) : (S.sibling = O), (S = O));
      return re && Qn(m, k), _;
    }
    for (j = r(m, j); !O.done; k++, O = w.next())
      (O = p(j, m, k, O.value, b)),
        O !== null &&
          (e && O.alternate !== null && j.delete(O.key === null ? k : O.key),
          (y = s(O, y, k)),
          S === null ? (_ = O) : (S.sibling = O),
          (S = O));
    return (
      e &&
        j.forEach(function (I) {
          return t(m, I);
        }),
      re && Qn(m, k),
      _
    );
  }
  function v(m, y, w, b) {
    if (
      (typeof w == "object" &&
        w !== null &&
        w.type === Er &&
        w.key === null &&
        (w = w.props.children),
      typeof w == "object" && w !== null)
    ) {
      switch (w.$$typeof) {
        case Ls:
          e: {
            for (var _ = w.key, S = y; S !== null; ) {
              if (S.key === _) {
                if (((_ = w.type), _ === Er)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (y = i(S, w.props.children)),
                      (y.return = m),
                      (m = y);
                    break e;
                  }
                } else if (
                  S.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === gn &&
                    Nf(_) === S.type)
                ) {
                  n(m, S.sibling),
                    (y = i(S, w.props)),
                    (y.ref = mi(m, S, w)),
                    (y.return = m),
                    (m = y);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            w.type === Er
              ? ((y = or(w.props.children, m.mode, b, w.key)),
                (y.return = m),
                (m = y))
              : ((b = So(w.type, w.key, w.props, null, m.mode, b)),
                (b.ref = mi(m, y, w)),
                (b.return = m),
                (m = b));
          }
          return o(m);
        case Cr:
          e: {
            for (S = w.key; y !== null; ) {
              if (y.key === S)
                if (
                  y.tag === 4 &&
                  y.stateNode.containerInfo === w.containerInfo &&
                  y.stateNode.implementation === w.implementation
                ) {
                  n(m, y.sibling),
                    (y = i(y, w.children || [])),
                    (y.return = m),
                    (m = y);
                  break e;
                } else {
                  n(m, y);
                  break;
                }
              else t(m, y);
              y = y.sibling;
            }
            (y = Ma(w, m.mode, b)), (y.return = m), (m = y);
          }
          return o(m);
        case gn:
          return (S = w._init), v(m, y, S(w._payload), b);
      }
      if (Ci(w)) return g(m, y, w, b);
      if (ui(w)) return x(m, y, w, b);
      Vs(m, w);
    }
    return (typeof w == "string" && w !== "") || typeof w == "number"
      ? ((w = "" + w),
        y !== null && y.tag === 6
          ? (n(m, y.sibling), (y = i(y, w)), (y.return = m), (m = y))
          : (n(m, y), (y = Pa(w, m.mode, b)), (y.return = m), (m = y)),
        o(m))
      : n(m, y);
  }
  return v;
}
var qr = dg(!0),
  fg = dg(!1),
  Yo = Un(null),
  Xo = null,
  Lr = null,
  Wu = null;
function Vu() {
  Wu = Lr = Xo = null;
}
function Ku(e) {
  var t = Yo.current;
  ne(Yo), (e._currentValue = t);
}
function Pc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $r(e, t) {
  (Xo = e),
    (Wu = Lr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Qe = !0), (e.firstContext = null));
}
function wt(e) {
  var t = e._currentValue;
  if (Wu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Lr === null)) {
      if (Xo === null) throw Error(N(308));
      (Lr = e), (Xo.dependencies = { lanes: 0, firstContext: e });
    } else Lr = Lr.next = e;
  return t;
}
var tr = null;
function Yu(e) {
  tr === null ? (tr = [e]) : tr.push(e);
}
function hg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Yu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    on(e, r)
  );
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var yn = !1;
function Xu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function nn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      on(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Yu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    on(e, n)
  );
}
function yo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
  }
}
function Pf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function qo(e, t, n, r) {
  var i = e.updateQueue;
  yn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      c = a.next;
    (a.next = null), o === null ? (s = c) : (o.next = c), (o = a);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (l = u.lastBaseUpdate),
      l !== o &&
        (l === null ? (u.firstBaseUpdate = c) : (l.next = c),
        (u.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (u = c = a = null), (l = s);
    do {
      var h = l.lane,
        p = l.eventTime;
      if ((r & h) === h) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            x = l;
          switch (((h = t), (p = n), x.tag)) {
            case 1:
              if (((g = x.payload), typeof g == "function")) {
                d = g.call(p, d, h);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = x.payload),
                (h = typeof g == "function" ? g.call(p, d, h) : g),
                h == null)
              )
                break e;
              d = ae({}, d, h);
              break e;
            case 2:
              yn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [l]) : h.push(l));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (a = d)) : (u = u.next = p),
          (o |= h);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (h = l),
          (l = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (fr |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Mf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(N(191, i));
        i.call(r);
      }
    }
}
var ks = {},
  Ut = Un(ks),
  is = Un(ks),
  ss = Un(ks);
function nr(e) {
  if (e === ks) throw Error(N(174));
  return e;
}
function qu(e, t) {
  switch ((q(ss, t), q(is, e), q(Ut, ks), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cc(t, e));
  }
  ne(Ut), q(Ut, t);
}
function Qr() {
  ne(Ut), ne(is), ne(ss);
}
function mg(e) {
  nr(ss.current);
  var t = nr(Ut.current),
    n = cc(t, e.type);
  t !== n && (q(is, e), q(Ut, n));
}
function Qu(e) {
  is.current === e && (ne(Ut), ne(is));
}
var oe = Un(0);
function Qo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Sa = [];
function Gu() {
  for (var e = 0; e < Sa.length; e++)
    Sa[e]._workInProgressVersionPrimary = null;
  Sa.length = 0;
}
var xo = dn.ReactCurrentDispatcher,
  ka = dn.ReactCurrentBatchConfig,
  dr = 0,
  le = null,
  be = null,
  Ce = null,
  Go = !1,
  Ii = !1,
  os = 0,
  uv = 0;
function Te() {
  throw Error(N(321));
}
function Ju(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Rt(e[n], t[n])) return !1;
  return !0;
}
function Zu(e, t, n, r, i, s) {
  if (
    ((dr = s),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (xo.current = e === null || e.memoizedState === null ? pv : mv),
    (e = n(r, i)),
    Ii)
  ) {
    s = 0;
    do {
      if (((Ii = !1), (os = 0), 25 <= s)) throw Error(N(301));
      (s += 1),
        (Ce = be = null),
        (t.updateQueue = null),
        (xo.current = gv),
        (e = n(r, i));
    } while (Ii);
  }
  if (
    ((xo.current = Jo),
    (t = be !== null && be.next !== null),
    (dr = 0),
    (Ce = be = le = null),
    (Go = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function ed() {
  var e = os !== 0;
  return (os = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (le.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function bt() {
  if (be === null) {
    var e = le.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Ce === null ? le.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (be = e);
  else {
    if (e === null) throw Error(N(310));
    (be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Ce === null ? (le.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function ls(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ca(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = be,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      c = s;
    do {
      var u = c.lane;
      if ((dr & u) === u)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (o = r)) : (a = a.next = d),
          (le.lanes |= u),
          (fr |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? (o = r) : (a.next = l),
      Rt(r, t.memoizedState) || (Qe = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (le.lanes |= s), (fr |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ea(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Rt(s, t.memoizedState) || (Qe = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function gg() {}
function yg(e, t) {
  var n = le,
    r = bt(),
    i = t(),
    s = !Rt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Qe = !0)),
    (r = r.queue),
    td(wg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      as(9, vg.bind(null, n, r, i, t), void 0, null),
      Ee === null)
    )
      throw Error(N(349));
    dr & 30 || xg(n, t, i);
  }
  return i;
}
function xg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function vg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), bg(t) && _g(e);
}
function wg(e, t, n) {
  return n(function () {
    bg(t) && _g(e);
  });
}
function bg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Rt(e, n);
  } catch {
    return !0;
  }
}
function _g(e) {
  var t = on(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function Of(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ls,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hv.bind(null, le, e)),
    [t.memoizedState, e]
  );
}
function as(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Sg() {
  return bt().memoizedState;
}
function vo(e, t, n, r) {
  var i = Ft();
  (le.flags |= e),
    (i.memoizedState = as(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ll(e, t, n, r) {
  var i = bt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (be !== null) {
    var o = be.memoizedState;
    if (((s = o.destroy), r !== null && Ju(r, o.deps))) {
      i.memoizedState = as(t, n, s, r);
      return;
    }
  }
  (le.flags |= e), (i.memoizedState = as(1 | t, n, s, r));
}
function Rf(e, t) {
  return vo(8390656, 8, e, t);
}
function td(e, t) {
  return Ll(2048, 8, e, t);
}
function kg(e, t) {
  return Ll(4, 2, e, t);
}
function Cg(e, t) {
  return Ll(4, 4, e, t);
}
function Eg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function jg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ll(4, 4, Eg.bind(null, t, e), n)
  );
}
function nd() {}
function Ng(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Pg(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ju(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Mg(e, t, n) {
  return dr & 21
    ? (Rt(n, t) || ((n = Dm()), (le.lanes |= n), (fr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Qe = !0)), (e.memoizedState = n));
}
function dv(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ka.transition;
  ka.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (ka.transition = r);
  }
}
function Og() {
  return bt().memoizedState;
}
function fv(e, t, n) {
  var r = Rn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Rg(e))
  )
    Tg(t, n);
  else if (((n = hg(e, t, n, r)), n !== null)) {
    var i = He();
    Ot(n, e, r, i), Lg(n, t, r);
  }
}
function hv(e, t, n) {
  var r = Rn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Rg(e)) Tg(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Rt(l, o))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Yu(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = hg(e, t, i, r)),
      n !== null && ((i = He()), Ot(n, e, r, i), Lg(n, t, r));
  }
}
function Rg(e) {
  var t = e.alternate;
  return e === le || (t !== null && t === le);
}
function Tg(e, t) {
  Ii = Go = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Tu(e, n);
  }
}
var Jo = {
    readContext: wt,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useInsertionEffect: Te,
    useLayoutEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useMutableSource: Te,
    useSyncExternalStore: Te,
    useId: Te,
    unstable_isNewReconciler: !1,
  },
  pv = {
    readContext: wt,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: wt,
    useEffect: Rf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        vo(4194308, 4, Eg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return vo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return vo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = fv.bind(null, le, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Of,
    useDebugValue: nd,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = Of(!1),
        t = e[0];
      return (e = dv.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        i = Ft();
      if (re) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(N(349));
        dr & 30 || xg(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Rf(wg.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        as(9, vg.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = Ee.identifierPrefix;
      if (re) {
        var n = en,
          r = Zt;
        (n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = os++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = uv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mv = {
    readContext: wt,
    useCallback: Ng,
    useContext: wt,
    useEffect: td,
    useImperativeHandle: jg,
    useInsertionEffect: kg,
    useLayoutEffect: Cg,
    useMemo: Pg,
    useReducer: Ca,
    useRef: Sg,
    useState: function () {
      return Ca(ls);
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = bt();
      return Mg(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Ca(ls)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: gg,
    useSyncExternalStore: yg,
    useId: Og,
    unstable_isNewReconciler: !1,
  },
  gv = {
    readContext: wt,
    useCallback: Ng,
    useContext: wt,
    useEffect: td,
    useImperativeHandle: jg,
    useInsertionEffect: kg,
    useLayoutEffect: Cg,
    useMemo: Pg,
    useReducer: Ea,
    useRef: Sg,
    useState: function () {
      return Ea(ls);
    },
    useDebugValue: nd,
    useDeferredValue: function (e) {
      var t = bt();
      return be === null ? (t.memoizedState = e) : Mg(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Ea(ls)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: gg,
    useSyncExternalStore: yg,
    useId: Og,
    unstable_isNewReconciler: !1,
  };
function Ct(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Dl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Rn(e),
      s = nn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Mn(e, s, i)),
      t !== null && (Ot(t, e, i, r), yo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      i = Rn(e),
      s = nn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Mn(e, s, i)),
      t !== null && (Ot(t, e, i, r), yo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = Rn(e),
      i = nn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Mn(e, i, r)),
      t !== null && (Ot(t, e, r, n), yo(t, e, r));
  },
};
function Tf(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !es(n, r) || !es(i, s)
      : !0
  );
}
function Dg(e, t, n) {
  var r = !1,
    i = Fn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = wt(s))
      : ((i = Ze(t) ? cr : Ie.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Yr(e, i) : Fn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Dl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Lf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Dl.enqueueReplaceState(t, t.state, null);
}
function Oc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Xu(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = wt(s))
    : ((s = Ze(t) ? cr : Ie.current), (i.context = Yr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Mc(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Dl.enqueueReplaceState(i, i.state, null),
      qo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Wy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ja(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var yv = typeof WeakMap == "function" ? WeakMap : Map;
function Ag(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Uc = r)), Rc(e, t);
    }),
    n
  );
}
function zg(e, t, n) {
  (n = nn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Rc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Rc(e, t),
          typeof r != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Df(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new yv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Ov.bind(null, e, t, n)), t.then(e, e));
}
function Af(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = nn(-1, 1)), (t.tag = 2), Mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var xv = dn.ReactCurrentOwner,
  Qe = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? fg(t, null, n, r) : qr(t, e.child, n, r);
}
function Ff(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    $r(t, i),
    (r = Zu(e, t, n, r, s, i)),
    (n = ed()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ln(e, t, i))
      : (re && n && $u(t), (t.flags |= 1), Ue(e, t, r, i), t.child)
  );
}
function If(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !ud(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Fg(e, t, s, r, i))
      : ((e = So(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : es), n(o, r) && e.ref === t.ref)
    )
      return ln(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Tn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Fg(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (es(s, r) && e.ref === t.ref)
      if (((Qe = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Qe = !0);
      else return (t.lanes = e.lanes), ln(e, t, i);
  }
  return Tc(e, t, n, r, i);
}
function Ig(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(Ar, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(Ar, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        q(Ar, rt),
        (rt |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(Ar, rt),
      (rt |= r);
  return Ue(e, t, i, n), t.child;
}
function Bg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Tc(e, t, n, r, i) {
  var s = Ze(n) ? cr : Ie.current;
  return (
    (s = Yr(t, s)),
    $r(t, i),
    (n = Zu(e, t, n, r, s, i)),
    (r = ed()),
    e !== null && !Qe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ln(e, t, i))
      : (re && r && $u(t), (t.flags |= 1), Ue(e, t, n, i), t.child)
  );
}
function Bf(e, t, n, r, i) {
  if (Ze(n)) {
    var s = !0;
    Wo(t);
  } else s = !1;
  if (($r(t, i), t.stateNode === null))
    wo(e, t), Dg(t, n, r), Oc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = wt(c))
      : ((c = Ze(n) ? cr : Ie.current), (c = Yr(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== c) && Lf(t, o, r, c)),
      (yn = !1);
    var h = t.memoizedState;
    (o.state = h),
      qo(t, r, o, i),
      (a = t.memoizedState),
      l !== r || h !== a || Je.current || yn
        ? (typeof u == "function" && (Mc(t, n, u, r), (a = t.memoizedState)),
          (l = yn || Tf(t, n, l, r, h, a, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = c),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      pg(e, t),
      (l = t.memoizedProps),
      (c = t.type === t.elementType ? l : Ct(t.type, l)),
      (o.props = c),
      (d = t.pendingProps),
      (h = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = wt(a))
        : ((a = Ze(n) ? cr : Ie.current), (a = Yr(t, a)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== d || h !== a) && Lf(t, o, r, a)),
      (yn = !1),
      (h = t.memoizedState),
      (o.state = h),
      qo(t, r, o, i);
    var g = t.memoizedState;
    l !== d || h !== g || Je.current || yn
      ? (typeof p == "function" && (Mc(t, n, p, r), (g = t.memoizedState)),
        (c = yn || Tf(t, n, c, r, h, g, a) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, g, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, g, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (o.props = r),
        (o.state = g),
        (o.context = a),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Lc(e, t, n, r, s, i);
}
function Lc(e, t, n, r, i, s) {
  Bg(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Cf(t, n, !1), ln(e, t, s);
  (r = t.stateNode), (xv.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = qr(t, e.child, null, s)), (t.child = qr(t, null, l, s)))
      : Ue(e, t, l, s),
    (t.memoizedState = r.state),
    i && Cf(t, n, !0),
    t.child
  );
}
function $g(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kf(e, t.context, !1),
    qu(e, t.containerInfo);
}
function $f(e, t, n, r, i) {
  return Xr(), Hu(i), (t.flags |= 256), Ue(e, t, n, r), t.child;
}
var Dc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ac(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ug(e, t, n) {
  var r = t.pendingProps,
    i = oe.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(oe, i & 1),
    e === null)
  )
    return (
      Nc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Fl(o, r, 0, null)),
              (e = or(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ac(n)),
              (t.memoizedState = Dc),
              e)
            : rd(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return vv(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Tn(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Tn(l, s)) : ((s = or(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ac(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Dc),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Tn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function rd(e, t) {
  return (
    (t = Fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ks(e, t, n, r) {
  return (
    r !== null && Hu(r),
    qr(t, e.child, null, n),
    (e = rd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ja(Error(N(422)))), Ks(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = Fl({ mode: "visible", children: r.children }, i, 0, null)),
        (s = or(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && qr(t, e.child, null, o),
        (t.child.memoizedState = Ac(o)),
        (t.memoizedState = Dc),
        s);
  if (!(t.mode & 1)) return Ks(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(N(419))), (r = ja(s, r, void 0)), Ks(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Qe || l)) {
    if (((r = Ee), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), on(e, i), Ot(r, e, i, -1));
    }
    return cd(), (r = ja(Error(N(421)))), Ks(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Rv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (it = Pn(i.nextSibling)),
      (ot = t),
      (re = !0),
      (jt = null),
      e !== null &&
        ((mt[gt++] = Zt),
        (mt[gt++] = en),
        (mt[gt++] = ur),
        (Zt = e.id),
        (en = e.overflow),
        (ur = t)),
      (t = rd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pc(e.return, t, n);
}
function Na(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Hg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ue(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uf(e, n, t);
        else if (e.tag === 19) Uf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Qo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Na(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Qo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Na(t, !0, n, null, s);
        break;
      case "together":
        Na(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (fr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Tn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function wv(e, t, n) {
  switch (t.tag) {
    case 3:
      $g(t), Xr();
      break;
    case 5:
      mg(t);
      break;
    case 1:
      Ze(t.type) && Wo(t);
      break;
    case 4:
      qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(Yo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ug(e, t, n)
          : (q(oe, oe.current & 1),
            (e = ln(e, t, n)),
            e !== null ? e.sibling : null);
      q(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Hg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ig(e, t, n);
  }
  return ln(e, t, n);
}
var Wg, zc, Vg, Kg;
Wg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
zc = function () {};
Vg = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), nr(Ut.current);
    var s = null;
    switch (n) {
      case "input":
        (i = sc(e, i)), (r = sc(e, r)), (s = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ac(e, i)), (r = ac(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Uo);
    }
    uc(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var l = i[c];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Yi.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((l = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && a !== l && (a != null || l != null))
      )
        if (c === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Yi.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && J("scroll", e),
                  s || l === a || (s = []))
                : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Kg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gi(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bv(e, t, n) {
  var r = t.pendingProps;
  switch ((Uu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Ze(t.type) && Ho(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Qr(),
        ne(Je),
        ne(Ie),
        Gu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ws(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), jt !== null && (Vc(jt), (jt = null)))),
        zc(e, t),
        Le(t),
        null
      );
    case 5:
      Qu(t);
      var i = nr(ss.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vg(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Le(t), null;
        }
        if (((e = nr(Ut.current)), Ws(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Bt] = t), (r[rs] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              J("cancel", r), J("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              J("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ji.length; i++) J(ji[i], r);
              break;
            case "source":
              J("error", r);
              break;
            case "img":
            case "image":
            case "link":
              J("error", r), J("load", r);
              break;
            case "details":
              J("toggle", r);
              break;
            case "input":
              Qd(r, s), J("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                J("invalid", r);
              break;
            case "textarea":
              Jd(r, s), J("invalid", r);
          }
          uc(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Hs(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      Hs(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Yi.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  J("scroll", r);
            }
          switch (n) {
            case "input":
              Ds(r), Gd(r, s, !0);
              break;
            case "textarea":
              Ds(r), Zd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Uo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = wm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Bt] = t),
            (e[rs] = r),
            Wg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = dc(n, r)), n)) {
              case "dialog":
                J("cancel", e), J("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ji.length; i++) J(ji[i], e);
                i = r;
                break;
              case "source":
                J("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", e), J("load", e), (i = r);
                break;
              case "details":
                J("toggle", e), (i = r);
                break;
              case "input":
                Qd(e, r), (i = sc(e, r)), J("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  J("invalid", e);
                break;
              case "textarea":
                Jd(e, r), (i = ac(e, r)), J("invalid", e);
                break;
              default:
                i = r;
            }
            uc(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Sm(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && bm(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Xi(e, a)
                    : typeof a == "number" && Xi(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Yi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && J("scroll", e)
                      : a != null && ju(e, s, a, o));
              }
            switch (n) {
              case "input":
                Ds(e), Gd(e, r, !1);
                break;
              case "textarea":
                Ds(e), Zd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? zr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      zr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Uo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) Kg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = nr(ss.current)), nr(Ut.current), Ws(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Bt] = t),
            (s = r.nodeValue !== n) && ((e = ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Hs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Hs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Bt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (ne(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && it !== null && t.mode & 1 && !(t.flags & 128))
          ug(), Xr(), (t.flags |= 98560), (s = !1);
        else if (((s = Ws(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(N(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(N(317));
            s[Bt] = t;
          } else
            Xr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (s = !1);
        } else jt !== null && (Vc(jt), (jt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? Se === 0 && (Se = 3) : cd())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        Qr(), zc(e, t), e === null && ts(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Ku(t.type._context), Le(t), null;
    case 17:
      return Ze(t.type) && Ho(), Le(t), null;
    case 19:
      if ((ne(oe), (s = t.memoizedState), s === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) gi(s, !1);
        else {
          if (Se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Qo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gi(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            de() > Jr &&
            ((t.flags |= 128), (r = !0), gi(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Qo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gi(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !re)
            )
              return Le(t), null;
          } else
            2 * de() - s.renderingStartTime > Jr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gi(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = de()),
          (t.sibling = null),
          (n = oe.current),
          q(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        ad(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function _v(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Ho(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Qr(),
        ne(Je),
        ne(Ie),
        Gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qu(t), null;
    case 13:
      if (
        (ne(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        Xr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ne(oe), null;
    case 4:
      return Qr(), null;
    case 10:
      return Ku(t.type._context), null;
    case 22:
    case 23:
      return ad(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ys = !1,
  ze = !1,
  Sv = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Dr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function Fc(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Hf = !1;
function kv(e, t) {
  if (((bc = Io), (e = Gm()), Bu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            c = 0,
            u = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (a = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++c === i && (l = o),
                h === s && ++u === r && (a = o),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (_c = { focusedElem: e, selectionRange: n }, Io = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var x = g.memoizedProps,
                    v = g.memoizedState,
                    m = t.stateNode,
                    y = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ct(t.type, x),
                      v
                    );
                  m.__reactInternalSnapshotBeforeUpdate = y;
                }
                break;
              case 3:
                var w = t.stateNode.containerInfo;
                w.nodeType === 1
                  ? (w.textContent = "")
                  : w.nodeType === 9 &&
                    w.documentElement &&
                    w.removeChild(w.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (b) {
          ce(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = Hf), (Hf = !1), g;
}
function Bi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Fc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Al(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ic(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Yg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Yg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Bt], delete t[rs], delete t[Cc], delete t[ov], delete t[lv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Xg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Uo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bc(e, t, n), e = e.sibling; e !== null; ) Bc(e, t, n), (e = e.sibling);
}
function $c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($c(e, t, n), e = e.sibling; e !== null; ) $c(e, t, n), (e = e.sibling);
}
var Ne = null,
  Et = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) qg(e, t, n), (n = n.sibling);
}
function qg(e, t, n) {
  if ($t && typeof $t.onCommitFiberUnmount == "function")
    try {
      $t.onCommitFiberUnmount(Nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Dr(n, t);
    case 6:
      var r = Ne,
        i = Et;
      (Ne = null),
        hn(e, t, n),
        (Ne = r),
        (Et = i),
        Ne !== null &&
          (Et
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (Et
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? ba(e.parentNode, n)
              : e.nodeType === 1 && ba(e, n),
            Ji(e))
          : ba(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = Et),
        (Ne = n.stateNode.containerInfo),
        (Et = !0),
        hn(e, t, n),
        (Ne = r),
        (Et = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Fc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Dr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ce(n, t, l);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), hn(e, t, n), (ze = r))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function Vf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Sv()),
      t.forEach(function (r) {
        var i = Tv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Ne = l.stateNode), (Et = !1);
              break e;
            case 3:
              (Ne = l.stateNode.containerInfo), (Et = !0);
              break e;
            case 4:
              (Ne = l.stateNode.containerInfo), (Et = !0);
              break e;
          }
          l = l.return;
        }
        if (Ne === null) throw Error(N(160));
        qg(s, o, i), (Ne = null), (Et = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (c) {
        ce(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qg(t, e), (t = t.sibling);
}
function Qg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((kt(t, e), Dt(e), r & 4)) {
        try {
          Bi(3, e, e.return), Al(3, e);
        } catch (x) {
          ce(e, e.return, x);
        }
        try {
          Bi(5, e, e.return);
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 1:
      kt(t, e), Dt(e), r & 512 && n !== null && Dr(n, n.return);
      break;
    case 5:
      if (
        (kt(t, e),
        Dt(e),
        r & 512 && n !== null && Dr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Xi(i, "");
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && xm(i, s),
              dc(l, o);
            var c = dc(l, s);
            for (o = 0; o < a.length; o += 2) {
              var u = a[o],
                d = a[o + 1];
              u === "style"
                ? Sm(i, d)
                : u === "dangerouslySetInnerHTML"
                ? bm(i, d)
                : u === "children"
                ? Xi(i, d)
                : ju(i, u, d, c);
            }
            switch (l) {
              case "input":
                oc(i, s);
                break;
              case "textarea":
                vm(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? zr(i, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? zr(i, !!s.multiple, s.defaultValue, !0)
                      : zr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[rs] = s;
          } catch (x) {
            ce(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((kt(t, e), Dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          ce(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (kt(t, e), Dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ji(t.containerInfo);
        } catch (x) {
          ce(e, e.return, x);
        }
      break;
    case 4:
      kt(t, e), Dt(e);
      break;
    case 13:
      kt(t, e),
        Dt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (od = de())),
        r & 4 && Vf(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (c = ze) || u), kt(t, e), (ze = c)) : kt(t, e),
        Dt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (R = e, u = e.child; u !== null; ) {
            for (d = R = u; R !== null; ) {
              switch (((h = R), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Bi(4, h, h.return);
                  break;
                case 1:
                  Dr(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (x) {
                      ce(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Dr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Yf(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (R = p)) : Yf(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = _m("display", o)));
              } catch (x) {
                ce(e, e.return, x);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (x) {
                ce(e, e.return, x);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      kt(t, e), Dt(e), r & 4 && Vf(e);
      break;
    case 21:
      break;
    default:
      kt(t, e), Dt(e);
  }
}
function Dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Xi(i, ""), (r.flags &= -33));
          var s = Wf(e);
          $c(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Wf(e);
          Bc(e, l, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Cv(e, t, n) {
  (R = e), Gg(e);
}
function Gg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Ys;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ze;
        l = Ys;
        var c = ze;
        if (((Ys = o), (ze = a) && !c))
          for (R = i; R !== null; )
            (o = R),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Xf(i)
                : a !== null
                ? ((a.return = o), (R = a))
                : Xf(i);
        for (; s !== null; ) (R = s), Gg(s), (s = s.sibling);
        (R = i), (Ys = l), (ze = c);
      }
      Kf(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (R = s)) : Kf(e);
  }
}
function Kf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || Al(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ct(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Mf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Mf(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && Ji(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        ze || (t.flags & 512 && Ic(t));
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Yf(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function Xf(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Al(4, t);
          } catch (a) {
            ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ce(t, i, a);
            }
          }
          var s = t.return;
          try {
            Ic(t);
          } catch (a) {
            ce(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ic(t);
          } catch (a) {
            ce(t, o, a);
          }
      }
    } catch (a) {
      ce(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var Ev = Math.ceil,
  Zo = dn.ReactCurrentDispatcher,
  id = dn.ReactCurrentOwner,
  vt = dn.ReactCurrentBatchConfig,
  $ = 0,
  Ee = null,
  me = null,
  Me = 0,
  rt = 0,
  Ar = Un(0),
  Se = 0,
  cs = null,
  fr = 0,
  zl = 0,
  sd = 0,
  $i = null,
  Xe = null,
  od = 0,
  Jr = 1 / 0,
  Qt = null,
  el = !1,
  Uc = null,
  On = null,
  Xs = !1,
  _n = null,
  tl = 0,
  Ui = 0,
  Hc = null,
  bo = -1,
  _o = 0;
function He() {
  return $ & 6 ? de() : bo !== -1 ? bo : (bo = de());
}
function Rn(e) {
  return e.mode & 1
    ? $ & 2 && Me !== 0
      ? Me & -Me
      : cv.transition !== null
      ? (_o === 0 && (_o = Dm()), _o)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Um(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < Ui) throw ((Ui = 0), (Hc = null), Error(N(185)));
  bs(e, n, r),
    (!($ & 2) || e !== Ee) &&
      (e === Ee && (!($ & 2) && (zl |= n), Se === 4 && vn(e, Me)),
      et(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Jr = de() + 500), Tl && Hn()));
}
function et(e, t) {
  var n = e.callbackNode;
  cx(e, t);
  var r = Fo(e, e === Ee ? Me : 0);
  if (r === 0)
    n !== null && nf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && nf(n), t === 1))
      e.tag === 0 ? av(qf.bind(null, e)) : lg(qf.bind(null, e)),
        iv(function () {
          !($ & 6) && Hn();
        }),
        (n = null);
    else {
      switch (Am(r)) {
        case 1:
          n = Ru;
          break;
        case 4:
          n = Tm;
          break;
        case 16:
          n = zo;
          break;
        case 536870912:
          n = Lm;
          break;
        default:
          n = zo;
      }
      n = s0(n, Jg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Jg(e, t) {
  if (((bo = -1), (_o = 0), $ & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Ur() && e.callbackNode !== n) return null;
  var r = Fo(e, e === Ee ? Me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var i = $;
    $ |= 2;
    var s = e0();
    (Ee !== e || Me !== t) && ((Qt = null), (Jr = de() + 500), sr(e, t));
    do
      try {
        Pv();
        break;
      } catch (l) {
        Zg(e, l);
      }
    while (!0);
    Vu(),
      (Zo.current = s),
      ($ = i),
      me !== null ? (t = 0) : ((Ee = null), (Me = 0), (t = Se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = gc(e)), i !== 0 && ((r = i), (t = Wc(e, i)))), t === 1)
    )
      throw ((n = cs), sr(e, 0), vn(e, r), et(e, de()), n);
    if (t === 6) vn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !jv(i) &&
          ((t = nl(e, r)),
          t === 2 && ((s = gc(e)), s !== 0 && ((r = s), (t = Wc(e, s)))),
          t === 1))
      )
        throw ((n = cs), sr(e, 0), vn(e, r), et(e, de()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Gn(e, Xe, Qt);
          break;
        case 3:
          if (
            (vn(e, r), (r & 130023424) === r && ((t = od + 500 - de()), 10 < t))
          ) {
            if (Fo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = kc(Gn.bind(null, e, Xe, Qt), t);
            break;
          }
          Gn(e, Xe, Qt);
          break;
        case 4:
          if ((vn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Mt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ev(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = kc(Gn.bind(null, e, Xe, Qt), r);
            break;
          }
          Gn(e, Xe, Qt);
          break;
        case 5:
          Gn(e, Xe, Qt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return et(e, de()), e.callbackNode === n ? Jg.bind(null, e) : null;
}
function Wc(e, t) {
  var n = $i;
  return (
    e.current.memoizedState.isDehydrated && (sr(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = Xe), (Xe = n), t !== null && Vc(t)),
    e
  );
}
function Vc(e) {
  Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function jv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Rt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vn(e, t) {
  for (
    t &= ~sd,
      t &= ~zl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Mt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function qf(e) {
  if ($ & 6) throw Error(N(327));
  Ur();
  var t = Fo(e, 0);
  if (!(t & 1)) return et(e, de()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gc(e);
    r !== 0 && ((t = r), (n = Wc(e, r)));
  }
  if (n === 1) throw ((n = cs), sr(e, 0), vn(e, t), et(e, de()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gn(e, Xe, Qt),
    et(e, de()),
    null
  );
}
function ld(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Jr = de() + 500), Tl && Hn());
  }
}
function hr(e) {
  _n !== null && _n.tag === 0 && !($ & 6) && Ur();
  var t = $;
  $ |= 1;
  var n = vt.transition,
    r = K;
  try {
    if (((vt.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (vt.transition = n), ($ = t), !($ & 6) && Hn();
  }
}
function ad() {
  (rt = Ar.current), ne(Ar);
}
function sr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rv(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Uu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ho();
          break;
        case 3:
          Qr(), ne(Je), ne(Ie), Gu();
          break;
        case 5:
          Qu(r);
          break;
        case 4:
          Qr();
          break;
        case 13:
          ne(oe);
          break;
        case 19:
          ne(oe);
          break;
        case 10:
          Ku(r.type._context);
          break;
        case 22:
        case 23:
          ad();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (me = e = Tn(e.current, null)),
    (Me = rt = t),
    (Se = 0),
    (cs = null),
    (sd = zl = fr = 0),
    (Xe = $i = null),
    tr !== null)
  ) {
    for (t = 0; t < tr.length; t++)
      if (((n = tr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    tr = null;
  }
  return e;
}
function Zg(e, t) {
  do {
    var n = me;
    try {
      if ((Vu(), (xo.current = Jo), Go)) {
        for (var r = le.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Go = !1;
      }
      if (
        ((dr = 0),
        (Ce = be = le = null),
        (Ii = !1),
        (os = 0),
        (id.current = null),
        n === null || n.return === null)
      ) {
        (Se = 1), (cs = t), (me = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (
          ((t = Me),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            u = l,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = u.alternate;
            h
              ? ((u.updateQueue = h.updateQueue),
                (u.memoizedState = h.memoizedState),
                (u.lanes = h.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = Af(o);
          if (p !== null) {
            (p.flags &= -257),
              zf(p, o, l, s, t),
              p.mode & 1 && Df(s, c, t),
              (t = p),
              (a = c);
            var g = t.updateQueue;
            if (g === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Df(s, c, t), cd();
              break e;
            }
            a = Error(N(426));
          }
        } else if (re && l.mode & 1) {
          var v = Af(o);
          if (v !== null) {
            !(v.flags & 65536) && (v.flags |= 256),
              zf(v, o, l, s, t),
              Hu(Gr(a, l));
            break e;
          }
        }
        (s = a = Gr(a, l)),
          Se !== 4 && (Se = 2),
          $i === null ? ($i = [s]) : $i.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = Ag(s, a, t);
              Pf(s, m);
              break e;
            case 1:
              l = a;
              var y = s.type,
                w = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof y.getDerivedStateFromError == "function" ||
                  (w !== null &&
                    typeof w.componentDidCatch == "function" &&
                    (On === null || !On.has(w))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var b = zg(s, l, t);
                Pf(s, b);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      n0(n);
    } catch (_) {
      (t = _), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function e0() {
  var e = Zo.current;
  return (Zo.current = Jo), e === null ? Jo : e;
}
function cd() {
  (Se === 0 || Se === 3 || Se === 2) && (Se = 4),
    Ee === null || (!(fr & 268435455) && !(zl & 268435455)) || vn(Ee, Me);
}
function nl(e, t) {
  var n = $;
  $ |= 2;
  var r = e0();
  (Ee !== e || Me !== t) && ((Qt = null), sr(e, t));
  do
    try {
      Nv();
      break;
    } catch (i) {
      Zg(e, i);
    }
  while (!0);
  if ((Vu(), ($ = n), (Zo.current = r), me !== null)) throw Error(N(261));
  return (Ee = null), (Me = 0), Se;
}
function Nv() {
  for (; me !== null; ) t0(me);
}
function Pv() {
  for (; me !== null && !ex(); ) t0(me);
}
function t0(e) {
  var t = i0(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? n0(e) : (me = t),
    (id.current = null);
}
function n0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = _v(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Se = 6), (me = null);
        return;
      }
    } else if (((n = bv(n, t, rt)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  Se === 0 && (Se = 5);
}
function Gn(e, t, n) {
  var r = K,
    i = vt.transition;
  try {
    (vt.transition = null), (K = 1), Mv(e, t, n, r);
  } finally {
    (vt.transition = i), (K = r);
  }
  return null;
}
function Mv(e, t, n, r) {
  do Ur();
  while (_n !== null);
  if ($ & 6) throw Error(N(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (ux(e, s),
    e === Ee && ((me = Ee = null), (Me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xs ||
      ((Xs = !0),
      s0(zo, function () {
        return Ur(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = vt.transition), (vt.transition = null);
    var o = K;
    K = 1;
    var l = $;
    ($ |= 4),
      (id.current = null),
      kv(e, n),
      Qg(n, e),
      Qx(_c),
      (Io = !!bc),
      (_c = bc = null),
      (e.current = n),
      Cv(n),
      tx(),
      ($ = l),
      (K = o),
      (vt.transition = s);
  } else e.current = n;
  if (
    (Xs && ((Xs = !1), (_n = e), (tl = i)),
    (s = e.pendingLanes),
    s === 0 && (On = null),
    ix(n.stateNode),
    et(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (el) throw ((el = !1), (e = Uc), (Uc = null), e);
  return (
    tl & 1 && e.tag !== 0 && Ur(),
    (s = e.pendingLanes),
    s & 1 ? (e === Hc ? Ui++ : ((Ui = 0), (Hc = e))) : (Ui = 0),
    Hn(),
    null
  );
}
function Ur() {
  if (_n !== null) {
    var e = Am(tl),
      t = vt.transition,
      n = K;
    try {
      if (((vt.transition = null), (K = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (tl = 0), $ & 6)) throw Error(N(331));
        var i = $;
        for ($ |= 4, R = e.current; R !== null; ) {
          var s = R,
            o = s.child;
          if (R.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (R = c; R !== null; ) {
                  var u = R;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bi(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (R = d);
                  else
                    for (; R !== null; ) {
                      u = R;
                      var h = u.sibling,
                        p = u.return;
                      if ((Yg(u), u === c)) {
                        R = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (R = h);
                        break;
                      }
                      R = p;
                    }
                }
              }
              var g = s.alternate;
              if (g !== null) {
                var x = g.child;
                if (x !== null) {
                  g.child = null;
                  do {
                    var v = x.sibling;
                    (x.sibling = null), (x = v);
                  } while (x !== null);
                }
              }
              R = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (R = o);
          else
            e: for (; R !== null; ) {
              if (((s = R), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bi(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (R = m);
                break e;
              }
              R = s.return;
            }
        }
        var y = e.current;
        for (R = y; R !== null; ) {
          o = R;
          var w = o.child;
          if (o.subtreeFlags & 2064 && w !== null) (w.return = o), (R = w);
          else
            e: for (o = y; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, l);
                  }
                } catch (_) {
                  ce(l, l.return, _);
                }
              if (l === o) {
                R = null;
                break e;
              }
              var b = l.sibling;
              if (b !== null) {
                (b.return = l.return), (R = b);
                break e;
              }
              R = l.return;
            }
        }
        if (
          (($ = i), Hn(), $t && typeof $t.onPostCommitFiberRoot == "function")
        )
          try {
            $t.onPostCommitFiberRoot(Nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (vt.transition = t);
    }
  }
  return !1;
}
function Qf(e, t, n) {
  (t = Gr(n, t)),
    (t = Ag(e, t, 1)),
    (e = Mn(e, t, 1)),
    (t = He()),
    e !== null && (bs(e, 1, t), et(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Qf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (On === null || !On.has(r)))
        ) {
          (e = Gr(n, e)),
            (e = zg(t, e, 1)),
            (t = Mn(t, e, 1)),
            (e = He()),
            t !== null && (bs(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Ov(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (Me & n) === n &&
      (Se === 4 || (Se === 3 && (Me & 130023424) === Me && 500 > de() - od)
        ? sr(e, 0)
        : (sd |= n)),
    et(e, t);
}
function r0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fs), (Fs <<= 1), !(Fs & 130023424) && (Fs = 4194304))
      : (t = 1));
  var n = He();
  (e = on(e, t)), e !== null && (bs(e, t, n), et(e, n));
}
function Rv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), r0(e, n);
}
function Tv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), r0(e, n);
}
var i0;
i0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Je.current) Qe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Qe = !1), wv(e, t, n);
      Qe = !!(e.flags & 131072);
    }
  else (Qe = !1), re && t.flags & 1048576 && ag(t, Ko, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      wo(e, t), (e = t.pendingProps);
      var i = Yr(t, Ie.current);
      $r(t, n), (i = Zu(null, t, r, e, i, n));
      var s = ed();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((s = !0), Wo(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Xu(t),
            (i.updater = Dl),
            (t.stateNode = i),
            (i._reactInternals = t),
            Oc(t, r, e, n),
            (t = Lc(null, t, r, !0, s, n)))
          : ((t.tag = 0), re && s && $u(t), Ue(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (wo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Dv(r)),
          (e = Ct(r, e)),
          i)
        ) {
          case 0:
            t = Tc(null, t, r, e, n);
            break e;
          case 1:
            t = Bf(null, t, r, e, n);
            break e;
          case 11:
            t = Ff(null, t, r, e, n);
            break e;
          case 14:
            t = If(null, t, r, Ct(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ct(r, i)),
        Tc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ct(r, i)),
        Bf(e, t, r, i, n)
      );
    case 3:
      e: {
        if (($g(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          pg(e, t),
          qo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Gr(Error(N(423)), t)), (t = $f(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Gr(Error(N(424)), t)), (t = $f(e, t, r, n, i));
            break e;
          } else
            for (
              it = Pn(t.stateNode.containerInfo.firstChild),
                ot = t,
                re = !0,
                jt = null,
                n = fg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xr(), r === i)) {
            t = ln(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        mg(t),
        e === null && Nc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Sc(r, i) ? (o = null) : s !== null && Sc(r, s) && (t.flags |= 32),
        Bg(e, t),
        Ue(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Nc(t), null;
    case 13:
      return Ug(e, t, n);
    case 4:
      return (
        qu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = qr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ct(r, i)),
        Ff(e, t, r, i, n)
      );
    case 7:
      return Ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          q(Yo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Rt(s.value, o)) {
            if (s.children === i.children && !Je.current) {
              t = ln(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = nn(-1, n & -n)), (a.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (a.next = a)
                          : ((a.next = u.next), (u.next = a)),
                          (c.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      Pc(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(N(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Pc(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ue(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        $r(t, n),
        (i = wt(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ct(r, t.pendingProps)),
        (i = Ct(r.type, i)),
        If(e, t, r, i, n)
      );
    case 15:
      return Fg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ct(r, i)),
        wo(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Wo(t)) : (e = !1),
        $r(t, n),
        Dg(t, r, i),
        Oc(t, r, i, n),
        Lc(null, t, r, !0, e, n)
      );
    case 19:
      return Hg(e, t, n);
    case 22:
      return Ig(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function s0(e, t) {
  return Rm(e, t);
}
function Lv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function yt(e, t, n, r) {
  return new Lv(e, t, n, r);
}
function ud(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Dv(e) {
  if (typeof e == "function") return ud(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Pu)) return 11;
    if (e === Mu) return 14;
  }
  return 2;
}
function Tn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = yt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function So(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) ud(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Er:
        return or(n.children, i, s, t);
      case Nu:
        (o = 8), (i |= 8);
        break;
      case tc:
        return (
          (e = yt(12, n, t, i | 2)), (e.elementType = tc), (e.lanes = s), e
        );
      case nc:
        return (e = yt(13, n, t, i)), (e.elementType = nc), (e.lanes = s), e;
      case rc:
        return (e = yt(19, n, t, i)), (e.elementType = rc), (e.lanes = s), e;
      case mm:
        return Fl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hm:
              o = 10;
              break e;
            case pm:
              o = 9;
              break e;
            case Pu:
              o = 11;
              break e;
            case Mu:
              o = 14;
              break e;
            case gn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = yt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function or(e, t, n, r) {
  return (e = yt(7, e, r, t)), (e.lanes = n), e;
}
function Fl(e, t, n, r) {
  return (
    (e = yt(22, e, r, t)),
    (e.elementType = mm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pa(e, t, n) {
  return (e = yt(6, e, null, t)), (e.lanes = n), e;
}
function Ma(e, t, n) {
  return (
    (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Av(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ua(0)),
    (this.expirationTimes = ua(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ua(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function dd(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new Av(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = yt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Xu(s),
    e
  );
}
function zv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Cr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function o0(e) {
  if (!e) return Fn;
  e = e._reactInternals;
  e: {
    if (wr(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return og(e, n, t);
  }
  return t;
}
function l0(e, t, n, r, i, s, o, l, a) {
  return (
    (e = dd(n, r, !0, e, i, s, o, l, a)),
    (e.context = o0(null)),
    (n = e.current),
    (r = He()),
    (i = Rn(n)),
    (s = nn(r, i)),
    (s.callback = t ?? null),
    Mn(n, s, i),
    (e.current.lanes = i),
    bs(e, i, r),
    et(e, r),
    e
  );
}
function Il(e, t, n, r) {
  var i = t.current,
    s = He(),
    o = Rn(i);
  return (
    (n = o0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = nn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Mn(i, t, o)),
    e !== null && (Ot(e, i, o, s), yo(e, i, o)),
    o
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Gf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fd(e, t) {
  Gf(e, t), (e = e.alternate) && Gf(e, t);
}
function Fv() {
  return null;
}
var a0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function hd(e) {
  this._internalRoot = e;
}
Bl.prototype.render = hd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Il(e, t, null, null);
};
Bl.prototype.unmount = hd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function () {
      Il(null, e, null, null);
    }),
      (t[sn] = null);
  }
};
function Bl(e) {
  this._internalRoot = e;
}
Bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Im();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++);
    xn.splice(n, 0, e), n === 0 && $m(e);
  }
};
function pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $l(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Jf() {}
function Iv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = rl(o);
        s.call(c);
      };
    }
    var o = l0(t, r, e, 0, null, !1, !1, "", Jf);
    return (
      (e._reactRootContainer = o),
      (e[sn] = o.current),
      ts(e.nodeType === 8 ? e.parentNode : e),
      hr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var c = rl(a);
      l.call(c);
    };
  }
  var a = dd(e, 0, !1, null, null, !1, !1, "", Jf);
  return (
    (e._reactRootContainer = a),
    (e[sn] = a.current),
    ts(e.nodeType === 8 ? e.parentNode : e),
    hr(function () {
      Il(t, a, n, r);
    }),
    a
  );
}
function Ul(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = rl(o);
        l.call(a);
      };
    }
    Il(t, o, e, i);
  } else o = Iv(n, t, e, i, r);
  return rl(o);
}
zm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ei(t.pendingLanes);
        n !== 0 &&
          (Tu(t, n | 1), et(t, de()), !($ & 6) && ((Jr = de() + 500), Hn()));
      }
      break;
    case 13:
      hr(function () {
        var r = on(e, 1);
        if (r !== null) {
          var i = He();
          Ot(r, e, 1, i);
        }
      }),
        fd(e, 1);
  }
};
Lu = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = He();
      Ot(t, e, 134217728, n);
    }
    fd(e, 134217728);
  }
};
Fm = function (e) {
  if (e.tag === 13) {
    var t = Rn(e),
      n = on(e, t);
    if (n !== null) {
      var r = He();
      Ot(n, e, t, r);
    }
    fd(e, t);
  }
};
Im = function () {
  return K;
};
Bm = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
hc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((oc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Rl(r);
            if (!i) throw Error(N(90));
            ym(r), oc(r, i);
          }
        }
      }
      break;
    case "textarea":
      vm(e, n);
      break;
    case "select":
      (t = n.value), t != null && zr(e, !!n.multiple, t, !1);
  }
};
Em = ld;
jm = hr;
var Bv = { usingClientEntryPoint: !1, Events: [Ss, Mr, Rl, km, Cm, ld] },
  yi = {
    findFiberByHostInstance: er,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  $v = {
    bundleType: yi.bundleType,
    version: yi.version,
    rendererPackageName: yi.rendererPackageName,
    rendererConfig: yi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: dn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Mm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yi.findFiberByHostInstance || Fv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qs.isDisabled && qs.supportsFiber)
    try {
      (Nl = qs.inject($v)), ($t = qs);
    } catch {}
}
ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bv;
ft.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pd(t)) throw Error(N(200));
  return zv(e, t, null, n);
};
ft.createRoot = function (e, t) {
  if (!pd(e)) throw Error(N(299));
  var n = !1,
    r = "",
    i = a0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = dd(e, 1, !1, null, null, n, !1, r, i)),
    (e[sn] = t.current),
    ts(e.nodeType === 8 ? e.parentNode : e),
    new hd(t)
  );
};
ft.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Mm(t)), (e = e === null ? null : e.stateNode), e;
};
ft.flushSync = function (e) {
  return hr(e);
};
ft.hydrate = function (e, t, n) {
  if (!$l(t)) throw Error(N(200));
  return Ul(null, e, t, !0, n);
};
ft.hydrateRoot = function (e, t, n) {
  if (!pd(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = a0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = l0(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[sn] = t.current),
    ts(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Bl(t);
};
ft.render = function (e, t, n) {
  if (!$l(t)) throw Error(N(200));
  return Ul(null, e, t, !1, n);
};
ft.unmountComponentAtNode = function (e) {
  if (!$l(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (hr(function () {
        Ul(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sn] = null);
        });
      }),
      !0)
    : !1;
};
ft.unstable_batchedUpdates = ld;
ft.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$l(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ul(e, t, n, !1, r);
};
ft.version = "18.3.1-next-f1338f8080-20240426";
function c0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c0);
    } catch (e) {
      console.error(e);
    }
}
c0(), (cm.exports = ft);
var Uv = cm.exports,
  u0,
  Zf = Uv;
(u0 = Zf.createRoot), Zf.hydrateRoot;
let Hv = { data: "" },
  Wv = (e) =>
    typeof window == "object"
      ? (
          (e ? e.querySelector("#_goober") : window._goober) ||
          Object.assign(
            (e || document.head).appendChild(document.createElement("style")),
            { innerHTML: " ", id: "_goober" }
          )
        ).firstChild
      : e || Hv,
  Vv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Kv = /\/\*[^]*?\*\/|  +/g,
  eh = /\n+/g,
  wn = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let s in e) {
      let o = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + o + ";")
          : (r +=
              s[1] == "f"
                ? wn(o, s)
                : s + "{" + wn(o, s[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
        ? (r += wn(
            o,
            t
              ? t.replace(/([^,])+/g, (l) =>
                  s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (a) =>
                    /&/.test(a) ? a.replace(/&/g, l) : l ? l + " " + a : a
                  )
                )
              : s
          ))
        : o != null &&
          ((s = /^--/.test(s) ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
          (i += wn.p ? wn.p(s, o) : s + ":" + o + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  Kt = {},
  d0 = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + d0(e[n]);
      return t;
    }
    return e;
  },
  Yv = (e, t, n, r, i) => {
    let s = d0(e),
      o =
        Kt[s] ||
        (Kt[s] = ((a) => {
          let c = 0,
            u = 11;
          for (; c < a.length; ) u = (101 * u + a.charCodeAt(c++)) >>> 0;
          return "go" + u;
        })(s));
    if (!Kt[o]) {
      let a =
        s !== e
          ? e
          : ((c) => {
              let u,
                d,
                h = [{}];
              for (; (u = Vv.exec(c.replace(Kv, ""))); )
                u[4]
                  ? h.shift()
                  : u[3]
                  ? ((d = u[3].replace(eh, " ").trim()),
                    h.unshift((h[0][d] = h[0][d] || {})))
                  : (h[0][u[1]] = u[2].replace(eh, " ").trim());
              return h[0];
            })(e);
      Kt[o] = wn(i ? { ["@keyframes " + o]: a } : a, n ? "" : "." + o);
    }
    let l = n && Kt.g ? Kt.g : null;
    return (
      n && (Kt.g = Kt[o]),
      ((a, c, u, d) => {
        d
          ? (c.data = c.data.replace(d, a))
          : c.data.indexOf(a) === -1 && (c.data = u ? a + c.data : c.data + a);
      })(Kt[o], t, r, l),
      o
    );
  },
  Xv = (e, t, n) =>
    e.reduce((r, i, s) => {
      let o = t[s];
      if (o && o.call) {
        let l = o(n),
          a = (l && l.props && l.props.className) || (/^go/.test(l) && l);
        o = a
          ? "." + a
          : l && typeof l == "object"
          ? l.props
            ? ""
            : wn(l, "")
          : l === !1
          ? ""
          : l;
      }
      return r + i + (o ?? "");
    }, "");
function Hl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Yv(
    n.unshift
      ? n.raw
        ? Xv(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Wv(t.target),
    t.g,
    t.o,
    t.k
  );
}
let f0, Kc, Yc;
Hl.bind({ g: 1 });
let an = Hl.bind({ k: 1 });
function qv(e, t, n, r) {
  (wn.p = t), (f0 = e), (Kc = n), (Yc = r);
}
function Wn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(s, o) {
      let l = Object.assign({}, s),
        a = l.className || i.className;
      (n.p = Object.assign({ theme: Kc && Kc() }, l)),
        (n.o = / *go\d+/.test(a)),
        (l.className = Hl.apply(n, r) + (a ? " " + a : ""));
      let c = e;
      return (
        e[0] && ((c = l.as || e), delete l.as), Yc && c[0] && Yc(l), f0(c, l)
      );
    }
    return i;
  };
}
var Qv = (e) => typeof e == "function",
  il = (e, t) => (Qv(e) ? e(t) : e),
  Gv = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  h0 = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Jv = 20,
  ko = new Map(),
  Zv = 1e3,
  th = (e) => {
    if (ko.has(e)) return;
    let t = setTimeout(() => {
      ko.delete(e), br({ type: 4, toastId: e });
    }, Zv);
    ko.set(e, t);
  },
  e2 = (e) => {
    let t = ko.get(e);
    t && clearTimeout(t);
  },
  Xc = (e, t) => {
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Jv) };
      case 1:
        return (
          t.toast.id && e2(t.toast.id),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === t.toast.id ? { ...s, ...t.toast } : s
            ),
          }
        );
      case 2:
        let { toast: n } = t;
        return e.toasts.find((s) => s.id === n.id)
          ? Xc(e, { type: 1, toast: n })
          : Xc(e, { type: 0, toast: n });
      case 3:
        let { toastId: r } = t;
        return (
          r
            ? th(r)
            : e.toasts.forEach((s) => {
                th(s.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((s) =>
              s.id === r || r === void 0 ? { ...s, visible: !1 } : s
            ),
          }
        );
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let i = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((s) => ({
            ...s,
            pauseDuration: s.pauseDuration + i,
          })),
        };
    }
  },
  Co = [],
  Eo = { toasts: [], pausedAt: void 0 },
  br = (e) => {
    (Eo = Xc(Eo, e)),
      Co.forEach((t) => {
        t(Eo);
      });
  },
  t2 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  n2 = (e = {}) => {
    let [t, n] = E.useState(Eo);
    E.useEffect(
      () => (
        Co.push(n),
        () => {
          let i = Co.indexOf(n);
          i > -1 && Co.splice(i, 1);
        }
      ),
      [t]
    );
    let r = t.toasts.map((i) => {
      var s, o;
      return {
        ...e,
        ...e[i.type],
        ...i,
        duration:
          i.duration ||
          ((s = e[i.type]) == null ? void 0 : s.duration) ||
          (e == null ? void 0 : e.duration) ||
          t2[i.type],
        style: {
          ...e.style,
          ...((o = e[i.type]) == null ? void 0 : o.style),
          ...i.style,
        },
      };
    });
    return { ...t, toasts: r };
  },
  r2 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Gv(),
  }),
  Cs = (e) => (t, n) => {
    let r = r2(t, e, n);
    return br({ type: 2, toast: r }), r.id;
  },
  Pe = (e, t) => Cs("blank")(e, t);
Pe.error = Cs("error");
Pe.success = Cs("success");
Pe.loading = Cs("loading");
Pe.custom = Cs("custom");
Pe.dismiss = (e) => {
  br({ type: 3, toastId: e });
};
Pe.remove = (e) => br({ type: 4, toastId: e });
Pe.promise = (e, t, n) => {
  let r = Pe.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    e
      .then(
        (i) => (
          Pe.success(il(t.success, i), {
            id: r,
            ...n,
            ...(n == null ? void 0 : n.success),
          }),
          i
        )
      )
      .catch((i) => {
        Pe.error(il(t.error, i), {
          id: r,
          ...n,
          ...(n == null ? void 0 : n.error),
        });
      }),
    e
  );
};
var i2 = (e, t) => {
    br({ type: 1, toast: { id: e, height: t } });
  },
  s2 = () => {
    br({ type: 5, time: Date.now() });
  },
  o2 = (e) => {
    let { toasts: t, pausedAt: n } = n2(e);
    E.useEffect(() => {
      if (n) return;
      let s = Date.now(),
        o = t.map((l) => {
          if (l.duration === 1 / 0) return;
          let a = (l.duration || 0) + l.pauseDuration - (s - l.createdAt);
          if (a < 0) {
            l.visible && Pe.dismiss(l.id);
            return;
          }
          return setTimeout(() => Pe.dismiss(l.id), a);
        });
      return () => {
        o.forEach((l) => l && clearTimeout(l));
      };
    }, [t, n]);
    let r = E.useCallback(() => {
        n && br({ type: 6, time: Date.now() });
      }, [n]),
      i = E.useCallback(
        (s, o) => {
          let {
              reverseOrder: l = !1,
              gutter: a = 8,
              defaultPosition: c,
            } = o || {},
            u = t.filter(
              (p) => (p.position || c) === (s.position || c) && p.height
            ),
            d = u.findIndex((p) => p.id === s.id),
            h = u.filter((p, g) => g < d && p.visible).length;
          return u
            .filter((p) => p.visible)
            .slice(...(l ? [h + 1] : [0, h]))
            .reduce((p, g) => p + (g.height || 0) + a, 0);
        },
        [t]
      );
    return {
      toasts: t,
      handlers: {
        updateHeight: i2,
        startPause: s2,
        endPause: r,
        calculateOffset: i,
      },
    };
  },
  l2 = an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  a2 = an`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  c2 = an`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  u2 = Wn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${l2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${a2} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${c2} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  d2 = an`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  f2 = Wn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${d2} 1s linear infinite;
`,
  h2 = an`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  p2 = an`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  m2 = Wn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${h2} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${p2} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  g2 = Wn("div")`
  position: absolute;
`,
  y2 = Wn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  x2 = an`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  v2 = Wn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${x2} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  w2 = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? E.createElement(v2, null, t)
        : t
      : n === "blank"
      ? null
      : E.createElement(
          y2,
          null,
          E.createElement(f2, { ...r }),
          n !== "loading" &&
            E.createElement(
              g2,
              null,
              n === "error"
                ? E.createElement(u2, { ...r })
                : E.createElement(m2, { ...r })
            )
        );
  },
  b2 = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  _2 = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  S2 = "0%{opacity:0;} 100%{opacity:1;}",
  k2 = "0%{opacity:1;} 100%{opacity:0;}",
  C2 = Wn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  E2 = Wn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  j2 = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, i] = h0() ? [S2, k2] : [b2(n), _2(n)];
    return {
      animation: t
        ? `${an(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${an(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  N2 = E.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? j2(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = E.createElement(w2, { toast: e }),
      o = E.createElement(E2, { ...e.ariaProps }, il(e.message, e));
    return E.createElement(
      C2,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: s, message: o })
        : E.createElement(E.Fragment, null, s, o)
    );
  });
qv(E.createElement);
var P2 = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let s = E.useCallback(
      (o) => {
        if (o) {
          let l = () => {
            let a = o.getBoundingClientRect().height;
            r(e, a);
          };
          l(),
            new MutationObserver(l).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            });
        }
      },
      [e, r]
    );
    return E.createElement("div", { ref: s, className: t, style: n }, i);
  },
  M2 = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
        ? { justifyContent: "flex-end" }
        : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: h0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  O2 = Hl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Qs = 16,
  R2 = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: i,
    containerStyle: s,
    containerClassName: o,
  }) => {
    let { toasts: l, handlers: a } = o2(n);
    return E.createElement(
      "div",
      {
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Qs,
          left: Qs,
          right: Qs,
          bottom: Qs,
          pointerEvents: "none",
          ...s,
        },
        className: o,
        onMouseEnter: a.startPause,
        onMouseLeave: a.endPause,
      },
      l.map((c) => {
        let u = c.position || t,
          d = a.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          h = M2(u, d);
        return E.createElement(
          P2,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: a.updateHeight,
            className: c.visible ? O2 : "",
            style: h,
          },
          c.type === "custom"
            ? il(c.message, c)
            : i
            ? i(c)
            : E.createElement(N2, { toast: c, position: u })
        );
      })
    );
  },
  L = Pe,
  p0 = { exports: {} },
  m0 = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Es = E;
function T2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var L2 = typeof Object.is == "function" ? Object.is : T2,
  D2 = Es.useSyncExternalStore,
  A2 = Es.useRef,
  z2 = Es.useEffect,
  F2 = Es.useMemo,
  I2 = Es.useDebugValue;
m0.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var s = A2(null);
  if (s.current === null) {
    var o = { hasValue: !1, value: null };
    s.current = o;
  } else o = s.current;
  s = F2(
    function () {
      function a(p) {
        if (!c) {
          if (((c = !0), (u = p), (p = r(p)), i !== void 0 && o.hasValue)) {
            var g = o.value;
            if (i(g, p)) return (d = g);
          }
          return (d = p);
        }
        if (((g = d), L2(u, p))) return g;
        var x = r(p);
        return i !== void 0 && i(g, x) ? g : ((u = p), (d = x));
      }
      var c = !1,
        u,
        d,
        h = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        h === null
          ? void 0
          : function () {
              return a(h());
            },
      ];
    },
    [t, n, r, i]
  );
  var l = D2(e, s[0], s[1]);
  return (
    z2(
      function () {
        (o.hasValue = !0), (o.value = l);
      },
      [l]
    ),
    I2(l),
    l
  );
};
p0.exports = m0;
var B2 = p0.exports,
  st = "default" in Za ? Pt : Za,
  nh = Symbol.for("react-redux-context"),
  rh = typeof globalThis < "u" ? globalThis : {};
function $2() {
  if (!st.createContext) return {};
  const e = rh[nh] ?? (rh[nh] = new Map());
  let t = e.get(st.createContext);
  return t || ((t = st.createContext(null)), e.set(st.createContext, t)), t;
}
var In = $2(),
  U2 = () => {
    throw new Error("uSES not initialized!");
  };
function md(e = In) {
  return function () {
    return st.useContext(e);
  };
}
var g0 = md(),
  y0 = U2,
  H2 = (e) => {
    y0 = e;
  },
  W2 = (e, t) => e === t;
function V2(e = In) {
  const t = e === In ? g0 : md(e),
    n = (r, i = {}) => {
      const { equalityFn: s = W2, devModeChecks: o = {} } =
          typeof i == "function" ? { equalityFn: i } : i,
        {
          store: l,
          subscription: a,
          getServerState: c,
          stabilityCheck: u,
          identityFunctionCheck: d,
        } = t();
      st.useRef(!0);
      const h = st.useCallback(
          {
            [r.name](g) {
              return r(g);
            },
          }[r.name],
          [r, u, o.stabilityCheck]
        ),
        p = y0(a.addNestedSub, l.getState, c || l.getState, h, s);
      return st.useDebugValue(p), p;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var lt = V2();
function K2(e) {
  e();
}
function Y2() {
  let e = null,
    t = null;
  return {
    clear() {
      (e = null), (t = null);
    },
    notify() {
      K2(() => {
        let n = e;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; ) n.push(r), (r = r.next);
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = (t = { callback: n, next: null, prev: t });
      return (
        i.prev ? (i.prev.next = i) : (e = i),
        function () {
          !r ||
            e === null ||
            ((r = !1),
            i.next ? (i.next.prev = i.prev) : (t = i.prev),
            i.prev ? (i.prev.next = i.next) : (e = i.next));
        }
      );
    },
  };
}
var ih = { notify() {}, get: () => [] };
function X2(e, t) {
  let n,
    r = ih,
    i = 0,
    s = !1;
  function o(x) {
    u();
    const v = r.subscribe(x);
    let m = !1;
    return () => {
      m || ((m = !0), v(), d());
    };
  }
  function l() {
    r.notify();
  }
  function a() {
    g.onStateChange && g.onStateChange();
  }
  function c() {
    return s;
  }
  function u() {
    i++, n || ((n = e.subscribe(a)), (r = Y2()));
  }
  function d() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = ih));
  }
  function h() {
    s || ((s = !0), u());
  }
  function p() {
    s && ((s = !1), d());
  }
  const g = {
    addNestedSub: o,
    notifyNestedSubs: l,
    handleChangeWrapper: a,
    isSubscribed: c,
    trySubscribe: h,
    tryUnsubscribe: p,
    getListeners: () => r,
  };
  return g;
}
var q2 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Q2 = typeof navigator < "u" && navigator.product === "ReactNative",
  G2 = q2 || Q2 ? st.useLayoutEffect : st.useEffect;
function J2({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: s = "once",
}) {
  const o = st.useMemo(() => {
      const c = X2(e);
      return {
        store: e,
        subscription: c,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        identityFunctionCheck: s,
      };
    }, [e, r, i, s]),
    l = st.useMemo(() => e.getState(), [e]);
  G2(() => {
    const { subscription: c } = o;
    return (
      (c.onStateChange = c.notifyNestedSubs),
      c.trySubscribe(),
      l !== e.getState() && c.notifyNestedSubs(),
      () => {
        c.tryUnsubscribe(), (c.onStateChange = void 0);
      }
    );
  }, [o, l]);
  const a = t || In;
  return st.createElement(a.Provider, { value: o }, n);
}
var Z2 = J2;
function x0(e = In) {
  const t = e === In ? g0 : md(e),
    n = () => {
      const { store: r } = t();
      return r;
    };
  return Object.assign(n, { withTypes: () => n }), n;
}
var ew = x0();
function tw(e = In) {
  const t = e === In ? ew : x0(e),
    n = () => t().dispatch;
  return Object.assign(n, { withTypes: () => n }), n;
}
var Ke = tw();
H2(B2.useSyncExternalStoreWithSelector);
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function us() {
  return (
    (us = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    us.apply(this, arguments)
  );
}
var Sn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Sn || (Sn = {}));
const sh = "popstate";
function nw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return qc(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : sl(i);
  }
  return iw(t, n, null, e);
}
function he(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function v0(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function rw() {
  return Math.random().toString(36).substr(2, 8);
}
function oh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function qc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    us(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ii(t) : t,
      { state: n, key: (t && t.key) || r || rw() }
    )
  );
}
function sl(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ii(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function iw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = Sn.Pop,
    a = null,
    c = u();
  c == null && ((c = 0), o.replaceState(us({}, o.state, { idx: c }), ""));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    l = Sn.Pop;
    let v = u(),
      m = v == null ? null : v - c;
    (c = v), a && a({ action: l, location: x.location, delta: m });
  }
  function h(v, m) {
    l = Sn.Push;
    let y = qc(x.location, v, m);
    c = u() + 1;
    let w = oh(y, c),
      b = x.createHref(y);
    try {
      o.pushState(w, "", b);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      i.location.assign(b);
    }
    s && a && a({ action: l, location: x.location, delta: 1 });
  }
  function p(v, m) {
    l = Sn.Replace;
    let y = qc(x.location, v, m);
    c = u();
    let w = oh(y, c),
      b = x.createHref(y);
    o.replaceState(w, "", b),
      s && a && a({ action: l, location: x.location, delta: 0 });
  }
  function g(v) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      y = typeof v == "string" ? v : sl(v);
    return (
      (y = y.replace(/ $/, "%20")),
      he(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          y
      ),
      new URL(y, m)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, o);
    },
    listen(v) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(sh, d),
        (a = v),
        () => {
          i.removeEventListener(sh, d), (a = null);
        }
      );
    },
    createHref(v) {
      return t(i, v);
    },
    createURL: g,
    encodeLocation(v) {
      let m = g(v);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: p,
    go(v) {
      return o.go(v);
    },
  };
  return x;
}
var lh;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(lh || (lh = {}));
function sw(e, t, n) {
  return n === void 0 && (n = "/"), ow(e, t, n, !1);
}
function ow(e, t, n, r) {
  let i = typeof t == "string" ? ii(t) : t,
    s = gd(i.pathname || "/", n);
  if (s == null) return null;
  let o = w0(e);
  lw(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let c = xw(s);
    l = gw(o[a], c, r);
  }
  return l;
}
function w0(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (he(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let c = Ln([r, a.relativePath]),
      u = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (he(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      w0(s.children, t, u, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: pw(c, s.index), routesMeta: u });
  };
  return (
    e.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of b0(s.path)) i(s, o, a);
    }),
    t
  );
}
function b0(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = b0(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function lw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : mw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const aw = /^:[\w-]+$/,
  cw = 3,
  uw = 2,
  dw = 1,
  fw = 10,
  hw = -2,
  ah = (e) => e === "*";
function pw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ah) && (r += hw),
    t && (r += uw),
    n
      .filter((i) => !ah(i))
      .reduce((i, s) => i + (aw.test(s) ? cw : s === "" ? dw : fw), r)
  );
}
function mw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function gw(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      c = l === r.length - 1,
      u = s === "/" ? t : t.slice(s.length) || "/",
      d = ch(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: c },
        u
      ),
      h = a.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ch(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          u
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: Ln([s, d.pathname]),
        pathnameBase: _w(Ln([s, d.pathnameBase])),
        route: h,
      }),
      d.pathnameBase !== "/" && (s = Ln([s, d.pathnameBase]));
  }
  return o;
}
function ch(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = yw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((c, u, d) => {
      let { paramName: h, isOptional: p } = u;
      if (h === "*") {
        let x = l[d] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const g = l[d];
      return (
        p && !g ? (c[h] = void 0) : (c[h] = (g || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function yw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    v0(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function xw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      v0(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function gd(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function vw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? ii(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : ww(n, t)) : t,
    search: Sw(r),
    hash: kw(i),
  };
}
function ww(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Oa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function yd(e, t) {
  let n = bw(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function xd(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = ii(e))
    : ((i = us({}, e)),
      he(
        !i.pathname || !i.pathname.includes("?"),
        Oa("?", "pathname", "search", i)
      ),
      he(
        !i.pathname || !i.pathname.includes("#"),
        Oa("#", "pathname", "hash", i)
      ),
      he(!i.search || !i.search.includes("#"), Oa("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let d = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (d -= 1);
      i.pathname = h.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let a = vw(i, l),
    c = o && o !== "/" && o.endsWith("/"),
    u = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (c || u) && (a.pathname += "/"), a;
}
const Ln = (e) => e.join("/").replace(/\/\/+/g, "/"),
  _w = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Sw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  kw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Cw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const _0 = ["post", "put", "patch", "delete"];
new Set(_0);
const Ew = ["get", ..._0];
new Set(Ew);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ds() {
  return (
    (ds = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ds.apply(this, arguments)
  );
}
const vd = E.createContext(null),
  jw = E.createContext(null),
  Vn = E.createContext(null),
  Wl = E.createContext(null),
  Wt = E.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  S0 = E.createContext(null);
function Nw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  si() || he(!1);
  let { basename: r, navigator: i } = E.useContext(Vn),
    { hash: s, pathname: o, search: l } = C0(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Ln([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function si() {
  return E.useContext(Wl) != null;
}
function fn() {
  return si() || he(!1), E.useContext(Wl).location;
}
function k0(e) {
  E.useContext(Vn).static || E.useLayoutEffect(e);
}
function ue() {
  let { isDataRoute: e } = E.useContext(Wt);
  return e ? Ww() : Pw();
}
function Pw() {
  si() || he(!1);
  let e = E.useContext(vd),
    { basename: t, future: n, navigator: r } = E.useContext(Vn),
    { matches: i } = E.useContext(Wt),
    { pathname: s } = fn(),
    o = JSON.stringify(yd(i, n.v7_relativeSplatPath)),
    l = E.useRef(!1);
  return (
    k0(() => {
      l.current = !0;
    }),
    E.useCallback(
      function (c, u) {
        if ((u === void 0 && (u = {}), !l.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let d = xd(c, JSON.parse(o), s, u.relative === "path");
        e == null &&
          t !== "/" &&
          (d.pathname = d.pathname === "/" ? t : Ln([t, d.pathname])),
          (u.replace ? r.replace : r.push)(d, u.state, u);
      },
      [t, r, o, s, e]
    )
  );
}
const Mw = E.createContext(null);
function Ow(e) {
  let t = E.useContext(Wt).outlet;
  return t && E.createElement(Mw.Provider, { value: e }, t);
}
function Rw() {
  let { matches: e } = E.useContext(Wt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function C0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = E.useContext(Vn),
    { matches: i } = E.useContext(Wt),
    { pathname: s } = fn(),
    o = JSON.stringify(yd(i, r.v7_relativeSplatPath));
  return E.useMemo(() => xd(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function Tw(e, t) {
  return Lw(e, t);
}
function Lw(e, t, n, r) {
  si() || he(!1);
  let { navigator: i } = E.useContext(Vn),
    { matches: s } = E.useContext(Wt),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let c = fn(),
    u;
  if (t) {
    var d;
    let v = typeof t == "string" ? ii(t) : t;
    a === "/" || ((d = v.pathname) != null && d.startsWith(a)) || he(!1),
      (u = v);
  } else u = c;
  let h = u.pathname || "/",
    p = h;
  if (a !== "/") {
    let v = a.replace(/^\//, "").split("/");
    p = "/" + h.replace(/^\//, "").split("/").slice(v.length).join("/");
  }
  let g = sw(e, { pathname: p }),
    x = Iw(
      g &&
        g.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, l, v.params),
            pathname: Ln([
              a,
              i.encodeLocation
                ? i.encodeLocation(v.pathname).pathname
                : v.pathname,
            ]),
            pathnameBase:
              v.pathnameBase === "/"
                ? a
                : Ln([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(v.pathnameBase).pathname
                      : v.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? E.createElement(
        Wl.Provider,
        {
          value: {
            location: ds(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: Sn.Pop,
          },
        },
        x
      )
    : x;
}
function Dw() {
  let e = Hw(),
    t = Cw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return E.createElement(
    E.Fragment,
    null,
    E.createElement("h2", null, "Unexpected Application Error!"),
    E.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? E.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Aw = E.createElement(Dw, null);
class zw extends E.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? E.createElement(
          Wt.Provider,
          { value: this.props.routeContext },
          E.createElement(S0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Fw(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = E.useContext(vd);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(Wt.Provider, { value: t }, r)
  );
}
function Iw(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let u = o.findIndex(
      (d) => d.route.id && (l == null ? void 0 : l[d.route.id]) !== void 0
    );
    u >= 0 || he(!1), (o = o.slice(0, Math.min(o.length, u + 1)));
  }
  let a = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let u = 0; u < o.length; u++) {
      let d = o[u];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u),
        d.route.id)
      ) {
        let { loaderData: h, errors: p } = n,
          g =
            d.route.loader &&
            h[d.route.id] === void 0 &&
            (!p || p[d.route.id] === void 0);
        if (d.route.lazy || g) {
          (a = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((u, d, h) => {
    let p,
      g = !1,
      x = null,
      v = null;
    n &&
      ((p = l && d.route.id ? l[d.route.id] : void 0),
      (x = d.route.errorElement || Aw),
      a &&
        (c < 0 && h === 0
          ? ((g = !0), (v = null))
          : c === h &&
            ((g = !0), (v = d.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      y = () => {
        let w;
        return (
          p
            ? (w = x)
            : g
            ? (w = v)
            : d.route.Component
            ? (w = E.createElement(d.route.Component, null))
            : d.route.element
            ? (w = d.route.element)
            : (w = u),
          E.createElement(Fw, {
            match: d,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: w,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || h === 0)
      ? E.createElement(zw, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: p,
          children: y(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : y();
  }, null);
}
var E0 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(E0 || {}),
  ol = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(ol || {});
function Bw(e) {
  let t = E.useContext(vd);
  return t || he(!1), t;
}
function $w(e) {
  let t = E.useContext(jw);
  return t || he(!1), t;
}
function Uw(e) {
  let t = E.useContext(Wt);
  return t || he(!1), t;
}
function j0(e) {
  let t = Uw(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || he(!1), n.route.id;
}
function Hw() {
  var e;
  let t = E.useContext(S0),
    n = $w(ol.UseRouteError),
    r = j0(ol.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ww() {
  let { router: e } = Bw(E0.UseNavigateStable),
    t = j0(ol.UseNavigateStable),
    n = E.useRef(!1);
  return (
    k0(() => {
      n.current = !0;
    }),
    E.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ds({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
function uh(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  si() || he(!1);
  let { future: s, static: o } = E.useContext(Vn),
    { matches: l } = E.useContext(Wt),
    { pathname: a } = fn(),
    c = ue(),
    u = xd(t, yd(l, s.v7_relativeSplatPath), a, i === "path"),
    d = JSON.stringify(u);
  return (
    E.useEffect(
      () => c(JSON.parse(d), { replace: n, state: r, relative: i }),
      [c, d, i, n, r]
    ),
    null
  );
}
function Vw(e) {
  return Ow(e.context);
}
function Z(e) {
  he(!1);
}
function Kw(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Sn.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = e;
  si() && he(!1);
  let a = t.replace(/^\/*/, "/"),
    c = E.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: ds({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = ii(r));
  let {
      pathname: u = "/",
      search: d = "",
      hash: h = "",
      state: p = null,
      key: g = "default",
    } = r,
    x = E.useMemo(() => {
      let v = gd(u, a);
      return v == null
        ? null
        : {
            location: { pathname: v, search: d, hash: h, state: p, key: g },
            navigationType: i,
          };
    }, [a, u, d, h, p, g, i]);
  return x == null
    ? null
    : E.createElement(
        Vn.Provider,
        { value: c },
        E.createElement(Wl.Provider, { children: n, value: x })
      );
}
function Yw(e) {
  let { children: t, location: n } = e;
  return Tw(Qc(t), n);
}
new Promise(() => {});
function Qc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    E.Children.forEach(e, (r, i) => {
      if (!E.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === E.Fragment) {
        n.push.apply(n, Qc(r.props.children, s));
        return;
      }
      r.type !== Z && he(!1), !r.props.index || !r.props.children || he(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Qc(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Gc() {
  return (
    (Gc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gc.apply(this, arguments)
  );
}
function Xw(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function qw(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Qw(e, t) {
  return e.button === 0 && (!t || t === "_self") && !qw(e);
}
const Gw = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Jw = "6";
try {
  window.__reactRouterVersion = Jw;
} catch {}
const Zw = "startTransition",
  dh = Za[Zw];
function eb(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = E.useRef();
  s.current == null && (s.current = nw({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = E.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    u = E.useCallback(
      (d) => {
        c && dh ? dh(() => a(d)) : a(d);
      },
      [a, c]
    );
  return (
    E.useLayoutEffect(() => o.listen(u), [o, u]),
    E.createElement(Kw, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const tb =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  nb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  De = E.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: c,
        preventScrollReset: u,
        viewTransition: d,
      } = t,
      h = Xw(t, Gw),
      { basename: p } = E.useContext(Vn),
      g,
      x = !1;
    if (typeof c == "string" && nb.test(c) && ((g = c), tb))
      try {
        let w = new URL(window.location.href),
          b = c.startsWith("//") ? new URL(w.protocol + c) : new URL(c),
          _ = gd(b.pathname, p);
        b.origin === w.origin && _ != null
          ? (c = _ + b.search + b.hash)
          : (x = !0);
      } catch {}
    let v = Nw(c, { relative: i }),
      m = rb(c, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: u,
        relative: i,
        viewTransition: d,
      });
    function y(w) {
      r && r(w), w.defaultPrevented || m(w);
    }
    return E.createElement(
      "a",
      Gc({}, h, { href: g || v, onClick: x || s ? r : y, ref: n, target: a })
    );
  });
var fh;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(fh || (fh = {}));
var hh;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(hh || (hh = {}));
function rb(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: l,
    } = t === void 0 ? {} : t,
    a = ue(),
    c = fn(),
    u = C0(e, { relative: o });
  return E.useCallback(
    (d) => {
      if (Qw(d, n)) {
        d.preventDefault();
        let h = r !== void 0 ? r : sl(c) === sl(u);
        a(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: l,
        });
      }
    },
    [c, a, u, r, i, n, e, s, o, l]
  );
}
function ph({ allowedRoles: e }) {
  const { isLoggedIn: t, role: n } = lt((r) => r.auth);
  return t && e.find((r) => r === n)
    ? f.jsx(Vw, {})
    : t
    ? f.jsx(uh, { to: "/denied" })
    : f.jsx(uh, { to: "/login" });
}
const ib = "/assets/aboutUsImg-C_HnvfSZ.png";
function sb({
  slideNumber: e,
  title: t,
  image: n,
  description: r,
  totalSlides: i,
}) {
  return f.jsxs("div", {
    id: `slide${e}`,
    className: "carousel-item relative w-full",
    children: [
      f.jsxs("div", {
        className:
          "flex flex-col justify-center items-center w-[70%] m-auto text-center space-y-4",
        children: [
          f.jsx("div", {
            className:
              "sm:w-36 sm:h-36 lg:w-60 lg:h-60 w-28 h-28 rounded-full relative overflow-hidden border-solid border-white border-2",
            children: f.jsx("img", {
              src: n,
              className: "w-full h-full object-cover object-center",
              alt: t,
            }),
          }),
          f.jsxs("div", {
            children: [
              f.jsx("p", { children: r }),
              f.jsx("h3", { className: "text-2xl", children: t }),
            ],
          }),
        ],
      }),
      f.jsxs("div", {
        className:
          "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",
        children: [
          f.jsx("a", {
            href: `#slide${e === 1 ? i : e - 1}`,
            className: "btn btn-circle",
            children: "❮",
          }),
          f.jsx("a", {
            href: `#slide${e === i ? 1 : e + 1}`,
            className: "btn btn-circle",
            children: "❯",
          }),
        ],
      }),
    ],
  });
}
const ob = "/assets/elonMusk-DNg1E0Cp.png",
  lb = "/assets/mahatmaGandhi-QItawsZn.png",
  ab = "/assets/samAltman-6JBIwxV3.png",
  cb = "/assets/steveJobs-UQqMkc5d.png",
  Ra = [
    {
      slideNumber: 1,
      title: "Steve Jobs",
      image: cb,
      description:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    },
    {
      slideNumber: 2,
      title: "Elon Musk",
      image: ob,
      description:
        "When something is important enough, you do it even if the odds are not in your favor.",
    },
    {
      slideNumber: 3,
      title: "Sam Altman",
      image: ab,
      description:
        "The strength of a network is the strength of the individuals within it. It's not about creating the illusion of value; it’s about creating actual value.",
    },
    {
      slideNumber: 4,
      title: "Mahatma Gandhi",
      image: lb,
      description: "Be the change that you wish to see in the world.",
    },
  ];
var N0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  mh = Pt.createContext && Pt.createContext(N0),
  ub = ["attr", "size", "title"];
function db(e, t) {
  if (e == null) return {};
  var n = fb(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function fb(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function ll() {
  return (
    (ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ll.apply(this, arguments)
  );
}
function gh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gh(Object(n), !0).forEach(function (r) {
          hb(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : gh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function hb(e, t, n) {
  return (
    (t = pb(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function pb(e) {
  var t = mb(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mb(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function P0(e) {
  return (
    e &&
    e.map((t, n) =>
      Pt.createElement(t.tag, al({ key: n }, t.attr), P0(t.child))
    )
  );
}
function ve(e) {
  return (t) =>
    Pt.createElement(gb, ll({ attr: al({}, e.attr) }, t), P0(e.child));
}
function gb(e) {
  var t = (n) => {
    var { attr: r, size: i, title: s } = e,
      o = db(e, ub),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      Pt.createElement(
        "svg",
        ll(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          o,
          {
            className: a,
            style: al(al({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && Pt.createElement("title", null, s),
        e.children
      )
    );
  };
  return mh !== void 0
    ? Pt.createElement(mh.Consumer, null, (n) => t(n))
    : t(N0);
}
function yb(e) {
  return ve({
    tag: "svg",
    attr: {
      viewBox: "0 0 1024 1024",
      fill: "currentColor",
      fillRule: "evenodd",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm127.978 274.82-.034.006c-.023.007-.042.018-.083.059L512 466.745l-127.86-127.86c-.042-.041-.06-.052-.084-.059a.118.118 0 0 0-.07 0c-.022.007-.041.018-.082.059l-45.02 45.019c-.04.04-.05.06-.058.083a.118.118 0 0 0 0 .07l.01.022a.268.268 0 0 0 .049.06L466.745 512l-127.86 127.862c-.041.04-.052.06-.059.083a.118.118 0 0 0 0 .07c.007.022.018.041.059.082l45.019 45.02c.04.04.06.05.083.058a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059L512 557.254l127.862 127.861c.04.041.06.052.083.059a.118.118 0 0 0 .07 0c.022-.007.041-.018.082-.059l45.02-45.019c.04-.04.05-.06.058-.083a.118.118 0 0 0 0-.07l-.01-.022a.268.268 0 0 0-.049-.06L557.254 512l127.861-127.86c.041-.042.052-.06.059-.084a.118.118 0 0 0 0-.07c-.007-.022-.018-.041-.059-.082l-45.019-45.02c-.04-.04-.06-.05-.083-.058a.118.118 0 0 0-.07 0Z",
        },
        child: [],
      },
    ],
  })(e);
}
function xb(e) {
  return ve({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "3", y1: "12", x2: "21", y2: "12" },
        child: [],
      },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" }, child: [] },
      {
        tag: "line",
        attr: { x1: "3", y1: "18", x2: "21", y2: "18" },
        child: [],
      },
    ],
  })(e);
}
function vb(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437",
        },
        child: [],
      },
    ],
  })(e);
}
function wb(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951",
        },
        child: [],
      },
    ],
  })(e);
}
function bb(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
        },
        child: [],
      },
    ],
  })(e);
}
function _b(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
        },
        child: [],
      },
    ],
  })(e);
}
function M0(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: { d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1",
        },
        child: [],
      },
    ],
  })(e);
}
function Sb(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z",
        },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z",
        },
        child: [],
      },
    ],
  })(e);
}
function kb(e) {
  return ve({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15",
        },
        child: [],
      },
    ],
  })(e);
}
function Cb() {
  const t = new Date().getFullYear();
  return f.jsx(f.Fragment, {
    children: f.jsxs("footer", {
      className:
        "relative left-0 bottom-0 h-[10vh] bg-gray-800 py-5 text-white flex flex-col items-center justify-between sm:flex-row sm:px-20",
      children: [
        f.jsxs("section", {
          className: "text-lg",
          children: ["Copyright ", t, " | All right reserved."],
        }),
        f.jsxs("section", {
          className:
            "flex items-center justify-center gap-5 text-2xl text-white",
          children: [
            f.jsx("a", {
              className:
                "hover:text-yellow-500 transition-all ease-in-out duration-300",
              children: f.jsx(wb, {}),
            }),
            f.jsx("a", {
              className:
                "hover:text-yellow-500 transition-all ease-in-out duration-300",
              children: f.jsx(bb, {}),
            }),
            f.jsx("a", {
              className:
                "hover:text-yellow-500 transition-all ease-in-out duration-300",
              children: f.jsx(_b, {}),
            }),
            f.jsx("a", {
              className:
                "hover:text-yellow-500 transition-all ease-in-out duration-300",
              children: f.jsx(kb, {}),
            }),
          ],
        }),
      ],
    }),
  });
}
function je(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Eb = (typeof Symbol == "function" && Symbol.observable) || "@@observable",
  yh = Eb,
  Ta = () => Math.random().toString(36).substring(7).split("").join("."),
  jb = {
    INIT: `@@redux/INIT${Ta()}`,
    REPLACE: `@@redux/REPLACE${Ta()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ta()}`,
  },
  cl = jb;
function wd(e) {
  if (typeof e != "object" || e === null) return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function O0(e, t, n) {
  if (typeof e != "function") throw new Error(je(2));
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(je(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(je(1));
    return n(O0)(e, t);
  }
  let r = e,
    i = t,
    s = new Map(),
    o = s,
    l = 0,
    a = !1;
  function c() {
    o === s &&
      ((o = new Map()),
      s.forEach((v, m) => {
        o.set(m, v);
      }));
  }
  function u() {
    if (a) throw new Error(je(3));
    return i;
  }
  function d(v) {
    if (typeof v != "function") throw new Error(je(4));
    if (a) throw new Error(je(5));
    let m = !0;
    c();
    const y = l++;
    return (
      o.set(y, v),
      function () {
        if (m) {
          if (a) throw new Error(je(6));
          (m = !1), c(), o.delete(y), (s = null);
        }
      }
    );
  }
  function h(v) {
    if (!wd(v)) throw new Error(je(7));
    if (typeof v.type > "u") throw new Error(je(8));
    if (typeof v.type != "string") throw new Error(je(17));
    if (a) throw new Error(je(9));
    try {
      (a = !0), (i = r(i, v));
    } finally {
      a = !1;
    }
    return (
      (s = o).forEach((y) => {
        y();
      }),
      v
    );
  }
  function p(v) {
    if (typeof v != "function") throw new Error(je(10));
    (r = v), h({ type: cl.REPLACE });
  }
  function g() {
    const v = d;
    return {
      subscribe(m) {
        if (typeof m != "object" || m === null) throw new Error(je(11));
        function y() {
          const b = m;
          b.next && b.next(u());
        }
        return y(), { unsubscribe: v(y) };
      },
      [yh]() {
        return this;
      },
    };
  }
  return (
    h({ type: cl.INIT }),
    { dispatch: h, subscribe: d, getState: u, replaceReducer: p, [yh]: g }
  );
}
function Nb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, { type: cl.INIT }) > "u") throw new Error(je(12));
    if (typeof n(void 0, { type: cl.PROBE_UNKNOWN_ACTION() }) > "u")
      throw new Error(je(13));
  });
}
function Pb(e) {
  const t = Object.keys(e),
    n = {};
  for (let s = 0; s < t.length; s++) {
    const o = t[s];
    typeof e[o] == "function" && (n[o] = e[o]);
  }
  const r = Object.keys(n);
  let i;
  try {
    Nb(n);
  } catch (s) {
    i = s;
  }
  return function (o = {}, l) {
    if (i) throw i;
    let a = !1;
    const c = {};
    for (let u = 0; u < r.length; u++) {
      const d = r[u],
        h = n[d],
        p = o[d],
        g = h(p, l);
      if (typeof g > "u") throw (l && l.type, new Error(je(14)));
      (c[d] = g), (a = a || g !== p);
    }
    return (a = a || r.length !== Object.keys(o).length), a ? c : o;
  };
}
function ul(...e) {
  return e.length === 0
    ? (t) => t
    : e.length === 1
    ? e[0]
    : e.reduce(
        (t, n) =>
          (...r) =>
            t(n(...r))
      );
}
function Mb(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let s = () => {
      throw new Error(je(15));
    };
    const o = { getState: i.getState, dispatch: (a, ...c) => s(a, ...c) },
      l = e.map((a) => a(o));
    return (s = ul(...l)(i.dispatch)), { ...i, dispatch: s };
  };
}
function Ob(e) {
  return wd(e) && "type" in e && typeof e.type == "string";
}
var R0 = Symbol.for("immer-nothing"),
  xh = Symbol.for("immer-draftable"),
  ut = Symbol.for("immer-state");
function Nt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Zr = Object.getPrototypeOf;
function pr(e) {
  return !!e && !!e[ut];
}
function cn(e) {
  var t;
  return e
    ? T0(e) ||
        Array.isArray(e) ||
        !!e[xh] ||
        !!((t = e.constructor) != null && t[xh]) ||
        Kl(e) ||
        Yl(e)
    : !1;
}
var Rb = Object.prototype.constructor.toString();
function T0(e) {
  if (!e || typeof e != "object") return !1;
  const t = Zr(e);
  if (t === null) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object
    ? !0
    : typeof n == "function" && Function.toString.call(n) === Rb;
}
function dl(e, t) {
  Vl(e) === 0
    ? Reflect.ownKeys(e).forEach((n) => {
        t(n, e[n], e);
      })
    : e.forEach((n, r) => t(r, n, e));
}
function Vl(e) {
  const t = e[ut];
  return t ? t.type_ : Array.isArray(e) ? 1 : Kl(e) ? 2 : Yl(e) ? 3 : 0;
}
function Jc(e, t) {
  return Vl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function L0(e, t, n) {
  const r = Vl(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n);
}
function Tb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Kl(e) {
  return e instanceof Map;
}
function Yl(e) {
  return e instanceof Set;
}
function Jn(e) {
  return e.copy_ || e.base_;
}
function Zc(e, t) {
  if (Kl(e)) return new Map(e);
  if (Yl(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = T0(e);
  if (t === !0 || (t === "class_only" && !n)) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[ut];
    let i = Reflect.ownKeys(r);
    for (let s = 0; s < i.length; s++) {
      const o = i[s],
        l = r[o];
      l.writable === !1 && ((l.writable = !0), (l.configurable = !0)),
        (l.get || l.set) &&
          (r[o] = {
            configurable: !0,
            writable: !0,
            enumerable: l.enumerable,
            value: e[o],
          });
    }
    return Object.create(Zr(e), r);
  } else {
    const r = Zr(e);
    if (r !== null && n) return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function bd(e, t = !1) {
  return (
    Xl(e) ||
      pr(e) ||
      !cn(e) ||
      (Vl(e) > 1 && (e.set = e.add = e.clear = e.delete = Lb),
      Object.freeze(e),
      t && Object.entries(e).forEach(([n, r]) => bd(r, !0))),
    e
  );
}
function Lb() {
  Nt(2);
}
function Xl(e) {
  return Object.isFrozen(e);
}
var Db = {};
function mr(e) {
  const t = Db[e];
  return t || Nt(0, e), t;
}
var fs;
function D0() {
  return fs;
}
function Ab(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function vh(e, t) {
  t &&
    (mr("Patches"),
    (e.patches_ = []),
    (e.inversePatches_ = []),
    (e.patchListener_ = t));
}
function eu(e) {
  tu(e), e.drafts_.forEach(zb), (e.drafts_ = null);
}
function tu(e) {
  e === fs && (fs = e.parent_);
}
function wh(e) {
  return (fs = Ab(fs, e));
}
function zb(e) {
  const t = e[ut];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0);
}
function bh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return (
    e !== void 0 && e !== n
      ? (n[ut].modified_ && (eu(t), Nt(4)),
        cn(e) && ((e = fl(t, e)), t.parent_ || hl(t, e)),
        t.patches_ &&
          mr("Patches").generateReplacementPatches_(
            n[ut].base_,
            e,
            t.patches_,
            t.inversePatches_
          ))
      : (e = fl(t, n, [])),
    eu(t),
    t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
    e !== R0 ? e : void 0
  );
}
function fl(e, t, n) {
  if (Xl(t)) return t;
  const r = t[ut];
  if (!r) return dl(t, (i, s) => _h(e, r, t, i, s, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return hl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    (r.finalized_ = !0), r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let s = i,
      o = !1;
    r.type_ === 3 && ((s = new Set(i)), i.clear(), (o = !0)),
      dl(s, (l, a) => _h(e, r, i, l, a, n, o)),
      hl(e, i, !1),
      n &&
        e.patches_ &&
        mr("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function _h(e, t, n, r, i, s, o) {
  if (pr(i)) {
    const l =
        s && t && t.type_ !== 3 && !Jc(t.assigned_, r) ? s.concat(r) : void 0,
      a = fl(e, i, l);
    if ((L0(n, r, a), pr(a))) e.canAutoFreeze_ = !1;
    else return;
  } else o && n.add(i);
  if (cn(i) && !Xl(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    fl(e, i),
      (!t || !t.scope_.parent_) &&
        typeof r != "symbol" &&
        Object.prototype.propertyIsEnumerable.call(n, r) &&
        hl(e, i);
  }
}
function hl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bd(t, n);
}
function Fb(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : D0(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let i = r,
    s = _d;
  n && ((i = [r]), (s = hs));
  const { revoke: o, proxy: l } = Proxy.revocable(i, s);
  return (r.draft_ = l), (r.revoke_ = o), l;
}
var _d = {
    get(e, t) {
      if (t === ut) return e;
      const n = Jn(e);
      if (!Jc(n, t)) return Ib(e, n, t);
      const r = n[t];
      return e.finalized_ || !cn(r)
        ? r
        : r === La(e.base_, t)
        ? (Da(e), (e.copy_[t] = ru(r, e)))
        : r;
    },
    has(e, t) {
      return t in Jn(e);
    },
    ownKeys(e) {
      return Reflect.ownKeys(Jn(e));
    },
    set(e, t, n) {
      const r = A0(Jn(e), t);
      if (r != null && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const i = La(Jn(e), t),
          s = i == null ? void 0 : i[ut];
        if (s && s.base_ === n)
          return (e.copy_[t] = n), (e.assigned_[t] = !1), !0;
        if (Tb(n, i) && (n !== void 0 || Jc(e.base_, t))) return !0;
        Da(e), nu(e);
      }
      return (
        (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
          (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
          ((e.copy_[t] = n), (e.assigned_[t] = !0)),
        !0
      );
    },
    deleteProperty(e, t) {
      return (
        La(e.base_, t) !== void 0 || t in e.base_
          ? ((e.assigned_[t] = !1), Da(e), nu(e))
          : delete e.assigned_[t],
        e.copy_ && delete e.copy_[t],
        !0
      );
    },
    getOwnPropertyDescriptor(e, t) {
      const n = Jn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return (
        r && {
          writable: !0,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t],
        }
      );
    },
    defineProperty() {
      Nt(11);
    },
    getPrototypeOf(e) {
      return Zr(e.base_);
    },
    setPrototypeOf() {
      Nt(12);
    },
  },
  hs = {};
dl(_d, (e, t) => {
  hs[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
});
hs.deleteProperty = function (e, t) {
  return hs.set.call(this, e, t, void 0);
};
hs.set = function (e, t, n) {
  return _d.set.call(this, e[0], t, n, e[0]);
};
function La(e, t) {
  const n = e[ut];
  return (n ? Jn(n) : e)[t];
}
function Ib(e, t, n) {
  var i;
  const r = A0(t, n);
  return r
    ? "value" in r
      ? r.value
      : (i = r.get) == null
      ? void 0
      : i.call(e.draft_)
    : void 0;
}
function A0(e, t) {
  if (!(t in e)) return;
  let n = Zr(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = Zr(n);
  }
}
function nu(e) {
  e.modified_ || ((e.modified_ = !0), e.parent_ && nu(e.parent_));
}
function Da(e) {
  e.copy_ || (e.copy_ = Zc(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Bb = class {
  constructor(e) {
    (this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (t, n, r) => {
        if (typeof t == "function" && typeof n != "function") {
          const s = n;
          n = t;
          const o = this;
          return function (a = s, ...c) {
            return o.produce(a, (u) => n.call(this, u, ...c));
          };
        }
        typeof n != "function" && Nt(6),
          r !== void 0 && typeof r != "function" && Nt(7);
        let i;
        if (cn(t)) {
          const s = wh(this),
            o = ru(t, void 0);
          let l = !0;
          try {
            (i = n(o)), (l = !1);
          } finally {
            l ? eu(s) : tu(s);
          }
          return vh(s, r), bh(i, s);
        } else if (!t || typeof t != "object") {
          if (
            ((i = n(t)),
            i === void 0 && (i = t),
            i === R0 && (i = void 0),
            this.autoFreeze_ && bd(i, !0),
            r)
          ) {
            const s = [],
              o = [];
            mr("Patches").generateReplacementPatches_(t, i, s, o), r(s, o);
          }
          return i;
        } else Nt(1, t);
      }),
      (this.produceWithPatches = (t, n) => {
        if (typeof t == "function")
          return (o, ...l) => this.produceWithPatches(o, (a) => t(a, ...l));
        let r, i;
        return [
          this.produce(t, n, (o, l) => {
            (r = o), (i = l);
          }),
          r,
          i,
        ];
      }),
      typeof (e == null ? void 0 : e.autoFreeze) == "boolean" &&
        this.setAutoFreeze(e.autoFreeze),
      typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" &&
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    cn(e) || Nt(8), pr(e) && (e = $b(e));
    const t = wh(this),
      n = ru(e, void 0);
    return (n[ut].isManual_ = !0), tu(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[ut];
    (!n || !n.isManual_) && Nt(9);
    const { scope_: r } = n;
    return vh(r, t), bh(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = mr("Patches").applyPatches_;
    return pr(e) ? r(e, t) : this.produce(e, (i) => r(i, t));
  }
};
function ru(e, t) {
  const n = Kl(e)
    ? mr("MapSet").proxyMap_(e, t)
    : Yl(e)
    ? mr("MapSet").proxySet_(e, t)
    : Fb(e, t);
  return (t ? t.scope_ : D0()).drafts_.push(n), n;
}
function $b(e) {
  return pr(e) || Nt(10, e), z0(e);
}
function z0(e) {
  if (!cn(e) || Xl(e)) return e;
  const t = e[ut];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    (t.finalized_ = !0), (n = Zc(e, t.scope_.immer_.useStrictShallowCopy_));
  } else n = Zc(e, !0);
  return (
    dl(n, (r, i) => {
      L0(n, r, z0(i));
    }),
    t && (t.finalized_ = !1),
    n
  );
}
var dt = new Bb(),
  F0 = dt.produce;
dt.produceWithPatches.bind(dt);
dt.setAutoFreeze.bind(dt);
dt.setUseStrictShallowCopy.bind(dt);
dt.applyPatches.bind(dt);
dt.createDraft.bind(dt);
dt.finishDraft.bind(dt);
function I0(e) {
  return ({ dispatch: n, getState: r }) =>
    (i) =>
    (s) =>
      typeof s == "function" ? s(n, r, e) : i(s);
}
var Ub = I0(),
  Hb = I0,
  Wb =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == "object"
              ? ul
              : ul.apply(null, arguments);
        },
  Vb = (e) => e && typeof e.match == "function";
function Hi(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i) throw new Error(Ht(0));
      return {
        type: e,
        payload: i.payload,
        ...("meta" in i && { meta: i.meta }),
        ...("error" in i && { error: i.error }),
      };
    }
    return { type: e, payload: r[0] };
  }
  return (
    (n.toString = () => `${e}`),
    (n.type = e),
    (n.match = (r) => Ob(r) && r.type === e),
    n
  );
}
var B0 = class Ni extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ni.prototype);
  }
  static get [Symbol.species]() {
    return Ni;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0])
      ? new Ni(...t[0].concat(this))
      : new Ni(...t.concat(this));
  }
};
function Sh(e) {
  return cn(e) ? F0(e, () => {}) : e;
}
function kh(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(Ht(10));
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Kb(e) {
  return typeof e == "boolean";
}
var Yb = () =>
    function (t) {
      const {
        thunk: n = !0,
        immutableCheck: r = !0,
        serializableCheck: i = !0,
        actionCreatorCheck: s = !0,
      } = t ?? {};
      let o = new B0();
      return n && (Kb(n) ? o.push(Ub) : o.push(Hb(n.extraArgument))), o;
    },
  Xb = "RTK_autoBatch",
  $0 = (e) => (t) => {
    setTimeout(t, e);
  },
  qb =
    typeof window < "u" && window.requestAnimationFrame
      ? window.requestAnimationFrame
      : $0(10),
  Qb =
    (e = { type: "raf" }) =>
    (t) =>
    (...n) => {
      const r = t(...n);
      let i = !0,
        s = !1,
        o = !1;
      const l = new Set(),
        a =
          e.type === "tick"
            ? queueMicrotask
            : e.type === "raf"
            ? qb
            : e.type === "callback"
            ? e.queueNotification
            : $0(e.timeout),
        c = () => {
          (o = !1), s && ((s = !1), l.forEach((u) => u()));
        };
      return Object.assign({}, r, {
        subscribe(u) {
          const d = () => i && u(),
            h = r.subscribe(d);
          return (
            l.add(u),
            () => {
              h(), l.delete(u);
            }
          );
        },
        dispatch(u) {
          var d;
          try {
            return (
              (i = !((d = u == null ? void 0 : u.meta) != null && d[Xb])),
              (s = !i),
              s && (o || ((o = !0), a(c))),
              r.dispatch(u)
            );
          } finally {
            i = !0;
          }
        },
      });
    },
  Gb = (e) =>
    function (n) {
      const { autoBatch: r = !0 } = n ?? {};
      let i = new B0(e);
      return r && i.push(Qb(typeof r == "object" ? r : void 0)), i;
    };
function Jb(e) {
  const t = Yb(),
    {
      reducer: n = void 0,
      middleware: r,
      devTools: i = !0,
      preloadedState: s = void 0,
      enhancers: o = void 0,
    } = e || {};
  let l;
  if (typeof n == "function") l = n;
  else if (wd(n)) l = Pb(n);
  else throw new Error(Ht(1));
  let a;
  typeof r == "function" ? (a = r(t)) : (a = t());
  let c = ul;
  i && (c = Wb({ trace: !1, ...(typeof i == "object" && i) }));
  const u = Mb(...a),
    d = Gb(u);
  let h = typeof o == "function" ? o(d) : d();
  const p = c(...h);
  return O0(l, s, p);
}
function U0(e) {
  const t = {},
    n = [];
  let r;
  const i = {
    addCase(s, o) {
      const l = typeof s == "string" ? s : s.type;
      if (!l) throw new Error(Ht(28));
      if (l in t) throw new Error(Ht(29));
      return (t[l] = o), i;
    },
    addMatcher(s, o) {
      return n.push({ matcher: s, reducer: o }), i;
    },
    addDefaultCase(s) {
      return (r = s), i;
    },
  };
  return e(i), [t, n, r];
}
function Zb(e) {
  return typeof e == "function";
}
function e_(e, t) {
  let [n, r, i] = U0(t),
    s;
  if (Zb(e)) s = () => Sh(e());
  else {
    const l = Sh(e);
    s = () => l;
  }
  function o(l = s(), a) {
    let c = [
      n[a.type],
      ...r.filter(({ matcher: u }) => u(a)).map(({ reducer: u }) => u),
    ];
    return (
      c.filter((u) => !!u).length === 0 && (c = [i]),
      c.reduce((u, d) => {
        if (d)
          if (pr(u)) {
            const p = d(u, a);
            return p === void 0 ? u : p;
          } else {
            if (cn(u)) return F0(u, (h) => d(h, a));
            {
              const h = d(u, a);
              if (h === void 0) {
                if (u === null) return u;
                throw Error(
                  "A case reducer on a non-draftable value must not return undefined"
                );
              }
              return h;
            }
          }
        return u;
      }, l)
    );
  }
  return (o.getInitialState = s), o;
}
var t_ = (e, t) => (Vb(e) ? e.match(t) : e(t));
function n_(...e) {
  return (t) => e.some((n) => t_(n, t));
}
var r_ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  i_ = (e = 21) => {
    let t = "",
      n = e;
    for (; n--; ) t += r_[(Math.random() * 64) | 0];
    return t;
  },
  s_ = ["name", "message", "stack", "code"],
  Aa = class {
    constructor(e, t) {
      D(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  Ch = class {
    constructor(e, t) {
      D(this, "_type");
      (this.payload = e), (this.meta = t);
    }
  },
  o_ = (e) => {
    if (typeof e == "object" && e !== null) {
      const t = {};
      for (const n of s_) typeof e[n] == "string" && (t[n] = e[n]);
      return t;
    }
    return { message: String(e) };
  },
  pe = (() => {
    function e(t, n, r) {
      const i = Hi(t + "/fulfilled", (a, c, u, d) => ({
          payload: a,
          meta: {
            ...(d || {}),
            arg: u,
            requestId: c,
            requestStatus: "fulfilled",
          },
        })),
        s = Hi(t + "/pending", (a, c, u) => ({
          payload: void 0,
          meta: {
            ...(u || {}),
            arg: c,
            requestId: a,
            requestStatus: "pending",
          },
        })),
        o = Hi(t + "/rejected", (a, c, u, d, h) => ({
          payload: d,
          error: ((r && r.serializeError) || o_)(a || "Rejected"),
          meta: {
            ...(h || {}),
            arg: u,
            requestId: c,
            rejectedWithValue: !!d,
            requestStatus: "rejected",
            aborted: (a == null ? void 0 : a.name) === "AbortError",
            condition: (a == null ? void 0 : a.name) === "ConditionError",
          },
        }));
      function l(a) {
        return (c, u, d) => {
          const h = r != null && r.idGenerator ? r.idGenerator(a) : i_(),
            p = new AbortController();
          let g, x;
          function v(y) {
            (x = y), p.abort();
          }
          const m = (async function () {
            var b, _;
            let y;
            try {
              let S =
                (b = r == null ? void 0 : r.condition) == null
                  ? void 0
                  : b.call(r, a, { getState: u, extra: d });
              if ((a_(S) && (S = await S), S === !1 || p.signal.aborted))
                throw {
                  name: "ConditionError",
                  message: "Aborted due to condition callback returning false.",
                };
              const j = new Promise((k, M) => {
                (g = () => {
                  M({ name: "AbortError", message: x || "Aborted" });
                }),
                  p.signal.addEventListener("abort", g);
              });
              c(
                s(
                  h,
                  a,
                  (_ = r == null ? void 0 : r.getPendingMeta) == null
                    ? void 0
                    : _.call(
                        r,
                        { requestId: h, arg: a },
                        { getState: u, extra: d }
                      )
                )
              ),
                (y = await Promise.race([
                  j,
                  Promise.resolve(
                    n(a, {
                      dispatch: c,
                      getState: u,
                      extra: d,
                      requestId: h,
                      signal: p.signal,
                      abort: v,
                      rejectWithValue: (k, M) => new Aa(k, M),
                      fulfillWithValue: (k, M) => new Ch(k, M),
                    })
                  ).then((k) => {
                    if (k instanceof Aa) throw k;
                    return k instanceof Ch
                      ? i(k.payload, h, a, k.meta)
                      : i(k, h, a);
                  }),
                ]));
            } catch (S) {
              y =
                S instanceof Aa ? o(null, h, a, S.payload, S.meta) : o(S, h, a);
            } finally {
              g && p.signal.removeEventListener("abort", g);
            }
            return (
              (r &&
                !r.dispatchConditionRejection &&
                o.match(y) &&
                y.meta.condition) ||
                c(y),
              y
            );
          })();
          return Object.assign(m, {
            abort: v,
            requestId: h,
            arg: a,
            unwrap() {
              return m.then(l_);
            },
          });
        };
      }
      return Object.assign(l, {
        pending: s,
        rejected: o,
        fulfilled: i,
        settled: n_(o, i),
        typePrefix: t,
      });
    }
    return (e.withTypes = () => e), e;
  })();
function l_(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function a_(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var c_ = Symbol.for("rtk-slice-createasyncthunk");
function u_(e, t) {
  return `${e}/${t}`;
}
function d_({ creators: e } = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[c_];
  return function (i) {
    const { name: s, reducerPath: o = s } = i;
    if (!s) throw new Error(Ht(11));
    typeof process < "u";
    const l =
        (typeof i.reducers == "function" ? i.reducers(h_()) : i.reducers) || {},
      a = Object.keys(l),
      c = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      u = {
        addCase(w, b) {
          const _ = typeof w == "string" ? w : w.type;
          if (!_) throw new Error(Ht(12));
          if (_ in c.sliceCaseReducersByType) throw new Error(Ht(13));
          return (c.sliceCaseReducersByType[_] = b), u;
        },
        addMatcher(w, b) {
          return c.sliceMatchers.push({ matcher: w, reducer: b }), u;
        },
        exposeAction(w, b) {
          return (c.actionCreators[w] = b), u;
        },
        exposeCaseReducer(w, b) {
          return (c.sliceCaseReducersByName[w] = b), u;
        },
      };
    a.forEach((w) => {
      const b = l[w],
        _ = {
          reducerName: w,
          type: u_(s, w),
          createNotation: typeof i.reducers == "function",
        };
      m_(b) ? y_(_, b, u, t) : p_(_, b, u);
    });
    function d() {
      const [w = {}, b = [], _ = void 0] =
          typeof i.extraReducers == "function"
            ? U0(i.extraReducers)
            : [i.extraReducers],
        S = { ...w, ...c.sliceCaseReducersByType };
      return e_(i.initialState, (j) => {
        for (let k in S) j.addCase(k, S[k]);
        for (let k of c.sliceMatchers) j.addMatcher(k.matcher, k.reducer);
        for (let k of b) j.addMatcher(k.matcher, k.reducer);
        _ && j.addDefaultCase(_);
      });
    }
    const h = (w) => w,
      p = new Map();
    let g;
    function x(w, b) {
      return g || (g = d()), g(w, b);
    }
    function v() {
      return g || (g = d()), g.getInitialState();
    }
    function m(w, b = !1) {
      function _(j) {
        let k = j[w];
        return typeof k > "u" && b && (k = v()), k;
      }
      function S(j = h) {
        const k = kh(p, b, { insert: () => new WeakMap() });
        return kh(k, j, {
          insert: () => {
            const M = {};
            for (const [O, A] of Object.entries(i.selectors ?? {}))
              M[O] = f_(A, j, v, b);
            return M;
          },
        });
      }
      return {
        reducerPath: w,
        getSelectors: S,
        get selectors() {
          return S(_);
        },
        selectSlice: _,
      };
    }
    const y = {
      name: s,
      reducer: x,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: v,
      ...m(o),
      injectInto(w, { reducerPath: b, ..._ } = {}) {
        const S = b ?? o;
        return (
          w.inject({ reducerPath: S, reducer: x }, _), { ...y, ...m(S, !0) }
        );
      },
    };
    return y;
  };
}
function f_(e, t, n, r) {
  function i(s, ...o) {
    let l = t(s);
    return typeof l > "u" && r && (l = n()), e(l, ...o);
  }
  return (i.unwrapped = e), i;
}
var js = d_();
function h_() {
  function e(t, n) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...n };
  }
  return (
    (e.withTypes = () => e),
    {
      reducer(t) {
        return Object.assign(
          {
            [t.name](...n) {
              return t(...n);
            },
          }[t.name],
          { _reducerDefinitionType: "reducer" }
        );
      },
      preparedReducer(t, n) {
        return {
          _reducerDefinitionType: "reducerWithPrepare",
          prepare: t,
          reducer: n,
        };
      },
      asyncThunk: e,
    }
  );
}
function p_({ type: e, reducerName: t, createNotation: n }, r, i) {
  let s, o;
  if ("reducer" in r) {
    if (n && !g_(r)) throw new Error(Ht(17));
    (s = r.reducer), (o = r.prepare);
  } else s = r;
  i.addCase(e, s)
    .exposeCaseReducer(t, s)
    .exposeAction(t, o ? Hi(e, o) : Hi(e));
}
function m_(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function g_(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function y_({ type: e, reducerName: t }, n, r, i) {
  if (!i) throw new Error(Ht(18));
  const {
      payloadCreator: s,
      fulfilled: o,
      pending: l,
      rejected: a,
      settled: c,
      options: u,
    } = n,
    d = i(e, s, u);
  r.exposeAction(t, d),
    o && r.addCase(d.fulfilled, o),
    l && r.addCase(d.pending, l),
    a && r.addCase(d.rejected, a),
    c && r.addMatcher(d.settled, c),
    r.exposeCaseReducer(t, {
      fulfilled: o || Gs,
      pending: l || Gs,
      rejected: a || Gs,
      settled: c || Gs,
    });
}
function Gs() {}
function Ht(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
function H0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: x_ } = Object.prototype,
  { getPrototypeOf: Sd } = Object,
  ql = ((e) => (t) => {
    const n = x_.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Tt = (e) => ((e = e.toLowerCase()), (t) => ql(t) === e),
  Ql = (e) => (t) => typeof t === e,
  { isArray: oi } = Array,
  ps = Ql("undefined");
function v_(e) {
  return (
    e !== null &&
    !ps(e) &&
    e.constructor !== null &&
    !ps(e.constructor) &&
    at(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const W0 = Tt("ArrayBuffer");
function w_(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && W0(e.buffer)),
    t
  );
}
const b_ = Ql("string"),
  at = Ql("function"),
  V0 = Ql("number"),
  Gl = (e) => e !== null && typeof e == "object",
  __ = (e) => e === !0 || e === !1,
  jo = (e) => {
    if (ql(e) !== "object") return !1;
    const t = Sd(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  S_ = Tt("Date"),
  k_ = Tt("File"),
  C_ = Tt("Blob"),
  E_ = Tt("FileList"),
  j_ = (e) => Gl(e) && at(e.pipe),
  N_ = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (at(e.append) &&
          ((t = ql(e)) === "formdata" ||
            (t === "object" &&
              at(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  P_ = Tt("URLSearchParams"),
  [M_, O_, R_, T_] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Tt
  ),
  L_ = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ns(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), oi(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let l;
    for (r = 0; r < o; r++) (l = s[r]), t.call(null, e[l], l, e);
  }
}
function K0(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const rr =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Y0 = (e) => !ps(e) && e !== rr;
function iu() {
  const { caseless: e } = (Y0(this) && this) || {},
    t = {},
    n = (r, i) => {
      const s = (e && K0(t, i)) || i;
      jo(t[s]) && jo(r)
        ? (t[s] = iu(t[s], r))
        : jo(r)
        ? (t[s] = iu({}, r))
        : oi(r)
        ? (t[s] = r.slice())
        : (t[s] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Ns(arguments[r], n);
  return t;
}
const D_ = (e, t, n, { allOwnKeys: r } = {}) => (
    Ns(
      t,
      (i, s) => {
        n && at(i) ? (e[s] = H0(i, n)) : (e[s] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  A_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  z_ = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  F_ = (e, t, n, r) => {
    let i, s, o;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        (o = i[s]), (!r || r(o, e, t)) && !l[o] && ((t[o] = e[o]), (l[o] = !0));
      e = n !== !1 && Sd(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  I_ = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  B_ = (e) => {
    if (!e) return null;
    if (oi(e)) return e;
    let t = e.length;
    if (!V0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  $_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Sd(Uint8Array)),
  U_ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  H_ = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  W_ = Tt("HTMLFormElement"),
  V_ = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Eh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  K_ = Tt("RegExp"),
  X0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Ns(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r);
  },
  Y_ = (e) => {
    X0(e, (t, n) => {
      if (at(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (at(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  X_ = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return oi(e) ? r(e) : r(String(e).split(t)), n;
  },
  q_ = () => {},
  Q_ = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  za = "abcdefghijklmnopqrstuvwxyz",
  jh = "0123456789",
  q0 = { DIGIT: jh, ALPHA: za, ALPHA_DIGIT: za + za.toUpperCase() + jh },
  G_ = (e = 16, t = q0.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function J_(e) {
  return !!(
    e &&
    at(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Z_ = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Gl(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const s = oi(r) ? [] : {};
            return (
              Ns(r, (o, l) => {
                const a = n(o, i + 1);
                !ps(a) && (s[l] = a);
              }),
              (t[i] = void 0),
              s
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  e3 = Tt("AsyncFunction"),
  t3 = (e) => e && (Gl(e) || at(e)) && at(e.then) && at(e.catch),
  Q0 = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          rr.addEventListener(
            "message",
            ({ source: i, data: s }) => {
              i === rr && s === n && r.length && r.shift()();
            },
            !1
          ),
          (i) => {
            r.push(i), rr.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    at(rr.postMessage)
  ),
  n3 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(rr)
      : (typeof process < "u" && process.nextTick) || Q0,
  C = {
    isArray: oi,
    isArrayBuffer: W0,
    isBuffer: v_,
    isFormData: N_,
    isArrayBufferView: w_,
    isString: b_,
    isNumber: V0,
    isBoolean: __,
    isObject: Gl,
    isPlainObject: jo,
    isReadableStream: M_,
    isRequest: O_,
    isResponse: R_,
    isHeaders: T_,
    isUndefined: ps,
    isDate: S_,
    isFile: k_,
    isBlob: C_,
    isRegExp: K_,
    isFunction: at,
    isStream: j_,
    isURLSearchParams: P_,
    isTypedArray: $_,
    isFileList: E_,
    forEach: Ns,
    merge: iu,
    extend: D_,
    trim: L_,
    stripBOM: A_,
    inherits: z_,
    toFlatObject: F_,
    kindOf: ql,
    kindOfTest: Tt,
    endsWith: I_,
    toArray: B_,
    forEachEntry: U_,
    matchAll: H_,
    isHTMLForm: W_,
    hasOwnProperty: Eh,
    hasOwnProp: Eh,
    reduceDescriptors: X0,
    freezeMethods: Y_,
    toObjectSet: X_,
    toCamelCase: V_,
    noop: q_,
    toFiniteNumber: Q_,
    findKey: K0,
    global: rr,
    isContextDefined: Y0,
    ALPHABET: q0,
    generateString: G_,
    isSpecCompliantForm: J_,
    toJSONObject: Z_,
    isAsyncFn: e3,
    isThenable: t3,
    setImmediate: Q0,
    asap: n3,
  };
function F(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && ((this.response = i), (this.status = i.status ? i.status : null));
}
C.inherits(F, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const G0 = F.prototype,
  J0 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  J0[e] = { value: e };
});
Object.defineProperties(F, J0);
Object.defineProperty(G0, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, i, s) => {
  const o = Object.create(G0);
  return (
    C.toFlatObject(
      e,
      o,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    F.call(o, e.message, t, n, r, i),
    (o.cause = e),
    (o.name = e.name),
    s && Object.assign(o, s),
    o
  );
};
const r3 = null;
function su(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Z0(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Nh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return (i = Z0(i)), !n && s ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function i3(e) {
  return C.isArray(e) && !e.some(su);
}
const s3 = C.toFlatObject(C, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Jl(e, t, n) {
  if (!C.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = C.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (x, v) {
        return !C.isUndefined(v[x]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || u,
    s = n.dots,
    o = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(t);
  if (!C.isFunction(i)) throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (C.isDate(g)) return g.toISOString();
    if (!a && C.isBlob(g))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(g) || C.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function u(g, x, v) {
    let m = g;
    if (g && !v && typeof g == "object") {
      if (C.endsWith(x, "{}"))
        (x = r ? x : x.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (C.isArray(g) && i3(g)) ||
        ((C.isFileList(g) || C.endsWith(x, "[]")) && (m = C.toArray(g)))
      )
        return (
          (x = Z0(x)),
          m.forEach(function (w, b) {
            !(C.isUndefined(w) || w === null) &&
              t.append(
                o === !0 ? Nh([x], b, s) : o === null ? x : x + "[]",
                c(w)
              );
          }),
          !1
        );
    }
    return su(g) ? !0 : (t.append(Nh(v, x, s), c(g)), !1);
  }
  const d = [],
    h = Object.assign(s3, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: su,
    });
  function p(g, x) {
    if (!C.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(g),
        C.forEach(g, function (m, y) {
          (!(C.isUndefined(m) || m === null) &&
            i.call(t, m, C.isString(y) ? y.trim() : y, x, h)) === !0 &&
            p(m, x ? x.concat(y) : [y]);
        }),
        d.pop();
    }
  }
  if (!C.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function Ph(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function kd(e, t) {
  (this._pairs = []), e && Jl(e, this, t);
}
const e1 = kd.prototype;
e1.append = function (t, n) {
  this._pairs.push([t, n]);
};
e1.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ph);
      }
    : Ph;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function o3(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function t1(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || o3,
    i = n && n.serialize;
  let s;
  if (
    (i
      ? (s = i(t, n))
      : (s = C.isURLSearchParams(t) ? t.toString() : new kd(t, n).toString(r)),
    s)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + s);
  }
  return e;
}
class Mh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    C.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const n1 = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  l3 = typeof URLSearchParams < "u" ? URLSearchParams : kd,
  a3 = typeof FormData < "u" ? FormData : null,
  c3 = typeof Blob < "u" ? Blob : null,
  u3 = {
    isBrowser: !0,
    classes: { URLSearchParams: l3, FormData: a3, Blob: c3 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Cd = typeof window < "u" && typeof document < "u",
  ou = (typeof navigator == "object" && navigator) || void 0,
  d3 =
    Cd &&
    (!ou || ["ReactNative", "NativeScript", "NS"].indexOf(ou.product) < 0),
  f3 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  h3 = (Cd && window.location.href) || "http://localhost",
  p3 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Cd,
        hasStandardBrowserEnv: d3,
        hasStandardBrowserWebWorkerEnv: f3,
        navigator: ou,
        origin: h3,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  tt = { ...p3, ...u3 };
function m3(e, t) {
  return Jl(
    e,
    new tt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, s) {
          return tt.isNode && C.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : s.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function g3(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function y3(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) (s = n[r]), (t[s] = e[s]);
  return t;
}
function r1(e) {
  function t(n, r, i, s) {
    let o = n[s++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o),
      a = s >= n.length;
    return (
      (o = !o && C.isArray(i) ? i.length : o),
      a
        ? (C.hasOwnProp(i, o) ? (i[o] = [i[o], r]) : (i[o] = r), !l)
        : ((!i[o] || !C.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && C.isArray(i[o]) && (i[o] = y3(i[o])),
          !l)
    );
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const n = {};
    return (
      C.forEachEntry(e, (r, i) => {
        t(g3(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function x3(e, t, n) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const Ps = {
  transitional: n1,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = C.isObject(t);
      if ((s && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t)))
        return i ? JSON.stringify(r1(t)) : t;
      if (
        C.isArrayBuffer(t) ||
        C.isBuffer(t) ||
        C.isStream(t) ||
        C.isFile(t) ||
        C.isBlob(t) ||
        C.isReadableStream(t)
      )
        return t;
      if (C.isArrayBufferView(t)) return t.buffer;
      if (C.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (s) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return m3(t, this.formSerializer).toString();
        if ((l = C.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return Jl(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return s || i ? (n.setContentType("application/json", !1), x3(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ps.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (C.isResponse(t) || C.isReadableStream(t)) return t;
      if (t && C.isString(t) && ((r && !this.responseType) || i)) {
        const o = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (o)
            throw l.name === "SyntaxError"
              ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: tt.classes.FormData, Blob: tt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ps.headers[e] = {};
});
const v3 = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  w3 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && v3[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Oh = Symbol("internals");
function xi(e) {
  return e && String(e).trim().toLowerCase();
}
function No(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(No) : String(e);
}
function b3(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const _3 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Fa(e, t, n, r, i) {
  if (C.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!C.isString(t))) {
    if (C.isString(r)) return t.indexOf(r) !== -1;
    if (C.isRegExp(r)) return r.test(t);
  }
}
function S3(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function k3(e, t) {
  const n = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
class nt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(l, a, c) {
      const u = xi(a);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = C.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || (c === void 0 && i[d] !== !1)) &&
        (i[d || a] = No(l));
    }
    const o = (l, a) => C.forEach(l, (c, u) => s(c, u, a));
    if (C.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (C.isString(t) && (t = t.trim()) && !_3(t)) o(w3(t), n);
    else if (C.isHeaders(t)) for (const [l, a] of t.entries()) s(a, l, r);
    else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = xi(t)), t)) {
      const r = C.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return b3(i);
        if (C.isFunction(n)) return n.call(this, i, r);
        if (C.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = xi(t)), t)) {
      const r = C.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Fa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = xi(o)), o)) {
        const l = C.findKey(r, o);
        l && (!n || Fa(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return C.isArray(t) ? t.forEach(s) : s(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Fa(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      C.forEach(this, (i, s) => {
        const o = C.findKey(r, s);
        if (o) {
          (n[o] = No(i)), delete n[s];
          return;
        }
        const l = t ? S3(s) : String(s).trim();
        l !== s && delete n[s], (n[l] = No(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      C.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && C.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Oh] = this[Oh] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const l = xi(o);
      r[l] || (k3(i, o), (r[l] = !0));
    }
    return C.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
nt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(nt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
C.freezeMethods(nt);
function Ia(e, t) {
  const n = this || Ps,
    r = t || n,
    i = nt.from(r.headers);
  let s = r.data;
  return (
    C.forEach(e, function (l) {
      s = l.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function i1(e) {
  return !!(e && e.__CANCEL__);
}
function li(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
C.inherits(li, F, { __CANCEL__: !0 });
function s1(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new F(
          "Request failed with status code " + n.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function C3(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function E3(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const c = Date.now(),
        u = r[s];
      o || (o = c), (n[i] = a), (r[i] = c);
      let d = s,
        h = 0;
      for (; d !== i; ) (h += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
      const p = u && c - u;
      return p ? Math.round((h * 1e3) / p) : void 0;
    }
  );
}
function j3(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    s;
  const o = (c, u = Date.now()) => {
    (n = u), (i = null), s && (clearTimeout(s), (s = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(c, u)
        : ((i = c),
          s ||
            (s = setTimeout(() => {
              (s = null), o(i);
            }, r - d)));
    },
    () => i && o(i),
  ];
}
const pl = (e, t, n = 3) => {
    let r = 0;
    const i = E3(50, 250);
    return j3((s) => {
      const o = s.loaded,
        l = s.lengthComputable ? s.total : void 0,
        a = o - r,
        c = i(a),
        u = o <= l;
      r = o;
      const d = {
        loaded: o,
        total: l,
        progress: l ? o / l : void 0,
        bytes: a,
        rate: c || void 0,
        estimated: c && l && u ? (l - o) / c : void 0,
        event: s,
        lengthComputable: l != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  Rh = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Th =
    (e) =>
    (...t) =>
      C.asap(() => e(...t)),
  N3 = tt.hasStandardBrowserEnv
    ? (function () {
        const t =
            tt.navigator && /(msie|trident)/i.test(tt.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(s) {
          let o = s;
          return (
            t && (n.setAttribute("href", o), (o = n.href)),
            n.setAttribute("href", o),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (o) {
            const l = C.isString(o) ? i(o) : o;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  P3 = tt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s) {
          const o = [e + "=" + encodeURIComponent(t)];
          C.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            C.isString(r) && o.push("path=" + r),
            C.isString(i) && o.push("domain=" + i),
            s === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function M3(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function O3(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function o1(e, t) {
  return e && !M3(t) ? O3(e, t) : t;
}
const Lh = (e) => (e instanceof nt ? { ...e } : e);
function gr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return C.isPlainObject(c) && C.isPlainObject(u)
      ? C.merge.call({ caseless: d }, c, u)
      : C.isPlainObject(u)
      ? C.merge({}, u)
      : C.isArray(u)
      ? u.slice()
      : u;
  }
  function i(c, u, d) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(c)) return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function s(c, u) {
    if (!C.isUndefined(u)) return r(void 0, u);
  }
  function o(c, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const a = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (c, u) => i(Lh(c), Lh(u), !0),
  };
  return (
    C.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = a[u] || i,
        h = d(e[u], t[u], u);
      (C.isUndefined(h) && d !== l) || (n[u] = h);
    }),
    n
  );
}
const l1 = (e) => {
    const t = gr({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: s,
      headers: o,
      auth: l,
    } = t;
    (t.headers = o = nt.from(o)),
      (t.url = t1(o1(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let a;
    if (C.isFormData(n)) {
      if (tt.hasStandardBrowserEnv || tt.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((a = o.getContentType()) !== !1) {
        const [c, ...u] = a
          ? a
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      tt.hasStandardBrowserEnv &&
      (r && C.isFunction(r) && (r = r(t)), r || (r !== !1 && N3(t.url)))
    ) {
      const c = i && s && P3.read(s);
      c && o.set(i, c);
    }
    return t;
  },
  R3 = typeof XMLHttpRequest < "u",
  T3 =
    R3 &&
    function (e) {
      return new Promise(function (n, r) {
        const i = l1(e);
        let s = i.data;
        const o = nt.from(i.headers).normalize();
        let { responseType: l, onUploadProgress: a, onDownloadProgress: c } = i,
          u,
          d,
          h,
          p,
          g;
        function x() {
          p && p(),
            g && g(),
            i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener("abort", u);
        }
        let v = new XMLHttpRequest();
        v.open(i.method.toUpperCase(), i.url, !0), (v.timeout = i.timeout);
        function m() {
          if (!v) return;
          const w = nt.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders()
            ),
            _ = {
              data:
                !l || l === "text" || l === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: w,
              config: e,
              request: v,
            };
          s1(
            function (j) {
              n(j), x();
            },
            function (j) {
              r(j), x();
            },
            _
          ),
            (v = null);
        }
        "onloadend" in v
          ? (v.onloadend = m)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(m);
            }),
          (v.onabort = function () {
            v &&
              (r(new F("Request aborted", F.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            r(new F("Network Error", F.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let b = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = i.transitional || n1;
            i.timeoutErrorMessage && (b = i.timeoutErrorMessage),
              r(
                new F(
                  b,
                  _.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  e,
                  v
                )
              ),
              (v = null);
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in v &&
            C.forEach(o.toJSON(), function (b, _) {
              v.setRequestHeader(_, b);
            }),
          C.isUndefined(i.withCredentials) ||
            (v.withCredentials = !!i.withCredentials),
          l && l !== "json" && (v.responseType = i.responseType),
          c && (([h, g] = pl(c, !0)), v.addEventListener("progress", h)),
          a &&
            v.upload &&
            (([d, p] = pl(a)),
            v.upload.addEventListener("progress", d),
            v.upload.addEventListener("loadend", p)),
          (i.cancelToken || i.signal) &&
            ((u = (w) => {
              v &&
                (r(!w || w.type ? new li(null, e, v) : w),
                v.abort(),
                (v = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener("abort", u)));
        const y = C3(i.url);
        if (y && tt.protocols.indexOf(y) === -1) {
          r(new F("Unsupported protocol " + y + ":", F.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(s || null);
      });
    },
  L3 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        i;
      const s = function (c) {
        if (!i) {
          (i = !0), l();
          const u = c instanceof Error ? c : this.reason;
          r.abort(
            u instanceof F ? u : new li(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), s(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT));
        }, t);
      const l = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(s)
              : c.removeEventListener("abort", s);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", s));
      const { signal: a } = r;
      return (a.unsubscribe = () => C.asap(l)), a;
    }
  },
  D3 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  A3 = async function* (e, t) {
    for await (const n of z3(e)) yield* D3(n, t);
  },
  z3 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Dh = (e, t, n, r) => {
    const i = A3(e, t);
    let s = 0,
      o,
      l = (a) => {
        o || ((o = !0), r && r(a));
      };
    return new ReadableStream(
      {
        async pull(a) {
          try {
            const { done: c, value: u } = await i.next();
            if (c) {
              l(), a.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let h = (s += d);
              n(h);
            }
            a.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (l(c), c);
          }
        },
        cancel(a) {
          return l(a), i.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Zl =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  a1 = Zl && typeof ReadableStream == "function",
  F3 =
    Zl &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  c1 = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  I3 =
    a1 &&
    c1(() => {
      let e = !1;
      const t = new Request(tt.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  Ah = 64 * 1024,
  lu = a1 && c1(() => C.isReadableStream(new Response("").body)),
  ml = { stream: lu && ((e) => e.body) };
Zl &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !ml[t] &&
        (ml[t] = C.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new F(
                `Response type '${t}' is not supported`,
                F.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const B3 = async (e) => {
    if (e == null) return 0;
    if (C.isBlob(e)) return e.size;
    if (C.isSpecCompliantForm(e))
      return (
        await new Request(tt.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (C.isArrayBufferView(e) || C.isArrayBuffer(e)) return e.byteLength;
    if ((C.isURLSearchParams(e) && (e = e + ""), C.isString(e)))
      return (await F3(e)).byteLength;
  },
  $3 = async (e, t) => {
    const n = C.toFiniteNumber(e.getContentLength());
    return n ?? B3(t);
  },
  U3 =
    Zl &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: s,
        timeout: o,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: h,
      } = l1(e);
      c = c ? (c + "").toLowerCase() : "text";
      let p = L3([i, s && s.toAbortSignal()], o),
        g;
      const x =
        p &&
        p.unsubscribe &&
        (() => {
          p.unsubscribe();
        });
      let v;
      try {
        if (
          a &&
          I3 &&
          n !== "get" &&
          n !== "head" &&
          (v = await $3(u, r)) !== 0
        ) {
          let _ = new Request(t, { method: "POST", body: r, duplex: "half" }),
            S;
          if (
            (C.isFormData(r) &&
              (S = _.headers.get("content-type")) &&
              u.setContentType(S),
            _.body)
          ) {
            const [j, k] = Rh(v, pl(Th(a)));
            r = Dh(_.body, Ah, j, k);
          }
        }
        C.isString(d) || (d = d ? "include" : "omit");
        const m = "credentials" in Request.prototype;
        g = new Request(t, {
          ...h,
          signal: p,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: m ? d : void 0,
        });
        let y = await fetch(g);
        const w = lu && (c === "stream" || c === "response");
        if (lu && (l || (w && x))) {
          const _ = {};
          ["status", "statusText", "headers"].forEach((M) => {
            _[M] = y[M];
          });
          const S = C.toFiniteNumber(y.headers.get("content-length")),
            [j, k] = (l && Rh(S, pl(Th(l), !0))) || [];
          y = new Response(
            Dh(y.body, Ah, j, () => {
              k && k(), x && x();
            }),
            _
          );
        }
        c = c || "text";
        let b = await ml[C.findKey(ml, c) || "text"](y, e);
        return (
          !w && x && x(),
          await new Promise((_, S) => {
            s1(_, S, {
              data: b,
              headers: nt.from(y.headers),
              status: y.status,
              statusText: y.statusText,
              config: e,
              request: g,
            });
          })
        );
      } catch (m) {
        throw (
          (x && x(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new F("Network Error", F.ERR_NETWORK, e, g), {
                cause: m.cause || m,
              })
            : F.from(m, m && m.code, e, g))
        );
      }
    }),
  au = { http: r3, xhr: T3, fetch: U3 };
C.forEach(au, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zh = (e) => `- ${e}`,
  H3 = (e) => C.isFunction(e) || e === null || e === !1,
  u1 = {
    getAdapter: (e) => {
      e = C.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let s = 0; s < t; s++) {
        n = e[s];
        let o;
        if (
          ((r = n),
          !H3(n) && ((r = au[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new F(`Unknown adapter '${o}'`);
        if (r) break;
        i[o || "#" + s] = r;
      }
      if (!r) {
        const s = Object.entries(i).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? s.length > 1
            ? `since :
` +
              s.map(zh).join(`
`)
            : " " + zh(s[0])
          : "as no adapter specified";
        throw new F(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: au,
  };
function Ba(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new li(null, e);
}
function Fh(e) {
  return (
    Ba(e),
    (e.headers = nt.from(e.headers)),
    (e.data = Ia.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    u1
      .getAdapter(e.adapter || Ps.adapter)(e)
      .then(
        function (r) {
          return (
            Ba(e),
            (r.data = Ia.call(e, e.transformResponse, r)),
            (r.headers = nt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            i1(r) ||
              (Ba(e),
              r &&
                r.response &&
                ((r.response.data = Ia.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = nt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const d1 = "1.7.7",
  Ed = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Ed[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ih = {};
Ed.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      d1 +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, l) => {
    if (t === !1)
      throw new F(
        i(o, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return (
      n &&
        !Ih[o] &&
        ((Ih[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(s, o, l) : !0
    );
  };
};
function W3(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = t[s];
    if (o) {
      const l = e[s],
        a = l === void 0 || o(l, s, e);
      if (a !== !0)
        throw new F("option " + s + " must be " + a, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new F("Unknown option " + s, F.ERR_BAD_OPTION);
  }
}
const cu = { assertOptions: W3, validators: Ed },
  pn = cu.validators;
class lr {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Mh(), response: new Mh() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const s = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? s &&
              !String(r.stack).endsWith(s.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + s)
            : (r.stack = s);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = gr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    r !== void 0 &&
      cu.assertOptions(
        r,
        {
          silentJSONParsing: pn.transitional(pn.boolean),
          forcedJSONParsing: pn.transitional(pn.boolean),
          clarifyTimeoutError: pn.transitional(pn.boolean),
        },
        !1
      ),
      i != null &&
        (C.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : cu.assertOptions(
              i,
              { encode: pn.function, serialize: pn.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = s && C.merge(s.common, s[n.method]);
    s &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete s[g];
        }
      ),
      (n.headers = nt.concat(o, s));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (x) {
      (typeof x.runWhen == "function" && x.runWhen(n) === !1) ||
        ((a = a && x.synchronous), l.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (x) {
      c.push(x.fulfilled, x.rejected);
    });
    let u,
      d = 0,
      h;
    if (!a) {
      const g = [Fh.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, c),
          h = g.length,
          u = Promise.resolve(n);
        d < h;

      )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    h = l.length;
    let p = n;
    for (d = 0; d < h; ) {
      const g = l[d++],
        x = l[d++];
      try {
        p = g(p);
      } catch (v) {
        x.call(this, v);
        break;
      }
    }
    try {
      u = Fh.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, h = c.length; d < h; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = gr(this.defaults, t);
    const n = o1(t.baseURL, t.url);
    return t1(n, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function (t) {
  lr.prototype[t] = function (n, r) {
    return this.request(
      gr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
C.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (s, o, l) {
      return this.request(
        gr(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        })
      );
    };
  }
  (lr.prototype[t] = n()), (lr.prototype[t + "Form"] = n(!0));
});
class jd {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((l) => {
          r.subscribe(l), (s = l);
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, l) {
        r.reason || ((r.reason = new li(s, o, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new jd(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function V3(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function K3(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const uu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(uu).forEach(([e, t]) => {
  uu[t] = e;
});
function f1(e) {
  const t = new lr(e),
    n = H0(lr.prototype.request, t);
  return (
    C.extend(n, lr.prototype, t, { allOwnKeys: !0 }),
    C.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return f1(gr(e, i));
    }),
    n
  );
}
const xe = f1(Ps);
xe.Axios = lr;
xe.CanceledError = li;
xe.CancelToken = jd;
xe.isCancel = i1;
xe.VERSION = d1;
xe.toFormData = Jl;
xe.AxiosError = F;
xe.Cancel = xe.CanceledError;
xe.all = function (t) {
  return Promise.all(t);
};
xe.spread = V3;
xe.isAxiosError = K3;
xe.mergeConfig = gr;
xe.AxiosHeaders = nt;
xe.formToJSON = (e) => r1(C.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = u1.getAdapter;
xe.HttpStatusCode = uu;
xe.default = xe;
const Y3 = "/api/v1",
  ie = xe.create();
ie.defaults.baseURL = Y3;
ie.defaults.withCredentials = !0;
const X3 = {
    isLoggedIn:
      localStorage.getItem("isLoggedIn") !== "undefined"
        ? JSON.parse(localStorage.getItem("isLoggedIn"))
        : !1,
    role:
      localStorage.getItem("role") !== "undefined"
        ? localStorage.getItem("role")
        : "",
    data:
      localStorage.getItem("data") !== "undefined"
        ? JSON.parse(localStorage.getItem("data"))
        : {},
  },
  h1 = pe("/auth/signup", async (e) => {
    var t, n;
    try {
      const r = ie.post("/user/register", e);
      return (
        L.promise(r, {
          loading: "Wait! creating your account",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to create account",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  p1 = pe("/auth/login", async (e) => {
    var t, n;
    try {
      const r = ie.post("/user/login", e);
      return (
        L.promise(r, {
          loading: "Wait! authentication in progress...",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to log in",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  m1 = pe("/auth/logout", async () => {
    var e, t;
    try {
      const n = ie.post("/user/logout");
      return (
        L.promise(n, {
          loading: "Wait! logout in progress...",
          success: (r) => {
            var i;
            return (i = r == null ? void 0 : r.data) == null
              ? void 0
              : i.message;
          },
          error: "Failed to logout",
        }),
        (await n).data
      );
    } catch (n) {
      L.error(
        (t = (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
          null
          ? void 0
          : t.message
      );
    }
  }),
  q3 = pe("/user/update/profile", async (e) => {
    var t, n;
    try {
      const r = ie.put(`/user/update/${e[0]}`, e[1]);
      return (
        L.promise(r, {
          loading: "Wait! updating your profile",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to update profile.",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  Q3 = pe("/changePassword", async (e) => {
    var t, n;
    try {
      const r = ie.post("/user/change-password", e);
      return (
        L.promise(r, {
          loading: "Wait! updating your password",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to change password",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  G3 = pe("/forgotPassword", async (e) => {
    var t, n;
    try {
      const r = ie.post("/user/reset", e);
      return (
        L.promise(r, {
          loading: "Wait! sending forgot-password mail...",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to send mail, try again",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  J3 = pe("/resetPassword", async (e) => {
    var t, n;
    try {
      const r = ie.post(`/user/reset/${e[0]}`, e[1]);
      return (
        L.promise(r, {
          loading: "Wait! sending updating password...",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to update password",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  ea = pe("/user/details", async () => {
    try {
      return (await ie("/user/me")).data;
    } catch (e) {
      L.error(e.message);
    }
  }),
  Z3 = js({
    name: "auth",
    initialState: X3,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(h1.fulfilled, (t, n) => {
        var r, i, s, o, l, a, c;
        (r = n == null ? void 0 : n.payload) != null &&
          r.success &&
          (console.log(n),
          localStorage.setItem("isLoggedIn", !0),
          localStorage.setItem(
            "role",
            (s =
              (i = n == null ? void 0 : n.payload) == null ? void 0 : i.user) ==
              null
              ? void 0
              : s.role
          ),
          localStorage.setItem(
            "data",
            JSON.stringify(
              (o = n == null ? void 0 : n.payload) == null ? void 0 : o.user
            )
          ),
          (t.isLoggedIn = !0),
          (t.role =
            (a =
              (l = n == null ? void 0 : n.payload) == null ? void 0 : l.user) ==
            null
              ? void 0
              : a.role),
          (t.data =
            (c = n == null ? void 0 : n.payload) == null ? void 0 : c.user));
      })
        .addCase(p1.fulfilled, (t, n) => {
          var r, i, s, o, l, a, c;
          (r = n == null ? void 0 : n.payload) != null &&
            r.success &&
            (localStorage.setItem("isLoggedIn", !0),
            localStorage.setItem(
              "role",
              (s =
                (i = n == null ? void 0 : n.payload) == null
                  ? void 0
                  : i.user) == null
                ? void 0
                : s.role
            ),
            localStorage.setItem(
              "data",
              JSON.stringify(
                (o = n == null ? void 0 : n.payload) == null ? void 0 : o.user
              )
            ),
            (t.isLoggedIn = !0),
            (t.role =
              (a =
                (l = n == null ? void 0 : n.payload) == null
                  ? void 0
                  : l.user) == null
                ? void 0
                : a.role),
            (t.data =
              (c = n == null ? void 0 : n.payload) == null ? void 0 : c.user));
        })
        .addCase(m1.fulfilled, (t, n) => {
          var r;
          (r = n == null ? void 0 : n.payload) != null &&
            r.success &&
            (localStorage.clear(),
            (t.isLoggedIn = !1),
            (t.role = ""),
            (t.data = {}));
        })
        .addCase(ea.fulfilled, (t, n) => {
          var r, i, s, o, l, a, c;
          (r = n == null ? void 0 : n.payload) != null &&
            r.user &&
            (localStorage.setItem("isLoggedIn", !0),
            localStorage.setItem(
              "role",
              (s =
                (i = n == null ? void 0 : n.payload) == null
                  ? void 0
                  : i.user) == null
                ? void 0
                : s.role
            ),
            localStorage.setItem(
              "data",
              JSON.stringify(
                (o = n == null ? void 0 : n.payload) == null ? void 0 : o.user
              )
            ),
            (t.isLoggedIn = !0),
            (t.role =
              (a =
                (l = n == null ? void 0 : n.payload) == null
                  ? void 0
                  : l.user) == null
                ? void 0
                : a.role),
            (t.data =
              (c = n == null ? void 0 : n.payload) == null ? void 0 : c.user));
        });
    },
  }),
  eS = Z3.reducer;
function we({ children: e }) {
  const t = Ke(),
    n = ue(),
    r = lt((a) => {
      var c;
      return (c = a == null ? void 0 : a.auth) == null ? void 0 : c.isLoggedIn;
    }),
    i = lt((a) => {
      var c;
      return (c = a == null ? void 0 : a.auth) == null ? void 0 : c.role;
    });
  async function s(a) {
    var u;
    a.preventDefault();
    const c = await t(m1());
    (u = c == null ? void 0 : c.payload) != null &&
      u.success &&
      (localStorage.removeItem("isLoggedIn"), n("/"));
  }
  const o = E.useRef(null),
    l = () => {
      o.current.checked = !1;
    };
  return f.jsxs("div", {
    className: "min-h-[90vh]",
    children: [
      f.jsxs("div", {
        className: "drawer",
        children: [
          f.jsx("input", {
            id: "my-drawer",
            type: "checkbox",
            className: "drawer-toggle",
            ref: o,
          }),
          f.jsx("div", {
            className: "drawer-content",
            children: f.jsx("label", {
              htmlFor: "my-drawer",
              className: "text-3xl cursor-pointer",
              children: f.jsx(xb, { className: "m-4" }),
            }),
          }),
          f.jsxs("div", {
            className: "drawer-side z-50",
            children: [
              f.jsx("label", {
                htmlFor: "my-drawer",
                "aria-label": "close sidebar",
                className: "drawer-overlay",
              }),
              f.jsxs("ul", {
                className:
                  "menu bg-base-200 text-base-content min-h-full w-80 p-4",
                children: [
                  f.jsxs("li", {
                    className: "flex flex-row",
                    children: [
                      f.jsx(De, {
                        to: "/",
                        className:
                          "flex flex-auto font-bold text-blue-600 text-2xl",
                        children: "LMS",
                      }),
                      f.jsx("button", {
                        onClick: l,
                        className: "flex text-xl",
                        children: f.jsx(yb, {}),
                      }),
                    ],
                  }),
                  f.jsx("li", {
                    children: f.jsx(De, { to: "/", children: "Home" }),
                  }),
                  r &&
                    i === "ADMIN" &&
                    f.jsxs(f.Fragment, {
                      children: [
                        f.jsx("li", {
                          children: f.jsx(De, {
                            to: "/admin/dashboard",
                            children: "Admin Dashboard",
                          }),
                        }),
                        f.jsx("li", {
                          children: f.jsx(De, {
                            to: "/course/create",
                            children: "Create Course",
                          }),
                        }),
                      ],
                    }),
                  f.jsx("li", {
                    children: f.jsx(De, {
                      to: "/courses",
                      children: "All Courses",
                    }),
                  }),
                  f.jsx("li", {
                    children: f.jsx(De, {
                      to: "/contact",
                      children: "Contact Us",
                    }),
                  }),
                  f.jsx("li", {
                    children: f.jsx(De, { to: "/about", children: "About Us" }),
                  }),
                  !r &&
                    f.jsxs("li", {
                      className:
                        "absolute bottom-4 w-[90%] flex flex-row justify-center items-center space-x-2",
                      children: [
                        f.jsx("button", {
                          className:
                            "bg-blue-500 font-semibold flex flex-auto justify-center items-center w-max",
                          children: f.jsx(De, {
                            to: "/login",
                            className: "w-full text-center",
                            children: "LogIn",
                          }),
                        }),
                        f.jsx("button", {
                          className:
                            "bg-green-600 font-semibold flex flex-auto justify-center items-center",
                          children: f.jsx(De, {
                            to: "/signup",
                            className: "w-full text-center",
                            children: "SignUp",
                          }),
                        }),
                      ],
                    }),
                  r &&
                    f.jsxs("li", {
                      className:
                        "absolute bottom-4 w-[90%] flex flex-row justify-center items-center space-x-2",
                      children: [
                        f.jsx("button", {
                          className:
                            "bg-yellow-600 font-semibold flex flex-auto justify-center items-center",
                          children: f.jsx(De, {
                            to: "/user/profile",
                            children: "Profile",
                          }),
                        }),
                        f.jsx("button", {
                          className:
                            "bg-red-600 font-semibold flex flex-auto justify-center items-center",
                          children: f.jsx(De, {
                            onClick: s,
                            children: "Logout",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
      e,
      f.jsx(Cb, {}),
    ],
  });
}
function tS() {
  return f.jsx(we, {
    children: f.jsxs("div", {
      className:
        "flex flex-col justify-center items-center space-y-20 text-white py-20",
      children: [
        f.jsxs("div", {
          className: "flex justify-center items-center gap-10 mx-10",
          children: [
            f.jsxs("section", {
              className: "w-1/2 space-y-6",
              children: [
                f.jsx("h1", {
                  className: "text-5xl font-bold text-yellow-500",
                  children: "Affordable and quality education",
                }),
                f.jsx("p", {
                  className: "text-gray-200 text-xl",
                  children:
                    "Our goal is to provide the afoordable and quality education to the world. We are providing the platform for the aspiring teachers and students to share their skills, creativity and knowledge to each other to empower and contribute in the growth and wellness of mankind.",
                }),
              ],
            }),
            f.jsx("div", {
              className: "w-1/2 flex justify-center items-center",
              children: f.jsx("img", {
                src: ib,
                alt: "About Us Image",
                className: "w-[80%] rounded-3xl",
              }),
            }),
          ],
        }),
        f.jsx("div", {
          className: "carousel w-2/3",
          children:
            Ra &&
            Ra.map((e) =>
              E.createElement(sb, {
                ...e,
                key: e.slideNumber,
                totalSlides: Ra.length,
              })
            ),
        }),
      ],
    }),
  });
}
const g1 = (e) =>
    e.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ),
  nS = (e) => e.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);
function rS() {
  const [e, t] = E.useState({ name: "", email: "", message: "" });
  function n(i) {
    const { name: s, value: o } = i.target;
    t({ ...e, [s]: o });
  }
  async function r(i) {
    var s, o, l;
    if ((i.preventDefault(), !e.email || !e.name || !e.message)) {
      Pe.error("All fields are mandatory");
      return;
    }
    if (!g1(e.email)) {
      Pe.error("Invalid email");
      return;
    }
    try {
      const a = ie.post("/contact", e);
      Pe.promise(a, {
        loading: "Submitting your message...",
        success: (u) => {
          var d;
          return (d = u == null ? void 0 : u.data) == null ? void 0 : d.message;
        },
        error: "Failed to submit the form",
      });
      const c = await a;
      (s = c == null ? void 0 : c.data) != null &&
        s.success &&
        t({ name: "", email: "", message: "" });
    } catch (a) {
      Pe.error(
        (l = (o = a == null ? void 0 : a.response) == null ? void 0 : o.data) ==
          null
          ? void 0
          : l.message
      );
    }
  }
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex items-center justify-center h-[100vh]",
      children: f.jsxs("form", {
        noValidate: !0,
        onSubmit: r,
        className:
          "flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-semibold",
            children: "Contact Form",
          }),
          f.jsxs("div", {
            className: "flex flex-col w-full gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "name",
                className: "text-xl font-semibold",
                children: "Name",
              }),
              f.jsx("input", {
                className: "bg-transparent border px-2 py-1 rounded-sm",
                id: "name",
                type: "text",
                name: "name",
                placeholder: "Enter your name",
                onChange: n,
                value: e.name,
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col w-full gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "email",
                className: "text-xl font-semibold",
                children: "Email",
              }),
              f.jsx("input", {
                className: "bg-transparent border px-2 py-1 rounded-sm",
                id: "email",
                type: "email",
                name: "email",
                placeholder: "Enter your email",
                onChange: n,
                value: e.email,
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col w-full gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "message",
                className: "text-xl font-semibold",
                children: "Message",
              }),
              f.jsx("textarea", {
                className:
                  "bg-transparent border px-2 py-1 rounded-sm resize-none h-40",
                id: "message",
                name: "message",
                placeholder: "Enter your email",
                onChange: n,
                value: e.message,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer",
            children: "Submit",
          }),
        ],
      }),
    }),
  });
}
function iS() {
  var c;
  const e = ue(),
    { state: t } = fn(),
    {
      title: n,
      description: r,
      numberOfLectures: i,
      createdBy: s,
      thumbnail: o,
    } = t,
    { role: l, data: a } = lt((u) => u.auth);
  return f.jsx(we, {
    children: f.jsx("div", {
      className:
        "h-screen flex justify-center items-center text-white pt-5 px-20",
      children: f.jsxs("div", {
        className: "grid grid-cols-2 gap-10 py-10",
        children: [
          f.jsxs("div", {
            className: "space-y-5",
            children: [
              f.jsx("div", {
                className: "w-full h-64 overflow-hidden border border-white",
                children: f.jsx("img", {
                  src: o.secure_url,
                  alt: "thumbnail",
                  className: "w-full h-full object-cover object-center",
                }),
              }),
              f.jsxs("div", {
                className: "space-y-4",
                children: [
                  f.jsxs("div", {
                    className: "text-xl text-center",
                    children: [
                      f.jsxs("p", {
                        className: "font-semibold",
                        children: [
                          f.jsxs("span", {
                            className: "text-yellow-500 font-bold",
                            children: ["Total lectures :", " "],
                          }),
                          i,
                        ],
                      }),
                      f.jsxs("p", {
                        className: "font-semibold",
                        children: [
                          f.jsxs("span", {
                            className: "text-yellow-500 font-bold",
                            children: ["Instructor :", " "],
                          }),
                          " ",
                          s,
                        ],
                      }),
                    ],
                  }),
                  l === "ADMIN" ||
                  ((c = a == null ? void 0 : a.subscription) == null
                    ? void 0
                    : c.status) === "active"
                    ? f.jsx("button", {
                        onClick: () =>
                          e("/course/displaylectures", { state: { ...t } }),
                        className:
                          "bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 font-bold rounded-md p-3 text-xl w-full",
                        children: "Watch Lectures",
                      })
                    : f.jsx("button", {
                        onClick: () => e("/payment/checkout"),
                        className:
                          "bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 font-bold rounded-md p-3 text-xl w-full",
                        children: "Subscribe",
                      }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "space-y-2 text-xl",
            children: [
              f.jsx("h3", {
                className:
                  "text-3xl font-bold text-yellow-500 mb-5 text-center",
                children: n,
              }),
              f.jsx("p", {
                className: "text-yellow-500",
                children: "Course description: ",
              }),
              f.jsx("p", { children: r }),
            ],
          }),
        ],
      }),
    }),
  });
}
function sS({ data: e }) {
  const t = ue(),
    {
      thumbnail: n,
      title: r,
      numberOfLectures: i,
      description: s,
      category: o,
      createdBy: l,
    } = e;
  return f.jsx("div", {
    onClick: () => t("/course/description", { state: { ...e } }),
    className:
      "cursor-pointer text-white w-[22rem] h-[430px] overflow-hidden shadow-lg rounded-lg group bg-zinc-700",
    children: f.jsxs("div", {
      className: "overflow-hidden",
      children: [
        f.jsx("img", {
          src: n == null ? void 0 : n.secure_url,
          alt: "course thumbnail",
          className:
            "h-48 w-full rounded-tl-lg rounded-tr-lg group-hover:scale=[1,2] transition-all ease-in-out diration-300",
        }),
        f.jsxs("div", {
          className: "p-3 space-y-1 text-white",
          children: [
            f.jsx("h2", {
              className: "text-xl font-bold text-yellow-500 line-clamp-2",
              children: r,
            }),
            f.jsx("p", { className: "line-clamp-2", children: s }),
            f.jsxs("p", {
              className: "font-semibold",
              children: [
                f.jsx("span", {
                  className: "text-yellow-500 font-bold",
                  children: "Total Lectures : ",
                }),
                i,
              ],
            }),
            f.jsxs("p", {
              className: "font-semibold",
              children: [
                f.jsx("span", {
                  className: "text-yellow-500 font-bold",
                  children: "Category : ",
                }),
                o,
              ],
            }),
            f.jsxs("p", {
              className: "font-semibold",
              children: [
                f.jsx("span", {
                  className: "text-yellow-500 font-bold",
                  children: "Created By : ",
                }),
                l,
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const oS = { courseData: [] },
  gl = pe("/courses/get", async () => {
    var e, t;
    try {
      const n = ie.get("/courses");
      return (
        L.promise(n, {
          loading: "Wait! course is loading",
          success: (r) => {
            var i;
            return (i = r == null ? void 0 : r.data) == null
              ? void 0
              : i.message;
          },
          error: "Failed to get course",
        }),
        (await n).data.courses
      );
    } catch (n) {
      L.error(
        (t = (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
          null
          ? void 0
          : t.message
      );
    }
  }),
  lS = pe("/course/create", async (e) => {
    var t, n;
    try {
      const r = ie.post("/courses", e);
      return (
        L.promise(r, {
          loading: "Wait! creating the course",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to create course",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  aS = pe("/course/update", async (e) => {
    var t, n;
    try {
      const r = ie.put(`/courses/${e[0]}`, e[1]);
      return (
        L.promise(r, {
          loading: "Wait! updating the course",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to update course",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  cS = pe("/course/delete", async (e) => {
    var t, n;
    try {
      const r = ie.delete(`/courses/${e}`);
      return (
        L.promise(r, {
          loading: "Wait! deleting course in progress...",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to delete course",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  uS = js({
    name: "courses",
    initialState: oS,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(gl.fulfilled, (t, n) => {
        n.payload && (t.courseData = [...n.payload]);
      });
    },
  }),
  dS = uS.reducer;
function fS() {
  const e = Ke(),
    { courseData: t } = lt((r) => r.course),
    n = async () => {
      await e(gl());
    };
  return (
    E.useEffect(() => {
      n();
    }, []),
    f.jsx(we, {
      children: f.jsxs("div", {
        className: "flex flex-col gap-10 text-white",
        children: [
          f.jsxs("h1", {
            className: "text-center text-3xl font-semibold mb-5",
            children: [
              "Explore the courses made by",
              f.jsx("span", {
                className: "font-bold text-yellow-500",
                children: "Industry experts",
              }),
            ],
          }),
          f.jsx("div", {
            className: "flex flex-wrap justify-center gap-14 mb-10",
            children: t && t.map((r) => f.jsx(sS, { data: r }, r._id)),
          }),
        ],
      }),
    })
  );
}
function ta(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
        },
        child: [],
      },
    ],
  })(e);
}
function hS(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function y1(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z",
        },
        child: [],
      },
    ],
  })(e);
}
function pS() {
  const e = Ke(),
    [t, n] = E.useState(""),
    [r, i] = E.useState({
      title: "",
      description: "",
      category: "",
      createdBy: "",
      thumbnail: "",
    }),
    s = (a) => {
      a.preventDefault();
      const c = a.target.files[0];
      if (c) {
        i({ ...r, thumbnail: c });
        const u = new FileReader();
        u.readAsDataURL(c),
          u.addEventListener("load", function () {
            n(this.result);
          });
      }
    },
    o = (a) => {
      const { name: c, value: u } = a.target;
      i({ ...r, [c]: u });
    },
    l = async (a) => {
      var d;
      if (
        (a.preventDefault(),
        !r.title ||
          !r.description ||
          !r.category ||
          !r.createdBy ||
          !r.thumbnail)
      )
        return L.error("All feilds are required");
      const c = new FormData();
      c.append("title", r.title),
        c.append("description", r.description),
        c.append("category", r.category),
        c.append("createdBy", r.createdBy),
        c.append("thumbnail", r.thumbnail),
        console.log(r);
      const u = await e(lS(c));
      console.log(u),
        (d = u == null ? void 0 : u.payload) != null &&
          d.success &&
          (i({
            title: "",
            description: "",
            category: "",
            createdBy: "",
            thumbnail: "",
          }),
          n(""));
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("form", {
        onSubmit: l,
        className: "px-14 py-5 rounded-lg text-white shadow-[0_0_10px_black]",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-bold text-center mb-4",
            children: "Create Course",
          }),
          f.jsxs("div", {
            className: "grid grid-cols-2 gap-12",
            children: [
              f.jsxs("div", {
                children: [
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 py-1",
                    children: [
                      f.jsx("label", {
                        htmlFor: "title",
                        className: "font-semibold text-xl",
                        children: "Title:",
                      }),
                      f.jsx("input", {
                        type: "text",
                        name: "title",
                        id: "title",
                        placeholder: "Enter the course title",
                        value: r.title,
                        onChange: o,
                        className: "bg-transparent p-2 border",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 py-1",
                    children: [
                      f.jsx("label", {
                        htmlFor: "thumbnail",
                        className: "cursor-pointer w-96",
                        children: t
                          ? f.jsx("div", {
                              className:
                                "w-full h-80 overflow-hidden border mt-2",
                              children: f.jsx("img", {
                                src: t,
                                alt: "thumnail image",
                                className: "max-w-full max-h-full",
                              }),
                            })
                          : f.jsxs("div", {
                              className: "font-semibold text-xl",
                              children: [
                                "Thumbnail:",
                                f.jsx(y1, {
                                  className:
                                    "w-full h-72 overflow-hidden border mt-1",
                                }),
                              ],
                            }),
                      }),
                      f.jsx("input", {
                        type: "file",
                        name: "thumbnail",
                        id: "thumbnail",
                        className: "hidden",
                        accept: ".jpg,jpeg,.png,.svg",
                        onChange: s,
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                children: [
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 py-1",
                    children: [
                      f.jsx("label", {
                        htmlFor: "category",
                        className: "font-semibold text-xl",
                        children: "Category:",
                      }),
                      f.jsx("input", {
                        type: "text",
                        name: "category",
                        id: "category",
                        placeholder: "Enter the course category",
                        value: r.category,
                        onChange: o,
                        className: "bg-transparent p-2 border",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 py-1",
                    children: [
                      f.jsx("label", {
                        htmlFor: "title",
                        className: "font-semibold text-xl",
                        children: "Created By:",
                      }),
                      f.jsx("input", {
                        type: "text",
                        name: "createdBy",
                        id: "createdBy",
                        placeholder: "Enter the course instructor",
                        value: r.createdBy,
                        onChange: o,
                        className: "bg-transparent p-2 border",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "flex flex-col gap-1 py-1",
                    children: [
                      f.jsx("label", {
                        htmlFor: "description",
                        className: "font-semibold text-xl",
                        children: "Description:",
                      }),
                      f.jsx("textarea", {
                        type: "text",
                        name: "description",
                        id: "description",
                        placeholder: "Enter the course description",
                        value: r.description,
                        onChange: o,
                        className: "bg-transparent p-2 border resize-none h-40",
                      }),
                    ],
                  }),
                  f.jsx("button", {
                    type: "submit",
                    className:
                      "my-4 w-full bg-yellow-700 rounded-md border p-2 text-xl font-semibold",
                    children: "Create Course",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function mS() {
  const e = Ke(),
    t = ue(),
    { state: n } = fn(),
    {
      _id: r,
      title: i,
      description: s,
      category: o,
      createdBy: l,
      thumbnail: a,
    } = n,
    [c, u] = E.useState(a == null ? void 0 : a.secure_url),
    [d, h] = E.useState({
      id: r,
      title: i,
      description: s,
      category: o,
      createdBy: l,
      newthumbnail: "i am thumnail",
    }),
    p = (v) => {
      v.preventDefault();
      const m = v.target.files[0];
      if (m) {
        h({ ...d, newthumbnail: m });
        const y = new FileReader();
        y.readAsDataURL(m),
          y.addEventListener("load", function () {
            u(this.result);
          });
      }
    },
    g = (v) => {
      const { name: m, value: y } = v.target;
      h({ ...d, [m]: y });
    },
    x = async (v) => {
      var w;
      if (
        (v.preventDefault(),
        !d.title || !d.description || !d.category || !d.createdBy)
      )
        return L.error("Please fill all the field");
      const m = new FormData();
      m.append("title", d.title),
        m.append("description", d.description),
        m.append("category", d.category),
        m.append("createdBy", d.createdBy),
        d.newthumbnail !== "" && m.append("newthumbnail", d.newthumbnail);
      const y = await e(aS([d.id, m]));
      (w = y == null ? void 0 : y.payload) != null &&
        w.success &&
        t("/admin/dashboard");
    };
  return (
    E.useEffect(() => {
      n || t("/admin/dashboard");
    }, []),
    f.jsx(we, {
      children: f.jsx("div", {
        className: "flex justify-center items-center min-h-screen",
        children: f.jsxs("form", {
          onSubmit: x,
          className: "px-14 py-5 rounded-lg text-white shadow-[0_0_10px_black]",
          children: [
            f.jsx("h1", {
              className: "text-3xl font-bold text-center mb-4",
              children: "Update Course",
            }),
            f.jsxs("div", {
              className: "grid grid-cols-2 gap-12",
              children: [
                f.jsxs("div", {
                  children: [
                    f.jsxs("div", {
                      className: "flex flex-col gap-1 py-1",
                      children: [
                        f.jsx("label", {
                          htmlFor: "title",
                          className: "font-semibold text-xl",
                          children: "Title:",
                        }),
                        f.jsx("input", {
                          type: "text",
                          name: "title",
                          id: "title",
                          placeholder: "Enter the course title",
                          value: d.title,
                          onChange: g,
                          className: "bg-transparent p-2 border",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-1 py-1",
                      children: [
                        f.jsx("label", {
                          htmlFor: "newthumbnail",
                          className: "cursor-pointer w-96",
                          children: c
                            ? f.jsx("div", {
                                className:
                                  "w-full h-80 overflow-hidden border mt-2",
                                children: f.jsx("img", {
                                  src: c,
                                  alt: "newthumbnail image",
                                  className: "max-w-full max-h-full",
                                }),
                              })
                            : f.jsxs("div", {
                                className: "font-semibold text-xl",
                                children: [
                                  "Thumbnail:",
                                  f.jsx(y1, {
                                    className:
                                      "w-full h-72 overflow-hidden border mt-1",
                                  }),
                                ],
                              }),
                        }),
                        f.jsx("input", {
                          type: "file",
                          name: "newthumbnail",
                          id: "newthumbnail",
                          className: "hidden",
                          accept: ".jpg,jpeg,.png,.svg",
                          onChange: p,
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  children: [
                    f.jsxs("div", {
                      className: "flex flex-col gap-1 py-1",
                      children: [
                        f.jsx("label", {
                          htmlFor: "category",
                          className: "font-semibold text-xl",
                          children: "Category:",
                        }),
                        f.jsx("input", {
                          type: "text",
                          name: "category",
                          id: "category",
                          placeholder: "Enter the course category",
                          value: d.category,
                          onChange: g,
                          className: "bg-transparent p-2 border",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-1 py-1",
                      children: [
                        f.jsx("label", {
                          htmlFor: "title",
                          className: "font-semibold text-xl",
                          children: "Created By:",
                        }),
                        f.jsx("input", {
                          type: "text",
                          name: "createdBy",
                          id: "createdBy",
                          placeholder: "Enter the course instructor",
                          value: d.createdBy,
                          onChange: g,
                          className: "bg-transparent p-2 border",
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "flex flex-col gap-1 py-1",
                      children: [
                        f.jsx("label", {
                          htmlFor: "description",
                          className: "font-semibold text-xl",
                          children: "Description:",
                        }),
                        f.jsx("textarea", {
                          type: "text",
                          name: "description",
                          id: "description",
                          placeholder: "Enter the course description",
                          value: d.description,
                          onChange: g,
                          className:
                            "bg-transparent p-2 border resize-none h-40",
                        }),
                      ],
                    }),
                    f.jsx("button", {
                      type: "submit",
                      className:
                        "my-4 w-full bg-yellow-700 rounded-md border p-2 text-xl font-semibold",
                      children: "Update Course",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    })
  );
}
function gS(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
function yS(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 15 15", fill: "none" },
    child: [
      {
        tag: "path",
        attr: {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z",
          fill: "currentColor",
        },
        child: [],
      },
    ],
  })(e);
}
const xS = { lectures: [] },
  x1 = pe("/getCourseLectures", async (e) => {
    var t, n;
    try {
      const r = ie.get(`/courses/${e}`);
      return (
        L.promise(r, {
          loading: "Wait! loading your lectures",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to get lectures.",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  vS = pe("/removeLecture", async (e) => {
    var t, n, r;
    try {
      const i = ie.delete(
        `/courses?courseId=${e.courseId}&lectureId=${e.lectureId}`
      );
      return (
        L.promise(i, {
          loading: "Wait removing the lecture",
          success: (s) => {
            var o;
            return (o = s == null ? void 0 : s.data) == null
              ? void 0
              : o.message;
          },
          error: "Failed to remove lecture",
        }),
        (t = await i) == null ? void 0 : t.data
      );
    } catch (i) {
      L.error(
        (r = (n = i == null ? void 0 : i.response) == null ? void 0 : n.data) ==
          null
          ? void 0
          : r.message
      );
    }
  }),
  v1 = pe("/addLecture", async (e) => {
    var t, n;
    try {
      const r = ie.post(`/courses/${e[0]}`, e[1]);
      return (
        L.promise(r, {
          loading: "Wait adding lecture to course",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Failed to add lecture to course",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  wS = js({
    name: "lectures",
    initialState: xS,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(x1.fulfilled, (t, n) => {
        var r, i;
        (r = n == null ? void 0 : n.payload) != null &&
          r.lectures &&
          (t.lectures =
            (i = n == null ? void 0 : n.payload) == null ? void 0 : i.lectures);
      }).addCase(v1.fulfilled, (t, n) => {
        var r, i, s;
        (r = n == null ? void 0 : n.payload) != null &&
          r.course &&
          (t.lectures =
            (s =
              (i = n == null ? void 0 : n.payload) == null
                ? void 0
                : i.course) == null
              ? void 0
              : s.lectures);
      });
    },
  }),
  bS = wS.reducer;
function _S() {
  const e = Ke(),
    t = ue(),
    { state: n } = fn(),
    [r, i] = E.useState({
      courseId: n._id,
      title: "",
      description: "",
      lecture: "",
      previewLecture: "",
    }),
    s = (a) => {
      a.preventDefault();
      const { name: c, value: u } = a.target;
      i({ ...r, [c]: u });
    },
    o = (a) => {
      a.preventDefault();
      const c = a.target.files[0],
        u = window.URL.createObjectURL(c);
      c && i({ ...r, lecture: c, previewLecture: u });
    },
    l = async (a) => {
      var d;
      if ((a.preventDefault(), !r.title || !r.description || !r.lecture)) {
        L.error("All feilds are required");
        return;
      }
      const c = new FormData();
      c.append("title", r.title),
        c.append("description", r.description),
        c.append("lecture", r.lecture);
      const u = await e(v1([r.courseId, c]));
      (d = u == null ? void 0 : u.payload) != null &&
        d.success &&
        i({
          courseId: n == null ? void 0 : n._id,
          title: "",
          description: "",
          lecture: "",
          previewLecture: "",
        });
    };
  return (
    E.useEffect(() => {
      console.log(n), n || t("/courses");
    }, []),
    f.jsx(we, {
      children: f.jsx("div", {
        className: "flex justify-center items-center min-h-screen",
        children: f.jsxs("form", {
          onSubmit: l,
          className:
            "px-14 py-10 my-10 rounded-lg text-white shadow-[0_0_10px_black] relative",
          children: [
            f.jsx("button", {
              type: "button",
              onClick: () => t(-1),
              className: "absolute left-10 p-3 cursor-pointer text-xl",
              children: f.jsx(ta, {}),
            }),
            f.jsx("h3", {
              className:
                "text-lg font-semibold bg-yellow-600 inline-block px-2 absolute top-0 right-0",
              children: n.title,
            }),
            f.jsx("h1", {
              className: "text-3xl font-bold text-center mb-4",
              children: "Add Lecture",
            }),
            f.jsxs("div", {
              className: "flex flex-col gap-1 py-1",
              children: [
                f.jsx("label", {
                  htmlFor: "title",
                  className: "font-semibold text-xl",
                  children: "Title:",
                }),
                f.jsx("input", {
                  type: "text",
                  name: "title",
                  id: "title",
                  placeholder: "Enter the lecture's title",
                  value: r.title,
                  onChange: s,
                  className: "bg-transparent p-2 border",
                }),
              ],
            }),
            f.jsxs("div", {
              className: "flex flex-col gap-1 py-1",
              children: [
                f.jsx("label", {
                  htmlFor: "description",
                  className: "font-semibold text-xl",
                  children: "Description:",
                }),
                f.jsx("textarea", {
                  type: "text",
                  name: "description",
                  id: "description",
                  placeholder: "Enter the lecture's description",
                  value: r.description,
                  onChange: s,
                  className: "bg-transparent p-2 border resize-none h-24",
                }),
              ],
            }),
            f.jsxs("div", {
              className: "flex flex-col gap-1 py-1",
              children: [
                f.jsx("label", {
                  htmlFor: "lecture",
                  className: "cursor-pointer w-96",
                  children: r.previewLecture
                    ? f.jsxs("div", {
                        className: "w-full h-auto border mt-2 relative",
                        children: [
                          f.jsx("video", {
                            controls: !0,
                            src: r.previewLecture,
                            alt: "lecture video",
                            className: "max-w-full max-h-full",
                          }),
                          f.jsx("button", {
                            onClick: () => i({ ...r, previewLecture: "" }),
                            className:
                              "text-red-600 text-4xl p-1 absolute top-0 right-0",
                            children: f.jsx(gS, {}),
                          }),
                        ],
                      })
                    : f.jsxs("div", {
                        className: "font-semibold text-xl",
                        children: [
                          "Lecture:",
                          f.jsx("div", {
                            className:
                              "w-full h-48 border mt-1 flex justify-center items-center",
                            children: "Upload course lecture",
                          }),
                        ],
                      }),
                }),
                f.jsx("input", {
                  type: "file",
                  name: "lecture",
                  id: "lecture",
                  className: "hidden",
                  accept: ".mp4",
                  onChange: o,
                }),
              ],
            }),
            f.jsx("button", {
              type: "submit",
              className:
                "my-4 w-full bg-yellow-700 rounded-md border p-2 text-xl font-semibold",
              children: "Add Lecture",
            }),
          ],
        }),
      }),
    })
  );
}
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function Ms(e) {
  return (e + 0.5) | 0;
}
const kn = (e, t, n) => Math.max(Math.min(e, n), t);
function Pi(e) {
  return kn(Ms(e * 2.55), 0, 255);
}
function Dn(e) {
  return kn(Ms(e * 255), 0, 255);
}
function Jt(e) {
  return kn(Ms(e / 2.55) / 100, 0, 1);
}
function Bh(e) {
  return kn(Ms(e * 100), 0, 100);
}
const pt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  du = [..."0123456789ABCDEF"],
  SS = (e) => du[e & 15],
  kS = (e) => du[(e & 240) >> 4] + du[e & 15],
  Js = (e) => (e & 240) >> 4 === (e & 15),
  CS = (e) => Js(e.r) && Js(e.g) && Js(e.b) && Js(e.a);
function ES(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (pt[e[1]] * 17),
            g: 255 & (pt[e[2]] * 17),
            b: 255 & (pt[e[3]] * 17),
            a: t === 5 ? pt[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (pt[e[1]] << 4) | pt[e[2]],
            g: (pt[e[3]] << 4) | pt[e[4]],
            b: (pt[e[5]] << 4) | pt[e[6]],
            a: t === 9 ? (pt[e[7]] << 4) | pt[e[8]] : 255,
          })),
    n
  );
}
const jS = (e, t) => (e < 255 ? t(e) : "");
function NS(e) {
  var t = CS(e) ? SS : kS;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + jS(e.a, t) : void 0;
}
const PS =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function w1(e, t, n) {
  const r = t * Math.min(n, 1 - n),
    i = (s, o = (s + e / 30) % 12) =>
      n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function MS(e, t, n) {
  const r = (i, s = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
  return [r(5), r(3), r(1)];
}
function OS(e, t, n) {
  const r = w1(e, 1, 0.5);
  let i;
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (r[i] *= 1 - t - n), (r[i] += t);
  return r;
}
function RS(e, t, n, r, i) {
  return e === i
    ? (t - n) / r + (t < n ? 6 : 0)
    : t === i
    ? (n - e) / r + 2
    : (e - t) / r + 4;
}
function Nd(e) {
  const n = e.r / 255,
    r = e.g / 255,
    i = e.b / 255,
    s = Math.max(n, r, i),
    o = Math.min(n, r, i),
    l = (s + o) / 2;
  let a, c, u;
  return (
    s !== o &&
      ((u = s - o),
      (c = l > 0.5 ? u / (2 - s - o) : u / (s + o)),
      (a = RS(n, r, i, u, s)),
      (a = a * 60 + 0.5)),
    [a | 0, c || 0, l]
  );
}
function Pd(e, t, n, r) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(Dn);
}
function Md(e, t, n) {
  return Pd(w1, e, t, n);
}
function TS(e, t, n) {
  return Pd(OS, e, t, n);
}
function LS(e, t, n) {
  return Pd(MS, e, t, n);
}
function b1(e) {
  return ((e % 360) + 360) % 360;
}
function DS(e) {
  const t = PS.exec(e);
  let n = 255,
    r;
  if (!t) return;
  t[5] !== r && (n = t[6] ? Pi(+t[5]) : Dn(+t[5]));
  const i = b1(+t[2]),
    s = +t[3] / 100,
    o = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (r = TS(i, s, o))
      : t[1] === "hsv"
      ? (r = LS(i, s, o))
      : (r = Md(i, s, o)),
    { r: r[0], g: r[1], b: r[2], a: n }
  );
}
function AS(e, t) {
  var n = Nd(e);
  (n[0] = b1(n[0] + t)), (n = Md(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function zS(e) {
  if (!e) return;
  const t = Nd(e),
    n = t[0],
    r = Bh(t[1]),
    i = Bh(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${r}%, ${i}%, ${Jt(e.a)})`
    : `hsl(${n}, ${r}%, ${i}%)`;
}
const $h = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Uh = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function FS() {
  const e = {},
    t = Object.keys(Uh),
    n = Object.keys($h);
  let r, i, s, o, l;
  for (r = 0; r < t.length; r++) {
    for (o = l = t[r], i = 0; i < n.length; i++)
      (s = n[i]), (l = l.replace(s, $h[s]));
    (s = parseInt(Uh[o], 16)),
      (e[l] = [(s >> 16) & 255, (s >> 8) & 255, s & 255]);
  }
  return e;
}
let Zs;
function IS(e) {
  Zs || ((Zs = FS()), (Zs.transparent = [0, 0, 0, 0]));
  const t = Zs[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const BS =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function $S(e) {
  const t = BS.exec(e);
  let n = 255,
    r,
    i,
    s;
  if (t) {
    if (t[7] !== r) {
      const o = +t[7];
      n = t[8] ? Pi(o) : kn(o * 255, 0, 255);
    }
    return (
      (r = +t[1]),
      (i = +t[3]),
      (s = +t[5]),
      (r = 255 & (t[2] ? Pi(r) : kn(r, 0, 255))),
      (i = 255 & (t[4] ? Pi(i) : kn(i, 0, 255))),
      (s = 255 & (t[6] ? Pi(s) : kn(s, 0, 255))),
      { r, g: i, b: s, a: n }
    );
  }
}
function US(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Jt(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const $a = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Sr = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function HS(e, t, n) {
  const r = Sr(Jt(e.r)),
    i = Sr(Jt(e.g)),
    s = Sr(Jt(e.b));
  return {
    r: Dn($a(r + n * (Sr(Jt(t.r)) - r))),
    g: Dn($a(i + n * (Sr(Jt(t.g)) - i))),
    b: Dn($a(s + n * (Sr(Jt(t.b)) - s))),
    a: e.a + n * (t.a - e.a),
  };
}
function eo(e, t, n) {
  if (e) {
    let r = Nd(e);
    (r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1))),
      (r = Md(r)),
      (e.r = r[0]),
      (e.g = r[1]),
      (e.b = r[2]);
  }
}
function _1(e, t) {
  return e && Object.assign(t || {}, e);
}
function Hh(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = Dn(e[3])))
      : ((t = _1(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = Dn(t.a))),
    t
  );
}
function WS(e) {
  return e.charAt(0) === "r" ? $S(e) : DS(e);
}
class ms {
  constructor(t) {
    if (t instanceof ms) return t;
    const n = typeof t;
    let r;
    n === "object"
      ? (r = Hh(t))
      : n === "string" && (r = ES(t) || IS(t) || WS(t)),
      (this._rgb = r),
      (this._valid = !!r);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = _1(this._rgb);
    return t && (t.a = Jt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Hh(t);
  }
  rgbString() {
    return this._valid ? US(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? NS(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? zS(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const r = this.rgb,
        i = t.rgb;
      let s;
      const o = n === s ? 0.5 : n,
        l = 2 * o - 1,
        a = r.a - i.a,
        c = ((l * a === -1 ? l : (l + a) / (1 + l * a)) + 1) / 2;
      (s = 1 - c),
        (r.r = 255 & (c * r.r + s * i.r + 0.5)),
        (r.g = 255 & (c * r.g + s * i.g + 0.5)),
        (r.b = 255 & (c * r.b + s * i.b + 0.5)),
        (r.a = o * r.a + (1 - o) * i.a),
        (this.rgb = r);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = HS(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new ms(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = Dn(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = Ms(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return eo(this._rgb, 2, t), this;
  }
  darken(t) {
    return eo(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return eo(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return eo(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return AS(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ function Yt() {}
const VS = (() => {
  let e = 0;
  return () => e++;
})();
function te(e) {
  return e === null || typeof e > "u";
}
function _e(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function U(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function _t(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function At(e, t) {
  return _t(e) ? e : t;
}
function H(e, t) {
  return typeof e > "u" ? t : e;
}
const KS = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t,
  S1 = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function ee(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function V(e, t, n, r) {
  let i, s, o;
  if (_e(e)) for (s = e.length, i = 0; i < s; i++) t.call(n, e[i], i);
  else if (U(e))
    for (o = Object.keys(e), s = o.length, i = 0; i < s; i++)
      t.call(n, e[o[i]], o[i]);
}
function yl(e, t) {
  let n, r, i, s;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, r = e.length; n < r; ++n)
    if (
      ((i = e[n]),
      (s = t[n]),
      i.datasetIndex !== s.datasetIndex || i.index !== s.index)
    )
      return !1;
  return !0;
}
function xl(e) {
  if (_e(e)) return e.map(xl);
  if (U(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      r = n.length;
    let i = 0;
    for (; i < r; ++i) t[n[i]] = xl(e[n[i]]);
    return t;
  }
  return e;
}
function k1(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function YS(e, t, n, r) {
  if (!k1(e)) return;
  const i = t[e],
    s = n[e];
  U(i) && U(s) ? gs(i, s, r) : (t[e] = xl(s));
}
function gs(e, t, n) {
  const r = _e(t) ? t : [t],
    i = r.length;
  if (!U(e)) return e;
  n = n || {};
  const s = n.merger || YS;
  let o;
  for (let l = 0; l < i; ++l) {
    if (((o = r[l]), !U(o))) continue;
    const a = Object.keys(o);
    for (let c = 0, u = a.length; c < u; ++c) s(a[c], e, o, n);
  }
  return e;
}
function Wi(e, t) {
  return gs(e, t, { merger: XS });
}
function XS(e, t, n) {
  if (!k1(e)) return;
  const r = t[e],
    i = n[e];
  U(r) && U(i)
    ? Wi(r, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = xl(i));
}
const Wh = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function qS(e) {
  const t = e.split("."),
    n = [];
  let r = "";
  for (const i of t)
    (r += i),
      r.endsWith("\\") ? (r = r.slice(0, -1) + ".") : (n.push(r), (r = ""));
  return n;
}
function QS(e) {
  const t = qS(e);
  return (n) => {
    for (const r of t) {
      if (r === "") break;
      n = n && n[r];
    }
    return n;
  };
}
function yr(e, t) {
  return (Wh[t] || (Wh[t] = QS(t)))(e);
}
function Od(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ys = (e) => typeof e < "u",
  Bn = (e) => typeof e == "function",
  Vh = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function GS(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const ye = Math.PI,
  ge = 2 * ye,
  vl = Number.POSITIVE_INFINITY,
  JS = ye / 180,
  ke = ye / 2,
  Kn = ye / 4,
  Kh = (ye * 2) / 3,
  fu = Math.log10,
  An = Math.sign;
function Po(e, t, n) {
  return Math.abs(e - t) < n;
}
function Yh(e) {
  const t = Math.round(e);
  e = Po(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(fu(e))),
    r = e / n;
  return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n;
}
function ZS(e) {
  const t = [],
    n = Math.sqrt(e);
  let r;
  for (r = 1; r < n; r++) e % r === 0 && (t.push(r), t.push(e / r));
  return n === (n | 0) && t.push(n), t.sort((i, s) => i - s).pop(), t;
}
function wl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function e4(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function t4(e, t, n) {
  let r, i, s;
  for (r = 0, i = e.length; r < i; r++)
    (s = e[r][n]),
      isNaN(s) || ((t.min = Math.min(t.min, s)), (t.max = Math.max(t.max, s)));
}
function tn(e) {
  return e * (ye / 180);
}
function n4(e) {
  return e * (180 / ye);
}
function Xh(e) {
  if (!_t(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function C1(e, t) {
  const n = t.x - e.x,
    r = t.y - e.y,
    i = Math.sqrt(n * n + r * r);
  let s = Math.atan2(r, n);
  return s < -0.5 * ye && (s += ge), { angle: s, distance: i };
}
function r4(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Yn(e) {
  return ((e % ge) + ge) % ge;
}
function bl(e, t, n, r) {
  const i = Yn(e),
    s = Yn(t),
    o = Yn(n),
    l = Yn(s - i),
    a = Yn(o - i),
    c = Yn(i - s),
    u = Yn(i - o);
  return i === s || i === o || (r && s === o) || (l > a && c < u);
}
function Ge(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function i4(e) {
  return Ge(e, -32768, 32767);
}
function ir(e, t, n, r = 1e-6) {
  return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r;
}
function Rd(e, t, n) {
  n = n || ((o) => e[o] < t);
  let r = e.length - 1,
    i = 0,
    s;
  for (; r - i > 1; ) (s = (i + r) >> 1), n(s) ? (i = s) : (r = s);
  return { lo: i, hi: r };
}
const hu = (e, t, n, r) =>
    Rd(
      e,
      n,
      r
        ? (i) => {
            const s = e[i][t];
            return s < n || (s === n && e[i + 1][t] === n);
          }
        : (i) => e[i][t] < n
    ),
  s4 = (e, t, n) => Rd(e, n, (r) => e[r][t] >= n);
function o4(e, t, n) {
  let r = 0,
    i = e.length;
  for (; r < i && e[r] < t; ) r++;
  for (; i > r && e[i - 1] > n; ) i--;
  return r > 0 || i < e.length ? e.slice(r, i) : e;
}
const E1 = ["push", "pop", "shift", "splice", "unshift"];
function l4(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    E1.forEach((n) => {
      const r = "_onData" + Od(n),
        i = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...s) {
          const o = i.apply(this, s);
          return (
            e._chartjs.listeners.forEach((l) => {
              typeof l[r] == "function" && l[r](...s);
            }),
            o
          );
        },
      });
    });
}
function qh(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const r = n.listeners,
    i = r.indexOf(t);
  i !== -1 && r.splice(i, 1),
    !(r.length > 0) &&
      (E1.forEach((s) => {
        delete e[s];
      }),
      delete e._chartjs);
}
function j1(e) {
  const t = new Set(e);
  return t.size === e.length ? e : Array.from(t);
}
const N1 = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function P1(e, t) {
  let n = [],
    r = !1;
  return function (...i) {
    (n = i),
      r ||
        ((r = !0),
        N1.call(window, () => {
          (r = !1), e.apply(t, n);
        }));
  };
}
function a4(e, t) {
  let n;
  return function (...r) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, r))) : e.apply(this, r), t
    );
  };
}
const Td = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Ae = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  c4 = (e, t, n, r) =>
    e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t,
  to = (e) => e === 0 || e === 1,
  Qh = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * ge) / n)),
  Gh = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * ge) / n) + 1,
  Vi = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * ke) + 1,
    easeOutSine: (e) => Math.sin(e * ke),
    easeInOutSine: (e) => -0.5 * (Math.cos(ye * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      to(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (to(e) ? e : Qh(e, 0.075, 0.3)),
    easeOutElastic: (e) => (to(e) ? e : Gh(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return to(e)
        ? e
        : e < 0.5
        ? 0.5 * Qh(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Gh(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Vi.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Vi.easeInBounce(e * 2) * 0.5
        : Vi.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
function M1(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Jh(e) {
  return M1(e) ? e : new ms(e);
}
function Ua(e) {
  return M1(e) ? e : new ms(e).saturate(0.5).darken(0.1).hexString();
}
const u4 = ["x", "y", "borderWidth", "radius", "tension"],
  d4 = ["color", "borderColor", "backgroundColor"];
function f4(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    e.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (t) =>
        t !== "onProgress" && t !== "onComplete" && t !== "fn",
    }),
    e.set("animations", {
      colors: { type: "color", properties: d4 },
      numbers: { type: "number", properties: u4 },
    }),
    e.describe("animations", { _fallback: "animation" }),
    e.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (t) => t | 0 },
        },
      },
    });
}
function h4(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Zh = new Map();
function p4(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let r = Zh.get(n);
  return r || ((r = new Intl.NumberFormat(e, t)), Zh.set(n, r)), r;
}
function Ld(e, t, n) {
  return p4(t, n).format(e);
}
const O1 = {
  values(e) {
    return _e(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const r = this.chart.options.locale;
    let i,
      s = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), (s = m4(e, n));
    }
    const o = fu(Math.abs(s)),
      l = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      a = { notation: i, minimumFractionDigits: l, maximumFractionDigits: l };
    return Object.assign(a, this.options.ticks.format), Ld(e, r, a);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const r = n[t].significand || e / Math.pow(10, Math.floor(fu(e)));
    return [1, 2, 3, 5, 10, 15].includes(r) || t > 0.8 * n.length
      ? O1.numeric.call(this, e, t, n)
      : "";
  },
};
function m4(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var R1 = { formatters: O1 };
function g4(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: R1.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
      _fallback: !1,
      _scriptable: (t) =>
        !t.startsWith("before") &&
        !t.startsWith("after") &&
        t !== "callback" &&
        t !== "parser",
      _indexable: (t) =>
        t !== "borderDash" && t !== "tickBorderDash" && t !== "dash",
    }),
    e.describe("scales", { _fallback: "scale" }),
    e.describe("scale.ticks", {
      _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
      _indexable: (t) => t !== "backdropPadding",
    });
}
const xr = Object.create(null),
  pu = Object.create(null);
function Ki(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let r = 0, i = n.length; r < i; ++r) {
    const s = n[r];
    e = e[s] || (e[s] = Object.create(null));
  }
  return e;
}
function Ha(e, t, n) {
  return typeof t == "string" ? gs(Ki(e, t), n) : gs(Ki(e, ""), t);
}
class y4 {
  constructor(t, n) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (r) => r.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (r, i) => Ua(i.backgroundColor)),
      (this.hoverBorderColor = (r, i) => Ua(i.borderColor)),
      (this.hoverColor = (r, i) => Ua(i.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n);
  }
  set(t, n) {
    return Ha(this, t, n);
  }
  get(t) {
    return Ki(this, t);
  }
  describe(t, n) {
    return Ha(pu, t, n);
  }
  override(t, n) {
    return Ha(xr, t, n);
  }
  route(t, n, r, i) {
    const s = Ki(this, t),
      o = Ki(this, r),
      l = "_" + n;
    Object.defineProperties(s, {
      [l]: { value: s[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const a = this[l],
            c = o[i];
          return U(a) ? Object.assign({}, c, a) : H(a, c);
        },
        set(a) {
          this[l] = a;
        },
      },
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var fe = new y4(
  {
    _scriptable: (e) => !e.startsWith("on"),
    _indexable: (e) => e !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [f4, h4, g4]
);
function x4(e) {
  return !e || te(e.size) || te(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function ep(e, t, n, r, i) {
  let s = t[i];
  return (
    s || ((s = t[i] = e.measureText(i).width), n.push(i)), s > r && (r = s), r
  );
}
function Xn(e, t, n) {
  const r = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * r) / r + i;
}
function tp(e, t) {
  (!t && !e) ||
    ((t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore());
}
function np(e, t, n, r) {
  T1(e, t, n, r, null);
}
function T1(e, t, n, r, i) {
  let s, o, l, a, c, u, d, h;
  const p = t.pointStyle,
    g = t.rotation,
    x = t.radius;
  let v = (g || 0) * JS;
  if (
    p &&
    typeof p == "object" &&
    ((s = p.toString()),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, r),
      e.rotate(v),
      e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
      e.restore();
    return;
  }
  if (!(isNaN(x) || x <= 0)) {
    switch ((e.beginPath(), p)) {
      default:
        i ? e.ellipse(n, r, i / 2, x, 0, 0, ge) : e.arc(n, r, x, 0, ge),
          e.closePath();
        break;
      case "triangle":
        (u = i ? i / 2 : x),
          e.moveTo(n + Math.sin(v) * u, r - Math.cos(v) * x),
          (v += Kh),
          e.lineTo(n + Math.sin(v) * u, r - Math.cos(v) * x),
          (v += Kh),
          e.lineTo(n + Math.sin(v) * u, r - Math.cos(v) * x),
          e.closePath();
        break;
      case "rectRounded":
        (c = x * 0.516),
          (a = x - c),
          (o = Math.cos(v + Kn) * a),
          (d = Math.cos(v + Kn) * (i ? i / 2 - c : a)),
          (l = Math.sin(v + Kn) * a),
          (h = Math.sin(v + Kn) * (i ? i / 2 - c : a)),
          e.arc(n - d, r - l, c, v - ye, v - ke),
          e.arc(n + h, r - o, c, v - ke, v),
          e.arc(n + d, r + l, c, v, v + ke),
          e.arc(n - h, r + o, c, v + ke, v + ye),
          e.closePath();
        break;
      case "rect":
        if (!g) {
          (a = Math.SQRT1_2 * x),
            (u = i ? i / 2 : a),
            e.rect(n - u, r - a, 2 * u, 2 * a);
          break;
        }
        v += Kn;
      case "rectRot":
        (d = Math.cos(v) * (i ? i / 2 : x)),
          (o = Math.cos(v) * x),
          (l = Math.sin(v) * x),
          (h = Math.sin(v) * (i ? i / 2 : x)),
          e.moveTo(n - d, r - l),
          e.lineTo(n + h, r - o),
          e.lineTo(n + d, r + l),
          e.lineTo(n - h, r + o),
          e.closePath();
        break;
      case "crossRot":
        v += Kn;
      case "cross":
        (d = Math.cos(v) * (i ? i / 2 : x)),
          (o = Math.cos(v) * x),
          (l = Math.sin(v) * x),
          (h = Math.sin(v) * (i ? i / 2 : x)),
          e.moveTo(n - d, r - l),
          e.lineTo(n + d, r + l),
          e.moveTo(n + h, r - o),
          e.lineTo(n - h, r + o);
        break;
      case "star":
        (d = Math.cos(v) * (i ? i / 2 : x)),
          (o = Math.cos(v) * x),
          (l = Math.sin(v) * x),
          (h = Math.sin(v) * (i ? i / 2 : x)),
          e.moveTo(n - d, r - l),
          e.lineTo(n + d, r + l),
          e.moveTo(n + h, r - o),
          e.lineTo(n - h, r + o),
          (v += Kn),
          (d = Math.cos(v) * (i ? i / 2 : x)),
          (o = Math.cos(v) * x),
          (l = Math.sin(v) * x),
          (h = Math.sin(v) * (i ? i / 2 : x)),
          e.moveTo(n - d, r - l),
          e.lineTo(n + d, r + l),
          e.moveTo(n + h, r - o),
          e.lineTo(n - h, r + o);
        break;
      case "line":
        (o = i ? i / 2 : Math.cos(v) * x),
          (l = Math.sin(v) * x),
          e.moveTo(n - o, r - l),
          e.lineTo(n + o, r + l);
        break;
      case "dash":
        e.moveTo(n, r),
          e.lineTo(n + Math.cos(v) * (i ? i / 2 : x), r + Math.sin(v) * x);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function L1(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function Dd(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function Ad(e) {
  e.restore();
}
function v4(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    te(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function w4(e, t, n, r, i) {
  if (i.strikethrough || i.underline) {
    const s = e.measureText(r),
      o = t - s.actualBoundingBoxLeft,
      l = t + s.actualBoundingBoxRight,
      a = n - s.actualBoundingBoxAscent,
      c = n + s.actualBoundingBoxDescent,
      u = i.strikethrough ? (a + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(o, u),
      e.lineTo(l, u),
      e.stroke();
  }
}
function b4(e, t) {
  const n = e.fillStyle;
  (e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n);
}
function xs(e, t, n, r, i, s = {}) {
  const o = _e(t) ? t : [t],
    l = s.strokeWidth > 0 && s.strokeColor !== "";
  let a, c;
  for (e.save(), e.font = i.string, v4(e, s), a = 0; a < o.length; ++a)
    (c = o[a]),
      s.backdrop && b4(e, s.backdrop),
      l &&
        (s.strokeColor && (e.strokeStyle = s.strokeColor),
        te(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(c, n, r, s.maxWidth)),
      e.fillText(c, n, r, s.maxWidth),
      w4(e, n, r, c, s),
      (r += Number(i.lineHeight));
  e.restore();
}
function _l(e, t) {
  const { x: n, y: r, w: i, h: s, radius: o } = t;
  e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * ye, ye, !0),
    e.lineTo(n, r + s - o.bottomLeft),
    e.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, ye, ke, !0),
    e.lineTo(n + i - o.bottomRight, r + s),
    e.arc(
      n + i - o.bottomRight,
      r + s - o.bottomRight,
      o.bottomRight,
      ke,
      0,
      !0
    ),
    e.lineTo(n + i, r + o.topRight),
    e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -ke, !0),
    e.lineTo(n + o.topLeft, r);
}
const _4 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  S4 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function k4(e, t) {
  const n = ("" + e).match(_4);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const C4 = (e) => +e || 0;
function zd(e, t) {
  const n = {},
    r = U(t),
    i = r ? Object.keys(t) : t,
    s = U(e) ? (r ? (o) => H(e[o], e[t[o]]) : (o) => e[o]) : () => e;
  for (const o of i) n[o] = C4(s(o));
  return n;
}
function D1(e) {
  return zd(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function Hr(e) {
  return zd(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function St(e) {
  const t = D1(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Fe(e, t) {
  (e = e || {}), (t = t || fe.font);
  let n = H(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let r = H(e.style, t.style);
  r &&
    !("" + r).match(S4) &&
    (console.warn('Invalid font style specified: "' + r + '"'), (r = void 0));
  const i = {
    family: H(e.family, t.family),
    lineHeight: k4(H(e.lineHeight, t.lineHeight), n),
    size: n,
    style: r,
    weight: H(e.weight, t.weight),
    string: "",
  };
  return (i.string = x4(i)), i;
}
function no(e, t, n, r) {
  let i, s, o;
  for (i = 0, s = e.length; i < s; ++i)
    if (((o = e[i]), o !== void 0 && o !== void 0)) return o;
}
function E4(e, t, n) {
  const { min: r, max: i } = e,
    s = S1(t, (i - r) / 2),
    o = (l, a) => (n && l === 0 ? 0 : l + a);
  return { min: o(r, -Math.abs(s)), max: o(i, s) };
}
function ai(e, t) {
  return Object.assign(Object.create(e), t);
}
function Fd(e, t = [""], n, r, i = () => e[0]) {
  const s = n || e;
  typeof r > "u" && (r = I1("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: s,
    _fallback: r,
    _getTarget: i,
    override: (l) => Fd([l, ...e], t, s, r),
  };
  return new Proxy(o, {
    deleteProperty(l, a) {
      return delete l[a], delete l._keys, delete e[0][a], !0;
    },
    get(l, a) {
      return z1(l, a, () => L4(a, t, e, l));
    },
    getOwnPropertyDescriptor(l, a) {
      return Reflect.getOwnPropertyDescriptor(l._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(l, a) {
      return ip(l).includes(a);
    },
    ownKeys(l) {
      return ip(l);
    },
    set(l, a, c) {
      const u = l._storage || (l._storage = i());
      return (l[a] = u[a] = c), delete l._keys, !0;
    },
  });
}
function ei(e, t, n, r) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: A1(e, r),
    setContext: (s) => ei(e, s, n, r),
    override: (s) => ei(e.override(s), t, n, r),
  };
  return new Proxy(i, {
    deleteProperty(s, o) {
      return delete s[o], delete e[o], !0;
    },
    get(s, o, l) {
      return z1(s, o, () => N4(s, o, l));
    },
    getOwnPropertyDescriptor(s, o) {
      return s._descriptors.allKeys
        ? Reflect.has(e, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(s, o) {
      return Reflect.has(e, o);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(s, o, l) {
      return (e[o] = l), delete s[o], !0;
    },
  });
}
function A1(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: r = t.indexable,
    _allKeys: i = t.allKeys,
  } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: r,
    isScriptable: Bn(n) ? n : () => n,
    isIndexable: Bn(r) ? r : () => r,
  };
}
const j4 = (e, t) => (e ? e + Od(t) : t),
  Id = (e, t) =>
    U(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function z1(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t) || t === "constructor")
    return e[t];
  const r = n();
  return (e[t] = r), r;
}
function N4(e, t, n) {
  const { _proxy: r, _context: i, _subProxy: s, _descriptors: o } = e;
  let l = r[t];
  return (
    Bn(l) && o.isScriptable(t) && (l = P4(t, l, e, n)),
    _e(l) && l.length && (l = M4(t, l, e, o.isIndexable)),
    Id(t, l) && (l = ei(l, i, s && s[t], o)),
    l
  );
}
function P4(e, t, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _stack: l } = n;
  if (l.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(l).join("->") + "->" + e
    );
  l.add(e);
  let a = t(s, o || r);
  return l.delete(e), Id(e, a) && (a = Bd(i._scopes, i, e, a)), a;
}
function M4(e, t, n, r) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: l } = n;
  if (typeof s.index < "u" && r(e)) return t[s.index % t.length];
  if (U(t[0])) {
    const a = t,
      c = i._scopes.filter((u) => u !== a);
    t = [];
    for (const u of a) {
      const d = Bd(c, i, e, u);
      t.push(ei(d, s, o && o[e], l));
    }
  }
  return t;
}
function F1(e, t, n) {
  return Bn(e) ? e(t, n) : e;
}
const O4 = (e, t) => (e === !0 ? t : typeof e == "string" ? yr(t, e) : void 0);
function R4(e, t, n, r, i) {
  for (const s of t) {
    const o = O4(n, s);
    if (o) {
      e.add(o);
      const l = F1(o._fallback, n, i);
      if (typeof l < "u" && l !== n && l !== r) return l;
    } else if (o === !1 && typeof r < "u" && n !== r) return null;
  }
  return !1;
}
function Bd(e, t, n, r) {
  const i = t._rootScopes,
    s = F1(t._fallback, n, r),
    o = [...e, ...i],
    l = new Set();
  l.add(r);
  let a = rp(l, o, n, s || n, r);
  return a === null ||
    (typeof s < "u" && s !== n && ((a = rp(l, o, s, a, r)), a === null))
    ? !1
    : Fd(Array.from(l), [""], i, s, () => T4(t, n, r));
}
function rp(e, t, n, r, i) {
  for (; n; ) n = R4(e, t, n, r, i);
  return n;
}
function T4(e, t, n) {
  const r = e._getTarget();
  t in r || (r[t] = {});
  const i = r[t];
  return _e(i) && U(n) ? n : i || {};
}
function L4(e, t, n, r) {
  let i;
  for (const s of t)
    if (((i = I1(j4(s, e), n)), typeof i < "u"))
      return Id(e, i) ? Bd(n, r, e, i) : i;
}
function I1(e, t) {
  for (const n of t) {
    if (!n) continue;
    const r = n[e];
    if (typeof r < "u") return r;
  }
}
function ip(e) {
  let t = e._keys;
  return t || (t = e._keys = D4(e._scopes)), t;
}
function D4(e) {
  const t = new Set();
  for (const n of e)
    for (const r of Object.keys(n).filter((i) => !i.startsWith("_"))) t.add(r);
  return Array.from(t);
}
function $d() {
  return typeof window < "u" && typeof document < "u";
}
function Ud(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Sl(e, t, n) {
  let r;
  return (
    typeof e == "string"
      ? ((r = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (r = (r / 100) * t.parentNode[n]))
      : (r = e),
    r
  );
}
const na = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function A4(e, t) {
  return na(e).getPropertyValue(t);
}
const z4 = ["top", "right", "bottom", "left"];
function ar(e, t, n) {
  const r = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const s = z4[i];
    r[s] = parseFloat(e[t + "-" + s + n]) || 0;
  }
  return (r.width = r.left + r.right), (r.height = r.top + r.bottom), r;
}
const F4 = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function I4(e, t) {
  const n = e.touches,
    r = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: s } = r;
  let o = !1,
    l,
    a;
  if (F4(i, s, e.target)) (l = i), (a = s);
  else {
    const c = t.getBoundingClientRect();
    (l = r.clientX - c.left), (a = r.clientY - c.top), (o = !0);
  }
  return { x: l, y: a, box: o };
}
function Zn(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: r } = t,
    i = na(n),
    s = i.boxSizing === "border-box",
    o = ar(i, "padding"),
    l = ar(i, "border", "width"),
    { x: a, y: c, box: u } = I4(e, n),
    d = o.left + (u && l.left),
    h = o.top + (u && l.top);
  let { width: p, height: g } = t;
  return (
    s && ((p -= o.width + l.width), (g -= o.height + l.height)),
    {
      x: Math.round((((a - d) / p) * n.width) / r),
      y: Math.round((((c - h) / g) * n.height) / r),
    }
  );
}
function B4(e, t, n) {
  let r, i;
  if (t === void 0 || n === void 0) {
    const s = e && Ud(e);
    if (!s) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const o = s.getBoundingClientRect(),
        l = na(s),
        a = ar(l, "border", "width"),
        c = ar(l, "padding");
      (t = o.width - c.width - a.width),
        (n = o.height - c.height - a.height),
        (r = Sl(l.maxWidth, s, "clientWidth")),
        (i = Sl(l.maxHeight, s, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: r || vl, maxHeight: i || vl };
}
const ro = (e) => Math.round(e * 10) / 10;
function $4(e, t, n, r) {
  const i = na(e),
    s = ar(i, "margin"),
    o = Sl(i.maxWidth, e, "clientWidth") || vl,
    l = Sl(i.maxHeight, e, "clientHeight") || vl,
    a = B4(e, t, n);
  let { width: c, height: u } = a;
  if (i.boxSizing === "content-box") {
    const h = ar(i, "border", "width"),
      p = ar(i, "padding");
    (c -= p.width + h.width), (u -= p.height + h.height);
  }
  return (
    (c = Math.max(0, c - s.width)),
    (u = Math.max(0, r ? c / r : u - s.height)),
    (c = ro(Math.min(c, o, a.maxWidth))),
    (u = ro(Math.min(u, l, a.maxHeight))),
    c && !u && (u = ro(c / 2)),
    (t !== void 0 || n !== void 0) &&
      r &&
      a.height &&
      u > a.height &&
      ((u = a.height), (c = ro(Math.floor(u * r)))),
    { width: c, height: u }
  );
}
function sp(e, t, n) {
  const r = t || 1,
    i = Math.floor(e.height * r),
    s = Math.floor(e.width * r);
  (e.height = Math.floor(e.height)), (e.width = Math.floor(e.width));
  const o = e.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== r || o.height !== i || o.width !== s
      ? ((e.currentDevicePixelRatio = r),
        (o.height = i),
        (o.width = s),
        e.ctx.setTransform(r, 0, 0, r, 0, 0),
        !0)
      : !1
  );
}
const U4 = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    $d() &&
      (window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t));
  } catch {}
  return e;
})();
function op(e, t) {
  const n = A4(e, t),
    r = n && n.match(/^(\d+)(\.\d+)?px$/);
  return r ? +r[1] : void 0;
}
const H4 = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, r) {
        return n - r;
      },
      leftForLtr(n, r) {
        return n - r;
      },
    };
  },
  W4 = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function Wr(e, t, n) {
  return e ? H4(t, n) : W4();
}
function B1(e, t) {
  let n, r;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = r));
}
function $1(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.5
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */ class V4 {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, r, i) {
    const s = n.listeners[i],
      o = n.duration;
    s.forEach((l) =>
      l({
        chart: t,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(r - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = N1.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((r, i) => {
      if (!r.running || !r.items.length) return;
      const s = r.items;
      let o = s.length - 1,
        l = !1,
        a;
      for (; o >= 0; --o)
        (a = s[o]),
          a._active
            ? (a._total > r.duration && (r.duration = a._total),
              a.tick(t),
              (l = !0))
            : ((s[o] = s[s.length - 1]), s.pop());
      l && (i.draw(), this._notify(i, r, t, "progress")),
        s.length ||
          ((r.running = !1),
          this._notify(i, r, t, "complete"),
          (r.initial = !1)),
        (n += s.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let r = n.get(t);
    return (
      r ||
        ((r = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, r)),
      r
    );
  }
  listen(t, n, r) {
    this._getAnims(t).listeners[n].push(r);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((r, i) => Math.max(r, i._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const r = n.items;
    let i = r.length - 1;
    for (; i >= 0; --i) r[i].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Xt = new V4();
const lp = "transparent",
  K4 = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const r = Jh(e || lp),
        i = r.valid && Jh(t || lp);
      return i && i.valid ? i.mix(r, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class Y4 {
  constructor(t, n, r, i) {
    const s = n[r];
    i = no([t.to, i, s, t.from]);
    const o = no([t.from, s, i]);
    (this._active = !0),
      (this._fn = t.fn || K4[t.type || typeof o]),
      (this._easing = Vi[t.easing] || Vi.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = r),
      (this._from = o),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, r) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        s = r - this._start,
        o = this._duration - s;
      (this._start = r),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += s),
        (this._loop = !!t.loop),
        (this._to = no([t.to, n, i, t.from])),
        (this._from = no([t.from, i, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      r = this._duration,
      i = this._prop,
      s = this._from,
      o = this._loop,
      l = this._to;
    let a;
    if (((this._active = s !== l && (o || n < r)), !this._active)) {
      (this._target[i] = l), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = s;
      return;
    }
    (a = (n / r) % 2),
      (a = o && a > 1 ? 2 - a : a),
      (a = this._easing(Math.min(1, Math.max(0, a)))),
      (this._target[i] = this._fn(s, l, a));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, r) => {
      t.push({ res: n, rej: r });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      r = this._promises || [];
    for (let i = 0; i < r.length; i++) r[i][n]();
  }
}
class U1 {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!U(t)) return;
    const n = Object.keys(fe.animation),
      r = this._properties;
    Object.getOwnPropertyNames(t).forEach((i) => {
      const s = t[i];
      if (!U(s)) return;
      const o = {};
      for (const l of n) o[l] = s[l];
      ((_e(s.properties) && s.properties) || [i]).forEach((l) => {
        (l === i || !r.has(l)) && r.set(l, o);
      });
    });
  }
  _animateOptions(t, n) {
    const r = n.options,
      i = q4(t, r);
    if (!i) return [];
    const s = this._createAnimations(i, r);
    return (
      r.$shared &&
        X4(t.options.$animations, r).then(
          () => {
            t.options = r;
          },
          () => {}
        ),
      s
    );
  }
  _createAnimations(t, n) {
    const r = this._properties,
      i = [],
      s = t.$animations || (t.$animations = {}),
      o = Object.keys(n),
      l = Date.now();
    let a;
    for (a = o.length - 1; a >= 0; --a) {
      const c = o[a];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let d = s[c];
      const h = r.get(c);
      if (d)
        if (h && d.active()) {
          d.update(h, u, l);
          continue;
        } else d.cancel();
      if (!h || !h.duration) {
        t[c] = u;
        continue;
      }
      (s[c] = d = new Y4(h, t, c, u)), i.push(d);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const r = this._createAnimations(t, n);
    if (r.length) return Xt.add(this._chart, r), !0;
  }
}
function X4(e, t) {
  const n = [],
    r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = e[r[i]];
    s && s.active() && n.push(s.wait());
  }
  return Promise.all(n);
}
function q4(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function ap(e, t) {
  const n = (e && e.options) || {},
    r = n.reverse,
    i = n.min === void 0 ? t : 0,
    s = n.max === void 0 ? t : 0;
  return { start: r ? s : i, end: r ? i : s };
}
function Q4(e, t, n) {
  if (n === !1) return !1;
  const r = ap(e, n),
    i = ap(t, n);
  return { top: i.end, right: r.end, bottom: i.start, left: r.start };
}
function G4(e) {
  let t, n, r, i;
  return (
    U(e)
      ? ((t = e.top), (n = e.right), (r = e.bottom), (i = e.left))
      : (t = n = r = i = e),
    { top: t, right: n, bottom: r, left: i, disabled: e === !1 }
  );
}
function H1(e, t) {
  const n = [],
    r = e._getSortedDatasetMetas(t);
  let i, s;
  for (i = 0, s = r.length; i < s; ++i) n.push(r[i].index);
  return n;
}
function cp(e, t, n, r = {}) {
  const i = e.keys,
    s = r.mode === "single";
  let o, l, a, c;
  if (t !== null) {
    for (o = 0, l = i.length; o < l; ++o) {
      if (((a = +i[o]), a === n)) {
        if (r.all) continue;
        break;
      }
      (c = e.values[a]), _t(c) && (s || t === 0 || An(t) === An(c)) && (t += c);
    }
    return t;
  }
}
function J4(e, t) {
  const { iScale: n, vScale: r } = t,
    i = n.axis === "x" ? "x" : "y",
    s = r.axis === "x" ? "x" : "y",
    o = Object.keys(e),
    l = new Array(o.length);
  let a, c, u;
  for (a = 0, c = o.length; a < c; ++a)
    (u = o[a]), (l[a] = { [i]: u, [s]: e[u] });
  return l;
}
function Wa(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function Z4(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function ek(e) {
  const { min: t, max: n, minDefined: r, maxDefined: i } = e.getUserBounds();
  return {
    min: r ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  };
}
function tk(e, t, n) {
  const r = e[t] || (e[t] = {});
  return r[n] || (r[n] = {});
}
function up(e, t, n, r) {
  for (const i of t.getMatchingVisibleMetas(r).reverse()) {
    const s = e[i.index];
    if ((n && s > 0) || (!n && s < 0)) return i.index;
  }
  return null;
}
function dp(e, t) {
  const { chart: n, _cachedMeta: r } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: s, vScale: o, index: l } = r,
    a = s.axis,
    c = o.axis,
    u = Z4(s, o, r),
    d = t.length;
  let h;
  for (let p = 0; p < d; ++p) {
    const g = t[p],
      { [a]: x, [c]: v } = g,
      m = g._stacks || (g._stacks = {});
    (h = m[c] = tk(i, u, x)),
      (h[l] = v),
      (h._top = up(h, o, !0, r.type)),
      (h._bottom = up(h, o, !1, r.type));
    const y = h._visualValues || (h._visualValues = {});
    y[l] = v;
  }
}
function Va(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((r) => n[r].axis === t)
    .shift();
}
function nk(e, t) {
  return ai(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function rk(e, t, n) {
  return ai(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function vi(e, t) {
  const n = e.controller.index,
    r = e.vScale && e.vScale.axis;
  if (r) {
    t = t || e._parsed;
    for (const i of t) {
      const s = i._stacks;
      if (!s || s[r] === void 0 || s[r][n] === void 0) return;
      delete s[r][n],
        s[r]._visualValues !== void 0 &&
          s[r]._visualValues[n] !== void 0 &&
          delete s[r]._visualValues[n];
    }
  }
}
const Ka = (e) => e === "reset" || e === "none",
  fp = (e, t) => (t ? e : Object.assign({}, e)),
  ik = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: H1(n, !0), values: null };
class Vr {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = Wa(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        );
  }
  updateIndex(t) {
    this.index !== t && vi(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      r = this.getDataset(),
      i = (d, h, p, g) => (d === "x" ? h : d === "r" ? g : p),
      s = (n.xAxisID = H(r.xAxisID, Va(t, "x"))),
      o = (n.yAxisID = H(r.yAxisID, Va(t, "y"))),
      l = (n.rAxisID = H(r.rAxisID, Va(t, "r"))),
      a = n.indexAxis,
      c = (n.iAxisID = i(a, s, o, l)),
      u = (n.vAxisID = i(a, o, s, l));
    (n.xScale = this.getScaleForId(s)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(l)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && qh(this._data, this), t._stacked && vi(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      r = this._data;
    if (U(n)) {
      const i = this._cachedMeta;
      this._data = J4(n, i);
    } else if (r !== n) {
      if (r) {
        qh(r, this);
        const i = this._cachedMeta;
        vi(i), (i._parsed = []);
      }
      n && Object.isExtensible(n) && l4(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      r = this.getDataset();
    let i = !1;
    this._dataCheck();
    const s = n._stacked;
    (n._stacked = Wa(n.vScale, n)),
      n.stack !== r.stack && ((i = !0), vi(n), (n.stack = r.stack)),
      this._resyncElements(t),
      (i || s !== n._stacked) &&
        (dp(this, n._parsed), (n._stacked = Wa(n.vScale, n)));
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      r = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(r, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: r, _data: i } = this,
      { iScale: s, _stacked: o } = r,
      l = s.axis;
    let a = t === 0 && n === i.length ? !0 : r._sorted,
      c = t > 0 && r._parsed[t - 1],
      u,
      d,
      h;
    if (this._parsing === !1) (r._parsed = i), (r._sorted = !0), (h = i);
    else {
      _e(i[t])
        ? (h = this.parseArrayData(r, i, t, n))
        : U(i[t])
        ? (h = this.parseObjectData(r, i, t, n))
        : (h = this.parsePrimitiveData(r, i, t, n));
      const p = () => d[l] === null || (c && d[l] < c[l]);
      for (u = 0; u < n; ++u)
        (r._parsed[u + t] = d = h[u]), a && (p() && (a = !1), (c = d));
      r._sorted = a;
    }
    o && dp(this, h);
  }
  parsePrimitiveData(t, n, r, i) {
    const { iScale: s, vScale: o } = t,
      l = s.axis,
      a = o.axis,
      c = s.getLabels(),
      u = s === o,
      d = new Array(i);
    let h, p, g;
    for (h = 0, p = i; h < p; ++h)
      (g = h + r),
        (d[h] = { [l]: u || s.parse(c[g], g), [a]: o.parse(n[g], g) });
    return d;
  }
  parseArrayData(t, n, r, i) {
    const { xScale: s, yScale: o } = t,
      l = new Array(i);
    let a, c, u, d;
    for (a = 0, c = i; a < c; ++a)
      (u = a + r),
        (d = n[u]),
        (l[a] = { x: s.parse(d[0], u), y: o.parse(d[1], u) });
    return l;
  }
  parseObjectData(t, n, r, i) {
    const { xScale: s, yScale: o } = t,
      { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing,
      c = new Array(i);
    let u, d, h, p;
    for (u = 0, d = i; u < d; ++u)
      (h = u + r),
        (p = n[h]),
        (c[u] = { x: s.parse(yr(p, l), h), y: o.parse(yr(p, a), h) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, r) {
    const i = this.chart,
      s = this._cachedMeta,
      o = n[t.axis],
      l = { keys: H1(i, !0), values: n._stacks[t.axis]._visualValues };
    return cp(l, o, s.index, { mode: r });
  }
  updateRangeFromParsed(t, n, r, i) {
    const s = r[n.axis];
    let o = s === null ? NaN : s;
    const l = i && r._stacks[n.axis];
    i && l && ((i.values = l), (o = cp(i, s, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, n) {
    const r = this._cachedMeta,
      i = r._parsed,
      s = r._sorted && t === r.iScale,
      o = i.length,
      l = this._getOtherScale(t),
      a = ik(n, r, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: d } = ek(l);
    let h, p;
    function g() {
      p = i[h];
      const x = p[l.axis];
      return !_t(p[t.axis]) || u > x || d < x;
    }
    for (
      h = 0;
      h < o && !(!g() && (this.updateRangeFromParsed(c, t, p, a), s));
      ++h
    );
    if (s) {
      for (h = o - 1; h >= 0; --h)
        if (!g()) {
          this.updateRangeFromParsed(c, t, p, a);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      r = [];
    let i, s, o;
    for (i = 0, s = n.length; i < s; ++i)
      (o = n[i][t.axis]), _t(o) && r.push(o);
    return r;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      r = n.iScale,
      i = n.vScale,
      s = this.getParsed(t);
    return {
      label: r ? "" + r.getLabelForValue(s[r.axis]) : "",
      value: i ? "" + i.getLabelForValue(s[i.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = G4(
        H(this.options.clip, Q4(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      r = this._cachedMeta,
      i = r.data || [],
      s = n.chartArea,
      o = [],
      l = this._drawStart || 0,
      a = this._drawCount || i.length - l,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (r.dataset && r.dataset.draw(t, s, l, a), u = l; u < l + a; ++u) {
      const d = i[u];
      d.hidden || (d.active && c ? o.push(d) : d.draw(t, s));
    }
    for (u = 0; u < o.length; ++u) o[u].draw(t, s);
  }
  getStyle(t, n) {
    const r = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(r)
      : this.resolveDataElementOptions(t || 0, r);
  }
  getContext(t, n, r) {
    const i = this.getDataset();
    let s;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      (s = o.$context || (o.$context = rk(this.getContext(), t, o))),
        (s.parsed = this.getParsed(t)),
        (s.raw = i.data[t]),
        (s.index = s.dataIndex = t);
    } else
      (s =
        this.$context ||
        (this.$context = nk(this.chart.getContext(), this.index))),
        (s.dataset = i),
        (s.index = s.datasetIndex = this.index);
    return (s.active = !!n), (s.mode = r), s;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", r) {
    const i = n === "active",
      s = this._cachedDataOpts,
      o = t + "-" + n,
      l = s[o],
      a = this.enableOptionSharing && ys(r);
    if (l) return fp(l, a);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      d = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      h = c.getOptionScopes(this.getDataset(), u),
      p = Object.keys(fe.elements[t]),
      g = () => this.getContext(r, i, n),
      x = c.resolveNamedOptions(h, p, g, d);
    return x.$shared && ((x.$shared = a), (s[o] = Object.freeze(fp(x, a)))), x;
  }
  _resolveAnimations(t, n, r) {
    const i = this.chart,
      s = this._cachedDataOpts,
      o = `animation-${n}`,
      l = s[o];
    if (l) return l;
    let a;
    if (i.options.animation !== !1) {
      const u = this.chart.config,
        d = u.datasetAnimationScopeKeys(this._type, n),
        h = u.getOptionScopes(this.getDataset(), d);
      a = u.createResolver(h, this.getContext(t, r, n));
    }
    const c = new U1(i, a && a.animations);
    return a && a._cacheable && (s[o] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || Ka(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const r = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      s = this.getSharedOptions(r),
      o = this.includeOptions(n, s) || s !== i;
    return (
      this.updateSharedOptions(s, n, r), { sharedOptions: s, includeOptions: o }
    );
  }
  updateElement(t, n, r, i) {
    Ka(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r);
  }
  updateSharedOptions(t, n, r) {
    t && !Ka(n) && this._resolveAnimations(void 0, n).update(t, r);
  }
  _setStyle(t, n, r, i) {
    t.active = i;
    const s = this.getStyle(n, i);
    this._resolveAnimations(n, r, i).update(t, {
      options: (!i && this.getSharedOptions(s)) || s,
    });
  }
  removeHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !1);
  }
  setHoverStyle(t, n, r) {
    this._setStyle(t, r, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      r = this._cachedMeta.data;
    for (const [l, a, c] of this._syncList) this[l](a, c);
    this._syncList = [];
    const i = r.length,
      s = n.length,
      o = Math.min(s, i);
    o && this.parse(0, o),
      s > i
        ? this._insertElements(i, s - i, t)
        : s < i && this._removeElements(s, i - s);
  }
  _insertElements(t, n, r = !0) {
    const i = this._cachedMeta,
      s = i.data,
      o = t + n;
    let l;
    const a = (c) => {
      for (c.length += n, l = c.length - 1; l >= o; l--) c[l] = c[l - n];
    };
    for (a(s), l = t; l < o; ++l) s[l] = new this.dataElementType();
    this._parsing && a(i._parsed),
      this.parse(t, n),
      r && this.updateElements(s, t, n, "reset");
  }
  updateElements(t, n, r, i) {}
  _removeElements(t, n) {
    const r = this._cachedMeta;
    if (this._parsing) {
      const i = r._parsed.splice(t, n);
      r._stacked && vi(r, i);
    }
    r.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, r, i] = t;
      this[n](r, i);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const r = arguments.length - 2;
    r && this._sync(["_insertElements", t, r]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
D(Vr, "defaults", {}),
  D(Vr, "datasetElementType", null),
  D(Vr, "dataElementType", null);
function sk(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let r = [];
    for (let i = 0, s = n.length; i < s; i++)
      r = r.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = j1(r.sort((i, s) => i - s));
  }
  return e._cache.$bar;
}
function ok(e) {
  const t = e.iScale,
    n = sk(t, e.type);
  let r = t._length,
    i,
    s,
    o,
    l;
  const a = () => {
    o === 32767 ||
      o === -32768 ||
      (ys(l) && (r = Math.min(r, Math.abs(o - l) || r)), (l = o));
  };
  for (i = 0, s = n.length; i < s; ++i) (o = t.getPixelForValue(n[i])), a();
  for (l = void 0, i = 0, s = t.ticks.length; i < s; ++i)
    (o = t.getPixelForTick(i)), a();
  return r;
}
function lk(e, t, n, r) {
  const i = n.barThickness;
  let s, o;
  return (
    te(i)
      ? ((s = t.min * n.categoryPercentage), (o = n.barPercentage))
      : ((s = i * r), (o = 1)),
    { chunk: s / r, ratio: o, start: t.pixels[e] - s / 2 }
  );
}
function ak(e, t, n, r) {
  const i = t.pixels,
    s = i[e];
  let o = e > 0 ? i[e - 1] : null,
    l = e < i.length - 1 ? i[e + 1] : null;
  const a = n.categoryPercentage;
  o === null && (o = s - (l === null ? t.end - t.start : l - s)),
    l === null && (l = s + s - o);
  const c = s - ((s - Math.min(o, l)) / 2) * a;
  return {
    chunk: ((Math.abs(l - o) / 2) * a) / r,
    ratio: n.barPercentage,
    start: c,
  };
}
function ck(e, t, n, r) {
  const i = n.parse(e[0], r),
    s = n.parse(e[1], r),
    o = Math.min(i, s),
    l = Math.max(i, s);
  let a = o,
    c = l;
  Math.abs(o) > Math.abs(l) && ((a = l), (c = o)),
    (t[n.axis] = c),
    (t._custom = { barStart: a, barEnd: c, start: i, end: s, min: o, max: l });
}
function W1(e, t, n, r) {
  return _e(e) ? ck(e, t, n, r) : (t[n.axis] = n.parse(e, r)), t;
}
function hp(e, t, n, r) {
  const i = e.iScale,
    s = e.vScale,
    o = i.getLabels(),
    l = i === s,
    a = [];
  let c, u, d, h;
  for (c = n, u = n + r; c < u; ++c)
    (h = t[c]),
      (d = {}),
      (d[i.axis] = l || i.parse(o[c], c)),
      a.push(W1(h, d, s, c));
  return a;
}
function Ya(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function uk(e, t, n) {
  return e !== 0 ? An(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function dk(e) {
  let t, n, r, i, s;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = "left"), (r = "right"))
      : ((t = e.base < e.y), (n = "bottom"), (r = "top")),
    t ? ((i = "end"), (s = "start")) : ((i = "start"), (s = "end")),
    { start: n, end: r, reverse: t, top: i, bottom: s }
  );
}
function fk(e, t, n, r) {
  let i = t.borderSkipped;
  const s = {};
  if (!i) {
    e.borderSkipped = s;
    return;
  }
  if (i === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: o, end: l, reverse: a, top: c, bottom: u } = dk(e);
  i === "middle" &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === r
      ? (i = c)
      : (n._bottom || 0) === r
      ? (i = u)
      : ((s[pp(u, o, l, a)] = !0), (i = c))),
    (s[pp(i, o, l, a)] = !0),
    (e.borderSkipped = s);
}
function pp(e, t, n, r) {
  return r ? ((e = hk(e, t, n)), (e = mp(e, n, t))) : (e = mp(e, t, n)), e;
}
function hk(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function mp(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function pk(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? (n === 1 ? 0.33 : 0) : t;
}
class Mo extends Vr {
  parsePrimitiveData(t, n, r, i) {
    return hp(t, n, r, i);
  }
  parseArrayData(t, n, r, i) {
    return hp(t, n, r, i);
  }
  parseObjectData(t, n, r, i) {
    const { iScale: s, vScale: o } = t,
      { xAxisKey: l = "x", yAxisKey: a = "y" } = this._parsing,
      c = s.axis === "x" ? l : a,
      u = o.axis === "x" ? l : a,
      d = [];
    let h, p, g, x;
    for (h = r, p = r + i; h < p; ++h)
      (x = n[h]),
        (g = {}),
        (g[s.axis] = s.parse(yr(x, c), h)),
        d.push(W1(yr(x, u), g, o, h));
    return d;
  }
  updateRangeFromParsed(t, n, r, i) {
    super.updateRangeFromParsed(t, n, r, i);
    const s = r._custom;
    s &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, s.min)), (t.max = Math.max(t.max, s.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: r, vScale: i } = n,
      s = this.getParsed(t),
      o = s._custom,
      l = Ya(o)
        ? "[" + o.start + ", " + o.end + "]"
        : "" + i.getLabelForValue(s[i.axis]);
    return { label: "" + r.getLabelForValue(s[r.axis]), value: l };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, r, i) {
    const s = i === "reset",
      {
        index: o,
        _cachedMeta: { vScale: l },
      } = this,
      a = l.getBasePixel(),
      c = l.isHorizontal(),
      u = this._getRuler(),
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(n, i);
    for (let p = n; p < n + r; p++) {
      const g = this.getParsed(p),
        x =
          s || te(g[l.axis])
            ? { base: a, head: a }
            : this._calculateBarValuePixels(p),
        v = this._calculateBarIndexPixels(p, u),
        m = (g._stacks || {})[l.axis],
        y = {
          horizontal: c,
          base: x.base,
          enableBorderRadius:
            !m || Ya(g._custom) || o === m._top || o === m._bottom,
          x: c ? x.head : v.center,
          y: c ? v.center : x.head,
          height: c ? v.size : Math.abs(x.size),
          width: c ? Math.abs(x.size) : v.size,
        };
      h &&
        (y.options =
          d || this.resolveDataElementOptions(p, t[p].active ? "active" : i));
      const w = y.options || t[p].options;
      fk(y, w, m, o), pk(y, w, u.ratio), this.updateElement(t[p], p, y, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: r } = this._cachedMeta,
      i = r
        .getMatchingVisibleMetas(this._type)
        .filter((u) => u.controller.options.grouped),
      s = r.options.stacked,
      o = [],
      l = this._cachedMeta.controller.getParsed(n),
      a = l && l[r.axis],
      c = (u) => {
        const d = u._parsed.find((p) => p[r.axis] === a),
          h = d && d[u.vScale.axis];
        if (te(h) || isNaN(h)) return !0;
      };
    for (const u of i)
      if (
        !(n !== void 0 && c(u)) &&
        ((s === !1 ||
          o.indexOf(u.stack) === -1 ||
          (s === void 0 && u.stack === void 0)) &&
          o.push(u.stack),
        u.index === t)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, r) {
    const i = this._getStacks(t, r),
      s = n !== void 0 ? i.indexOf(n) : -1;
    return s === -1 ? i.length - 1 : s;
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      r = n.iScale,
      i = [];
    let s, o;
    for (s = 0, o = n.data.length; s < o; ++s)
      i.push(r.getPixelForValue(this.getParsed(s)[r.axis], s));
    const l = t.barThickness;
    return {
      min: l || ok(n),
      pixels: i,
      start: r._startPixel,
      end: r._endPixel,
      stackCount: this._getStackCount(),
      scale: r,
      grouped: t.grouped,
      ratio: l ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: r, index: i },
        options: { base: s, minBarLength: o },
      } = this,
      l = s || 0,
      a = this.getParsed(t),
      c = a._custom,
      u = Ya(c);
    let d = a[n.axis],
      h = 0,
      p = r ? this.applyStack(n, a, r) : d,
      g,
      x;
    p !== d && ((h = p - d), (p = d)),
      u &&
        ((d = c.barStart),
        (p = c.barEnd - c.barStart),
        d !== 0 && An(d) !== An(c.barEnd) && (h = 0),
        (h += d));
    const v = !te(s) && !u ? s : h;
    let m = n.getPixelForValue(v);
    if (
      (this.chart.getDataVisibility(t)
        ? (g = n.getPixelForValue(h + p))
        : (g = m),
      (x = g - m),
      Math.abs(x) < o)
    ) {
      (x = uk(x, n, l) * o), d === l && (m -= x / 2);
      const y = n.getPixelForDecimal(0),
        w = n.getPixelForDecimal(1),
        b = Math.min(y, w),
        _ = Math.max(y, w);
      (m = Math.max(Math.min(m, _), b)),
        (g = m + x),
        r &&
          !u &&
          (a._stacks[n.axis]._visualValues[i] =
            n.getValueForPixel(g) - n.getValueForPixel(m));
    }
    if (m === n.getPixelForValue(l)) {
      const y = (An(x) * n.getLineWidthForValue(l)) / 2;
      (m += y), (x -= y);
    }
    return { size: x, base: m, head: g, center: g + x / 2 };
  }
  _calculateBarIndexPixels(t, n) {
    const r = n.scale,
      i = this.options,
      s = i.skipNull,
      o = H(i.maxBarThickness, 1 / 0);
    let l, a;
    if (n.grouped) {
      const c = s ? this._getStackCount(t) : n.stackCount,
        u = i.barThickness === "flex" ? ak(t, n, i, c) : lk(t, n, i, c),
        d = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          s ? t : void 0
        );
      (l = u.start + u.chunk * d + u.chunk / 2),
        (a = Math.min(o, u.chunk * u.ratio));
    } else
      (l = r.getPixelForValue(this.getParsed(t)[r.axis], t)),
        (a = Math.min(o, n.min * n.ratio));
    return { base: l - a / 2, head: l + a / 2, center: l, size: a };
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      r = t.data,
      i = r.length;
    let s = 0;
    for (; s < i; ++s)
      this.getParsed(s)[n.axis] !== null &&
        !r[s].hidden &&
        r[s].draw(this._ctx);
  }
}
D(Mo, "id", "bar"),
  D(Mo, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "base", "width", "height"],
      },
    },
  }),
  D(Mo, "overrides", {
    scales: {
      _index_: { type: "category", offset: !0, grid: { offset: !0 } },
      _value_: { type: "linear", beginAtZero: !0 },
    },
  });
function mk(e, t, n) {
  let r = 1,
    i = 1,
    s = 0,
    o = 0;
  if (t < ge) {
    const l = e,
      a = l + t,
      c = Math.cos(l),
      u = Math.sin(l),
      d = Math.cos(a),
      h = Math.sin(a),
      p = (w, b, _) => (bl(w, l, a, !0) ? 1 : Math.max(b, b * n, _, _ * n)),
      g = (w, b, _) => (bl(w, l, a, !0) ? -1 : Math.min(b, b * n, _, _ * n)),
      x = p(0, c, d),
      v = p(ke, u, h),
      m = g(ye, c, d),
      y = g(ye + ke, u, h);
    (r = (x - m) / 2),
      (i = (v - y) / 2),
      (s = -(x + m) / 2),
      (o = -(v + y) / 2);
  }
  return { ratioX: r, ratioY: i, offsetX: s, offsetY: o };
}
class Mi extends Vr {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, n) {
    const r = this.getDataset().data,
      i = this._cachedMeta;
    if (this._parsing === !1) i._parsed = r;
    else {
      let s = (a) => +r[a];
      if (U(r[t])) {
        const { key: a = "value" } = this._parsing;
        s = (c) => +yr(r[c], a);
      }
      let o, l;
      for (o = t, l = t + n; o < l; ++o) i._parsed[o] = s(o);
    }
  }
  _getRotation() {
    return tn(this.options.rotation - 90);
  }
  _getCircumference() {
    return tn(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ge,
      n = -ge;
    for (let r = 0; r < this.chart.data.datasets.length; ++r)
      if (
        this.chart.isDatasetVisible(r) &&
        this.chart.getDatasetMeta(r).type === this._type
      ) {
        const i = this.chart.getDatasetMeta(r).controller,
          s = i._getRotation(),
          o = i._getCircumference();
        (t = Math.min(t, s)), (n = Math.max(n, s + o));
      }
    return { rotation: t, circumference: n - t };
  }
  update(t) {
    const n = this.chart,
      { chartArea: r } = n,
      i = this._cachedMeta,
      s = i.data,
      o =
        this.getMaxBorderWidth() + this.getMaxOffset(s) + this.options.spacing,
      l = Math.max((Math.min(r.width, r.height) - o) / 2, 0),
      a = Math.min(KS(this.options.cutout, l), 1),
      c = this._getRingWeight(this.index),
      { circumference: u, rotation: d } = this._getRotationExtents(),
      { ratioX: h, ratioY: p, offsetX: g, offsetY: x } = mk(d, u, a),
      v = (r.width - o) / h,
      m = (r.height - o) / p,
      y = Math.max(Math.min(v, m) / 2, 0),
      w = S1(this.options.radius, y),
      b = Math.max(w * a, 0),
      _ = (w - b) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = g * w),
      (this.offsetY = x * w),
      (i.total = this.calculateTotal()),
      (this.outerRadius = w - _ * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - _ * c, 0)),
      this.updateElements(s, 0, s.length, t);
  }
  _circumference(t, n) {
    const r = this.options,
      i = this._cachedMeta,
      s = this._getCircumference();
    return (n && r.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      i._parsed[t] === null ||
      i.data[t].hidden
      ? 0
      : this.calculateCircumference((i._parsed[t] * s) / ge);
  }
  updateElements(t, n, r, i) {
    const s = i === "reset",
      o = this.chart,
      l = o.chartArea,
      c = o.options.animation,
      u = (l.left + l.right) / 2,
      d = (l.top + l.bottom) / 2,
      h = s && c.animateScale,
      p = h ? 0 : this.innerRadius,
      g = h ? 0 : this.outerRadius,
      { sharedOptions: x, includeOptions: v } = this._getSharedOptions(n, i);
    let m = this._getRotation(),
      y;
    for (y = 0; y < n; ++y) m += this._circumference(y, s);
    for (y = n; y < n + r; ++y) {
      const w = this._circumference(y, s),
        b = t[y],
        _ = {
          x: u + this.offsetX,
          y: d + this.offsetY,
          startAngle: m,
          endAngle: m + w,
          circumference: w,
          outerRadius: g,
          innerRadius: p,
        };
      v &&
        (_.options =
          x || this.resolveDataElementOptions(y, b.active ? "active" : i)),
        (m += w),
        this.updateElement(b, y, _, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data;
    let r = 0,
      i;
    for (i = 0; i < n.length; i++) {
      const s = t._parsed[i];
      s !== null &&
        !isNaN(s) &&
        this.chart.getDataVisibility(i) &&
        !n[i].hidden &&
        (r += Math.abs(s));
    }
    return r;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? ge * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      r = this.chart,
      i = r.data.labels || [],
      s = Ld(n._parsed[t], r.options.locale);
    return { label: i[t] || "", value: s };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const r = this.chart;
    let i, s, o, l, a;
    if (!t) {
      for (i = 0, s = r.data.datasets.length; i < s; ++i)
        if (r.isDatasetVisible(i)) {
          (o = r.getDatasetMeta(i)), (t = o.data), (l = o.controller);
          break;
        }
    }
    if (!t) return 0;
    for (i = 0, s = t.length; i < s; ++i)
      (a = l.resolveDataElementOptions(i)),
        a.borderAlign !== "inner" &&
          (n = Math.max(n, a.borderWidth || 0, a.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let r = 0, i = t.length; r < i; ++r) {
      const s = this.resolveDataElementOptions(r);
      n = Math.max(n, s.offset || 0, s.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let r = 0; r < t; ++r)
      this.chart.isDatasetVisible(r) && (n += this._getRingWeight(r));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(H(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
D(Mi, "id", "doughnut"),
  D(Mi, "defaults", {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: { animateRotate: !0, animateScale: !1 },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing",
        ],
      },
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r",
  }),
  D(Mi, "descriptors", {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) =>
      t !== "spacing" &&
      !t.startsWith("borderDash") &&
      !t.startsWith("hoverBorderDash"),
  }),
  D(Mi, "overrides", {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const n = t.data;
            if (n.labels.length && n.datasets.length) {
              const {
                labels: { pointStyle: r, color: i },
              } = t.legend.options;
              return n.labels.map((s, o) => {
                const a = t.getDatasetMeta(0).controller.getStyle(o);
                return {
                  text: s,
                  fillStyle: a.backgroundColor,
                  strokeStyle: a.borderColor,
                  fontColor: i,
                  lineWidth: a.borderWidth,
                  pointStyle: r,
                  hidden: !t.getDataVisibility(o),
                  index: o,
                };
              });
            }
            return [];
          },
        },
        onClick(t, n, r) {
          r.chart.toggleDataVisibility(n.index), r.chart.update();
        },
      },
    },
  });
class mu extends Mi {}
D(mu, "id", "pie"),
  D(mu, "defaults", {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%",
  });
function qn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class Hd {
  constructor(t) {
    D(this, "options");
    this.options = t || {};
  }
  static override(t) {
    Object.assign(Hd.prototype, t);
  }
  init() {}
  formats() {
    return qn();
  }
  parse() {
    return qn();
  }
  format() {
    return qn();
  }
  add() {
    return qn();
  }
  diff() {
    return qn();
  }
  startOf() {
    return qn();
  }
  endOf() {
    return qn();
  }
}
var gk = { _date: Hd };
function yk(e, t, n, r) {
  const { controller: i, data: s, _sorted: o } = e,
    l = i._cachedMeta.iScale;
  if (l && t === l.axis && t !== "r" && o && s.length) {
    const a = l._reversePixels ? s4 : hu;
    if (r) {
      if (i._sharedOptions) {
        const c = s[0],
          u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const d = a(s, t, n - u),
            h = a(s, t, n + u);
          return { lo: d.lo, hi: h.hi };
        }
      }
    } else return a(s, t, n);
  }
  return { lo: 0, hi: s.length - 1 };
}
function Os(e, t, n, r, i) {
  const s = e.getSortedVisibleDatasetMetas(),
    o = n[t];
  for (let l = 0, a = s.length; l < a; ++l) {
    const { index: c, data: u } = s[l],
      { lo: d, hi: h } = yk(s[l], t, o, i);
    for (let p = d; p <= h; ++p) {
      const g = u[p];
      g.skip || r(g, c, p);
    }
  }
}
function xk(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (r, i) {
    const s = t ? Math.abs(r.x - i.x) : 0,
      o = n ? Math.abs(r.y - i.y) : 0;
    return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2));
  };
}
function Xa(e, t, n, r, i) {
  const s = [];
  return (
    (!i && !e.isPointInArea(t)) ||
      Os(
        e,
        n,
        t,
        function (l, a, c) {
          (!i && !L1(l, e.chartArea, 0)) ||
            (l.inRange(t.x, t.y, r) &&
              s.push({ element: l, datasetIndex: a, index: c }));
        },
        !0
      ),
    s
  );
}
function vk(e, t, n, r) {
  let i = [];
  function s(o, l, a) {
    const { startAngle: c, endAngle: u } = o.getProps(
        ["startAngle", "endAngle"],
        r
      ),
      { angle: d } = C1(o, { x: t.x, y: t.y });
    bl(d, c, u) && i.push({ element: o, datasetIndex: l, index: a });
  }
  return Os(e, n, t, s), i;
}
function wk(e, t, n, r, i, s) {
  let o = [];
  const l = xk(n);
  let a = Number.POSITIVE_INFINITY;
  function c(u, d, h) {
    const p = u.inRange(t.x, t.y, i);
    if (r && !p) return;
    const g = u.getCenterPoint(i);
    if (!(!!s || e.isPointInArea(g)) && !p) return;
    const v = l(t, g);
    v < a
      ? ((o = [{ element: u, datasetIndex: d, index: h }]), (a = v))
      : v === a && o.push({ element: u, datasetIndex: d, index: h });
  }
  return Os(e, n, t, c), o;
}
function qa(e, t, n, r, i, s) {
  return !s && !e.isPointInArea(t)
    ? []
    : n === "r" && !r
    ? vk(e, t, n, i)
    : wk(e, t, n, r, i, s);
}
function gp(e, t, n, r, i) {
  const s = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let l = !1;
  return (
    Os(e, n, t, (a, c, u) => {
      a[o] &&
        a[o](t[n], i) &&
        (s.push({ element: a, datasetIndex: c, index: u }),
        (l = l || a.inRange(t.x, t.y, i)));
    }),
    r && !l ? [] : s
  );
}
var bk = {
  evaluateInteractionItems: Os,
  modes: {
    index(e, t, n, r) {
      const i = Zn(t, e),
        s = n.axis || "x",
        o = n.includeInvisible || !1,
        l = n.intersect ? Xa(e, i, s, r, o) : qa(e, i, s, !1, r, o),
        a = [];
      return l.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = l[0].index,
              d = c.data[u];
            d &&
              !d.skip &&
              a.push({ element: d, datasetIndex: c.index, index: u });
          }),
          a)
        : [];
    },
    dataset(e, t, n, r) {
      const i = Zn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      let l = n.intersect ? Xa(e, i, s, r, o) : qa(e, i, s, !1, r, o);
      if (l.length > 0) {
        const a = l[0].datasetIndex,
          c = e.getDatasetMeta(a).data;
        l = [];
        for (let u = 0; u < c.length; ++u)
          l.push({ element: c[u], datasetIndex: a, index: u });
      }
      return l;
    },
    point(e, t, n, r) {
      const i = Zn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Xa(e, i, s, r, o);
    },
    nearest(e, t, n, r) {
      const i = Zn(t, e),
        s = n.axis || "xy",
        o = n.includeInvisible || !1;
      return qa(e, i, s, n.intersect, r, o);
    },
    x(e, t, n, r) {
      const i = Zn(t, e);
      return gp(e, i, "x", n.intersect, r);
    },
    y(e, t, n, r) {
      const i = Zn(t, e);
      return gp(e, i, "y", n.intersect, r);
    },
  },
};
const V1 = ["left", "top", "right", "bottom"];
function wi(e, t) {
  return e.filter((n) => n.pos === t);
}
function yp(e, t) {
  return e.filter((n) => V1.indexOf(n.pos) === -1 && n.box.axis === t);
}
function bi(e, t) {
  return e.sort((n, r) => {
    const i = t ? r : n,
      s = t ? n : r;
    return i.weight === s.weight ? i.index - s.index : i.weight - s.weight;
  });
}
function _k(e) {
  const t = [];
  let n, r, i, s, o, l;
  for (n = 0, r = (e || []).length; n < r; ++n)
    (i = e[n]),
      ({
        position: s,
        options: { stack: o, stackWeight: l = 1 },
      } = i),
      t.push({
        index: n,
        box: i,
        pos: s,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: o && s + o,
        stackWeight: l,
      });
  return t;
}
function Sk(e) {
  const t = {};
  for (const n of e) {
    const { stack: r, pos: i, stackWeight: s } = n;
    if (!r || !V1.includes(i)) continue;
    const o = t[r] || (t[r] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += s);
  }
  return t;
}
function kk(e, t) {
  const n = Sk(e),
    { vBoxMaxWidth: r, hBoxMaxHeight: i } = t;
  let s, o, l;
  for (s = 0, o = e.length; s < o; ++s) {
    l = e[s];
    const { fullSize: a } = l.box,
      c = n[l.stack],
      u = c && l.stackWeight / c.weight;
    l.horizontal
      ? ((l.width = u ? u * r : a && t.availableWidth), (l.height = i))
      : ((l.width = r), (l.height = u ? u * i : a && t.availableHeight));
  }
  return n;
}
function Ck(e) {
  const t = _k(e),
    n = bi(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    r = bi(wi(t, "left"), !0),
    i = bi(wi(t, "right")),
    s = bi(wi(t, "top"), !0),
    o = bi(wi(t, "bottom")),
    l = yp(t, "x"),
    a = yp(t, "y");
  return {
    fullSize: n,
    leftAndTop: r.concat(s),
    rightAndBottom: i.concat(a).concat(o).concat(l),
    chartArea: wi(t, "chartArea"),
    vertical: r.concat(i).concat(a),
    horizontal: s.concat(o).concat(l),
  };
}
function xp(e, t, n, r) {
  return Math.max(e[n], t[n]) + Math.max(e[r], t[r]);
}
function K1(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function Ek(e, t, n, r) {
  const { pos: i, box: s } = n,
    o = e.maxPadding;
  if (!U(i)) {
    n.size && (e[i] -= n.size);
    const d = r[n.stack] || { size: 0, count: 1 };
    (d.size = Math.max(d.size, n.horizontal ? s.height : s.width)),
      (n.size = d.size / d.count),
      (e[i] += n.size);
  }
  s.getPadding && K1(o, s.getPadding());
  const l = Math.max(0, t.outerWidth - xp(o, e, "left", "right")),
    a = Math.max(0, t.outerHeight - xp(o, e, "top", "bottom")),
    c = l !== e.w,
    u = a !== e.h;
  return (
    (e.w = l),
    (e.h = a),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function jk(e) {
  const t = e.maxPadding;
  function n(r) {
    const i = Math.max(t[r] - e[r], 0);
    return (e[r] += i), i;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function Nk(e, t) {
  const n = t.maxPadding;
  function r(i) {
    const s = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((o) => {
        s[o] = Math.max(t[o], n[o]);
      }),
      s
    );
  }
  return r(e ? ["left", "right"] : ["top", "bottom"]);
}
function Oi(e, t, n, r) {
  const i = [];
  let s, o, l, a, c, u;
  for (s = 0, o = e.length, c = 0; s < o; ++s) {
    (l = e[s]),
      (a = l.box),
      a.update(l.width || t.w, l.height || t.h, Nk(l.horizontal, t));
    const { same: d, other: h } = Ek(t, n, l, r);
    (c |= d && i.length), (u = u || h), a.fullSize || i.push(l);
  }
  return (c && Oi(i, t, n, r)) || u;
}
function io(e, t, n, r, i) {
  (e.top = n),
    (e.left = t),
    (e.right = t + r),
    (e.bottom = n + i),
    (e.width = r),
    (e.height = i);
}
function vp(e, t, n, r) {
  const i = n.padding;
  let { x: s, y: o } = t;
  for (const l of e) {
    const a = l.box,
      c = r[l.stack] || { count: 1, placed: 0, weight: 1 },
      u = l.stackWeight / c.weight || 1;
    if (l.horizontal) {
      const d = t.w * u,
        h = c.size || a.height;
      ys(c.start) && (o = c.start),
        a.fullSize
          ? io(a, i.left, o, n.outerWidth - i.right - i.left, h)
          : io(a, t.left + c.placed, o, d, h),
        (c.start = o),
        (c.placed += d),
        (o = a.bottom);
    } else {
      const d = t.h * u,
        h = c.size || a.width;
      ys(c.start) && (s = c.start),
        a.fullSize
          ? io(a, s, i.top, h, n.outerHeight - i.bottom - i.top)
          : io(a, s, t.top + c.placed, h, d),
        (c.start = s),
        (c.placed += d),
        (s = a.right);
    }
  }
  (t.x = s), (t.y = o);
}
var xt = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, r) {
    if (!e) return;
    const i = St(e.options.layout.padding),
      s = Math.max(t - i.width, 0),
      o = Math.max(n - i.height, 0),
      l = Ck(e.boxes),
      a = l.vertical,
      c = l.horizontal;
    V(e.boxes, (x) => {
      typeof x.beforeLayout == "function" && x.beforeLayout();
    });
    const u =
        a.reduce(
          (x, v) => (v.box.options && v.box.options.display === !1 ? x : x + 1),
          0
        ) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: s,
        availableHeight: o,
        vBoxMaxWidth: s / 2 / u,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, i);
    K1(h, St(r));
    const p = Object.assign(
        { maxPadding: h, w: s, h: o, x: i.left, y: i.top },
        i
      ),
      g = kk(a.concat(c), d);
    Oi(l.fullSize, p, d, g),
      Oi(a, p, d, g),
      Oi(c, p, d, g) && Oi(a, p, d, g),
      jk(p),
      vp(l.leftAndTop, p, d, g),
      (p.x += p.w),
      (p.y += p.h),
      vp(l.rightAndBottom, p, d, g),
      (e.chartArea = {
        left: p.left,
        top: p.top,
        right: p.left + p.w,
        bottom: p.top + p.h,
        height: p.h,
        width: p.w,
      }),
      V(l.chartArea, (x) => {
        const v = x.box;
        Object.assign(v, e.chartArea),
          v.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class Y1 {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, r) {}
  removeEventListener(t, n, r) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, r, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (r = r || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : r) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class Pk extends Y1 {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Oo = "$chartjs",
  Mk = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  wp = (e) => e === null || e === "";
function Ok(e, t) {
  const n = e.style,
    r = e.getAttribute("height"),
    i = e.getAttribute("width");
  if (
    ((e[Oo] = {
      initial: {
        height: r,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    wp(i))
  ) {
    const s = op(e, "width");
    s !== void 0 && (e.width = s);
  }
  if (wp(r))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const s = op(e, "height");
      s !== void 0 && (e.height = s);
    }
  return e;
}
const X1 = U4 ? { passive: !0 } : !1;
function Rk(e, t, n) {
  e && e.addEventListener(t, n, X1);
}
function Tk(e, t, n) {
  e && e.canvas && e.canvas.removeEventListener(t, n, X1);
}
function Lk(e, t) {
  const n = Mk[e.type] || e.type,
    { x: r, y: i } = Zn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: r !== void 0 ? r : null,
    y: i !== void 0 ? i : null,
  };
}
function kl(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function Dk(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || kl(l.addedNodes, r)), (o = o && !kl(l.removedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function Ak(e, t, n) {
  const r = e.canvas,
    i = new MutationObserver((s) => {
      let o = !1;
      for (const l of s)
        (o = o || kl(l.removedNodes, r)), (o = o && !kl(l.addedNodes, r));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const vs = new Map();
let bp = 0;
function q1() {
  const e = window.devicePixelRatio;
  e !== bp &&
    ((bp = e),
    vs.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function zk(e, t) {
  vs.size || window.addEventListener("resize", q1), vs.set(e, t);
}
function Fk(e) {
  vs.delete(e), vs.size || window.removeEventListener("resize", q1);
}
function Ik(e, t, n) {
  const r = e.canvas,
    i = r && Ud(r);
  if (!i) return;
  const s = P1((l, a) => {
      const c = i.clientWidth;
      n(l, a), c < i.clientWidth && n();
    }, window),
    o = new ResizeObserver((l) => {
      const a = l[0],
        c = a.contentRect.width,
        u = a.contentRect.height;
      (c === 0 && u === 0) || s(c, u);
    });
  return o.observe(i), zk(e, s), o;
}
function Qa(e, t, n) {
  n && n.disconnect(), t === "resize" && Fk(e);
}
function Bk(e, t, n) {
  const r = e.canvas,
    i = P1((s) => {
      e.ctx !== null && n(Lk(s, e));
    }, e);
  return Rk(r, t, i), i;
}
class $k extends Y1 {
  acquireContext(t, n) {
    const r = t && t.getContext && t.getContext("2d");
    return r && r.canvas === t ? (Ok(t, n), r) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Oo]) return !1;
    const r = n[Oo].initial;
    ["height", "width"].forEach((s) => {
      const o = r[s];
      te(o) ? n.removeAttribute(s) : n.setAttribute(s, o);
    });
    const i = r.style || {};
    return (
      Object.keys(i).forEach((s) => {
        n.style[s] = i[s];
      }),
      (n.width = n.width),
      delete n[Oo],
      !0
    );
  }
  addEventListener(t, n, r) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}),
      o = { attach: Dk, detach: Ak, resize: Ik }[n] || Bk;
    i[n] = o(t, n, r);
  }
  removeEventListener(t, n) {
    const r = t.$proxies || (t.$proxies = {}),
      i = r[n];
    if (!i) return;
    (({ attach: Qa, detach: Qa, resize: Qa })[n] || Tk)(t, n, i),
      (r[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, r, i) {
    return $4(t, n, r, i);
  }
  isAttached(t) {
    const n = t && Ud(t);
    return !!(n && n.isConnected);
  }
}
function Uk(e) {
  return !$d() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? Pk
    : $k;
}
class un {
  constructor() {
    D(this, "x");
    D(this, "y");
    D(this, "active", !1);
    D(this, "options");
    D(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: n, y: r } = this.getProps(["x", "y"], t);
    return { x: n, y: r };
  }
  hasValue() {
    return wl(this.x) && wl(this.y);
  }
  getProps(t, n) {
    const r = this.$animations;
    if (!n || !r) return this;
    const i = {};
    return (
      t.forEach((s) => {
        i[s] = r[s] && r[s].active() ? r[s]._to : this[s];
      }),
      i
    );
  }
}
D(un, "defaults", {}), D(un, "defaultRoutes");
function Hk(e, t) {
  const n = e.options.ticks,
    r = Wk(e),
    i = Math.min(n.maxTicksLimit || r, r),
    s = n.major.enabled ? Kk(t) : [],
    o = s.length,
    l = s[0],
    a = s[o - 1],
    c = [];
  if (o > i) return Yk(t, c, s, o / i), c;
  const u = Vk(s, t, i);
  if (o > 0) {
    let d, h;
    const p = o > 1 ? Math.round((a - l) / (o - 1)) : null;
    for (so(t, c, u, te(p) ? 0 : l - p, l), d = 0, h = o - 1; d < h; d++)
      so(t, c, u, s[d], s[d + 1]);
    return so(t, c, u, a, te(p) ? t.length : a + p), c;
  }
  return so(t, c, u), c;
}
function Wk(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    r = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n;
  return Math.floor(Math.min(r, i));
}
function Vk(e, t, n) {
  const r = Xk(e),
    i = t.length / n;
  if (!r) return Math.max(i, 1);
  const s = ZS(r);
  for (let o = 0, l = s.length - 1; o < l; o++) {
    const a = s[o];
    if (a > i) return a;
  }
  return Math.max(i, 1);
}
function Kk(e) {
  const t = [];
  let n, r;
  for (n = 0, r = e.length; n < r; n++) e[n].major && t.push(n);
  return t;
}
function Yk(e, t, n, r) {
  let i = 0,
    s = n[0],
    o;
  for (r = Math.ceil(r), o = 0; o < e.length; o++)
    o === s && (t.push(e[o]), i++, (s = n[i * r]));
}
function so(e, t, n, r, i) {
  const s = H(r, 0),
    o = Math.min(H(i, e.length), e.length);
  let l = 0,
    a,
    c,
    u;
  for (
    n = Math.ceil(n), i && ((a = i - r), (n = a / Math.floor(a / n))), u = s;
    u < 0;

  )
    l++, (u = Math.round(s + l * n));
  for (c = Math.max(s, 0); c < o; c++)
    c === u && (t.push(e[c]), l++, (u = Math.round(s + l * n)));
}
function Xk(e) {
  const t = e.length;
  let n, r;
  if (t < 2) return !1;
  for (r = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== r) return !1;
  return r;
}
const qk = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  _p = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n),
  Sp = (e, t) => Math.min(t || e, e);
function kp(e, t) {
  const n = [],
    r = e.length / t,
    i = e.length;
  let s = 0;
  for (; s < i; s += r) n.push(e[Math.floor(s)]);
  return n;
}
function Qk(e, t, n) {
  const r = e.ticks.length,
    i = Math.min(t, r - 1),
    s = e._startPixel,
    o = e._endPixel,
    l = 1e-6;
  let a = e.getPixelForTick(i),
    c;
  if (
    !(
      n &&
      (r === 1
        ? (c = Math.max(a - s, o - a))
        : t === 0
        ? (c = (e.getPixelForTick(1) - a) / 2)
        : (c = (a - e.getPixelForTick(i - 1)) / 2),
      (a += i < t ? c : -c),
      a < s - l || a > o + l)
    )
  )
    return a;
}
function Gk(e, t) {
  V(e, (n) => {
    const r = n.gc,
      i = r.length / 2;
    let s;
    if (i > t) {
      for (s = 0; s < i; ++s) delete n.data[r[s]];
      r.splice(0, i);
    }
  });
}
function _i(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Cp(e, t) {
  if (!e.display) return 0;
  const n = Fe(e.font, t),
    r = St(e.padding);
  return (_e(e.text) ? e.text.length : 1) * n.lineHeight + r.height;
}
function Jk(e, t) {
  return ai(e, { scale: t, type: "scale" });
}
function Zk(e, t, n) {
  return ai(e, { tick: n, index: t, type: "tick" });
}
function eC(e, t, n) {
  let r = Td(e);
  return ((n && t !== "right") || (!n && t === "right")) && (r = qk(r)), r;
}
function tC(e, t, n, r) {
  const { top: i, left: s, bottom: o, right: l, chart: a } = e,
    { chartArea: c, scales: u } = a;
  let d = 0,
    h,
    p,
    g;
  const x = o - i,
    v = l - s;
  if (e.isHorizontal()) {
    if (((p = Ae(r, s, l)), U(n))) {
      const m = Object.keys(n)[0],
        y = n[m];
      g = u[m].getPixelForValue(y) + x - t;
    } else
      n === "center" ? (g = (c.bottom + c.top) / 2 + x - t) : (g = _p(e, n, t));
    h = l - s;
  } else {
    if (U(n)) {
      const m = Object.keys(n)[0],
        y = n[m];
      p = u[m].getPixelForValue(y) - v + t;
    } else
      n === "center" ? (p = (c.left + c.right) / 2 - v + t) : (p = _p(e, n, t));
    (g = Ae(r, o, i)), (d = n === "left" ? -ke : ke);
  }
  return { titleX: p, titleY: g, maxWidth: h, rotation: d };
}
class ci extends un {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: r, _suggestedMax: i } = this;
    return (
      (t = At(t, Number.POSITIVE_INFINITY)),
      (n = At(n, Number.NEGATIVE_INFINITY)),
      (r = At(r, Number.POSITIVE_INFINITY)),
      (i = At(i, Number.NEGATIVE_INFINITY)),
      { min: At(t, r), max: At(n, i), minDefined: _t(t), maxDefined: _t(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: r, minDefined: i, maxDefined: s } = this.getUserBounds(),
      o;
    if (i && s) return { min: n, max: r };
    const l = this.getMatchingVisibleMetas();
    for (let a = 0, c = l.length; a < c; ++a)
      (o = l[a].controller.getMinMax(this, t)),
        i || (n = Math.min(n, o.min)),
        s || (r = Math.max(r, o.max));
    return (
      (n = s && n > r ? r : n),
      (r = i && n > r ? n : r),
      { min: At(n, At(r, n)), max: At(r, At(n, r)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    ee(this.options.beforeUpdate, [this]);
  }
  update(t, n, r) {
    const { beginAtZero: i, grace: s, ticks: o } = this.options,
      l = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, r)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + r.left + r.right
        : this.height + r.top + r.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = E4(this, s, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const a = l < this.ticks.length;
    this._convertTicksToLabels(a ? kp(this.ticks, l) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = Hk(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      a && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      r;
    this.isHorizontal()
      ? ((n = this.left), (r = this.right))
      : ((n = this.top), (r = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = r),
      (this._reversePixels = t),
      (this._length = r - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    ee(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    ee(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    ee(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ee(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    ee(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let r, i, s;
    for (r = 0, i = t.length; r < i; r++)
      (s = t[r]), (s.label = ee(n.callback, [s.value, r, t], this));
  }
  afterTickToLabelConversion() {
    ee(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    ee(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      r = Sp(this.ticks.length, t.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      s = n.maxRotation;
    let o = i,
      l,
      a,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      i >= s ||
      r <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(),
      d = u.widest.width,
      h = u.highest.height,
      p = Ge(this.chart.width - d, 0, this.maxWidth);
    (l = t.offset ? this.maxWidth / r : p / (r - 1)),
      d + 6 > l &&
        ((l = p / (r - (t.offset ? 0.5 : 1))),
        (a =
          this.maxHeight -
          _i(t.grid) -
          n.padding -
          Cp(t.title, this.chart.options.font)),
        (c = Math.sqrt(d * d + h * h)),
        (o = n4(
          Math.min(
            Math.asin(Ge((u.highest.height + 6) / l, -1, 1)),
            Math.asin(Ge(a / c, -1, 1)) - Math.asin(Ge(h / c, -1, 1))
          )
        )),
        (o = Math.max(i, Math.min(s, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    ee(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    ee(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: r, title: i, grid: s },
      } = this,
      o = this._isVisible(),
      l = this.isHorizontal();
    if (o) {
      const a = Cp(i, n.options.font);
      if (
        (l
          ? ((t.width = this.maxWidth), (t.height = _i(s) + a))
          : ((t.height = this.maxHeight), (t.width = _i(s) + a)),
        r.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: d,
            highest: h,
          } = this._getLabelSizes(),
          p = r.padding * 2,
          g = tn(this.labelRotation),
          x = Math.cos(g),
          v = Math.sin(g);
        if (l) {
          const m = r.mirror ? 0 : v * d.width + x * h.height;
          t.height = Math.min(this.maxHeight, t.height + m + p);
        } else {
          const m = r.mirror ? 0 : x * d.width + v * h.height;
          t.width = Math.min(this.maxWidth, t.width + m + p);
        }
        this._calculatePadding(c, u, v, x);
      }
    }
    this._handleMargins(),
      l
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, r, i) {
    const {
        ticks: { align: s, padding: o },
        position: l,
      } = this.options,
      a = this.labelRotation !== 0,
      c = l !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        p = 0;
      a
        ? c
          ? ((h = i * t.width), (p = r * n.height))
          : ((h = r * t.height), (p = i * n.width))
        : s === "start"
        ? (p = n.width)
        : s === "end"
        ? (h = t.width)
        : s !== "inner" && ((h = t.width / 2), (p = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + o) * this.width) / (this.width - u),
          0
        )),
        (this.paddingRight = Math.max(
          ((p - d + o) * this.width) / (this.width - d),
          0
        ));
    } else {
      let u = n.height / 2,
        d = t.height / 2;
      s === "start"
        ? ((u = 0), (d = t.height))
        : s === "end" && ((u = n.height), (d = 0)),
        (this.paddingTop = u + o),
        (this.paddingBottom = d + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    ee(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, r;
    for (n = 0, r = t.length; n < r; n++)
      te(t[n].label) && (t.splice(n, 1), r--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let r = this.ticks;
      n < r.length && (r = kp(r, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            r,
            r.length,
            this.options.ticks.maxTicksLimit
          ));
    }
    return t;
  }
  _computeLabelSizes(t, n, r) {
    const { ctx: i, _longestTextCache: s } = this,
      o = [],
      l = [],
      a = Math.floor(n / Sp(n, r));
    let c = 0,
      u = 0,
      d,
      h,
      p,
      g,
      x,
      v,
      m,
      y,
      w,
      b,
      _;
    for (d = 0; d < n; d += a) {
      if (
        ((g = t[d].label),
        (x = this._resolveTickFontOptions(d)),
        (i.font = v = x.string),
        (m = s[v] = s[v] || { data: {}, gc: [] }),
        (y = x.lineHeight),
        (w = b = 0),
        !te(g) && !_e(g))
      )
        (w = ep(i, m.data, m.gc, w, g)), (b = y);
      else if (_e(g))
        for (h = 0, p = g.length; h < p; ++h)
          (_ = g[h]),
            !te(_) && !_e(_) && ((w = ep(i, m.data, m.gc, w, _)), (b += y));
      o.push(w), l.push(b), (c = Math.max(w, c)), (u = Math.max(b, u));
    }
    Gk(s, n);
    const S = o.indexOf(c),
      j = l.indexOf(u),
      k = (M) => ({ width: o[M] || 0, height: l[M] || 0 });
    return {
      first: k(0),
      last: k(n - 1),
      widest: k(S),
      highest: k(j),
      widths: o,
      heights: l,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return i4(this._alignToPixels ? Xn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const r = n[t];
      return r.$context || (r.$context = Zk(this.getContext(), t, r));
    }
    return this.$context || (this.$context = Jk(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = tn(this.labelRotation),
      r = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      s = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      l = s ? s.widest.width + o : 0,
      a = s ? s.highest.height + o : 0;
    return this.isHorizontal()
      ? a * r > l * i
        ? l / r
        : a / i
      : a * i < l * r
      ? a / r
      : l / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      r = this.chart,
      i = this.options,
      { grid: s, position: o, border: l } = i,
      a = s.offset,
      c = this.isHorizontal(),
      d = this.ticks.length + (a ? 1 : 0),
      h = _i(s),
      p = [],
      g = l.setContext(this.getContext()),
      x = g.display ? g.width : 0,
      v = x / 2,
      m = function (Y) {
        return Xn(r, Y, x);
      };
    let y, w, b, _, S, j, k, M, O, A, I, se;
    if (o === "top")
      (y = m(this.bottom)),
        (j = this.bottom - h),
        (M = y - v),
        (A = m(t.top) + v),
        (se = t.bottom);
    else if (o === "bottom")
      (y = m(this.top)),
        (A = t.top),
        (se = m(t.bottom) - v),
        (j = y + v),
        (M = this.top + h);
    else if (o === "left")
      (y = m(this.right)),
        (S = this.right - h),
        (k = y - v),
        (O = m(t.left) + v),
        (I = t.right);
    else if (o === "right")
      (y = m(this.left)),
        (O = t.left),
        (I = m(t.right) - v),
        (S = y + v),
        (k = this.left + h);
    else if (n === "x") {
      if (o === "center") y = m((t.top + t.bottom) / 2 + 0.5);
      else if (U(o)) {
        const Y = Object.keys(o)[0],
          Q = o[Y];
        y = m(this.chart.scales[Y].getPixelForValue(Q));
      }
      (A = t.top), (se = t.bottom), (j = y + v), (M = j + h);
    } else if (n === "y") {
      if (o === "center") y = m((t.left + t.right) / 2);
      else if (U(o)) {
        const Y = Object.keys(o)[0],
          Q = o[Y];
        y = m(this.chart.scales[Y].getPixelForValue(Q));
      }
      (S = y - v), (k = S - h), (O = t.left), (I = t.right);
    }
    const Re = H(i.ticks.maxTicksLimit, d),
      W = Math.max(1, Math.ceil(d / Re));
    for (w = 0; w < d; w += W) {
      const Y = this.getContext(w),
        Q = s.setContext(Y),
        P = l.setContext(Y),
        T = Q.lineWidth,
        z = Q.color,
        X = P.dash || [],
        G = P.dashOffset,
        Lt = Q.tickWidth,
        Be = Q.tickColor,
        Vt = Q.tickBorderDash || [],
        $e = Q.tickBorderDashOffset;
      (b = Qk(this, w, a)),
        b !== void 0 &&
          ((_ = Xn(r, b, T)),
          c ? (S = k = O = I = _) : (j = M = A = se = _),
          p.push({
            tx1: S,
            ty1: j,
            tx2: k,
            ty2: M,
            x1: O,
            y1: A,
            x2: I,
            y2: se,
            width: T,
            color: z,
            borderDash: X,
            borderDashOffset: G,
            tickWidth: Lt,
            tickColor: Be,
            tickBorderDash: Vt,
            tickBorderDashOffset: $e,
          }));
    }
    return (this._ticksLength = d), (this._borderValue = y), p;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      r = this.options,
      { position: i, ticks: s } = r,
      o = this.isHorizontal(),
      l = this.ticks,
      { align: a, crossAlign: c, padding: u, mirror: d } = s,
      h = _i(r.grid),
      p = h + u,
      g = d ? -u : p,
      x = -tn(this.labelRotation),
      v = [];
    let m,
      y,
      w,
      b,
      _,
      S,
      j,
      k,
      M,
      O,
      A,
      I,
      se = "middle";
    if (i === "top")
      (S = this.bottom - g), (j = this._getXAxisLabelAlignment());
    else if (i === "bottom")
      (S = this.top + g), (j = this._getXAxisLabelAlignment());
    else if (i === "left") {
      const W = this._getYAxisLabelAlignment(h);
      (j = W.textAlign), (_ = W.x);
    } else if (i === "right") {
      const W = this._getYAxisLabelAlignment(h);
      (j = W.textAlign), (_ = W.x);
    } else if (n === "x") {
      if (i === "center") S = (t.top + t.bottom) / 2 + p;
      else if (U(i)) {
        const W = Object.keys(i)[0],
          Y = i[W];
        S = this.chart.scales[W].getPixelForValue(Y) + p;
      }
      j = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center") _ = (t.left + t.right) / 2 - p;
      else if (U(i)) {
        const W = Object.keys(i)[0],
          Y = i[W];
        _ = this.chart.scales[W].getPixelForValue(Y);
      }
      j = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" &&
      (a === "start" ? (se = "top") : a === "end" && (se = "bottom"));
    const Re = this._getLabelSizes();
    for (m = 0, y = l.length; m < y; ++m) {
      (w = l[m]), (b = w.label);
      const W = s.setContext(this.getContext(m));
      (k = this.getPixelForTick(m) + s.labelOffset),
        (M = this._resolveTickFontOptions(m)),
        (O = M.lineHeight),
        (A = _e(b) ? b.length : 1);
      const Y = A / 2,
        Q = W.color,
        P = W.textStrokeColor,
        T = W.textStrokeWidth;
      let z = j;
      o
        ? ((_ = k),
          j === "inner" &&
            (m === y - 1
              ? (z = this.options.reverse ? "left" : "right")
              : m === 0
              ? (z = this.options.reverse ? "right" : "left")
              : (z = "center")),
          i === "top"
            ? c === "near" || x !== 0
              ? (I = -A * O + O / 2)
              : c === "center"
              ? (I = -Re.highest.height / 2 - Y * O + O)
              : (I = -Re.highest.height + O / 2)
            : c === "near" || x !== 0
            ? (I = O / 2)
            : c === "center"
            ? (I = Re.highest.height / 2 - Y * O)
            : (I = Re.highest.height - A * O),
          d && (I *= -1),
          x !== 0 && !W.showLabelBackdrop && (_ += (O / 2) * Math.sin(x)))
        : ((S = k), (I = ((1 - A) * O) / 2));
      let X;
      if (W.showLabelBackdrop) {
        const G = St(W.backdropPadding),
          Lt = Re.heights[m],
          Be = Re.widths[m];
        let Vt = I - G.top,
          $e = 0 - G.left;
        switch (se) {
          case "middle":
            Vt -= Lt / 2;
            break;
          case "bottom":
            Vt -= Lt;
            break;
        }
        switch (j) {
          case "center":
            $e -= Be / 2;
            break;
          case "right":
            $e -= Be;
            break;
          case "inner":
            m === y - 1 ? ($e -= Be) : m > 0 && ($e -= Be / 2);
            break;
        }
        X = {
          left: $e,
          top: Vt,
          width: Be + G.width,
          height: Lt + G.height,
          color: W.backdropColor,
        };
      }
      v.push({
        label: b,
        font: M,
        textOffset: I,
        options: {
          rotation: x,
          color: Q,
          strokeColor: P,
          strokeWidth: T,
          textAlign: z,
          textBaseline: se,
          translation: [_, S],
          backdrop: X,
        },
      });
    }
    return v;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-tn(this.labelRotation)) return t === "top" ? "left" : "right";
    let i = "center";
    return (
      n.align === "start"
        ? (i = "left")
        : n.align === "end"
        ? (i = "right")
        : n.align === "inner" && (i = "inner"),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: r, mirror: i, padding: s },
      } = this.options,
      o = this._getLabelSizes(),
      l = t + s,
      a = o.widest.width;
    let c, u;
    return (
      n === "left"
        ? i
          ? ((u = this.right + s),
            r === "near"
              ? (c = "left")
              : r === "center"
              ? ((c = "center"), (u += a / 2))
              : ((c = "right"), (u += a)))
          : ((u = this.right - l),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= a / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? i
          ? ((u = this.left + s),
            r === "near"
              ? (c = "right")
              : r === "center"
              ? ((c = "center"), (u -= a / 2))
              : ((c = "left"), (u -= a)))
          : ((u = this.left + l),
            r === "near"
              ? (c = "left")
              : r === "center"
              ? ((c = "center"), (u += a / 2))
              : ((c = "right"), (u = this.right)))
        : (c = "right"),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: r,
      top: i,
      width: s,
      height: o,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(r, i, s, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const i = this.ticks.findIndex((s) => s.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      r = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let s, o;
    const l = (a, c, u) => {
      !u.width ||
        !u.color ||
        (r.save(),
        (r.lineWidth = u.width),
        (r.strokeStyle = u.color),
        r.setLineDash(u.borderDash || []),
        (r.lineDashOffset = u.borderDashOffset),
        r.beginPath(),
        r.moveTo(a.x, a.y),
        r.lineTo(c.x, c.y),
        r.stroke(),
        r.restore());
    };
    if (n.display)
      for (s = 0, o = i.length; s < o; ++s) {
        const a = i[s];
        n.drawOnChartArea && l({ x: a.x1, y: a.y1 }, { x: a.x2, y: a.y2 }, a),
          n.drawTicks &&
            l(
              { x: a.tx1, y: a.ty1 },
              { x: a.tx2, y: a.ty2 },
              {
                color: a.tickColor,
                width: a.tickWidth,
                borderDash: a.tickBorderDash,
                borderDashOffset: a.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: r, grid: i },
      } = this,
      s = r.setContext(this.getContext()),
      o = r.display ? s.width : 0;
    if (!o) return;
    const l = i.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let c, u, d, h;
    this.isHorizontal()
      ? ((c = Xn(t, this.left, o) - o / 2),
        (u = Xn(t, this.right, l) + l / 2),
        (d = h = a))
      : ((d = Xn(t, this.top, o) - o / 2),
        (h = Xn(t, this.bottom, l) + l / 2),
        (c = u = a)),
      n.save(),
      (n.lineWidth = s.width),
      (n.strokeStyle = s.color),
      n.beginPath(),
      n.moveTo(c, d),
      n.lineTo(u, h),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const r = this.ctx,
      i = this._computeLabelArea();
    i && Dd(r, i);
    const s = this.getLabelItems(t);
    for (const o of s) {
      const l = o.options,
        a = o.font,
        c = o.label,
        u = o.textOffset;
      xs(r, c, 0, u, a, l);
    }
    i && Ad(r);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: r, reverse: i },
    } = this;
    if (!r.display) return;
    const s = Fe(r.font),
      o = St(r.padding),
      l = r.align;
    let a = s.lineHeight / 2;
    n === "bottom" || n === "center" || U(n)
      ? ((a += o.bottom),
        _e(r.text) && (a += s.lineHeight * (r.text.length - 1)))
      : (a += o.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: d,
      rotation: h,
    } = tC(this, a, n, l);
    xs(t, r.text, 0, 0, s, {
      color: r.color,
      maxWidth: d,
      rotation: h,
      textAlign: eC(l, n, i),
      textBaseline: "middle",
      translation: [c, u],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      r = H(t.grid && t.grid.z, -1),
      i = H(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ci.prototype.draw
      ? [
          {
            z: n,
            draw: (s) => {
              this.draw(s);
            },
          },
        ]
      : [
          {
            z: r,
            draw: (s) => {
              this.drawBackground(), this.drawGrid(s), this.drawTitle();
            },
          },
          {
            z: i,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (s) => {
              this.drawLabels(s);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      r = this.axis + "AxisID",
      i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const l = n[s];
      l[r] === this.id && (!t || l.type === t) && i.push(l);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return Fe(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class oo {
  constructor(t, n, r) {
    (this.type = t),
      (this.scope = n),
      (this.override = r),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let r;
    iC(n) && (r = this.register(n));
    const i = this.items,
      s = t.id,
      o = this.scope + "." + s;
    if (!s) throw new Error("class does not have id: " + t);
    return (
      s in i ||
        ((i[s] = t),
        nC(t, o, r),
        this.override && fe.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      r = t.id,
      i = this.scope;
    r in n && delete n[r],
      i && r in fe[i] && (delete fe[i][r], this.override && delete xr[r]);
  }
}
function nC(e, t, n) {
  const r = gs(Object.create(null), [
    n ? fe.get(n) : {},
    fe.get(t),
    e.defaults,
  ]);
  fe.set(t, r),
    e.defaultRoutes && rC(t, e.defaultRoutes),
    e.descriptors && fe.describe(t, e.descriptors);
}
function rC(e, t) {
  Object.keys(t).forEach((n) => {
    const r = n.split("."),
      i = r.pop(),
      s = [e].concat(r).join("."),
      o = t[n].split("."),
      l = o.pop(),
      a = o.join(".");
    fe.route(s, i, a, l);
  });
}
function iC(e) {
  return "id" in e && "defaults" in e;
}
class sC {
  constructor() {
    (this.controllers = new oo(Vr, "datasets", !0)),
      (this.elements = new oo(un, "elements")),
      (this.plugins = new oo(Object, "plugins")),
      (this.scales = new oo(ci, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, r) {
    [...n].forEach((i) => {
      const s = r || this._getRegistryForType(i);
      r || s.isForType(i) || (s === this.plugins && i.id)
        ? this._exec(t, s, i)
        : V(i, (o) => {
            const l = r || this._getRegistryForType(o);
            this._exec(t, l, o);
          });
    });
  }
  _exec(t, n, r) {
    const i = Od(t);
    ee(r["before" + i], [], r), n[t](r), ee(r["after" + i], [], r);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const r = this._typedRegistries[n];
      if (r.isForType(t)) return r;
    }
    return this.plugins;
  }
  _get(t, n, r) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + r + ".");
    return i;
  }
}
var It = new sC();
class oC {
  constructor() {
    this._init = [];
  }
  notify(t, n, r, i) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const s = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      o = this._notify(s, t, n, r);
    return (
      n === "afterDestroy" &&
        (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")),
      o
    );
  }
  _notify(t, n, r, i) {
    i = i || {};
    for (const s of t) {
      const o = s.plugin,
        l = o[r],
        a = [n, i, s.options];
      if (ee(l, a, o) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    te(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const r = t && t.config,
      i = H(r.options && r.options.plugins, {}),
      s = lC(r);
    return i === !1 && !n ? [] : cC(t, s, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      r = this._cache,
      i = (s, o) =>
        s.filter((l) => !o.some((a) => l.plugin.id === a.plugin.id));
    this._notify(i(n, r), t, "stop"), this._notify(i(r, n), t, "start");
  }
}
function lC(e) {
  const t = {},
    n = [],
    r = Object.keys(It.plugins.items);
  for (let s = 0; s < r.length; s++) n.push(It.getPlugin(r[s]));
  const i = e.plugins || [];
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function aC(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function cC(e, { plugins: t, localIds: n }, r, i) {
  const s = [],
    o = e.getContext();
  for (const l of t) {
    const a = l.id,
      c = aC(r[a], i);
    c !== null &&
      s.push({
        plugin: l,
        options: uC(e.config, { plugin: l, local: n[a] }, c, o),
      });
  }
  return s;
}
function uC(e, { plugin: t, local: n }, r, i) {
  const s = e.pluginScopeKeys(t),
    o = e.getOptionScopes(r, s);
  return (
    n && t.defaults && o.push(t.defaults),
    e.createResolver(o, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function gu(e, t) {
  const n = fe.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function dC(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function fC(e, t) {
  return e === t ? "_index_" : "_value_";
}
function Ep(e) {
  if (e === "x" || e === "y" || e === "r") return e;
}
function hC(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function yu(e, ...t) {
  if (Ep(e)) return e;
  for (const n of t) {
    const r =
      n.axis || hC(n.position) || (e.length > 1 && Ep(e[0].toLowerCase()));
    if (r) return r;
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  );
}
function jp(e, t, n) {
  if (n[t + "AxisID"] === e) return { axis: t };
}
function pC(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter((r) => r.xAxisID === e || r.yAxisID === e);
    if (n.length) return jp(e, "x", n[0]) || jp(e, "y", n[0]);
  }
  return {};
}
function mC(e, t) {
  const n = xr[e.type] || { scales: {} },
    r = t.scales || {},
    i = gu(e.type, t),
    s = Object.create(null);
  return (
    Object.keys(r).forEach((o) => {
      const l = r[o];
      if (!U(l))
        return console.error(`Invalid scale configuration for scale: ${o}`);
      if (l._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${o}`
        );
      const a = yu(o, l, pC(o, e), fe.scales[l.type]),
        c = fC(a, i),
        u = n.scales || {};
      s[o] = Wi(Object.create(null), [{ axis: a }, l, u[a], u[c]]);
    }),
    e.data.datasets.forEach((o) => {
      const l = o.type || e.type,
        a = o.indexAxis || gu(l, t),
        u = (xr[l] || {}).scales || {};
      Object.keys(u).forEach((d) => {
        const h = dC(d, a),
          p = o[h + "AxisID"] || h;
        (s[p] = s[p] || Object.create(null)),
          Wi(s[p], [{ axis: h }, r[p], u[d]]);
      });
    }),
    Object.keys(s).forEach((o) => {
      const l = s[o];
      Wi(l, [fe.scales[l.type], fe.scale]);
    }),
    s
  );
}
function Q1(e) {
  const t = e.options || (e.options = {});
  (t.plugins = H(t.plugins, {})), (t.scales = mC(e, t));
}
function G1(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function gC(e) {
  return (e = e || {}), (e.data = G1(e.data)), Q1(e), e;
}
const Np = new Map(),
  J1 = new Set();
function lo(e, t) {
  let n = Np.get(e);
  return n || ((n = t()), Np.set(e, n), J1.add(n)), n;
}
const Si = (e, t, n) => {
  const r = yr(t, n);
  r !== void 0 && e.add(r);
};
class yC {
  constructor(t) {
    (this._config = gC(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = G1(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Q1(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return lo(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return lo(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return lo(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      r = this.type;
    return lo(`${r}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const r = this._scopeCache;
    let i = r.get(t);
    return (!i || n) && ((i = new Map()), r.set(t, i)), i;
  }
  getOptionScopes(t, n, r) {
    const { options: i, type: s } = this,
      o = this._cachedScopes(t, r),
      l = o.get(n);
    if (l) return l;
    const a = new Set();
    n.forEach((u) => {
      t && (a.add(t), u.forEach((d) => Si(a, t, d))),
        u.forEach((d) => Si(a, i, d)),
        u.forEach((d) => Si(a, xr[s] || {}, d)),
        u.forEach((d) => Si(a, fe, d)),
        u.forEach((d) => Si(a, pu, d));
    });
    const c = Array.from(a);
    return (
      c.length === 0 && c.push(Object.create(null)), J1.has(n) && o.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, xr[n] || {}, fe.datasets[n] || {}, { type: n }, fe, pu];
  }
  resolveNamedOptions(t, n, r, i = [""]) {
    const s = { $shared: !0 },
      { resolver: o, subPrefixes: l } = Pp(this._resolverCache, t, i);
    let a = o;
    if (vC(o, n)) {
      (s.$shared = !1), (r = Bn(r) ? r() : r);
      const c = this.createResolver(t, r, l);
      a = ei(o, r, c);
    }
    for (const c of n) s[c] = a[c];
    return s;
  }
  createResolver(t, n, r = [""], i) {
    const { resolver: s } = Pp(this._resolverCache, t, r);
    return U(n) ? ei(s, n, void 0, i) : s;
  }
}
function Pp(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  const i = n.join();
  let s = r.get(i);
  return (
    s ||
      ((s = {
        resolver: Fd(t, n),
        subPrefixes: n.filter((l) => !l.toLowerCase().includes("hover")),
      }),
      r.set(i, s)),
    s
  );
}
const xC = (e) => U(e) && Object.getOwnPropertyNames(e).some((t) => Bn(e[t]));
function vC(e, t) {
  const { isScriptable: n, isIndexable: r } = A1(e);
  for (const i of t) {
    const s = n(i),
      o = r(i),
      l = (o || s) && e[i];
    if ((s && (Bn(l) || xC(l))) || (o && _e(l))) return !0;
  }
  return !1;
}
var wC = "4.4.5";
const bC = ["top", "bottom", "left", "right", "chartArea"];
function Mp(e, t) {
  return e === "top" || e === "bottom" || (bC.indexOf(e) === -1 && t === "x");
}
function Op(e, t) {
  return function (n, r) {
    return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e];
  };
}
function Rp(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), ee(n && n.onComplete, [e], t);
}
function _C(e) {
  const t = e.chart,
    n = t.options.animation;
  ee(n && n.onProgress, [e], t);
}
function Z1(e) {
  return (
    $d() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Ro = {},
  Tp = (e) => {
    const t = Z1(e);
    return Object.values(Ro)
      .filter((n) => n.canvas === t)
      .pop();
  };
function SC(e, t, n) {
  const r = Object.keys(e);
  for (const i of r) {
    const s = +i;
    if (s >= t) {
      const o = e[i];
      delete e[i], (n > 0 || s > t) && (e[s + n] = o);
    }
  }
}
function kC(e, t, n, r) {
  return !n || e.type === "mouseout" ? null : r ? t : e;
}
function ao(e, t, n) {
  return e.options.clip ? e[n] : t[n];
}
function CC(e, t) {
  const { xScale: n, yScale: r } = e;
  return n && r
    ? {
        left: ao(n, t, "left"),
        right: ao(n, t, "right"),
        top: ao(r, t, "top"),
        bottom: ao(r, t, "bottom"),
      }
    : t;
}
var mn;
let ra =
  ((mn = class {
    static register(...t) {
      It.add(...t), Lp();
    }
    static unregister(...t) {
      It.remove(...t), Lp();
    }
    constructor(t, n) {
      const r = (this.config = new yC(n)),
        i = Z1(t),
        s = Tp(i);
      if (s)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            s.id +
            "' must be destroyed before the canvas with ID '" +
            s.canvas.id +
            "' can be reused."
        );
      const o = r.createResolver(r.chartOptionScopes(), this.getContext());
      (this.platform = new (r.platform || Uk(i))()),
        this.platform.updateConfig(r);
      const l = this.platform.acquireContext(i, o.aspectRatio),
        a = l && l.canvas,
        c = a && a.height,
        u = a && a.width;
      if (
        ((this.id = VS()),
        (this.ctx = l),
        (this.canvas = a),
        (this.width = u),
        (this.height = c),
        (this._options = o),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new oC()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = a4((d) => this.update(d), o.resizeDelay || 0)),
        (this._dataChanges = []),
        (Ro[this.id] = this),
        !l || !a)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        );
        return;
      }
      Xt.listen(this, "complete", Rp),
        Xt.listen(this, "progress", _C),
        this._initialize(),
        this.attached && this.update();
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: r,
        height: i,
        _aspectRatio: s,
      } = this;
      return te(t) ? (n && s ? s : i ? r / i : null) : t;
    }
    get data() {
      return this.config.data;
    }
    set data(t) {
      this.config.data = t;
    }
    get options() {
      return this._options;
    }
    set options(t) {
      this.config.options = t;
    }
    get registry() {
      return It;
    }
    _initialize() {
      return (
        this.notifyPlugins("beforeInit"),
        this.options.responsive
          ? this.resize()
          : sp(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
      );
    }
    clear() {
      return tp(this.canvas, this.ctx), this;
    }
    stop() {
      return Xt.stop(this), this;
    }
    resize(t, n) {
      Xt.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n);
    }
    _resize(t, n) {
      const r = this.options,
        i = this.canvas,
        s = r.maintainAspectRatio && this.aspectRatio,
        o = this.platform.getMaximumSize(i, t, n, s),
        l = r.devicePixelRatio || this.platform.getDevicePixelRatio(),
        a = this.width ? "resize" : "attach";
      (this.width = o.width),
        (this.height = o.height),
        (this._aspectRatio = this.aspectRatio),
        sp(this, l, !0) &&
          (this.notifyPlugins("resize", { size: o }),
          ee(r.onResize, [this, o], this),
          this.attached && this._doResize(a) && this.render());
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {};
      V(n, (r, i) => {
        r.id = i;
      });
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        r = this.scales,
        i = Object.keys(r).reduce((o, l) => ((o[l] = !1), o), {});
      let s = [];
      n &&
        (s = s.concat(
          Object.keys(n).map((o) => {
            const l = n[o],
              a = yu(o, l),
              c = a === "r",
              u = a === "x";
            return {
              options: l,
              dposition: c ? "chartArea" : u ? "bottom" : "left",
              dtype: c ? "radialLinear" : u ? "category" : "linear",
            };
          })
        )),
        V(s, (o) => {
          const l = o.options,
            a = l.id,
            c = yu(a, l),
            u = H(l.type, o.dtype);
          (l.position === void 0 || Mp(l.position, c) !== Mp(o.dposition)) &&
            (l.position = o.dposition),
            (i[a] = !0);
          let d = null;
          if (a in r && r[a].type === u) d = r[a];
          else {
            const h = It.getScale(u);
            (d = new h({ id: a, type: u, ctx: this.ctx, chart: this })),
              (r[d.id] = d);
          }
          d.init(l, t);
        }),
        V(i, (o, l) => {
          o || delete r[l];
        }),
        V(r, (o) => {
          xt.configure(this, o, o.options), xt.addBox(this, o);
        });
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        r = t.length;
      if ((t.sort((i, s) => i.index - s.index), r > n)) {
        for (let i = n; i < r; ++i) this._destroyDatasetMeta(i);
        t.splice(n, r - n);
      }
      this._sortedMetasets = t.slice(0).sort(Op("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n },
      } = this;
      t.length > n.length && delete this._stacks,
        t.forEach((r, i) => {
          n.filter((s) => s === r._dataset).length === 0 &&
            this._destroyDatasetMeta(i);
        });
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets;
      let r, i;
      for (
        this._removeUnreferencedMetasets(), r = 0, i = n.length;
        r < i;
        r++
      ) {
        const s = n[r];
        let o = this.getDatasetMeta(r);
        const l = s.type || this.config.type;
        if (
          (o.type &&
            o.type !== l &&
            (this._destroyDatasetMeta(r), (o = this.getDatasetMeta(r))),
          (o.type = l),
          (o.indexAxis = s.indexAxis || gu(l, this.options)),
          (o.order = s.order || 0),
          (o.index = r),
          (o.label = "" + s.label),
          (o.visible = this.isDatasetVisible(r)),
          o.controller)
        )
          o.controller.updateIndex(r), o.controller.linkScales();
        else {
          const a = It.getController(l),
            { datasetElementType: c, dataElementType: u } = fe.datasets[l];
          Object.assign(a, {
            dataElementType: It.getElement(u),
            datasetElementType: c && It.getElement(c),
          }),
            (o.controller = new a(this, r)),
            t.push(o.controller);
        }
      }
      return this._updateMetasets(), t;
    }
    _resetElements() {
      V(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset();
        },
        this
      );
    }
    reset() {
      this._resetElements(), this.notifyPlugins("reset");
    }
    update(t) {
      const n = this.config;
      n.update();
      const r = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        i = (this._animationsDisabled = !r.animation);
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
      )
        return;
      const s = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let o = 0;
      for (let c = 0, u = this.data.datasets.length; c < u; c++) {
        const { controller: d } = this.getDatasetMeta(c),
          h = !i && s.indexOf(d) === -1;
        d.buildOrUpdateElements(h), (o = Math.max(+d.getMaxOverflow(), o));
      }
      (o = this._minPadding = r.layout.autoPadding ? o : 0),
        this._updateLayout(o),
        i ||
          V(s, (c) => {
            c.reset();
          }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", { mode: t }),
        this._layers.sort(Op("z", "_idx"));
      const { _active: l, _lastEvent: a } = this;
      a
        ? this._eventHandler(a, !0)
        : l.length && this._updateHoverStyles(l, l, !0),
        this.render();
    }
    _updateScales() {
      V(this.scales, (t) => {
        xt.removeBox(this, t);
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        r = new Set(t.events);
      (!Vh(n, r) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents());
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || [];
      for (const { method: r, start: i, count: s } of n) {
        const o = r === "_removeElements" ? -s : s;
        SC(t, i, o);
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges;
      if (!t || !t.length) return;
      this._dataChanges = [];
      const n = this.data.datasets.length,
        r = (s) =>
          new Set(
            t
              .filter((o) => o[0] === s)
              .map((o, l) => l + "," + o.splice(1).join(","))
          ),
        i = r(0);
      for (let s = 1; s < n; s++) if (!Vh(i, r(s))) return;
      return Array.from(i)
        .map((s) => s.split(","))
        .map((s) => ({ method: s[1], start: +s[2], count: +s[3] }));
    }
    _updateLayout(t) {
      if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
      xt.update(this, this.width, this.height, t);
      const n = this.chartArea,
        r = n.width <= 0 || n.height <= 0;
      (this._layers = []),
        V(
          this.boxes,
          (i) => {
            (r && i.position === "chartArea") ||
              (i.configure && i.configure(), this._layers.push(...i._layers()));
          },
          this
        ),
        this._layers.forEach((i, s) => {
          i._idx = s;
        }),
        this.notifyPlugins("afterLayout");
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins("beforeDatasetsUpdate", {
          mode: t,
          cancelable: !0,
        }) !== !1
      ) {
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this.getDatasetMeta(n).controller.configure();
        for (let n = 0, r = this.data.datasets.length; n < r; ++n)
          this._updateDataset(n, Bn(t) ? t({ datasetIndex: n }) : t);
        this.notifyPlugins("afterDatasetsUpdate", { mode: t });
      }
    }
    _updateDataset(t, n) {
      const r = this.getDatasetMeta(t),
        i = { meta: r, index: t, mode: n, cancelable: !0 };
      this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
        (r.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins("afterDatasetUpdate", i));
    }
    render() {
      this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
        (Xt.has(this)
          ? this.attached && !Xt.running(this) && Xt.start(this)
          : (this.draw(), Rp({ chart: this })));
    }
    draw() {
      let t;
      if (this._resizeBeforeDraw) {
        const { width: r, height: i } = this._resizeBeforeDraw;
        (this._resizeBeforeDraw = null), this._resize(r, i);
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
      )
        return;
      const n = this._layers;
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        r = [];
      let i, s;
      for (i = 0, s = n.length; i < s; ++i) {
        const o = n[i];
        (!t || o.visible) && r.push(o);
      }
      return r;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
        return;
      const t = this.getSortedVisibleDatasetMetas();
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(t) {
      const n = this.ctx,
        r = t._clip,
        i = !r.disabled,
        s = CC(t, this.chartArea),
        o = { meta: t, index: t.index, cancelable: !0 };
      this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
        (i &&
          Dd(n, {
            left: r.left === !1 ? 0 : s.left - r.left,
            right: r.right === !1 ? this.width : s.right + r.right,
            top: r.top === !1 ? 0 : s.top - r.top,
            bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom,
          }),
        t.controller.draw(),
        i && Ad(n),
        (o.cancelable = !1),
        this.notifyPlugins("afterDatasetDraw", o));
    }
    isPointInArea(t) {
      return L1(t, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(t, n, r, i) {
      const s = bk.modes[n];
      return typeof s == "function" ? s(this, t, r, i) : [];
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        r = this._metasets;
      let i = r.filter((s) => s && s._dataset === n).pop();
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1,
          }),
          r.push(i)),
        i
      );
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = ai(null, { chart: this, type: "chart" }))
      );
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t];
      if (!n) return !1;
      const r = this.getDatasetMeta(t);
      return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden;
    }
    setDatasetVisibility(t, n) {
      const r = this.getDatasetMeta(t);
      r.hidden = !n;
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t];
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t];
    }
    _updateVisibility(t, n, r) {
      const i = r ? "show" : "hide",
        s = this.getDatasetMeta(t),
        o = s.controller._resolveAnimations(void 0, i);
      ys(n)
        ? ((s.data[n].hidden = !r), this.update())
        : (this.setDatasetVisibility(t, r),
          o.update(s, { visible: r }),
          this.update((l) => (l.datasetIndex === t ? i : void 0)));
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1);
    }
    show(t, n) {
      this._updateVisibility(t, n, !0);
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t];
      n && n.controller && n.controller._destroy(), delete this._metasets[t];
    }
    _stop() {
      let t, n;
      for (
        this.stop(), Xt.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t);
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas: t, ctx: n } = this;
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          tp(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete Ro[this.id],
        this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t);
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0);
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        r = (s, o) => {
          n.addEventListener(this, s, o), (t[s] = o);
        },
        i = (s, o, l) => {
          (s.offsetX = o), (s.offsetY = l), this._eventHandler(s);
        };
      V(this.options.events, (s) => r(s, i));
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {});
      const t = this._responsiveListeners,
        n = this.platform,
        r = (a, c) => {
          n.addEventListener(this, a, c), (t[a] = c);
        },
        i = (a, c) => {
          t[a] && (n.removeEventListener(this, a, c), delete t[a]);
        },
        s = (a, c) => {
          this.canvas && this.resize(a, c);
        };
      let o;
      const l = () => {
        i("attach", l),
          (this.attached = !0),
          this.resize(),
          r("resize", s),
          r("detach", o);
      };
      (o = () => {
        (this.attached = !1),
          i("resize", s),
          this._stop(),
          this._resize(0, 0),
          r("attach", l);
      }),
        n.isAttached(this.canvas) ? l() : o();
    }
    unbindEvents() {
      V(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
        (this._listeners = {}),
        V(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t);
        }),
        (this._responsiveListeners = void 0);
    }
    updateHoverStyle(t, n, r) {
      const i = r ? "set" : "remove";
      let s, o, l, a;
      for (
        n === "dataset" &&
          ((s = this.getDatasetMeta(t[0].datasetIndex)),
          s.controller["_" + i + "DatasetHoverStyle"]()),
          l = 0,
          a = t.length;
        l < a;
        ++l
      ) {
        o = t[l];
        const c = o && this.getDatasetMeta(o.datasetIndex).controller;
        c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(t) {
      const n = this._active || [],
        r = t.map(({ datasetIndex: s, index: o }) => {
          const l = this.getDatasetMeta(s);
          if (!l) throw new Error("No dataset found at index " + s);
          return { datasetIndex: s, element: l.data[o], index: o };
        });
      !yl(r, n) &&
        ((this._active = r),
        (this._lastEvent = null),
        this._updateHoverStyles(r, n));
    }
    notifyPlugins(t, n, r) {
      return this._plugins.notify(this, t, n, r);
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
    }
    _updateHoverStyles(t, n, r) {
      const i = this.options.hover,
        s = (a, c) =>
          a.filter(
            (u) =>
              !c.some(
                (d) => u.datasetIndex === d.datasetIndex && u.index === d.index
              )
          ),
        o = s(n, t),
        l = r ? t : s(t, n);
      o.length && this.updateHoverStyle(o, i.mode, !1),
        l.length && i.mode && this.updateHoverStyle(l, i.mode, !0);
    }
    _eventHandler(t, n) {
      const r = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t),
        },
        i = (o) =>
          (o.options.events || this.options.events).includes(t.native.type);
      if (this.notifyPlugins("beforeEvent", r, i) === !1) return;
      const s = this._handleEvent(t, n, r.inChartArea);
      return (
        (r.cancelable = !1),
        this.notifyPlugins("afterEvent", r, i),
        (s || r.changed) && this.render(),
        this
      );
    }
    _handleEvent(t, n, r) {
      const { _active: i = [], options: s } = this,
        o = n,
        l = this._getActiveElements(t, i, r, o),
        a = GS(t),
        c = kC(t, this._lastEvent, r, a);
      r &&
        ((this._lastEvent = null),
        ee(s.onHover, [t, l, this], this),
        a && ee(s.onClick, [t, l, this], this));
      const u = !yl(l, i);
      return (
        (u || n) && ((this._active = l), this._updateHoverStyles(l, i, n)),
        (this._lastEvent = c),
        u
      );
    }
    _getActiveElements(t, n, r, i) {
      if (t.type === "mouseout") return [];
      if (!r) return n;
      const s = this.options.hover;
      return this.getElementsAtEventForMode(t, s.mode, s, i);
    }
  }),
  D(mn, "defaults", fe),
  D(mn, "instances", Ro),
  D(mn, "overrides", xr),
  D(mn, "registry", It),
  D(mn, "version", wC),
  D(mn, "getChart", Tp),
  mn);
function Lp() {
  return V(ra.instances, (e) => e._plugins.invalidate());
}
function EC(e, t, n) {
  const {
    startAngle: r,
    pixelMargin: i,
    x: s,
    y: o,
    outerRadius: l,
    innerRadius: a,
  } = t;
  let c = i / l;
  e.beginPath(),
    e.arc(s, o, l, r - c, n + c),
    a > i
      ? ((c = i / a), e.arc(s, o, a, n + c, r - c, !0))
      : e.arc(s, o, i, n + ke, r - ke),
    e.closePath(),
    e.clip();
}
function jC(e) {
  return zd(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function NC(e, t, n, r) {
  const i = jC(e.options.borderRadius),
    s = (n - t) / 2,
    o = Math.min(s, (r * t) / 2),
    l = (a) => {
      const c = ((n - Math.min(s, a)) * r) / 2;
      return Ge(a, 0, Math.min(s, c));
    };
  return {
    outerStart: l(i.outerStart),
    outerEnd: l(i.outerEnd),
    innerStart: Ge(i.innerStart, 0, o),
    innerEnd: Ge(i.innerEnd, 0, o),
  };
}
function kr(e, t, n, r) {
  return { x: n + e * Math.cos(t), y: r + e * Math.sin(t) };
}
function Cl(e, t, n, r, i, s) {
  const { x: o, y: l, startAngle: a, pixelMargin: c, innerRadius: u } = t,
    d = Math.max(t.outerRadius + r + n - c, 0),
    h = u > 0 ? u + r + n + c : 0;
  let p = 0;
  const g = i - a;
  if (r) {
    const W = u > 0 ? u - r : 0,
      Y = d > 0 ? d - r : 0,
      Q = (W + Y) / 2,
      P = Q !== 0 ? (g * Q) / (Q + r) : g;
    p = (g - P) / 2;
  }
  const x = Math.max(0.001, g * d - n / ye) / d,
    v = (g - x) / 2,
    m = a + v + p,
    y = i - v - p,
    {
      outerStart: w,
      outerEnd: b,
      innerStart: _,
      innerEnd: S,
    } = NC(t, h, d, y - m),
    j = d - w,
    k = d - b,
    M = m + w / j,
    O = y - b / k,
    A = h + _,
    I = h + S,
    se = m + _ / A,
    Re = y - S / I;
  if ((e.beginPath(), s)) {
    const W = (M + O) / 2;
    if ((e.arc(o, l, d, M, W), e.arc(o, l, d, W, O), b > 0)) {
      const T = kr(k, O, o, l);
      e.arc(T.x, T.y, b, O, y + ke);
    }
    const Y = kr(I, y, o, l);
    if ((e.lineTo(Y.x, Y.y), S > 0)) {
      const T = kr(I, Re, o, l);
      e.arc(T.x, T.y, S, y + ke, Re + Math.PI);
    }
    const Q = (y - S / h + (m + _ / h)) / 2;
    if (
      (e.arc(o, l, h, y - S / h, Q, !0),
      e.arc(o, l, h, Q, m + _ / h, !0),
      _ > 0)
    ) {
      const T = kr(A, se, o, l);
      e.arc(T.x, T.y, _, se + Math.PI, m - ke);
    }
    const P = kr(j, m, o, l);
    if ((e.lineTo(P.x, P.y), w > 0)) {
      const T = kr(j, M, o, l);
      e.arc(T.x, T.y, w, m - ke, M);
    }
  } else {
    e.moveTo(o, l);
    const W = Math.cos(M) * d + o,
      Y = Math.sin(M) * d + l;
    e.lineTo(W, Y);
    const Q = Math.cos(O) * d + o,
      P = Math.sin(O) * d + l;
    e.lineTo(Q, P);
  }
  e.closePath();
}
function PC(e, t, n, r, i) {
  const { fullCircles: s, startAngle: o, circumference: l } = t;
  let a = t.endAngle;
  if (s) {
    Cl(e, t, n, r, a, i);
    for (let c = 0; c < s; ++c) e.fill();
    isNaN(l) || (a = o + (l % ge || ge));
  }
  return Cl(e, t, n, r, a, i), e.fill(), a;
}
function MC(e, t, n, r, i) {
  const { fullCircles: s, startAngle: o, circumference: l, options: a } = t,
    {
      borderWidth: c,
      borderJoinStyle: u,
      borderDash: d,
      borderDashOffset: h,
    } = a,
    p = a.borderAlign === "inner";
  if (!c) return;
  e.setLineDash(d || []),
    (e.lineDashOffset = h),
    p
      ? ((e.lineWidth = c * 2), (e.lineJoin = u || "round"))
      : ((e.lineWidth = c), (e.lineJoin = u || "bevel"));
  let g = t.endAngle;
  if (s) {
    Cl(e, t, n, r, g, i);
    for (let x = 0; x < s; ++x) e.stroke();
    isNaN(l) || (g = o + (l % ge || ge));
  }
  p && EC(e, t, g), s || (Cl(e, t, n, r, g, i), e.stroke());
}
class Ri extends un {
  constructor(n) {
    super();
    D(this, "circumference");
    D(this, "endAngle");
    D(this, "fullCircles");
    D(this, "innerRadius");
    D(this, "outerRadius");
    D(this, "pixelMargin");
    D(this, "startAngle");
    (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      n && Object.assign(this, n);
  }
  inRange(n, r, i) {
    const s = this.getProps(["x", "y"], i),
      { angle: o, distance: l } = C1(s, { x: n, y: r }),
      {
        startAngle: a,
        endAngle: c,
        innerRadius: u,
        outerRadius: d,
        circumference: h,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        i
      ),
      p = (this.options.spacing + this.options.borderWidth) / 2,
      g = H(h, c - a),
      x = bl(o, a, c) && a !== c,
      v = g >= ge || x,
      m = ir(l, u + p, d + p);
    return v && m;
  }
  getCenterPoint(n) {
    const {
        x: r,
        y: i,
        startAngle: s,
        endAngle: o,
        innerRadius: l,
        outerRadius: a,
      } = this.getProps(
        ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"],
        n
      ),
      { offset: c, spacing: u } = this.options,
      d = (s + o) / 2,
      h = (l + a + u + c) / 2;
    return { x: r + Math.cos(d) * h, y: i + Math.sin(d) * h };
  }
  tooltipPosition(n) {
    return this.getCenterPoint(n);
  }
  draw(n) {
    const { options: r, circumference: i } = this,
      s = (r.offset || 0) / 4,
      o = (r.spacing || 0) / 2,
      l = r.circular;
    if (
      ((this.pixelMargin = r.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = i > ge ? Math.floor(i / ge) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    n.save();
    const a = (this.startAngle + this.endAngle) / 2;
    n.translate(Math.cos(a) * s, Math.sin(a) * s);
    const c = 1 - Math.sin(Math.min(ye, i || 0)),
      u = s * c;
    (n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      PC(n, this, u, o, l),
      MC(n, this, u, o, l),
      n.restore();
  }
}
D(Ri, "id", "arc"),
  D(Ri, "defaults", {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
  }),
  D(Ri, "defaultRoutes", { backgroundColor: "backgroundColor" }),
  D(Ri, "descriptors", {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash",
  });
function ey(e, t) {
  const {
    x: n,
    y: r,
    base: i,
    width: s,
    height: o,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let l, a, c, u, d;
  return (
    e.horizontal
      ? ((d = o / 2),
        (l = Math.min(n, i)),
        (a = Math.max(n, i)),
        (c = r - d),
        (u = r + d))
      : ((d = s / 2),
        (l = n - d),
        (a = n + d),
        (c = Math.min(r, i)),
        (u = Math.max(r, i))),
    { left: l, top: c, right: a, bottom: u }
  );
}
function Cn(e, t, n, r) {
  return e ? 0 : Ge(t, n, r);
}
function OC(e, t, n) {
  const r = e.options.borderWidth,
    i = e.borderSkipped,
    s = D1(r);
  return {
    t: Cn(i.top, s.top, 0, n),
    r: Cn(i.right, s.right, 0, t),
    b: Cn(i.bottom, s.bottom, 0, n),
    l: Cn(i.left, s.left, 0, t),
  };
}
function RC(e, t, n) {
  const { enableBorderRadius: r } = e.getProps(["enableBorderRadius"]),
    i = e.options.borderRadius,
    s = Hr(i),
    o = Math.min(t, n),
    l = e.borderSkipped,
    a = r || U(i);
  return {
    topLeft: Cn(!a || l.top || l.left, s.topLeft, 0, o),
    topRight: Cn(!a || l.top || l.right, s.topRight, 0, o),
    bottomLeft: Cn(!a || l.bottom || l.left, s.bottomLeft, 0, o),
    bottomRight: Cn(!a || l.bottom || l.right, s.bottomRight, 0, o),
  };
}
function TC(e) {
  const t = ey(e),
    n = t.right - t.left,
    r = t.bottom - t.top,
    i = OC(e, n / 2, r / 2),
    s = RC(e, n / 2, r / 2);
  return {
    outer: { x: t.left, y: t.top, w: n, h: r, radius: s },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: n - i.l - i.r,
      h: r - i.t - i.b,
      radius: {
        topLeft: Math.max(0, s.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, s.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, s.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, s.bottomRight - Math.max(i.b, i.r)),
      },
    },
  };
}
function Ga(e, t, n, r) {
  const i = t === null,
    s = n === null,
    l = e && !(i && s) && ey(e, r);
  return l && (i || ir(t, l.left, l.right)) && (s || ir(n, l.top, l.bottom));
}
function LC(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function DC(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Ja(e, t, n = {}) {
  const r = e.x !== n.x ? -t : 0,
    i = e.y !== n.y ? -t : 0,
    s = (e.x + e.w !== n.x + n.w ? t : 0) - r,
    o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return { x: e.x + r, y: e.y + i, w: e.w + s, h: e.h + o, radius: e.radius };
}
class To extends un {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: r, backgroundColor: i },
      } = this,
      { inner: s, outer: o } = TC(this),
      l = LC(o.radius) ? _l : DC;
    t.save(),
      (o.w !== s.w || o.h !== s.h) &&
        (t.beginPath(),
        l(t, Ja(o, n, s)),
        t.clip(),
        l(t, Ja(s, -n, o)),
        (t.fillStyle = r),
        t.fill("evenodd")),
      t.beginPath(),
      l(t, Ja(s, n)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, n, r) {
    return Ga(this, t, n, r);
  }
  inXRange(t, n) {
    return Ga(this, t, null, n);
  }
  inYRange(t, n) {
    return Ga(this, null, t, n);
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: r,
      base: i,
      horizontal: s,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: s ? (n + i) / 2 : n, y: s ? r : (r + i) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
D(To, "id", "bar"),
  D(To, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0,
  }),
  D(To, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  });
const Dp = (e, t) => {
    let { boxHeight: n = t, boxWidth: r = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (r = e.pointStyleWidth || Math.min(r, t))),
      { boxWidth: r, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  AC = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class Ap extends un {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, r) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = r),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = ee(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((r) => t.filter(r, this.chart.data))),
      t.sort && (n = n.sort((r, i) => t.sort(r, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const r = t.labels,
      i = Fe(r.font),
      s = i.size,
      o = this._computeTitleHeight(),
      { boxWidth: l, itemHeight: a } = Dp(r, s);
    let c, u;
    (n.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(o, s, l, a) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(o, i, l, a) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, r, i) {
    const {
        ctx: s,
        maxWidth: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = i + l;
    let d = t;
    (s.textAlign = "left"), (s.textBaseline = "middle");
    let h = -1,
      p = -u;
    return (
      this.legendItems.forEach((g, x) => {
        const v = r + n / 2 + s.measureText(g.text).width;
        (x === 0 || c[c.length - 1] + v + 2 * l > o) &&
          ((d += u), (c[c.length - (x > 0 ? 0 : 1)] = 0), (p += u), h++),
          (a[x] = { left: 0, top: p, row: h, width: v, height: i }),
          (c[c.length - 1] += v + l);
      }),
      d
    );
  }
  _fitCols(t, n, r, i) {
    const {
        ctx: s,
        maxHeight: o,
        options: {
          labels: { padding: l },
        },
      } = this,
      a = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = o - t;
    let d = l,
      h = 0,
      p = 0,
      g = 0,
      x = 0;
    return (
      this.legendItems.forEach((v, m) => {
        const { itemWidth: y, itemHeight: w } = zC(r, n, s, v, i);
        m > 0 &&
          p + w + 2 * l > u &&
          ((d += h + l),
          c.push({ width: h, height: p }),
          (g += h + l),
          x++,
          (h = p = 0)),
          (a[m] = { left: g, top: p, col: x, width: y, height: w }),
          (h = Math.max(h, y)),
          (p += w + l);
      }),
      (d += h),
      c.push({ width: h, height: p }),
      d
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: r,
          labels: { padding: i },
          rtl: s,
        },
      } = this,
      o = Wr(s, this.left, this.width);
    if (this.isHorizontal()) {
      let l = 0,
        a = Ae(r, this.left + i, this.right - this.lineWidths[l]);
      for (const c of n)
        l !== c.row &&
          ((l = c.row),
          (a = Ae(r, this.left + i, this.right - this.lineWidths[l]))),
          (c.top += this.top + t + i),
          (c.left = o.leftForLtr(o.x(a), c.width)),
          (a += c.width + i);
    } else {
      let l = 0,
        a = Ae(r, this.top + t + i, this.bottom - this.columnSizes[l].height);
      for (const c of n)
        c.col !== l &&
          ((l = c.col),
          (a = Ae(
            r,
            this.top + t + i,
            this.bottom - this.columnSizes[l].height
          ))),
          (c.top = a),
          (c.left += this.left + i),
          (c.left = o.leftForLtr(o.x(c.left), c.width)),
          (a += c.height + i);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Dd(t, this), this._draw(), Ad(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: r, ctx: i } = this,
      { align: s, labels: o } = t,
      l = fe.color,
      a = Wr(t.rtl, this.left, this.width),
      c = Fe(o.font),
      { padding: u } = o,
      d = c.size,
      h = d / 2;
    let p;
    this.drawTitle(),
      (i.textAlign = a.textAlign("left")),
      (i.textBaseline = "middle"),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: g, boxHeight: x, itemHeight: v } = Dp(o, d),
      m = function (S, j, k) {
        if (isNaN(g) || g <= 0 || isNaN(x) || x < 0) return;
        i.save();
        const M = H(k.lineWidth, 1);
        if (
          ((i.fillStyle = H(k.fillStyle, l)),
          (i.lineCap = H(k.lineCap, "butt")),
          (i.lineDashOffset = H(k.lineDashOffset, 0)),
          (i.lineJoin = H(k.lineJoin, "miter")),
          (i.lineWidth = M),
          (i.strokeStyle = H(k.strokeStyle, l)),
          i.setLineDash(H(k.lineDash, [])),
          o.usePointStyle)
        ) {
          const O = {
              radius: (x * Math.SQRT2) / 2,
              pointStyle: k.pointStyle,
              rotation: k.rotation,
              borderWidth: M,
            },
            A = a.xPlus(S, g / 2),
            I = j + h;
          T1(i, O, A, I, o.pointStyleWidth && g);
        } else {
          const O = j + Math.max((d - x) / 2, 0),
            A = a.leftForLtr(S, g),
            I = Hr(k.borderRadius);
          i.beginPath(),
            Object.values(I).some((se) => se !== 0)
              ? _l(i, { x: A, y: O, w: g, h: x, radius: I })
              : i.rect(A, O, g, x),
            i.fill(),
            M !== 0 && i.stroke();
        }
        i.restore();
      },
      y = function (S, j, k) {
        xs(i, k.text, S, j + v / 2, c, {
          strikethrough: k.hidden,
          textAlign: a.textAlign(k.textAlign),
        });
      },
      w = this.isHorizontal(),
      b = this._computeTitleHeight();
    w
      ? (p = {
          x: Ae(s, this.left + u, this.right - r[0]),
          y: this.top + u + b,
          line: 0,
        })
      : (p = {
          x: this.left + u,
          y: Ae(s, this.top + b + u, this.bottom - n[0].height),
          line: 0,
        }),
      B1(this.ctx, t.textDirection);
    const _ = v + u;
    this.legendItems.forEach((S, j) => {
      (i.strokeStyle = S.fontColor), (i.fillStyle = S.fontColor);
      const k = i.measureText(S.text).width,
        M = a.textAlign(S.textAlign || (S.textAlign = o.textAlign)),
        O = g + h + k;
      let A = p.x,
        I = p.y;
      a.setWidth(this.width),
        w
          ? j > 0 &&
            A + O + u > this.right &&
            ((I = p.y += _),
            p.line++,
            (A = p.x = Ae(s, this.left + u, this.right - r[p.line])))
          : j > 0 &&
            I + _ > this.bottom &&
            ((A = p.x = A + n[p.line].width + u),
            p.line++,
            (I = p.y =
              Ae(s, this.top + b + u, this.bottom - n[p.line].height)));
      const se = a.x(A);
      if (
        (m(se, I, S),
        (A = c4(M, A + g + h, w ? A + O : this.right, t.rtl)),
        y(a.x(A), I, S),
        w)
      )
        p.x += O + u;
      else if (typeof S.text != "string") {
        const Re = c.lineHeight;
        p.y += ty(S, Re) + u;
      } else p.y += _;
    }),
      $1(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      r = Fe(n.font),
      i = St(n.padding);
    if (!n.display) return;
    const s = Wr(t.rtl, this.left, this.width),
      o = this.ctx,
      l = n.position,
      a = r.size / 2,
      c = i.top + a;
    let u,
      d = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (d = Ae(t.align, d, this.right - h));
    else {
      const g = this.columnSizes.reduce((x, v) => Math.max(x, v.height), 0);
      u =
        c +
        Ae(
          t.align,
          this.top,
          this.bottom - g - t.labels.padding - this._computeTitleHeight()
        );
    }
    const p = Ae(l, d, d + h);
    (o.textAlign = s.textAlign(Td(l))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = r.string),
      xs(o, n.text, p, u, r);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = Fe(t.font),
      r = St(t.padding);
    return t.display ? n.lineHeight + r.height : 0;
  }
  _getLegendItemAt(t, n) {
    let r, i, s;
    if (ir(t, this.left, this.right) && ir(n, this.top, this.bottom)) {
      for (s = this.legendHitBoxes, r = 0; r < s.length; ++r)
        if (
          ((i = s[r]),
          ir(t, i.left, i.left + i.width) && ir(n, i.top, i.top + i.height))
        )
          return this.legendItems[r];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!BC(t.type, n)) return;
    const r = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem,
        s = AC(i, r);
      i && !s && ee(n.onLeave, [t, i, this], this),
        (this._hoveredItem = r),
        r && !s && ee(n.onHover, [t, r, this], this);
    } else r && ee(n.onClick, [t, r, this], this);
  }
}
function zC(e, t, n, r, i) {
  const s = FC(r, e, t, n),
    o = IC(i, r, t.lineHeight);
  return { itemWidth: s, itemHeight: o };
}
function FC(e, t, n, r) {
  let i = e.text;
  return (
    i &&
      typeof i != "string" &&
      (i = i.reduce((s, o) => (s.length > o.length ? s : o))),
    t + n.size / 2 + r.measureText(i).width
  );
}
function IC(e, t, n) {
  let r = e;
  return typeof t.text != "string" && (r = ty(t, n)), r;
}
function ty(e, t) {
  const n = e.text ? e.text.length : 0;
  return t * n;
}
function BC(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var $C = {
  id: "legend",
  _element: Ap,
  start(e, t, n) {
    const r = (e.legend = new Ap({ ctx: e.ctx, options: n, chart: e }));
    xt.configure(e, r, n), xt.addBox(e, r);
  },
  stop(e) {
    xt.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const r = e.legend;
    xt.configure(e, r, n), (r.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const r = t.datasetIndex,
        i = n.chart;
      i.isDatasetVisible(r)
        ? (i.hide(r), (t.hidden = !0))
        : (i.show(r), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: r,
              textAlign: i,
              color: s,
              useBorderRadius: o,
              borderRadius: l,
            },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((a) => {
          const c = a.controller.getStyle(n ? 0 : void 0),
            u = St(c.borderWidth);
          return {
            text: t[a.index].label,
            fillStyle: c.backgroundColor,
            fontColor: s,
            hidden: !a.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: r || c.pointStyle,
            rotation: c.rotation,
            textAlign: i || c.textAlign,
            borderRadius: o && (l || c.borderRadius),
            datasetIndex: a.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
class ny extends un {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n) {
    const r = this.options;
    if (((this.left = 0), (this.top = 0), !r.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    (this.width = this.right = t), (this.height = this.bottom = n);
    const i = _e(r.text) ? r.text.length : 1;
    this._padding = St(r.padding);
    const s = i * Fe(r.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = s) : (this.width = s);
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: r, bottom: i, right: s, options: o } = this,
      l = o.align;
    let a = 0,
      c,
      u,
      d;
    return (
      this.isHorizontal()
        ? ((u = Ae(l, r, s)), (d = n + t), (c = s - r))
        : (o.position === "left"
            ? ((u = r + t), (d = Ae(l, i, n)), (a = ye * -0.5))
            : ((u = s - t), (d = Ae(l, n, i)), (a = ye * 0.5)),
          (c = i - n)),
      { titleX: u, titleY: d, maxWidth: c, rotation: a }
    );
  }
  draw() {
    const t = this.ctx,
      n = this.options;
    if (!n.display) return;
    const r = Fe(n.font),
      s = r.lineHeight / 2 + this._padding.top,
      { titleX: o, titleY: l, maxWidth: a, rotation: c } = this._drawArgs(s);
    xs(t, n.text, 0, 0, r, {
      color: n.color,
      maxWidth: a,
      rotation: c,
      textAlign: Td(n.align),
      textBaseline: "middle",
      translation: [o, l],
    });
  }
}
function UC(e, t) {
  const n = new ny({ ctx: e.ctx, options: t, chart: e });
  xt.configure(e, n, t), xt.addBox(e, n), (e.titleBlock = n);
}
var HC = {
  id: "title",
  _element: ny,
  start(e, t, n) {
    UC(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    xt.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const r = e.titleBlock;
    xt.configure(e, r, n), (r.options = n);
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ti = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      r = new Set(),
      i = 0,
      s = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const l = e[t].element;
      if (l && l.hasValue()) {
        const a = l.tooltipPosition();
        r.add(a.x), (i += a.y), ++s;
      }
    }
    return s === 0 || r.size === 0
      ? !1
      : { x: [...r].reduce((l, a) => l + a) / r.size, y: i / s };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      r = t.y,
      i = Number.POSITIVE_INFINITY,
      s,
      o,
      l;
    for (s = 0, o = e.length; s < o; ++s) {
      const a = e[s].element;
      if (a && a.hasValue()) {
        const c = a.getCenterPoint(),
          u = r4(t, c);
        u < i && ((i = u), (l = a));
      }
    }
    if (l) {
      const a = l.tooltipPosition();
      (n = a.x), (r = a.y);
    }
    return { x: n, y: r };
  },
};
function zt(e, t) {
  return t && (_e(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function qt(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function WC(e, t) {
  const { element: n, datasetIndex: r, index: i } = t,
    s = e.getDatasetMeta(r).controller,
    { label: o, value: l } = s.getLabelAndValue(i);
  return {
    chart: e,
    label: o,
    parsed: s.getParsed(i),
    raw: e.data.datasets[r].data[i],
    formattedValue: l,
    dataset: s.getDataset(),
    dataIndex: i,
    datasetIndex: r,
    element: n,
  };
}
function zp(e, t) {
  const n = e.chart.ctx,
    { body: r, footer: i, title: s } = e,
    { boxWidth: o, boxHeight: l } = t,
    a = Fe(t.bodyFont),
    c = Fe(t.titleFont),
    u = Fe(t.footerFont),
    d = s.length,
    h = i.length,
    p = r.length,
    g = St(t.padding);
  let x = g.height,
    v = 0,
    m = r.reduce(
      (b, _) => b + _.before.length + _.lines.length + _.after.length,
      0
    );
  if (
    ((m += e.beforeBody.length + e.afterBody.length),
    d &&
      (x += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    m)
  ) {
    const b = t.displayColors ? Math.max(l, a.lineHeight) : a.lineHeight;
    x += p * b + (m - p) * a.lineHeight + (m - 1) * t.bodySpacing;
  }
  h && (x += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
  let y = 0;
  const w = function (b) {
    v = Math.max(v, n.measureText(b).width + y);
  };
  return (
    n.save(),
    (n.font = c.string),
    V(e.title, w),
    (n.font = a.string),
    V(e.beforeBody.concat(e.afterBody), w),
    (y = t.displayColors ? o + 2 + t.boxPadding : 0),
    V(r, (b) => {
      V(b.before, w), V(b.lines, w), V(b.after, w);
    }),
    (y = 0),
    (n.font = u.string),
    V(e.footer, w),
    n.restore(),
    (v += g.width),
    { width: v, height: x }
  );
}
function VC(e, t) {
  const { y: n, height: r } = t;
  return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center";
}
function KC(e, t, n, r) {
  const { x: i, width: s } = r,
    o = n.caretSize + n.caretPadding;
  if ((e === "left" && i + s + o > t.width) || (e === "right" && i - s - o < 0))
    return !0;
}
function YC(e, t, n, r) {
  const { x: i, width: s } = n,
    {
      width: o,
      chartArea: { left: l, right: a },
    } = e;
  let c = "center";
  return (
    r === "center"
      ? (c = i <= (l + a) / 2 ? "left" : "right")
      : i <= s / 2
      ? (c = "left")
      : i >= o - s / 2 && (c = "right"),
    KC(c, e, t, n) && (c = "center"),
    c
  );
}
function Fp(e, t, n) {
  const r = n.yAlign || t.yAlign || VC(e, n);
  return { xAlign: n.xAlign || t.xAlign || YC(e, t, n, r), yAlign: r };
}
function XC(e, t) {
  let { x: n, width: r } = e;
  return t === "right" ? (n -= r) : t === "center" && (n -= r / 2), n;
}
function qC(e, t, n) {
  let { y: r, height: i } = e;
  return (
    t === "top" ? (r += n) : t === "bottom" ? (r -= i + n) : (r -= i / 2), r
  );
}
function Ip(e, t, n, r) {
  const { caretSize: i, caretPadding: s, cornerRadius: o } = e,
    { xAlign: l, yAlign: a } = n,
    c = i + s,
    { topLeft: u, topRight: d, bottomLeft: h, bottomRight: p } = Hr(o);
  let g = XC(t, l);
  const x = qC(t, a, c);
  return (
    a === "center"
      ? l === "left"
        ? (g += c)
        : l === "right" && (g -= c)
      : l === "left"
      ? (g -= Math.max(u, h) + i)
      : l === "right" && (g += Math.max(d, p) + i),
    { x: Ge(g, 0, r.width - t.width), y: Ge(x, 0, r.height - t.height) }
  );
}
function co(e, t, n) {
  const r = St(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - r.right
    : e.x + r.left;
}
function Bp(e) {
  return zt([], qt(e));
}
function QC(e, t, n) {
  return ai(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function $p(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const ry = {
  beforeTitle: Yt,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        r = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label) return t.label;
      if (r > 0 && t.dataIndex < r) return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Yt,
  beforeBody: Yt,
  beforeLabel: Yt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return te(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex);
    return { pointStyle: n.pointStyle, rotation: n.rotation };
  },
  afterLabel: Yt,
  afterBody: Yt,
  beforeFooter: Yt,
  footer: Yt,
  afterFooter: Yt,
};
function Ye(e, t, n, r) {
  const i = e[t].call(n, r);
  return typeof i > "u" ? ry[t].call(n, r) : i;
}
class xu extends un {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      r = this.options.setContext(this.getContext()),
      i = r.enabled && n.options.animation && r.animations,
      s = new U1(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(s)), s;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = QC(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: r } = n,
      i = Ye(r, "beforeTitle", this, t),
      s = Ye(r, "title", this, t),
      o = Ye(r, "afterTitle", this, t);
    let l = [];
    return (l = zt(l, qt(i))), (l = zt(l, qt(s))), (l = zt(l, qt(o))), l;
  }
  getBeforeBody(t, n) {
    return Bp(Ye(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: r } = n,
      i = [];
    return (
      V(t, (s) => {
        const o = { before: [], lines: [], after: [] },
          l = $p(r, s);
        zt(o.before, qt(Ye(l, "beforeLabel", this, s))),
          zt(o.lines, Ye(l, "label", this, s)),
          zt(o.after, qt(Ye(l, "afterLabel", this, s))),
          i.push(o);
      }),
      i
    );
  }
  getAfterBody(t, n) {
    return Bp(Ye(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: r } = n,
      i = Ye(r, "beforeFooter", this, t),
      s = Ye(r, "footer", this, t),
      o = Ye(r, "afterFooter", this, t);
    let l = [];
    return (l = zt(l, qt(i))), (l = zt(l, qt(s))), (l = zt(l, qt(o))), l;
  }
  _createItems(t) {
    const n = this._active,
      r = this.chart.data,
      i = [],
      s = [],
      o = [];
    let l = [],
      a,
      c;
    for (a = 0, c = n.length; a < c; ++a) l.push(WC(this.chart, n[a]));
    return (
      t.filter && (l = l.filter((u, d, h) => t.filter(u, d, h, r))),
      t.itemSort && (l = l.sort((u, d) => t.itemSort(u, d, r))),
      V(l, (u) => {
        const d = $p(t.callbacks, u);
        i.push(Ye(d, "labelColor", this, u)),
          s.push(Ye(d, "labelPointStyle", this, u)),
          o.push(Ye(d, "labelTextColor", this, u));
      }),
      (this.labelColors = i),
      (this.labelPointStyles = s),
      (this.labelTextColors = o),
      (this.dataPoints = l),
      l
    );
  }
  update(t, n) {
    const r = this.options.setContext(this.getContext()),
      i = this._active;
    let s,
      o = [];
    if (!i.length) this.opacity !== 0 && (s = { opacity: 0 });
    else {
      const l = Ti[r.position].call(this, i, this._eventPosition);
      (o = this._createItems(r)),
        (this.title = this.getTitle(o, r)),
        (this.beforeBody = this.getBeforeBody(o, r)),
        (this.body = this.getBody(o, r)),
        (this.afterBody = this.getAfterBody(o, r)),
        (this.footer = this.getFooter(o, r));
      const a = (this._size = zp(this, r)),
        c = Object.assign({}, l, a),
        u = Fp(this.chart, r, c),
        d = Ip(r, c, u, this.chart);
      (this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (s = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: a.width,
          height: a.height,
          caretX: l.x,
          caretY: l.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      s && this._resolveAnimations().update(this, s),
      t &&
        r.external &&
        r.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, r, i) {
    const s = this.getCaretPosition(t, r, i);
    n.lineTo(s.x1, s.y1), n.lineTo(s.x2, s.y2), n.lineTo(s.x3, s.y3);
  }
  getCaretPosition(t, n, r) {
    const { xAlign: i, yAlign: s } = this,
      { caretSize: o, cornerRadius: l } = r,
      { topLeft: a, topRight: c, bottomLeft: u, bottomRight: d } = Hr(l),
      { x: h, y: p } = t,
      { width: g, height: x } = n;
    let v, m, y, w, b, _;
    return (
      s === "center"
        ? ((b = p + x / 2),
          i === "left"
            ? ((v = h), (m = v - o), (w = b + o), (_ = b - o))
            : ((v = h + g), (m = v + o), (w = b - o), (_ = b + o)),
          (y = v))
        : (i === "left"
            ? (m = h + Math.max(a, u) + o)
            : i === "right"
            ? (m = h + g - Math.max(c, d) - o)
            : (m = this.caretX),
          s === "top"
            ? ((w = p), (b = w - o), (v = m - o), (y = m + o))
            : ((w = p + x), (b = w + o), (v = m + o), (y = m - o)),
          (_ = w)),
      { x1: v, x2: m, x3: y, y1: w, y2: b, y3: _ }
    );
  }
  drawTitle(t, n, r) {
    const i = this.title,
      s = i.length;
    let o, l, a;
    if (s) {
      const c = Wr(r.rtl, this.x, this.width);
      for (
        t.x = co(this, r.titleAlign, r),
          n.textAlign = c.textAlign(r.titleAlign),
          n.textBaseline = "middle",
          o = Fe(r.titleFont),
          l = r.titleSpacing,
          n.fillStyle = r.titleColor,
          n.font = o.string,
          a = 0;
        a < s;
        ++a
      )
        n.fillText(i[a], c.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + l),
          a + 1 === s && (t.y += r.titleMarginBottom - l);
    }
  }
  _drawColorBox(t, n, r, i, s) {
    const o = this.labelColors[r],
      l = this.labelPointStyles[r],
      { boxHeight: a, boxWidth: c } = s,
      u = Fe(s.bodyFont),
      d = co(this, "left", s),
      h = i.x(d),
      p = a < u.lineHeight ? (u.lineHeight - a) / 2 : 0,
      g = n.y + p;
    if (s.usePointStyle) {
      const x = {
          radius: Math.min(c, a) / 2,
          pointStyle: l.pointStyle,
          rotation: l.rotation,
          borderWidth: 1,
        },
        v = i.leftForLtr(h, c) + c / 2,
        m = g + a / 2;
      (t.strokeStyle = s.multiKeyBackground),
        (t.fillStyle = s.multiKeyBackground),
        np(t, x, v, m),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        np(t, x, v, m);
    } else {
      (t.lineWidth = U(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const x = i.leftForLtr(h, c),
        v = i.leftForLtr(i.xPlus(h, 1), c - 2),
        m = Hr(o.borderRadius);
      Object.values(m).some((y) => y !== 0)
        ? (t.beginPath(),
          (t.fillStyle = s.multiKeyBackground),
          _l(t, { x, y: g, w: c, h: a, radius: m }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          _l(t, { x: v, y: g + 1, w: c - 2, h: a - 2, radius: m }),
          t.fill())
        : ((t.fillStyle = s.multiKeyBackground),
          t.fillRect(x, g, c, a),
          t.strokeRect(x, g, c, a),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(v, g + 1, c - 2, a - 2));
    }
    t.fillStyle = this.labelTextColors[r];
  }
  drawBody(t, n, r) {
    const { body: i } = this,
      {
        bodySpacing: s,
        bodyAlign: o,
        displayColors: l,
        boxHeight: a,
        boxWidth: c,
        boxPadding: u,
      } = r,
      d = Fe(r.bodyFont);
    let h = d.lineHeight,
      p = 0;
    const g = Wr(r.rtl, this.x, this.width),
      x = function (k) {
        n.fillText(k, g.x(t.x + p), t.y + h / 2), (t.y += h + s);
      },
      v = g.textAlign(o);
    let m, y, w, b, _, S, j;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = d.string,
        t.x = co(this, v, r),
        n.fillStyle = r.bodyColor,
        V(this.beforeBody, x),
        p = l && v !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
        b = 0,
        S = i.length;
      b < S;
      ++b
    ) {
      for (
        m = i[b],
          y = this.labelTextColors[b],
          n.fillStyle = y,
          V(m.before, x),
          w = m.lines,
          l &&
            w.length &&
            (this._drawColorBox(n, t, b, g, r),
            (h = Math.max(d.lineHeight, a))),
          _ = 0,
          j = w.length;
        _ < j;
        ++_
      )
        x(w[_]), (h = d.lineHeight);
      V(m.after, x);
    }
    (p = 0), (h = d.lineHeight), V(this.afterBody, x), (t.y -= s);
  }
  drawFooter(t, n, r) {
    const i = this.footer,
      s = i.length;
    let o, l;
    if (s) {
      const a = Wr(r.rtl, this.x, this.width);
      for (
        t.x = co(this, r.footerAlign, r),
          t.y += r.footerMarginTop,
          n.textAlign = a.textAlign(r.footerAlign),
          n.textBaseline = "middle",
          o = Fe(r.footerFont),
          n.fillStyle = r.footerColor,
          n.font = o.string,
          l = 0;
        l < s;
        ++l
      )
        n.fillText(i[l], a.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + r.footerSpacing);
    }
  }
  drawBackground(t, n, r, i) {
    const { xAlign: s, yAlign: o } = this,
      { x: l, y: a } = t,
      { width: c, height: u } = r,
      {
        topLeft: d,
        topRight: h,
        bottomLeft: p,
        bottomRight: g,
      } = Hr(i.cornerRadius);
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      n.beginPath(),
      n.moveTo(l + d, a),
      o === "top" && this.drawCaret(t, n, r, i),
      n.lineTo(l + c - h, a),
      n.quadraticCurveTo(l + c, a, l + c, a + h),
      o === "center" && s === "right" && this.drawCaret(t, n, r, i),
      n.lineTo(l + c, a + u - g),
      n.quadraticCurveTo(l + c, a + u, l + c - g, a + u),
      o === "bottom" && this.drawCaret(t, n, r, i),
      n.lineTo(l + p, a + u),
      n.quadraticCurveTo(l, a + u, l, a + u - p),
      o === "center" && s === "left" && this.drawCaret(t, n, r, i),
      n.lineTo(l, a + d),
      n.quadraticCurveTo(l, a, l + d, a),
      n.closePath(),
      n.fill(),
      i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      r = this.$animations,
      i = r && r.x,
      s = r && r.y;
    if (i || s) {
      const o = Ti[t.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const l = (this._size = zp(this, t)),
        a = Object.assign({}, o, this._size),
        c = Fp(n, t, a),
        u = Ip(t, a, c, n);
      (i._to !== u.x || s._to !== u.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = l.width),
        (this.height = l.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let r = this.opacity;
    if (!r) return;
    this._updateAnimationTarget(n);
    const i = { width: this.width, height: this.height },
      s = { x: this.x, y: this.y };
    r = Math.abs(r) < 0.001 ? 0 : r;
    const o = St(n.padding),
      l =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      l &&
      (t.save(),
      (t.globalAlpha = r),
      this.drawBackground(s, t, i, n),
      B1(t, n.textDirection),
      (s.y += o.top),
      this.drawTitle(s, t, n),
      this.drawBody(s, t, n),
      this.drawFooter(s, t, n),
      $1(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const r = this._active,
      i = t.map(({ datasetIndex: l, index: a }) => {
        const c = this.chart.getDatasetMeta(l);
        if (!c) throw new Error("Cannot find a dataset at index " + l);
        return { datasetIndex: l, element: c.data[a], index: a };
      }),
      s = !yl(r, i),
      o = this._positionChanged(i, n);
    (s || o) &&
      ((this._active = i),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, r = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options,
      s = this._active || [],
      o = this._getActiveElements(t, s, n, r),
      l = this._positionChanged(o, t),
      a = n || !yl(o, s) || l;
    return (
      a &&
        ((this._active = o),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      a
    );
  }
  _getActiveElements(t, n, r, i) {
    const s = this.options;
    if (t.type === "mouseout") return [];
    if (!i)
      return n.filter(
        (l) =>
          this.chart.data.datasets[l.datasetIndex] &&
          this.chart
            .getDatasetMeta(l.datasetIndex)
            .controller.getParsed(l.index) !== void 0
      );
    const o = this.chart.getElementsAtEventForMode(t, s.mode, s, r);
    return s.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: r, caretY: i, options: s } = this,
      o = Ti[s.position].call(this, t, n);
    return o !== !1 && (r !== o.x || i !== o.y);
  }
}
D(xu, "positioners", Ti);
var GC = {
  id: "tooltip",
  _element: xu,
  positioners: Ti,
  afterInit(e, t, n) {
    n && (e.tooltip = new xu({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", { ...n, cancelable: !0 }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: ry,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const JC = (e, t, n, r) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), r.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function ZC(e, t, n, r) {
  const i = e.indexOf(t);
  if (i === -1) return JC(e, t, n, r);
  const s = e.lastIndexOf(t);
  return i !== s ? n : i;
}
const e5 = (e, t) => (e === null ? null : Ge(Math.round(e), 0, t));
function Up(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class vu extends ci {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const r = this.getLabels();
      for (const { index: i, label: s } of n) r[i] === s && r.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (te(t)) return null;
    const r = this.getLabels();
    return (
      (n =
        isFinite(n) && r[n] === t ? n : ZC(r, t, H(n, t), this._addedLabels)),
      e5(n, r.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: r, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (r = 0), n || (i = this.getLabels().length - 1)),
      (this.min = r),
      (this.max = i);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      r = this.options.offset,
      i = [];
    let s = this.getLabels();
    (s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1)),
      (this._valueRange = Math.max(s.length - (r ? 0 : 1), 1)),
      (this._startValue = this.min - (r ? 0.5 : 0));
    for (let o = t; o <= n; o++) i.push({ value: o });
    return i;
  }
  getLabelForValue(t) {
    return Up.call(this, t);
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
D(vu, "id", "category"), D(vu, "defaults", { ticks: { callback: Up } });
function t5(e, t) {
  const n = [],
    {
      bounds: i,
      step: s,
      min: o,
      max: l,
      precision: a,
      count: c,
      maxTicks: u,
      maxDigits: d,
      includeBounds: h,
    } = e,
    p = s || 1,
    g = u - 1,
    { min: x, max: v } = t,
    m = !te(o),
    y = !te(l),
    w = !te(c),
    b = (v - x) / (d + 1);
  let _ = Yh((v - x) / g / p) * p,
    S,
    j,
    k,
    M;
  if (_ < 1e-14 && !m && !y) return [{ value: x }, { value: v }];
  (M = Math.ceil(v / _) - Math.floor(x / _)),
    M > g && (_ = Yh((M * _) / g / p) * p),
    te(a) || ((S = Math.pow(10, a)), (_ = Math.ceil(_ * S) / S)),
    i === "ticks"
      ? ((j = Math.floor(x / _) * _), (k = Math.ceil(v / _) * _))
      : ((j = x), (k = v)),
    m && y && s && e4((l - o) / s, _ / 1e3)
      ? ((M = Math.round(Math.min((l - o) / _, u))),
        (_ = (l - o) / M),
        (j = o),
        (k = l))
      : w
      ? ((j = m ? o : j), (k = y ? l : k), (M = c - 1), (_ = (k - j) / M))
      : ((M = (k - j) / _),
        Po(M, Math.round(M), _ / 1e3)
          ? (M = Math.round(M))
          : (M = Math.ceil(M)));
  const O = Math.max(Xh(_), Xh(j));
  (S = Math.pow(10, te(a) ? O : a)),
    (j = Math.round(j * S) / S),
    (k = Math.round(k * S) / S);
  let A = 0;
  for (
    m &&
    (h && j !== o
      ? (n.push({ value: o }),
        j < o && A++,
        Po(Math.round((j + A * _) * S) / S, o, Hp(o, b, e)) && A++)
      : j < o && A++);
    A < M;
    ++A
  ) {
    const I = Math.round((j + A * _) * S) / S;
    if (y && I > l) break;
    n.push({ value: I });
  }
  return (
    y && h && k !== l
      ? n.length && Po(n[n.length - 1].value, l, Hp(l, b, e))
        ? (n[n.length - 1].value = l)
        : n.push({ value: l })
      : (!y || k === l) && n.push({ value: k }),
    n
  );
}
function Hp(e, t, { horizontal: n, minRotation: r }) {
  const i = tn(r),
    s = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    o = 0.75 * t * ("" + e).length;
  return Math.min(t / s, o);
}
class n5 extends ci {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return te(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: r } = this.getUserBounds();
    let { min: i, max: s } = this;
    const o = (a) => (i = n ? i : a),
      l = (a) => (s = r ? s : a);
    if (t) {
      const a = An(i),
        c = An(s);
      a < 0 && c < 0 ? l(0) : a > 0 && c > 0 && o(0);
    }
    if (i === s) {
      let a = s === 0 ? 1 : Math.abs(s * 0.05);
      l(s + a), t || o(i - a);
    }
    (this.min = i), (this.max = s);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: r } = t,
      i;
    return (
      r
        ? ((i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let r = this.getTickLimit();
    r = Math.max(2, r);
    const i = {
        maxTicks: r,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      s = this._range || this,
      o = t5(i, s);
    return (
      t.bounds === "ticks" && t4(o, this, "value"),
      t.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      r = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (r - n) / Math.max(t.length - 1, 1) / 2;
      (n -= i), (r += i);
    }
    (this._startValue = n), (this._endValue = r), (this._valueRange = r - n);
  }
  getLabelForValue(t) {
    return Ld(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class wu extends n5 {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = _t(t) ? t : 0),
      (this.max = _t(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      r = tn(this.options.ticks.minRotation),
      i = (t ? Math.sin(r) : Math.cos(r)) || 0.001,
      s = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, s.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
D(wu, "id", "linear"),
  D(wu, "defaults", { ticks: { callback: R1.formatters.numeric } });
const ia = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  qe = Object.keys(ia);
function Wp(e, t) {
  return e - t;
}
function Vp(e, t) {
  if (te(t)) return null;
  const n = e._adapter,
    { parser: r, round: i, isoWeekday: s } = e._parseOpts;
  let o = t;
  return (
    typeof r == "function" && (o = r(o)),
    _t(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)),
    o === null
      ? null
      : (i &&
          (o =
            i === "week" && (wl(s) || s === !0)
              ? n.startOf(o, "isoWeek", s)
              : n.startOf(o, i)),
        +o)
  );
}
function Kp(e, t, n, r) {
  const i = qe.length;
  for (let s = qe.indexOf(e); s < i - 1; ++s) {
    const o = ia[qe[s]],
      l = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (l * o.size)) <= r) return qe[s];
  }
  return qe[i - 1];
}
function r5(e, t, n, r, i) {
  for (let s = qe.length - 1; s >= qe.indexOf(n); s--) {
    const o = qe[s];
    if (ia[o].common && e._adapter.diff(i, r, o) >= t - 1) return o;
  }
  return qe[n ? qe.indexOf(n) : 0];
}
function i5(e) {
  for (let t = qe.indexOf(e) + 1, n = qe.length; t < n; ++t)
    if (ia[qe[t]].common) return qe[t];
}
function Yp(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: r, hi: i } = Rd(n, t),
      s = n[r] >= t ? n[r] : n[i];
    e[s] = !0;
  }
}
function s5(e, t, n, r) {
  const i = e._adapter,
    s = +i.startOf(t[0].value, r),
    o = t[t.length - 1].value;
  let l, a;
  for (l = s; l <= o; l = +i.add(l, 1, r))
    (a = n[l]), a >= 0 && (t[a].major = !0);
  return t;
}
function Xp(e, t, n) {
  const r = [],
    i = {},
    s = t.length;
  let o, l;
  for (o = 0; o < s; ++o)
    (l = t[o]), (i[l] = o), r.push({ value: l, major: !1 });
  return s === 0 || !n ? r : s5(e, r, i, n);
}
class El extends ci {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n = {}) {
    const r = t.time || (t.time = {}),
      i = (this._adapter = new gk._date(t.adapters.date));
    i.init(n),
      Wi(r.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: r.parser,
        round: r.round,
        isoWeekday: r.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : Vp(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      r = t.time.unit || "day";
    let { min: i, max: s, minDefined: o, maxDefined: l } = this.getUserBounds();
    function a(c) {
      !o && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !l && !isNaN(c.max) && (s = Math.max(s, c.max));
    }
    (!o || !l) &&
      (a(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        a(this.getMinMax(!1))),
      (i = _t(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r)),
      (s = _t(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1),
      (this.min = Math.min(i, s - 1)),
      (this.max = Math.max(i + 1, s));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      r = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (r = t[t.length - 1])), { min: n, max: r };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      r = t.ticks,
      i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const s = this.min,
      o = this.max,
      l = o4(i, s, o);
    return (
      (this._unit =
        n.unit ||
        (r.autoSkip
          ? Kp(n.minUnit, this.min, this.max, this._getLabelCapacity(s))
          : r5(this, l.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !r.major.enabled || this._unit === "year" ? void 0 : i5(this._unit)),
      this.initOffsets(i),
      t.reverse && l.reverse(),
      Xp(this, l, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0,
      r = 0,
      i,
      s;
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (s = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (r = s)
        : (r = (s - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (n = Ge(n, 0, o)),
      (r = Ge(r, 0, o)),
      (this._offsets = { start: n, end: r, factor: 1 / (n + 1 + r) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      r = this.max,
      i = this.options,
      s = i.time,
      o = s.unit || Kp(s.minUnit, n, r, this._getLabelCapacity(n)),
      l = H(i.ticks.stepSize, 1),
      a = o === "week" ? s.isoWeekday : !1,
      c = wl(a) || a === !0,
      u = {};
    let d = n,
      h,
      p;
    if (
      (c && (d = +t.startOf(d, "isoWeek", a)),
      (d = +t.startOf(d, c ? "day" : o)),
      t.diff(r, n, o) > 1e5 * l)
    )
      throw new Error(
        n + " and " + r + " are too far apart with stepSize of " + l + " " + o
      );
    const g = i.ticks.source === "data" && this.getDataTimestamps();
    for (h = d, p = 0; h < r; h = +t.add(h, l, o), p++) Yp(u, h, g);
    return (
      (h === r || i.bounds === "ticks" || p === 1) && Yp(u, h, g),
      Object.keys(u)
        .sort(Wp)
        .map((x) => +x)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      r = this.options.time;
    return r.tooltipFormat
      ? n.format(t, r.tooltipFormat)
      : n.format(t, r.displayFormats.datetime);
  }
  format(t, n) {
    const i = this.options.time.displayFormats,
      s = this._unit,
      o = n || i[s];
    return this._adapter.format(t, o);
  }
  _tickFormatFunction(t, n, r, i) {
    const s = this.options,
      o = s.ticks.callback;
    if (o) return ee(o, [t, n, r], this);
    const l = s.time.displayFormats,
      a = this._unit,
      c = this._majorUnit,
      u = a && l[a],
      d = c && l[c],
      h = r[n],
      p = c && d && h && h.major;
    return this._adapter.format(t, i || (p ? d : u));
  }
  generateTickLabels(t) {
    let n, r, i;
    for (n = 0, r = t.length; n < r; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      r = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + r) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + r * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      r = this.ctx.measureText(t).width,
      i = tn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      s = Math.cos(i),
      o = Math.sin(i),
      l = this._resolveTickFontOptions(0).size;
    return { w: r * s + l * o, h: r * o + l * s };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      r = n.displayFormats,
      i = r[n.unit] || r.millisecond,
      s = this._tickFormatFunction(t, 0, Xp(this, [t], this._majorUnit), i),
      o = this._getLabelSize(s),
      l =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return l > 0 ? l : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      r;
    if (t.length) return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (n = 0, r = i.length; n < r; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, r;
    if (t.length) return t;
    const i = this.getLabels();
    for (n = 0, r = i.length; n < r; ++n) t.push(Vp(this, i[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return j1(t.sort(Wp));
  }
}
D(El, "id", "time"),
  D(El, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  });
function uo(e, t, n) {
  let r = 0,
    i = e.length - 1,
    s,
    o,
    l,
    a;
  n
    ? (t >= e[r].pos && t <= e[i].pos && ({ lo: r, hi: i } = hu(e, "pos", t)),
      ({ pos: s, time: l } = e[r]),
      ({ pos: o, time: a } = e[i]))
    : (t >= e[r].time &&
        t <= e[i].time &&
        ({ lo: r, hi: i } = hu(e, "time", t)),
      ({ time: s, pos: l } = e[r]),
      ({ time: o, pos: a } = e[i]));
  const c = o - s;
  return c ? l + ((a - l) * (t - s)) / c : l;
}
class qp extends El {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = uo(n, this.min)),
      (this._tableRange = uo(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: r } = this,
      i = [],
      s = [];
    let o, l, a, c, u;
    for (o = 0, l = t.length; o < l; ++o)
      (c = t[o]), c >= n && c <= r && i.push(c);
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: r, pos: 1 },
      ];
    for (o = 0, l = i.length; o < l; ++o)
      (u = i[o + 1]),
        (a = i[o - 1]),
        (c = i[o]),
        Math.round((u + a) / 2) !== c && s.push({ time: c, pos: o / (l - 1) });
    return s;
  }
  _generate() {
    const t = this.min,
      n = this.max;
    let r = super.getDataTimestamps();
    return (
      (!r.includes(t) || !r.length) && r.splice(0, 0, t),
      (!r.includes(n) || r.length === 1) && r.push(n),
      r.sort((i, s) => i - s)
    );
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      r = this.getLabelTimestamps();
    return (
      n.length && r.length
        ? (t = this.normalize(n.concat(r)))
        : (t = n.length ? n : r),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (uo(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      r = this.getDecimalForPixel(t) / n.factor - n.end;
    return uo(this._table, r * this._tableRange + this._minPos, !0);
  }
}
D(qp, "id", "timeseries"), D(qp, "defaults", El.defaults);
const iy = "label";
function Qp(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function o5(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function sy(e, t) {
  e.labels = t;
}
function oy(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : iy;
  const r = [];
  e.datasets = t.map((i) => {
    const s = e.datasets.find((o) => o[n] === i[n]);
    return !s || !i.data || r.includes(s)
      ? { ...i }
      : (r.push(s), Object.assign(s, i), s);
  });
}
function l5(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : iy;
  const n = { labels: [], datasets: [] };
  return sy(n, e.labels), oy(n, e.datasets, t), n;
}
function a5(e, t) {
  const {
      height: n = 150,
      width: r = 300,
      redraw: i = !1,
      datasetIdKey: s,
      type: o,
      data: l,
      options: a,
      plugins: c = [],
      fallbackContent: u,
      updateMode: d,
      ...h
    } = e,
    p = E.useRef(null),
    g = E.useRef(),
    x = () => {
      p.current &&
        ((g.current = new ra(p.current, {
          type: o,
          data: l5(l, s),
          options: a && { ...a },
          plugins: c,
        })),
        Qp(t, g.current));
    },
    v = () => {
      Qp(t, null), g.current && (g.current.destroy(), (g.current = null));
    };
  return (
    E.useEffect(() => {
      !i && g.current && a && o5(g.current, a);
    }, [i, a]),
    E.useEffect(() => {
      !i && g.current && sy(g.current.config.data, l.labels);
    }, [i, l.labels]),
    E.useEffect(() => {
      !i && g.current && l.datasets && oy(g.current.config.data, l.datasets, s);
    }, [i, l.datasets]),
    E.useEffect(() => {
      g.current && (i ? (v(), setTimeout(x)) : g.current.update(d));
    }, [i, a, l.labels, l.datasets, d]),
    E.useEffect(() => {
      g.current && (v(), setTimeout(x));
    }, [o]),
    E.useEffect(() => (x(), () => v()), []),
    Pt.createElement(
      "canvas",
      Object.assign({ ref: p, role: "img", height: n, width: r }, h),
      u
    )
  );
}
const c5 = E.forwardRef(a5);
function ly(e, t) {
  return (
    ra.register(t),
    E.forwardRef((n, r) =>
      Pt.createElement(c5, Object.assign({}, n, { ref: r, type: e }))
    )
  );
}
const u5 = ly("bar", Mo),
  d5 = ly("pie", mu);
function f5(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z",
        },
        child: [],
      },
    ],
  })(e);
}
function Gp(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(e);
}
function h5(e) {
  return ve({
    tag: "svg",
    attr: {
      version: "1",
      viewBox: "0 0 48 48",
      enableBackground: "new 0 0 48 48",
    },
    child: [
      {
        tag: "g",
        attr: { fill: "#FFA000" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M38,13c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,12.1,41.3,13,38,13 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,10c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,9.1,41.3,10,38,10z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,15.1,41.3,16,38,16 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,18.1,41.3,19,38,19 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,21.1,41.3,22,38,22 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,24.1,41.3,25,38,25 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,27.1,41.3,28,38,28 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,30.1,41.3,31,38,31 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,33.1,41.3,34,38,34 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,36.1,41.3,37,38,37 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C44,39.1,41.3,40,38,40 z",
            },
            child: [],
          },
        ],
      },
      {
        tag: "g",
        attr: { fill: "#FFC107" },
        child: [
          {
            tag: "ellipse",
            attr: { cx: "38", cy: "8", rx: "6", ry: "2" },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,12c-2.8,0-5.1-0.6-5.8-1.5C32.1,10.7,32,10.8,32,11c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,11.4,40.8,12,38,12z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,15c-2.8,0-5.1-0.6-5.8-1.5C32.1,13.7,32,13.8,32,14c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,14.4,40.8,15,38,15z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,18c-2.8,0-5.1-0.6-5.8-1.5C32.1,16.7,32,16.8,32,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,17.4,40.8,18,38,18z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,21c-2.8,0-5.1-0.6-5.8-1.5C32.1,19.7,32,19.8,32,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,20.4,40.8,21,38,21z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,24c-2.8,0-5.1-0.6-5.8-1.5C32.1,22.7,32,22.8,32,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,23.4,40.8,24,38,24z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,27c-2.8,0-5.1-0.6-5.8-1.5C32.1,25.7,32,25.8,32,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,26.4,40.8,27,38,27z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,30c-2.8,0-5.1-0.6-5.8-1.5C32.1,28.7,32,28.8,32,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,29.4,40.8,30,38,30z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,33c-2.8,0-5.1-0.6-5.8-1.5C32.1,31.7,32,31.8,32,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,32.4,40.8,33,38,33z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,36c-2.8,0-5.1-0.6-5.8-1.5C32.1,34.7,32,34.8,32,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,35.4,40.8,36,38,36z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M38,39c-2.8,0-5.1-0.6-5.8-1.5C32.1,37.7,32,37.8,32,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C43.1,38.4,40.8,39,38,39z",
            },
            child: [],
          },
        ],
      },
      {
        tag: "g",
        attr: { fill: "#FFA000" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M10,19c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,18.1,13.3,19,10,19 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,16c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,15.1,13.3,16,10,16 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,22c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,21.1,13.3,22,10,22 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,24.1,13.3,25,10,25 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,27.1,13.3,28,10,28 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,30.1,13.3,31,10,31 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,33.1,13.3,34,10,34 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,36.1,13.3,37,10,37 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C16,39.1,13.3,40,10,40 z",
            },
            child: [],
          },
        ],
      },
      {
        tag: "g",
        attr: { fill: "#FFC107" },
        child: [
          {
            tag: "ellipse",
            attr: { cx: "10", cy: "14", rx: "6", ry: "2" },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,18c-2.8,0-5.1-0.6-5.8-1.5C4.1,16.7,4,16.8,4,17c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,17.4,12.8,18,10,18z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,21c-2.8,0-5.1-0.6-5.8-1.5C4.1,19.7,4,19.8,4,20c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,20.4,12.8,21,10,21z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,24c-2.8,0-5.1-0.6-5.8-1.5C4.1,22.7,4,22.8,4,23c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,23.4,12.8,24,10,24z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,27c-2.8,0-5.1-0.6-5.8-1.5C4.1,25.7,4,25.8,4,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,26.4,12.8,27,10,27z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,30c-2.8,0-5.1-0.6-5.8-1.5C4.1,28.7,4,28.8,4,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,29.4,12.8,30,10,30z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,33c-2.8,0-5.1-0.6-5.8-1.5C4.1,31.7,4,31.8,4,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,32.4,12.8,33,10,33z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,36c-2.8,0-5.1-0.6-5.8-1.5C4.1,34.7,4,34.8,4,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,35.4,12.8,36,10,36z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M10,39c-2.8,0-5.1-0.6-5.8-1.5C4.1,37.7,4,37.8,4,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C15.1,38.4,12.8,39,10,39z",
            },
            child: [],
          },
        ],
      },
      {
        tag: "g",
        attr: { fill: "#FFA000" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M24,28c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,27.1,27.3,28,24,28 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,25c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,24.1,27.3,25,24,25 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,31c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,30.1,27.3,31,24,31 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,34c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,33.1,27.3,34,24,34 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,37c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,36.1,27.3,37,24,37 z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,40c-3.3,0-6-0.9-6-2c0,0.4,0,1.6,0,2c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.4,0-1.6,0-2C30,39.1,27.3,40,24,40 z",
            },
            child: [],
          },
        ],
      },
      {
        tag: "g",
        attr: { fill: "#FFC107" },
        child: [
          {
            tag: "ellipse",
            attr: { cx: "24", cy: "23", rx: "6", ry: "2" },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,27c-2.8,0-5.1-0.6-5.8-1.5C18.1,25.7,18,25.8,18,26c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,26.4,26.8,27,24,27z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,30c-2.8,0-5.1-0.6-5.8-1.5C18.1,28.7,18,28.8,18,29c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,29.4,26.8,30,24,30z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,33c-2.8,0-5.1-0.6-5.8-1.5C18.1,31.7,18,31.8,18,32c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,32.4,26.8,33,24,33z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,36c-2.8,0-5.1-0.6-5.8-1.5C18.1,34.7,18,34.8,18,35c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,35.4,26.8,36,24,36z",
            },
            child: [],
          },
          {
            tag: "path",
            attr: {
              d: "M24,39c-2.8,0-5.1-0.6-5.8-1.5C18.1,37.7,18,37.8,18,38c0,1.1,2.7,2,6,2s6-0.9,6-2c0-0.2-0.1-0.3-0.2-0.5 C29.1,38.4,26.8,39,24,39z",
            },
            child: [],
          },
        ],
      },
    ],
  })(e);
}
function p5(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M327.027 65.816L229.79 128.23l9.856 5.397 86.51-55.53 146.735 83.116-84.165 54.023 4.1 2.244v6.848l65.923-42.316 13.836 7.838-79.76 51.195v11.723l64.633-41.487 15.127 8.57-79.76 51.195v11.723l64.633-41.487 15.127 8.57-79.76 51.195v11.723l100.033-64.21-24.828-14.062 24.827-15.937-24.828-14.064 24.827-15.937-23.537-13.333 23.842-15.305-166.135-94.106zm31.067 44.74c-21.038 10.556-49.06 12.342-68.79 4.383l-38.57 24.757 126.903 69.47 36.582-23.48c-14.41-11.376-13.21-28.35 2.942-41.67l-59.068-33.46zM227.504 147.5l-70.688 46.094 135.61 78.066 1.33-.85c2.5-1.61 6.03-3.89 10.242-6.613 8.42-5.443 19.563-12.66 30.674-19.86 16.002-10.37 24.248-15.72 31.916-20.694L227.504 147.5zm115.467 1.17a8.583 14.437 82.068 0 1 .003 0 8.583 14.437 82.068 0 1 8.32 1.945 8.583 14.437 82.068 0 1-.87 12.282 8.583 14.437 82.068 0 1-20.273 1.29 8.583 14.437 82.068 0 1 .87-12.28 8.583 14.437 82.068 0 1 11.95-3.237zm-218.423 47.115L19.143 263.44l23.537 13.333-23.842 15.305 24.828 14.063-24.828 15.938 24.828 14.063-24.828 15.938 166.135 94.106L285.277 381.8V370.08l-99.433 63.824L39.11 350.787l14.255-9.15 131.608 74.547L285.277 351.8V340.08l-99.433 63.824L39.11 320.787l14.255-9.15 131.608 74.547L285.277 321.8V310.08l-99.433 63.824L39.11 290.787l13.27-8.52 132.9 75.28 99.997-64.188v-5.05l-5.48-3.154-93.65 60.11-146.73-83.116 94.76-60.824-9.63-5.543zm20.46 11.78l-46.92 30.115c14.41 11.374 13.21 28.348-2.942 41.67l59.068 33.46c21.037-10.557 49.057-12.342 68.787-4.384l45.965-29.504-123.96-71.358zm229.817 32.19c-8.044 5.217-15.138 9.822-30.363 19.688-11.112 7.203-22.258 14.42-30.69 19.873-4.217 2.725-7.755 5.01-10.278 6.632-.09.06-.127.08-.215.137v85.924l71.547-48.088v-84.166zm-200.99 17.48a8.583 14.437 82.068 0 1 8.32 1.947 8.583 14.437 82.068 0 1-.87 12.28 8.583 14.437 82.068 0 1-20.27 1.29 8.583 14.437 82.068 0 1 .87-12.28 8.583 14.437 82.068 0 1 11.95-3.236z",
        },
        child: [],
      },
    ],
  })(e);
}
const m5 = {
    key: "",
    subscription_id: "",
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: [],
  },
  ay = pe("/razorpay/getId", async () => {
    try {
      return (await ie.get("/payments/razorpay-key")).data;
    } catch (e) {
      L.error(e.message);
    }
  }),
  cy = pe("/buySubscription", async () => {
    var e, t;
    try {
      return (await ie.post("/payments/subscribe")).data;
    } catch (n) {
      L.error(
        (t = (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
          null
          ? void 0
          : t.message
      );
    }
  }),
  g5 = pe("/verifySubscription", async (e) => {
    var t, n;
    try {
      const r = ie.post("/payments/verify", e);
      return (
        L.promise(r, {
          loading: "Wait! payment in progress...",
          success: (i) => {
            var s;
            return (s = i == null ? void 0 : i.data) == null
              ? void 0
              : s.message;
          },
          error: "Payment failed",
        }),
        (await r).data
      );
    } catch (r) {
      L.error(
        (n = (t = r == null ? void 0 : r.response) == null ? void 0 : t.data) ==
          null
          ? void 0
          : n.message
      );
    }
  }),
  uy = pe("/cancelSubscription", async () => {
    var e, t;
    try {
      const n = ie.post("/payments/unsubscribe");
      return (
        L.promise(n, {
          loading: "unsubscribing the subscription",
          success: (r) => {
            var i;
            return (i = r == null ? void 0 : r.data) == null
              ? void 0
              : i.message;
          },
          error: "Failed to unsubscribe",
        }),
        (await n).data
      );
    } catch (n) {
      console.log(n),
        console.log(n.response),
        L.error(
          (t =
            (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
            null
            ? void 0
            : t.message
        );
    }
  }),
  dy = pe("/allPayments", async () => {
    var e, t;
    try {
      const n = ie.get("/payments?count=100");
      return (
        L.promise(n, {
          loading: "Getting the payment records",
          success: (r) => {
            var i;
            return (i = r == null ? void 0 : r.data) == null
              ? void 0
              : i.message;
          },
          error: "Failed to get payment records",
        }),
        (await n).data
      );
    } catch (n) {
      L.error(
        (t = (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
          null
          ? void 0
          : t.message
      );
    }
  }),
  y5 = js({
    name: "razorpay",
    initialState: m5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(ay.fulfilled, (t, n) => {
        var r;
        t.key = (r = n == null ? void 0 : n.payload) == null ? void 0 : r.key;
      })
        .addCase(cy.fulfilled, (t, n) => {
          var r;
          t.subscription_id =
            (r = n == null ? void 0 : n.payload) == null
              ? void 0
              : r.subscription_id;
        })
        .addCase(uy.fulfilled, (t) => {
          (t.key = ""), (t.subscription_id = "");
        })
        .addCase(dy.fulfilled, (t, n) => {
          var r, i, s;
          (t.allPayments =
            (r = n == null ? void 0 : n.payload) == null
              ? void 0
              : r.allPayments),
            (t.finalMonths =
              (i = n == null ? void 0 : n.payload) == null
                ? void 0
                : i.finalMonths),
            (t.monthlySalesRecord =
              (s = n == null ? void 0 : n.payload) == null
                ? void 0
                : s.monthlySalesRecord);
        });
    },
  }),
  x5 = y5.reducer,
  v5 = { allUserCount: 0, subscribedCount: 0 },
  fy = pe("/getStatsData", async () => {
    var e, t;
    try {
      const n = ie.get("/admin/stats/users");
      return (
        L.promise(n, {
          loading: "Wait stats are loading...",
          success: (r) => {
            var i;
            return (i = r == null ? void 0 : r.data) == null
              ? void 0
              : i.message;
          },
          error: "Failed to load stats.",
        }),
        (await n).data
      );
    } catch (n) {
      L.error(
        (t = (e = n == null ? void 0 : n.response) == null ? void 0 : e.data) ==
          null
          ? void 0
          : t.message
      );
    }
  }),
  w5 = js({
    name: "stat",
    initialState: v5,
    reducers: {},
    extraReducers: (e) => {
      e.addCase(fy.fulfilled, (t, n) => {
        var r, i, s;
        (r = n == null ? void 0 : n.payload) != null &&
          r.success &&
          ((t.allUserCount =
            (i = n == null ? void 0 : n.payload) == null
              ? void 0
              : i.allUsersCount),
          (t.subscribedCount =
            (s = n == null ? void 0 : n.payload) == null
              ? void 0
              : s.subscribedUsersCount));
      });
    },
  }),
  b5 = w5.reducer;
ra.register(Ri, To, vu, $C, wu, HC, GC);
function _5() {
  const e = Ke(),
    t = ue(),
    { allUserCount: n, subscribedCount: r } = lt((u) => u.stat),
    { allPayments: i, monthlySalesRecord: s } = lt((u) => u.razorpay),
    { courseData: o } = lt((u) => u.course),
    l = async (u) => {
      var d;
      if (window.confirm("Are you sure you want to delete the course ?")) {
        const h = await e(cS(u));
        (d = h == null ? void 0 : h.payload) != null &&
          d.success &&
          (await e(gl()));
      }
    },
    a = {
      labels: ["Registered User", "Enrolled User"],
      fontColor: "white",
      datasets: [
        {
          label: "User Details",
          data: [n, r],
          backgroundColor: ["yellow", "green"],
          borderWidth: 1,
          borderColor: ["yellow", "green"],
        },
      ],
    },
    c = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      fontColor: "white",
      datasets: [
        {
          label: "Sales / Month",
          data: s,
          backgroundColor: ["red"],
          borderWidth: 2,
          borderColor: ["white"],
        },
      ],
    };
  return (
    E.useEffect(() => {
      (async () => (await e(dy()), await e(fy()), await e(gl())))();
    }, []),
    f.jsx(we, {
      children: f.jsxs("div", {
        className: "min-h-screen flex flex-col flex-wrap gap-10 text-white",
        children: [
          f.jsx("h1", {
            className: "text-4xl text-center font-bold text-yellow-500",
            children: "Admin Dashboard",
          }),
          f.jsxs("div", {
            className: "grid grid-cols-2 gap-5 mx-10",
            children: [
              f.jsxs("div", {
                className:
                  "flex flex-col items-center gap-10 p-5 shadow-lg rounded-md",
                children: [
                  f.jsx("div", {
                    className: "h-80 w-80",
                    children: f.jsx(d5, { data: a }),
                  }),
                  f.jsxs("div", {
                    className: "grid grid-cols-2 gap-5 mx-10",
                    children: [
                      f.jsxs("div", {
                        className:
                          "shadow-lg flex items-center justify-center p-5 gap-5",
                        children: [
                          f.jsxs("div", {
                            className:
                              "flex flex-col justify-center items-center font-bold",
                            children: [
                              f.jsx("p", { children: "Registered Users" }),
                              f.jsx("h3", {
                                className: "text-3xl",
                                children: n,
                              }),
                            ],
                          }),
                          f.jsx(Gp, { className: "text-5xl text-yellow-500" }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "shadow-lg flex items-center justify-center p-5 gap-5",
                        children: [
                          f.jsxs("div", {
                            className:
                              "flex flex-col justify-center items-center font-bold",
                            children: [
                              f.jsx("p", { children: "Subscribed Users" }),
                              f.jsx("h3", {
                                className: "text-3xl",
                                children: r,
                              }),
                            ],
                          }),
                          f.jsx(Gp, { className: "text-5xl text-green-500" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "flex flex-col items-center gap-10 p-5 shadow-lg rounded-md",
                children: [
                  f.jsx("div", {
                    className: "h-80 w-full",
                    children: f.jsx(u5, { data: c }),
                  }),
                  f.jsxs("div", {
                    className: "grid grid-cols-2 gap-5 mx-10",
                    children: [
                      f.jsxs("div", {
                        className:
                          "shadow-lg flex items-center justify-center p-5 gap-5",
                        children: [
                          f.jsxs("div", {
                            className:
                              "flex flex-col justify-center items-center font-bold",
                            children: [
                              f.jsx("p", { children: "Subscription Count" }),
                              f.jsx("h3", {
                                className: "text-3xl",
                                children: (i == null ? void 0 : i.count) || 0,
                              }),
                            ],
                          }),
                          f.jsx(h5, { className: "text-5xl text-yellow-500" }),
                        ],
                      }),
                      f.jsxs("div", {
                        className:
                          "shadow-lg flex items-center justify-center p-5 gap-5",
                        children: [
                          f.jsxs("div", {
                            className:
                              "flex flex-col justify-center items-center font-bold",
                            children: [
                              f.jsx("p", { children: "Total Revenue" }),
                              f.jsx("h3", {
                                className: "text-3xl",
                                children:
                                  (i == null ? void 0 : i.count) * 499 || 0,
                              }),
                            ],
                          }),
                          f.jsx(p5, { className: "text-5xl text-green-500" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className:
              "flex flex-col justify-center gap-3 p-10 rounded-lg text-white shadow-lg m-10",
            children: [
              f.jsxs("div", {
                className: "flex justify-between my-2 items-center",
                children: [
                  f.jsx("h1", {
                    className: "text-3xl font-semibold",
                    children: "Course Overview",
                  }),
                  f.jsx("button", {
                    onClick: () => {
                      t("/course/create");
                    },
                    className:
                      "bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer px-3",
                    children: "Create new course",
                  }),
                ],
              }),
              f.jsxs("table", {
                className: "table overflow-x-scroll",
                children: [
                  f.jsx("thead", {
                    className: "",
                    children: f.jsxs("tr", {
                      children: [
                        f.jsx("th", { children: "S. No." }),
                        f.jsx("th", { children: "Course Title" }),
                        f.jsx("th", { children: "Course Category" }),
                        f.jsx("th", { children: "Instructor" }),
                        f.jsx("th", { children: "Total Lectures" }),
                        f.jsx("th", { children: "Description" }),
                        f.jsx("th", { children: "Actions" }),
                      ],
                    }),
                  }),
                  f.jsx("tbody", {
                    children:
                      o == null
                        ? void 0
                        : o.map((u, d) =>
                            f.jsxs(
                              "tr",
                              {
                                className: `${
                                  (d + 1) % 2 === 0 ? "bg-zinc-900" : ""
                                }`,
                                children: [
                                  f.jsx("td", { children: d + 1 }),
                                  f.jsx("td", {
                                    children: f.jsx("textarea", {
                                      readOnly: !0,
                                      value: u.title,
                                      className:
                                        "w-40 h-auto bg-transparent resize-none",
                                    }),
                                  }),
                                  f.jsx("td", { children: u.category }),
                                  f.jsx("td", { children: u.createdBy }),
                                  f.jsx("td", { children: u.numberOfLectures }),
                                  f.jsx("td", {
                                    children: f.jsx("textarea", {
                                      readOnly: !0,
                                      value: u.description,
                                      className:
                                        "w-80 h-auto bg-transparent resize-none",
                                    }),
                                  }),
                                  f.jsxs("td", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      f.jsx("button", {
                                        className:
                                          "bg-yellow-500 hover:bg-ywllow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold",
                                        onClick: () =>
                                          t("/course/displaylectures", {
                                            state: { ...u },
                                          }),
                                        children: f.jsx(vb, {}),
                                      }),
                                      f.jsx("button", {
                                        className:
                                          "bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold",
                                        onClick: () =>
                                          t("/course/update", {
                                            state: { ...u },
                                          }),
                                        children: f.jsx(hS, {}),
                                      }),
                                      f.jsx("button", {
                                        className:
                                          "bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold",
                                        onClick: () =>
                                          l(u == null ? void 0 : u._id),
                                        children: f.jsx(Sb, {}),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              u._id
                            )
                          ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function S5(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
        },
        child: [],
      },
    ],
  })(e);
}
function k5({
  data: e,
  count: t,
  selectedIndex: n = 1,
  role: r,
  playLecture: i,
  removeLectureFunc: s,
}) {
  const { title: o, description: l } = e;
  return f.jsxs("div", {
    className: "flex my-2 rounded-xl overflow-hidden",
    children: [
      f.jsxs("div", {
        className: `${
          n === t ? "bg-blue-600" : "bg-blue-900"
        } cursor-pointer p-2`,
        onClick: i,
        children: [
          f.jsxs("p", { children: ["Lecture: ", t] }),
          f.jsx("h3", {
            className: `${
              n === t ? "text-yellow-300" : ""
            } text-lg font-semibold`,
            children: o,
          }),
          f.jsx("p", { className: "line-clamp-2 text-sm", children: l }),
        ],
      }),
      r &&
        r === "ADMIN" &&
        f.jsx("button", {
          onClick: s,
          className:
            "text-3xl px-3 bg-red-500 hover:bg-red-600 active:text-black transition-all ease-in-out duration-300",
          children: f.jsx(S5, {}),
        }),
    ],
  });
}
function C5() {
  var d, h;
  const { state: e } = fn(),
    t = Ke(),
    n = ue(),
    { lectures: r } = lt((p) => p.lecture),
    { role: i } = lt((p) => p.auth),
    [s, o] = E.useState(!0),
    [l, a] = E.useState(0),
    c = async () => {
      await t(x1(e._id)), o(!1);
    },
    u = async (p) => {
      var x, v;
      const g = await t(
        vS({
          courseId: e == null ? void 0 : e._id,
          lectureId: (x = r[p]) == null ? void 0 : x._id,
        })
      );
      (v = g == null ? void 0 : g.payload) != null && v.success && (await c());
    };
  return (
    E.useEffect(() => {
      e || n("/courses"), c();
    }, []),
    f.jsx(we, {
      children: s
        ? "Loading"
        : r && r.length > 0
        ? f.jsxs("div", {
            className:
              "grid grid-cols-3 min-h-screen justify-center text-white",
            children: [
              f.jsxs("div", {
                className: "col-span-2 px-5",
                children: [
                  f.jsx("div", {
                    className: "",
                    children: f.jsx("video", {
                      src:
                        (h = (d = r[l]) == null ? void 0 : d.lecture) == null
                          ? void 0
                          : h.secure_url,
                      controls: !0,
                      className: "rounded-2xl w-full",
                      controlsList: "nodownload",
                    }),
                  }),
                  f.jsxs("p", {
                    className: "bg-yellow-600 p-1 inline-block my-3",
                    children: [
                      e.title,
                      ": Lecture - ",
                      l + 1,
                      "/",
                      e.numberOfLectures,
                    ],
                  }),
                  f.jsx("h3", {
                    className: "text-3xl text-yellow-600 font-bold",
                    children: r[l].title,
                  }),
                  f.jsx("p", {
                    className: "text-xl",
                    children: r[l].description,
                  }),
                ],
              }),
              f.jsxs("div", {
                className:
                  "h-screen bg-slate-900 pt-4 pl-4 rounded-2xl overflow-scroll",
                children: [
                  f.jsx("h3", {
                    className: "text-3xl font-bold",
                    children: "All Lectures",
                  }),
                  i &&
                    i === "ADMIN" &&
                    f.jsx("button", {
                      onClick: () =>
                        n("/course/addlecture", { state: { ...e } }),
                      className:
                        "bg-blue-300 w-full text-lg py-3 my-1 rounded-xl hover:bg-blue-400 transition-all ease-in-out duration-200",
                      children: "- - - Add new lecture - - -",
                    }),
                  r.map((p, g) =>
                    f.jsx(
                      k5,
                      {
                        count: g + 1,
                        data: p,
                        selectedIndex: l + 1,
                        playLecture: () => a(g),
                        removeLectureFunc: () => u(g),
                        role: i,
                      },
                      p._id
                    )
                  ),
                ],
              }),
            ],
          })
        : f.jsxs("div", {
            className: "flex flex-col justify-center items-center min-h-screen",
            children: [
              '"No lectures available"',
              i &&
                i === "ADMIN" &&
                f.jsx("button", {
                  onClick: () => n("/course/addlecture", { state: { ...e } }),
                  className:
                    "text-white bg-blue-300 text-lg p-3 my-1 rounded-xl hover:bg-blue-400 transition-all ease-in-out duration-200",
                  children: "- - - Add new lecture - - -",
                }),
            ],
          }),
    })
  );
}
function E5() {
  const e = ue(),
    [t, n] = E.useState(9);
  return (
    E.useEffect(() => {
      if (t === 0) {
        e("/");
        return;
      }
      const r = setInterval(() => {
        n((i) => i - 1);
      }, 1e3);
      return () => clearInterval(r);
    }, [t, e]),
    f.jsxs("main", {
      className: "h-screen w-full flex flex-col justify-center items-center ",
      children: [
        f.jsxs("div", {
          className: "flex justify-center items-center ",
          children: [
            f.jsx("h1", {
              className: "font-extrabold text-9xl text-white tracking-widest",
              children: "403",
            }),
            f.jsx("p", {
              className:
                "bg-yellow-500 text-white px-2 rounded mt-5 text-sm absolute rotate-12",
              children: "Access Denied",
            }),
          ],
        }),
        f.jsx("button", {
          className:
            "mt-5 text-white border border-yellow-500 px-5 py-3 rounded-md text-lg cursor-pointer hover:bg-yellow-600 active:bg-yellow-900 transition-all ease-in-out duration-300",
          onClick: () => e(-1),
          children: "Go Back",
        }),
        f.jsxs("p", {
          children: [
            "Redirecting to '",
            f.jsx("span", {
              onClick: () => e("/"),
              className: "link text-accent cursor-pointer",
              children: "Homepage",
            }),
            "' in ",
            f.jsx("span", { className: "text-yellow-500", children: t }),
            " ",
            "seconds...",
          ],
        }),
      ],
    })
  );
}
const j5 = "/assets/homepageHeroImg-C6sI7iVC.png";
function N5() {
  const e = ue();
  return f.jsx(we, {
    children: f.jsxs("div", {
      className: "flex items-center justify-center text-white gap-10 mx-10",
      children: [
        f.jsxs("div", {
          className: "w-1/2 space-y-6",
          children: [
            f.jsxs("h1", {
              className: "text-5xl font-semibold",
              children: [
                "Find out best",
                f.jsx("span", {
                  className: "text-yellow-500 font-bold",
                  children: " Online Courses",
                }),
              ],
            }),
            f.jsx("p", {
              className: "text-gray-200 text-xl",
              children:
                "We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.",
            }),
            f.jsxs("div", {
              className: "space-x-6",
              children: [
                f.jsx("button", {
                  onClick: () => e("/courses"),
                  className:
                    "bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300",
                  children: "Explore courses",
                }),
                f.jsx("button", {
                  onClick: () => e("/contact"),
                  className:
                    "border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300",
                  children: "Contact Us",
                }),
              ],
            }),
          ],
        }),
        f.jsx("div", {
          className: "w-1/2 flex items-center justify-center",
          children: f.jsx("img", { src: j5, alt: "homepage image" }),
        }),
      ],
    }),
  });
}
function P5() {
  const e = Ke(),
    t = ue(),
    [n, r] = E.useState({ email: "", password: "" }),
    i = (o) => {
      const { name: l, value: a } = o.target;
      r({ ...n, [l]: a });
    },
    s = async (o) => {
      var a;
      if ((o.preventDefault(), !n.email || !n.password)) {
        L.error("Please fill all the field!");
        return;
      }
      const l = await e(p1(n));
      (a = l == null ? void 0 : l.payload) != null && a.success && t("/"),
        r({ email: "", password: "" });
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: f.jsxs("form", {
        onSubmit: s,
        className:
          "flex flex-col justify-center gap-3 p-4 rounded-lg text-white w-1/3 shadow-[0_0_10px_black]",
        children: [
          f.jsx("h3", {
            className: "text-center font-bold text-2xl",
            children: "Login",
          }),
          f.jsxs("div", {
            className: "gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "email",
                className: "font-semibold",
                children: "Email:",
              }),
              f.jsx("input", {
                type: "email",
                name: "email",
                id: "email",
                required: !0,
                placeholder: "Enter your email...",
                value: n.email,
                onChange: i,
                className: "w-full px-2 py-1 bg-transparent border",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "password",
                className: "font-semibold",
                children: "Password:",
              }),
              f.jsx("input", {
                type: "password",
                name: "password",
                id: "password",
                required: !0,
                placeholder: "Enter your password...",
                value: n.password,
                onChange: i,
                className: "w-full px-2 py-1 bg-transparent border",
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer",
            children: "Login",
          }),
          f.jsxs("p", {
            className: "text-center",
            children: [
              "Don't have an account?",
              f.jsx(De, {
                to: "/signup",
                className: "link text-accent cursor-pointer",
                children: "Signup",
              }),
            ],
          }),
          f.jsx("p", {
            className: "text-center",
            children: f.jsx(De, {
              to: "/ForgotPassword",
              className: "link text-accent cursor-pointer",
              children: "Forgot password?",
            }),
          }),
        ],
      }),
    }),
  });
}
function M5() {
  const e = ue(),
    [t, n] = E.useState(9);
  return (
    E.useEffect(() => {
      if (t === 0) {
        e("/");
        return;
      }
      const r = setInterval(() => {
        n((i) => i - 1);
      }, 1e3);
      return () => clearInterval(r);
    }, [t, e]),
    f.jsxs("div", {
      className: "h-screen w-full flex flex-col justify-center items-center ",
      children: [
        f.jsxs("div", {
          className: "flex justify-center items-center ",
          children: [
            f.jsx("h1", {
              className: "font-extrabold text-9xl text-white tracking-widest",
              children: "404",
            }),
            f.jsx("p", {
              className:
                "bg-yellow-500 text-white px-2 rounded mt-5 text-sm absolute rotate-12",
              children: "Page Not Found...",
            }),
          ],
        }),
        f.jsx("button", {
          className:
            "mt-5 text-white border border-yellow-500 px-5 py-3 rounded-md text-lg cursor-pointer hover:bg-yellow-600 active:bg-yellow-900 transition-all ease-in-out duration-300",
          onClick: () => e(-1),
          children: "Go Back",
        }),
        f.jsxs("p", {
          children: [
            "Redirecting to '",
            f.jsx("span", {
              onClick: () => e("/"),
              className: "link text-accent cursor-pointer",
              children: "Homepage",
            }),
            "' in ",
            f.jsx("span", { className: "text-yellow-500", children: t }),
            " ",
            "seconds...",
          ],
        }),
      ],
    })
  );
}
function O5(e) {
  return ve({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z",
        },
        child: [],
      },
    ],
  })(e);
}
function R5() {
  const e = Ke(),
    t = ue(),
    [n, r] = E.useState(!0),
    { key: i, subscription_id: s } = lt((c) => c.razorpay),
    o = {
      razorpay_payment_id: "",
      razorpay_subscription_id: "",
      razorpay_signature: "",
    },
    l = async (c) => {
      if ((c.preventDefault(), !i || !s)) {
        L.error("Something went wrong!");
        return;
      }
      const u = {
        key: i,
        subscription_id: s,
        name: "mohib schools Pvt. Ltd.",
        description: "The best school for quality learning.",
        theme: { color: "#F37254" },
        handler: async function (h) {
          var g;
          (o.razorpay_payment_id = h.razorpay_payment_id),
            (o.razorpay_signature = h.razorpay_signature),
            (o.razorpay_subscription_id = h.razorpay_subscription_id);
          const p = await e(g5(o));
          await e(ea()),
            (g = p == null ? void 0 : p.payload) != null && g.success
              ? t("/payment/checkout/success")
              : t("/payment/checkout/fail");
        },
      };
      new window.Razorpay(u).open();
    },
    a = async () => {
      await e(ay()), await e(cy()), r(!1);
    };
  return (
    E.useEffect(() => {
      a();
    }, []),
    f.jsx(we, {
      children: n
        ? f.jsx("div", {
            className:
              "min-h-screen flex items-center justify-center text-white",
            children: "Loading...",
          })
        : f.jsx("form", {
            onSubmit: l,
            className:
              "min-h-screen flex items-center justify-center text-white",
            children: f.jsxs("div", {
              className:
                "w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative",
              children: [
                f.jsx("h1", {
                  className:
                    "bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg",
                  children: "Subscription Bundle",
                }),
                f.jsxs("div", {
                  className: "px-4 space-y-5 text-center",
                  children: [
                    f.jsxs("p", {
                      className: "text-[17px]",
                      children: [
                        "This purchase will allow you to access all available course of our platform for",
                        " ",
                        f.jsxs("span", {
                          className: "text-yellow-500 font-bold",
                          children: [f.jsx("br", {}), "1 Year duration"],
                        }),
                        " ",
                        "All the existing and new launched courses will be also available",
                      ],
                    }),
                    f.jsxs("p", {
                      className:
                        "flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500",
                      children: [
                        f.jsx(O5, {}),
                        f.jsx("span", { children: "499" }),
                        " only",
                      ],
                    }),
                    f.jsxs("div", {
                      className: "text-gray-200",
                      children: [
                        f.jsx("p", { children: "100% refund on cancellation" }),
                        f.jsx("p", {
                          children: "* Terms and conditions applied *",
                        }),
                      ],
                    }),
                    f.jsx("button", {
                      type: "submit",
                      className:
                        "bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2",
                      children: "Buy now",
                    }),
                  ],
                }),
              ],
            }),
          }),
    })
  );
}
function T5() {
  const e = ue();
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("div", {
        className:
          "text-white rounded-lg w-1/4 overflow-hidden shadow-[0_0_10px_black]",
        children: [
          f.jsx("h1", {
            className: "bg-red-600 text-center p-7 text-2xl font-bold",
            children: "Payment Failed",
          }),
          f.jsxs("div", {
            className:
              "h-72 flex flex-col gap-9 justify-center items-center text-center",
            children: [
              f.jsxs("div", {
                className: "space-y-2",
                children: [
                  f.jsx("h2", {
                    className: "text-lg font-semibold",
                    children: "Oops ! Your payment failed",
                  }),
                  f.jsx("p", { children: "Please try again later" }),
                ],
              }),
              f.jsx(yS, { className: "text-7xl text-red-600" }),
            ],
          }),
          f.jsx("button", {
            onClick: () => e("/"),
            className: `text-center w-full p-2\r
            bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 font-semibold text-xl cursor-pointer`,
            children: "Go to Homepage",
          }),
        ],
      }),
    }),
  });
}
function L5() {
  const e = ue();
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("div", {
        className:
          "text-white rounded-lg w-1/4 overflow-hidden shadow-[0_0_10px_black]",
        children: [
          f.jsx("h1", {
            className: "bg-green-600 text-center p-7 text-2xl font-bold",
            children: "Payment Successfull",
          }),
          f.jsxs("div", {
            className:
              "h-72 flex flex-col gap-9 justify-center items-center text-center",
            children: [
              f.jsxs("div", {
                className: "space-y-2",
                children: [
                  f.jsx("h2", {
                    className: "text-lg font-semibold",
                    children: "Welcome to the pro bundle",
                  }),
                  f.jsx("p", {
                    children: "Now you can enjoy all the courses.",
                  }),
                ],
              }),
              f.jsx(f5, { className: "text-7xl text-green-600" }),
            ],
          }),
          f.jsx("button", {
            onClick: () => e("/"),
            className: `text-center w-full p-2\r
            bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 font-semibold text-xl cursor-pointer`,
            children: "Go to Homepage",
          }),
        ],
      }),
    }),
  });
}
function D5() {
  const e = ue(),
    t = Ke(),
    [n, r] = E.useState(""),
    [i, s] = E.useState({ fullName: "", email: "", password: "", avatar: "" }),
    o = (c) => {
      c.preventDefault();
      const u = c.target.files[0];
      if (u) {
        s({ ...i, avatar: u });
        const d = new FileReader();
        d.readAsDataURL(u),
          d.addEventListener("load", function () {
            r(this.result);
          });
      }
    },
    l = (c) => {
      const { name: u, value: d } = c.target;
      s({ ...i, [u]: d });
    },
    a = async (c) => {
      var h;
      if (
        (c.preventDefault(),
        !i.fullName || !i.email || !i.password || !i.avatar)
      ) {
        L.error("Please fill all the details");
        return;
      }
      if (i.fullName.length < 5) {
        L.error("Name must be atleast 5 character");
        return;
      }
      if (!g1(i.email)) {
        L.error("Invalid Email Id");
        return;
      }
      if (!nS(i.password)) {
        L.error(
          "Password should be 6 - 16 character long with atleast a number and special character"
        );
        return;
      }
      const u = new FormData();
      u.append("fullName", i.fullName),
        u.append("email", i.email),
        u.append("password", i.password),
        u.append("avatar", i.avatar);
      const d = await t(h1(u));
      (h = d == null ? void 0 : d.payload) != null && h.success && e("/"),
        s({ fullName: "", email: "", password: "", avatar: "" }),
        r("");
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: f.jsxs("form", {
        noValidate: !0,
        onSubmit: a,
        className:
          "flex flex-col justify-center gap-3 p-4 rounded-lg text-white w-1/3 shadow-[0_0_10px_black]",
        children: [
          f.jsx("h1", {
            className: "text-2xl text-center font-bold",
            children: "Registration Page",
          }),
          f.jsx("label", {
            htmlFor: "avatar",
            className: "cursor-pointer",
            children: n
              ? f.jsx("img", {
                  src: n,
                  className: "w-24 h-24 rounded-full m-auto",
                })
              : f.jsx(M0, { className: "w-24 h-24 rounded-full m-auto" }),
          }),
          f.jsx("input", {
            type: "file",
            className: "hidden",
            name: "avatar",
            id: "avatar",
            accept: ".jpg,jpeg,.png,.svg",
            onChange: o,
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "fullName",
                className: "font-semibold",
                children: "Name:",
              }),
              f.jsx("input", {
                type: "text",
                id: "fullName",
                name: "fullName",
                required: !0,
                placeholder: "Enter your name...",
                className: "bg-transparent border px-2 py-1",
                onChange: l,
                value: i.fullName,
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "email",
                className: "font-semibold",
                children: "Email:",
              }),
              f.jsx("input", {
                type: "email",
                id: "email",
                name: "email",
                required: !0,
                placeholder: "Enter your email...",
                className: "bg-transparent border px-2 py-1",
                onChange: l,
                value: i.email,
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "password",
                className: "font-semibold",
                children: "Password:",
              }),
              f.jsx("input", {
                type: "password",
                id: "password",
                name: "password",
                required: !0,
                placeholder: "Enter your password...",
                className: "bg-transparent border px-2 py-1",
                onChange: l,
                value: i.password,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer",
            children: "Create Account",
          }),
          f.jsxs("p", {
            className: "text-center",
            children: [
              "Already have an account?",
              f.jsx(De, {
                to: "/login",
                className: "link text-accent cursor-pointer",
                children: "Login",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function A5() {
  const e = Ke(),
    t = ue(),
    [n, r] = E.useState({ oldPassword: "", newPassword: "" }),
    i = (o) => {
      const { name: l, value: a } = o.target;
      r({ ...n, [l]: a });
    },
    s = async (o) => {
      var a;
      o.preventDefault(),
        (!n.oldPassword || !n.newPassword) && L.error("All feild are required");
      const l = await e(Q3(n));
      (a = l == null ? void 0 : l.payload) != null &&
        a.success &&
        (r({ oldPassword: "", newPassword: "" }), t(-1));
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("form", {
        onSubmit: s,
        className:
          "flex flex-col justify-center gap-3 w-1/3 p-12 rounded-lg text-white shadow-[0_0_10px_black]",
        children: [
          f.jsxs("div", {
            className: "mb-4 flex justify-between relative items-center",
            children: [
              f.jsx("button", {
                type: "button",
                onClick: () => t(-1),
                className: "absolute left-0 p-3 cursor-pointer text-xl",
                children: f.jsx(ta, {}),
              }),
              f.jsx("h1", {
                className: "text-3xl font-semibold text-center m-auto relative",
                children: "Change Password",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "oldPassword",
                className: "font-semibold text-xl",
                children: "Old Password:",
              }),
              f.jsx("input", {
                type: "password",
                name: "oldPassword",
                id: "oldPassword",
                placeholder: "Enter your old password..",
                className: "bg-transparent border px-2 py-1",
                value: n.oldPassword,
                onChange: i,
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "newPassword",
                className: "font-semibold text-xl",
                children: "New Password:",
              }),
              f.jsx("input", {
                type: "password",
                name: "newPassword",
                id: "newPassword",
                placeholder: "Enter your old password..",
                className: "bg-transparent border px-2 py-1",
                value: n.newPassword,
                onChange: i,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "w-full text-lg bg-yellow-600 py-2 font-semibold cursor-pointer rounded-sm hover:bg-yellow-400 transition-all ease-in-out duration-300",
            children: "Change Password",
          }),
        ],
      }),
    }),
  });
}
function z5() {
  const e = Ke(),
    t = ue(),
    n = lt((a) => a.auth).data._id,
    [r, i] = E.useState({ id: n, previewImage: "", fullName: "", avatar: "" }),
    s = (a) => {
      a.preventDefault();
      const c = a.target.files[0];
      if (c) {
        const u = new FileReader();
        u.readAsDataURL(c),
          u.addEventListener("load", function () {
            i({ ...r, avatar: c, previewImage: this.result });
          });
      }
    },
    o = (a) => {
      a.preventDefault();
      const { name: c, value: u } = a.target;
      i({ ...r, [c]: u });
    },
    l = async (a) => {
      var d;
      if ((a.preventDefault(), !r.fullName && !r.avatar)) {
        L.error("Fill the form to update");
        return;
      }
      if (r.fullName && r.fullName.length < 5) {
        L.error("Name cannot be of less than 5 characters");
        return;
      }
      const c = new FormData();
      r.fullName && c.append("fullName", r.fullName),
        r.avatar && c.append("avatar", r.avatar);
      const u = await e(q3([r.id, c]));
      (d = u == null ? void 0 : u.payload) != null &&
        d.success &&
        (i({ id: n, previewImage: "", fullName: "", avatar: "" }),
        await e(ea()),
        t("/user/profile"));
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "min-h-screen flex  justify-center items-center",
      children: f.jsxs("form", {
        onSubmit: l,
        className:
          "flex flex-col justify-center gap-3 p-12 rounded-lg text-white w-1/3 shadow-[0_0_10px_black]",
        children: [
          f.jsxs("div", {
            className: "mb-4 flex justify-between relative items-center",
            children: [
              f.jsx("button", {
                type: "button",
                onClick: () => t(-1),
                className: "absolute left-0 p-3 cursor-pointer text-xl",
                children: f.jsx(ta, {}),
              }),
              f.jsx("h1", {
                className: "text-3xl font-semibold text-center m-auto relative",
                children: "Edit Profile",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "avatar",
                className: "cursor-pointer",
                children: r.previewImage
                  ? f.jsx("img", {
                      src: r.previewImage,
                      alt: "Profile Image",
                      className: "w-40 h-40 rounded-full m-auto border-2",
                    })
                  : f.jsx(M0, {
                      className: "w-40 h-40 rounded-full m-auto border-2",
                    }),
              }),
              f.jsx("input", {
                type: "file",
                name: "avatar",
                id: "avatar",
                onChange: s,
                className: "hidden",
                accept: ".png,.jpg,.jpeg,.svg ",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "fullName",
                className: "font-semibold text-xl",
                children: "Name:",
              }),
              f.jsx("input", {
                type: "text",
                placeholder: "Enter you full name...",
                name: "fullName",
                id: "fullName",
                className: "bg-transparent border px-2 py-1",
                value: r.fullName,
                onChange: o,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer",
            children: "Submit",
          }),
        ],
      }),
    }),
  });
}
function F5() {
  const e = Ke(),
    t = ue(),
    [n, r] = E.useState({ email: "" }),
    i = (o) => {
      const { name: l, value: a } = o.target;
      r({ ...n, [l]: a });
    },
    s = async (o) => {
      var a;
      o.preventDefault(), n.email || L.error("All feild are required");
      const l = await e(G3(n));
      (a = l == null ? void 0 : l.payload) != null &&
        a.success &&
        r({ email: "" });
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("form", {
        onSubmit: s,
        className:
          "flex flex-col justify-center gap-3 w-1/3 p-12 rounded-lg text-white shadow-[0_0_10px_black]",
        children: [
          f.jsxs("div", {
            className: "mb-4 flex justify-between relative items-center",
            children: [
              f.jsx("button", {
                type: "button",
                onClick: () => t(-1),
                className: "absolute left-0 p-3 cursor-pointer text-xl",
                children: f.jsx(ta, {}),
              }),
              f.jsx("h1", {
                className: "text-3xl font-semibold text-center m-auto relative",
                children: "Forgot Password",
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "email",
                className: "font-semibold text-xl",
                children: "Email:",
              }),
              f.jsx("input", {
                type: "email",
                name: "email",
                id: "email",
                placeholder: "Enter your email..",
                className: "bg-transparent border px-2 py-1",
                value: n.email,
                onChange: i,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "w-full text-lg bg-yellow-600 py-2 font-semibold cursor-pointer rounded-sm hover:bg-yellow-400 transition-all ease-in-out duration-300",
            children: "Submit",
          }),
        ],
      }),
    }),
  });
}
function I5() {
  const e = ue(),
    t = Ke(),
    { data: n } = lt((c) => c.auth),
    { avatar: r, fullName: i, email: s, role: o, subscription: l } = n,
    a = async (c) => {
      c.preventDefault(), await t(uy()), await t(ea());
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "min-h-screen flex justify-center items-center",
      children: f.jsxs("div", {
        className:
          "flex flex-col justify-center gap-3 p-12 rounded-lg text-white w-1/3 shadow-[0_0_10px_black]",
        children: [
          f.jsx("img", {
            src: r.secure_url,
            alt: "profile_image",
            className: "w-40 h-40 rounded-full m-auto border-2",
          }),
          f.jsx("h3", {
            className: "text-center text-2xl font-semibold capitalize",
            children: i,
          }),
          f.jsxs("div", {
            className: "grid grid-cols-2 gap-1",
            children: [
              f.jsx("p", { children: "Email" }),
              f.jsxs("p", { children: [": ", s] }),
              f.jsx("p", { children: "Role" }),
              f.jsxs("p", { children: [": ", o] }),
              f.jsx("p", { children: "Subscription" }),
              f.jsxs("p", {
                children: [
                  ":",
                  " ",
                  (l == null ? void 0 : l.status) === "active"
                    ? l.status
                    : "Not Subscribed",
                ],
              }),
              f.jsx("p", { children: "Subscription Id" }),
              f.jsxs("p", {
                children: [
                  ":",
                  " ",
                  (l == null ? void 0 : l.status) === "active"
                    ? l.id
                    : "Not Subscribed",
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [
              f.jsx(De, {
                to: "/changepassword",
                className:
                  "w-1/2 text-center bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer",
                children: "Change Password",
              }),
              f.jsx(De, {
                to: "/user/editprofile",
                className:
                  "w-1/2 text-center bg-yellow-600 hover:bg-yellow-400 transition-all ease-out duration-300 rounded-sm py-2 mt-2 font-semibold text-lg cursor-pointer",
                children: "Edit Profile",
              }),
            ],
          }),
          (l == null ? void 0 : l.status) === "active"
            ? f.jsx("button", {
                onClick: a,
                className:
                  "bg-red-600 hover:bg-red-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer",
                children: "Cancle Subscription",
              })
            : o !== "ADMIN"
            ? f.jsx("button", {
                onClick: () => e("/payment/checkout"),
                className:
                  "bg-red-600 hover:bg-red-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer",
                children: "Buy Subscription",
              })
            : f.jsx("button", {
                onClick: () => e("/admin/dashboard"),
                className:
                  "bg-blue-600 hover:bg-blue-400 transition-all ease-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer",
                children: "Go to Admin Dashboard",
              }),
        ],
      }),
    }),
  });
}
function B5() {
  const e = Ke(),
    t = ue(),
    { resetToken: n } = Rw(),
    [r, i] = E.useState({ password: "", resetToken: n }),
    s = (l) => {
      const { name: a, value: c } = l.target;
      i({ ...r, [a]: c });
    },
    o = async (l) => {
      var c;
      l.preventDefault(), r.password || L.error("All feild are required");
      const a = await e(J3([r.resetToken, r]));
      (c = a == null ? void 0 : a.payload) != null &&
        c.success &&
        (i({ password: "", resetToken: n }), t("/login"));
    };
  return f.jsx(we, {
    children: f.jsx("div", {
      className: "flex justify-center items-center min-h-screen",
      children: f.jsxs("form", {
        onSubmit: o,
        className:
          "flex flex-col justify-center gap-3 w-1/3 p-12 rounded-lg text-white shadow-[0_0_10px_black]",
        children: [
          f.jsx("h1", {
            className: "text-3xl font-semibold text-center m-auto relative",
            children: "Reset Password",
          }),
          f.jsxs("div", {
            className: "flex flex-col gap-1",
            children: [
              f.jsx("label", {
                htmlFor: "oldPassword",
                className: "font-semibold text-xl",
                children: "Create new password:",
              }),
              f.jsx("input", {
                type: "password",
                name: "password",
                id: "password",
                placeholder: "Enter new password..",
                className: "bg-transparent border px-2 py-1",
                value: r.password,
                onChange: s,
              }),
            ],
          }),
          f.jsx("button", {
            type: "submit",
            className:
              "w-full text-lg bg-yellow-600 py-2 font-semibold cursor-pointer rounded-sm hover:bg-yellow-400 transition-all ease-in-out duration-300",
            children: "Submit",
          }),
        ],
      }),
    }),
  });
}
function $5() {
  return f.jsx(f.Fragment, {
    children: f.jsxs(Yw, {
      children: [
        f.jsx(Z, { path: "/", element: f.jsx(N5, {}) }),
        f.jsx(Z, { path: "/about", element: f.jsx(tS, {}) }),
        f.jsx(Z, { path: "/courses", element: f.jsx(fS, {}) }),
        f.jsx(Z, { path: "/course/description", element: f.jsx(iS, {}) }),
        f.jsx(Z, { path: "/contact", element: f.jsx(rS, {}) }),
        f.jsx(Z, { path: "/denied", element: f.jsx(E5, {}) }),
        f.jsx(Z, { path: "/signup", element: f.jsx(D5, {}) }),
        f.jsx(Z, { path: "/login", element: f.jsx(P5, {}) }),
        f.jsx(Z, { path: "/changepassword", element: f.jsx(A5, {}) }),
        f.jsx(Z, { path: "/forgotpassword", element: f.jsx(F5, {}) }),
        f.jsx(Z, {
          path: "/reset-password/:resetToken",
          element: f.jsx(B5, {}),
        }),
        f.jsxs(Z, {
          element: f.jsx(ph, { allowedRoles: ["ADMIN"] }),
          children: [
            f.jsx(Z, { path: "/course/create", element: f.jsx(pS, {}) }),
            f.jsx(Z, { path: "/course/addlecture", element: f.jsx(_S, {}) }),
            f.jsx(Z, { path: "/admin/dashboard", element: f.jsx(_5, {}) }),
            f.jsx(Z, { path: "/course/update", element: f.jsx(mS, {}) }),
          ],
        }),
        f.jsxs(Z, {
          element: f.jsx(ph, { allowedRoles: ["ADMIN", "USER"] }),
          children: [
            f.jsx(Z, { path: "/user/profile", element: f.jsx(I5, {}) }),
            f.jsx(Z, { path: "/user/editprofile", element: f.jsx(z5, {}) }),
            f.jsx(Z, { path: "/payment/checkout", element: f.jsx(R5, {}) }),
            f.jsx(Z, {
              path: "/payment/checkout/success",
              element: f.jsx(L5, {}),
            }),
            f.jsx(Z, {
              path: "/payment/checkout/fail",
              element: f.jsx(T5, {}),
            }),
            f.jsx(Z, {
              path: "/course/displaylectures",
              element: f.jsx(C5, {}),
            }),
          ],
        }),
        f.jsx(Z, { path: "*", element: f.jsx(M5, {}) }),
      ],
    }),
  });
}
const U5 = Jb({
  reducer: { auth: eS, course: dS, razorpay: x5, lecture: bS, stat: b5 },
});
u0(document.getElementById("root")).render(
  f.jsx(Z2, {
    store: U5,
    children: f.jsxs(eb, { children: [f.jsx($5, {}), f.jsx(R2, {})] }),
  })
);
