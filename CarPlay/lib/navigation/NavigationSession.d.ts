import { Maneuver } from '../interfaces/Maneuver';
import { PauseReason } from '../interfaces/PauseReason';
import { TravelEstimates } from '../interfaces/TravelEstimates';
import { MapTemplate } from '../templates/MapTemplate';
import { Trip } from './Trip';
export declare class NavigationSession {
    id: string;
    trip: Trip;
    mapTemplate: MapTemplate;
    maneuvers: Maneuver[];
    constructor(id: string, trip: Trip, mapTemplate: MapTemplate);
    updateManeuvers(maneuvers: Maneuver[]): void;
    updateTravelEstimates(maneuverIndex: number, travelEstimates: TravelEstimates): void;
    cancel(): void;
    finish(): void;
    pause(reason: PauseReason, description: string): void;
}
