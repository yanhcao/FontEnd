//生产promise实例
var peomise=new Promise(function(resolve,reject){
    if(value){
        resolve(value);
    }else{
        reject(value);
    }
});
//用then方法分别制定resolved状态和rejected状态
promise.then(function (value) {
    //success
},function (error) {
    //false
});

function timeout(ms) {
    return new Promise(function (resolve,reject) {
        setTimeout(resolve,ms,'done');
    });
}
timeout(2000).then(function (value) {
    console.log(value);
});