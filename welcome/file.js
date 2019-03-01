const http=require('http');
    const hostname = 'localhost';
    const port =8080;

    const server = http.createServer(function(req , res){
    res.statusCode=200;
    res.setHeader('content-Type' , 'text-plain');
    res.end('Hi This Page Is File System');
    });

server.listen(port,hostname,function () {
const fs = require('fs');
    const file = fs.createReadStream('example.txt')
    file.on('readable' ,()=>{
        console.log(`readable: ${file.read()}`);
    });
    file.on('end', () => {
    console.log('end');
    });

    const write = fs.createWriteStream('sample.txt');
    file.pipe(write);
    });