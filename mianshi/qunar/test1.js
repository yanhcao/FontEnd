var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var N=parseInt(inputArr[0]);
    var line=[];
    if(inputArr.length==N+1){
        for(var i=1;i<=N;i++){
            var line[i-1]=inputArr[i].split(' ').map(e=>parseInt(e));
        }
        for(var i=0;i<line.length;i++){
            for(var j=1;j<=line[i][0];j++){
                for(var m=1;m<line[i][0];m++){
                    if(line[i][j]+m)
                }
            }
        }
    }
    inputArr = [];

});
