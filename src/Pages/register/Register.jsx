import "./register.scss";
import { MdClear } from "react-icons/md";
import images from "../../assets/whatsapp.png";

const Register = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay_n">
      <div className="modal-content_n">
        <div className="modal-button_n">
          <h2>Register</h2>
          <button onClick={onClose} className="close-button_n">
            <MdClear />
          </button>
        </div>
        <div className="login-modal_n">
          <div className="whatsapp-box">
            <span>Register as New User</span>
            <h4>Get your instant ID from whatsapp</h4>

            <div className="whatsapp-icon">
              <img src={images} alt="whatsapp" />
              <div className="click-here">click here</div>
            </div>
          </div>
          <div className="or_text">
            <div></div>OR<div></div>
          </div>

          <form className="form_n">
            <div className="form-group_n">
              <div className="half-width">
                <label htmlFor="username">UserName</label>
                <input
                  type="text"
                  id="username"
                  name="userId"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <div className="half-width">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile"
                  required
                />
              </div>
            </div>
            <div className="form-group_n">
              <div className="half-width">
                <label htmlFor="new-password">New Password</label>
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  placeholder="new Password"
                  required
                />
              </div>
              <div className="half-width">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              </div>
              <div className="form-group_n"style={{width: "60%"}}>
              <div className="half-width">
              <label htmlFor="odds-comm">Odds Comm.</label>
              <input type="text" id="odds-comm" readOnly value="2" />
              </div>
              <div className="half-width">
              <label htmlFor="fancy-comm">Fancy Comm.</label>
              <input type="text" id="fancy-comm" readOnly value="2" />
              </div>
              </div>
     
         
            <div className="form-check">
              <input type="checkbox" id="terms" name="checked" defaultChecked />
              <p className="terms">
                I am at least 18 years of age and I have read, accept and agree
                to the Terms and Conditions, Responsible Gaming, GamCare,
                Gambling Therapy
              </p>
            </div>
            <button type="submit" className="btn-submit">
              Submit
            </button>
            <button type="button" className="btn-submit">
              Login With Demo Id
            </button>
            <p className="recaptcha">
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
