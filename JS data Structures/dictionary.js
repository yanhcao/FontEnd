function Dictionary() {
    let items={};
    //键值来存储
    //has()、set()、delete()、get()、clear()、size()、keys()、values()
    //has返回是否存在该元素,通过key来查询
    this.has=function (key) {
        return key in items;
    };
    //set方法，通过key、value来添加元素
    this.set=function (key,value) {
        if(!this.has(key)){
            items[key]=value;
        }
    };
    //delete方法
    this.delete=function (key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    //get方法通过key来获取值value
    this.get=function (key) {
        return this.has(key)? items[key]:undefined;
    };
    //values方法
    this.values=function () {
        let values=[];
        for(let k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };
    //size方法
    this.size=function () {
        let count=0;
        for(let key in items){
            if(items.hasOwnProperty(key)){  //set[key]会使得集合中的null或者false等忽略掉
                count++;
            }
        }
        return count;
    };
    //keys返回键名，取出dictionary中的所有键名
    this.keys=function () {
        return Object.keys(items);
    };
    //clear方法
    this.clear=function () {
        if(this.size()){
            items={};
        }
    };
    this.getItems=function () {
        return items;
    };
}
let dic=new Dictionary();
dic.set('aa','aa@email.com');
dic.set('bb','bb@email.com');
dic.set('cc','cc@email.com');
console.log(dic.has('aa'));
console.log(dic.size());
console.log(dic.keys());
console.log(dic.values());
console.log(dic.get('aa'));
//删除
dic.delete('bb');
console.log(dic.has('bb'));
console.log(dic.size());
console.log(dic.keys());
console.log(dic.values());
console.log(dic.getItems());