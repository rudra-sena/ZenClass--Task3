//  Return all the prime numbers in an array 
//Using anonymous function

var array=window.prompt("Enter the array(anonymous execution)");
var array1=array.split(" ")
var isPrime= function(arr){
    
    for(i in arr){
        var fac=0;
        for(j=1;j<=arr[i];j++){
            if(arr[i]%j==0)
            fac++;
        }
        if(!(fac>2)&&(arr[i]!=1))
        console.log(arr[i])
    }
}
isPrime(array1);

//Using iife

var array2=window.prompt("Enter the array(iife execution)");
var array3=array2.split(" ");
(function(){
    for(i in array3){
        var fac1=0;
        for(j=1;j<=array3[i];j++){
            if(array3[i]%j==0)
            fac1++;
        }
        if(!(fac1>2)&&array3[i]!=1)
        console.log(array3[i])
    }
})(array3)