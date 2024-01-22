// Anonymous function

var magic=function(){
    return new Date();
}

magic();


// we can even shortten this 

var magic=()=>{
    return new Date();
}

magic();


// we can even shorten it if we are retuning only 1 verable then we can write it as 

const magic=()=> new Date();
magic();


///  the above code is called Arrow Functions 

var myConcat =function(arr1,arr2){
    return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,5,6]));

// we can rewrite it in terms of Arrow function like 

const myConcat = (arr1,arr2) => arr1.concat(arr2);


console.log(myConcat([1,2],[3,5,6]));

/* Arrow functions are real good with higher order functions such as 
Math,filter & reduce it take functions as arguments for processing collection of data */


// here we can to sq of the positive number from the array 

const realNumbar=[2,0.94,-12,5,-0.982,2,-4,3];

const sqList=(arr)=>{
    const sqInteger=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);

    return sqInteger
}

const sqInteger=sqList(realNumbar);
console.log(sqInteger);


/* Explains  the above code 

in this const sqInteger=arr.filter(num=>Number.isInteger(num) && num>0).map(x=>x*x);

we are passing 2 function 1 will filter out the all integer |num=>Number.isInteger(num) && num>0|

and the other will do the sq of integer | x=>x*x| 

if we write it in usual style then it would be really complex to understand hence we use Arrow function to narrow it down



*/


// Default Parameters


const increment=(function(){
    return function increment(num,value=1){
        return num+value
    };

})();

// here we have set default increment value 1 if any value is not given then it will increment by 1 
console.log(increment(5,2));
console.log(increment(5));






