import mongoose from "mongoose";

const CategoriesShema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    categoriesParent:{
        type:Array,
    },
    status:{
        type:Boolean,
        default:true
    }
    
},{timestamps:true})

export default mongoose.model('Categories',CategoriesShema)