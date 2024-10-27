"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmployeeDwDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_employee_dw_dto_1 = require("./create-employee-dw.dto");
class UpdateEmployeeDwDto extends (0, mapped_types_1.PartialType)(create_employee_dw_dto_1.CreateEmployeeDwDto) {
}
exports.UpdateEmployeeDwDto = UpdateEmployeeDwDto;
//# sourceMappingURL=update-employee-dw.dto.js.map