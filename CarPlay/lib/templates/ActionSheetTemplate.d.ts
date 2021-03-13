import { AlertAction } from '../interfaces/AlertAction';
import { Template, TemplateConfig } from './Template';
interface ActionSheetTemplateConfig extends TemplateConfig {
    title: string;
    message: string;
    actions?: AlertAction[];
    onActionButtonPressed?(e: any): void;
}
export declare class ActionSheetTemplate extends Template<ActionSheetTemplateConfig> {
    readonly type: string;
    readonly eventMap: {
        actionButtonPressed: string;
    };
}
export {};
