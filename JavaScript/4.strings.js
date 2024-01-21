// 4- working with Strings 

// Any variable under "hi" or 'hello' or `124` Called string is usually use to define characters data type 

// Escaping quote chart we Use \ \


'this is "double quoted"  string'


// concatenating string
var conString="Hi my name is" +"zishan sayyed";
console.log(conString);


var conString="Hi my name is "
conString +="zishan sayyed";
console.log(conString);


/// Concatenating string with variables

var name="zishan "
var surname=" sayyed"
var myName="my name is " + name + surname;
console.log(myName);

////Appending variables to string
var adjective="awsome ";
var myName=" zishan is ";
myName+=adjective;
console.log(myName);


//// finding length of string
var myName="zishan";
var myNameLength=myName.length;
console.log(myNameLength);


//   [ ] used to find the specific character in the string

var myName="zishan"; 
var firstLetter=myName[0];  //counting in java scripts starts form 0
console.log(firstLetter);


//strings are immutable that means individual character in same string can not be changed  

var myName="zishan"; 
myName[0]="J"; // if we try to change z with h it will show error
console.log(myName);


// getting last letter of the string
var myName="zishan";
var lastLetter=myName[myName.length -1 ];  //
console.log(lastLetter);


//Find the Nth Character
var myName="zishan";
var nthLetter=myName[myName.length -4];  //where n=1,2,3 etc
console.log(nthLetter);


