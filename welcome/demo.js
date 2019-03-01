const http=require('http');
const hostname = 'localhost';
const port =8080;

const server = http.createServer(function(req , res){
res.statusCode=200;
res.setHeader('content-Type' , 'text-plain');
res.end('Hi This Page Is Restricted');
});

server.listen(port,hostname,function () {

});