var str='arabcacfr';
var res=new Array();
var arr=str.split('');
var l=arr.length;
for(var m=0;m<l;m++){
    res[m]=0;
}
// var flag=true;
for(var i=0;i<l;i++){
    let hash={};
    for(var t=i;t<l;t++){
        if(!hash[arr[t]]){
            hash[arr[t]]=true;
            res[i]++;
        }else {
            break;
            // flag=false;
        }
    }
}
console.log(res);
var max=0;
for(var j=0;j<res.length;j++){
    if(res[j]>max){
        max=res[j];
    }
}
console.log(max);