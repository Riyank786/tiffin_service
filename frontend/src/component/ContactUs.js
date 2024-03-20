import React, { useState } from "react";
import "./Contact.css"; // You can create a CSS file for styling
import Navbar from "./Navbar";
import Footer from "./Footer";
function ContactPage() {
  // State for form fields
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // // Handle form input changes
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can add code here to send the form data to your backend or perform other actions
  //   console.log("Form Data:", formData);
  // };

  return (
    <>
    <Navbar/>
    <div className="main-cont"><div className="contact-container " style={{"marginBottom":"4%","marginTop":"8%"}} >
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Reach out to us!</p>
      <form action="mailto: ddobariya55@gmail.com">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className=" d-block m-auto rounded-pill" value="Send Email">Send message</button>
      </form>
    </div></div>
    <Footer/>
    </>
    
  );
}

export default ContactPage;
