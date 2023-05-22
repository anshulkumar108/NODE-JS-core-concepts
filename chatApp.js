const http = require('http');

const routes=require('./route.js');
console.log(routes.someText);

const server = http.createServer(routes);

server.listen(4000);