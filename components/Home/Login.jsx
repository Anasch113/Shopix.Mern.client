import React from 'react'
import "./Login.scss";
import  {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import prod1 from "../../assets/products/welcome.png";
const Login = (props) => {

  
  let navigate = useNavigate();
  const handleSubmit = async(e)=>{
   
    e.preventDefault();
    // API CALL
  const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST", 
    
    headers: {
      "Content-Type": "application/json",

      
    },
  
    body: JSON.stringify({email : credentials.email, password: credentials.password}), 
  
   
  });

 
  const json = await response.json()
  console.log(json)
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authToken)
   
    props.showAlert("Login successfully", "success")
    navigate("/")
  }
  else{
    props.showAlert("Invalid email or password", "danger")
  }
  
}
const [credentials, setcredentails] = useState({email : "", password : ""})
  const  onChange = (e)=>{
      setcredentails({...credentials, [e.target.name]: e.target.value})
  }
  return (
  <>

  <div className="main-container">

<div className="left-container">
  <div className="white-container">
    <div className="bg-image">
      
    </div>
   

   <div className="content">
    <span className="title">SHOPIX.</span>
<span className="desc">Robson Street, Vancouver, British Columbia, 1012810801</span>

   </div>
  </div>
</div>




<div className="right-container">

<div className="upper-heading">

  <span className="welcome"><img src={prod1} alt="" /></span>
  <span className="below-welcome">Login with your account</span>
</div>


<form action="" onSubmit={handleSubmit}>
<div className="email-section">
<span className="email-text">Email</span>
<div className="email-input-section">
  <input name='email' className='email-input' onChange={onChange} value={credentials.email} type="email" placeholder='Enter your Email' />
  <span className="email-placeholder">
  </span>

</div>
<span className="email-text">Password</span>
<div className="email-input-section">
  <input name='password' onChange={onChange} value={credentials.password} className='email-input' type="password" placeholder='Enter Your Password' />
  <span className="email-placeholder">
  </span>

</div>
</div>

<div className="btn-sec">
  <button type='submit' className='btn'><p>Login</p></button>
  <span  className="text"></span>
</div>
</form>


</div>

  </div>
  </>
    
  )
}

export default Login
