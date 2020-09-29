
// import packages 
const JWT = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const jwtDecoder = require('jwt-decode');

/**
 * Assign jason web token to a given user
 * for one hour
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
            role: user.userRole,
            iss: 'api.amnonResume',
            aud: 'client.amnonResume'
        }, // payload
        process.env.JWT_SECRET, // secret
        {algorithm: 'HS256', expiresIn: '1h'} // HS256 -> sign with a secret
    );
};

/**
 * Function decode a jason web token to it's 
 * payload.
 * 
 * @param {*} jwt a json web token
 * @returns token payload
 */
const decodeJWT = jwt => jwtDecoder(jwt);

// 
/**
 * Middleware function.
 * Authenticate a given JWT.
 */
const JWTAuthentication = expressJWT({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    issuer: 'api.amnonResume',
    audience: 'client.amnonResume',
    getToken: req => req.cookies.jwt
});

// export functions
module.exports = {
    createJWT,
    decodeJWT,
    JWTAuthentication
};