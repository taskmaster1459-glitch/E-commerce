(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[296], {
    4057: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5527)),
        Promise.resolve().then(r.bind(r, 7288)),
        Promise.resolve().then(r.bind(r, 212)),
        Promise.resolve().then(r.bind(r, 6208)),
        Promise.resolve().then(r.t.bind(r, 9480, 23))
    }
    ,
    5527: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => l
        });
        var n = r(5878)
          , s = r(2683)
          , a = r(3446);
        function l(e) {
            let {children: t} = e
              , r = (0,
            s.useSearchParams)();
            return (0,
            n.jsx)(a.Fragment, {
                children: t
            }, r.get("q"))
        }
    }
    ,
    7288: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => c
        });
        var n = r(5878)
          , s = r(3161)
          , a = r(6585)
          , l = r(2683)
          , i = r(3446);
        function u(e) {
            let {item: t} = e
              , r = (0,
            l.usePathname)()
              , [u,c] = (0,
            i.useState)(r === t.path);
            return (0,
            i.useEffect)( () => {
                c(r === t.path)
            }
            , [r, t.path]),
            (0,
            n.jsx)("li", {
                children: (0,
                n.jsx)(a.default, {
                    href: t.path,
                    className: (0,
                    s.A)("block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300", {
                        "text-black dark:text-neutral-300": u
                    }),
                    children: t.title
                })
            })
        }
        function c(e) {
            let {menu: t} = e;
            return t.length ? (0,
            n.jsx)("nav", {
                children: (0,
                n.jsx)("ul", {
                    children: t.map(e => (0,
                    n.jsx)(u, {
                        item: e
                    }, e.title))
                })
            }) : null
        }
    }
    ,
    212: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => u
        });
        var n = r(5878)
          , s = r(2683)
          , a = r(3446);
        let l = a.forwardRef(function(e, t) {
            let {title: r, titleId: n, ...s} = e;
            return a.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                "data-slot": "icon",
                ref: t,
                "aria-labelledby": n
            }, s), r ? a.createElement("title", {
                id: n
            }, r) : null, a.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m19.5 8.25-7.5 7.5-7.5-7.5"
            }))
        });
        var i = r(6208);
        function u(e) {
            let {list: t} = e
              , r = (0,
            s.usePathname)()
              , u = (0,
            s.useSearchParams)()
              , [c,o] = (0,
            a.useState)("")
              , [d,h] = (0,
            a.useState)(!1)
              , f = (0,
            a.useRef)(null);
            return (0,
            a.useEffect)( () => {
                let e = e => {
                    f.current && !f.current.contains(e.target) && h(!1)
                }
                ;
                return window.addEventListener("click", e),
                () => window.removeEventListener("click", e)
            }
            , []),
            (0,
            a.useEffect)( () => {
                t.forEach(e => {
                    ("path"in e && r === e.path || "slug"in e && u.get("sort") === e.slug) && o(e.title)
                }
                )
            }
            , [r, t, u]),
            (0,
            n.jsxs)("div", {
                className: "relative",
                ref: f,
                children: [(0,
                n.jsxs)("div", {
                    onClick: () => {
                        h(!d)
                    }
                    ,
                    className: "flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30",
                    children: [(0,
                    n.jsx)("div", {
                        children: c
                    }), (0,
                    n.jsx)(l, {
                        className: "h-4"
                    })]
                }), d && (0,
                n.jsx)("div", {
                    onClick: () => {
                        h(!1)
                    }
                    ,
                    className: "absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black",
                    children: t.map( (e, t) => (0,
                    n.jsx)(i.FilterItem, {
                        item: e
                    }, t))
                })]
            })
        }
    }
    ,
    6208: (e, t, r) => {
        "use strict";
        r.d(t, {
            FilterItem: () => o
        });
        var n = r(5878)
          , s = r(3161)
          , a = r(6982)
          , l = r(6585)
          , i = r(2683);
        function u(e) {
            let {item: t} = e
              , r = (0,
            i.usePathname)()
              , u = (0,
            i.useSearchParams)()
              , c = r === t.path
              , o = new URLSearchParams(u.toString())
              , d = c ? "p" : l.default;
            return o.delete("q"),
            (0,
            n.jsx)("li", {
                className: "mt-2 flex text-black dark:text-white",
                children: (0,
                n.jsx)(d, {
                    href: (0,
                    a.cO)(t.path, o),
                    className: (0,
                    s.A)("w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100", {
                        "underline underline-offset-4": c
                    }),
                    children: t.title
                })
            }, t.title)
        }
        function c(e) {
            let {item: t} = e
              , r = (0,
            i.usePathname)()
              , u = (0,
            i.useSearchParams)()
              , c = u.get("sort") === t.slug
              , o = u.get("q")
              , d = (0,
            a.cO)(r, new URLSearchParams({
                ...o && {
                    q: o
                },
                ...t.slug && t.slug.length && {
                    sort: t.slug
                }
            }))
              , h = c ? "p" : l.default;
            return (0,
            n.jsx)("li", {
                className: "mt-2 flex text-sm text-black dark:text-white",
                children: (0,
                n.jsx)(h, {
                    prefetch: !!c && void 0,
                    href: d,
                    className: (0,
                    s.A)("w-full hover:underline hover:underline-offset-4", {
                        "underline underline-offset-4": c
                    }),
                    children: t.title
                })
            }, t.title)
        }
        function o(e) {
            let {item: t} = e;
            return "path"in t ? (0,
            n.jsx)(u, {
                item: t
            }) : (0,
            n.jsx)(c, {
                item: t
            })
        }
    }
    ,
    6982: (e, t, r) => {
        "use strict";
        r.d(t, {
            cO: () => n
        }),
        r(3457);
        let n = (e, t) => {
            let r = t.toString()
              , n = "".concat(r.length ? "?" : "").concat(r);
            return "".concat(e).concat(n)
        }
    }
    ,
    6585: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => s.a
        });
        var n = r(9480)
          , s = r.n(n)
    }
    ,
    2683: (e, t, r) => {
        "use strict";
        var n = r(435);
        r.o(n, "usePathname") && r.d(t, {
            usePathname: function() {
                return n.usePathname
            }
        }),
        r.o(n, "useRouter") && r.d(t, {
            useRouter: function() {
                return n.useRouter
            }
        }),
        r.o(n, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return n.useSearchParams
            }
        })
    }
    ,
    3161: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => n
        });
        let n = function() {
            for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, s = "";
                    if ("string" == typeof t || "number" == typeof t)
                        s += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var a = t.length;
                            for (r = 0; r < a; r++)
                                t[r] && (n = e(t[r])) && (s && (s += " "),
                                s += n)
                        } else
                            for (n in t)
                                t[n] && (s && (s += " "),
                                s += n)
                    }
                    return s
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [480, 707, 955, 358], () => t(4057)),
    _N_E = e.O()
}
]);
