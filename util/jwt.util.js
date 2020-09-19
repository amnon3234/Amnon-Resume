
// import packages 
const JWT = require('jsonwebtoken');
const expressJWT = require('express-jwt');

/**
 * Assign jason web token to a given user for one hour
 * 
 * @param {*} user 
 * @returns assigned JWT
 */
const createJWT = user => {
    if(!user) throw new Error('user is undefined');
    return JWT.sign(
        {
            sub: user._id,
            email:user.email,
            role: user.role,
            iss: 'api.amnonResume',
            aud: 'client.amnonResume'
        }, // payload
        process.env.JWT_SECRET, // secret
        {algorithm: 'HS256', expiresIn: '1h'} // HS256 -> sign with a secret
    );
};

// 
/**
 * Middleware function.
 * Authenticate a given JWT.
 */
const JWTAuthentication = expressJWT({
    secret: process.env.JWT_SECRET,
    issuer: 'api.amnonResume',
    audience: 'client.amnonResume'
});

// export functions
module.exports = {
    createJWT,
    JWTAuthentication
};