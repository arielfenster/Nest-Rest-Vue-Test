import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private readonly usersService: UsersService) { }

	@Get()
	getAllUsers() {
		return this.usersService.getAllUsers();
	}

	@Get(':id')
	getUserById(@Param('id') id: string) {
		const user = this.usersService.getUserById(id);
		user.name = 'AIRALSDD';
		return user;
	}

	@Post()
	addUser(
		@Body('name') name: string,
		@Body('age') age: number,
		@Body('hobbies') hobbies: string[]
	) {
		const generatedId = this.usersService.addUser(name, age, hobbies);

		return {
			success: true,
			message: 'Successfully created a user',
			id: generatedId
		};
	}
}