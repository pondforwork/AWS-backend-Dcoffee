import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getMaterial(query: {
        searchText?: string;
    }): Promise<any>;
    getMaterial_info(query: {
        searchText?: string;
    }): Promise<any>;
    getProduct(): Promise<any>;
}
