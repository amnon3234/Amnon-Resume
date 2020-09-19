

/**
 * Middleware function.
 * Make sure that the user which making the request
 * have admin privileges
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const onlyAdmin = (req, res, next) => {
    if(!req.user || req.user.userRole !== 'ADMIN')
        res.status(401).json({
            message:'You are not authorized to complete this request'
        }) 
    next();
};

module.exports = {
    onlyAdmin
};