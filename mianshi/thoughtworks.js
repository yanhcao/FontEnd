const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    if(inputArr.length==2){
        console.log(maze(inputArr));
    }
});
// var inputArr=[['3 3'],['0,1 0,2;0,0 1,0;0,1 1,1;0,2 1,2;1,0 1,1;1,1 1,2;1,1 2,1;1,2 2,2;2,0 2,1']];
// maze(inputArr);
function maze(inputArr) {
    var matrixSize=inputArr[0].toString().split(' ').map(e => parseInt(e));
    var connectArr=inputArr[1].toString().split(';');
    var outputTemp=[];
    var outputResult=[];
    if(checkNumber(matrixSize[0]) || checkNumber(matrixSize[1])){
        return 'Invalid number format';
    }else if(matrixSize[0]<=0 || matrixSize[1]<=0){
        return 'Number out of range';
    }else {
        var matrixRow=2*matrixSize[0]+1;
        var matrixCol=2*matrixSize[1]+1;
        for(let i=0;i<matrixCol;i++){
            var tempArr=new Array();
            for(let j=0;j<matrixRow;j++){
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
        for(let j=0;j<connectArr.length;j++){
            var connectCoordArr=connectArr[j].toString().split(' ').toString().split(',').map(e => parseInt(e));
            //坐标对是否是四个值，或者是否按格式空格和逗号分开
            if(connectCoordArr.length!=4 || connectArr[j].toString().split(' ').length==2){
                return 'Incorrect command format';
            }else if(connectCoordArr.length==4){
                for(let l=0;l<4;l++){
                    if(checkNumber(connectCoordArr[l])){    //判断输入的是否为数字
                        return 'Invalid number format';
                    }
                }
            }else {
                var [x1,y1,x2,y2]=[connectCoordArr[0],connectCoordArr[1],connectCoordArr[2],connectCoordArr[3]];
                //判断坐标对是否在输入矩阵大小范围内，和输入坐标是否是负数
                if(x1>matrixSize[0]-1 || x2>matrixSize[0]-1 || y1>matrixSize[1]-1 || y2>matrixSize[1]-1 || x1<0 || x2<0 || y1<0 || y2<0){
                    return 'Number out of range';
                }else if((Math.abs(x1-x2)+Math.abs(y1-y2)) == 1){
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
            }
        }

    }
    for(let k=0;k<outputTemp.length;k++){
        outputResult.push(outputTemp[k].join(''));
    }
    return outputResult.join('\n');
}

//检测是否为数字，或者是否存在
function checkNumber(input) {
    if(parseInt(input).toString()=='NaN') {
        return true;
    }else {
        return false;
    }
}