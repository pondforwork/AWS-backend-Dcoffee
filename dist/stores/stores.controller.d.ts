import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    create(createStoreDto: CreateStoreDto): Promise<CreateStoreDto & import("./entities/store.entity").Store>;
    findAll(): Promise<import("./entities/store.entity").Store[]>;
    findOne(id: string): Promise<import("./entities/store.entity").Store>;
    update(id: string, updateStoreDto: UpdateStoreDto): Promise<{
        name: string;
        address: string;
        tel: string;
        id: number;
        orders: import("../orders/entities/order.entity").Order[];
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
    } & import("./entities/store.entity").Store>;
    remove(id: string): Promise<import("./entities/store.entity").Store>;
}
