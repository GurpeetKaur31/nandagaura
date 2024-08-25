import React from 'react';
import '../../Styles/RequiredDocuments.css';

const RequiredDocuments = ({ title, documents, pdfLinks }) => {
  return (
    <div className="documents-section">
      <h2 className="section-title">{title}</h2>
      <ul className="documents-list">
        {documents.map((doc, index) => (
          <li key={index} className="document-item">
            {doc}
            {/* Add download button with a link to the corresponding PDF */}
            {pdfLinks[index] && (
              <a
                href={pdfLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                प्रारूप यहाँ से डाउनलोड करें।
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequiredDocuments;
