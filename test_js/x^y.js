function Power(x,y) {
    var res=1;
    if(y==0){
        return 1;
    }
    if(y==1){
        return x;
    }
    //判断次幂的正负
    var isNegtive=false;
    if(y<0){
        y=-y;
        isNegtive=true;
    }
    res=Power(x*x, y/2);
    if(y%2!=0){
        res=res*x;
    }
    // return res;
    return isNegtive ? (1/res):res;
}
// var x=-5;
// var y=3;
// if(x<0){
//     if(y%2==0){
//         console.log(x_y(x,y));
//     }else{
//         console.log(-x_y(x,y));
//     }
// }
console.log(Power(5,3));