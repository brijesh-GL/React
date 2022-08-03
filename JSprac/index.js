let a;
console.log(a);
a=10
console.log(a);
// here equal operator is checking only the value or basically the content inside a variable
let b="10";
if(a==b){
    console.log("equal")
}
else{
    console.log("not equal")
}

// we have === it is going to check value and type both if both matches then only it will return the TRUE

if(a===b){
    console.log("equal")
}
else{
    console.log("not equal")
}

console.log("........")
// Now we have a ternary operator 
let z=a!==b?"equal":"not equal"
console.log(z)

// nullish coalescing opertor :it will check the variable is defined or not if defined it will return the left value otherwise the right value
// except :null and undefined , it will consider everything is defined like "",0, NaN these are defined for Nullish opertor

let w
let x=w??20
console.log(x)
let o=23
x=o??25
console.log(x)


//  function return types and calling
// template-string or String literal

 function getN(Name){
   console.log(`My name is ${Name}`)
}
getN("Brijesh")

// Default Argument in java script must be added at the last 

if(true){
    var k=10
}
console.log(k)

//  scope of the var is through out the code :Global Scope
//  in case of var , we can redeclare and we reassign the value.

// let:we can reassign the value but redeclare is not possible
//  let has the Block Scope

// FUNCTION IN JS 1.NORMAL 2. VAR BASE 3. ARROW FUNCTION(SYNTAX SMALL)
function getD(name){
    console.log(`welcome ${name} `)
}
getD("Brijesh")

let getK=function(name){
    console.log(`Hello ${name}`)
}
getK("Rakesh")
// Arrow function
let getN=(name)=>console.log(`Good night ${name}`)
getN("Sarthak")


