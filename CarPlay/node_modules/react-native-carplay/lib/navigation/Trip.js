"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarPlay_1 = require("../CarPlay");
var Trip = /** @class */ (function () {
    function Trip(config) {
        this.config = config;
        if (config.id) {
            this.id = config.id;
        }
        if (!this.id) {
            this.id = "trip-" + Date.now() + "-" + Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
        }
        CarPlay_1.CarPlay.bridge.createTrip(this.id, config);
    }
    return Trip;
}());
exports.Trip = Trip;
