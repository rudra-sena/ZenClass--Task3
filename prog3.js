//  Sum of all numbers in an array
//Using anonymous function

var array=prompt("Enter the array(anonymous execution)");
var array1=(array.split(" "));
var add=function(arr){
    var sum=0;
    for(i in arr){
        
        sum+= parseInt(arr[i]);
    }
    return sum;
}

var result= add(array1);
console.log(result);

//Using iife

var array2=prompt("Enter the array(iife execution)");
var array3=(array2.split(" "));
(function(){
    var sum1=0;
    for(i in array3){
        sum1+= parseInt(array3[i]);
    }
    console.log(sum1);
})(array3)