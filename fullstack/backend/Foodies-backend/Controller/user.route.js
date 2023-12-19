const {Router}=require("express")
const bcrypt=require('bcrypt')
const { userModel } = require("../Model/user.model")
const userRouter=Router()
function validator(password){
    // if(``)
}
userRouter.post('/signup',async(req,res)=>{
try{
    const {username,email,password}=req.body
 const checkUser=await userModel.findOne({email})
 if(checkUser){
    return res.status(402).json({msg:'already particular email exists'})
 }
 if(!validator(password)){
 return res.status(201).send({msg:`password must contain min 1 special-charater,min 1 number,min 1 lowercase and uppercase`})
 }
 const hashedPassword=bcrypt.hash(password,5)
 const user= await userModel.create({username,email,password:hashedPassword})
 console.log(user)
 return res.status(201).json({user})
}catch(err){
 res.status(400).send({err:err.message})
}
})