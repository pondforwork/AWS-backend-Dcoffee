import { BillDetail } from 'src/bill/entities/bill-detail';
import { CheckMaterialDetail } from 'src/check_material/entities/check_material_detail';
export declare class Material {
    id: number;
    name: string;
    min_quantity: number;
    quantity: number;
    unit: string;
    price_per_unit: number;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
    billDetails: BillDetail[];
    check_material_detail: CheckMaterialDetail[];
}
