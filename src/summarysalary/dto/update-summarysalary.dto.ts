import { PartialType } from '@nestjs/mapped-types';
import { CreateSummarysalaryDto } from './create-summarysalary.dto';

export class UpdateSummarysalaryDto extends PartialType(
  CreateSummarysalaryDto,
) {}
