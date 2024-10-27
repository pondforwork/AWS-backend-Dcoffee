import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    findAll(): Promise<User[]>;
    findIsNotEmp(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
}