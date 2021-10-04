import { Card, Grid, Paper } from "@mui/material";

function LongCard(props) {
  return (
    <divv>
      <Grid container>
        <Grid item xs={12}>
          <Card className="longCard">
            <Grid item xs={12}>
              <Card className="cardHeaderPaper">
                <Grid item xs={5}>
                  <h3 className="paperTitle">{props.paperTitle}</h3>
                </Grid>
                <Grid item xs={7} className="scrs">
                  <img className="src1" src={props.src1} />
                  <img className="src2" src={props.src2} />
                </Grid>
              </Card>
            </Grid>
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
            <Card
              className="imageCardHeader"
              // styles={{ background: "linear-gradient(#ACDBFC, #56A2D9);" }}
            ></Card>
            <div className="cardImageDiv">
              <img className="cardImage" src={props.cardImage} />
            </div>
            <h3 className="ageTitle">{props.ageTitle}</h3>
            <p className="subtitle3">{props.subtitle3}</p>
            <p className="subtitle4">{props.subtitle4}</p>
            <p className="subtitle5">{props.subtitle5}</p>
            <p className="subtitle5">{props.subtitle6}</p>
            <p className="subtitle5">{props.subtitle7}</p>
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
          <LongCard
            paperTitle="Best Teachers"
            src1="./Ellipse.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <LongCard
            paperTitle="Practice Test"
            src1="./Ellipse 6.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <LongCard
            paperTitle="Innovative LMS"
            src1="./Ellipse 7.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <LongCard
            paperTitle="Virtual Labs"
            src1="./Ellipse 6.png"
            // src2="./world.png"
          />
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} md={4}>
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
