import { Card, Grid } from "@material-ui/core";

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
        <div className="whiteContainerDiv">
          <Grid container className="whiteContainer">
            <Card className="exploreCard2" elevation={0} />
            <Card className="exploreCard" elevation={0}>
              <Grid container className="">
                <Grid item xs={12} md={6} className="cardContentDiv">
                  <h3 className="cardContent">
                    Endless possibilities with our online coding classes for
                    kids
                  </h3>
                  <button className="bookButton">BOOK A FREE LIVE CLASS</button>
                </Grid>
                <Grid item xs={12} md={6} className="webMainGrid">
                  <div className="webDiv">
                    <div>
                      <Grid item xs={6} className="webGrid">
                        <img className="web" src="./web (1).png" />
                        <p className="webTitle">Web design</p>
                      </Grid>
                      <Grid item xs={6} className="webGrid">
                        <img className="web" src="./web (2).png" />
                        <p className="webTitle">Python Programming</p>
                      </Grid>
                    </div>
                    <div>
                      <Grid item xs={6} className="webGrid">
                        <img className="web" src="./web (3).png" />
                        <p className="webTitle">Artificial Intelligence</p>
                      </Grid>
                      <Grid item xs={6} className="webGrid">
                        <img className="web" src="./web (4).png" />
                        <p className="webTitle">IoT</p>
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default EndContent;
