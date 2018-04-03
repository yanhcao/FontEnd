function fun(l,r){
    //排除越界
    if( l>r || l<0 ){
        return 0;
    }
    var temp = '';
    var num=0;
    for(var j=1;j<=l;++j){
        temp += j;
        // console.log(j+'次:'+temp);
    }
    if(temp%3 == 0) ++num;
    for(var i=l+1; i<=r;++i){
        temp += i;
        // console.log(i+'次:'+temp);
        if(parseInt(temp)%3==0){
            ++num;
        }
    }
    return num;
}
console.log(fun(2,5));
// var l=2;
// var r=5;
// var temp='';
// var num=0;
// for(var i=l;i<=r;i++){
//     // for(var j=l;j<=l+i;j++){
//     //     temp[i]=temp[i]+j.toString();
//     // }
//     temp=temp+i.toString();
//     console.log(temp.toString());
//     if((parseInt(temp)%3)==0){
//         num++;
//     }
// }
// console.log(num);
