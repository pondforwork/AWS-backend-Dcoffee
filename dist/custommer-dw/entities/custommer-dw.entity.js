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
exports.CustommerDw = void 0;
const typeorm_1 = require("typeorm");
let CustommerDw = class CustommerDw {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CustommerDw.prototype, "Customer_dw_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: '128' }),
    __metadata("design:type", String)
], CustommerDw.prototype, "Customer_dw_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], CustommerDw.prototype, "Customer_dw_startdate", void 0);
CustommerDw = __decorate([
    (0, typeorm_1.Entity)()
], CustommerDw);
exports.CustommerDw = CustommerDw;
//# sourceMappingURL=custommer-dw.entity.js.map