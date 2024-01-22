//  Rest Operator

/* it allow us to create a function that takes variables number of argument its used by ...*/

const arSum=(function(){
    return function arSum(x,y,z){
        const args=[x,y,z];
        return args.reduce((a,b)=> a + b, 0);
    };
})();

console.log(arSum(1,2,3));

// we can rewrite the above code using Rest operators as additional befit of use rest operator we can now pass n number in the array

const arSum=(function(){
    return function arSum(...args){
        
        return args.reduce((a,b)=> a + b, 0);
    };
})();

console.log(arSum(1,2,3,4,5));


/// Spread Operator 

/*
The spread operator is a JavaScript feature introduced in ES6 that allows
you to expand the elements of an iterable (such as arrays, strings, or objects), 
into another iterable or function call. It is denoted by three dots “ ... ” followed by an expression or an iterable.
*/


const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2[0] = 4;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 2, 3]


const str = "Hello, world!";
const arr = [...str];

console.log(arr); // ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!"]




