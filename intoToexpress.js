const express=require('express');

const app=express();

app.use((req,res,next)=>{
   // res.send('<h1>hello from node js</h1>');
    next();
})

app.use((req,res,next)=>{
   console.log(res.send({ key1:2})) 
})

app.listen(4000)