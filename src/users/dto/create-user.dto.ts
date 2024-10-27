import { IsEmail, IsNotEmpty, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  tel: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  // @Matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  // )
  password: string;

  image = 'no-image.jpg';
}
