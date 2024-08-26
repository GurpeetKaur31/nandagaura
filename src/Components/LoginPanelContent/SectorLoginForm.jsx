import React, { useState } from 'react';

const SectorLoginForm = () => {
  const [district, setDistrict] = useState('');
  const [sectors, setSectors] = useState([]);
  const [password, setPassword] = useState('');

  const handleDistrictChange = async (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);

    try {
      const response = await fetch('sect_choose.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ district: selectedDistrict }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSectors(data);
    } catch (error) {
      console.error('Error fetching sectors:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { district, password });
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div id="secer">
        <h4 style={{ textAlign: 'center' }}>Sector Login</h4>

        <div className="form-group">
          <label htmlFor="text">Login Type:</label>
          <input type="text" name="type" className="form-control" value="Sector" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="text">District Name:</label>
          <select
            name="district"
            className="form-control"
            value={district}
            onChange={handleDistrictChange}
          >
            <option value="" disabled>
              Choose District Name
            </option>
            {/* Add more options here */}
            <option value="almora">Almora</option>
            <option value="bageshwar">Bageshwar</option>
            {/* More options */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sector"><b>Choose Sector</b></label>
          <select name="sector" required id="sect-list" className="form-control">
            <option value="" disabled>Choose district to show Sector List</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Login Password:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            pattern="[^'\x22]+"
            title="Invalid input"
          />
        </div>

        <div className="form-group">
          <button type="submit" name="sect_login" className="btn btn-info">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default SectorLoginForm;
