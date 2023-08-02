const express = require("express");

const { 
    createBrand, 
    updateBrand, 
    getBrand,
    deleteBrand,
    getAllBrand
} = require("../controller/brandctrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router()

router.post("/", authMiddleware, isAdmin, createBrand )
router.put("/:id", authMiddleware, isAdmin, updateBrand )
router.get("/:id", authMiddleware, isAdmin, getBrand )
router.delete("/:id", authMiddleware, isAdmin, deleteBrand )
router.get("/", authMiddleware, getAllBrand )




module.exports = router;