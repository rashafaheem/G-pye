import { Card, Grid } from "@mui/material";

function FourthContent() {
  return (
    <div>
      <Grid container className="fourthContentContainer">
        <Grid item xs={12}>
          <h3 className="geniuspyeHeading">
            <span className="spanText">Geniuspye </span>
            accelerates learning & <br /> delivers better results
          </h3>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card className="card1">
              <h3 className="adaptiveHeading">
                <span className="spanText">Adaptive Learning </span>
                <br /> for all students
              </h3>
              <p className="subContent">
                Geniuspye helps students practice questions that adapt to thier
                learning speed,making studying fatser, effective and more
                enriching.
              </p>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className="card2">
              <h3 className="adaptiveHeading">
                One stop solution <br /> for
                <span className="spanText"> Doubts</span>
              </h3>
              <p className="subContent">
                Built with artificial intelligence and tutors, Geniuspye Ask
                ensures instant doubt resolution,24x7.
              </p>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FourthContent;
