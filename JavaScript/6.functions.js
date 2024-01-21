/// function allow us to create reusable code 

function myfunction(){

    console.log("this is function");   ////every thing in {} is run every time we call function 
}

myfunction(); /// here we are calling function which we have created



////Passing arguments in function

//any value which is pass in () is called parameters

function add(a,b){
    console.log(a + b);
}

add(5,10);

////Local Scope variables 

/// a variable which is define in a function and its specific to to use in that function only then its call Local scope 

/* in this example we have define myVar variable within the function name LocalScope
 there for the scope of myVar is only limited to function LocalScope myVar dose not exist out of this function*/
function LocalScope(){

    var myVar=5;
    console.log(myVar);
}

LocalScope(); ///hence when we call the function we see output as 5
console.log(myVar); // but the we try to see it outside of the function then it reflect error 


/// Global Scope variable 

//  a variable that can be use anywhere its does not restricted to one specific function

var myVar=10;

function add(a){
    
    console.log(a+ myVar);
}

add(1);

function subtract(b){
    console.log(b-myVar);
}

subtract(11);

/// here we are using same variable in 2 different function its called global scope variable 


/// we can give global and local by same name but when we call function then it will give preference to local function 1st eg:

myOutfit="T-shirt";

function myCloths() {
    
    return myOutfit;
}

console.log(myCloths());


// but if we define a local var within the function the let see what happen
myOutfit="T-shirt";

function myCloths() {
    var myOutfit="shirt";
    return myOutfit;
}

console.log(myCloths());  // when i am call the function myCloths the it will give output of local variable over global scope variable
console.log(myOutfit);



/// return in function

// we can get value with return statement

function mulit(num){
    return num * 8;
}

console.log(mulit(4));  

///Understating undefine value returned from a function

var sum=10

function addthree(){

    sum= sum + 3;
    //sum+=3  we can so this as well

    //return sum;   //if we comment return the we get output as undefine
}

console.log(addthree());  // here we haven't specified what to return hence we are getting undefine value as a out put



/* let create a function that will store values in array form backward and remove 1st value form it 
As a example of store inventory where new items places in last so that older items can we sold first */

var myItems=[1,2,3,4,5,6]  // here we define a array of items

function myInventory(arr,newItem){

    arr.push(newItem);  //to add new item in last
    return arr.shift(); // to remove 1st item form myItems
}

console.log("Before : " + JSON.stringify(myItems));
console.log(myInventory(myItems,7));
console.log("After : " + JSON.stringify(myItems));


/// Booleans a data type which give as values as True or False 

function Booleans(){
    return false;
}


