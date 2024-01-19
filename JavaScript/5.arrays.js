// 5- working with Arrays
// can use to store multiple type of data in it 

// [ ]- use to create array and elements in it separated by , u can store mupltie data types in same array 
var array=["My age is", 25];
console.log(array);

//Nest Array:

// when an array store arrays in it then its called mulit dimensional array or nested array 
var nestedArray=[["Hi", 123],[0.1,"this is nasted array"]];
console.log(nestedArray);


///acessing array data with indexing 

var myArray=[50,12,51];
var n2Element=myArray[1]; //retriving 2nd element for the array 
console.log(n2Element);


///Modify Array Data

// we can modify array by [] 
var myArray=[50,12,51];
console.log(myArray);
myArray[1]=90; // replacing 1st element of myArray by 90
console.log(myArray);

// Access Multi-Dimensional Arrays

var nestedArray= [[1,2,3],[4,5,6],[7,8,9],[[10,11,12]],13,14];
var data=nestedArray[0][0]; ///1st 0 is to identity 1st element of main array 0 is 1st element in the [1,2,3] array
console.log(data);


//let try to retrieve 11 
var nestedArray= [[1,2,3],[4,5,6],[7,8,9],[[10,11,12]],13,14];
var data=nestedArray[3][0][1];
console.log( data);

/// appending new data in array 
var myArray=[50,12,51];
myArray.push("hi");
console.log(myArray);

myArray.push(["happy",123,40]);
console.log(myArray)
//push element add new data in end of the existing array


///Maniulating Arrays removing items from array pop()
var myArray=[50,12,51];
var removeElement=myArray.pop(); //it will remove last element of array for myArray

console.log(myArray);
console.log(removeElement);

var nestedArray= [[1,2,3],[4,5,6]]
var removElement=nestedArray.pop();
console.log(removElement);


// we can use shift() function to remove 1st element of the array 
var myArray=[50,12,51];
var remove1stElement=myArray.shift(); 
console.log(myArray);


/// unshift() element add new data in start of the existing array

var myArray=[50,12,51];
myArray.unshift("hello");
console.log(myArray);


var myList=[["apple",5],["milk",2],['banana',5]];
console.log(myList);
