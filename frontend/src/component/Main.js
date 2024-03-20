import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Main.css"
import Image from 'react-bootstrap/Image';
import surat from '../Images/surat.jpeg'
import vadodara from '../Images/vadodara.jpeg'
import ahemdabad from '../Images/ahm.jpeg'
import anand from '../Images/anand.jpeg'
import {Link} from 'react-router-dom'
import SignUp from './SignUp';
import { useState } from 'react';
function Main() {
  
  return (
    <>
    <div className='container-fluid' style={{backgroundImage:"url('https://img.freepik.com/free-photo/fresh-colourful-ingredients-mexican-cuisine_23-2148254294.jpg?w=1060&t=st=1688505328~exp=1688505928~hmac=69bc50c347cab8e4f347b245ea3710338390a16c350645cfce314849790c09d2')",height:"80vh",backgroundRepeat: "no-repeat",backgroundSize: "cover",position:"relative"}}>
      <div className="container text-center main-content" >
        <h1>TasteTreasure </h1>
        <h2>Get your homemade food delivered</h2>
       <Link to="/signup"><button type="button" class="btn btn-danger ">Get Started</button></Link> 
       
        

      </div>
    </div>  
    <div className="container pt-5">
        <h1 className='text-center'>FIND A TIFFIN SERVICE NEAR YOU</h1>
        <div className="row pt-4">
            <div className='col'>
            <Image src={surat} height='300px' width='300px'/>
            <h2 className='city-name'>Surat</h2>
          </div>
          <div className='col'>

          <Image src={vadodara} height='300px' width='300px'/>
            <h2 className='city-name'>Vadodara</h2>
          </div>
          <div className='col'>
          <Image src={ahemdabad} height='300px' width='300px'/>
            <h2 className='city-name'>Ahemdabad</h2>
          </div>
          <div className='col'>
          <Image src={anand} height='300px' width='300px'/>
            <h2 className='city-name'>Anand</h2>
          </div>
        </div>

      </div>

    <div className="container-fluid custom-bg-5">
      <h1 className='text-center bg-5-text'>Become a TasteTreasure Verified Seller</h1>
    <Link to="/seller"><Button className='d-flex m-auto' variant="danger">Join us</Button></Link> 
    </div>
    </>
    
  )
}

export default Main