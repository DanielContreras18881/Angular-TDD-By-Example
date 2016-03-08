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
                function Money(amount) {
                    this.amount = amount;
                    this.amount = amount;
                }
                Money.prototype.equals = function (money) {
                    // Compare amount and types
                    return this.amount === money.amount &&
                        this.constructor.name === money.constructor.name;
                };
                // static dollar(amount: number): Dollar {
                // 	return new Dollar(amount);
                // }
                // static franc(amount: number) {
                // 	console.log(new Franc(amount));
                // 	return new Franc(amount);
                // }
                Money.prototype.times = function (multiplier) {
                    return new Money(0);
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