"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDwDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_dw_dto_1 = require("./create-product-dw.dto");
class UpdateProductDwDto extends (0, mapped_types_1.PartialType)(create_product_dw_dto_1.CreateProductDwDto) {
}
exports.UpdateProductDwDto = UpdateProductDwDto;
//# sourceMappingURL=update-product-dw.dto.js.map