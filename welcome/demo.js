    const http=require('http');
    const hostname = 'localhost';
    const port =8080;

    const server = http.createServer(function(req , res){
    res.statusCode=200;
    res.setHeader('content-Type' , 'text-plain');
    res.end('Hi This Page Is Restricted');
    });

    server.listen(port,hostname,function () {
    var a=[1,2,3,4,5,6];
    var b = [3,4,5,6,7,8,9];
    var c=[...a,...b];
    var i=0,len=c.length , finalObj={}, arrayResult =[];
    while(i<len){
    finalObj[c[i]]=0;
    i++;
    }
    console.log("Final Array::::"+JSON.stringify(finalObj));
    for (val in finalObj) {
        arrayResult.push(parseInt(val));
        }
        console.log("Result Array::::"+arrayResult);
    for (vv of arrayResult){
        console.log("Element:::"+vv);
    }

});
    