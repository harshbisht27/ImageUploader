const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const ImageRoutes = require('./routes/ImageRoutes');
const errorHandler = require("./Middleware/ErrorHandler");
const PORT = process.env.PORT || 8080;

require('./Models/db');
app.use(cors());
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/images', ImageRoutes);
// Use the error-handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})