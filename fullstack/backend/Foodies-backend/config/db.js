const mongoose=require('mongoose')
require('dotenv').config()
// const mongodburl=p
const connection=mongoose.connect(`${process.env.MONGODB_URL}`)
module.exports={connection}