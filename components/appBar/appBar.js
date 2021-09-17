import React from "react";
import Grid from "@mui/material/Grid";

function appBar() {
  return (
    <div>
      <Grid container className="appBarGrid1">
        <Grid item xs={1} className="itemsGrid1">
          <a className="headerMenu">LEARN</a>
        </Grid>
        <Grid item xs={1} className="itemsGrid1">
          <a className="headerMenu">EDUPYE</a>
        </Grid>
        <Grid item xs={1} className="itemsGrid1">
          <a className="headerMenu">EDUSHOP</a>
        </Grid>
        <Grid item xs={1} className="itemsGrid1">
          <a className="headerMenu">EDUOS</a>
        </Grid>
      </Grid>
      <Grid container className="appBarGrid2">
        <Grid item xs={1.5} className="itemsGrid2" />
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">GENIUS TEST</a>
        </Grid>
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">COURSES</a>
        </Grid>
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">VIRTUAL LAB</a>
        </Grid>
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">EXAM CRACKER</a>
        </Grid>
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">GENIUS CODER</a>
        </Grid>
        <Grid item xs={1.5} className="itemsGrid2">
          <a className="headerMenu">GENIUS SCHOLER</a>
        </Grid>
        <Grid item xs={1} className="itemsGrid2">
          <button className="joinNowButton">JOIN NOW</button>
        </Grid>
      </Grid>
    </div>
  );
}
export default appBar;
