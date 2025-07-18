function FS(W) {
  return W && W.__esModule && Object.prototype.hasOwnProperty.call(W, "default") ? W.default : W;
}
var ig = { exports: {} }, rp = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mb;
function IS() {
  if (Mb) return rp;
  Mb = 1;
  var W = Symbol.for("react.transitional.element"), te = Symbol.for("react.fragment");
  function Le(_, Ae, Me) {
    var dt = null;
    if (Me !== void 0 && (dt = "" + Me), Ae.key !== void 0 && (dt = "" + Ae.key), "key" in Ae) {
      Me = {};
      for (var bt in Ae)
        bt !== "key" && (Me[bt] = Ae[bt]);
    } else Me = Ae;
    return Ae = Me.ref, {
      $$typeof: W,
      type: _,
      key: dt,
      ref: Ae !== void 0 ? Ae : null,
      props: Me
    };
  }
  return rp.Fragment = te, rp.jsx = Le, rp.jsxs = Le, rp;
}
var sp = {}, cg = { exports: {} }, Je = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ub;
function PS() {
  if (Ub) return Je;
  Ub = 1;
  var W = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), Ae = Symbol.for("react.profiler"), Me = Symbol.for("react.consumer"), dt = Symbol.for("react.context"), bt = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), k = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), $ = Symbol.iterator;
  function M(g) {
    return g === null || typeof g != "object" ? null : (g = $ && g[$] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var ce = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, je = Object.assign, Ut = {};
  function We(g, N, Q) {
    this.props = g, this.context = N, this.refs = Ut, this.updater = Q || ce;
  }
  We.prototype.isReactComponent = {}, We.prototype.setState = function(g, N) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, N, "setState");
  }, We.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function nt() {
  }
  nt.prototype = We.prototype;
  function dl(g, N, Q) {
    this.props = g, this.context = N, this.refs = Ut, this.updater = Q || ce;
  }
  var ct = dl.prototype = new nt();
  ct.constructor = dl, je(ct, We.prototype), ct.isPureReactComponent = !0;
  var Wt = Array.isArray, He = { H: null, A: null, T: null, S: null, V: null }, Rt = Object.prototype.hasOwnProperty;
  function ke(g, N, Q, F, ne, Se) {
    return Q = Se.ref, {
      $$typeof: W,
      type: g,
      key: N,
      ref: Q !== void 0 ? Q : null,
      props: Se
    };
  }
  function At(g, N) {
    return ke(
      g.type,
      N,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function re(g) {
    return typeof g == "object" && g !== null && g.$$typeof === W;
  }
  function Dt(g) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(Q) {
      return N[Q];
    });
  }
  var ve = /\/+/g;
  function Re(g, N) {
    return typeof g == "object" && g !== null && g.key != null ? Dt("" + g.key) : N.toString(36);
  }
  function zt() {
  }
  function wt(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(zt, zt) : (g.status = "pending", g.then(
          function(N) {
            g.status === "pending" && (g.status = "fulfilled", g.value = N);
          },
          function(N) {
            g.status === "pending" && (g.status = "rejected", g.reason = N);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function ht(g, N, Q, F, ne) {
    var Se = typeof g;
    (Se === "undefined" || Se === "boolean") && (g = null);
    var ue = !1;
    if (g === null) ue = !0;
    else
      switch (Se) {
        case "bigint":
        case "string":
        case "number":
          ue = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case W:
            case te:
              ue = !0;
              break;
            case oe:
              return ue = g._init, ht(
                ue(g._payload),
                N,
                Q,
                F,
                ne
              );
          }
      }
    if (ue)
      return ne = ne(g), ue = F === "" ? "." + Re(g, 0) : F, Wt(ne) ? (Q = "", ue != null && (Q = ue.replace(ve, "$&/") + "/"), ht(ne, N, Q, "", function(xt) {
        return xt;
      })) : ne != null && (re(ne) && (ne = At(
        ne,
        Q + (ne.key == null || g && g.key === ne.key ? "" : ("" + ne.key).replace(
          ve,
          "$&/"
        ) + "/") + ue
      )), N.push(ne)), 1;
    ue = 0;
    var al = F === "" ? "." : F + ":";
    if (Wt(g))
      for (var ze = 0; ze < g.length; ze++)
        F = g[ze], Se = al + Re(F, ze), ue += ht(
          F,
          N,
          Q,
          Se,
          ne
        );
    else if (ze = M(g), typeof ze == "function")
      for (g = ze.call(g), ze = 0; !(F = g.next()).done; )
        F = F.value, Se = al + Re(F, ze++), ue += ht(
          F,
          N,
          Q,
          Se,
          ne
        );
    else if (Se === "object") {
      if (typeof g.then == "function")
        return ht(
          wt(g),
          N,
          Q,
          F,
          ne
        );
      throw N = String(g), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ue;
  }
  function O(g, N, Q) {
    if (g == null) return g;
    var F = [], ne = 0;
    return ht(g, F, "", "", function(Se) {
      return N.call(Q, Se, ne++);
    }), F;
  }
  function J(g) {
    if (g._status === -1) {
      var N = g._result;
      N = N(), N.then(
        function(Q) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = Q);
        },
        function(Q) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = Q);
        }
      ), g._status === -1 && (g._status = 0, g._result = N);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var I = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function me() {
  }
  return Je.Children = {
    map: O,
    forEach: function(g, N, Q) {
      O(
        g,
        function() {
          N.apply(this, arguments);
        },
        Q
      );
    },
    count: function(g) {
      var N = 0;
      return O(g, function() {
        N++;
      }), N;
    },
    toArray: function(g) {
      return O(g, function(N) {
        return N;
      }) || [];
    },
    only: function(g) {
      if (!re(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, Je.Component = We, Je.Fragment = Le, Je.Profiler = Ae, Je.PureComponent = dl, Je.StrictMode = _, Je.Suspense = G, Je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = He, Je.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return He.H.useMemoCache(g);
    }
  }, Je.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, Je.cloneElement = function(g, N, Q) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var F = je({}, g.props), ne = g.key, Se = void 0;
    if (N != null)
      for (ue in N.ref !== void 0 && (Se = void 0), N.key !== void 0 && (ne = "" + N.key), N)
        !Rt.call(N, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && N.ref === void 0 || (F[ue] = N[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) F.children = Q;
    else if (1 < ue) {
      for (var al = Array(ue), ze = 0; ze < ue; ze++)
        al[ze] = arguments[ze + 2];
      F.children = al;
    }
    return ke(g.type, ne, void 0, void 0, Se, F);
  }, Je.createContext = function(g) {
    return g = {
      $$typeof: dt,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: Me,
      _context: g
    }, g;
  }, Je.createElement = function(g, N, Q) {
    var F, ne = {}, Se = null;
    if (N != null)
      for (F in N.key !== void 0 && (Se = "" + N.key), N)
        Rt.call(N, F) && F !== "key" && F !== "__self" && F !== "__source" && (ne[F] = N[F]);
    var ue = arguments.length - 2;
    if (ue === 1) ne.children = Q;
    else if (1 < ue) {
      for (var al = Array(ue), ze = 0; ze < ue; ze++)
        al[ze] = arguments[ze + 2];
      ne.children = al;
    }
    if (g && g.defaultProps)
      for (F in ue = g.defaultProps, ue)
        ne[F] === void 0 && (ne[F] = ue[F]);
    return ke(g, Se, void 0, void 0, null, ne);
  }, Je.createRef = function() {
    return { current: null };
  }, Je.forwardRef = function(g) {
    return { $$typeof: bt, render: g };
  }, Je.isValidElement = re, Je.lazy = function(g) {
    return {
      $$typeof: oe,
      _payload: { _status: -1, _result: g },
      _init: J
    };
  }, Je.memo = function(g, N) {
    return {
      $$typeof: k,
      type: g,
      compare: N === void 0 ? null : N
    };
  }, Je.startTransition = function(g) {
    var N = He.T, Q = {};
    He.T = Q;
    try {
      var F = g(), ne = He.S;
      ne !== null && ne(Q, F), typeof F == "object" && F !== null && typeof F.then == "function" && F.then(me, I);
    } catch (Se) {
      I(Se);
    } finally {
      He.T = N;
    }
  }, Je.unstable_useCacheRefresh = function() {
    return He.H.useCacheRefresh();
  }, Je.use = function(g) {
    return He.H.use(g);
  }, Je.useActionState = function(g, N, Q) {
    return He.H.useActionState(g, N, Q);
  }, Je.useCallback = function(g, N) {
    return He.H.useCallback(g, N);
  }, Je.useContext = function(g) {
    return He.H.useContext(g);
  }, Je.useDebugValue = function() {
  }, Je.useDeferredValue = function(g, N) {
    return He.H.useDeferredValue(g, N);
  }, Je.useEffect = function(g, N, Q) {
    var F = He.H;
    if (typeof Q == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return F.useEffect(g, N);
  }, Je.useId = function() {
    return He.H.useId();
  }, Je.useImperativeHandle = function(g, N, Q) {
    return He.H.useImperativeHandle(g, N, Q);
  }, Je.useInsertionEffect = function(g, N) {
    return He.H.useInsertionEffect(g, N);
  }, Je.useLayoutEffect = function(g, N) {
    return He.H.useLayoutEffect(g, N);
  }, Je.useMemo = function(g, N) {
    return He.H.useMemo(g, N);
  }, Je.useOptimistic = function(g, N) {
    return He.H.useOptimistic(g, N);
  }, Je.useReducer = function(g, N, Q) {
    return He.H.useReducer(g, N, Q);
  }, Je.useRef = function(g) {
    return He.H.useRef(g);
  }, Je.useState = function(g) {
    return He.H.useState(g);
  }, Je.useSyncExternalStore = function(g, N, Q) {
    return He.H.useSyncExternalStore(
      g,
      N,
      Q
    );
  }, Je.useTransition = function() {
    return He.H.useTransition();
  }, Je.version = "19.1.0", Je;
}
var yp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
yp.exports;
var Cb;
function eT() {
  return Cb || (Cb = 1, function(W, te) {
    process.env.NODE_ENV !== "production" && function() {
      function Le(m, D) {
        Object.defineProperty(Me.prototype, m, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              D[0],
              D[1]
            );
          }
        });
      }
      function _(m) {
        return m === null || typeof m != "object" ? null : (m = Rn && m[Rn] || m["@@iterator"], typeof m == "function" ? m : null);
      }
      function Ae(m, D) {
        m = (m = m.constructor) && (m.displayName || m.name) || "ReactClass";
        var ee = m + "." + D;
        ji[ee] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          D,
          m
        ), ji[ee] = !0);
      }
      function Me(m, D, ee) {
        this.props = m, this.context = D, this.refs = sf, this.updater = ee || An;
      }
      function dt() {
      }
      function bt(m, D, ee) {
        this.props = m, this.context = D, this.refs = sf, this.updater = ee || An;
      }
      function G(m) {
        return "" + m;
      }
      function k(m) {
        try {
          G(m);
          var D = !1;
        } catch {
          D = !0;
        }
        if (D) {
          D = console;
          var ee = D.error, ae = typeof Symbol == "function" && Symbol.toStringTag && m[Symbol.toStringTag] || m.constructor.name || "Object";
          return ee.call(
            D,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ae
          ), G(m);
        }
      }
      function oe(m) {
        if (m == null) return null;
        if (typeof m == "function")
          return m.$$typeof === Fr ? null : m.displayName || m.name || null;
        if (typeof m == "string") return m;
        switch (m) {
          case g:
            return "Fragment";
          case Q:
            return "Profiler";
          case N:
            return "StrictMode";
          case ue:
            return "Suspense";
          case al:
            return "SuspenseList";
          case ta:
            return "Activity";
        }
        if (typeof m == "object")
          switch (typeof m.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), m.$$typeof) {
            case me:
              return "Portal";
            case ne:
              return (m.displayName || "Context") + ".Provider";
            case F:
              return (m._context.displayName || "Context") + ".Consumer";
            case Se:
              var D = m.render;
              return m = m.displayName, m || (m = D.displayName || D.name || "", m = m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef"), m;
            case ze:
              return D = m.displayName || null, D !== null ? D : oe(m.type) || "Memo";
            case xt:
              D = m._payload, m = m._init;
              try {
                return oe(m(D));
              } catch {
              }
          }
        return null;
      }
      function $(m) {
        if (m === g) return "<>";
        if (typeof m == "object" && m !== null && m.$$typeof === xt)
          return "<...>";
        try {
          var D = oe(m);
          return D ? "<" + D + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function M() {
        var m = Ve.A;
        return m === null ? null : m.getOwner();
      }
      function ce() {
        return Error("react-stack-top-frame");
      }
      function je(m) {
        if (On.call(m, "key")) {
          var D = Object.getOwnPropertyDescriptor(m, "key").get;
          if (D && D.isReactWarning) return !1;
        }
        return m.key !== void 0;
      }
      function Ut(m, D) {
        function ee() {
          mu || (mu = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            D
          ));
        }
        ee.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: ee,
          configurable: !0
        });
      }
      function We() {
        var m = oe(this.type);
        return df[m] || (df[m] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), m = this.props.ref, m !== void 0 ? m : null;
      }
      function nt(m, D, ee, ae, ye, Ue, Ne, tt) {
        return ee = Ue.ref, m = {
          $$typeof: I,
          type: m,
          key: D,
          props: Ue,
          _owner: ye
        }, (ee !== void 0 ? ee : null) !== null ? Object.defineProperty(m, "ref", {
          enumerable: !1,
          get: We
        }) : Object.defineProperty(m, "ref", { enumerable: !1, value: null }), m._store = {}, Object.defineProperty(m._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(m, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(m, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ne
        }), Object.defineProperty(m, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: tt
        }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
      }
      function dl(m, D) {
        return D = nt(
          m.type,
          D,
          void 0,
          void 0,
          m._owner,
          m.props,
          m._debugStack,
          m._debugTask
        ), m._store && (D._store.validated = m._store.validated), D;
      }
      function ct(m) {
        return typeof m == "object" && m !== null && m.$$typeof === I;
      }
      function Wt(m) {
        var D = { "=": "=0", ":": "=2" };
        return "$" + m.replace(/[=:]/g, function(ee) {
          return D[ee];
        });
      }
      function He(m, D) {
        return typeof m == "object" && m !== null && m.key != null ? (k(m.key), Wt("" + m.key)) : D.toString(36);
      }
      function Rt() {
      }
      function ke(m) {
        switch (m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
          default:
            switch (typeof m.status == "string" ? m.then(Rt, Rt) : (m.status = "pending", m.then(
              function(D) {
                m.status === "pending" && (m.status = "fulfilled", m.value = D);
              },
              function(D) {
                m.status === "pending" && (m.status = "rejected", m.reason = D);
              }
            )), m.status) {
              case "fulfilled":
                return m.value;
              case "rejected":
                throw m.reason;
            }
        }
        throw m;
      }
      function At(m, D, ee, ae, ye) {
        var Ue = typeof m;
        (Ue === "undefined" || Ue === "boolean") && (m = null);
        var Ne = !1;
        if (m === null) Ne = !0;
        else
          switch (Ue) {
            case "bigint":
            case "string":
            case "number":
              Ne = !0;
              break;
            case "object":
              switch (m.$$typeof) {
                case I:
                case me:
                  Ne = !0;
                  break;
                case xt:
                  return Ne = m._init, At(
                    Ne(m._payload),
                    D,
                    ee,
                    ae,
                    ye
                  );
              }
          }
        if (Ne) {
          Ne = m, ye = ye(Ne);
          var tt = ae === "" ? "." + He(Ne, 0) : ae;
          return ku(ye) ? (ee = "", tt != null && (ee = tt.replace(Rl, "$&/") + "/"), At(ye, D, ee, "", function(Pt) {
            return Pt;
          })) : ye != null && (ct(ye) && (ye.key != null && (Ne && Ne.key === ye.key || k(ye.key)), ee = dl(
            ye,
            ee + (ye.key == null || Ne && Ne.key === ye.key ? "" : ("" + ye.key).replace(
              Rl,
              "$&/"
            ) + "/") + tt
          ), ae !== "" && Ne != null && ct(Ne) && Ne.key == null && Ne._store && !Ne._store.validated && (ee._store.validated = 2), ye = ee), D.push(ye)), 1;
        }
        if (Ne = 0, tt = ae === "" ? "." : ae + ":", ku(m))
          for (var xe = 0; xe < m.length; xe++)
            ae = m[xe], Ue = tt + He(ae, xe), Ne += At(
              ae,
              D,
              ee,
              Ue,
              ye
            );
        else if (xe = _(m), typeof xe == "function")
          for (xe === m.entries && (Ba || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ba = !0), m = xe.call(m), xe = 0; !(ae = m.next()).done; )
            ae = ae.value, Ue = tt + He(ae, xe++), Ne += At(
              ae,
              D,
              ee,
              Ue,
              ye
            );
        else if (Ue === "object") {
          if (typeof m.then == "function")
            return At(
              ke(m),
              D,
              ee,
              ae,
              ye
            );
          throw D = String(m), Error(
            "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Ne;
      }
      function re(m, D, ee) {
        if (m == null) return m;
        var ae = [], ye = 0;
        return At(m, ae, "", "", function(Ue) {
          return D.call(ee, Ue, ye++);
        }), ae;
      }
      function Dt(m) {
        if (m._status === -1) {
          var D = m._result;
          D = D(), D.then(
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 1, m._result = ee);
            },
            function(ee) {
              (m._status === 0 || m._status === -1) && (m._status = 2, m._result = ee);
            }
          ), m._status === -1 && (m._status = 0, m._result = D);
        }
        if (m._status === 1)
          return D = m._result, D === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            D
          ), "default" in D || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            D
          ), D.default;
        throw m._result;
      }
      function ve() {
        var m = Ve.H;
        return m === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), m;
      }
      function Re() {
      }
      function zt(m) {
        if (kc === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7);
            kc = (W && W[D]).call(
              W,
              "timers"
            ).setImmediate;
          } catch {
            kc = function(ae) {
              hf === !1 && (hf = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ae, ye.port2.postMessage(void 0);
            };
          }
        return kc(m);
      }
      function wt(m) {
        return 1 < m.length && typeof AggregateError == "function" ? new AggregateError(m) : m[0];
      }
      function ht(m, D) {
        D !== tn - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), tn = D;
      }
      function O(m, D, ee) {
        var ae = Ve.actQueue;
        if (ae !== null)
          if (ae.length !== 0)
            try {
              J(ae), zt(function() {
                return O(m, D, ee);
              });
              return;
            } catch (ye) {
              Ve.thrownErrors.push(ye);
            }
          else Ve.actQueue = null;
        0 < Ve.thrownErrors.length ? (ae = wt(Ve.thrownErrors), Ve.thrownErrors.length = 0, ee(ae)) : D(m);
      }
      function J(m) {
        if (!Al) {
          Al = !0;
          var D = 0;
          try {
            for (; D < m.length; D++) {
              var ee = m[D];
              do {
                Ve.didUsePromise = !1;
                var ae = ee(!1);
                if (ae !== null) {
                  if (Ve.didUsePromise) {
                    m[D] = ee, m.splice(0, D);
                    return;
                  }
                  ee = ae;
                } else break;
              } while (!0);
            }
            m.length = 0;
          } catch (ye) {
            m.splice(0, D + 1), Ve.thrownErrors.push(ye);
          } finally {
            Al = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var I = Symbol.for("react.transitional.element"), me = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), F = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), Se = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), al = Symbol.for("react.suspense_list"), ze = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), ta = Symbol.for("react.activity"), Rn = Symbol.iterator, ji = {}, An = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(m) {
          Ae(m, "forceUpdate");
        },
        enqueueReplaceState: function(m) {
          Ae(m, "replaceState");
        },
        enqueueSetState: function(m) {
          Ae(m, "setState");
        }
      }, Zc = Object.assign, sf = {};
      Object.freeze(sf), Me.prototype.isReactComponent = {}, Me.prototype.setState = function(m, D) {
        if (typeof m != "object" && typeof m != "function" && m != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, m, D, "setState");
      }, Me.prototype.forceUpdate = function(m) {
        this.updater.enqueueForceUpdate(this, m, "forceUpdate");
      };
      var It = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, hl;
      for (hl in It)
        It.hasOwnProperty(hl) && Le(hl, It[hl]);
      dt.prototype = Me.prototype, It = bt.prototype = new dt(), It.constructor = bt, Zc(It, Me.prototype), It.isPureReactComponent = !0;
      var ku = Array.isArray, Fr = Symbol.for("react.client.reference"), Ve = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, On = Object.prototype.hasOwnProperty, Kc = console.createTask ? console.createTask : function() {
        return null;
      };
      It = {
        "react-stack-bottom-frame": function(m) {
          return m();
        }
      };
      var mu, Ir, df = {}, $u = It["react-stack-bottom-frame"].bind(It, ce)(), El = Kc($(ce)), Ba = !1, Rl = /\/+/g, Jc = typeof reportError == "function" ? reportError : function(m) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var D = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m),
            error: m
          });
          if (!window.dispatchEvent(D)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", m);
          return;
        }
        console.error(m);
      }, hf = !1, kc = null, tn = 0, la = !1, Al = !1, ln = typeof queueMicrotask == "function" ? function(m) {
        queueMicrotask(function() {
          return queueMicrotask(m);
        });
      } : zt;
      It = Object.freeze({
        __proto__: null,
        c: function(m) {
          return ve().useMemoCache(m);
        }
      }), te.Children = {
        map: re,
        forEach: function(m, D, ee) {
          re(
            m,
            function() {
              D.apply(this, arguments);
            },
            ee
          );
        },
        count: function(m) {
          var D = 0;
          return re(m, function() {
            D++;
          }), D;
        },
        toArray: function(m) {
          return re(m, function(D) {
            return D;
          }) || [];
        },
        only: function(m) {
          if (!ct(m))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return m;
        }
      }, te.Component = Me, te.Fragment = g, te.Profiler = Q, te.PureComponent = bt, te.StrictMode = N, te.Suspense = ue, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ve, te.__COMPILER_RUNTIME = It, te.act = function(m) {
        var D = Ve.actQueue, ee = tn;
        tn++;
        var ae = Ve.actQueue = D !== null ? D : [], ye = !1;
        try {
          var Ue = m();
        } catch (xe) {
          Ve.thrownErrors.push(xe);
        }
        if (0 < Ve.thrownErrors.length)
          throw ht(D, ee), m = wt(Ve.thrownErrors), Ve.thrownErrors.length = 0, m;
        if (Ue !== null && typeof Ue == "object" && typeof Ue.then == "function") {
          var Ne = Ue;
          return ln(function() {
            ye || la || (la = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(xe, Pt) {
              ye = !0, Ne.then(
                function(an) {
                  if (ht(D, ee), ee === 0) {
                    try {
                      J(ae), zt(function() {
                        return O(
                          an,
                          xe,
                          Pt
                        );
                      });
                    } catch (Th) {
                      Ve.thrownErrors.push(Th);
                    }
                    if (0 < Ve.thrownErrors.length) {
                      var Pr = wt(
                        Ve.thrownErrors
                      );
                      Ve.thrownErrors.length = 0, Pt(Pr);
                    }
                  } else xe(an);
                },
                function(an) {
                  ht(D, ee), 0 < Ve.thrownErrors.length && (an = wt(
                    Ve.thrownErrors
                  ), Ve.thrownErrors.length = 0), Pt(an);
                }
              );
            }
          };
        }
        var tt = Ue;
        if (ht(D, ee), ee === 0 && (J(ae), ae.length !== 0 && ln(function() {
          ye || la || (la = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Ve.actQueue = null), 0 < Ve.thrownErrors.length)
          throw m = wt(Ve.thrownErrors), Ve.thrownErrors.length = 0, m;
        return {
          then: function(xe, Pt) {
            ye = !0, ee === 0 ? (Ve.actQueue = ae, zt(function() {
              return O(
                tt,
                xe,
                Pt
              );
            })) : xe(tt);
          }
        };
      }, te.cache = function(m) {
        return function() {
          return m.apply(null, arguments);
        };
      }, te.captureOwnerStack = function() {
        var m = Ve.getCurrentStack;
        return m === null ? null : m();
      }, te.cloneElement = function(m, D, ee) {
        if (m == null)
          throw Error(
            "The argument must be a React element, but you passed " + m + "."
          );
        var ae = Zc({}, m.props), ye = m.key, Ue = m._owner;
        if (D != null) {
          var Ne;
          e: {
            if (On.call(D, "ref") && (Ne = Object.getOwnPropertyDescriptor(
              D,
              "ref"
            ).get) && Ne.isReactWarning) {
              Ne = !1;
              break e;
            }
            Ne = D.ref !== void 0;
          }
          Ne && (Ue = M()), je(D) && (k(D.key), ye = "" + D.key);
          for (tt in D)
            !On.call(D, tt) || tt === "key" || tt === "__self" || tt === "__source" || tt === "ref" && D.ref === void 0 || (ae[tt] = D[tt]);
        }
        var tt = arguments.length - 2;
        if (tt === 1) ae.children = ee;
        else if (1 < tt) {
          Ne = Array(tt);
          for (var xe = 0; xe < tt; xe++)
            Ne[xe] = arguments[xe + 2];
          ae.children = Ne;
        }
        for (ae = nt(
          m.type,
          ye,
          void 0,
          void 0,
          Ue,
          ae,
          m._debugStack,
          m._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          Ue = arguments[ye], ct(Ue) && Ue._store && (Ue._store.validated = 1);
        return ae;
      }, te.createContext = function(m) {
        return m = {
          $$typeof: ne,
          _currentValue: m,
          _currentValue2: m,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, m.Provider = m, m.Consumer = {
          $$typeof: F,
          _context: m
        }, m._currentRenderer = null, m._currentRenderer2 = null, m;
      }, te.createElement = function(m, D, ee) {
        for (var ae = 2; ae < arguments.length; ae++) {
          var ye = arguments[ae];
          ct(ye) && ye._store && (ye._store.validated = 1);
        }
        if (ae = {}, ye = null, D != null)
          for (xe in Ir || !("__self" in D) || "key" in D || (Ir = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), je(D) && (k(D.key), ye = "" + D.key), D)
            On.call(D, xe) && xe !== "key" && xe !== "__self" && xe !== "__source" && (ae[xe] = D[xe]);
        var Ue = arguments.length - 2;
        if (Ue === 1) ae.children = ee;
        else if (1 < Ue) {
          for (var Ne = Array(Ue), tt = 0; tt < Ue; tt++)
            Ne[tt] = arguments[tt + 2];
          Object.freeze && Object.freeze(Ne), ae.children = Ne;
        }
        if (m && m.defaultProps)
          for (xe in Ue = m.defaultProps, Ue)
            ae[xe] === void 0 && (ae[xe] = Ue[xe]);
        ye && Ut(
          ae,
          typeof m == "function" ? m.displayName || m.name || "Unknown" : m
        );
        var xe = 1e4 > Ve.recentlyCreatedOwnerStacks++;
        return nt(
          m,
          ye,
          void 0,
          void 0,
          M(),
          ae,
          xe ? Error("react-stack-top-frame") : $u,
          xe ? Kc($(m)) : El
        );
      }, te.createRef = function() {
        var m = { current: null };
        return Object.seal(m), m;
      }, te.forwardRef = function(m) {
        m != null && m.$$typeof === ze ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof m != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          m === null ? "null" : typeof m
        ) : m.length !== 0 && m.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          m.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), m != null && m.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var D = { $$typeof: Se, render: m }, ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ae) {
            ee = ae, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ae }), m.displayName = ae);
          }
        }), D;
      }, te.isValidElement = ct, te.lazy = function(m) {
        return {
          $$typeof: xt,
          _payload: { _status: -1, _result: m },
          _init: Dt
        };
      }, te.memo = function(m, D) {
        m == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          m === null ? "null" : typeof m
        ), D = {
          $$typeof: ze,
          type: m,
          compare: D === void 0 ? null : D
        };
        var ee;
        return Object.defineProperty(D, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ae) {
            ee = ae, m.name || m.displayName || (Object.defineProperty(m, "name", { value: ae }), m.displayName = ae);
          }
        }), D;
      }, te.startTransition = function(m) {
        var D = Ve.T, ee = {};
        Ve.T = ee, ee._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var ae = m(), ye = Ve.S;
          ye !== null && ye(ee, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(Re, Jc);
        } catch (Ue) {
          Jc(Ue);
        } finally {
          D === null && ee._updatedFibers && (m = ee._updatedFibers.size, ee._updatedFibers.clear(), 10 < m && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), Ve.T = D;
        }
      }, te.unstable_useCacheRefresh = function() {
        return ve().useCacheRefresh();
      }, te.use = function(m) {
        return ve().use(m);
      }, te.useActionState = function(m, D, ee) {
        return ve().useActionState(
          m,
          D,
          ee
        );
      }, te.useCallback = function(m, D) {
        return ve().useCallback(m, D);
      }, te.useContext = function(m) {
        var D = ve();
        return m.$$typeof === F && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), D.useContext(m);
      }, te.useDebugValue = function(m, D) {
        return ve().useDebugValue(m, D);
      }, te.useDeferredValue = function(m, D) {
        return ve().useDeferredValue(m, D);
      }, te.useEffect = function(m, D, ee) {
        m == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var ae = ve();
        if (typeof ee == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return ae.useEffect(m, D);
      }, te.useId = function() {
        return ve().useId();
      }, te.useImperativeHandle = function(m, D, ee) {
        return ve().useImperativeHandle(m, D, ee);
      }, te.useInsertionEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ve().useInsertionEffect(m, D);
      }, te.useLayoutEffect = function(m, D) {
        return m == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ve().useLayoutEffect(m, D);
      }, te.useMemo = function(m, D) {
        return ve().useMemo(m, D);
      }, te.useOptimistic = function(m, D) {
        return ve().useOptimistic(m, D);
      }, te.useReducer = function(m, D, ee) {
        return ve().useReducer(m, D, ee);
      }, te.useRef = function(m) {
        return ve().useRef(m);
      }, te.useState = function(m) {
        return ve().useState(m);
      }, te.useSyncExternalStore = function(m, D, ee) {
        return ve().useSyncExternalStore(
          m,
          D,
          ee
        );
      }, te.useTransition = function() {
        return ve().useTransition();
      }, te.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(yp, yp.exports)), yp.exports;
}
var _b;
function mp() {
  return _b || (_b = 1, process.env.NODE_ENV === "production" ? cg.exports = PS() : cg.exports = eT()), cg.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hb;
function tT() {
  return Hb || (Hb = 1, process.env.NODE_ENV !== "production" && function() {
    function W(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === Dt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case Ut:
          return "Fragment";
        case nt:
          return "Profiler";
        case We:
          return "StrictMode";
        case He:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case je:
            return "Portal";
          case ct:
            return (g.displayName || "Context") + ".Provider";
          case dl:
            return (g._context.displayName || "Context") + ".Consumer";
          case Wt:
            var N = g.render;
            return g = g.displayName, g || (g = N.displayName || N.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case ke:
            return N = g.displayName || null, N !== null ? N : W(g.type) || "Memo";
          case At:
            N = g._payload, g = g._init;
            try {
              return W(g(N));
            } catch {
            }
        }
      return null;
    }
    function te(g) {
      return "" + g;
    }
    function Le(g) {
      try {
        te(g);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var Q = N.error, F = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return Q.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), te(g);
      }
    }
    function _(g) {
      if (g === Ut) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === At)
        return "<...>";
      try {
        var N = W(g);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ae() {
      var g = ve.A;
      return g === null ? null : g.getOwner();
    }
    function Me() {
      return Error("react-stack-top-frame");
    }
    function dt(g) {
      if (Re.call(g, "key")) {
        var N = Object.getOwnPropertyDescriptor(g, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function bt(g, N) {
      function Q() {
        ht || (ht = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      Q.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: Q,
        configurable: !0
      });
    }
    function G() {
      var g = W(this.type);
      return O[g] || (O[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function k(g, N, Q, F, ne, Se, ue, al) {
      return Q = Se.ref, g = {
        $$typeof: ce,
        type: g,
        key: N,
        props: Se,
        _owner: ne
      }, (Q !== void 0 ? Q : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: G
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: al
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function oe(g, N, Q, F, ne, Se, ue, al) {
      var ze = N.children;
      if (ze !== void 0)
        if (F)
          if (zt(ze)) {
            for (F = 0; F < ze.length; F++)
              $(ze[F]);
            Object.freeze && Object.freeze(ze);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(ze);
      if (Re.call(N, "key")) {
        ze = W(g);
        var xt = Object.keys(N).filter(function(Rn) {
          return Rn !== "key";
        });
        F = 0 < xt.length ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}", me[ze + F] || (xt = 0 < xt.length ? "{" + xt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          ze,
          xt,
          ze
        ), me[ze + F] = !0);
      }
      if (ze = null, Q !== void 0 && (Le(Q), ze = "" + Q), dt(N) && (Le(N.key), ze = "" + N.key), "key" in N) {
        Q = {};
        for (var ta in N)
          ta !== "key" && (Q[ta] = N[ta]);
      } else Q = N;
      return ze && bt(
        Q,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), k(
        g,
        ze,
        Se,
        ne,
        Ae(),
        Q,
        ue,
        al
      );
    }
    function $(g) {
      typeof g == "object" && g !== null && g.$$typeof === ce && g._store && (g._store.validated = 1);
    }
    var M = mp(), ce = Symbol.for("react.transitional.element"), je = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), dl = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Dt = Symbol.for("react.client.reference"), ve = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Re = Object.prototype.hasOwnProperty, zt = Array.isArray, wt = console.createTask ? console.createTask : function() {
      return null;
    };
    M = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var ht, O = {}, J = M["react-stack-bottom-frame"].bind(
      M,
      Me
    )(), I = wt(_(Me)), me = {};
    sp.Fragment = Ut, sp.jsx = function(g, N, Q, F, ne) {
      var Se = 1e4 > ve.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Q,
        !1,
        F,
        ne,
        Se ? Error("react-stack-top-frame") : J,
        Se ? wt(_(g)) : I
      );
    }, sp.jsxs = function(g, N, Q, F, ne) {
      var Se = 1e4 > ve.recentlyCreatedOwnerStacks++;
      return oe(
        g,
        N,
        Q,
        !0,
        F,
        ne,
        Se ? Error("react-stack-top-frame") : J,
        Se ? wt(_(g)) : I
      );
    };
  }()), sp;
}
var xb;
function lT() {
  return xb || (xb = 1, process.env.NODE_ENV === "production" ? ig.exports = IS() : ig.exports = tT()), ig.exports;
}
var Xb = lT();
const aT = ({ status: W }) => {
  let te = "govuk-tag";
  switch (W) {
    case "Unused":
      te += " govuk-tag--yellow";
      break;
    case "Used":
      te += " govuk-tag--blue";
      break;
    case "None":
      te += " govuk-tag--grey";
      break;
    case "Reclassified":
      te += " govuk-tag--purple reclassified-tag";
      break;
    case "Renamed":
      te += " govuk-tag--green renamed-tag";
      break;
    case "New":
      te += " govuk-tag--blue new-tag";
      break;
    default:
      te += " govuk-tag--grey";
  }
  return /* @__PURE__ */ Xb.jsx("span", { className: te, children: W });
};
var og = { exports: {} }, dp = {}, fg = { exports: {} }, M0 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nb;
function nT() {
  return Nb || (Nb = 1, function(W) {
    function te(O, J) {
      var I = O.length;
      O.push(J);
      e: for (; 0 < I; ) {
        var me = I - 1 >>> 1, g = O[me];
        if (0 < Ae(g, J))
          O[me] = J, O[I] = g, I = me;
        else break e;
      }
    }
    function Le(O) {
      return O.length === 0 ? null : O[0];
    }
    function _(O) {
      if (O.length === 0) return null;
      var J = O[0], I = O.pop();
      if (I !== J) {
        O[0] = I;
        e: for (var me = 0, g = O.length, N = g >>> 1; me < N; ) {
          var Q = 2 * (me + 1) - 1, F = O[Q], ne = Q + 1, Se = O[ne];
          if (0 > Ae(F, I))
            ne < g && 0 > Ae(Se, F) ? (O[me] = Se, O[ne] = I, me = ne) : (O[me] = F, O[Q] = I, me = Q);
          else if (ne < g && 0 > Ae(Se, I))
            O[me] = Se, O[ne] = I, me = ne;
          else break e;
        }
      }
      return J;
    }
    function Ae(O, J) {
      var I = O.sortIndex - J.sortIndex;
      return I !== 0 ? I : O.id - J.id;
    }
    if (W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var Me = performance;
      W.unstable_now = function() {
        return Me.now();
      };
    } else {
      var dt = Date, bt = dt.now();
      W.unstable_now = function() {
        return dt.now() - bt;
      };
    }
    var G = [], k = [], oe = 1, $ = null, M = 3, ce = !1, je = !1, Ut = !1, We = !1, nt = typeof setTimeout == "function" ? setTimeout : null, dl = typeof clearTimeout == "function" ? clearTimeout : null, ct = typeof setImmediate < "u" ? setImmediate : null;
    function Wt(O) {
      for (var J = Le(k); J !== null; ) {
        if (J.callback === null) _(k);
        else if (J.startTime <= O)
          _(k), J.sortIndex = J.expirationTime, te(G, J);
        else break;
        J = Le(k);
      }
    }
    function He(O) {
      if (Ut = !1, Wt(O), !je)
        if (Le(G) !== null)
          je = !0, Rt || (Rt = !0, Re());
        else {
          var J = Le(k);
          J !== null && ht(He, J.startTime - O);
        }
    }
    var Rt = !1, ke = -1, At = 5, re = -1;
    function Dt() {
      return We ? !0 : !(W.unstable_now() - re < At);
    }
    function ve() {
      if (We = !1, Rt) {
        var O = W.unstable_now();
        re = O;
        var J = !0;
        try {
          e: {
            je = !1, Ut && (Ut = !1, dl(ke), ke = -1), ce = !0;
            var I = M;
            try {
              t: {
                for (Wt(O), $ = Le(G); $ !== null && !($.expirationTime > O && Dt()); ) {
                  var me = $.callback;
                  if (typeof me == "function") {
                    $.callback = null, M = $.priorityLevel;
                    var g = me(
                      $.expirationTime <= O
                    );
                    if (O = W.unstable_now(), typeof g == "function") {
                      $.callback = g, Wt(O), J = !0;
                      break t;
                    }
                    $ === Le(G) && _(G), Wt(O);
                  } else _(G);
                  $ = Le(G);
                }
                if ($ !== null) J = !0;
                else {
                  var N = Le(k);
                  N !== null && ht(
                    He,
                    N.startTime - O
                  ), J = !1;
                }
              }
              break e;
            } finally {
              $ = null, M = I, ce = !1;
            }
            J = void 0;
          }
        } finally {
          J ? Re() : Rt = !1;
        }
      }
    }
    var Re;
    if (typeof ct == "function")
      Re = function() {
        ct(ve);
      };
    else if (typeof MessageChannel < "u") {
      var zt = new MessageChannel(), wt = zt.port2;
      zt.port1.onmessage = ve, Re = function() {
        wt.postMessage(null);
      };
    } else
      Re = function() {
        nt(ve, 0);
      };
    function ht(O, J) {
      ke = nt(function() {
        O(W.unstable_now());
      }, J);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, W.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : At = 0 < O ? Math.floor(1e3 / O) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, W.unstable_next = function(O) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = M;
      }
      var I = M;
      M = J;
      try {
        return O();
      } finally {
        M = I;
      }
    }, W.unstable_requestPaint = function() {
      We = !0;
    }, W.unstable_runWithPriority = function(O, J) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var I = M;
      M = O;
      try {
        return J();
      } finally {
        M = I;
      }
    }, W.unstable_scheduleCallback = function(O, J, I) {
      var me = W.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? me + I : me) : I = me, O) {
        case 1:
          var g = -1;
          break;
        case 2:
          g = 250;
          break;
        case 5:
          g = 1073741823;
          break;
        case 4:
          g = 1e4;
          break;
        default:
          g = 5e3;
      }
      return g = I + g, O = {
        id: oe++,
        callback: J,
        priorityLevel: O,
        startTime: I,
        expirationTime: g,
        sortIndex: -1
      }, I > me ? (O.sortIndex = I, te(k, O), Le(G) === null && O === Le(k) && (Ut ? (dl(ke), ke = -1) : Ut = !0, ht(He, I - me))) : (O.sortIndex = g, te(G, O), je || ce || (je = !0, Rt || (Rt = !0, Re()))), O;
    }, W.unstable_shouldYield = Dt, W.unstable_wrapCallback = function(O) {
      var J = M;
      return function() {
        var I = M;
        M = J;
        try {
          return O.apply(this, arguments);
        } finally {
          M = I;
        }
      };
    };
  }(M0)), M0;
}
var U0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bb;
function uT() {
  return Bb || (Bb = 1, function(W) {
    process.env.NODE_ENV !== "production" && function() {
      function te() {
        if (He = !1, re) {
          var O = W.unstable_now();
          Re = O;
          var J = !0;
          try {
            e: {
              ct = !1, Wt && (Wt = !1, ke(Dt), Dt = -1), dl = !0;
              var I = nt;
              try {
                t: {
                  for (dt(O), We = _(ce); We !== null && !(We.expirationTime > O && G()); ) {
                    var me = We.callback;
                    if (typeof me == "function") {
                      We.callback = null, nt = We.priorityLevel;
                      var g = me(
                        We.expirationTime <= O
                      );
                      if (O = W.unstable_now(), typeof g == "function") {
                        We.callback = g, dt(O), J = !0;
                        break t;
                      }
                      We === _(ce) && Ae(ce), dt(O);
                    } else Ae(ce);
                    We = _(ce);
                  }
                  if (We !== null) J = !0;
                  else {
                    var N = _(je);
                    N !== null && k(
                      bt,
                      N.startTime - O
                    ), J = !1;
                  }
                }
                break e;
              } finally {
                We = null, nt = I, dl = !1;
              }
              J = void 0;
            }
          } finally {
            J ? zt() : re = !1;
          }
        }
      }
      function Le(O, J) {
        var I = O.length;
        O.push(J);
        e: for (; 0 < I; ) {
          var me = I - 1 >>> 1, g = O[me];
          if (0 < Me(g, J))
            O[me] = J, O[I] = g, I = me;
          else break e;
        }
      }
      function _(O) {
        return O.length === 0 ? null : O[0];
      }
      function Ae(O) {
        if (O.length === 0) return null;
        var J = O[0], I = O.pop();
        if (I !== J) {
          O[0] = I;
          e: for (var me = 0, g = O.length, N = g >>> 1; me < N; ) {
            var Q = 2 * (me + 1) - 1, F = O[Q], ne = Q + 1, Se = O[ne];
            if (0 > Me(F, I))
              ne < g && 0 > Me(Se, F) ? (O[me] = Se, O[ne] = I, me = ne) : (O[me] = F, O[Q] = I, me = Q);
            else if (ne < g && 0 > Me(Se, I))
              O[me] = Se, O[ne] = I, me = ne;
            else break e;
          }
        }
        return J;
      }
      function Me(O, J) {
        var I = O.sortIndex - J.sortIndex;
        return I !== 0 ? I : O.id - J.id;
      }
      function dt(O) {
        for (var J = _(je); J !== null; ) {
          if (J.callback === null) Ae(je);
          else if (J.startTime <= O)
            Ae(je), J.sortIndex = J.expirationTime, Le(ce, J);
          else break;
          J = _(je);
        }
      }
      function bt(O) {
        if (Wt = !1, dt(O), !ct)
          if (_(ce) !== null)
            ct = !0, re || (re = !0, zt());
          else {
            var J = _(je);
            J !== null && k(
              bt,
              J.startTime - O
            );
          }
      }
      function G() {
        return He ? !0 : !(W.unstable_now() - Re < ve);
      }
      function k(O, J) {
        Dt = Rt(function() {
          O(W.unstable_now());
        }, J);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var oe = performance;
        W.unstable_now = function() {
          return oe.now();
        };
      } else {
        var $ = Date, M = $.now();
        W.unstable_now = function() {
          return $.now() - M;
        };
      }
      var ce = [], je = [], Ut = 1, We = null, nt = 3, dl = !1, ct = !1, Wt = !1, He = !1, Rt = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, At = typeof setImmediate < "u" ? setImmediate : null, re = !1, Dt = -1, ve = 5, Re = -1;
      if (typeof At == "function")
        var zt = function() {
          At(te);
        };
      else if (typeof MessageChannel < "u") {
        var wt = new MessageChannel(), ht = wt.port2;
        wt.port1.onmessage = te, zt = function() {
          ht.postMessage(null);
        };
      } else
        zt = function() {
          Rt(te, 0);
        };
      W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, W.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : ve = 0 < O ? Math.floor(1e3 / O) : 5;
      }, W.unstable_getCurrentPriorityLevel = function() {
        return nt;
      }, W.unstable_next = function(O) {
        switch (nt) {
          case 1:
          case 2:
          case 3:
            var J = 3;
            break;
          default:
            J = nt;
        }
        var I = nt;
        nt = J;
        try {
          return O();
        } finally {
          nt = I;
        }
      }, W.unstable_requestPaint = function() {
        He = !0;
      }, W.unstable_runWithPriority = function(O, J) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var I = nt;
        nt = O;
        try {
          return J();
        } finally {
          nt = I;
        }
      }, W.unstable_scheduleCallback = function(O, J, I) {
        var me = W.unstable_now();
        switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? me + I : me) : I = me, O) {
          case 1:
            var g = -1;
            break;
          case 2:
            g = 250;
            break;
          case 5:
            g = 1073741823;
            break;
          case 4:
            g = 1e4;
            break;
          default:
            g = 5e3;
        }
        return g = I + g, O = {
          id: Ut++,
          callback: J,
          priorityLevel: O,
          startTime: I,
          expirationTime: g,
          sortIndex: -1
        }, I > me ? (O.sortIndex = I, Le(je, O), _(ce) === null && O === _(je) && (Wt ? (ke(Dt), Dt = -1) : Wt = !0, k(bt, I - me))) : (O.sortIndex = g, Le(ce, O), ct || dl || (ct = !0, re || (re = !0, zt()))), O;
      }, W.unstable_shouldYield = G, W.unstable_wrapCallback = function(O) {
        var J = nt;
        return function() {
          var I = nt;
          nt = J;
          try {
            return O.apply(this, arguments);
          } finally {
            nt = I;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(U0)), U0;
}
var Yb;
function Qb() {
  return Yb || (Yb = 1, process.env.NODE_ENV === "production" ? fg.exports = nT() : fg.exports = uT()), fg.exports;
}
var rg = { exports: {} }, ga = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qb;
function iT() {
  if (qb) return ga;
  qb = 1;
  var W = mp();
  function te(G) {
    var k = "https://react.dev/errors/" + G;
    if (1 < arguments.length) {
      k += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var oe = 2; oe < arguments.length; oe++)
        k += "&args[]=" + encodeURIComponent(arguments[oe]);
    }
    return "Minified React error #" + G + "; visit " + k + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Le() {
  }
  var _ = {
    d: {
      f: Le,
      r: function() {
        throw Error(te(522));
      },
      D: Le,
      C: Le,
      L: Le,
      m: Le,
      X: Le,
      S: Le,
      M: Le
    },
    p: 0,
    findDOMNode: null
  }, Ae = Symbol.for("react.portal");
  function Me(G, k, oe) {
    var $ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ae,
      key: $ == null ? null : "" + $,
      children: G,
      containerInfo: k,
      implementation: oe
    };
  }
  var dt = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function bt(G, k) {
    if (G === "font") return "";
    if (typeof k == "string")
      return k === "use-credentials" ? k : "";
  }
  return ga.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, ga.createPortal = function(G, k) {
    var oe = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!k || k.nodeType !== 1 && k.nodeType !== 9 && k.nodeType !== 11)
      throw Error(te(299));
    return Me(G, k, null, oe);
  }, ga.flushSync = function(G) {
    var k = dt.T, oe = _.p;
    try {
      if (dt.T = null, _.p = 2, G) return G();
    } finally {
      dt.T = k, _.p = oe, _.d.f();
    }
  }, ga.preconnect = function(G, k) {
    typeof G == "string" && (k ? (k = k.crossOrigin, k = typeof k == "string" ? k === "use-credentials" ? k : "" : void 0) : k = null, _.d.C(G, k));
  }, ga.prefetchDNS = function(G) {
    typeof G == "string" && _.d.D(G);
  }, ga.preinit = function(G, k) {
    if (typeof G == "string" && k && typeof k.as == "string") {
      var oe = k.as, $ = bt(oe, k.crossOrigin), M = typeof k.integrity == "string" ? k.integrity : void 0, ce = typeof k.fetchPriority == "string" ? k.fetchPriority : void 0;
      oe === "style" ? _.d.S(
        G,
        typeof k.precedence == "string" ? k.precedence : void 0,
        {
          crossOrigin: $,
          integrity: M,
          fetchPriority: ce
        }
      ) : oe === "script" && _.d.X(G, {
        crossOrigin: $,
        integrity: M,
        fetchPriority: ce,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0
      });
    }
  }, ga.preinitModule = function(G, k) {
    if (typeof G == "string")
      if (typeof k == "object" && k !== null) {
        if (k.as == null || k.as === "script") {
          var oe = bt(
            k.as,
            k.crossOrigin
          );
          _.d.M(G, {
            crossOrigin: oe,
            integrity: typeof k.integrity == "string" ? k.integrity : void 0,
            nonce: typeof k.nonce == "string" ? k.nonce : void 0
          });
        }
      } else k == null && _.d.M(G);
  }, ga.preload = function(G, k) {
    if (typeof G == "string" && typeof k == "object" && k !== null && typeof k.as == "string") {
      var oe = k.as, $ = bt(oe, k.crossOrigin);
      _.d.L(G, oe, {
        crossOrigin: $,
        integrity: typeof k.integrity == "string" ? k.integrity : void 0,
        nonce: typeof k.nonce == "string" ? k.nonce : void 0,
        type: typeof k.type == "string" ? k.type : void 0,
        fetchPriority: typeof k.fetchPriority == "string" ? k.fetchPriority : void 0,
        referrerPolicy: typeof k.referrerPolicy == "string" ? k.referrerPolicy : void 0,
        imageSrcSet: typeof k.imageSrcSet == "string" ? k.imageSrcSet : void 0,
        imageSizes: typeof k.imageSizes == "string" ? k.imageSizes : void 0,
        media: typeof k.media == "string" ? k.media : void 0
      });
    }
  }, ga.preloadModule = function(G, k) {
    if (typeof G == "string")
      if (k) {
        var oe = bt(k.as, k.crossOrigin);
        _.d.m(G, {
          as: typeof k.as == "string" && k.as !== "script" ? k.as : void 0,
          crossOrigin: oe,
          integrity: typeof k.integrity == "string" ? k.integrity : void 0
        });
      } else _.d.m(G);
  }, ga.requestFormReset = function(G) {
    _.d.r(G);
  }, ga.unstable_batchedUpdates = function(G, k) {
    return G(k);
  }, ga.useFormState = function(G, k, oe) {
    return dt.H.useFormState(G, k, oe);
  }, ga.useFormStatus = function() {
    return dt.H.useHostTransitionStatus();
  }, ga.version = "19.1.0", ga;
}
var ba = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wb;
function cT() {
  return wb || (wb = 1, process.env.NODE_ENV !== "production" && function() {
    function W() {
    }
    function te($) {
      return "" + $;
    }
    function Le($, M, ce) {
      var je = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        te(je);
        var Ut = !1;
      } catch {
        Ut = !0;
      }
      return Ut && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && je[Symbol.toStringTag] || je.constructor.name || "Object"
      ), te(je)), {
        $$typeof: k,
        key: je == null ? null : "" + je,
        children: $,
        containerInfo: M,
        implementation: ce
      };
    }
    function _($, M) {
      if ($ === "font") return "";
      if (typeof M == "string")
        return M === "use-credentials" ? M : "";
    }
    function Ae($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : 'something with type "' + typeof $ + '"';
    }
    function Me($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : typeof $ == "string" ? JSON.stringify($) : typeof $ == "number" ? "`" + $ + "`" : 'something with type "' + typeof $ + '"';
    }
    function dt() {
      var $ = oe.H;
      return $ === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), $;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var bt = mp(), G = {
      d: {
        f: W,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: W,
        C: W,
        L: W,
        m: W,
        X: W,
        S: W,
        M: W
      },
      p: 0,
      findDOMNode: null
    }, k = Symbol.for("react.portal"), oe = bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), ba.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = G, ba.createPortal = function($, M) {
      var ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!M || M.nodeType !== 1 && M.nodeType !== 9 && M.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Le($, M, null, ce);
    }, ba.flushSync = function($) {
      var M = oe.T, ce = G.p;
      try {
        if (oe.T = null, G.p = 2, $)
          return $();
      } finally {
        oe.T = M, G.p = ce, G.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, ba.preconnect = function($, M) {
      typeof $ == "string" && $ ? M != null && typeof M != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Me(M)
      ) : M != null && typeof M.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ae(M.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ae($)
      ), typeof $ == "string" && (M ? (M = M.crossOrigin, M = typeof M == "string" ? M === "use-credentials" ? M : "" : void 0) : M = null, G.d.C($, M));
    }, ba.prefetchDNS = function($) {
      if (typeof $ != "string" || !$)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ae($)
        );
      else if (1 < arguments.length) {
        var M = arguments[1];
        typeof M == "object" && M.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(M)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Me(M)
        );
      }
      typeof $ == "string" && G.d.D($);
    }, ba.preinit = function($, M) {
      if (typeof $ == "string" && $ ? M == null || typeof M != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Me(M)
      ) : M.as !== "style" && M.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Me(M.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ae($)
      ), typeof $ == "string" && M && typeof M.as == "string") {
        var ce = M.as, je = _(ce, M.crossOrigin), Ut = typeof M.integrity == "string" ? M.integrity : void 0, We = typeof M.fetchPriority == "string" ? M.fetchPriority : void 0;
        ce === "style" ? G.d.S(
          $,
          typeof M.precedence == "string" ? M.precedence : void 0,
          {
            crossOrigin: je,
            integrity: Ut,
            fetchPriority: We
          }
        ) : ce === "script" && G.d.X($, {
          crossOrigin: je,
          integrity: Ut,
          fetchPriority: We,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0
        });
      }
    }, ba.preinitModule = function($, M) {
      var ce = "";
      if (typeof $ == "string" && $ || (ce += " The `href` argument encountered was " + Ae($) + "."), M !== void 0 && typeof M != "object" ? ce += " The `options` argument encountered was " + Ae(M) + "." : M && "as" in M && M.as !== "script" && (ce += " The `as` option encountered was " + Me(M.as) + "."), ce)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          ce
        );
      else
        switch (ce = M && typeof M.as == "string" ? M.as : "script", ce) {
          case "script":
            break;
          default:
            ce = Me(ce), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              ce,
              $
            );
        }
      typeof $ == "string" && (typeof M == "object" && M !== null ? (M.as == null || M.as === "script") && (ce = _(
        M.as,
        M.crossOrigin
      ), G.d.M($, {
        crossOrigin: ce,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0,
        nonce: typeof M.nonce == "string" ? M.nonce : void 0
      })) : M == null && G.d.M($));
    }, ba.preload = function($, M) {
      var ce = "";
      if (typeof $ == "string" && $ || (ce += " The `href` argument encountered was " + Ae($) + "."), M == null || typeof M != "object" ? ce += " The `options` argument encountered was " + Ae(M) + "." : typeof M.as == "string" && M.as || (ce += " The `as` option encountered was " + Ae(M.as) + "."), ce && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ce
      ), typeof $ == "string" && typeof M == "object" && M !== null && typeof M.as == "string") {
        ce = M.as;
        var je = _(
          ce,
          M.crossOrigin
        );
        G.d.L($, ce, {
          crossOrigin: je,
          integrity: typeof M.integrity == "string" ? M.integrity : void 0,
          nonce: typeof M.nonce == "string" ? M.nonce : void 0,
          type: typeof M.type == "string" ? M.type : void 0,
          fetchPriority: typeof M.fetchPriority == "string" ? M.fetchPriority : void 0,
          referrerPolicy: typeof M.referrerPolicy == "string" ? M.referrerPolicy : void 0,
          imageSrcSet: typeof M.imageSrcSet == "string" ? M.imageSrcSet : void 0,
          imageSizes: typeof M.imageSizes == "string" ? M.imageSizes : void 0,
          media: typeof M.media == "string" ? M.media : void 0
        });
      }
    }, ba.preloadModule = function($, M) {
      var ce = "";
      typeof $ == "string" && $ || (ce += " The `href` argument encountered was " + Ae($) + "."), M !== void 0 && typeof M != "object" ? ce += " The `options` argument encountered was " + Ae(M) + "." : M && "as" in M && typeof M.as != "string" && (ce += " The `as` option encountered was " + Ae(M.as) + "."), ce && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ce
      ), typeof $ == "string" && (M ? (ce = _(
        M.as,
        M.crossOrigin
      ), G.d.m($, {
        as: typeof M.as == "string" && M.as !== "script" ? M.as : void 0,
        crossOrigin: ce,
        integrity: typeof M.integrity == "string" ? M.integrity : void 0
      })) : G.d.m($));
    }, ba.requestFormReset = function($) {
      G.d.r($);
    }, ba.unstable_batchedUpdates = function($, M) {
      return $(M);
    }, ba.useFormState = function($, M, ce) {
      return dt().useFormState($, M, ce);
    }, ba.useFormStatus = function() {
      return dt().useHostTransitionStatus();
    }, ba.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), ba;
}
var jb;
function Zb() {
  if (jb) return rg.exports;
  jb = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), rg.exports = iT()) : rg.exports = cT(), rg.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gb;
function oT() {
  if (Gb) return dp;
  Gb = 1;
  var W = Qb(), te = mp(), Le = Zb();
  function _(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ae(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function Me(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function dt(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function bt(l) {
    if (Me(l) !== l)
      throw Error(_(188));
  }
  function G(l) {
    var n = l.alternate;
    if (!n) {
      if (n = Me(l), n === null) throw Error(_(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return bt(r), l;
          if (s === c) return bt(r), n;
          s = s.sibling;
        }
        throw Error(_(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var y = !1, p = r.child; p; ) {
          if (p === u) {
            y = !0, u = r, c = s;
            break;
          }
          if (p === c) {
            y = !0, c = r, u = s;
            break;
          }
          p = p.sibling;
        }
        if (!y) {
          for (p = s.child; p; ) {
            if (p === u) {
              y = !0, u = s, c = r;
              break;
            }
            if (p === c) {
              y = !0, c = s, u = r;
              break;
            }
            p = p.sibling;
          }
          if (!y) throw Error(_(189));
        }
      }
      if (u.alternate !== c) throw Error(_(190));
    }
    if (u.tag !== 3) throw Error(_(188));
    return u.stateNode.current === u ? l : n;
  }
  function k(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = k(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var oe = Object.assign, $ = Symbol.for("react.element"), M = Symbol.for("react.transitional.element"), ce = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), dl = Symbol.for("react.consumer"), ct = Symbol.for("react.context"), Wt = Symbol.for("react.forward_ref"), He = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), ke = Symbol.for("react.memo"), At = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), Dt = Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function Re(l) {
    return l === null || typeof l != "object" ? null : (l = ve && l[ve] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var zt = Symbol.for("react.client.reference");
  function wt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === zt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case je:
        return "Fragment";
      case We:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case He:
        return "Suspense";
      case Rt:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ce:
          return "Portal";
        case ct:
          return (l.displayName || "Context") + ".Provider";
        case dl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Wt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ke:
          return n = l.displayName || null, n !== null ? n : wt(l.type) || "Memo";
        case At:
          n = l._payload, l = l._init;
          try {
            return wt(l(n));
          } catch {
          }
      }
    return null;
  }
  var ht = Array.isArray, O = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, me = [], g = -1;
  function N(l) {
    return { current: l };
  }
  function Q(l) {
    0 > g || (l.current = me[g], me[g] = null, g--);
  }
  function F(l, n) {
    g++, me[g] = l.current, l.current = n;
  }
  var ne = N(null), Se = N(null), ue = N(null), al = N(null);
  function ze(l, n) {
    switch (F(ue, n), F(Se, l), F(ne, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? qu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = qu(n), l = Go(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    Q(ne), F(ne, l);
  }
  function xt() {
    Q(ne), Q(Se), Q(ue);
  }
  function ta(l) {
    l.memoizedState !== null && F(al, l);
    var n = ne.current, u = Go(n, l.type);
    n !== u && (F(Se, l), F(ne, u));
  }
  function Rn(l) {
    Se.current === l && (Q(ne), Q(Se)), al.current === l && (Q(al), pa._currentValue = I);
  }
  var ji = Object.prototype.hasOwnProperty, An = W.unstable_scheduleCallback, Zc = W.unstable_cancelCallback, sf = W.unstable_shouldYield, It = W.unstable_requestPaint, hl = W.unstable_now, ku = W.unstable_getCurrentPriorityLevel, Fr = W.unstable_ImmediatePriority, Ve = W.unstable_UserBlockingPriority, On = W.unstable_NormalPriority, Kc = W.unstable_LowPriority, mu = W.unstable_IdlePriority, Ir = W.log, df = W.unstable_setDisableYieldValue, $u = null, El = null;
  function Ba(l) {
    if (typeof Ir == "function" && df(l), El && typeof El.setStrictMode == "function")
      try {
        El.setStrictMode($u, l);
      } catch {
      }
  }
  var Rl = Math.clz32 ? Math.clz32 : kc, Jc = Math.log, hf = Math.LN2;
  function kc(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Jc(l) / hf | 0) | 0;
  }
  var tn = 256, la = 4194304;
  function Al(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ln(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var p = c & 134217727;
    return p !== 0 ? (c = p & ~s, c !== 0 ? r = Al(c) : (y &= p, y !== 0 ? r = Al(y) : u || (u = p & ~l, u !== 0 && (r = Al(u))))) : (p = c & ~s, p !== 0 ? r = Al(p) : y !== 0 ? r = Al(y) : u || (u = c & ~l, u !== 0 && (r = Al(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function m(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function D(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ee() {
    var l = tn;
    return tn <<= 1, (tn & 4194048) === 0 && (tn = 256), l;
  }
  function ae() {
    var l = la;
    return la <<= 1, (la & 62914560) === 0 && (la = 4194304), l;
  }
  function ye(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ue(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ne(l, n, u, c, r, s) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var p = l.entanglements, S = l.expirationTimes, C = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var X = 31 - Rl(u), K = 1 << X;
      p[X] = 0, S[X] = -1;
      var x = C[X];
      if (x !== null)
        for (C[X] = null, X = 0; X < x.length; X++) {
          var Y = x[X];
          Y !== null && (Y.lane &= -536870913);
        }
      u &= ~K;
    }
    c !== 0 && tt(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(y & ~n));
  }
  function tt(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Rl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 4194090;
  }
  function xe(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Rl(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function Pt(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function an(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Pr() {
    var l = J.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Om(l.type));
  }
  function Th(l, n) {
    var u = J.p;
    try {
      return J.p = l, n();
    } finally {
      J.p = u;
    }
  }
  var nl = Math.random().toString(36).slice(2), yl = "__reactFiber$" + nl, Zl = "__reactProps$" + nl, $c = "__reactContainer$" + nl, es = "__reactEvents$" + nl, pp = "__reactListeners$" + nl, ts = "__reactHandles$" + nl, vp = "__reactResources$" + nl, se = "__reactMarker$" + nl;
  function yf(l) {
    delete l[yl], delete l[Zl], delete l[es], delete l[pp], delete l[ts];
  }
  function Ol(l) {
    var n = l[yl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[$c] || u[yl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Hl(l); l !== null; ) {
            if (u = l[yl]) return u;
            l = Hl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gi(l) {
    if (l = l[yl] || l[$c]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function mf(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(_(33));
  }
  function pu(l) {
    var n = l[vp];
    return n || (n = l[vp] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function ul(l) {
    l[se] = !0;
  }
  var pf = /* @__PURE__ */ new Set(), Sa = {};
  function Wu(l, n) {
    Fu(l, n), Fu(l + "Capture", n);
  }
  function Fu(l, n) {
    for (Sa[l] = n, l = 0; l < n.length; l++)
      pf.add(n[l]);
  }
  var gp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ls = {}, Eh = {};
  function bp(l) {
    return ji.call(Eh, l) ? !0 : ji.call(ls, l) ? !1 : gp.test(l) ? Eh[l] = !0 : (ls[l] = !0, !1);
  }
  function vu(l, n, u) {
    if (bp(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function vf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function Dn(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  var as, Rh;
  function Li(l) {
    if (as === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        as = n && n[1] || "", Rh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + as + l + Rh;
  }
  var Kl = !1;
  function Iu(l, n) {
    if (!l || Kl) return "";
    Kl = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (Y) {
                  var x = Y;
                }
                Reflect.construct(l, [], K);
              } else {
                try {
                  K.call();
                } catch (Y) {
                  x = Y;
                }
                l.call(K.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                x = Y;
              }
              (K = l()) && typeof K.catch == "function" && K.catch(function() {
              });
            }
          } catch (Y) {
            if (Y && x && typeof Y.stack == "string")
              return [Y.stack, x.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), y = s[0], p = s[1];
      if (y && p) {
        var S = y.split(`
`), C = p.split(`
`);
        for (r = c = 0; c < S.length && !S[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < C.length && !C[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === S.length || r === C.length)
          for (c = S.length - 1, r = C.length - 1; 1 <= c && 0 <= r && S[c] !== C[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (S[c] !== C[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || S[c] !== C[r]) {
                  var X = `
` + S[c].replace(" at new ", " at ");
                  return l.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", l.displayName)), X;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      Kl = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Li(u) : "";
  }
  function Vi(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Li(l.type);
      case 16:
        return Li("Lazy");
      case 13:
        return Li("Suspense");
      case 19:
        return Li("SuspenseList");
      case 0:
      case 15:
        return Iu(l.type, !1);
      case 11:
        return Iu(l.type.render, !1);
      case 1:
        return Iu(l.type, !0);
      case 31:
        return Li("Activity");
      default:
        return "";
    }
  }
  function Ah(l) {
    try {
      var n = "";
      do
        n += Vi(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ql(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function gf(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Oh(l) {
    var n = gf(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), c = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var r = u.get, s = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(y) {
          c = "" + y, s.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return c;
        },
        setValue: function(y) {
          c = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Pu(l) {
    l._valueTracker || (l._valueTracker = Oh(l));
  }
  function Xi(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = gf(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function Wc(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var sg = /[\n"\\]/g;
  function Ya(l) {
    return l.replace(
      sg,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ns(l, n, u, c, r, s, y, p) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + ql(n)) : l.value !== "" + ql(n) && (l.value = "" + ql(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? bf(l, y, ql(n)) : u != null ? bf(l, y, ql(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? l.name = "" + ql(p) : l.removeAttribute("name");
  }
  function us(l, n, u, c, r, s, y, p) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null))
        return;
      u = u != null ? "" + ql(u) : "", n = n != null ? "" + ql(n) : u, p || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = p ? l.checked : !!c, l.defaultChecked = !!c, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function bf(l, n, u) {
    n === "number" && Wc(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qi(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ql(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dh(l, n, u) {
    if (n != null && (n = "" + ql(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + ql(u) : "";
  }
  function zh(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(_(92));
        if (ht(c)) {
          if (1 < c.length) throw Error(_(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = ql(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c);
  }
  function Fc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Sp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function is(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Sp.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Sf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(_(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && is(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && is(l, s, n[s]);
  }
  function Zi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var dg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Tp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tf(l) {
    return Tp.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Ki = null;
  function cs(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ic = null, Pc = null;
  function Ep(l) {
    var n = Gi(l);
    if (n && (l = n.stateNode)) {
      var u = l[Zl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (ns(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Ya(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Zl] || null;
                if (!r) throw Error(_(90));
                ns(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Xi(c);
          }
          break e;
        case "textarea":
          Dh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Qi(l, !!u.multiple, n, !1);
      }
    }
  }
  var Mh = !1;
  function eo(l, n, u) {
    if (Mh) return l(n, u);
    Mh = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Mh = !1, (Ic !== null || Pc !== null) && (Ac(), Ic && (n = Ic, l = Pc, Pc = Ic = null, Ep(n), l)))
        for (n = 0; n < l.length; n++) Ep(l[n]);
    }
  }
  function Ji(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Zl] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
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
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        _(231, n, typeof u)
      );
    return u;
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), os = !1;
  if (zn)
    try {
      var gu = {};
      Object.defineProperty(gu, "passive", {
        get: function() {
          os = !0;
        }
      }), window.addEventListener("test", gu, gu), window.removeEventListener("test", gu, gu);
    } catch {
      os = !1;
    }
  var bu = null, to = null, ki = null;
  function Uh() {
    if (ki) return ki;
    var l, n = to, u = n.length, c, r = "value" in bu ? bu.value : bu.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var y = u - l;
    for (c = 1; c <= y && n[u - c] === r[s - c]; c++) ;
    return ki = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function Dl(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function fs() {
    return !0;
  }
  function rs() {
    return !1;
  }
  function Jl(l) {
    function n(u, c, r, s, y) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = y, this.currentTarget = null;
      for (var p in l)
        l.hasOwnProperty(p) && (u = l[p], this[p] = u ? u(s) : s[p]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? fs : rs, this.isPropagationStopped = rs, this;
    }
    return oe(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = fs);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = fs);
      },
      persist: function() {
      },
      isPersistent: fs
    }), n;
  }
  var ei = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ss = Jl(ei), Ef = oe({}, ei, { view: 0, detail: 0 }), Rp = Jl(Ef), Ch, ds, Rf, $i = oe({}, Ef, {
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
    getModifierState: Su,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Rf && (Rf && l.type === "mousemove" ? (Ch = l.screenX - Rf.screenX, ds = l.screenY - Rf.screenY) : ds = Ch = 0, Rf = l), Ch);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ds;
    }
  }), _h = Jl($i), Ap = oe({}, $i, { dataTransfer: 0 }), Op = Jl(Ap), hg = oe({}, Ef, { relatedTarget: 0 }), Hh = Jl(hg), yg = oe({}, ei, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), mg = Jl(yg), pg = oe({}, ei, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Af = Jl(pg), Dp = oe({}, ei, { data: 0 }), xh = Jl(Dp), zp = {
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
    MozPrintableKey: "Unidentified"
  }, Mp = {
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
    224: "Meta"
  }, Nh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Up(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Nh[l]) ? !!n[l] : !1;
  }
  function Su() {
    return Up;
  }
  var Wi = oe({}, Ef, {
    key: function(l) {
      if (l.key) {
        var n = zp[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = Dl(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Mp[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Su,
    charCode: function(l) {
      return l.type === "keypress" ? Dl(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Dl(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), nn = Jl(Wi), Ta = oe({}, $i, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Of = Jl(Ta), hs = oe({}, Ef, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Su
  }), Bh = Jl(hs), aa = oe({}, ei, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cp = Jl(aa), ys = oe({}, $i, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = Jl(ys), Yh = oe({}, ei, {
    newState: 0,
    oldState: 0
  }), _p = Jl(Yh), Hp = [9, 13, 27, 32], Df = zn && "CompositionEvent" in window, zf = null;
  zn && "documentMode" in document && (zf = document.documentMode);
  var qh = zn && "TextEvent" in window && !zf, Mn = zn && (!Df || zf && 8 < zf && 11 >= zf), wh = " ", ms = !1;
  function Mf(l, n) {
    switch (l) {
      case "keyup":
        return Hp.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ti(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var li = !1;
  function jh(l, n) {
    switch (l) {
      case "compositionend":
        return ti(n);
      case "keypress":
        return n.which !== 32 ? null : (ms = !0, wh);
      case "textInput":
        return l = n.data, l === wh && ms ? null : l;
      default:
        return null;
    }
  }
  function Ii(l, n) {
    if (li)
      return l === "compositionend" || !Df && Mf(l, n) ? (l = Uh(), ki = to = bu = null, li = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Mn && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var xp = {
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
    week: !0
  };
  function ps(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!xp[l.type] : n === "textarea";
  }
  function vs(l, n, u, c) {
    Ic ? Pc ? Pc.push(c) : Pc = [c] : Ic = c, n = jo(n, "onChange"), 0 < n.length && (u = new ss(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var un = null, cn = null;
  function Gh(l) {
    Mc(l, 0);
  }
  function Un(l) {
    var n = mf(l);
    if (Xi(n)) return l;
  }
  function Lh(l, n) {
    if (l === "change") return n;
  }
  var Vh = !1;
  if (zn) {
    var Pi;
    if (zn) {
      var ec = "oninput" in document;
      if (!ec) {
        var Xh = document.createElement("div");
        Xh.setAttribute("oninput", "return;"), ec = typeof Xh.oninput == "function";
      }
      Pi = ec;
    } else Pi = !1;
    Vh = Pi && (!document.documentMode || 9 < document.documentMode);
  }
  function lo() {
    un && (un.detachEvent("onpropertychange", Qh), cn = un = null);
  }
  function Qh(l) {
    if (l.propertyName === "value" && Un(cn)) {
      var n = [];
      vs(
        n,
        cn,
        l,
        cs(l)
      ), eo(Gh, n);
    }
  }
  function gs(l, n, u) {
    l === "focusin" ? (lo(), un = n, cn = u, un.attachEvent("onpropertychange", Qh)) : l === "focusout" && lo();
  }
  function ai(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Un(cn);
  }
  function Tu(l, n) {
    if (l === "click") return Un(n);
  }
  function Zh(l, n) {
    if (l === "input" || l === "change")
      return Un(n);
  }
  function Kh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var zl = typeof Object.is == "function" ? Object.is : Kh;
  function ni(l, n) {
    if (zl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!ji.call(n, r) || !zl(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function ui(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ct(l, n) {
    var u = ui(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = ui(u);
    }
  }
  function Uf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Uf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Jh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = Wc(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = Wc(l.document);
    }
    return n;
  }
  function Cf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var tc = zn && "documentMode" in document && 11 >= document.documentMode, Cn = null, on = null, ii = null, lc = !1;
  function bs(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    lc || Cn == null || Cn !== Wc(c) || (c = Cn, "selectionStart" in c && Cf(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ii && ni(ii, c) || (ii = c, c = jo(on, "onSelect"), 0 < c.length && (n = new ss(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Cn)));
  }
  function Eu(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var ac = {
    animationend: Eu("Animation", "AnimationEnd"),
    animationiteration: Eu("Animation", "AnimationIteration"),
    animationstart: Eu("Animation", "AnimationStart"),
    transitionrun: Eu("Transition", "TransitionRun"),
    transitionstart: Eu("Transition", "TransitionStart"),
    transitioncancel: Eu("Transition", "TransitionCancel"),
    transitionend: Eu("Transition", "TransitionEnd")
  }, qa = {}, fn = {};
  zn && (fn = document.createElement("div").style, "AnimationEvent" in window || (delete ac.animationend.animation, delete ac.animationiteration.animation, delete ac.animationstart.animation), "TransitionEvent" in window || delete ac.transitionend.transition);
  function _n(l) {
    if (qa[l]) return qa[l];
    if (!ac[l]) return l;
    var n = ac[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in fn)
        return qa[l] = n[u];
    return l;
  }
  var Np = _n("animationend"), kh = _n("animationiteration"), Bp = _n("animationstart"), $h = _n("transitionrun"), Ss = _n("transitionstart"), Yp = _n("transitioncancel"), Wh = _n("transitionend"), Fh = /* @__PURE__ */ new Map(), ao = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ao.push("scrollEnd");
  function wa(l, n) {
    Fh.set(l, n), Wu(n, [l]);
  }
  var Ih = /* @__PURE__ */ new WeakMap();
  function Ea(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Ih.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Ah(n)
      }, Ih.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Ah(n)
    };
  }
  var na = [], ci = 0, Hn = 0;
  function rn() {
    for (var l = ci, n = Hn = ci = 0; n < l; ) {
      var u = na[n];
      na[n++] = null;
      var c = na[n];
      na[n++] = null;
      var r = na[n];
      na[n++] = null;
      var s = na[n];
      if (na[n++] = null, c !== null && r !== null) {
        var y = c.pending;
        y === null ? r.next = r : (r.next = y.next, y.next = r), c.pending = r;
      }
      s !== 0 && uo(u, r, s);
    }
  }
  function oi(l, n, u, c) {
    na[ci++] = l, na[ci++] = n, na[ci++] = u, na[ci++] = c, Hn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function no(l, n, u, c) {
    return oi(l, n, u, c), _f(l);
  }
  function xn(l, n) {
    return oi(l, null, null, n), _f(l);
  }
  function uo(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Rl(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function _f(l) {
    if (50 < xo)
      throw xo = 0, Iy = null, Error(_(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var io = {};
  function qp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ua(l, n, u, c) {
    return new qp(l, n, u, c);
  }
  function Hf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function sn(l, n) {
    var u = l.alternate;
    return u === null ? (u = ua(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Qe(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function P(l, n, u, c, r, s) {
    var y = 0;
    if (c = l, typeof l == "function") Hf(l) && (y = 1);
    else if (typeof l == "string")
      y = vv(
        l,
        u,
        ne.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case re:
          return l = ua(31, u, n, r), l.elementType = re, l.lanes = s, l;
        case je:
          return ja(u.children, r, s, n);
        case Ut:
          y = 8, r |= 24;
          break;
        case We:
          return l = ua(12, u, n, r | 2), l.elementType = We, l.lanes = s, l;
        case He:
          return l = ua(13, u, n, r), l.elementType = He, l.lanes = s, l;
        case Rt:
          return l = ua(19, u, n, r), l.elementType = Rt, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case nt:
              case ct:
                y = 10;
                break e;
              case dl:
                y = 9;
                break e;
              case Wt:
                y = 11;
                break e;
              case ke:
                y = 14;
                break e;
              case At:
                y = 16, c = null;
                break e;
            }
          y = 29, u = Error(
            _(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = ua(y, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function ja(l, n, u, c) {
    return l = ua(7, l, c, n), l.lanes = u, l;
  }
  function co(l, n, u) {
    return l = ua(6, l, null, n), l.lanes = u, l;
  }
  function jt(l, n, u) {
    return n = ua(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var fi = [], ri = 0, xf = null, oo = 0, Ga = [], ia = 0, Ru = null, dn = 1, Vt = "";
  function lt(l, n) {
    fi[ri++] = oo, fi[ri++] = xf, xf = l, oo = n;
  }
  function Ts(l, n, u) {
    Ga[ia++] = dn, Ga[ia++] = Vt, Ga[ia++] = Ru, Ru = l;
    var c = dn;
    l = Vt;
    var r = 32 - Rl(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Rl(n) + r;
    if (30 < s) {
      var y = r - r % 5;
      s = (c & (1 << y) - 1).toString(32), c >>= y, r -= y, dn = 1 << 32 - Rl(n) + r | u << r | c, Vt = s + l;
    } else
      dn = 1 << s | u << r | c, Vt = l;
  }
  function nc(l) {
    l.return !== null && (lt(l, 1), Ts(l, 1, 0));
  }
  function Nn(l) {
    for (; l === xf; )
      xf = fi[--ri], fi[ri] = null, oo = fi[--ri], fi[ri] = null;
    for (; l === Ru; )
      Ru = Ga[--ia], Ga[ia] = null, Vt = Ga[--ia], Ga[ia] = null, dn = Ga[--ia], Ga[ia] = null;
  }
  var Ft = null, ot = null, it = !1, La = null, Va = !1, uc = Error(_(519));
  function Au(l) {
    var n = Error(_(418, ""));
    throw so(Ea(n, l)), uc;
  }
  function Nf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[yl] = l, n[Zl] = c, u) {
      case "dialog":
        Ye("cancel", n), Ye("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ye("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < br.length; u++)
          Ye(br[u], n);
        break;
      case "source":
        Ye("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ye("error", n), Ye("load", n);
        break;
      case "details":
        Ye("toggle", n);
        break;
      case "input":
        Ye("invalid", n), us(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        ), Pu(n);
        break;
      case "select":
        Ye("invalid", n);
        break;
      case "textarea":
        Ye("invalid", n), zh(n, c.value, c.defaultValue, c.children), Pu(n);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || dm(n.textContent, u) ? (c.popover != null && (Ye("beforetoggle", n), Ye("toggle", n)), c.onScroll != null && Ye("scroll", n), c.onScrollEnd != null && Ye("scrollend", n), c.onClick != null && (n.onclick = _d), n = !0) : n = !1, n || Au(l);
  }
  function Ph(l) {
    for (Ft = l.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Va = !1;
          return;
        case 27:
        case 3:
          Va = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function fo(l) {
    if (l !== Ft) return !1;
    if (!it) return Ph(l), it = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || eu(l.type, l.memoizedProps)), u = !u), u && ot && Au(l), Ph(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(_(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                ot = gn(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        ot = null;
      }
    } else
      n === 27 ? (n = ot, Mi(l.type) ? (l = Ui, Ui = null, ot = l) : ot = n) : ot = Ft ? gn(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ro() {
    ot = Ft = null, it = !1;
  }
  function ey() {
    var l = La;
    return l !== null && (da === null ? da = l : da.push.apply(
      da,
      l
    ), La = null), l;
  }
  function so(l) {
    La === null ? La = [l] : La.push(l);
  }
  var Bf = N(null), Ou = null, hn = null;
  function Du(l, n, u) {
    F(Bf, n._currentValue), n._currentValue = u;
  }
  function Bn(l) {
    l._currentValue = Bf.current, Q(Bf);
  }
  function Es(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function ty(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var y = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var p = s;
          s = r;
          for (var S = 0; S < n.length; S++)
            if (p.context === n[S]) {
              s.lanes |= u, p = s.alternate, p !== null && (p.lanes |= u), Es(
                s.return,
                u,
                l
              ), c || (y = null);
              break e;
            }
          s = p.next;
        }
      } else if (r.tag === 18) {
        if (y = r.return, y === null) throw Error(_(341));
        y.lanes |= u, s = y.alternate, s !== null && (s.lanes |= u), Es(y, u, l), y = null;
      } else y = r.child;
      if (y !== null) y.return = r;
      else
        for (y = r; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (r = y.sibling, r !== null) {
            r.return = y.return, y = r;
            break;
          }
          y = y.return;
        }
      r = y;
    }
  }
  function ho(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var y = r.alternate;
        if (y === null) throw Error(_(387));
        if (y = y.memoizedProps, y !== null) {
          var p = r.type;
          zl(r.pendingProps.value, y.value) || (l !== null ? l.push(p) : l = [p]);
        }
      } else if (r === al.current) {
        if (y = r.alternate, y === null) throw Error(_(387));
        y.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(pa) : l = [pa]);
      }
      r = r.return;
    }
    l !== null && ty(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Yf(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!zl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function si(l) {
    Ou = l, hn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function ml(l) {
    return ly(Ou, l);
  }
  function qf(l, n) {
    return Ou === null && si(l), ly(l, n);
  }
  function ly(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, hn === null) {
      if (l === null) throw Error(_(308));
      hn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else hn = hn.next = n;
    return u;
  }
  var yo = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Rs = W.unstable_scheduleCallback, wp = W.unstable_NormalPriority, il = {
    $$typeof: ct,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mo() {
    return {
      controller: new yo(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yn(l) {
    l.refCount--, l.refCount === 0 && Rs(wp, function() {
      l.controller.abort();
    });
  }
  var di = null, wf = 0, Xa = 0, cl = null;
  function As(l, n) {
    if (di === null) {
      var u = di = [];
      wf = 0, Xa = zc(), cl = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return wf++, n.then(Os, Os), n;
  }
  function Os() {
    if (--wf === 0 && di !== null) {
      cl !== null && (cl.status = "fulfilled");
      var l = di;
      di = null, Xa = 0, cl = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function jp(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Ds = O.S;
  O.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && As(l, n), Ds !== null && Ds(l, n);
  };
  var qn = N(null);
  function jf() {
    var l = qn.current;
    return l !== null ? l : Ot.pooledCache;
  }
  function ic(l, n) {
    n === null ? F(qn, qn.current) : F(qn, n.pool);
  }
  function zs() {
    var l = jf();
    return l === null ? null : { parent: il._currentValue, pool: l };
  }
  var hi = Error(_(460)), Ms = Error(_(474)), Gf = Error(_(542)), Us = { then: function() {
  } };
  function Cs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Lf() {
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Lf, Lf), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, uy(l), l;
      default:
        if (typeof n.status == "string") n.then(Lf, Lf);
        else {
          if (l = Ot, l !== null && 100 < l.shellSuspendCounter)
            throw Error(_(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, uy(l), l;
        }
        throw cc = n, hi;
    }
  }
  var cc = null;
  function ny() {
    if (cc === null) throw Error(_(459));
    var l = cc;
    return cc = null, l;
  }
  function uy(l) {
    if (l === hi || l === Gf)
      throw Error(_(483));
  }
  var wn = !1;
  function _s(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hs(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ca(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function jn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (mt & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = _f(l), uo(l, null, u), n;
    }
    return oi(l, c, n, u), _f(l);
  }
  function oc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, xe(l, u);
    }
  }
  function iy(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = y : s = s.next = y, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var cy = !1;
  function po() {
    if (cy) {
      var l = cl;
      if (l !== null) throw l;
    }
  }
  function zu(l, n, u, c) {
    cy = !1;
    var r = l.updateQueue;
    wn = !1;
    var s = r.firstBaseUpdate, y = r.lastBaseUpdate, p = r.shared.pending;
    if (p !== null) {
      r.shared.pending = null;
      var S = p, C = S.next;
      S.next = null, y === null ? s = C : y.next = C, y = S;
      var X = l.alternate;
      X !== null && (X = X.updateQueue, p = X.lastBaseUpdate, p !== y && (p === null ? X.firstBaseUpdate = C : p.next = C, X.lastBaseUpdate = S));
    }
    if (s !== null) {
      var K = r.baseState;
      y = 0, X = C = S = null, p = s;
      do {
        var x = p.lane & -536870913, Y = x !== p.lane;
        if (Y ? (Ie & x) === x : (c & x) === x) {
          x !== 0 && x === Xa && (cy = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, be = p;
            x = n;
            var rt = u;
            switch (be.tag) {
              case 1:
                if (ge = be.payload, typeof ge == "function") {
                  K = ge.call(rt, K, x);
                  break e;
                }
                K = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = be.payload, x = typeof ge == "function" ? ge.call(rt, K, x) : ge, x == null) break e;
                K = oe({}, K, x);
                break e;
              case 2:
                wn = !0;
            }
          }
          x = p.callback, x !== null && (l.flags |= 64, Y && (l.flags |= 8192), Y = r.callbacks, Y === null ? r.callbacks = [x] : Y.push(x));
        } else
          Y = {
            lane: x,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, X === null ? (C = X = Y, S = K) : X = X.next = Y, y |= x;
        if (p = p.next, p === null) {
          if (p = r.shared.pending, p === null)
            break;
          Y = p, p = Y.next, Y.next = null, r.lastBaseUpdate = Y, r.shared.pending = null;
        }
      } while (!0);
      X === null && (S = K), r.baseState = S, r.firstBaseUpdate = C, r.lastBaseUpdate = X, s === null && (r.shared.lanes = 0), Nu |= y, l.lanes = y, l.memoizedState = K;
    }
  }
  function xs(l, n) {
    if (typeof l != "function")
      throw Error(_(191, l));
    l.call(n);
  }
  function Vf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        xs(u[l], n);
  }
  var fc = N(null), Xf = N(0);
  function pl(l, n) {
    l = xu, F(Xf, l), F(fc, n), xu = l | n.baseLanes;
  }
  function vo() {
    F(Xf, xu), F(fc, fc.current);
  }
  function go() {
    xu = Xf.current, Q(fc), Q(Xf);
  }
  var Qa = 0, Be = null, yt = null, Gt = null, Qf = !1, Ra = !1, yi = !1, yn = 0, Aa = 0, Mu = null, oy = 0;
  function Lt() {
    throw Error(_(321));
  }
  function Ns(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!zl(l[u], n[u])) return !1;
    return !0;
  }
  function Bs(l, n, u, c, r, s) {
    return Qa = s, Be = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, O.H = l === null || l.memoizedState === null ? Ry : Ay, yi = !1, s = u(c, r), yi = !1, Ra && (s = fy(
      n,
      u,
      c,
      r
    )), mi(l), s;
  }
  function mi(l) {
    O.H = Is;
    var n = yt !== null && yt.next !== null;
    if (Qa = 0, Gt = yt = Be = null, Qf = !1, Aa = 0, Mu = null, n) throw Error(_(300));
    l === null || ol || (l = l.dependencies, l !== null && Yf(l) && (ol = !0));
  }
  function fy(l, n, u, c) {
    Be = l;
    var r = 0;
    do {
      if (Ra && (Mu = null), Aa = 0, Ra = !1, 25 <= r) throw Error(_(301));
      if (r += 1, Gt = yt = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      O.H = Uu, s = n(u, c);
    } while (Ra);
    return s;
  }
  function Gp() {
    var l = O.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Kf(n) : n, l = l.useState()[0], (yt !== null ? yt.memoizedState : null) !== l && (Be.flags |= 1024), n;
  }
  function Ys() {
    var l = yn !== 0;
    return yn = 0, l;
  }
  function bo(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function qs(l) {
    if (Qf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Qf = !1;
    }
    Qa = 0, Gt = yt = Be = null, Ra = !1, Aa = yn = 0, Mu = null;
  }
  function wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? Be.memoizedState = Gt = l : Gt = Gt.next = l, Gt;
  }
  function Xt() {
    if (yt === null) {
      var l = Be.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = yt.next;
    var n = Gt === null ? Be.memoizedState : Gt.next;
    if (n !== null)
      Gt = n, yt = l;
    else {
      if (l === null)
        throw Be.alternate === null ? Error(_(467)) : Error(_(310));
      yt = l, l = {
        memoizedState: yt.memoizedState,
        baseState: yt.baseState,
        baseQueue: yt.baseQueue,
        queue: yt.queue,
        next: null
      }, Gt === null ? Be.memoizedState = Gt = l : Gt = Gt.next = l;
    }
    return Gt;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Kf(l) {
    var n = Aa;
    return Aa += 1, Mu === null && (Mu = []), l = ay(Mu, l, n), n = Be, (Gt === null ? n.memoizedState : Gt.next) === null && (n = n.alternate, O.H = n === null || n.memoizedState === null ? Ry : Ay), l;
  }
  function el(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Kf(l);
      if (l.$$typeof === ct) return ml(l);
    }
    throw Error(_(438, String(l)));
  }
  function ws(l) {
    var n = null, u = Be.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Be.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Zf(), Be.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Dt;
    return n.index++, u;
  }
  function Gn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Jf(l) {
    var n = Xt();
    return js(n, yt, l);
  }
  function js(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(_(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var y = r.next;
        r.next = s.next, s.next = y;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var p = y = null, S = null, C = n, X = !1;
      do {
        var K = C.lane & -536870913;
        if (K !== C.lane ? (Ie & K) === K : (Qa & K) === K) {
          var x = C.revertLane;
          if (x === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), K === Xa && (X = !0);
          else if ((Qa & x) === x) {
            C = C.next, x === Xa && (X = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: C.revertLane,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, S === null ? (p = S = K, y = s) : S = S.next = K, Be.lanes |= x, Nu |= x;
          K = C.action, yi && u(s, K), s = C.hasEagerState ? C.eagerState : u(s, K);
        } else
          x = {
            lane: K,
            revertLane: C.revertLane,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, S === null ? (p = S = x, y = s) : S = S.next = x, Be.lanes |= K, Nu |= K;
        C = C.next;
      } while (C !== null && C !== n);
      if (S === null ? y = s : S.next = p, !zl(s, l.memoizedState) && (ol = !0, X && (u = cl, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = y, l.baseQueue = S, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Gs(l) {
    var n = Xt(), u = n.queue;
    if (u === null) throw Error(_(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var y = r = r.next;
      do
        s = l(s, y.action), y = y.next;
      while (y !== r);
      zl(s, n.memoizedState) || (ol = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function kf(l, n, u) {
    var c = Be, r = Xt(), s = it;
    if (s) {
      if (u === void 0) throw Error(_(407));
      u = u();
    } else u = n();
    var y = !zl(
      (yt || r).memoizedState,
      u
    );
    y && (r.memoizedState = u, ol = !0), r = r.queue;
    var p = sy.bind(null, c, r, l);
    if (St(2048, 8, p, [l]), r.getSnapshot !== n || y || Gt !== null && Gt.memoizedState.tag & 1) {
      if (c.flags |= 2048, oa(
        9,
        Ff(),
        ry.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Ot === null) throw Error(_(349));
      s || (Qa & 124) !== 0 || Ls(c, n, u);
    }
    return u;
  }
  function Ls(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Be.updateQueue, n === null ? (n = Zf(), Be.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ry(l, n, u, c) {
    n.value = u, n.getSnapshot = c, dy(n) && Vs(l);
  }
  function sy(l, n, u) {
    return u(function() {
      dy(n) && Vs(l);
    });
  }
  function dy(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !zl(l, u);
    } catch {
      return !0;
    }
  }
  function Vs(l) {
    var n = xn(l, 2);
    n !== null && za(n, l, 2);
  }
  function $f(l) {
    var n = wl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), yi) {
        Ba(!0);
        try {
          u();
        } finally {
          Ba(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gn,
      lastRenderedState: l
    }, n;
  }
  function Xs(l, n, u, c) {
    return l.baseState = u, js(
      l,
      yt,
      typeof c == "function" ? c : Gn
    );
  }
  function Lp(l, n, u, c, r) {
    if (hc(l)) throw Error(_(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          s.listeners.push(y);
        }
      };
      O.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Qs(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Qs(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = O.T, y = {};
      O.T = y;
      try {
        var p = u(r, c), S = O.S;
        S !== null && S(y, p), Wf(l, n, p);
      } catch (C) {
        Ks(l, n, C);
      } finally {
        O.T = s;
      }
    } else
      try {
        s = u(r, c), Wf(l, n, s);
      } catch (C) {
        Ks(l, n, C);
      }
  }
  function Wf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Zs(l, n, c);
      },
      function(c) {
        return Ks(l, n, c);
      }
    ) : Zs(l, n, u);
  }
  function Zs(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Qs(l, u)));
  }
  function Ks(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Js(l, n) {
    return n;
  }
  function yy(l, n) {
    if (it) {
      var u = Ot.formState;
      if (u !== null) {
        e: {
          var c = Be;
          if (it) {
            if (ot) {
              t: {
                for (var r = ot, s = Va; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = gn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                ot = gn(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            Au(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = wl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Js,
      lastRenderedState: n
    }, u.queue = c, u = Ty.bind(
      null,
      Be,
      c
    ), c.dispatch = u, c = $f(!1), s = er.bind(
      null,
      Be,
      !1,
      c.queue
    ), c = wl(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Lp.bind(
      null,
      Be,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ln(l) {
    var n = Xt();
    return ks(n, yt, l);
  }
  function ks(l, n, u) {
    if (n = js(
      l,
      n,
      Js
    )[0], l = Jf(Gn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = Kf(n);
      } catch (y) {
        throw y === hi ? Gf : y;
      }
    else c = n;
    n = Xt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Be.flags |= 2048, oa(
      9,
      Ff(),
      vg.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function vg(l, n) {
    l.action = n;
  }
  function $s(l) {
    var n = Xt(), u = yt;
    if (u !== null)
      return ks(n, u, l);
    Xt(), n = n.memoizedState, u = Xt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function oa(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Be.updateQueue, n === null && (n = Zf(), Be.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Ff() {
    return { destroy: void 0, resource: void 0 };
  }
  function If() {
    return Xt().memoizedState;
  }
  function pi(l, n, u, c) {
    var r = wl();
    c = c === void 0 ? null : c, Be.flags |= l, r.memoizedState = oa(
      1 | n,
      Ff(),
      u,
      c
    );
  }
  function St(l, n, u, c) {
    var r = Xt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    yt !== null && c !== null && Ns(c, yt.memoizedState.deps) ? r.memoizedState = oa(n, s, u, c) : (Be.flags |= l, r.memoizedState = oa(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Vp(l, n) {
    pi(8390656, 8, l, n);
  }
  function Xp(l, n) {
    St(2048, 8, l, n);
  }
  function my(l, n) {
    return St(4, 2, l, n);
  }
  function mn(l, n) {
    return St(4, 4, l, n);
  }
  function py(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Ws(l, n, u) {
    u = u != null ? u.concat([l]) : null, St(4, 4, py.bind(null, n, l), u);
  }
  function rc() {
  }
  function sc(l, n) {
    var u = Xt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ns(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function vy(l, n) {
    var u = Xt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ns(n, c[1]))
      return c[0];
    if (c = l(), yi) {
      Ba(!0);
      try {
        l();
      } finally {
        Ba(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Pf(l, n, u) {
    return u === void 0 || (Qa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Py(), Be.lanes |= l, Nu |= l, u);
  }
  function gy(l, n, u, c) {
    return zl(u, n) ? u : fc.current !== null ? (l = Pf(l, u, c), zl(l, n) || (ol = !0), l) : (Qa & 42) === 0 ? (ol = !0, l.memoizedState = u) : (l = Py(), Be.lanes |= l, Nu |= l, n);
  }
  function Qp(l, n, u, c, r) {
    var s = J.p;
    J.p = s !== 0 && 8 > s ? s : 8;
    var y = O.T, p = {};
    O.T = p, er(l, !1, n, u);
    try {
      var S = r(), C = O.S;
      if (C !== null && C(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var X = jp(
          S,
          c
        );
        dc(
          l,
          n,
          X,
          Da(l)
        );
      } else
        dc(
          l,
          n,
          c,
          Da(l)
        );
    } catch (K) {
      dc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: K },
        Da()
      );
    } finally {
      J.p = s, O.T = y;
    }
  }
  function gg() {
  }
  function Fs(l, n, u, c) {
    if (l.tag !== 5) throw Error(_(476));
    var r = Zp(l).queue;
    Qp(
      l,
      r,
      n,
      I,
      u === null ? gg : function() {
        return So(l), u(c);
      }
    );
  }
  function Zp(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: I
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function So(l) {
    var n = Zp(l).next.queue;
    dc(l, n, {}, Da());
  }
  function Za() {
    return ml(pa);
  }
  function by() {
    return Xt().memoizedState;
  }
  function Kp() {
    return Xt().memoizedState;
  }
  function Jp(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Da();
          l = ca(u);
          var c = jn(n, l, u);
          c !== null && (za(c, n, u), oc(c, n, u)), n = { cache: mo() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Sy(l, n, u) {
    var c = Da();
    u = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l) ? kp(n, u) : (u = no(l, n, u, c), u !== null && (za(u, l, c), Ey(u, n, c)));
  }
  function Ty(l, n, u) {
    var c = Da();
    dc(l, n, u, c);
  }
  function dc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (hc(l)) kp(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var y = n.lastRenderedState, p = s(y, u);
          if (r.hasEagerState = !0, r.eagerState = p, zl(p, y))
            return oi(l, n, r, 0), Ot === null && rn(), !1;
        } catch {
        } finally {
        }
      if (u = no(l, n, r, c), u !== null)
        return za(u, l, c), Ey(u, n, c), !0;
    }
    return !1;
  }
  function er(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: zc(),
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, hc(l)) {
      if (n) throw Error(_(479));
    } else
      n = no(
        l,
        u,
        c,
        2
      ), n !== null && za(n, l, 2);
  }
  function hc(l) {
    var n = l.alternate;
    return l === Be || n !== null && n === Be;
  }
  function kp(l, n) {
    Ra = Qf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ey(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, xe(l, u);
    }
  }
  var Is = {
    readContext: ml,
    use: el,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  }, Ry = {
    readContext: ml,
    use: el,
    useCallback: function(l, n) {
      return wl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: ml,
    useEffect: Vp,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, pi(
        4194308,
        4,
        py.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return pi(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      pi(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = wl();
      n = n === void 0 ? null : n;
      var c = l();
      if (yi) {
        Ba(!0);
        try {
          l();
        } finally {
          Ba(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = wl();
      if (u !== void 0) {
        var r = u(n);
        if (yi) {
          Ba(!0);
          try {
            u(n);
          } finally {
            Ba(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Sy.bind(
        null,
        Be,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = wl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = $f(l);
      var n = l.queue, u = Ty.bind(null, Be, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = wl();
      return Pf(u, l, n);
    },
    useTransition: function() {
      var l = $f(!1);
      return l = Qp.bind(
        null,
        Be,
        l.queue,
        !0,
        !1
      ), wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Be, r = wl();
      if (it) {
        if (u === void 0)
          throw Error(_(407));
        u = u();
      } else {
        if (u = n(), Ot === null)
          throw Error(_(349));
        (Ie & 124) !== 0 || Ls(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Vp(sy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, oa(
        9,
        Ff(),
        ry.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = wl(), n = Ot.identifierPrefix;
      if (it) {
        var u = Vt, c = dn;
        u = (c & ~(1 << 32 - Rl(c) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = yn++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = oy++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Za,
    useFormState: yy,
    useActionState: yy,
    useOptimistic: function(l) {
      var n = wl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = er.bind(
        null,
        Be,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: ws,
    useCacheRefresh: function() {
      return wl().memoizedState = Jp.bind(
        null,
        Be
      );
    }
  }, Ay = {
    readContext: ml,
    use: el,
    useCallback: sc,
    useContext: ml,
    useEffect: Xp,
    useImperativeHandle: Ws,
    useInsertionEffect: my,
    useLayoutEffect: mn,
    useMemo: vy,
    useReducer: Jf,
    useRef: If,
    useState: function() {
      return Jf(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Xt();
      return gy(
        u,
        yt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Jf(Gn)[0], n = Xt().memoizedState;
      return [
        typeof l == "boolean" ? l : Kf(l),
        n
      ];
    },
    useSyncExternalStore: kf,
    useId: by,
    useHostTransitionStatus: Za,
    useFormState: Ln,
    useActionState: Ln,
    useOptimistic: function(l, n) {
      var u = Xt();
      return Xs(u, yt, l, n);
    },
    useMemoCache: ws,
    useCacheRefresh: Kp
  }, Uu = {
    readContext: ml,
    use: el,
    useCallback: sc,
    useContext: ml,
    useEffect: Xp,
    useImperativeHandle: Ws,
    useInsertionEffect: my,
    useLayoutEffect: mn,
    useMemo: vy,
    useReducer: Gs,
    useRef: If,
    useState: function() {
      return Gs(Gn);
    },
    useDebugValue: rc,
    useDeferredValue: function(l, n) {
      var u = Xt();
      return yt === null ? Pf(u, l, n) : gy(
        u,
        yt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Gs(Gn)[0], n = Xt().memoizedState;
      return [
        typeof l == "boolean" ? l : Kf(l),
        n
      ];
    },
    useSyncExternalStore: kf,
    useId: by,
    useHostTransitionStatus: Za,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l, n) {
      var u = Xt();
      return yt !== null ? Xs(u, yt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: ws,
    useCacheRefresh: Kp
  }, yc = null, To = 0;
  function Ps(l) {
    var n = To;
    return To += 1, yc === null && (yc = []), ay(yc, l, n);
  }
  function mc(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function jl(l, n) {
    throw n.$$typeof === $ ? Error(_(525)) : (l = Object.prototype.toString.call(n), Error(
      _(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Oy(l) {
    var n = l._init;
    return n(l._payload);
  }
  function fa(l) {
    function n(z, A) {
      if (l) {
        var U = z.deletions;
        U === null ? (z.deletions = [A], z.flags |= 16) : U.push(A);
      }
    }
    function u(z, A) {
      if (!l) return null;
      for (; A !== null; )
        n(z, A), A = A.sibling;
      return null;
    }
    function c(z) {
      for (var A = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? A.set(z.key, z) : A.set(z.index, z), z = z.sibling;
      return A;
    }
    function r(z, A) {
      return z = sn(z, A), z.index = 0, z.sibling = null, z;
    }
    function s(z, A, U) {
      return z.index = U, l ? (U = z.alternate, U !== null ? (U = U.index, U < A ? (z.flags |= 67108866, A) : U) : (z.flags |= 67108866, A)) : (z.flags |= 1048576, A);
    }
    function y(z) {
      return l && z.alternate === null && (z.flags |= 67108866), z;
    }
    function p(z, A, U, Z) {
      return A === null || A.tag !== 6 ? (A = co(U, z.mode, Z), A.return = z, A) : (A = r(A, U), A.return = z, A);
    }
    function S(z, A, U, Z) {
      var fe = U.type;
      return fe === je ? X(
        z,
        A,
        U.props.children,
        Z,
        U.key
      ) : A !== null && (A.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === At && Oy(fe) === A.type) ? (A = r(A, U.props), mc(A, U), A.return = z, A) : (A = P(
        U.type,
        U.key,
        U.props,
        null,
        z.mode,
        Z
      ), mc(A, U), A.return = z, A);
    }
    function C(z, A, U, Z) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== U.containerInfo || A.stateNode.implementation !== U.implementation ? (A = jt(U, z.mode, Z), A.return = z, A) : (A = r(A, U.children || []), A.return = z, A);
    }
    function X(z, A, U, Z, fe) {
      return A === null || A.tag !== 7 ? (A = ja(
        U,
        z.mode,
        Z,
        fe
      ), A.return = z, A) : (A = r(A, U), A.return = z, A);
    }
    function K(z, A, U) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = co(
          "" + A,
          z.mode,
          U
        ), A.return = z, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case M:
            return U = P(
              A.type,
              A.key,
              A.props,
              null,
              z.mode,
              U
            ), mc(U, A), U.return = z, U;
          case ce:
            return A = jt(
              A,
              z.mode,
              U
            ), A.return = z, A;
          case At:
            var Z = A._init;
            return A = Z(A._payload), K(z, A, U);
        }
        if (ht(A) || Re(A))
          return A = ja(
            A,
            z.mode,
            U,
            null
          ), A.return = z, A;
        if (typeof A.then == "function")
          return K(z, Ps(A), U);
        if (A.$$typeof === ct)
          return K(
            z,
            qf(z, A),
            U
          );
        jl(z, A);
      }
      return null;
    }
    function x(z, A, U, Z) {
      var fe = A !== null ? A.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return fe !== null ? null : p(z, A, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            return U.key === fe ? S(z, A, U, Z) : null;
          case ce:
            return U.key === fe ? C(z, A, U, Z) : null;
          case At:
            return fe = U._init, U = fe(U._payload), x(z, A, U, Z);
        }
        if (ht(U) || Re(U))
          return fe !== null ? null : X(z, A, U, Z, null);
        if (typeof U.then == "function")
          return x(
            z,
            A,
            Ps(U),
            Z
          );
        if (U.$$typeof === ct)
          return x(
            z,
            A,
            qf(z, U),
            Z
          );
        jl(z, U);
      }
      return null;
    }
    function Y(z, A, U, Z, fe) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return z = z.get(U) || null, p(A, z, "" + Z, fe);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case M:
            return z = z.get(
              Z.key === null ? U : Z.key
            ) || null, S(A, z, Z, fe);
          case ce:
            return z = z.get(
              Z.key === null ? U : Z.key
            ) || null, C(A, z, Z, fe);
          case At:
            var Ze = Z._init;
            return Z = Ze(Z._payload), Y(
              z,
              A,
              U,
              Z,
              fe
            );
        }
        if (ht(Z) || Re(Z))
          return z = z.get(U) || null, X(A, z, Z, fe, null);
        if (typeof Z.then == "function")
          return Y(
            z,
            A,
            U,
            Ps(Z),
            fe
          );
        if (Z.$$typeof === ct)
          return Y(
            z,
            A,
            U,
            qf(A, Z),
            fe
          );
        jl(A, Z);
      }
      return null;
    }
    function ge(z, A, U, Z) {
      for (var fe = null, Ze = null, pe = A, Ee = A = 0, bl = null; pe !== null && Ee < U.length; Ee++) {
        pe.index > Ee ? (bl = pe, pe = null) : bl = pe.sibling;
        var ut = x(
          z,
          pe,
          U[Ee],
          Z
        );
        if (ut === null) {
          pe === null && (pe = bl);
          break;
        }
        l && pe && ut.alternate === null && n(z, pe), A = s(ut, A, Ee), Ze === null ? fe = ut : Ze.sibling = ut, Ze = ut, pe = bl;
      }
      if (Ee === U.length)
        return u(z, pe), it && lt(z, Ee), fe;
      if (pe === null) {
        for (; Ee < U.length; Ee++)
          pe = K(z, U[Ee], Z), pe !== null && (A = s(
            pe,
            A,
            Ee
          ), Ze === null ? fe = pe : Ze.sibling = pe, Ze = pe);
        return it && lt(z, Ee), fe;
      }
      for (pe = c(pe); Ee < U.length; Ee++)
        bl = Y(
          pe,
          z,
          Ee,
          U[Ee],
          Z
        ), bl !== null && (l && bl.alternate !== null && pe.delete(
          bl.key === null ? Ee : bl.key
        ), A = s(
          bl,
          A,
          Ee
        ), Ze === null ? fe = bl : Ze.sibling = bl, Ze = bl);
      return l && pe.forEach(function(Ni) {
        return n(z, Ni);
      }), it && lt(z, Ee), fe;
    }
    function be(z, A, U, Z) {
      if (U == null) throw Error(_(151));
      for (var fe = null, Ze = null, pe = A, Ee = A = 0, bl = null, ut = U.next(); pe !== null && !ut.done; Ee++, ut = U.next()) {
        pe.index > Ee ? (bl = pe, pe = null) : bl = pe.sibling;
        var Ni = x(z, pe, ut.value, Z);
        if (Ni === null) {
          pe === null && (pe = bl);
          break;
        }
        l && pe && Ni.alternate === null && n(z, pe), A = s(Ni, A, Ee), Ze === null ? fe = Ni : Ze.sibling = Ni, Ze = Ni, pe = bl;
      }
      if (ut.done)
        return u(z, pe), it && lt(z, Ee), fe;
      if (pe === null) {
        for (; !ut.done; Ee++, ut = U.next())
          ut = K(z, ut.value, Z), ut !== null && (A = s(ut, A, Ee), Ze === null ? fe = ut : Ze.sibling = ut, Ze = ut);
        return it && lt(z, Ee), fe;
      }
      for (pe = c(pe); !ut.done; Ee++, ut = U.next())
        ut = Y(pe, z, Ee, ut.value, Z), ut !== null && (l && ut.alternate !== null && pe.delete(ut.key === null ? Ee : ut.key), A = s(ut, A, Ee), Ze === null ? fe = ut : Ze.sibling = ut, Ze = ut);
      return l && pe.forEach(function(Cg) {
        return n(z, Cg);
      }), it && lt(z, Ee), fe;
    }
    function rt(z, A, U, Z) {
      if (typeof U == "object" && U !== null && U.type === je && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case M:
            e: {
              for (var fe = U.key; A !== null; ) {
                if (A.key === fe) {
                  if (fe = U.type, fe === je) {
                    if (A.tag === 7) {
                      u(
                        z,
                        A.sibling
                      ), Z = r(
                        A,
                        U.props.children
                      ), Z.return = z, z = Z;
                      break e;
                    }
                  } else if (A.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === At && Oy(fe) === A.type) {
                    u(
                      z,
                      A.sibling
                    ), Z = r(A, U.props), mc(Z, U), Z.return = z, z = Z;
                    break e;
                  }
                  u(z, A);
                  break;
                } else n(z, A);
                A = A.sibling;
              }
              U.type === je ? (Z = ja(
                U.props.children,
                z.mode,
                Z,
                U.key
              ), Z.return = z, z = Z) : (Z = P(
                U.type,
                U.key,
                U.props,
                null,
                z.mode,
                Z
              ), mc(Z, U), Z.return = z, z = Z);
            }
            return y(z);
          case ce:
            e: {
              for (fe = U.key; A !== null; ) {
                if (A.key === fe)
                  if (A.tag === 4 && A.stateNode.containerInfo === U.containerInfo && A.stateNode.implementation === U.implementation) {
                    u(
                      z,
                      A.sibling
                    ), Z = r(A, U.children || []), Z.return = z, z = Z;
                    break e;
                  } else {
                    u(z, A);
                    break;
                  }
                else n(z, A);
                A = A.sibling;
              }
              Z = jt(U, z.mode, Z), Z.return = z, z = Z;
            }
            return y(z);
          case At:
            return fe = U._init, U = fe(U._payload), rt(
              z,
              A,
              U,
              Z
            );
        }
        if (ht(U))
          return ge(
            z,
            A,
            U,
            Z
          );
        if (Re(U)) {
          if (fe = Re(U), typeof fe != "function") throw Error(_(150));
          return U = fe.call(U), be(
            z,
            A,
            U,
            Z
          );
        }
        if (typeof U.then == "function")
          return rt(
            z,
            A,
            Ps(U),
            Z
          );
        if (U.$$typeof === ct)
          return rt(
            z,
            A,
            qf(z, U),
            Z
          );
        jl(z, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, A !== null && A.tag === 6 ? (u(z, A.sibling), Z = r(A, U), Z.return = z, z = Z) : (u(z, A), Z = co(U, z.mode, Z), Z.return = z, z = Z), y(z)) : u(z, A);
    }
    return function(z, A, U, Z) {
      try {
        To = 0;
        var fe = rt(
          z,
          A,
          U,
          Z
        );
        return yc = null, fe;
      } catch (pe) {
        if (pe === hi || pe === Gf) throw pe;
        var Ze = ua(29, pe, null, z.mode);
        return Ze.lanes = Z, Ze.return = z, Ze;
      } finally {
      }
    };
  }
  var pc = fa(!0), Vn = fa(!1), Oa = N(null), Gl = null;
  function Cu(l) {
    var n = l.alternate;
    F(Tt, Tt.current & 1), F(Oa, l), Gl === null && (n === null || fc.current !== null || n.memoizedState !== null) && (Gl = l);
  }
  function Xn(l) {
    if (l.tag === 22) {
      if (F(Tt, Tt.current), F(Oa, l), Gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (Gl = l);
      }
    } else Qn();
  }
  function Qn() {
    F(Tt, Tt.current), F(Oa, Oa.current);
  }
  function pn(l) {
    Q(Oa), Gl === l && (Gl = null), Q(Tt);
  }
  var Tt = N(0);
  function tr(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Ar(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function vi(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : oe({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ed = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Da(), r = ca(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = jn(l, r, c), n !== null && (za(n, l, c), oc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Da(), c = ca(u);
      c.tag = 2, n != null && (c.callback = n), n = jn(l, c, u), n !== null && (za(n, l, u), oc(n, l, u));
    }
  };
  function Eo(l, n, u, c, r, s, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, y) : n.prototype && n.prototype.isPureReactComponent ? !ni(u, c) || !ni(r, s) : !0;
  }
  function vc(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && ed.enqueueReplaceState(n, n.state, null);
  }
  function gi(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = oe({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  var lr = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function Ro(l) {
    lr(l);
  }
  function Dy(l) {
    console.error(l);
  }
  function ar(l) {
    lr(l);
  }
  function nr(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function zy(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function My(l, n, u) {
    return u = ca(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nr(l, n);
    }, u;
  }
  function Uy(l) {
    return l = ca(l), l.tag = 3, l;
  }
  function ra(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        zy(n, u, c);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      zy(n, u, c), typeof r != "function" && (Ei === null ? Ei = /* @__PURE__ */ new Set([this]) : Ei.add(this));
      var p = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function $p(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && ho(
        n,
        u,
        r,
        !0
      ), u = Oa.current, u !== null) {
        switch (u.tag) {
          case 13:
            return Gl === null ? Dc() : u.alternate === null && Jt === 0 && (Jt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Us ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Dd(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Us ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Dd(l, c, r)), !1;
        }
        throw Error(_(435, u.tag));
      }
      return Dd(l, c, r), Dc(), !1;
    }
    if (it)
      return n = Oa.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== uc && (l = Error(_(422), { cause: c }), so(Ea(l, u)))) : (c !== uc && (n = Error(_(423), {
        cause: c
      }), so(
        Ea(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = Ea(c, u), r = My(
        l.stateNode,
        c,
        r
      ), iy(l, r), Jt !== 4 && (Jt = 2)), !1;
    var s = Error(_(520), { cause: c });
    if (s = Ea(s, u), Co === null ? Co = [s] : Co.push(s), Jt !== 4 && (Jt = 2), n === null) return !0;
    c = Ea(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = My(u.stateNode, c, l), iy(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Ei === null || !Ei.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = Uy(r), ra(
              r,
              l,
              u,
              c
            ), iy(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Qt = Error(_(461)), ol = !1;
  function vl(l, n, u, c) {
    n.child = l === null ? Vn(n, null, u, c) : pc(
      n,
      l.child,
      u,
      c
    );
  }
  function Wp(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var y = {};
      for (var p in c)
        p !== "ref" && (y[p] = c[p]);
    } else y = c;
    return si(n), c = Bs(
      l,
      n,
      u,
      y,
      s,
      r
    ), p = Ys(), l !== null && !ol ? (bo(l, n, r), Zn(l, n, r)) : (it && p && nc(n), n.flags |= 1, vl(l, n, c, r), n.child);
  }
  function _u(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !Hf(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, gc(
        l,
        n,
        s,
        c,
        r
      )) : (l = P(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !rd(l, r)) {
      var y = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ni, u(y, c) && l.ref === n.ref)
        return Zn(l, n, r);
    }
    return n.flags |= 1, l = sn(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function gc(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if (ni(s, c) && l.ref === n.ref)
        if (ol = !1, n.pendingProps = c = s, rd(l, r))
          (l.flags & 131072) !== 0 && (ol = !0);
        else
          return n.lanes = l.lanes, Zn(l, n, r);
    }
    return ld(
      l,
      n,
      u,
      c,
      r
    );
  }
  function td(l, n, u) {
    var c = n.pendingProps, r = c.children, s = l !== null ? l.memoizedState : null;
    if (c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (c = s !== null ? s.baseLanes | u : u, l !== null) {
          for (r = n.child = l.child, s = 0; r !== null; )
            s = s | r.lanes | r.childLanes, r = r.sibling;
          n.childLanes = s & ~c;
        } else n.childLanes = 0, n.child = null;
        return bc(
          l,
          n,
          c,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && ic(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? pl(n, s) : vo(), Xn(n);
      else
        return n.lanes = n.childLanes = 536870912, bc(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u
        );
    } else
      s !== null ? (ic(n, s.cachePool), pl(n, s), Qn(), n.memoizedState = null) : (l !== null && ic(n, null), vo(), Qn());
    return vl(l, n, r, u), n.child;
  }
  function bc(l, n, u, c) {
    var r = jf();
    return r = r === null ? null : { parent: il._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && ic(n, null), vo(), Xn(n), l !== null && ho(l, n, c, !0), null;
  }
  function ur(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(_(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function ld(l, n, u, c, r) {
    return si(n), u = Bs(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = Ys(), l !== null && !ol ? (bo(l, n, r), Zn(l, n, r)) : (it && c && nc(n), n.flags |= 1, vl(l, n, u, r), n.child);
  }
  function Cy(l, n, u, c, r, s) {
    return si(n), n.updateQueue = null, u = fy(
      n,
      c,
      u,
      r
    ), mi(l), c = Ys(), l !== null && !ol ? (bo(l, n, s), Zn(l, n, s)) : (it && c && nc(n), n.flags |= 1, vl(l, n, u, s), n.child);
  }
  function ad(l, n, u, c, r) {
    if (si(n), n.stateNode === null) {
      var s = io, y = u.contextType;
      typeof y == "object" && y !== null && (s = ml(y)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = ed, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, _s(n), y = u.contextType, s.context = typeof y == "object" && y !== null ? ml(y) : io, s.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (vi(
        n,
        u,
        y,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (y = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), y !== s.state && ed.enqueueReplaceState(s, s.state, null), zu(n, c, s, r), po(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var p = n.memoizedProps, S = gi(u, p);
      s.props = S;
      var C = s.context, X = u.contextType;
      y = io, typeof X == "object" && X !== null && (y = ml(X));
      var K = u.getDerivedStateFromProps;
      X = typeof K == "function" || typeof s.getSnapshotBeforeUpdate == "function", p = n.pendingProps !== p, X || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (p || C !== y) && vc(
        n,
        s,
        c,
        y
      ), wn = !1;
      var x = n.memoizedState;
      s.state = x, zu(n, c, s, r), po(), C = n.memoizedState, p || x !== C || wn ? (typeof K == "function" && (vi(
        n,
        u,
        K,
        c
      ), C = n.memoizedState), (S = wn || Eo(
        n,
        u,
        S,
        c,
        x,
        C,
        y
      )) ? (X || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = C), s.props = c, s.state = C, s.context = y, c = S) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, Hs(l, n), y = n.memoizedProps, X = gi(u, y), s.props = X, K = n.pendingProps, x = s.context, C = u.contextType, S = io, typeof C == "object" && C !== null && (S = ml(C)), p = u.getDerivedStateFromProps, (C = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (y !== K || x !== S) && vc(
        n,
        s,
        c,
        S
      ), wn = !1, x = n.memoizedState, s.state = x, zu(n, c, s, r), po();
      var Y = n.memoizedState;
      y !== K || x !== Y || wn || l !== null && l.dependencies !== null && Yf(l.dependencies) ? (typeof p == "function" && (vi(
        n,
        u,
        p,
        c
      ), Y = n.memoizedState), (X = wn || Eo(
        n,
        u,
        X,
        c,
        x,
        Y,
        S
      ) || l !== null && l.dependencies !== null && Yf(l.dependencies)) ? (C || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, Y, S), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        Y,
        S
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Y), s.props = c, s.state = Y, s.context = S, c = X) : (typeof s.componentDidUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && x === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, ur(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = pc(
      n,
      l.child,
      null,
      r
    ), n.child = pc(
      n,
      null,
      u,
      r
    )) : vl(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Zn(
      l,
      n,
      r
    ), l;
  }
  function nd(l, n, u, c) {
    return ro(), n.flags |= 256, vl(l, n, u, c), n.child;
  }
  var ud = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _y(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function Hy(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ka), l;
  }
  function xy(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, y;
    if ((y = s) || (y = l !== null && l.memoizedState === null ? !1 : (Tt.current & 2) !== 0), y && (r = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (it) {
        if (r ? Cu(n) : Qn(), it) {
          var p = ot, S;
          if (S = p) {
            e: {
              for (S = p, p = Va; S.nodeType !== 8; ) {
                if (!p) {
                  p = null;
                  break e;
                }
                if (S = gn(
                  S.nextSibling
                ), S === null) {
                  p = null;
                  break e;
                }
              }
              p = S;
            }
            p !== null ? (n.memoizedState = {
              dehydrated: p,
              treeContext: Ru !== null ? { id: dn, overflow: Vt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, S = ua(
              18,
              null,
              null,
              0
            ), S.stateNode = p, S.return = n, n.child = S, Ft = n, ot = null, S = !0) : S = !1;
          }
          S || Au(n);
        }
        if (p = n.memoizedState, p !== null && (p = p.dehydrated, p !== null))
          return Ar(p) ? n.lanes = 32 : n.lanes = 536870912, null;
        pn(n);
      }
      return p = c.children, c = c.fallback, r ? (Qn(), r = n.mode, p = cd(
        { mode: "hidden", children: p },
        r
      ), c = ja(
        c,
        r,
        u,
        null
      ), p.return = n, c.return = n, p.sibling = c, n.child = p, r = n.child, r.memoizedState = _y(u), r.childLanes = Hy(
        l,
        y,
        u
      ), n.memoizedState = ud, c) : (Cu(n), id(n, p));
    }
    if (S = l.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
      if (s)
        n.flags & 256 ? (Cu(n), n.flags &= -257, n = bi(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Qn(), n.child = l.child, n.flags |= 128, n = null) : (Qn(), r = c.fallback, p = n.mode, c = cd(
          { mode: "visible", children: c.children },
          p
        ), r = ja(
          r,
          p,
          u,
          null
        ), r.flags |= 2, c.return = n, r.return = n, c.sibling = r, n.child = c, pc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = _y(u), c.childLanes = Hy(
          l,
          y,
          u
        ), n.memoizedState = ud, n = r);
      else if (Cu(n), Ar(p)) {
        if (y = p.nextSibling && p.nextSibling.dataset, y) var C = y.dgst;
        y = C, c = Error(_(419)), c.stack = "", c.digest = y, so({ value: c, source: null, stack: null }), n = bi(
          l,
          n,
          u
        );
      } else if (ol || ho(l, n, u, !1), y = (u & l.childLanes) !== 0, ol || y) {
        if (y = Ot, y !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : Pt(c), c = (c & (y.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== S.retryLane))
          throw S.retryLane = c, xn(l, c), za(y, l, c), Qt;
        p.data === "$?" || Dc(), n = bi(
          l,
          n,
          u
        );
      } else
        p.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = S.treeContext, ot = gn(
          p.nextSibling
        ), Ft = n, it = !0, La = null, Va = !1, l !== null && (Ga[ia++] = dn, Ga[ia++] = Vt, Ga[ia++] = Ru, dn = l.id, Vt = l.overflow, Ru = n), n = id(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Qn(), r = c.fallback, p = n.mode, S = l.child, C = S.sibling, c = sn(S, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = S.subtreeFlags & 65011712, C !== null ? r = sn(C, r) : (r = ja(
      r,
      p,
      u,
      null
    ), r.flags |= 2), r.return = n, c.return = n, c.sibling = r, n.child = c, c = r, r = n.child, p = l.child.memoizedState, p === null ? p = _y(u) : (S = p.cachePool, S !== null ? (C = il._currentValue, S = S.parent !== C ? { parent: C, pool: C } : S) : S = zs(), p = {
      baseLanes: p.baseLanes | u,
      cachePool: S
    }), r.memoizedState = p, r.childLanes = Hy(
      l,
      y,
      u
    ), n.memoizedState = ud, c) : (Cu(n), u = l.child, l = u.sibling, u = sn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function id(l, n) {
    return n = cd(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function cd(l, n) {
    return l = ua(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function bi(l, n, u) {
    return pc(n, l.child, null, u), l = id(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function ir(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Es(l.return, n, u);
  }
  function od(l, n, u, c, r) {
    var s = l.memoizedState;
    s === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r
    } : (s.isBackwards = n, s.rendering = null, s.renderingStartTime = 0, s.last = c, s.tail = u, s.tailMode = r);
  }
  function fd(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    if (vl(l, n, c.children, u), c = Tt.current, (c & 2) !== 0)
      c = c & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && ir(l, u, n);
          else if (l.tag === 19)
            ir(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      c &= 1;
    }
    switch (F(Tt, c), r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && tr(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), od(
          n,
          !1,
          r,
          u,
          s
        );
        break;
      case "backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && tr(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        od(
          n,
          !0,
          u,
          null,
          s
        );
        break;
      case "together":
        od(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Nu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (ho(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(_(153));
    if (n.child !== null) {
      for (l = n.child, u = sn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = sn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function rd(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yf(l)));
  }
  function Fp(l, n, u) {
    switch (n.tag) {
      case 3:
        ze(n, n.stateNode.containerInfo), Du(n, il, l.memoizedState.cache), ro();
        break;
      case 27:
      case 5:
        ta(n);
        break;
      case 4:
        ze(n, n.stateNode.containerInfo);
        break;
      case 10:
        Du(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Cu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? xy(l, n, u) : (Cu(n), l = Zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Cu(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (ho(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return fd(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), F(Tt, Tt.current), c) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, td(l, n, u);
      case 24:
        Du(n, il, l.memoizedState.cache);
    }
    return Zn(l, n, u);
  }
  function Ip(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ol = !0;
      else {
        if (!rd(l, u) && (n.flags & 128) === 0)
          return ol = !1, Fp(
            l,
            n,
            u
          );
        ol = (l.flags & 131072) !== 0;
      }
    else
      ol = !1, it && (n.flags & 1048576) !== 0 && Ts(n, oo, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var c = n.elementType, r = c._init;
          if (c = r(c._payload), n.type = c, typeof c == "function")
            Hf(c) ? (l = gi(c, l), n.tag = 1, n = ad(
              null,
              n,
              c,
              l,
              u
            )) : (n.tag = 0, n = ld(
              null,
              n,
              c,
              l,
              u
            ));
          else {
            if (c != null) {
              if (r = c.$$typeof, r === Wt) {
                n.tag = 11, n = Wp(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              } else if (r === ke) {
                n.tag = 14, n = _u(
                  null,
                  n,
                  c,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = wt(c) || c, Error(_(306, n, ""));
          }
        }
        return n;
      case 0:
        return ld(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = gi(
          c,
          n.pendingProps
        ), ad(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (ze(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(_(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, Hs(l, n), zu(n, c, null, u);
          var y = n.memoizedState;
          if (c = y.cache, Du(n, il, c), c !== s.cache && ty(
            n,
            [il],
            u,
            !0
          ), po(), c = y.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = Ea(
                Error(_(424)),
                n
              ), so(r), n = nd(
                l,
                n,
                c,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (ot = gn(l.firstChild), Ft = n, it = !0, La = null, Va = !0, u = Vn(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (ro(), c === r) {
              n = Zn(
                l,
                n,
                u
              );
              break e;
            }
            vl(
              l,
              n,
              c,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return ur(l, n), l === null ? (u = yv(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : it || (u = n.type, l = n.pendingProps, c = Wa(
          ue.current
        ).createElement(u), c[yl] = n, c[Zl] = l, Oe(c, u, l), ul(c), n.stateNode = c) : n.memoizedState = yv(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ta(n), l === null && it && (c = n.stateNode = ie(
          n.type,
          n.pendingProps,
          ue.current
        ), Ft = n, Va = !0, r = ot, Mi(n.type) ? (Ui = r, ot = gn(
          c.firstChild
        )) : ot = r), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), ur(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && it && ((r = c = ot) && (c = Vo(
          c,
          n.type,
          n.pendingProps,
          Va
        ), c !== null ? (n.stateNode = c, Ft = n, ot = gn(
          c.firstChild
        ), Va = !1, r = !0) : r = !1), r || Au(n)), ta(n), r = n.type, s = n.pendingProps, y = l !== null ? l.memoizedProps : null, c = s.children, eu(r, s) ? c = null : y !== null && eu(r, y) && (n.flags |= 32), n.memoizedState !== null && (r = Bs(
          l,
          n,
          Gp,
          null,
          null,
          u
        ), pa._currentValue = r), ur(l, n), vl(l, n, c, u), n.child;
      case 6:
        return l === null && it && ((l = u = ot) && (u = zg(
          u,
          n.pendingProps,
          Va
        ), u !== null ? (n.stateNode = u, Ft = n, ot = null, l = !0) : l = !1), l || Au(n)), null;
      case 13:
        return xy(l, n, u);
      case 4:
        return ze(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = pc(
          n,
          null,
          c,
          u
        ) : vl(
          l,
          n,
          c,
          u
        ), n.child;
      case 11:
        return Wp(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return vl(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Du(n, n.type, c.value), vl(
          l,
          n,
          c.children,
          u
        ), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, si(n), r = ml(r), c = c(r), n.flags |= 1, vl(l, n, c, u), n.child;
      case 14:
        return _u(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return gc(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return fd(l, n, u);
      case 31:
        return c = n.pendingProps, u = n.mode, c = {
          mode: c.mode,
          children: c.children
        }, l === null ? (u = cd(
          c,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = sn(l.child, c), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return td(l, n, u);
      case 24:
        return si(n), c = ml(il), l === null ? (r = jf(), r === null && (r = Ot, s = mo(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = {
          parent: c,
          cache: r
        }, _s(n), Du(n, il, r)) : ((l.lanes & u) !== 0 && (Hs(l, n), zu(n, null, null, u), po()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), Du(n, il, c)) : (c = s.cache, Du(n, il, c), c !== r.cache && ty(
          n,
          [il],
          u,
          !0
        ))), vl(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(_(156, n.tag));
  }
  function Kn(l) {
    l.flags |= 4;
  }
  function Ao(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !pm(n)) {
      if (n = Oa.current, n !== null && ((Ie & 4194048) === Ie ? Gl !== null : (Ie & 62914560) !== Ie && (Ie & 536870912) === 0 || n !== Gl))
        throw cc = Us, Ms;
      l.flags |= 8192;
    }
  }
  function cr(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ae() : 536870912, l.lanes |= n, Uo |= n);
  }
  function Oo(l, n) {
    if (!it)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Te(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps;
    switch (Nn(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Te(n), null;
      case 1:
        return Te(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), Bn(il), xt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (fo(n) ? Kn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ey())), Te(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Kn(n), u !== null ? (Te(n), Ao(n, u)) : (Te(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Kn(n), Te(n), Ao(n, u)) : (Te(n), n.flags &= -16777217) : (l.memoizedProps !== c && Kn(n), Te(n), n.flags &= -16777217), null;
      case 27:
        Rn(n), u = ue.current;
        var r = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return Te(n), null;
          }
          l = ne.current, fo(n) ? Nf(n) : (l = ie(r, c, u), n.stateNode = l, Kn(n));
        }
        return Te(n), null;
      case 5:
        if (Rn(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(_(166));
            return Te(n), null;
          }
          if (l = ne.current, fo(n))
            Nf(n);
          else {
            switch (r = Wa(
              ue.current
            ), l) {
              case 1:
                l = r.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = r.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = r.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = r.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof c.is == "string" ? r.createElement("select", { is: c.is }) : r.createElement("select"), c.multiple ? l.multiple = !0 : c.size && (l.size = c.size);
                    break;
                  default:
                    l = typeof c.is == "string" ? r.createElement(u, { is: c.is }) : r.createElement(u);
                }
            }
            l[yl] = n, l[Zl] = c;
            e: for (r = n.child; r !== null; ) {
              if (r.tag === 5 || r.tag === 6)
                l.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
              }
              if (r === n) break e;
              for (; r.sibling === null; ) {
                if (r.return === null || r.return === n)
                  break e;
                r = r.return;
              }
              r.sibling.return = r.return, r = r.sibling;
            }
            n.stateNode = l;
            e: switch (Oe(l, u, c), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!c.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Kn(n);
          }
        }
        return Te(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Kn(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(_(166));
          if (l = ue.current, fo(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Ft, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[yl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || dm(l.nodeValue, u)), l || Au(n);
          } else
            l = Wa(l).createTextNode(
              c
            ), l[yl] = n, n.stateNode = l;
        }
        return Te(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = fo(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(_(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(_(317));
              r[yl] = n;
            } else
              ro(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Te(n), r = !1;
          } else
            r = ey(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (pn(n), n) : (pn(n), null);
        }
        if (pn(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = c !== null, l = l !== null && l.memoizedState !== null, u) {
          c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool);
          var s = null;
          c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), cr(n, n.updateQueue), Te(n), null;
      case 4:
        return xt(), l === null && rm(n.stateNode.containerInfo), Te(n), null;
      case 10:
        return Bn(n.type), Te(n), null;
      case 19:
        if (Q(Tt), r = n.memoizedState, r === null) return Te(n), null;
        if (c = (n.flags & 128) !== 0, s = r.rendering, s === null)
          if (c) Oo(r, !1);
          else {
            if (Jt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = tr(l), s !== null) {
                  for (n.flags |= 128, Oo(r, !1), l = s.updateQueue, n.updateQueue = l, cr(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Qe(u, l), u = u.sibling;
                  return F(
                    Tt,
                    Tt.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            r.tail !== null && hl() > bd && (n.flags |= 128, c = !0, Oo(r, !1), n.lanes = 4194304);
          }
        else {
          if (!c)
            if (l = tr(s), l !== null) {
              if (n.flags |= 128, c = !0, l = l.updateQueue, n.updateQueue = l, cr(n, l), Oo(r, !0), r.tail === null && r.tailMode === "hidden" && !s.alternate && !it)
                return Te(n), null;
            } else
              2 * hl() - r.renderingStartTime > bd && u !== 536870912 && (n.flags |= 128, c = !0, Oo(r, !1), n.lanes = 4194304);
          r.isBackwards ? (s.sibling = n.child, n.child = s) : (l = r.last, l !== null ? l.sibling = s : n.child = s, r.last = s);
        }
        return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.renderingStartTime = hl(), n.sibling = null, l = Tt.current, F(Tt, c ? l & 1 | 2 : l & 1), n) : (Te(n), null);
      case 22:
      case 23:
        return pn(n), go(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Te(n), u = n.updateQueue, u !== null && cr(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && Q(qn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), Bn(il), Te(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(_(156, n.tag));
  }
  function bg(l, n) {
    switch (Nn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return Bn(il), xt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Rn(n), null;
      case 13:
        if (pn(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(_(340));
          ro();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return Q(Tt), null;
      case 4:
        return xt(), null;
      case 10:
        return Bn(n.type), null;
      case 22:
      case 23:
        return pn(n), go(), l !== null && Q(qn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return Bn(il), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function By(l, n) {
    switch (Nn(n), n.tag) {
      case 3:
        Bn(il), xt();
        break;
      case 26:
      case 27:
      case 5:
        Rn(n);
        break;
      case 4:
        xt();
        break;
      case 13:
        pn(n);
        break;
      case 19:
        Q(Tt);
        break;
      case 10:
        Bn(n.type);
        break;
      case 22:
      case 23:
        pn(n), go(), l !== null && Q(qn);
        break;
      case 24:
        Bn(il);
    }
  }
  function or(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, y = u.inst;
            c = s(), y.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (p) {
      vt(n, n.return, p);
    }
  }
  function Si(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var y = c.inst, p = y.destroy;
            if (p !== void 0) {
              y.destroy = void 0, r = n;
              var S = u, C = p;
              try {
                C();
              } catch (X) {
                vt(
                  r,
                  S,
                  X
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (X) {
      vt(n, n.return, X);
    }
  }
  function sd(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Vf(n, u);
      } catch (c) {
        vt(l, l.return, c);
      }
    }
  }
  function Yy(l, n, u) {
    u.props = gi(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      vt(l, n, c);
    }
  }
  function Do(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      vt(l, n, r);
    }
  }
  function vn(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          vt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          vt(l, n, r);
        }
      else u.current = null;
  }
  function zo(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      vt(l, l.return, r);
    }
  }
  function qy(l, n, u) {
    try {
      var c = l.stateNode;
      Ag(c, l.type, u, n), c[Zl] = n;
    } catch (r) {
      vt(l, l.return, r);
    }
  }
  function Pp(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Mi(l.type) || l.tag === 4;
  }
  function Ka(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Pp(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Mi(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sc(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = _d));
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Sc(l, n, u), l = l.sibling; l !== null; )
        Sc(l, n, u), l = l.sibling;
  }
  function dd(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Mi(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (dd(l, n, u), l = l.sibling; l !== null; )
        dd(l, n, u), l = l.sibling;
  }
  function hd(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      Oe(n, c, u), n[yl] = l, n[Zl] = u;
    } catch (s) {
      vt(l, l.return, s);
    }
  }
  var Jn = !1, Zt = !1, yd = !1, md = typeof WeakSet == "function" ? WeakSet : Set, fl = null;
  function wy(l, n) {
    if (l = l.containerInfo, Tr = zr, l = Jh(l), Cf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, p = -1, S = -1, C = 0, X = 0, K = l, x = null;
            t: for (; ; ) {
              for (var Y; K !== u || r !== 0 && K.nodeType !== 3 || (p = y + r), K !== s || c !== 0 && K.nodeType !== 3 || (S = y + c), K.nodeType === 3 && (y += K.nodeValue.length), (Y = K.firstChild) !== null; )
                x = K, K = Y;
              for (; ; ) {
                if (K === l) break t;
                if (x === u && ++C === r && (p = y), x === s && ++X === c && (S = y), (Y = K.nextSibling) !== null) break;
                K = x, x = K.parentNode;
              }
              K = Y;
            }
            u = p === -1 || S === -1 ? null : { start: p, end: S };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Er = { focusedElem: l, selectionRange: u }, zr = !1, fl = n; fl !== null; )
      if (n = fl, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, fl = l;
      else
        for (; fl !== null; ) {
          switch (n = fl, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var ge = gi(
                    u.type,
                    r,
                    u.elementType === u.type
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (be) {
                  vt(
                    u,
                    u.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Rr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(_(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, fl = l;
            break;
          }
          fl = n.return;
        }
  }
  function jy(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        $n(l, u), c & 4 && or(5, u);
        break;
      case 1:
        if ($n(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              vt(u, u.return, y);
            }
          else {
            var r = gi(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              vt(
                u,
                u.return,
                y
              );
            }
          }
        c & 64 && sd(u), c & 512 && Do(u, u.return);
        break;
      case 3:
        if ($n(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Vf(l, n);
          } catch (y) {
            vt(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && c & 4 && hd(u);
      case 26:
      case 5:
        $n(l, u), n === null && c & 4 && zo(u), c & 512 && Do(u, u.return);
        break;
      case 12:
        $n(l, u);
        break;
      case 13:
        $n(l, u), c & 4 && pd(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Sg.bind(
          null,
          u
        ), Mg(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Jn, !c) {
          n = n !== null && n.memoizedState !== null || Zt, r = Jn;
          var s = Zt;
          Jn = c, (Zt = n) && !s ? Ti(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : $n(l, u), Jn = r, Zt = s;
        }
        break;
      case 30:
        break;
      default:
        $n(l, u);
    }
  }
  function Gy(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Gy(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && yf(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Nt = null, Ml = !1;
  function kn(l, n, u) {
    for (u = u.child; u !== null; )
      $e(l, n, u), u = u.sibling;
  }
  function $e(l, n, u) {
    if (El && typeof El.onCommitFiberUnmount == "function")
      try {
        El.onCommitFiberUnmount($u, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Zt || vn(u, n), kn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Zt || vn(u, n);
        var c = Nt, r = Ml;
        Mi(u.type) && (Nt = u.stateNode, Ml = !1), kn(
          l,
          n,
          u
        ), ya(u.stateNode), Nt = c, Ml = r;
        break;
      case 5:
        Zt || vn(u, n);
      case 6:
        if (c = Nt, r = Ml, Nt = null, kn(
          l,
          n,
          u
        ), Nt = c, Ml = r, Nt !== null)
          if (Ml)
            try {
              (Nt.nodeType === 9 ? Nt.body : Nt.nodeName === "HTML" ? Nt.ownerDocument.body : Nt).removeChild(u.stateNode);
            } catch (s) {
              vt(
                u,
                n,
                s
              );
            }
          else
            try {
              Nt.removeChild(u.stateNode);
            } catch (s) {
              vt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        Nt !== null && (Ml ? (l = Nt, xd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), au(l)) : xd(Nt, u.stateNode));
        break;
      case 4:
        c = Nt, r = Ml, Nt = u.stateNode.containerInfo, Ml = !0, kn(
          l,
          n,
          u
        ), Nt = c, Ml = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Zt || Si(2, u, n), Zt || Si(4, u, n), kn(
          l,
          n,
          u
        );
        break;
      case 1:
        Zt || (vn(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && Yy(
          u,
          n,
          c
        )), kn(
          l,
          n,
          u
        );
        break;
      case 21:
        kn(
          l,
          n,
          u
        );
        break;
      case 22:
        Zt = (c = Zt) || u.memoizedState !== null, kn(
          l,
          n,
          u
        ), Zt = c;
        break;
      default:
        kn(
          l,
          n,
          u
        );
    }
  }
  function pd(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        au(l);
      } catch (u) {
        vt(n, n.return, u);
      }
  }
  function Ly(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new md()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new md()), n;
      default:
        throw Error(_(435, l.tag));
    }
  }
  function vd(l, n) {
    var u = Ly(l);
    n.forEach(function(c) {
      var r = Tg.bind(null, l, c);
      u.has(c) || (u.add(c), c.then(r, r));
    });
  }
  function kl(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, y = n, p = y;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Mi(p.type)) {
                Nt = p.stateNode, Ml = !1;
                break e;
              }
              break;
            case 5:
              Nt = p.stateNode, Ml = !1;
              break e;
            case 3:
            case 4:
              Nt = p.stateNode.containerInfo, Ml = !0;
              break e;
          }
          p = p.return;
        }
        if (Nt === null) throw Error(_(160));
        $e(s, y, r), Nt = null, Ml = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        fr(n, l), n = n.sibling;
  }
  var $l = null;
  function fr(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(n, l), gl(l), c & 4 && (Si(3, l, l.return), or(3, l), Si(5, l, l.return));
        break;
      case 1:
        kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), c & 64 && Jn && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = $l;
        if (kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[se] || s[yl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), Oe(s, c, u), s[yl] = l, ul(s), c = s;
                      break e;
                    case "link":
                      var y = ym(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (y) {
                        for (var p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Oe(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (y = ym(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (p = 0; p < y.length; p++)
                          if (s = y[p], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(p, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), Oe(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(_(468, c));
                  }
                  s[yl] = l, ul(s), c = s;
                }
                l.stateNode = c;
              } else
                mm(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = pv(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? mm(
              r,
              l.type,
              l.stateNode
            ) : pv(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && qy(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), u !== null && c & 4 && qy(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (kl(n, l), gl(l), c & 512 && (Zt || u === null || vn(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Fc(r, "");
          } catch (Y) {
            vt(l, l.return, Y);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, qy(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && (yd = !0);
        break;
      case 6:
        if (kl(n, l), gl(l), c & 4) {
          if (l.stateNode === null)
            throw Error(_(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (Y) {
            vt(l, l.return, Y);
          }
        }
        break;
      case 3:
        if (Hi = null, r = $l, $l = Nd(n.containerInfo), kl(n, l), $l = r, gl(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            au(n.containerInfo);
          } catch (Y) {
            vt(l, l.return, Y);
          }
        yd && (yd = !1, Vy(l));
        break;
      case 4:
        c = $l, $l = Nd(
          l.stateNode.containerInfo
        ), kl(n, l), gl(l), $l = c;
        break;
      case 12:
        kl(n, l), gl(l);
        break;
      case 13:
        kl(n, l), gl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Wy = hl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, vd(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var S = u !== null && u.memoizedState !== null, C = Jn, X = Zt;
        if (Jn = C || r, Zt = X || S, kl(n, l), Zt = X, Jn = C, gl(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || S || Jn || Zt || Bt(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                S = u = n;
                try {
                  if (s = S.stateNode, r)
                    y = s.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    p = S.stateNode;
                    var K = S.memoizedProps.style, x = K != null && K.hasOwnProperty("display") ? K.display : null;
                    p.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (Y) {
                  vt(S, S.return, Y);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                S = n;
                try {
                  S.stateNode.nodeValue = r ? "" : S.memoizedProps;
                } catch (Y) {
                  vt(S, S.return, Y);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, vd(l, u))));
        break;
      case 19:
        kl(n, l), gl(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, vd(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(n, l), gl(l);
    }
  }
  function gl(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Pp(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(_(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = Ka(l);
            dd(l, s, r);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Fc(y, ""), u.flags &= -33);
            var p = Ka(l);
            dd(l, p, y);
            break;
          case 3:
          case 4:
            var S = u.stateNode.containerInfo, C = Ka(l);
            Sc(
              l,
              C,
              S
            );
            break;
          default:
            throw Error(_(161));
        }
      } catch (X) {
        vt(l, l.return, X);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Vy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Vy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function $n(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        jy(l, n.alternate, n), n = n.sibling;
  }
  function Bt(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Si(4, n, n.return), Bt(n);
          break;
        case 1:
          vn(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && Yy(
            n,
            n.return,
            u
          ), Bt(n);
          break;
        case 27:
          ya(n.stateNode);
        case 26:
        case 5:
          vn(n, n.return), Bt(n);
          break;
        case 22:
          n.memoizedState === null && Bt(n);
          break;
        case 30:
          Bt(n);
          break;
        default:
          Bt(n);
      }
      l = l.sibling;
    }
  }
  function Ti(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, y = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Ti(
            r,
            s,
            u
          ), or(4, s);
          break;
        case 1:
          if (Ti(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (C) {
              vt(c, c.return, C);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var p = c.stateNode;
            try {
              var S = r.shared.hiddenCallbacks;
              if (S !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < S.length; r++)
                  xs(S[r], p);
            } catch (C) {
              vt(c, c.return, C);
            }
          }
          u && y & 64 && sd(s), Do(s, s.return);
          break;
        case 27:
          hd(s);
        case 26:
        case 5:
          Ti(
            r,
            s,
            u
          ), u && c === null && y & 4 && zo(s), Do(s, s.return);
          break;
        case 12:
          Ti(
            r,
            s,
            u
          );
          break;
        case 13:
          Ti(
            r,
            s,
            u
          ), u && y & 4 && pd(r, s);
          break;
        case 22:
          s.memoizedState === null && Ti(
            r,
            s,
            u
          ), Do(s, s.return);
          break;
        case 30:
          break;
        default:
          Ti(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ja(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Yn(u));
  }
  function gd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l));
  }
  function Ul(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Xy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Xy(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && or(9, n);
        break;
      case 1:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Yn(l)));
        break;
      case 12:
        if (r & 2048) {
          Ul(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, y = s.id, p = s.onPostCommit;
            typeof p == "function" && p(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (S) {
            vt(n, n.return, S);
          }
        } else
          Ul(
            l,
            n,
            u,
            c
          );
        break;
      case 13:
        Ul(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, y = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : ft(l, n) : s._visibility & 2 ? Ul(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Hu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0
        )), r & 2048 && Ja(y, n);
        break;
      case 24:
        Ul(
          l,
          n,
          u,
          c
        ), r & 2048 && gd(n.alternate, n);
        break;
      default:
        Ul(
          l,
          n,
          u,
          c
        );
    }
  }
  function Hu(l, n, u, c, r) {
    for (r = r && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var s = l, y = n, p = u, S = c, C = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), or(8, y);
          break;
        case 23:
          break;
        case 22:
          var X = y.stateNode;
          y.memoizedState !== null ? X._visibility & 2 ? Hu(
            s,
            y,
            p,
            S,
            r
          ) : ft(
            s,
            y
          ) : (X._visibility |= 2, Hu(
            s,
            y,
            p,
            S,
            r
          )), r && C & 2048 && Ja(
            y.alternate,
            y
          );
          break;
        case 24:
          Hu(
            s,
            y,
            p,
            S,
            r
          ), r && C & 2048 && gd(y.alternate, y);
          break;
        default:
          Hu(
            s,
            y,
            p,
            S,
            r
          );
      }
      n = n.sibling;
    }
  }
  function ft(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            ft(u, c), r & 2048 && Ja(
              c.alternate,
              c
            );
            break;
          case 24:
            ft(u, c), r & 2048 && gd(c.alternate, c);
            break;
          default:
            ft(u, c);
        }
        n = n.sibling;
      }
  }
  var Tc = 8192;
  function Kt(l) {
    if (l.subtreeFlags & Tc)
      for (l = l.child; l !== null; )
        ev(l), l = l.sibling;
  }
  function ev(l) {
    switch (l.tag) {
      case 26:
        Kt(l), l.flags & Tc && l.memoizedState !== null && bv(
          $l,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Kt(l);
        break;
      case 3:
      case 4:
        var n = $l;
        $l = Nd(l.stateNode.containerInfo), Kt(l), $l = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = Tc, Tc = 16777216, Kt(l), Tc = n) : Kt(l));
        break;
      default:
        Kt(l);
    }
  }
  function Qy(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function Ec(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          fl = c, Ky(
            c,
            l
          );
        }
      Qy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Zy(l), l = l.sibling;
  }
  function Zy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ec(l), l.flags & 2048 && Si(9, l, l.return);
        break;
      case 3:
        Ec(l);
        break;
      case 12:
        Ec(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Wl(l)) : Ec(l);
        break;
      default:
        Ec(l);
    }
  }
  function Wl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          fl = c, Ky(
            c,
            l
          );
        }
      Qy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, n, n.return), Wl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Wl(n));
          break;
        default:
          Wl(n);
      }
      l = l.sibling;
    }
  }
  function Ky(l, n) {
    for (; fl !== null; ) {
      var u = fl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Si(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Yn(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, fl = c;
      else
        e: for (u = l; fl !== null; ) {
          c = fl;
          var r = c.sibling, s = c.return;
          if (Gy(c), c === u) {
            fl = null;
            break e;
          }
          if (r !== null) {
            r.return = s, fl = r;
            break e;
          }
          fl = s;
        }
    }
  }
  var Jy = {
    getCacheForType: function(l) {
      var n = ml(il), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, tv = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, Ot = null, Fe = null, Ie = 0, pt = 0, sa = null, Wn = !1, Mo = !1, ky = !1, xu = 0, Jt = 0, Nu = 0, Rc = 0, Fn = 0, ka = 0, Uo = 0, Co = null, da = null, $y = !1, Wy = 0, bd = 1 / 0, _o = null, Ei = null, Cl = 0, In = null, Ho = null, _l = 0, Sd = 0, Td = null, Fy = null, xo = 0, Iy = null;
  function Da() {
    if ((mt & 2) !== 0 && Ie !== 0)
      return Ie & -Ie;
    if (O.T !== null) {
      var l = Xa;
      return l !== 0 ? l : zc();
    }
    return Pr();
  }
  function Py() {
    ka === 0 && (ka = (Ie & 536870912) === 0 || it ? ee() : 536870912);
    var l = Oa.current;
    return l !== null && (l.flags |= 32), ka;
  }
  function za(l, n, u) {
    (l === Ot && (pt === 2 || pt === 9) || l.cancelPendingCommit !== null) && (Pn(l, 0), Bu(
      l,
      Ie,
      ka,
      !1
    )), Ue(l, u), ((mt & 2) === 0 || l !== Ot) && (l === Ot && ((mt & 2) === 0 && (Rc |= u), Jt === 4 && Bu(
      l,
      Ie,
      ka,
      !1
    )), ha(l));
  }
  function No(l, n, u) {
    if ((mt & 6) !== 0) throw Error(_(327));
    var c = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || m(l, n), r = c ? tm(l, n) : Ed(l, n, !0), s = c;
    do {
      if (r === 0) {
        Mo && !c && Bu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !lv(u)) {
          r = Ed(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var p = l;
              r = Co;
              var S = p.current.memoizedState.isDehydrated;
              if (S && (Pn(p, y).flags |= 256), y = Ed(
                p,
                y,
                !1
              ), y !== 2) {
                if (ky && !S) {
                  p.errorRecoveryDisabledLanes |= s, Rc |= s, r = 4;
                  break e;
                }
                s = da, da = r, s !== null && (da === null ? da = s : da.push.apply(
                  da,
                  s
                ));
              }
              r = y;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          Pn(l, 0), Bu(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(_(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Bu(
                c,
                n,
                ka,
                !Wn
              );
              break e;
            case 2:
              da = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(_(329));
          }
          if ((n & 62914560) === n && (r = Wy + 300 - hl(), 10 < r)) {
            if (Bu(
              c,
              n,
              ka,
              !Wn
            ), ln(c, 0, !0) !== 0) break e;
            c.timeoutHandle = Hd(
              rr.bind(
                null,
                c,
                u,
                da,
                _o,
                $y,
                n,
                ka,
                Rc,
                Uo,
                Wn,
                s,
                2,
                -0,
                0
              ),
              r
            );
            break e;
          }
          rr(
            c,
            u,
            da,
            _o,
            $y,
            n,
            ka,
            Rc,
            Uo,
            Wn,
            s,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ha(l);
  }
  function rr(l, n, u, c, r, s, y, p, S, C, X, K, x, Y) {
    if (l.timeoutHandle = -1, K = n.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ko = { stylesheets: null, count: 0, unsuspend: gv }, ev(n), K = vm(), K !== null)) {
      l.cancelPendingCommit = K(
        uv.bind(
          null,
          l,
          n,
          s,
          u,
          c,
          r,
          y,
          p,
          S,
          X,
          1,
          x,
          Y
        )
      ), Bu(l, s, y, !C);
      return;
    }
    uv(
      l,
      n,
      s,
      u,
      c,
      r,
      y,
      p,
      S
    );
  }
  function lv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!zl(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Bu(l, n, u, c) {
    n &= ~Fn, n &= ~Rc, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Rl(r), y = 1 << s;
      c[s] = -1, r &= ~y;
    }
    u !== 0 && tt(l, u, n);
  }
  function Ac() {
    return (mt & 6) === 0 ? (yr(0), !1) : !0;
  }
  function Ri() {
    if (Fe !== null) {
      if (pt === 0)
        var l = Fe.return;
      else
        l = Fe, hn = Ou = null, qs(l), yc = null, To = 0, l = Fe;
      for (; l !== null; )
        By(l.alternate, l), l = l.return;
      Fe = null;
    }
  }
  function Pn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Og(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ri(), Ot = l, Fe = u = sn(l.current, null), Ie = n, pt = 0, sa = null, Wn = !1, Mo = m(l, n), ky = !1, Uo = ka = Fn = Rc = Nu = Jt = 0, da = Co = null, $y = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Rl(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return xu = n, rn(), u;
  }
  function em(l, n) {
    Be = null, O.H = Is, n === hi || n === Gf ? (n = ny(), pt = 3) : n === Ms ? (n = ny(), pt = 4) : pt = n === Qt ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, sa = n, Fe === null && (Jt = 1, nr(
      l,
      Ea(n, l.current)
    ));
  }
  function av() {
    var l = O.H;
    return O.H = Is, l === null ? Is : l;
  }
  function Oc() {
    var l = O.A;
    return O.A = Jy, l;
  }
  function Dc() {
    Jt = 4, Wn || (Ie & 4194048) !== Ie && Oa.current !== null || (Mo = !0), (Nu & 134217727) === 0 && (Rc & 134217727) === 0 || Ot === null || Bu(
      Ot,
      Ie,
      ka,
      !1
    );
  }
  function Ed(l, n, u) {
    var c = mt;
    mt |= 2;
    var r = av(), s = Oc();
    (Ot !== l || Ie !== n) && (_o = null, Pn(l, n)), n = !1;
    var y = Jt;
    e: do
      try {
        if (pt !== 0 && Fe !== null) {
          var p = Fe, S = sa;
          switch (pt) {
            case 8:
              Ri(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Oa.current === null && (n = !0);
              var C = pt;
              if (pt = 0, sa = null, Bo(l, p, S, C), u && Mo) {
                y = 0;
                break e;
              }
              break;
            default:
              C = pt, pt = 0, sa = null, Bo(l, p, S, C);
          }
        }
        Rd(), y = Jt;
        break;
      } catch (X) {
        em(l, X);
      }
    while (!0);
    return n && l.shellSuspendCounter++, hn = Ou = null, mt = c, O.H = r, O.A = s, Fe === null && (Ot = null, Ie = 0, rn()), y;
  }
  function Rd() {
    for (; Fe !== null; ) am(Fe);
  }
  function tm(l, n) {
    var u = mt;
    mt |= 2;
    var c = av(), r = Oc();
    Ot !== l || Ie !== n ? (_o = null, bd = hl() + 500, Pn(l, n)) : Mo = m(
      l,
      n
    );
    e: do
      try {
        if (pt !== 0 && Fe !== null) {
          n = Fe;
          var s = sa;
          t: switch (pt) {
            case 1:
              pt = 0, sa = null, Bo(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (Cs(s)) {
                pt = 0, sa = null, nm(n);
                break;
              }
              n = function() {
                pt !== 2 && pt !== 9 || Ot !== l || (pt = 7), ha(l);
              }, s.then(n, n);
              break e;
            case 3:
              pt = 7;
              break e;
            case 4:
              pt = 5;
              break e;
            case 7:
              Cs(s) ? (pt = 0, sa = null, nm(n)) : (pt = 0, sa = null, Bo(l, n, s, 7));
              break;
            case 5:
              var y = null;
              switch (Fe.tag) {
                case 26:
                  y = Fe.memoizedState;
                case 5:
                case 27:
                  var p = Fe;
                  if (!y || pm(y)) {
                    pt = 0, sa = null;
                    var S = p.sibling;
                    if (S !== null) Fe = S;
                    else {
                      var C = p.return;
                      C !== null ? (Fe = C, sr(C)) : Fe = null;
                    }
                    break t;
                  }
              }
              pt = 0, sa = null, Bo(l, n, s, 5);
              break;
            case 6:
              pt = 0, sa = null, Bo(l, n, s, 6);
              break;
            case 8:
              Ri(), Jt = 6;
              break e;
            default:
              throw Error(_(462));
          }
        }
        lm();
        break;
      } catch (X) {
        em(l, X);
      }
    while (!0);
    return hn = Ou = null, O.H = c, O.A = r, mt = u, Fe !== null ? 0 : (Ot = null, Ie = 0, rn(), Jt);
  }
  function lm() {
    for (; Fe !== null && !sf(); )
      am(Fe);
  }
  function am(l) {
    var n = Ip(l.alternate, l, xu);
    l.memoizedProps = l.pendingProps, n === null ? sr(l) : Fe = n;
  }
  function nm(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Cy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ie
        );
        break;
      case 11:
        n = Cy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ie
        );
        break;
      case 5:
        qs(n);
      default:
        By(u, n), n = Fe = Qe(n, xu), n = Ip(u, n, xu);
    }
    l.memoizedProps = l.pendingProps, n === null ? sr(l) : Fe = n;
  }
  function Bo(l, n, u, c) {
    hn = Ou = null, qs(n), yc = null, To = 0;
    var r = n.return;
    try {
      if ($p(
        l,
        r,
        n,
        u,
        Ie
      )) {
        Jt = 1, nr(
          l,
          Ea(u, l.current)
        ), Fe = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw Fe = r, s;
      Jt = 1, nr(
        l,
        Ea(u, l.current)
      ), Fe = null;
      return;
    }
    n.flags & 32768 ? (it || c === 1 ? l = !0 : Mo || (Ie & 536870912) !== 0 ? l = !1 : (Wn = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Oa.current, c !== null && c.tag === 13 && (c.flags |= 16384))), nv(n, l)) : sr(n);
  }
  function sr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        nv(
          n,
          Wn
        );
        return;
      }
      l = n.return;
      var u = Ny(
        n.alternate,
        n,
        xu
      );
      if (u !== null) {
        Fe = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        Fe = n;
        return;
      }
      Fe = n = l;
    } while (n !== null);
    Jt === 0 && (Jt = 5);
  }
  function nv(l, n) {
    do {
      var u = bg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Fe = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        Fe = l;
        return;
      }
      Fe = l = u;
    } while (l !== null);
    Jt = 6, Fe = null;
  }
  function uv(l, n, u, c, r, s, y, p, S) {
    l.cancelPendingCommit = null;
    do
      Od();
    while (Cl !== 0);
    if ((mt & 6) !== 0) throw Error(_(327));
    if (n !== null) {
      if (n === l.current) throw Error(_(177));
      if (s = n.lanes | n.childLanes, s |= Hn, Ne(
        l,
        u,
        s,
        y,
        p,
        S
      ), l === Ot && (Fe = Ot = null, Ie = 0), Ho = n, In = l, _l = u, Sd = s, Td = r, Fy = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Eg(On, function() {
        return um(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = O.T, O.T = null, r = J.p, J.p = 2, y = mt, mt |= 4;
        try {
          wy(l, n, u);
        } finally {
          mt = y, J.p = r, O.T = c;
        }
      }
      Cl = 1, iv(), dr(), Ad();
    }
  }
  function iv() {
    if (Cl === 1) {
      Cl = 0;
      var l = In, n = Ho, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = O.T, O.T = null;
        var c = J.p;
        J.p = 2;
        var r = mt;
        mt |= 4;
        try {
          fr(n, l);
          var s = Er, y = Jh(l.containerInfo), p = s.focusedElem, S = s.selectionRange;
          if (y !== p && p && p.ownerDocument && Uf(
            p.ownerDocument.documentElement,
            p
          )) {
            if (S !== null && Cf(p)) {
              var C = S.start, X = S.end;
              if (X === void 0 && (X = C), "selectionStart" in p)
                p.selectionStart = C, p.selectionEnd = Math.min(
                  X,
                  p.value.length
                );
              else {
                var K = p.ownerDocument || document, x = K && K.defaultView || window;
                if (x.getSelection) {
                  var Y = x.getSelection(), ge = p.textContent.length, be = Math.min(S.start, ge), rt = S.end === void 0 ? be : Math.min(S.end, ge);
                  !Y.extend && be > rt && (y = rt, rt = be, be = y);
                  var z = Ct(
                    p,
                    be
                  ), A = Ct(
                    p,
                    rt
                  );
                  if (z && A && (Y.rangeCount !== 1 || Y.anchorNode !== z.node || Y.anchorOffset !== z.offset || Y.focusNode !== A.node || Y.focusOffset !== A.offset)) {
                    var U = K.createRange();
                    U.setStart(z.node, z.offset), Y.removeAllRanges(), be > rt ? (Y.addRange(U), Y.extend(A.node, A.offset)) : (U.setEnd(A.node, A.offset), Y.addRange(U));
                  }
                }
              }
            }
            for (K = [], Y = p; Y = Y.parentNode; )
              Y.nodeType === 1 && K.push({
                element: Y,
                left: Y.scrollLeft,
                top: Y.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < K.length; p++) {
              var Z = K[p];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          zr = !!Tr, Er = Tr = null;
        } finally {
          mt = r, J.p = c, O.T = u;
        }
      }
      l.current = n, Cl = 2;
    }
  }
  function dr() {
    if (Cl === 2) {
      Cl = 0;
      var l = In, n = Ho, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = O.T, O.T = null;
        var c = J.p;
        J.p = 2;
        var r = mt;
        mt |= 4;
        try {
          jy(l, n.alternate, n);
        } finally {
          mt = r, J.p = c, O.T = u;
        }
      }
      Cl = 3;
    }
  }
  function Ad() {
    if (Cl === 4 || Cl === 3) {
      Cl = 0, It();
      var l = In, n = Ho, u = _l, c = Fy;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Cl = 5 : (Cl = 0, Ho = In = null, cv(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Ei = null), an(u), n = n.stateNode, El && typeof El.onCommitFiberRoot == "function")
        try {
          El.onCommitFiberRoot(
            $u,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = O.T, r = J.p, J.p = 2, O.T = null;
        try {
          for (var s = l.onRecoverableError, y = 0; y < c.length; y++) {
            var p = c[y];
            s(p.value, {
              componentStack: p.stack
            });
          }
        } finally {
          O.T = n, J.p = r;
        }
      }
      (_l & 3) !== 0 && Od(), ha(l), r = l.pendingLanes, (u & 4194090) !== 0 && (r & 42) !== 0 ? l === Iy ? xo++ : (xo = 0, Iy = l) : xo = 0, yr(0);
    }
  }
  function cv(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Yn(n)));
  }
  function Od(l) {
    return iv(), dr(), Ad(), um();
  }
  function um() {
    if (Cl !== 5) return !1;
    var l = In, n = Sd;
    Sd = 0;
    var u = an(_l), c = O.T, r = J.p;
    try {
      J.p = 32 > u ? 32 : u, O.T = null, u = Td, Td = null;
      var s = In, y = _l;
      if (Cl = 0, Ho = In = null, _l = 0, (mt & 6) !== 0) throw Error(_(331));
      var p = mt;
      if (mt |= 4, Zy(s.current), Xy(
        s,
        s.current,
        y,
        u
      ), mt = p, yr(0, !1), El && typeof El.onPostCommitFiberRoot == "function")
        try {
          El.onPostCommitFiberRoot($u, s);
        } catch {
        }
      return !0;
    } finally {
      J.p = r, O.T = c, cv(l, n);
    }
  }
  function im(l, n, u) {
    n = Ea(u, n), n = My(l.stateNode, n, 2), l = jn(l, n, 2), l !== null && (Ue(l, 2), ha(l));
  }
  function vt(l, n, u) {
    if (l.tag === 3)
      im(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          im(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ei === null || !Ei.has(c))) {
            l = Ea(u, l), u = Uy(2), c = jn(n, u, 2), c !== null && (ra(
              u,
              c,
              n,
              l
            ), Ue(c, 2), ha(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Dd(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new tv();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (ky = !0, r.add(u), l = cm.bind(null, l, n, u), n.then(l, l));
  }
  function cm(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Ot === l && (Ie & u) === u && (Jt === 4 || Jt === 3 && (Ie & 62914560) === Ie && 300 > hl() - Wy ? (mt & 2) === 0 && Pn(l, 0) : Fn |= u, Uo === Ie && (Uo = 0)), ha(l);
  }
  function om(l, n) {
    n === 0 && (n = ae()), l = xn(l, n), l !== null && (Ue(l, n), ha(l));
  }
  function Sg(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), om(l, u);
  }
  function Tg(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(_(314));
    }
    c !== null && c.delete(n), om(l, u);
  }
  function Eg(l, n) {
    return An(l, n);
  }
  var zd = null, Ai = null, hr = !1, Yo = !1, Md = !1, Oi = 0;
  function ha(l) {
    l !== Ai && l.next === null && (Ai === null ? zd = Ai = l : Ai = Ai.next = l), Yo = !0, hr || (hr = !0, rv());
  }
  function yr(l, n) {
    if (!Md && Yo) {
      Md = !0;
      do
        for (var u = !1, c = zd; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var y = c.suspendedLanes, p = c.pingedLanes;
              s = (1 << 31 - Rl(42 | l) + 1) - 1, s &= r & ~(y & ~p), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, pr(c, s));
          } else
            s = Ie, s = ln(
              c,
              c === Ot ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || m(c, s) || (u = !0, pr(c, s));
          c = c.next;
        }
      while (u);
      Md = !1;
    }
  }
  function ov() {
    mr();
  }
  function mr() {
    Yo = hr = !1;
    var l = 0;
    Oi !== 0 && (wu() && (l = Oi), Oi = 0);
    for (var n = hl(), u = null, c = zd; c !== null; ) {
      var r = c.next, s = fm(c, n);
      s === 0 ? (c.next = null, u === null ? zd = r : u.next = r, r === null && (Ai = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (Yo = !0)), c = r;
    }
    yr(l);
  }
  function fm(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var y = 31 - Rl(s), p = 1 << y, S = r[y];
      S === -1 ? ((p & u) === 0 || (p & c) !== 0) && (r[y] = D(p, n)) : S <= n && (l.expiredLanes |= p), s &= ~p;
    }
    if (n = Ot, u = Ie, u = ln(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (pt === 2 || pt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && Zc(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || m(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && Zc(c), an(u)) {
        case 2:
        case 8:
          u = Ve;
          break;
        case 32:
          u = On;
          break;
        case 268435456:
          u = mu;
          break;
        default:
          u = On;
      }
      return c = fv.bind(null, l), u = An(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && Zc(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function fv(l, n) {
    if (Cl !== 0 && Cl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Od() && l.callbackNode !== u)
      return null;
    var c = Ie;
    return c = ln(
      l,
      l === Ot ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (No(l, c, n), fm(l, hl()), l.callbackNode != null && l.callbackNode === u ? fv.bind(null, l) : null);
  }
  function pr(l, n) {
    if (Od()) return null;
    No(l, n, !0);
  }
  function rv() {
    Dg(function() {
      (mt & 6) !== 0 ? An(
        Fr,
        ov
      ) : mr();
    });
  }
  function zc() {
    return Oi === 0 && (Oi = ee()), Oi;
  }
  function Ud(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Tf("" + l);
  }
  function vr(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function sv(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = Ud(
        (r[Zl] || null).action
      ), y = c.submitter;
      y && (n = (n = y[Zl] || null) ? Ud(n.formAction) : y.getAttribute("formAction"), n !== null && (s = n, y = null));
      var p = new ss(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Oi !== 0) {
                  var S = y ? vr(r, y) : new FormData(r);
                  Fs(
                    u,
                    {
                      pending: !0,
                      data: S,
                      method: r.method,
                      action: s
                    },
                    null,
                    S
                  );
                }
              } else
                typeof s == "function" && (p.preventDefault(), S = y ? vr(r, y) : new FormData(r), Fs(
                  u,
                  {
                    pending: !0,
                    data: S,
                    method: r.method,
                    action: s
                  },
                  s,
                  S
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var kt = 0; kt < ao.length; kt++) {
    var gr = ao[kt], Rg = gr.toLowerCase(), Xe = gr[0].toUpperCase() + gr.slice(1);
    wa(
      Rg,
      "on" + Xe
    );
  }
  wa(Np, "onAnimationEnd"), wa(kh, "onAnimationIteration"), wa(Bp, "onAnimationStart"), wa("dblclick", "onDoubleClick"), wa("focusin", "onFocus"), wa("focusout", "onBlur"), wa($h, "onTransitionRun"), wa(Ss, "onTransitionStart"), wa(Yp, "onTransitionCancel"), wa(Wh, "onTransitionEnd"), Fu("onMouseEnter", ["mouseout", "mouseover"]), Fu("onMouseLeave", ["mouseout", "mouseover"]), Fu("onPointerEnter", ["pointerout", "pointerover"]), Fu("onPointerLeave", ["pointerout", "pointerover"]), Wu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Wu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Wu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Wu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Wu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Di = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(br)
  );
  function Mc(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var y = c.length - 1; 0 <= y; y--) {
            var p = c[y], S = p.instance, C = p.currentTarget;
            if (p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (X) {
              lr(X);
            }
            r.currentTarget = null, s = S;
          }
        else
          for (y = 0; y < c.length; y++) {
            if (p = c[y], S = p.instance, C = p.currentTarget, p = p.listener, S !== s && r.isPropagationStopped())
              break e;
            s = p, r.currentTarget = C;
            try {
              s(r);
            } catch (X) {
              lr(X);
            }
            r.currentTarget = null, s = S;
          }
      }
    }
  }
  function Ye(l, n) {
    var u = n[es];
    u === void 0 && (u = n[es] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Cd(n, l, 2, !1), u.add(c));
  }
  function qo(l, n, u) {
    var c = 0;
    n && (c |= 4), Cd(
      u,
      l,
      c,
      n
    );
  }
  var wo = "_reactListening" + Math.random().toString(36).slice(2);
  function rm(l) {
    if (!l[wo]) {
      l[wo] = !0, pf.forEach(function(u) {
        u !== "selectionchange" && (Di.has(u) || qo(u, !1, l), qo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[wo] || (n[wo] = !0, qo("selectionchange", !1, n));
    }
  }
  function Cd(l, n, u, c) {
    switch (Om(n)) {
      case 2:
        var r = Sv;
        break;
      case 8:
        r = Tv;
        break;
      default:
        r = Rm;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !os || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function $a(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var y = c.tag;
        if (y === 3 || y === 4) {
          var p = c.stateNode.containerInfo;
          if (p === r) break;
          if (y === 4)
            for (y = c.return; y !== null; ) {
              var S = y.tag;
              if ((S === 3 || S === 4) && y.stateNode.containerInfo === r)
                return;
              y = y.return;
            }
          for (; p !== null; ) {
            if (y = Ol(p), y === null) return;
            if (S = y.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              c = s = y;
              continue e;
            }
            p = p.parentNode;
          }
        }
        c = c.return;
      }
    eo(function() {
      var C = s, X = cs(u), K = [];
      e: {
        var x = Fh.get(l);
        if (x !== void 0) {
          var Y = ss, ge = l;
          switch (l) {
            case "keypress":
              if (Dl(u) === 0) break e;
            case "keydown":
            case "keyup":
              Y = nn;
              break;
            case "focusin":
              ge = "focus", Y = Hh;
              break;
            case "focusout":
              ge = "blur", Y = Hh;
              break;
            case "beforeblur":
            case "afterblur":
              Y = Hh;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = _h;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = Op;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = Bh;
              break;
            case Np:
            case kh:
            case Bp:
              Y = mg;
              break;
            case Wh:
              Y = Cp;
              break;
            case "scroll":
            case "scrollend":
              Y = Rp;
              break;
            case "wheel":
              Y = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = Af;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = Of;
              break;
            case "toggle":
            case "beforetoggle":
              Y = _p;
          }
          var be = (n & 4) !== 0, rt = !be && (l === "scroll" || l === "scrollend"), z = be ? x !== null ? x + "Capture" : null : x;
          be = [];
          for (var A = C, U; A !== null; ) {
            var Z = A;
            if (U = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || U === null || z === null || (Z = Ji(A, z), Z != null && be.push(
              Yu(A, Z, U)
            )), rt) break;
            A = A.return;
          }
          0 < be.length && (x = new Y(
            x,
            ge,
            null,
            u,
            X
          ), K.push({ event: x, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (x = l === "mouseover" || l === "pointerover", Y = l === "mouseout" || l === "pointerout", x && u !== Ki && (ge = u.relatedTarget || u.fromElement) && (Ol(ge) || ge[$c]))
            break e;
          if ((Y || x) && (x = X.window === X ? X : (x = X.ownerDocument) ? x.defaultView || x.parentWindow : window, Y ? (ge = u.relatedTarget || u.toElement, Y = C, ge = ge ? Ol(ge) : null, ge !== null && (rt = Me(ge), be = ge.tag, ge !== rt || be !== 5 && be !== 27 && be !== 6) && (ge = null)) : (Y = null, ge = C), Y !== ge)) {
            if (be = _h, Z = "onMouseLeave", z = "onMouseEnter", A = "mouse", (l === "pointerout" || l === "pointerover") && (be = Of, Z = "onPointerLeave", z = "onPointerEnter", A = "pointer"), rt = Y == null ? x : mf(Y), U = ge == null ? x : mf(ge), x = new be(
              Z,
              A + "leave",
              Y,
              u,
              X
            ), x.target = rt, x.relatedTarget = U, Z = null, Ol(X) === C && (be = new be(
              z,
              A + "enter",
              ge,
              u,
              X
            ), be.target = U, be.relatedTarget = rt, Z = be), rt = Z, Y && ge)
              t: {
                for (be = Y, z = ge, A = 0, U = be; U; U = zi(U))
                  A++;
                for (U = 0, Z = z; Z; Z = zi(Z))
                  U++;
                for (; 0 < A - U; )
                  be = zi(be), A--;
                for (; 0 < U - A; )
                  z = zi(z), U--;
                for (; A--; ) {
                  if (be === z || z !== null && be === z.alternate)
                    break t;
                  be = zi(be), z = zi(z);
                }
                be = null;
              }
            else be = null;
            Y !== null && Sr(
              K,
              x,
              Y,
              be,
              !1
            ), ge !== null && rt !== null && Sr(
              K,
              rt,
              ge,
              be,
              !0
            );
          }
        }
        e: {
          if (x = C ? mf(C) : window, Y = x.nodeName && x.nodeName.toLowerCase(), Y === "select" || Y === "input" && x.type === "file")
            var fe = Lh;
          else if (ps(x))
            if (Vh)
              fe = Zh;
            else {
              fe = ai;
              var Ze = gs;
            }
          else
            Y = x.nodeName, !Y || Y.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? C && Zi(C.elementType) && (fe = Lh) : fe = Tu;
          if (fe && (fe = fe(l, C))) {
            vs(
              K,
              fe,
              u,
              X
            );
            break e;
          }
          Ze && Ze(l, x, C), l === "focusout" && C && x.type === "number" && C.memoizedProps.value != null && bf(x, "number", x.value);
        }
        switch (Ze = C ? mf(C) : window, l) {
          case "focusin":
            (ps(Ze) || Ze.contentEditable === "true") && (Cn = Ze, on = C, ii = null);
            break;
          case "focusout":
            ii = on = Cn = null;
            break;
          case "mousedown":
            lc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lc = !1, bs(K, u, X);
            break;
          case "selectionchange":
            if (tc) break;
          case "keydown":
          case "keyup":
            bs(K, u, X);
        }
        var pe;
        if (Df)
          e: {
            switch (l) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          li ? Mf(l, u) && (Ee = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Mn && u.locale !== "ko" && (li || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && li && (pe = Uh()) : (bu = X, to = "value" in bu ? bu.value : bu.textContent, li = !0)), Ze = jo(C, Ee), 0 < Ze.length && (Ee = new xh(
          Ee,
          l,
          null,
          u,
          X
        ), K.push({ event: Ee, listeners: Ze }), pe ? Ee.data = pe : (pe = ti(u), pe !== null && (Ee.data = pe)))), (pe = qh ? jh(l, u) : Ii(l, u)) && (Ee = jo(C, "onBeforeInput"), 0 < Ee.length && (Ze = new xh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          X
        ), K.push({
          event: Ze,
          listeners: Ee
        }), Ze.data = pe)), sv(
          K,
          l,
          C,
          u,
          X
        );
      }
      Mc(K, n);
    });
  }
  function Yu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function jo(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Ji(l, u), r != null && c.unshift(
        Yu(l, r, s)
      ), r = Ji(l, n), r != null && c.push(
        Yu(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function zi(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Sr(l, n, u, c, r) {
    for (var s = n._reactName, y = []; u !== null && u !== c; ) {
      var p = u, S = p.alternate, C = p.stateNode;
      if (p = p.tag, S !== null && S === c) break;
      p !== 5 && p !== 26 && p !== 27 || C === null || (S = C, r ? (C = Ji(u, s), C != null && y.unshift(
        Yu(u, C, S)
      )) : r || (C = Ji(u, s), C != null && y.push(
        Yu(u, C, S)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var Ma = /\r\n?/g, sm = /\u0000|\uFFFD/g;
  function dv(l) {
    return (typeof l == "string" ? l : "" + l).replace(Ma, `
`).replace(sm, "");
  }
  function dm(l, n) {
    return n = dv(n), dv(l) === n;
  }
  function _d() {
  }
  function Ce(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Fc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Fc(l, "" + c);
        break;
      case "className":
        vf(l, "class", c);
        break;
      case "tabIndex":
        vf(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        vf(l, u, c);
        break;
      case "style":
        Sf(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          vf(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Tf("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && Ce(l, n, "name", r.name, r, null), Ce(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Ce(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Ce(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Ce(l, n, "encType", r.encType, r, null), Ce(l, n, "method", r.method, r, null), Ce(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Tf("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = _d);
        break;
      case "onScroll":
        c != null && Ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ye("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(_(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Tf("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        Ye("beforetoggle", l), Ye("toggle", l), vu(l, "popover", c);
        break;
      case "xlinkActuate":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        Dn(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        Dn(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        vu(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = dg.get(u) || u, vu(l, u, c));
    }
  }
  function q(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        Sf(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(_(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(_(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Fc(l, c) : (typeof c == "number" || typeof c == "bigint") && Fc(l, "" + c);
        break;
      case "onScroll":
        c != null && Ye("scroll", l);
        break;
      case "onScrollEnd":
        c != null && Ye("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = _d);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Sa.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Zl] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : vu(l, u, c);
          }
    }
  }
  function Oe(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ye("error", l), Ye("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var y = u[s];
            if (y != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_(137, n));
                default:
                  Ce(l, n, s, y, u, null);
              }
          }
        r && Ce(l, n, "srcSet", u.srcSet, u, null), c && Ce(l, n, "src", u.src, u, null);
        return;
      case "input":
        Ye("invalid", l);
        var p = s = y = r = null, S = null, C = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var X = u[c];
            if (X != null)
              switch (c) {
                case "name":
                  r = X;
                  break;
                case "type":
                  y = X;
                  break;
                case "checked":
                  S = X;
                  break;
                case "defaultChecked":
                  C = X;
                  break;
                case "value":
                  s = X;
                  break;
                case "defaultValue":
                  p = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(_(137, n));
                  break;
                default:
                  Ce(l, n, c, X, u, null);
              }
          }
        us(
          l,
          s,
          p,
          S,
          C,
          y,
          r,
          !1
        ), Pu(l);
        return;
      case "select":
        Ye("invalid", l), c = y = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (p = u[r], p != null))
            switch (r) {
              case "value":
                s = p;
                break;
              case "defaultValue":
                y = p;
                break;
              case "multiple":
                c = p;
              default:
                Ce(l, n, r, p, u, null);
            }
        n = s, u = y, l.multiple = !!c, n != null ? Qi(l, !!c, n, !1) : u != null && Qi(l, !!c, u, !0);
        return;
      case "textarea":
        Ye("invalid", l), s = r = c = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (p = u[y], p != null))
            switch (y) {
              case "value":
                c = p;
                break;
              case "defaultValue":
                r = p;
                break;
              case "children":
                s = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(_(91));
                break;
              default:
                Ce(l, n, y, p, u, null);
            }
        zh(l, c, r, s), Pu(l);
        return;
      case "option":
        for (S in u)
          if (u.hasOwnProperty(S) && (c = u[S], c != null))
            switch (S) {
              case "selected":
                l.selected = c && typeof c != "function" && typeof c != "symbol";
                break;
              default:
                Ce(l, n, S, c, u, null);
            }
        return;
      case "dialog":
        Ye("beforetoggle", l), Ye("toggle", l), Ye("cancel", l), Ye("close", l);
        break;
      case "iframe":
      case "object":
        Ye("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < br.length; c++)
          Ye(br[c], l);
        break;
      case "image":
        Ye("error", l), Ye("load", l);
        break;
      case "details":
        Ye("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        Ye("error", l), Ye("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (C in u)
          if (u.hasOwnProperty(C) && (c = u[C], c != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(_(137, n));
              default:
                Ce(l, n, C, c, u, null);
            }
        return;
      default:
        if (Zi(n)) {
          for (X in u)
            u.hasOwnProperty(X) && (c = u[X], c !== void 0 && q(
              l,
              n,
              X,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (p in u)
      u.hasOwnProperty(p) && (c = u[p], c != null && Ce(l, n, p, c, u, null));
  }
  function Ag(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, y = null, p = null, S = null, C = null, X = null;
        for (Y in u) {
          var K = u[Y];
          if (u.hasOwnProperty(Y) && K != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = K;
              default:
                c.hasOwnProperty(Y) || Ce(l, n, Y, null, c, K);
            }
        }
        for (var x in c) {
          var Y = c[x];
          if (K = u[x], c.hasOwnProperty(x) && (Y != null || K != null))
            switch (x) {
              case "type":
                s = Y;
                break;
              case "name":
                r = Y;
                break;
              case "checked":
                C = Y;
                break;
              case "defaultChecked":
                X = Y;
                break;
              case "value":
                y = Y;
                break;
              case "defaultValue":
                p = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null)
                  throw Error(_(137, n));
                break;
              default:
                Y !== K && Ce(
                  l,
                  n,
                  x,
                  Y,
                  c,
                  K
                );
            }
        }
        ns(
          l,
          y,
          p,
          S,
          C,
          X,
          s,
          r
        );
        return;
      case "select":
        Y = y = p = x = null;
        for (s in u)
          if (S = u[s], u.hasOwnProperty(s) && S != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                Y = S;
              default:
                c.hasOwnProperty(s) || Ce(
                  l,
                  n,
                  s,
                  null,
                  c,
                  S
                );
            }
        for (r in c)
          if (s = c[r], S = u[r], c.hasOwnProperty(r) && (s != null || S != null))
            switch (r) {
              case "value":
                x = s;
                break;
              case "defaultValue":
                p = s;
                break;
              case "multiple":
                y = s;
              default:
                s !== S && Ce(
                  l,
                  n,
                  r,
                  s,
                  c,
                  S
                );
            }
        n = p, u = y, c = Y, x != null ? Qi(l, !!u, x, !1) : !!c != !!u && (n != null ? Qi(l, !!u, n, !0) : Qi(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Y = x = null;
        for (p in u)
          if (r = u[p], u.hasOwnProperty(p) && r != null && !c.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ce(l, n, p, null, c, r);
            }
        for (y in c)
          if (r = c[y], s = u[y], c.hasOwnProperty(y) && (r != null || s != null))
            switch (y) {
              case "value":
                x = r;
                break;
              case "defaultValue":
                Y = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(_(91));
                break;
              default:
                r !== s && Ce(l, n, y, r, c, s);
            }
        Dh(l, x, Y);
        return;
      case "option":
        for (var ge in u)
          if (x = u[ge], u.hasOwnProperty(ge) && x != null && !c.hasOwnProperty(ge))
            switch (ge) {
              case "selected":
                l.selected = !1;
                break;
              default:
                Ce(
                  l,
                  n,
                  ge,
                  null,
                  c,
                  x
                );
            }
        for (S in c)
          if (x = c[S], Y = u[S], c.hasOwnProperty(S) && x !== Y && (x != null || Y != null))
            switch (S) {
              case "selected":
                l.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                Ce(
                  l,
                  n,
                  S,
                  x,
                  c,
                  Y
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in u)
          x = u[be], u.hasOwnProperty(be) && x != null && !c.hasOwnProperty(be) && Ce(l, n, be, null, c, x);
        for (C in c)
          if (x = c[C], Y = u[C], c.hasOwnProperty(C) && x !== Y && (x != null || Y != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(_(137, n));
                break;
              default:
                Ce(
                  l,
                  n,
                  C,
                  x,
                  c,
                  Y
                );
            }
        return;
      default:
        if (Zi(n)) {
          for (var rt in u)
            x = u[rt], u.hasOwnProperty(rt) && x !== void 0 && !c.hasOwnProperty(rt) && q(
              l,
              n,
              rt,
              void 0,
              c,
              x
            );
          for (X in c)
            x = c[X], Y = u[X], !c.hasOwnProperty(X) || x === Y || x === void 0 && Y === void 0 || q(
              l,
              n,
              X,
              x,
              c,
              Y
            );
          return;
        }
    }
    for (var z in u)
      x = u[z], u.hasOwnProperty(z) && x != null && !c.hasOwnProperty(z) && Ce(l, n, z, null, c, x);
    for (K in c)
      x = c[K], Y = u[K], !c.hasOwnProperty(K) || x === Y || x == null && Y == null || Ce(l, n, K, x, c, Y);
  }
  var Tr = null, Er = null;
  function Wa(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Go(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function eu(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Lo = null;
  function wu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Lo ? !1 : (Lo = l, !0) : (Lo = null, !1);
  }
  var Hd = typeof setTimeout == "function" ? setTimeout : void 0, Og = typeof clearTimeout == "function" ? clearTimeout : void 0, hv = typeof Promise == "function" ? Promise : void 0, Dg = typeof queueMicrotask == "function" ? queueMicrotask : typeof hv < "u" ? function(l) {
    return hv.resolve(null).then(l).catch(tu);
  } : Hd;
  function tu(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Mi(l) {
    return l === "head";
  }
  function xd(l, n) {
    var u = n, c = 0, r = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$") {
          if (0 < c && 8 > c) {
            u = c;
            var y = l.ownerDocument;
            if (u & 1 && ya(y.documentElement), u & 2 && ya(y.body), u & 4)
              for (u = y.head, ya(u), y = u.firstChild; y; ) {
                var p = y.nextSibling, S = y.nodeName;
                y[se] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = p;
              }
          }
          if (r === 0) {
            l.removeChild(s), au(n);
            return;
          }
          r--;
        } else
          u === "$" || u === "$?" || u === "$!" ? r++ : c = u.charCodeAt(0) - 48;
      else c = 0;
      u = s;
    } while (u);
    au(n);
  }
  function Rr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rr(u), yf(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Vo(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[se])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = gn(l.nextSibling), l === null) break;
    }
    return null;
  }
  function zg(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = gn(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ar(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Mg(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function gn(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var Ui = null;
  function Hl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ie(l, n, u) {
    switch (n = Wa(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(_(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(_(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(_(454));
        return l;
      default:
        throw Error(_(451));
    }
  }
  function ya(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    yf(l);
  }
  var $t = /* @__PURE__ */ new Map(), Ll = /* @__PURE__ */ new Set();
  function Nd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ju = J.d;
  J.d = {
    f: Bd,
    r: Yd,
    D: Gu,
    C: qd,
    L: Ci,
    m: Vl,
    X: _i,
    S: ma,
    M: hm
  };
  function Bd() {
    var l = ju.f(), n = Ac();
    return l || n;
  }
  function Yd(l) {
    var n = Gi(l);
    n !== null && n.tag === 5 && n.type === "form" ? So(n) : ju.r(l);
  }
  var xl = typeof document > "u" ? null : document;
  function bn(l, n, u) {
    var c = xl;
    if (c && typeof n == "string" && n) {
      var r = Ya(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Ll.has(r) || (Ll.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), Oe(n, "link", l), ul(n), c.head.appendChild(n)));
    }
  }
  function Gu(l) {
    ju.D(l), bn("dns-prefetch", l, null);
  }
  function qd(l, n) {
    ju.C(l, n), bn("preconnect", l, n);
  }
  function Ci(l, n, u) {
    ju.L(l, n, u);
    var c = xl;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + Ya(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + Ya(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + Ya(
        u.imageSizes
      ) + '"]')) : r += '[href="' + Ya(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Xo(l);
          break;
        case "script":
          s = Fa(l);
      }
      $t.has(s) || (l = oe(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), $t.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Qo(s)) || n === "script" && c.querySelector(Uc(s)) || (n = c.createElement("link"), Oe(n, "link", l), ul(n), c.head.appendChild(n)));
    }
  }
  function Vl(l, n) {
    ju.m(l, n);
    var u = xl;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + Ya(c) + '"][href="' + Ya(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Fa(l);
      }
      if (!$t.has(s) && (l = oe({ rel: "modulepreload", href: l }, n), $t.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Uc(s)))
              return;
        }
        c = u.createElement("link"), Oe(c, "link", l), ul(c), u.head.appendChild(c);
      }
    }
  }
  function ma(l, n, u) {
    ju.S(l, n, u);
    var c = xl;
    if (c && l) {
      var r = pu(c).hoistableStyles, s = Xo(l);
      n = n || "default";
      var y = r.get(s);
      if (!y) {
        var p = { loading: 0, preload: null };
        if (y = c.querySelector(
          Qo(s)
        ))
          p.loading = 5;
        else {
          l = oe(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = $t.get(s)) && jd(l, u);
          var S = y = c.createElement("link");
          ul(S), Oe(S, "link", l), S._p = new Promise(function(C, X) {
            S.onload = C, S.onerror = X;
          }), S.addEventListener("load", function() {
            p.loading |= 1;
          }), S.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, wd(y, n, c);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: p
        }, r.set(s, y);
      }
    }
  }
  function _i(l, n) {
    ju.X(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = oe({ src: l, async: !0 }, n), (n = $t.get(r)) && Gd(l, n), s = u.createElement("script"), ul(s), Oe(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function hm(l, n) {
    ju.M(l, n);
    var u = xl;
    if (u && l) {
      var c = pu(u).hoistableScripts, r = Fa(l), s = c.get(r);
      s || (s = u.querySelector(Uc(r)), s || (l = oe({ src: l, async: !0, type: "module" }, n), (n = $t.get(r)) && Gd(l, n), s = u.createElement("script"), ul(s), Oe(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function yv(l, n, u, c) {
    var r = (r = ue.current) ? Nd(r) : null;
    if (!r) throw Error(_(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Xo(u.href), u = pu(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Xo(u.href);
          var s = pu(
            r
          ).hoistableStyles, y = s.get(l);
          if (y || (r = r.ownerDocument || r, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, y), (s = r.querySelector(
            Qo(l)
          )) && !s._p && (y.instance = s, y.state.loading = 5), $t.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, $t.set(l, u), s || mv(
            r,
            l,
            u,
            y.state
          ))), n && c === null)
            throw Error(_(528, ""));
          return y;
        }
        if (n && c !== null)
          throw Error(_(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Fa(u), u = pu(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(_(444, l));
    }
  }
  function Xo(l) {
    return 'href="' + Ya(l) + '"';
  }
  function Qo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Zo(l) {
    return oe({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function mv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), Oe(n, "link", u), ul(n), l.head.appendChild(n));
  }
  function Fa(l) {
    return '[src="' + Ya(l) + '"]';
  }
  function Uc(l) {
    return "script[async]" + l;
  }
  function pv(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + Ya(u.href) + '"]'
          );
          if (c)
            return n.instance = c, ul(c), c;
          var r = oe({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), ul(c), Oe(c, "style", r), wd(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Xo(u.href);
          var s = l.querySelector(
            Qo(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, ul(s), s;
          c = Zo(u), (r = $t.get(r)) && jd(c, r), s = (l.ownerDocument || l).createElement("link"), ul(s);
          var y = s;
          return y._p = new Promise(function(p, S) {
            y.onload = p, y.onerror = S;
          }), Oe(s, "link", c), n.state.loading |= 4, wd(s, u.precedence, l), n.instance = s;
        case "script":
          return s = Fa(u.src), (r = l.querySelector(
            Uc(s)
          )) ? (n.instance = r, ul(r), r) : (c = u, (r = $t.get(s)) && (c = oe({}, u), Gd(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), ul(r), Oe(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(_(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, wd(c, u.precedence, l));
    return n.instance;
  }
  function wd(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, y = 0; y < c.length; y++) {
      var p = c[y];
      if (p.dataset.precedence === n) s = p;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function jd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Gd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Hi = null;
  function ym(l, n, u) {
    if (Hi === null) {
      var c = /* @__PURE__ */ new Map(), r = Hi = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = Hi, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[se] || s[yl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = s.getAttribute(n) || "";
        y = l + y;
        var p = c.get(y);
        p ? p.push(s) : c.set(y, [s]);
      }
    }
    return c;
  }
  function mm(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function vv(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function pm(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Ko = null;
  function gv() {
  }
  function bv(l, n, u) {
    if (Ko === null) throw Error(_(475));
    var c = Ko;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = Xo(u.href), s = l.querySelector(
          Qo(r)
        );
        if (s) {
          l = s._p, l !== null && typeof l == "object" && typeof l.then == "function" && (c.count++, c = Or.bind(c), l.then(c, c)), n.state.loading |= 4, n.instance = s, ul(s);
          return;
        }
        s = l.ownerDocument || l, u = Zo(u), (r = $t.get(r)) && jd(u, r), s = s.createElement("link"), ul(s);
        var y = s;
        y._p = new Promise(function(p, S) {
          y.onload = p, y.onerror = S;
        }), Oe(s, "link", u), n.instance = s;
      }
      c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (c.count++, n = Or.bind(c), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function vm() {
    if (Ko === null) throw Error(_(475));
    var l = Ko;
    return l.stylesheets && l.count === 0 && Dr(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && Dr(l, l.stylesheets), l.unsuspend) {
          var c = l.unsuspend;
          l.unsuspend = null, c();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Or() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Dr(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Jo = null;
  function Dr(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Jo = /* @__PURE__ */ new Map(), n.forEach(Ua, l), Jo = null, Or.call(l));
  }
  function Ua(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Jo.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Jo.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var y = r[s];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), c = y);
        }
        c && u.set(null, c);
      }
      r = n.instance, y = r.getAttribute("data-precedence"), s = u.get(y) || c, s === c && u.set(null, r), u.set(y, r), this.count++, c = Or.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var pa = {
    $$typeof: ct,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function Ug(l, n, u, c, r, s, y, p) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ye(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ye(0), this.hiddenUpdates = ye(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function gm(l, n, u, c, r, s, y, p, S, C, X, K) {
    return l = new Ug(
      l,
      n,
      u,
      y,
      p,
      S,
      C,
      K
    ), n = 1, s === !0 && (n |= 24), s = ua(3, null, null, n), l.current = s, s.stateNode = l, n = mo(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, _s(s), l;
  }
  function bm(l) {
    return l ? (l = io, l) : io;
  }
  function Sm(l, n, u, c, r, s) {
    r = bm(r), c.context === null ? c.context = r : c.pendingContext = r, c = ca(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = jn(l, c, n), u !== null && (za(u, l, n), oc(u, l, n));
  }
  function Tm(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Ld(l, n) {
    Tm(l, n), (l = l.alternate) && Tm(l, n);
  }
  function Em(l) {
    if (l.tag === 13) {
      var n = xn(l, 67108864);
      n !== null && za(n, l, 67108864), Ld(l, 67108864);
    }
  }
  var zr = !0;
  function Sv(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = J.p;
    try {
      J.p = 2, Rm(l, n, u, c);
    } finally {
      J.p = s, O.T = r;
    }
  }
  function Tv(l, n, u, c) {
    var r = O.T;
    O.T = null;
    var s = J.p;
    try {
      J.p = 8, Rm(l, n, u, c);
    } finally {
      J.p = s, O.T = r;
    }
  }
  function Rm(l, n, u, c) {
    if (zr) {
      var r = Vd(c);
      if (r === null)
        $a(
          l,
          n,
          c,
          Xd,
          u
        ), Cc(l, c);
      else if (Rv(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Cc(l, c), n & 4 && -1 < Ev.indexOf(l)) {
        for (; r !== null; ) {
          var s = Gi(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var y = Al(s.pendingLanes);
                  if (y !== 0) {
                    var p = s;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; y; ) {
                      var S = 1 << 31 - Rl(y);
                      p.entanglements[1] |= S, y &= ~S;
                    }
                    ha(s), (mt & 6) === 0 && (bd = hl() + 500, yr(0));
                  }
                }
                break;
              case 13:
                p = xn(s, 2), p !== null && za(p, s, 2), Ac(), Ld(s, 2);
            }
          if (s = Vd(c), s === null && $a(
            l,
            n,
            c,
            Xd,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        $a(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Vd(l) {
    return l = cs(l), Am(l);
  }
  var Xd = null;
  function Am(l) {
    if (Xd = null, l = Ol(l), l !== null) {
      var n = Me(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = dt(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Xd = l, null;
  }
  function Om(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ku()) {
          case Fr:
            return 2;
          case Ve:
            return 8;
          case On:
          case Kc:
            return 32;
          case mu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ko = !1, lu = null, Lu = null, Vu = null, Mr = /* @__PURE__ */ new Map(), Ur = /* @__PURE__ */ new Map(), xi = [], Ev = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Cc(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        lu = null;
        break;
      case "dragenter":
      case "dragleave":
        Lu = null;
        break;
      case "mouseover":
      case "mouseout":
        Vu = null;
        break;
      case "pointerover":
      case "pointerout":
        Mr.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ur.delete(n.pointerId);
    }
  }
  function _c(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = Gi(n), n !== null && Em(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Rv(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return lu = _c(
          lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Lu = _c(
          Lu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Vu = _c(
          Vu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return Mr.set(
          s,
          _c(
            Mr.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, Ur.set(
          s,
          _c(
            Ur.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Dm(l) {
    var n = Ol(l.target);
    if (n !== null) {
      var u = Me(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = dt(u), n !== null) {
            l.blockedOn = n, Th(l.priority, function() {
              if (u.tag === 13) {
                var c = Da();
                c = Pt(c);
                var r = xn(u, c);
                r !== null && za(r, u, c), Ld(u, c);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Vd(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        Ki = c, u.target.dispatchEvent(c), Ki = null;
      } else
        return n = Gi(u), n !== null && Em(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function _r(l, n, u) {
    Cr(l) && u.delete(n);
  }
  function $o() {
    ko = !1, lu !== null && Cr(lu) && (lu = null), Lu !== null && Cr(Lu) && (Lu = null), Vu !== null && Cr(Vu) && (Vu = null), Mr.forEach(_r), Ur.forEach(_r);
  }
  function Qd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, ko || (ko = !0, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      $o
    )));
  }
  var Hc = null;
  function zm(l) {
    Hc !== l && (Hc = l, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      function() {
        Hc === l && (Hc = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Am(c || u) === null)
              continue;
            break;
          }
          var s = Gi(u);
          s !== null && (l.splice(n, 3), n -= 3, Fs(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function au(l) {
    function n(S) {
      return Qd(S, l);
    }
    lu !== null && Qd(lu, l), Lu !== null && Qd(Lu, l), Vu !== null && Qd(Vu, l), Mr.forEach(n), Ur.forEach(n);
    for (var u = 0; u < xi.length; u++) {
      var c = xi[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < xi.length && (u = xi[0], u.blockedOn === null); )
      Dm(u), u.blockedOn === null && xi.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], y = r[Zl] || null;
        if (typeof s == "function")
          y || zm(u);
        else if (y) {
          var p = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, y = s[Zl] || null)
              p = y.formAction;
            else if (Am(r) !== null) continue;
          } else p = y.action;
          typeof p == "function" ? u[c + 1] = p : (u.splice(c, 3), c -= 3), zm(u);
        }
      }
  }
  function Mm(l) {
    this._internalRoot = l;
  }
  Zd.prototype.render = Mm.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(_(409));
    var u = n.current, c = Da();
    Sm(u, c, l, n, null, null);
  }, Zd.prototype.unmount = Mm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Sm(l.current, 2, null, l, null, null), Ac(), n[$c] = null;
    }
  };
  function Zd(l) {
    this._internalRoot = l;
  }
  Zd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Pr();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < xi.length && n !== 0 && n < xi[u].priority; u++) ;
      xi.splice(u, 0, l), u === 0 && Dm(l);
    }
  };
  var Um = te.version;
  if (Um !== "19.1.0")
    throw Error(
      _(
        527,
        Um,
        "19.1.0"
      )
    );
  J.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(_(188)) : (l = Object.keys(l).join(","), Error(_(268, l)));
    return l = G(n), l = l !== null ? k(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Fl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hr.isDisabled && Hr.supportsFiber)
      try {
        $u = Hr.inject(
          Fl
        ), El = Hr;
      } catch {
      }
  }
  return dp.createRoot = function(l, n) {
    if (!Ae(l)) throw Error(_(299));
    var u = !1, c = "", r = Ro, s = Dy, y = ar, p = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (p = n.unstable_transitionCallbacks)), n = gm(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      r,
      s,
      y,
      p,
      null
    ), l[$c] = n.current, rm(l), new Mm(n);
  }, dp.hydrateRoot = function(l, n, u) {
    if (!Ae(l)) throw Error(_(299));
    var c = !1, r = "", s = Ro, y = Dy, p = ar, S = null, C = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (p = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (S = u.unstable_transitionCallbacks), u.formState !== void 0 && (C = u.formState)), n = gm(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      s,
      y,
      p,
      S,
      C
    ), n.context = bm(null), u = n.current, c = Da(), c = Pt(c), r = ca(c), r.callback = null, jn(u, r, c), u = c, n.current.lanes = u, Ue(n, u), ha(n), l[$c] = n.current, rm(l), new Zd(n);
  }, dp.version = "19.1.0", dp;
}
var hp = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lb;
function fT() {
  return Lb || (Lb = 1, process.env.NODE_ENV !== "production" && function() {
    function W(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function te(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Ce(e) ? e.slice() : Xe({}, e);
      return f[o] = te(e[o], t, a + 1, i), f;
    }
    function Le(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return _(e, t, a, 0);
      }
    }
    function _(e, t, a, i) {
      var o = t[i], f = Ce(e) ? e.slice() : Xe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Ce(f) ? f.splice(o, 1) : delete f[o]) : f[o] = _(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ae(e, t, a) {
      var i = t[a], o = Ce(e) ? e.slice() : Xe({}, e);
      return a + 1 === t.length ? (Ce(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ae(e[i], t, a + 1), o);
    }
    function Me() {
      return !1;
    }
    function dt() {
      return null;
    }
    function bt() {
    }
    function G() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function k() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function oe() {
    }
    function $(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function M(e, t, a, i) {
      return new zf(e, t, a, i);
    }
    function ce(e, t) {
      e.context === Wo && (vt(e.current, 2, t, e, null, null), gc());
    }
    function je(e, t) {
      if (uu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, Ao(), Df(
          e.current,
          t,
          a
        ), gc();
      }
    }
    function Ut(e) {
      uu = e;
    }
    function We(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function nt(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function dl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function ct(e) {
      if (nt(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Wt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = nt(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return ct(o), e;
            if (f === i) return ct(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function He(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = He(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Rt(e) {
      return e === null || typeof e != "object" ? null : (e = dm && e[dm] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ke(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === _d ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Ye:
          return "Fragment";
        case wo:
          return "Profiler";
        case qo:
          return "StrictMode";
        case jo:
          return "Suspense";
        case zi:
          return "SuspenseList";
        case sm:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Mc:
            return "Portal";
          case $a:
            return (e.displayName || "Context") + ".Provider";
          case Cd:
            return (e._context.displayName || "Context") + ".Consumer";
          case Yu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Sr:
            return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
          case Ma:
            t = e._payload, e = e._init;
            try {
              return ke(e(t));
            } catch {
            }
        }
      return null;
    }
    function At(e) {
      return typeof e.tag == "number" ? re(e) : typeof e.name == "string" ? e.name : null;
    }
    function re(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ke(t);
        case 8:
          return t === qo ? "StrictMode" : "Mode";
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
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return re(e.return);
      }
      return null;
    }
    function Dt(e) {
      return { current: e };
    }
    function ve(e, t) {
      0 > Wa ? console.error("Unexpected pop.") : (t !== Er[Wa] && console.error("Unexpected Fiber popped."), e.current = Tr[Wa], Tr[Wa] = null, Er[Wa] = null, Wa--);
    }
    function Re(e, t, a) {
      Wa++, Tr[Wa] = e.current, Er[Wa] = a, e.current = t;
    }
    function zt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function wt(e, t) {
      Re(eu, t, e), Re(Go, e, e), Re(qu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? pt(t) : Vc;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = pt(t), t = sa(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = bh;
                break;
              case "math":
                t = Pv;
                break;
              default:
                t = Vc;
            }
      }
      a = a.toLowerCase(), a = Dh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ve(qu, e), Re(qu, a, e);
    }
    function ht(e) {
      ve(qu, e), ve(Go, e), ve(eu, e);
    }
    function O() {
      return zt(qu.current);
    }
    function J(e) {
      e.memoizedState !== null && Re(Lo, e, e);
      var t = zt(qu.current), a = e.type, i = sa(t.context, a);
      a = Dh(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Re(Go, e, e), Re(qu, i, e));
    }
    function I(e) {
      Go.current === e && (ve(qu, e), ve(Go, e)), Lo.current === e && (ve(Lo, e), cp._currentValue = Wr);
    }
    function me(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function g(e) {
      try {
        return N(e), !1;
      } catch {
        return !0;
      }
    }
    function N(e) {
      return "" + e;
    }
    function Q(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function F(e, t) {
      if (g(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          me(e)
        ), N(e);
    }
    function ne(e) {
      if (g(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          me(e)
        ), N(e);
    }
    function Se(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ui = t.inject(e), Hl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function ue(e) {
      if (typeof Mg == "function" && gn(e), Hl && typeof Hl.setStrictMode == "function")
        try {
          Hl.setStrictMode(Ui, e);
        } catch (t) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function al(e) {
      ie = e;
    }
    function ze() {
      ie !== null && typeof ie.markCommitStopped == "function" && ie.markCommitStopped();
    }
    function xt(e) {
      ie !== null && typeof ie.markComponentRenderStarted == "function" && ie.markComponentRenderStarted(e);
    }
    function ta() {
      ie !== null && typeof ie.markComponentRenderStopped == "function" && ie.markComponentRenderStopped();
    }
    function Rn(e) {
      ie !== null && typeof ie.markRenderStarted == "function" && ie.markRenderStarted(e);
    }
    function ji() {
      ie !== null && typeof ie.markRenderStopped == "function" && ie.markRenderStopped();
    }
    function An(e, t) {
      ie !== null && typeof ie.markStateUpdateScheduled == "function" && ie.markStateUpdateScheduled(e, t);
    }
    function Zc(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Nd(e) / ju | 0) | 0;
    }
    function sf(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function It(e) {
      var t = e & 42;
      if (t !== 0) return t;
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
          return 64;
        case 128:
          return 128;
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function hl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = It(i) : (d &= h, d !== 0 ? o = It(d) : a || (a = h & ~e, a !== 0 && (o = It(a))))) : (h = i & ~f, h !== 0 ? o = It(h) : d !== 0 ? o = It(d) : a || (a = i & ~e, a !== 0 && (o = It(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ku(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Fr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
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
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function Ve() {
      var e = Bd;
      return Bd <<= 1, (Bd & 4194048) === 0 && (Bd = 256), e;
    }
    function On() {
      var e = Yd;
      return Yd <<= 1, (Yd & 62914560) === 0 && (Yd = 4194304), e;
    }
    function Kc(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function mu(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Ir(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, v = e.expirationTimes, b = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var B = 31 - Ll(a), j = 1 << B;
        h[B] = 0, v[B] = -1;
        var H = b[B];
        if (H !== null)
          for (b[B] = null, B = 0; B < H.length; B++) {
            var L = H[B];
            L !== null && (L.lane &= -536870913);
          }
        a &= ~j;
      }
      i !== 0 && df(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function df(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Ll(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 4194090;
    }
    function $u(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Ll(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function El(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function Ba(e, t, a) {
      if ($t)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Ll(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Rl(e, t) {
      if ($t)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Ll(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Jc(e) {
      return e &= -e, xl < e ? bn < e ? (e & 134217727) !== 0 ? Gu : qd : bn : xl;
    }
    function hf() {
      var e = Oe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Gu : Md(e.type));
    }
    function kc(e, t) {
      var a = Oe.p;
      try {
        return Oe.p = e, t();
      } finally {
        Oe.p = a;
      }
    }
    function tn(e) {
      delete e[Vl], delete e[ma], delete e[hm], delete e[yv], delete e[Xo];
    }
    function la(e) {
      var t = e[Vl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[_i] || a[Vl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = xo(e); e !== null; ) {
              if (a = e[Vl])
                return a;
              e = xo(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Al(e) {
      if (e = e[Vl] || e[_i]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ln(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function m(e) {
      var t = e[Qo];
      return t || (t = e[Qo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function D(e) {
      e[Zo] = !0;
    }
    function ee(e, t) {
      ae(e, t), ae(e + "Capture", t);
    }
    function ae(e, t) {
      Fa[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Fa[e] = t;
      var a = e.toLowerCase();
      for (Uc[a] = e, e === "onDoubleClick" && (Uc.ondblclick = e), e = 0; e < t.length; e++)
        mv.add(t[e]);
    }
    function ye(e, t) {
      pv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Ue(e) {
      return wu.call(Gd, e) ? !0 : wu.call(jd, e) ? !1 : wd.test(e) ? Gd[e] = !0 : (jd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ne(e, t, a) {
      if (Ue(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Q(a, t), e === "" + a ? a : e);
      }
    }
    function tt(e, t, a) {
      if (Ue(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Q(a, t), e.setAttribute(t, "" + a);
        }
    }
    function xe(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Q(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Pt(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Q(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function an() {
    }
    function Pr() {
      if (Hi === 0) {
        ym = console.log, mm = console.info, vv = console.warn, pm = console.error, Ko = console.group, gv = console.groupCollapsed, bv = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: an,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Hi++;
    }
    function Th() {
      if (Hi--, Hi === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Xe({}, e, { value: ym }),
          info: Xe({}, e, { value: mm }),
          warn: Xe({}, e, { value: vv }),
          error: Xe({}, e, { value: pm }),
          group: Xe({}, e, { value: Ko }),
          groupCollapsed: Xe({}, e, { value: gv }),
          groupEnd: Xe({}, e, { value: bv })
        });
      }
      0 > Hi && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function nl(e) {
      if (vm === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          vm = t && t[1] || "", Or = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + vm + e + Or;
    }
    function yl(e, t) {
      if (!e || Jo) return "";
      var a = Dr.get(e);
      if (a !== void 0) return a;
      Jo = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = q.H, q.H = null, Pr();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var H = function() {
                  throw Error();
                };
                if (Object.defineProperty(H.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(H, []);
                  } catch (de) {
                    var L = de;
                  }
                  Reflect.construct(e, [], H);
                } else {
                  try {
                    H.call();
                  } catch (de) {
                    L = de;
                  }
                  e.call(H.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (de) {
                  L = de;
                }
                (H = e()) && typeof H.catch == "function" && H.catch(function() {
                });
              }
            } catch (de) {
              if (de && L && typeof de.stack == "string")
                return [de.stack, L.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], v = d[1];
        if (h && v) {
          var b = h.split(`
`), B = v.split(`
`);
          for (d = f = 0; f < b.length && !b[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < B.length && !B[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === b.length || d === B.length)
            for (f = b.length - 1, d = B.length - 1; 1 <= f && 0 <= d && b[f] !== B[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (b[f] !== B[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || b[f] !== B[d]) {
                    var j = `
` + b[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && Dr.set(e, j), j;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Jo = !1, q.H = i, Th(), Error.prepareStackTrace = a;
      }
      return b = (b = e ? e.displayName || e.name : "") ? nl(b) : "", typeof e == "function" && Dr.set(e, b), b;
    }
    function Zl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function $c(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return nl(e.type);
        case 16:
          return nl("Lazy");
        case 13:
          return nl("Suspense");
        case 19:
          return nl("SuspenseList");
        case 0:
        case 15:
          return yl(e.type, !1);
        case 11:
          return yl(e.type.render, !1);
        case 1:
          return yl(e.type, !0);
        case 31:
          return nl("Activity");
        default:
          return "";
      }
    }
    function es(e) {
      try {
        var t = "";
        do {
          t += $c(e);
          var a = e._debugInfo;
          if (a)
            for (var i = a.length - 1; 0 <= i; i--) {
              var o = a[i];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = nl(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (v) {
        return `
Error generating stack: ` + v.message + `
` + v.stack;
      }
    }
    function pp(e) {
      return (e = e ? e.displayName || e.name : "") ? nl(e) : "";
    }
    function ts() {
      if (Ua === null) return null;
      var e = Ua._debugOwner;
      return e != null ? At(e) : null;
    }
    function vp() {
      if (Ua === null) return "";
      var e = Ua;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += nl(e.type);
            break;
          case 13:
            t += nl("Suspense");
            break;
          case 19:
            t += nl("SuspenseList");
            break;
          case 31:
            t += nl("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += pp(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += pp(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            e && i && (typeof i != "string" && (a._debugStack = i = Zl(i)), i !== "" && (t += `
` + i));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Zl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function se(e, t, a, i, o, f, d) {
      var h = Ua;
      yf(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        yf(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function yf(e) {
      q.getCurrentStack = e === null ? null : vp, pa = !1, Ua = e;
    }
    function Ol(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ne(e), e;
        default:
          return "";
      }
    }
    function Gi(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function mf(e) {
      var t = Gi(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      ne(e[t]);
      var i = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            ne(d), i = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            ne(d), i = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function pu(e) {
      e._valueTracker || (e._valueTracker = mf(e));
    }
    function ul(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = Gi(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function pf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Sa(e) {
      return e.replace(
        Ug,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Wu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || bm || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component",
        t.type
      ), bm = !0), t.value === void 0 || t.defaultValue === void 0 || gm || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component",
        t.type
      ), gm = !0);
    }
    function Fu(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Q(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ol(t)) : e.value !== "" + Ol(t) && (e.value = "" + Ol(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? ls(e, d, Ol(t)) : a != null ? ls(e, d, Ol(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Q(h, "name"), e.name = "" + Ol(h)) : e.removeAttribute("name");
    }
    function gp(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Q(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + Ol(a) : "", t = t != null ? "" + Ol(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Q(d, "name"), e.name = d);
    }
    function ls(e, t, a) {
      t === "number" && pf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Eh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? gr.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || Tm || (Tm = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Ld || (Ld = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Sm || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Sm = !0);
    }
    function bp() {
      var e = ts();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function vu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ol(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function vf(e, t) {
      for (e = 0; e < zr.length; e++) {
        var a = zr[e];
        if (t[a] != null) {
          var i = Ce(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            bp()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            bp()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || Em || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), Em = !0);
    }
    function Dn(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || Sv || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        ts() || "A component"
      ), Sv = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function as(e, t, a) {
      if (t != null && (t = "" + Ol(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ol(a) : "";
    }
    function Rh(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Ce(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ol(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i);
    }
    function Li(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Li(e.children[0], t) : e;
    }
    function Kl(e) {
      return "  " + "  ".repeat(e);
    }
    function Iu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Vi(e) {
      return "- " + "  ".repeat(e);
    }
    function Ah(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ql(e, t) {
      return Tv.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function gf(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Iu(a) + ql(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Iu(a) + ql(e, i) + `
` + Vi(a) + ql(t, i) + `
`;
      }
      return Kl(a) + ql(e, i) + `
`;
    }
    function Oh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Pu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Ce(e)) return "[...]";
          if (e.$$typeof === Di)
            return (t = ke(e.type)) ? "<" + t + ">" : "<...>";
          var a = Oh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = Pu(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Xi(e, t) {
      return typeof e != "string" || Tv.test(e) ? "{" + Pu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Wc(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Xi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function sg(e, t, a) {
      var i = "", o = Xe({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Pu(e[f], d);
          t.hasOwnProperty(f) ? (d = Pu(t[f], d), i += Iu(a) + f + ": " + h + `
`, i += Vi(a) + f + ": " + d + `
`) : i += Iu(a) + f + ": " + h + `
`;
        }
      for (var v in o)
        o.hasOwnProperty(v) && (e = Pu(
          o[v],
          120 - 2 * a - v.length - 2
        ), i += Vi(a) + v + ": " + e + `
`);
      return i;
    }
    function Ya(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (b in a)
        a.hasOwnProperty(b) && f.set(
          b.toLowerCase(),
          b
        );
      if (f.size === 1 && f.has("children"))
        o += Wc(
          e,
          t,
          Kl(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, v = f.get(d.toLowerCase());
            if (v !== void 0) {
              f.delete(d.toLowerCase());
              var b = t[d];
              v = a[v];
              var B = Xi(
                b,
                h
              );
              h = Xi(
                v,
                h
              ), typeof b == "object" && b !== null && typeof v == "object" && v !== null && Oh(b) === "Object" && Oh(v) === "Object" && (2 < Object.keys(b).length || 2 < Object.keys(v).length || -1 < B.indexOf("...") || -1 < h.indexOf("...")) ? o += Kl(i + 1) + d + `={{
` + sg(
                b,
                v,
                i + 2
              ) + Kl(i + 1) + `}}
` : (o += Iu(i + 1) + d + "=" + B + `
`, o += Vi(i + 1) + d + "=" + h + `
`);
            } else
              o += Kl(i + 1) + d + "=" + Xi(t[d], h) + `
`;
          }
        f.forEach(function(j) {
          if (j !== "children") {
            var H = 120 - 2 * (i + 1) - j.length - 1;
            o += Vi(i + 1) + j + "=" + Xi(a[j], H) + `
`;
          }
        }), o = o === "" ? Kl(i) + "<" + e + `>
` : Kl(i) + "<" + e + `
` + o + Kl(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += gf(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + gf("" + t, null, i + 1) : o + gf("" + t, void 0, i + 1)), o;
    }
    function ns(e, t) {
      var a = Ah(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += ns(e, t), e = e.sibling;
        return a;
      }
      return Kl(t) + "<" + a + `>
`;
    }
    function us(e, t) {
      var a = Li(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Kl(t) + `...
` + us(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Kl(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = gf(o, e.serverProps, t), t++;
      else if (f = Ah(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (b in o)
            if (o.hasOwnProperty(b) && b !== "children") {
              var v = Xi(o[b], 15);
              if (d -= b.length + v.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + b + "=" + v;
            }
          i = Kl(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Wc(
            f,
            o,
            Iu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Ya(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var b = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (b += us(d, t), f++) : b += ns(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (b += Kl(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], b = typeof f == "string" ? b + (Vi(t) + ql(f, 120 - 2 * t) + `
`) : b + Wc(
          f.type,
          f.props,
          Vi(t)
        );
      return a + i + b;
    }
    function bf(e) {
      try {
        return `

` + us(e, 0);
      } catch {
        return "";
      }
    }
    function Qi(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? bf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Dh(e, t) {
      var a = Xe({}, e || Om), i = { tag: t };
      return Vd.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Xd.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Rm.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function zh(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return Am.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Fc(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function Sp(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function is(e, t) {
      t = t || Om;
      var a = t.current;
      if (t = (a = zh(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Fc(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, ko[t]) return !1;
      ko[t] = !0;
      var o = (t = Ua) ? Sp(t.return, i) : null, f = t !== null && o !== null ? Qi(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || se(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Sf(e, t, a) {
      if (a || zh("#text", t, !1))
        return !0;
      if (a = "#text|" + t, ko[a]) return !1;
      ko[a] = !0;
      var i = (a = Ua) ? Sp(a, t) : null;
      return a = a !== null && i !== null ? Qi(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Zi(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function dg(e) {
      return e.replace(xi, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Tp(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? Cc.hasOwnProperty(t) && Cc[t] || (Cc[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        dg(t.replace(Ur, "ms-"))
      )) : Mr.test(t) ? Cc.hasOwnProperty(t) && Cc[t] || (Cc[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !Ev.test(a) || _c.hasOwnProperty(a) && _c[a] || (_c[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(Ev, "")
      )), typeof a == "number" && (isNaN(a) ? Rv || (Rv = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Dm || (Dm = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Cr.has(t) ? t === "float" ? e.cssFloat = a : (F(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Tf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = lu[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = lu[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var v in t)
            for (o = lu[v] || [v], f = 0; f < o.length; f++)
              h[o[f]] = v;
          v = {};
          for (var b in i)
            if (o = i[b], (f = h[b]) && o !== f && (d = o + "," + f, !v[d])) {
              v[d] = !0, d = console;
              var B = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                B == null || typeof B == "boolean" || B === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var j in a)
          !a.hasOwnProperty(j) || t != null && t.hasOwnProperty(j) || (j.indexOf("--") === 0 ? e.setProperty(j, "") : j === "float" ? e.cssFloat = "" : e[j] = "");
        for (var H in t)
          b = t[H], t.hasOwnProperty(H) && a[H] !== b && Tp(e, H, b);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Tp(e, i, t[i]);
    }
    function Ki(e) {
      if (e.indexOf("-") === -1) return !1;
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
    function cs(e) {
      return Qd.get(e) || e;
    }
    function Ic(e, t) {
      if (wu.call(au, t) && au[t])
        return !0;
      if (Zd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = zm.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), au[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), au[t] = !0;
      }
      if (Mm.test(t)) {
        if (e = t.toLowerCase(), e = zm.hasOwnProperty(e) ? e : null, e == null) return au[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), au[t] = !0);
      }
      return !0;
    }
    function Pc(e, t) {
      var a = [], i;
      for (i in t)
        Ic(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Ep(e, t, a, i) {
      if (wu.call(Fl, t) && Fl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Fl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Fl[t] = !0;
        if (Hr.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Fl[t] = !0;
      } else if (Hr.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Fl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Fl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Fl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Fl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Fl[t] = !0;
      if (Hc.hasOwnProperty(o)) {
        if (o = Hc[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Fl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Fl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Fl[t] = !0);
          }
        case "function":
        case "symbol":
          return Fl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Fl[t] = !0;
          }
      }
      return !0;
    }
    function Mh(e, t, a) {
      var i = [], o;
      for (o in t)
        Ep(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function eo(e) {
      return c.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ji(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function zn(e) {
      var t = Al(e);
      if (t && (e = t.stateNode)) {
        var a = e[ma] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Fu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Q(t, "name"), a = a.querySelectorAll(
                'input[name="' + Sa(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[ma] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Fu(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && ul(i);
            }
            break e;
          case "textarea":
            as(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && vu(e, !!a.multiple, t, !1);
        }
      }
    }
    function os(e, t, a) {
      if (p) return e(t, a);
      p = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (p = !1, (s !== null || y !== null) && (gc(), s && (t = s, e = y, y = s = null, zn(t), e)))
          for (t = 0; t < e.length; t++) zn(e[t]);
      }
    }
    function gu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[ma] || null;
      if (i === null) return null;
      a = i[t];
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
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function bu() {
      if (Y) return Y;
      var e, t = x, a = t.length, i, o = "value" in K ? K.value : K.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Y = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function to(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ki() {
      return !0;
    }
    function Uh() {
      return !1;
    }
    function Dl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ki : Uh, this.isPropagationStopped = Uh, this;
      }
      return Xe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ki);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ki);
        },
        persist: function() {
        },
        isPersistent: ki
      }), t;
    }
    function fs(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Ib[e]) ? !!t[e] : !1;
    }
    function rs() {
      return fs;
    }
    function Jl(e, t) {
      switch (e) {
        case "keyup":
          return rS.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== H0;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ei(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function ss(e, t) {
      switch (e) {
        case "compositionend":
          return ei(t);
        case "keypress":
          return t.which !== N0 ? null : (Y0 = !0, B0);
        case "textInput":
          return e = t.data, e === B0 && Y0 ? null : e;
        default:
          return null;
      }
    }
    function Ef(e, t) {
      if (Kd)
        return e === "compositionend" || !_g && Jl(e, t) ? (e = bu(), Y = x = K = null, Kd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return x0 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Rp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!dS[e.type] : t === "textarea";
    }
    function Ch(e) {
      if (!S) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function ds(e, t, a, i) {
      s ? y ? y.push(i) : y = [i] : s = i, t = fr(t, "onChange"), 0 < t.length && (a = new be(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Rf(e) {
      kn(e, 0);
    }
    function $i(e) {
      var t = ln(e);
      if (ul(t)) return e;
    }
    function _h(e, t) {
      if (e === "change") return t;
    }
    function Ap() {
      _m && (_m.detachEvent("onpropertychange", Op), Hm = _m = null);
    }
    function Op(e) {
      if (e.propertyName === "value" && $i(Hm)) {
        var t = [];
        ds(
          t,
          Hm,
          e,
          Ji(e)
        ), os(Rf, t);
      }
    }
    function hg(e, t, a) {
      e === "focusin" ? (Ap(), _m = t, Hm = a, _m.attachEvent("onpropertychange", Op)) : e === "focusout" && Ap();
    }
    function Hh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return $i(Hm);
    }
    function yg(e, t) {
      if (e === "click") return $i(t);
    }
    function mg(e, t) {
      if (e === "input" || e === "change")
        return $i(t);
    }
    function pg(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Af(e, t) {
      if (Ca(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!wu.call(t, o) || !Ca(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Dp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function xh(e, t) {
      var a = Dp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Dp(a);
      }
    }
    function zp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Mp(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = pf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = pf(e.document);
      }
      return t;
    }
    function Nh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Up(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      xg || Jd == null || Jd !== pf(i) || (i = Jd, "selectionStart" in i && Nh(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), xm && Af(xm, i) || (xm = i, i = fr(Hg, "onSelect"), 0 < i.length && (t = new be(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Jd)));
    }
    function Su(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Wi(e) {
      if (Ng[e]) return Ng[e];
      if (!kd[e]) return e;
      var t = kd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in w0)
          return Ng[e] = t[a];
      return e;
    }
    function nn(e, t) {
      X0.set(e, t), ee(t, [e]);
    }
    function Ta(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Yg.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: es(t)
        }, Yg.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: es(t)
      };
    }
    function Of() {
      for (var e = $d, t = qg = $d = 0; t < e; ) {
        var a = nu[t];
        nu[t++] = null;
        var i = nu[t];
        nu[t++] = null;
        var o = nu[t];
        nu[t++] = null;
        var f = nu[t];
        if (nu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Cp(a, o, f);
      }
    }
    function hs(e, t, a, i) {
      nu[$d++] = e, nu[$d++] = t, nu[$d++] = a, nu[$d++] = i, qg |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function Bh(e, t, a, i) {
      return hs(e, t, a, i), ys(e);
    }
    function aa(e, t) {
      return hs(e, null, null, t), ys(e);
    }
    function Cp(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Av || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Ll(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function ys(e) {
      if (tp > BS)
        throw Zr = tp = 0, lp = h0 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Zr > YS && (Zr = 0, lp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && vn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && vn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Fi(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e : t.current;
    }
    function Yh(e) {
      if (uu === null) return e;
      var t = uu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Fi(e.render), e.render !== t) ? (t = { $$typeof: Yu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function _p(e, t) {
      if (uu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === Ma) && (i = !0);
          break;
        case 11:
          (o === Yu || o === Ma) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Sr || o === Ma) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = uu(a), e !== void 0 && e === uu(t)));
    }
    function Hp(e) {
      uu !== null && typeof WeakSet == "function" && (Wd === null && (Wd = /* @__PURE__ */ new WeakSet()), Wd.add(e));
    }
    function Df(e, t, a) {
      var i = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, v = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          v = h;
          break;
        case 11:
          v = h.render;
      }
      if (uu === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var b = !1;
      h = !1, v !== null && (v = uu(v), v !== void 0 && (a.has(v) ? h = !0 : t.has(v) && (d === 1 ? h = !0 : b = !0))), Wd !== null && (Wd.has(e) || i !== null && Wd.has(i)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || b) && (i = aa(e, 2), i !== null && Qt(i, e, 2)), o === null || h || Df(
        o,
        t,
        a
      ), f !== null && Df(
        f,
        t,
        a
      );
    }
    function zf(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Z0 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function qh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Mn(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = M(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Fi(e.type);
          break;
        case 1:
          a.type = Fi(e.type);
          break;
        case 11:
          a.type = Yh(e.type);
      }
      return a;
    }
    function wh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function ms(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        qh(e) && (d = 1), h = Fi(h);
      else if (typeof e == "string")
        d = O(), d = Bo(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case sm:
            return t = M(31, a, t, o), t.elementType = sm, t.lanes = f, t;
          case Ye:
            return ti(
              a.children,
              o,
              f,
              t
            );
          case qo:
            d = 8, o |= va, o |= Xu;
            break;
          case wo:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = M(12, e, t, i | Il), t.elementType = wo, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case jo:
            return t = M(13, a, t, o), t.elementType = jo, t.lanes = f, t;
          case zi:
            return t = M(19, a, t, o), t.elementType = zi, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case rm:
                case $a:
                  d = 10;
                  break e;
                case Cd:
                  d = 9;
                  break e;
                case Yu:
                  d = 11, h = Yh(h);
                  break e;
                case Sr:
                  d = 14;
                  break e;
                case Ma:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Ce(e) ? a = "array" : e !== void 0 && e.$$typeof === Di ? (a = "<" + (ke(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? At(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = M(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Mf(e, t, a) {
      return t = ms(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function ti(e, t, a, i) {
      return e = M(7, e, i, t), e.lanes = a, e;
    }
    function li(e, t, a) {
      return e = M(6, e, null, t), e.lanes = a, e;
    }
    function jh(e, t, a) {
      return t = M(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Ii(e, t) {
      un(), Fd[Id++] = Dv, Fd[Id++] = Ov, Ov = e, Dv = t;
    }
    function xp(e, t, a) {
      un(), iu[cu++] = Nc, iu[cu++] = Bc, iu[cu++] = xr, xr = e;
      var i = Nc;
      e = Bc;
      var o = 32 - Ll(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Ll(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Nc = 1 << 32 - Ll(t) + o | a << o | i, Bc = f + e;
      } else
        Nc = 1 << f | a << o | i, Bc = e;
    }
    function ps(e) {
      un(), e.return !== null && (Ii(e, 1), xp(e, 1, 0));
    }
    function vs(e) {
      for (; e === Ov; )
        Ov = Fd[--Id], Fd[Id] = null, Dv = Fd[--Id], Fd[Id] = null;
      for (; e === xr; )
        xr = iu[--cu], iu[cu] = null, Bc = iu[--cu], iu[cu] = null, Nc = iu[--cu], iu[cu] = null;
    }
    function un() {
      st || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function cn(e, t) {
      if (e.return === null) {
        if (ou === null)
          ou = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (ou.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          ou.distanceFromLeaf > t && (ou.distanceFromLeaf = t);
        }
        return ou;
      }
      var a = cn(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Gh(e, t) {
      Yc || (e = cn(e, 0), e.serverProps = null, t !== null && (t = Sd(t), e.serverTail.push(t)));
    }
    function Un(e) {
      var t = "", a = ou;
      throw a !== null && (ou = null, t = bf(a)), lo(
        Ta(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), wg;
    }
    function Lh(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Vl] = e, t[ma] = i, $n(a, i), a) {
        case "dialog":
          $e("cancel", t), $e("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          $e("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < ap.length; a++)
            $e(ap[a], t);
          break;
        case "source":
          $e("error", t);
          break;
        case "img":
        case "image":
        case "link":
          $e("error", t), $e("load", t);
          break;
        case "details":
          $e("toggle", t);
          break;
        case "input":
          ye("input", i), $e("invalid", t), Wu(t, i), gp(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          ), pu(t);
          break;
        case "option":
          Eh(t, i);
          break;
        case "select":
          ye("select", i), $e("invalid", t), vf(t, i);
          break;
        case "textarea":
          ye("textarea", i), $e("invalid", t), Dn(t, i), Rh(
            t,
            i.value,
            i.defaultValue,
            i.children
          ), pu(t);
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || Xy(t.textContent, a) ? (i.popover != null && ($e("beforetoggle", t), $e("toggle", t)), i.onScroll != null && $e("scroll", t), i.onScrollEnd != null && $e("scrollend", t), i.onClick != null && (t.onclick = Hu), t = !0) : t = !1, t || Un(e);
    }
    function Vh(e) {
      for (_a = e.return; _a; )
        switch (_a.tag) {
          case 5:
          case 13:
            Bi = !1;
            return;
          case 27:
          case 3:
            Bi = !0;
            return;
          default:
            _a = _a.return;
        }
    }
    function Pi(e) {
      if (e !== _a) return !1;
      if (!st)
        return Vh(e), st = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Wn(e.type, e.memoizedProps)), a = !a), a && tl) {
        for (a = tl; a; ) {
          var i = cn(e, 0), o = Sd(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Fy(a) : _l(a.nextSibling);
        }
        Un(e);
      }
      if (Vh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        tl = Fy(e);
      } else
        t === 27 ? (t = tl, Fn(e.type) ? (e = O0, O0 = null, tl = e) : tl = t) : tl = _a ? _l(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ec() {
      tl = _a = null, Yc = st = !1;
    }
    function Xh() {
      var e = Nr;
      return e !== null && (Na === null ? Na = e : Na.push.apply(
        Na,
        e
      ), Nr = null), e;
    }
    function lo(e) {
      Nr === null ? Nr = [e] : Nr.push(e);
    }
    function Qh() {
      var e = ou;
      if (e !== null) {
        ou = null;
        for (var t = bf(e); 0 < e.children.length; )
          e = e.children[0];
        se(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function gs() {
      Pd = zv = null, eh = !1;
    }
    function ai(e, t, a) {
      Re(jg, t._currentValue, e), t._currentValue = a, Re(Gg, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $0 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = $0;
    }
    function Tu(e, t) {
      e._currentValue = jg.current;
      var a = Gg.current;
      ve(Gg, t), e._currentRenderer = a, ve(jg, t);
    }
    function Zh(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Kh(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var v = 0; v < t.length; v++)
              if (h.context === t[v]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Zh(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Zh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function zl(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            Ca(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Lo.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(cp) : e = [cp]);
        }
        o = o.return;
      }
      e !== null && Kh(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function ni(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Ca(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function ui(e) {
      zv = e, Pd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ct(e) {
      return eh && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Jh(zv, e);
    }
    function Uf(e, t) {
      return zv === null && ui(e), Jh(e, t);
    }
    function Jh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Pd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Pd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Pd = Pd.next = t;
      return a;
    }
    function Cf() {
      return {
        controller: new SS(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function tc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Cn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && TS(ES, function() {
        e.controller.abort();
      });
    }
    function on() {
      var e = Br;
      return Br = 0, e;
    }
    function ii(e) {
      var t = Br;
      return Br = e, t;
    }
    function lc(e) {
      var t = Br;
      return Br += e, t;
    }
    function bs(e) {
      Ia = th(), 0 > e.actualStartTime && (e.actualStartTime = Ia);
    }
    function Eu(e) {
      if (0 <= Ia) {
        var t = th() - Ia;
        e.actualDuration += t, e.selfBaseDuration = t, Ia = -1;
      }
    }
    function ac(e) {
      if (0 <= Ia) {
        var t = th() - Ia;
        e.actualDuration += t, Ia = -1;
      }
    }
    function qa() {
      if (0 <= Ia) {
        var e = th() - Ia;
        Ia = -1, Br += e;
      }
    }
    function fn() {
      Ia = th();
    }
    function _n(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Np(e, t) {
      if (Nm === null) {
        var a = Nm = [];
        Lg = 0, Yr = wy(), lh = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return Lg++, t.then(kh, kh), t;
    }
    function kh() {
      if (--Lg === 0 && Nm !== null) {
        lh !== null && (lh.status = "fulfilled");
        var e = Nm;
        Nm = null, Yr = 0, lh = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Bp(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function $h() {
      var e = qr.current;
      return e !== null ? e : _t.pooledCache;
    }
    function Ss(e, t) {
      t === null ? Re(qr, qr.current, e) : Re(qr, t.pool, e);
    }
    function Yp() {
      var e = $h();
      return e === null ? null : { parent: Nl._currentValue, pool: e };
    }
    function Wh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function ao() {
    }
    function wa(e, t, a) {
      q.actQueue !== null && (q.didUsePromise = !0);
      var i = e.thenables;
      switch (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(ao, ao), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Ea(e), e;
        default:
          if (typeof t.status == "string")
            t.then(ao, ao);
          else {
            if (e = _t, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Ea(e), e;
          }
          throw Vm = t, xv = !0, Lm;
      }
    }
    function Ih() {
      if (Vm === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Vm;
      return Vm = null, xv = !1, e;
    }
    function Ea(e) {
      if (e === Lm || e === Hv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function na(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function ci(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Hn(e) {
      return {
        lane: e,
        tag: e1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function rn(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, Qg === i && !a1) {
        var o = re(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), a1 = !0;
      }
      return (gt & xa) !== Sn ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = ys(e), Cp(e, null, a), t) : (hs(e, i, t, a), ys(e));
    }
    function oi(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function no(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function xn() {
      if (Zg) {
        var e = lh;
        if (e !== null) throw e;
      }
    }
    function uo(e, t, a, i) {
      Zg = !1;
      var o = e.updateQueue;
      Fo = !1, Qg = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var v = h, b = v.next;
        v.next = null, d === null ? f = b : d.next = b, d = v;
        var B = e.alternate;
        B !== null && (B = B.updateQueue, h = B.lastBaseUpdate, h !== d && (h === null ? B.firstBaseUpdate = b : h.next = b, B.lastBaseUpdate = v));
      }
      if (f !== null) {
        var j = o.baseState;
        d = 0, B = b = v = null, h = f;
        do {
          var H = h.lane & -536870913, L = H !== h.lane;
          if (L ? (et & H) === H : (i & H) === H) {
            H !== 0 && H === Yr && (Zg = !0), B !== null && (B = B.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              H = e;
              var de = h, De = t, Ht = a;
              switch (de.tag) {
                case t1:
                  if (de = de.payload, typeof de == "function") {
                    eh = !0;
                    var at = de.call(
                      Ht,
                      j,
                      De
                    );
                    if (H.mode & va) {
                      ue(!0);
                      try {
                        de.call(Ht, j, De);
                      } finally {
                        ue(!1);
                      }
                    }
                    eh = !1, j = at;
                    break e;
                  }
                  j = de;
                  break e;
                case Xg:
                  H.flags = H.flags & -65537 | 128;
                case e1:
                  if (at = de.payload, typeof at == "function") {
                    if (eh = !0, de = at.call(
                      Ht,
                      j,
                      De
                    ), H.mode & va) {
                      ue(!0);
                      try {
                        at.call(Ht, j, De);
                      } finally {
                        ue(!1);
                      }
                    }
                    eh = !1;
                  } else de = at;
                  if (de == null) break e;
                  j = Xe({}, j, de);
                  break e;
                case l1:
                  Fo = !0;
              }
            }
            H = h.callback, H !== null && (e.flags |= 64, L && (e.flags |= 8192), L = o.callbacks, L === null ? o.callbacks = [H] : L.push(H));
          } else
            L = {
              lane: H,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, B === null ? (b = B = L, v = j) : B = B.next = L, d |= H;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            L = h, h = L.next, L.next = null, o.lastBaseUpdate = L, o.shared.pending = null;
          }
        } while (!0);
        B === null && (v = j), o.baseState = v, o.firstBaseUpdate = b, o.lastBaseUpdate = B, f === null && (o.shared.lanes = 0), tf |= d, e.lanes = d, e.memoizedState = j;
      }
      Qg = null;
    }
    function _f(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function io(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          _f(a[e], t);
    }
    function qp(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          _f(a[e], t);
    }
    function ua(e, t) {
      var a = wi;
      Re(Nv, a, e), Re(ah, t, e), wi = a | t.baseLanes;
    }
    function Hf(e) {
      Re(Nv, wi, e), Re(
        ah,
        ah.current,
        e
      );
    }
    function sn(e) {
      wi = Nv.current, ve(ah, e), ve(Nv, e);
    }
    function Qe() {
      var e = w;
      su === null ? su = [e] : su.push(e);
    }
    function P() {
      var e = w;
      if (su !== null && (wc++, su[wc] !== e)) {
        var t = re(_e);
        if (!n1.has(t) && (n1.add(t), su !== null)) {
          for (var a = "", i = 0; i <= wc; i++) {
            var o = su[i], f = i === wc ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function ja(e) {
      e == null || Ce(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        w,
        typeof e
      );
    }
    function co() {
      var e = re(_e);
      i1.has(e) || (i1.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function jt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function fi(e, t) {
      if (Qm) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          w
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        w,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ca(e[a], t[a])) return !1;
      return !0;
    }
    function ri(e, t, a, i, o, f) {
      Io = f, _e = t, su = e !== null ? e._debugHookTypes : null, wc = -1, Qm = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = re(_e), Kg.has(f) || (Kg.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e !== null && e.memoizedState !== null ? kg : su !== null ? c1 : Jg, jr = f = (t.mode & va) !== Yt;
      var d = $g(a, i, o);
      if (jr = !1, uh && (d = oo(
        t,
        a,
        i,
        o
      )), f) {
        ue(!0);
        try {
          d = oo(
            t,
            a,
            i,
            o
          );
        } finally {
          ue(!1);
        }
      }
      return xf(e, t), d;
    }
    function xf(e, t) {
      t._debugHookTypes = su, t.dependencies === null ? qc !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: qc
      }) : t.dependencies._debugThenableState = qc, q.H = qv;
      var a = Mt !== null && Mt.next !== null;
      if (Io = 0, su = w = Sl = Mt = _e = null, wc = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Bv = !1, Xm = 0, qc = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Xl || (e = e.dependencies, e !== null && ni(e) && (Xl = !0)), xv ? (xv = !1, e = !0) : e = !1, e && (t = re(t) || "Unknown", u1.has(t) || Kg.has(t) || (u1.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function oo(e, t, a, i) {
      _e = e;
      var o = 0;
      do {
        if (uh && (qc = null), Xm = 0, uh = !1, o >= AS)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Qm = !1, Sl = Mt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        wc = -1, q.H = o1, f = $g(t, a, i);
      } while (uh);
      return f;
    }
    function Ga() {
      var e = q.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? nc(t) : t, e = e.useState()[0], (Mt !== null ? Mt.memoizedState : null) !== e && (_e.flags |= 1024), t;
    }
    function ia() {
      var e = Yv !== 0;
      return Yv = 0, e;
    }
    function Ru(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Xu) !== Yt ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function dn(e) {
      if (Bv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Bv = !1;
      }
      Io = 0, su = Sl = Mt = _e = null, wc = -1, w = null, uh = !1, Xm = Yv = 0, qc = null;
    }
    function Vt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Sl === null ? _e.memoizedState = Sl = e : Sl = Sl.next = e, Sl;
    }
    function lt() {
      if (Mt === null) {
        var e = _e.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Mt.next;
      var t = Sl === null ? _e.memoizedState : Sl.next;
      if (t !== null)
        Sl = t, Mt = e;
      else {
        if (e === null)
          throw _e.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Mt = e, e = {
          memoizedState: Mt.memoizedState,
          baseState: Mt.baseState,
          baseQueue: Mt.baseQueue,
          queue: Mt.queue,
          next: null
        }, Sl === null ? _e.memoizedState = Sl = e : Sl = Sl.next = e;
      }
      return Sl;
    }
    function Ts() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function nc(e) {
      var t = Xm;
      return Xm += 1, qc === null && (qc = Wh()), e = wa(qc, e, t), t = _e, (Sl === null ? t.memoizedState : Sl.next) === null && (t = t.alternate, q.H = t !== null && t.memoizedState !== null ? kg : Jg), e;
    }
    function Nn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return nc(e);
        if (e.$$typeof === $a) return Ct(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ft(e) {
      var t = null, a = _e.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = _e.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ts(), _e.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Qm)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = dv;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function ot(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function it(e, t, a) {
      var i = Vt();
      if (a !== void 0) {
        var o = a(t);
        if (jr) {
          ue(!0);
          try {
            a(t);
          } finally {
            ue(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = cy.bind(
        null,
        _e,
        e
      ), [i.memoizedState, e];
    }
    function La(e) {
      var t = lt();
      return Va(t, Mt, e);
    }
    function Va(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, v = null, b = t, B = !1;
        do {
          var j = b.lane & -536870913;
          if (j !== b.lane ? (et & j) === j : (Io & j) === j) {
            var H = b.revertLane;
            if (H === 0)
              v !== null && (v = v.next = {
                lane: 0,
                revertLane: 0,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }), j === Yr && (B = !0);
            else if ((Io & H) === H) {
              b = b.next, H === Yr && (B = !0);
              continue;
            } else
              j = {
                lane: 0,
                revertLane: b.revertLane,
                action: b.action,
                hasEagerState: b.hasEagerState,
                eagerState: b.eagerState,
                next: null
              }, v === null ? (h = v = j, d = f) : v = v.next = j, _e.lanes |= H, tf |= H;
            j = b.action, jr && a(f, j), f = b.hasEagerState ? b.eagerState : a(f, j);
          } else
            H = {
              lane: j,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, v === null ? (h = v = H, d = f) : v = v.next = H, _e.lanes |= j, tf |= j;
          b = b.next;
        } while (b !== null && b !== t);
        if (v === null ? d = f : v.next = h, !Ca(f, e.memoizedState) && (Xl = !0, B && (a = lh, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = v, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function uc(e) {
      var t = lt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        Ca(f, t.memoizedState) || (Xl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Au(e, t, a) {
      var i = _e, o = Vt();
      if (st) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        nh || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), nh = !0);
      } else {
        if (f = t(), nh || (a = t(), Ca(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), nh = !0)), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (et & 124) !== 0 || Ph(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, As(
        ro.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Yn(
        ru | Bl,
        di(),
        fo.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Nf(e, t, a) {
      var i = _e, o = lt(), f = st;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !nh) {
        var d = t();
        Ca(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), nh = !0);
      }
      (d = !Ca(
        (Mt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Xl = !0), o = o.queue;
      var h = ro.bind(null, i, o, e);
      if (cl(2048, Bl, h, [e]), o.getSnapshot !== t || d || Sl !== null && Sl.memoizedState.tag & ru) {
        if (i.flags |= 2048, Yn(
          ru | Bl,
          di(),
          fo.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), _t === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Io & 124) !== 0 || Ph(i, t, a);
      }
      return a;
    }
    function Ph(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = _e.updateQueue, t === null ? (t = Ts(), _e.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function fo(e, t, a, i) {
      t.value = a, t.getSnapshot = i, ey(t) && so(e);
    }
    function ro(e, t, a) {
      return a(function() {
        ey(t) && so(e);
      });
    }
    function ey(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Ca(e, a);
      } catch {
        return !0;
      }
    }
    function so(e) {
      var t = aa(e, 2);
      t !== null && Qt(t, e, 2);
    }
    function Bf(e) {
      var t = Vt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), jr) {
          ue(!0);
          try {
            a();
          } finally {
            ue(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ot,
        lastRenderedState: e
      }, t;
    }
    function Ou(e) {
      e = Bf(e);
      var t = e.queue, a = po.bind(null, _e, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function hn(e) {
      var t = Vt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = xs.bind(
        null,
        _e,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Du(e, t) {
      var a = lt();
      return Bn(a, Mt, e, t);
    }
    function Bn(e, t, a, i) {
      return e.baseState = a, Va(
        e,
        Mt,
        typeof i == "function" ? i : ot
      );
    }
    function Es(e, t) {
      var a = lt();
      return Mt !== null ? Bn(a, Mt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function ty(e, t, a, i, o) {
      if (Vf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        q.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, ho(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function ho(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = q.T, d = {};
        q.T = d, q.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, i), v = q.S;
          v !== null && v(d, h), Yf(e, t, h);
        } catch (b) {
          ml(e, t, b);
        } finally {
          q.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), Yf(e, t, d);
        } catch (b) {
          ml(e, t, b);
        }
    }
    function Yf(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(i) {
          si(e, t, i);
        },
        function(i) {
          return ml(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : si(e, t, a);
    }
    function si(e, t, a) {
      t.status = "fulfilled", t.value = a, qf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, ho(e, a)));
    }
    function ml(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, qf(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function qf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function ly(e, t) {
      return t;
    }
    function yo(e, t) {
      if (st) {
        var a = _t.formState;
        if (a !== null) {
          e: {
            var i = _e;
            if (st) {
              if (tl) {
                t: {
                  for (var o = tl, f = Bi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = _l(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === T0 || f === ib ? o : null;
                }
                if (o) {
                  tl = _l(
                    o.nextSibling
                  ), i = o.data === T0;
                  break e;
                }
              }
              Un(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Vt(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ly,
        lastRenderedState: t
      }, a.queue = i, a = po.bind(
        null,
        _e,
        i
      ), i.dispatch = a, i = Bf(!1), f = xs.bind(
        null,
        _e,
        !1,
        i.queue
      ), i = Vt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = ty.bind(
        null,
        _e,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function Rs(e) {
      var t = lt();
      return wp(t, Mt, e);
    }
    function wp(e, t, a) {
      if (t = Va(
        e,
        t,
        ly
      )[0], e = La(ot)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = nc(t);
        } catch (d) {
          throw d === Lm ? Hv : d;
        }
      else i = t;
      t = lt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (_e.flags |= 2048, Yn(
        ru | Bl,
        di(),
        il.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function il(e, t) {
      e.action = t;
    }
    function mo(e) {
      var t = lt(), a = Mt;
      if (a !== null)
        return wp(t, a, e);
      lt(), t = t.memoizedState, a = lt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Yn(e, t, a, i) {
      return e = {
        tag: e,
        create: a,
        deps: i,
        inst: t,
        next: null
      }, t = _e.updateQueue, t === null && (t = Ts(), _e.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function di() {
      return { destroy: void 0, resource: void 0 };
    }
    function wf(e) {
      var t = Vt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Xa(e, t, a, i) {
      var o = Vt();
      i = i === void 0 ? null : i, _e.flags |= e, o.memoizedState = Yn(
        ru | t,
        di(),
        a,
        i
      );
    }
    function cl(e, t, a, i) {
      var o = lt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Mt !== null && i !== null && fi(i, Mt.memoizedState.deps) ? o.memoizedState = Yn(t, f, a, i) : (_e.flags |= e, o.memoizedState = Yn(
        ru | t,
        f,
        a,
        i
      ));
    }
    function As(e, t) {
      (_e.mode & Xu) !== Yt && (_e.mode & Q0) === Yt ? Xa(276826112, Bl, e, t) : Xa(8390656, Bl, e, t);
    }
    function Os(e, t) {
      var a = 4194308;
      return (_e.mode & Xu) !== Yt && (a |= 134217728), Xa(a, Pl, e, t);
    }
    function jp(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Ds(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (_e.mode & Xu) !== Yt && (i |= 134217728), Xa(
        i,
        Pl,
        jp.bind(null, t, e),
        a
      );
    }
    function qn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, cl(
        4,
        Pl,
        jp.bind(null, t, e),
        a
      );
    }
    function jf(e, t) {
      return Vt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ic(e, t) {
      var a = lt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && fi(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function zs(e, t) {
      var a = Vt();
      t = t === void 0 ? null : t;
      var i = e();
      if (jr) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function hi(e, t) {
      var a = lt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && fi(t, i[1]))
        return i[0];
      if (i = e(), jr) {
        ue(!0);
        try {
          e();
        } finally {
          ue(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Ms(e, t) {
      var a = Vt();
      return Cs(a, e, t);
    }
    function Gf(e, t) {
      var a = lt();
      return Lf(
        a,
        Mt.memoizedState,
        e,
        t
      );
    }
    function Us(e, t) {
      var a = lt();
      return Mt === null ? Cs(a, e, t) : Lf(
        a,
        Mt.memoizedState,
        e,
        t
      );
    }
    function Cs(e, t, a) {
      return a === void 0 || (Io & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = $p(), _e.lanes |= e, tf |= e, a);
    }
    function Lf(e, t, a, i) {
      return Ca(a, t) ? a : ah.current !== null ? (e = Cs(e, a, i), Ca(e, t) || (Xl = !0), e) : (Io & 42) === 0 ? (Xl = !0, e.memoizedState = a) : (e = $p(), _e.lanes |= e, tf |= e, t);
    }
    function ay(e, t, a, i, o) {
      var f = Oe.p;
      Oe.p = f !== 0 && f < bn ? f : bn;
      var d = q.T, h = {};
      q.T = h, xs(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var v = o(), b = q.S;
        if (b !== null && b(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
          var B = Bp(
            v,
            i
          );
          zu(
            e,
            t,
            B,
            ra(e)
          );
        } else
          zu(
            e,
            t,
            i,
            ra(e)
          );
      } catch (j) {
        zu(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: j },
          ra(e)
        );
      } finally {
        Oe.p = f, q.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function cc(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = ny(e).queue;
      ay(
        e,
        o,
        t,
        Wr,
        a === null ? oe : function() {
          return uy(e), a(i);
        }
      );
    }
    function ny(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Wr,
        baseState: Wr,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ot,
          lastRenderedState: Wr
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ot,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function uy(e) {
      q.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = ny(e).next.queue;
      zu(
        e,
        t,
        {},
        ra(e)
      );
    }
    function wn() {
      var e = Bf(!1);
      return e = ay.bind(
        null,
        _e,
        e.queue,
        !0,
        !1
      ), Vt().memoizedState = e, [!1, e];
    }
    function _s() {
      var e = La(ot)[0], t = lt().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function Hs() {
      var e = uc(ot)[0], t = lt().memoizedState;
      return [
        typeof e == "boolean" ? e : nc(e),
        t
      ];
    }
    function ca() {
      return Ct(cp);
    }
    function jn() {
      var e = Vt(), t = _t.identifierPrefix;
      if (st) {
        var a = Bc, i = Nc;
        a = (i & ~(1 << 32 - Ll(i) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Yv++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = RS++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function oc() {
      return Vt().memoizedState = iy.bind(
        null,
        _e
      );
    }
    function iy(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = ra(a);
            e = Hn(i);
            var o = rn(a, e, i);
            o !== null && (Qt(o, a, i), oi(o, a, i)), a = Cf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function cy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e);
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Vf(e) ? fc(t, o) : (o = Bh(e, t, o, i), o !== null && (Qt(o, e, i), Xf(o, t, i))), An(e, i);
    }
    function po(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = ra(e), zu(e, t, a, i), An(e, i);
    }
    function zu(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Vf(e)) fc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = q.H;
          q.H = Zu;
          try {
            var h = t.lastRenderedState, v = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = v, Ca(v, h))
              return hs(e, t, o, 0), _t === null && Of(), !1;
          } catch {
          } finally {
            q.H = d;
          }
        }
        if (a = Bh(e, t, o, i), a !== null)
          return Qt(a, e, i), Xf(a, t, i), !0;
      }
      return !1;
    }
    function xs(e, t, a, i) {
      if (q.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: wy(),
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Vf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Bh(
          e,
          a,
          i,
          2
        ), t !== null && Qt(t, e, 2);
      An(e, 2);
    }
    function Vf(e) {
      var t = e.alternate;
      return e === _e || t !== null && t === _e;
    }
    function fc(e, t) {
      uh = Bv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Xf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, $u(e, a);
      }
    }
    function pl(e) {
      var t = Ke;
      return e != null && (Ke = t === null ? e : t.concat(e)), t;
    }
    function vo(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Mf(e, a.mode, 0), t._debugInfo = Ke, t.return = a), se(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function go(e) {
      var t = Zm;
      return Zm += 1, ih === null && (ih = Wh()), wa(ih, e, t);
    }
    function Qa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Be(e, t) {
      throw t.$$typeof === br ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function yt(e, t) {
      var a = re(e) || "Component";
      R1[a] || (R1[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function Gt(e, t) {
      var a = re(e) || "Component";
      A1[a] || (A1[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Qf(e) {
      function t(T, E) {
        if (e) {
          var R = T.deletions;
          R === null ? (T.deletions = [E], T.flags |= 16) : R.push(E);
        }
      }
      function a(T, E) {
        if (!e) return null;
        for (; E !== null; )
          t(T, E), E = E.sibling;
        return null;
      }
      function i(T) {
        for (var E = /* @__PURE__ */ new Map(); T !== null; )
          T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
        return E;
      }
      function o(T, E) {
        return T = Mn(T, E), T.index = 0, T.sibling = null, T;
      }
      function f(T, E, R) {
        return T.index = R, e ? (R = T.alternate, R !== null ? (R = R.index, R < E ? (T.flags |= 67108866, E) : R) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
      }
      function d(T) {
        return e && T.alternate === null && (T.flags |= 67108866), T;
      }
      function h(T, E, R, V) {
        return E === null || E.tag !== 6 ? (E = li(
          R,
          T.mode,
          V
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ke, E) : (E = o(E, R), E.return = T, E._debugInfo = Ke, E);
      }
      function v(T, E, R, V) {
        var le = R.type;
        return le === Ye ? (E = B(
          T,
          E,
          R.props.children,
          V,
          R.key
        ), vo(R, E, T), E) : E !== null && (E.elementType === le || _p(E, R) || typeof le == "object" && le !== null && le.$$typeof === Ma && Po(le) === E.type) ? (E = o(E, R.props), Qa(E, R), E.return = T, E._debugOwner = R._owner, E._debugInfo = Ke, E) : (E = Mf(R, T.mode, V), Qa(E, R), E.return = T, E._debugInfo = Ke, E);
      }
      function b(T, E, R, V) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== R.containerInfo || E.stateNode.implementation !== R.implementation ? (E = jh(R, T.mode, V), E.return = T, E._debugInfo = Ke, E) : (E = o(E, R.children || []), E.return = T, E._debugInfo = Ke, E);
      }
      function B(T, E, R, V, le) {
        return E === null || E.tag !== 7 ? (E = ti(
          R,
          T.mode,
          V,
          le
        ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ke, E) : (E = o(E, R), E.return = T, E._debugInfo = Ke, E);
      }
      function j(T, E, R) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = li(
            "" + E,
            T.mode,
            R
          ), E.return = T, E._debugOwner = T, E._debugTask = T._debugTask, E._debugInfo = Ke, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Di:
              return R = Mf(
                E,
                T.mode,
                R
              ), Qa(R, E), R.return = T, T = pl(E._debugInfo), R._debugInfo = Ke, Ke = T, R;
            case Mc:
              return E = jh(
                E,
                T.mode,
                R
              ), E.return = T, E._debugInfo = Ke, E;
            case Ma:
              var V = pl(E._debugInfo);
              return E = Po(E), T = j(T, E, R), Ke = V, T;
          }
          if (Ce(E) || Rt(E))
            return R = ti(
              E,
              T.mode,
              R,
              null
            ), R.return = T, R._debugOwner = T, R._debugTask = T._debugTask, T = pl(E._debugInfo), R._debugInfo = Ke, Ke = T, R;
          if (typeof E.then == "function")
            return V = pl(E._debugInfo), T = j(
              T,
              go(E),
              R
            ), Ke = V, T;
          if (E.$$typeof === $a)
            return j(
              T,
              Uf(T, E),
              R
            );
          Be(T, E);
        }
        return typeof E == "function" && yt(T, E), typeof E == "symbol" && Gt(T, E), null;
      }
      function H(T, E, R, V) {
        var le = E !== null ? E.key : null;
        if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
          return le !== null ? null : h(T, E, "" + R, V);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case Di:
              return R.key === le ? (le = pl(R._debugInfo), T = v(
                T,
                E,
                R,
                V
              ), Ke = le, T) : null;
            case Mc:
              return R.key === le ? b(T, E, R, V) : null;
            case Ma:
              return le = pl(R._debugInfo), R = Po(R), T = H(
                T,
                E,
                R,
                V
              ), Ke = le, T;
          }
          if (Ce(R) || Rt(R))
            return le !== null ? null : (le = pl(R._debugInfo), T = B(
              T,
              E,
              R,
              V,
              null
            ), Ke = le, T);
          if (typeof R.then == "function")
            return le = pl(R._debugInfo), T = H(
              T,
              E,
              go(R),
              V
            ), Ke = le, T;
          if (R.$$typeof === $a)
            return H(
              T,
              E,
              Uf(T, R),
              V
            );
          Be(T, R);
        }
        return typeof R == "function" && yt(T, R), typeof R == "symbol" && Gt(T, R), null;
      }
      function L(T, E, R, V, le) {
        if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
          return T = T.get(R) || null, h(E, T, "" + V, le);
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case Di:
              return R = T.get(
                V.key === null ? R : V.key
              ) || null, T = pl(V._debugInfo), E = v(
                E,
                R,
                V,
                le
              ), Ke = T, E;
            case Mc:
              return T = T.get(
                V.key === null ? R : V.key
              ) || null, b(E, T, V, le);
            case Ma:
              var qe = pl(V._debugInfo);
              return V = Po(V), E = L(
                T,
                E,
                R,
                V,
                le
              ), Ke = qe, E;
          }
          if (Ce(V) || Rt(V))
            return R = T.get(R) || null, T = pl(V._debugInfo), E = B(
              E,
              R,
              V,
              le,
              null
            ), Ke = T, E;
          if (typeof V.then == "function")
            return qe = pl(V._debugInfo), E = L(
              T,
              E,
              R,
              go(V),
              le
            ), Ke = qe, E;
          if (V.$$typeof === $a)
            return L(
              T,
              E,
              R,
              Uf(E, V),
              le
            );
          Be(E, V);
        }
        return typeof V == "function" && yt(E, V), typeof V == "symbol" && Gt(E, V), null;
      }
      function de(T, E, R, V) {
        if (typeof R != "object" || R === null) return V;
        switch (R.$$typeof) {
          case Di:
          case Mc:
            bt(T, E, R);
            var le = R.key;
            if (typeof le != "string") break;
            if (V === null) {
              V = /* @__PURE__ */ new Set(), V.add(le);
              break;
            }
            if (!V.has(le)) {
              V.add(le);
              break;
            }
            se(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                le
              );
            });
            break;
          case Ma:
            R = Po(R), de(T, E, R, V);
        }
        return V;
      }
      function De(T, E, R, V) {
        for (var le = null, qe = null, he = null, we = E, Ge = E = 0, qt = null; we !== null && Ge < R.length; Ge++) {
          we.index > Ge ? (qt = we, we = null) : qt = we.sibling;
          var sl = H(
            T,
            we,
            R[Ge],
            V
          );
          if (sl === null) {
            we === null && (we = qt);
            break;
          }
          le = de(
            T,
            sl,
            R[Ge],
            le
          ), e && we && sl.alternate === null && t(T, we), E = f(sl, E, Ge), he === null ? qe = sl : he.sibling = sl, he = sl, we = qt;
        }
        if (Ge === R.length)
          return a(T, we), st && Ii(T, Ge), qe;
        if (we === null) {
          for (; Ge < R.length; Ge++)
            we = j(T, R[Ge], V), we !== null && (le = de(
              T,
              we,
              R[Ge],
              le
            ), E = f(
              we,
              E,
              Ge
            ), he === null ? qe = we : he.sibling = we, he = we);
          return st && Ii(T, Ge), qe;
        }
        for (we = i(we); Ge < R.length; Ge++)
          qt = L(
            we,
            T,
            Ge,
            R[Ge],
            V
          ), qt !== null && (le = de(
            T,
            qt,
            R[Ge],
            le
          ), e && qt.alternate !== null && we.delete(
            qt.key === null ? Ge : qt.key
          ), E = f(
            qt,
            E,
            Ge
          ), he === null ? qe = qt : he.sibling = qt, he = qt);
        return e && we.forEach(function(Qc) {
          return t(T, Qc);
        }), st && Ii(T, Ge), qe;
      }
      function Ht(T, E, R, V) {
        if (R == null)
          throw Error("An iterable object provided no iterator.");
        for (var le = null, qe = null, he = E, we = E = 0, Ge = null, qt = null, sl = R.next(); he !== null && !sl.done; we++, sl = R.next()) {
          he.index > we ? (Ge = he, he = null) : Ge = he.sibling;
          var Qc = H(T, he, sl.value, V);
          if (Qc === null) {
            he === null && (he = Ge);
            break;
          }
          qt = de(
            T,
            Qc,
            sl.value,
            qt
          ), e && he && Qc.alternate === null && t(T, he), E = f(Qc, E, we), qe === null ? le = Qc : qe.sibling = Qc, qe = Qc, he = Ge;
        }
        if (sl.done)
          return a(T, he), st && Ii(T, we), le;
        if (he === null) {
          for (; !sl.done; we++, sl = R.next())
            he = j(T, sl.value, V), he !== null && (qt = de(
              T,
              he,
              sl.value,
              qt
            ), E = f(
              he,
              E,
              we
            ), qe === null ? le = he : qe.sibling = he, qe = he);
          return st && Ii(T, we), le;
        }
        for (he = i(he); !sl.done; we++, sl = R.next())
          Ge = L(
            he,
            T,
            we,
            sl.value,
            V
          ), Ge !== null && (qt = de(
            T,
            Ge,
            sl.value,
            qt
          ), e && Ge.alternate !== null && he.delete(
            Ge.key === null ? we : Ge.key
          ), E = f(
            Ge,
            E,
            we
          ), qe === null ? le = Ge : qe.sibling = Ge, qe = Ge);
        return e && he.forEach(function(WS) {
          return t(T, WS);
        }), st && Ii(T, we), le;
      }
      function at(T, E, R, V) {
        if (typeof R == "object" && R !== null && R.type === Ye && R.key === null && (vo(R, null, T), R = R.props.children), typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case Di:
              var le = pl(R._debugInfo);
              e: {
                for (var qe = R.key; E !== null; ) {
                  if (E.key === qe) {
                    if (qe = R.type, qe === Ye) {
                      if (E.tag === 7) {
                        a(
                          T,
                          E.sibling
                        ), V = o(
                          E,
                          R.props.children
                        ), V.return = T, V._debugOwner = R._owner, V._debugInfo = Ke, vo(R, V, T), T = V;
                        break e;
                      }
                    } else if (E.elementType === qe || _p(
                      E,
                      R
                    ) || typeof qe == "object" && qe !== null && qe.$$typeof === Ma && Po(qe) === E.type) {
                      a(
                        T,
                        E.sibling
                      ), V = o(E, R.props), Qa(V, R), V.return = T, V._debugOwner = R._owner, V._debugInfo = Ke, T = V;
                      break e;
                    }
                    a(T, E);
                    break;
                  } else t(T, E);
                  E = E.sibling;
                }
                R.type === Ye ? (V = ti(
                  R.props.children,
                  T.mode,
                  V,
                  R.key
                ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = Ke, vo(R, V, T), T = V) : (V = Mf(
                  R,
                  T.mode,
                  V
                ), Qa(V, R), V.return = T, V._debugInfo = Ke, T = V);
              }
              return T = d(T), Ke = le, T;
            case Mc:
              e: {
                for (le = R, R = le.key; E !== null; ) {
                  if (E.key === R)
                    if (E.tag === 4 && E.stateNode.containerInfo === le.containerInfo && E.stateNode.implementation === le.implementation) {
                      a(
                        T,
                        E.sibling
                      ), V = o(
                        E,
                        le.children || []
                      ), V.return = T, T = V;
                      break e;
                    } else {
                      a(T, E);
                      break;
                    }
                  else t(T, E);
                  E = E.sibling;
                }
                V = jh(
                  le,
                  T.mode,
                  V
                ), V.return = T, T = V;
              }
              return d(T);
            case Ma:
              return le = pl(R._debugInfo), R = Po(R), T = at(
                T,
                E,
                R,
                V
              ), Ke = le, T;
          }
          if (Ce(R))
            return le = pl(R._debugInfo), T = De(
              T,
              E,
              R,
              V
            ), Ke = le, T;
          if (Rt(R)) {
            if (le = pl(R._debugInfo), qe = Rt(R), typeof qe != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var he = qe.call(R);
            return he === R ? (T.tag !== 0 || Object.prototype.toString.call(T.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(he) !== "[object Generator]") && (T1 || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), T1 = !0) : R.entries !== qe || Fg || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Fg = !0), T = Ht(
              T,
              E,
              he,
              V
            ), Ke = le, T;
          }
          if (typeof R.then == "function")
            return le = pl(R._debugInfo), T = at(
              T,
              E,
              go(R),
              V
            ), Ke = le, T;
          if (R.$$typeof === $a)
            return at(
              T,
              E,
              Uf(T, R),
              V
            );
          Be(T, R);
        }
        return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (le = "" + R, E !== null && E.tag === 6 ? (a(
          T,
          E.sibling
        ), V = o(E, le), V.return = T, T = V) : (a(T, E), V = li(
          le,
          T.mode,
          V
        ), V.return = T, V._debugOwner = T, V._debugTask = T._debugTask, V._debugInfo = Ke, T = V), d(T)) : (typeof R == "function" && yt(T, R), typeof R == "symbol" && Gt(T, R), a(T, E));
      }
      return function(T, E, R, V) {
        var le = Ke;
        Ke = null;
        try {
          Zm = 0;
          var qe = at(
            T,
            E,
            R,
            V
          );
          return ih = null, qe;
        } catch (qt) {
          if (qt === Lm || qt === Hv) throw qt;
          var he = M(29, qt, null, T.mode);
          he.lanes = V, he.return = T;
          var we = he._debugInfo = Ke;
          if (he._debugOwner = T._debugOwner, he._debugTask = T._debugTask, we != null) {
            for (var Ge = we.length - 1; 0 <= Ge; Ge--)
              if (typeof we[Ge].stack == "string") {
                he._debugOwner = we[Ge], he._debugTask = we[Ge].debugTask;
                break;
              }
          }
          return he;
        } finally {
          Ke = le;
        }
      };
    }
    function Ra(e) {
      var t = e.alternate;
      Re(
        Yl,
        Yl.current & oh,
        e
      ), Re(du, e, e), qi === null && (t === null || ah.current !== null || t.memoizedState !== null) && (qi = e);
    }
    function yi(e) {
      if (e.tag === 22) {
        if (Re(Yl, Yl.current, e), Re(du, e, e), qi === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (qi = e);
        }
      } else yn(e);
    }
    function yn(e) {
      Re(Yl, Yl.current, e), Re(
        du,
        du.current,
        e
      );
    }
    function Aa(e) {
      ve(du, e), qi === e && (qi = null), ve(Yl, e);
    }
    function Mu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Lc || In(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function oy(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Y1.has(t) || (Y1.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Lt(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & va) {
        ue(!0);
        try {
          f = a(i, o);
        } finally {
          ue(!1);
        }
      }
      f === void 0 && (t = ke(t) || "Component", H1.has(t) || (H1.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Xe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Ns(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & va) {
          ue(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ue(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ke(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Af(a, i) || !Af(o, f) : !0;
    }
    function Bs(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = re(e) || "Component", z1.has(e) || (z1.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Ig.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function mi(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Xe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function fy(e) {
      Pg(e), console.warn(
        `%s

%s
`,
        fh ? "An error occurred in the <" + fh + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Gp(e) {
      var t = fh ? "The above error occurred in the <" + fh + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((e0 || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          yb + e[0],
          mb,
          lg + i + lg,
          pb
        ) : e.splice(
          0,
          0,
          yb,
          mb,
          lg + i + lg,
          pb
        ), e.unshift(console), i = kS.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Ys(e) {
      Pg(e);
    }
    function bo(e, t) {
      try {
        fh = t.source ? re(t.source) : null, e0 = null;
        var a = t.value;
        if (q.actQueue !== null)
          q.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function qs(e, t, a) {
      try {
        fh = a.source ? re(a.source) : null, e0 = re(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function wl(e, t, a) {
      return a = Hn(a), a.tag = Xg, a.payload = { element: null }, a.callback = function() {
        se(t.source, bo, e, t);
      }, a;
    }
    function Xt(e) {
      return e = Hn(e), e.tag = Xg, e;
    }
    function Zf(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Hp(a), se(
            i.source,
            qs,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Hp(a), se(
          i.source,
          qs,
          t,
          a,
          i
        ), typeof o != "function" && (af === null ? af = /* @__PURE__ */ new Set([this]) : af.add(this)), OS(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          re(a) || "Unknown"
        );
      });
    }
    function Kf(e, t, a, i, o) {
      if (a.flags |= 32768, $t && zo(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && zl(
          t,
          a,
          o,
          !0
        ), st && (Yc = !0), a = du.current, a !== null) {
          switch (a.tag) {
            case 13:
              return qi === null ? ad() : a.alternate === null && ll === Gc && (ll = n0), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === Vg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ny(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === Vg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ny(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Ny(e, i, o), ad(), !1;
      }
      if (st)
        return Yc = !0, t = du.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== wg && lo(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== wg && lo(
          Ta(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Ta(i, a), o = wl(
          e.stateNode,
          i,
          o
        ), no(e, o), ll !== Gr && (ll = hh)), !1;
      var f = Ta(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (Pm === null ? Pm = [f] : Pm.push(f), ll !== Gr && (ll = hh), t === null) return !0;
      i = Ta(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = wl(
              a.stateNode,
              i,
              e
            ), no(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (af === null || !af.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Xt(o), Zf(
                o,
                e,
                a,
                i
              ), no(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function el(e, t, a, i) {
      t.child = e === null ? O1(t, null, a, i) : ch(
        t,
        e.child,
        a,
        i
      );
    }
    function ws(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return ui(t), xt(t), i = ri(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = ia(), ta(), e !== null && !Xl ? (Ru(e, t, o), Ln(e, t, o)) : (st && h && ps(t), t.flags |= 1, el(e, t, i, o), t.child);
    }
    function Gn(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !qh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Fi(f), t.tag = 15, t.type = a, Vs(t, f), Jf(
          e,
          t,
          a,
          i,
          o
        )) : (e = ms(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !ks(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Af, a(d, i) && e.ref === t.ref)
          return Ln(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Mn(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Jf(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Af(f, i) && e.ref === t.ref && t.type === e.type)
          if (Xl = !1, t.pendingProps = i = f, ks(e, o))
            (e.flags & 131072) !== 0 && (Xl = !0);
          else
            return t.lanes = e.lanes, Ln(e, t, o);
      }
      return Ls(
        e,
        t,
        a,
        i,
        o
      );
    }
    function js(e, t, a) {
      var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (i = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~i;
          } else t.childLanes = 0, t.child = null;
          return Gs(
            e,
            t,
            i,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ss(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? ua(t, f) : Hf(t), yi(t);
        else
          return t.lanes = t.childLanes = 536870912, Gs(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (Ss(t, f.cachePool), ua(t, f), yn(t), t.memoizedState = null) : (e !== null && Ss(t, null), Hf(t), yn(t));
      return el(e, t, o, a), t.child;
    }
    function Gs(e, t, a, i) {
      var o = $h();
      return o = o === null ? null : {
        parent: Nl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && Ss(t, null), Hf(t), yi(t), e !== null && zl(e, t, i, !0), null;
    }
    function kf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Ls(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = ke(a) || "Unknown";
        w1[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), w1[f] = !0);
      }
      return t.mode & va && Qu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Vs(t, t.type), a.contextTypes && (f = ke(a) || "Unknown", G1[f] || (G1[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), ui(t), xt(t), a = ri(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = ia(), ta(), e !== null && !Xl ? (Ru(e, t, o), Ln(e, t, o)) : (st && i && ps(t), t.flags |= 1, el(e, t, a, o), t.child);
    }
    function ry(e, t, a, i, o, f) {
      return ui(t), xt(t), wc = -1, Qm = e !== null && e.type !== t.type, t.updateQueue = null, a = oo(
        t,
        i,
        a,
        o
      ), xf(e, t), i = ia(), ta(), e !== null && !Xl ? (Ru(e, t, f), Ln(e, t, f)) : (st && i && ps(t), t.flags |= 1, el(e, t, a, f), t.child);
    }
    function sy(e, t, a, i, o) {
      switch (dt(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = _t, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Xt(h), Zf(
            h,
            d,
            t,
            Ta(f, t)
          ), no(t, h);
      }
      if (ui(t), t.stateNode === null) {
        if (d = Wo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== $a) && !B1.has(a) && (B1.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Cd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ke(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Ct(f)), f = new a(i, d), t.mode & va) {
          ue(!0);
          try {
            f = new a(i, d);
          } finally {
            ue(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Ig, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = D1, typeof a.getDerivedStateFromProps == "function" && d === null && (d = ke(a) || "Component", M1.has(d) || (M1.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var v = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? v = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (v = "UNSAFE_componentWillUpdate"), d !== null || h !== null || v !== null) {
            f = ke(a) || "Component";
            var b = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            C1.has(f) || (C1.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              b,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              v !== null ? `
  ` + v : ""
            ));
          }
        }
        f = t.stateNode, d = ke(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !N1.has(a) && (N1.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !x1.has(a) && (x1.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ke(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || U1.has(a) || (U1.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          ke(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Ce(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, na(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Ct(d) : Wo, f.state === i && (d = ke(a) || "Component", _1.has(d) || (_1.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & va && Qu.recordLegacyContextWarning(
          t,
          f
        ), Qu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Lt(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          re(t) || "Component"
        ), Ig.enqueueReplaceState(
          f,
          f.state,
          null
        )), uo(t, i, f, o), xn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var B = t.memoizedProps;
        h = mi(a, B), f.props = h;
        var j = f.context;
        v = a.contextType, d = Wo, typeof v == "object" && v !== null && (d = Ct(v)), b = a.getDerivedStateFromProps, v = typeof b == "function" || typeof f.getSnapshotBeforeUpdate == "function", B = t.pendingProps !== B, v || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (B || j !== d) && Bs(
          t,
          f,
          i,
          d
        ), Fo = !1;
        var H = t.memoizedState;
        f.state = H, uo(t, i, f, o), xn(), j = t.memoizedState, B || H !== j || Fo ? (typeof b == "function" && (Lt(
          t,
          a,
          b,
          i
        ), j = t.memoizedState), (h = Fo || Ns(
          t,
          a,
          h,
          i,
          H,
          j,
          d
        )) ? (v || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = j), f.props = i, f.state = j, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xu) !== Yt && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, ci(e, t), d = t.memoizedProps, v = mi(a, d), f.props = v, b = t.pendingProps, H = f.context, j = a.contextType, h = Wo, typeof j == "object" && j !== null && (h = Ct(j)), B = a.getDerivedStateFromProps, (j = typeof B == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== b || H !== h) && Bs(
          t,
          f,
          i,
          h
        ), Fo = !1, H = t.memoizedState, f.state = H, uo(t, i, f, o), xn();
        var L = t.memoizedState;
        d !== b || H !== L || Fo || e !== null && e.dependencies !== null && ni(e.dependencies) ? (typeof B == "function" && (Lt(
          t,
          a,
          B,
          i
        ), L = t.memoizedState), (v = Fo || Ns(
          t,
          a,
          v,
          i,
          H,
          L,
          h
        ) || e !== null && e.dependencies !== null && ni(e.dependencies)) ? (j || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, L, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          L,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = L), f.props = i, f.state = L, f.context = h, f = v) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && H === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, kf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, yf(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, Ia = -1;
        else {
          if (xt(t), a = s1(h), t.mode & va) {
            ue(!0);
            try {
              s1(h);
            } finally {
              ue(!1);
            }
          }
          ta();
        }
        t.flags |= 1, e !== null && d ? (t.child = ch(
          t,
          e.child,
          null,
          o
        ), t.child = ch(
          t,
          null,
          a,
          o
        )) : el(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Ln(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (rh || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        re(t) || "a component"
      ), rh = !0), e;
    }
    function dy(e, t, a, i) {
      return ec(), t.flags |= 256, el(e, t, a, i), t.child;
    }
    function Vs(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = ke(t) || "Unknown", L1[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), L1[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ke(t) || "Unknown", j1[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), j1[t] = !0));
    }
    function $f(e) {
      return { baseLanes: e, cachePool: Yp() };
    }
    function Xs(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= En), e;
    }
    function Lp(e, t, a) {
      var i, o = t.pendingProps;
      Me(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Yl.current & Km) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (st) {
          if (f ? Ra(t) : yn(t), st) {
            var h = tl, v;
            if (!(v = !h)) {
              e: {
                var b = h;
                for (v = Bi; b.nodeType !== 8; ) {
                  if (!v) {
                    v = null;
                    break e;
                  }
                  if (b = _l(b.nextSibling), b === null) {
                    v = null;
                    break e;
                  }
                }
                v = b;
              }
              v !== null ? (un(), t.memoizedState = {
                dehydrated: v,
                treeContext: xr !== null ? { id: Nc, overflow: Bc } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, b = M(18, null, null, Yt), b.stateNode = v, b.return = t, t.child = b, _a = t, tl = null, v = !0) : v = !1, v = !v;
            }
            v && (Gh(
              t,
              h
            ), Un(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return In(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          Aa(t);
        }
        return h = o.children, o = o.fallback, f ? (yn(t), f = t.mode, h = Wf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = ti(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = $f(a), f.childLanes = Xs(
          e,
          i,
          a
        ), t.memoizedState = l0, o) : (Ra(t), Qs(
          t,
          h
        ));
      }
      var B = e.memoizedState;
      if (B !== null && (h = B.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (Ra(t), t.flags &= -257, t = Zs(
            e,
            t,
            a
          )) : t.memoizedState !== null ? (yn(t), t.child = e.child, t.flags |= 128, t = null) : (yn(t), f = o.fallback, h = t.mode, o = Wf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = ti(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, ch(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = $f(a), o.childLanes = Xs(
            e,
            i,
            a
          ), t.memoizedState = l0, t = f);
        else if (Ra(t), st && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), In(h)) {
          if (i = h.nextSibling && h.nextSibling.dataset, i) {
            v = i.dgst;
            var j = i.msg;
            b = i.stck;
            var H = i.cstck;
          }
          h = j, i = v, o = b, v = f = H, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = i, i = v === void 0 ? null : v, o = {
            value: f,
            source: null,
            stack: i
          }, typeof i == "string" && Yg.set(
            f,
            o
          ), lo(o), t = Zs(
            e,
            t,
            a
          );
        } else if (Xl || zl(
          e,
          t,
          a,
          !1
        ), i = (a & e.childLanes) !== 0, Xl || i) {
          if (i = _t, i !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : El(
            o
          ), o = (o & (i.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== B.retryLane))
            throw B.retryLane = o, aa(
              e,
              o
            ), Qt(
              i,
              e,
              o
            ), q1;
          h.data === Lc || ad(), t = Zs(
            e,
            t,
            a
          );
        } else
          h.data === Lc ? (t.flags |= 192, t.child = e.child, t = null) : (e = B.treeContext, tl = _l(
            h.nextSibling
          ), _a = t, st = !0, Nr = null, Yc = !1, ou = null, Bi = !1, e !== null && (un(), iu[cu++] = Nc, iu[cu++] = Bc, iu[cu++] = xr, Nc = e.id, Bc = e.overflow, xr = t), t = Qs(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? (yn(t), f = o.fallback, h = t.mode, v = e.child, b = v.sibling, o = Mn(
        v,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = v.subtreeFlags & 65011712, b !== null ? f = Mn(
        b,
        f
      ) : (f = ti(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = $f(a) : (v = h.cachePool, v !== null ? (b = Nl._currentValue, v = v.parent !== b ? { parent: b, pool: b } : v) : v = Yp(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: v
      }), f.memoizedState = h, f.childLanes = Xs(
        e,
        i,
        a
      ), t.memoizedState = l0, o) : (Ra(t), a = e.child, e = a.sibling, a = Mn(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function Qs(e, t) {
      return t = Wf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Wf(e, t) {
      return e = M(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: Av,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Zs(e, t, a) {
      return ch(t, e.child, null, a), e = Qs(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Ks(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Zh(
        e.return,
        t,
        a
      );
    }
    function hy(e, t) {
      var a = Ce(e);
      return e = !a && typeof Rt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Js(e, t, a, i, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = o);
    }
    function yy(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail;
      if (i = i.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !V1[o])
        if (V1[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || t0[f] || (f !== "collapsed" && f !== "hidden" ? (t0[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && (t0[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && i !== void 0 && i !== null && i !== !1)
        if (Ce(i)) {
          for (var d = 0; d < i.length; d++)
            if (!hy(i[d], d)) break e;
        } else if (d = Rt(i), typeof d == "function") {
          if (d = d.call(i))
            for (var h = d.next(), v = 0; !h.done; h = d.next()) {
              if (!hy(h.value, v)) break e;
              v++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (el(e, t, i, a), i = Yl.current, (i & Km) !== 0)
        i = i & oh | Km, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Ks(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Ks(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        i &= oh;
      }
      switch (Re(Yl, i, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Mu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Js(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Mu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Js(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Js(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Ln(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), Ia = -1, tf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (zl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Mn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Mn(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function ks(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ni(e)));
    }
    function vg(e, t, a) {
      switch (t.tag) {
        case 3:
          wt(
            t,
            t.stateNode.containerInfo
          ), ai(
            t,
            Nl,
            e.memoizedState.cache
          ), ec();
          break;
        case 27:
        case 5:
          J(t);
          break;
        case 4:
          wt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          ai(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Ra(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Lp(
              e,
              t,
              a
            ) : (Ra(t), e = Ln(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Ra(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (zl(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return yy(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Re(
            Yl,
            Yl.current,
            t
          ), i) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, js(e, t, a);
        case 24:
          ai(
            t,
            Nl,
            e.memoizedState.cache
          );
      }
      return Ln(e, t, a);
    }
    function $s(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = ms(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Xl = !0;
        else {
          if (!ks(e, a) && (t.flags & 128) === 0)
            return Xl = !1, vg(
              e,
              t,
              a
            );
          Xl = (e.flags & 131072) !== 0;
        }
      else
        Xl = !1, (i = st) && (un(), i = (t.flags & 1048576) !== 0), i && (i = t.index, un(), xp(t, Dv, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Po(t.elementType), t.type = e, typeof e == "function")
            qh(e) ? (i = mi(
              e,
              i
            ), t.tag = 1, t.type = e = Fi(e), t = sy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, Vs(t, e), t.type = e = Fi(e), t = Ls(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Yu) {
                t.tag = 11, t.type = e = Yh(e), t = ws(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Sr) {
                t.tag = 14, t = Gn(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === Ma && (t = " Did you wrap a component in React.lazy() more than once?"), e = ke(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Ls(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = mi(
            i,
            t.pendingProps
          ), sy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (wt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, ci(e, t), uo(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, ai(t, Nl, i), i !== f.cache && Kh(
              t,
              [Nl],
              a,
              !0
            ), xn(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = dy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Ta(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), lo(o), t = dy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (tl = _l(e.firstChild), _a = t, st = !0, Nr = null, Yc = !1, ou = null, Bi = !0, e = O1(
                  t,
                  null,
                  i,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (ec(), i === o) {
                t = Ln(
                  e,
                  t,
                  a
                );
                break e;
              }
              el(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return kf(e, t), e === null ? (e = Bu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : st || (e = t.type, a = t.pendingProps, i = zt(
            eu.current
          ), i = Ie(
            i
          ).createElement(e), i[Vl] = t, i[ma] = a, Kt(i, e, a), D(i), t.stateNode = i) : t.memoizedState = Bu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return J(t), e === null && st && (i = zt(eu.current), o = O(), i = t.stateNode = Py(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Yc || (o = Ot(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (cn(t, 0).serverProps = o)), _a = t, Bi = !0, o = tl, Fn(t.type) ? (O0 = o, tl = _l(
            i.firstChild
          )) : tl = o), el(
            e,
            t,
            t.pendingProps.children,
            a
          ), kf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && st && (f = O(), i = is(
            t.type,
            f.ancestorInfo
          ), o = tl, (d = !o) || (d = Ei(
            o,
            t.type,
            t.pendingProps,
            Bi
          ), d !== null ? (t.stateNode = d, Yc || (f = Ot(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (cn(t, 0).serverProps = f)), _a = t, tl = _l(
            d.firstChild
          ), Bi = !1, f = !0) : f = !1, d = !f), d && (i && Gh(t, o), Un(t))), J(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Wn(o, f) ? i = null : d !== null && Wn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ri(
            e,
            t,
            Ga,
            null,
            null,
            a
          ), cp._currentValue = o), kf(e, t), el(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && st && (e = t.pendingProps, a = O(), i = a.ancestorInfo.current, e = i != null ? Sf(
            e,
            i.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = tl, (i = !a) || (i = Cl(
            a,
            t.pendingProps,
            Bi
          ), i !== null ? (t.stateNode = i, _a = t, tl = null, i = !0) : i = !1, i = !i), i && (e && Gh(t, a), Un(t))), null;
        case 13:
          return Lp(e, t, a);
        case 4:
          return wt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = ch(
            t,
            null,
            i,
            a
          ) : el(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return ws(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return el(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return el(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, el(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || X1 || (X1 = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), ai(t, i, f), el(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), ui(t), o = Ct(o), xt(t), i = $g(
            i,
            o,
            void 0
          ), ta(), t.flags |= 1, el(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return Gn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Jf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return yy(
            e,
            t,
            a
          );
        case 31:
          return i = t.pendingProps, a = t.mode, i = {
            mode: i.mode,
            children: i.children
          }, e === null ? (e = Wf(
            i,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Mn(e.child, i), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return js(e, t, a);
        case 24:
          return ui(t), i = Ct(Nl), e === null ? (o = $h(), o === null && (o = _t, f = Cf(), o.pooledCache = f, tc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, na(t), ai(t, Nl, o)) : ((e.lanes & a) !== 0 && (ci(e, t), uo(t, null, null, a), xn()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ai(t, Nl, i)) : (i = f.cache, ai(t, Nl, i), i !== o.cache && Kh(
            t,
            [Nl],
            a,
            !0
          ))), el(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function oa(e) {
      e.flags |= 4;
    }
    function Ff(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & hu) !== $r)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !sr(t)) {
        if (t = du.current, t !== null && ((et & 4194048) === et ? qi !== null : (et & 62914560) !== et && (et & 536870912) === 0 || t !== qi))
          throw Vm = Vg, P0;
        e.flags |= 8192;
      }
    }
    function If(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? On() : 536870912, e.lanes |= t, Xr |= t);
    }
    function pi(e, t) {
      if (!st)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function St(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Il) !== Yt) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Il) !== Yt) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Vp(e, t, a) {
      var i = t.pendingProps;
      switch (vs(t), t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return St(t), null;
        case 1:
          return St(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Tu(Nl, t), ht(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Pi(t) ? (Qh(), oa(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Xh())), St(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (oa(t), a !== null ? (St(t), Ff(
            t,
            a
          )) : (St(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (oa(t), St(t), Ff(
            t,
            a
          )) : (St(t), t.flags &= -16777217) : (e.memoizedProps !== i && oa(t), St(t), t.flags &= -16777217), null;
        case 27:
          I(t), a = zt(eu.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return St(t), null;
            }
            e = O(), Pi(t) ? Lh(t) : (e = Py(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, oa(t));
          }
          return St(t), null;
        case 5:
          if (I(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return St(t), null;
            }
            if (o = O(), Pi(t))
              Lh(t);
            else {
              switch (e = zt(eu.current), is(a, o.ancestorInfo), o = o.context, e = Ie(e), o) {
                case bh:
                  e = e.createElementNS($o, a);
                  break;
                case Pv:
                  e = e.createElementNS(
                    _r,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        $o,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        _r,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof i.is == "string" ? e.createElement("select", { is: i.is }) : e.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                      break;
                    default:
                      e = typeof i.is == "string" ? e.createElement(a, {
                        is: i.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || wu.call(
                        ob,
                        a
                      ) || (ob[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Vl] = t, e[ma] = i;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Kt(e, a, i), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!i.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && oa(t);
            }
          }
          return St(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && oa(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = zt(eu.current), a = O(), Pi(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Yc, i = null;
              var f = _a;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Td(
                      e,
                      a,
                      i
                    ), o !== null && (cn(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Td(
                      e,
                      a,
                      i
                    ), o !== null && (cn(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Vl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || Xy(e.nodeValue, a)), e || Un(t);
            } else
              o = a.ancestorInfo.current, o != null && Sf(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = Ie(e).createTextNode(
                i
              ), e[Vl] = t, t.stateNode = e;
          }
          return St(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Pi(t), i !== null && i.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Vl] = t, St(t), (t.mode & Il) !== Yt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Qh(), ec(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, St(t), (t.mode & Il) !== Yt && i !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Xh(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Aa(t), t) : (Aa(t), null);
          }
          return Aa(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Il) !== Yt && _n(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), If(t, t.updateQueue), St(t), (t.mode & Il) !== Yt && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return ht(t), e === null && Ly(
            t.stateNode.containerInfo
          ), St(t), null;
        case 10:
          return Tu(t.type, t), St(t), null;
        case 19:
          if (ve(Yl, t), o = t.memoizedState, o === null) return St(t), null;
          if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (i) pi(o, !1);
            else {
              if (ll !== Gc || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Mu(e), f !== null) {
                    for (t.flags |= 128, pi(o, !1), e = f.updateQueue, t.updateQueue = e, If(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      wh(a, e), a = a.sibling;
                    return Re(
                      Yl,
                      Yl.current & oh | Km,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && tu() > Lv && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            }
          else {
            if (!i)
              if (e = Mu(f), e !== null) {
                if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, If(t, e), pi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !st)
                  return St(t), null;
              } else
                2 * tu() - o.renderingStartTime > Lv && a !== 536870912 && (t.flags |= 128, i = !0, pi(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = tu(), e.sibling = null, a = Yl.current, a = i ? a & oh | Km : a & oh, Re(Yl, a, t), e) : (St(t), null);
        case 22:
        case 23:
          return Aa(t), sn(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : St(t), a = t.updateQueue, a !== null && If(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ve(qr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Tu(Nl, t), St(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Xp(e, t) {
      switch (vs(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Yt && _n(t), t) : null;
        case 3:
          return Tu(Nl, t), ht(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return I(t), null;
        case 13:
          if (Aa(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ec();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Yt && _n(t), t) : null;
        case 19:
          return ve(Yl, t), null;
        case 4:
          return ht(t), null;
        case 10:
          return Tu(t.type, t), null;
        case 22:
        case 23:
          return Aa(t), sn(t), e !== null && ve(qr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Il) !== Yt && _n(t), t) : null;
        case 24:
          return Tu(Nl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function my(e, t) {
      switch (vs(t), t.tag) {
        case 3:
          Tu(Nl, t), ht(t);
          break;
        case 26:
        case 27:
        case 5:
          I(t);
          break;
        case 4:
          ht(t);
          break;
        case 13:
          Aa(t);
          break;
        case 19:
          ve(Yl, t);
          break;
        case 10:
          Tu(t.type, t);
          break;
        case 22:
        case 23:
          Aa(t), sn(t), e !== null && ve(qr, t);
          break;
        case 24:
          Tu(Nl, t);
      }
    }
    function mn(e) {
      return (e.mode & Il) !== Yt;
    }
    function py(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function Ws(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function rc(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & Bl) !== fu ? ie !== null && typeof ie.markComponentPassiveEffectMountStarted == "function" && ie.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Pl) !== fu && ie !== null && typeof ie.markComponentLayoutEffectMountStarted == "function" && ie.markComponentLayoutEffectMountStarted(
              t
            ), i = void 0, (e & Ha) !== fu && (vh = !0), i = se(
              t,
              DS,
              a
            ), (e & Ha) !== fu && (vh = !1), (e & Bl) !== fu ? ie !== null && typeof ie.markComponentPassiveEffectMountStopped == "function" && ie.markComponentPassiveEffectMountStopped() : (e & Pl) !== fu && ie !== null && typeof ie.markComponentLayoutEffectMountStopped == "function" && ie.markComponentLayoutEffectMountStopped(), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & Pl) !== 0 ? "useLayoutEffect" : (a.tag & Ha) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, se(
                t,
                function(h, v) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    v
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Te(t, t.return, h);
      }
    }
    function sc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Bl) !== fu ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStarted == "function" && ie.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Pl) !== fu && ie !== null && typeof ie.markComponentLayoutEffectUnmountStarted == "function" && ie.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & Ha) !== fu && (vh = !0), o = t, se(
                o,
                zS,
                o,
                a,
                h
              ), (e & Ha) !== fu && (vh = !1), (e & Bl) !== fu ? ie !== null && typeof ie.markComponentPassiveEffectUnmountStopped == "function" && ie.markComponentPassiveEffectUnmountStopped() : (e & Pl) !== fu && ie !== null && typeof ie.markComponentLayoutEffectUnmountStopped == "function" && ie.markComponentLayoutEffectUnmountStopped());
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (v) {
        Te(t, t.return, v);
      }
    }
    function vy(e, t) {
      mn(e) ? (fn(), rc(t, e), qa()) : rc(t, e);
    }
    function Pf(e, t, a) {
      mn(e) ? (fn(), sc(
        a,
        e,
        t
      ), qa()) : sc(
        a,
        e,
        t
      );
    }
    function gy(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || rh || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          re(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          re(e) || "instance"
        ));
        try {
          se(
            e,
            qp,
            t,
            a
          );
        } catch (i) {
          Te(e, e.return, i);
        }
      }
    }
    function Qp(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function gg(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || rh || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        re(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        re(e) || "instance"
      ));
      try {
        var o = mi(
          e.type,
          a,
          e.elementType === e.type
        ), f = se(
          e,
          Qp,
          t,
          o,
          i
        );
        a = Q1, f !== void 0 || a.has(e.type) || (a.add(e.type), se(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            re(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Te(e, e.return, d);
      }
    }
    function Fs(e, t, a) {
      a.props = mi(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, mn(e) ? (fn(), se(
        e,
        v1,
        e,
        t,
        a
      ), qa()) : se(
        e,
        v1,
        e,
        t,
        a
      );
    }
    function Zp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (mn(e))
            try {
              fn(), e.refCleanup = t(a);
            } finally {
              qa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            re(e)
          ), t.current = a;
      }
    }
    function So(e, t) {
      try {
        se(e, Zp, e);
      } catch (a) {
        Te(e, t, a);
      }
    }
    function Za(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (mn(e))
              try {
                fn(), se(e, i);
              } finally {
                qa(e);
              }
            else se(e, i);
          } catch (o) {
            Te(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (mn(e))
              try {
                fn(), se(e, a, null);
              } finally {
                qa(e);
              }
            else se(e, a, null);
          } catch (o) {
            Te(e, t, o);
          }
        else a.current = null;
    }
    function by(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Uv && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        i,
        a
      );
    }
    function Kp(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Uv && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Jp(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        se(
          e,
          xu,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Te(e, e.return, o);
      }
    }
    function Sy(e, t, a) {
      try {
        se(
          e,
          Jt,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Te(e, e.return, i);
      }
    }
    function Ty(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
    }
    function dc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Ty(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function er(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Hu));
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (er(e, t, a), e = e.sibling; e !== null; )
          er(e, t, a), e = e.sibling;
    }
    function hc(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && Fn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (hc(e, t, a), e = e.sibling; e !== null; )
          hc(e, t, a), e = e.sibling;
    }
    function kp(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Ty(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = dc(e), hc(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (Nu(a), t.flags &= -33), t = dc(e), hc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = dc(e), er(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Ey(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        se(
          e,
          za,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Te(e, e.return, i);
      }
    }
    function Is(e, t) {
      if (e = e.containerInfo, E0 = ag, e = Mp(e), Nh(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, v = -1, b = 0, B = 0, j = e, H = null;
              t: for (; ; ) {
                for (var L; j !== a || o !== 0 && j.nodeType !== 3 || (h = d + o), j !== f || i !== 0 && j.nodeType !== 3 || (v = d + i), j.nodeType === 3 && (d += j.nodeValue.length), (L = j.firstChild) !== null; )
                  H = j, j = L;
                for (; ; ) {
                  if (j === e) break t;
                  if (H === a && ++b === o && (h = d), H === f && ++B === i && (v = d), (L = j.nextSibling) !== null) break;
                  j = H, H = j.parentNode;
                }
                j = L;
              }
              a = h === -1 || v === -1 ? null : { start: h, end: v };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (R0 = {
        focusedElem: e,
        selectionRange: a
      }, ag = !1, Ql = t; Ql !== null; )
        if (t = Ql, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, Ql = e;
        else
          for (; Ql !== null; ) {
            switch (e = t = Ql, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && gg(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    _o(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        _o(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ql = e;
              break;
            }
            Ql = t.return;
          }
    }
    function Ry(e, t, a) {
      var i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Vn(e, a), i & 4 && py(a, Pl | ru);
          break;
        case 1:
          if (Vn(e, a), i & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || rh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), mn(a) ? (fn(), se(
                a,
                Wg,
                a,
                e
              ), qa()) : se(
                a,
                Wg,
                a,
                e
              );
            else {
              var o = mi(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || rh || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), mn(a) ? (fn(), se(
                a,
                y1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), qa()) : se(
                a,
                y1,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          i & 64 && gy(a), i & 512 && So(a, a.return);
          break;
        case 3:
          if (t = on(), Vn(e, a), i & 64 && (i = a.updateQueue, i !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              se(
                a,
                qp,
                i,
                o
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          }
          e.effectDuration += ii(t);
          break;
        case 27:
          t === null && i & 4 && Ey(a);
        case 26:
        case 5:
          Vn(e, a), t === null && i & 4 && Jp(a), i & 512 && So(a, a.return);
          break;
        case 12:
          if (i & 4) {
            i = on(), Vn(e, a), e = a.stateNode, e.effectDuration += lc(i);
            try {
              se(
                a,
                by,
                a,
                t,
                Mv,
                e.effectDuration
              );
            } catch (d) {
              Te(a, a.return, d);
            }
          } else Vn(e, a);
          break;
        case 13:
          Vn(e, a), i & 4 && To(e, a), i & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = or.bind(
            null,
            a
          ), Ho(e, a))));
          break;
        case 22:
          if (i = a.memoizedState !== null || jc, !i) {
            t = t !== null && t.memoizedState !== null || rl, o = jc;
            var f = rl;
            jc = i, (rl = t) && !f ? Xn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : Vn(e, a), jc = o, rl = f;
          }
          break;
        case 30:
          break;
        default:
          Vn(e, a);
      }
    }
    function Ay(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ay(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && tn(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Uu(e, t, a) {
      for (a = a.child; a !== null; )
        yc(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function yc(e, t, a) {
      if (Hl && typeof Hl.onCommitFiberUnmount == "function")
        try {
          Hl.onCommitFiberUnmount(Ui, a);
        } catch (f) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          rl || Za(a, t), Uu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          rl || Za(a, t);
          var i = Tl, o = Pa;
          Fn(a.type) && (Tl = a.stateNode, Pa = !1), Uu(
            e,
            t,
            a
          ), se(
            a,
            No,
            a.stateNode
          ), Tl = i, Pa = o;
          break;
        case 5:
          rl || Za(a, t);
        case 6:
          if (i = Tl, o = Pa, Tl = null, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o, Tl !== null)
            if (Pa)
              try {
                se(
                  a,
                  Uo,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Te(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                se(
                  a,
                  ka,
                  Tl,
                  a.stateNode
                );
              } catch (f) {
                Te(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Tl !== null && (Pa ? (e = Tl, Co(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), zc(e)) : Co(Tl, a.stateNode));
          break;
        case 4:
          i = Tl, o = Pa, Tl = a.stateNode.containerInfo, Pa = !0, Uu(
            e,
            t,
            a
          ), Tl = i, Pa = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          rl || sc(
            Ha,
            a,
            t
          ), rl || Ws(
            a,
            t,
            Pl
          ), Uu(
            e,
            t,
            a
          );
          break;
        case 1:
          rl || (Za(a, t), i = a.stateNode, typeof i.componentWillUnmount == "function" && Fs(
            a,
            t,
            i
          )), Uu(
            e,
            t,
            a
          );
          break;
        case 21:
          Uu(
            e,
            t,
            a
          );
          break;
        case 22:
          rl = (i = rl) || a.memoizedState !== null, Uu(
            e,
            t,
            a
          ), rl = i;
          break;
        default:
          Uu(
            e,
            t,
            a
          );
      }
    }
    function To(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          se(
            t,
            Da,
            e
          );
        } catch (a) {
          Te(t, t.return, a);
        }
    }
    function Ps(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Z1()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Z1()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function mc(e, t) {
      var a = Ps(e);
      t.forEach(function(i) {
        var o = Si.bind(null, e, i);
        if (!a.has(i)) {
          if (a.add(i), $t)
            if (sh !== null && dh !== null)
              zo(dh, sh);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          i.then(o, o);
        }
      });
    }
    function jl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Fn(h.type)) {
                  Tl = h.stateNode, Pa = !1;
                  break e;
                }
                break;
              case 5:
                Tl = h.stateNode, Pa = !1;
                break e;
              case 3:
              case 4:
                Tl = h.stateNode.containerInfo, Pa = !0;
                break e;
            }
            h = h.return;
          }
          if (Tl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          yc(o, f, d), Tl = null, Pa = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          Oy(t, e), t = t.sibling;
    }
    function Oy(e, t) {
      var a = e.alternate, i = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          jl(t, e), fa(e), i & 4 && (sc(
            Ha | ru,
            e,
            e.return
          ), rc(Ha | ru, e), Ws(
            e,
            e.return,
            Pl | ru
          ));
          break;
        case 1:
          jl(t, e), fa(e), i & 512 && (rl || a === null || Za(a, a.return)), i & 64 && jc && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
          break;
        case 26:
          var o = Ku;
          if (jl(t, e), fa(e), i & 512 && (rl || a === null || Za(a, a.return)), i & 4)
            if (t = a !== null ? a.memoizedState : null, i = e.memoizedState, a === null)
              if (i === null)
                if (e.stateNode === null) {
                  e: {
                    i = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (i) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[Zo] || o[Vl] || o.namespaceURI === $o || o.hasAttribute("itemprop")) && (o = t.createElement(i), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Kt(o, i, a), o[Vl] = e, D(o), i = o;
                        break e;
                      case "link":
                        var f = am(
                          "link",
                          "href",
                          t
                        ).get(i + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Kt(o, i, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = am(
                          "meta",
                          "content",
                          t
                        ).get(i + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], Q(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(i), Kt(o, i, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + i + '". This is a bug in React.'
                        );
                    }
                    o[Vl] = e, D(o), i = o;
                  }
                  e.stateNode = i;
                } else
                  nm(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Ed(
                  o,
                  i,
                  e.memoizedProps
                );
            else
              t !== i ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, i === null ? nm(
                o,
                e.type,
                e.stateNode
              ) : Ed(
                o,
                i,
                e.memoizedProps
              )) : i === null && e.stateNode !== null && Sy(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          jl(t, e), fa(e), i & 512 && (rl || a === null || Za(a, a.return)), a !== null && i & 4 && Sy(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (jl(t, e), fa(e), i & 512 && (rl || a === null || Za(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              se(e, Nu, t);
            } catch (B) {
              Te(e, e.return, B);
            }
          }
          i & 4 && e.stateNode != null && (t = e.memoizedProps, Sy(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), i & 1024 && (a0 = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (jl(t, e), fa(e), i & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            i = e.memoizedProps, a = a !== null ? a.memoizedProps : i, t = e.stateNode;
            try {
              se(
                e,
                Rc,
                t,
                a,
                i
              );
            } catch (B) {
              Te(e, e.return, B);
            }
          }
          break;
        case 3:
          if (o = on(), eg = null, f = Ku, Ku = rr(t.containerInfo), jl(t, e), Ku = f, fa(e), i & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              se(
                e,
                Iy,
                t.containerInfo
              );
            } catch (B) {
              Te(e, e.return, B);
            }
          a0 && (a0 = !1, pc(e)), t.effectDuration += ii(o);
          break;
        case 4:
          i = Ku, Ku = rr(
            e.stateNode.containerInfo
          ), jl(t, e), fa(e), Ku = i;
          break;
        case 12:
          i = on(), jl(t, e), fa(e), e.stateNode.effectDuration += lc(i);
          break;
        case 13:
          jl(t, e), fa(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (f0 = tu()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, v = jc, b = rl;
          if (jc = v || o, rl = b || h, jl(t, e), rl = b, jc = v, fa(e), i & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & ~Av : t._visibility | Av, o && (a === null || h || jc || rl || Gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? se(h, da, f) : se(
                      h,
                      Wy,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Te(h, h.return, B);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? se(h, $y, d) : se(
                      h,
                      bd,
                      d,
                      h.memoizedProps
                    );
                  } catch (B) {
                    Te(h, h.return, B);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          i & 4 && (i = e.updateQueue, i !== null && (a = i.retryQueue, a !== null && (i.retryQueue = null, mc(e, a))));
          break;
        case 19:
          jl(t, e), fa(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, mc(e, i)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          jl(t, e), fa(e);
      }
    }
    function fa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          se(e, kp, e);
        } catch (a) {
          Te(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function pc(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          pc(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Vn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Ry(e, t.alternate, t), t = t.sibling;
    }
    function Oa(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ws(
            e,
            e.return,
            Pl
          ), Gl(e);
          break;
        case 1:
          Za(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Fs(
            e,
            e.return,
            t
          ), Gl(e);
          break;
        case 27:
          se(
            e,
            No,
            e.stateNode
          );
        case 26:
        case 5:
          Za(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
    }
    function Gl(e) {
      for (e = e.child; e !== null; )
        Oa(e), e = e.sibling;
    }
    function Cu(e, t, a, i) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xn(
            e,
            a,
            i
          ), py(a, Pl);
          break;
        case 1:
          if (Xn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && se(
            a,
            Wg,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              se(
                a,
                io,
                t,
                e
              );
            } catch (f) {
              Te(a, a.return, f);
            }
          }
          i && o & 64 && gy(a), So(a, a.return);
          break;
        case 27:
          Ey(a);
        case 26:
        case 5:
          Xn(
            e,
            a,
            i
          ), i && t === null && o & 4 && Jp(a), So(a, a.return);
          break;
        case 12:
          if (i && o & 4) {
            o = on(), Xn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += lc(o);
            try {
              se(
                a,
                by,
                a,
                t,
                Mv,
                i.effectDuration
              );
            } catch (f) {
              Te(a, a.return, f);
            }
          } else
            Xn(
              e,
              a,
              i
            );
          break;
        case 13:
          Xn(
            e,
            a,
            i
          ), i && o & 4 && To(e, a);
          break;
        case 22:
          a.memoizedState === null && Xn(
            e,
            a,
            i
          ), So(a, a.return);
          break;
        case 30:
          break;
        default:
          Xn(
            e,
            a,
            i
          );
      }
    }
    function Xn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Cu(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Qn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && tc(e), a != null && Cn(a));
    }
    function pn(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (tc(t), e != null && Cn(e));
    }
    function Tt(e, t, a, i) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          tr(
            e,
            t,
            a,
            i
          ), t = t.sibling;
    }
    function tr(e, t, a, i) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Tt(
            e,
            t,
            a,
            i
          ), o & 2048 && vy(t, Bl | ru);
          break;
        case 1:
          Tt(
            e,
            t,
            a,
            i
          );
          break;
        case 3:
          var f = on();
          Tt(
            e,
            t,
            a,
            i
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (tc(t), a != null && Cn(a))), e.passiveEffectDuration += ii(f);
          break;
        case 12:
          if (o & 2048) {
            o = on(), Tt(
              e,
              t,
              a,
              i
            ), e = t.stateNode, e.passiveEffectDuration += lc(o);
            try {
              se(
                t,
                Kp,
                t,
                t.alternate,
                Mv,
                e.passiveEffectDuration
              );
            } catch (h) {
              Te(t, t.return, h);
            }
          } else
            Tt(
              e,
              t,
              a,
              i
            );
          break;
        case 13:
          Tt(
            e,
            t,
            a,
            i
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & xc ? Tt(
            e,
            t,
            a,
            i
          ) : Eo(
            e,
            t
          ) : f._visibility & xc ? Tt(
            e,
            t,
            a,
            i
          ) : (f._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Qn(d, t);
          break;
        case 24:
          Tt(
            e,
            t,
            a,
            i
          ), o & 2048 && pn(t.alternate, t);
          break;
        default:
          Tt(
            e,
            t,
            a,
            i
          );
      }
    }
    function vi(e, t, a, i, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        ed(
          e,
          t,
          a,
          i,
          o
        ), t = t.sibling;
    }
    function ed(e, t, a, i, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vi(
            e,
            t,
            a,
            i,
            o
          ), vy(t, Bl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & xc ? vi(
            e,
            t,
            a,
            i,
            o
          ) : Eo(
            e,
            t
          ) : (d._visibility |= xc, vi(
            e,
            t,
            a,
            i,
            o
          )), o && f & 2048 && Qn(
            t.alternate,
            t
          );
          break;
        case 24:
          vi(
            e,
            t,
            a,
            i,
            o
          ), o && f & 2048 && pn(t.alternate, t);
          break;
        default:
          vi(
            e,
            t,
            a,
            i,
            o
          );
      }
    }
    function Eo(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, i = t, o = i.flags;
          switch (i.tag) {
            case 22:
              Eo(
                a,
                i
              ), o & 2048 && Qn(
                i.alternate,
                i
              );
              break;
            case 24:
              Eo(
                a,
                i
              ), o & 2048 && pn(
                i.alternate,
                i
              );
              break;
            default:
              Eo(
                a,
                i
              );
          }
          t = t.sibling;
        }
    }
    function vc(e) {
      if (e.subtreeFlags & Jm)
        for (e = e.child; e !== null; )
          gi(e), e = e.sibling;
    }
    function gi(e) {
      switch (e.tag) {
        case 26:
          vc(e), e.flags & Jm && e.memoizedState !== null && uv(
            Ku,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          vc(e);
          break;
        case 3:
        case 4:
          var t = Ku;
          Ku = rr(
            e.stateNode.containerInfo
          ), vc(e), Ku = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Jm, Jm = 16777216, vc(e), Jm = t) : vc(e));
          break;
        default:
          vc(e);
      }
    }
    function lr(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function Ro(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, zy(
              i,
              e
            );
          }
        lr(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          Dy(e), e = e.sibling;
    }
    function Dy(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ro(e), e.flags & 2048 && Pf(
            e,
            e.return,
            Bl | ru
          );
          break;
        case 3:
          var t = on();
          Ro(e), e.stateNode.passiveEffectDuration += ii(t);
          break;
        case 12:
          t = on(), Ro(e), e.stateNode.passiveEffectDuration += lc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & xc && (e.return === null || e.return.tag !== 13) ? (t._visibility &= ~xc, ar(e)) : Ro(e);
          break;
        default:
          Ro(e);
      }
    }
    function ar(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a];
            Ql = i, zy(
              i,
              e
            );
          }
        lr(e);
      }
      for (e = e.child; e !== null; )
        nr(e), e = e.sibling;
    }
    function nr(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pf(
            e,
            e.return,
            Bl
          ), ar(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & xc && (t._visibility &= ~xc, ar(e));
          break;
        default:
          ar(e);
      }
    }
    function zy(e, t) {
      for (; Ql !== null; ) {
        var a = Ql, i = a;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Pf(
              i,
              t,
              Bl
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (i = i.memoizedState.cachePool.pool, i != null && tc(i));
            break;
          case 24:
            Cn(i.memoizedState.cache);
        }
        if (i = a.child, i !== null) i.return = a, Ql = i;
        else
          e: for (a = e; Ql !== null; ) {
            i = Ql;
            var o = i.sibling, f = i.return;
            if (Ay(i), i === a) {
              Ql = null;
              break e;
            }
            if (o !== null) {
              o.return = f, Ql = o;
              break e;
            }
            Ql = f;
          }
      }
    }
    function My() {
      US.forEach(function(e) {
        return e();
      });
    }
    function Uy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || q.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function ra(e) {
      if ((gt & xa) !== Sn && et !== 0)
        return et & -et;
      var t = q.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = Yr, e !== 0 ? e : wy()) : hf();
    }
    function $p() {
      En === 0 && (En = (et & 536870912) === 0 || st ? Ve() : 536870912);
      var e = du.current;
      return e !== null && (e.flags |= 32), En;
    }
    function Qt(e, t, a) {
      if (vh && console.error("useInsertionEffect must not schedule updates."), y0 && (Vv = !0), (e === _t && (Et === Lr || Et === Vr) || e.cancelPendingCommit !== null) && (bc(e, 0), _u(
        e,
        et,
        En,
        !1
      )), mu(e, a), (gt & xa) !== 0 && e === _t) {
        if (pa)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Pe && re(Pe) || "Unknown", tb.has(e) || (tb.add(e), t = re(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              eb || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), eb = !0);
          }
      } else
        $t && Ba(e, t, a), Pp(t), e === _t && ((gt & xa) === Sn && (lf |= a), ll === Gr && _u(
          e,
          et,
          En,
          !1
        )), Ka(e);
    }
    function ol(e, t, a) {
      if ((gt & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      var i = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || ku(e, t), o = i ? _y(e, t) : nd(e, t, !0), f = i;
      do {
        if (o === Gc) {
          mh && !i && _u(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Wp(a)) {
            o = nd(e, t, !1), f = !1;
            continue;
          }
          if (o === hh) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Pm;
                var v = o.current.memoizedState.isDehydrated;
                if (v && (bc(
                  o,
                  h
                ).flags |= 256), h = nd(
                  o,
                  h,
                  !1
                ), h !== hh) {
                  if (c0 && !v) {
                    o.errorRecoveryDisabledLanes |= f, lf |= f, o = Gr;
                    break e;
                  }
                  o = Na, Na = d, o !== null && (Na === null ? Na = o : Na.push.apply(
                    Na,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== hh) continue;
            }
          }
          if (o === $m) {
            bc(e, 0), _u(e, t, 0, !0);
            break;
          }
          e: {
            switch (i = e, o) {
              case Gc:
              case $m:
                throw Error("Root did not complete. This is a bug in React.");
              case Gr:
                if ((t & 4194048) !== t) break;
              case jv:
                _u(
                  i,
                  t,
                  En,
                  !ef
                );
                break e;
              case hh:
                Na = null;
                break;
              case n0:
              case K1:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (q.actQueue !== null)
              fd(
                i,
                a,
                t,
                Na,
                ep,
                Gv,
                En,
                lf,
                Xr
              );
            else {
              if ((t & 62914560) === t && (f = f0 + k1 - tu(), 10 < f)) {
                if (_u(
                  i,
                  t,
                  En,
                  !ef
                ), hl(i, 0, !0) !== 0) break e;
                i.timeoutHandle = fb(
                  vl.bind(
                    null,
                    i,
                    a,
                    Na,
                    ep,
                    Gv,
                    t,
                    En,
                    lf,
                    Xr,
                    ef,
                    o,
                    xS,
                    W0,
                    0
                  ),
                  f
                );
                break e;
              }
              vl(
                i,
                a,
                Na,
                ep,
                Gv,
                t,
                En,
                lf,
                Xr,
                ef,
                o,
                _S,
                W0,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ka(e);
    }
    function vl(e, t, a, i, o, f, d, h, v, b, B, j, H, L) {
      if (e.timeoutHandle = kr, j = t.subtreeFlags, (j & 8192 || (j & 16785408) === 16785408) && (ip = { stylesheets: null, count: 0, unsuspend: nv }, gi(t), j = iv(), j !== null)) {
        e.cancelPendingCommit = j(
          fd.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            v,
            B,
            HS,
            H,
            L
          )
        ), _u(
          e,
          f,
          d,
          !b
        );
        return;
      }
      fd(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        v
      );
    }
    function Wp(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Ca(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function _u(e, t, a, i) {
      t &= ~o0, t &= ~lf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Ll(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && df(e, a, t);
    }
    function gc() {
      return (gt & (xa | Ju)) === Sn ? (Sc(0), !1) : !0;
    }
    function td() {
      if (Pe !== null) {
        if (Et === en)
          var e = Pe.return;
        else
          e = Pe, gs(), dn(e), ih = null, Zm = 0, e = Pe;
        for (; e !== null; )
          my(e.alternate, e), e = e.return;
        Pe = null;
      }
    }
    function bc(e, t) {
      var a = e.timeoutHandle;
      a !== kr && (e.timeoutHandle = kr, KS(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), td(), _t = e, Pe = a = Mn(e.current, null), et = t, Et = en, Tn = null, ef = !1, mh = ku(e, t), c0 = !1, ll = Gc, Xr = En = o0 = lf = tf = 0, Na = Pm = null, Gv = !1, (t & 8) !== 0 && (t |= t & 32);
      var i = e.entangledLanes;
      if (i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; ) {
          var o = 31 - Ll(i), f = 1 << o;
          t |= e[o], i &= ~f;
        }
      return wi = t, Of(), t = k0(), 1e3 < t - J0 && (q.recentlyCreatedOwnerStacks = 0, J0 = t), Qu.discardPendingWarnings(), a;
    }
    function ur(e, t) {
      _e = null, q.H = qv, q.getCurrentStack = null, pa = !1, Ua = null, t === Lm || t === Hv ? (t = Ih(), Et = Fm) : t === P0 ? (t = Ih(), Et = J1) : Et = t === q1 ? i0 : t !== null && typeof t == "object" && typeof t.then == "function" ? yh : Wm, Tn = t;
      var a = Pe;
      if (a === null)
        ll = $m, bo(
          e,
          Ta(t, e.current)
        );
      else
        switch (a.mode & Il && Eu(a), ta(), Et) {
          case Wm:
            ie !== null && typeof ie.markComponentErrored == "function" && ie.markComponentErrored(
              a,
              t,
              et
            );
            break;
          case Lr:
          case Vr:
          case Fm:
          case yh:
          case Im:
            ie !== null && typeof ie.markComponentSuspended == "function" && ie.markComponentSuspended(
              a,
              t,
              et
            );
        }
    }
    function ld() {
      var e = q.H;
      return q.H = qv, e === null ? qv : e;
    }
    function Cy() {
      var e = q.A;
      return q.A = MS, e;
    }
    function ad() {
      ll = Gr, ef || (et & 4194048) !== et && du.current !== null || (mh = !0), (tf & 134217727) === 0 && (lf & 134217727) === 0 || _t === null || _u(
        _t,
        et,
        En,
        !1
      );
    }
    function nd(e, t, a) {
      var i = gt;
      gt |= xa;
      var o = ld(), f = Cy();
      if (_t !== e || et !== t) {
        if ($t) {
          var d = e.memoizedUpdaters;
          0 < d.size && (zo(e, et), d.clear()), Rl(e, t);
        }
        ep = null, bc(e, t);
      }
      Rn(t), t = !1, d = ll;
      e: do
        try {
          if (Et !== en && Pe !== null) {
            var h = Pe, v = Tn;
            switch (Et) {
              case i0:
                td(), d = jv;
                break e;
              case Fm:
              case Lr:
              case Vr:
              case yh:
                du.current === null && (t = !0);
                var b = Et;
                if (Et = en, Tn = null, bi(e, h, v, b), a && mh) {
                  d = Gc;
                  break e;
                }
                break;
              default:
                b = Et, Et = en, Tn = null, bi(e, h, v, b);
            }
          }
          ud(), d = ll;
          break;
        } catch (B) {
          ur(e, B);
        }
      while (!0);
      return t && e.shellSuspendCounter++, gs(), gt = i, q.H = o, q.A = f, ji(), Pe === null && (_t = null, et = 0, Of()), d;
    }
    function ud() {
      for (; Pe !== null; ) xy(Pe);
    }
    function _y(e, t) {
      var a = gt;
      gt |= xa;
      var i = ld(), o = Cy();
      if (_t !== e || et !== t) {
        if ($t) {
          var f = e.memoizedUpdaters;
          0 < f.size && (zo(e, et), f.clear()), Rl(e, t);
        }
        ep = null, Lv = tu() + $1, bc(e, t);
      } else
        mh = ku(
          e,
          t
        );
      Rn(t);
      e: do
        try {
          if (Et !== en && Pe !== null)
            t: switch (t = Pe, f = Tn, Et) {
              case Wm:
                Et = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  Wm
                );
                break;
              case Lr:
              case Vr:
                if (Fh(f)) {
                  Et = en, Tn = null, id(t);
                  break;
                }
                t = function() {
                  Et !== Lr && Et !== Vr || _t !== e || (Et = Im), Ka(e);
                }, f.then(t, t);
                break e;
              case Fm:
                Et = Im;
                break e;
              case J1:
                Et = u0;
                break e;
              case Im:
                Fh(f) ? (Et = en, Tn = null, id(t)) : (Et = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  Im
                ));
                break;
              case u0:
                var d = null;
                switch (Pe.tag) {
                  case 26:
                    d = Pe.memoizedState;
                  case 5:
                  case 27:
                    var h = Pe;
                    if (!d || sr(d)) {
                      Et = en, Tn = null;
                      var v = h.sibling;
                      if (v !== null) Pe = v;
                      else {
                        var b = h.return;
                        b !== null ? (Pe = b, ir(b)) : Pe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Et = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  u0
                );
                break;
              case yh:
                Et = en, Tn = null, bi(
                  e,
                  t,
                  f,
                  yh
                );
                break;
              case i0:
                td(), ll = jv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          q.actQueue !== null ? ud() : Hy();
          break;
        } catch (B) {
          ur(e, B);
        }
      while (!0);
      return gs(), q.H = i, q.A = o, gt = a, Pe !== null ? (ie !== null && typeof ie.markRenderYielded == "function" && ie.markRenderYielded(), Gc) : (ji(), _t = null, et = 0, Of(), ll);
    }
    function Hy() {
      for (; Pe !== null && !hv(); )
        xy(Pe);
    }
    function xy(e) {
      var t = e.alternate;
      (e.mode & Il) !== Yt ? (bs(e), t = se(
        e,
        $s,
        t,
        e,
        wi
      ), Eu(e)) : t = se(
        e,
        $s,
        t,
        e,
        wi
      ), e.memoizedProps = e.pendingProps, t === null ? ir(e) : Pe = t;
    }
    function id(e) {
      var t = se(e, cd, e);
      e.memoizedProps = e.pendingProps, t === null ? ir(e) : Pe = t;
    }
    function cd(e) {
      var t = e.alternate, a = (e.mode & Il) !== Yt;
      switch (a && bs(e), e.tag) {
        case 15:
        case 0:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            et
          );
          break;
        case 11:
          t = ry(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            et
          );
          break;
        case 5:
          dn(e);
        default:
          my(t, e), e = Pe = wh(e, wi), t = $s(t, e, wi);
      }
      return a && Eu(e), t;
    }
    function bi(e, t, a, i) {
      gs(), dn(t), ih = null, Zm = 0;
      var o = t.return;
      try {
        if (Kf(
          e,
          o,
          t,
          a,
          et
        )) {
          ll = $m, bo(
            e,
            Ta(a, e.current)
          ), Pe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Pe = o, f;
        ll = $m, bo(
          e,
          Ta(a, e.current)
        ), Pe = null;
        return;
      }
      t.flags & 32768 ? (st || i === Wm ? e = !0 : mh || (et & 536870912) !== 0 ? e = !1 : (ef = e = !0, (i === Lr || i === Vr || i === Fm || i === yh) && (i = du.current, i !== null && i.tag === 13 && (i.flags |= 16384))), od(t, e)) : ir(t);
    }
    function ir(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          od(
            t,
            ef
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, bs(t), a = se(
          t,
          Vp,
          a,
          t,
          wi
        ), (t.mode & Il) !== Yt && ac(t), a !== null) {
          Pe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Pe = t;
          return;
        }
        Pe = t = e;
      } while (t !== null);
      ll === Gc && (ll = K1);
    }
    function od(e, t) {
      do {
        var a = Xp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Pe = a;
          return;
        }
        if ((e.mode & Il) !== Yt) {
          ac(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Pe = e;
          return;
        }
        Pe = e = a;
      } while (e !== null);
      ll = jv, Pe = null;
    }
    function fd(e, t, a, i, o, f, d, h, v) {
      e.cancelPendingCommit = null;
      do
        Ao();
      while (ea !== Qr);
      if (Qu.flushLegacyContextWarning(), Qu.flushPendingUnsafeLifecycleWarnings(), (gt & (xa | Ju)) !== Sn)
        throw Error("Should not already be working.");
      if (ie !== null && typeof ie.markCommitStarted == "function" && ie.markCommitStarted(a), t === null) ze();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= qg, Ir(
          e,
          a,
          f,
          d,
          h,
          v
        ), e === _t && (Pe = _t = null, et = 0), ph = t, nf = e, uf = a, s0 = f, d0 = o, P1 = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, qy(Vo, function() {
          return cr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Mv = th(), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null, o = Oe.p, Oe.p = xl, d = gt, gt |= Ju;
          try {
            Is(e, t, a);
          } finally {
            gt = d, Oe.p = o, q.T = i;
          }
        }
        ea = W1, Zn(), rd(), Fp();
      }
    }
    function Zn() {
      if (ea === W1) {
        ea = Qr;
        var e = nf, t = ph, a = uf, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = q.T, q.T = null;
          var o = Oe.p;
          Oe.p = xl;
          var f = gt;
          gt |= Ju;
          try {
            sh = a, dh = e, Oy(t, e), dh = sh = null, a = R0;
            var d = Mp(e.containerInfo), h = a.focusedElem, v = a.selectionRange;
            if (d !== h && h && h.ownerDocument && zp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (v !== null && Nh(h)) {
                var b = v.start, B = v.end;
                if (B === void 0 && (B = b), "selectionStart" in h)
                  h.selectionStart = b, h.selectionEnd = Math.min(
                    B,
                    h.value.length
                  );
                else {
                  var j = h.ownerDocument || document, H = j && j.defaultView || window;
                  if (H.getSelection) {
                    var L = H.getSelection(), de = h.textContent.length, De = Math.min(
                      v.start,
                      de
                    ), Ht = v.end === void 0 ? De : Math.min(v.end, de);
                    !L.extend && De > Ht && (d = Ht, Ht = De, De = d);
                    var at = xh(
                      h,
                      De
                    ), T = xh(
                      h,
                      Ht
                    );
                    if (at && T && (L.rangeCount !== 1 || L.anchorNode !== at.node || L.anchorOffset !== at.offset || L.focusNode !== T.node || L.focusOffset !== T.offset)) {
                      var E = j.createRange();
                      E.setStart(at.node, at.offset), L.removeAllRanges(), De > Ht ? (L.addRange(E), L.extend(T.node, T.offset)) : (E.setEnd(T.node, T.offset), L.addRange(E));
                    }
                  }
                }
              }
              for (j = [], L = h; L = L.parentNode; )
                L.nodeType === 1 && j.push({
                  element: L,
                  left: L.scrollLeft,
                  top: L.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < j.length; h++) {
                var R = j[h];
                R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
              }
            }
            ag = !!E0, R0 = E0 = null;
          } finally {
            gt = f, Oe.p = o, q.T = i;
          }
        }
        e.current = t, ea = F1;
      }
    }
    function rd() {
      if (ea === F1) {
        ea = Qr;
        var e = nf, t = ph, a = uf, i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = q.T, q.T = null;
          var o = Oe.p;
          Oe.p = xl;
          var f = gt;
          gt |= Ju;
          try {
            ie !== null && typeof ie.markLayoutEffectsStarted == "function" && ie.markLayoutEffectsStarted(a), sh = a, dh = e, Ry(
              e,
              t.alternate,
              t
            ), dh = sh = null, ie !== null && typeof ie.markLayoutEffectsStopped == "function" && ie.markLayoutEffectsStopped();
          } finally {
            gt = f, Oe.p = o, q.T = i;
          }
        }
        ea = I1;
      }
    }
    function Fp() {
      if (ea === NS || ea === I1) {
        ea = Qr, Dg();
        var e = nf, t = ph, a = uf, i = P1, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ea = r0 : (ea = Qr, ph = nf = null, Kn(e, e.pendingLanes), Zr = 0, lp = null);
        var f = e.pendingLanes;
        if (f === 0 && (af = null), o || Do(e), o = Jc(a), t = t.stateNode, Hl && typeof Hl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case xl:
                var h = xd;
                break;
              case bn:
                h = Rr;
                break;
              case Gu:
                h = Vo;
                break;
              case qd:
                h = Ar;
                break;
              default:
                h = Vo;
            }
            Hl.onCommitFiberRoot(
              Ui,
              t,
              h,
              d
            );
          } catch (j) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              j
            ));
          }
        if ($t && e.memoizedUpdaters.clear(), My(), i !== null) {
          d = q.T, h = Oe.p, Oe.p = xl, q.T = null;
          try {
            var v = e.onRecoverableError;
            for (t = 0; t < i.length; t++) {
              var b = i[t], B = Ip(b.stack);
              se(
                b.source,
                v,
                b.value,
                B
              );
            }
          } finally {
            q.T = d, Oe.p = h;
          }
        }
        (uf & 3) !== 0 && Ao(), Ka(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Cv = !0, e === h0 ? tp++ : (tp = 0, h0 = e)) : tp = 0, Sc(0), ze();
      }
    }
    function Ip(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Kn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Cn(t)));
    }
    function Ao(e) {
      return Zn(), rd(), Fp(), cr();
    }
    function cr() {
      if (ea !== r0) return !1;
      var e = nf, t = s0;
      s0 = 0;
      var a = Jc(uf), i = Gu > a ? Gu : a;
      a = q.T;
      var o = Oe.p;
      try {
        Oe.p = i, q.T = null, i = d0, d0 = null;
        var f = nf, d = uf;
        if (ea = Qr, ph = nf = null, uf = 0, (gt & (xa | Ju)) !== Sn)
          throw Error("Cannot flush passive effects while already rendering.");
        y0 = !0, Vv = !1, ie !== null && typeof ie.markPassiveEffectsStarted == "function" && ie.markPassiveEffectsStarted(d);
        var h = gt;
        if (gt |= Ju, Dy(f.current), tr(
          f,
          f.current,
          d,
          i
        ), ie !== null && typeof ie.markPassiveEffectsStopped == "function" && ie.markPassiveEffectsStopped(), Do(f), gt = h, Sc(0, !1), Vv ? f === lp ? Zr++ : (Zr = 0, lp = f) : Zr = 0, Vv = y0 = !1, Hl && typeof Hl.onPostCommitFiberRoot == "function")
          try {
            Hl.onPostCommitFiberRoot(Ui, f);
          } catch (b) {
            ya || (ya = !0, console.error(
              "React instrumentation encountered an error: %s",
              b
            ));
          }
        var v = f.current.stateNode;
        return v.effectDuration = 0, v.passiveEffectDuration = 0, !0;
      } finally {
        Oe.p = o, q.T = a, Kn(e, t);
      }
    }
    function Oo(e, t, a) {
      t = Ta(a, t), t = wl(e.stateNode, t, 2), e = rn(e, t, 2), e !== null && (mu(e, 2), Ka(e));
    }
    function Te(e, t, a) {
      if (vh = !1, e.tag === 3)
        Oo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Oo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (af === null || !af.has(i))) {
              e = Ta(a, e), a = Xt(2), i = rn(t, a, 2), i !== null && (Zf(
                a,
                i,
                t,
                e
              ), mu(i, 2), Ka(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function Ny(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new CS();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (c0 = !0, o.add(a), i = bg.bind(null, e, t, a), $t && zo(e, a), t.then(i, i));
    }
    function bg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Uy() && q.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), _t === e && (et & a) === a && (ll === Gr || ll === n0 && (et & 62914560) === et && tu() - f0 < k1 ? (gt & xa) === Sn && bc(e, 0) : o0 |= a, Xr === et && (Xr = 0)), Ka(e);
    }
    function By(e, t) {
      t === 0 && (t = On()), e = aa(e, t), e !== null && (mu(e, t), Ka(e));
    }
    function or(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), By(e, a);
    }
    function Si(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), By(e, a);
    }
    function sd(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === qo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && se(
            o,
            Yy,
            i,
            o,
            (o.mode & Q0) === Yt
          ) : sd(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? se(
            o,
            Yy,
            i,
            o
          ) : o.subtreeFlags & 67108864 && se(
            o,
            sd,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function Yy(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      ue(!0);
      try {
        Oa(t), a && nr(t), Cu(e, t.alternate, t, !1), a && ed(e, t, 0, null, !1, 0);
      } finally {
        ue(!1);
      }
    }
    function Do(e) {
      var t = !0;
      e.current.mode & (va | Xu) || (t = !1), sd(
        e,
        e.current,
        t
      );
    }
    function vn(e) {
      if ((gt & xa) === Sn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = re(e) || "ReactComponent", Xv !== null) {
            if (Xv.has(t)) return;
            Xv.add(t);
          } else Xv = /* @__PURE__ */ new Set([t]);
          se(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function zo(e, t) {
      $t && e.memoizedUpdaters.forEach(function(a) {
        Ba(e, a, t);
      });
    }
    function qy(e, t) {
      var a = q.actQueue;
      return a !== null ? (a.push(t), qS) : Hd(e, t);
    }
    function Pp(e) {
      Uy() && q.actQueue === null && se(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          re(e)
        );
      });
    }
    function Ka(e) {
      e !== gh && e.next === null && (gh === null ? Qv = gh = e : gh = gh.next = e), Zv = !0, q.actQueue !== null ? p0 || (p0 = !0, fl()) : m0 || (m0 = !0, fl());
    }
    function Sc(e, t) {
      if (!v0 && Zv) {
        v0 = !0;
        do
          for (var a = !1, i = Qv; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Ll(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, yd(i, f));
            } else
              f = et, f = hl(
                i,
                i === _t ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== kr
              ), (f & 3) === 0 || ku(i, f) || (a = !0, yd(i, f));
            i = i.next;
          }
        while (a);
        v0 = !1;
      }
    }
    function dd() {
      hd();
    }
    function hd() {
      Zv = p0 = m0 = !1;
      var e = 0;
      Kr !== 0 && (Mo() && (e = Kr), Kr = 0);
      for (var t = tu(), a = null, i = Qv; i !== null; ) {
        var o = i.next, f = Jn(i, t);
        f === 0 ? (i.next = null, a === null ? Qv = o : a.next = o, o === null && (gh = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Zv = !0)), i = o;
      }
      Sc(e);
    }
    function Jn(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Ll(f), h = 1 << d, v = o[d];
        v === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Fr(h, t)) : v <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = _t, a = et, a = hl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i = e.callbackNode, a === 0 || e === t && (Et === Lr || Et === Vr) || e.cancelPendingCommit !== null)
        return i !== null && md(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ku(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || q.actQueue !== null && i !== g0)
          md(i);
        else return t;
        switch (Jc(a)) {
          case xl:
          case bn:
            a = Rr;
            break;
          case Gu:
            a = Vo;
            break;
          case qd:
            a = Ar;
            break;
          default:
            a = Vo;
        }
        return i = Zt.bind(null, e), q.actQueue !== null ? (q.actQueue.push(i), a = g0) : a = Hd(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && md(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Zt(e, t) {
      if (Cv = Uv = !1, ea !== Qr && ea !== r0)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Ao() && e.callbackNode !== a)
        return null;
      var i = et;
      return i = hl(
        e,
        e === _t ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== kr
      ), i === 0 ? null : (ol(
        e,
        i,
        t
      ), Jn(e, tu()), e.callbackNode != null && e.callbackNode === a ? Zt.bind(null, e) : null);
    }
    function yd(e, t) {
      if (Ao()) return null;
      Uv = Cv, Cv = !1, ol(e, t, !0);
    }
    function md(e) {
      e !== g0 && e !== null && Og(e);
    }
    function fl() {
      q.actQueue !== null && q.actQueue.push(function() {
        return hd(), null;
      }), JS(function() {
        (gt & (xa | Ju)) !== Sn ? Hd(
          xd,
          dd
        ) : hd();
      });
    }
    function wy() {
      return Kr === 0 && (Kr = Ve()), Kr;
    }
    function jy(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Q(e, "action"), eo("" + e));
    }
    function Gy(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function Nt(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = jy(
          (o[ma] || null).action
        ), d = i.submitter;
        d && (t = (t = d[ma] || null) ? jy(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new be(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (Kr !== 0) {
                    var v = d ? Gy(
                      o,
                      d
                    ) : new FormData(o), b = {
                      pending: !0,
                      data: v,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(b), cc(
                      a,
                      b,
                      null,
                      v
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), v = d ? Gy(
                    o,
                    d
                  ) : new FormData(o), b = {
                    pending: !0,
                    data: v,
                    method: o.method,
                    action: f
                  }, Object.freeze(b), cc(
                    a,
                    b,
                    f,
                    v
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function Ml(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        Pg(i);
      }
      e.currentTarget = null;
    }
    function kn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], v = h.instance, b = h.currentTarget;
              if (h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], v = h.instance, b = h.currentTarget, h = h.listener, v !== o && f.isPropagationStopped())
                break e;
              v !== null ? se(
                v,
                Ml,
                f,
                h,
                b
              ) : Ml(f, h, b), o = v;
            }
        }
      }
    }
    function $e(e, t) {
      b0.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[hm];
      a === void 0 && (a = t[hm] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (vd(t, e, 2, !1), a.add(i));
    }
    function pd(e, t, a) {
      b0.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), vd(
        a,
        e,
        i,
        t
      );
    }
    function Ly(e) {
      if (!e[Kv]) {
        e[Kv] = !0, mv.forEach(function(a) {
          a !== "selectionchange" && (b0.has(a) || pd(a, !1, e), pd(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Kv] || (t[Kv] = !0, pd("selectionchange", !1, t));
      }
    }
    function vd(e, t, a, i) {
      switch (Md(t)) {
        case xl:
          var o = Eg;
          break;
        case bn:
          o = zd;
          break;
        default:
          o = Ai;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !C || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function kl(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var v = d.tag;
                if ((v === 3 || v === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = la(h), d === null) return;
              if (v = d.tag, v === 5 || v === 6 || v === 26 || v === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      os(function() {
        var b = f, B = Ji(a), j = [];
        e: {
          var H = X0.get(e);
          if (H !== void 0) {
            var L = be, de = e;
            switch (e) {
              case "keypress":
                if (to(a) === 0) break e;
              case "keydown":
              case "keyup":
                L = eS;
                break;
              case "focusin":
                de = "focus", L = ut;
                break;
              case "focusout":
                de = "blur", L = ut;
                break;
              case "beforeblur":
              case "afterblur":
                L = ut;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                L = Ze;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                L = Ee;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                L = aS;
                break;
              case j0:
              case G0:
              case L0:
                L = Cg;
                break;
              case V0:
                L = uS;
                break;
              case "scroll":
              case "scrollend":
                L = z;
                break;
              case "wheel":
                L = cS;
                break;
              case "copy":
              case "cut":
              case "paste":
                L = Jb;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                L = _0;
                break;
              case "toggle":
              case "beforetoggle":
                L = fS;
            }
            var De = (t & 4) !== 0, Ht = !De && (e === "scroll" || e === "scrollend"), at = De ? H !== null ? H + "Capture" : null : H;
            De = [];
            for (var T = b, E; T !== null; ) {
              var R = T;
              if (E = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || E === null || at === null || (R = gu(T, at), R != null && De.push(
                $l(
                  T,
                  R,
                  E
                )
              )), Ht) break;
              T = T.return;
            }
            0 < De.length && (H = new L(
              H,
              de,
              null,
              a,
              B
            ), j.push({
              event: H,
              listeners: De
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (H = e === "mouseover" || e === "pointerover", L = e === "mouseout" || e === "pointerout", H && a !== r && (de = a.relatedTarget || a.fromElement) && (la(de) || de[_i]))
              break e;
            if ((L || H) && (H = B.window === B ? B : (H = B.ownerDocument) ? H.defaultView || H.parentWindow : window, L ? (de = a.relatedTarget || a.toElement, L = b, de = de ? la(de) : null, de !== null && (Ht = nt(de), De = de.tag, de !== Ht || De !== 5 && De !== 27 && De !== 6) && (de = null)) : (L = null, de = b), L !== de)) {
              if (De = Ze, R = "onMouseLeave", at = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (De = _0, R = "onPointerLeave", at = "onPointerEnter", T = "pointer"), Ht = L == null ? H : ln(L), E = de == null ? H : ln(de), H = new De(
                R,
                T + "leave",
                L,
                a,
                B
              ), H.target = Ht, H.relatedTarget = E, R = null, la(B) === b && (De = new De(
                at,
                T + "enter",
                de,
                a,
                B
              ), De.target = E, De.relatedTarget = Ht, R = De), Ht = R, L && de)
                t: {
                  for (De = L, at = de, T = 0, E = De; E; E = gl(E))
                    T++;
                  for (E = 0, R = at; R; R = gl(R))
                    E++;
                  for (; 0 < T - E; )
                    De = gl(De), T--;
                  for (; 0 < E - T; )
                    at = gl(at), E--;
                  for (; T--; ) {
                    if (De === at || at !== null && De === at.alternate)
                      break t;
                    De = gl(De), at = gl(at);
                  }
                  De = null;
                }
              else De = null;
              L !== null && Vy(
                j,
                H,
                L,
                De,
                !1
              ), de !== null && Ht !== null && Vy(
                j,
                Ht,
                de,
                De,
                !0
              );
            }
          }
          e: {
            if (H = b ? ln(b) : window, L = H.nodeName && H.nodeName.toLowerCase(), L === "select" || L === "input" && H.type === "file")
              var V = _h;
            else if (Rp(H))
              if (q0)
                V = mg;
              else {
                V = Hh;
                var le = hg;
              }
            else
              L = H.nodeName, !L || L.toLowerCase() !== "input" || H.type !== "checkbox" && H.type !== "radio" ? b && Ki(b.elementType) && (V = _h) : V = yg;
            if (V && (V = V(e, b))) {
              ds(
                j,
                V,
                a,
                B
              );
              break e;
            }
            le && le(e, H, b), e === "focusout" && b && H.type === "number" && b.memoizedProps.value != null && ls(H, "number", H.value);
          }
          switch (le = b ? ln(b) : window, e) {
            case "focusin":
              (Rp(le) || le.contentEditable === "true") && (Jd = le, Hg = b, xm = null);
              break;
            case "focusout":
              xm = Hg = Jd = null;
              break;
            case "mousedown":
              xg = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              xg = !1, Up(
                j,
                a,
                B
              );
              break;
            case "selectionchange":
              if (hS) break;
            case "keydown":
            case "keyup":
              Up(
                j,
                a,
                B
              );
          }
          var qe;
          if (_g)
            e: {
              switch (e) {
                case "compositionstart":
                  var he = "onCompositionStart";
                  break e;
                case "compositionend":
                  he = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  he = "onCompositionUpdate";
                  break e;
              }
              he = void 0;
            }
          else
            Kd ? Jl(e, a) && (he = "onCompositionEnd") : e === "keydown" && a.keyCode === H0 && (he = "onCompositionStart");
          he && (x0 && a.locale !== "ko" && (Kd || he !== "onCompositionStart" ? he === "onCompositionEnd" && Kd && (qe = bu()) : (K = B, x = "value" in K ? K.value : K.textContent, Kd = !0)), le = fr(
            b,
            he
          ), 0 < le.length && (he = new C0(
            he,
            e,
            null,
            a,
            B
          ), j.push({
            event: he,
            listeners: le
          }), qe ? he.data = qe : (qe = ei(a), qe !== null && (he.data = qe)))), (qe = sS ? ss(e, a) : Ef(e, a)) && (he = fr(
            b,
            "onBeforeInput"
          ), 0 < he.length && (le = new $b(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            B
          ), j.push({
            event: le,
            listeners: he
          }), le.data = qe)), Nt(
            j,
            e,
            b,
            a,
            B
          );
        }
        kn(j, t);
      });
    }
    function $l(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function fr(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = gu(e, a), o != null && i.unshift(
          $l(e, o, f)
        ), o = gu(e, t), o != null && i.push(
          $l(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function gl(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Vy(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, v = h.alternate, b = h.stateNode;
        if (h = h.tag, v !== null && v === i) break;
        h !== 5 && h !== 26 && h !== 27 || b === null || (v = b, o ? (b = gu(a, f), b != null && d.unshift(
          $l(a, b, v)
        )) : o || (b = gu(a, f), b != null && d.push(
          $l(a, b, v)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function $n(e, t) {
      Pc(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Um || (Um = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Fa,
        possibleRegistrationNames: Uc
      };
      Ki(e) || typeof t.is == "string" || Mh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function Bt(e, t, a, i) {
      t !== a && (a = Ul(a), Ul(t) !== a && (i[e] = t));
    }
    function Ti(e, t, a) {
      t.forEach(function(i) {
        a[Qy(i)] = i === "style" ? Ec(e) : e.getAttribute(i);
      });
    }
    function Ja(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function gd(e, t) {
      return e = e.namespaceURI === _r || e.namespaceURI === $o ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Ul(e) {
      return g(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        me(e)
      ), N(e)), (typeof e == "string" ? e : "" + e).replace(wS, `
`).replace(jS, "");
    }
    function Xy(e, t) {
      return t = Ul(t), Ul(e) === t;
    }
    function Hu() {
    }
    function ft(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Sf(i, t, !1), t === "body" || t === "textarea" && i === "" || Zi(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Sf("" + i, t, !1), t !== "body" && Zi(e, "" + i));
          break;
        case "className":
          xe(e, "class", i);
          break;
        case "tabIndex":
          xe(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          xe(e, a, i);
          break;
        case "style":
          Tf(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            xe(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Q(i, a), i = eo("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || $v || ($v = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || kv || (kv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Jv ? t !== "button" || o.type == null || o.type === "submit" || Jv ? typeof i == "function" && (o.name == null || nb || (nb = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || $v || ($v = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || kv || (kv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Jv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Jv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && ft(e, t, "name", o.name, o, null), ft(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), ft(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), ft(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (ft(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), ft(e, t, "method", o.method, o, null), ft(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Q(i, a), i = eo("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), $e("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), $e("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Q(i, a), a = eo("" + i), e.setAttributeNS(Jr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Q(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Wv[a] || (Wv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Q(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Q(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Q(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          $e("beforetoggle", e), $e("toggle", e), tt(e, "popover", i);
          break;
        case "xlinkActuate":
          Pt(
            e,
            Jr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Pt(
            e,
            Jr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Pt(
            e,
            Jr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Pt(
            e,
            Jr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Pt(
            e,
            Jr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Pt(
            e,
            Jr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Pt(
            e,
            S0,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Pt(
            e,
            S0,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Pt(
            e,
            S0,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), tt(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          ub || i == null || typeof i != "object" || (ub = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = cs(a), tt(e, a, i)) : Fa.hasOwnProperty(a) && i != null && typeof i != "function" && Ja(a, i);
      }
    }
    function Tc(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Tf(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Zi(e, i) : (typeof i == "number" || typeof i == "bigint") && Zi(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ja(a, i), $e("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ja(a, i), $e("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ja(a, i), e.onclick = Hu);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Fa.hasOwnProperty(a))
            i != null && typeof i != "function" && Ja(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[ma] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : tt(e, a, i);
            }
      }
    }
    function Kt(e, t, a) {
      switch ($n(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          $e("error", e), $e("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    ft(e, t, f, d, a, null);
                }
            }
          o && ft(e, t, "srcSet", a.srcSet, a, null), i && ft(e, t, "src", a.src, a, null);
          return;
        case "input":
          ye("input", a), $e("invalid", e);
          var h = f = d = o = null, v = null, b = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var B = a[i];
              if (B != null)
                switch (i) {
                  case "name":
                    o = B;
                    break;
                  case "type":
                    d = B;
                    break;
                  case "checked":
                    v = B;
                    break;
                  case "defaultChecked":
                    b = B;
                    break;
                  case "value":
                    f = B;
                    break;
                  case "defaultValue":
                    h = B;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (B != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    ft(e, t, i, B, a, null);
                }
            }
          Wu(e, a), gp(
            e,
            f,
            h,
            v,
            b,
            d,
            o,
            !1
          ), pu(e);
          return;
        case "select":
          ye("select", a), $e("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  ft(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          vf(e, a), t = f, a = d, e.multiple = !!i, t != null ? vu(e, !!i, t, !1) : a != null && vu(e, !!i, a, !0);
          return;
        case "textarea":
          ye("textarea", a), $e("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  ft(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Dn(e, a), Rh(e, i, o, f), pu(e);
          return;
        case "option":
          Eh(e, a);
          for (v in a)
            if (a.hasOwnProperty(v) && (i = a[v], i != null))
              switch (v) {
                case "selected":
                  e.selected = i && typeof i != "function" && typeof i != "symbol";
                  break;
                default:
                  ft(e, t, v, i, a, null);
              }
          return;
        case "dialog":
          $e("beforetoggle", e), $e("toggle", e), $e("cancel", e), $e("close", e);
          break;
        case "iframe":
        case "object":
          $e("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < ap.length; i++)
            $e(ap[i], e);
          break;
        case "image":
          $e("error", e), $e("load", e);
          break;
        case "details":
          $e("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          $e("error", e), $e("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (b in a)
            if (a.hasOwnProperty(b) && (i = a[b], i != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  ft(e, t, b, i, a, null);
              }
          return;
        default:
          if (Ki(t)) {
            for (B in a)
              a.hasOwnProperty(B) && (i = a[B], i !== void 0 && Tc(
                e,
                t,
                B,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && ft(e, t, h, i, a, null));
    }
    function ev(e, t, a, i) {
      switch ($n(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, v = null, b = null, B = null;
          for (L in a) {
            var j = a[L];
            if (a.hasOwnProperty(L) && j != null)
              switch (L) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  v = j;
                default:
                  i.hasOwnProperty(L) || ft(
                    e,
                    t,
                    L,
                    null,
                    i,
                    j
                  );
              }
          }
          for (var H in i) {
            var L = i[H];
            if (j = a[H], i.hasOwnProperty(H) && (L != null || j != null))
              switch (H) {
                case "type":
                  f = L;
                  break;
                case "name":
                  o = L;
                  break;
                case "checked":
                  b = L;
                  break;
                case "defaultChecked":
                  B = L;
                  break;
                case "value":
                  d = L;
                  break;
                case "defaultValue":
                  h = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  L !== j && ft(
                    e,
                    t,
                    H,
                    L,
                    i,
                    j
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || ab || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), ab = !0), !t || i || lb || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), lb = !0), Fu(
            e,
            d,
            h,
            v,
            b,
            B,
            f,
            o
          );
          return;
        case "select":
          L = d = h = H = null;
          for (f in a)
            if (v = a[f], a.hasOwnProperty(f) && v != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  L = v;
                default:
                  i.hasOwnProperty(f) || ft(
                    e,
                    t,
                    f,
                    null,
                    i,
                    v
                  );
              }
          for (o in i)
            if (f = i[o], v = a[o], i.hasOwnProperty(o) && (f != null || v != null))
              switch (o) {
                case "value":
                  H = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== v && ft(
                    e,
                    t,
                    o,
                    f,
                    i,
                    v
                  );
              }
          i = h, t = d, a = L, H != null ? vu(e, !!t, H, !1) : !!a != !!t && (i != null ? vu(e, !!t, i, !0) : vu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          L = H = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  ft(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  H = o;
                  break;
                case "defaultValue":
                  L = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && ft(e, t, d, o, i, f);
              }
          as(e, H, L);
          return;
        case "option":
          for (var de in a)
            if (H = a[de], a.hasOwnProperty(de) && H != null && !i.hasOwnProperty(de))
              switch (de) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  ft(
                    e,
                    t,
                    de,
                    null,
                    i,
                    H
                  );
              }
          for (v in i)
            if (H = i[v], L = a[v], i.hasOwnProperty(v) && H !== L && (H != null || L != null))
              switch (v) {
                case "selected":
                  e.selected = H && typeof H != "function" && typeof H != "symbol";
                  break;
                default:
                  ft(
                    e,
                    t,
                    v,
                    H,
                    i,
                    L
                  );
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var De in a)
            H = a[De], a.hasOwnProperty(De) && H != null && !i.hasOwnProperty(De) && ft(
              e,
              t,
              De,
              null,
              i,
              H
            );
          for (b in i)
            if (H = i[b], L = a[b], i.hasOwnProperty(b) && H !== L && (H != null || L != null))
              switch (b) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (H != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  ft(
                    e,
                    t,
                    b,
                    H,
                    i,
                    L
                  );
              }
          return;
        default:
          if (Ki(t)) {
            for (var Ht in a)
              H = a[Ht], a.hasOwnProperty(Ht) && H !== void 0 && !i.hasOwnProperty(Ht) && Tc(
                e,
                t,
                Ht,
                void 0,
                i,
                H
              );
            for (B in i)
              H = i[B], L = a[B], !i.hasOwnProperty(B) || H === L || H === void 0 && L === void 0 || Tc(
                e,
                t,
                B,
                H,
                i,
                L
              );
            return;
          }
      }
      for (var at in a)
        H = a[at], a.hasOwnProperty(at) && H != null && !i.hasOwnProperty(at) && ft(e, t, at, null, i, H);
      for (j in i)
        H = i[j], L = a[j], !i.hasOwnProperty(j) || H === L || H == null && L == null || ft(e, t, j, H, i, L);
    }
    function Qy(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Ec(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Zy(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (F(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Cr.has(f) ? (F(d, f), i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(Lu, "-$1").toLowerCase().replace(Vu, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Ul(i), Ul(t) !== i && (a.style = Ec(e)));
      }
    }
    function Wl(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Q(i, t), e === "" + i)
              return;
        }
      Bt(t, e, i, f);
    }
    function Ky(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      Bt(t, e, i, f);
    }
    function Jy(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Q(i, a), e === "" + i)
              return;
        }
      Bt(t, e, i, f);
    }
    function tv(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Q(i, t), e === "" + i))
              return;
        }
      Bt(t, e, i, f);
    }
    function mt(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Q(i, t), a = eo("" + i), e === a)
              return;
        }
      Bt(t, e, i, f);
    }
    function Ot(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Ki(t)) {
        for (var v in a)
          if (a.hasOwnProperty(v)) {
            var b = a[v];
            if (b != null) {
              if (Fa.hasOwnProperty(v))
                typeof b != "function" && Ja(v, b);
              else if (a.suppressHydrationWarning !== !0)
                switch (v) {
                  case "children":
                    typeof b != "string" && typeof b != "number" || Bt(
                      "children",
                      e.textContent,
                      b,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, b = b ? b.__html : void 0, b != null && (b = gd(e, b), Bt(
                      v,
                      d,
                      b,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(v), Zy(e, b, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(v.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      v
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Ne(
                      e,
                      "class",
                      b
                    ), Bt(
                      "className",
                      d,
                      b,
                      o
                    );
                    continue;
                  default:
                    i.context === Vc && t !== "svg" && t !== "math" ? f.delete(v.toLowerCase()) : f.delete(v), d = Ne(
                      e,
                      v,
                      b
                    ), Bt(
                      v,
                      d,
                      b,
                      o
                    );
                }
            }
          }
      } else
        for (b in a)
          if (a.hasOwnProperty(b) && (v = a[b], v != null)) {
            if (Fa.hasOwnProperty(b))
              typeof v != "function" && Ja(b, v);
            else if (a.suppressHydrationWarning !== !0)
              switch (b) {
                case "children":
                  typeof v != "string" && typeof v != "number" || Bt(
                    "children",
                    e.textContent,
                    v,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = gd(e, v), d !== v && (o[b] = { __html: d }));
                  continue;
                case "className":
                  Wl(
                    e,
                    b,
                    "class",
                    v,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Wl(
                    e,
                    b,
                    "tabindex",
                    v,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(b), Zy(e, v, o);
                  continue;
                case "multiple":
                  f.delete(b), Bt(
                    b,
                    e.multiple,
                    v,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(b), Bt(
                    b,
                    e.muted,
                    v,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), Bt(
                    b,
                    e.autofocus,
                    v,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(b), d = e.getAttribute("data"), Bt(
                      b,
                      d,
                      v,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(v !== "" || t === "a" && b === "href" || t === "object" && b === "data")) {
                    console.error(
                      b === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      b,
                      b
                    );
                    continue;
                  }
                  mt(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(b), typeof v == "function") {
                    f.delete(b.toLowerCase()), b === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === GS) {
                    f.delete(b.toLowerCase()), Bt(
                      b,
                      "function",
                      v,
                      o
                    );
                    continue;
                  }
                  mt(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  mt(
                    e,
                    b,
                    "xlink:href",
                    v,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Jy(
                    e,
                    b,
                    "contenteditable",
                    v,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Jy(
                    e,
                    b,
                    "spellcheck",
                    v,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Jy(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  Ky(
                    e,
                    b,
                    b.toLowerCase(),
                    v,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var B = d = b, j = o;
                    if (f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (v === !1) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (v === !0 && h === "") break e;
                          break;
                        default:
                          if (Q(v, d), h === "" + v)
                            break e;
                      }
                    Bt(
                      d,
                      h,
                      v,
                      j
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, B = d = b, j = o, f.delete(B), h = h.getAttribute(B), h === null)
                      switch (typeof v) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(v) || 1 > v) break e;
                      }
                    else if (v != null)
                      switch (typeof v) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(v) || 1 > v) && (Q(v, d), h === "" + v))
                            break e;
                      }
                    Bt(
                      d,
                      h,
                      v,
                      j
                    );
                  }
                  continue;
                case "rowSpan":
                  tv(
                    e,
                    b,
                    "rowspan",
                    v,
                    f,
                    o
                  );
                  continue;
                case "start":
                  tv(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Wl(
                    e,
                    b,
                    "x-height",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Wl(
                    e,
                    b,
                    "xlink:actuate",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Wl(
                    e,
                    b,
                    "xlink:arcrole",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Wl(
                    e,
                    b,
                    "xlink:role",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Wl(
                    e,
                    b,
                    "xlink:show",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Wl(
                    e,
                    b,
                    "xlink:title",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Wl(
                    e,
                    b,
                    "xlink:type",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Wl(
                    e,
                    b,
                    "xml:base",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Wl(
                    e,
                    b,
                    "xml:lang",
                    v,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Wl(
                    e,
                    b,
                    "xml:space",
                    v,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  v !== "" || Wv[b] || (Wv[b] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    b
                  )), Ky(
                    e,
                    b,
                    b,
                    v,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N") {
                    h = cs(b), d = !1, i.context === Vc && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (B = b.toLowerCase(), B = Hc.hasOwnProperty(
                      B
                    ) && Hc[B] || null, B !== null && B !== b && (d = !0, f.delete(B)), f.delete(h));
                    e: if (B = e, j = h, h = v, Ue(j))
                      if (B.hasAttribute(j))
                        B = B.getAttribute(
                          j
                        ), Q(
                          h,
                          j
                        ), h = B === "" + h ? h : B;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (B = j.toLowerCase().slice(0, 5), B !== "data-" && B !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || Bt(
                      b,
                      h,
                      v,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Ti(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Fe(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function Ie(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function pt(e) {
      switch (e) {
        case $o:
          return bh;
        case _r:
          return Pv;
        default:
          return Vc;
      }
    }
    function sa(e, t) {
      if (e === Vc)
        switch (t) {
          case "svg":
            return bh;
          case "math":
            return Pv;
          default:
            return Vc;
        }
      return e === bh && t === "foreignObject" ? Vc : e;
    }
    function Wn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Mo() {
      var e = window.event;
      return e && e.type === "popstate" ? e === A0 ? !1 : (A0 = e, !0) : (A0 = null, !1);
    }
    function ky(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function xu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Jt(e, t, a, i) {
      ev(e, t, a, i), e[ma] = i;
    }
    function Nu(e) {
      Zi(e, "");
    }
    function Rc(e, t, a) {
      e.nodeValue = a;
    }
    function Fn(e) {
      return e === "head";
    }
    function ka(e, t) {
      e.removeChild(t);
    }
    function Uo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function Co(e, t) {
      var a = t, i = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Iv) {
            if (0 < i && 8 > i) {
              a = i;
              var d = e.ownerDocument;
              if (a & VS && No(d.documentElement), a & XS && No(d.body), a & QS)
                for (a = d.head, No(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, v = d.nodeName;
                  d[Zo] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), zc(t);
              return;
            }
            o--;
          } else
            a === Fv || a === Lc || a === np ? o++ : i = a.charCodeAt(0) - 48;
        else i = 0;
        a = f;
      } while (a);
      zc(t);
    }
    function da(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function $y(e) {
      e.nodeValue = "";
    }
    function Wy(e, t) {
      t = t[ZS], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function bd(e, t) {
      e.nodeValue = t;
    }
    function _o(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            _o(a), tn(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Ei(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Zo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Q(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = _l(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Cl(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = _l(e.nextSibling), e === null)) return null;
      return e;
    }
    function In(e) {
      return e.data === np || e.data === Lc && e.ownerDocument.readyState === cb;
    }
    function Ho(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Lc || a.readyState === cb)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function _l(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Fv || t === np || t === Lc || t === T0 || t === ib)
            break;
          if (t === Iv) return null;
        }
      }
      return e;
    }
    function Sd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Qy(f.name)] = f.name.toLowerCase() === "style" ? Ec(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Td(e, t, a) {
      return a === null || a[LS] !== !0 ? (e.nodeValue === t ? e = null : (t = Ul(t), e = Ul(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Fy(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Iv) {
            if (t === 0)
              return _l(e.nextSibling);
            t--;
          } else
            a !== Fv && a !== np && a !== Lc || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function xo(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Fv || a === np || a === Lc) {
            if (t === 0) return e;
            t--;
          } else a === Iv && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Iy(e) {
      zc(e);
    }
    function Da(e) {
      zc(e);
    }
    function Py(e, t, a, i, o) {
      switch (o && is(e, i.ancestorInfo), t = Ie(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function za(e, t, a, i) {
      if (!a[_i] && Al(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Kt(a, e, t), a[Vl] = i, a[ma] = t;
    }
    function No(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      tn(e);
    }
    function rr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function lv(e, t, a) {
      var i = Sh;
      if (i && typeof t == "string" && t) {
        var o = Sa(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), hb.has(o) || (hb.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Kt(t, "link", e), D(t), i.head.appendChild(t)));
      }
    }
    function Bu(e, t, a, i) {
      var o = (o = eu.current) ? rr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Ri(a.href), t = m(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Ri(a.href);
            var f = m(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: $r, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Pn(e)
            )) && !f._p && (d.instance = f, d.state.loading = up | hu), !yu.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              yu.set(e, h), f || av(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Ac(t) + `
  + ` + Ac(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Ac(t) + `
  + ` + Ac(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Oc(a), t = m(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function Ac(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : wu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : wu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : wu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Ri(e) {
      return 'href="' + Sa(e) + '"';
    }
    function Pn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function em(e) {
      return Xe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function av(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = up : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= up;
      }), t.addEventListener("error", function() {
        return i.loading |= sb;
      }), Kt(t, "link", a), D(t), e.head.appendChild(t));
    }
    function Oc(e) {
      return '[src="' + Sa(e) + '"]';
    }
    function Dc(e) {
      return "script[async]" + e;
    }
    function Ed(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Sa(a.href) + '"]'
            );
            if (i)
              return t.instance = i, D(i), i;
            var o = Xe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), D(i), Kt(i, "style", o), Rd(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Ri(a.href);
            var f = e.querySelector(
              Pn(o)
            );
            if (f)
              return t.state.loading |= hu, t.instance = f, D(f), f;
            i = em(a), (o = yu.get(o)) && tm(i, o), f = (e.ownerDocument || e).createElement("link"), D(f);
            var d = f;
            return d._p = new Promise(function(h, v) {
              d.onload = h, d.onerror = v;
            }), Kt(f, "link", i), t.state.loading |= hu, Rd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Oc(a.src), (o = e.querySelector(
              Dc(f)
            )) ? (t.instance = o, D(o), o) : (i = a, (o = yu.get(f)) && (i = Xe({}, a), lm(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), D(o), Kt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & hu) === $r && (i = t.instance, t.state.loading |= hu, Rd(i, a.precedence, e));
      return t.instance;
    }
    function Rd(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function tm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function lm(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function am(e, t, a) {
      if (eg === null) {
        var i = /* @__PURE__ */ new Map(), o = eg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = eg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Zo] || f[Vl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== $o) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function nm(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Bo(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === bh || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Fe(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function sr(e) {
      return !(e.type === "stylesheet" && (e.state.loading & db) === $r);
    }
    function nv() {
    }
    function uv(e, t, a) {
      if (ip === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var i = ip;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & hu) === $r) {
        if (t.instance === null) {
          var o = Ri(a.href), f = e.querySelector(
            Pn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = dr.bind(i), e.then(i, i)), t.state.loading |= hu, t.instance = f, D(f);
            return;
          }
          f = e.ownerDocument || e, a = em(a), (o = yu.get(o)) && tm(a, o), f = f.createElement("link"), D(f);
          var d = f;
          d._p = new Promise(function(h, v) {
            d.onload = h, d.onerror = v;
          }), Kt(f, "link", a), t.instance = f;
        }
        i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & db) === $r && (i.count++, t = dr.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function iv() {
      if (ip === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = ip;
      return e.stylesheets && e.count === 0 && Ad(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Ad(e, e.stylesheets), e.unsuspend) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function dr() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          Ad(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Ad(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, tg = /* @__PURE__ */ new Map(), t.forEach(cv, e), tg = null, dr.call(e));
    }
    function cv(e, t) {
      if (!(t.state.loading & hu)) {
        var a = tg.get(e);
        if (a) var i = a.get(D0);
        else {
          a = /* @__PURE__ */ new Map(), tg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(D0, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(D0, o), a.set(d, o), this.count++, i = dr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= hu;
      }
    }
    function Od(e, t, a, i, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kr, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kc(0), this.hiddenUpdates = Kc(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function um(e, t, a, i, o, f, d, h, v, b, B, j) {
      return e = new Od(
        e,
        t,
        a,
        d,
        h,
        v,
        b,
        j
      ), t = vS, f === !0 && (t |= va | Xu), $t && (t |= Il), f = M(3, null, null, t), e.current = f, f.stateNode = e, t = Cf(), tc(t), e.pooledCache = t, tc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, na(f), e;
    }
    function im(e) {
      return e ? (e = Wo, e) : Wo;
    }
    function vt(e, t, a, i, o, f) {
      if (Hl && typeof Hl.onScheduleFiberRoot == "function")
        try {
          Hl.onScheduleFiberRoot(Ui, i, a);
        } catch (d) {
          ya || (ya = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      ie !== null && typeof ie.markRenderScheduled == "function" && ie.markRenderScheduled(t), o = im(o), i.context === null ? i.context = o : i.pendingContext = o, pa && Ua !== null && !vb && (vb = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        re(Ua) || "Unknown"
      )), i = Hn(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = rn(e, i, t), a !== null && (Qt(a, e, t), oi(a, e, t));
    }
    function Dd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function cm(e, t) {
      Dd(e, t), (e = e.alternate) && Dd(e, t);
    }
    function om(e) {
      if (e.tag === 13) {
        var t = aa(e, 67108864);
        t !== null && Qt(t, e, 67108864), cm(e, 67108864);
      }
    }
    function Sg() {
      return Ua;
    }
    function Tg() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var i = sf(t);
        e.set(t, i), t *= 2;
      }
      return e;
    }
    function Eg(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = Oe.p;
      try {
        Oe.p = xl, Ai(e, t, a, i);
      } finally {
        Oe.p = f, q.T = o;
      }
    }
    function zd(e, t, a, i) {
      var o = q.T;
      q.T = null;
      var f = Oe.p;
      try {
        Oe.p = bn, Ai(e, t, a, i);
      } finally {
        Oe.p = f, q.T = o;
      }
    }
    function Ai(e, t, a, i) {
      if (ag) {
        var o = hr(i);
        if (o === null)
          kl(
            e,
            t,
            i,
            ng,
            a
          ), Oi(e, i);
        else if (yr(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Oi(e, i), t & 4 && -1 < $S.indexOf(e)) {
          for (; o !== null; ) {
            var f = Al(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = It(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var v = 1 << 31 - Ll(d);
                        h.entanglements[1] |= v, d &= ~v;
                      }
                      Ka(f), (gt & (xa | Ju)) === Sn && (Lv = tu() + $1, Sc(0));
                    }
                  }
                  break;
                case 13:
                  h = aa(f, 2), h !== null && Qt(h, f, 2), gc(), cm(f, 2);
              }
            if (f = hr(i), f === null && kl(
              e,
              t,
              i,
              ng,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          kl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function hr(e) {
      return e = Ji(e), Yo(e);
    }
    function Yo(e) {
      if (ng = null, e = la(e), e !== null) {
        var t = nt(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = dl(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ng = e, null;
    }
    function Md(e) {
      switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
          return xl;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return bn;
        case "message":
          switch (Mi()) {
            case xd:
              return xl;
            case Rr:
              return bn;
            case Vo:
            case zg:
              return Gu;
            case Ar:
              return qd;
            default:
              return Gu;
          }
        default:
          return Gu;
      }
    }
    function Oi(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          cf = null;
          break;
        case "dragenter":
        case "dragleave":
          of = null;
          break;
        case "mouseover":
        case "mouseout":
          ff = null;
          break;
        case "pointerover":
        case "pointerout":
          op.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          fp.delete(t.pointerId);
      }
    }
    function ha(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = Al(t), t !== null && om(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function yr(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return cf = ha(
            cf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return of = ha(
            of,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ff = ha(
            ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return op.set(
            f,
            ha(
              op.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, fp.set(
            f,
            ha(
              fp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ov(e) {
      var t = la(e.target);
      if (t !== null) {
        var a = nt(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = dl(a), t !== null) {
              e.blockedOn = t, kc(e.priority, function() {
                if (a.tag === 13) {
                  var i = ra(a);
                  i = El(i);
                  var o = aa(
                    a,
                    i
                  );
                  o !== null && Qt(o, a, i), cm(a, i);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function mr(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = hr(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          r !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = o, a.target.dispatchEvent(i), r === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), r = null;
        } else
          return t = Al(a), t !== null && om(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function fm(e, t, a) {
      mr(e) && a.delete(t);
    }
    function fv() {
      z0 = !1, cf !== null && mr(cf) && (cf = null), of !== null && mr(of) && (of = null), ff !== null && mr(ff) && (ff = null), op.forEach(fm), fp.forEach(fm);
    }
    function pr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, z0 || (z0 = !0, kt.unstable_scheduleCallback(
        kt.unstable_NormalPriority,
        fv
      )));
    }
    function rv(e) {
      ug !== e && (ug = e, kt.unstable_scheduleCallback(
        kt.unstable_NormalPriority,
        function() {
          ug === e && (ug = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Yo(i || a) === null)
                continue;
              break;
            }
            var f = Al(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), cc(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function zc(e) {
      function t(v) {
        return pr(v, e);
      }
      cf !== null && pr(cf, e), of !== null && pr(of, e), ff !== null && pr(ff, e), op.forEach(t), fp.forEach(t);
      for (var a = 0; a < rf.length; a++) {
        var i = rf[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < rf.length && (a = rf[0], a.blockedOn === null); )
        ov(a), a.blockedOn === null && rf.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[ma] || null;
          if (typeof f == "function")
            d || rv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[ma] || null)
                h = d.formAction;
              else if (Yo(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), rv(a);
          }
        }
    }
    function Ud(e) {
      this._internalRoot = e;
    }
    function vr(e) {
      this._internalRoot = e;
    }
    function sv(e) {
      e[_i] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var kt = Qb(), gr = mp(), Rg = Zb(), Xe = Object.assign, br = Symbol.for("react.element"), Di = Symbol.for("react.transitional.element"), Mc = Symbol.for("react.portal"), Ye = Symbol.for("react.fragment"), qo = Symbol.for("react.strict_mode"), wo = Symbol.for("react.profiler"), rm = Symbol.for("react.provider"), Cd = Symbol.for("react.consumer"), $a = Symbol.for("react.context"), Yu = Symbol.for("react.forward_ref"), jo = Symbol.for("react.suspense"), zi = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), Ma = Symbol.for("react.lazy"), sm = Symbol.for("react.activity"), dv = Symbol.for("react.memo_cache_sentinel"), dm = Symbol.iterator, _d = Symbol.for("react.client.reference"), Ce = Array.isArray, q = gr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Oe = Rg.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ag = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Tr = [], Er = [], Wa = -1, qu = Dt(null), Go = Dt(null), eu = Dt(null), Lo = Dt(null), wu = Object.prototype.hasOwnProperty, Hd = kt.unstable_scheduleCallback, Og = kt.unstable_cancelCallback, hv = kt.unstable_shouldYield, Dg = kt.unstable_requestPaint, tu = kt.unstable_now, Mi = kt.unstable_getCurrentPriorityLevel, xd = kt.unstable_ImmediatePriority, Rr = kt.unstable_UserBlockingPriority, Vo = kt.unstable_NormalPriority, zg = kt.unstable_LowPriority, Ar = kt.unstable_IdlePriority, Mg = kt.log, gn = kt.unstable_setDisableYieldValue, Ui = null, Hl = null, ie = null, ya = !1, $t = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Ll = Math.clz32 ? Math.clz32 : Zc, Nd = Math.log, ju = Math.LN2, Bd = 256, Yd = 4194304, xl = 2, bn = 8, Gu = 32, qd = 268435456, Ci = Math.random().toString(36).slice(2), Vl = "__reactFiber$" + Ci, ma = "__reactProps$" + Ci, _i = "__reactContainer$" + Ci, hm = "__reactEvents$" + Ci, yv = "__reactListeners$" + Ci, Xo = "__reactHandles$" + Ci, Qo = "__reactResources$" + Ci, Zo = "__reactMarker$" + Ci, mv = /* @__PURE__ */ new Set(), Fa = {}, Uc = {}, pv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, wd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), jd = {}, Gd = {}, Hi = 0, ym, mm, vv, pm, Ko, gv, bv;
    an.__reactDisabledLog = !0;
    var vm, Or, Jo = !1, Dr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ua = null, pa = !1, Ug = /[\n"\\]/g, gm = !1, bm = !1, Sm = !1, Tm = !1, Ld = !1, Em = !1, zr = ["value", "defaultValue"], Sv = !1, Tv = /["'&<>\n\t]|^\s|\s$/, Rm = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Vd = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Xd = Vd.concat(["button"]), Am = "dd dt li option optgroup p rp rt".split(" "), Om = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, ko = {}, lu = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Lu = /([A-Z])/g, Vu = /^ms-/, Mr = /^(?:webkit|moz|o)[A-Z]/, Ur = /^-ms-/, xi = /-(.)/g, Ev = /;\s*$/, Cc = {}, _c = {}, Rv = !1, Dm = !1, Cr = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), _r = "http://www.w3.org/1998/Math/MathML", $o = "http://www.w3.org/2000/svg", Qd = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Hc = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, zm = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, au = {}, Mm = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Zd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Um = !1, Fl = {}, Hr = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), c = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, r = null, s = null, y = null, p = !1, S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = !1;
    if (S)
      try {
        var X = {};
        Object.defineProperty(X, "passive", {
          get: function() {
            C = !0;
          }
        }), window.addEventListener("test", X, X), window.removeEventListener("test", X, X);
      } catch {
        C = !1;
      }
    var K = null, x = null, Y = null, ge = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, be = Dl(ge), rt = Xe({}, ge, { view: 0, detail: 0 }), z = Dl(rt), A, U, Z, fe = Xe({}, rt, {
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
      getModifierState: rs,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Z && (Z && e.type === "mousemove" ? (A = e.screenX - Z.screenX, U = e.screenY - Z.screenY) : U = A = 0, Z = e), A);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : U;
      }
    }), Ze = Dl(fe), pe = Xe({}, fe, { dataTransfer: 0 }), Ee = Dl(pe), bl = Xe({}, rt, { relatedTarget: 0 }), ut = Dl(bl), Ni = Xe({}, ge, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Cg = Dl(Ni), Kb = Xe({}, ge, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jb = Dl(Kb), kb = Xe({}, ge, { data: 0 }), C0 = Dl(
      kb
    ), $b = C0, Wb = {
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
      MozPrintableKey: "Unidentified"
    }, Fb = {
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
      224: "Meta"
    }, Ib = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, Pb = Xe({}, rt, {
      key: function(e) {
        if (e.key) {
          var t = Wb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = to(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Fb[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rs,
      charCode: function(e) {
        return e.type === "keypress" ? to(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? to(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), eS = Dl(Pb), tS = Xe({}, fe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), _0 = Dl(tS), lS = Xe({}, rt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rs
    }), aS = Dl(lS), nS = Xe({}, ge, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uS = Dl(nS), iS = Xe({}, fe, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), cS = Dl(iS), oS = Xe({}, ge, {
      newState: 0,
      oldState: 0
    }), fS = Dl(oS), rS = [9, 13, 27, 32], H0 = 229, _g = S && "CompositionEvent" in window, Cm = null;
    S && "documentMode" in document && (Cm = document.documentMode);
    var sS = S && "TextEvent" in window && !Cm, x0 = S && (!_g || Cm && 8 < Cm && 11 >= Cm), N0 = 32, B0 = String.fromCharCode(N0), Y0 = !1, Kd = !1, dS = {
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
      week: !0
    }, _m = null, Hm = null, q0 = !1;
    S && (q0 = Ch("input") && (!document.documentMode || 9 < document.documentMode));
    var Ca = typeof Object.is == "function" ? Object.is : pg, hS = S && "documentMode" in document && 11 >= document.documentMode, Jd = null, Hg = null, xm = null, xg = !1, kd = {
      animationend: Su("Animation", "AnimationEnd"),
      animationiteration: Su("Animation", "AnimationIteration"),
      animationstart: Su("Animation", "AnimationStart"),
      transitionrun: Su("Transition", "TransitionRun"),
      transitionstart: Su("Transition", "TransitionStart"),
      transitioncancel: Su("Transition", "TransitionCancel"),
      transitionend: Su("Transition", "TransitionEnd")
    }, Ng = {}, w0 = {};
    S && (w0 = document.createElement("div").style, "AnimationEvent" in window || (delete kd.animationend.animation, delete kd.animationiteration.animation, delete kd.animationstart.animation), "TransitionEvent" in window || delete kd.transitionend.transition);
    var j0 = Wi("animationend"), G0 = Wi("animationiteration"), L0 = Wi("animationstart"), yS = Wi("transitionrun"), mS = Wi("transitionstart"), pS = Wi("transitioncancel"), V0 = Wi("transitionend"), X0 = /* @__PURE__ */ new Map(), Bg = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Bg.push("scrollEnd");
    var Yg = /* @__PURE__ */ new WeakMap(), Av = 1, xc = 2, nu = [], $d = 0, qg = 0, Wo = {};
    Object.freeze(Wo);
    var uu = null, Wd = null, Yt = 0, vS = 1, Il = 2, va = 8, Xu = 16, Q0 = 64, Z0 = !1;
    try {
      var K0 = Object.preventExtensions({});
    } catch {
      Z0 = !0;
    }
    var Fd = [], Id = 0, Ov = null, Dv = 0, iu = [], cu = 0, xr = null, Nc = 1, Bc = "", _a = null, tl = null, st = !1, Yc = !1, ou = null, Nr = null, Bi = !1, wg = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), J0 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var gS = performance, k0 = function() {
        return gS.now();
      };
    else {
      var bS = Date;
      k0 = function() {
        return bS.now();
      };
    }
    var jg = Dt(null), Gg = Dt(null), $0 = {}, zv = null, Pd = null, eh = !1, SS = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, TS = kt.unstable_scheduleCallback, ES = kt.unstable_NormalPriority, Nl = {
      $$typeof: $a,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, th = kt.unstable_now, W0 = -0, Mv = -0, Ia = -1.1, Br = -0, Uv = !1, Cv = !1, Nm = null, Lg = 0, Yr = 0, lh = null, F0 = q.S;
    q.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Np(e, t), F0 !== null && F0(e, t);
    };
    var qr = Dt(null), Qu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Bm = [], Ym = [], qm = [], wm = [], jm = [], Gm = [], wr = /* @__PURE__ */ new Set();
    Qu.recordUnsafeLifecycleWarnings = function(e, t) {
      wr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Bm.push(e), e.mode & va && typeof t.UNSAFE_componentWillMount == "function" && Ym.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && qm.push(e), e.mode & va && typeof t.UNSAFE_componentWillReceiveProps == "function" && wm.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && jm.push(e), e.mode & va && typeof t.UNSAFE_componentWillUpdate == "function" && Gm.push(e));
    }, Qu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Bm.length && (Bm.forEach(function(h) {
        e.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), Bm = []);
      var t = /* @__PURE__ */ new Set();
      0 < Ym.length && (Ym.forEach(function(h) {
        t.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), Ym = []);
      var a = /* @__PURE__ */ new Set();
      0 < qm.length && (qm.forEach(function(h) {
        a.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), qm = []);
      var i = /* @__PURE__ */ new Set();
      0 < wm.length && (wm.forEach(
        function(h) {
          i.add(
            re(h) || "Component"
          ), wr.add(h.type);
        }
      ), wm = []);
      var o = /* @__PURE__ */ new Set();
      0 < jm.length && (jm.forEach(function(h) {
        o.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), jm = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Gm.length && (Gm.forEach(function(h) {
        f.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), Gm = []), 0 < t.size) {
        var d = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = $(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = $(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var _v = /* @__PURE__ */ new Map(), I0 = /* @__PURE__ */ new Set();
    Qu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & va && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !I0.has(e.type) && (i = _v.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], _v.set(a, i)), i.push(e));
    }, Qu.flushLegacyContextWarning = function() {
      _v.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(re(o) || "Component"), I0.add(o.type);
          });
          var i = $(a);
          se(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Qu.discardPendingWarnings = function() {
      Bm = [], Ym = [], qm = [], wm = [], jm = [], Gm = [], _v = /* @__PURE__ */ new Map();
    };
    var Lm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), P0 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Hv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Vg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Vm = null, xv = !1, fu = 0, ru = 1, Ha = 2, Pl = 4, Bl = 8, e1 = 0, t1 = 1, l1 = 2, Xg = 3, Fo = !1, a1 = !1, Qg = null, Zg = !1, ah = Dt(null), Nv = Dt(0), nh, n1 = /* @__PURE__ */ new Set(), u1 = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), i1 = /* @__PURE__ */ new Set(), Io = 0, _e = null, Mt = null, Sl = null, Bv = !1, uh = !1, jr = !1, Yv = 0, Xm = 0, qc = null, RS = 0, AS = 25, w = null, su = null, wc = -1, Qm = !1, qv = {
      readContext: Ct,
      use: Nn,
      useCallback: jt,
      useContext: jt,
      useEffect: jt,
      useImperativeHandle: jt,
      useLayoutEffect: jt,
      useInsertionEffect: jt,
      useMemo: jt,
      useReducer: jt,
      useRef: jt,
      useState: jt,
      useDebugValue: jt,
      useDeferredValue: jt,
      useTransition: jt,
      useSyncExternalStore: jt,
      useId: jt,
      useHostTransitionStatus: jt,
      useFormState: jt,
      useActionState: jt,
      useOptimistic: jt,
      useMemoCache: jt,
      useCacheRefresh: jt
    }, Jg = null, c1 = null, kg = null, o1 = null, Yi = null, Zu = null, wv = null;
    Jg = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return w = "useCallback", Qe(), ja(t), jf(e, t);
      },
      useContext: function(e) {
        return w = "useContext", Qe(), Ct(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", Qe(), ja(t), As(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", Qe(), ja(a), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", Qe(), ja(t), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", Qe(), ja(t), Os(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", Qe(), ja(t);
        var a = q.H;
        q.H = Yi;
        try {
          return zs(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", Qe();
        var i = q.H;
        q.H = Yi;
        try {
          return it(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", Qe(), wf(e);
      },
      useState: function(e) {
        w = "useState", Qe();
        var t = q.H;
        q.H = Yi;
        try {
          return Ou(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", Qe();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", Qe(), Ms(e, t);
      },
      useTransition: function() {
        return w = "useTransition", Qe(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", Qe(), Au(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", Qe(), jn();
      },
      useFormState: function(e, t) {
        return w = "useFormState", Qe(), co(), yo(e, t);
      },
      useActionState: function(e, t) {
        return w = "useActionState", Qe(), yo(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", Qe(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", Qe(), oc();
      }
    }, c1 = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return w = "useCallback", P(), jf(e, t);
      },
      useContext: function(e) {
        return w = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", P(), As(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", P(), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", P(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", P(), Os(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", P();
        var a = q.H;
        q.H = Yi;
        try {
          return zs(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", P();
        var i = q.H;
        q.H = Yi;
        try {
          return it(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", P(), wf(e);
      },
      useState: function(e) {
        w = "useState", P();
        var t = q.H;
        q.H = Yi;
        try {
          return Ou(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", P(), Ms(e, t);
      },
      useTransition: function() {
        return w = "useTransition", P(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", P(), Au(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", P(), jn();
      },
      useActionState: function(e, t) {
        return w = "useActionState", P(), yo(e, t);
      },
      useFormState: function(e, t) {
        return w = "useFormState", P(), co(), yo(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", P(), hn(e);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", P(), oc();
      }
    }, kg = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return w = "useCallback", P(), ic(e, t);
      },
      useContext: function(e) {
        return w = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", P(), cl(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", P(), cl(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", P(), cl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", P();
        var a = q.H;
        q.H = Zu;
        try {
          return hi(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", P();
        var i = q.H;
        q.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", P(), lt().memoizedState;
      },
      useState: function() {
        w = "useState", P();
        var e = q.H;
        q.H = Zu;
        try {
          return La(ot);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", P(), Gf(e, t);
      },
      useTransition: function() {
        return w = "useTransition", P(), _s();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", P(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", P(), lt().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", P(), co(), Rs(e);
      },
      useActionState: function(e) {
        return w = "useActionState", P(), Rs(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", P(), Du(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", P(), lt().memoizedState;
      }
    }, o1 = {
      readContext: function(e) {
        return Ct(e);
      },
      use: Nn,
      useCallback: function(e, t) {
        return w = "useCallback", P(), ic(e, t);
      },
      useContext: function(e) {
        return w = "useContext", P(), Ct(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", P(), cl(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", P(), cl(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", P(), cl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", P();
        var a = q.H;
        q.H = wv;
        try {
          return hi(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", P();
        var i = q.H;
        q.H = wv;
        try {
          return uc(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", P(), lt().memoizedState;
      },
      useState: function() {
        w = "useState", P();
        var e = q.H;
        q.H = wv;
        try {
          return uc(ot);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", P(), Us(e, t);
      },
      useTransition: function() {
        return w = "useTransition", P(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", P(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", P(), lt().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", P(), co(), mo(e);
      },
      useActionState: function(e) {
        return w = "useActionState", P(), mo(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", P(), Es(e, t);
      },
      useHostTransitionStatus: ca,
      useMemoCache: Ft,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", P(), lt().memoizedState;
      }
    }, Yi = {
      readContext: function(e) {
        return k(), Ct(e);
      },
      use: function(e) {
        return G(), Nn(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", G(), Qe(), jf(e, t);
      },
      useContext: function(e) {
        return w = "useContext", G(), Qe(), Ct(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", G(), Qe(), As(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", G(), Qe(), Ds(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", G(), Qe(), Xa(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", G(), Qe(), Os(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", G(), Qe();
        var a = q.H;
        q.H = Yi;
        try {
          return zs(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", G(), Qe();
        var i = q.H;
        q.H = Yi;
        try {
          return it(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", G(), Qe(), wf(e);
      },
      useState: function(e) {
        w = "useState", G(), Qe();
        var t = q.H;
        q.H = Yi;
        try {
          return Ou(e);
        } finally {
          q.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", G(), Qe();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", G(), Qe(), Ms(e, t);
      },
      useTransition: function() {
        return w = "useTransition", G(), Qe(), wn();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", G(), Qe(), Au(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", G(), Qe(), jn();
      },
      useFormState: function(e, t) {
        return w = "useFormState", G(), Qe(), yo(e, t);
      },
      useActionState: function(e, t) {
        return w = "useActionState", G(), Qe(), yo(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", G(), Qe(), hn(e);
      },
      useMemoCache: function(e) {
        return G(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", Qe(), oc();
      }
    }, Zu = {
      readContext: function(e) {
        return k(), Ct(e);
      },
      use: function(e) {
        return G(), Nn(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", G(), P(), ic(e, t);
      },
      useContext: function(e) {
        return w = "useContext", G(), P(), Ct(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", G(), P(), cl(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", G(), P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", G(), P(), cl(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", G(), P(), cl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", G(), P();
        var a = q.H;
        q.H = Zu;
        try {
          return hi(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", G(), P();
        var i = q.H;
        q.H = Zu;
        try {
          return La(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", G(), P(), lt().memoizedState;
      },
      useState: function() {
        w = "useState", G(), P();
        var e = q.H;
        q.H = Zu;
        try {
          return La(ot);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", G(), P();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", G(), P(), Gf(e, t);
      },
      useTransition: function() {
        return w = "useTransition", G(), P(), _s();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", G(), P(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", G(), P(), lt().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", G(), P(), Rs(e);
      },
      useActionState: function(e) {
        return w = "useActionState", G(), P(), Rs(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", G(), P(), Du(e, t);
      },
      useMemoCache: function(e) {
        return G(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", P(), lt().memoizedState;
      }
    }, wv = {
      readContext: function(e) {
        return k(), Ct(e);
      },
      use: function(e) {
        return G(), Nn(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", G(), P(), ic(e, t);
      },
      useContext: function(e) {
        return w = "useContext", G(), P(), Ct(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", G(), P(), cl(2048, Bl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", G(), P(), qn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", G(), P(), cl(4, Ha, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", G(), P(), cl(4, Pl, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", G(), P();
        var a = q.H;
        q.H = Zu;
        try {
          return hi(e, t);
        } finally {
          q.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", G(), P();
        var i = q.H;
        q.H = Zu;
        try {
          return uc(e, t, a);
        } finally {
          q.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", G(), P(), lt().memoizedState;
      },
      useState: function() {
        w = "useState", G(), P();
        var e = q.H;
        q.H = Zu;
        try {
          return uc(ot);
        } finally {
          q.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", G(), P();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", G(), P(), Us(e, t);
      },
      useTransition: function() {
        return w = "useTransition", G(), P(), Hs();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", G(), P(), Nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", G(), P(), lt().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", G(), P(), mo(e);
      },
      useActionState: function(e) {
        return w = "useActionState", G(), P(), mo(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", G(), P(), Es(e, t);
      },
      useMemoCache: function(e) {
        return G(), Ft(e);
      },
      useHostTransitionStatus: ca,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", P(), lt().memoizedState;
      }
    };
    var f1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        var i = pa;
        pa = !0;
        try {
          return e(t, a);
        } finally {
          pa = i;
        }
      }
    }, $g = f1["react-stack-bottom-frame"].bind(f1), r1 = {
      "react-stack-bottom-frame": function(e) {
        var t = pa;
        pa = !0;
        try {
          return e.render();
        } finally {
          pa = t;
        }
      }
    }, s1 = r1["react-stack-bottom-frame"].bind(r1), d1 = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Te(e, e.return, a);
        }
      }
    }, Wg = d1["react-stack-bottom-frame"].bind(d1), h1 = {
      "react-stack-bottom-frame": function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Te(e, e.return, f);
        }
      }
    }, y1 = h1["react-stack-bottom-frame"].bind(h1), m1 = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, OS = m1["react-stack-bottom-frame"].bind(m1), p1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, v1 = p1["react-stack-bottom-frame"].bind(p1), g1 = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, DS = g1["react-stack-bottom-frame"].bind(g1), b1 = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (i) {
          Te(e, t, i);
        }
      }
    }, zS = b1["react-stack-bottom-frame"].bind(b1), S1 = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Po = S1["react-stack-bottom-frame"].bind(S1), ih = null, Zm = 0, Ke = null, Fg, T1 = Fg = !1, E1 = {}, R1 = {}, A1 = {};
    bt = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = re(e), o = i || "null";
        if (!E1[o]) {
          E1[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = re(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = re(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), se(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var ch = Qf(!0), O1 = Qf(!1), du = Dt(null), qi = null, oh = 1, Km = 2, Yl = Dt(0), D1 = {}, z1 = /* @__PURE__ */ new Set(), M1 = /* @__PURE__ */ new Set(), U1 = /* @__PURE__ */ new Set(), C1 = /* @__PURE__ */ new Set(), _1 = /* @__PURE__ */ new Set(), H1 = /* @__PURE__ */ new Set(), x1 = /* @__PURE__ */ new Set(), N1 = /* @__PURE__ */ new Set(), B1 = /* @__PURE__ */ new Set(), Y1 = /* @__PURE__ */ new Set();
    Object.freeze(D1);
    var Ig = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.payload = t, a != null && (oy(a), o.callback = a), t = rn(e, o, i), t !== null && (Qt(t, e, i), oi(t, e, i)), An(e, i);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = ra(e), o = Hn(i);
        o.tag = t1, o.payload = t, a != null && (oy(a), o.callback = a), t = rn(e, o, i), t !== null && (Qt(t, e, i), oi(t, e, i)), An(e, i);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = ra(e), i = Hn(a);
        i.tag = l1, t != null && (oy(t), i.callback = t), t = rn(e, i, a), t !== null && (Qt(t, e, a), oi(t, e, a)), ie !== null && typeof ie.markForceUpdateScheduled == "function" && ie.markForceUpdateScheduled(e, a);
      }
    }, Pg = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, fh = null, e0 = null, q1 = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Xl = !1, w1 = {}, j1 = {}, G1 = {}, L1 = {}, rh = !1, V1 = {}, t0 = {}, l0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, X1 = !1, Q1 = null;
    Q1 = /* @__PURE__ */ new Set();
    var jc = !1, rl = !1, a0 = !1, Z1 = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, sh = null, dh = null, Tl = null, Pa = !1, Ku = null, Jm = 8192, MS = {
      getCacheForType: function(e) {
        var t = Ct(Nl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return Ua;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var km = Symbol.for;
      km("selector.component"), km("selector.has_pseudo_class"), km("selector.role"), km("selector.test_id"), km("selector.text");
    }
    var US = [], CS = typeof WeakMap == "function" ? WeakMap : Map, Sn = 0, xa = 2, Ju = 4, Gc = 0, $m = 1, hh = 2, n0 = 3, Gr = 4, jv = 6, K1 = 5, gt = Sn, _t = null, Pe = null, et = 0, en = 0, Wm = 1, Lr = 2, Fm = 3, J1 = 4, u0 = 5, yh = 6, Im = 7, i0 = 8, Vr = 9, Et = en, Tn = null, ef = !1, mh = !1, c0 = !1, wi = 0, ll = Gc, tf = 0, lf = 0, o0 = 0, En = 0, Xr = 0, Pm = null, Na = null, Gv = !1, f0 = 0, k1 = 300, Lv = 1 / 0, $1 = 500, ep = null, af = null, _S = 0, HS = 1, xS = 2, Qr = 0, W1 = 1, F1 = 2, I1 = 3, NS = 4, r0 = 5, ea = 0, nf = null, ph = null, uf = 0, s0 = 0, d0 = null, P1 = null, BS = 50, tp = 0, h0 = null, y0 = !1, Vv = !1, YS = 50, Zr = 0, lp = null, vh = !1, Xv = null, eb = !1, tb = /* @__PURE__ */ new Set(), qS = {}, Qv = null, gh = null, m0 = !1, p0 = !1, Zv = !1, v0 = !1, Kr = 0, g0 = {};
    (function() {
      for (var e = 0; e < Bg.length; e++) {
        var t = Bg[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), nn(a, "on" + t);
      }
      nn(j0, "onAnimationEnd"), nn(G0, "onAnimationIteration"), nn(L0, "onAnimationStart"), nn("dblclick", "onDoubleClick"), nn("focusin", "onFocus"), nn("focusout", "onBlur"), nn(yS, "onTransitionRun"), nn(mS, "onTransitionStart"), nn(pS, "onTransitionCancel"), nn(V0, "onTransitionEnd");
    })(), ae("onMouseEnter", ["mouseout", "mouseover"]), ae("onMouseLeave", ["mouseout", "mouseover"]), ae("onPointerEnter", ["pointerout", "pointerover"]), ae("onPointerLeave", ["pointerout", "pointerover"]), ee(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), ee(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), ee("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ee(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), ee(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var ap = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), b0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ap)
    ), Kv = "_reactListening" + Math.random().toString(36).slice(2), lb = !1, ab = !1, Jv = !1, nb = !1, kv = !1, $v = !1, ub = !1, Wv = {}, wS = /\r\n?/g, jS = /\u0000|\uFFFD/g, Jr = "http://www.w3.org/1999/xlink", S0 = "http://www.w3.org/XML/1998/namespace", GS = "javascript:throw new Error('React form unexpectedly submitted.')", LS = "suppressHydrationWarning", Fv = "$", Iv = "/$", Lc = "$?", np = "$!", VS = 1, XS = 2, QS = 4, T0 = "F!", ib = "F", cb = "complete", ZS = "style", Vc = 0, bh = 1, Pv = 2, E0 = null, R0 = null, ob = { dialog: !0, webview: !0 }, A0 = null, fb = typeof setTimeout == "function" ? setTimeout : void 0, KS = typeof clearTimeout == "function" ? clearTimeout : void 0, kr = -1, rb = typeof Promise == "function" ? Promise : void 0, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof rb < "u" ? function(e) {
      return rb.resolve(null).then(e).catch(ky);
    } : fb, O0 = null, $r = 0, up = 1, sb = 2, db = 3, hu = 4, yu = /* @__PURE__ */ new Map(), hb = /* @__PURE__ */ new Set(), Xc = Oe.d;
    Oe.d = {
      f: function() {
        var e = Xc.f(), t = gc();
        return e || t;
      },
      r: function(e) {
        var t = Al(e);
        t !== null && t.tag === 5 && t.type === "form" ? uy(t) : Xc.r(e);
      },
      D: function(e) {
        Xc.D(e), lv("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Xc.C(e, t), lv("preconnect", e, t);
      },
      L: function(e, t, a) {
        Xc.L(e, t, a);
        var i = Sh;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Sa(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Sa(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Sa(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Sa(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Ri(e);
              break;
            case "script":
              f = Oc(e);
          }
          yu.has(f) || (e = Xe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), yu.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            Pn(f)
          ) || t === "script" && i.querySelector(Dc(f)) || (t = i.createElement("link"), Kt(t, "link", e), D(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Xc.m(e, t);
        var a = Sh;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Sa(i) + '"][href="' + Sa(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Oc(e);
          }
          if (!yu.has(f) && (e = Xe({ rel: "modulepreload", href: e }, t), yu.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Dc(f)))
                  return;
            }
            i = a.createElement("link"), Kt(i, "link", e), D(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Xc.X(e, t);
        var a = Sh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Xe({ src: e, async: !0 }, t), (t = yu.get(o)) && lm(e, t), f = a.createElement("script"), D(f), Kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Xc.S(e, t, a);
        var i = Sh;
        if (i && e) {
          var o = m(i).hoistableStyles, f = Ri(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: $r, preload: null };
            if (d = i.querySelector(
              Pn(f)
            ))
              h.loading = up | hu;
            else {
              e = Xe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = yu.get(f)) && tm(e, a);
              var v = d = i.createElement("link");
              D(v), Kt(v, "link", e), v._p = new Promise(function(b, B) {
                v.onload = b, v.onerror = B;
              }), v.addEventListener("load", function() {
                h.loading |= up;
              }), v.addEventListener("error", function() {
                h.loading |= sb;
              }), h.loading |= hu, Rd(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Xc.M(e, t);
        var a = Sh;
        if (a && e) {
          var i = m(a).hoistableScripts, o = Oc(e), f = i.get(o);
          f || (f = a.querySelector(
            Dc(o)
          ), f || (e = Xe({ src: e, async: !0, type: "module" }, t), (t = yu.get(o)) && lm(e, t), f = a.createElement("script"), D(f), Kt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sh = typeof document > "u" ? null : document, eg = null, ip = null, D0 = null, tg = null, Wr = Ag, cp = {
      $$typeof: $a,
      Provider: null,
      Consumer: null,
      _currentValue: Wr,
      _currentValue2: Wr,
      _threadCount: 0
    }, yb = "%c%s%c ", mb = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", pb = "", lg = " ", kS = Function.prototype.bind, vb = !1, gb = null, bb = null, Sb = null, Tb = null, Eb = null, Rb = null, Ab = null, Ob = null, Db = null;
    gb = function(e, t, a, i) {
      t = W(e, t), t !== null && (a = te(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Xe({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, bb = function(e, t, a) {
      t = W(e, t), t !== null && (a = Ae(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Xe({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, Sb = function(e, t, a, i) {
      t = W(e, t), t !== null && (a = Le(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Xe({}, e.memoizedProps), a = aa(e, 2), a !== null && Qt(a, e, 2));
    }, Tb = function(e, t, a) {
      e.pendingProps = te(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Eb = function(e, t) {
      e.pendingProps = Ae(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Rb = function(e, t, a) {
      e.pendingProps = Le(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = aa(e, 2), t !== null && Qt(t, e, 2);
    }, Ab = function(e) {
      var t = aa(e, 2);
      t !== null && Qt(t, e, 2);
    }, Ob = function(e) {
      dt = e;
    }, Db = function(e) {
      Me = e;
    };
    var ag = !0, ng = null, z0 = !1, cf = null, of = null, ff = null, op = /* @__PURE__ */ new Map(), fp = /* @__PURE__ */ new Map(), rf = [], $S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), ug = null;
    if (vr.prototype.render = Ud.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : We(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = ra(i);
      vt(i, o, a, t, null, null);
    }, vr.prototype.unmount = Ud.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (gt & (xa | Ju)) !== Sn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vt(e.current, 2, null, e, null, null), gc(), t[_i] = null;
      }
    }, vr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = hf();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < rf.length && t !== 0 && t < rf[a].priority; a++) ;
        rf.splice(a, 0, e), a === 0 && ov(e);
      }
    }, function() {
      var e = gr.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Oe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Wt(t), e = e !== null ? He(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: q,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = gb, e.overrideHookStateDeletePath = bb, e.overrideHookStateRenamePath = Sb, e.overrideProps = Tb, e.overridePropsDeletePath = Eb, e.overridePropsRenamePath = Rb, e.scheduleUpdate = Ab, e.setErrorHandler = Ob, e.setSuspenseHandler = Db, e.scheduleRefresh = je, e.scheduleRoot = ce, e.setRefreshHandler = Ut, e.getCurrentFiber = Sg, e.getLaneLabelMap = Tg, e.injectProfilingHooks = al, Se(e);
    }() && S && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var zb = window.location.protocol;
      /^(https?|file):$/.test(zb) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (zb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    hp.createRoot = function(e, t) {
      if (!We(e))
        throw Error("Target container is not a DOM element.");
      sv(e);
      var a = !1, i = "", o = fy, f = Gp, d = Ys, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Di && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = um(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        o,
        f,
        d,
        h,
        null
      ), e[_i] = t.current, Ly(e), new Ud(t);
    }, hp.hydrateRoot = function(e, t, a) {
      if (!We(e))
        throw Error("Target container is not a DOM element.");
      sv(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = fy, d = Gp, h = Ys, v = null, b = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (v = a.unstable_transitionCallbacks), a.formState !== void 0 && (b = a.formState)), t = um(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        f,
        d,
        h,
        v,
        b
      ), t.context = im(null), a = t.current, i = ra(a), i = El(i), o = Hn(i), o.callback = null, rn(a, o, i), a = i, t.current.lanes = a, mu(t, a), Ka(t), e[_i] = t.current, Ly(e), new vr(t);
    }, hp.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), hp;
}
var Vb;
function rT() {
  if (Vb) return og.exports;
  Vb = 1;
  function W() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (W(), og.exports = oT()) : og.exports = fT(), og.exports;
}
var sT = rT();
const dT = /* @__PURE__ */ FS(sT), hT = ".renamed-tag{color:red}";
class yT extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const te = document.createElement("style");
    te.textContent = hT, this.shadowRoot.appendChild(te);
    const Le = this.getAttribute("status") ?? "not-started";
    dT.createRoot(this.shadowRoot).render(/* @__PURE__ */ Xb.jsx(aT, { status: Le }));
  }
}
window.customElements.get("status-tag") || window.customElements.define("status-tag", yT);
