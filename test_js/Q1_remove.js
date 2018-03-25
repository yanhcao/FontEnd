var arr=new Array(1,34,323,1,34,145);
function remove_copy() {
    var data=[];
    let test_data={};
    for(var i=0; i<arr.length;i++){
        if(!test_data[arr[i]]){
            test_data[arr[i]]=true;
            data.push(arr[i]);
        }
    }
    return data;
}
console.log(remove_copy(arr));

