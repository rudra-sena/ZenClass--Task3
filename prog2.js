//  Convert all the strings to title caps in a string array 
//Using anonymous function

var str=window.prompt("Enter the string(Anonymous execution)");
var toUpper = function(str){
    var str1=str.toLocaleUpperCase();
    console.log(str1);
}
toUpper(str);

//Using iife
var str1=window.prompt("Enter the string(iife execution)");
(function(){
    console.log(str1.toLocaleUpperCase());
})(str1)
