import "./login.scss";
import { MdClear } from "react-icons/md";

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-button">
          <h2>Login</h2>
          <button onClick={onClose} className="close-button">
            <MdClear />
          </button>
        </div>
        <div className="login-modal">
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">UserName</label>
              <input
                type="text"
                id="username"
                name="userId"
                placeholder="Enter Username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <button type="submit">Reset password</button>
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

export default Login;
