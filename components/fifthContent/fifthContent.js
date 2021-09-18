import { Card, Grid } from "@mui/material";

function AccountCards(props) {
  return (
    <div className="accountCardsDiv">
      <Card className="accountCards">
        <h3 className="title">{props.title}</h3>
        <h2 className="heading">{props.heading}</h2>
        <h3 className="topicsCovered">TOPICS COVERED</h3>
        <p className="topics">{props.topics}</p>
        <h4 className="inlusive">{props.inlusive}</h4>
        <h3>TOOLS</h3>
        <Grid item xs={6}>
          <img src={props.toolImage} />
          <p>{props.toolName}</p>
        </Grid>
        <h3>PROJECTS</h3>
        <p className="projects">{props.projects}</p>
      </Card>
    </div>
  );
}

function FifthContent() {
  return (
    <div>
      <Grid container className="fifthContainer">
        <Grid item md={7} className="classGrid">
          <Card className="classCard">
            <Grid item xs={12} md={4}>
              <button className="classesButton">CLASSES 1-4</button>
            </Grid>
            <Grid item xs={12} md={4}>
              <button className="classesButton">CLASSES 5-8</button>
            </Grid>
            <Grid item xs={12} md={4}>
              <button className="classesButton">CLASSES 9-12</button>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} md={4}>
          <AccountCards
            title="BASIC"
            heading="Introduction to Coding"
            topics="Sequence,Algorithms,Debugging,Code  Art,
          Animations"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FifthContent;
