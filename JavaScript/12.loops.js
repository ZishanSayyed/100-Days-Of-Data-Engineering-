/* loops allow us to run same code over and over until the final conditions get satisfied  */

// 1- While loop //


var myArray=[]

var i=0; // initiate 
while(i<5  /* when to stop */) { 
    myArray.push(i);
    i++;  // what to do
}

console.log(myArray);


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




