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

    var fetcher = new DefaultApi("https://jesse0michael-fetcher.herokuapp.com");
    fetcher.getFeed(60887026, 50957893, '2628647666607369284', '20560365', 'jesse', 'mini-michael/33242408')
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
