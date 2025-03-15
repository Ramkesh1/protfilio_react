import React,{ useState } from 'react'


function Signup() {

let [firstname,setfirstname]=useState('')
let [email,setemail]=useState('')
let [password,setpassword]=useState('')
let [confirm,setconfirm]=useState('')


function pickvalue(event){
    let {name,value}=event.target
    
    if(name="name")setfirstname(value)
    if(name="email")setemail(value)
    if(name="password")setpassword(value)
        if(name="confirm")setconfirm(value)


            console.log(firstname,'ok',email);
}






  return (
    <>
    <div class="container">
  <div class="row ">
    <div class="col-6">
      <label for="">Name</label>
      <input type="name" name="name" id="" onChange={pickvalue}/>
      
    </div>
    <div class="col-6">
      <label for="">Email</label>
      <input type="email" name="email" onChange={pickvalue} />
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <label for="">Password</label>
      <input type="password" name="password" onChange={pickvalue} />

    </div>
    <div class="col-6">
      <label for="">Confirm Password</label>
      <input type="password" name='confirm' onChange={pickvalue}/>
    </div>

    <button type="button">Submit</button>
  </div>
</div>

</>
  )
}



export default Signup