// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputArr = [];
// rl.on('line', function (input) {
//     inputArr.push(input);
//     if(inputArr.length==2){
//         console.log(migong(inputArr));
//     }
// });
var inputArr=[['3 3'],['0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1']];
migong(inputArr);
function migong(inputArr) {
    var arr1=inputArr[0].toString().split(' ').map(e => parseInt(e));
    var arr2=inputArr[1].toString().split(';');
    var output=[];
    if(arr1[0]<=0 || arr1[1]<=0){
        console.log('Number out of range');
    }else {
        var n=2*arr1[0]+1;
        var m=2*arr1[1]+1;
        for(let i=0;i<m;i++){
            var arr=new Array();
            for(let j=0;j<n;j++){
                if(j%2!=0 && i%2!=0){
                    arr.push('[R] ')
                }else {arr.push('[W] ')}
            }
            output.push(arr);
        }
    }
    for(let i=0;i<arr2.length;i++){
        var arr3=arr2[i].toString().split(';');
        for(let j=0;j<arr3.length;j++){
            var arr4=arr3[j].toString().split(' ').toString().split(',').map(e => parseInt(e));
            var [x1,y1,x2,y2]=[arr4[0],arr4[1],arr4[2],arr4[3]];
            if((Math.abs(x1-x2)+Math.abs(y1-y2)) == 1){
                if(x1==x2){
                    var a=Math.min(y1,y2);
                    output[2*x1+1][2*(a+1)]='[R] ';
                }else if(y1==y2){
                    var b=Math.min(x1,x2);
                    output[2*(b+1)][2*y1+1]='[R] ';
                }
            }
            else {
                console.log('Maze format error');
            }
        }

    }
    for(var k=0;k<output.length;k++){
        console.log(output[k].join(''));
    }
}