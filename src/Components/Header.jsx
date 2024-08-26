import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import "../Styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faExternalLinkAlt, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Nav className="navbar-custom">
      <div className='nav-logo-container'>
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
          उत्तराखंड सरकार | Gov.t of Uttarakhand
        </a>
      </div>

      <div className='navbar-links-container'>
        <Link to='/' className="nav-link-custom">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <a href="https://wecd.uk.gov.in/" target="_blank" rel="noopener noreferrer" className="nav-link-custom">
          <u>Official Website</u> <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
        <Link to="/login" className="nav-link-custom">
          Login (Admin) <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link to="/contact" className="nav-link-custom">
          Contact Us <FontAwesomeIcon icon={faSignInAlt} />
        </Link>
      </div>
    </Nav>
  );
}

export default Header;
