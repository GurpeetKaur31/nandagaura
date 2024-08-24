import React from 'react';
import logoUK from '../../images/uk_logo.jpeg';
import logoICDS from '../../images/icds.jpeg';

const Jump = () => {
  return (
    <div className="jumbotron row" style={{ backgroundColor: 'white', margin: '10px', padding: '0px' }}>
      <div className="col-md-4">
        <img src={logoUK} alt="UK logo" className="img-responsive" style={{ marginLeft: '15px', width: '70px', float: 'right', height: '70px', marginRight: '10px' }} />
      </div>
      <div className="col-md-4">
        <h2 style={{ fontFamily: "'Hind', sans-serif", textAlign: 'center', fontWeight: 600, textDecoration: 'underline', color: 'blue' }}>
          महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
        </h2>
        <h2 style={{ fontFamily: "'Hind', sans-serif", textAlign: 'center', fontWeight: 600, textDecoration: 'underline', color: '#ff0000' }}>
          नंदा गौरा योजना
        </h2>
      </div>
      <div className="col-md-4">
        <img src={logoICDS} alt="ICDS logo" className="img-responsive" style={{ width: '90px', height: '90px' }} />
      </div>
    </div>
  );
};

export default Jump;
