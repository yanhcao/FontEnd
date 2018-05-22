//创建链表
function LinkedList() {
    let Node=function (element) {
        this.element=element;
        this.next=null;
    };
    let length=0;
    let head=null;
    //尾部添加一个元素append
    this.append=function (element) {
        let node=new Node(element);
        let current;
        if(head==null){
            head=node;  //链表为空，则把node赋值给head
        }else{
            current=head;
            //循环列表寻找最后一项node
            while(current.next){
                current=current.next;
            }
            //找到最后一项
            current.next=node;   //如果不为空则把node赋值给找到的最后一个节点current.next
        }
        length++;  //最后链表长度加一
    };
    //从链表任意位置移除元素，removeAt，传入position参数
    this.removeAt=function (position) {
        let current=head,
            index=0,
            privious;   //前一个元素current是现在的元素
        if(position>=0&&position<length){
            if(position==0){
                head=current.next;
            }else{
                while(index++<position){
                    //将现在的元素赋值给前一个，现在的等于下一个
                    privious=current;
                    current=current.next;
                }
                //找到position的位置,将current删除
                privious.next=current.next;
            }
            length--;
            return current.element;  //返回删除的元素
        }else{
            return null; //越界情况下返回null
        }
    };

    //在任意位置插入元素insert,两个参数position和element
    this.insert=function (position,element) {
        let node=new Node(element);
        let current=head;
        let previous,
            index=0;
        //检查越界，越界则返回false，否则返回true
        if(position>=0&&position<length){
            if(position==0){
                node.next=current;
                head=node;
            }else{
                while(index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    //打印：将链表转为字符串
    this.toString=function () {
        let current=head,
            str='';
        while(current){
            str+=current.element.toString()+'  ';
            current=current.next;
        }
        return str;
    };
    //给定元素寻找元素的下标indexOf,找不到就返回-1；
    this.indexOf=function (element) {
        let current=head,
            index=0;
        while(current){
            if(element==current.element){
                return index;
            }
            index++;
            current=current.next;
        }
        return -1;
    };

    this.isEmpty=function () {
        return length==0;
    };
    this.size=function () {
        return length;
    };
    this.getHead=function(){
        return head;
    }
}

let list=new LinkedList();
list.append('22');
list.append(5);
list.append(true);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
list.insert(1, 'xb');
console.log(list.toString());
console.log(list.indexOf('xb'));