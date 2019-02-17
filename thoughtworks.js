//提示信息
console.log('请按照格式输入迷宫大小以及连接cell坐标，运行结束后请按Ctrl+c结束,坐标对末尾不可以有分号');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    if(inputArr.length==2){
        //调用迷宫函数并打印
        console.log(maze(inputArr));
    }
});

//创建迷宫函数
function maze(inputArr) {
    var matrixSize=inputArr[0].split(' ');
    var connectArr=inputArr[1].split(';');
    var outputTemp=[];
    var outputResult=[];
    if(checkNumber(matrixSize[0]) || checkNumber(matrixSize[1]) || matrixSize.length!=2){
        return 'Invalid number format';
    }else if(parseInt(matrixSize[0])<=0 || parseInt(matrixSize[1])<=0){
        return 'Number out of range';
    }else {
        matrixSize=matrixSize.map(e => parseInt(e));
        var matrixRow=2*matrixSize[0]+1;
        var matrixCol=2*matrixSize[1]+1;
        for(let i=0;i<matrixRow;i++){
            var tempArr=new Array();
            for(let j=0;j<matrixCol;j++){
                if(j%2!=0 && i%2!=0){
                    tempArr.push('[R] ');
                }else {
                    tempArr.push('[W] ');
                }
            }
            outputTemp.push(tempArr);
        }
    }
    for(let i=0;i<connectArr.length;i++){
        var connectCoordArr=connectArr[i].split(' ').toString().split(',');
        //坐标对是否是四个值，或者是否按格式空格和逗号分开
        if(connectCoordArr.length ==4 && connectArr[i].split(' ').length == 2){
            for(let l=0;l<4;l++){
                if(checkNumber(connectCoordArr[l])){    //判断输入的是否为数字
                    return 'Invalid number format';
                }
            }
            connectCoordArr=connectCoordArr.map(e => parseInt(e));
            let [x1,y1,x2,y2]=[connectCoordArr[0],connectCoordArr[1],connectCoordArr[2],connectCoordArr[3]];
            //判断坐标对是否在输入矩阵大小范围内，和输入坐标是否是负数
            if(x1>=matrixSize[0] || x2>=matrixSize[0] || y1>=matrixSize[1] || y2>=matrixSize[1] || x1<0 || x2<0 || y1<0 || y2<0){
                return 'Number out of range';
            }else if((Math.abs(x1-x2)+Math.abs(y1-y2)) == 1){  //连通cell为正南正北正东正西方向
                if(x1==x2){
                    var a=Math.min(y1,y2);
                    outputTemp[2*x1+1][2*(a+1)]='[R] ';
                }else if(y1==y2){
                    var b=Math.min(x1,x2);
                    outputTemp[2*(b+1)][2*y1+1]='[R] ';
                }
            } else {
                return 'Maze format error';  //坐标对输入不是正南正北正东正西方向
            }

        }else {
            return 'Incorrect command format';
        }

    }
    for(let k=0;k<outputTemp.length;k++){
        outputResult.push(outputTemp[k].join(''));
    }
    return outputResult.join('\n');
}

//检测是否为整数
function checkNumber(input) {
    if(parseInt(input).toString()=='NaN' || parseInt(input).toString()!=input) {
        return true;
    }else if(isNaN(input)){
        return true;
    }else {
        return false;
    }
}
