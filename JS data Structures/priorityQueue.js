//优先队列：根据优先级决定入队列
function PriorityQueue() {
    let arr=[];
    function QueueElement(element, priority){
        this.element=element;
        this.priority=priority;
    }
    //priority越大优先级越大
    this.enqueue=function (element,priority) {
        //创建一个QueueElement实例，以后再队列中加入的就是这个实例
        let queue=new QueueElement(element,priority);
        let flag=false;
        for(let i=0;i<arr.length;i++){
            if(queue.priority>arr[i].priority){
                arr.splice(i,0,queue);
                flag=true;
                break;
            }
        }
        if(!flag){
            arr.push(queue);
        }
    };
    this.print=function () {
        for(let i=0;i<arr.length;i++){
            console.log(`${arr[i].element} - 
            ${arr[i].priority}`);
        }
    };
}
let arr=new PriorityQueue();
arr.enqueue('Jack',4);
arr.enqueue('John',1);
arr.enqueue('xb',5);
arr.enqueue('cyh',6);
arr.print();
