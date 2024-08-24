import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Jump from './Components/MainContent/Jump';
import Note from './Components/MainContent/Note';
import Document from './Components/MainContent/Document';
import LoginForm from './Components/MainContent/LoginForm';
import RequiredDocuments from './Components/MainContent/RequiredDocuments';

function App() {
  const documentsForSection1 = [
    "कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो",
    "माता / पिता / अभिभावक के हस्ताक्षर",
    "स्थाई निवास प्रमाण पत्र",
    // Add other items here...
  ];

  const documentsForSection2 = [
    "छात्रा की नवीनतम पासपोर्ट साइज फोटो",
    "छात्रा के हस्ताक्षर",
    "माता / पिता/अभिभावक के हस्ताक्षर",
    // Add other items here...
  ];

  const documentsForSection3 = [
    "छात्रा की नवीनतम पासपोर्ट साइज फोटो",
    "छात्रा के हस्ताक्षर",
    "हाईस्कूल का प्रमाण-पत्र।",
    // Add other items here...
  ];
  return (
   <Router>
    <div>
        <div className='card shadow'>
          <Header />
          </div>
        
        <div className="container-fluid" style={{ minHeight: '620px' }}>
          <Jump />
          <label style={{ color: 'green', fontWeight: 700, fontSize: '16px' }}>
            <span style={{ color: 'red' }} className="blinking">Important: </span>
            नंदा गौरा योजना अंतर्गत वित्तीय वर्ष 2024-25 हेतु नए आवेदन दिनांक :30-Nov-2024 तक ही भरा जा सकता है। !!!
          </label>
          <div className="row">
            <Note />
            <Document />
            <LoginForm />
            {/* Add more components or routes as needed */}
          </div>
        </div>
        <div className="container">
      <hr style={{ height: "2px", borderWidth: 0, color: "blue", backgroundColor: "blue" }} />
      <div className="row">
        <div className="col-md-12">
          <h2 style={{ textAlign: "center" }}>आवेदन के लिए अनिवार्य दस्तावेज</h2>
        </div>
        <RequiredDocuments
          title="कन्या के जन्म पर"
          documents={documentsForSection1}
        />
        <RequiredDocuments
          title="बालिका के इंटर उत्तीर्ण करने पर"
          documents={documentsForSection2}
        />
        <RequiredDocuments
          title="नारी निकेतन, अनाथ आश्रम में पलने वाली बालिका के इंटर उत्तीर्ण करने पर"
          documents={documentsForSection3}
          extraContent="उत्तराखण्ड राज्य में स्थापित बालिका निकेतन, नारी निकेतन, अनाथ आश्रम, उत्तराखण्ड राज्य सरकार द्वारा सहायतित अन्य गृहों में पलने वाली"
        />
      </div>
    </div>
        <Footer/>
      </div>
   </Router>
  );
}

export default App;
