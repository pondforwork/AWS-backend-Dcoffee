import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
export declare class MaterialsController {
    private readonly materialsService;
    constructor(materialsService: MaterialsService);
    create(createMaterialDto: CreateMaterialDto): Promise<CreateMaterialDto & import("./entities/material.entity").Material>;
    findAll(): Promise<import("./entities/material.entity").Material[]>;
    findOne(id: string): Promise<import("./entities/material.entity").Material>;
    update(id: string, updateMaterialDto: UpdateMaterialDto): Promise<{
        name: string;
        min_quantity: number;
        quantity: number;
        unit: string;
        price_per_unit: number;
        id: number;
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
        billDetails: import("../bill/entities/bill-detail").BillDetail[];
        check_material_detail: import("../check_material/entities/check_material_detail").CheckMaterialDetail[];
    } & import("./entities/material.entity").Material>;
    remove(id: string): Promise<import("./entities/material.entity").Material>;
}
