var arr=[2,2,3,0,5,6,9];
var res=[];
var temp=[];
var index=0;
temp[0]=0;
for(var i=1;i<arr.length;i++){
    while(index>-1 && arr[i]>arr[(temp[index])]){
        res[(temp[index])]=arr[i];
        index--;
        // console.log('in  '+i+' '+index);
        // console.log(res);
    }
    index++;
    temp[index]=i;

    // console.log('outer  '+i+' '+index);
}
console.log(res);