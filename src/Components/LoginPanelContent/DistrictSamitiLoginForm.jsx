import React from 'react';

const DistrictSamitiLoginForm = () => {
  return (
    <form method="POST" action="">
      <h4 style={{ textAlign: 'center' }}>District Samiti Office Login</h4>
      <div className="form-group">
        <label>Login Type:</label>
        <input type="text" name="type" className="form-control" value="District" readOnly />
      </div>
      <div className="form-group">
        <label>Choose District for Samiti Login:</label>
        <select name="district" className="form-control">
          <option selected disabled>Choose District Name</option>
          <option value="almora">Almora</option>
          <option value="bageshwar">Bageshwar</option>
          <option value="chamoli">Chamoli</option>
          <option value="champawat">Champawat</option>
          <option value="dehradun">Dehradun</option>
          <option value="haridwar">Haridwar</option>
          <option value="nanital">Nanital</option>
          <option value="pauri">Pauri Garhwal</option>
          <option value="pithoragarh">Pithoragarh</option>
          <option value="rudraprayag">Rudraprayag</option>
          <option value="tehri">Tehri Garhwal</option>
          <option value="usnagar">Usnagar</option>
          <option value="uttarkashi">Uttarkashi</option>
          {/* Add other district options here */}
        </select>
      </div>
      <div className="form-group">
        <label>Login Password:</label>
        <input type="password" name="password" className="form-control" required pattern="[^'\x22]+" title="Invalid input" />
      </div>
      <div className="form-group">
        <button type="submit" name="dso_login" className="btn btn-info">Login</button>
      </div>
    </form>
  );
};

export default DistrictSamitiLoginForm;
