"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var RNCarPlay = react_native_1.NativeModules.RNCarPlay;
/**
 * A controller that manages all user interface elements appearing on your map displayed on the CarPlay screen.
 */
var CarPlayInterface = /** @class */ (function () {
    function CarPlayInterface() {
        var _this = this;
        /**
         * React Native bridge to the CarPlay interface
         */
        this.bridge = RNCarPlay;
        /**
         * CarPlay Event Emitter
         */
        this.emitter = new react_native_1.NativeEventEmitter(RNCarPlay);
        /**
         * Fired when CarPlay is connected to the device.
         */
        this.onConnect = function (callback) {
            _this.onConnectCallback = callback;
        };
        /**
         * Fired when CarPlay is disconnected from the device.
         */
        this.onDisconnect = function (callback) {
            _this.onDisconnectCallback = callback;
        };
        this.emitter.addListener('didConnect', function () {
            if (_this.onConnectCallback) {
                _this.onConnectCallback();
            }
        });
        this.emitter.addListener('didDisconnect', function () {
            if (_this.onDisconnectCallback) {
                _this.onDisconnectCallback();
            }
        });
    }
    /**
     * Sets the root template, starting a new stack for the template navigation hierarchy.
     * @param rootTemplate The root template. Replaces the current rootTemplate, if one exists.
     * @param animated Set TRUE to animate the presentation of the root template; ignored if there isn't a current rootTemplate.
     */
    CarPlayInterface.prototype.setRootTemplate = function (rootTemplate, animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.setRootTemplate(rootTemplate.id, animated);
    };
    /**
     * Pushes a template onto the navigation stack and updates the display.
     * @param templateToPush The template to push onto the navigation stack.
     * @param animated Set TRUE to animate the presentation of the template.
     */
    CarPlayInterface.prototype.pushTemplate = function (templateToPush, animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.pushTemplate(templateToPush.id, animated);
    };
    /**
     * Pops templates until the specified template is at the top of the navigation stack.
     * @param targetTemplate The template that you want at the top of the stack. The template must be on the navigation stack before calling this method.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    CarPlayInterface.prototype.popToTemplate = function (targetTemplate, animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.popToTemplate(targetTemplate.id, animated);
    };
    /**
     * Pops all templates on the stack—except the root template—and updates the display.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    CarPlayInterface.prototype.popToRootTemplate = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.popToRootTemplate(animated);
    };
    /**
     * Pops the top template from the navigation stack and updates the display.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    CarPlayInterface.prototype.popTemplate = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.popTemplate(animated);
    };
    /**
     * @todo Not implemented yet
     */
    CarPlayInterface.prototype.presentTemplate = function (templateToPresent, animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.presentTemplate(templateToPresent.id, animated);
    };
    /**
     * @todo Not implemented yet
     */
    CarPlayInterface.prototype.dismissTemplate = function (animated) {
        if (animated === void 0) { animated = true; }
        return this.bridge.dismissTemplate(animated);
    };
    Object.defineProperty(CarPlayInterface.prototype, "rootTemplate", {
        /**
         * The current root template in the template navigation hierarchy.
         * @todo Not implemented yet
         */
        get: function () {
            return Promise.resolve('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarPlayInterface.prototype, "topTemplate", {
        /**
         * The top-most template in the navigation hierarchy stack.
         * @todo Not implemented yet
         */
        get: function () {
            return Promise.resolve('');
        },
        enumerable: true,
        configurable: true
    });
    return CarPlayInterface;
}());
exports.CarPlay = new CarPlayInterface();
