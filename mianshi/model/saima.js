//赛马网牛客网示例输入a+b
// 单行输入
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    //全部parseInt
    var line=input.split(' ').map(e=>parseInt(e));
    console.log(line);
    //去重
    line=[...new Set(line)];
    console.log(line);
    //升序排列
    line.sort((a,b)=>a-b);
    console.log(line);
    // console.log(+inputArr[0]);//转化成数字类型
    inputArr = [];

});
// //多行输入，输入的第一个数据是接下来要输入的行数
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// var inputArr = [];
// rl.on('line', function (input) {
//     inputArr.push(input);
//     var nLine = +inputArr[0];
//     if (inputArr.length == (nLine + 1)) {
//         var arr = inputArr.slice(1);
//         console.log(arr);
//         inputArr = [];
//     }
// });
