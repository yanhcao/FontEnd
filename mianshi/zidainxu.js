// n个a，m个z构成的字典序，然后找到第k个字典序里面的字符串
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var arr=inputArr[0].split(' ').map(e=>parseInt(e));
    console.log(findK(arr[0],arr[1],arr[2]));
});
var totleArr=[];
function findK(n,m,k) {
    var arr=[];
    for(var i=0;i<n;i++){
        arr.push('a');
    }
    for(var i=0;i<m;i++){
        arr.push('z');
    }
    perm(arr);
    arr=[...new Set(totleArr)];
    var count=arr.length;
    if(k<=count && k>0){
        return arr[k-1];
    }else {
        return -1;
    }
}

function swap(arr,i,j) {
    if(i!=j) {
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
}
function show(arr) {
    totleArr.push(arr.join(''));
}
function perm(arr) {
    (function fn(n) { //为第n个位置选择元素
        for(var i=n;i<arr.length;i++) {
            swap(arr,i,n);
            if(n+1<arr.length-1) //判断数组中剩余的待全排列的元素是否大于1个
                fn(n+1); //从第n+1个下标进行全排列
            else
                show(arr); //显示一组结果
            swap(arr,i,n);
        }
    })(0);
}
