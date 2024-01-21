// Getting boolean as a out put in function 

function checkLessthen(a,b){

    return a<b
}

console.log(checkLessthen(15,7))


// we can return anytime for function like break 

function earlyReturn(a,b){

    if(a<0 || b<0){
        return undefined;
    }

    return a+b;
}

console.log(earlyReturn(1,-7)); 
/* here function check if a,b is >0 then only it will go to main execution if condition is true then it stop right after */ 


/// counting cards

var count=0;

function cc(card){
    
}