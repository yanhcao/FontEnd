function mergeSort(arr,first,last){
    var mid=Math.floor((first+last)/2);
    mergeSort(arr,first,mid);
    mergeSort(arr,mid+1,last);
    var temp=[];
    var i=first;
    var j=mid;
    while (i<=j && j+1<=last){
        if(arr[i]>=arr[j+1]){
            temp.push(arr[j+1]);

        }
    }
}