import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar" style={{ margin: 0, backgroundColor: '#1f14a3' }}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>
            उत्तराखंड सरकार | Gov.t of Uttarakhand
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/" style={{ color: 'white' }}><i className="fa fa-home"></i></Link></li>
          <li><a href="https://wecd.uk.gov.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><u>Official Website</u> <i className="fa fa-external-link"></i></a></li>
          <li><Link to="/admin" style={{ color: 'white' }}>Login(Admin) <i className="fa fa-user"></i></Link></li>
          <li><Link to="/contact" style={{ color: 'white' }}>Contact Us <i className="fa fa-sign-in"></i></Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
