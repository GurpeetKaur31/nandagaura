import React from 'react';

const LoginForm = () => {
  return (
    <div className="col-md-4" style={{ border: '2px solid blue', borderRadius: '8px', padding: '10px' }}>
      <h4 style={{ textAlign: 'center', color: '#1f14a3', textDecoration: 'underline' }}>
        <u>आवेदक/उपयोगकर्ता लॉगिन फॉर्म</u>
      </h4>
      <form>
        <div className="form-group">
          <label htmlFor="mobileNo" style={{ fontWeight: 700 }}>पंजीकृत मोबाइल नंबर / Registered Mobile No.</label>
          <input type="text" className="form-control" id="mobileNo" placeholder="Enter Mobile Number" />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ fontWeight: 700 }}>आपका पासवर्ड / Your Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>साइन इन करे / Sign In</button>
      </form>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <a href="#" className="btn btn-info">Login/Reg. Tutorial</a>
      </div>
    </div>
  );
};

export default LoginForm;
