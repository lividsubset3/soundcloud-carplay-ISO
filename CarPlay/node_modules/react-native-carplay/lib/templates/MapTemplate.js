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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var CarPlay_1 = require("../CarPlay");
var NavigationSession_1 = require("../navigation/NavigationSession");
var Template_1 = require("./Template");
/**
 * The Map Template is a control layer that appears as an overlay over the base view and allows you to present user controls.
 *
 * The control layer consists of a navigation bar and map buttons. By default, the navigation bar appears when the user interacts with the app, and disappears after a period of inactivity.
 *
 * The navigation bar includes up to two leading buttons and two trailing buttons. You can customize the appearance of these buttons with icons or text.
 *
 * The control layer may also include up to four map buttons. The map buttons are always shown as icons.
 *
 * Navigation apps enter panning mode, zoom in or out, and perform other functions by responding to user actions on these buttons.
 */
var MapTemplate = /** @class */ (function (_super) {
    __extends(MapTemplate, _super);
    function MapTemplate(config) {
        var _this = _super.call(this, config) || this;
        _this.config = config;
        if (config.component) {
            react_native_1.AppRegistry.registerComponent(_this.id, function () { return config.component; });
        }
        CarPlay_1.CarPlay.bridge.createTemplate(_this.id, _this.parseConfig(__assign({ type: _this.type }, config, { render: true })));
        return _this;
    }
    Object.defineProperty(MapTemplate.prototype, "type", {
        get: function () {
            return 'map';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapTemplate.prototype, "eventMap", {
        get: function () {
            return {
                alertActionPressed: 'onAlertActionPressed',
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Begins guidance for a trip.
     *
     * Keep a reference to the navigation session to perform guidance updates.
     * @param trip Trip class instance
     */
    MapTemplate.prototype.startNavigationSession = function (trip) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CarPlay_1.CarPlay.bridge.startNavigationSession(this.id, trip.id)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, new NavigationSession_1.NavigationSession(res.navigationSessionId, trip, this)];
                }
            });
        });
    };
    MapTemplate.prototype.updateTravelEstimates = function (trip, travelEstimates, timeRemainingColor) {
        if (timeRemainingColor === void 0) { timeRemainingColor = 'default'; }
        CarPlay_1.CarPlay.bridge.updateTravelEstimates(this.id, trip.id, travelEstimates, timeRemainingColor);
    };
    /**
     * Update MapTemplate configuration
     */
    MapTemplate.prototype.updateConfig = function (config) {
        CarPlay_1.CarPlay.bridge.updateMapTemplateConfig(this.id, this.parseConfig(config));
    };
    /**
     * Hides the display of trip previews.
     */
    MapTemplate.prototype.hideTripPreviews = function () {
        CarPlay_1.CarPlay.bridge.hideTripPreviews(this.id);
    };
    MapTemplate.prototype.showTripPreviews = function (tripPreviews, textConfiguration) {
        if (textConfiguration === void 0) { textConfiguration = {}; }
        CarPlay_1.CarPlay.bridge.showTripPreviews(this.id, tripPreviews, textConfiguration);
    };
    MapTemplate.prototype.showRouteChoicesPreviewForTrip = function (trip, textConfiguration) {
        if (textConfiguration === void 0) { textConfiguration = {}; }
        CarPlay_1.CarPlay.bridge.showRouteChoicesPreviewForTrip(this.id, trip, textConfiguration);
    };
    MapTemplate.prototype.presentNavigationAlert = function (config, animated) {
        if (animated === void 0) { animated = true; }
        CarPlay_1.CarPlay.bridge.presentNavigationAlert(this.id, config, animated);
    };
    MapTemplate.prototype.dismissNavigationAlert = function (animated) {
        if (animated === void 0) { animated = true; }
        CarPlay_1.CarPlay.bridge.dismissNavigationAlert(this.id, animated);
    };
    /**
     * Shows the panning interface over the map.
     *
     * Calling this method while displaying the panning interface has no effect.
     *
     * While showing the panning interface, the system hides all map buttons. The system doesn't provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.
     * @param animated A Boolean value that determines whether to animate the panning interface.
     */
    MapTemplate.prototype.showPanningInterface = function (animated) {
        if (animated === void 0) { animated = false; }
        CarPlay_1.CarPlay.bridge.showPanningInterface(this.id, animated);
    };
    /**
     * Dismisses the panning interface.
     *
     * When dismissing the panning interface, the system shows the previously hidden map buttons.
     * @param animated A Boolean value that determines whether to animate the dismissal of the panning interface.
     */
    MapTemplate.prototype.dismissPanningInterface = function (animated) {
        if (animated === void 0) { animated = false; }
        CarPlay_1.CarPlay.bridge.dismissPanningInterface(this.id, animated);
    };
    return MapTemplate;
}(Template_1.Template));
exports.MapTemplate = MapTemplate;
