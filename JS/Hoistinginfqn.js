//Hoisting 
/* There are two phases when we run a code 1.memory execution phase and 2.Code execotion phase
In the memory execution phase a variable first is set to undefined and fqn carries its whole body
so even if the function call is above the actual function that function will execute but it is not true for the variables.
It will work for functions but not function expressions */

greet()
//console.log(a)  this gives output as undefined
//console.log(b)  this gives an error when executed

function greet() {
    console.log("Hi from Meghana")
}