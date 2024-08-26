import React from 'react';

const TechnicalLoginForm = () => {
  return (
    <form method="POST" action="">
      <h4 style={{ textAlign: 'center' }}>Technical Dept. Login</h4>
      <div className="form-group">
        <label>Login Type:</label>
        <input type="text" name="type" className="form-control" value="Technical Department Login" readOnly />
      </div>
      <div className="form-group">
        <label>Login Password:</label>
        <input type="password" name="password" className="form-control" required pattern="[^'\x22]+" title="Invalid input" />
      </div>
      <div className="form-group">
        <button type="submit" name="tech_login" className="btn btn-info">Login</button>
      </div>
    </form>
  );
};

export default TechnicalLoginForm;
