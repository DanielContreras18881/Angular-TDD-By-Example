System.register(['./sum'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var sum_1;
    var Money;
    return {
        setters:[
            function (sum_1_1) {
                sum_1 = sum_1_1;
            }],
        execute: function() {
            Money = (function () {
                function Money(amount, currency) {
                    this.amount = amount;
                    this.currency = currency;
                }
                Money.prototype.equals = function (money) {
                    // Compare amount and types
                    return this.amount === money.amount &&
                        this.getCurrency() === money.getCurrency();
                };
                Money.dollar = function (amount) {
                    return new Money(amount, "USD");
                };
                Money.franc = function (amount) {
                    return new Money(amount, "CHF");
                };
                Money.prototype.times = function (multiplier) {
                    return new Money(this.amount * multiplier, this.currency);
                };
                Money.prototype.getCurrency = function () {
                    return this.currency;
                };
                Money.prototype.plus = function (addend) {
                    return new sum_1.Sum(this, addend);
                };
                Money.prototype.reduce = function (to) {
                    return this;
                };
                return Money;
            }());
            exports_1("Money", Money);
        }
    }
});
//# sourceMappingURL=money.js.map