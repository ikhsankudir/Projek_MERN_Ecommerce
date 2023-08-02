const Brand = require("../models/brandmodel");
const asyncHandler = require("express-async-handler");
const validateMongoObId = require("../utils/validateMongodbId");


//Buat Kategori Baru
const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Ubah Brand
const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatedBrand);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan 1 Kategori Dengan ID
const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const getBrand = await Brand.findById(id);
        res.json(getBrand);
    }catch (error) {
        throw new Error(error);
    }
    
});


//Hapus Kategori Dengan ID
const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoObId(id);
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);
        res.json(deletedBrand);
    }catch (error) {
        throw new Error(error);
    }
    
});

//Dapatkan Semua Brand
const getAllBrand = asyncHandler(async (req, res) => {
    try {
        const getAllBrand = await Brand.find();
        res.json(getAllBrand);
    }catch (error) {
        throw new Error(error);
    }
    
});

module.exports = { 
    createBrand,
    updateBrand,
    getBrand,
    deleteBrand,
    getAllBrand
}