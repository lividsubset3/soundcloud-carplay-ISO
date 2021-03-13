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
var CarPlay_1 = require("../CarPlay");
var Template_1 = require("./Template");
/**/
var TabBarTemplate = /** @class */ (function (_super) {
    __extends(TabBarTemplate, _super);
    function TabBarTemplate(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        CarPlay_1.CarPlay.emitter.addListener('didSelectTemplate', function (e) {
            if (config.onTemplateSelect && e.templateId === _this.id) {
                config.onTemplateSelect(config.templates.find(function (tpl) { return tpl.id === e.selectedTemplateId; }), e);
            }
        });
        return _this;
    }
    Object.defineProperty(TabBarTemplate.prototype, "type", {
        get: function () {
            return 'tabbar';
        },
        enumerable: true,
        configurable: true
    });
    return TabBarTemplate;
}(Template_1.Template));
exports.TabBarTemplate = TabBarTemplate;
