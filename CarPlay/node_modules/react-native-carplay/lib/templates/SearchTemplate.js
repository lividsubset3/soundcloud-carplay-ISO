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
var SearchTemplate = /** @class */ (function (_super) {
    __extends(SearchTemplate, _super);
    function SearchTemplate(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        CarPlay_1.CarPlay.emitter.addListener('updatedSearchText', function (e) {
            if (config.onSearch && e.templateId === _this.id) {
                var x = config.onSearch(e.searchText);
                Promise.resolve(x).then(function (result) { return CarPlay_1.CarPlay.bridge.reactToUpdatedSearchText(result); });
            }
        });
        CarPlay_1.CarPlay.emitter.addListener('selectedResult', function (e) {
            if (config.onItemSelect && e.templateId === _this.id) {
                var x = config.onItemSelect(e);
                Promise.resolve(x).then(function () { return CarPlay_1.CarPlay.bridge.reactToSelectedResult(true); });
            }
        });
        return _this;
    }
    Object.defineProperty(SearchTemplate.prototype, "type", {
        get: function () {
            return 'search';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchTemplate.prototype, "eventMap", {
        get: function () {
            return {
                searchButtonPressed: 'onSearchButtonPressed',
            };
        },
        enumerable: true,
        configurable: true
    });
    return SearchTemplate;
}(Template_1.Template));
exports.SearchTemplate = SearchTemplate;
