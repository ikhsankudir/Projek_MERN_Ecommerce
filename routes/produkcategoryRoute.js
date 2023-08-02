const express = require("express");

const { 
    createCategory, 
    updateCategory, 
    getCategory,
    deleteCategory,
    getAllCategory
} = require("../controller/produkcategoryctrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/", authMiddleware, isAdmin, createCategory )
router.put("/:id", authMiddleware, isAdmin, updateCategory )
router.get("/:id", authMiddleware, isAdmin, getCategory )
router.delete("/:id", authMiddleware, isAdmin, deleteCategory )
router.get("/", authMiddleware, getAllCategory )




module.exports = router;