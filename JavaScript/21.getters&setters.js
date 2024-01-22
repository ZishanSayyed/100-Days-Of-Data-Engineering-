/* 
In JavaScript, there are two kinds of object properties:

Data properties
Accessor properties



Accessor Property
In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

get - to define a getter method to get the property value
set - to define a setter method to set the property value


*/


const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error


/// set operator 


const student = {
    firstName: 'Monica',
    
    //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah



