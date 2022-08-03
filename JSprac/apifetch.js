// console.log("Brijesh")
// fetch(" http://localhost:3001/empDetails").then((res)=>{return res.json()
// }).then((res)=>{
//     console.log(getUserD(res,"peter@gmail.com"));
//     console.log(getUserFCity(res,"Kolkata"));
//     console.log(getUserFCity(res,"Delhi"));
// });

// function getUserD(response,email){
//     let newrs;
//     response.forEach(user => {
//         if(user.email==email){
//             newrs=user;
//         }
        
//     });
//     return newrs;
// }
// function getUserFCity(response,City){
//     let ufc=[];
//     response.forEach(user=>{
//         if(user.city==City){
//             ufc.push(user);
//         }
//     })
//     return ufc;
// }



// We have three types of https method 1. Post 2. patch and put 
// POST means "create new"
// // PUT means "insert, replace if already exists"
// let users=[
//     {
//         fname:"john",
//         city:"delhi",
        
//     },
//     {
//         fname:"henry",
//         city:"mumbai",
//         phone:309839843
//     },
//     {
//         fname:"harry",
//         city:"chennai",
//         phone:38746384
//     },
//     {
//         fname:"mary",
//         city:"delhi",
//         phone:2389237
//     },
// ]

// console.log(users.filter((item)=>item.city=='mumbai'))
// console.log(users.find(
//     (item)=>item.city==="delhi"
// ))

// let marks=[90,67,90,90]
// console.log(marks.every((item)=>item>=90))
// // let mark=[90,67,90,90]
// // console.log(mark.some((item)=>item>=90))

// // //  fname='User'
// // function greetUser(mobile,reg,fname){ //write non-default args first
// // fname=fname??"User"
// // console.log(`Welcome ${fname} : ${mobile} :${reg}`)
// // }
// // greetUser(92839283,"BE1239283")
// // // 

// console.log(varna)
// var varna;
// console.log(varna)
// varna="Brijesh"
// console.log(varna)
//  let a=fo()
//  console.log(a)
// function fo(){
//     console.log("This is the first function")
// }

// fo()

// let p=new Promise((resolve,reject)=>{
//     let p
//     if(p){
//         resolve("Success")
//     }
//     else{
//         reject("Fail")
//     }
// }).then((res)=> {
//     console.log(res)
//     return res
// }).catch((er)=>{
//     console.log(er)
//     return er}).then((res1)=>console.log(`the outputis ${res1}`))

var a=0
var b=a??20
console.log(`result is ${b}`)

var x = (1 && 2) ?? 3; 
console.log(x)