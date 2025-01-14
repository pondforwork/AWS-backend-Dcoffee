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
exports.TimeDw = void 0;
const typeorm_1 = require("typeorm");
let TimeDw = class TimeDw {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'date' }),
    __metadata("design:type", Date)
], TimeDw.prototype, "Time_key", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: '255' }),
    __metadata("design:type", String)
], TimeDw.prototype, "Day_of_week", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TimeDw.prototype, "Month", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TimeDw.prototype, "Quarter", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TimeDw.prototype, "Year", void 0);
TimeDw = __decorate([
    (0, typeorm_1.Entity)()
], TimeDw);
exports.TimeDw = TimeDw;
//# sourceMappingURL=time-dw.entity.js.map