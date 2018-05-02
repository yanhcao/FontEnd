const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var s=inputArr[0];
    var n = +inputArr[1];
    if (inputArr.length == (n+2)) {
        var arr = inputArr.slice(2);
        for(var i=0;i<n;i++){
            arr[i]=arr[i].split(' ').map(e=>parseInt(e));
        }
        // console.log(arr);
        var len=s.length;
        var N,M,X,Y;
        for (var i = 0; i < n; ++i) {
            N=arr[i][0];
            M=arr[i][1];
            X=arr[i][2];
            Y=arr[i][3];
            var j=0;
            var curx = X,cury = Y;
            for (; j < len + 1; ++j) {
                switch (s.charAt(j)){
                    case 'u':
                        curx -= 1;
                        break;
                    case 'd':
                        curx += 1;
                        break;
                    case 'l':
                        cury -= 1;
                        break;
                    case 'r':
                        cury += 1;
                        break;
                    // default:0;
                }
                if(curx <= 0 || curx > N || cury <=0 || cury > M || j == len-1){
                    console.log(j+1);
                    break;
                }
            }
        }
        inputArr = [];
    }
});