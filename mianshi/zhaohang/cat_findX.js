//小猫跳到x位置需要花费的步数
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var last=parseInt(line);
    solve(last);
});

function solve(n) {
    var queue1 = [];
    var arr=[];
    var ans;
    queue1.push(0);
    arr[0] = 1;
    while(queue1.length)
    {
        var cp = queue1[0];
        if(cp == n) {
            ans = arr[cp];
            break;
        }
        queue1.shift();
        if(!arr[cp-1] && cp-1>=0)
        {
            arr[cp-1] = arr[cp] + 1;
            queue1.push(cp-1);
        }
        if(!arr[cp+1] && cp+1<=100000)
        {
            arr[cp+1] = arr[cp] +1;
            queue1.push(cp+1);
        }
        if(!arr[cp*2] && cp*2<=100000)
        {
            arr[cp*2] = arr[cp] +1;
            queue1.push(cp*2);
        }
    }

    console.log(ans - 1);
}
