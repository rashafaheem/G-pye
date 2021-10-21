import Grid from "@mui/material/Grid";

function topContent() {
  return (
    <div>
      <Grid container className="topContentContainer">
        <Grid item xs={12}>
          <img
            className="captainToadImage"
            src="/captaintoad.jpg"
            alt="captainToadImage"
          />
        </Grid>
        <Grid item xs={12} className="topContentGrid">
          <h1 className="title1">Coding Made Easy</h1>
          <Grid item xs={12} className="">
            <p className="subtitle">
              The fun way to learn programming and develop problem-solving &
              critical thinking skills! Ages 5-18
            </p>
          </Grid>
          <Grid item xs={12} className="topGrid">
            <button className="getStartedButton">GET STARTED FOR FREE</button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default topContent;
