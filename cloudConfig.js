const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({ // writing info store in .env file ,which vl joint  backend  with cloudinary acnt
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// npm = multer-storage-cloudinary = from usage part

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',                      // cloudinary acnt pe wanderlust nam ka folder chaeye
      allowedFormats: ["png", "jpg", "jpeg"]         // jisme is nam ke file save kar sake
    },
  });

  module.exports = {
    cloudinary,
    storage ,
  }