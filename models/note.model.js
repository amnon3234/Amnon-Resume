// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');

// model Schema
const modelSchema = mongoose.Schema(
    {
        name:schemaTypes.nameRequired,
        title:schemaTypes.titleRequired,
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