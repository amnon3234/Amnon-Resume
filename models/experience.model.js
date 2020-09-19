
// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from './../schemaTypes';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        company:SchemaTypes.companyNameRequired,
        jobDecription:SchemaTypes.jobDecriptionRequierd,
        jobLocation:SchemaTypes.address,
        fromYear:SchemaTypes.dateStringRequired,
        toYear:SchemaTypes.dateString,
        content:SchemaTypes.contentRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('Experience', modelSchema)

// export model
export default Model;