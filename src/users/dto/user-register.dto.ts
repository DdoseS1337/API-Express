import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Not correct email' })
	email: string;
	@IsString({ message: 'Not password' })
	password: string;
	@IsString({ message: 'Not name' })
	name: string;
}
