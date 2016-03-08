System.register(['./dollar'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dollar_1;
    var Money;
    return {
        setters:[
            function (dollar_1_1) {
                dollar_1 = dollar_1_1;
            }],
        execute: function() {
            // import {Franc} from './franc';
            Money = (function () {
                function Money(amount) {
                    this.amount = amount;
                    this.amount = amount;
                }
                Money.prototype.equals = function (money) {
                    // Compare amount and types
                    return this.amount === money.amount &&
                        this.constructor.name === money.constructor.name;
                };
                Money.dollar = function (amount) {
                    return new dollar_1.Dollar(amount);
                };
                // static franc(amount: number): Franc {
                // 	return new Franc(amount);
                // }
                Money.prototype.times = function (multiplier) {
                    return new Money(0);
                };
                Money.prototype.currency = function () {
                };
                return Money;
            }());
            exports_1("Money", Money);
        }
    }
});
//# sourceMappingURL=money.js.map