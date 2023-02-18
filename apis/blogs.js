const mongoose = require("mongoose");
const Blog = require("../models/blog");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const blogs = await Blog.where({ status: "publish" })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });
    res.json({ blogs: blogs, hasMore: blogs.length < limit ? false : true });
  } catch (error) {
    console.error(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/blog/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(404).send("Blog not found");
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/draft", async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const blogs = await Blog.where({ status: "draft" })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({ blogs: blogs, hasMore: blogs.length < limit ? false : true });
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      body: req.body.body,
      status: req.body.status,
    });
    await blog.save();
    res.json(blog);
  } catch (error) {
    console.error(error);
  }
});

router.patch("/", async (req, res) => {
  try {
    await Blog.findByIdAndUpdate(
      req.body.id,
      { title: req.body.title, body: req.body.body, status: req.body.status },
      { new: true },
      (err, blog) => {
        if (err) {
          res.send("Error updating blog");
        }
        res.json(blog);
      }
    );
  } catch (error) {
    console.error(error);
  }
});

router.get("/latest", async (req, res) => {
  try {
    const blog = await Blog.find({ status: "publish" })
      .sort({ createdAt: -1 })
      .limit(1);
    if (blog) {
      console.log(blog);
      res.json(blog);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/search", async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const blogs = await Blog.find({
      status: req.query.status,
      title: { $regex: req.query.query, $options: "i" },
    })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json({ blogs: blogs, hasMore: blogs.length < limit ? false : true });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
