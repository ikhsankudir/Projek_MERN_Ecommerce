const Category = require("../models/produkcategoryModel");
const asyncHandler = require("express-async-handler");
const validateMongoObId = require("../utils/validateMongodbId");


//Buat Kategori Baru
const createCategory = asyncHandler(async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Ubah Category
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan 1 Kategori Dengan ID
const getCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const getCategory = await Category.findById(id);
        res.json(getCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Hapus Kategori Dengan ID
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan Semua Category
const getAllCategory = asyncHandler(async (req, res) => {
    try {
        const getAllCategory = await Category.find();
        res.json(getAllCategory);
    }catch (error) {
        throw new Error(error);
    }
    
});

module.exports = { 
    createCategory,
    updateCategory,
    getCategory,
    deleteCategory,
    getAllCategory
}