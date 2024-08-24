import React from "react";

const RequiredDocuments = ({ title, documents, extraContent }) => {
  return (
    <div className="col-md-4 col-sm-12 mb">
      <div
        className="grey-panel donut-chart"
        style={{ backgroundColor: "#a4f0f0", paddingBottom: "20px" }}
      >
        <div
          className="grey-header"
          style={{ backgroundColor: "#1f9895", color: "#ffffff" }}
        >
          <h3>{title}</h3>
        </div>
        {extraContent && (
          <p style={{ color: "red" }} className="">
            {extraContent}
          </p>
        )}
        <ol style={{ textAlign: "left", fontWeight: 600 }}>
          {documents.map((doc, index) => (
            <li key={index}>
              {doc}
              {doc.includes("प्रारूप यहाँ से डाउनलोड करें।") && (
                <a
                  href="nanda_gaura/doc/born_child_aww_certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm"
                >
                  (प्रारूप यहाँ से डाउनलोड करें।) <i className="fa fa-download"></i>
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RequiredDocuments;
