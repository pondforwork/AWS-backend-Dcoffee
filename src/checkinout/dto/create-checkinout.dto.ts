import { IsNotEmpty } from 'class-validator';

export class CreateCheckinoutDto {
  @IsNotEmpty()
  empId: number;
}
