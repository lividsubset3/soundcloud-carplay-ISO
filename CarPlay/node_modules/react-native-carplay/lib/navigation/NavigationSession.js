"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarPlay_1 = require("../CarPlay");
var NavigationSession = /** @class */ (function () {
    function NavigationSession(id, trip, mapTemplate) {
        this.id = id;
        this.trip = trip;
        this.mapTemplate = mapTemplate;
    }
    NavigationSession.prototype.updateManeuvers = function (maneuvers) {
        this.maneuvers = maneuvers;
        CarPlay_1.CarPlay.bridge.updateManeuversNavigationSession(this.id, maneuvers);
    };
    NavigationSession.prototype.updateTravelEstimates = function (maneuverIndex, travelEstimates) {
        CarPlay_1.CarPlay.bridge.updateTravelEstimates(this.id, maneuverIndex, travelEstimates);
    };
    NavigationSession.prototype.cancel = function () {
        CarPlay_1.CarPlay.bridge.cancelNavigationSession(this.id);
    };
    NavigationSession.prototype.finish = function () {
        CarPlay_1.CarPlay.bridge.finishNavigationSession(this.id);
    };
    NavigationSession.prototype.pause = function (reason, description) {
        CarPlay_1.CarPlay.bridge.pauseNavigationSession(this.id, reason, description);
    };
    return NavigationSession;
}());
exports.NavigationSession = NavigationSession;
