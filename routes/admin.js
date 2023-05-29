const express=require('express');

const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><input type="text" name="product"><input type="text" name="productSize"><button type="submit">add product</button></form>')
    
 })

 router.post('/product',(req,res,next)=>{
    console.log(req.body); //by default this body request does not parse incoming body request to do this we need to add parser
    res.redirect('/');
    })

    module.exports = router;