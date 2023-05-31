import mongoose from "mongoose";

const ProductShema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    images:{
        type:Array,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    },
    categoryId:{
        type: mongoose.ObjectId,
        ref: "Categories",
    },
    slug:{
        type:String
    }
    
},{timestamps:true})

export default mongoose.model('Products',ProductShema)