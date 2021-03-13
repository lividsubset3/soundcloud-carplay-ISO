"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PauseReason;
(function (PauseReason) {
    PauseReason[PauseReason["Arrived"] = 1] = "Arrived";
    PauseReason[PauseReason["Loading"] = 2] = "Loading";
    PauseReason[PauseReason["Locating"] = 3] = "Locating";
    PauseReason[PauseReason["ProceedToRoute"] = 4] = "ProceedToRoute";
    PauseReason[PauseReason["Rerouting"] = 5] = "Rerouting";
})(PauseReason = exports.PauseReason || (exports.PauseReason = {}));
