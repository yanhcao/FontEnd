const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr=[];
rl.on('line', function (input) {
    inputArr.push(input);
    var length = +inputArr[0];
    if(inputArr.length==2){
        var arr=inputArr[1].split(' ').map(e=>parseInt(e));
        for (var i = 0; i < length; ++i) {
            arr[i] = 0 - arr[i];
        }
        console.log(-1*max_sum(arr,length));
    }
});

function max_sum(arr,len) {
    var max = arr[0];
    var sum = 0;
    for(var i = 0; i < len; ++i) {
        sum += arr[i];
        if(sum >= max) {
            max = sum;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return max;
}
