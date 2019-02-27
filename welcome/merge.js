const http=require('http');
const hostname = 'localhost';
const port =5001;

const server = http.createServer(function(req , res){
res.statusCode=200;
res.setHeader('content-Type' , 'text-plain');
res.end('Hi Array Reverse and Merge');
});

server.listen(port,hostname,function () {
    var a = [1,2,3,4,5];
    var b = [3,4,5,6,7,8,9];
    var mergeValue = [];
    var temp = [];

    b.forEach(value => {
      a.push(value);
    })

    function removeDuplicate(){
     
      a.forEach(element => {
        var booleanValue =isInArray(element);
        if(booleanValue == false)
        temp.push(element)
      })
    }
    function isInArray(value) {
      if(temp.length != 0)
        return temp.indexOf(value) > -1;
      else
        return false
    }
    function reverseArray(){
      let tempLength = temp.length - 1;
      while(tempLength >= 0){
        mergeValue.push(temp[tempLength]);
        tempLength--;
      }
    }

    removeDuplicate();
    reverseArray();
    console.log("merger Value "+temp);
    console.log("reverse array "+mergeValue)
});