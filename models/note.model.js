// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');

// model Schema
const modelSchema = mongoose.Schema(
    {
        name:schemaTypes.nameRequierd,
        title:schemaTypes.titleRequierd,
        content:schemaTypes.contentRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('Note', modelSchema)

// export model
module.exports = Model;