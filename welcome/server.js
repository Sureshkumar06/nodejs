const http=require('http');
const hostname = 'localhost';
const port =5000;

const server = http.createServer(function(req , res){
res.statusCode=200;
res.setHeader('content-Type' , 'text-plain');
res.end('Hi Photon');
});


server.listen(port,hostname,function () {
    
});