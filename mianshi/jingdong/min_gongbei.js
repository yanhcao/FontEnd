//寻找n个数的最小公倍数
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var n=parseInt(line);
    // var arr=[];
    // for(var i=0;i<n;i++){
    //     arr.push(i+1);
    // }
    var res=[];
    // console.log('hh');
    solve(n);
});
var res=[];
function multi(ch,num) {
    var high=0,temp;
    for(var i=0;ch[i];++i) {
        temp = num*(ch[i]-48)+high;
        ch[i] = temp%10 + '0' ;
        high = temp /10;
    }
    while(high) {
        ch[i++] = high%10+48;
        high /=10;
    }
}
function gcd(m ,n){
    var r = 0;
    do{
        r = m%n; m = n; n = r;
    }while(r!==0);
    return m;
}
function mod(ch, b)
{
    var left=0,i;
    for(i = ch.length-1;i>=0;--i)
    {
        left = left*10+ch[i]-48;
        left %=b;
    }
    return left==0 ? b : gcd(b,left);
}
function solve(n) {
    // console.log('haha');
    res[0]='0';
    for(var i=2;i!=n+1;++i)
    {
        var temp = mod(res,i);
        multi(res,i/temp);
    }
}
function print(ch)
{
    var i;
    for(i=-1;ch[i+1];++i);
    var ans =0;
    for(;i>=0;--i){
        ans = ans*10+(ch[i]-'0');
        ans %=100000007;
    }
    console.log(ans);
}
