import { IsNotEmpty } from 'class-validator';

export class CreateSummarysalaryDto {
  @IsNotEmpty()
  workhour: number;

  @IsNotEmpty()
  salary: number;
}
