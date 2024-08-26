import React from 'react';

const LoginTypeSelector = ({ selectedLoginType, onChange }) => {
  return (
    <div className="login-wrap">
      <div className="form-group row">
        {[
          { label: 'Directorate Login', value: 'Directorate' },
          { label: 'Technical Login', value: 'tech' },
          { label: 'District Probation Login', value: 'DPO' },
          { label: 'District Login (DPO)', value: 'DSO' },
          { label: 'Project login', value: 'CDPO' },
          { label: 'Sector login', value: 'Sector' },
        ].map(({ label, value }) => (
          <div className="col-md-4" style={{ textAlign: 'center' }} key={value}>
            <label>{label}</label>
            <input
              type="radio"
              name="login_type"
              value={value}
              checked={selectedLoginType === value}
              onChange={() => onChange(value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginTypeSelector;
