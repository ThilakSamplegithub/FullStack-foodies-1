const express=require('express')
const cors=require('cors')
const {connection}=require("./config/db.js")
const { productRouter } = require('./Controller/product.route.js')
const app=express()
require('dotenv').config()
app.use(cors())
app.use(express.json())
// console.log(`${process.env.MONGODB_URL}`)
app.get('/',(req,res)=>{
    res.send('welcome')
})

app.use('/products',productRouter)
app.listen(process.env.PORT,async()=>{
    await connection
    console.log(`port ${process.env.PORT} is running`)
})
