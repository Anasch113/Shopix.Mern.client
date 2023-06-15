import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import prod1 from "../../assets/products/welcome.png";
const SignUp = (props) => {
const navigate = useNavigate()
  const handleSubmit = async(e)=>{
   
    e.preventDefault();
    // API CALL
    const {name, email, password} = credentials;
  const response = await fetch("http://localhost:5000/api/auth/createuser", {
    method: "POST", 
    
    headers: {
      "Content-Type": "application/json",

      
    },
  
    body: JSON.stringify({name, email ,password}), 
  
   
  });

 
  const json = await response.json()
  console.log(json)
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authtoken)
    navigate("/")
    props.showAlert("Account created successfully", "success")
  }
  else{

    props.showAlert("Invalid Credentails", "danger")
  }

}

const [credentials, setcredentails] = useState({ name:"", email : "", password : ""})
  const  onChange = (e)=>{
    setcredentails({...credentials, [e.target.name]: e.target.value})
}
  return (
 <>
 <div className="smain-container">
  <div className="sleft-container">
    <div className="swhite-container">
      <div className="sbg-image">

      </div>
      <div className="scontent">
        <span className="stitle">SHOPIX.</span>
<span className="sdesc">  Robson Street, Vancouver, British Columbia, 1012810801 </span>
      </div>
    </div>
  </div>




<div className="sright-container">
  <div className="supper-heading">
    <span className="swelcome"><img src={prod1} alt="" /></span>
    <span className="sbelow-welcome">Create Your Account Here</span>
  </div>


  <form action=""  onSubmit={handleSubmit}>
  <div className="semail-section">

<div className="small-inputs">
 


      <input name='name' onChange={onChange} type="text" id="name" placeholder='First Name' className='small-email-input' />
       

    
      <input type="text" placeholder='Last Name' className='small-email-input' />
    </div>


    <span className="semail-text">Email</span>
    <div className="semail-input-section">
      <input  type="email" id="email" name='email' onChange={onChange} placeholder='Enter Your Email' className='semail-input' />
    </div>
    <span className="semail-text">Phone Number</span>
    <div className="semail-input-section">
      <input type="text" placeholder='Enter Your Phone Number' className='semail-input' />
    </div>
    <span className="semail-text">Password</span>
    <div className="semail-input-section">
      <input name='password' onChange={onChange} id='password' type="password" placeholder='Enter Your Password' className='semail-input' />
    </div>
    <span className="semail-text">Confirm Password</span>
    <div className="semail-input-section">
      <input type="password" placeholder='Confirm Your Password' className='semail-input' />
    </div>
  </div>





  <div className="sbtn-sec">
  <button type='submit' className='sbtn'><p>SignUp</p></button>
  <span className="stext"></span>
</div>
</form>
</div>



 </div>
 
 
 </>
  )
}

export default SignUp
