declare class CreateCheckMaterialDetailDto {
    materialId: number;
    qty_remain: number;
    qty_expire: number;
}
export declare class CreateCheckMaterialDto {
    employeeId: number;
    check_material_detail: CreateCheckMaterialDetailDto[];
}
export {};
