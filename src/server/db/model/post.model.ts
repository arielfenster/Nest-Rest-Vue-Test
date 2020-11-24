export class Post {
  constructor(
    public id: string,
    public author: string,
    public text: string,
    public views: number
  ) {}
}