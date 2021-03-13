"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Template_1 = require("./Template");
var AlertTemplate = /** @class */ (function (_super) {
    __extends(AlertTemplate, _super);
    function AlertTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AlertTemplate.prototype, "type", {
        get: function () {
            return 'alert';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertTemplate.prototype, "eventMap", {
        get: function () {
            return {
                actionButtonPressed: 'onActionButtonPressed',
            };
        },
        enumerable: true,
        configurable: true
    });
    return AlertTemplate;
}(Template_1.Template));
exports.AlertTemplate = AlertTemplate;
