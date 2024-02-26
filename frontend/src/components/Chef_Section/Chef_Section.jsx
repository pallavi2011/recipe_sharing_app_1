import React from 'react'
import './Chef_section.css';
const Chef_Section = () => {
  return (
    <div className='app__recipe-chef section__padding'>
        <div className='app__recipe-details'>
            <img src={require('../../assets/chef-pic.png')} className='chef-pic'/>
            <div className='app__recipe-aboutus-content'>
                <h2 className='about-title'>About Us</h2>
                <p>Join our foodie community and indulge in our recipes</p>
                <p>We are a passionate community of food enthusiasts dedicated to sharing delicious and easy-to-make recipes. Our team of bakers and cooking enthusiasts work tirelessly to bring you the best recipes, helpful tips, and tricks to help you achieve perfect food every time.</p>

            </div>
        </div>
        
    </div>
  )
}

export default Chef_Section