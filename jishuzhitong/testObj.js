// //例题4.13
// function Type(){}
// var a={};
// // function a() {}
// a=new Type();
// // a.__proto__=new Type();
// var flag;
// if(a instanceof Type ===true){
//     flag=true;
// }else{
//     flag=false;
// }
// console.log(flag);
// //例题4.14
// var obj={a:1, b:2, c:3};
// delete(obj.b);
// console.log(obj);
//
// //例题4.15
// var a=['a','b','c'];
// a.push('d','zero');
// console.log(a);
// a.shift();
// console.log(a);
// delete a[2];
// console.log(a.length);

//例题4.16
// function a() {
//     y=function () {
//         x=2;
//     };
//     return function () {
//         var x=3;
//         y();
//         console.log(this.x);
//     }.apply(this,arguments);
// }
// a();  //输出2，如果去掉y()那么就会打印undefined
//
// //例题4.19递归阶乘
// function factorial(n) {
//     if(n===0){
//         return 1;
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(3));

//判断输入是否符合JSON要求
// function isJSON(str) {
//     if (typeof str == 'string') {
//         try {
//             var obj=JSON.parse(str);
//             if(str.indexOf('{')>-1){
//                 return true;
//             }else{
//                 return false;
//             }
//
//         } catch(e) {
//             console.log(e);
//             return false;
//         }
//     }
//     return false;
// }
// console.log(isJSON("{'yes':'ok'}"));

//Node.js中module.exports与exports的关系
console.log(module.exports===exports); //返回true
console.log(exports); //返回 {}，默认是空对象
