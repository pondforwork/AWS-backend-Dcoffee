import { CreateMaterialDto } from './dto/create-material.dto';
import { UpdateMaterialDto } from './dto/update-material.dto';
import { Material } from './entities/material.entity';
import { Repository } from 'typeorm';
export declare class MaterialsService {
    private materialRepository;
    constructor(materialRepository: Repository<Material>);
    create(createMaterialDto: CreateMaterialDto): Promise<CreateMaterialDto & Material>;
    findAll(): Promise<Material[]>;
    findOne(id: number): Promise<Material>;
    update(id: number, updateMaterialDto: UpdateMaterialDto): Promise<{
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
    } & Material>;
    remove(id: number): Promise<Material>;
}
