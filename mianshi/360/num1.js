// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputArr = [];
// rl.on('line', function (input) {
//     inputArr.push(input);
//     var a = +inputArr[0];
//     if(inputArr.length==(a+1)){
//         var max=parseInt(inputArr[1].split(' ')[0]),
//             min=parseInt(inputArr[1].split(' ')[0]),
//             res;
//         for(var i=1;i<=a;i++){
//             var arr=inputArr[i].split(' ').map(e=>parseInt(e));
//             for(var j=0;j<2;j++){
//                 if(arr[j]<min){
//                     min=arr[j];
//                 }else {
//                     max=arr[j];
//                 }
//             }
//         }
//         res=(max-min)*(max-min);
//         console.log(res);
//     }
// });
// //
// //
// // while(line=readline()){
// //     var lines = line.split(' ');
// //     var a = parseInt(lines[0]);
// //     if(lines.length==(a+1)){
// //         var arr=lines.split(' ').map(e=>parseInt(e));
// //         for(var i=0;i<a;i++){
// //
// //         }
// //     }
// // }
// // var n = parseInt(readline());
// // var ans = 0;
// // for(var i = 0;i < n; i++){
// //     lines = readline().split(" ")
// //     for(var j = 0;j < lines.length; j++){
// //         ans += parseInt(lines[j]);
// //     }
// //     print(ans);
// // }
// var a=parseInt(readline());
// var ans=0;
// var arr=readline().split(' ').map(e=>parseInt(e));
// var max=Math.max(arr[0],arr[1]),
//     min=Math.min(arr[0],arr[1]),
//     res;
// for(var i = 1;i < a; i++){
//     lines=readline().split(" ").map(e=>parseInt(e));
//     for(var j=0;j < 2; j++){
//         if(arr[j]<min){
//             min=arr[j];
//         }else {
//             max=arr[j];
//         }
//     }
// }
// res=(max-min)*(max-min);
// print(res);
var arr=[2,4,6,2,3,1,3];
console.log(arr.slice(0,5));
console.log([...new Set(arr.slice(0,5))].length);