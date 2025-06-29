import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import ContactForm from './components/contactForm';
import TextAbout from './components/textAbout';
import TextContact from './components/textContact';
import TextPrices from './components/textPrices';
import TextWeOffer from './components/textWeOffer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
   {/* <HomePage></HomePage> */}
       <BrowserRouter>
    <HomePage/>
    </BrowserRouter>
    </div>
  );
}

export default App;
