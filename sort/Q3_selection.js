//选择排序
var arr=[3,4,51,3,5,9,1,0,24];
var l=arr.length;
for(var i=0;i<l-1;i++){
    var minIndex=i;
    var minValue=arr[i];
    for(var j=i+1;j<l;j++){
        if(arr[j]<minValue){
            minIndex=j;
            minValue=arr[j];
        }
    }
    var temp=arr[i];
    arr[i]=minValue;
    arr[minIndex]=temp;
}
console.log(arr);
