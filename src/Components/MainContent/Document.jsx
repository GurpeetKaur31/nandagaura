import React from 'react';
import vig2024 from '../../images/vig_2024.jpg';
import '../../Styles/Document.css'; // Import the specific CSS for Document
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Document = () => {
  return (
    <div className="col-md-4 section document-section">
      <h4 className="document-title">
        <a href="/Doc/shashandesh.pdf" target="_blank" className="btn btn-warning" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faDownload} className="blinking" /> नंदा गौरा योजना विषयक शासनादेश <FontAwesomeIcon icon={faFilePdf} className="text-success" />
        </a>
      </h4>
      <h4 className="document-subtitle">पूर्ण विज्ञप्ति:-</h4>
      <center>
        <img src={vig2024} alt="Image1" className="document-image" />
      </center>
    </div>
  );
};

export default Document;
