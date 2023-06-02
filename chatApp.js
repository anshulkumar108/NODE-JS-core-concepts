//const http = require('http');
const bodyParser = require('body-parser');

// const routes=require('./route.js');
// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(4000);
const express=require('express');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><input type="text" name="productSize"><button type="submit">add product</button></form>')
})

//this will run for both post and get requests
// app.use('/product',(req,res,next)=>{
// console.log(req.body); //by default this body request does not parse incoming body request to do this we need to add parser
// res.redirect('/');
// })

//this will run for only get request
app.post('/product',(req,res,next)=>{
    console.log(req.body); //by default this body request does not parse incoming body request to do this we need to add parser
    res.redirect('/');
    })

app.use('/',(req,res,next)=>{
     res.send('<h1>hello from express js</h1>');
 })
 
app.listen(2000)