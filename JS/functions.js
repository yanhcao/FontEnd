function compute(num1,num2,operator) {
    var res=0;
    if(operator=="+"){
        res=num1+num2;
    }else if (operator=="-"){
        res=num1-num2;
    }else if (operator=="*"){
        res=num1*num2;
    }else if (operator="/"){
        res=num1/num2;
    }
    return res;
}

function printString(str) {
    window.alert("您输入的是"+ str);
}

//递归调用函数自身
function diGui(num) {
    if(num<8){
        diGui(++num);  //递归调用时一定要将++或者--放在前面，否则死循环
    }
    document.writeln(num);
}

//js能够接受任意多个参数
function sum() {
    var sum=0;
    window.alert(arguments.length);
    for(i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    window.alert(sum);
}

//实现金字塔函数
function jinziTa(n) {
    for(i=1;i<=n;i++){
        for(j=1;j<=n-i;j++){
            document.writeln("　");
        }
        for(m=1;m<=(2*i-1);m++){
            document.writeln("＊");
        }
        document.writeln("<br/>");
    }
}

//实现99乘法表
function Multiplication(n) {
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            document.writeln(i+"*"+j+"="+(i*j)+"　");
        }
        document.writeln("<br/>");
    }
}