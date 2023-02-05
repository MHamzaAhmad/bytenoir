import Api from '../api/api_client';

class BlogService {
    constructor() {
        this.api = new Api();
    }

    getLatestBlog() {
        return this.api.get('/blogs/latest');
    }

    getBlogs(page, limit) {
        return this.api.get(`/blogs?page=${page}&limit=${limit}`);
    }

    getBlog(id) {
        return this.api.get(`/blogs/blog/${id}`);
    }

    getDraftBlogs(page, limit) {
    return this.api.get(`/blogs/draft?page=${page}&limit=${limit}`)
    }

    postBlog(blog) {
        return this.api.post('/blogs', blog);
    }

    updateBlog(blog) {
        return this.api.patch('/blogs', blog);
    }

    searchBlogs(query, page, limit, status) {
        return this.api.get(`/blogs/search?query=${query}&page=${page}&limit=${limit}&status=${status}`);
    }

}
const blogService = new BlogService();
export default blogService
