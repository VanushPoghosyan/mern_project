import {Schema,model} from 'mongoose';

const userSchema = new Schema({
    firstName:{
        type:String,required:true
    },
    lastName:{
        type:String,required:true
    },
    userName:{
        type:String,required:true,unique:true
    },
    email:{
        type:String,required:true
    },
    password:{
        type:String,required:true
    },
    country:{
        type:String,required:true
    },
    gender:{
        type:String,required:true
    }
},{timestamps: true});

export default model("User",userSchema)