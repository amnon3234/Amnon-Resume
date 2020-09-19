// package imports
import Mongoose from 'mongoose';
import * as SchemaTypes from './../schemaTypes';
import 'mongoose-type-email';

// model Schema
const modelSchema = Mongoose.Schema(
    {
        fullName:SchemaTypes.nameRequierd,
        email: Mongoose.SchemaTypes.Email,
        password: SchemaTypes.passwordRequierd,
        userRole: SchemaTypes.userRole
    },
    {
        timestamps:true // adding object creation time
    }
);

// create model 
const Model = Mongoose.Model('User', modelSchema)

// export model
export default Model;