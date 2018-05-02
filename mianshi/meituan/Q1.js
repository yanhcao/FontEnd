var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var inputArr = [];
rl.on('line', function (line) {
    inputArr.push(line);
    var arr=inputArr[0].split(' ');
    var w=parseInt(arr[0]);
    var n=parseInt(arr[1]);
    if(inputArr.length == (n+1)){
        for(var i=1;i<=n;i++){
            var str=inputArr[i].toString();
            if(str.length>w){
                console.log('too long');
            }else{
                var dif=(w-str.length)/2;
                console.log(dif.toFixed(1));
            }
        }
    }
});