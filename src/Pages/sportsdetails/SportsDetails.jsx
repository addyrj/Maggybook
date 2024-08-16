import Footer from "../../layout/footer/Footer";
import React, { useState } from 'react';
import "./details.scss";
import { RxSwitch } from "react-icons/rx";
import TvIcon from "@mui/icons-material/Tv";
import { MdOutlineScoreboard } from "react-icons/md";
import MatchOds from "../../component/matchoods/MatchOds";
import Switch from "@mui/material/Switch";
import Fancy from "../../component/fancy/Fancy";
import {NotFound} from "../../assets/"
import Betslip from "../../component/betslip/Betslip";

const SportsDetails = () => {
  // State to track the switch's state
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  // Function to handle the switch toggle
  const handleToggle = () => {
    setIsSwitchOn((prev) => !prev);
  };

const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div className="sport-details">
      <div className="sport-details-left">
        <div className="match-heading">
          <h1>SRI LANKA WOMEN V MALAYSIA WOMEN</h1>
          <p>2024-07-22 14:00:00</p>
        </div>
        <div className="match-tv">
          <div className="match-tv-main">
            <TvIcon />

            <Switch {...label} checked={isSwitchOn} onChange={handleToggle} />
          </div>
          <p>22/07/2024 03:53:41</p>
          <div className="togal-tv">
            <MdOutlineScoreboard />
            <Switch {...label} />
            <MdOutlineScoreboard />
            <Switch {...label} />
          </div>
        </div>
        {isSwitchOn && (
        <img
          src={NotFound}
          alt="not found"
          style={{ width: '100%', background: 'white' }}
        />
      )}
  


        <MatchOds />
        <Fancy />

        <Footer />
      </div>
      <div className="sport-details-right">
        <Betslip />
      </div>
    </div>
  );
};

export default SportsDetails;
