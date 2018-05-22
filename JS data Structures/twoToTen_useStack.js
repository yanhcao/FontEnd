//采用栈实现二进制转换十进制
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
    isEmpty(){
        return this.arr.length==0;
    }
}
//二进制转换为十进制，利用栈
function change(number) {
    let arr=new Stack();
    let rem,
        str='';
    while(number>0){
        rem=Math.floor(number%2);
        arr.push(rem);
        number=Math.floor(number/2);
    }
    //将arr中的二进制打印出来
    while(!arr.isEmpty()){
        str+=arr.pop().toString();
    }
    return str;
}
console.log(change(10));