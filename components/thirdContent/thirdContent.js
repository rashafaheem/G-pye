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
        <Grid item xs={3}>
          <LongCard
            paperTitle="Best Teachers"
            src1="./Ellipse.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={3}>
          <LongCard
            paperTitle="Practice Test"
            src1="./Ellipse 6.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={3}>
          <LongCard
            paperTitle="Innovative LMS"
            src1="./Ellipse 7.png"
            // src2="./world.png"
          />
        </Grid>
        <Grid item xs={3}>
          <LongCard
            paperTitle="Virtual Labs"
            src1="./Ellipse 6.png"
            // src2="./world.png"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ThirdContent;
