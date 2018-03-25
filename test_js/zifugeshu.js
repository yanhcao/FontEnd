var lines = readline();
var line = "";
while(lines != null){
    line = line + lines.toLowerCase();
    lines = readline();
}
var arr = line.split("");
var c = arr[arr.length - 1];
arr.length = arr.length - 2;

var count = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i] == c)
        count++;
}

print(count);