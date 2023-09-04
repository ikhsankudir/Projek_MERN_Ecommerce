const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const { notFound, errorHandler } = require("./middlewares/errorHandler");


const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute")
const blogRouter = require("./routes/blogroute")
const categoryRouter = require("./routes/produkcategoryRoute")
const blogcatRouter = require("./routes/blogcatRoute")
const brandRouter = require("./routes/brandroute")
const colorRouter = require("./routes/colorRoute")
const enqRouter = require("./routes/enqRoute")
const couponRouter = require("./routes/couponroute")







const cookieParser = require("cookie-parser");
const morgan = require("morgan")
const moment = require('moment-timezone');
const chalk = require('chalk'); // chalk (versi 3.0.0 atau sebelumnya) yang masih menggunakan CommonJS
dbConnect ();


//metode morgan untuk menampilkan outpun di server 
// waktu dan tanggal kemudian warna status server
// warna metode api

// Menggunakan Morgan dengan format waktu dan tanggal Indonesia yang diperbarui
app.use(morgan((tokens, req, res) => {
    const currentTime = moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
    const status = tokens.status(req, res);

    // Memberikan warna pada status sesuai kode HTTP
    let coloredStatus;
    if (status >= 200 && status < 300) {
        coloredStatus = chalk.green(status);
    } else if (status >= 300 && status < 400) {
        coloredStatus = chalk.yellow(status);
    } else if (status >= 400 && status < 500) {
        coloredStatus = chalk.magenta(status);
    } else if (status >= 500) {
        coloredStatus = chalk.red(status);
    } else {
        coloredStatus = status;
    }

    // Mendefinisikan method HTTP dengan warna
    const method = tokens.method(req, res);
    let coloredMethod;
    switch (method) {
        case 'GET':
            coloredMethod = chalk.green(method);
            break;
        case 'POST':
            coloredMethod = chalk.yellow(method);
            break;
        case 'PUT':
            coloredMethod = chalk.blue(method);
            break;
        case 'PATCH':
            coloredMethod = chalk.purple(method);
            break;
        case 'DELETE':
            coloredMethod = chalk.red(method);
            break;    
        default:
            coloredMethod = method;
            break;
    }

    // Format log dengan warna
    const logLine = `${chalk.bold(coloredStatus)} ${chalk.italic.underline(coloredMethod)} ${currentTime} ${tokens.url(req, res)} ${tokens['response-time'](req, res)}ms`;

    return logLine;
}));





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/blogcategory", blogcatRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);








app.use(notFound);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log("\x1b[36m||===========================||\x1b[0m");
    console.log("\x1b[6m||   Welcome to Server Side  || \x1b[0m");
    console.log("\x1b[36m||===========================||\x1b[0m");

    console.log("\x1b[36m==============================\x1b[0m");
    console.log("\x1b[36m|                            |\x1b[0m");
    console.log("\x1b[44m|   Koneksi Server BERHASIL  |\x1b[0m");
    console.log("\x1b[36m|                            |\x1b[0m");
    console.log("\x1b[36m==============================\x1b[0m");
    console.log("\x1b[44m%s\x1b[0m", `Server Sedang Berjalan Di PORT ${PORT}`); // Tulisan server berjalan (hijau)
});