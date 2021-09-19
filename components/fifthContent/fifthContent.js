import { Card, Grid } from "@mui/material";

function AccountCards(props) {
  return (
    <div className="accountCardsDiv">
      <Card className="accountCards">
        <h3 className="title">{props.title}</h3>
        <h2 className="heading">{props.heading}</h2>
        <h3 className="topicsCovered">TOPICS COVERED</h3>
        <p className="topics">{props.topics}</p>
        <h4 className="inclusive">{props.inclusive}</h4>
        <h3 className="tools">TOOLS</h3>
        <Grid item xs={6}>
          <img className="toolImage" src={props.toolImage1} />
          <p className="toolName">{props.toolName1}</p>
        </Grid>
        <Grid item xs={6}>
          <img className="toolImage" src={props.toolImage2} />
          <p className="toolName">{props.toolName2}</p>
        </Grid>
        <Grid item xs={6}>
          <img className="toolImage" src={props.toolImage3} />
          <p className="toolName">{props.toolName3}</p>
        </Grid>
        <h3 className="tools">PROJECTS</h3>
        <p className="projects">{props.projects}</p>
        <Card className="offCard">
          <p className="off">{props.off}</p>
        </Card>
        <h2 className="amount">{props.amount}</h2>
        <h2 className="cutAmount">{props.cutAmount}</h2>
        <p className="classCount">{props.classCount}</p>
        <p className="perPerson">{props.perPerson}</p>
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
            inclusive=""
            toolImage1="./Ellipse 21.png"
            toolName1="Code.org"
            toolImage2="./Ellipse 23.png"
            toolName2="Scratch"
            toolImage3="./Ellipse 22.png"
            toolName3="AppLab"
            projects=""
            offCard=""
            off=""
            amount=""
            cutAmount=""
            classCount=""
            perPerson=""
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FifthContent;
