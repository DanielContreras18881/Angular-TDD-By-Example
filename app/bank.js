System.register(['./money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var money_1;
    var Bank;
    return {
        setters:[
            function (money_1_1) {
                money_1 = money_1_1;
            }],
        execute: function() {
            Bank = (function () {
                function Bank() {
                }
                Bank.prototype.reduce = function (source, to) {
                    return money_1.Money.dollar(10);
                };
                return Bank;
            }());
            exports_1("Bank", Bank);
        }
    }
});
//# sourceMappingURL=bank.js.map