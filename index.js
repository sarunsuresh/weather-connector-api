const express=require('express')
const apiCall=require('./apiCall')
const app=express()

app.get('/',(req,res)=>{
    res.json({status:"running"})
})

app.get('/weather',async (req,res)=>{
    
    city=req.query.city
    if(!city){
        return res.status(401).json({invalid:"city required"})
    }
    try{
    const data =await apiCall(city)
    res.status(200).json(data)
    }catch(err){
        console.log('error occured',err);
        
    }


})

app.listen(3000,()=>{
    console.log('running');
    
})