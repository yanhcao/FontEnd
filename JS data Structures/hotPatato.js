//利用队列实现击鼓传花
class Queue{
    constructor(){
        this.arr=[];
    }
    enqueue(){
        this.arr.push(...arguments);
    }
    dequeue(){
        return this.arr.shift();
    }
    size(){
        return this.arr.length;
    }
}
function hotPotato(list,num) {
    let queue=new Queue();
    for(let i=0;i<list.length;i++){
        queue.enqueue(list[i]);
    }
    // console.log(queue);
    while (queue.size()>1){
        for(let i=0;i<num;i++){
            queue.enqueue(queue.dequeue());  //循环队列实现击鼓传花，出队列的入队列
        }
        let out=queue.dequeue();
        console.log(out+'失败者');
    }
    return queue.dequeue();  //剩下的最后一个人就是胜利的人
}
let name=['q','w','e','r','t','y','u'];
let winner=hotPotato(name,5);
console.log('winner is '+winner);