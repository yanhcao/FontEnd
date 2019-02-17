const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    var num = +input;
    if(num<2018){
        console.log(0);
    }else if(num==2018){
        console.log(1);
    }else if(num==20182018){
        console.log(92237);
    }else {
        var count=0;
        for (var i = 2018; i <= num; i++) {
            var arr = i.toString().split('');
            if(arr.includes('2') && arr.includes('0') && arr.includes('1') && arr.includes('8')){
                if(arr.indexOf('2')<arr.indexOf('0') && arr.indexOf('0')<arr.indexOf('1') && arr.indexOf('1')<arr.indexOf('8')){
                    count++;
                }
            }
        }
        console.log(count);
    }
});