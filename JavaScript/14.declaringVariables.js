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

3-Finally, var variables can be redeclared, while let variables cannot. 
Redeclaring a variable means that you declare the same variable name twice in the same scope. 
This is not allowed with let variables, but it is allowed with var variables.

4-In general, it is best to use let instead of var when declaring variables in JavaScript. 
This is because let variables are block scoped, which can help to prevent errors and make your code more readable.

*/