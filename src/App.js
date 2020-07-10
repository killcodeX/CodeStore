import React from 'react';
import './App.css';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Home from './components/pages/home';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <section className='section'>
          <div className='container'>
            <Home/>
          </div>
        </section>
      <Footer/>
    </div>
  );
}

export default App;
