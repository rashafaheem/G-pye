import { Card, Grid } from "@mui/material";

function LongCard(props) {
  return (
    <divv>
      <Grid container>
        <Grid item xs={12}>
          <Card className="longCard">
            <h3 className="title2">Lorem Ipsum</h3>
            <p className="subtitle2">
              Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem
              Ipsum Lorem Ipsum Lorem
            </p>
            <h3 className="title2">Lorem Ipsum</h3>
            <p className="subtitle2">
              Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem
              Ipsum Lorem Ipsum Lorem
            </p>
            <Card className="cardFooterPaper" elavation={0}>
              <h3 className="footerTitle">JOIN NOW</h3>
            </Card>
          </Card>
        </Grid>
      </Grid>
    </divv>
  );
}

function ImageCard(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Card className="imageCard">
            <div className="cardImageDiv">
              <img className="cardImage" src={props.cardImage} />
            </div>
            <div className="allContents">
              <h3 className="ageTitle">{props.ageTitle}</h3>
              <p className="subtitle3">{props.subtitle3}</p>
              <p className="subtitle4">{props.subtitle4}</p>
              <p className="subtitle5">{props.subtitle5}</p>
              <p className="subtitle5">{props.subtitle6}</p>
              <p className="subtitle5">{props.subtitle7}</p>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

function ThirdContent() {
  return (
    <div>
      <Grid container className="thirdContentContainer" spacing={3}>
        <Grid item xs={12}>
          <h3 className="superHeading2">
            Get the <span className="spanText">Innovative Learning</span>{" "}
            Advantage
          </h3>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            className="cardHeaderPaper"
            style={{ background: "linear-gradient(#ACDBFC, #56A2D9)" }}
          >
            <Grid item xs={5}>
              <h3 className="paperTitle">Best Teachers</h3>
            </Grid>
            <Grid item xs={7} className="scrs">
              <img className="src1" src="./Ellipse.png" />
            </Grid>
          </Card>
          <LongCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            className="cardHeaderPaper"
            style={{ background: "linear-gradient(#FA90B7, #F59186)" }}
          >
            <Grid item xs={5}>
              <h3 className="paperTitle">Practice Test</h3>
            </Grid>
            <Grid item xs={7} className="scrs">
              <img className="src1" src="./Ellipse 6.png" />
            </Grid>
          </Card>
          <LongCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            className="cardHeaderPaper"
            style={{ background: "linear-gradient(#DBFEE5, #78D294)" }}
          >
            <Grid item xs={5}>
              <h3 className="paperTitle">Innovative LMS</h3>
            </Grid>
            <Grid item xs={7} className="scrs">
              <img className="src1" src="./Ellipse 7.png" />
            </Grid>
          </Card>
          <LongCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <Card
            className="cardHeaderPaper"
            style={{ background: "linear-gradient(#FA90B5, #F59186)" }}
          >
            <Grid item xs={5}>
              <h3 className="paperTitle">Virtual Labs</h3>
            </Grid>
            <Grid item xs={7} className="scrs">
              <img className="src1" src="./Ellipse 6.png" />
            </Grid>
          </Card>
          <LongCard />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="imageCardHeaderDiv">
            <Card
              className="imageCardHeader"
              style={{ background: "#7562A8" }}
            />
          </div>
          <ImageCard
            cardImage="screen (1).png"
            ageTitle="Ages 5-7"
            subtitle3="Voice instructions"
            subtitle4="Get started with code!
          Solve logic problems
          Create simple apps
          Master coding basics"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="imageCardHeaderDiv">
            <Card
              className="imageCardHeader"
              style={{ background: "#62B24E" }}
            />
          </div>
          <ImageCard
            cardImage="screen (2).png"
            ageTitle="Ages 8-13"
            subtitle3="Drag and drop coding"
            subtitle4="Build apps and games
            Explore STEM projects
            Design Minecraft mods
            Control robots,drones"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="imageCardHeaderDiv">
            <Card
              className="imageCardHeader"
              style={{ background: "#DF6E47" }}
            />
          </div>
          <ImageCard
            cardImage="screen (3).png"
            ageTitle="Ages 5-7"
            subtitle3="Real-world coding"
            subtitle4="JavaScript and Python"
            subtitle5="Web dev with HTML,CSS"
            subtitle6="Learn data structures"
            subtitle7=" Prep for AP Comp Sc."
          />
        </Grid>
        <Grid item xs={12} className="exploreButtonGrid">
          <button className="exploreButton">EXPLORE COURSES </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default ThirdContent;
