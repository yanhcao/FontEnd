// function Queue() {
//     let arr=[];
//     this.enqueue=function(){
//         arr.push(...arguments);
//     };
//     this.dequeue=function () {
//         return arr.shift();
//     };
//     this.font=function () {
//         return arr[0];
//     };
//     this.isEmpty=function () {
//         return arr.length==0;
//     };
//     this.size=function () {
//         return arr.length;
//     }
//     this.print=function () {
//         console.log(...arr);
//     }
// }
// let arr=new Queue();
// arr.enqueue(2,4.6,7,3);
// arr.print();
// console.log(arr.font());

//用ES6中的class实现队列
// class Queue{
//     constructor(){
//         this.arr=[];
//     }
//     enqueue(){
//         this.arr.push(...arguments);
//     }
//     dequeue(){
//         return this.arr.shift();
//     }
//     font(){
//         return this.arr[0];
//     }
//     isEmpty(){
//         return this.arr.length==0;
//     }
//     size(){
//         return this.arr.length;
//     }
//     print(){
//         console.log(this.arr);
//     }
// }
// let arr=new Queue();
// arr.enqueue(2,4,5);
// arr.print();


//采用ES6中的WeakMap来保存私有属性arr，并用外层函数（闭包）来封装Queue类
let Queue=(function () {
    const arr=new WeakMap();
    class Queue{
        constructor(){
            arr.set(this,[]);
        }
        enqueue(e){
            let q=arr.get(this);
            q.push(e);
        }
        dequeue(){
            let q=arr.get(this);
            return q.shift();
        }
        print(){
            let q=arr.get(this);
            console.log(q);
        }
    }
    return Queue;
})();
let arr=new Queue();
arr.enqueue(2);
arr.enqueue(5);
arr.print();