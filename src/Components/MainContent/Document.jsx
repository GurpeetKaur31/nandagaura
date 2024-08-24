import React from 'react';
import vig2024 from '../../images/vig_2024.jpg';

const Document = () => {
  return (
    <div className="col-md-4" style={{ border: '2px solid blue', borderRadius: '8px', padding: '10px' }}>
      <h4 style={{ textAlign: 'center', color: 'green', textDecoration: 'underline' }}>
        <a href="nanda_gaura/doc/shashandesh.pdf" target="_blank" className="btn btn-warning" rel="noopener noreferrer">
          <i className="fa fa-download blinking"></i> नंदा गौरा योजना विषयक शासनादेश <i className="fa fa-file-pdf-o text-success" aria-hidden="true"></i>
        </a>
      </h4>
      <h4 style={{ textAlign: 'center', color: '#1f14a3', textDecoration: 'underline' }}>
        पूर्ण विज्ञप्ति:-
      </h4>
      <center>
        <img src={vig2024} alt="Image1" className="img-responsive" style={{ height: '400px' }} />
      </center>
    </div>
  );
};

export default Document;
