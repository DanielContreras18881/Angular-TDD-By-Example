System.register(['./money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var money_1;
    var Dollar;
    return {
        setters:[
            function (money_1_1) {
                money_1 = money_1_1;
            }],
        execute: function() {
            Dollar = (function (_super) {
                __extends(Dollar, _super);
                function Dollar() {
                    _super.apply(this, arguments);
                }
                Dollar.prototype.times = function (multiplier) {
                    return new Dollar(this.amount * multiplier);
                };
                Dollar.prototype.currency = function () {
                    return "USD";
                };
                return Dollar;
            }(money_1.Money));
            exports_1("Dollar", Dollar);
        }
    }
});
//# sourceMappingURL=dollar.js.map