System.register(['./money', './bank', './sum'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var money_1, bank_1, sum_1;
    return {
        setters:[
            function (money_1_1) {
                money_1 = money_1_1;
            },
            function (bank_1_1) {
                bank_1 = bank_1_1;
            },
            function (sum_1_1) {
                sum_1 = sum_1_1;
            }],
        execute: function() {
            describe('Dollar', function () {
                it('can multiply dollars', function () {
                    var five = money_1.Money.dollar(5);
                    expect(five.times(2).equals(money_1.Money.dollar(10)))
                        .toBe(true);
                    expect(five.times(3).equals(money_1.Money.dollar(15)))
                        .toBe(true);
                });
                it('can check equality', function () {
                    expect(money_1.Money.dollar(5).equals(money_1.Money.dollar(5)))
                        .toBe(true);
                    expect(money_1.Money.dollar(5).equals(money_1.Money.dollar(6)))
                        .toBe(false);
                });
                it('can return its currency', function () {
                    expect(money_1.Money.dollar(1).getCurrency()).toBe("USD");
                    expect(money_1.Money.franc(1).getCurrency()).toBe("CHF");
                });
                it('can do simple addition', function () {
                    var five = money_1.Money.dollar(5);
                    var sum = five.plus(five);
                    var bank = new bank_1.Bank();
                    var reduced = bank.reduce(sum, "USD");
                    expect(money_1.Money.dollar(10).equals(reduced)).toBe(true);
                });
                it('can reduce a sum', function () {
                    var sum = new sum_1.Sum(money_1.Money.dollar(3), money_1.Money.dollar(4));
                    var bank = new bank_1.Bank();
                    var result = bank.reduce(sum, "USD");
                    expect(money_1.Money.dollar(7).equals(result)).toBe(true);
                });
                it('can reduce money', function () {
                    var bank = new bank_1.Bank();
                    var result = bank.reduce(money_1.Money.dollar(1), "USD");
                    expect(money_1.Money.dollar(1).equals(result)).toBe(true);
                });
            });
        }
    }
});
//# sourceMappingURL=dollar.spec.js.map