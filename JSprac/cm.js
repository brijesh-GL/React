let cm=document.querySelector(".contact-container");

fetch(" http://localhost:3001/empDetails").then((res)=>{return res.json()})
.then((res)=>{
    console.log(res)
    placeD(res)}).catch((err)=>console.log(err))

 
    function placeD(Data){
      let out="";
      for(var x in Data){

       
      
        out+=`
        <div class="col-sm-3">
        <div class="card">
          <div class="card-body ">
         <h2>${Data[x].fname}</h2>
         <p> ${Data[x].email} </p>
          <p>${Data[x].city} </p> 
           
            <a href="#" class="btn btn-primary">Delete</a>
            <a href="#" class="btn btn-primary">Edit</a>
          </div>
          </div>
        </div>
       
      `
      }
      cm.innerHTML=out;
    }