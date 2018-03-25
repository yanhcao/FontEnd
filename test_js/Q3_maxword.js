var str='sddddddddddddgfgrnlvmslk';
function findMax() {
    var length=str.length;
    if(length==1){
        return str;
    }
    let arr={};
    for(var i=0; i<length; i++){
        if(!arr[str.charAt(i)]){
            arr[str.charAt(i)]=1;
        }else {
            arr[str.charAt(i)]+=1;
        }
    }
    var max_value=1;
    let max_char='';
    for(var k in arr){
        if(arr[k]>=max_value){
            max_char=k;
            max_value=arr[k];
        }
    }
    return max_char;

}
console.log('出现最多的字母是'+findMax(str));