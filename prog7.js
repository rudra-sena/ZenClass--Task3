//  Remove duplicates from an array 
//Using anonymous

var removeDuplicate = function(arr,n)
{
        var mp = new Map();
   
        for (i = 0; i < n; i++)
        {
   
            
            if (mp.get(arr[i]) == null){

            
                console.log(arr[i]);
   
            // Insert the element in the hash map
                mp.set(arr[i], true);
            }
        }
}
 

var array=window.prompt("Enter the array(anonymous execution)");
var arr=array.split(" ").map(Number);
let n = arr.length;
removeDuplicate(arr, n);

//using iife

var array1=window.prompt("Enter the array(iife execution)");
var arr1=array1.split(" ").map(Number);
var n1 = arr1.length;
 
(function(){
    var mp = new Map();
   
        for (i = 0; i < n1; i++)
        {
   
            
            if (mp.get(arr1[i]) == null){

            
                console.log(arr1[i]);
   
            // Insert the element in the hash map
                mp.set(arr1[i], true);
            }
        }
})(arr1,n1)