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
exports.CheckMaterialDetail = void 0;
const material_entity_1 = require("../../materials/entities/material.entity");
const typeorm_1 = require("typeorm");
const check_material_entity_1 = require("./check_material.entity");
let CheckMaterialDetail = class CheckMaterialDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({}),
    __metadata("design:type", Number)
], CheckMaterialDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: '128' }),
    __metadata("design:type", String)
], CheckMaterialDetail.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CheckMaterialDetail.prototype, "qty_last", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CheckMaterialDetail.prototype, "qty_remain", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], CheckMaterialDetail.prototype, "qty_expire", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => check_material_entity_1.CheckMaterial, (check_material) => check_material.check_material_detail),
    __metadata("design:type", check_material_entity_1.CheckMaterial)
], CheckMaterialDetail.prototype, "check_material", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => material_entity_1.Material, (material) => material.check_material_detail),
    __metadata("design:type", material_entity_1.Material)
], CheckMaterialDetail.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterialDetail.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterialDetail.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CheckMaterialDetail.prototype, "deletedDate", void 0);
CheckMaterialDetail = __decorate([
    (0, typeorm_1.Entity)()
], CheckMaterialDetail);
exports.CheckMaterialDetail = CheckMaterialDetail;
//# sourceMappingURL=check_material_detail.js.map