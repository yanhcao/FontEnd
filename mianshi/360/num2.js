var arr1 = readline().split(' ').map(e=>parseInt(e));
var n = arr[0],
    m=arr[1];
var ans=0;
var arr2=readline().split(' ').map(e=>parseInt(e));
var q=parseInt(readline());
for(var i = 0;i < q; i++){
    var lines = readline().split(" ").map(e=>parseInt(e));
    var l=lines[0],
        r=lines[1];
    ans=[...new Set(arr.slice(l,r+1))].length;
    print(ans);
}