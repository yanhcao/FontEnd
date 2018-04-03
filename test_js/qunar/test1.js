var lines;
while(lines=read_line()){
    var line=parseInt(lines);
    var val=Math.round(line*0.2);
    var val1=Math.round(line-val-3500);
    var cost=0;
    var money=0;
    if(val1<=1500){
        cost=Math.round(val1*0.03);
    }else if(val1>1500&&val1<=4500){
        cost=Math.round(val1*0.1-105);
    }else if(val1>4500&&val1<=9000){
        cost=Math.round(val1*0.2-555);
    }else if(val1>9000&&val1<=35000){
        cost=Math.round(val1*0.25-1005);
    }else if(val1>35000&&val1<=55000){
        cost=Math.round(val1*0.3-2755);
    }else if(val1>55000&&val1<=80000){
        cost=Math.round(val1*0.35-5505);
    }else if(val1>80000){
        cost=Math.round(val1*0.45-13505);
    }
    money=line-val-cost;
   print(money);
}
var m=read_line();
console.log(compute(m));
