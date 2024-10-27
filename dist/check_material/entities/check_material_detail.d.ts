import { Material } from 'src/materials/entities/material.entity';
import { CheckMaterial } from './check_material.entity';
export declare class CheckMaterialDetail {
    id: number;
    name: string;
    qty_last: number;
    qty_remain: number;
    qty_expire: number;
    check_material: CheckMaterial;
    material: Material;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
