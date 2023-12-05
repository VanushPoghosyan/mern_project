import { Schema, model } from "mongoose";

const countrySchema = new Schema({
    countryName : {
        type:String,required:true
    }
},{timestamps:true});

export default model("Country",countrySchema);

