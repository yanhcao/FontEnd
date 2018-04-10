//在输入的字符串中去掉某个子串能否形成回文，查看去除子串回文的个数
//ABA
//5
var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    var arr=line.split('');
    console.log(huiwen(arr));
});
function huiwen(str){
    var len=str.length;
    // var arr1=new Array(len);
    var dp=new Array(len);
    //将dp初始化为全0元素
    for(var k=0;k<len;k++){
        //数组是引用，所以必须每次更新新的数组存到dp里面
        var arr=new Array(len);
        for(var i=0;i<len;i++) arr[i]=0;
        dp[k]=arr;
    }
    // console.log(dp[0][0]);
    for(var j=0;j<len;j++){
        dp[j][j]=1;
        for(var i=j-1;i>=0;i--){
            dp[i][j]=dp[i+1][j]+dp[i][j-1]-dp[i+1][j-1];
            if(str[i]==str[j]){
                dp[i][j]+=1+dp[i+1][j-1];
            }
        }
    }
    return dp[0][len-1];
}

