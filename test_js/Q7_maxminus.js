var arr=new Array(23,4,3,7,1,25,8);
function minus(arr) {
    var max_value=arr[0];
    var min_value=arr[0];
    var minus_value;
    for(var i=1; i<arr.length; i++){
        if(arr[i]>max_value){
            max_value=arr[i];
        }
        if(arr[i]<min_value){
            min_value=arr[i];
        }
    }
    minus_value=max_value-min_value
    return (minus_value);
}
console.log(minus(arr));