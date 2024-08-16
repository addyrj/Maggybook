import React, { useState } from "react";
import "./style.scss";
import Speaker from "../../assets/speaker.svg";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import { Menu } from "@mui/material";
import logos from "../../assets/logo.png";
import { siderHandlerRef } from "../../common/MainLayout";
import { Link } from "react-router-dom";
import SetBetValue from "../../component/setBetValue/SetBetValue";
import ChangePassword from "../../component/changepassword/ChangePassword"
export const SubNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
    handleClose(); // Close the menu
  };

  const handleCloseChangePasswordModal = () => {
    setIsChangePasswordModalOpen(false);
  };
  return (
    <div className="sub-nav">
      <div className="sub-col-left">
        <div className="marquee-sec">
          <marquee>WELCOME</marquee>
        </div>
        <div className="icon-speak">
          <img src={Speaker} alt="speak" />
        </div>
      </div>
      <div className="sub-col-right">
        <div className="logo-menu">
          <div className="menu-icon" onClick={siderHandlerRef}>
            <HomeIcon />
          </div>

          <div className="logo-icon">
            <Link to={"/"}>
              <img src={logos} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="pts-sec">
          <div className="pts">
            <p>
              pts: <span>0.0</span>
              <span>0.0</span>
            </p>
          </div>
          <div className="demo">
            <div className="demouser">
              <p onClick={handleClick}>
                <PersonIcon />
              </p>
              <p onClick={handleClick}>
                Demo <KeyboardArrowDownIcon />
              </p>
            </div>
            <Menu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <Link to="/Profile">
                <MenuItem onClick={handleClose} disableRipple>
                  Profile
                </MenuItem>
              </Link>
              <Link to="/AccountStatement">
                <MenuItem onClick={handleClose} disableRipple>
                  Account Statement
                </MenuItem>
              </Link>
              <Link to="/CurrentBets">
                <MenuItem onClick={handleClose} disableRipple>
                  Current Bets
                </MenuItem>
              </Link>
              <Link to="/ActivityLog">
                <MenuItem onClick={handleClose} disableRipple>
                  Activity Log
                </MenuItem>
              </Link>

              <MenuItem onClick={handleOpenModal} disableRipple>
                Set Button Value
              </MenuItem>

              <MenuItem onClick={handleOpenChangePasswordModal} disableRipple>
                Change Password
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />
              <Link to="">
                <MenuItem onClick={handleClose} disableRipple>
                  Log out
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </div>
      </div>
      {isModalOpen && <SetBetValue onClose={handleCloseModal} />}
      {isChangePasswordModalOpen && <ChangePassword onClose={handleCloseChangePasswordModal} />}
    </div>
  );
};
