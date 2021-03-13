import { Template, TemplateConfig } from './Template';
interface PointOfInterestItem {
    id: string;
    location: {
        latitude: number;
        longitude: number;
    };
    title: string;
    subtitle?: string;
    summary?: string;
    detailTitle?: string;
    detailSubtitle?: string;
    detailSummary?: string;
}
interface PointOfInterestTemplateConfig extends TemplateConfig {
    title: string;
    items: PointOfInterestItem[];
}
export declare class PointOfInterestTemplate extends Template<PointOfInterestTemplateConfig> {
    readonly type: string;
}
export {};
