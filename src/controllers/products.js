import slugify from 'slugify'
import Product from '../models/products'

export const create = async(req,res)=>{
    req.body.slug = slugify(req.body.name)
    try {
        const existProduct = await Product.findOne({name:req.body.name}).exec()
        if(existProduct) return res.status(400).json({message:"Tên sản phẩm đã tồn tại"})
        const product = await Product(req.body).save();
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}

export const update = async(req,res)=>{
    try {
        const product = await Product.findOneAndUpdate({_id:req.params.id},req.body,{new:true}).exec()
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}


export const remove = async(req,res)=>{
    try {
        const product = await Product.findOneAndDelete({_id:req.params.id}).exec()
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}

export const getAll = async(req,res)=>{
    try {
        const product = await Product.find().exec()
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
    }
}