"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustommerDwService = void 0;
const common_1 = require("@nestjs/common");
let CustommerDwService = class CustommerDwService {
    create(createCustommerDwDto) {
        return 'This action adds a new custommerDw';
    }
    findAll() {
        return `This action returns all custommerDw`;
    }
    findOne(id) {
        return `This action returns a #${id} custommerDw`;
    }
    update(id, updateCustommerDwDto) {
        return `This action updates a #${id} custommerDw`;
    }
    remove(id) {
        return `This action removes a #${id} custommerDw`;
    }
};
CustommerDwService = __decorate([
    (0, common_1.Injectable)()
], CustommerDwService);
exports.CustommerDwService = CustommerDwService;
//# sourceMappingURL=custommer-dw.service.js.map