import React from 'react';
import '../../Styles/LoginForm.css'; // Import the specific CSS for LoginForm
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMobileAlt, faKey, faFilePdf, faDownload, faMousePointer } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  return (
    <div className="col-md-4 section loginform-section">
      <h5 className="blinking" style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
        आवेदन करने हेतु पोर्टल खुला हुआ है।
      </h5>
      <h4 className="loginform-title">
        <u>आवेदक/उपयोगकर्ता लॉगिन फॉर्म</u>
      </h4>
      <button type="submit" className="btn btn-primary" >
           साइन इन करे / Sign In
        </button>
      <form>
        <div className="form-group">
          <label htmlFor="mobileNo" className="form-label">
            <FontAwesomeIcon icon={faMobileAlt} /> पंजीकृत मोबाइल नंबर / Registered Mobile No.
          </label>
          <input type="text" className="form-control" id="mobileNo" placeholder="Enter Mobile Number" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            <FontAwesomeIcon icon={faKey} /> आपका पासवर्ड / Your Password
          </label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit" className="btn btn-primary">
          <FontAwesomeIcon icon={faLock} /> साइन इन करे / Sign In
        </button>
      </form>
      <div className="loginform-footer">
        <a
          href="/Doc/nandagaura_login_reg_instruction_manual.pdf"
          className="btn btn-info tutorial-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} /> Login/Reg. Tutorial <FontAwesomeIcon icon={faFilePdf} className="text-success" />
        </a>
      </div>

      <div className="registration">
        <div className="registration-right">
          <a href="#" className="registration-link">
            <strong>
              <u>नए आवेदक/उपयोगकर्ता अभी पंजीकरण करें <FontAwesomeIcon icon={faMousePointer} className="blinking" /></u>
            </strong>
          </a>
          <a href="#" className="registration-link">
            <strong>
              <u>पासवर्ड भूल गए है? <FontAwesomeIcon icon={faMousePointer} className="blinking" /></u>
            </strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
