import { GridTemplate } from './GridTemplate';
import { InformationTemplate } from './InformationTemplate';
import { ListTemplate } from './ListTemplate';
import { PointOfInterestTemplate } from './PointOfInterestTemplate';
import { Template, TemplateConfig } from './Template';
declare type TabBarTemplates = ListTemplate | GridTemplate | InformationTemplate | PointOfInterestTemplate;
interface TabBarTemplateConfig extends TemplateConfig {
    /**
     * The title displayed in the navigation bar while the tab bar template is visible.
     */
    title?: string;
    /**
     * The templates to show as tabs.
     */
    templates: TabBarTemplates[];
    onTemplateSelect(template: TabBarTemplates, e: {
        templateId: string;
        selectedTemplateId: string;
    }): void;
}
export declare class TabBarTemplate extends Template<TabBarTemplateConfig> {
    config: TabBarTemplateConfig;
    readonly type: string;
    constructor(config: TabBarTemplateConfig);
}
export {};
