//  Rotate an array by k times and return the rotated array
// Using anonymous function

var rightRotate = function(a, n, k)
{
 

    k = k % n;
    var newArr= new Array;
 
    for (i = 0; i < n; i++) {
        if (i < k) {
 
            newArr.push(a[n + i - k]);
        }
        else {
 
            
        newArr.push(a[i - k]);
        }

    }
    console.log("The rotated array is ", newArr);
}
var arr=window.prompt("Enter the array(anonymous execution)");
var array=arr.split(" ").map(Number);
var N = array.length;
var K = window.prompt("Enter number of rotations- k");
 
rightRotate(array, N, K);

//using iife
var arr1=window.prompt("Enter the array(iife execution)");
var a=arr.split(" ").map(Number);
var n1 = a.length;
var k1 = window.prompt("Enter number of rotations- k");
(function(){
    k1 = k1 % n1;
    var newArr= new Array;
 
    for (i = 0; i < n1; i++) {
        if (i < k1) {
 
            newArr.push(a[n1 + i - k1]);
        }
        else {
 
            
        newArr.push(a[i - k1]);
        }

    }
    console.log("The rotated array is ", newArr);
})(a,n1,k1)