/* loops allow us to run same code over and over until the final conditions get satisfied  */

// 1- While loop //


var myArray=[]

var i=0; // initiate 
while(i<5  /* when to stop */) { 
    myArray.push(i);
    i++;  // what to do
}

console.log(myArray);

/* 

while(i<5  checks the condition ) { 
    then run rest of the code
    myArray.push(i);
    i++;  // what to do
} 

*/



// 2-for loop //

// the above code can also be written as 

var myArray=[]

for( var i=0; i<5;i++){
    myArray.push(i);
}

console.log(myArray);

/* synopsis of for loop 

for( "initiate conation";"when to stop";"what to do"){
    rest of the code
}

*/



// Even Numbers With a For Loop

var myArray=[]

for( var i=0; i<10;i+=2){
    myArray.push(i);
}

console.log(myArray);


// odd Numbers With a For Loop

var myArray=[]

for( var i=1; i<10;i+=2){
    myArray.push(i);
}

console.log(myArray);


// counting backwards

var myArray=[]

for( var i=10; i>=0;i--){
    myArray.push(i);
}

console.log(myArray);


/// Iterate Through an Array with a For Loop

/* trying to get total for myArray using for loop */

var myArray= [9,18,27,36];
var totalMyArray=0;

for(var i=0; i<myArray.length; i++){
    totalMyArray+=myArray[i]
}

console.log(totalMyArray);

/* explanation:

for(it start form array value 0 ; it goes till the length of array ; it will increment value by 1 to goto next value in array){
    
    totalMyArray+=myArray[i] // it will add up the all the elements in the array 
}

*/


/* Nested for loop */

/* lets try to get product of each element in this given array*/



function muliplyAll(arr){
    var product = 1;

    for(i=0; i<arr.length; i++){
        for(j=0 ;j<arr[i].length ;j++){
            product *=arr[i][j];
        }
    }

    return product
}
var myProd= muliplyAll([[1,2],[3,4],[5,6,7]]);
console.log(myProd);

/* explanation:
 we have created a function that will calculate multiple of the [[1,2],[3,4],[5,6,7]] array as we can its an nested array

 which consist of main array with 3 element then each element has its own array
  we have created a function name muliplyAll which takes arr

  for(i=0; i<arr.length; i++){
        this loop is main array and in this we are passing one more loop for the subarray
        }

    for(j=0 ;j<arr[i].length ;j++){
            product *=arr[i][j]; this is the main calculation where we are * 1st term with 2nd till each term get *
        }

*/



//3- Do while loop

var myArray=[]
var i=10

do{
    myArray.push(i);
    i++;
} while(i<5)

console.log(i,myArray)


/* in the above code what we are trying to do is add number in array, & increment it by 1 till value in array is <5

if we used while loop then it 1st check i is <5 or not if it>5 the we get [] array 

but in do loop it will run 1st command and then check for the condition
in the above code we get value as [10]


*/





