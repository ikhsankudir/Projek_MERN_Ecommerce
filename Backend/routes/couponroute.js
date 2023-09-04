const express = require ("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router()
const { 
    
    createCoupon, 
    getAllCoupon,
    updateCoupon,
    deleteCoupon,

} = require("../controller/couponctrl");

router.post("/",authMiddleware, isAdmin, createCoupon);
router.get("/", authMiddleware, getAllCoupon);
router.put("/:id", authMiddleware, isAdmin, updateCoupon);
router.delete("/:id", authMiddleware, isAdmin, deleteCoupon);




module.exports = router;