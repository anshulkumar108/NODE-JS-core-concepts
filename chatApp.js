const http = require('http');

const  express= require('express')

const app=express()//The express() function is a top-level function exported by the express module.

app.use((req,res,next)=>{
    console.log("in the middleware")
    next();
})

app.use((req,res,next)=>{
   // console.log("in the another middleware")
   res.send('<h1> hello to node js </h1>')
})

// const server = http.createServer(app);

// server.listen(4000);
app.listen(4000)