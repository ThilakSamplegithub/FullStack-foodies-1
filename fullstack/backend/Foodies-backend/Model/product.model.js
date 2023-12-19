const mongoose=require('mongoose')
const collection=mongoose.Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,default:1},
    category:{type:String,required:true}
},{versionKey:false})
 const productModel= mongoose.model('FOODPRODUCT',collection)
 module.exports={productModel}