import { Grid, Card } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <Grid container className="footerGrid">
        <Grid item xs={6} md={2}>
          <h3 className="h3">QUICK LINKS</h3>
          <p className="Fsubtext">Ask</p>
          <p className="Fsubtext">Blog</p>
          <p className="Fsubtext">About us</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
        </Grid>
        <Grid item xs={6} md={2} className="subtextGrid2">
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
          <p className="Fsubtext">Lorem Ipsum</p>
        </Grid>
        <Grid item xs={12} md={4} className="subtextGrid2" />
        <Grid item xs={12} md={4} className="subtextGrid3">
          <p className="getLinkText">GET LINKS IN SMS TO DOWNLOAD APP</p>
          <Grid item xs={12} className="getLinkCardGrid">
            <Card className="getLinkCard">
              <button className="getLinkButton">GET LINK</button>
            </Card>
          </Grid>
          <p className="getLinkText">FIND US ON</p>
          <TwitterIcon className="socialIcons" />
          <FacebookIcon className="socialIcons" />
          <InstagramIcon className="socialIcons" />
          <Grid item xs={12} className="">
            <img className="storeImage" src="./playStore.png" />
            <img className="storeImage" src="./appStore.png" />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
