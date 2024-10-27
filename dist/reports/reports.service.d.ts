import { DataSource } from 'typeorm';
export declare class ReportsService {
    private DataSource;
    getOder(): Promise<any>;
    getProduct(): Promise<any>;
    getMaterialBySearchText(searchText: string): Promise<any>;
    constructor(DataSource: DataSource);
    getMaterial(): Promise<any>;
    getMaterial_info(): Promise<any>;
}
