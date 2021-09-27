import React, { useState } from "react";
import Grid from "@mui/material/Grid";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <div className="header1">
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
        </Grid>
      </div>
    </div>
  );
};

export default Header;
