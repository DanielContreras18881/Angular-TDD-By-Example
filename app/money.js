System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Money;
    return {
        setters:[],
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
                return Money;
            }());
            exports_1("Money", Money);
        }
    }
});
//# sourceMappingURL=money.js.map