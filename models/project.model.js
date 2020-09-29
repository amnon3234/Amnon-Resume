// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');
require('mongoose-type-url');

// model Schema
const modelSchema = mongoose.Schema(
    {
        title:schemaTypes.titleRequired,
        description:schemaTypes.descriptionRequired,
        gitHubLink:mongoose.SchemaTypes.Url
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('Project', modelSchema)

// export model
module.exports = Model;