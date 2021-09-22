import Grid from "@mui/material/Grid";

function topContent() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <img
            className="captainToadImage"
            src="/captaintoad.jpg"
            alt="captainToadImage"
          />
          {/* <Grid container> */}
          <Grid item xs={12} className="topContentGrid">
            <h1 className="title">Coding Made Easy</h1>
            <p className="subtitle">
              The fun way to learn programming and develop problem-solving &
              critical thinking skills! Ages 5-18
            </p>
            <Grid item xs={12} className="topGrid">
              <button className="getStartedButton">GET STARTED FOR FREE</button>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Grid>
    </div>
  );
}

export default topContent;
