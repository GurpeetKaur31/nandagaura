import React from 'react';

const DirectorateLoginForm = () => {
  return (
    <form method="POST" action="">
      <h4 style={{ textAlign: 'center' }}>Directorate Login</h4>
      <div className="form-group">
        <label>Login Type:</label>
        <input type="text" name="type" className="form-control" value="Directorate" readOnly />
      </div>
      <div className="form-group">
        <label>Login Password:</label>
        <input type="password" name="password" className="form-control" required pattern="[^'\x22]+" title="Invalid input" />
      </div>
      <div className="form-group">
        <button type="submit" name="dir_login" className="btn btn-info">Login</button>
      </div>
    </form>
  );
};

export default DirectorateLoginForm;
