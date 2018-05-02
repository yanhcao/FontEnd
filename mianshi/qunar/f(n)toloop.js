//f(n)=f(n-1)+f(n-2);
//f(0)=0,f(1)=1;
//递归和循环
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    //parseInt
    var n=parseInt(input);
    console.log(loop(n));
});
function loop(n) {
    // if(n==0||n==1){
    //     return n;
    // }
    // var a=0,
    //     b=1;
    // var res=0;
    // for(var i=2;i<=n;i++){
    //     res=a+b;
    //     a=b;
    //     b=res;
    // }
    // return res;
    //数组方法
    var fib=[0,1];
    for(var i=2;i<=n;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib[n];
}

//递归
// function loop(n) {
//     if(n==0||n==1){
//         return n;
//     }else {
//         return loop(n-1)+loop(n-2);
//     }
// }