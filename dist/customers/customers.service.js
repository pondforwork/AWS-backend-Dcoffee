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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("./entities/customer.entity");
let CustomersService = class CustomersService {
    constructor(customersRepository) {
        this.customersRepository = customersRepository;
    }
    async create(createCustomerDto) {
        const newCustomer = new customer_entity_1.Customer();
        newCustomer.name = createCustomerDto.name;
        newCustomer.tel = createCustomerDto.tel;
        newCustomer.point = createCustomerDto.point;
        newCustomer.startDate = new Date().toLocaleDateString();
        return this.customersRepository.save(newCustomer);
    }
    findAll() {
        return this.customersRepository.find();
    }
    findOne(id) {
        const customer = this.customersRepository.findOne({ where: { id: id } });
        if (!customer) {
            throw new common_1.NotFoundException();
        }
        return customer;
    }
    async update(id, updateCustomerDto) {
        const customer = await this.customersRepository.findOneBy({ id });
        if (!customer) {
            throw new common_1.NotFoundException();
        }
        const updatedCustomer = Object.assign(Object.assign({}, customer), updateCustomerDto);
        return this.customersRepository.save(updatedCustomer);
    }
    async remove(id) {
        const customer = await this.customersRepository.findOneBy({ id });
        if (!customer) {
            throw new common_1.NotFoundException();
        }
        return this.customersRepository.softRemove(customer);
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map