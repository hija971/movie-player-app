export const errorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    res.status(statusCode).send({
        message: err.message,
        statusCode,
        stack: err.stack
    });
};