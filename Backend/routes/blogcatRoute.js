const express = require("express");

const { 
    blogcreateCategory, 
    updateBlogCategory, 
    getblogCategory,
    deleteblogCategory,
    getAllblogCategory
} = require("../controller/blogcatctrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/", authMiddleware, isAdmin, blogcreateCategory )
router.put("/:id", authMiddleware, isAdmin, updateBlogCategory )
router.get("/:id", authMiddleware, isAdmin, getblogCategory )
router.delete("/:id", authMiddleware, isAdmin, deleteblogCategory )
router.get("/", authMiddleware, getAllblogCategory )




module.exports = router;