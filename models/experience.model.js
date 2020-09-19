
// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');

// model Schema
const modelSchema = mongoose.Schema(
    {
        company:schemaTypes.companyNameRequired,
        jobDecription:schemaTypes.jobDecriptionRequierd,
        jobLocation:schemaTypes.address,
        fromYear:schemaTypes.dateStringRequired,
        toYear:schemaTypes.dateString,
        content:schemaTypes.contentRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('Experience', modelSchema)

// export model
module.exports = Model;