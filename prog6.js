//Return median of two sorted arrays of same size 
//Using anonymous function

var getMedian=function(arr1, arr2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = arr2[0];
            break;
        }
 
        
        else if (j == n)
        {

            m1 = m2;
            m2 = arr1[0];
            break;
        }
        
        if (arr1[i] <= arr2[j])
        {
            m1 = m2;   // Store the prev median
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2;   //Store the prev median 
            m2 = arr2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 
//Start of execution

var array1 = window.prompt("1st array(anonymous execution)").split(" ");
var array2 = window.prompt("2nd array").split(" ");
var arr1=array1.map(Number);
var arr2=array2.map(Number);

var n1 = arr1.length;
var n2 = arr2.length;
if (n1 == n2)
    console.log("The median is "+ getMedian(arr1, arr2, n1));
else
    console.log("Doesn't work for arrays of unequal size");

//Using iife 

var array3 = window.prompt("1st array(iife execution)").split(" ");
var array4 = window.prompt("2nd array").split(" ");
var arr3=array3.map(Number);
var arr4=array4.map(Number);

var n3 = arr3.length;
var n4 = arr4.length;
if (n3 != n4)
console.log("Doesn't work for arrays of unequal size");
else
(function(){
    {
        var i = 0; 
        var j = 0; 
        var count;
        var m1 = -1, m2 = -1;
     
        for (count = 0; count <= n3; count++)
        {
            
            if (i == n3)
            {
                m1 = m2;
                m2 = arr4[0];
                break;
            }
     
            
            else if (j == n3)
            {
    
                m1 = m2;
                m2 = arr3[0];
                break;
            }
            
            if (arr3[i] <= arr4[j])
            {
                m1 = m2;   // Store the prev median
                m2 = arr3[i];
                i++;
            }
            else
            {
                m1 = m2;   //Store the prev median 
                m2 = arr4[j];
                j++;
            }
        }
     
        console.log("The median is " + (m1 + m2)/2);
    }
     
})(arr3,arr4,n3)

