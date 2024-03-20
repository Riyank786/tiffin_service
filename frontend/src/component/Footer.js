import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import { FaFacebook,FaInstagram, FaPinterest } from "react-icons/fa";


function Footer() {
  return (
    <div className='container-fluid' style={{backgroundColor: "#3a8b6c"}}>
        <div className="container text-white">
        <h1 className='text-center'>TiffinDelights</h1>
      <div className="row mt-3">
        <div className="col-md-4">
            <h4>Quick links</h4>
            <ul>
                <li><Link to="/home"className='text-white text-decoration-none'>Home</Link></li>
                <li><Link className='text-white text-decoration-none'>Tiffins</Link></li>
            </ul>
            
            
        </div>
        <div className="col-md-4">
            <h4>Support</h4>
            <ul>                          
                <li><Link to="/contact"className='text-white text-decoration-none'>Contact Us</Link></li>
                <li><Link className='text-white text-decoration-none'>Terms of Service</Link></li>
                <li><Link className='text-white text-decoration-none'>Privacy Policy</Link></li>
                <li><Link className='text-white text-decoration-none'>Refund Policy</Link></li>
                <li><Link className='text-white text-decoration-none'>Feedback</Link></li>
            </ul>
        </div>
        <div className="social-links col-md-4">
            <h4>Follow us on Social Media</h4>
        <ul type="none">
        <li><Link to="https://www.facebook.com/"><FaFacebook/> Instagram</Link></li>
      <li><Link to="https://www.instagram.com/?hl=en"><FaInstagram/> Facebook</Link></li>
      <li><Link to="https://www.pinterest.com/"><FaPinterest/> Pinterest</Link></li>
   
        </ul>
        </div>
      </div>
      <div className="col-md-4">
        
      </div>
        </div>
      
    </div>
  )
}

export default Footer

