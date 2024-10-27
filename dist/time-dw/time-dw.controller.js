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
exports.TimeDwController = void 0;
const common_1 = require("@nestjs/common");
const time_dw_service_1 = require("./time-dw.service");
const create_time_dw_dto_1 = require("./dto/create-time-dw.dto");
const update_time_dw_dto_1 = require("./dto/update-time-dw.dto");
let TimeDwController = class TimeDwController {
    constructor(timeDwService) {
        this.timeDwService = timeDwService;
    }
    create(createTimeDwDto) {
        return this.timeDwService.create(createTimeDwDto);
    }
    findAll() {
        return this.timeDwService.findAll();
    }
    findOne(id) {
        return this.timeDwService.findOne(+id);
    }
    update(id, updateTimeDwDto) {
        return this.timeDwService.update(+id, updateTimeDwDto);
    }
    remove(id) {
        return this.timeDwService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_time_dw_dto_1.CreateTimeDwDto]),
    __metadata("design:returntype", void 0)
], TimeDwController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TimeDwController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeDwController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_time_dw_dto_1.UpdateTimeDwDto]),
    __metadata("design:returntype", void 0)
], TimeDwController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TimeDwController.prototype, "remove", null);
TimeDwController = __decorate([
    (0, common_1.Controller)('time-dw'),
    __metadata("design:paramtypes", [time_dw_service_1.TimeDwService])
], TimeDwController);
exports.TimeDwController = TimeDwController;
//# sourceMappingURL=time-dw.controller.js.map