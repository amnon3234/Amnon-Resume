
// import packages
const bcrypt = require('bcrypt');
const UserModel = require('./../models/user.model');

/**
 * The function translate a plain text passwrod to
 * cyper text one using bcrypt hashing algorithem.
 * 
 * @param {*} password user's password
 * @returns encrypted password
 */
const encryptPassword = password => {
    return new Promise((resolve, rejected) => {
        bcrypt.hash(password, process.env.SALT_ROUNDS, (err, hash) => 
            err ? reject(err) : resolve(hash));
    });
};

/**
 * The function authenticate a user credentials
 * with bcrypt compare.
 * 
 * @param {*} email email attempt
 * @param {*} password password attempt
 */
const verifyPassword = async (email, password) => {
    const currentUser = await UserModel.findOne({email});
    return !currentUser ? false :
        bcrypt.compare(password, currentUser.password);
};

// export functions
module.exports = {
    encryptPassword,
    verifyPassword
};