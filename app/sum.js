System.register(['./money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var money_1;
    var Sum;
    return {
        setters:[
            function (money_1_1) {
                money_1 = money_1_1;
            }],
        execute: function() {
            Sum = (function () {
                function Sum(augend, addend) {
                    this.augend = augend;
                    this.addend = addend;
                }
                Sum.prototype.reduce = function (to) {
                    var amount = this.augend.amount + this.addend.amount;
                    return new money_1.Money(amount, to);
                };
                return Sum;
            }());
            exports_1("Sum", Sum);
        }
    }
});
//# sourceMappingURL=sum.js.map