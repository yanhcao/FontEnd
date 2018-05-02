var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    var num=input.split(' ').map(e=>parseInt(e));
    num.sort((a,b)=>a-b);
    // console.log(num);
    var a=num[0],
        b=num[1],
        c=num[2];
    console.log(equal(a,b,c));
});
function equal(a,b,c) {
    var dif=2*c-a-b;
    for(var i=1;i<c;i++){
        if(dif<=2*i){
            return i;
        }
    }
}