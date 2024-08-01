const {uploadMultiple} = require('../Middleware/ImageUploader')
const ImageGalleryModel = require('../Models/ImageModel')

const routes = require('express').Router();

routes.get('/',async (req,res)=>{
        try {
           const data = await ImageGalleryModel.find();
            res.status(200)
                .json({
                    message: "all images",
                    success: true,
                    data:data,
                });
        } catch (err) {
            console.log('Error ', err);
            res.status(500).json({
                message: 'Image: Internal server error',
                success: false,
                error: err
            })
        }
});

routes.get('/:id',async (req,res)=>{
    try {
        const {id}=req.params;
       const data = await ImageGalleryModel.findOne({_id:id});
        res.status(200)
            .json({
                message: "image details",
                success: true,
                data:data,
            });
    } catch (err) {
        console.log('Error ', err);
        res.status(500).json({
            message: 'Image: Internal server error',
            success: false,
            error: err
        })
    }
});

routes.post('/upload-images',uploadMultiple,async (req,res)=>{
console.log('--uploaded public urls---',req.files);
try {
    const images = req.files.map((file) => (
        {
            mimeType: file.mimetype,
            originalName: file.originalname,
            imageURL: file.path,
            size: file.size
        }
    ));
    console.log(images);
    await ImageGalleryModel.insertMany(images);
    res.status(200)
        .json({
            message: "Files uploaded successfully",
            success: true,
            files: req.files,
        });
} catch (err) {
    console.log('Error ', err);
    res.status(500).json({
        message: 'Image: Internal server error',
        success: false,
        error: err
    })
}
})


module.exports = routes;