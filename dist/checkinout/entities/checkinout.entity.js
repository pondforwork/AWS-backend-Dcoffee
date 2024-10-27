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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkinout = void 0;
const employee_entity_1 = require("../../employees/entities/employee.entity");
const summarysalary_entity_1 = require("../../summarysalary/entities/summarysalary.entity");
const typeorm_1 = require("typeorm");
let Checkinout = class Checkinout {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Checkinout.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Checkinout.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Checkinout.prototype, "time_in", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Checkinout.prototype, "time_out", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: 'float' }),
    __metadata("design:type", Number)
], Checkinout.prototype, "total_hour", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Checkinout.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Checkinout.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Checkinout.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.checkinouts),
    __metadata("design:type", employee_entity_1.Employee)
], Checkinout.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => summarysalary_entity_1.Summarysalary, (summarysalary) => summarysalary.checkinouts),
    __metadata("design:type", summarysalary_entity_1.Summarysalary)
], Checkinout.prototype, "summarysalary", void 0);
Checkinout = __decorate([
    (0, typeorm_1.Entity)()
], Checkinout);
exports.Checkinout = Checkinout;
//# sourceMappingURL=checkinout.entity.js.map