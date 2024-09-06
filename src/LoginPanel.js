import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Jump from "./Components/Jump";
import DirectorateLoginForm from './Components/LoginPanelContent/DirectorateLoginForm';
import TechnicalLoginForm from './Components/LoginPanelContent/TechnicalLoginForm';
import DistrictProbationLoginForm from './Components/LoginPanelContent/DistrictProbationLoginForm';
import DistrictSamitiLoginForm from './Components/LoginPanelContent/DistrictSamitiLoginForm';
import ProjectLoginForm from './Components/LoginPanelContent/ProjectLoginForm';
import SectorLoginForm from './Components/LoginPanelContent/SectorLoginForm';
import "./LoginPanel.css";

const LoginPanel = () => {
  const [selectedLoginType, setSelectedLoginType] = useState('Directorate');

  const renderLoginForm = () => {
    switch (selectedLoginType) {
      case 'Directorate':
        return <DirectorateLoginForm />;
      case 'tech':
        return <TechnicalLoginForm />;
      case 'DPO':
        return <DistrictProbationLoginForm />;
      case 'DSO':
        return <DistrictSamitiLoginForm />;
      case 'CDPO':
        return <ProjectLoginForm />;
      case 'Sector':
        return <SectorLoginForm />;
      // Add other cases as needed
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='card shadow'>
        <Header />
      </div>

      <Jump/>

      <div className="container col-sm-8 mt-4">
        <form className="form-login" action="" method="POST">
          <h2 className="form-login-heading" style={{ backgroundColor: '#b82929', color: '#fff', padding: '10px', borderRadius: '5px' }}>
            Login Panel <FontAwesomeIcon icon={faLock} />
          </h2>

          <div className="login-options">
            <div className="login-option">
              <input
                type="radio"
                id="directorate"
                name="loginType"
                value="Directorate"
                checked={selectedLoginType === 'Directorate'}
                onChange={() => setSelectedLoginType('Directorate')}
              />
              <label htmlFor="directorate">Directorate Login</label>
            </div>
            <div className="login-option">
              <input
                type="radio"
                id="tech"
                name="loginType"
                value="tech"
                checked={selectedLoginType === 'tech'}
                onChange={() => setSelectedLoginType('tech')}
              />
              <label htmlFor="tech">Technical Login</label>
            </div>
            <div className="login-option">
              <input
                type="radio"
                id="dpo"
                name="loginType"
                value="DPO"
                checked={selectedLoginType === 'DPO'}
                onChange={() => setSelectedLoginType('DPO')}
              />
              <label htmlFor="dpo">District Probation Login</label>
            </div>
            <div className="login-option">
              <input
                type="radio"
                id="dso"
                name="loginType"
                value="DSO"
                checked={selectedLoginType === 'DSO'}
                onChange={() => setSelectedLoginType('DSO')}
              />
              <label htmlFor="dso">District Login (DSO)</label>
            </div>
            <div className="login-option">
              <input
                type="radio"
                id="cdpo"
                name="loginType"
                value="CDPO"
                checked={selectedLoginType === 'CDPO'}
                onChange={() => setSelectedLoginType('CDPO')}
              />
              <label htmlFor="cdpo">Project Login</label>
            </div>
            <div className="login-option">
              <input
                type="radio"
                id="sector"
                name="loginType"
                value="Sector"
                checked={selectedLoginType === 'Sector'}
                onChange={() => setSelectedLoginType('Sector')}
              />
              <label htmlFor="sector">Sector Login</label>
            </div>
          </div>

          {renderLoginForm()}
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPanel;
