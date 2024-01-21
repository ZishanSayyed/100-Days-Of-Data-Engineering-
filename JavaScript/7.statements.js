// if statement

/// how if statement formulated 

/* 

function Name(Parameter){

    if(Parameter // condition to be checked){
        return // if condition is true
    }

    return //if condition is false 
}


*/

function tureOrFalse(checkTrue){

    if(checkTrue){
        return "Yes, It was True";
    }

    return "No its False";
}

console.log(tureOrFalse(false));


// lets make a condition to check if number is greater then 10

function checkNum(Num){

    if(Num>10){
        return " Number is Greater than 10"
    }

    return "Number is Less then 10"
}

console.log(checkNum(7));



// Else Statement its use to check 2  conditions at a time 

/// how else statement formulated 
/* 

function Name(Parameter){

    if(Parameter // condition to be checked){
        return // if condition is true
    }

    else{
        condition
    }

    return //both condition is false 
}


*/


function statementElse(val){
     var result=" ";

    if(val<5){
        result= "Value is Less then 5";
    } else{
        result= "Value is greater then 5"
    }


    return result;
}

console.log(statementElse(5))


//// Else if statements

function testElseIf(val){

    if (val>15){
        return "Greater than 15"
    } else if(val<5){
        return "value is greater then 5"
    }

    return "between 5 & 15"
}

console.log(testElseIf(7));


/// Order in If else statement


/* we have to make sure the condition is in ascending order eg if you want to check if x is less then 5,10,15 
then make sure you give condition in that specific order
*/


/// chain statement

/* make conditional statement for given condition
num<5 - too small
num<10 - small
num<15 -mid
num<20 -great
num>=20 -Huge
*/

function checkNum(num){
    if(num<5){
        return "Too Small"
    } else if(num<10){
        return "Small"
    } else if (num<15){
        return "Mid"
    } else if(num<20){
        return "Great"
    }

    return "Huge"

}

console.log(checkNum(19));{
    
}




