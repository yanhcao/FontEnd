var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal:false
});
/*
4 4
1 2
2 1
2 3
1 0
2
1 2
3 0
*/


var data = [];
var id = [];
rl.on('line', function(line){
    data.push(line);
    var array = data[0].split(' ');
    var nodeNum = parseInt(array[0]);
    var edgeNum = parseInt(array[1]);


    if(data.length == edgeNum+2+parseInt(data[edgeNum+1])){
        var count = 0;


        for(var i=0; i<nodeNum; i++){
            id.push(i);
        }
        for(var i=1;i<edgeNum+1;i++){
            var start = data[i].split(' ')[0];
            var end = data[i].split(' ')[1];
            union(start,end);
        }

        var jiedian = data.slice(edgeNum+2);

        for(var i=0;i<jiedian.length;i++){
            var start = jiedian[i].split(' ')[0];
            var end = jiedian[i].split(' ')[1];
            var con = connected(start,end);
            if(con){
                count++;
            }

        }
        console.log(count);
        id = [];
        data = [];
    }
});

function find(p) {
    while(id[p] != p) {
        p = id[p];
    }
    return p;
}

function union(p,  q) {
    var qRoot = find(q);
    var pRoot = find(p);
    if(qRoot == pRoot)
        return;
    id[pRoot] = qRoot;

}

function connected(p,  q) {
    return find(p) == find(q);
}