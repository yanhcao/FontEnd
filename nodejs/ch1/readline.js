const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// rl.question('你觉得Node.js中文网怎么样？',(answer)=>{
//     //对答案进行处理
//     console.log(`多谢你的反馈：${answer}`);
// rl.close();
// });
var data=[];
//rl.on('line',function (line) {
    rl.on('line',(line)=> {
        // data.push(line);
        console.log(line);
        //  var res=[];
        //  var temp=[];
        //  var index=0;
        //  temp[0]=0;
        //  for(var i=1;i<arr.length;i++){
        //      while(index>-1 && arr[i]>arr[(temp[index])]){
        //          res[(temp[index])]=arr[i];
        //          index--;
        //          // console.log('in  '+i+' '+index);
        //          // console.log(res);
        //      }
        //      index++;
        //      temp[index]=i;
        //
        //      // console.log('outer  '+i+' '+index);
        //  }
        //  console.log(res);
        // //rl.close();
    });
