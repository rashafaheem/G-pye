import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { withStyles } from "@mui/material/styles";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="header">
        <Grid container className="appBarGrid1">
          <div className="logo-nav">
            <ul className={click ? "nav-options active" : "nav-options"}>
              <Grid item xs={1} className="itemsGrid1">
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">LEARN</a>
                </li>
              </Grid>
              <Grid item xs={1} className="itemsGrid1">
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">EDUPYE</a>
                </li>
              </Grid>
              <Grid item xs={1} className="itemsGrid1">
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">EDUSHOP</a>
                </li>
              </Grid>
              <Grid item xs={1} className="itemsGrid1">
                <li className="option" onClick={closeMobileMenu}>
                  <a href="#">EDUOS</a>
                </li>
              </Grid>
            </ul>
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
      <div className="header2">
        <Grid container className="appBarGrid2">
          <div className="logo-nav2">
            {/* <ul className={click ? "nav-options active" : "nav-options"}> */}
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">GENIUS TEST</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">COURSES</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">VIRTUAL LAB</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">EXAM CRACKER</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">GENIUS CODER</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <a href="#">GENIUS SCHOLER</a>
              {/* </li> */}
            </Grid>
            <Grid item xs={1.5} className="itemsGrid2">
              {/* <li className="option" onClick={closeMobileMenu}> */}
              <button className="joinNowButton">JOIN NOW</button>
              {/* </li> */}
            </Grid>
            {/* </ul> */}
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

export default Header;
