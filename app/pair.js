System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pair;
    return {
        setters:[],
        execute: function() {
            Pair = (function () {
                function Pair(from, to) {
                    this.from = from;
                    this.to = to;
                }
                Pair.prototype.getRef = function () {
                    return this.from + this.to;
                };
                return Pair;
            }());
            exports_1("Pair", Pair);
        }
    }
});
//# sourceMappingURL=pair.js.map