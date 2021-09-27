import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="headerDiv">
        <Grid container className="appBarGrid2">
          <div className="logo-nav2">
            <Grid item xs={12} className="itemsGrid2">
              <ul className={click ? "nav-options active" : "nav-options"}>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">GENIUS TEST</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">COURSES</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">VIRTUAL LAB</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">EXAM CRACKER</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#" className="geniusCoder">
                    GENIUS CODER
                  </a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">GENIUS SCHOLER</a>
                </li>
                <li className="option" onClick={closeMobileMenu}>
                  <button className="joinNowButton">JOIN NOW</button>
                </li>
              </ul>
            </Grid>
          </div>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseIcon className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Header2;
