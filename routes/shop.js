const express=require('express');

const shopRouter=express.Router();

shopRouter.get('/product',(req,res,next)=>{
    res.send('<h1>hello from express js</h1>');
})

module.exports=shopRouter;