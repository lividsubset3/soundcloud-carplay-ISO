export interface RouteChoice {
    additionalInformationVariants: string[];
    selectionSummaryVariants: string[];
    summaryVariants: string[];
}
export interface TripPoint {
    latitude: number;
    longitude: number;
}
export interface TripConfig {
    id?: string;
    origin: TripPoint;
    destination: TripPoint;
    routeChoices: RouteChoice[];
}
export declare class Trip {
    config: TripConfig;
    id: string;
    constructor(config: TripConfig);
}
