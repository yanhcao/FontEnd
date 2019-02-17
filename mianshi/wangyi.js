//收入金额
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
        var arrinput = inputArr.slice(1);
        arrinput.map(e=>parseInt(e));
        //调用计算税收函数时，减去起征点5000
        for (var i=0;i<arrinput.length;i++){
            console.log(Math.round(compute(arrinput[i]-5000)));
        }
    }
});

function compute(num) {
    var arr=[[3000,12000,25000,35000,55000,80000],[0.03,0.1,0.2,0.25,0.3,0.35]];
    var sum=0;
    var i;
    if(num>=80000){
        for(var k=0;k<6;k++){
            sum+=cost(k);
        }
        return sum+=(num-80000)*0.45;
    }else if(num<3000){
        return sum+=num*0.03;
    }else if(num<=0){
        return 0;
    }else {
        for(i=0;i<6;i++){
            if(num>=arr[0][i] && num<arr[0][i+1]){
                for(var j=0;j<=i;j++){
                    sum+=cost(j);
                }
                sum+=(num-arr[0][i])*arr[1][i+1];
                break;
            }
        }
        return sum;
    }

}
function cost(i) {
    switch (i){
        case 0: return 90;  //3000*0.03
        case 1: return 900;  //(12000-3000)*0.1
        case 2: return 2600;  //(25000-12000)*0.2
        case 3: return 2500;  //(35000-25000)*0.25
        case 4: return 6000;  //(55000-35000)*0.3
        case 5: return 8750;  //(80000-55000)*0.35
    }
}

