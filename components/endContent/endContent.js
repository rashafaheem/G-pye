import { Grid } from "@material-ui/core";

function EndContent() {
  return (
    <div>
      <Grid container className="endContentContainer">
        <Grid item xs={12}>
          <h3 className="geniuspyeHeading2">
            <span className="spanText">Geniuspye </span>
            app is available on <br /> all platforms
          </h3>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="storesDiv">
            <img className="playStore" src="./playStore.png" />
            <img className="appStore" src="./appStore.png" />
          </div>
        </Grid>
        <Grid item xs={12} md={9}>
          <img className="screens" src="./screens.png" />
        </Grid>
      </Grid>
    </div>
  );
}

export default EndContent;
