import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import RecipeItem from './components/RecipeItem/RecipeItem';
import Chef_Section from './components/Chef_Section/Chef_Section';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <RecipeItem/>
     <Chef_Section/>
     <Connect/>
     <Footer/>
    </div>
  );
}

export default App;
