var arr= new Array(34, 435,2,13,546,21, 54);
var l=arr.length;
end:for(var i=0; i<l;i++){
    var flag=true;
    for(var j=i+1; j<l;j++){
        if(arr[i]>arr[j]){
            var item=arr[i];
            arr[i]=arr[j];
            arr[j]=item;
            flag=false;
        }
    }
    if(flag){
        break end;
    }
    console.log(arr);
}
// console.log(arr);