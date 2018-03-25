function compare(value1, value2) {
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else {
        return 0;
    }
}
function subsets( S, idx, n) {
    var result=new Array();
    // for(var i=0;i<k;i++){
    //     result[i]=new Array();
    // }
    if(idx==n){
        var temp=new Array();
        result.push(temp);
    }else {
        var vec=subsets(S,idx+1,n);
        // for(var i=0;i<k;i++){
        //     vec[i]=new Array();
        // }
        var a=S[idx];
        for (var i=0;i<vec.length;i++){
            var v=vec[i];
            var tem=[];
            for(var k=0;k<v.length;k++){
                tem.push(v[k]);
            }
            result.push(v);
            tem.push(a);
            tem.sort(compare);
            result.push(tem);
        }
    }
    return result;
}

// var aa = readline().split(',');
// var nc=aa[0];
// var topay = aa[1];
// var coins = readline();
var nc = 5;
var topay=9;
var coins=[1,3,5,4,4];

var sets = subsets(coins, 0, coins.length);
var flag=false;
// console.log(sets);
for (var i = nc; i >= 1 ; --i) {
    for (var j = 0; j < sets.length; ++j) {

        if(sets[j].length === i) {
            var sum = 0;
            // console.log(sum);
            for (var k = 0; k < sets[j].length; ++k) {
                sum += sets[j][k];
            }
            if((sum >= topay) && (sum - sets[j][0] < topay)) {
                console.log(i);
                flag=true;
            }
        }
        if(flag){
            break;
        }
    }
    if(flag){
        break;
    }
}
