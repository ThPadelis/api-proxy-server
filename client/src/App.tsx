import React from 'react';
import './App.css';
import Footer from './components/Footer';
import InputCard from './components/InputCard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='flex flex-col min-h-screen bg-all'>
      <Navbar />

      <div className='flex grow items-center justify-center container px-11 mx-auto'>
        <InputCard />
      </div>

      <Footer />
    </div>
  );
}

export default App;
