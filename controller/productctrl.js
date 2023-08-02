const Product = require("../models/productmodel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");
const cloudinaryUploadImg = require("../utils/cloudinary")
const fs = require('fs');

//Buat Produk Api Postman

const createProduct = asyncHandler(async (req, res) => { 
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    }catch (error){
        throw new Error(error);
    }
});

//update produk 
const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params.id;
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findOneAndUpdate({ id }, req.body, {
            new: true,
        });
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//hapus produk 
const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params.id;
    try {
        const deleteProduct = await Product.findOneAndDelete(id);
        res.json(deleteProduct)
    } catch (error) {
        throw new Error(error);
    }
});

//Dapatkan 1 Produk

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch (error) {
        throw new Error(error);
    }
});

//Dapatkan Semua List Produk

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        //filtering rentang harga produk

        const queryObj = { ...req.query };
        const excludedFields = ["page", "sort", "limit", "fields"];
        excludedFields.forEach((el) => delete queryObj[el]);
        console.log(queryObj);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `\$${match}`);
        
        let query = Product.find(JSON.parse(queryStr));

        //sortir Produk

        if (req.query.sort) {
            const sortBy =req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else { 
            query = query.sort("-createdAt");
        }

        //FIELDS PRODUK 
        
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }
        
        //pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error(" Maaf Halaman Belum Tersedia ");
        }
        console.log(page, limit, skip); 



        const product = await query;
        res.json(product);
    } catch (error){
        throw new Error(error);
    }
});

// buat whislist produk pengguna
const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((_id) => _id.toString() === prodId);
        if (alreadyAdded) {
        let userUpdated = await User.findByIdAndUpdate(
            _id,
            {
            $pull: { wishlist: prodId },
            },
            {
            new: true,
            }
        );
        res.json(userUpdated);
        } else {
        let userUpdated = await User.findByIdAndUpdate(
            _id,
            {
            $push: { wishlist: prodId },
            },
            {
            new: true,
            }
        );
        res.json(userUpdated);
        }
    } catch (error) {
        throw new Error(error);
    }
});

// buat rating produk 
const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;
    try {
      const product = await Product.findById(prodId);
      let alreadyRated = product.ratings.find(
        (userId) => userId.postedby.toString() === _id.toString()
      );
      if (alreadyRated) {
        const updateRating = await Product.updateOne(
          {
            ratings: { $elemMatch: alreadyRated },
          },
          {
            $set: { "ratings.$.star": star, "ratings.$.comment": comment },
          },
          {
            new: true,
          }
        );
      } else {
        const rateProduct = await Product.findByIdAndUpdate(
          prodId,
          {
            $push: {
              ratings: {
                star: star,
                comment: comment,
                postedby: _id,
              },
            },
          },
          {
            new: true,
          }
        );
      }
      const getallratings = await Product.findById(prodId);
      let totalRating = getallratings.ratings.length;
      let ratingsum = getallratings.ratings
        .map((item) => item.star)
        .reduce((prev, curr) => prev + curr, 0);
      let actualRating = Math.round(ratingsum / totalRating);
      let finalproduct = await Product.findByIdAndUpdate(
        prodId,
        {
          totalrating: actualRating,
        },
        { new: true }
      );
      res.json(finalproduct);
    } catch (error) {
      throw new Error(error);
    }
  });
  
// upload Gambar produk
  const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
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
      const findProduct = await Product.findByIdAndUpdate(
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
        findProduct
      });
    } catch (error) {
      throw new Error(error);
    }
  });

module.exports = {
    createProduct,
    getaProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages
};