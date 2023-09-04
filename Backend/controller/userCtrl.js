const { generateToken } = require("../config/jwtToken");
const User = require("../models/userModel");
const Product = require("../models/productmodel")
const Cart = require("../models/cartModel")
const Coupon = require("../models/couponmodel")
const Order = require("../models/orderModel")

const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } =  require("../config/refreshtoken")
const jwt = require ("jsonwebtoken");
const sendEmail = require ("./emailctrl")
const crypto = require ("crypto");
const uniqid = require('uniqid');



//Pendaftaran Pengguna Baru

const createUser = asyncHandler(async (req, res) => { //
    const email = req.body.email;
    const findUser = await User.findOne({ email : email });
    if (!findUser) {
        //create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    } else{
        throw new Error ("Pengguna Sudah Ada")
    };
});


//Login Pengguna
const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password,);
        //cek pengguna telah ada atau belum API Postman
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(
            findUser.id,
            {
                refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken,{
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        }); 
    res.json({
        _id: findUser?._id,
        name: findUser?.name,
        email: findUser?.email,
        mobile: findUser?.mobile,
        ip: findUser?.ip,
        password: findUser?.password,
        token: generateToken(findUser?._id),

    });
    }else {
        throw new Error("Kredensial Tidak Ditemukan");
    }
    });

    // Admin Login
    const loginAdmin = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        console.log(email, password,);
            //cek pengguna telah ada atau belum API Postman
        const findAdmin= await User.findOne({ email });
        if (findAdmin.role !== 'admin') throw new Error("Maaf User Tidak Terdaftar Sebagai Admin")
        if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
            const refreshToken = await generateRefreshToken(findAdmin?._id);
            const updateuser = await User.findByIdAndUpdate(
                findAdmin.id,
                {
                    refreshToken: refreshToken,
                },
                { new: true }
            );
            res.cookie("refreshToken", refreshToken,{
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,
            }); 
        res.json({
            _id: findAdmin?._id,
            name: findAdmin?.name,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id),
    
        });
        }else {
            throw new Error("Kredensial Tidak Ditemukan");
        }
});

//handle Refresh Token

const handleRefreshToken = asyncHandler (async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("Tidak Ada Refresh Token Di Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("Tidak Ada Pembaruan Token Yang Di Tampilkan di DB Atau Token Tidak Sama");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error ("Ada Masalah Ketika Memperbarui Token")
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

//Logout Fungsionality
const logout = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if(!cookie?.refreshToken) throw new Error("Tidak Ada Pembaruan Token Di Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); //forbidden
    }
    await User.findOneAndUpdate({ refreshToken}, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    res.sendStatus(204);//forbidden
});


//ubah Pengguna API Postman
const updatedUser = asyncHandler(async (req, res) => {
    const { id } = req.user;
    validateMongoDbId(id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name: req?.body?.name,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    } catch (error){
        throw new Error(error);
    }
    });

    // Simpan Alamat Pengguna
    const saveAddress = asyncHandler(async (req, res, next) =>{
        const { _id } = req.user;
        validateMongoDbId(_id);
        try {
            const updatedUser = await User.findByIdAndUpdate(
                _id,
                {
                    address: req?.body?.address,
                },
                {
                    new: true,
                }
            );
            res.json(updatedUser);
        } catch (error){
            throw new Error(error);
        }
    });



    //Dapatkan semua Pengguna API Postman

    const getallUser = asyncHandler(async (req, res) => {
        try {
            const getUsers = await User.find();
            res.json(getUsers);    
        } catch (error){
            throw new Error(error);
        }
    });

    

    //dapatkan 1 pengguna API Postman

    const getaUser = asyncHandler(async (req, res) => {
        console.log( req.params );
        const { id } = req.params;
        validateMongoDbId(id);
        try{
            const getaUser = await User.findById(id);
            res.json({
                getaUser,
            }); 
        }catch (error) {
            throw new Error(error);
        }
    });

    //Hapus 1 pengguna API Postman

    const deleteaUser = asyncHandler(async (req, res) => {
        console.log( req.params );
        const { id } = req.params;
        try{
            const deleteaUser = await User.findByIdAndDelete(id);
            res.json({
                deleteaUser,
            }); 
        }catch (error) {
            throw new Error(error);
        }
    });


        //Blokir Pengguna Api Postman
    const blockUser = asyncHandler(async (req, res) => {
        const { id } = req.params;
        validateMongoDbId(id);
        try {
            const block = await User.findByIdAndUpdate(
                id,
                {
                    isBlocked: true,
                },
                {
                    new: true,
                }
            );
            res.json({
                message: "Pengguna Di Blokir",
            })
        } catch (error) {
            throw new Error(error);
        }
    });

    // aktifkan pengguna Api Postman
    const unblockUser = asyncHandler (async (req, res) => {
        const { id } = req.params;
        validateMongoDbId(id);

        try {
            const unblock = await User.findByIdAndUpdate(
                id,
                {
                    isBlocked: false,
                },
                {
                    new: true,
                }
            );
            res.json({
                message: "Pengguna Aktif",
            })
        } catch (error) {
            throw new Error(error);
        }
    });
    
    //Update Password
    
    const updatePassword = asyncHandler (async (req, res) => {
        const {_id} = req.user;
        const { password } = req.body.password;
        validateMongoDbId(_id);
        const user = await User.findById(_id);
        if (password) {
            user.password = password;
            const updatedPassword = await user.save();
            res.json(updatedPassword);
        } else {
            res.json(user);
        }
    })


  //Lupa Password API Kirim Link Ke Email

        const forgotPasswordToken = asyncHandler(async (req, res) => {
            const { email } = req.body;
            const user = await User.findOne({ email });
            if (!user) throw new Error("Pengguna Tidak Di Temukan Dengan Email Ini");
            try {
            const token = await user.createPasswordResetToken();
            //   await user.save();
            const resetURL = `Hallo, Silakan ikuti tautan ini untuk mengatur ulang Kata Sandi Anda. Tautan ini berlaku hingga 10 menit dari sekarang.<a href='http://localhost:3579/api/user/reset-password/${token}'>Klik Disini</>`;
            const data = {
                to: email,
                text: "Hallo Pelanggan Setia SinarTech",
                subject: "Link Lupa Password",
                htm: resetURL,
            };
            sendEmail(data);
            res.json(token);
            } catch (error) {
            throw new Error(error);
            }
        });


            // reset password API Dengan Token Yang dikirim Ke email

        const resetPassword = asyncHandler(async (req, res) => {
            const { password, token } = req.body;
            // const { token } = req.params;
            // const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
            const user = await User.findOne({
            passwordResetToken: token,
            //   passwordResetExpires: { $gt: Date.now() },
            });
            if (!user) throw new Error(" Token Sudah Kadaluarsa, Silahkan Coba Lagi Nanti");
            user.password = password;
            user.passwordResetToken = undefined;
            user.passwordResetExpires = undefined;
            await user.save();
            res.json(user);
        });
    
        // dapatkan whistlist pengguna 
        const getWishlist = asyncHandler(async (req, res) => {
            const { _id } = req.user;
            try {
                const findUser = await User.findById(_id).populate("wishlist")
                res.json(findUser)
            } catch (error) {
                throw new Error(error);
            }
        });

        // tambah keranjang Pengguna
        
            const userCart = asyncHandler(async (req, res) => {
                const { cart } = req.body;
                const { _id } = req.user;
                validateMongoDbId(_id);
                try {
                let products = [];
                const user = await User.findById(_id);
                // check if user already have product in cart
                const alreadyExistCart = await Cart.findOne({ orderby: user._id });
                if (alreadyExistCart) {
                    alreadyExistCart.remove();
                }
                for (let i = 0; i < cart.length; i++) {
                    let object = {};
                    object.product = cart[i]._id;
                    object.count = cart[i].count;
                    object.color = cart[i].color;
                    let getPrice = await Product.findById(cart[i]._id).select("price").exec();
                    object.price = getPrice.price;
                    products.push(object);
                }
                let cartTotal = 0;
                for (let i = 0; i < products.length; i++) {
                    cartTotal = cartTotal + products[i].price * products[i].count;
                }
                let newCart = await new Cart({
                    products,
                    cartTotal,
                    orderby: user?._id,
                }).save();
                res.json(newCart);
                } catch (error) {
                throw new Error(error);
                }
            });

            // Keranjang Pengguna
            const getUserCart = asyncHandler(async (req, res) => {
                const { _id } = req.user;
                validateMongoDbId(_id);
                try{
                    const cart = await Cart.findOne({ orderby: _id }).populate(
                        "products.product"
                    );
                    res.json(cart)
                }catch (error) {
                    throw new Error(error);
                }
            })

            //keranjang Kosong

            const emptyCart = asyncHandler(async (req, res) => {
                const { _id } = req.user;
                validateMongoDbId(_id);
                try{
                    const user = await User.findOne({ _id });
                    const cart = await Cart.findOneAndRemove({ orderby: user._id });
                    res.json(cart)
                } catch (error) {
                    throw new Error(error);
                }
            })

            // dapatkan dan ambil kupon

    const applyCoupon = asyncHandler(async (req, res) => {
    const { coupon } = req.body;
    const { _id } = req.user;
    validateMongoDbId(_id);
    const validCoupon = await Coupon.findOne({ name: coupon });
    if (validCoupon === null) {
        throw new Error("Invalid Coupon");
    }
    const user = await User.findOne({ _id });
    let { cartTotal } = await Cart.findOne({
        orderby: user._id,
    }).populate("products.product");
    let totalAfterDiscount = (
        cartTotal -
        (cartTotal * validCoupon.discount) / 100
    ).toFixed(2);
    await Cart.findOneAndUpdate(
        { orderby: user._id },
        { totalAfterDiscount },
        { new: true }
    );
    res.json(totalAfterDiscount);
    });

    // Buat Order Pengguna
        const createOrder = asyncHandler(async (req, res) => {
            const { COD, couponApplied } = req.body;
            const { _id } = req.user;
            validateMongoDbId(_id);
            try {
            if (!COD) throw new Error("Create cash order failed");
            const user = await User.findById(_id);
            let userCart = await Cart.findOne({ orderby: user._id });
            let finalAmout = 0;
            if (couponApplied && userCart.totalAfterDiscount) {
                finalAmout = userCart.totalAfterDiscount;
            } else {
                finalAmout = userCart.cartTotal;
            }
        
            let newOrder = await new Order({
                products: userCart.products,
                paymentIntent: {
                id: uniqid(),
                method: "COD",
                amount: finalAmout,
                status: "Cash on Delivery",
                created: Date.now(),
                currency: "usd",
                },
                orderby: user._id,
                orderStatus: "Cash on Delivery",
            }).save();
            let update = userCart.products.map((item) => {
                return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count } },
                },
                };
            });
            const updated = await Product.bulkWrite(update, {});
            res.json({ message: "success" });
            } catch (error) {
            throw new Error(error);
            }
        });

        // dapatkan orderan semua Pengguna
            const getOrders = asyncHandler(async (req, res) => {
                const { _id } = req.user;
                validateMongoDbId(_id);
                try {
                const userorders = await Order.findOne({ orderby: _id })
                    .populate("products.product")
                    .populate("orderby")
                    .exec();
                res.json(userorders);
                } catch (error) {
                throw new Error(error);
                }
            });
            
            const getAllOrders = asyncHandler(async (req, res) => {
                try {
                const alluserorders = await Order.find()
                    .populate("products.product")
                    .populate("orderby")
                    .exec();
                res.json(alluserorders);
                } catch (error) {
                throw new Error(error);
                }
            });
            const getOrderByUserId = asyncHandler(async (req, res) => {
                const { id } = req.params;
                validateMongoDbId(id);
                try {
                const userorders = await Order.findOne({ orderby: id })
                    .populate("products.product")
                    .populate("orderby")
                    .exec();
                res.json(userorders);
                } catch (error) {
                throw new Error(error);
                }
            });
            const updateOrderStatus = asyncHandler(async (req, res) => {
                const { status } = req.body;
                const { id } = req.params;
                validateMongoDbId(id);
                try {
                const updateOrderStatus = await Order.findByIdAndUpdate(
                    id,
                    {
                    orderStatus: status,
                    paymentIntent: {
                        status: status,
                    },
                    },
                    { new: true }
                );
                res.json(updateOrderStatus);
                } catch (error) {
                throw new Error(error);
                }
            });    

module.exports = { 
    createUser, 
    loginUserCtrl, 
    getallUser, 
    getaUser,
    deleteaUser,
    updatedUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    emptyCart,
    applyCoupon,
    createOrder,
    getOrders,
    getAllOrders,
    getOrderByUserId,
    updateOrderStatus
};