import React from 'react';
import '../../Styles/RequiredDocuments.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload} from '@fortawesome/free-solid-svg-icons';

const RequiredDocuments = ({ title, documents }) => {
  return (
    <div className="documents-section">
      <h2 className="section-title">{title}</h2>
      <div className="documents-list">
        {documents.map((doc, index) => (
          <div key={index} className="document-item">
            {doc}
            {doc.props.href && (
              <button className="download-btn">
                <FontAwesomeIcon icon={faDownload} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequiredDocuments;
