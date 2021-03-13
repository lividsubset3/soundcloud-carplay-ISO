import { GridButton } from '../interfaces/GridButton';
import { BaseEvent, Template } from './Template';
interface ButtonPressedEvent extends BaseEvent {
    /**
     * Button ID
     */
    id: string;
    /**
     * Button Index
     */
    index: number;
}
interface GridTemplateConfig {
    /**
     * The title displayed in the navigation bar while the list template is visible.
     */
    title?: string;
    /**
     * The array of grid buttons displayed on the template.
     */
    buttons: GridButton[];
    /**
     * Fired when a button is pressed
     */
    onButtonPressed?(e: ButtonPressedEvent): void;
}
export declare class GridTemplate extends Template<GridTemplateConfig> {
    readonly type: string;
    readonly eventMap: {
        gridButtonPressed: string;
    };
}
export {};
