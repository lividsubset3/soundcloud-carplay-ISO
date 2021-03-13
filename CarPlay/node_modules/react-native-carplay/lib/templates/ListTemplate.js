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
/**
 * A hierarchical list of menu items can be displayed on the CarPlay screen using a list template.
 *
 * The List Template allows navigation apps to present a hierarchical list of menu items. It includes a navigation bar and a list view.
 *
 * The navigation bar includes a title, and up to two (2) leading buttons and two (2) trailing buttons. You can customize the appearance of these buttons with icons or text.
 *
 * Each item in the list view may include an icon, title, subtitle, and an optional disclosure indicator indicating the presence of a submenu. The depth of the menu hierarchy may not exceed 5 levels. Note that some cars limit the total number of items that may be shown in a list.
 */
var ListTemplate = /** @class */ (function (_super) {
    __extends(ListTemplate, _super);
    function ListTemplate(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        _this.updateSections = function (sections) {
            return CarPlay_1.CarPlay.bridge.updateListTemplateSections(_this.id, _this.parseConfig(sections));
        };
        CarPlay_1.CarPlay.emitter.addListener('didSelectListItem', function (e) {
            if (config.onItemSelect && e.templateId === _this.id) {
                var x = config.onItemSelect(e);
                Promise.resolve(x).then(function () { return CarPlay_1.CarPlay.bridge.reactToSelectedResult(true); });
            }
        });
        return _this;
    }
    Object.defineProperty(ListTemplate.prototype, "type", {
        get: function () {
            return 'list';
        },
        enumerable: true,
        configurable: true
    });
    return ListTemplate;
}(Template_1.Template));
exports.ListTemplate = ListTemplate;
