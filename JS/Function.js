//To define a function use 'function' keyword at the start 
function greet() {
    console.log("Hello")
}

greet()

function mult(a,  b) {   // donot declare it as mult(var a, var b) this gives an error
    console.log(a*b)
    return a*b
}

var r = mult(13, 8)

//function as an expression or also known as anonymous function(nameless fqn)

var add = function(a, b) {
    return a+b
}

console.log(add(4, 9))


