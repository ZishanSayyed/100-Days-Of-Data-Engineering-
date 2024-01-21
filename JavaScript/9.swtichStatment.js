/// Switch Statement 

/* Using Switch to check multiple condition 
1- alpha
2- beta
3- gama 
4- delta

in switch statements we use case and break statements to check each conditions 
here it will check each case one by one and break if its true or jumps to next case until all cases are checked 
Note case use strick equality operator ie ===
*/

function trySwitch(val){
    var result=" ";
    switch(val){

    case 1:
        result="alpha";
        break;

    case 2:
        result="beta";
        break;
    case 3:
        result="gama";
        break;

    case 4:
        result="delta"
        break;
    }

    return result;
}

console.log(trySwitch(5))


/* default option in Switch statement its like else in if statement 
take the above eg the code will return empty " " if we pass value other then 5
but if we can to pass a condition that if any value other then case condition get pass return a some output ans then we default 
*/

function trySwitch(val){
    var result=" ";
    switch(val){

    case 1:
        result="alpha";
        break;

    case 2:
        result="beta";
        break;
    case 3:
        result="gama";
        break;

    case 4:
        result="delta"
        break;

    default:
        result="Not define"
    }

    return result;
}

console.log(trySwitch(5))


/* make switch statment for the given condtion 

1,2,3 = low 
4,5,6 =mid
7,8,9=high
>10=superb 
*/


function muilCondSwitch(val){
    var result=" "

    switch(val){
        case 1:
        case 2:
        case 3:
            result = "Low";
            break;
        case 4:
        case 5:
        case 6:
           result = "mid";
           break;
           
        case 7:
        case 8:
        case 9:
            result="High";
            break;
        
        default:
            result="Superb"
    }

    return result;
}

console.log(muilCondSwitch(15));



/// we use switch instead if else it there is multiple ifelse condition coz its easy to understand 