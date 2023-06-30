const express = require("express");
const { getAllBlogs, addBlog, updateBlog, getById, deleteAllBlog, getByUserId } = require("../controller/blogController");
const blogRouter = express.Router();


blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteAllBlog);
blogRouter.get("/user/:id", getByUserId)


module.exports = blogRouter;