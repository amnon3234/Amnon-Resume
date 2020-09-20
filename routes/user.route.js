
// import packages
const express = require('express');
const { encryptPassword, verifyPassword } = require('../util/password.util');
const { onlyAdmin } = require('./../util/userPrivilege.util');
const { JWTAuthentication, createJWT, decodeJWT } = require('./../util/jwt.util');
let Model = require('./../models/user.model');

// router
const router = express.Router();

// authenticate a user
router
    .post('/signin', async (req, res) => { // get one
       try{
            
            // get data
            const {email, password} = req.body;

            // verify user's data
            const isValid = await verifyPassword(email,password);
            if(!isValid)
                return res.status(403).json({
                    message: 'Wrong email or password.'
                });
            
            // create user's token
            const user = await Model.findOne({ email }).lean();
            const jwt = createJWT(user);
            const expiredAt = decodeJWT(jwt).exp;
            const { fullName, role } = user;
            const userInforamtion = {fullName:fullName, email:email, role:role};
            
            // return user's data
            return res.json({
                message: 'loged-in succesfully',
                token:jwt,
                information:userInforamtion,
                expiredAt:expiredAt  
            });

       }catch (err) {
            return res.status(400).json({
                message:'Cant sign-in in this moment please try again in a few minutes',
                err:err
            });
       }
    })

// signup a user
router
    .post('/signup',async (req, res) => { 
        try{

            // get data
            const {email, fullName, password} = req.body;
            const fixedEmail = email.toLowerCase();

            // encrypt password
            const encryptedPassword = await encryptPassword(password);        

            // check if the email allready existed for another user 
            const isExisted = await Model.findOne({email: fixedEmail}).lean();
            if(isExisted) 
                return res.status(400).json({
                message: 'Email allready exists' 
            });

            // new user data
            const newUser = new Model({
                fullName: fullName,
                email: fixedEmail,
                password: encryptedPassword,
                userRole: 'USER'
            });

            // save user to the db
            const savedUser = await newUser.save();
            if(!savedUser)
                throw new Error();
            
            // create user's token
            const jwt = createJWT(savedUser);
            const expiredAt = decodeJWT(jwt).exp;
            
            // return user's data
            const userInforamtion = {fullName:fullName, email:email, role:'USER'};
            return res.json({
                message: 'User created succesfully',
                token:jwt,
                information:userInforamtion,
                expiredAt:expiredAt
            });

        } catch (err) {
            return res.status(400).json({
                message:'There is a problem with creating your account please try again in a few minutes',
                err:err
            });
        } 
    });

// delete spesific user
router
    .delete('/:id', JWTAuthentication, onlyAdmin, (req, res) => { // delete one 
        Model.findByIdAndDelete(req.params.id)
            .then(() => res.json('User deleted succesfuly'))
            .catch( err => res.status(400).json(err));
    });

// export router
module.exports = router;