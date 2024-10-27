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
exports.EmployeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../users/entities/user.entity");
const typeorm_2 = require("typeorm");
const employee_entity_1 = require("./entities/employee.entity");
let EmployeesService = class EmployeesService {
    constructor(employeesRepository, userRepository) {
        this.employeesRepository = employeesRepository;
        this.userRepository = userRepository;
    }
    async create(createEmployeeDto) {
        const newEmployee = new employee_entity_1.Employee();
        newEmployee.name = createEmployeeDto.name;
        newEmployee.tel = createEmployeeDto.tel;
        newEmployee.email = createEmployeeDto.email;
        newEmployee.address = createEmployeeDto.address;
        newEmployee.hourly_wage = createEmployeeDto.hourly_wage;
        newEmployee.position = createEmployeeDto.position;
        const user = await this.userRepository.findOne({
            where: { email: createEmployeeDto.email },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        newEmployee.user = user;
        return this.employeesRepository.save(newEmployee);
    }
    findAll() {
        return this.employeesRepository.find({
            select: {
                user: { id: true, name: true, tel: true, email: true, image: true },
            },
            relations: ['user'],
        });
    }
    findOne(id) {
        return this.employeesRepository.findOne({ where: { id } });
    }
    async update(id, updateEmployeeDto) {
        const employee = await this.employeesRepository.findOneBy({ id });
        if (!employee) {
            throw new common_1.NotFoundException();
        }
        const updatedEmployee = Object.assign(Object.assign({}, employee), updateEmployeeDto);
        return this.employeesRepository.save(updatedEmployee);
    }
    async remove(id) {
        const employee = await this.employeesRepository.findOneBy({ id });
        if (!employee) {
            throw new common_1.NotFoundException();
        }
        return this.employeesRepository.remove(employee);
    }
};
EmployeesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map