import { Template, TemplateConfig } from './Template';
interface ContactButtonEvent {
    id: string;
    templateId: string;
}
interface ContactActionBase {
    id: string;
    type: 'call' | 'directions' | 'message';
    disabled?: boolean;
    title?: string;
}
interface ContactActionMessage extends ContactActionBase {
    type: 'message';
    phoneOrEmail: string;
}
declare type ContactAction = ContactActionBase | ContactActionMessage;
interface ContactTemplateConfig extends TemplateConfig {
    name: string;
    subtitle?: string;
    actions?: ContactAction[];
    /**
     * Fired when bar button is pressed
     * @param e Event
     */
    onButtonPressed?(e: ContactButtonEvent): void;
}
export declare class ContactTemplate extends Template<ContactTemplateConfig> {
    readonly type: string;
    readonly eventMap: {
        gridButtonPressed: string;
    };
}
export {};
