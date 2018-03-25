function randomStr(n) {
    var str='qwertyuiopasdfghjklzxcvbnm123456789';
    var length=str.length;
    var data='';
    for(var i=0; i<n; i++){
        var word=str.charAt(Math.ceil(Math.random()*length)); //floor与ceil均可
        data+=word;
    }
    return data;
}
console.log(randomStr(14));