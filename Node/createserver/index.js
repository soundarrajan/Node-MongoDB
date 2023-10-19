const http = require('http');
const server = http.createServer((req,res) =>{
console.log('method',req.method);
console.log('url',req.url);
res.end('sss');
})
server.listen(3000);