const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.originalname.split('.')[0] + ""
    }
})

const cloudinaryFileUploader = multer({ storage});

// Middleware to handle multiple file uploads (e.g., max 10 files)
const uploadMultiple = cloudinaryFileUploader.array('images', 10);
module.exports = {
    uploadMultiple
}
;