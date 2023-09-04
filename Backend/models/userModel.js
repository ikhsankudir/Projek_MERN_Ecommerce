const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require ("bcrypt");
const crypto = require ("crypto");



const moment = require('moment-timezone');


// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default: "user",
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    cart: {
        type: Array,
        default: [],
    },
    address: {
        type: String,
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product"}],
    refreshToken: {
        type: String,
    },
    passwordChanged: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    
},{
    timestamps: true,
});

userSchema.methods.toJSON = function() {
    const user = this.toObject();
    user.createdAt = moment(user.createdAt).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    user.updatedAt = moment(user.updatedAt).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    return user;
};



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });

  userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  userSchema.methods.createPasswordResetToken = async function () {
    const resettoken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto
      .createHash("sha256")
      .update(resettoken)
      .digest("hex");
    // this.passwordResetExpires = Date.now() + 30 * 60 * 1000; // 10 minutes
    return resettoken;
  };
  
  

//Export the model
module.exports = mongoose.model('User', userSchema);