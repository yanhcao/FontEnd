// var n=7;
for(var n=1;n<10;n++){
    var temp=n;
    var num=0;
    while (temp){
        if(temp&1){
            num++;
        }
        temp=temp>>1;
    }
    console.log(num+'<br/>');
}
