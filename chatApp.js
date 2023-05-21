const http = require('http');
  

const server=http.createServer((req,res)=>{

    const url=req.url;
    const method=req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" id="input"><button type="submit">SEND</button></form></body>');
        res.write('</html>')
       return res.end(); // this return is used to return from this anonymous function and prevent running code that is present outside loop
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head> <title>Node Js project</title></head>')
    res.write('<h2>welcome</h2>')
    res.write('</html>')
    res.end()

})

server.listen(4000);