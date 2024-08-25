import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Jump from './Components/MainContent/Jump';
import Note from './Components/MainContent/Note';
import Document from './Components/MainContent/Document';
import LoginForm from './Components/MainContent/LoginForm';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className='card shadow'>
        <Header />
      </div>
      <div>
        <Jump />
        <label style={{ color: 'green', fontWeight: 700, fontSize: '16px' }}>
          <span style={{ color: 'red' }} className="blinking">Important: </span>
          नंदा गौरा योजना अंतर्गत वित्तीय वर्ष 2024-25 हेतु नए आवेदन दिनांक :30-Nov-2024 तक ही भरा जा सकता है। !!!
        </label>
      </div>
      <div className="container-fluid" style={{ 
        marginTop: '20px', 
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,66,209,1) 11%, rgba(129,210,233,1) 66%)',
        padding: '20px'
      }}>
        <div className="row">
          <div className="col-md-4">
            <div className="section-container">
              <Note />
            </div>
          </div>
          <div className="col-md-4">
            <div className="section-container">
              <Document />
            </div>
          </div>
          <div className="col-md-4">
            <div className="section-container">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
