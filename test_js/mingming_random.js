while(line=readline()){ //line是数字的个数
    var arr=[];
    for(var i=0;i<line;i++){
        arr[i]=readline();
    }
    arr.sort(function(v1,v2){
        return v1-v2;
    });
    //去重
    var data=[];
    let hash_data={};
    for(var i=0; i<arr.length;i++){
        if(!hash_data[arr[i]]){
            hash_data[arr[i]]=true;
            data.push(arr[i]);
        }
    }
    console.log(data.join('\n'));
}
