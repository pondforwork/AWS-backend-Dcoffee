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
exports.CheckMaterial = void 0;
const employee_entity_1 = require("../../employees/entities/employee.entity");
const typeorm_1 = require("typeorm");
const check_material_detail_1 = require("./check_material_detail");
let CheckMaterial = class CheckMaterial {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({}),
    __metadata("design:type", Number)
], CheckMaterial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: '128' }),
    __metadata("design:type", String)
], CheckMaterial.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: '128' }),
    __metadata("design:type", String)
], CheckMaterial.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employee_entity_1.Employee, (employee) => employee.check_mateial),
    __metadata("design:type", employee_entity_1.Employee)
], CheckMaterial.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterial.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterial.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterial.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => check_material_detail_1.CheckMaterialDetail, (check_material_detail) => check_material_detail.check_material),
    __metadata("design:type", Array)
], CheckMaterial.prototype, "check_material_detail", void 0);
CheckMaterial = __decorate([
    (0, typeorm_1.Entity)()
], CheckMaterial);
exports.CheckMaterial = CheckMaterial;
//# sourceMappingURL=check_material.entity.js.map