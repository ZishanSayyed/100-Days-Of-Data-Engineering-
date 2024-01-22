/// var vs let

// let wont allow us to declare same name variable twice

var Myname="zak";
var Myname="zishan";


let Myname="zak";
let Myname="zishan";
// we get error Identifier 'Myname' has already been declared but we can trick this with 

let Myname="zak";
Myname="zishan";


/*

1-Var declarations are globally scoped or function scoped, while let declarations are block scoped. 
This means that a variable declared with var can be accessed anywhere within the current function or global scope, 
while a variable declared with let can only be accessed within the block it was declared.


2-Another difference is that var variables are hoisted, while let variables are not. Hoisting means that var variables are declared
at the top of the scope in which they are declared,even if they are declared later in the code. 
Let variables, on the other hand, are not hoisted, so they must be declared before they are used.

3-Finally, var variables can be redeclare, while let variables cannot. 
Redeclare a variable means that you declare the same variable name twice in the same scope. 
This is not allowed with let variables, but it is allowed with var variables.

4-In general, it is best to use let instead of var when declaring variables in JavaScript. 
This is because let variables are block scoped, which can help to prevent errors and make your code more readable.

*/


// const operator 

// it has all the feature of let but we can't reassign it in 
const NAME="zishan" // its best practice to use all cap latter while assigning constant variable 

//  Mutate an Array Declared with const

const C=[2,7,12];

function mutateArray(){
    "use strict";

    //C=[2,5,7];  //if we do this then its will refract error but we can tackle this 
    C[0]=2;
    C[1]=5;
    C[2]=7;
}

mutateArray();
console.log(C);


// Prevent Object Mutation

///Object.freez
/* 
we can use Object.freez function to prevent it form changing it ever
The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing 
properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, 
existing properties cannot be removed, their enumerability, configurability, writability, or 
value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.
*/ 



///  use strict

/*
"use strict"; Defines that JavaScript code should be executed in "strict mode".
You can use strict mode in all your programs. It helps you to write cleaner code,
 like preventing you from using undeclared variables.

 */





