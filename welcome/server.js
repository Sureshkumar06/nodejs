const http=require('http');
const hostname = 'localhost';
const port =5000;

const server = http.createServer(function(req , res){
res.statusCode=200;
res.setHeader('content-Type' , 'text-plain');
res.end('Hi Photon');
});


server.listen(port,hostname,function () {
    var finalValue=[];
    var a = ["121719", "121720", "121721"];
    var b = [{
      empId:"121719",
      role:"Software Engineer",
      city:"Dharmapuri",
      name:"Metikala Suresh"
    },
    {
      empId:"121720",
      role:"Software Engineer",
      city:"Tirunelveli",
      name:"Lakshmanan"
    },
    {
      empId:"121721",
      role:"Software Engineer",
      city:"AP",
      name:"Manjunath"
    }]
    function f1(vlaue , callback){
a.forEach(element =>{
    f2(element);
})
    }
function f2(value){
    b.forEach(element =>{
        if(element.empId==value){
finalValue.push(element);
        }
    })
}
    f1(a, f2);
    console.log(JSON.stringify(finalValue));
});