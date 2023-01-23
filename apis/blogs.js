const mongoose = require("mongoose");
const Blog = require("../models/blog");

const router = require("express").Router();

router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (error) {
        console.error(error);
    }
});

router.post("/", async (req, res) => {
    try {
        const blog = new Blog({
            title: req.body.title,
            body: req.body.body,
        });
        await blog.save();
        res.json(blog);
    } catch (error) {
        console.error(error);
    }
});

router.patch('/', async (req, res) => {
    try {
        await Blog.findByIdAndUpdate(req.body.id, {title: req.body.title, body: req.body.body}, {new: true},
             (err, blog) => {
                if (err) {
                    res.send("Error updating blog");
                }
                res.json(blog);
             });
    } catch (error) {
        console.error(error);
    }
})

router.get("/latest", async (req, res) => {
    try {
        const blog = await Blog.findOne().sort({ _id: -1 });
        res.json(blog);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
