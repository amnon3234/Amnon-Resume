// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from './../schemaTypes';
import 'mongoose-type-url';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        title:SchemaTypes.titleRequierd,
        decription:SchemaTypes.decriptionRequired,
        gitHubLink:Mongoose.SchemaTypes.Url
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('Project', modelSchema)

// export model
export default Model;