var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// var inputArr = [];
rl.on('line', function (input) {
    // inputArr.push(input);
    //全部parseInt
    var line=input.split(' ').map(e=>parseInt(e));

    var x=line[0];
    var y=line[1];
    if(x<0){
        if(y&1){
            console.log(Power(x,y));
        }else{
            console.log(-Power(x,y));
        }
    }
    // inputArr = [];

});
var res=1;
function Power(x,y) {
    if(y==0){
        return 1;
    }
    if(y==1){
        return x;
    }
    //判断次幂的正负
    var isNegtive=false;
    if(y<0){
        y=-y;
        isNegtive=true;
    }
    // console.log(y/2);
    res=Power(x*x, ~~(y/2));
    if(y%2!=0){
        res=res*x;
    }
    return isNegtive ? (1/res):res;
}