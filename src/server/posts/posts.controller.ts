import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostDto } from 'src/server/db/dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

	constructor(private readonly postsService: PostsService) { }

	@Get()
	getAllPosts() {
		return this.postsService.getAllPosts();
	}

	@Get(':id')
	getPostById(@Param('id') id: string) {
		return this.postsService.getPostById(id);
	}

	@Post()
	addPost(@Body() postDto: PostDto) {

		const { author, text, views } = postDto;

		const generatedId = this.postsService.addPost(author, text, views);

		return {
			success: true,
			message: 'Successfully created a user',
			id: generatedId
		};
	}
}