import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Not correct email' })
	email: string;
	@IsString({ message: 'Not correct password' })
	password: string;
}
