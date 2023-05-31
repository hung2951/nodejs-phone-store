import Categories from '../models/categories'

export const create = async(req,res)=>{
    try {
        const existCategory = await Categories.findOne({name:req.body.name}).exec()
        if(existCategory) return res.status(400).json({message:"Danh mục đã tồn tại"})
        const category = await Categories(req.body).save();
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
    }
}

export const update = async(req,res)=>{
    try {
        const category = await Categories.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
    }
}


export const remove = async(req,res)=>{
    try {
        const category = await Categories.findOneAndDelete({_id:req.params.id}).exec()
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
    }
}

export const getAll = async(req,res)=>{
    try {
        const category = await Categories.find().exec()
        res.status(200).json(category)
    } catch (error) {
        console.log(error)
    }
}