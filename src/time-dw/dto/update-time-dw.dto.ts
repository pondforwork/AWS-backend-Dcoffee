import { PartialType } from '@nestjs/mapped-types';
import { CreateTimeDwDto } from './create-time-dw.dto';

export class UpdateTimeDwDto extends PartialType(CreateTimeDwDto) {}
