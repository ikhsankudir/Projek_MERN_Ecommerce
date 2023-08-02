const Coupon = require("../models/couponmodel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asyncHandler = require ("express-async-handler")


//Buat Kupon Baru API
const createCoupon = asyncHandler(async (req, res) => {
    try{
        const newCoupon = await Coupon.create(req.body);
        res.json(newCoupon);
    }catch (error) {
        throw new Error(error);
    }
});

//Dapatkan Semua Kupon API
const getAllCoupon = asyncHandler(async (req, res) => {
    try{
        const getAllCoupon = await Coupon.find();
        res.json(getAllCoupon);
    }catch (error) {
        throw new Error(error);
    }
});

//Dapatkan 1 Kupon API
const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updatecoupon);
    }catch (error) {
        throw new Error(error);
    }
});

//Hapus 1 Kupon API
const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const deletecoupon = await Coupon.findByIdAndDelete(id);
        res.json(deletecoupon);
    }catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    createCoupon,
    getAllCoupon,
    updateCoupon,
    deleteCoupon
};