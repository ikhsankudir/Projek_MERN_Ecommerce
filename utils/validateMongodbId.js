const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new Error (" ID Akun Pengguna Tidak Valid Atau Tidak Di Temukan");
};
module.exports = validateMongoDbId;