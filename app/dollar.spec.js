System.register(['./money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var money_1;
    return {
        setters:[
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
                });
                it('can return its currency', function () {
                    expect(money_1.Money.dollar(1).getCurrency()).toBe("USD");
                    expect(money_1.Money.franc(1).getCurrency()).toBe("CHF");
                });
            });
        }
    }
});
//# sourceMappingURL=dollar.spec.js.map