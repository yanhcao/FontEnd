function compare(v1,v2) {
    return v1-v2;
}
// var x=[0,2,0,2];
// var y=[0,2,2,0];
// var x=[0,1,5,6];
// var y=[1,6,0,5];

// var n=parseInt(readline());
// while(line=readline()){
//     for(var k=0;k<n;k++){
//         x[k]=line.split('');
//         y[k]=readline().split('');
//     }
// }

var x=[0,0,7,7];
var y=[0,3,0,3];
console.log('横坐标是：'+x+'纵坐标是：'+y);
var distance=[];
for(var i=0;i<4;i++){
    for(var j=i+1;j<4;j++){
        var dis=Math.sqrt(Math.pow(x[i]-x[j],2)+Math.pow(y[i]-y[j],2));
        distance.push(dis);
    }
}
// console.log(distance);
distance.sort(compare);
console.log(distance);
if(distance[0]>0){
    if(distance[3]<distance[4]){
        if(distance[0]==distance[1]&&distance[1]==distance[2]&&distance[2]==distance[3]&&distance[4]==distance[5]){
            console.log('可以点亮魔法石');
        }else {
            console.log('不能点亮魔法石');
        }
    }
}