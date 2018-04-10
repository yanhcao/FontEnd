//纸牌游戏，两人轮番拿最大的一个数，然后看两人相减的分数差
/*3
2 7 4*/
//输出5
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
var data=[];
var res=0;
var arr=[];
rl.on('line', function(line){
    data.push(line);
    if(data.length==2){
        var n=parseInt(data[0]);
        for(var i=0;i<data[1].split(' ').length;i++){
            arr[i]=parseInt(data[1].split(' ')[i]);
        }

        arr.sort(function (a,b) {
            return a-b;
        });
        console.log(arr);
        for(var j=0;j<n;j++){
            if(j%2==0){
                res+=arr[j];
            }else{
                res-=arr[j];
            }
        }
        console.log(res);
    }

});

// var lines=parseInt(readline());
// var str=readline();
// arr=str.split(' ');
// for(var i=0;i<lines;i++){
//     arr[i]=parseInt(arr[i]);
// }
//
// arr.sort(function (a, b) {
//     return a-b;
// });
// var flag=true;
// var sum=0;
// for(var i=0;i<lines;i++){
//     if(flag){
//         sum+=arr[i];
//         flag=false;
//     }else {
//         sum-=arr[i];
//         flag=true;
//     }
// }
// print(Math.abs(sum));