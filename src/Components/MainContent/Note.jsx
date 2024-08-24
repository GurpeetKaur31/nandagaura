import React from 'react';

const Note = () => {
  return (
    <div className="col-md-4" style={{ border: '2px solid blue', borderRadius: '8px', padding: '10px', maxHeight: '487px', overflow: 'scroll' }}>
      <h4 style={{ textAlign: 'center', color: '#1f14a3', textDecoration: 'underline' }}>
        <u>नंदा गौरा आवेदन पत्र ऑनलाइन भरने से पूर्व निम्न निर्देशों का भली-भाँति अध्ययन कर लें :-</u>
      </h4>
      <ol>
        <li>आवेदन फार्म में सभी जानकारी पूर्ण रूप से सही भरें, अधूरी एवं गलत जानकारी भरने पर आवेदन निरस्त कर दिया जाएगा।</li>
        {/* Add the rest of the instructions as list items here */}
      </ol>
    </div>
  );
};

export default Note;
