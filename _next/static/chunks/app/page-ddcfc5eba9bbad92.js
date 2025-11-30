(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[974], {
    8372: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7288)),
        Promise.resolve().then(r.t.bind(r, 8715, 23)),
        Promise.resolve().then(r.t.bind(r, 9480, 23))
    }
    ,
    7288: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => o
        });
        var n = r(5878)
          , a = r(3161)
          , s = r(6585)
          , u = r(2683)
          , l = r(3446);
        function i(e) {
            let {item: t} = e
              , r = (0,
            u.usePathname)()
              , [i,o] = (0,
            l.useState)(r === t.path);
            return (0,
            l.useEffect)( () => {
                o(r === t.path)
            }
            , [r, t.path]),
            (0,
            n.jsx)("li", {
                children: (0,
                n.jsx)(s.default, {
                    href: t.path,
                    className: (0,
                    a.A)("block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300", {
                        "text-black dark:text-neutral-300": i
                    }),
                    children: t.title
                })
            })
        }
        function o(e) {
            let {menu: t} = e;
            return t.length ? (0,
            n.jsx)("nav", {
                children: (0,
                n.jsx)("ul", {
                    children: t.map(e => (0,
                    n.jsx)(i, {
                        item: e
                    }, e.title))
                })
            }) : null
        }
    }
    ,
    6585: (e, t, r) => {
        "use strict";
        r.d(t, {
            default: () => a.a
        });
        var n = r(9480)
          , a = r.n(n)
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
            for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)
                (e = arguments[r]) && (t = function e(t) {
                    var r, n, a = "";
                    if ("string" == typeof t || "number" == typeof t)
                        a += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var s = t.length;
                            for (r = 0; r < s; r++)
                                t[r] && (n = e(t[r])) && (a && (a += " "),
                                a += n)
                        } else
                            for (n in t)
                                t[n] && (a && (a += " "),
                                a += n)
                    }
                    return a
                }(e)) && (n && (n += " "),
                n += t);
            return n
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [480, 715, 707, 955, 358], () => t(8372)),
    _N_E = e.O()
}
]);
