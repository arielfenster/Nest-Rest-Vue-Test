import { Injectable, NotFoundException } from "@nestjs/common";
import { Post } from "src/server/db/model/post.model";


@Injectable()
export class PostsService {

	createId(): string {
		return (Math.round(Math.random() * 12345)).toString();
	}

	private readonly posts: Post[] = [
		{
			id: this.createId(),
			author: 'Benny Goren',
			text: 'This is an aweomse article',
			views: 12921873
		},
		{
			id: this.createId(),
			author: 'David David',
			text: 'A test article',
			views: 12777
		},
		{
			id: this.createId(),
			author: 'Azam Azam',
			text: 'Child molesting and the IRS',
			views: 12
		},
	]

	getAllPosts() {
		return [...this.posts];
	}

	getPostById(id: string) {
		const post = this.posts.find(post => post.id === id);
		if (!post) {
			throw new NotFoundException(`Post ${id} cannot be found`);
		}
		return { ...post };
	}

	addPost(author: string, text: string, views: number) {
		const id = this.createId();

		const newPost = new Post(id, author, text, views);
		this.posts.push(newPost);

		return id;
	}
}