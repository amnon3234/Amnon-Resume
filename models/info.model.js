
// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');
require('mongoose-type-email');
require('mongoose-type-url');

// model Schema
const modelSchema = mongoose.Schema(
    {
        fullName:schemaTypes.nameRequierd,
        phone:schemaTypes.phoneRequierd,
        fullAddress:schemaTypes.addressRequierd,
        linkedinURL:mongoose.SchemaTypes.Url,
        facebookURL:mongoose.SchemaTypes.Url,
        instagramURL:mongoose.SchemaTypes.Url,
        gitHubURL:mongoose.SchemaTypes.Url,
        email: mongoose.SchemaTypes.Email,
        jobDecription:schemaTypes.jobDecriptionRequierd,
        about:schemaTypes.aboutRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('Info', modelSchema)

// export model
module.exports = Model;