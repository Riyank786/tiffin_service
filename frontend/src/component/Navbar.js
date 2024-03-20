import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import MyProfile from "./MyProfile";




function Navbar() {
	const navigate = useNavigate();
	const auth=localStorage.getItem('user');
	const logout = () => {
		localStorage.clear();
		window.confirm("logout confirm");
		navigate("/login");
	  };
	const navRef = useRef();
	// const navigate = useNavigate();
	const user=JSON.parse(localStorage.getItem("data")).name;
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="fixed-top">
      <div><Link to="/home"className="logo fs-5">TiffinDelights</Link></div>
			<div>

      <nav ref={navRef}>
      <Link to="/home">Home</Link>
		<Link to="/about">About</Link>
				<Link to="/contact">Contact Us</Link>
				
				<Link to="/myprofile">My Profile</Link>
				{auth?<Link to="/logout"onClick={logout} to="/login">Logout</Link>:<Link to="/login">Login</Link>
}				
				
				

                  <p className="d-block m-auto">welcome {user}</p>
		{/* <Button variant="danger">Add to Cart</Button> */}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
      </div>
			
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>



    
	);
}

export default Navbar;