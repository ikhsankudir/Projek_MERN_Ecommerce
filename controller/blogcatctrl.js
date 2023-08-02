const BlogCategory = require("../models/blogcatModel");
const asyncHandler = require("express-async-handler");
const validateMongoObId = require("../utils/validateMongodbId");


//Buat Kategori Baru
const blogcreateCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await BlogCategory.create(req.body);
        res.json(newCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Ubah Category
const updateBlogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const updatedBlogCategory = await BlogCategory.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedBlogCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan 1 Kategori Dengan ID
const getblogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const getblogCategory = await BlogCategory.findById(id);
        res.json(getblogCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Hapus Kategori Dengan ID
const deleteblogCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const deletedblogCategory = await BlogCategory.findByIdAndDelete(id);
        res.json(deletedblogCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan Semua Category
const getAllblogCategory = asyncHandler(async (req, res) => {
    try {
        const getAllblogCategory = await BlogCategory.find();
        res.json(getAllblogCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

module.exports = { 
    blogcreateCategory,
    updateBlogCategory,
    getblogCategory,
    deleteblogCategory,
    getAllblogCategory   
}