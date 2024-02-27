import React from 'react'
import './Navbar.css';
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='app__navbar app_bg'>
      <div className='app__navbar-links'>
            <ul className='app__navbar-links_list'>
                  <li className='p__opensans'><a href="#home">Home</a></li>
                  <li className='p__opensans'><a href="#recipes">Recipes</a></li>
                  <li className='p__opensans'><a href="#favorites">Favorites</a></li>
                  <li className='p__opensans'><a href="#contribute">Contribute</a></li>
                  <li className='p__opensans'><a href="#about">About Us</a></li>
            
            </ul>
            <div className='app__navbar-icons'>
              <CiSearch className='app__navbar-icons_i'/>
              <FaHeart className='app__navbar-icons_i'/>
              <IoMdPerson className='app__navbar-icons_i'/>
            </div>
      </div>
      {/* <div className='header_title'>
         BE THE CHEF OF YOUR KITCHEN
      </div>
      <span className='header_text'>From Breakfast to Dinner, We Have You Covered</span> */}
       <div className='header_title'>
         Culina Share
      </div>
      <span className='header_text'>BE THE CHEF OF YOUR KITCHEN</span>
        </div>
        
     
            
    
  )
}

export default Navbar