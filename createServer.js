const http = require('http');

const server=http.createServer((req,res)=>{
    //console.log("Anshul kumar")
    //console.log(req.url,  req.method , req.headers)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head> <title>Node Js project</title></head>')
    res.write('<h2>Welcome to my Node Js project</h2>')
    res.write('</html>')
    res.end();

})

server.listen(4000);