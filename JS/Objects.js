//Object is an entity with  a collection of unordered kay-value pairs as attributes or properties

var person = {
    firstName : "Meghana",
    lastName : "Nalla",
    age : 19,
    education : "b-tech",
    friends : ["Sahithi", "Sruti", "Keerthi"],
    address : {
        city : "Hanamkonda",
        pincode : 5090001,
        state : "Telangana"
    }
}

person.college = "BVRITH"   //adds key-value pair to the person object


console.log(person)
console.log(person.address.city)  //Hanamkonda
person.address.pincode = 5009005 //Updation of address
delete person.friends  // friends key-value pair is removed
console.log(person)