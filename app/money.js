// import {Franc} from './franc';
// import {Dollar} from './dollar';
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
                // static dollar(amount: number): Dollar {
                // 	return new Dollar(amount);
                // }
                // static franc(amount: number) {
                // 	console.log(new Franc(amount));
                // 	return new Franc(amount);
                // }
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