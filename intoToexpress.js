const express=require('express');
const bodyParser =require('body-parser');

const adminRoute=require('./routes/admin.js')
const shopRoute=require('./routes/shop.js')

const app=express();
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=>{
   res.status(404).send('<h1>Page not found</h1>');
})

app.listen(4000)