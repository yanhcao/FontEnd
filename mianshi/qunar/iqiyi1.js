var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    var str=input.split('');
    var res=[];
    var len = str.length;
    var max = 0;
    var id = len;
    var i;
    for(i=len-1;i>=0;i--) {
        if(str[i].charCodeAt()>=max) {
            res[--id]=str[i];
            max=str[i].charCodeAt();
        }
    }
    console.log(res.join(''));
});
