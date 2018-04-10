const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var arr=[];
    var lines=inputArr[0].split(' ');
    for(var i=0;i<lines.length;i++){
        arr[i]=parseInt(lines[i]);
    }
    console.log(chazhao(arr));
    inputArr = [];
});
// var line;
// while(line=read_line()){
//     var lines=line.split(' ');
//     var arr=[];
//     for(var i=0;i<lines.length;i++){
//         arr[i]=parseInt(lines[i]);
//     }
//     console.log(chazhao(arr));
// }
// arr=[2,1,3,5,6,4,8,9,10];
// line='2 1 3 5';
// var lines=line.split(' ');
// var arr=[];
// for(var i=0;i<lines.length;i++){
//     arr[i]=parseInt(lines[i]);
// }
// console.log(arr);
// console.log(chazhao(arr));
function chazhao(arr) {
    arr.sort(function (a,b) {
        return a-b;
    });
    // console.log(arr);
    for(var i=0;i<=arr.length;i++){
        if(arr[i]!=i+1){
            return i+1;
        }
    }
}
