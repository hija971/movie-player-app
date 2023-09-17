export const logAPI = (req, res, next) => {
    const currentDate = new Date();
    console.log(`API is comming ar ${currentDate}`);
    next();
};