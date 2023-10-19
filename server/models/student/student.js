import {Schema,model} from 'mongoose';

const studentSchema = new Schema({
    firstName:{
        type:String,required:true,lowercase:true
    },
    lastName:{
        type:String,required:true,lowercase:true
    },
    userName:{
        type:String,required:true,unique:true
    },
    email:{
        type:String,required:true
    },
    image:{
        type:String
    }
},{timestamps: true});

export default model("Student",studentSchema)