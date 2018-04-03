var lines;
while(lines=read_line()){
    var data=[];
    var N=prseInt(lines.split(' ')[0]);
    var M=parseInt(lines.split(' ')[1]);
    var p;
    var q;
    var a;
    var b;
    var count=0;
    for(var i=0;i<M;i++){
        p[i]=read_line().split(' ')[0];
        q[i]=read_line().split(' ')[1];
        union(p[i],q[i]);
    }
    var Q=read_line();
    for(var j=0;j<Q;j++){
        a[j]=read_line().split(' ')[0];
        b[j]=read_line().split(' ')[0];
        if(connected(a[j],b[j])){
            count++;
        }
    }
    console.log(count);