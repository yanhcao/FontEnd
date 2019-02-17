// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', function (input) {
//     var str=removeSpace(input);
//     var num = parseInt(str[0]);
//     var origin = parseFloat(str[1]).toFixed(2);
//     if(num>0 && num<10000 && origin>0 && origin<10000){
//         var res1=count1(num,origin);
//         var res2=count2(num,origin);
//         // console.log(res1+'  '+res2);
//         if(res1<res2){
//             console.log(1);
//         }else if(res1>res2){
//             console.log(2);
//         }else{
//             console.log(0);
//         }
//     }else{
//         console.log(0);
//     }
// });
// function removeSpace(input) {
//     var res=input.replace(/[2,]/g," ").trim().split(" ");
//     return res;
// }
// function count1(num,origin) {
//     var temp=num*origin;
//     if(num>=3){
//         temp=temp*0.7;
//         if(temp>=50){
//             return temp;
//         }else{
//             return (temp+10);
//         }
//     }else{
//         if(temp>=50){
//             return temp;
//         }else{
//             return (temp+10);
//         }
//     }
// }
// function count2(num,origin) {
//     var temp=num*origin;
//     if(temp>=10){
//         temp=temp-2;
//         if(temp>=99){
//             return temp;
//         }else {
//             return (temp+6);
//         }
//     }else{
//         if(temp>=99){
//             return temp;
//         }else {
//             return (temp+6);
//         }
//     }
// }
//

var str='4      3.20   ';
// str=str.replace(/[^0-9,]*/g," ");
// console.log(str);
var res=str.replace(/[2,]/g,"").trim().split(",");
console.log(res);