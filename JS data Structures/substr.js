var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    console.log(FindStr(input));
});
function FindStr(str){
    var len=str.length;
    for(let i=0; i<len;i++){
        var temp='';
        for(let j=i+1;j<len;j++){
            var k=i;
            while(str.charAt(k) == str.charAt(j)){
                k++;j++;
                temp+=str.charAt(j);
            }
        }
    }
}