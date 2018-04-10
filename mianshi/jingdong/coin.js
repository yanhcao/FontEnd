//硬币有趣的个数，与旁边有一个不同则为有趣
// HHTHHH
//3
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var arr = line.split('');
    var res=0;
    // console.log(arr);
    var l=arr.length;
    for(var i=0;i<l;i++){
        if(i==0){
            if(arr[0]!=arr[1]){
                res++;
            }
        }else if(i==l-1){
            if(arr[l-1]!=arr[l-2]){
                res++;
            }
        }else if(arr[i]!=arr[i+1] || arr[i]!=arr[i-1]){
            res++;
        }
    }
    console.log(res);
});
