import React from 'react';
import logoUK from '../images/uk_logo.jpeg';
import logoICDS from '../images/icds.jpeg';
import "../Styles/Jump.css";

const Jump = () => {
  return (
    <div className="jumbotron row jump-container">
      <div className="col-md-4 text-center">
        <img src={logoUK} alt="UK logo" className="img-responsive logo-img uk-logo" />
      </div>
      <div className="col-md-4 text-center">
        <h2 className="main-title">महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड</h2>
        <h2 className="sub-title">नंदा गौरा योजना</h2>
      </div>
      <div className="col-md-4 text-center">
        <img src={logoICDS} alt="ICDS logo" className="img-responsive logo-img icds-logo" />
      </div>
    </div>
  );
};

export default Jump;
