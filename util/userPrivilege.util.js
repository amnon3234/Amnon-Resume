
//import packages
const { decodeJWT } = require('./jwt.util');

/**
 * Middleware function.
 * attaching the user to the req
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const attachUser = (req, res, next) => {
    // get data
    const jwt = req.cookies.jwt;
    if(!jwt) return res.status(401)
        .json({ message:'missing JWT'});
    
    // decode jwt
    const payload = decodeJWT(jwt);
    if(!payload) return res.status(401)
        .json({ message:'Something went wrong try again later'});
    
    // attaching the user
    req.user = payload;
    next();
}


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
    console.log(req.user);
    if(!req.user || req.user.role !== 'ADMIN')
        res.status(401).json({
            message:'You are not authorized to complete this request'
        }) 
    next();
};

// export functions
module.exports = {
    onlyAdmin,
    attachUser
};