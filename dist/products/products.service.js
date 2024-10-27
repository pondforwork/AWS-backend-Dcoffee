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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../categories/entities/category.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async create(createProductDto) {
        const category = await this.categoriesRepository.findOne({
            where: {
                id: createProductDto.categoryId,
            },
        });
        const newProduct = new product_entity_1.Product();
        newProduct.name = createProductDto.name;
        newProduct.price = createProductDto.price;
        newProduct.type = createProductDto.type;
        newProduct.size = createProductDto.size;
        newProduct.image = createProductDto.image;
        newProduct.category = category;
        return this.productsRepository.save(newProduct);
    }
    findByCategory(id) {
        return this.productsRepository.find({ where: { categoryId: id } });
    }
    findAll(option) {
        return this.productsRepository.find(option);
    }
    async findOne(id) {
        const product = await this.productsRepository.findOne({
            where: { id: id },
        });
        if (!product) {
            throw new common_1.NotFoundException();
        }
        return product;
    }
    async update(id, updateProductDto) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException();
        }
        const updatedProduct = Object.assign(Object.assign({}, product), updateProductDto);
        return this.productsRepository.save(updatedProduct);
    }
    async remove(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException();
        }
        return this.productsRepository.softRemove(product);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map