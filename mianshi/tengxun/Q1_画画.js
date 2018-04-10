//小Q画画，斜率为1 ，涂B，斜率为-1，涂Y；两个重合的为G，原始的为X，输出最少需要画几次
//如：
/*4 4
YXXB
XYGX
XBYY
BXXY*/
//输出3
while(line=readline()){
    var lines = line.split(' ');
    var n = parseInt(lines[0]);
    var m = parseInt(lines[1]);
    var arr=[];
    for(var j=0;j<n;j++){
        arr[j]=[];
    }
    for(var i=0;i<n;i++){
        arr[i]=readline().split('');
    }

    fun(n,m,arr);

}

function fun(n, m, pic)
{
    var res=0;
    var i_temp,j_temp;
    var flag=false;
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            i_temp=i;
            j_temp=j;
            flag=false;
            while(i_temp<n && j_temp>=0 && ('B'==pic[i_temp][j_temp] || 'G'==pic[i_temp][j_temp])){
                if('B'==pic[i_temp][j_temp])
                    pic[i_temp][j_temp]='X';
                if('G'==pic[i_temp][j_temp])
                    pic[i_temp][j_temp]='Y';
                i_temp++;
                j_temp--;
                flag=true;
            }
            if(flag)
                res++;
        }
    }

    for(var i=0;i<n;i++){
        for(var j=m-1;j>=0;j--){
            i_temp=i;
            j_temp=j;
            flag=false;
            while(i_temp<n && j_temp<m && 'Y'==pic[i_temp][j_temp] ){
                if('Y'==pic[i_temp][j_temp])
                    pic[i_temp][j_temp]='X';
                i_temp++;
                j_temp++;
                flag=true;
            }
            if(flag)
                res++;
        }
    }

    console.log(res);
}



