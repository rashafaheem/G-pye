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
        <Grid container>
          <Grid item xs={6} className="toolsGrid">
            <img className="toolImage" src={props.toolImage1} />
            <p className="toolName">{props.toolName1}</p>
          </Grid>
          <Grid item xs={6} className="toolsGrid">
            <img className="toolImage" src={props.toolImage2} />
            <p className="toolName">{props.toolName2}</p>
          </Grid>
          <Grid item xs={6} className="toolsGrid">
            <img className="toolImage" src={props.toolImage3} />
            <p className="toolName">{props.toolName3}</p>
          </Grid>
          <Grid item xs={6} className="toolsGrid">
            <img className="toolImage" src={props.toolImage4} />
            <p className="toolName">{props.toolName4}</p>
          </Grid>
          <Grid item xs={6} className="toolsGrid">
            <img className="toolImage" src={props.toolImage5} />
            <p className="toolName">{props.toolName5}</p>
          </Grid>
        </Grid>
        <div className="projectDiv">
          <h3 className="tools">PROJECTS</h3>
          <Grid item xs={12} className="">
            <p className="projects">{props.projects}</p>
          </Grid>
        </div>
        <Card className="offCard" elevation={0}>
          <p className="off">{props.off}</p>
        </Card>
        <br />
        <h2 className="amount">{props.amount}</h2>
        <h2 className="cutAmount">{props.cutAmount}</h2>
        <div className="classes">
          <p className="classCount">{props.classCount}</p>
          <p className="perPerson">{props.perPerson}</p>
        </div>
        <Grid item xs={12} className="joinCardButtonGrid">
          <button className="joinCardButton">Join Now</button>
        </Grid>
      </Card>
    </div>
  );
}

function FifthContent2() {
  return (
    <div>
      <Grid container className="fifthContainer">
        <Grid item xs={12} />
        <Grid item xs={12} md={4}>
          <AccountCards
            title="BASIC"
            heading="Introduction to Javascript"
            topics="Sequence,Algorithms,Debugging,Code Art"
            inclusive="Inclusive of topics covered in Design and Create"
            toolImage1="./Ellipse 21.png"
            toolName1="Code.org"
            toolImage2="./Ellipse 23.png"
            toolName2="Scratch"
            toolImage3="./Ellipse 22.png"
            toolName3="AppLab"
            projects="Code Story. Pocket-money manager. Soundboard Quiz app."
            off="8% OFF"
            amount="₹6,670"
            cutAmount="₹7,600"
            classCount="10 Classes"
            perPerson="₹800 per person"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccountCards
            title="STANDARD"
            heading="Create and Design"
            topics="Events , Characters, Interactive apps"
            inclusive="Inclusive of topics covered in Design and Create"
            toolImage1="./Ellipse 21.png"
            toolName1="Code.org"
            toolImage2="./Ellipse 23.png"
            toolName2="Scratch"
            toolImage3="./Ellipse 22.png"
            toolName3="AppLab"
            projects="Code Story. Pocket-money manager. Soundboard Quiz app ."
            off="14% OFF"
            amount="₹42,000"
            cutAmount="₹46,000"
            classCount="52 Classes"
            perPerson="₹767 per session"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AccountCards
            title="PREMIUM"
            heading="Web Development"
            topics="Multiscreen native utility apps,AI chatbots"
            inclusive="Inclusive of topics covered in Design and Create"
            toolImage1="./Ellipse 21.png"
            toolName1="Code.org"
            toolImage2="./Ellipse 23.png"
            toolName2="Scratch"
            toolImage3="./Ellipse 20.png"
            toolName3="GameLab"
            projects="Code Story. Pocket-money manager. Soundboard Quiz app."
            off="15% OFF"
            amount="₹100,000"
            cutAmount="₹110,000"
            classCount="165 Classes"
            perPerson="₹560 per session"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default FifthContent2;
