function getFibonacci(n) {
    var arr=[];
    var i=0;
    while (i<n){
        if(i<=1){
            arr.push(i);
        }else {
            arr.push(arr[i-2]+arr[i-1]);
        }
        i++;
    }
    return arr;
}
console.log(getFibonacci(16));