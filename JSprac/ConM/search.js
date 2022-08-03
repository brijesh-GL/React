const fname=document.getElementById("uname")
const addContact=document.querySelector('.user-form')
const contact=document.querySelector('.contact-container')
const msg=document.getElementById(ms)
addContact.addEventListener('submit',(event)=>{
    event.preventDefault()
    let search=fname.value
    fetch(`http://localhost:3001/empDetails?fname=${search}`).then((res)=>{return res.json()}).then((res)=>printUI(res)).catch((err)=>console.log(err))
}).catch((err)=>err)
function printUI(data){
    if(data){
        let output=''
        data.map((item)=>{
         output+=`<div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h3 id="uiname">${item.fname}</h3>
              <p>${item.email}</p>
              <p>${item.phone}</p>
              <button id="delete-btn" >delete</button>
            </div>
          </div>
          </div>`
        })
        contact.innerHTML=output
        }
    
  else{
     ms.innerHTML="User is not Found"
  }
}
