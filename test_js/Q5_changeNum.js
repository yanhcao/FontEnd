// var arr=[];
// for(var i=0; i<2;i++){
//     arr[i]=readline();
// }
var a=4;
var b=2;
function swap(a,b) {
    b=a+b;
    a=b-a;
    b=b-a;
    return [a,b];
}
// console.log(swap(arr[0],arr[1]));
// module.exports=swap;
console.log(swap(a,b));