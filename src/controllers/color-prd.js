import Color from '../models/color-prd'

export const create = async(req,res)=>{
    try {
        const existcolor = await Color.findOne({name:req.body.name}).exec()
        if(existcolor) return res.status(400).json({message:"Màu đã tồn tại"})
        const color = await Color(req.body).save();
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
    }
}

export const update = async(req,res)=>{
    try {
        const color = await Color.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
    }
}


export const remove = async(req,res)=>{
    try {
        const color = await Color.findOneAndDelete({_id:req.params.id}).exec()
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
    }
}

export const getAll = async(req,res)=>{
    try {
        const color = await Color.find().exec()
        res.status(200).json(color)
    } catch (error) {
        console.log(error)
    }
}