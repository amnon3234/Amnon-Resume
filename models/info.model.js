
// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from './../schemaTypes';
import 'mongoose-type-email';
import 'mongoose-type-url';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        fullName:SchemaTypes.nameRequierd,
        phone:SchemaTypes.phoneRequierd,
        fullAddress:SchemaTypes.addressRequierd,
        linkedinURL:Mongoose.SchemaTypes.Url,
        facebookURL:Mongoose.SchemaTypes.Url,
        instagramURL:Mongoose.SchemaTypes.Url,
        gitHubURL:Mongoose.SchemaTypes.Url,
        email: Mongoose.SchemaTypes.Email,
        jobDecription:SchemaTypes.jobDecriptionRequierd,
        about:SchemaTypes.aboutRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('Info', modelSchema)

// export model
export default Model;