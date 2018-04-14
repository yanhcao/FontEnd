var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var n=parseInt(inputArr[0]);
    if(inputArr.length==n+1){
        for(var i=1;i<=n;i++){
            var line = inputArr[i].split(' ').map(e=>parseFloat(e));
            line.sort((a,b)=>a-b);
            if((line[0]+line[1])>line[2]){
                console.log('YES');
            }else{
                console.log('NO');
            }
        }
    }
});