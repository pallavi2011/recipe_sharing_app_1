import React from 'react'
import './Connect.css';
const Connect = () => {
  return (
    <div className='app__recipe-connect section__padding'>
        <div className='insta-logo-design'>
            <img src={require('../../assets/instagram-logo.png')} />
            <img src={require('../../assets/insta-logo-img2.png')} className='insta-logo-2'/>
        </div>
        <div className='circular-images'>
            <div className='follow-details'>
                    <h1>Join us :</h1>
                    <h1>On Instagram</h1>
                    <button className='follow-btn'>Follow us</button>
            </div>
            
            <div className='circular-images__item center'>
                <img src={require('../../assets/img-1.png')}/>
            </div>
            <div className='circular-images__item top'>
                    <img src={require('../../assets/img-2.png')}/>
            </div>
            <div className='circular-images__item left'>
                <img src={require('../../assets/img-3.png')}/>
                 </div>
                 <div className='circular-images__item top-left'>
                    <img src={require('../../assets/img-4.png')}/>
                 </div>
                 <div className='circular-images__item right'>
                        <img src={require('../../assets/img-5.png')}/>
                 </div>
                 <div className='circular-images__item right_bottom'>
                        <img src={require('../../assets/img-6.png')}/>
                 </div>
                 <div className='circular-images__item center_left'>
                    <img src={require('../../assets/img-7.png')}/>
                 </div>
                 <div className='circular-images__item center_bottom'>
                        <img src={require('../../assets/img-8.png')}/>
                 </div>
                 
            
        </div>
        <div className='insta-logo'>
            <img src={require('../../assets/insta-logo-img3.png')} className='insta-logo-3' />
        </div>
        
        </div>
   
  )
}

export default Connect