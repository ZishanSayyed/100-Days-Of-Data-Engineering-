/// Equal operate use to check equality of a statement or variable use == to check equality since "=" used in assigning values 

function testEqual(val){

    if (val==12){
        return "Equal";
    }
    return "Does Not Equal"
}

console.log(testEqual("12"));


///Strict equality check we use === equals 

/* difference between equal (==) and strictly equal(===) operator 

    3===3    will return true
    3==="3"  but this will false 

    but 
    3==3 
    3=="3" both return as true 
*/


function comparEqualiy(a,b){

    if(a===b){
        return "Equal"
    }

    return "Not Equal"
}

console.log(comparEqualiy(5,"5"));  //its will be true for ==  its called type conversion 
console.log(comparEqualiy(5,"5")); // it will be false for ===


////  In equality operator its opposite of equality we use !=
//// strict inequality operator its opposite of strick equality operator !=== 


/// Logical Operator like >,<,>=,<=, 

function testLessThan(val){

    if(val<=35){
        return "value is less then 35"
    }

    if(val>=55){
        return "value is Greater then 55"
    }
    return "In Between 35 to 55"
}

console.log(testLessThan(145))


// giving 2 condition as same time && (and) operator  

function logicAnd(val){
    if(val<=35 && val>=25 ){
        return "value is in range of 25-35"
    }

    return "Not in range of 25-35"
}

console.log(logicAnd(26))


/// "||"" operator 

function logicOR(val){

    if (val<10 || val>20){
        return "Outside"
    }

    return "inside"
}

console.log(logicOR(5))












