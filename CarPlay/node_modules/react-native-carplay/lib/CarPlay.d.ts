import { ActionSheetTemplate } from './templates/ActionSheetTemplate';
import { AlertTemplate } from './templates/AlertTemplate';
import { ContactTemplate } from './templates/ContactTemplate';
import { GridTemplate } from './templates/GridTemplate';
import { InformationTemplate } from './templates/InformationTemplate';
import { ListTemplate } from './templates/ListTemplate';
import { MapTemplate } from './templates/MapTemplate';
import { PointOfInterestTemplate } from './templates/PointOfInterestTemplate';
import { SearchTemplate } from './templates/SearchTemplate';
import { VoiceControlTemplate } from './templates/VoiceControlTemplate';
declare type PushableTemplates = MapTemplate | SearchTemplate | GridTemplate | PointOfInterestTemplate | ListTemplate | InformationTemplate | ContactTemplate;
declare type PresentableTemplates = AlertTemplate | ActionSheetTemplate | VoiceControlTemplate;
/**
 * A controller that manages all user interface elements appearing on your map displayed on the CarPlay screen.
 */
declare class CarPlayInterface {
    /**
     * React Native bridge to the CarPlay interface
     */
    bridge: any;
    /**
     * CarPlay Event Emitter
     */
    emitter: import("react-native").EventEmitter;
    private onConnectCallback;
    private onDisconnectCallback;
    constructor();
    /**
     * Fired when CarPlay is connected to the device.
     */
    onConnect: (callback: () => void) => void;
    /**
     * Fired when CarPlay is disconnected from the device.
     */
    onDisconnect: (callback: () => void) => void;
    /**
     * Sets the root template, starting a new stack for the template navigation hierarchy.
     * @param rootTemplate The root template. Replaces the current rootTemplate, if one exists.
     * @param animated Set TRUE to animate the presentation of the root template; ignored if there isn't a current rootTemplate.
     */
    setRootTemplate(rootTemplate: PushableTemplates, animated?: boolean): any;
    /**
     * Pushes a template onto the navigation stack and updates the display.
     * @param templateToPush The template to push onto the navigation stack.
     * @param animated Set TRUE to animate the presentation of the template.
     */
    pushTemplate(templateToPush: PushableTemplates, animated?: boolean): any;
    /**
     * Pops templates until the specified template is at the top of the navigation stack.
     * @param targetTemplate The template that you want at the top of the stack. The template must be on the navigation stack before calling this method.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    popToTemplate(targetTemplate: PushableTemplates, animated?: boolean): any;
    /**
     * Pops all templates on the stack—except the root template—and updates the display.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    popToRootTemplate(animated?: boolean): any;
    /**
     * Pops the top template from the navigation stack and updates the display.
     * @param animated A Boolean value that indicates whether the system animates the display of transitioning templates.
     */
    popTemplate(animated?: boolean): any;
    /**
     * @todo Not implemented yet
     */
    presentTemplate(templateToPresent: PresentableTemplates, animated?: boolean): any;
    /**
     * @todo Not implemented yet
     */
    dismissTemplate(animated?: boolean): any;
    /**
     * The current root template in the template navigation hierarchy.
     * @todo Not implemented yet
     */
    readonly rootTemplate: Promise<string>;
    /**
     * The top-most template in the navigation hierarchy stack.
     * @todo Not implemented yet
     */
    readonly topTemplate: Promise<string>;
}
export declare const CarPlay: CarPlayInterface;
export {};
