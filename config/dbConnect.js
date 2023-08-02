const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("\x1b[8m||===========================||\x1b[0m");  

    console.log("\x1b[36m||===========================||\x1b[0m");
    console.log("\x1b[6m||   Welcome to Database Side || \x1b[0m");
    console.log("\x1b[36m||===========================||\x1b[0m");

        console.log("\x1b[32m==============================\x1b[0m");
        console.log("\x1b[32m|                            |\x1b[0m");
        console.log("\x1b[42m|  Koneksi Database BERHASIL |\x1b[0m"); 
        console.log("\x1b[32m|                            |\x1b[0m");
        console.log("\x1b[32m==============================\x1b[0m");

        console.log("\x1b[8m||===========================||\x1b[0m");

    } catch (error) {
        console.log("\x1b[34m||===================================||\x1b[0m");
        console.log("\x1b[6m|| Mohon Maaf Koneksi Anda Terganggu ||\x1b[0m");
        console.log("\x1b[34m||===================================||\x1b[0m");
    
        console.log("\x1b[36m==============================\x1b[0m");
        console.log("\x1b[36m|                            |\x1b[0m");
        console.log("\x1b[41m|  Koneksi Database GAGAL    |\x1b[0m");
        console.log("\x1b[36m|                            |\x1b[0m");
        console.log("\x1b[36m==============================\x1b[0m");
    }

    
};
module.exports = dbConnect;