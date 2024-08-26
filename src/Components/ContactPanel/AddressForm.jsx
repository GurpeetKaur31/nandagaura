import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const AddressForm = () => (
  <div style={{
    background: '#1f14a3',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '1',
    margin: '10px'
  }}>
    <form>
      <h2 style={{
        textAlign: 'center',
        fontSize: '1.4em',
        marginBottom: '20px'
      }}>ADDRESS</h2>
      <button style={{
        background: '#1f14a3',
        color: 'white',
        border: 'none',
        padding: '15px',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.2em',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> ICDS office, Dehradun, U.K
        <br />
        Near Nanda ki chowki, Chakrata Road, Dehradun
      </button>
    </form>
  </div>
);

export default AddressForm;
