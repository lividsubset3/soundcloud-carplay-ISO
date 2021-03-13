"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CarPlay_1 = require("../CarPlay");
var traverse = require('traverse'); // tslint:disable-line no-var-requires
var resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource'); // tslint:disable-line no-var-requires
var Template = /** @class */ (function () {
    function Template(config) {
        var _this = this;
        this.config = config;
        if (config.id) {
            this.id = config.id;
        }
        if (!this.id) {
            this.id = this.type + "-" + Date.now() + "-" + Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
        }
        var eventMap = __assign({ barButtonPressed: 'onBarButtonPressed', didAppear: 'onDidAppear', didDisappear: 'onDidDisappear', willAppear: 'onWillAppear', willDisappear: 'onWillDisappear' }, (this.eventMap || {}));
        Object.entries(eventMap).forEach(function (_a) {
            var eventName = _a[0], callbackName = _a[1];
            CarPlay_1.CarPlay.emitter.addListener(eventName, function (e) {
                if (config[callbackName] && e.templateId === _this.id) {
                    config[callbackName](e);
                }
            });
        });
        if (this.type !== 'map') {
            CarPlay_1.CarPlay.bridge.createTemplate(this.id, this.parseConfig(__assign({ type: this.type }, config)));
        }
    }
    Object.defineProperty(Template.prototype, "type", {
        get: function () {
            return 'unset';
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Template.prototype, "eventMap", {
        get: function () {
            return {};
        },
        enumerable: true,
        configurable: true
    });
    ;
    Template.prototype.parseConfig = function (config) {
        var result = traverse(config).map(function node(x) {
            if (String(this.key).match(/[Ii]mage$/)) {
                this.update(resolveAssetSource(x));
            }
        });
        return JSON.parse(JSON.stringify(result));
    };
    return Template;
}());
exports.Template = Template;
