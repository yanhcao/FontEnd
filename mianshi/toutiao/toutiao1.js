const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var m, n;
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = inputArr[0].split(',');
    var M=parseInt(nLine[0]);
    var N=parseInt(nLine[1]);
    m = M;
    n = N;
    if (inputArr.length == (m+1)) {
        var arr = inputArr.slice(1);
        var newArr=[];
        for(let i=0;i<m;i++){
            var subArr=arr[i].split(',').map(e=>parseInt(e));
            newArr.push(subArr);
        }
        var blankArr=[];
        for(let i=0;i<m;i++){
            var subarr=new Array();
            for(let j=0;j<n;j++){
                subArr[j]=0;
            }
            blankArr.push(subArr);
        }
        console.log(cal_group(newArr,blankArr).toString());
    }
});
var max_size = -1;


function dfs(seat, visited, r,c,cur_size)
{
    if(r<0||r>=m||c<0||c>=n)
        return;
    if(visited[r][c]>0||seat[r][c]!=1)
    {
        return;
    }
    cur_size++;
    visited[r][c]=1;

    for(var rd=-1;rd<=1;rd++) {
        for(var cd=-1;cd<=1;cd++) {
            var newr = r + rd;
            var newc = c + cd;
            if(rd!=0||cd!=0) {
                if(cur_size > max_size) {
                    max_size = cur_size;
                }
                dfs(seat, visited, newr,newc, cur_size);
            }
        }
    }

}

function cal_group(seat, visited)
{
    var cnt=0;

    for(var i=0;i<m;i++) {
        for(var j=0;j<n;j++) {
            if(visited[i][j]==0&&seat[i][j]==1) {
                cnt++;
                dfs(seat, visited,i,j, 0);
            }
        }
    }
    return [cnt, max_size];
}