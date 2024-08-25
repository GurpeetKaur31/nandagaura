import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className='card shadow'>
        <Header />
      </div>
      <Footer/>
    </Router>
  )
}

export default App