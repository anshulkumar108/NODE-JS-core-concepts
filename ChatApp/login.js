const express=require("express")
const route=express.Router();

route.get('/login',(req,res)=>{
    res.send(`
    <form action="/login" method="post"  onsubmit="localStorage.setItem('username', document.getElementById('username').value)" >
    <input type="text" name="username" placeholder="enter username">
    <button type="submit">Login</button>
    </form>
    `)
    res.redirect('/messages')
})

module.exports=route;