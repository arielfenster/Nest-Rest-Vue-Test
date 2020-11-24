import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "src/server/db/model/user.model";

@Injectable()
export class UsersService {

	createId(): string {
		return (Math.round(Math.random() * 12345)).toString();
	}

	private readonly users: User[] = [
		{
			id: this.createId(),
			name: 'Ariel Fenster',
			age: 28,
			hobbies: ['Sport', 'Running', 'Programming']
		},
		{
			id: this.createId(),
			name: 'Benny David',
			age: 12,
			hobbies: ['Gaming']
		},
		{
			id: this.createId(),
			name: 'Azam Azam',
			age: 54,
			hobbies: ['Being kidnapped', 'Poetry']
		},
	];

	getAllUsers() {
		return [...this.users];
	}

	getUserById(id: string) {
		const user = this.users.find(user => user.id === id);
		if (!user) {
			throw new NotFoundException(`User ${id} doesn't exist`);
		}
		return { ...user };
	}

	addUser(name: string, age: number, hobbies: string[]): string {
		const id = this.createId();
		const newUser = new User(id, name, age, hobbies);

		this.users.push(newUser);

		return id;
	}
}