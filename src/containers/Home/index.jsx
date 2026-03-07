import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { DefaultApi } from "@jesse0michael/fetcher";
import Content from "../../components/Content";
import "./Home.css";

class Home extends Component {
  constructor(p) {
    super(p);
    this.state = {
      items: [],
      count: 20,
      fetched: false
    };
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);

    const twitterID    = 60887026;
    const instagramID  = 50957893;
    const bloggerID    = '2628647666607369284';
    const soundcloudID = '20560365';
    const swarmID      = 'jesse';
    const deviantartID = 'mini-michael/33242408';
    const untappdID    = undefined;
    const blueskyID    = 'jesse0x4d.bsky.social';

    var fetcher = new DefaultApi("https://fetcher-ho4joes5va-uw.a.run.app");
    fetcher.getFeed(twitterID, instagramID, bloggerID, soundcloudID, swarmID, deviantartID, untappdID, blueskyID)
      .then(r => {
        return this.setState({ items: r.body.items, fetched: true })
      })
  }

  isBottom(el) {
    if (el == null) {
      return false;
    }
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("homie");
    if (this.isBottom(wrappedElement)) {
      this.setState({ count: this.state.count + 20 });
    }
  };

  render() {
    return (
      <div className="home">
        {!this.state.fetched && <video muted="true" loop="true" autoPlay="true" playsinline="true" src="/pages/boxes/box.mp4" className="home-loading" />}
        <Grid id="homie" container className="home-grid">
          {this.state.items &&
            this.state.items.slice(0, this.state.count).map(function (item) {
              return (
                <div className="home-grid-item">
                  <Grid item>
                    <Content item={item} />
                  </Grid>
                </div>
              );
            })}
        </Grid>
      </div>
    );
  }
}

export default Home;
