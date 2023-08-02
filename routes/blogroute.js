const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();
const { 

    createBlog, 
    updateBlog, 
    getBlog,
    getAllBlogs,
    deleteBlog,
    likeBlog,
    dislikedBlog,
    uploadImages,

} = require("../controller/blogctrl");
const { 
    uploadPhoto, 
    blogImgResize, 
} = require("../middlewares/uploadimages");

router.post("/", authMiddleware, isAdmin, createBlog)
router.put(
        "/upload/:id",
        authMiddleware,
        isAdmin,
        uploadPhoto.array("images", 2),
        blogImgResize,
        uploadImages
        
    );

router.put("/likes", authMiddleware, likeBlog)
router.put("/dislikes", authMiddleware, dislikedBlog)

router.put("/:id", authMiddleware, isAdmin, updateBlog)
router.get("/:id", getBlog)
router.get("/", getAllBlogs)
router.delete("/:id", authMiddleware, isAdmin, deleteBlog)






module.exports = router;