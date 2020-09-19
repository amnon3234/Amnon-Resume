// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from '../schemaTypes';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        category: SchemaTypes.skillCategoryRequired,
        skills: [SchemaTypes.skillRequired]
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('SkillCategorie', modelSchema)

// export model
export default Model;