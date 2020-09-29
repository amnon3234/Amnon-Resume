// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');
require('mongoose-type-email');

// model Schema
const modelSchema = mongoose.Schema(
    {
        fullName:schemaTypes.nameRequired,
        email: mongoose.SchemaTypes.Email,
        password: schemaTypes.passwordRequired,
        userRole: schemaTypes.userRole
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('User', modelSchema)

// export model
module.exports = Model;