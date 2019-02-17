// a b c三个数增加+和*，和括号，选择得到的值最大的

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var arr=inputArr[0].split(' ').map(e=>parseInt(e));
    console.log(compute(arr[0],arr[1],arr[2]));
});
function compute(a,b,c){
    var res1=(a+b)*c;
    var res2=a*(b+c);
    var res3=a+b+c;
    var res4=a*b*c;
    return Math.max(res1,res2,res3,res4);
}