const express = require("express");
const { 
    createProduct,
    getaProduct,
    getAllProduct, 
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages
} = require("../controller/productctrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadimages");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.put(
"/upload",
authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.get("/:id", getaProduct);
router.put("/whishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);


router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.get("/", getAllProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);




module.exports = router;