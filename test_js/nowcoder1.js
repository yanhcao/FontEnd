
// line = redline();
var arr=[];
arr[0]=[];
while(var line=readline()){
    arr.push(line);
    if(arr.length==2){

    }
    arr=[];
}
var line=['H','e','l','l','o','!',' ','o','k','!'];
function change(line) {
    var l=line.length;
    var arg=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr=[];
    for(var i=0; i<l; i++){
        var aa=line[i];
        if(aa=='z'){
            arr[i]='a';
            break;
        }
        if(aa=='Z'){
            arr[i]='A';
            break;
        }
        for(var j=0;j<arg.length;j++){
            if(arg[j].indexOf(aa)<0){
                arr[i]=line[i];
            }
            if(arg[j]==line[i]){
                arr[i]=arg[j+1];
            }
        }
    }
    return arr.join('');
}
console.log(change(line));