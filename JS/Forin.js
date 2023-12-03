var color = {
    primary : "Red",
    secondary : "Blue",
    ternary : "White"
}

for(var i in color) {    //i gives the keys present in the color object
     console.log(i + " -> " + color[i])
}

var a = [12, "abc", 13.3, true]  

for(var i in a) {  // here i gives the indexes of elements in array
    console.log(i + " -> " + a[i])
}