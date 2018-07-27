const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    var arr=line.split(' ').map(e=>parseInt(e));
    var m=arr[0],
        n=arr[1];
    var res=[];
    for(var i=m;i<=n;i++){
        var substr=i.toString().split('').map(e=>parseInt(e));
        if(i==(Math.pow(substr[0],3)+Math.pow(substr[1],3)+Math.pow(substr[2],3))){
            res.push(i);
        }
    }
    if(res.length !=0){
        console.log(res);
    }else{
        console.log('no');
    }
});

