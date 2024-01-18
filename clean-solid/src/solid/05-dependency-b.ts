import { PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private database :PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // this.posts = await jsonDB.getFakePosts();
        this.posts = await this.database.getPosts();
        return this.posts;
    }
}