import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "./Bio.css";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <Grid container className="bio-grid" spacing={16} justify="space-between">
          <Grid item>
            <Button variant="contained" className="bio-button" href="http://jesse0michael.blogspot.com/">
              <img src="/icons/blogger.svg" className="bio-img" alt=""/>
              <span className="bio-text">Blogger</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://www.deviantart.com/mini-michael/">
              <img src="/icons/deviantart.svg" className="bio-img" alt=""/>
              <span className="bio-text">Deviant Art</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="http://www.facebook.com/jesse0michael/">
              <img src="/icons/facebook.svg" className="bio-img" alt=""/>
              <span className="bio-text">Facebook</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://github.com/Jesse0Michael">
              <img src="/icons/github.svg" className="bio-img" alt=""/>
              <span className="bio-text">GitHub</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://www.instagram.com/jesse0michael/">
              <img src="/icons/instagram2.svg" className="bio-img" alt=""/>
              <span className="bio-text">Instagram</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://www.linkedin.com/in/jesse0michael/">
              <img src="/icons/linkedin.svg" className="bio-img" alt=""/>
              <span className="bio-text">Linked In</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://soundcloud.com/jesse0michael/">
              <img src="/icons/soundcloud.svg" className="bio-img" alt=""/>
              <span className="bio-text">Sound Cloud</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://steamcommunity.com/id/Jesse0Michael/">
              <img src="/icons/steam2.svg" className="bio-img" alt=""/>
              <span className="bio-text">Steam</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://twitter.com/Jesse0Michael/">
              <img src="/icons/twitter.svg" className="bio-img" alt=""/>
              <span className="bio-text">Twitter</span>
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className="bio-button"
              href="https://account.xbox.com/en-us/Profile?Gamertag=LoopedMichael/"
            >
              <img src="/icons/xbox.svg" className="bio-img" alt=""/>
              <span className="bio-text">Xbox</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="http://www.youtube.com/user/MiniMichael63/">
              <img src="/icons/youtube.svg" className="bio-img" alt=""/>
              <span className="bio-text">YouTube</span>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" className="bio-button" href="https://raineystreetgames.itch.io/">
              <img src="/icons/itch.png" className="bio-img" alt=""/>
              <span className="bio-text">Itch.io</span>
            </Button>
          </Grid>
        </Grid>
        <Card className="bio-card">
          <iframe
            title="resume"
            src="https://docs.google.com/document/d/1wkyLrtQeuoOCQ5AmR25te1_PJQm02bjJpBkdKS5o4pE/pub?embedded=true"
            className="bio-frame"
          />
        </Card>
      </div>
    );
  }
}

export default Bio;
