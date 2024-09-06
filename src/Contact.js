import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Jump from './Components/Jump';
import ContactDetails from './Components/ContactPanel/ContactDetails';
import EmailForm from './Components/ContactPanel/EmailForm';
import ContactForm from './Components/ContactPanel/ContactForm';
import AddressForm from './Components/ContactPanel/AddressForm';
import './Contact.css'

function Contact() {
  return (
    <div>
      <div className='card shadow '>
        <Header />
      </div>
      <div>
        <Jump />
      </div>

      <ContactDetails />

      <div className="row" style={{ marginTop: '60px' }}>
        <EmailForm />
        <ContactForm />
        <AddressForm />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
