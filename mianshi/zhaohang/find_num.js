//寻找n个数中未出现的数字
//3 3 0 1
//2
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var arr=line.split(' ').map(e=>parseInt(e));
    var s=0;
    var n=arr[0];
    var k = 1;
    for(var i=0;i<n;i++)
    {
        s+=arr[k++];
    }
    console.log((1+n)*n/2-s);
});
