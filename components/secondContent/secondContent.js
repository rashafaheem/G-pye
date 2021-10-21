import { Card, Grid } from "@mui/material";
import React from "react";
import SecondProps from "./secondProps.js";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function secondContent() {
  return (
    <div>
      <Grid container className="secondContentContainer">
        <Grid item xs={12}>
          <h3 className="superHeading">
            A super app with <span className="spanText">360°</span> approach to
            complete learning
          </h3>
        </Grid>
        <Grid container>
          <Grid xs={12} className="marketingCardGrid">
            <Card className="marketingCard">
              <Grid xs={12} md={3} className="marketingContentGrid">
                <SecondProps
                  miniImage="./Ellipse.png"
                  miniTitle="Online Lessons"
                  miniContent="Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem"
                />
              </Grid>
              <Grid xs={12} md={3} className="marketingContentGrid">
                <SecondProps
                  miniImage="./Ellipse 6.png"
                  miniTitle="Genius Test"
                  miniContent="Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem"
                />
              </Grid>
              <Grid xs={12} md={3} className="marketingContentGrid">
                <SecondProps
                  miniImage="./Ellipse 7.png"
                  miniTitle="Test & Analysis"
                  miniContent="Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem"
                />
              </Grid>
              <Grid xs={12} md={3} className="marketingContentGrid">
                <SecondProps
                  miniImage="./Ellipse 8.png"
                  miniTitle="Personalized Learning"
                  miniContent="Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem Lorem Ipsum Lorem Ipsum Lorem"
                />
              </Grid>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12} className="joinButtonGrid">
          <button className="joinButton">
            JOIN NOW
            <ArrowRightAltIcon className="arrowIcon" />
          </button>
        </Grid>
      </Grid>
    </div>
  );
}

export default secondContent;
