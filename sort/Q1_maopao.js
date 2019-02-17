var arr= new Array(34, 435,2,13,546,21, 54);
var l=arr.length;
end:for(var i=0; i<l;i++){
    var flag=true;
    for(var j=i+1; j<l;j++){
        if(arr[j]>arr[j+1]){
            var item=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=item;
            flag=false;
        }
    }
    if(flag){
        break end;
    }
    console.log(arr);
}
// console.log(arr);