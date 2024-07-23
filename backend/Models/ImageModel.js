const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageGallarySchema = new Schema({
    imageURL: {
        type: String
    },
    originalName: {
        type: String
    },
    mimeType: {
        type: String
    },
    size: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
});

const ImageGallaryModel = mongoose.model('images', ImageGallarySchema);
module.exports = ImageGallaryModel;