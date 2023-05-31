import mongoose from "mongoose";

const VersionProductShema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    },
    productId:{
        type: mongoose.ObjectId,
        ref: "Products",
    }
    
},{timestamps:true})

export default mongoose.model('VersionProduct',VersionProductShema)