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
exports.SummarysalaryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const summarysalary_entity_1 = require("./entities/summarysalary.entity");
const checkinout_entity_1 = require("../checkinout/entities/checkinout.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
let SummarysalaryService = class SummarysalaryService {
    constructor(summarysalaryRepository, CheckinOutRepository, EmployeeOutRepository) {
        this.summarysalaryRepository = summarysalaryRepository;
        this.CheckinOutRepository = CheckinOutRepository;
        this.EmployeeOutRepository = EmployeeOutRepository;
    }
    async create() {
        const CheckinoutAll = await this.CheckinOutRepository.find({
            where: { summarysalary: (0, typeorm_2.IsNull)() },
            relations: ['summarysalary', 'employee'],
        });
        const NewSalary = new summarysalary_entity_1.Summarysalary();
        NewSalary.salary = 0;
        NewSalary.workhour = 0;
        NewSalary.Date = new Date().toLocaleDateString();
        const salary = await this.summarysalaryRepository.save(NewSalary);
        for (const item of CheckinoutAll) {
            const employee = await this.EmployeeOutRepository.findOne({
                where: { email: item.employee.email },
            });
            const salary_per_emp = employee.hourly_wage * item.total_hour;
            salary.workhour = salary.workhour + item.total_hour;
            salary.salary = Number(salary.salary) + Number(salary_per_emp);
            item.summarysalary = salary;
            await this.CheckinOutRepository.save(item);
            await this.summarysalaryRepository.save(salary);
        }
        return 0;
    }
    findAll() {
        return this.summarysalaryRepository.find();
    }
    findOne(id) {
        return this.summarysalaryRepository.findOne({ where: { id } });
    }
    async update(id, updateSummarysalaryDto) {
        const summarysalary = await this.summarysalaryRepository.findOneBy({ id });
        if (!summarysalary) {
            throw new common_1.NotFoundException();
        }
        const updateSummarysalary = Object.assign(Object.assign({}, summarysalary), updateSummarysalaryDto);
        return this.summarysalaryRepository.save(updateSummarysalary);
    }
    async remove(id) {
        const summarysalary = await this.summarysalaryRepository.findOneBy({ id });
        if (!summarysalary) {
            throw new common_1.NotFoundException();
        }
        return this.summarysalaryRepository.softRemove(summarysalary);
    }
};
SummarysalaryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(summarysalary_entity_1.Summarysalary)),
    __param(1, (0, typeorm_1.InjectRepository)(checkinout_entity_1.Checkinout)),
    __param(2, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SummarysalaryService);
exports.SummarysalaryService = SummarysalaryService;
//# sourceMappingURL=summarysalary.service.js.map