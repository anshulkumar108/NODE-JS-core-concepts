
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    const path = require('path');

    if (url === '/') {
        //const filePath=path.join(__dirname, 'message.txt');
        fs.readFile('message.txt', { encoding: 'utf8' }, (err, data) => {
            if (err) {
                console.log(err)
            }
            res.write('<html>')
            res.write('<head> <title>Enter message</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message" id="input"><button type="submit">SEND</button></form></body>');
            res.write('</html>')
            return res.end();
        })
        // this return is used to return from this anonymous function and prevent running code that is present outside loop

    }
    //1. redirect the user to nothing (/)
    //2.create new file and store msg in it.

    if (url === '/message' && method === "POST") {
        //before writing to file we want get our request data we req.on method
        //req.on('data', function) data is fired when our new chuck of data is ready to read. & function is used to fired to every data event
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);

        })

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const message = parseBody.split('=')[1]
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            })
        })

    }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>')
    // res.write('<head> <title>Node Js project</title></head>')
    // res.write('<h2>welcome</h2>')
    // res.write('</html>')
    // res.end()
}

//module.exports = requestHandler;
module.exports={
    handler:requestHandler,
    someText:'some hard coded text'
}
exports.handler=requestHandler;
exports.someText='some hard coded text';
