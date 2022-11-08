! function (e, o) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = o();
    else if ("function" == typeof define && define.amd) define([], o);
    else {
        var t = o();
        for (var n in t)("object" == typeof exports ? exports : e)[n] = t[n]
    }
}(self, (function () {
    return (() => {
        "use strict";
        var e = {
                d: (o, t) => {
                    for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                },
                o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
                r: e => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
            },
            o = {};
        e.r(o), e.d(o, {
            Student: () => t,
            test: () => n
        });
        class t {
            constructor(e, o) {
                this.name = e, this.age = o
            }
        }

        function n() {
            console.log("test")
        }
        return new Promise((function (e, o) {
            e(100)
        })), [1, 2, 3, 4, 5].copyWithin(0, 3), console.log("fun1"), o
    })()
}));