import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// import './Signup.css'; // Custom CSS for additional styling
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [role,setRole]=useState("customer")
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const[confirmPassword,setConfirmPassword]=useState("");
     const [phoneNumber, setPhoneNumber] = useState(""); // New phone number state
      const [address, setAddress] = useState(""); 
     const navigate=useNavigate();
     const [phoneNumberError, setPhoneNumberError] = useState("");


  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(phoneNumber.length)
    try {
      if (phoneNumber.length == 10) {
        setPhoneNumberError(''); // Clear the error if the phone number is valid
      } else {
        setPhoneNumberError('Phone number must be at least 10 characters long');
        return;
      }
      console.log(role,name,sellerName,email,password,confirmPassword,phoneNumber,address)
   let result = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`,{
    method:'post',
    body:JSON.stringify({role,name,sellerName,email,password,confirmPassword,phoneNumber,address}),
    headers:{
      'content-Type':'application/json'
    },
  }
   );
   result=await result.json()
   console.log(result);
   if(result){
     navigate('/login');
     alert("register sucessfully");
   }
    } catch (error) {
       console.log(error);
    }
   
  
 }
  
 
  return (
    <div className="container-fluid"
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-vector/fruit-vegetables-background_23-2148497857.jpg?w=740&t=st=1695718195~exp=1695718795~hmac=ce28be1ae27a88287e3c0ffa1b6a25dc025f082fafc294e070cf911b56aac35f')",
        minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundSize: "cover"
    }}
    >
      <div className="scona row justify-content-center">
        <div className="col-md-5 ">
          <div className="card bg-dark text-white">
            <div className="card-header text-center fs-4">Sign Up</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>

              <div className="d-flex mb-2">
  <div className="form-check">
  <input className="form-check-input" type="radio" name="role" id="radioCustomer" value={"customer"} onChange={(e)=>setRole(e.target.value)} defaultChecked />
  <label className="form-check-label text-white" htmlFor="radioCustomer">
    customer
  </label>
</div>

<div className="form-check ms-2">
  <input className="form-check-input" type="radio" name="role" id="radioSeller" value={"seller"} onChange={(e)=>setRole(e.target.value)} />
  <label className="form-check-label text-white" htmlFor="radioSeller">
    seller
  </label>
</div>
</div>
{
  (role==='customer')&&(
    <div className="form-group">
    <label htmlFor="name" className='text-white'>name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={name}
    onChange={(e) => setName(e.target.value)}
    
      className="form-control"
      required
    />
  </div>
  )
}
           {
            (role==='seller')&&(
<div className="form-group">
                  <label htmlFor="name" className='text-white'>sellerName:</label>
                  <input
                    type="text"
                    id="sellerName"
                    name="sellerName"
                    value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  
                    className="form-control"
                    required
                  />
                </div>
            )
           }     
                
                <div className="form-group">
                  <label htmlFor="email" className='text-white'>Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
         onChange={(e) => setEmail(e.target.value)}
         
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className='text-white'>Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword" className='text-white'>Confirm Password:</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                 
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
        <label htmlFor="phoneNumber" className='text-white'>Phone Number:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            setPhoneNumberError(''); // Clear the error when the user types
          }}
          className={`form-control ${phoneNumberError ? 'is-invalid' : ''}`}
          required
        />
        {phoneNumberError && (
          <div className="invalid-feedback">
            {phoneNumberError}
          </div>
        )}
      </div>
                <div className="form-group">
                  <label htmlFor="address" className='text-white'>Address:</label>
                  <textarea
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    rows="2"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2 d-block m-auto"> 
                  Sign Up
                </button>
                <p className="pt-2 text-center"> Already have an account ?<Link to="/login" className='text-white text-decoration-none'>Login!</Link>  </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
