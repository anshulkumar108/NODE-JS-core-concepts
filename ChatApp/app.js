const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

//const LoginRouter = require(path.join(__dirname, 'login.js'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login',(req,res)=>{
    console.log(1);
    res.send(`
    <form action="/messages" method="GET"  onsubmit="localStorage.setItem('username', document.getElementById('username').value)" >
    <input type="text" name="username" placeholder="enter username" id="username">
    <button type="submit">Login</button>
    </form>
    `)
    
})

app.get('/messages', (req, res, next) => {
    console.log(2);
    fs.readFile('usernames.txt', (err, data) => {
        if (err) {
            data = "No data exists";
        }
        res.send(`
   </pre> ${data}</pre>
   <form action="/messages"  onsubmit="document.getElementById('username').value=localStorage.getItem('username' )" method="POST" >
    <input type="text" id="message" name="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">send</button>
</form>
    `);
    });
})

app.post('/messages', (req,res,next) => {
    console.log(3);
    console.log(`${req.body.username}: ${req.body.message}`)
    fs.writeFileSync('usernames.txt',`${req.body.username}: ${req.body.message}`,{flags:'a'},(err)=>{
        err?console.log(err):res.redirect('/messages')
    });
    res.redirect('/messages');

})

app.use((req, res, next) => {
    console.log(4);
    res.status(404).send('<h1>Page not found</h1>');
})

app.listen(2000);