// package imports
const mongoose = require('mongoose');
const schemaTypes = require('./../schemaTypes');

// model Schema
const modelSchema = mongoose.Schema(
    {
        category: schemaTypes.skillCategoryRequired,
        skills: [schemaTypes.skillRequired]
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = mongoose.model('SkillCategorie', modelSchema)

// export model
module.exports = Model;