const Blog = require("../models/blogModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const validateMongoObId = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary")
const fs = require('fs');


// Buat Blog 
const createBlog = asyncHandler(async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.json({
            status: " Selamat Anda Berhasil Membuat Blog",
            newBlog
        });
    } catch (error) {
        throw new Error(error);
    }
});

// dapatkan semua Blog
const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {
            new : true,
        });
        res.json(updateBlog);
    } catch (error) {
        throw new Error(error);
    }
});

//dapatkan 1 blog berdasarkan views
const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
      const getBlog = await Blog.findById(id)
        .populate("likes")
        .populate("dislikes");
      const updateViews = await Blog.findByIdAndUpdate(
        id,
        {
          $inc: { numViews: 1 },
        },
        { new: true }
      );
      res.json(getBlog);
    } catch (error) {
      throw new Error(error);
    }
  });

//dapatkan semua Blog
const getAllBlogs = asyncHandler(async (req, res) => {
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs);
    }catch (error) {
        throw new Error(error)
    }
});

//delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json(deleteBlog);
    }catch (error){
        throw new Error(error);
    }
});

// like blog
const likeBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoObId(blogId);
    // Find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    // find the login user
    const loginUserId = req?.user?._id;
    // find if the user has liked the blog
    const isLiked = blog?.isLiked;
    // find if the user has disliked the blog
    const alreadyDisliked = blog?.dislikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyDisliked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(blog);
    }
    if (isLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { likes: loginUserId },
          isLiked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  });

// dislike blog
const dislikedBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
  validateMongoObId(blogId);
  // Find the blog which you want to be liked
  const blog = await Blog.findById(blogId);
  // find the login user
  const loginUserId = req?.user?._id;
  // find if the user has liked the blog
  const isDisLiked = blog?.isDisliked;
  // find if the user has disliked the blog
  const alreadyLiked = blog?.likes?.find(
    (userId) => userId?.toString() === loginUserId?.toString()
  );
  if (alreadyLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { likes: loginUserId },
        isLiked: false,
      },
      { new: true }
    );
    res.json(blog);
  }
  if (isDisLiked) {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $pull: { dislikes: loginUserId },
        isDisliked: false,
      },
      { new: true }
    );
    res.json(blog);
  } else {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      {
        $push: { dislikes: loginUserId },
        isDisliked: true,
      },
      { new: true }
    );
    res.json(blog);
  }
});

// upload Gambar Blog
const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoObId(id);
  console.log(req.files)
  try{
    const uploader = (path) => cloudinaryUploadImg(path, "images");
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newpath = await uploader(path);
      console.log(newpath)
      urls.push(newpath);
      fs.unlinkSync(path);
    }
    const findBlog = await Blog.findByIdAndUpdate(
      id, 
      {
      images : urls.map((file) => {
        return file;
      }),
    },
    {
      new: true,
    }
    );
    res.json({
      msg: "upload foto berhasil",
      findBlog
    });
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = { 
    createBlog,
    updateBlog,
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikedBlog,
    uploadImages,
};