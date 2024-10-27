import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
export declare class StoresService {
    private storesRepository;
    constructor(storesRepository: Repository<Store>);
    create(createStoreDto: CreateStoreDto): Promise<CreateStoreDto & Store>;
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
    update(id: number, updateStoreDto: UpdateStoreDto): Promise<{
        name: string;
        address: string;
        tel: string;
        id: number;
        orders: import("../orders/entities/order.entity").Order[];
        createdDate: Date;
        updatedDate: Date;
        deletedDate: Date;
    } & Store>;
    remove(id: number): Promise<Store>;
}
