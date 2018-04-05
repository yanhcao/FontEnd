var res=0;
function com(n,m) {
    var k=2*m;
    if(n%k==0){
        res=m*n/2;
        return res;
    }else {
        return 0;
    }
}
console.log(com(4,1));