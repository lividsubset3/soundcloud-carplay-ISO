/// <reference types="react" />
import { MapButton } from '../interfaces/MapButton';
import { NavigationAlert } from '../interfaces/NavigationAlert';
import { TextConfiguration } from '../interfaces/TextConfiguration';
import { TimeRemainingColor } from '../interfaces/TimeRemainingColor';
import { TravelEstimates } from '../interfaces/TravelEstimates';
import { NavigationSession } from '../navigation/NavigationSession';
import { Trip } from '../navigation/Trip';
import { Template } from './Template';
interface MapTemplateConfig {
    guidanceBackgroundColor?: string;
    tripEstimateStyle?: 'dark' | 'light';
    /**
     * Your component to render inside CarPlay
     * Example `component: MyComponent`
     */
    component: React.ComponentType<any>;
    /**
     * An array of map buttons displayed on the trailing bottom corner of the map template.
     *
     * If the array contains more than three buttons, the map template displays only the first three buttons, ignoring the remaining buttons.
     */
    mapButtons?: MapButton[];
    /**
     * A Boolean value that indicates whether the navigation bar hides automatically.
     */
    automaticallyHidesNavigationBar?: boolean;
    /**
     * A Boolean value that tells the system to hide the map buttons when hiding the navigation bar.
     */
    hidesButtonsWithNavigationBar?: boolean;
    /**
     * Fired when Alert Action button is pressed
     * @param e Event
     */
    onAlertActionPressed?(e: {
        secondary?: boolean;
        primary?: boolean;
    }): void;
}
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
export declare class MapTemplate extends Template<MapTemplateConfig> {
    config: MapTemplateConfig;
    readonly type: string;
    readonly eventMap: {
        alertActionPressed: string;
    };
    constructor(config: MapTemplateConfig);
    /**
     * Begins guidance for a trip.
     *
     * Keep a reference to the navigation session to perform guidance updates.
     * @param trip Trip class instance
     */
    startNavigationSession(trip: Trip): Promise<NavigationSession>;
    updateTravelEstimates(trip: Trip, travelEstimates: TravelEstimates, timeRemainingColor?: TimeRemainingColor): void;
    /**
     * Update MapTemplate configuration
     */
    updateConfig(config: MapTemplateConfig): void;
    /**
     * Hides the display of trip previews.
     */
    hideTripPreviews(): void;
    showTripPreviews(tripPreviews: Trip[], textConfiguration?: TextConfiguration): void;
    showRouteChoicesPreviewForTrip(trip: Trip, textConfiguration?: TextConfiguration): void;
    presentNavigationAlert(config: NavigationAlert, animated?: boolean): void;
    dismissNavigationAlert(animated?: boolean): void;
    /**
     * Shows the panning interface over the map.
     *
     * Calling this method while displaying the panning interface has no effect.
     *
     * While showing the panning interface, the system hides all map buttons. The system doesn't provide a button to dismiss the panning interface. Instead, you must provide a map button in the navigation bar that the user taps to dismiss the panning interface.
     * @param animated A Boolean value that determines whether to animate the panning interface.
     */
    showPanningInterface(animated?: boolean): void;
    /**
     * Dismisses the panning interface.
     *
     * When dismissing the panning interface, the system shows the previously hidden map buttons.
     * @param animated A Boolean value that determines whether to animate the dismissal of the panning interface.
     */
    dismissPanningInterface(animated?: boolean): void;
}
export {};
