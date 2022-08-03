
// Q-1
var fname;
var admin;
fname="john"
admin=fname;
alert(`"${admin}"`);



// Q-2
const r="#FF0000"

const b="#234740"
const w="#FF0000"
const g="#234740"
console.log(`${r},${b},${w},${g}`)

// Q-3


// Q-4
// A
  var re=5>4  //True
console.log(re)
document.write(re)
//B 
var res="apple">"pineapple" //False
console.log(res)
// C
console.log("2" > "12") // True

// D
console.log(undefined == null)  //True 
console.log(undefined === null) //False

// Level-2
// Q-1
do{
   var N= prompt("Enter a numer");
}
while(N<=100)

// Q-2
var n=prompt("Enter a number to check")
if(n>0)
alert(1)
else if(n<0)
alert(-1)
else
  alert(0)

//   Q-3
 function min(a,b){
    var s=a<=b?a:b;
    alert(`min is ${s}`)
 }
 min(2,5)
 min(3,-1)
 min(1,1)

//  Level-3

let arr = [5, 3, 8, 1,6,2];
var ca=0;
var cb=0
function filte(arr,a,b){
    arr.forEach(element => {
        if(element>a)
        ca++;
        
    });
    arr.forEach(key => {
        if(key<b)
        cb++;
        
    });
  
}
filte(arr,4,2);
alert(`${ca},${cb}`)

// levl-3 (another way)


// level-4
function camelize(str){
    
var a=str.split("-")
var stri=a[0];
    for(var k=1;k<a.length;k++){
        stri+=a[k].charAt(0).toUpperCase()+a[k].slice(1);
    }
    console.log(stri)
}

camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")
// var st="list-style-image"
// var a=st.split("-")
// var stri=a[0];
// console.log(a[1].charAt(0))


// Q-2
let strings = ["React Js", "JavaScript", "React Js", "JavaScript",
"JavaScript", "JavaScript", "React Js", "React Js"
];
function unique(strings) {
   
    // let uniques = strings.filter((item, i, ar) => ar.indexOf(item) === i);
    let uniques=[...new Set(strings)]
  
    console.log(uniques)
 

   }
 
   alert( unique(strings) );

//    Q-3
function truncate(str,le){
   if(str.length<=le){
    console.log(str);
   }
   else{
       var strk=str.slice(0,20)+"..."
       console.log(strk)
   }
}
truncate("Hi everyone!", 20)
truncate("What I'd like to tell on this topic is:", 20)
 