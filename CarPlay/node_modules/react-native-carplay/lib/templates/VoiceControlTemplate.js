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
 * Displays a voice control indicator on the CarPlay screen.
 *
 * CarPlay navigation apps must show the voice control template during audio input.
 */
var VoiceControlTemplate = /** @class */ (function (_super) {
    __extends(VoiceControlTemplate, _super);
    function VoiceControlTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VoiceControlTemplate.prototype, "type", {
        get: function () {
            return 'voicecontrol';
        },
        enumerable: true,
        configurable: true
    });
    VoiceControlTemplate.prototype.activateVoiceControlState = function (identifier) {
        CarPlay_1.CarPlay.bridge.activateVoiceControlState(this.id, identifier);
    };
    return VoiceControlTemplate;
}(Template_1.Template));
exports.VoiceControlTemplate = VoiceControlTemplate;
