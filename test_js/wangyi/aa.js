
function quickSort(arr){
    var l=arr.length;
    //递归终止条件
    if(l<=1){
        return arr;
    }
    var c=arr[0];
    var left=[];
    var right=[];

    for(var i=1;i<l;i++){
        if(arr[i]<c){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [].concat(quickSort(left),[c],quickSort(right));
}
var arr=[4,14,10,12,8,6,18];
console.log(quickSort(arr));