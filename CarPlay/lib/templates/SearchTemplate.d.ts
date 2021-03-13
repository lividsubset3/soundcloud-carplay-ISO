import { ListItem } from '../interfaces/ListItem';
import { BaseEvent, Template, TemplateConfig } from './Template';
interface SearchTemplateConfig extends TemplateConfig {
    /**
     * Fired when search input is changed.
     * Must return list of items to show.
     * @param query Search query
     */
    onSearch?(query: string): Promise<ListItem[]>;
    /**
     * Fired when result item is selected.
     * Spinner shows by default.
     * When the returned promise is resolved the spinner will hide.
     * @param item Object with the selected index
     */
    onItemSelect?(item: {
        index: number;
    }): Promise<void>;
    /**
     * Fired when search button is pressed
     */
    onSearchButtonPressed?(e: BaseEvent): void;
}
export declare class SearchTemplate extends Template<SearchTemplateConfig> {
    config: SearchTemplateConfig;
    readonly type: string;
    readonly eventMap: {
        searchButtonPressed: string;
    };
    constructor(config: SearchTemplateConfig);
}
export {};
