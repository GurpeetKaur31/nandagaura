import React, { useState } from 'react';
import '../../Styles/LoginForm.css'; // Import custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMobileAlt, faKey, faFilePdf, faDownload, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Bootstrap components

const LoginForm = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);

  const handleCloseForgotPasswordModal = () => setShowForgotPasswordModal(false);
  const handleShowForgotPasswordModal = () => setShowForgotPasswordModal(true);

  return (
    <div className="col-md-4 section loginform-section">
      <h5 className="blinking" style={{ textAlign: 'center', color: '#f44336', fontWeight: 'bold' }}>
        आवेदन करने हेतु पोर्टल खुला हुआ है।
      </h5>
      <h4 className="loginform-title">
        <u>आवेदक/उपयोगकर्ता लॉगिन फॉर्म</u>
      </h4>
      <button type="submit" className="btn btn-primary fancy-button">
        साइन इन करे / Sign In
      </button>
      <form>
        <div className="form-group">
          <label htmlFor="mobileNo" className="form-label">
            <FontAwesomeIcon icon={faMobileAlt} /> पंजीकृत मोबाइल नंबर / Registered Mobile No.
          </label>
          <input type="text" className="form-control fancy-input" id="mobileNo" placeholder="Enter Mobile Number" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            <FontAwesomeIcon icon={faKey} /> आपका पासवर्ड / Your Password
          </label>
          <input type="password" className="form-control fancy-input" id="password" placeholder="Enter Password" />
        </div>
        <button type="submit" className="btn btn-primary fancy-button">
          <FontAwesomeIcon icon={faLock} /> साइन इन करे / Sign In
        </button>
      </form>
      <div className="loginform-footer">
        <a
          href="/Doc/nandagaura_login_reg_instruction_manual.pdf"
          className="btn btn-info tutorial-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDownload} /> Login/Reg. Tutorial <FontAwesomeIcon icon={faFilePdf} className="text-success" />
        </a>
      </div>

      <div className="registration">
        <div className="registration-right">
          <a href="#" className="registration-link" onClick={handleShowRegisterModal}>
            <strong>
              <u>नए आवेदक/उपयोगकर्ता अभी पंजीकरण करें <FontAwesomeIcon icon={faMousePointer} className="blinking" /></u>
            </strong>
          </a>
          <a href="#" className="registration-link" onClick={handleShowForgotPasswordModal}>
            <strong>
              <u>पासवर्ड भूल गए है? <FontAwesomeIcon icon={faMousePointer} className="blinking" /></u>
            </strong>
          </a>
        </div>
      </div>

      {/* Registration Modal */}
      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal} centered className="fancy-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>नए आवेदक/उपयोगकर्ता पंजीकरण जानकारी</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formMobile">
              <Form.Label>पंजीकरण फॉर्म पर आगे बढ़ने के लिए अपना वैध मोबाइल नंबर दर्ज करें।</Form.Label>
              <Form.Control
                type="text"
                pattern="[6-9]{1}[0-9]{9}"
                title="Enter valid Mobile Number"
                placeholder="Registered Mobile No."
                required
                className="fancy-input"
              />
            </Form.Group>
            <Form.Group controlId="formDistrict">
              <Form.Label>अपने जिले का नाम चुनें</Form.Label>
              <Form.Control as="select" required className="fancy-select">
                <option value="">Choose District Name</option>
                <option value="Almora">Almora</option>
                <option value="Bageshwar">Bageshwar</option>
                <option value="Chamoli">Chamoli</option>
                <option value="Champawat">Champawat</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Haridwar">Haridwar</option>
                <option value="Nanital">Nanital</option>
                <option value="Pauri Garhwal">Pauri Garhwal</option>
                <option value="Pithoragarh">Pithoragarh</option>
                <option value="Rudraprayag">Rudraprayag</option>
                <option value="Tehri Garhwal">Tehri Garhwal</option>
                <option value="Usnagar">Usnagar</option>
                <option value="Uttarkashi">Uttarkashi</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegisterModal} className="btn-custom">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="btn-custom">
            जानकारी दर्ज करे
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Forgot Password Modal */}
      <Modal show={showForgotPasswordModal} onHide={handleCloseForgotPasswordModal} centered className="fancy-modal">
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title>पासवर्ड भूल जाने की स्थिति में पासवर्ड रीसेट फॉर्म</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formForgotPasswordMobile">
              <Form.Label>पंजीकृत मोबाइल नंबर दर्ज करें।</Form.Label>
              <Form.Control
                type="text"
                pattern="[6-9]{1}[0-9]{9}"
                title="Enter valid Mobile Number"
                placeholder="Registered Mobile No."
                required
                className="fancy-input"
                maxlength="10"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForgotPasswordModal} className="btn-custom">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="btn-custom">
            जानकारी दर्ज करे
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginForm;
