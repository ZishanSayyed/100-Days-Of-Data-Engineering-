/* Activity we have given a object of contact list we need to create a lookup function to retrieve any data form it*/

var contact=[
 {
    "name":"zishan",
    "number":1234,
    "apps":["fb","isnta","gmail"]
 },
 {
    "name":"faizan",
    "number":3434,
    "apps":["fb","snap","gmail"]
 },

 {
    "name":"zak",
    "number":"unknown",
    "apps":["whatsapp","fb","insta"]
 },

 {
    "name":"casey",
    "number":2934,
    "apps":["gmail"]
 },


 
]

console.log(contact);


function lookup(name,prop){
    for(var i=0; i<contact.length;i++){
        if(contact[i].name== name){
            return contact[i][prop] || "No such property"

        }

    }
    return "No such contact";
}

console.log(lookup("zishan","number"));
console.log(lookup("jack","number"));



/// Random Fractions and Whole Numbers

function randomFraction(){
    return Math.random(); /// Math.random will give us any random value which is <0
}

console.log(randomFraction());


function randomWholeNum(){
    return Math.floor(Math.random()*10);  // Math.floor is round number to nearest value 
}
console.log(randomWholeNum());


// Generating random whole number within the range

function randomNumRange(minvalue,maxvalue){
    return Math.floor(Math.random()*(maxvalue -minvalue +1))+ minvalue;  
}
console.log(randomNumRange(4,9));


//parseInt Function use it will convert string number into integer

function convertToInteger(str){
    return parseInt(str);  // parseInt will convert str to integer
}

convertToInteger("57");


// converting binary number into integer 

function binaryToInteger(str){
    return parseInt(str,2);  // parseInt will convert str to integer
}

console.log(binaryToInteger("1011"));


// Ternary Operator

// condition ? statement -if- true;statement is false

function checkEqual(a,b) {
    //return a===b ? true: false  or 
    return a===b
    
}

console.log(checkEqual(2,3));

/// Multiple Ternary Operators


function signCheck(num){
    return num>0 ? "positive": num<0 ? "negative" : "zero"
}

console.log(signCheck(-5))

/* explanation : here we are using nested Ternary operator "return num>0 ? "positive"" if 1st condition get false 

then check num<0 ? "negative"  if that also false then return "zero */




