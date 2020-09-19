// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from './../schemaTypes';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        name:SchemaTypes.nameRequierd,
        title:SchemaTypes.titleRequierd,
        content:SchemaTypes.contentRequired
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('Note', modelSchema)

// export model
export default Model;