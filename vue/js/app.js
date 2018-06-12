//实例化vue对象
new Vue({
    el:'#vue-app',   //将html中根容器名称填入
    data: {
        name: 'Mr Tang',
        job: 'web development',
        //属性绑定:采用v-bind
        website: 'http://www.baidu.com',
        websiteTag: "<a href='http://www.kugou.com'>酷狗</a>"
    },
    methods:{
        //方法中调用属性，可以直接使用this.name
        greet: function (time) {
            return 'Good '+time+', '+this.name+'!';  //若html调用该方法，则会展示该行字
        }
    }
});
// el:element 需要获取的元素，一定是html中的根容器元素
//data:用于数据的存储，字符串，数组等，是个对象，可以定义key和value
//methods:用于存储各种方法
//data-binding:给属性绑定对应的值