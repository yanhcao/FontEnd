//质因数2，3，5的第n个数
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var n=parseInt(line);
    console.log(getNum(n));
});
function getNum(n)
{
    if(n<1) return 0;
    var p1,p2,p3;
    p1 = p2 = p3 = 0;
    var result = [1];

    for(var i=1;i<n;i++){
        result[i] = Math.min(result[p1]*2,result[p2]*3,result[p3]*5);
        if(result[i]===result[p1]*2) p1++;
        if(result[i]===result[p2]*3) p2++;
        if(result[i]===result[p3]*5) p3++;
    }
    return result[n-1];
}
