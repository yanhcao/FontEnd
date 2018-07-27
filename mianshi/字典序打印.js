const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    console.log(Permutation(input));
});

function Permutation(str)
{
    // write code here
    if(str.length == 1){
        return [str];
    }
    var res = [];
    //递归全排
    for(var i = 0; i < str.length; i++){
        var prestr = str.substr(0,i);
        var poststr = str.substr(i+1);
        var substr = prestr+poststr;
        var subres = Permutation(substr);
        for(var j = 0; j < subres.length; j++){
            var nstr = str[i];
            nstr += subres[j];
            res.push(nstr);
        }
    }
    res.sort();
    for(var i = 1; i < res.length; i ++){
        if(res[i] == res[i-1]){
            res.splice(i,1);
            i --;
        }
    }
    return res;
}