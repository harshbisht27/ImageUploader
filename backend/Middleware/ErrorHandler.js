// errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging purposes

    // Customize the error response based on the error type or status code
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    console.log('-- Error Handler ---', err);
    res.status(status).json({
        success: false,
        error: {
            message: message,
            // Optionally, include more details if in a development environment
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
};

module.exports = errorHandler;