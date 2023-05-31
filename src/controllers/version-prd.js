import Version from '../models/version-prd'

export const create = async(req,res)=>{
    try {
        const existVersion = await Version.findOne({name:req.body.name}).exec()
        if(existVersion) return res.status(400).json({message:"Phiên bản đã tồn tại"})
        const version = await Version(req.body).save();
        res.status(200).json(version)
    } catch (error) {
        console.log(error)
    }
}

export const update = async(req,res)=>{
    try {
        const version = await Version.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.status(200).json(version)
    } catch (error) {
        console.log(error)
    }
}


export const remove = async(req,res)=>{
    try {
        const version = await Version.findOneAndDelete({_id:req.params.id}).exec()
        res.status(200).json(version)
    } catch (error) {
        console.log(error)
    }
}

export const getAll = async(req,res)=>{
    try {
        const version = await Version.find().exec()
        res.status(200).json(version)
    } catch (error) {
        console.log(error)
    }
}