Filtering Produk Rentang Harga permintaan API.
================================
lokasi: controller/productctrl.js Line 60. colomn.1
===================================================
contoh: 
        harga produk di DB 120.000 dan paling tinggi 250.000
        ketika di postman 

        GET 
        localhost:3579/api/product?price[gte]=120001&price[lte]=250000

        ketika harga di buat rentang 120.001 sampai ke 250.000 maka
        hasil postman akan menampilkan rentang harga 
        dari di atas 120 rb sampai 250 rbu karena sudah di atas 120.000



Sortir Produk permintaan API.
================================
lokasi: controller/productctrl.js Line 73. colomn.1
===================================================
contoh: 
        pada saat mendaftarkan produk atau pun mendapatkan list harga produk
        setiap data yang tampil tidak berurutan, ketika send postman dengan

        GET 
        localhost:3579/api/product?sort=-category

        maka setiap hasil JSON akan berurutan dari huruf a-z atau 
        dari angka kecil ke besar ketika send kembali akan menjadi sebaliknya



Fields/pengecualian Produk permintaan API.
==========================================
lokasi: controller/productctrl.js Line 82. colomn.1
===================================================
contoh;
        menentukan bidang-bidang yang akan disertakan atau dikecualikan dalam data respons berdasarkan parameter permintaan.

        GET
        localhost:3579/api/product?fields=-title,-price,-category

        maka hasil JSON dengan nama title,price dan category tidak di tampilkan


Paginasi  permintaan API.
==========================================
lokasi: controller/productctrl.js Line 91. colomn.1
===================================================
contoh;
        untuk membagi data menjadi beberapa halaman untuk meningkatkan kinerja dan mengelola tampilan data yang besar. Dengan paginasi, data ditampilkan secara tersegmentasi dalam bagian-bagian yang dapat diakses melalui halaman-halaman terpisah

        GET
        localhost:3579/api/product?page=1&limit=1

        maka hasil JSON akan menampilkan 1 data jika di ubah limit menjadi 2,3 atau
        seterusnya maka data yang di tampilkan juga sesuai dengan yang di limit
        