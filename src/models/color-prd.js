import mongoose from "mongoose";

const ColorProductShema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    },
    versionId:{
        type: mongoose.ObjectId,
        ref: "VersionProduct",
    },
    quantity:{
        type:Number,
        default:0,
    },
    price:{
        type:Number,
        require:true
    }
    
},{timestamps:true})

export default mongoose.model('ColorProduct',ColorProductShema)