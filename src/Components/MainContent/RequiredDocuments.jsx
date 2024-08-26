import React from 'react';
import '../../Styles/RequiredDocuments.css';

const RequiredDocuments = ({ title, documents }) => {
  return (
    <div className="documents-section">
      <h2 className="section-title">{title}</h2>
      <div className="documents-list">
        {documents.map((doc, index) => (
          <div key={index} className="document-item">
            {doc}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequiredDocuments;
