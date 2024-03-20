import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";

function About() {
  return (
   <> <Navbar/> 
   <div className="row" style={{ margin: "150px" }}>
   <div className="col-lg-6">
     <h1> welcome to our website </h1>{" "}
     <p className="fs-5 pt-2">
       {" "}
       The‘ TiffinDelights’(Tiffin Service Marketplace) is an online platform
       that allows users to search and order homemade meals from local tiffin
       service providers.Ours aims to provide users with an easy and
       convenient way to find and order healthy, home - cooked meals while
       supporting local businesses.this website designed to be user -
       friendly, accessible, and responsive to meet the needs of a diverse
       user base.{" "}
     </p>{" "}
     <Button variant="success"> Learn more </Button>{" "}
   </div>
   <div className="col-lg-6">
     <img
       src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
       alt=""
       className="img-fluid"
     />
   </div>{" "}
 </div>
 <Footer/></>
  );
}

export default About;
