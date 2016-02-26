System.register(['./dollar', './franc', './money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dollar_1, franc_1, money_1;
    return {
        setters:[
            function (dollar_1_1) {
                dollar_1 = dollar_1_1;
            },
            function (franc_1_1) {
                franc_1 = franc_1_1;
            },
            function (money_1_1) {
                money_1 = money_1_1;
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
                    expect(new franc_1.Franc(5).equals(new franc_1.Franc(5)))
                        .toBe(true);
                    expect(new franc_1.Franc(5).equals(new franc_1.Franc(6)))
                        .toBe(false);
                    expect(new dollar_1.Dollar(5).equals(new franc_1.Franc(5)))
                        .toBe(false);
                });
                it('can multiply francs', function () {
                    var five = new franc_1.Franc(5);
                    expect(five.times(2).equals(new franc_1.Franc(10)))
                        .toBe(true);
                    expect(five.times(3).equals(new franc_1.Franc(15)))
                        .toBe(true);
                });
            });
        }
    }
});
//# sourceMappingURL=dollar.spec.js.map