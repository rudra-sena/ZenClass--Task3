//  Return all the palindromes in an array 
//Using anonymous function

var array=window.prompt("Enter the array(anonymous execution)");
var palindrome= function(arr){
    var j=arr.length-1;
    for(i=0;i<j/2;i++){
        var a=arr[i];
        var b=arr[j-i];
        if(a!=b)
        return false;
    }
    console.log(arr);
    
        
    
}
var array1=array.split(" ");
for(i in array1){
    var result=palindrome((array1[i]));
    
}

//Using iife

var array2=window.prompt("Enter the array(iife execution)");

(function(){
    var array3=array2.split(" ");
    for(i in array3){
        var j=array3[i].length-1;
        for(k=0;k<j/2;k++){

            var a=array3[i][k];
            var b=array3[i][j-k];
            if(a!=b)
            break;
        }
        if(a==b)
        console.log(array3[i]);    
    }
    
})(array2)
