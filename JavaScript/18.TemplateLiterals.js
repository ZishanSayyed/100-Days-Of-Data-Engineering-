// creating Strings using Template Literals

/*
Template literals are a new form of making strings in JavaScript that add a lot of powerful new capabilities, 
such as creating multi-line strings more easily and using placeholders to embed expressions in a string.
Template literals are delimited with backtick (`) characters, allowing for multi-line strings, string interpolation 
with embedded expressions, and special constructs called tagged templates.
*/ 

// Multi-line strings
const name = 'John Doe';
const age=24
const message = `Hello, ${name}! i am ${age} years old. `;

console.log(message)

/* 
adv: we can make multi line string
we can '' or "" within the string 
we can use variables within the string
*/


//  Simple Fields

/* 
write concise objects Declaration using simple Fields

*/

const createPerson=(name,age,gender) =>{
    return {
        name:name,
        age:age,
        gender:gender
    }
}

console.log(createPerson("zishan",24,"M"));

/* the above function is an arrow function if we pass name age and gender it will return us and object
easy way to do the same */


const createPerson=(name,age,gender) =>({name,age,gender});

console.log(createPerson("zishan",24,"M"));





