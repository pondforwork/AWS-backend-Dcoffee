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
exports.CheckinoutService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const checkinout_entity_1 = require("./entities/checkinout.entity");
const employee_entity_1 = require("../employees/entities/employee.entity");
let CheckinoutService = class CheckinoutService {
    constructor(checkinoutRepository, employeesRepository) {
        this.checkinoutRepository = checkinoutRepository;
        this.employeesRepository = employeesRepository;
    }
    async create(createCheckinoutDto) {
        const employee = await this.employeesRepository.findOneBy({
            id: createCheckinoutDto.empId,
        });
        const newCheckIO = new checkinout_entity_1.Checkinout();
        newCheckIO.date = new Date().toLocaleDateString();
        newCheckIO.time_in = new Date().toLocaleTimeString();
        newCheckIO.employee = employee;
        return this.checkinoutRepository.save(newCheckIO);
    }
    findAll() {
        return this.checkinoutRepository.find();
    }
    findOne(id) {
        return this.checkinoutRepository.findOne({ where: { id } });
    }
    findByEmail(email) {
        return this.checkinoutRepository.find({
            where: { employee: { email: email } },
        });
    }
    async findCheckStage(email) {
        console.log(email);
        const checkinout = await this.checkinoutRepository.findOne({
            relations: ['employee'],
            where: { employee: { email: email }, time_out: (0, typeorm_2.IsNull)() },
        });
        if (!checkinout) {
            return true;
        }
        return false;
    }
    async update(data) {
        const checkinout = await this.checkinoutRepository.findOne({
            relations: ['employee'],
            where: {
                employee: { email: data.email },
                time_out: (0, typeorm_2.IsNull)(),
            },
        });
        if (!checkinout) {
            throw new common_1.NotFoundException();
        }
        const time = new Date();
        checkinout.time_out = time.toLocaleTimeString();
        const timediff = Math.abs(time.getTime() - checkinout.createdDate.getTime());
        const h = Math.floor(timediff / (1000 * 60 * 60));
        const m = Math.floor((timediff / (1000 * 60)) % 60);
        const resultTime = `${h}.${m.toString().padStart(2, '0')}`;
        checkinout.total_hour = parseFloat(resultTime);
        return this.checkinoutRepository.save(checkinout);
    }
    async remove(id) {
        const checkinout = await this.checkinoutRepository.findOneBy({ id });
        if (!checkinout) {
            throw new common_1.NotFoundException();
        }
        return this.checkinoutRepository.softRemove(checkinout);
    }
};
CheckinoutService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(checkinout_entity_1.Checkinout)),
    __param(1, (0, typeorm_1.InjectRepository)(employee_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CheckinoutService);
exports.CheckinoutService = CheckinoutService;
//# sourceMappingURL=checkinout.service.js.map