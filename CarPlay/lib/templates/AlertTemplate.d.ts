import { AlertAction } from '../interfaces/AlertAction';
import { Template, TemplateConfig } from './Template';
interface AlertTemplateConfig extends TemplateConfig {
    titleVariants: string[];
    actions?: AlertAction[];
    onActionButtonPressed?(e: any): void;
}
export declare class AlertTemplate extends Template<AlertTemplateConfig> {
    readonly type: string;
    readonly eventMap: {
        actionButtonPressed: string;
    };
}
export {};
