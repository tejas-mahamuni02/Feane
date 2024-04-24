import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-dark text-white'>
      <Container>
        <div className="row mt-5 p-5">
          <div className="col">
            <h2 style={{ fontFamily: "Monotype Corsiva" }} className='mb-3'>Contact Us</h2>
            <h5 ><Link to="/" className='text-white'><FaLocationDot /> Location</Link></h5>
            <h5><Link to='/' className='text-white'><BsFillTelephoneFill /> Call 01 1234567890</Link></h5>
            <h5> <Link to='/' className='text-white'><FaEnvelope /> feane@gmail.com</Link></h5>
          </div>
          <div className="col">
            <h2 style={{ fontFamily: "Monotype Corsiva" }} className='mb-3'>Feane</h2>
            <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
            <h3><Link to='/' className='text-white'><FaFacebook /></Link>
              <Link to='/' className='text-white'><AiFillTwitterCircle /></Link>
              <Link to='/' className='text-white '><TiSocialLinkedinCircular className='bg-white text-dark rounded-circle' /></Link>
              <Link to='/' className='text-white'><FaInstagram className='rounded-circle p-1 bg-white text-dark' /></Link>
              <Link to='/' className='text-white'><FaPinterest /></Link>
            </h3>

          </div>
          <div className="col">
            <h2 style={{ fontFamily: "Monotype Corsiva" }} className='mb-3'>Contact Us</h2>
            <p>Everyday</p>
            <p>10.00 Am -10.00 Pm</p>
          </div>
        </div>
        <p className='mt-4'>&copy; 2024 All Rights Reserved By Feane Restaurant</p>
        <p className='pb-2'>&copy;  Distributed By Tejas Mahamuni</p>
      </Container >

    </div >
  )
}

export default Footer
