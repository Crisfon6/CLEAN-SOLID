import { PostService } from './05-dependency-b';
import { JSONDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {
    const jsonDatabase = new JSONDatabaseService();
    const localDatabase = new LocalDataBaseService();
    const webApiDatabase = new WebApiPostService();
    
    const postService = new PostService(webApiDatabase);

    const posts = await postService.getPosts();

    console.log({ posts })


})();