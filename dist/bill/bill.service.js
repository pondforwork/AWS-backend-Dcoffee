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
exports.BillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const employee_entity_1 = require("../employees/entities/employee.entity");
const material_entity_1 = require("../materials/entities/material.entity");
const typeorm_2 = require("typeorm");
const bill_detail_1 = require("./entities/bill-detail");
const bill_entity_1 = require("./entities/bill.entity");
let BillService = class BillService {
    constructor(billRepository, employeeRepository, billdetailRepository, materialRepository) {
        this.billRepository = billRepository;
        this.employeeRepository = employeeRepository;
        this.billdetailRepository = billdetailRepository;
        this.materialRepository = materialRepository;
    }
    async create(createBillDto) {
        const newBill = new bill_entity_1.Bill();
        const employee = await this.employeeRepository.findOne({
            where: { id: createBillDto.employeeId },
        });
        if (!employee) {
            throw new common_1.NotFoundException();
        }
        newBill.employee = employee;
        newBill.shop_name = createBillDto.shop_name;
        newBill.date = new Date().toLocaleDateString();
        newBill.time = new Date().toLocaleTimeString();
        newBill.buy = createBillDto.buy;
        await this.billRepository.save(newBill);
        for (const item of createBillDto.billDetails) {
            const b_detail = new bill_detail_1.BillDetail();
            const material = await this.materialRepository.findOne({
                where: { id: item.materialId },
            });
            console.log(item.materialId);
            console.log(material);
            b_detail.amount = item.amount;
            b_detail.material = material;
            b_detail.price = item.price;
            b_detail.total = item.amount * item.price;
            b_detail.name = b_detail.material.name;
            b_detail.bill = newBill;
            material.quantity = Number(material.quantity) + Number(b_detail.amount);
            material.price_per_unit = b_detail.price;
            await this.materialRepository.save(material);
            await this.billdetailRepository.save(b_detail);
            newBill.total = newBill.total + b_detail.total;
            newBill.change = newBill.buy - newBill.total;
        }
        await this.billRepository.save(newBill);
        return this.billRepository.findOne({
            where: { id: newBill.id },
            relations: ['billDetails'],
        });
    }
    findAll() {
        return this.billRepository.find({ relations: ['employee', 'billDetails'] });
    }
    async findOne(id) {
        const bill = await this.billRepository.findOne({
            where: { id: id },
            relations: ['employee', 'billDetails'],
        });
        if (!bill) {
            throw new common_1.NotFoundException();
        }
        return bill;
    }
    update(id, updateBillDto) {
        return `This action updates a #${id} bill`;
    }
    async remove(id) {
        const bill = await this.billRepository.findOneBy({ id: id });
        if (!bill) {
            throw new common_1.NotFoundException();
        }
        return this.billRepository.softRemove(bill);
    }
};
BillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bill_entity_1.Bill)),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(2, (0, typeorm_1.InjectRepository)(bill_detail_1.BillDetail)),
    __param(3, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], BillService);
exports.BillService = BillService;
//# sourceMappingURL=bill.service.js.map