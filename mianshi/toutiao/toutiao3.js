
// var arrB=[1,2,3,4];
// console.log(arrB);
// console.log(arrB.slice(1).toString().split(',').map(e=>parseInt(e)));
// console.log(Math.min.call(...(arrB.splice(1).toString().split(',').map(e=>parseInt(e)))));


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[0];
    if (inputArr.length == 3) {
        var arr = inputArr.slice(1);
        var arrA=arr[0].split(' ').map(e=>parseInt(e));
        var arrB=arr[1].split(' ').map(e=>parseInt(e));
        console.log(spaceNum(arrA,arrB,nLine));
    }
});
function spaceNum(arrA,arrB,n) {
    var count=0;
    for(var i=0;i<n;i++){
        for(var j=i;j<n;j++){
            var newa = arrA.slice(i,j+1);
            var newb = arrB.slice(i,j+1);
            var a_max=Math.max.apply(null, newa);
            var b_min=Math.min.apply(null, newb);
            if(a_max<b_min){
                count++;
            }
        }
    }
    return count;
}