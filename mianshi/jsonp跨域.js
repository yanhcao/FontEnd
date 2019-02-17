$.ajax({
    url:'http://www.campus.alibaba.com/manage/role/get',
    async:false,
    type:'get',
    dataType:'jsonp',
    data:{
        'id':1
    },
    jsonp:'callback',
    jsonpCallback:'fn',
    success:function (data) {
        console.log(data.code);
    },
    error:function () {
        console.log('fail');
    }
})

//CORS方式实现跨域
function test() {
    $.ajax({
        url:'http://localhost:8080/AdsServer/manage/role/get',
        type:'get',
        async:false,
        data:{
            'id':1
        },
        dataType:'json',
        withCredentials:true,
        success:function (data) {
            console.log(data);
            console.log(data.code);
        },
        error:function () {
            console.log('fail');
        }
    })
}
