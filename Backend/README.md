 pada projek ini saya menggunakan system ubuntu dekstop 22.04, dengan spesifikasi
 - Processor : Intel Core i7-4790
 - Ram       : 16 Gb
 - Ssd       : 50 Gb


install nodeJs dan Postman, untuk konfigurasi backend
cara install nodeJS:
 * install Curl terlebih dahulu
    # apt install -y curl
 * dapatkan node dengan PPA Repository
    # curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
 * install node 
    # apt install -y nodejs
 * Cek versi node yang terpasang, (saya menyarankan untuk menggunakan versi 18 stable, karena projek ini menggunakan versi ini)
    # node --version

karena ini projek MERN (MongoDB, ExpressJS, ReactJS, NodeJS),  artinya projek ini menggunakan semua framework javascript maka selain nodeJs Kita akan install MogoDB Sebagai DATABASE nya caranya:

 * install gnupg
   # sudo apt-get install gnupg curl
 * import key dari web MongoDB
   # curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
 * buat source list ubuntu
   # echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
 * update repository
   # sudo apt-get update
 * install mongoDB
   # sudo apt-get install -y mongodb-org


 * untuk menjalankan MongoDB
   # sudo systemctl start mongod
 * jika eror "Failed to start mongod.service: Unit mongod.service notfound." ketika Menajalankan MongoDB
   # sudo systemctl daemon-reload
 * untuk cek status MongoDB
   # sudo systemctl status mongod
 * untuk stop MongoDB
   # sudo systemctl stop mongod
 * untuk restart MongoDB
   # sudo systemctl restart mongod
 * Perintah untuk memulai MongoDB
   # mongosh


atur struktur folder yang bakal kita gunakan
 * Folder Utama
    - config
    - Controller
    - Middleware
    - Models
    - Routes
    - Utils
    * .env
    * index.js

    package ynag di pakai di sisi backend ini
    
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "chalk": "^3.0.0",
    "cloudinary": "^1.40.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "esm": "^3.2.25",
    "express": "^4.18.2",
    "express-async-handler": "^1.2.0",
    "jsonwebtoken": "^9.0.1",
    "moment-timezone": "^0.5.43",
    "mongoose": "^7.4.1",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.4",
    "nodemon": "^3.0.1",
    "sharp": "^0.32.4",
    "slugify": "^1.6.6",
    "uniqid": "^5.4.0"