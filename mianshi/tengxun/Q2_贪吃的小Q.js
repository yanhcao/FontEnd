//小Q吃M块巧克力，N天吃完，但是每天吃的不少于前一天吃的一半，但是最后一天也需要有巧克力吃，请问第一天最多能吃多少
//输入3 7
//输出4
while(line=readline()){
    var n=parseInt(line.split(' ')[0]);
    var m=parseInt(line.split(' ')[1]);
    fun(n,m);
}
function fun(n,m){
    for(var i=m;i>=1;--i){
        var tmp=i,
            flag=0,
            j=0,
            eaten=0;
        for(j=0;j<n;++j){
            eaten += tmp;
            tmp = Math.ceil(tmp * 1.0 / 2 );
            if(eaten > m) {
                // flag = 1;
                break;
            }
        }
        if(eaten<=m){
            console.log(i);
            return i;
        }
    }

}
