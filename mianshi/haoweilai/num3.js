const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (input) {
    var line = input.split(' ').map(e => parseInt(e));
    var restmp = Array.from(line);
    var set=[];
    for(var i = 0; i < line.length; ++i) {
        if(line[i] == 0) {
            set.push(i);
        }
    }
    var listset = subArr(set);
    for(var i = 0; i < line.length; ++i) {
        if(line[i] == 1) {
            restmp[i] = i;
        }
    }
    var result = [];
    for(var i = 0; i < listset.length; ++i) {
        var tmp = listset[i].split("").map(e => parseInt(e));
        restmp = Array.from(line);
        for(var j = 0; j < tmp.length; ++j) {
            restmp[tmp[j]] = 1;
        }
        var res="";
        for (var k = 0; k < 10; ++k) {
            if(restmp[k] == 1) {
                res+=k;
            }
        }
        result.push(res);
    }

    result.sort();
    for(var i = 0; i < result.length; ++i) {
        console.log(result[i]);
    }
});

function subArr(arr) {
    let list = [''];
    for(var i = 0, len = arr.length; i<len ; i++ ){
        list.forEach(x => {
            list.push(x + arr[i]);
        });
    }
    return list;
}