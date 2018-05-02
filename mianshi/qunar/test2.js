var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var n = +inputArr[0];
    if (inputArr.length == (n+1)) {
        var line = inputArr.slice(1);
        for(var i=0;i<n;i++){
            line[i]=line[i].split(' ').map(e=>parseInt(e));
        }
        console.log(line);
        for(var i=0;i<line.length;i++){
            var m=line[i][0];
            var hash={};
            var arr=[];
            var index=[];
            var len=line[i].length-1;
            for(var j=1;j<=len;j++){
                for(var k=len;k>=j+1;k--){
                        arr.push(line[i][j]/line[i][k]);
                        index.push(j+' '+k);
                        console.log(index);
                }
            }
            for(var t=0;t<arr.length;t++){
                hash[arr[t]]=index[t];
            }
            arr.sort((a,b)=>a-b);
            console.log(hash[arr[m-1]]);
        }
    }
    inputArr = [];
});