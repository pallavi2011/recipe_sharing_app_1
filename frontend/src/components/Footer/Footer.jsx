import React from 'react'
import './Footer.css';
import { FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='app__recipe-footer section__padding'>
        <div className='subscribe-details'>
            <h1>Stay up-to-date with our latest pastry recipes.</h1>
            <h1> Subscribe now!</h1>
            <form className='input'>
                <input placeholder='Email' type='email' className='input__box'/>
                <button className='input_submit'>Subscribe</button>
            </form>
            
        </div>
        <div className='footer-links'>
            <div className='app-links'>
                <h2 className='logo'>CulinaShare</h2>
                <span className='download-text'>Download Now :</span>
                <div className='links'>
                    <FcAndroidOs size={50}/>
                    <FaApple size={50} color='white'/>
                </div>
                
            </div>
            <div className='app-links'>
                <h3>COMPANY</h3>
                <a>About</a>
                <a>Team Chef</a>
                <a>Investor Relations</a>
                <a>For Artist</a>
                <a>For Podcasters</a>
                <a>Advertise</a>
            </div>
            <div className='app-links'>
            <h3>USEFUL LINKS</h3>
                <a>Recipes</a>
                <a>Send Gift</a>
                <a>Redeem</a>
                <a>Legal</a>
                <a>Help</a>
                <a>Corporate Gift card</a>
            </div>
            <div className='app-links'>
                <h3>SOCIALIZE WITH ANGHAMI</h3>
                <div className='social-media-links'>
                    <BsFacebook size={40} color='blue'/>
                    <FaInstagram size={40} color='purple'/>
                    <BsTwitter size={40} color='#699BF7'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer