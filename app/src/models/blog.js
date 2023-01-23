class Blog {
    constructor(id, title, body, status, createdAt, updatedAt) {
        this.id = id || '';
        this.title = title;
        this.body = body;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.status = status;
        Object.freeze(this);
    }

    static fromJson(json) {
        return new Blog(json._id, json.title, json.body, json.status, json.createdAt || Date.now, json.updatedAt || Date.now);
    }

    update({id, title, body, status}) {
        return new Blog(id, title, body, status, this.createdAt, Date.now);
    }

    static empty() {
        return new Blog('', '', 'draft', '', '');
    }

    toJson() {
        return {
            title: this.title,
            body: this.body,
            status: this.status,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        }
    }
}

export default Blog;
