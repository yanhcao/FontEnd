var n=5;
var arr=[1,4,3,5,2];
function sortNum(arr) {
    var num=0;
    var flag=false;
    for(var i=0;i<n;i++){

        if(arr[i]!=(i+1)){
            flag=true;
        }
        if(arr[i]==(i+1)){
            var item=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=item;
            num++;
        }
        if(flag){
            return num;
        }
    }
    sortNum(arr);
}
console.log(sortNum(arr));

