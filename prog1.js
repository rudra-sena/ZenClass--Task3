// Print odd numbers in an array 
//Using anonymous function

var array=prompt("Enter the array(anonymous execution)");
var oddFunc= function(array){
    
    for(i in array){
        if(array[i]%2!==0)
        console.log(array[i]);
    }
}
oddFunc(array);

//Using iife
var array1=window.prompt("Enter an array(iife execution)");
(function(){
    for(i in array1){
        if(array1[i]%2!==0)
        console.log(array1[i]);
    }
})(array1)








 

                  
 

