var arr=[1000,2];
var start=new Date();
function fun(n,k){
    var num=0;
    //暴力搜索，复杂度高，速度慢
    // for(var x=1;x<n+1;x++){
    //     for(var y=1;y<n+1;y++){
    //         if((x%y)>=k){
    //             num+=1;
    //         }
    //     }
    // }

    //思路
    //y>x的直接相加
    for(var i=k;i<n;i++){
        num+=n-i;
    }
    //y<x>k的部分
    for(var x=k;x<=n;x++){
        for(var y=2;y<x;y++){
            if(x%y>=k){
                num++;
            }
        }
    }
    //空循环测试时间
    // for(var i=1;i<n;i++){
    //     for(var j=1;j<n;j++){
    //         num++;
    //     }
    // }
    return num;
}
var result=fun(arr[0],arr[1]);
var end=new Date();
console.log(end-start);
console.log(result);
