var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var inputArr = [];
rl.on('line', function (line) {
    inputArr.push(line);
    var n=+inputArr[0];
    if(inputArr.length == (n+1)){
        var pic=0;
        var text=0;
        for(var i=1;i<=n;i++){
            var arr=inputArr[i].split(' ').map(e=>parseInt(e));
            if(arr[0]==1){
                text+=(arr[1]*arr[2]);
            }else if(arr[0]==2){
                pic+=(arr[1]*arr[2]);
            }
        }
        if(pic/(pic+text) > 0.75){
            console.log(text+' '+pic+' '+'Y');
        }else{
            console.log(text+' '+pic+' '+'N');
        }

    }
});