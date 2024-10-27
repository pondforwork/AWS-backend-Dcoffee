import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDwDto } from './create-employee-dw.dto';

export class UpdateEmployeeDwDto extends PartialType(CreateEmployeeDwDto) {}
