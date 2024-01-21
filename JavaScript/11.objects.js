/* objects are similar to arrays but only difference is that instead of indexes we use properties to retrieve particular data 
 its like a dictionary in R we use {} to define an object 
 its has key and value pairs 

 it can contain any data type in it array,num etc
*/


var ourDog={
    "name":"Puppy",
    "age":"3",
    "bread":"street",
    "legs":"4",
    "color":"black",

}

console.log(ourDog)


/// checking specif property form object  

var dogColor=ourDog.color; /// use obejectName.keyName to get require information 
var dogName=ourDog.name;
console.log(dogColor);
console.log(dogName);



// Bracket Notation also be used we usually use [] notation when key name has spacing in it 

var newObj={
    "cust name":"Hi my name is zishan",
    "cust age":24,
    "cust buys":["apple","soap","chocolate"]

}

console.log(newObj["cust buys"]);


/// update object property 


var newObj={
    "cust name":"zishan",
    "cust age":24,
    "cust buys":["apple","soap","chocolate"]

}

newObj["cust name"]="Jack";  // to updating name form zishan to jack
console.log(newObj);


/// Add New Properties to Object

var newObj={
    "cust name":"zishan",
    "cust age":24,
    "cust buys":["apple","soap","chocolate"]

}

newObj["cust id"]=123;  // to updating name form zishan to jack
console.log(newObj);


/// Delete Properties from Object

var newObj={
    "cust name":"zishan",
    "cust age":24,
    "cust buys":["apple","soap","chocolate"]

}

newObj["cust id"]!=123;  // to updating name form zishan to jack
delete newObj["cust age"]; // another way to delete key from object 
console.log(newObj);

///Objects for Lookups

/* we can use key value pair instead of switch statements  */

function team(val){

    var result=" "

    var lookUp={
        "Sachin" : "Open",
        "Raj": "one down",
        "jack":"Open bowling",
        "tony":"caption",
        "md":"spin"
    };

    result=lookUp[val];

    return result;
}

console.log(team("tony"));


// Testing Objects for Properties

var myObj={
    gift: "abc",
    pet:"dcf",
    bed:"xyz"

};


function checkObj(checkProp){

    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];

    } else {
        return "Not found"
    }
}

console.log(checkObj("gift"));


/// Manipulating Complex Objects

///Nested Objects
/* this is an example of nested objects where three objects can be seen "inside" which stored in "car" 
and car is itself is a part of object name mySotrage */

var myStorage={
    "car":{
        "inside":{
            "my box":"maps",
            "seat":"front"
        },
    "outside":{
        "trunk":"jacket"
    }
    }
}


// lets tey to get data sotred in mybox

var boxValue=myStorage.car.inside["my box"];
console.log(boxValue)


//  Nested Array

/* this is example of nested array where each element of an array is an object & object itself as array in them*/

var myPlants=[
    {type:"flower",
    Name:[
        "rose",
        "tulip",
        "jasmine"
        
    ]
    },

    {
        type:"tree",
        Name:[
            "fir",
            "pine",
            "birch"
        ]
    }

]

// trying to get pine form this nested array
console.log(myPlants[1].Name[1]);




