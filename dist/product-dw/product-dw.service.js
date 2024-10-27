"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDwService = void 0;
const common_1 = require("@nestjs/common");
let ProductDwService = class ProductDwService {
    create(createProductDwDto) {
        return 'This action adds a new productDw';
    }
    findAll() {
        return `This action returns all productDw`;
    }
    findOne(id) {
        return `This action returns a #${id} productDw`;
    }
    update(id, updateProductDwDto) {
        return `This action updates a #${id} productDw`;
    }
    remove(id) {
        return `This action removes a #${id} productDw`;
    }
};
ProductDwService = __decorate([
    (0, common_1.Injectable)()
], ProductDwService);
exports.ProductDwService = ProductDwService;
//# sourceMappingURL=product-dw.service.js.map