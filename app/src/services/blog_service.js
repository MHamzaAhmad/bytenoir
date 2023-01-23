import Api from '../api/api_client';

class BlogService {
    constructor() {
        this.api = new Api();
    }

    getLatestBlog() {
        return this.api.get('/blogs/latest');
    }

    postBlog(blog) {
        return this.api.post('/blogs', blog);
    }

    updateBlog(blog) {
        return this.api.patch('/blogs', blog);
    }

}
const blogService = new BlogService();
export default blogService
