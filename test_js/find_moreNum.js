var arr=[1,3,3,3,2,2,3];
var hash={};
var ct=0;
for(var i=0;i<arr.length;i++){
    if(hash[arr[i]]==1){
        ct++;
        hash[arr[i]]++;
    }else if(!hash[arr[i]]){
        hash[arr[i]]=1;
    }else if(hash[arr[i]]!=1){
        hash[arr[i]]++;
    }
}

console.log(ct);
