const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    if (inputArr.length == (nLine + 1)) {
        var lines = inputArr.slice(1);
        // console.log(lines);
        var arr=[];
        for(var k=0;k<lines.length;k++){
            arr[k]=[];
        }
        for(var i=0;i<nLine;i++){
            var aa=lines[i].split(' ');
            for(var j=0;j<aa.length;j++){
                arr[i][j]=parseInt(aa[j]);
            }
        }
        var res=0;
        let hash={};
        var max=0;
        for(var i=0;i<nLine;i++){
            for(var j=1;j<arr[i].length;j++){
                if(!hash[arr[i][j]]){
                    hash[arr[i][j]]=true;
                    res++;
                }else if(hash[arr[i][j]]){
                    hash[arr[i][j]]=null;
                    res--;
                }
                if(res>max){
                    max=res;
                }
            }
        }
        console.log(max);
        inputArr = [];
    }
});
