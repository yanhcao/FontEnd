/*
3
2
helloworld
hdlrowolle
2
helloworld
worldhello
2
abcde
acbde
*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputs = [];
var num=0;
rl.on('line', function (data) {
    if(num==0){
        num=Number(data.trim());
        console.log(num);
    }else{
        inputs.push(data.trim());
        if(num==inputs.length){
            // console.log(inputs);
            var result=shuangshengci(inputs);
            console.log(result);
            inputs.length=0;
            num=0;
        }
    }
});
function shuangshengci(inputs,flag){
    for(var i=0;i<inputs.length;i++){
        var doubelOrigin=(inputs[i]+inputs[i]).toString();
        return doubelOrigin;
        var originLength=inputs[i].length;
        for(var j=i;j<inputs.length;j++){
            var l=inputs[j].length;
            var reverse=inputs[j].split('').reverse().join('');
            if(l==originLength){
                if(doubelOrigin.contains(reverse) || doubelOrigin.contains(inputs[j])){
                    return 'Yeah';
                }
            }else {
                continue;
            }
        }
    }
    return 'Sad';
}

// var n = parseInt(readline());
// var ans = [];
// for(var i = 0;i < n; i++){
//     var lines = parseInt(readline());
//     for(var j = 0;j < lines.length; j++){
//         ans.push(readline());
//     }
//     console.log(shuangshengci(ans));
// }
// function shuangshengci(inputs){
//     for(var i=0;i<inputs.length;i++){
//         var doubelOrigin=(inputs[i]+inputs[i]).toString();
//         return doubelOrigin;
//         var originLength=inputs[i].length;
//         for(var j=i;j<inputs.length;j++){
//             var l=inputs[j].length;
//             var reverse=inputs[j].split('').reverse().join('');
//             if(l==originLength){
//                 if(doubelOrigin.contains(reverse) || doubelOrigin.contains(inputs[j])){
//                     return 'Yeah';
//                 }
//             }else {
//                 continue;
//             }
//         }
//     }
//     return 'Sad';
// }