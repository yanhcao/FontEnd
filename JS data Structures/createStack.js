// function Stack() {
//     let arr=[];
//     this.push=function () {
//         arr.push(...arguments);
//     };
//     this.pop=function () {
//         return arr.pop();
//     };
//     //查看栈顶元素
//     this.peek=function () {
//         return arr[arr.length-1];
//     };
//     this.isEmpty=function () {
//         return arr.length==0;
//     };
//     this.Size=function(){
//         return arr.length;
//     };
//     this.clear=function () {
//         arr=[];
//     };
//     this.print=function(){
//         console.log(arr);
//     };
// }
// let stack=new Stack();
// console.log(stack.isEmpty());
// stack.push(3,5,6);
// stack.print();
// console.log(stack.peek());

class Stack{
    constructor(){
        this.arr=[];
    }
    push(element){
        this.arr.push(element);
    }
    pop(){
        return this.arr.pop();
    }
}
let stack=new Stack();