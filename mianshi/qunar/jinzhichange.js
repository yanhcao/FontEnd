//寻找n个数中未出现的数字
//3 3 0 1
//2
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var n=parseInt(line);
    var arr=[];
    var sum=[];
    for(var i=2;i<=n;i++){
        var str=n.toString(i);
        console.log(str);
        arr.push(str);
    }

    for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].trim();
        for(var j=0;j<arr[i].length;j++){
            // console.log('ok'+arr[i].charCodeAt(j));
            var reg=/[a-z]/g;
            if(arr[i].charAt(j).test(reg)){
                var a=arr[i].charCodeAt(j)-97+10;
                sum[i]+=a;
            }else {
                sum[i]+=parseInt(arr[i].charAt(j));
            }
        }
    }
    sum.sort((a,b)=>a-b);
    console.log(sum);
    console.log(sum[sum.length-1]);
    // console.log(fun(n));
});

function fun(n){
    var biggest = 0;
    for(var i=2;i<=n;i++){
        var k = n.toString(i);
        var arr=(""+k).split("");
        var temp = 0;

        for (var j=0;j<arr.length ;j++)
        {
            temp+=parseInt(arr[j],i);
        }
        if(biggest<=temp){
            biggest=temp;
            // console.log(biggest);
        }
    }
    return biggest;

}
