const {Router}=require("express")
const productRouter=Router()
const {productModel}=require('../Model/product.model')
productRouter.post('/add',async(req,res)=>{
    try{
        console.log(req.body,'is')
  const products=await productModel.insertMany(req.body)
  console.log(products)
  return res.status(201).json({products})
    }catch(err){
res.status(400).send({err:err.message})
    }
})
productRouter.get('/',async(req,res)=>{
try{
    const{category,order}=req.query
    console.log(category,order,'is category and order')
    const query={},priceObj={}
     if(category){
        // const newCategory=RegExp(category,"i")
        query.category={$in:category}
    }
    console.log(query,'is query')
    if(order){
        order==='asc'?priceObj.price=1:priceObj.price=-1
    }
    // console.log(priceObj,'is price object')
 const products= await productModel.find(query).sort(priceObj)
//  console.log(products,'is products')
 return res.status(201).json({products})
}catch(err){
res.status(401).send({err})
}
})

module.exports={productRouter}