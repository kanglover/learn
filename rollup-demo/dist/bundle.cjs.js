(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bundleName = {}));
})(this, (function (exports) { 'use strict';

    function test() {
        console.log('test');
    }

    exports.test = test;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
