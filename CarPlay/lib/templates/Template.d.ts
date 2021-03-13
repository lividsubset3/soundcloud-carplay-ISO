import { BarButton } from '../interfaces/BarButton';
export interface BaseEvent {
    /**
     * Template id that fired the event
     */
    templateId: string;
}
interface BarButtonEvent extends BaseEvent {
    id: string;
}
export interface TemplateConfig {
    /**
     * Give the template your own ID. Must be unique.
     */
    id?: string;
    /**
     * Show back button
     */
    backButton?: boolean;
    /**
     * An array of bar buttons to display on the leading side of the navigation bar.
     *
     * The navigation bar displays up to two buttons in the leading space. When including more than two buttons in the array, the system displays only the first two buttons.
     */
    leadingNavigationBarButtons?: BarButton[];
    /**
     * An array of bar buttons to display on the trailing side of the navigation bar.
     *
     * The navigation bar displays up to two buttons in the trailing space. When including more than two buttons in the array, the system displays only the first two buttons.
     */
    trailingNavigationBarButtons?: BarButton[];
    /**
     * Fired before template appears
     * @param e Event
     */
    onWillAppear?(e: BaseEvent): void;
    /**
     * Fired before template disappears
     * @param e Event
     */
    onWillDisappear?(e: BaseEvent): void;
    /**
     * Fired after template appears
     * @param e Event
     */
    onDidAppear?(e: BaseEvent): void;
    /**
     * Fired after template disappears
     * @param e Event
     */
    onDidDisappear?(e: BaseEvent): void;
    /**
     * Fired when bar button is pressed
     * @param e Event
     */
    onBarButtonPressed?(e: BarButtonEvent): void;
}
export declare class Template<P> {
    config: TemplateConfig & P;
    readonly type: string;
    id: string;
    readonly eventMap: {};
    constructor(config: TemplateConfig & P);
    parseConfig(config: any): any;
}
export {};
