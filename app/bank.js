System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Bank;
    return {
        setters:[],
        execute: function() {
            Bank = (function () {
                function Bank() {
                }
                Bank.prototype.reduce = function (source, to) {
                    return source.reduce(to);
                };
                return Bank;
            }());
            exports_1("Bank", Bank);
        }
    }
});
//# sourceMappingURL=bank.js.map