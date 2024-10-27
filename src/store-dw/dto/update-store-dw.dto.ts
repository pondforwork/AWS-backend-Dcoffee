import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDwDto } from './create-store-dw.dto';

export class UpdateStoreDwDto extends PartialType(CreateStoreDwDto) {}
