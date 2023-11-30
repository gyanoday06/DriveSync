import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"; 
import userImage from "../assets/user.png"; 
import userImage2 from "../assets/drivesync-high-resolution-logo-transparent.png"; 

const NavigationBar = ({ isSearchPage }) => {
  const [option, setOption] = useState(false);
  const handleProfileClick = () => {
    setOption(!option);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/homepage">
            <img src={userImage2} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          {!isSearchPage && ( 
            <Link to="/searchpage" className="navbar-item">
              Search
            </Link>
          )}
          <Link to="/publishpage" className="navbar-item">
            Publish a Ride
          </Link>
          <div className="navbar-item" onClick={handleProfileClick}>
            <img src={userImage} alt="User" className="user-image" />
          </div>
          {option && (
            <Link to="/" className="navbar-item-logout">
              LOGOUT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
