import "./auth.scss";

const AuthSecure = () => {
  return (
    <div className="main-auth-container">
      <div className="auth-container">
        <h2>Secure Auth Varification</h2>
        <p>Home/SecureAuth</p>
      </div>
      <div className="secur-auth">
        <h2>
          Secure Auth Varification status:<span>Disabled</span>
        </h2>
        <p>Please select below option to enable secure auth verification </p>
        </div>
        <div className="btn-group">
          <button className="btn-mobile">Enable using mobile App</button>
          <button className="btn-telegram">Enable Using Telegram</button>
        </div>
      
        <div className="login-password">
        <p>Please enter your login password to continue</p>

          <div className="input-m">
        <input 
                type="password" 
                placeholder="Enter your password" 
              id="password"
                
            />
            <button>Get Connection Id</button>
            </div>
        </div>
<div className="folow-details">
<h2>Please follow below instructions for the telegram 2-step verification</h2>
<p>Find <a href="https://telegram.me/secure_auth_bot" target="_blank" rel="noopener noreferrer">@secure_auth_bot</a> in your telegram and type <span>/start</span> command. Bot will respond to you.</p>
<br />
<p>After this type <span>/connect 6B450240</span> and send it to BOT.</p>
<br />
<p>Now your telegram account will be linked with your website account and 2-Step verification will be enabled.</p>
</div>
    
    </div>
  );
};

export default AuthSecure;
