//使用ES6自带的WeakMap类, 无keys和values等方法
let map=new WeakMap();
let obj1={name:'aa'},
    obj2={name:'bb'},
    obj3={name:'cc'};

map.set(obj1, 'aa@mail.com');
map.set(obj2, 'bb@mail.com');
map.set(obj3, 'cc@mail.com');

console.log(map.has(obj1));
console.log(map.get(obj3));
map.delete(obj2);
console.log(map.has(obj2));