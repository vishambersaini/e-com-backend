require('dotenv').config()
const express=require('express')

const app=express()
const Port=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(Port,()=>{console.log("App listing on Port:",Port);})
console.log(process.env)