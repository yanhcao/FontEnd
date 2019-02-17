// // 0 1 1 1 1 1 1 1 1 0
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.on('line', function (input) {
//     var arr=input.split(' ').map(e=>parseInt(e));
//     var res=[];
//     var list=subArr(arr);
//     for(var i=0;i<list.length;i++){
//         var flag=true;
//         var temp=0;
//         if(list[i].length==1){
//             res.push(parseInt(list[i]));
//         }
//         for(var j=0;j<list[i].length;j++){
//             if(parseInt(list[i].charAt(j))>parseInt(list[i].charAt(j+1))){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag==true){
//             for(var j=0;j<list[i].length;j++){
//                 temp+=parseInt(list[i].charAt(j));
//             }
//             res.push(temp);
//         }
//     }
//     console.log(Math.max.apply(null,res));
// });
function subArr(arr) {
    let list = [''];
    for(var i = 0, len = arr.length; i<len ; i++ ){
        list.forEach(x => {
            list.push(x + arr[i]);
        });
    }
    return list;
}
var arr=[1,2,3];
console.log(subArr(arr));