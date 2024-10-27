"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, salt);
        createUserDto.password = hash;
        return this.usersRepository.save(createUserDto);
    }
    findAll() {
        return this.usersRepository.find({
            relations: ['employee'],
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                tel: true,
                image: true,
            },
            order: { id: 'ASC' },
        });
    }
    findIsNotEmp() {
        return this.usersRepository.find({
            relations: ['employee'],
            where: { employee: { user: (0, typeorm_2.IsNull)() } },
        });
    }
    findOne(id) {
        return this.usersRepository.findOne({ where: { id: id } });
    }
    findOneByEmail(email) {
        return this.usersRepository.findOne({
            where: { email: email },
            relations: ['employee'],
        });
    }
    async update(id, updateUserDto) {
        if (updateUserDto.password !== undefined) {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(updateUserDto.password, salt);
            updateUserDto.password = hash;
        }
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        const updatedUser = Object.assign(Object.assign({}, user), updateUserDto);
        await this.usersRepository.save(updatedUser);
        return this.usersRepository.findOne({
            where: { id: id },
            relations: ['employee'],
        });
    }
    async remove(id) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return this.usersRepository.softRemove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map