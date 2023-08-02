const cloudinary = require("cloudinary");

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const cloudinaryUploadImg = async (fileTopUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileTopUploads, (results) =>{
            resolve(
                {
                    url: results.secure_url,
                },
                {
                    resource_type: "auto",
                }
            );
        });
    });
};

module.exports = cloudinaryUploadImg;