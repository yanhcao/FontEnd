var n=parseInt(readline());
var sum=0;
//var arr=new Array();
var word=new Array();

for(var i=0; i<n; i++){
    word[i]=readline();
}

for(var i=0; i<word.length; i++){
    var fl=word.length;
    var wo=word[i];
    for(var j=0; j<word[i].length;j++){
        var s1=wo.substring(0,word[i].length-1);
        var s2=wo.substring(word[i].length-1);
        wo=s2+s1;
        //arr[j]=wo;
        for(var k=i+1; k<word.length; k++){
            if(wo==word[k]){
                word[k]='';
            }
        }
    }
    if(word.length<fl){
        sum+=1;
    }
}
print(sum);