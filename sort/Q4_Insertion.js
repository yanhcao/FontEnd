var arr=[3,4,51,3,5,9,1,0,24];
var l=arr.length;
var start=new Date();
// console.log(start);
for(var i=1;i<l;i++){
    for(j=i;j>0;j--){
        if(arr[j-1]>arr[j]){
            var temp=arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
        }
    }
}
var end=new Date();
// console.log(end);
console.log(arr);
console.log(end-start);