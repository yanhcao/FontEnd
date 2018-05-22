//创建一个集合
function Set() {
    let set={};
    //看该元素是否存在于集合中
    this.has=function (value) {
        return value in set;
    };
    //添加元素
    this.add=function (value) {
        if(!this.has(value)){
            set[value]=value;
            return true;
        }
        return false;
    };
    //删除元素
    this.delete=function(value){
        if(this.has(value)){
            delete set[value];
            return true;
        }
        return false;
    };
    //集合的长度
    this.size=function () {
        let count=0;
        for(let key in set){
            if(set.hasOwnProperty(key)){  //set[key]会使得集合中的null或者false等忽略掉
                count++;
            }
        }
        return count;
    };
    //返回集合中的所有元素
    this.value=function () {
        let values=[];
        for(let key in set){
            if(set.hasOwnProperty(key)){
                values.push(set[key]);
            }
        }
        return values;
    };
    //清空集合
    this.clear=function () {
        if(this.size()){
            set={};
            return true;
        }
        return false;
    };
    //取两个集合的并集
    this.union=function (otherset) {
        let unionSet=new Set();
        let values=this.value();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        values=otherset.value();
        for(let i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }
        return unionSet;
    };

    //取两个集合的交集
    this.jiao=function(otherset) {
        let jiaoSet=new Set();
        let values=this.value();
        for(let i=0;i<values.length;i++){
            if(otherset.has(values[i])){
                jiaoSet.add(values[i]);
            }
        }
        return jiaoSet;
    };
    //取两个集合的差集
    this.differ=function(otherset) {
        let difSet=new Set();
        let values=this.value();
        for(let i=0;i<values.length;i++){
            if(!otherset.has(values[i])){
                difSet.add(values[i]);
            }
        }
        return difSet;
    };
    //查看A是否是B的子集
    this.subset=function (otherset) {
        if(this.size()>otherset.size()){
            return false;
        }else{
            let values=this.value();
            for(let i=0;i<values.length;i++){
                if(!otherset.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };
}
// let set=new Set();
// set.add(3);
// set.add('22');
// set.add('xb');
// set.add(null);
// console.log(set.value());
// console.log(set.size());
// console.log(set.has(1));
// set.delete('22');
// console.log(set.value());

let A=new Set();
A.add(1);
A.add(2);
A.add(3);
let B=new Set();
B.add(3);
B.add(1);
B.add(5);
B.add(2);
let aa=A.jiao(B);
let bb=A.union(B);
let cc=A.differ(B);
// let dd=A.subset(B);
console.log(aa.value());
console.log(bb.value());
console.log(cc.value());
console.log(A.subset(B));

//ES6直接包含一个Set类，可以直接new Set()调用