const http = require('http');

const server=http.createServer((req,res)=>{
    //console.log("Anshul kumar")
    //console.log(req.url,  req.method , req.headers)
    const url=req.url;
    if(url ==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>Node Js project</title></head>')
        res.write('<h2>Welcome </h2>')
        res.write('</html>')
        res.end()
    }
    if(url ==='/home'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>Node Js project</title></head>')
        res.write('<h2>Welcome home</h2>')
        res.write('</html>')
        res.end()
    }
    else if(url ==='/about'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>Node Js project</title></head>')
        res.write('<h2>Welcome to About Us page</h2>')
        res.write('</html>')
        res.end()
    }
    else if(url ===' /node'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head> <title>Node Js project</title></head>')
        res.write('<h2> Welcome to my Node Js project</h2>')
        res.write('</html>')
        res.end()
    }
    
    

})

server.listen(4000);