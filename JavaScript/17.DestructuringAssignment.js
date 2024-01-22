//if we have a obejct like below and we wanted to store each element of this object to new varaibles the we can do this like

var destructedObject={x:3, y:5, z:7};

var x=destructedObject.x;
var y=destructedObject.y;
var z=destructedObject.z;

// or we can do this 

const {x:a, y:b, z:c} = destructedObject; // this is called destructing 


/// destructing for nested object

const tempForcast={
    today:{ min:23 , max:26},
    tomorrow:{ min:22 , max:25}
};

// we trying to retrieve tommowrs max temp

function maxTomorrow(temp){
    "use strict";

    const {tomorrow: {max:maxTomorrowTemp}} = temp;
    return maxTomorrowTemp;

}

console.log(maxTomorrow(tempForcast));


/// destructing from array 

const [x,y, ,z]= [1,2,3,4,5];
console.log(x,y,z)   //1 2 4



/// using rest operator with destructing

const source=[1,2,3,4,5,6,7,8,9];

function removeFirstTwo(list){
    const [, , ...arr]=list;

    return arr;

}

const arr=removeFirstTwo(source);
console.log(arr);
console.log(source);


// destructing as a function parameter

const stats= {
    max:24,
    min:20,
    mode:21,
    median:22,
    avg:22.5
}

const half=(function(){
    return function half(stats){
        return(stats.max + stats.min) /2;
    }


})();

console.log(stats);
console.log(half(stats));

// we can sorten this with destructing function as this is commonly use in api calls 


const stats= {
    max:24,
    min:20,
    mode:21,
    median:22,
    avg:22.5
}

const half=(function(){
    return function half({max ,min }){
        return(max + min) /2;
    }


})();

console.log(stats);
console.log(half(stats));