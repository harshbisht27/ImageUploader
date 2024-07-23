const {
    getAllImages, uploadImages,
    getImageDetailById
} = require('../Controllers/ImageController');

const { uploadMultiple } = require("../Middleware/ImageUploader");

const routes = require('express').Router();

routes.get('/', getAllImages);

routes.get('/:id', getImageDetailById)

routes.post('/upload-images', uploadMultiple, uploadImages);

module.exports = routes;