import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Content from "../../components/Content";
import "./Home.css";
import Fetcher from "./Fetcher";

const fetcher = new Fetcher();
class Home extends Component {
  constructor(p) {
    super(p);
    this.state = {
      items: [],
      count: 20
    };
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
    this.setState({ items: [] });
    fetcher.fetchBlogger().then(i => this.addItems(i));
    fetcher.fetchDeviantArt().then(i => this.addItems(i));
    fetcher.fetchInstagram().then(i => this.addItems(i));
    fetcher.fetchSoundCloud().then(i => this.addItems(i));
    fetcher.fetchSwarm().then(i => this.addItems(i));
    fetcher.fetchTwitter().then(i => this.addItems(i));
  }

  addItems(items) {
    this.setState({
      items: this.state.items.concat(items).sort(function(a, b) {
        return a.date < b.date ? 1 : b.date < a.date ? -1 : 0;
      })
    });
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
        <Grid id="homie" container className="home-grid">
          {this.state.items &&
            this.state.items.slice(0, this.state.count).map(function(item) {
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
