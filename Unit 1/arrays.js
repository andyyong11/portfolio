var array = new Array();

array[0] = 1;
array[1] = 2;
array[2] = 3;
array[3] = 4;


// Creating a function which will add one to the parameter
let addOne = function(number) {
    number += 1;
    console.log(number);
}; 

// Defining a function to check if a number is odd
function odd(expression, number) {
    if (number % 2 === 0) {
        expression(number); 
        // If the number is even, call the expression function
    } else {
        console.log("the number is odd"); 
        // If the number is odd, log a message to the console
    }
}

// Iterating over each element in the array
for (let index in array) {
    odd(addOne, array[index]); 
}