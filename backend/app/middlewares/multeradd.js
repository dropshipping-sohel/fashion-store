const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');



cloudinary.config({
    cloud_name: 'dusy5ud4o',
    api_key: '789632597656622',
    api_secret: 'ecGztxA8a2NBTwqCP5fuZVpVQXk'
});


// Set up storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'Fashion-store',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    },
});


module.exports = store = multer({ storage: storage })