import React from 'react'
import './RecipeItem.css';
import { CiHeart } from "react-icons/ci";


const RecipeItem = () => {
  return (
    <div className='container section__padding'>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/blueberry-waffles.png')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-1.jpg')} className='profile_img'/>
                <CiHeart className='favorite-icon'/>
           
            
            <h5>Veg Biryani</h5>
            
                <p className='card-content'>
                    Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum

                </p>
           
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/american-cheese-burger.jpg')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-1.jpg')} className='profile_img'/>
           
            
            <h5>Veg Biryani</h5>
            <p className='card-content'>
                    Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum

                </p>
            
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/Crepes.png')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-2.jpg')} className='profile_img'/>
           
            
            <h5>Veg Biryani</h5>
            <p className='card-content'>
            Lorem Ipsum
            Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus 
                </p>
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/blueberry-waffles.png')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-1.jpg')} className='profile_img'/>
           
            
            <h5>Veg Biryani</h5>
            
                <p className='card-content'>
                    Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum

                </p>
           
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/spaghetti-bolognese-recipe.jpg')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-1.jpg')} className='profile_img'/>
           
            
            <h5>Veg Biryani</h5>
            
                <p className='card-content'>
                    Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum

                </p>
           
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    <div className='app__recipe-card'>
        <div className='app__recipe-card_header'>
            <img src={require('../../assets/Tofu-tomato-salad.png')}/>
        </div>
        
        <div className='app__recipe-card_body'>
            
                <img src={require('../../assets/person-2.jpg')} className='profile_img'/>
           
            
            <h5>Veg Biryani</h5>
            
                <p className='card-content'>
                    Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum ipsum Lorem ipsum

                </p>
           
        </div>
        <div className='app__recipe-card_footer'>
            <a className='details-link'>View More..</a>

        </div>


    </div>
    </div>
  )
}

export default RecipeItem