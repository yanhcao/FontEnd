var arr= new Array(34,435,56,13,546,21,54);
function quickSort(arr) {  //递归调用，这里必须有参数
    var length=arr.length;
    if(length<=1){
        return arr;
    }
    var rightArr=[];
    var leftArr=[];
    var center=arr[0];
    for(var i=1; i<length;i++){
        if(arr[i]>center){
            rightArr.push(arr[i]);
        }else {
            leftArr.push(arr[i]);
        }
    }
    console.log(arr);
    return [].concat(quickSort(leftArr),[center],quickSort(rightArr)); //递归调用函数
}
console.log(quickSort(arr));