import "./betslip.scss";
import { MdClear } from "react-icons/md";

const Betslip = () => {
  return (
    <div className="main-betslip">
      <div className="main-betslip-main">
        <h2>Bet slip</h2>
        <div className="match-oods">
          <p>Match oods</p>
          <MdClear />
        </div>
        <div className="match-oods-box">
          <p>Maya joint</p>
          <input type="" />
        </div>
        <div className="amount">
          <input type="" className="rotating-border" />
          <div className="amount-p">
            <span>profit:</span>
            <span>120003</span>
          </div>
        </div>
        <div className="amount-btn">
          <input type="button" value="100" />
          <input type="button" value="1000" />
          <input type="button" value="1000" />
          <input type="button" value="1000" />
          <input type="button" value="1000" />
          <input type="button" value="2000" />
          <input type="button" value="2000" />
          <input type="button" value="2000" />
        </div>
        <div className="betplace">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Betslip;
