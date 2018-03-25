// 如果获取的数组是顺子，0可以代替任何值，则返回true，否则返回false
function compare(v1,v2){
    if(v1>v2){
        return 1;
    }else if(v1<v2){
        return -1;
    }else{
        return 0;
    }
}
var num=[1,0,0,1,0];
function IsContinuous(num)
{
    // write code here
    var data=[];
    var flag=false;
    for(var i=0;i<5;i++){
        if(num[i]!=0){
            data.push(num[i]);
        }
    }
    data.sort(compare);
    // console.log(data);
    // for(var i=0;i<data.length-1;i++){
    //     if((data[i+1]-data[i])!=1){
    //        flag=false;
    //     }
    // }
    // if(flag==false){
    //     var blank=0;
    //     for(var j=0;j<data.length-1;j++){
    //         blank+=(data[j+1]-data[j]-1);
    //     }
    //     console.log(blank);
    //     if(blank<=(num.length-data.length)){
    //         flag=true;
    //     }
    // }
    // for(var k=0;k<data.length-1;k++){
    //     if(data[k]==data[k+1]){
    //         flag=false;
    //     }
    // }
    var blank=data[data.length-1]-data[0]+1-data.length;
    if(blank<=(num.length-data.length)){
        flag=true;
    }
    return flag;
}
console.log(IsContinuous(num));

