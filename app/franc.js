System.register(['./money'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var money_1;
    var Franc;
    return {
        setters:[
            function (money_1_1) {
                money_1 = money_1_1;
            }],
        execute: function() {
            Franc = (function (_super) {
                __extends(Franc, _super);
                function Franc() {
                    _super.apply(this, arguments);
                }
                Franc.prototype.times = function (multiplier) {
                    return new Franc(this.amount * multiplier);
                };
                Franc.prototype.currency = function () {
                    return "CHF";
                };
                return Franc;
            }(money_1.Money));
            exports_1("Franc", Franc);
        }
    }
});
//# sourceMappingURL=franc.js.map