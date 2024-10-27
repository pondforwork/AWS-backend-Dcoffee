import { PartialType } from '@nestjs/mapped-types';
import { CreateCustommerDwDto } from './create-custommer-dw.dto';

export class UpdateCustommerDwDto extends PartialType(CreateCustommerDwDto) {}
